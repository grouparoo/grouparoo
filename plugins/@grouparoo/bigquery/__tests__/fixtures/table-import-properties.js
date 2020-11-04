const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1604090111888";

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
      "cb",
      "72",
      "82",
      "300040d17fc95a1ce49deea4ca0006548a40dc300c0d280881048ae8f4dfcb747d37f7bc4196e784f374a03569c107983309aef3f5a1134d652a3ea9440afc3d358f6c2efdadce85331a1b6f56ca1dfb6af549a990bde18d10a01f16202b0a5812431a9dced2d15521a4b1d68e50309df8aabbc9f12af98e4dfdfd0d65149bfed236b2a1856e1f86eae5e5b543846561a7f8873db322615f25bd37d65e313cb5d1d184dab22547349daabf8b54d1388607dce2016f83c2085120d3eb49bda469c12bf511e8062dd12bb3d18d686217d730cd2b5e821520cfeece084fef0b565e1657e05f9e0e734716be49324618f8fd03b69952ec18010000",
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
      "Fri, 30 Oct 2020 20:35:15 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1604090111888",
    },
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
      "db3014fd2b91f7086d1268da50a91aa58411a94d479ac2a6698a1cc7c90c495c6c87a942fdefbb7668074282a7d8bee7dc73ee479ed1036b723446192b1f5b2ab65fee79868e1155b884d7fac7c59db8e6dbdb8bf9e3d1f6e148b0ba716e26134030cd92b8de54b427792b0895e3f5aa5f0ade6eb0e0bc07897a6ecf1d3a03e7cc715dd7f77da0495a1573d63c00f98f521b39b6edbd74bfe4bcac28de30d927bc3ebcdb4f27f646f07b4a94b4df2ada2022ed0f35bf569c60c5783359af40bf9554a4b4c6ac0207ff897976fe36739fe1ba5f02f889118a09e16da3b42b48417853b0b215262b1a3f23e3f2d501ad8279304b2cc2abb66ed206d7f4d8cab1c2a9da6ea875152f1756185d2de3c534099751ba9a5d078b697fb69caf17d1cababb0ee2c05238aba8e15a13ebdcdc22b8807e4ea5628d514ff4b3567ee94ff87e289a00d29276c174e40cb1eb3b6759918d48e19f7a59e1d02cf3b391874f33879c0de820cf28069e11352cdcf086669e5b38b99312cff7d281ef8e529c0fbcf4c4f7b3e1a828dc5141d0ee18fd154cd14b26375cb2ae43e82e0e93204de275349b268129a1c06da52e3b63ba80d71e151408a00f6adae928e3a0a4db1d4649104f6749781b74139ed31293edea11665ce04a52406301cd53542c780e0d43d174115c02d84cecfb3e28d1f8d733d23dd72e5eb5fc404f6080daae325fb44ae230fa66ecec11b7b86a0de4a93be8320a5669d3bbdf008415ed92a09b7510ff44dd534c0b2a68433e1f26804de0b31f6dbff60085c50715a9e00e9b43a4d62082761bc44cb107b6373819220316ea5d6ce878fb9ee91c3a23ad69a35e0aead61eeaecc45a79004110861f995eedfe01cb0a40c074040000",
    ],
    [
      "ETag",
      "mXBWrHoyVBLq+yk+rimn0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1604090111888"
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
      "0002ff8d93614fdb301086ffcbed6b2a25ac2b21121f5ae84650684b1a346913aadcf8125c9c38d84e5155f5bfef1c58870652f892dc5d9e93ef3dbfd9c3a3a83944b016e5538b7af7a5447beb82144d2bada157a36a83e0015a56127925caeb74c897ece768c31667bfe260fd352ccfcf8930f903560ca23d1402253710fdde43cd2aa4b65cc9b6aa575de681dd35aeb8ccd278f683f24a7197cfee92643c49a670f08e8d9c59b6eaf84fb4dd1f3cd8a8758a056aac7374b3345a6d30b7b1936958d5481c18d5ea1c0d7470f7a1d4aa6d98566a409541300846fed03ff3832008c39038a9726685aa09bd5bd2786095653255cf2412821322741793e0a27b6ea92e7827c485f12c1b0dbbf9de0285d0c6beece42ff8aaed7f52b24f82740142f64125d61c751f259a15e35ca331bda4322bd634476c329f27ef205673ad04ef07b7a20790767b04be27f3f147ab25dbfcdbd5e5389bbe238c25331c912cbe992eb3f1cdc271f7aff73bd959340badc82b069d4d027f187e3b1df92fceb950ce4d744e64758b1ee48c7e802b61212a983478f803e93ffb905e030000",
    ],
    [
      "ETag",
      "HigJR4dSaW6jaP9ZI1b38g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN (?) GROUP BY `id`, `first_name`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbb2494980400889547559ca3ad434e90869554d53621bc3dc124c6dd329abf2df7781a60f556a3f01f79e73cfb90f1ed02d2f1234468467771593bb4f3782a00e621a6710b52691e59da860d13f27cb7f6703e2ed76d3ece80810bc6629bc2d73d655a29294a9f16ad9cba4a84a2c85e842a16ebf6b7b966b8d2cdbb67ddf079a62793ae3c52d90ff685daab1691ea47b991059ce70c9558f8aed53dcbcef9ba514378c6a65be5634414499ef6a1ee78262cd4571b45a827ea5985cb32de63938782626e4ebebca3d8eb7bd0cc0f79c324ca9a80a5dbb8212541429cf2ad95445e307d4b87cf18296c12c98c6c626e552e97581b76c636065acd792a92ad71d63c393c748796b7c8f16e7c6063a4c79ced4c6b8fa114481d162c2b9f1f9f88b711a2d5617c6b7eb26d87955180c254c695e3476624c72565b791c58f8764b35016bac589b5c0f2d0fdbbe35222919d2d4770624b518213e190eb0432c3a72999b108681a7ebea0d0b17a2e8a7b6638f1c7784070ef653c7277dc7f5bd619a7834b106ae832d88250eda77d05fc9353be1aa148ab7634357511807eb385acda7933868da48314ce7a4355737f1d2a7862601f44e5ffb3acb0528d53b08e771104da6717819b46b9fb10cd3ddf20e169fe25c3140630913d44c9e8b0486862e16cb300e17f3c90c18cd2e2f0e0885c6bf1e9e09f1ae6ca6ac9b67ade5b98dfe017089f3aa41dcb72fc846fbfd6f40c085b664f4731544d7a80d452c659215f4e3d501b8497cf49f1dae1ea070f7a0a2347cc39d50556b50c9da7be1dbc6dd81ed0d5c1b3560a9dfe43c7f78184c5da3aec8b6acd08f0db5570f7db662957a024112d63c0fe7a790fd0fa465851873040000",
    ],
    [
      "ETag",
      "0AR06DsEO2MbSzK5b6yyCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1604090111888"
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
      "d1",
      "6b",
      "c2",
      "30",
      "10",
      "c6ff97dba32db463880a3ee856b4206eab0ac21049ebd955db5e975c1511fff75de2607bd84b7277f97dc9f7e50ac7a2dec100d222ff6a515f1e72e4775b2468da928d6c0dd506c10364950b19bc4c291977d6ebb4dfedbe8e461de4b8731e0e8530d927560a0657d81758ee0c0c3eae50ab0a45b6dd6a77a3607c69ec64b14ce2f944fa8a76b69faf66b3d17816c1cdfba36a8ebf8a78be8c2651f29f6473f3e04069827bd45867684d349a0e98716cf319553525fa865a9da10107bb835c53db284de4cbc47ff4c36ef014f483300c7bbd9e7025658a0baa055d2dc41a30b12a133a4b3a0805d0ae94a07bb79e641ce9025d8a9363c4dce64737be309a374de2c1a07d3eb85b79266b8fc536eb163dc8947ce5b4e07b7ffb067c31d85ca7010000",
    ],
    [
      "ETag",
      "0DHoRB+XXb966OAA+etI+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7fc9d93aec426f045ab64198d84ae192092128942522ab9dfe7b9dbe3f783f8050caee773cf6dfac03af602392b1a7fb800b5059ca59692205f75ae842b2b4f17c6370f6cd335a5542502911861fc24d68273de9aec452cdf610d4e9e41d363b4cba50e87c0f7d48e7472a293c3dccdd4b7b3c8d728d6213c967e6bb2d72b125e7d525a076515e37eae5f594554e6c574cc369eee049797bf4ba1e7d9d86adcec5e3225c288fc220ae51304f225f83f779c55e2e36a25cea58084f51069d21771baa65d6b214255f3e1398b4fd584013ec005b7935b03bae9e5959358c1df89fe371e3ecd9878c0c6c00bf7f70ed16e518010000",
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
      "Fri, 30 Oct 2020 20:35:17 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1604090111888",
    },
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
      "fd2bc8fbda2490172452b446296dd912b211d2aa9b26648c616e01536cd27555fefbae4d93b5aad47ec2f63de79e731f3ca13b5626688a6296dd37b47efc74cb637482a8c419bcde5caffe54d645bde583f9e89c7dfd71fb77fce561360304532c818b2aa71dc19b9a5031dd6eba59cd9b0ad79c77205167d0b1c6e6d09c989665398e033441f374c9ca3b20ff96b212d35eef20ddcd38cf728a2b26ba8417c7f7deaedfab6a7e4b8914bdd78a3d1011bd77353fe79c60c97839db6e40bf11b48e6881590e0efe1393f8f475e62ec3453703f08e118a09e14d29952b48417899b2aca97556347d42dae58b03dab84b77111a84e74d5146252ee88991608923f95851e33c58af0ccf3f5f07ab79e8adfd68b3b87457f3ee62bddcaefc8d717de906ae21719c53cd3566c6a9bef97001fd840ac94aad1eaa67a5fcdc1fefed501401a4056d83916d8eb1e59893388d6d923a83519c9a348e9dd81ee1416c92c9900e939862e06951cdc2252f27fd3449ec7e1a8dadc9241a9a7d126107f7238b8e6cd3c6ce783c48d0fe043dd44cd233262a2e58db21741d78a11b85c1d65fcc43579790e2269767ad3155c04b8f120a04d03b35ed5594715052edf6fcd00de68bd0bb72db092f6986c9e3e61e669ce25c5040e31a9a2769bde209340cf9f3957b06603db16f87a040d39f4f48f55cb978d1f2233d84012abb527fd1260c3cff42db3920ae70de68c8ae3da83252962bd3fb5f0084156d93a0ef5b37b841ed5340535ad3927c3c4c00ebc0473fda61ed010a8b0f2a42c21d368708a5416ada6e10d3c51ed9f6c8ee230daee59b983db00f3d533954465ad0523e17d4ae3dd4d98a35e20882200cdfd7bd",
      "daff0354a1a2f874040000",
    ],
    [
      "ETag",
      "YWMxp1GrUo3A5FiKZjz6Jw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1604090111888"
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
      "00000002ff8d93614fdb301086ff8bf735d512d69512890fe92850296d699a4e4c13aa4c7c090627176ca7a854fdef9c032bd39814be247797e7e47bcf6f76ec41568285ec56168f0de8ed9702ecc2050998465943af1a2b03cc63607941e4f368f6f57cfaf3d7f5195c6ea255b238b285589c9e1261b23b28390b772c97a08461e1ef1dab7809d496a16aca6add661eb3dbda15976932995d505ea270f96c15c7d1281eb3bd776814dcf275cb7fa2ed66efb17bbc4d20070d55066e965ae33d6476e2641a5ed60a7a061b9d81612ddc7e28343635d7883daaf4bef58281dff74ffc200886c321710a336e255684ae96341eb368b94af08944b2e08808ddc624386f9f1baa4bd10a71e164960efaed7c7f03b9d4c6beeee40ff8a6ed5f52f14f827401527541055402741725eb35174283319d249a35afeb03369acfe30f10af844629bac18dec0094dd1c80f3781efd6fb5649bf75d9d45e9f803612c99e180a493e9789946d32bc7ddbcddef686bc15c6924af18703609fcfef0fbf1c07f75ce0f746ea27342ab1bf058c6e907b8949685395706f62f3f02020e5e030000",
    ],
    [
      "ETag",
      "zBN/FMVYXDeHvAURQ2tgdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN (?) GROUP BY `id`, `ltv`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535b4fa34014fe2b64f66537690b54686913e37a615d4c6d2da51a77b36987e180a3c02033d418d3ffbe07b05e62a24fc039dfe5dc7822773c8fc898843cb9afa07cfc762b42d221a06882d1e199adb353e78f3f7fb06e46c5fcfaea68f830dfdf4704af599266450a5d29aa92811c2f17bda41455414b21ba28d4b5bae6c0b08c91619aa6e338489390c6139edf21f946a9428e757d67dd4b844852a005973d26b297b8bee9eb45296e8129a9bf77d4d144ea9f7a1ea48251c545bebf5ca07f25a15c4146798a15bc12a3f0e77be51ea7592f41f08633a08c892a57755528c1441ef3a42a1b55327e224d956f5ec8c29db8c781b64ed566ad51a9ad5625c82a551d6dcda3e74871a7fdf267e7da1a5b8b790a72ad5dfd767d576b31de54fb7ef0433bf567cb0bede8ba09765a452c2102a978de1410d03085dafc7944dec7bdd404aaa88436b91a1a036a3ac6288cc3218b9d3d3b8c0d0843271cda742f34d8c8022b0a81224fd5ea0d8be62287d819454e1f6814d9cc8a62c7a621f40d3670cc3dca6c132c7b6499519f6c3be4a1e40a4eb82c84e4eda0c895ef05ee2af097d3e3c3c06dda88298ee5a42dae6ee26d9d0a9b44d0277d6deb2c17e8544fdd9b06ae7f781c78976ebbe80924943d2eee71d5314d25209a96340305e5b9887068e462b6f0026f363d9c20a3d9dec50e21c9f8efd32b21782c9a29abe6597b0dacc67f07b8a469d52036ed0b31c976fb0f1178932d99cc97ae7f4dda900f319490b3af5787e026f1d59fb5bb7384e2a5a38b54f88d77c264edc14a68ef85674d753bb633b04dd2804bf521e7d8a3dd606a8d5a1132c8d57343ed9d639fad59255f4098c4354fbde92966ff033455fc2b65040000",
    ],
    [
      "ETag",
      "7J5/cG8ZRQw4h9pQYWB7wQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1604090111888"
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
      "00000002ff6d90514fc23010c7bfcbf9e866568206487800838a1920135e34849471ccc1b61b6d37b210bebbd762a20fbeb4bdebefdffcae6738a4c5167ab049936385aab949d0cced21425d6546f35652a1113c402313268f759acd97a20c8bd7c9eda9a96713f5a14ffd3e133afec25c42ef0cbb14b3ad86dee7190a9923c7d66be55e64cc34a5ed3c85b3c182cb9cb6b69c2ec370300c4770f1fe84cac36f603c5d8c9e47d17f91d5c5833d6d22dca1c22246eb502ada636cc6763c2df332435f53a562d4e060779128aa4aa9887ceef86d5f3c04eda01b08213a9d0e7319c5d2a45430ba7c673530646416d1898703c18072479e73e7d69adbadfbee9d68b9396a47b1deea27396c0cea37456ca1d10a04579947b28286c58daad08358f25fbea4e65a5fbe01e10728dfa8010000",
    ],
    [
      "ETag",
      "qvilQU1pLnJM+wyvOMrZsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d07fc9591c46aa86de64ab944d4174e0c2b084218210c216d2e9bfd7e9fb83f703d23c47c3908c5d8d5af009d674276ff3ad4544e563c9056e85f5636e9124780df51c4661d5574e4b7d1c768db87bae4b984db577982677344656e9af0beb62bd8f9d2eef16819f1d7738067bad2b05acc81554e700ea462f415abf02d1f0ad7816b913482ae58f6f4925911df16368ba5a9cd85e2b2787275b78addd2f3ef38a622298f06b6ed8a3794b0a171bb4fc32bd4591afe82665d02e327d12c6a82aed54374f04de637c326ad2c0d66566743e810d408c608a8604bfb3d25e9637e07f9e8c2b41efbe82528a28f8fd03dabda20a18010000",
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
      "Fri, 30 Oct 2020 20:35:19 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6fda3014fd2b91f7710502e51190d08a20ddb291b085d0aa9aa6c83137c16d8869ecb07515ff7dd74e61ad2ab59f62fb9e73cfb98f3c923b5eacc988243cbbafa07cf8702b12724640d10c5fff543367f3f1caff76eb6d6ef6d5fcef57d87893f118115cb324ddee72684851950ce468b56c66a5a876b414a281891abd46bb6f77eda1dd6eb71dc7419a843c9df3e20ec91ba57672d46a1da59b9910590e74c7659389ede9bdb5efb476a5b805a664eba5620b4564eb4dcd4fb9605471518c574bd4af2494316c29cfd1c17fe23ab97899b9c9e9b6992178cf1950c6445528ed0a533051a43cab4a93958c1e8971f9ec4096eedc9d46161379b52de2826ee1cc5a534563f5b003eb325cf896175c2e427f12798b205e4ebfb8fea4395dcc577eb0b4aebfb8a16b299ae460b8d6d8ba30b7002fa8bf06a97861d423fdac959ffae3bd1e8a26a0b4843a180fec3e6d3bf6304993014b9df35e92da90244e32e8d1f3c466c32e74d70950e41951c3a285281ce80fd34ecf897bc314e2eeb0cfe224edf6631bba09b313e80cd6400e67e477c915ccb8dc09c9eb0e91ebd08bdc380a57c17412b9a6849456b99ad5c67401cf3d2a2c10416fd474d0512e5049b7db0b22379c4c23efcaad273c878cb287e53dce38a5b90444d3129ba7a0f405ba1c9160e2bb33049b897d3f062519fd7c24bae7dac5b3969fe8110e50db55e64b9651e8059f8d9d23e28ae69581eceb832e23e5b9367df885405cd13a09f9b172c31b523f85904209057b7f98083681f77eb4e3da2314171f55a4c23b6e0e935a8395506f1037c59ed8c341c7fca68a96ea55cce9d9c79ee91c3a236ca1504f05d56b8f75d662953c813088c30f4caf0eff0009dbfebf74040000",
    ],
    [
      "ETag",
      "xuD8h+VMKjIhYvuLzJehIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1604090111888"
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
      "a3",
      "40",
      "10",
      "c7",
      "bf",
      "cb",
      "dc2b4d406b45121fdab37adc61ab145fbc98666507babab0b8bbd4344dbfbbb3a8d59c97e00bcc0cbfc9ce7ff6cf161e45cd21827b513eb5a8373f4ab4d72e48d1b4d21a7a35aa36081ea06525917fe2d5f3c57ab562fab00ce3e220d5feedeff2f4940893afb062106da11028b981e8ef166a5621b5e54ab655bdec320feca671c54596c6b30bca2bc55d3ebb4992f12499c2cedb377266d9b2e3bfd176b7f3e041dda758a0c63a47374ba3d503e63676320dab1a8903a35a9da3810eee3e945ab50dd34a0da832381a04237fe89ff841108461489c5439b342d584de2c683cb0ca3299aa671209c10111ba8b4970d13dd75417bc13e2c278968d86dd7c9f814268635f77f20ebe69fb9794ec9b205d80907d50893547dd478966c938d7684c2fa9cc9235cd1e9bcce7c91788d55c2bc1fbc1b5e801a45def81f3643efedf6ac9361fbb3a1b67d32f84b164863d92c597d34536bebc72dcdddbfd4e3616cd9556e41583ce26813f0c8f8e47feab737e2ae7263a27b2ba450f72463fc02f61212a9834b87b01ded7bfc25e030000",
    ],
    [
      "ETag",
      "KIhwGvhhar3g8If2Rr0ZJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN (?) GROUP BY `id`, `ios_app`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1604090111888",
    },
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
      "00000002ff8553db6e9b4010fd15b47d69255fc0170c96a23471488ae4d829c649d3aab27797816e022c61975451947fef00762e8a943e0133e7cc3973e191dc8a3c2253c244725741f9f0e94632d221a06982d1684433f6f3f46ee58ae3d90f6f9024c7ae9d1c1c2042d42c45b32285ae9255c9414dd7ab5e52caaaa0a5945d2cd4b5bb966d8e4cd7b42ccb711ca42948e3b9c86f91fc47eb424dfbfdbd742f913249811642f5b8cc9ee3fdfb41bf28e50d70adfa6f15fb28a2fa1f6a1ea692532d647eb05ea17ea5a0dc4046458a0e5e8811fbfab6724fd0ac9720f85e70a09ccb2ad7b52b2cc1651e8ba42a9baa64fa481a97af5ec8ca9b7bb3d0d80aa936b428b60655c6665382aa52ddc170b48b14b7c669b03c37b6d85e2c52505be3ea9b1778468bf117c6e7c32fc659b05c5f18c7d74db0f35215ad44a0b4c81b23216529d42676a3f2dfefa726504d15b4c9cdc4b4a9e5982e8bd984c7ce70cc62131873d8644c87cce4ee084611038a3c5d576f5834973958b13572cd01e5311d538753d77646eec064d41d5a63c6c7961d8f9da1459e3ae46f29349c08554825da8191abc00fbd4d18ac17b3a3d06bda88298ee6a4355737f1daa7c62611f4415f4f75564854aaa7ef2f422f389a85fea5d72e7c0e09e50fab3b5c794c530588a625cd4043792e231c1ab958aefcd05f2e8ee6c868b678b1472832fdf5f842081f8a66caba79d65af6a8d1df032e695a3588fbf685e0149e7e23026fb32593ef6b2fb8266d2880184ac8f9ff5787e026f1bf3f6c7fef08c58b4715a5f11bef84ab5a8397d0de8bc81a773bf6c0742c9334e052bfcbb993e17e30758dba226490eb5d43edbd639fad58a59e4198c4352ffcc51966ff0161c2a5846d040000",
    ],
    [
      "ETag",
      "d4ambZFqS9iBCXE2ggB96g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1604090111888"
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
      "00000002ff6d90dd6bc23014c5ff97bbd7165a1cd2093ed851a650fce8e6c32622697bedaa6d6f96a46e22feefbb8983ed612ff938f99de49c5ce05877258c20afab8f1ed5f9ae42b3b28b0c75df18cd93a44e23788046544c66f9e06d5a2de5d731c4f8f594b7913e0c56e33113ba78c756c0e802fb1a9b52c36873814eb4c8b6dd4eb91b193367699578b14893c99c85964a2bccd7693a89d304aede1f9b3cfe5a66f397e429c9feb36caf1e1c28cf708f0abb026d0aa9e8808599d9825ab4b2415f53af0ad4e060775029eaa550443e2bfed00f87c17df0108461184511730d15c2d4d431ba7ee66860c88826a34fae072103ca2db9e9de8d27968dead1b5383986c36d7f7cf1d9a05e2ae20c1aedf3c12dca23d97886635baf0785e0bf9cd6e6b6bf7e03840bcfe2a8010000",
    ],
    [
      "ETag",
      "Rb3ZHgPpxk1eBYvbm8sj3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfc97282300000d07fc9591c7181d29b5a84601ba486f5c2604c64932dec9dfe7b9dbe3f783f202284721eb665460bf00ea668ad2cc9f25cad0edb813133879094ba557577298dcd7c7db61567b7c52888551b2bb1ec85d7e0c91961f5e9d4afbe3cab10d8bef1c6468b2ca974c78b3004aa3cef65a315e547ef52c19d44947f4ef8225ee32a0d0bd157495bcdc763f0f8c62e0a70c7d35883584a34035bbe896703b2ae9042f8d627deb0b1799da5c81168ede96a4a7bd94150749098c2299f23dbbadf6c7e44be2130bd8b8d36a30926cdf3367c781658003a5649437998bcb29b9da22cc0ff3c6ca78abefa071a35b401bf7fac797fdb18010000",
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
      "Fri, 30 Oct 2020 20:35:21 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1604090111888",
    },
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
      "0002ff85535d6fda3014fd2b91f75a20a1401224b4221a281384358476d53445b67132b7494c63a71dabf8efbb764ad7aa52fb14dbf79c7bcefdc813bae3e5160d11e1d97dcdaafd975b41d009620a67f05accfeceb21f97f19fd9f49b2af7374eed4eb3c7d108105cb3242e76396b49515794c9e166ddce2a51ef7025440b12b5dc9633b07bb66f3b8ee3791ed024cbd3052fef80fc5ba99d1c763a47e97626449633bce3b24d45f1f2de79e8767695b86554c9ce5bc50e88c8ce879a5f7341b1e2a21c6dd6a05f4b5625acc03c0707ff895b72f636739be3a29d01f8815386291575a9b42b48414599f2acae4c56347c42c6e5ab035a078b60125b54e4755126252ed889b5c50a276abf63d6345a2dad79385d45cb713c5f85c97a72112cc7edc96ab159866bebfa2288024b619233c3b546d699b9857001fd2d938a97463dd6cf5af9b93ff3f743d1049096ac0926ae3dc08e67fb24252e4dbdd33e496d468847dc3e3e2536f57bacb7250c03cf881a162e45e96297307fd04fbc94e2a4d775ba893748eda44b5287f4b73d9fbaa7e870821e2baed839973b2179d321741dcde32089a34d3819c7812921c575aece1b63ba80d71e151408a00f6a3ae82817a0a4db3d0fe3201a4fe2f955d04c78c1324cf7eb7b98718a73c9008d2b689e62d5526ca161281c2f8373009b897d3f06251afe7c42bae7dac5ab96bfd06318a0b6abcc17ade3681ece8c9d23e20ae7b5813c34075d46ca736dfaf00b80b0a24d1274b909a21bd43c452c65152be9e7c304b0097cf6a31dd71ea0b0f8a02215dc6173a8d41ab462cd067153ec91dd755cbf8b0cb852ef627ecf3bf64ce7d01959c14af55c50b3f650672356cb17100461f8a1e9d5e11fd74b114c74040000",
    ],
    [
      "ETag",
      "mGzGgXQTxGFJtnyY1u7Fgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1604090111888"
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
      "93516fda3010c7bf8bf71ab464629046e20136daa1a540213c4d1532f12575ebf852dba14288efde73dad16a9d94be247797dfc9f73fff73640f520b96b09d2c1f1b30872f25b81b1facc036ca597ad5a82db08081e325916ab7fc6dbe0ea6c3f84e840fb8b7bac9364fa3111136bf838ab3e4c80a094a5896fc3932cd2ba0b61c5553e96d9b05cc1d6a5f5c67abd9fc8af20a85cfe79b341d4fd2293b05e746c11ddfb6fc27da6e4f01bbc7dd0a0a30a073f0b3d406ef2177332fd3f2aa56d0b3d8981c2c6be1f64369b0a9b941ec51a537ec4583b01f5e845114c5714c9cc29c3b899ad0cd9ac6630e1d572b7c22912cfa46846963125cb4cf3dd5a56885f87036cf06fd76bef740218d752f3bf90bbe6afb9754fc93205d80545d50095a80e9a264bde54218b0b69344bbe5757dc6268b45fa01e25a1894a21bdccb0e40b9fd19b84c17e3ffad966cf3b6ab9fe36cfa81b08ecc7046b2d9f5749d8daf979ebb7dbddfc9c1815d1a24af58f03689c27efc7d38085f9cf303bd9be89cc49906029673fa017e49c792822b0ba767c7b8388c5e030000",
    ],
    [
      "ETag",
      "lbPKr/6E78hd0kovsnuTUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN (?) GROUP BY `id`, `date`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1604090111888",
    },
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
      "ff",
      "4f9b4014ff57c8ed972d690bd416ae4d8c73ca1c496d95d21ab32ced1d3cd829e5903bba38d3ff7d0f68a7c6447f02defb7c79df7822f7228fc99870913e54503e7eba939c7408689662342c97dbc9f2efc2a4c9742967457feb3937d7c7c78810354bb14d914157c9aa8c408d17f35e5acaaa60a5945d14ead2aeed58036b64d9b64d29459a822c9988fc1ec9bfb52ed4d8340fd6bd54ca34035608d58be4e67fdcdcf6cda29477106965be7634d14499ef7a9e6432625ac8fc783147ff4a41b9820d131956f04c8cf9d7d7ca3dc136bd14c15b11018b2259e5baae0a2522992722adca46958c9f4853e58b1732f726de5968ac63a6616d3065ac5625a82ad31d632de27da4b837be07b34b638dbd252203b5366e7e788167b4187f6a7c3ef9625c04b3c595f1edb60976f69258440c4a8bbc2921643c83da7e3f24ffed666a02d34c419b5cb996c36c6a8d78c2dd28a147439e58c039e5ee901d712b1a0d60107360c8d3b57ac362b9cc5d600c49f168685370dc7ee2ba94da74e8587c4069ecc63088fa9c73b2eb903fa5d0702e5421956847456e023ff45661b0989e9d865ed346c2702ee76d7175132febd4d82482dee96b57678544a77aeefe34f482d3b3d05f7aedaa2790b2e871fe80cb4e58a600d1ac641bd0505eca188746ae66733ff467d3d309329afd5d1d108a8c7f3e3d13c2c7a299b26e9eb5973368fc0f8025cbaa06b16d5f884d76bb5f88c0ab6cc9e47ae105b7a40d0590400979f4f1ea10dc243efab70e978e50bc7574511abff14e22557b4425b4f722364d757b76bfef5a3669c0a57e93a3cee830985aa356840de47adf507be9d8676b56a9ff204ce29aa7fef402b3ff005e0976fd67040000",
    ],
    [
      "ETag",
      "TrVvLVzU/8fNVoOp2vE6WQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1604090111888"
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
      "6b",
      "c23010c7bfcbedb58554b6d1093ee8565c4564561d8c2192d6b356db5e97a44e11bfbb9738d81ef692e42ebf7ff85dceb02fea3574212df2af16d5e92e4733b58704755b1acd5b43b546f0008dcc99cceb61797cdfcee2f8583ca4e1e8633a3a6efbbd1e133adb6225a17b864d81e55a43f7f30cb5ac9063ab95722f32664e8dedbcf4e7115715ad6d35598cc7fdc138828bf727d3ec7ff978328f8651f25f6479f1604769821b54586768151a453bcc4c6ca7d3b26a4af435b52a430d0e7617b9a2b6918ac8e78e1ffac1a3b8174f220882300c992b2993a6a09ad1c58cd5c090916542df3c1b040c2877e431376e3d70bb233ac2171d5f046e9683235971f9931e9c0cea37456ca2d14a889bd0335949c3f246b5e84126f93b5f0b73ab2f578b554167ab010000",
    ],
    [
      "ETag",
      "gnGlxVhSIIxi5b8JYQJxhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb64ad0ec4909aee1aaa522120a8886c3231c656fc900194a49ddebd4edf0dde0f1052aab6e55d7d5637f00aac80642447a17628ea25ec7482bf73466cdd878de365cbfb83ddc956660a3a9856ccc71f1a6e36c8d2d87517e86b8acfdddce2cde73ace877e44f69ec9c7cb9d381c11ec853f4c4295c2f8ed7dc55e88b12cbdf5f7ebcaa5b5900f9e6c4917263e6e27ee4a5bde227a6d757c9c5597cee4939d2ce8c3f29e1ac2a3ba8ab2cbb998b1fd154d6910995c60332fcb32581cd78d13bb13eac9b43c55079f467161202b5090a7600094d1a746b5fcf4cc8e3d4206e07fce3babd5b34f956854037eff00f98b8fcd18010000",
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
      "Fri, 30 Oct 2020 20:35:23 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553614fdb3010fd2b91f795b649296d52a91a551b46a7361d490adaa62972dc4b30a471889d4e08f5bfefec500642824f897defddbb7b777e22f7bcdc92314979fed040fdf8e54ea4e48480a239de6ebeefe960da5c0c6030a70fd1afda19dc3657930922b86649baab0ae848d1d40ce4781375f35a3415ad85e860a28ed77186f6c0f66cc7715cd7459a84225bf2f21ec9b74a5572dceb1da5bbb9107901b4e2b2cbc4eee5beb7eff7aa5adc0153b2f756b18722b2f7a1e6d74230aab828279b08f51b0975023bca0bace03f719b9ebfcddce574d7cd11bce70c2863a22995ae0a533051663c6f6a93958c9f88a9f2d50f89fca53f8b2d268a66572625ddc189b5a58a26eab102eb225cafac4570b10e57d378b10e926876e9afa6ddd97ab95905917573e987bea5685a80e15a13ebdc9c023ca0fe16a4e2a5518ff5b5567ef667f17e289a80d212da6032b287d4716d2fcdd211cbdcd3b334b3214ddd7474464f539b7938eb6d0a147946d4b06829cad4765d70b65ee278364b06ee90256e7fe425d01f0ece1c3aeca7ae470e27e46fcd15ccb9ac84e4ad43e4265cc47e12879b60368d7dd342469b42cddbc27403af6b54d820823ee8e9a0a35ca092b67b11c47e389dc58b6bbf9df01272ca1ea3079c71460b0988a6359aa7a05e892d1a4682e9ca9f23d84cecc73128c9f8f713d19eeb2a5e59fe428f7180ba5c65be248ac345f0cd9473445cd3a231907dfba3dbc878a18b3efc4120ae689b845c6dfcf02769af42c8a086927d3e4c049bc0670fedb8f6fa15475a452a3ce3e630a935580ded0671d3ec91dd3f1d0dcd3355b456ef625edf397aa673e88cb083523d37d4ae3df6d98a35f20584411c7e60bc3afc0305e7c54974040000",
    ],
    [
      "ETag",
      "UJva4AuF4e4DaqSZr14huQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93516f9b3010c7bfcbed954850a52945ea03595917892619a14f531539f8a0ee8ccd6c93298af2dd7ba65d36ad93e80bbeb37f27dffffce7083f84e290c04e343f7b34874f0dba6f3e28d0f6d2595a3aad2c4200e85843a488b35d58bbec727dd53717f5f2563855a4373744d8ea095b06c9116a81925b48be1f41b116a9acd2b26fd576c8027087ce6f6eca62b1bca3bcd5dce7cb873c4fe77906a7e05cc89963db81ff40d9e3298067bd2bb04683aa42df4b67f433566ee1655ad676122756f7a6420b033c1c3446f71d335a4f6867723d8966e134bc0ea3288ae39838a92be68456843e6ca83d70da3159e85f2412a20b22cc1093e07af8eefda8f820c4878b65399b0efdfd0dd4c258f73a93dfe09bb67f49c93e08d20308390635a8389a314a745bc6b9416b47496db7acebced87cb5cadf414c71a3051f07f76204906e7f06bee4abf47fa325dbfc99d56d5a66ef08ebc80c67a45cdc679b32bd5f7beef1ed7de70787766d3479c5a2b749144ee3cbab59f8ea9ccfdabb89ee499ce931808ad10ff05538486a262d9e5e002d17997e5e030000",
    ],
    [
      "ETag",
      "i8Eb0ftE5P7ug2fNDitnRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN (?) GROUP BY `id`, `stamp`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553db6e9b4010fd15b47d6925db80e30b588a5237a1099263a718278aaaca5e96816e022cd95d525991ffbd03d8b9b452f2c46ae69c39672e3c917b5ec46442229e3e5420b79fee44443a04344d31aa6e326b36f6ce2f78bc8d937e18adae476c7a7c8c085eb314cdcb0cba4a5492819aac96bd548aaaa452882e16eada56d71e5903cbb56cdb761c07790ab264c68b7b64ffd6ba5413d33c68f75221d20c68c9558f89fc396e3ef6cd528a3b605a996f254d5451e6fba22799605473511caf9668a05220d790539ea18517661c7d7d5bbac769de4b11fcc81950c64455e8da169660a248785ac9a62a993c91c6e6ab07597a33ef3434364a63cd8d4195b15e4b5055a63bc686c7fb48796f7c0f1697c606bb4b78066a63dc5c788167b4187f6e7c3ef9629c078bd595f1edb609760e35d1460c4af3a23111d22883dac07e4efeffdba9095453056d723db646d4762c374aa2314b9ca361945810454e341ed2a3c862ee000671041479baaedeb068210a66034da86345ae4d29b31260cc4dc6ce60485dc74d2c6b3876fb600d4764d7217f24d770c65529146f87456e023ff4d661b09a9f4e43af6923a13898b3d65cddc46b9f1a9b44d03b7dedea2c17a8544fde9f875e303d0dfd6baf5df60c52cab6cb075c7742330588a692e6a0415e8a188746ae164b3ff417f3e90c19cd06af0e0845263f9f5e08e1b66ca6ac9b6fad351a34fa07c035cdaa06f1d83e884d76bb5f88c0c36cc9e4c7ca0b6e491b0a20010905fb7875086e121ffe5f8763472c9e3bcae0b9688e87c2542dc224b407c3f3c6de9edd1fb84e9f3460a9ffcd0d6db77f984c5da3ae0839147adf517becd8682b56a967102671cf737f7e8ed9bf316da3956c040000",
    ],
    [
      "ETag",
      "sWl0L7EGHidydf2TbUV6cA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1604090111888"
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
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "bf4b7ddd748dcc6c243ca059940410c6d0184348d9eec660dbad6d8712c277f77698e8832ffd737acecdeff4c4f66593b13edb94c5470bea78558099db430cbaad8ca64d62a381390c8c28c8797b534fdf3293bf2698cb67f9825fdb833f1f0cc8a1d32dd482f54f2c2fa1ca34ebbf9f58236aa0d87aadba89643347699564348916c9703223a9c6cc4ad3e5783cbc1f47ececfc09cafd6f68344da2c728fe2fb23a3b6c879b187250d0a46039a4c21da466642b6a51cb0a5c8dad4a41b3cedc3d140a5b2914a24b8acb3d97df793d2ff438e7411090b1c25498121bf22e17c4c60c1a51c5f8490d192783ea8e5436efd68395affdc0f3fd9087bd28ecfa74aac55cfd0cb83f1ad0338544a3c1827817a807b4a0860a18d582c35241fffa549acbfdfc0d5b659600b4010000",
    ],
    [
      "ETag",
      "3/mNYdtfWTofpOpVoxhv5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cd",
      "72",
      "43",
      "40",
      "00",
      "00",
      "e0",
      "77d97364123fab7a431a1a1a82d4d6c5f8d9264158bbc6a2d377afe9f93b7d3f202b0acc583a74356ec12b983351db165b87ec0c99e330b04f569387c81f5afc65f5632d048510393dabc4cb782d51200d45049716724a9bef1b526ea7a955e62b72a913d90741677398547646eda124bcbe77be6574e7772c8c1e7ef3ca3449e35139ea0afc1019918bbcf3ace35ebdeb6ecf651e422e9d4db42c1795d55d84ca66ef89ba40d4dc93d014a02886cf6865bf7bb102870a26c9c854c3e4d3c2a574e04f38996302cba4ad2a31d676ae0e36004fe441314b1f6b5652346d03fee7e93013bcf60d9c514cc1ef1fca1f558318010000",
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
      "Fri, 30 Oct 2020 20:35:25 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1604090111888",
    },
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
      "c87b5c9340420244aad628a56ba4847484b49aa6091973616e094eb1e95455f9efbb364dd76e52fb84ed7bce3de77ef044ee789d9329c97879df42f3f8e95664e48480a225be0e2fbc7a1eb1d9fd168261b972279fedab65797a8a08ae5992eef615f4a4681b0672baddf4cb46b47bda08d1c3443dc7e93913dbb503db711cdff79127a12a96bcbe43f62fa5f6723a181cb5fba510650574cf659f89ddcbfbe06138d837e216989283b79203549183f745bf548251c5457dbadda081564293c28ef20a2dfc65e6d9d9dbd47d4e77fd12c10f9c01654cb4b5d2b630051375c1cbb63159c9f489189baf0e64132ec379623151b5bb3aade90e4eac9c2a9aaac73d5817f17a652da28b75bc9a258b75946ee697e16ad69faf97db55b4b16e2ec338b414cd2a305cebd43a33b7082fa89f8354bc36ea897ed6cacf0d5afc3f164d4069095d30f5ec09757c3bc88acc63853f1a67850d59e667de988e329b052eb87906147946d4b0682d6ac71f4ff271304e3d37775317865e9af9239a063467b637b25dcf1f93c309f9dd7005e75cee85e45d87c84dbc48c23489b7d17c9684a68482b6953aef8ce9025e7b54582082dea9e9a0a35ca0926ef7224ac278364f16d76137e12594943d6eee71c605ad24209a36d83c05cd4ae4d83012cd56e13982cdc4ae8e4149a63f9e88eeb976f1aae52ff40407a8ed2af3259b245e445f8d9d23e29a56ad813c74075d46c12b6dfaf01381b8a35d12f26d1bc6df49f71443010dd4ece36122d8043efcd58e7b8f58dc7c94910aefb83a4c6a11d640b742dc547b640fc741e010036ed4bfb189e3dac7a6e91c",
      "3a23eca056cf15757b8f857662ad7c016110a71f99661dfe003fc8434877040000",
    ],
    [
      "ETag",
      "2F7nCNcAqUe92gM46+0PLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1604090111888"
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
      "8d93516fd33010c7bfcbf19a4ac9564a1a690f2914a8c8dad1662f4c53e5c597e0e1d8c6760aa5ea77e79c8d0e31a4ec25b9bbfc4ebefff99f037c138a430677a2f9dea1ddbf6ad07f0ec11a5d27bda397d1ca2144809e3544eecea6e79fd2b630ead7cf322d36d3f997f1797e714184abbe62cb203b402d507207d9cd01146b91da2a2dbb566dfb2c02bf37a1b829d78be507ca5bcd43bebc2e8a7c56cce1189d1a39f36cdbf32f68bb3d4670afefd658a345556198c5587d8f955f04998eb546e2c8e9ce56e8a087fb0f8dd59d6156eb11554649324a26f1389ec64992a4694aa0d415f3422b62af37341f78ed995ceb1fa4129233226c1f93e2ba7feea82e78af24848b653919f703fe0dd4c23affb0943fe0a3b87f49c95e08d20d08390435a838da214a982de3dca27383a4765b66cc099bad56c53388296eb5e0c3e04e0c00d2ef4ec0fb6295ff6fb5e49ba75dbdcbcbf933c27972c309291797f34d995f5e05eef6f17e677b8feeca6a328bc3e093241ea7afdf4ce207ebbcd5c14e744ee66d8711548cfe808fc2435633e9f0f81bd7bb99e35f030000",
    ],
    [
      "ETag",
      "v293K8mLpnzxT8LS9EZ43A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN (?) GROUP BY `email`, `first_name`",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: ["ejervois0@example.com"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1604090111888",
    },
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
      "da",
      "40",
      "10",
      "fd",
      "156bfbd2aa5c6cc06090a284264eea8a003526515255b05e8fdd25c6eb78d769d3887fef781d7251a5e4093373ce9c33977d20373c8bc888843cb92da1b8ffb0112169105034c1a8fcf6d93cbd9cf6e6d2ceadeb8dfbf7fa542ec6070788e0154bd26d9e42538ab2602047cb452b294499d3428826166a5a9da6d5377be6d0b42ccb711ce44948e309cf6e90fd4ba95c8edaedbd762b11224981e65cb698d83ec5db779d765e880d3025dbaf25dba822db6f8b1ea68251c54576b05ca0815242b1822de5295a786646e1d1ebd22d4eb7ad04c1779c01654c9499aa6c610926b2982765a1ab92d103d1365f7c90853b718f03631df342aa5546b7b036a83456ab026499aa86b1d60e1e83f98d71eacfce8d357619f314e4dab8fceafaaef104f3a6c6c7c34fc6993f5bce8d2f57fb78e395023a8b402a9e695f010d53a83c3d8ecefb7f6115812a2aa14eae06669f5a8e390ce370c062a76b87b10961e884039b7643930d7bd08b42a0c8535575cda299c8980d5d0ad680f5878ecde26edfe95951e444b6cd6827ee0ee920ec5a21c464d720bf0baee084cb5c485ecf8f5cfa5ee0ae027f393d1e07ae6e23a638a693da5cd5c44b9f0a9b44d01b7dedaa2c17a8542dc39b06ae3f3e0ebc0bb7deff0412caee17b77801314d25209a16384105c5b9887068643e5b7881379b8e27c8d04b9def11928c7e3c3c1382fb5c4f59e95fb2087c6f7aa60dec1117342d35e4aefe20b0c1a3125c9a47f047fbd667b5dbfd44161e705d917c5fbafe15a9433ec45040c6dedf278275e2dd77b87f1488c567813252e17fbc1e262b1156407d457c5b99d9b33b03d3ec100d2ed4",
      "7fb98ee5ecc755d5a82ac21632f5d851fd28b0d15aac944f204ce2f2a77a72bb7f3ca9a70a94040000",
    ],
    [
      "ETag",
      "sJ+0FWN4Ps5p1ZjEzZFsSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d90d16bc23010c6ff97db6b3b5a19530bc2e6101544b63ac76088c4f4dab536bd9aa44e11fff75db23dec712fc9dde5f71ddf970beccb268304766571e8509f6f0ab42fae48d174b5357cb5d4188400d08a82c9e9bb3459df487ac37ea556ea8487ddec713462c2c84f5402920be425d69981e4e3028d50c8b2ed56fb8d8cd973eb26abd774be9c72af2873fd72bd583c8e1713b8067f54edfe3f8acd35808a7629e6a8b191e83cb49a2a9476eee219a1da1a43439d9668c0c3fea1d0d4b54213853c09e35e18df4777d1308ae378301830589314b6a486d9f58aad81252bea94be381dc40c685f72d0dc9f471e4f74893e856bb0427da4d2440f78f22e6e2529e778f3bb6b7cb6689e35b13183ce536f38fc71f8448eb79cc6ea0e0390823f78565a4872511bbc7e0393cbdcadbe010000",
    ],
    [
      "ETag",
      "GXcsd7scoVe7jmSmxeqbHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcf4b7282300000d0bb646d1ce453487722d811a4227450d864280988540849d0d04eef5ea7ef06ef0794554585c072e8680f5ec15cea68592d43a6b9e68364b743276b645dfdce32885f3bf1d4c2c69e5523ac8967c7ed7c77b86ea0dc30436fec4afc19dba3b86af1b819c331da1a24ffd0afb759913ca1411fa59411cfdceceeb6ae6e4dfce691f3c3f4dd3c99b04ae9169e9a21082f04460222c5f3979a30ad7d2fbe58223dbcf79d60857a34ae73e91054589770ee03654861f3423f99b0cbfcd550b1d6c2056da0b74ee5be3e87f2f0f8f677705da547b00054b1965381db67d6b0105a80ff399633a3cfbe4b4b4e39f8fd03d643dea918010000",
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
      "Fri, 30 Oct 2020 20:35:28 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-13-1604090111888",
    },
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
      "fbda2450d20422456b94d03652423620adba6942c6b930b70467d8747d28ff7dd7a6e95a556a3f61fb9e73cfb90f9ec82daf366444325efc69a07ef8722332724440d1025fe9fdf5a378bc77fdf8fce247754393c9ed6036198f11c1354bd2edae848e144dcd408ed671b7a845b3a3b5101d4cd471dc8e33b0fbb66f3b8ee3791ef22494f98257b7c8feadd44e8e7abd8376b710a22881eeb8ec32b17d79efdd1df776b5b801a664efad640f5564ef63d1afa5605471518dd7311a6824d4296c292fd1c27fe6263b7d9bbacbe9b65b20f88e33a08c89a652da16a660a2ca79d1d4262b193d1163f3d581c4c1229826161365b3add28a6ee1c8da504553f5b003eb2c5a2dad7978b68a969364be0ad3787a112c27dde96ab15e86b17575114481a5685682e15a63ebd4dc42bca0fe06a4e295514ff4b3567e6ed0fcfd583401a525b4c174680fa8e3d97e966743967bee4996db90655e363ca16e6633bf0ffd4d06147946d4b068252adb1bb89ee7f8a963bb6eda870da47edf7752e6fab97dc298c3329fec8fc8df9a2b9871b91392b71d2257d13c09d2245a87d34912981272da946ad61ad305bcf6a8b040047d50d35e47b94025ddee799804d1649acc2f8376c20b28287b88ffe08c735a4a4034adb1790aeaa5d860c34838590633049b897d3b042519fd7c22bae7dac5ab96bfd0131ca0b6abcc97c449340fcf8d9d03e292968d81dcb5075d46ce4b6d7aff0b81b8a36d12f27d1d44d7a47d8a20871a2af6f930116c029ffe6a87bd472c6e3eca4885775c1d26b508aba15d216eaa3db08f",
      "bd63d721065cab7731b73f3c344de7d019610b957aaea8dd7b2cb4156be40b088338fdd0346bff0fcff2926677040000",
    ],
    [
      "ETag",
      "axYzozx39SGHZnjaTAk6DA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1604090111888"
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
      "0000000002ff8d93dd6eda401085df657b6b24bba5945aca0550da22399080b98a105abc6377e9dab3d91f228478f7cc3a2989924ace8d3d33fe463b67f6f8c4feca46b094ed6475efc11c3f55e06e43b004eb95b3f4d2d858601103c72b22c17bb1bbf53a31f61ebdee5793f57efe707545842dfe40cd597a62a504252c4bef4eace135505b81cad7cdb6cd22e68e3a1457f97236ff45798d22e4f375968dc6d9949da34ba3e08e6f5bfe036d9b73c4f6b85b4209069a02c22cdae01e0a370b322dafb5829e456f0ab0ac85db0f95212ddc20f6a8d24bbef49241dc8fbfc749920c8743021516dc496c885daf683ee6d071b5c40752c992cf44983626c565fb3c505d8a56490867f37cd06f077c0d94d258f7b4947fe0b3b8b7a4e21f04e906a4ea822a6804982e4aea2d17c280b59d24da2dd7fa828d178bec1dc41b61508a6ef0203b00e50e17e067b618fd6fb5e49b975dfd18e5d3778475e4860b92cfaea7ab7c747d13b8cdf3fd8e8f0eec8d41328b85e09324ee0fbf7e1bc44fd69960b0139d933ae3216205a73fe0b7742c2db9b2707e04afcbf7815f030000",
    ],
    [
      "ETag",
      "euudbQup1rsqoup4gCUjNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN (?) GROUP BY `email`, `ltv`",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: ["ejervois0@example.com"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1604090111888",
    },
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
      "02ff8553db6eda4010fd156bfbd24a5c6cae06294a2871a91502d498446955c17a19bb0bc6eb78d73469c4bf77bc0eb92852f2849939e7cc99cb3e902d4fd6a44f021edde690dd7fda88805408281a61349cf8c3d620fb79b1d9fcdb6cef46a3ed4c5e44272788e0054bd25d1a43558a3c6320fb8b792dca449ed24c882a0a55ad56d5ea982db3675a9665db36f224c4e198275b64ff512a95fd7afd58bb160911c540532e6b4cec9ee2f57da39e6662034cc9faeb9275ac22ebef173d8d05a38a8be464314703b9846c093bca63b4f0cc5c0767afa56b9cee6a1182f79c01654ce4892a6ca1041349c8a33cd3aaa4ff40b4cd171f64ee8c9da16fac62b55f19541acb6506328f55c558e9d28fc1746b7cf3a697c60adb0b790c72655c7f773cc77882b913e3f3e91763e44d1733e3ebcd315e29a5d1cb1aa4e28976e2d32086c2c5e3b0dcb72b2a085451096572d9353bd4b2cd5e10065d16dacd76109a100476d06dd36660b25e0b5aeb0028f254a1ae59341109b499d9346933ec05ed66370cc2861db4d6ac6935edde9ab53115b45b56a7470e15f237e30aceb94c85e4e5c4c8b5e7faced2f71693e1c077741b21c5f99c97e68a265efa54d82482dee9eb5064b9c04ac5f8dd89ef7883a1ef5e39e5c6c71051763fbfc59d87349680689ad11d28c82ec51a874666d3b9ebbbd3c9608c0cbdc6d9112149ffd7c333c1bf4ff59495fe2573df7327236de088b8a271ae21fbf283c006cf4870699ec19df6ad0fe970f88d2c3cd95291fc5838de0d29431e849041c23ede278275e2c397777c0688c5878065a4c2ff783d4c16455806e515f15d61e6c86ef41aa6453438536f72cd8e7d1c57a15128c20e12f5d851f90cb0d1b2582e9f4098c4e54ff4e40eff0152cba1af86040000",
    ],
    [
      "ETag",
      "fNTC4ArZKjjzjkxGGkPsKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1604090111888"
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
      "61",
      "4f",
      "c2",
      "30",
      "10",
      "86",
      "ffcbf975231b0281252482412459500718134348d96e73b0ed66db8148f8ef5eab897ef04b7b777ddecbfbf60cfbbc4a20806d9ebd37284f5719ea275344a89a422bbe6aaa148203a845c6e43c79c93294cfc9be577ff6c269584df471341c32a1e2372c05046748732c1205c1eb192a5122cb361b693732a64fb599dc850fa325b72525a69dafc270340e277071fe88eafdaf60b18c66f3e97f8af5c5811d6d234c516215a3b1504bda61ac67269d12655da0aba891312ab0b07dc82435b590442e4f5cbfe3fa3dafe30d3cdff7fbfd3e8305c542e75431bb5ab035d0a44511d191c381cf80b425e74ced79e071bb3b68f96d9bc3b4b84379a05c7937f8617db4622a8de7f5cfb6f149a37a94c4d6141a57d75ef7dbe32d195e731e2d1b742016fcc3f7b986201585c2cb177e76f16abf010000",
    ],
    [
      "ETag",
      "NdXggerVdk6pz6LGLnEtwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0bb646d1d403ed21d1128ad32087ec6b8c98410c34720245a854eef5ea7ef06ef07104a9952f8d637ac03ef6024863ba7f3b5d0a0f9b8f0eba0291827c3f3ae04b4154fbfb764dc05c66a32d544d671bfe15ad16a2b1e76561a137e37a6fd675da27660fe12490f1d4d882efd512499937b0bd5961ad5535525a7248cf4e6509da053cba60851ffb12cf1a09d0f575c176837a6b9db586cf4a245a43b371c1b397df3be8e832bfc754d0f69d55e45663e02287da5e77626236c07d99d9f4955a6ee3e3f6d158fe89e75b8b05840c806220fcc007b8a4a3285ab577661b9ee0cfccff16d14ecd5878c4826c1ef1fd8877c1718010000",
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
      "Fri, 30 Oct 2020 20:35:30 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-15-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda04f22691a2354ae98a94908d9076dd3421632ecc1dc1149b765595ffbe6bd374ad2ab59fb07dcfb9e7dc078fe40f2f53322309cf6f1ba81f3edd88849c105034c757d53bf70bafe465ffdafefb6319ded3e5f7c9fd7c8e08ae5992eeab023a5234350339db6dbb792d9a8ad642743051a737eaf4c6ced0993abd5ecf755de44928b2152fff20fbb752959cd9f651bb9b0b9117402b2ebb4cec9fdfedbbbe5dd5e2069892f66b491b55a4fdbee8e74230aab828e7bb2d1a6824d431ec292fd0c27f669a9cbe4edde574dfcd117cc71950c644532a6d0b533051663c6f6a9395cc1e89b1f9e240b6deca5b46161345b32fe392eee1c44aa9a2b17aa8c03a0f376bcb0fce37e17a11f99b20de2e2fbcf5a2bbdcac76eb606b5d5d78a167299a1460b8d6dc3a35b7002fa89f8254bc34ea917ed6ca4f0df2df8e4513505a421b8c27ce98f65c679a64c98465ee6094640e24899b4c467490386c3a84619a00459e11352c5a8ad2a1593f9d8e06f17890baf1304b693c9d8cd378e48ea7d9c885d441d2e184dcd75cc119979590bced10b90afdc88ba370172c1791674ac86853a8b3d6982ee0a547850522e89d9a0e3aca052ae976fb41e4858b65e45f7aed84579053f6b0bdc51967b49080685a63f314d46b9162c348b0587b67083613fb7a0c4a32fbf94874cfb58b172d7fa64738406d57992fd946a11f7c31768e884b5a340672d71e7419192fb4e9c32f04e28eb649c8b79d175e93f629840c6a28d9c7c344b0097cf8ab1df71eb1b8f9282315de717598d422ac867685b8a9f6c81e38fde1841870addec486fdfeb1693a87ce087b28d55345edde63a1ad58239f4118c4e907a659877f8af235f077040000",
    ],
    [
      "ETag",
      "t1FIlEnin2Y/xZCRwaCX7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1604090111888"
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
      "02ff8d93516f9b400cc7bf8bf74a24a8d22c45ea03d9d22d1a4d3a421fa6a98aae9c61971d98dd1d59a328df7d3eda65553b89be806d7ed6f9effb73809faa9110c3bdaa7e7568f6ef2a745f7d90a1edb4b3fc6aa9b10801a01315937647eae1423dc8ab0cbf7dd9aab31267cbe4f292095bfcc05a407c8052a19616e2ef0768448ddc5690eeea66d36701b87deb8beb3c5b2c3f715e93f4f9f2364d93593a8763706a94c2894dcfbfa1edee18c096ee332cd16053a09fa535b4c5c22dbc4c2bea56e3c852670ab4d0c3fd87ca50d70a4334e2ca283a1f4593701c5e8451144da753063515c2296a98bd5df37ce0c8099dd16f5609d11913a68f5971d93f775c57b257e2c3c5329f8cfb019f03a532d63d2ee52ff824ee25a9c51b41be01a587a00a1b89668852ed464869d0da4192ec46b4ed099bad56e92b4834d29092c3e04e0d00daed4ec055ba4afeb75af6cdbf5d7d4cf2f92bc23a76c309c917d7f3759e5cdf78eeeee97e677b87f6c6109bc5a2f749148ea7e7ef27e1a3753e90b7139f133bd3610085e03fe0b3721097425b3cfe011d7c472f5f030000",
    ],
    [
      "ETag",
      "svoix9ixdFReYKji2feBNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN (?) GROUP BY `email`, `ios_app`",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: ["ejervois0@example.com"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1604090111888",
    },
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
      "00000002ff8553db6e9b4010fd15b47d6925c7061bdbd85294a4094da97c4930248aaacadec5035d0758c22e69a3c8ffde6109b9a85222210133e7cc9cb93d925b9e6fc994309edc55503e7cda09463a04144dd0fac3998549389bfb816f396c7099d19d9c5f1e1e2282d72c49b322850329aa3202390d57dda41455414b210e30d08135c2c7b4cd89695996e338c89390c6339edf22fbb752859cf67a6dee6e224492022db8ec46227bb6f7eefbbda2143b8894ecbd4dd9c32cb2f77ed2a354445471911f862b14504928d790519ea28417e6961dbf0ddde534eb2608bee711d0281255ae6a5918221279cc93aad451c9f4916899af3ec8ca9db9a781b1e142ae69516c0c2a8df5ba0459a5aa636c74fa2763716b7cf39773638325c63c05b931aebfbbbe6b3cc3bc85f1f9e88b71ee2fc30be3eb4d6befbc84474d5b908ae75a5140590ab59aa7a679ff8faa2650452534cef5d81c51cb31272c66e328760643169bc098c3c6433a606634b1c1de32a0c8537574cda2b9c8c794b278d41f5aa6494d6b688f6ca08c82391a0f26a6ed98b18596edb04ff61df2a7e40aceb82c84e44de7c8b5ef05ee3af0c3c5e949e0ea32628a3d3a6bc4d545bcd6a9b04804bd53d7bef6728199ea31788bc0f54f4e03efca6d263f8384460fab3b9c7d4c530988a625cd404139175b6c1ab958aebcc05b2e4e66c8d0e3bc6811924c7f3ebe108287427759e9375905beb738d7025ac4154d2b0db96f3e08ec709d0497e631fcd5baf542edf7bf9085abdb442497a1ebdf90c6e4430c25e4d1c7f344b0767c7881ed3920160f02d34885ffb83d91ac934425345bc4b35a4ccb1e58fdfe906870a9fef3d9cea46d571da38e0819e4eaa9a2e61cb0d02659259f41e8c4e12f74e7f6ff00feb365018e040000",
    ],
    [
      "ETag",
      "J8LUgULMRTR18b3QmajsMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1604090111888"
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
      "00000002ff6d906f4bc33010c6bfcbf9b6d3569dd4c2c04d864eeaaaad7ba38c91a5d7daaded7549ba3f8c7d772f55d01742482e4f7e773c4f8eb02eea14025816f9a6457538cbd1bcda2246dd9646f3d150ad111c40237226a3e43d2599d4d145bff1b17dd64fed66b81b0c98d0f2132b01c111b202cb5443f071845a54c86d8b85ea2632660e8d554651148e8753162a4aad309d85e170148ee1e4fc696bd6bf2dc95b3c993efcd7313f39b0a2658c192aac255a138da2154a33b1f9b4a89a127b9a5a25514307770fb9a2b6118aa8c74acfbbe1e55ebbb7aee779beef33589214a6a09ad959c2d6c09011654c3b8e071e03aa2b3969d6ed5b968d6ab14b612fb842b5a542bb77b8ef5c9c4baaace3f9cfacd1c1a07e51c4c6345a4f9757fd6f87f76479c369ec4407a4e01f7e2c0c049928359ebe004f6e972bbf010000",
    ],
    [
      "ETag",
      "OSZdocSnO/5p8euMsJuqAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfc97282300000d07fc9591d40c3d21b1137a2c86211b864620c9440954d043bfdf73a7d7ff07e00658cb72de9ee05bf810f3052c598b119ae24b4783271f68a39a2a317a45d70b8ba0e37c3f251eb6b19538f8cd876522d192a710a78f8a5e8786fa77ead55706d48befd4deef885a96a95d6c388b46dac29bbddd99e0e416fc66d76b33cf8a909b142ac0dd3bedb38368be48c389b9709857e712fb27b4d96eeeb99048e8fa7ea8e8f6a89ef8b51d0a23fc6866f56b6928b0c926811c770aa1dd5869917bec5925e4702ade453b6470796adeb6199af8e920726800f55def096e4efec1c1ac604fccf493756fcdd479c36bc01bf7fb28c0e0c18010000",
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
      "Fri, 30 Oct 2020 20:35:32 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-17-1604090111888",
    },
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
      "3014fd2b91f74adba42d4da8548dae04dad1a6234d41689a22dbb90986342eb1d389a1fef7dd38948190d8536cdf73ee39f723cfe4411409191226b2c70acaa72ff7929123029a66f87a79797bb7bc88dcefdfb2e91f70c438df4d1faf462344889aa5e8669b434bc9aae4a086eb553b2b65b5a5a5942d4cd472dc9633b0fbf689ed388ee779c85390a773513c20fb4eebad1a763a07ed7626659603dd0ad5e672f3faded9753bdb52de03d7aaf35eb2832aaaf3b9e8d75c72aa852c46eb151aa81494316ca8c8d1c23f66c24edfa76e0bba696708de090e94735915bab68529b82c529155a5c94a86cfc4d87c73202b7fee4f228bcbbcda1471413770642554d3583f6dc13a0f970b6b169c2fc3c5389a2d83783599fa8b717bb29caf17c1caba99faa16f69ca72305c6b649d9a5b8017d44f40695118f5a87eae955f1a34fb38969a80d20a9a60ecda03ea78f6094b99cb53af77cc521b18f3987b4c7bcce6277de8270c28f28ca861d142167d7b902609f462b7e7f5e33ee31033709d9875a9e7da408f99c7c9fe88fc2e858633a1b65289a643e4269c457e1c85eb60328e7c53424aab5c9f35c6ea02de7ad45820823ea9695f478544a5baddb320f2c3f1249a5dfbcd84e79051feb47ac419a7345780685a62f334940b9960c348305ef867083613fb71082a32fcf94cea9ed72edeb4fc951ee1006bbbda7cc92a0a67c185b173405cd3bc32905d73a8cb48455e9bdeff4220ee6893845cadfdf096344f21a45042c1ff3f4c049bc07f7fb5c3de2316371f6594c63bae0e57b5082fa1592161aa3db07bddfec021065cea0fb141b777685a9da3ce081b28f44b45cdde63a18d58a55e4118c4e907a659fbbf962c0e9a77040000",
    ],
    [
      "ETag",
      "KKYhOGT7JBgHze1iAlvHqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93dd4ee3301085df65b8dc544aa0b4dd485cb46c77a994fe0781b442951b4fb206270eb65314557d77c6010a8295c24d3233f9469e333ed9c383283884b015d96385ba3ec9d02e5db04253496be855aac22078809665444ecffcdb85bc39db9e8e7f2cb0ff90d597b37a7971418449fe61ce20dc432a507203e1df3d142c476a4b94acf262d3641ed8ba74c575bc9accfe509e2beef2d975140d47d1180edeb19133cb360dff8db6bb8307f76abbc214351609ba594aadee31b11327d3b0bc94d831aad2091a68e0e643a6555532ad54872a9da0df097a7ed7ffe9074130180c08942a6156a882d8eb35cd0756592657ea895442704a846e62529c36cf1dd5056f94b870328b7bdd66c08f402ab4b12f4b79035fc57d2625fb26483720641b9461c151b751a2dc30ce351ad34a2ab3616579c446f379f4056205d74af07670275a00697747e077341ffe6fb5e49bf75dfd1ac6e32f84b1e48623124fa6e3753c9c2e1c77f77abfa3daa25968456631e87c12f8ddc179bfe7bf58e752393bd139a1d5157a9030fa03ae84853065d2e0e1194399c5205f030000",
    ],
    [
      "ETag",
      "M30XPlW3b2E+Pe7kgyCNyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN (?) GROUP BY `email`, `date`",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: ["ejervois0@example.com"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1604090111888",
    },
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
      "00000002ff8553db6eda4010fd156bfbd24a5c4c206090a2244ddcd62a81c498a44955c1ee7aec2e18afe35d87a2887fef780db92852f2849939e7cc99cb3e92a5484332204cc4f705e49b4f0bc9488d80a63146af7f168bcdf24e5ff5d7597c77be5c1f14f6aff5d1112244c9527495255057b2c839a8c174d2887359643497b28e42f596536f75ed8eddb75bad96e338c853904443912e91fd57eb4c0d9acd7ded462c659c00cd846a70b97a8a371f0e9a592e17c0b56abe2ed9c42aaaf97ed1e34472aa854c8fa613345028c867b0a222410bcfcc909dbc966e08ba6ac4087e101c28e7b24875690b25b84c231117b951258347626cbef8201377e89e05d63ca41ae61655d66c96832a125db3e6a6f62e982dad6ffef8c29a637f914840cdad9b1faeef5a4f306f647d3efe627df7c7d34bebebed3e5edb69a39b109416a9f112509640e963372eefed924a02d55441959cf5ec2e6d39769f45acc723a77dc8221b187358ef90b699cdfb1de8840c28f274a96e5834c509383d276461d4615dde7758881468f7990dce61b743c3306a33dae98436d9d6c83a171ace85caa412d5ccc88def05ee2cf0a7a3b3d3c0356d441407745e992b9b78e9536393087aa7af6d9915122b950bf04681eb9f9e05deb55bed7c0831e59bc93d6e3da2890244d39cae40437e21431c1ab91c4fbcc01b8f4e87c8308bbcdc231419fc7e7c26049bcc4c599b5f32097c6ff4dd18d823ae695218c843f5416081872485b24fe09ff16d4e69bbfd832c3cda4a915c4d5dff9654211f22c821e51fef13c126f1e1dbdb3f04c4e253c0324ae37fbc1eaeca223c87ea8ac4aa34b367b7dbdd768f1870aedfe49c83ee7e5ca546a9082b48f5aea3ea2160a355b1423d813089cb1f99c96dff0309cea9ef88040000",
    ],
    [
      "ETag",
      "VKujykZtQ9wpgZDkw2u0Xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1604090111888"
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
      "d1",
      "4f",
      "c2",
      "30",
      "10",
      "c6",
      "ff97faba698b68e6121241891091c880170c21a5bbcd8d6d37da0e2584ffddeb34d1075fdabbafbfbb7c5f4f6c9755310bd9364bf70de8e3450a76e68a084c535843578d9501e631b03225528d5687552e0229f948c6d9feaafb9cbecc7a3d228c7a8752b2f0c4920c8ad8b0f0edc42a59028d6d36badd48983dd64e79ec2f86d49518bb6eba9c4cfa83c9909dbd3f33f5ee979f2fa2f1f4e9bf89f5d963396e23484043a5c039a835e6a0ecd88533b2ac0bf00d365a81612ddc3ea41a9b5a6a449f145f04beb8e55d7ec7851041101058a09236c38ad8e59cac318b5616117e50362608d06d493193f63c90dce11deef38ecf459bc54990833e6066f83d7cb65e2e1596cef7fa67e3e068c1bc6a247b069cb36b7ef3edf3011d6f2993d50d784c49fae451665998c8c2c0f90b5bb6398ec2010000",
    ],
    [
      "ETag",
      "cHZvZj18aa0Hadiq/4KgMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b5283300000d0bb64dd7410421077060a028252b5816e32211328bff2294aa3e3ddedf86ef07e0017425e2e6c195a79060f4071ddde8a6d346a04ad52679f210d0944c9717fb8733eec570b4daa2848beaf1c39c1c9cda1ab63da2d96e6174d29c8b04b05942c7347177ffb954872d2344dd5077eeae193fb74f45a65e22890282d777301f949a135c809b3b816911e1a1d2229fa2a5b0a036c2dfc0d4e83f05c3bc9e9336b6945b347f21e2ee3fdb92e3319c6582b5664e2588f8d49ef39eb5f16c7f088eed5f8d036be9fa5a6c25ddf7794d52bd800791deb595e587dcb1aa66d6fc0ff9c2d6a94b73e917c9633f8fd036d9732de18010000",
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
      "Fri, 30 Oct 2020 20:35:34 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-19-1604090111888",
    },
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
      "000002ff85535d6fda3014fd2b91f7b842a0099020a115d1b44582b025a1d5344d91136e32b721a6b6d38d55fcf75d3ba56b37a97d8aed7bce3de77ee491dcb17a43c62463e57d0362ffe19667e48480a225be8adff6bd7f198b75e3fffa185cc6fbfd305c4d27134430cd9274bbaba02379237290e375dc2d056f765470dec1449dbedfe90f7b6ecfeff5fb7dcff39027a12a16acbe43f60fa576726cdb47ed6ec9795901dd31d9cdf9f6f9dd7e38b57782df42aea4fd5ad2461569bf2dfaa9e239558cd793758c061a0922852d65155af8cbdc6467af537719dd764b043fb01c689ef3a656da16a6c8795db0b211262b193f1263f3c581c4c122982556ceab665ba735ddc289b5a18aa66abf03eb225a2dad7978b18a96d364be0ad37876152ca7ddd96ab15e86b17573154481a5685681e15a13ebccdc42bca0fe06a462b5514ff4b3567e6ad0fcffb168024a4b6883e9a837a47dafe7674536ca0bcf1964450fb2cccb4603ea64bddc77c1dd64409167440d8bd6bcf69d21783483d471e828757ddf4d3d18b8e9a93ba2e03883cd2978e470427e0aa6e09cc91d97aced10b989e6499026d13a9c4d93c09450d0a652e7ad315dc04b8f0a0b44d01b351d74947154d2ed9e8749104d67c9fc3a6827bc8092e6fbf81e675cd04a02a2a9c0e629104bbec1869170ba0cce116c26f6f9189464fced91e89e6b172f5afe4c4f7080daae325f1227d13cbc34768e886b5a3506f2d01e741905abb4e9c37704e28eb649c89775107d25ed53040508a8f3f78789601378f7573bee3d6271f351462abce3eae4528be402da1562a6da23db717d67440c58a87f6383fec03f364de7d019610bb57aaaa8dd7b2cb4156be433088338fdd034ebf007a630c35b77040000",
    ],
    [
      "ETag",
      "rz/q9GSrUu9x+EGSyy6NOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1604090111888"
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
      "0002ff8d93514fa34010c7bfcbf8284dc0abb592f850b47a186cbd96be7831cdca0edcd685c5dda5a6d7f4bb3b8b5a2fa709bec0ccf09becfc67ff6ce151541c427810c553837a7350a0fde582199a465a43af5a5506c103b4ac20f2ee7071be8aafa31f5799bcfe5b9e1c1ddbe8a9383b23c2647fb064106e211728b981f0f7162a5622b5654a3665b56c330feca676c5793a8b275794978abb7cb2489251948c61e7ed1b39b36cd9f2df68bbdf79b0520f33cc516395a19ba5d66a85998d9d4cc3ca5a62cfa8466768a085db0f85564dcdb4523daaf482d35e30f0fbfea91f04c170382450aa8c59a12a6217739a0facb24cced433a984e08808ddc6a4386f9f6baa0bde2a71613c4907fd76c07f815c68635f97f20ebe89fb9f94ec9b20dd80905d50811547dd45897ac938d7684c27a9cc92d5f51e8ba6d3e413c42aae95e0dde05a7400d2aef7c065321d7db55af2cdc7ae2e46e9f813612cb9618fa4f1cd789e8e6e6e1d77ff76bfd1c6a2b9d58acc62d0f924f0fbc3e39381ff6a9d73e5ec44e7845637e841c6e80ff8292c84399306772f60b3a3eb5f030000",
    ],
    [
      "ETag",
      "Z+UCjIJB3GclJzm725tBqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN (?) GROUP BY `email`, `stamp`",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: ["ejervois0@example.com"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1604090111888",
    },
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
      "40",
      "10",
      "fd15b47d69d5d80663636c294adc84b6348e9d609c34ad2a7b81816e8259c22e4eadc8ffde6109b92852f2049a39e7cc99cbde931b964564440296dc96506c3f5cf380ec119034c1e8f8fce447fa39fd35b1669b93b06bc89fe9b6b8dbdf4704ab5882aef3145a8297450862b498b7938297392d386fa150ababb70c4befe943dd300cdbb69127208d272cbb41f65f297331ea749adaed84f324059a33d10ef9fa31ded9743b79c1af2194a2f3b26407ab88cedb450f521e52c978b6bf98a3815240b1843565295a786246c1e14be936a3eb7682e00d0b8186212f3359d942899067314bca42a992d13d51369ffd90b933718e7c6d25246aae342ab4e5b20051a6724f5ba9e20fc1fc46fbeacd4eb5153618b314c44abbfcee788ef60873a7dac7834fda376fb638d3be5c35f1bd461cfd442024cb941b9f0629544e1e06e6be5e5345a0920aa893cb816e51c3d687411c0cc2d836fb41ac4310d8c1a04fcd400f873de8450150e4c94a5db168c6b3aed5b5bbba1ed8664fa7d4ec9b036b1052d3b6606047563c1cc63d63184516d9ed91bb8249386622e782d55323979eeb3b4bdf5b4c8fc6bea3da88294ee8b8365735f1dca7c42611f4465fbb2acb3856aa56e04e7dc71b1ff9ee85536f7d02090db7f35bdc7b4c530188a6055d8384e29447383472369bbbbe3b9b8e27c850ab3c6b10828c7edf3f11fc6daea62cd597cc7dcf9d7e53061ac4054d4b05d9d43f04aef1943813fa21fc53bed531ed767f9085675b2b92f385e35d913ae4410c0564e1fbfb44b04abcfbfa9aa780587c0c58066f4832bc9e505445c202ea2b62ebca4cc3362dc3ec13052ee4ab9c699acdb82a8d4a11",
      "d690c9878eeaa7808dd6c54af108c2242e7faa26b7fb0f6137aad98a040000",
    ],
    [
      "ETag",
      "AQKJl+lZL6OvKc21tXlyrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1604090111888"
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
      "0000000002ff6d90514fc2301485ff4b7d74239d30dc9690086651122038e0c91052cadd1c6cbbb3edd085f0dfbd9d26fae04b7b73fa9d9b737a61a7bc3ab088edf3ecbd01d5de64605eec90806e0aa3e9aab1d2c01c064664444ee20245e89bdb61cbfd85bcf7f6fd3ebe8c464468f906a560d185a5391407cda2d70bab440964dbed54b79130d3d656594fe7f16a3d9e2f492af160a5c566361b4f6631bb3a7f8cf5e9d7b45a27d3c5d37f8eedd56147dc279082824a828d512b3c823453db508bb22ec0d5d828099a7570f790296c6aa1105d52dc3bee7a433ee021f73c2f0802020b94c2e45811bb59513466d08822c10f2ac83c02543752d7b43bcf56eef901f7fdd00b0771d8d5b12a1c419d31d7fc013ebb383d89a58dbefd593a690de8a5424aa8c186eb73ff3bea235ade502da31a709814f4d9cfb961512a0a0dd72f3dd3eb38ca010000",
    ],
    [
      "ETag",
      "BEloa95t+6y05Nc71b33oQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfcb7282301400d07fc9da3a88c44077e20beba488052c6c98182f8a082460e4d1e9bfd7e9f983f38318e7d034c9a3caa144efa867ba35e6e39dd06ca305f7bc5b86c27397cbcbb195bc3bd06bfc767452d115d49c971373b10519edbd3badd2d4e1590e21dd3249625dc98180b73620e98c00487b96ec54aa393630f6a88b33c8ebd65c91e84666fe10b4d1227cbaed9178f843567b65ae38efb5f84af98d36b64e364c094e79d06fd43d9a70b59ec57a5790a733dd358793b6f8124691fbdf1bdd08b0b2725f067d38acb2a170826b970c27127f56ccbfa011824e64353449f6ca4eb1658dd0ff3c79f4025e7d1b580d35fafd0322ba940518010000",
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
      "Fri, 30 Oct 2020 20:35:37 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-21-1604090111888",
    },
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
      "a3",
      "30",
      "10",
      "fd15e47d6d12c8152245db28a5db48096909e945ab15b29d81ba259862d35554e5df77304db755a5f609db73ce9c33175ec8a3c8b7644c98489f2a28f73f1e24232704344df1f57276933d48fb7c78bfb855e26abfb93bebdd5e4d268810354bd15d91414bc9aae4a0c69b753b2d6555d052ca16266a759d9633b4fbb6673b8ee3ba2ef21464c942e48fc8bed7ba50e34ee7a8dd4ea54c33a085506d2e776fef9de76ea728e50370ad3a1f253ba8a23a5f8bfecc24a75ac87cb259a3814a4119c38e8a0c2dfc676ed9e9c7d46d4177ed14c1cf8203e55c56b9ae6d610a2ef344a45569b292f10b3136df1dc8da5ff8b3c8e232ab76799cd31d9c585baa69acf70558e7e16a69cd83f355b89c46f35510af6717fe72da9ead169b65b0b66e2efcd0b734651918ae35b14ecd2dc00bea6f4169911bf5a87eae955f1b34ff3c969a80d20a9a603cb287d4716d8f256cc413b73760890d8cb96c34a03d6673af0ffd2d038a3c236a583497b9d3edb181d7b56366c320ee0f3d1ebb9ed78f190cbc5177301c76fb2e399c90bfa5d07026542195683a446ec279e4c751b80966d3c8372524b4caf45963ac2ee0bd478d0522e88b9a0e75544854aadb3d0f223f9ccea2f9b5df4c780129e5fbf513ce38a1990244d3129ba7a15cca2d368c04d3a57f866033b1cb635091f1ef1752f7bc76f1aee56ff4080758dbd5e64bd651380f7e193b47c435cd2a03796e0ea440cbf7581bba3efc41242e6993855c6dfcf08e344f21245042cebf9f26824de0db7fedb8f888c5d54719a5f18ebbc3552dc24b68764898728fecdea8ebd8c4804bfd29d61b8e8e5dab73d4196107b97eada8597c2cb411abd41b088338fec0",
      "74ebf00f695cfeb678040000",
    ],
    [
      "ETag",
      "PCWljo0F6hLXsiQyUYD3XQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1604090111888"
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
      "02ff8d92414fc2401085ffcb78a424ad41ac4d3800a23602425b0ec610b2b45328b4bb7577ab2184ffee6c45346aa2977666facdf6bdd7ee619bf1043c5866abe70ae5ee6c857a6a8a0055956b45b752708560016ab6225205c13d2f1adb471d28de28433f6cf5dd69a743848ad75830f0f6906698270abca73d705620adc522af0abea83b0bf4ae34c3300afcf12df585484c3f9e0d87ddde700007ebb49830cd1635ff8fb5f9c1828d580698a2441ea3d1524ab1c158fbc6a66245996353894ac6a8a086eb072b29aa9249219a34699e3b4da76db7ec2bdb711cd77509cc45cc742638b1b390f481169ae581782597d02640d625194eebeb0b8db3a436624a7f1cb55bb5beaf00494bb31c177f83a477cde8337c60c708be73ac1015d727ea66f8d0fded38caf4f3a8eb6e34f841284d499d90c81f0dc2a83b9a186e7ef4dedb695413292848852643c76eb917976dfb3dd6be3051d37b3c2d2bb42066f477dc651abc94e50a0f6fc1221a257b020000",
    ],
    [
      "ETag",
      "sRRKnm+kYtRsn+pSIS4C8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1604090111888",
    },
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
      "4fa34014fd2b64f645b3b685425bdac4b8b5b24a526997528dd96cda9961c0d90283ccd0d598fef7bd80551b137d62987bce3de77ecc33daf02c44234478fc50b2e2e9db5f41d009620ac7703b9d6fb7e73ddaf51ebdefb7c6e6b15c5c39f7f1e9292078c59238cd13d692a22c2893a3e5a21d17a2cc7121440b12b5badd96d1d72d7da81b8661db36f0244ba229cf36c0be572a97a34e67afdd8e85881386732edb54a4aff79d6db79317e22fa34a760e253ba0223b9f8b9e258262c54576ba5c808152b262c552cc13b0f0c60cc98fc3d46d8ed3760ce02da70c532aca4c55b620051559c4e3b2a8b3a2d133aa6dbe3ba0853375268136998da7ce62e21c8d6f2e8fd638ad72ac8f4f34fd58c3525bad0a26cb449d686b282fe2095bf170dd44f28df6d39f5d4304ccdc63c9e45abbbd727c473b04bb9e767476ac5dfab3e55c3bbf3b0882d39049c5b3da678049c22a8f2fad743f0eb0226005624d7035d0fbd8b0f52189c88046b6d92391ce08b1c9a0874da2d3a1c5ac90300c3c5565af59381399a5873d33c226ed9221b1edae1d121c612b0a4dc38e0656d7e80ff428ec53b43b41ff0aaed80597b990bce927baf5ddc05905fed29b8c03a72e23c2d0a88bc65c55c47b9f0a8a04d02775edaa2817a0540dc7f502c71f4f02f7c669f661ca624c9f160fb011114e2403342e70ca142bae45084d43f3d9c20ddc99379e02a31ef27c8f9068f4fbf98d103ce5759755fdadb4fa56adbf07dce0a4ac11dbe6800cb4dbfd0104ec6e4346bf968e7f879a2b9f45ac6019fd7a7400ae035f3ec1fd7b002cbc0890910afe6151a8ac4468c19a85e1696def856ddaa63e4035b8501f6256cfdc77a6ca51656429cbd44b45cd7b80421bb152be82200873f65cef12a2ff01819bb8b68f040000",
    ],
    [
      "ETag",
      "LPvvB5c2NxN+W1kxuSHEhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1604090111888"
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
      "d1",
      "4f",
      "c2",
      "30",
      "10",
      "c6",
      "ff",
      "97",
      "f3",
      "d1cd6c601497f0000601b3204e080f8690326e63d0ed66db6926e17ff75a4df4c197f6eefafbdaefeb098e45b58308b645fed6a06a2f7234cfb6485037d268de6aaa3482076844cee47832bd9ceff56ad566f2f3313e6cc37dbc78eef799d0e91e4b01d109b202e54e43f47a824a94c8b2cd46b91b19336d6d270ff1d360c16d493bdbce96713c18c623387b7f44f5f157309d2d46e351f29f647df6e040db04335458a5683dd48a0e989aa98da745594bf435352a450d0e7607b9a2a6168ac8e789dfe9f8e14d701ddc056118f67a3d0625a5c2145431bb7c616f60c80899d007a7839001e54a0e9ab9f5dd8eaf6ebb2e866bacbbf58f6ed81ad473456c42a37dbfdb09bedddc937568d8b9510d7a900afecc496120ca84d478fe02c60226b0aa010000",
    ],
    [
      "ETag",
      "GHI+PhsWWyflzJLjb1hLTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b7282300000d0bb64ad0e0410e94e01154104a9806e9888e1ff6b8201747af73a7d37786f80e218531af56d891bf00526049545bc303b6e230eb131976ea7a07cd2c0743c4dad65a1b7b544ca1034d27acacd66d826befb7de62b2be91dfe0ebd75e32bc6ab6d219a54a14315bb3d586de71c391769d5d736e9230b1e5e7c525f259d052b3574b3ac7ce6e44155f1c863a8b395ac73dbfc08ef2f4f63f3d6b1c35b2997fb515e521d95631656cec57a144d96ea44f6b66b8d509f09c6e97a0947576b76bc75c8764b36fd789c3814b15254a96989a7bde28219c06397134ca3fc931524459981ff79d44f1dfef43718114cc0ef1fa74fcab718010000",
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
      "Fri, 30 Oct 2020 20:35:39 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-23-1604090111888",
    },
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
      "14fd2b64f6d5b6d4d2169a346b5351495aba0b54b3d96cc830bde02830c80c35aee97fdfcb605d8d893e3133f79c7bcefde099dcf372476624e1d94303f5d3b73b919013028a66f83a7a187a9b9bbdb82c1ec77ffd55685f44e555369f2382b72c498b2a879e144dcd40ceb6613fab4553d15a881e26ea9d8e7ac38969998e391c0e6ddb469e843c5df1f21ed9b74a557236181cb5fb9910590eb4e2b2cf44f1fa3ed89f0eaa5adc015372f05e72802a72f0b9e8f75c30aab828e7db100d3412ea180aca73b4f09fb94bcedea7ee735af43304ef3903ca98684ad5dac2144c9429cf9a5a6725b367a26dbe3990d05db9cbc860226f8a322e690127c68e2a1aaba70a8c8b60b3363cff6213ac1791b7f1e37079e5ae17fde566b55dfba17173e506aea1689283e61a73e34cdf7cbca0fe0ea4e2a5568fdae756f9a541dec7b1b4049496d005e3a939a143db74923499b2d41e8d93d48424b193e9988e1293391658bb0428f2b4a866d15294ce74b273c01ec6136639b1351ed13849c6664c53274d47709aa6a6450e27e4b1e60aceb9ac84e45d87c84de0456e1c055b7fb9885c5d424a9b5c9d77c6da02de7a545820823ea9e9d046b940a5b6dd9e1fb9c1621979d76e37e11564943d850f38e394e612104d6b6c9e827a2d76d830e22fd6ee3982f5c47e1c8392cc7e3f93b6e7ad8b372d7fa54738c0d6aed25f124681e75f6a3b47c435cd1b0dd9770752a1e55bac0d5d1ffe201297b4cb427e6edde017e99e0248a186927d3d4d04ebc097ffda71f1118bab8f3252e11d7787c95684d5d0ed10d7e51ed923c7b2c644836bf5213631c7c7aeb539da8c5040a95e2aea161f0bedc41af90ac2208edfd7dd3afc03",
      "6525e84b78040000",
    ],
    [
      "ETag",
      "3q1IOWvoGmw5zNLS8FTnHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1604090111888"
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
      "657cb424ad2296263e80a21201a1144d34862ced148a6da7ec6e5542f87767aba251137d6967a667b6f7de76038f491e8107b364be2a51aef7e6a847a6f05195a9567c2b28570816a01673261fa35bba59f9eeb239b9b31757b2d85fbda8d1c909132a5c6026c0db409c601a29f0ee37908b0c792da4b4ccf269d559a0d785198e03bf3bb8e03ea3c8f48349afd76af73ab0b5768b91d0625af1ff587bd85ab0a4998f314acc43345a0a494b0c75d7d854222b52ac292a65880a2ab87a309754164212d578523b38ac390dbb6e376dc7715cd76530a550e88472662763d6079ab4487d7a6697d0604056251b8eabeb138f93a83262caee2068d42b7d5f01961627294eff0659ef42f067f8c0de23f8ce898cca5cefa8f3de75ebb7e338d3cfa3ce5a41e707a13427b543826ebf330e5afda1e11edebdb7d71ad5501207a9d064e8d875f7e8b861bfc57a4a266a7e8fa76589168482ff8ecb4483178b54e1f615068060c87b020000",
    ],
    [
      "ETag",
      "kdWoVqR8j9UZ0hKrp+qxsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1604090111888",
    },
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
      "ff85536b6f9b3014fd2bc8fbd24a7900210944aaba2e651d5b425a42da55d394d8c650b78029369dba2aff7d1768da4693da4f18df73ee39f7e12774c7f3084d10e1c97dc5cac74fb782a00e620a27707b3198ff54f3bf4b4be8df7f54c382cebd0b9e1c1d0182d72c89b322655d29aa923239592d7b4929aa029742742151d7b4bac648b77447370cc3b66de04996c6339edf01fb46a9424efafd9d762f112249192eb8ec5191bddcf71fcc7e518a5b4695ecef4bf64145f6df173d4e05c58a8bfc68b504039564e59a6598a760e1951991cffba97b1c67bd04c00f9c324ca9a87255db821454e4314faab2c98a264fa8b1f9e68096eecc9d86da74b1f2c3830dce6af2e650c3525baf4b26ab5475b40dd414f394ad79b46923c59df63558cc21020e6eb06472a35d7d730357db077bbe76707ca89d058bd5b9f6e57a2f08f6222615cf1b73212629ab8d3df7cffb7f6a35012b106b83ebb13ec286ad3b2426631adb8321897546884dc6433c203a752c66458461e0a93a7bc3c2b9c8491c39008a4c42891d0dcc31b60c271e6063307688832d333687c6d089d0b683fe945cb1532e0b2179db44741578a1bb0e83953f3d09dda68c1843a34e5b7375116f7d2a281240efd4b5ada35c80523d11cf0fdde0641a7a976ebb04339660fab8bc873588712a19a0718933a658391711340d9d2f965ee82dfc9319309ac99eef10124d7e3dbd12c2c7a2e9b26abeb5d6c86af477804b9c560de2a13d20036db7bf01010bdb92d1c5ca0dae517b15b098952ca71f8f0ec04de0c377b77b04808567003252c13f2c0a95b5082d59bb303c6bec3db32d7d689aa80197eabfd808aaecbc2e7f9d91652c57cf15b58f000a6dc52af9028220ccd9f7fc3388fe031bb398b384040000",
    ],
    [
      "ETag",
      "Q3MXtMzS4o0JKu5pcMIQig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1604090111888"
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
      "4f",
      "c2",
      "30",
      "14",
      "85",
      "ff",
      "cb",
      "f5d12d6e48c85cc283984549709101fa600829e36e0cb6ddda761824fbefde561f7cf4a5bd39fd4e7b4e2f70acda1dc4b0adca8f0ed5f9aa4433b74386baab8de64d52ab113c40234a2607c1cd75f9b64874fabaff9a44cb679986d57c3c6642e77b6c04c417282aac771ae2f70bb4a241b66d36caddc898394bab4cd365f298642c34b4b342ba9acdee27b3047aef8f4d1eff6559f71e1c689b61810adb1c6d0aa9e880b999da825a34b2465f53a772d4e06077502aeaa450443e2bfe60e887a36018dc0561184651c4604db93015b5ccae169c0d0c195167f4c9fd206440b991ab166e3db13c721d4e0ee068eb5fd3e46c50bf28e2041aede3b783e027ca03d97886631bd5a107b9e0bf7caa0cc485a835f6df97f6c114a9010000",
    ],
    [
      "ETag",
      "20/+gWSEsNVhzB8TMpN1iQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfd97282301400d07fc9b33a14b142df48d92c228b96c51706c865a46a4012c0e8f4dfebf4fcc179a2a2aa80b19cb767a0e8038942d616d5c2ed24ac4cc4c4c12a35d6738b5e6fc69b3fc8ba17e0d8d648a46e69a2de654a842bc1b7689c9c0489fb68e59f2c8df965ed59d9bc0c7ce17a14126197fa50849c5b4969e383c252806bcf4973b68df763c8d4c4a91fa672b1cb7ec736277ac81347eaa7fdee4b0afdbdd8118ec73a1bcda10a3feb1aba42d2f60a9de0e06daffe24362df6ac6868e3f5187967a26127526fcb713a32db0cb25b2b9ff434c7c346473304f7aee981e5cd2bbb5c69da0cfdcf732e3a78f531143df4e8f70fdb999b6c18010000",
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
      "Fri, 30 Oct 2020 20:35:41 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-25-1604090111888",
    },
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
      "fd2bc87b6d02a4a19048d11a25b4654ac84648ab6e9a906d0c750b9862d3aaaaf2df77314dd76e52fb84ed7bce3de77ef08cee7895a229223cbf6f59f3f4e55610748498c239bc9ad964b3fc1934b9eb6faecbf3285ed4dfeee6b3192078c792b8ac0b3690a26d2893d3dd769837a2ad7123c400120d46cec03eb1c6d6c4b26ddbf33ce04956642b5edd01fb46a95a4e4df3a03dcc85c80b866b2e875494afefe6c3c8ac1b71cba892e67b491354a4f9b1e8d74250acb8a866bb2d1868256b1256625e8085bfcc949cbe4f3de4b81ce6007ee094614a455ba9ce16a4a0a2ca78de363a2b9a3e236df3cd016dfd95bf880d2a8ab6ac920a97ecc848b1c2897aaa9971166dd646109e6da2f53c0e3661b25d5cf8ebf970b159edd6e1d6b8baf023df5098144c738d9971aa6f215c403f6552f14aabc7dd73a7fcd2a0e0ffb174049096ac0f26ae75826dcf9a908cb834f38e1d92598c108fb80e3e26169d8cd938250c034f8b6a16ae4465132b731c3a4a32c7f692f1c419259e9b92c4b6b363d71911ca2616da1fa1c7862bb6e4b21692f71d42575110fb491cedc2c53cf67509196e0bb5ec8d7505bcf5a8a040007d50d3be8b72014a5dbb8330f6a3f9220e2efd7ec22b9663fab4bd871967b8900cd0b881e629d6ac450a0d43e17ced2f01ac27f6fd109468faeb19753def5cbc69f92b3d8601767695fea26d1c05e1b9b673405ce2a2d59087fe806ab07c03b581ebfd6f40c292f659d08f9d1f5da3fe2962196b58453f9f268075e0d37fedb0f88085d50719a9e00ebb436527421bd6ef10d7e51ed863db9de83f55e146fd1b1b59d6f8d0b52e47979195ac522f15f58b0f85f662",
      "ad7c054110c61fea6eedff00a6d6bc1478040000",
    ],
    [
      "ETag",
      "/f9ODZIrg7EOYmGRTCpJkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1604090111888"
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
      "dd6e82401085df657a8b29344a95c40bb55649fc2be25563cc0a03a2c0e2ee626b8cefde596a6dd336696f6066f86639e7c00976491e8203eb24de97288e3731aa275d7828cb5449ba153c970806a0623191a29fcce297ed6e3830a7fb5b6fd08a0eafbdb8dd2642061bcc18382788124c4309cef309729621ad053c2db37c557506a863a18773df732703ea331eea7eb2188d3add511fcec67531648aad2afe1f6bcbb3015bbef630428179805a4b21f81603e56a9b9265458a35c94b11a0840aae1ec4829705139cd76852bb6bd42cdbac9b2dd3b2ac66b34960ca03a6129e13bb98933e505cb1d4e32fe4126c02445592e1a8ba1e689c8495115dba13dfae57fabe02242d4a525cfd0d92de0da3cff0815d22f8ceb18c97b9ba528fa369e7b7e328d3cfa31e3a7eff0721152575457c77dc9ffb9df14c73cb8bf7ee51a19c094e414ad4195a66bdd9b8b7cdf7587b5c474def719428d18080d1df314c1438114b259edf00cf37b6bd7b020000",
    ],
    [
      "ETag",
      "rEiPgwjkHG0Oq/RG9fvxCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1604090111888",
    },
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
      "00000002ff85536b4fe24014fd2bcdec174d789447a1901817b1eb3641704bd1b09b0d4ca7b775a4edd4ce14e21afefbdeb6a21213fd449973ce3de7de3bf34c363cf1c990783c7ccc217bfaf6203c5223a06888a7ed60b7d92d963f6fff2db74ef03bbd3046adceeeec0c19bc50491aa711d4a5c8330672b89837c24ce429cd84a863a17abb576ff5f4ae3ed05bad96699aa8931005139e6c507daf542a87cde6c1bb110a114640532e1b4cc4afe7cd6dbb9966e2019892cd63cb26bac8e6e7a6e791605471919c2de618209790ad20a63cc2086f4adffb7e5cbac169dc0891bce50c2863224f54110b4b3091043cccb3b22a193e9332e6bb0f32b726d6d8d5c6b3d1c49a8fad93f9e2fa644de3a2c6fab4a6e9a71a95da6a9581cc2355d3d6d85ec02358717f5d21e946fbe1ccae11c130f754825c6b773f2dc7d28ec9f6543b393fd5ae9cd9e246bb581e8198d407a97852e674a9174191f16594f6c7051602aad0ac02577dbd475ba63ef002afcf02b36378810e9e677a7d83763c9d0dbad0f53da0a85345f5524513919803c3ef9988f8fdc0649476dadec0300cd665a669187dbd1f30dfd48d01d9d7c82ee30a2eb94c85e4d53cc99d63bbd6ca7516d3f1c8b5ca36028a83baacc2154dbccfa9b049247dd2d7be40b940a76239f6d4b59cd1d8b56fadea3e4c20a4ec69fe883722a0910464d38cc6a020bb163e0e8ddccce6b66bcfa6a3092aca25df1c18920cff3cbf09dca7b49cb22a7f0baf5eb7f43f106e6994978c6df5415a64bfff8b0cbcbb9598fc5a58ce9254470e049041c2be5e1d924be0cb2778780fc8c517813652e17fbc284c16262c83eac2f0b88cf7a2eeb6fb668794e44c7dc0069dde6132458da222c490a8978eaaf7808d5666b97c2521887b9edad32b44ff03542026d48f040000",
    ],
    [
      "ETag",
      "2fwkwUYHVzYvRfZpB5A13w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1604090111888"
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
      "4f",
      "c2",
      "401085ffcb78b4d5b618ac4d388001c5342815e2c110b2946929b49dbabb551bc27f777635d18397dd99d9f726dfdb231c8a7a0b116c8afcad45d99de5a8e7a64850b5a5567c35542b0407508b9c955dbb7b090a319fe497f9e72ce81eaec5c7f9703060854a775809888e9015586e1544af47a845856c5bafa5ddc832dd356632891f870b6e2bda9a76b68ce3e1281ec3c9f9636a0ebf86e96c31be1b27ff59562707f6b449304389758a86a191b4c7544f4d3c25aaa64457512b535460c5f62197d4364212b93c7183beebf7bd2befc6f37d3f0c431696940a5d50cddae533b381262dca843e381df82c90b6e4a0993ddfcdd8bbe8853687ed0cdeeac738ea34aa27494ca1d000f402ef1be7960ca266742d5b742015fc9bf785862813a5c2d317227ef016ab010000",
    ],
    [
      "ETag",
      "yuhW2iaQFg/gxN2yJ7aw+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7f",
      "c9",
      "d93a0871a1378295465108836c1786250e8b266c03814effbd4edf1fbc1f906419edfb78e03565e013cc89acaeb3f5a591109cb27be3ee1da7184e04b18c9b5e7e7862cecc7e7a6059de9c915e457e1d932d1b450b9f180969e466baf833277469e1253cb3096a467e7476c35c78d3951532c16a244e71a955e9f4a8545b9f7691259445303f92af0485454a225b4fbfc7ca80af40fbe00a690385980b77097e495e02d19159b91a6df76e60f05dd923d7968e0ff8b4c257cb933a86d7afc37d09168e377b8c921b86757713a30656808aa6ec681f97efacb255d515f89fc7c3dcd0771fd1a4a31df8fd0364814dcf18010000",
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
      "Fri, 30 Oct 2020 20:35:44 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-27-1604090111888",
    },
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
      "0000000002ff85536b6f9b3014fd2bc8fbda0448c8538ad62ca12d52423620ada66942c6b950b704536c525555fefb2ea6e95a556a3f61fb9e73cfb90f9ec93d2f76644a129e3dd4503d7dbb13093923a06886afeb7ae76d2f7f0c86c3cd385846a637ba1b858fb3192278c392745fe6d091a2ae18c8e936ec6695a84b5a09d1c1449ddea8630f2dc79a58b66d8fc763e449c8d3152fee917dab5429a7a679d2ee66426439d092cb2e13fbd777f3d033cb4adc0153d27c2f69a28a343f17fd9e0b461517c56c1ba2815a4215c39ef21c2dfc67ee92f3f7a9bb9ceebb19820f9c01654cd4856a6c610a268a946775a5b392e933d136df1c48e8aedc45643091d7fb222ee81ece8c1d5534564f251817c1666d78fec52658cf236fe3c7e1e2ca5dcfbb8bcd6abbf643e3e6ca0d5c43d12407cd3566c6b9bef97841fd1d48c50bad1e35cf8df24b83bc8f636908282da10dc6236b48edb13549d264c4d2717f90a41624c938190d683fb1d8c401679700459e16d52c5a88026cd6a390d8b1930e7bb1d3b3fbf1a4670d62cbb680819d584e7f408e67e4b1e20a965c9642f2b643e426f022378e82adbf9847ae2e21a575ae96adb1a680b71e151688a04f6a3a36512e50a969b7e7476e305f44deb5db4e780519654fe103ce38a5b90444d30a9ba7a05a8b1d368cf8f3b5bb44b09ed8cf535092e99f67d2f4bc71f1a6e5aff40807d8d855fa4bc228f0fc4b6de784b8a679ad2187f6404ab47c8bb5a1ebe35f44e292b659c8afad1bfc26ed5300295450b0afa789601df8f25f3b2d3e6271f551462abce3ee30d988b00ada1de2badc13db71fa3d9b6870a53ec40603fbd4b526479311f650a8978adac5c7425bb15abe823088e3f775b78eff005c12c5db78040000",
    ],
    [
      "ETag",
      "MudIUGB566O8RDT/I7j7Sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd4e83401085df65bca5119afe49d28b56ab36d2aa405313d3345b18281558babbd890a6efee2cd66ad4446f6066f86639e7c01e5e923c041b5649bc2d51546731aa475db828cb5449ba153c970806a0623191edca9dcf9fd65e756e6d9d3b114fbce6d0dbf5fb44c8608d19037b0f51826928c17ede43ce32a4b580a765962febce0055157ae8f9ee787a437dc643dd4f678e33183a233818a7c59029b6acf97fac2d0e066cf8cac50805e6016a2d85e01b0cd458db942c2b526c485e8a0025d470fd2016bc2c98e0bc419346b3dbb03a66cbbc302dcbeaf57a04a63c602ae139b1338ff481e28aa52edf914be81020ea920c47f5f595c649581bd1e578ea775ab5beaf00498b9214977f83a477cde8337c60c708be732ce365ae4ed4b5733ff8ed38caf4f3a8ab813ffa414845499d107f3c1979fe60f2a0b9c5d1fbb052281f04a72025ea0c2db3d56b773be67bac975c474defb19528d18080d1df719b28b023964a3cbc01ab6ec02b7b020000",
    ],
    [
      "ETag",
      "5yRWWXhSy/1qLKrgMS2BSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1604090111888",
    },
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
      "6b4fa34014fd2b64f68b26b685165adac4b8aea292f4a1946adccda61d860b8e0283cc50d318ffbb17b06a63a29f18e69e73cfb98f79260f3c0bc988043c7e2ca1d8fcba17013920a0688cb7eb2b6be2dd9772132ccec20bddb0e7f6dfdba7c34344f08a25699a27d092a22c18c8d162de8e0b51e6b410a285895a5dbb65f475531fea8661d8b68d3c094934e6d903b2ef94cae5a8d3d96ab76321e20468ce659b89f4fdbeb3ee76f242dc0353b2b32bd94115d9f95ef428118c2a2eb2c3c51c0d94128a25a4942768e1831906bf7753b7394ddb3182d79c01654c9499aa6c610a26b288c765516725a36752dbfc74207367ec9cf8dac49deead685a5157fb1a95da7259802c1375a0adb0a28827b0e4e1aa89e40fda99379b6004f5efa804b9d26e2e1ccfd176c1ee54db3bdad7cebdd9e252fb73bb1344732148c5b3da9a4f83042a5b6fdd73bfceac225085624d7039d0fbd4b0f56110050316d93d2b887408023b1858b417e86c688219064091a7aaec358b6622eb4526b586b66db10150ec7c84cd1f1861d0ed5976c842d3ea9991a9770df272409e0aaee094cb5c48deb490dc78aeef2c7d6f313d39f69dba8c8862a34e1b7355119f7d2a2c1241dfd4f55245b940a56a1eeed477bce313dfbd769a1518434cd966fe884b10d14402a269415350504c44884d2397b3b9ebbbb3e9f11819f55c2fb7084946ff9e3f08fe26afbbacea6fa5d5376bfd2de09a26658d583707825d78f98f085cd7864cae168e774b9a2b0f222820633f8f0ec175e0c757b77d0288c547803252e13f2e0a9395082ba059189ed6f6ded838b4be456a70a1bec4ac9eb5ed4c95a3ca082964eaada2e60960a18d5829df4118c4394fdde939465f016cd2f00082040000",
    ],
    [
      "ETag",
      "vQ5MRjusybUFdH018S8ZYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff6d90d14fc23010c6ff97f375331ba0994b7800838a595027c418434819b751d876a3ed5c08e17ff75a4df4c197f6eefafbdaefeb09f6b2de400c6b591c5a54c78b02cd8b2d52d46d69346f0dd51ac10334a26072a7a3d1fef0feb60dcb4e3e76495f5ea5fd6e386442675bac04c427c825961b0df1c7096a5121cb562be56e64cc1c1b3bb94b9e46736e2bdad876b64892d13899c0d9fb236af6bf82e96c3eb99fa4ff4996670f76b44e3147857586d643a368879999da785a544d89bea65665a8c1c1eea050d4364211f93cf17b911f5e0783e02608c3308a22064bca84915433bb78656f60c88832a58ed341c880722507cdddfa69c797839e8be11aeb6ef9a31b1f0dea67456c42a37dbfdf0bbedddc927568d8b9512d7a9009fecc076920ce45a9f1fc0557bc109faa010000",
    ],
    [
      "ETag",
      "js8AkqYWh1lwiJwL3i5R3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b7282300000d0bb64ad4ef85971078a8896b6f22d6c329804a2b118be92767af73abdc09b793fa0c098761deaef9cd6600d64a19a0bbc380a68eb0faaa8d03b198a7b1175c90e7c72c2d048dc26cebd56e45dadec7a35ebc96847413428cdc61557ff3525ac3d27d2f3c7f07bd76cb8abc99253f29e4234c847a9d57cffa2df9c899ffca49986f9c82a8cc801f7e86cebf8c878775a7e197354c1c156c58ad9b19fe0d1bbea045dea8fb080e46d9bacacbb03f3a68f8b68fb19bb1e450e33a054d329480e64c86e55d0c638db97d6324757095d5d8f990566804ee2d2d2ee4981b56698e60cfccf512f057df66d5ab4b405bf7fb2bc26cc18010000",
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
      "Fri, 30 Oct 2020 20:35:46 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-29-1604090111888",
    },
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
      "85535d6fa24014fd2b64f6b50a2a2a9a98ad41dc9a286e11db349b0d19860b9d1619ca0cdd6d1afffb5e86da6dd3a47d6266ee39f79cfbc133b9e74542a624e6d9430dd5d3b73b119333028a66f87ae384c2bdddbb4b13dc7d305a97cbbf8bcbcbd90c11bc61497a2873e84851570ce474bfeb6695a84b5a09d1c1449dfea4d31b59b635b17abd9ee338c89390a76b5edc23fb56a9524e4df3a4ddcd84c872a025975d260eafefe663df2c2b71074c49f3bda4892ad2fc5cf47b2e18555c14b3fd0e0dd412aa080e94e768e13f3389cfdfa7ee727ae866087ee40c2863a22e54630b533051a43cab2b9d954c9f89b6f9e64076deda73438389bc3e1451410f70662454d1483d95602c83edc658f9cb6db09987abad1feddc0b6f33efbadbf57ee3ef8ceb0b2ff00c45e31c34d79819e7fae6e305f513908a175a3d6c9e1be59706ad3e8ea521a0b48436188dad11ed39d6244ee3314b9dc1304e2d8863271e0fe920b6d8c4063b8981224f8b6a162d446139e33e4221b2e34112d9238b451387a6919d403a023aa6fdde801ccfc89f8a2b5870590ac9db0e91eb60157a5118ec7d771e7aba8494d6b95ab4c69a02de7a545820823ea9e9d844b940a5a6dd2b3ff482b91baeaebc76c26bc8287bda3de08c539a4b4034adb0790aaa8d48b061c49f6fbc0582f5c47e9e82924c7f3d93a6e78d8b372d7fa58738c0c6aed25fb20b8395ff43db3921ae685e6bc8637b20255abec5dad0f5f137227149db2ce472ef0537a47d0a20850a0af6f53411ac035ffe6ba7c5472cae3eca488577dc1d261b115641bb435c977b62dba3a163130daed487d878d83b75adc9d164840314eaa5a276f1b1d056ac96af200ce2f87dddade33fa04942bd78040000",
    ],
    [
      "ETag",
      "Y8ToChUCF/eCUR6LpFxDQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1604090111888"
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
      "61",
      "4f",
      "82",
      "50",
      "14",
      "86",
      "ffcbe92b6ed00c91cd0f585a6c6886b8e69a73573828065cbaf79273ceffdeb964d6aaadbec03987e75cdef785033c6765022eacb2f54b8d627fb146f5a08b10659d2b49b78a9712c100546c4de4d09e47cee3bcb4c269118461ba2ffc7167d7eb1121e30d160cdc03a419e68904f7e900252b90d6629ed745b96c3a03d4bed2c36914fae35bea0b9ee87e3c0b02af1f0ce0689c1713a6d8b2e1ffb1b6381ab0e5ab10531458c6a8b554826f3156beb6295951e5d892bc16314a68e0e6c15af0ba6282f3164d5a97dd96659b6db36b5a96e5380e81398f99ca7849ec6c4afa4071c5f290efc825d80488a624c369737da57196344674e98f23bbdde8fb0a90b434cb71f937487a378c3ec307768ae03bc70a5e97ea4c0d837befb7e328d3cfa36ebc68f083908a923a23913f1a4c236f34d1dce2e4bdbf57282782539012758696d976ae3ab6f91eeb35d751d37b5c256a342066f477dc650adc94e5128f6f5fad0b0c7b020000",
    ],
    [
      "ETag",
      "F6YT8WYn1RSmLRRfymIN7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1604090111888",
    },
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
      "53",
      "9b",
      "40",
      "14",
      "fd",
      "2b",
      "cc",
      "f6",
      "45674c8084249019c746454b9b909410aded74926559700db0c82eb18e93ffde0b1835ed8c3eb1ec3de79e733ff609ad5916a2210a587c5fd2e2f1d31d0fd011a212c7706bcc7fc613d79cd9ee42fec9be659bd30befebc3f1312058c51238cd13da12bc2c0815c3c5bc1d17bccc71c1790b12b5ba5a4bef6b866669baae9ba6093c419368ccb235b06fa5ccc5505577daed98f338a13867a24d78fa72af6e3a6a5ef03b4aa450f725555011eafba227092758329e1d2fe660a014b458d214b3042cbc32c3e0f37eea36c3693b06f086118a09e165262b5b9082f02c627159d459d1f009d536df1cd0dc1edb67be3219fd3858e1b4a2ae0e152c94e5b2a0a24ce491b2828a2296d0250b574d245f2b17de740211d0bfc5828a9572fdc5f66c651fecb8cac1c9a172e94d1733e5f4662f08e6422a24cb6a6b3e0e125ad97aee9ef3ffcc2a029620d6049703ad8f7553b382281890c8ecf68248a3416006831eee061ab10c6a8401c5c09355f69a85339ef58c6060586114f57b5a0470add38f744b33b0d531a2aed125bdb063e998a0ed117a2898a4e74ce45cb0a685e8da737c7be97b0bf76ce4db75191186469d37e6aa22defa94502480dea96b5b451907a56a1e8eebdbdee8cc77aeec6605c634c6e4717e0f4b10e1445040e302a754d262c243681a9a4de78eef4cddd11818f55c673b8440c35f4faf04ff31afbb2ceb6fa5d5376afd1de00a27658dd83407a4a3edf63720605d1b32fabeb0bd1bd45c7934a205cdc8c7a303701df8f0d5ed9e00",
      "60e111808c90f00f8b424425420ada2c0c4b6b7bcf6c6330e8e9a80617f2df98a9f5cd5d67aa1c55469ad24c3e57d43c0128b4112bc50b08823067d7712f21fa179187f64682040000",
    ],
    [
      "ETag",
      "4SZgMN8PENUtxnKnvBFRJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1604090111888"
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
      "dd",
      "6e",
      "82",
      "40",
      "10",
      "85",
      "df",
      "657a0b0d607f2c89176ad4da50dba2364d1a63561810050677178d31bc7b676993f6a237bb33b3dfd93d672fb0cfca187cd864e9a14679be4a51bf99224455e75af15651a9102c402d5226efe3f960f2f43c39a8db77ec279efad88e87a75e8f09156db110e05f20c9308f15f89f172845812c5baf657b2363fa5c99c93878e92fb82d2836ed6c1904fd413082c6fa23aaf6bf82e96c319a8cc2ff24abc6821d6d424c506219a1f15049da61a4a7269e124595a3ada896112a68e1f6209554574212d93cb13b8eedde3937ce83e3ba6eb7db6530a748e88c4a669773f6069ab4c8433a713a7019906dc94193763df2d8bbf63a6d8c63cbb0bbd58f6e70d6a85e25b10985e6fd8ee77cbb199271a8d9b996355a1009feccc74c839f885c61f305d225c067aa010000",
    ],
    [
      "ETag",
      "7dSBGJMGqs5VeAf2sXhFCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "96",
      "42",
      "40",
      "00",
      "00",
      "e0",
      "77",
      "99",
      "ebea3048f612bb5a3f452574e3f819121a6668b067df7d3bfbbdc1f703922c4394c603aed1137c803981ca26db581da78a2c93ebf988540c5f8626569922af49cf903e51b76785cecf121f4ea52ba9e7ade6a717d86858e0d09e47a61839556f395a71acf7f79a0da25006be196a6d80070ee659910b957d7085c05eb4d45aae5bf5a68707b6dd358c105f29fb70edd9e45ed63c14e9f194c8de0363b85b4be8891f4de4f45ee1c7bca107d75669bfc73abcbca8c8a97964b07333c6dd88d360f9cc53babf714b800f432f985f920756004d5d45108dab775690146505fee7f13077e8dd5751421001bf7fa0d4c0d518010000",
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
      "Fri, 30 Oct 2020 20:35:49 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-31-1604090111888",
    },
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
      "40",
      "14",
      "fd2b64f6b52aa81535315ba374eb46b08b68b3d96cc8305ce858642833d898c6ffbe97a176db34699f98997bce3de77ef04c1e781e93318978fa584179fcb61311b920a0685abfce7f1ed4eeb6b75d6db91929d7dacd1e8e4f93092278cd92745f64d092a22a19c8f166dd4e4b5115b414a285895a3dab650dccbe39322dcb1a0e87c89390254b9e3f20fb5ea9428e3b9db3763b1522cd80165cb699d8bfbe770edd4e518a1d30253bef253ba8223b9f8b7ecf04a38a8b7cb259a3814a4219c29ef20c2dfc67c6d1d5fbd46d4ef7ed14c107ce803226aa5cd5b630051379c2d3aad459c9f899689b6f0e64ed2c9d5960309155fb3ccce91e2e8c982a1aaa6301c6b5bf728d8577bdf2dd69b05879e17a76e3b8d3f66cb5dcb8dedab8bb717cc75034ca40738d8971a56f1e5e503f06a978aed583fab9567e69d0e2e3586a024a4b6882a16d0ea83534475112d92c19f62ea3c484281a46f625ed45261bf5a11f474091a745358be622a7d41ef4cd7e1c8ee2ee65d8ef821dd22e85d0a4b43b00d6ed99f6889c2ec853c915ccb92c84e44d87c89dbf089c30f037de6c1a38ba848456999a37c6ea02de7a545820823ea9e95447b940a5badd0b2f70fce92c586c9d66c24b48293bae1f71c609cd24209a96d83c05a52b626c18f1a6ae3347b09ed8ed3928c9f8cf33a97b5ebb78d3f2577a8003aced2afd25ebc05f783fb49d33624bb34a430ecd811468f91e6b43d7a7bf88c4256db2905f1bc7ff4d9a271f122821675f4f13c13af0e5bf765e7cc4e2eaa38c5478c7dd61b2166125343bc475b967767fd4b56ca2c1a5fa10ebf5ec73d7ea1c7546d843ae5e2a6a161f0b6dc42af9",
      "0ac2208edfd3dd3afd0349b724a778040000",
    ],
    [
      "ETag",
      "bDJvtjP3VOVi0btM1jCkyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1604090111888"
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
      "416f82401085ffcbf40a11aa524be2415bb5346aade2a1698c5961402cb0b8bbd418e37fef2cb5b6699bb4179819be59de7b708097240fc18555126f4b14fb8b18d5a32ea628cb5449ba153c970806a06231916122ba35e7f23eee0f6af693a86f516d9abb769b0819ac3163e01e204a300d25b8cf07c85986b416f0b4ccf265d519a0f6851ecefca9371e509ff150f7e3f970d8e90e7b7034ce8b21536c59f1ff585b1c0dd8f0d51423149807a8b514826f30509eb6295956a4684a5e8a00255470f52016bc2c98e0dca48959b74ddbb11ad6b565db76abd52230e5015309cf899dcf481f28ae583ae53b72090e01a22ac970545d5f699c8495115d7a63df6954fabe02242d4a525cfe0d92de35a3cff0819d22f8ceb18c97b93a53fde143e7b7e328d3cfa36e3b7eef0721152575467c6fd49bf99dd144738b93f7ee5ea19c084e414ad419da56a3d5bc72acf7586fb88e9adee32a51a20101a3bfe32e51e0462c95787c03c64570627b020000",
    ],
    [
      "ETag",
      "dirB/62JgFG/1Yr3qetj5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1604090111888",
    },
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
      "536b4fa34014fd2b64f68b26b60c7dd226c6ed567489b5ed52aa319b4d3b03171ca50c3283c698fef7bd80551b13fdc430f79c7bce7dcc0bb917694886848bf8a180fcf9c79de4e488806631de9ecd0733e8d3d9f5c8bc1cdfcea57df124d2a7e363448892a5d8264ba0a1649107a086cb4533ce6591b15cca06266ab45b0dab473b74402dcbb26d1b790a926822d27b64df6a9da9a169eeb49bb19471022c13aa19c8cddbbdf9d832b35cde41a095b92f69a28a32bf163d4964c0b490e9f17281060a05f90a364c2468e19d19f29ffba99b826d9a31821f45002c086491ead216a608641a89b8c8abac64f8422a9b1f0e64e14c9cb16f8c67cba97fb00e9986f5a1c194b15ae5a08a441f196bac281209ac44b8ae23d9bd71e6cd2e3182fab74c815a1bd7bf1dcf31f6c1eed438383934cebdd9726efcbad90ba2b91094166965cd673c81d2d66bf7dccf332b094ca3581d5cf5698f59361df088f783c86e77794481739bf7bbaccd6930e84027e4c090a7cbec158ba532652dda1f7068f5a9450316f156a7c77bedaedda1619fb55a9c521860b20ed91e91a75c6838152a934ad42d24d79eeb3b2bdf5b4ec723dfa9ca881836eab4365716f1d1a7c62211f4455ddb322a242a95f370a7bee38dc6be7be5d42b30819805cf8b075c8288250a10cd72b6010df9a50cb169643e5bb8be3b9b8e26c8a8e63adf211419fe7d7927f8cf59d5655d7d4bad5e55e61be08a25458578ac0fc422dbed3f44e0bad664f267e97837a4bef220821cd2e0fbd121b80a7cfbea764f00b1f808504669fcc74509542912e4502f8cd854f65ed95d6a0dbaa402e7fa53acddeeee3a53e62833c20652fd5a51fd04b0d05aac506f200ce29ca7eef41ca3ff016673548182040000",
    ],
    [
      "ETag",
      "FP9Oe70OWA/MChPo8Kwinw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90516bc2301485ffcbdd6b0bad8a74051f74142716d9ba09832112e36dadb6bd5d925654fcefbbc9f6b0c7bd249793ef24e7e406a7b2d9430cbbb2f8ea505d1e0a34af76c8507795d1bcb5d468040fd08882c9e5f1ba1cf5f35e845979c8949a1af9713d4f264c6879c05a407c83bcc46aaf21febc41236a64db76abdc8d8c994b6b95c5ea3d9927190b35edadb05aa7e974962670f7fed8dad3bf2c9bbb0747da6598a3c246a24dd12a3aa2340b5b508bbaadd0d7d429891a1cec0e0a455d2b1491cf8a3f1cf8e13818058f411886511431589114a6a486d9f51b6703434654199db91f840c283772d5dcad3dcb63d7a1770047dbfc9a661783fa451127d0681f1f0e829f284f64e3198e6d54871e48c17ff95c1a88735169bc7f030b304a57a9010000",
    ],
    [
      "ETag",
      "KjzK4vGva1RihRrrAtcXzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfc97282301800e077c9591c91a2d01b68412405c18d7a6162fc590464495c88d3772fd307f80edf1b114a81b198d705dcd027eac9541fd3b1db4ccc8f2725af5abb88a8253bdf8ff2ac17ac8f020ef8d23e5cc33e9ce7217854440edf7873a7339ea1ae32ccf9e920df7a2c27678bac6d7b5f54c9ded34ac7352c4966a648b5593a05b9ad98b2686696516599945ed485ec55566427b054e2bb8577d7bbe2762c107a96eb2bbcad1f55bc8b0bf8999dc41a3b4793946d1ad29ec539d07242cd20d74cd5bf3ea5e5463bb2f36a528bf57c5bd4da1789946f494a0c3442f06af20e0633641555d747e87f1ef3be81a16f02e9a043bf7f936a37e718010000",
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
      "Fri, 30 Oct 2020 20:35:51 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-33-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fdb3014fd2b91f795b6097da595aa514a804a6d0a490a9ba629729c9b6096c621769810ea7fdfb5431908093ec5f63de79e731f79267f789992294978fed040fdf4ed5e24e48880a239be6ec5e86a00705d9c5e545bf8e15ebaa3ec349fcd10c1354bd25d5540478aa66620a7dbb09bd7a2a9682d44071375fafd8e33b207f6c4761cc7755de44928b2152fff20fb4ea94a4e7bbd83763717222f80565c7699d8bdbef71e8f7b552dee8129d97b2fd94315d9fb5cf47b2118555c94b36d88061a09750c3bca0bb4f09f992627ef537739dd7573043f72069431d1944adbc2144c9419cf9bda6425d367626cbe3990d05b798bc862a26876655cd21d1c59295534564f1558e7c1666d2dfdf34db09e47cb8d1f878b4b6f3def2e36abedda0faddb4b2ff02c4593020cd79a5927e6e6e305f553908a97463dd2cf5af9a541cb8f63d1049496d006e3b13da28e6b4f922c19b3cced0f93cc86247193f190f6139b4d06304813a0c833a286454bac397347e3746cc743661fc703c8d298c268146396018cfbc9a0df77c9fe88fcadb982332e2b2179db21721b2c232f8e82adbf98479e2921a34da1ce5a63ba80b71e151688a04f6adaeb2817a8a4dbbdf4232f982fa2e58dd74e780539654fe103ce38a3850444d31a9ba7a05e8b141b46fcf9da3b43b099d8d52128c9f4d733d13dd72edeb4fc951ee100b55d65be248c82a57f61ec1c1037b4680ce4b13d900a2ddf616de87aff1b91b8a46d1672bdf5829fa47d0a20831a4af6f534116c025ffe6b87c5d77f72a865a4c23bee0e935a84d5d0ee1037e51ed8436738991003aed587d878e81cbaa673e88cb08352bd54d42e3e16da8a35f21584411cbf6fbab5ff0765924fe678040000",
    ],
    [
      "ETag",
      "Uo6P4eeQlBGpUeX8H86fBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1604090111888"
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
      "614f82501486ffcbe92b6c9066c6e6072d4a9a9a21aeb5e6dc150e880297eebdd498f3bf772e99b56aab2f70cee13997f77d6107dbb488c081559a3c5728ea9304d5bd2e7c9455a624dd4a5e48040350b184c8c83df5cbb835bfdd3ed8367bacbd74358c925e8f0819ae3167e0ec204e318b24384f3b28588eb416f2acca8b65d319a0ea520f6781ef4d6ea8cf79a4fbc97c34ea0f462eec8de362c4145b36fc3fd6167b03367ce5638c028b10b59652f00d86cad33625cbcb0c4dc92b11a284066e1e24825725139c9b34315b2dd3ee586debc2b26dbbdbed1298f190a99417c4ce67a40f14572cf3f92bb9840e01a229c970dc5c5f689c468d115d7a93a0d36ef47d05485a9c66b8fc1b24bd6b469fe1033b44f09d6339af0a75a4ae4777fddf8ea34c3f8fbaea07ee0f422a4aea8804ded89d05fdf154738b83f741ad504e05a72025ea0c6dabdd3d3bef58efb15e721d35bdc751a2420342467fc73055e0c42c93b87f03af93807c7b020000",
    ],
    [
      "ETag",
      "dE2Rpf3UJkW11aYyIibHdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1604090111888",
    },
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
      "a34014fd2b64f68b26da424b813631ae0fea92d4b64ba9c66c36ed305c702c30c80c6e8ce97fdf0b58b531d14f0c73cfb9e7dcc7bc900dcf233222214f1e2b289f7f3c88901c115034c15ba8f271f6eb3ef5a2db99ab36e3f1bc979f27272788e0354bd2ac48e1588aaa642047cb4527294555d05288634c74dc378f0d4b37f5a16e1886e338c89390c6139e6f907daf542147ddee4ebb930891a4400b2e3b4c646ff7dda75eb728c5033025bbfb925d5491ddaf454f53c1a8e2223f592ed04025a15c4146798a16de9951f8733f7587d3ac9320f88933a08c892a57b52d4cc1441ef3a42a9bac64f4421a9b1f0e64e14edc8b40bbf6a607eb882a581f6a546aab5509b24ad591b6c67a629ec28a47eb36526cb4b13fbbc608aadf530972adddfe727d57db077b53ede0f450bbf267cbb9767eb717446b1148c5f3c65840c3146a53afbdf33e4fac265085626d7065eb16351c7d18c6a1cd62a73f08631dc2d009ed01ed873a1b9a60462150e4a93a7bc3a2b9c88746a4f7a8d31f462cd6cdc8d22d7b38341d6bc06c3d76c081d8663ddba4647b44fe955cc125978590bc6d20b9f5bdc05d05fe727a7116b84d1931c5465db6e6ea223efa54582482bea86b5b47b940a57a1ade3470fdb38bc0bb71db05984042d9f3e2115720a6a90444d39266a0a0bc1611368dcc670b2ff066d3b309329aa9ce770849467f5ede09c173d1745935df5acb321bfd1de086a65583786a0fc420dbed5f44e0b2b664f27be9fa77a4bdf221861272f6fde810dc04be7d73bb0780587c02282315fee3a230598bb012da85e15963ef953de80d0c8b34e0527d8a59b6b1eb4c9da3ce0819e4eab5a2f60160a1ad5825df4018c4394fbde91546ff0376158efe80040000",
    ],
    [
      "ETag",
      "eunFmHhlIdWOEtkFFP2nBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1604090111888"
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
      "000002ff6d90514fc23010c7bfcbf9bac576a0c1253c305c84045127c4074348d96e73b0ed66db4108d977f7364df4c197b677fdfd9bdff50287bc4ac0875d9e7d36a8cf5719da97ee10a1690a6b78aba932080ea0551993b9790a4e49bacfae1fa714cc6ede4ab95293f19809137f60a9c0bf409a639118f0df2f50a91239b6ddeafe45c6ecb9ee3af79355c8554949572dd78bc5245884d03a7f32f5e1979f2f57e14318fd17d9b40eec6917618a1aab183b855ad31e633befa633aaac0b740d353a46033ddc5f649a9a5a6922973bee60e8ca5b311477424a391a8d182c285636a78ad9f52bbb8125ab8a884e3c1c4806747fe439d37e3d72db139e7085e70ad90f73ec4976dcfca483b345f3ac89550c7616034f7c3b4da9f3b4ec6f75830ec48a7f74965bf05355186cbf009b7a7093af010000",
    ],
    [
      "ETag",
      "isOBwdfjg/MCoBH5Wm1TaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcf4b7282300000d0bb642d4e0820a53b01b10a0aa4e0801b864ff88a6002c3a7d3bbd7e9bbc1fb01719a12c6a2a16bc8137c822546ca36dd9a3d54c5895c34d97f94ca84ca2cfb6e98a38e51a28cc56bde5daee2d83f3d27cdb3793187c984ab6df21aa6bc2b04f6bd3f8552d1d62597ee9baed25b13624b925a5d842613330c29a72547af905993c7c10de50777f7a8435bd6ba17c5e10091edcba2ec5a776f35103a8ec5ea195357c39a7de51f2e3e2fdc502a526e0d41d736d6457012fdec9f6e46e15cb525e6842568232ddcaf48e7299efd1a1f2454b96003c8dc5794b0a87a6705495136e07f1e0d4b4fde7d95c49450f0fb07219d3d0418010000",
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
      "Fri, 30 Oct 2020 20:35:53 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-35-1604090111888",
    },
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
      "2b64f6d5b6540ab44d9ab5a9b83669a952dac66c3664182e384a1964068d31fdef5e06eb6a4cf48999b9e7dc73ee072fe49e1709199398670f3554cfbfee444c4e08289ae16b7a653d6d77314beaed5579c3af6769f6b0cb261344f08625e9becca123455d3190e3cdba9b55a22e6925440713752cbbd377cc813932fbfdfe7038449e843c5df0e21ed9b74a9572dceb1db5bb9910590eb4e4b2cbc4fefdbdf778da2b2b71074cc9de67c91eaac8def7a2bf73c1a8e2a2986cd668a0965045b0a73c470bff99497cf6397597d37d3743f0236740191375a11a5b98828922e5595de9ac64fc42b4cd0f07b2f616de2c3498c8eb7d1115740f274642158dd47309c645b05a1a73ff62152ca7e17ce547ebd9a5b79c7667abc566e9af8ddda5177886a2710e9a6b4c8c337df3f182fa0948c50bad1e36cf8df25b83e65fc7d210505a421b8c5cd3a1fda1398ad3d865e9d0b2e3d484381ec6ae4dadd864a3010c921828f2b4a866d1421410536641df896cd7b1a241026e44ddd4891cdb4a86cee9e960e4327238214f155770ce6529246f3b4476c13cf4a230d8f8b369e8e912525ae7eabc35d614f0d1a3c20211f44d4d8726ca052a35ed9efba1174c67e17cebb5135e4046d9f3fa01679cd25c02a26985cd53502d45820d23fe74e99d23584fecea189464fcf785343d6f5c7c68f93b3dc401367695fe927518ccfd3fdace11b1a579ad218fed819468f9166b43d7877f88c4256db390eb8d17dc90f62980142a28d8cfd344b00efcf8af1d171fb1b8fa282315de7177986c445805ed0e715dee916d5baeed100daed497d868601dbbd6e46832c21e0af55651bbf85868",
      "2b56cb77100671fcbeeed6e1150de00d8778040000",
    ],
    [
      "ETag",
      "fP3wVWbcduVPpYiQCfgqWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1604090111888"
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
      "61",
      "4f",
      "82",
      "50",
      "14",
      "86ffcbe92b6cb08c90ad0f66563a34455c6dcdb91b1c10052ede7bd139e77fef5c2a6bd5565fe09cc3732eeffbc201d6591983072f59baa951eccf5254135d0428eb5c49ba55bc940806a062299171da7637f1d3763de90efc816307f5523deeaeae8890d1120b06de01920cf35882f77c809215486b11cfeba25c349d016a5fe9e1340cfaa33bea0b1eeb7e34f3fdceb5df83a3715a8c99628b86ffc7dafc68c08abf0498a0c03242ada5127c8591ea6b9b9215558ea6e4b588504203370f52c1eb8a09ce4d9a98e717a6ed582dab6dd9b6edba2e81398f98ca7849ec6c4afa4071c5f280efc825380488a624c34973ddd2388b1b23baec8f42a7d5e8fb0a90b424cb71f137487a978c3ec307f61ec1778e15bc2ed589baf51f3abf1d47997e1e75d3097b3f08a928a91312f687bd69d8198e35377ff77ebd5728c7825390127586b6d5722f2e1deb2dd62ed751d37b3c256a342062f477dc670abc84e5128fafabd85ce87b020000",
    ],
    [
      "ETag",
      "dg98qdXvkQCJLJ61RuhtWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1604090111888",
    },
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
      "53",
      "9b",
      "40",
      "14",
      "fd",
      "2b",
      "cc",
      "f645674c8004129219c7a64a2d3331b184686da7932ccb0557814576d1b14efe7b2f60d4b433fac4b2f79c7bcefdd82772cbf3888c49c893bb0acac74f3722240704144df0363b717fdee97634f5c239d7edfec4fda3460f878788e0354bd2ac48a12345553290e3e5a29b94a22a682944071375fa838e39302c636498a6e9380ef224a4f194e7b7c8be56aa90635ddf6a771321921468c1659789ece55ebfefe945296e8029a9ef4aeaa822f5f7458f52c1a8e2223f5c2ed04025a15c4146798a165e9951f879377597d3ac9b20f89e33a08c892a57b52d4cc1441ef3a42a9bac64fc441a9b6f0e64e14edde3403b9bfcd85b4754c17a5fa3525bad4a9055aa0eb435d613f314563c5ab791e256fbeacfcf3082ead754825c6b97df5cdfd576c1de4cdb3bdad74efdf9f25cfb72b513446b1148c5f3c65840c3146a53cfbdf3fe9f584da00ac5dae06a680ca8e918a3300e872c76fa76181b10864e38b4693f34d8c8022b0a81224fd5d91b16cd456e8dcc1e8d1c3a30586cd8a1150dcdbee198bdd01e463d6bc08626b50d466db239200f255770c26521246f1b482e7d2f705781bf9c1d4f02b72923a6d8a893d65c5dc45b9f0a8b44d03b756dea2817a8544fc39b05ae3f390ebc0bb75d802924943d2eee7005629a4a40342d69060aca331161d3c8f97ce105de7c369922a399eaf91621c9f8d7d32b21782c9a2eabe65b6b0dac467f0bb8a069d520eedb0331c966f31b11b8ac2d997c5fbafe1569af7c88a1849c7d3c3a0437810fdfdcf60120169f00ca4885ffb8284cd622ac84766178",
      "d6d87b66db96331c90065caa7f63b6618db69da973d41921835c3d57d43e002cb415abe40b088338e799373bc5e85fb78c5f2e80040000",
    ],
    [
      "ETag",
      "mDEZq/5dLIbOi/53AEzt9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1604090111888"
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
      "6bc23010c7bfcbedb565691da2051f742b9be06476fab22112ebb556db5c97a40e11bffb2e41d81ef692e42ebf7ff85d2e70acd40e12d856e55787fa7c57a25db84386a6abade1ad25651002402b4b2687fbcaf4e8fea37f5888575576528969578e464c987c8f8d84e4024585f5ce40f27901251be4d866a3fd8b8cd973eb3a4fe365ca55433b57cd57b3d978324be11afcc9b4c75f7e3a5fa6cf69f65f647d0de040db0c0bd4a872740aada603e676eaa633b2696b0c0d753a47031ef617a5a6ae959a28e44ed8eb87515f3c88a188a26830183058532e6d458ad9d53bbb81252beb8cbe79388818d0fec873167e3d713b16b108451cc6c20f73f2243bae6fe9c9d9a279d3c42a069d458f49eff448ced3b2bfd51d06904bfed197ca4252c8dae0f507eba02031af010000",
    ],
    [
      "ETag",
      "9his3o/Z6jQ0Mnguan0Iug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b7282300000d0bb64ad8e5a28a13b0c5311fc301004dc64d29840a4201050a0d3bbd7e9bbc1fb019431ae14e9ee05afc00718e9da5cb085572f37daf34ad2877ebde4a776885444683d3a99b7f67108dd652eed27135f3e34431a28ffac4a3b30233dee842415bfac90ecbebbfdbb57f513445b14fa65ff386251592eea536350329d535d18e2408acc45583f3bcd6e3fdf5bc7225232d1eee5d313619d1779eb1c57b63c602b636e22787032dc6a5735e52a5d6b93c10a492166f05359a3da24a457e76d62a3386f9c5b534038a11bf69a387ce0c0cec00cf0a1962d5744beb26fba69cec0ff9c7463cd5ffd0da72d6fc1ef1f7c5c07cd18010000",
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
      "Fri, 30 Oct 2020 20:35:55 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-37-1604090111888",
    },
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
      "14fd2bc8fbda249084bca468cd52ba664ac80a2455354dc8980b754b30c5265554e5bfef629aae55a5f613b6ef39f79cfbe0993cf03c261312f1f4b182f2f0ed5e44e48c80a229becebb4ebe4d7e6df7f6f28760cbdba72bbfb0afa75344f09a25e9aec8a02545553290938ddf4e4b5115b414a285895abd61cb1a987d736c5a96351a8d9027214b963c7f40f69d52859c743a27ed762a449a012db86c33b17b7defecbb9da214f7c094ecbc97eca08aec7c2efa3d138c2a2ef2e9c64703958432841de5195af8cf8ca3f3f7a9db9ceeda2982f79c01654c54b9aa6d610a26f284a755a9b392c933d136df1c88ef2c9d7960309155bb3ccce90ece8c982a1aaa4301c6a5b75e190bf772edad66c162ed86fefcca59cddaf3f572b3727de3e6caf11c43d12803cd35a6c6b9beb97841fd18a4e2b9560feae75af9a5418b8f63a909282da10986437340ad91398e9268c89251cf8e1213a268140d6dda8b4c36ee433f8e80224f8b6a16cdb1e6848dad646085c8ec867d8821a4760261d2b7a261d76663d38cc8f18c3c955cc105978590bce910b9f116811306dec69dcf02479790d02a53178db1ba80b71e151688a04f6a3ad6512e50a96ef7c20d1c6f360f165ba799f01252ca0efe23ce38a1990444d3129ba7a05c89181b46dcd9cab940b09ed8ef535092c99f6752f7bc76f1a6e5aff4000758db55fa4bfcc05bb83fb59d13624bb34a43f6cd811468f90e6b43d7c7bf88c4256db290eb8de3dd92e6c983044ac8d9d7d344b00e7cf9af9d161fb1b8fa282315de717798ac455809cd0e715dee896d0fcc5e9f6870a93ec4ac71efd4b53a479d117690ab978a9ac5c7421bb14abe823088e37775b78eff0006f982d978040000",
    ],
    [
      "ETag",
      "C2EnVfJVv5LBocLYwHSp5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1604090111888"
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
      "82",
      "40",
      "10",
      "85",
      "df",
      "657a0b2944454be205b6d61a7f2bd88b36c6ac30281658babbd818e3bb77965adbb44dda1b9819be59ce397080e7248fc08555b27e2951ec2fd6a8ee75314359a64ad2ade0b9443000155b13d9d8756bb6bf9fa8c1f4717c993d0c7abe4cbc769b08196e3063e01e204e308d24b84f07c85986b416f2b4ccf265d519a0f6851efac1ac3fee519ff148f7e3f970e875865d381ae7c58829b6acf87fac2d8e066cf96a86310acc43d45a0ac1b718aabeb6295956a4684a5e8a10255470f5602d785930c1b94913b3d6346dc7aa5b57966ddbad568bc094874c253c2776ee933e505cb174c65fc925380488aa24c37175ddd138892a23baec8f03a75ee9fb0a90b4384971f937487a378c3ec307768ae03bc7325ee6ea4cdd0e27de6fc751a69f47dd7841f707211525754682fea8eb07de68aab9c5c97b67af504e05a72025ea0c6dabde6a341deb3dd66baea3a6f7b84a946840c8e8efb84b14b8314b251edf0019e88bf87b020000",
    ],
    [
      "ETag",
      "5vE31SyOtKPZN/mVKGSsiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1604090111888",
    },
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
      "ffa5535d6f9b4010fc2be8fa9248fec0c1c6d89295ba0e4da91c9c621c37a92afb3816e762e00877248a22fff72e902f2b52f2d027e39b999dd9bddb47b2e569488624e09bdb02f2872f3722200d028a6ef0747a65a4b73f7f5f751d9979cbd4ec2cb7e9ec7e3442062f559226590c4d298a9c811c2ee6ad4d2e8a8ce64234b150d3b09a1d53efea03bdd3e95896853a097134e5e916d5d74a6572d86e3f7bb736426c62a019972d269297f3f6dd513bcbc50d3025dbfb966d7491ed8f4d8f63c1a8e2221d2de618a09090af20a13cc608afca30f8ba5fbac569d2da20f98e33a08c892255652c2cc1441af14d915755c9f0915431df7c90b93db527be36992d5cff604d9352bc3ed4a8d456ab1c6411ab86b6c69e221ec38a87eb1ac9b6da776f76860826b8a612e45a5bfeb03d5bd3d62569a41d6b63f744db973aae76707ca89d7ab3c5b9f6ed720fc4b02148c5d32aaa4f8318ca984fd374dedf6129a00aad6b70d5d74ddab1f44110057d1659462f887408022be8f7a811e86cd0856e1800459d2aab572a9a8ab447c38841d487be6546b4679a8631d007604621ea190b2ce85846d86364d720f7395770c2652624af474a969ee3db2bdf5bb893b16f576d4414c77652872b9b789b53619348faa0af5d8972814ee5fd38ae6f7be389ef5cd8f59398c286b287f92d3e8a88c612904d739a8082fc4c843834723e9b3bbe3373c7535454f77cfecc9064f8e7f155e03f64d59455f55b7a99ddcaff997041e3a262dcd51fa4d323bb5de3ff4a6085bfc8c00da8c5e4d7c2f62e497de4410439a4ecf3db4772057cbac8cf5b855cdc2bb4910affe35b63b2346139d46f8e2755bc2775af7fa49ba422e7ea1d6660978dd76d2a2b4202a97aeaa8deaa72541554c8171282f8545cc73d45f41fc46f0a5ad5040000",
    ],
    [
      "ETag",
      "LZ3nqJXZ4IspRWn61WknOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1604090111888"
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
      "6b",
      "c2",
      "30",
      "14",
      "85",
      "ffcbdd6b0b2d73d2157cd051a62032bb39912112e36dada6bd5d92ba15e97fdf4de7c31ef7925c4ebe939c932b9c8bea0031ec8bfcb341dddee568976e48d134ca1ade6aaa0c82076845cee4742c27df1b753a0edecfedfab236d3d5c370391a3161e4114b01f115b202d5c140fc71854a94c8b6dd4ef7373266dbda29b3c55bf29ca42c947470c262359f8f27f3043aef8fad3effcbb2ed3c38d13ec50c3556125d8a5ad309a59db9824694b542df50a3251ae8e1fe20d7d4d44213f9acf8f7911f0e8341f0188461184511838aa4b00555ccae5e391b58b242a5f4c5fd206440f72357cdfaf5d2cbaec36dda76db9b69d25a342f9a388141f7f8200a7ea33c918b6739b6d50d7a2005ffe5b4b010674219ec7e00f3138de1a9010000",
    ],
    [
      "ETag",
      "HAcBxYljh4VkyWvWsHU56Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfdb7243400000d07fd9e7c8a8b8f62d688948dc69bc98ddb5424ce24e6da7ff5ed33f38e707408cc930646353931778072be4943dde9f5b56e597bcbc508e4a97a70911732c74da84ba100ba4cba8c78b4c633976cea17b6234a636a9c50a65e1a1fa887622476bb75867630ab2f1b42e99748a1e316b15c3f4257f5c03513a868922d7a82e8d359d17b8c88c53bde64863af2aef4f38d5dec2c24a1b2fb9f909ba99b63a8d183d99bcb03ab634526cb81af2731c57639fe8ba70582add891d0d7ed234d4a374eebc2420d379838fb658b9a61999e51dec00f96eab9e0c59b5650f82a2ecc0ff3c1bd7966c7d95c09ef4e0f70f877ca4ed18010000",
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
      "Fri, 30 Oct 2020 20:35:58 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-39-1604090111888",
    },
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
      "536b4fa34014fd2b64f6ab16a87d4093666d2aae4d5aea02d56c361b324c2f384a1964065763fadff7ce605d8d897e6266ee39f79cfbe099dcf16a4b2624e3c57d0bcdd3b75b919123028a16f8ba892f23370896cb622c1ee7b7c1d276d563319d22826b96a4bbba846329da86819c6ce25ed188b6a68d10c798e8f8c43f7647cec0f11dd7753dcf439e84325ff2ea0ed9374ad57262db07ed5e21445102adb9ec31b17b7db71ffa76dd885b604adaef256d5491f6e7a2df4bc1a8e2a29a6e6234d04a6852d8515ea285ffcc6d76fa3e758fd35daf40f003674019136da5b42d4cc14495f3a26d4c56327926c6e69b03898365304f2c26ca7657a515ddc191b5a58aa6eaa906eb3c5aafac4578be8e56b364b10ed3787e11ac66bdf97ab95985b1757d114481a5685682e15a53ebd4dc42bca0fe16a4e295514ff4b3567e69d0e2e3583401a52574c174ec8ca8eb397e966763967b27c32c7720cbbc6c3ca42799c3fc010cb61950e41951c3a295a8dcfeb8cf9ca19fba00fd74d01ff5539f8db729ede74307c65e9e8f7cb23f227f1baee08ccb5a48de75885c478b2448936813ce6749604ac8695baab3ce982ee0ad47850522e8939af63aca052ae9762fc2248866f364711574135e4241d9537c8f33ce692901d1b4c1e6296856628b0d23e16c159c21d84cecf2109464f2fb99e89e6b176f5afe4a4f7080daae325f1227d122fc61ec1c1057b46c0de4a13b901a2ddf606de87aff0791b8a45d16f2731344bf48f714410e0d54eceb6922d804befcd70e8b6ffe642d2315de717798d422ac816e87b829f7c01e7a037f440cb8511f62a3e1e8d0359d4367841d54eaa5a26ef1b1d04eac95af200ce2f843d3adfd3fed9bcae978040000",
    ],
    [
      "ETag",
      "USPR1EELLg7oxCjEL/1txg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1604090111888"
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
      "00000002ff8d92414f83401085ffcb789426106b45921e68a58a81aa144fa669b63020bab0b8bb689aa6ffdd59d46ad4442f30337cb3bcf7600b8f55938307ebaa7cea506e0e4ad437a64850755c2bbab5a2510816a0662591413e9f0597d121bff49397691c1fd64eb82ec7632254768f35036f0b45853c57e0dd6da16135d25a26785737abbeb3406f5a335ca449383fa7be16b9e9e7b751e44fa20076d67e31679aad7afe1f6bcb9d050f629d6081129b0c8d96568a07cc74686c2a56b71c074a743243053ddc3f28a5e85a268518d06470743a7046f6d03eb51dc7715d97402e32a62bd1107bbb207da085663c112fe4124604c8be24c3457f7da67195f7464c19ced3d1b0d7f715206945c571f537487aef197d860fec3d82ef1cab45d7e83d358baefcdf8ea34c3f8f3af3d3e007a13425b547d2300e16a91f5f1b6ef9ee7db2d1a8aea5a020159a0c1d7be81e9f8cecb758a7c2444deff1b4ecd0828cd1df715169f00ac615ee5e01d357b32d7b020000",
    ],
    [
      "ETag",
      "EdNFEJL+lJARwCMM+m1Ibg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1604090111888",
    },
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
      "0002ff8553ef4fa34010fd57c8de174dda42a53fa089f17a95f3b854ea51aa31974bbb2c435d0516d9456d4cfff71bc0aa8d39ef13cbce7b6fdeccce3c933b9e45644442bebe2fa1d87cb91521691150748db756fa73a36ef2a1679f839e674ff693130d1f8f8f11c12b96a4699e405b8ab26020478b79675d8832a785106d146af78c767760f40cdbe876bb9665214f42124f797687ec1ba57239d2f55deece5a88750234e7b2c344fa7aaf3f1ce979216e8129a9efa7d4318bd43f4f7a9208461517d9f1628e064a09c51252ca13b4f0c68cc2affbd21d4ed3ce1ac10f9c01654c9499aa6ca1041359ccd76551ab92d133a96dbe3b90b93375268136992dbce06045d38abc3ad4a8d496cb026499a896b6c29a629ec09247ab2692df69dffdd93946d0c10d952057dad50fc777b4b7ab9576ac9d6863ef54db17703dede0e4503bf3678b0beddbf55e102d472015cf6ac3010d13a8ccbef4d4fdf89215812accd60497436340bb966187713864b165f6c3d88030b4c2619f9aa1c1ec1ef4a21028f254a55eb3682632d38c065d2334fa831e58c00c4a432ba643665bc691d9b322d3e887472133c9b6451e0baee094cb5c48de34965cf96ee02c037fe14dc681539711536cde6963ae2ae2bd4f854522e893bab655940bcc54bd92eb058e3f9e04eea5d30cc614d6946de6f7381a314d24209a16340505c5b988b069e46236770377e68da7c8a85ffb62879064f4fbf98d106cf2bacbaafe9279e0bbde596d6087b8a44959431e9a0319e7e8956cb7ad7fcba0e541ef73952e2afc4104ee424326bf168e7f4d9a2b1f62282063ff9f0004d781ffaef46ebf108b1b8669a4c27f9c3726ab24ac8066ee785adb7b61f7edbe69931a5ca80fb1c1d0d835b8d2a81421854cbd54d4ec57d5aa3a54ca571006715cbcbad7dbbf0f38aefbdf040000",
    ],
    [
      "ETag",
      "8mJythp7N9Me/pnx9xEd7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:35:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1604090111888"
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
      "c1",
      "6ec2301044ff657b4da4b8456d1a89031444a91082b41caa0a21936cd240920db6138450febd6bd3438fbdd8abf11b7bc6573816750a11ec8bfcd4a2badce568d6768851b7a5d1bc35546b040fd0c89cc9e25c9d26e387c9f253cd5646749dd8bc8dd6c321133af9c64a427485acc032d5107d5da19615b26db753ee46c6cca5b1ca7cf9319d4d63162a4aadb0dc2c16a3f1620abdf7c7d61cff65d9f61e1c681f63860aeb046d8a46d1011333b705b5ac9a127d4dad4a508383dd41aea86da422f259f107812f1e8341f01c0821c23064b0a4449a826a6637ef9c0d0c1959c674e67e2018506ee4aa995b3b96ef5d87ce011c6dfb6b1a5f0cea95224ea0d13e3e089f6e515ec8c6331cdba8163d4824ffe56b6120ca64a9b1ff018d5eedafa9010000",
    ],
    [
      "ETag",
      "iwmqDB3DNYrGPt1vv1UJAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfc97282300000d07fc9d93a9180406f0559aa651928e070c9440c1071584294a5d37fafd3f707ef0790a2a0e38845d7d016bc838548fab6d89e7a68c8d3f50e9545a585300d8b651267fb6cb585aa731cd9cc21ed9438b176d4ebc7b5c5a2562ee9db47d277cc9043224759b4329c7649febc2842d4feeebb269e65b5934d352fb7bd6a77b424b4d7ce5ae3f977fc89e02d721d75bee68d951e952abc93a7ebc02173691048a51003ad795cde4e59dfcd31a4a6c07c0d7d0d35b27a329b60281b11b3293c90d9e8630fba873540c8fe2a5150c1cb6d3c3f2ab00174ee19a72366af2c52747d03fee7582c3d7df50d4a38e5e0f70fdbd0063718010000",
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
      "Fri, 30 Oct 2020 20:36:00 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-41-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d4fa34014fd2b64f6d5b6a0586893666d5ad4262d55a01ab3d990617ac151ca2033b831a6ff7def0cd67563a24fcccc3de79e733f78258fbcda9231c978f1d442f3f2e34164e48880a205be86f353b9bcbb60174e7c5c16572b37bbf2e17a324104d72c497775093d29da86811c6fe27ed188b6a68d103d4cd4739d9e33b45d7b643b8ee3fb3ef22494f992578fc8be57aa96e3c1e0a0dd2f84284aa035977d2676efef83e7e341dd8807604a0efe971ca08a1c7c2dfab3148c2a2eaac9264603ad8426851de5255af8c7dc6667ffa7ee73baeb17087ee60c2863a2ad94b6852998a8725eb48dc94ac6afc4d8fc702071b00c6689c544d9eeaab4a23b38b2b654d154bdd4609d47eb95b508cfd7d16a9a2cd6611acf2e83d5b43f5b2f37ab30b66e2f8328b014cd4a305c6b629d995b8817d4df8254bc32ea897ed6ca6f0d5a7c1e8b26a0b4842e987af6903abe3dcaf2cc63b97f729ae53664999f79a7f424b3d9c805779b01459e11352c5a898aba4396798e9be6fec8495d8fdae9c88361ca46e0b85eee809b0fc9fe88fc69b8823997b590bceb10b98d16499026d1269c4d93c09490d3b654f3ce982ee0a347850522e88b9af63aca052ae9762fc22488a6b364711374135e4241d94bfc8433ce692901d1b4c1e6296856620b7ab5a7ab608e6033b1ab435092f1af57a27bae5d7c68f93b3dc1016abbca7c499c448bf0c2d839206e68d91ac8737720355abec7dad0f5fe37227149bb2ce47a134477a47b8a2087062af6fd34116c02dffe6b87c5472cae3eca488577dc1d26b5086ba0db216eca3db087b6e78c880137ea53cc3f750f5dd3397446d841a5de2aea161f0bedc45af90ec2208e3f34dddaff053cc4346c78040000",
    ],
    [
      "ETag",
      "ND5sLYGcG1S2lgPM4bP8eQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1604090111888"
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
      "85df65bc85041ac44ae205555492fed9d2c4689a660b03a5024b77174d6dfaeece62ad464df40666866f96730eece029af12f06099679b06c5f6244375a78b09caa650926e35af248201a85846a470ec609346a3aa0e3a9dd7a033c836f70ffec50511325e61c9c0db419a639148f01e7750b112692de64553568bb633406d6b3d9c46937078437dc913dd0f67fdbedfeb07b0378e8b09536cd1f2ff589bef0d58f3e504531458c5a8b5d482af3156a1b629595917684ade881825b470fb2013bca999e0dca489e9d8a6ed5a8e756ed9b6dded76092c78cc54ce2b626753d2078a2b564cf80bb9049700d19664386dafcf34ce93d6882ec361e43aadbeaf00494bf302177f83a477c5e8337c608708be73ace44da58ed4757fe4ff761c65fa79d4951f053f08a928a923128583601af983b1e6e607efbdad4239169c8294a833b42da77b7ae65aefb15e721d35bdc753a2410362467fc76daec04b592171ff067aa217b37b020000",
    ],
    [
      "ETag",
      "r41EqfTOnpE22zE2MgqXZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553ef6f9b3010fd5790f7a595f28324340991a22e4b69c694928e9076dd3425c61cd42b608a4da7a8caffbe039ab651b5f613c6f7debb77e7bb4772c7d3808c88cfa3fb02f2eda73fc2270d028a46783bbb5d240914b349779be6d3f3d9cf6f3fac201a8f11c14b96a4491643538a22672047ab652bca4591d15c88260a358d6eb3d3d70dddd43b9dce7038449e84389cf3f40ed9b74a6572d46eef73b72221a21868c6658b89e4f9befdd06d67b9f8034cc9f661ca366691edf7939ec68251c5453a5e2dd14021215f4342798c165e9881fff950bac569d28a10fcc01950c64491aad2164a3091863c2af24a958c1e4965f3d5812cadb935f5b4e962e578471b9a94e4cdb146a5b65ee7208b5835b40dd614f218d63cd8d491ec4e3b771717184107b75482dc68d75f2dd7d25eae36da583bd526ce997628603bdad1e9b1367317ab4bedcbcd41102d0720154f2bc31ef56328cd3ef5d47efb9225812acc5607d703bd4f3b43ddf4437fc0c261efc40f75f0fda13f38a13d5f67a60146e003459e2ad52b164d450a41cf60b4d31b5066ea3dd6eb7443b33738314d7d0010fabe11062633fc01d935c8df9c2b38e3321392d78d25d7aeed596bcf5d39d38967556584149b77569b2b8b78ed536191087aa7ae5d19e5023395af643b9ee54ea69e7d65d583318788b2edf21e4723a4b10444d39c26a020bf1001368d5c2e96b6672f9cc91c19d56b5fee11928c7e3dbe10bc6d567559555fb2f45cdb995506f6882b1a1715e4a13e109aa157b2db35fe2f8396fbc6fb2a1d54f88d08dc859a4cbeaf2cf786d4572e849043ca3e9e000457810f577abf5f88c50dc33452e13fce1b93651296433d773ca9ec3db1fb5de4930a9cab37b19e69ec1b5c6a948a9040aa9e2aaaf7ab6c55152ae4330883382e4ed5ebdd3fa60d48eedf040000",
    ],
    [
      "ETag",
      "GhOmmeuGA2ynrCFGZJXEdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90414fc2401085ffcb78b44d5a835a9b7000254a6c1aa91035c690a50ca565db29bb530d21fc7767ab078f9e76f7cd376fdeec117665b386185665b1efd01cce0ae499bb64683bcd568e961a8be001b22a841ceddf1ec3bbadd2abd7976a51149fe9259fcf8643216cbec55a417c844d897a6d217e3f42a36a94b6e5d2f48e82f1a175ca349d4fee27990835ad9d902e9264344e2670f2feb4b5bb7fb57c9c3ca86895e1060d3639ba14ada10a739eba05adaa5b8dbea5cee468a187fb4261a86b9521f245f107177e78150c829b200cc3288a04d4942b2ea91176f12cd9808995cee84bf683007edfe303a37d3224e6169def20bafe99724b6e324b22361d7a902bf9a6879221de286df1f40dd7b6771784010000",
    ],
    [
      "ETag",
      "AqYK1DhalbXWjUggvN5t+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "41",
      "72",
      "82",
      "30",
      "14",
      "00d0bb64ad0e8296d05d6180284c4110a96c325f088811488322d8e9ddebf4dde0fd20c873d6f7f4d671d6a27734816a2cf285271473f560f580717b6b21733ef321bd0ac77d145a22c9d32a8658f396194bb654fafb734a308e2cd313a5420c7dc5bfa4c07c7ffeb67101da61a3da43be3779805ddfaf0934dd7cad074115851b6bca8e50f6fc92a43af548a839bbb2b10fb595471525b17a1dc3c9e2ced6c6946a65dc2b1f41f7bc4f6f4d649c5ab70ec4d85e46e0a9b19547d56de306ee30c7173d16a78c84d7b182c76129550568003b34436c14b5643dad5f596d6d1833f43fa7b749b057df64209944bf7f5dc85d9818010000",
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
      "Fri, 30 Oct 2020 20:36:03 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-43-1604090111888",
    },
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
      "5d4fe24014fd2bcdece30a14295048c84ab02a0994b52d9addcda69999ded691d2c1ce54430cff7d6fa7e26a4cf4a93373cfb9e7dc8f3e938d281232264c640f1594fb6ff7929113029a66f5ebd353ef32fdbdd87f77200c6fbc64bf81cdf564820851b314ddee72682959951cd4781db6b352563b5a4ad9c2442da7d7ea0e6cc71ed9dd6ed7755de429c8d3852836c8bed37aa7c69dce51bb9d4999e5407742b5b9dcbebe771e4f3bbb52de03d7aaf35eb2832aaaf3b9e88f5c72aa852c26eb100d540aca18b654e468e13f336167ef53b705ddb633043f0a0e94735915bab68529b82c529155a5c94ac6cfc4d87c7320a1b7f06691c5655e6d8bb8a05b38b112aa69acf73bb02e82d5d29afb17ab60398de62b3f0e6757de72da9ead16eba51f5ab7575ee0599ab21c0cd79a5867e6e6e305f513505a14463daa9f6be59706cd3f8ea526a0b48226180fed01edbaf688a56cc853b7d767a90d8cb96cd8a73d66f391034ec28022cf881a162d64c1c005dab3ed78c8866eec8c188bd92973e374c89351d21fd9a9d3278713f2540a0de742eda4124d87c86d308fbc380ad6fe6c1a79a6849456b93e6f8cd505bcf5a8b140047d52d3a18e0a894a75bbe77ee405d35934bff19a092f20a37c1f3ee08c539a2b40342db1791acaa54cb061c49f2ebd73049b89fd3c061519ff792675cf6b176f5afe4a8f7080b55d6dbe248c82b97f69ec1c113734af0ce4b139901d5abec3dad0f5e12f2271499b2ce47aed05bf48f314400a2514fceb6922d804befcd78e8b8f585c7d94511aefb83b5cd522bc8466878429f7c81ef49c9ef953352df587587fe01cbb56e7a833c2160afd5251b3f858682356a957100671fcbee9d6e11f7b070fdd78040000",
    ],
    [
      "ETag",
      "bww3GfZLy+4eSSVEdykekQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1604090111888"
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
      "10",
      "85",
      "ff",
      "cb",
      "f80a0944c44ae2036ad526bd49a90f1ad36c61c05560712f6ad3f4bf3b8bb51a35d1179819be59ce39b08647dee410c192974f06e56aaf447d658b0495a9b4a25b2b1a85e0006a5612994e5f919b24c0ebc7e2bac87d3379e537f1f131112abbc79a41b4868263952b886ed7d0b01a692d1395a99b45d739a057ad1dced26430bea0be16b9edc7f3e1303e19f661e3ec1673a6d9a2e3ffb176b771e0412c132c506293a1d5d24af180991e589b8ad56d85ae124666a8a083bb07a514a665520897266eb0effaa11778479eeffbbd5e8fc04a644c73d1103b9f913ed042b32a112fe4124202645792e1a2bb3ed398e79d115b0ec6691874fabe0224ade0152efe0649ef3da3cff0816d23f8ceb15a9846efa8f3e124feed38caf4f3a8b338edff2094a6a476483a18f567693c9a5aee6eebfd64a5514da5a02015da0c7d2fe81d1c86de7baca7c2464def89b434e840c6e8efb8e41aa282550a376ff7b716697b020000",
    ],
    [
      "ETag",
      "TPxeiuR4eVkfVfd1uOxiZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1604090111888",
    },
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
      "536d6fa24010fe2b64ef4b9bf8028a2826a6e729ed915854c436cde5a2cbb2d06d814576f1ae69fcef37406d6b9a6b3f89fbbccc33b3b3cfe891a5011a229f45bb82e64fdf1eb88f1a884a1cc1a9f5d759d2f17eba5bee44b0b4278b87cee4723c1a0183952a81932ca64dc18b9c50315caf5a51ce8b0ce79c37c1a8a9eb4dcd5075d554354d1b0c06a013340e672c7d04f5bd949918b6dbc7daad88f328a63863a24578f27adede77da59ce1f2891a27d5ab20d5544fbf3a217312758329e8ed62b0850089a6f6882590c11de9481fffdd4bac570d28a80bc678462427891ca321658109e862c2af2ca150d9f5115f3dd075a59336be22993f9daf1ceb63829c5db73050b65b3c9a92862d950b6d053c862ba61c1b646b247e5d29d5f030209eeb1a062abdcfeb45c4b51b6019674ab8c940b65ec4c9553b1ed286717e7ca953b5f2f941f772720c40da8902cadc27ad88f6919f4659ef6c75b2c055842f11adcf455036b03d5f443bf4fc241b7e7872af5fd81dfefe1aeaf1253a77ae0530c3a59ba572a9cf2140f0ca2abb81b12d50c7c129a3ddde81a24ec6b660ff7cd4e607469cfd0027468a03f399374ca44c605ab878a6e5ddbb3369ebb762663cfaada08310c6e5a872b9b789f53429340faa4af4389320e95ca1bb21dcf72c713cfbeb1eaa598d10893a7d50ed622c4b1a0c0c6394ea8a4f9350f606868315fd99e3d77c633505437bd3832041afe7a7e13784f59356559fda269d9c0e19de10d8e8b8ab0af3f5047eda84db5d3d47ae87068fcdf09521bfae7561a38fc06063c855a8c966bcbbd43f5914b439ad3947cbd0440ae802f5ff4f17901171e18941112fec3ca1151162139ad578f2555bc17b5a1eb9a892a722e3f603dbd7f9c71e9513ad284a6f2a5a3fa7995a3aaa042bc9200848d716ce70ad07f75530016de040000",
    ],
    [
      "ETag",
      "ExNQeAvDqQqsdQICPj2CFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1604090111888"
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
      "6b",
      "c2",
      "30",
      "14",
      "85ffcbdd6b0bed28a32bf8a0c3a9c3c9ec14842192c6db5a6d7bb3247513e97fdf4de7c31ef7925c4ebe939c932b9cca660f096465f1d9a2bedc1568976e48d1b49535bc296a0c82076845c1e4c44a397d3dbf645a6d46ab613efcbe3f3c2f0703268c3c602d20b9425e62b537907c5ca11135b26db7d3fd8d8cd98b72ca6cb11a4fc6290b35ed9db058cfe7c3d17c0c9df7c7a64effb26c3b0f8e94a598a3c646a24ba1341d51da992b6844ad2af40db55aa2811eee0f0a4dad129ac867c58f223f7c08a2e03108c3308e63062b92c296d430bb7ee76c60c98a2aa52fee072103ba1fb96adeafe75e761d6ed3b6dbde4ca38b45f3a6891318748f4771f01be5895c3ccbb1ad6ed10329f82fa7a585241795c1ee0745244038a9010000",
    ],
    [
      "ETag",
      "GtccHMvJbrpXBTAfAx2hFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b7282300000d0bb642d8ec582d09da011e5ab82986c3218d21650400204e8f4ee75fa6ef07e404229e39cb455c14af001c644d6e7746ed70be35da41dc5798efa8b1aaaa5a9c68579afe4c5f67cd7b4dc7adb53bd9bacd30a2beee444f1739097d4469d86b255ad1cfb69d3996e725b0b1c25141d2453eaaae00ab5c0b296292e02be0bbff7961b77a88c525a4c246c33eca5a64d0e974d4ac4b517130c188efc8df01f1e8cc736328f5bf59cbbc30d7147e8101a92143df573b8cbc5d040a2649f3686eb664d1fb94c33db8ebd7ae2a3e723e8f8e3f00566800d75d6304eb25776a9e8fa0cfccf493bd6ecd53758d2b006fcfe011d15f68c18010000",
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
      "Fri, 30 Oct 2020 20:36:05 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-45-1604090111888",
    },
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
      "fd2b64f6d516b0a5c526cdda545c495aba52aabbd96cc830bde058609019348de97fdfcb605d8d893e3133f79c7bcefde099ec78b9251392f0eca1817affed5e24e48480a219bebafe6e0fd70d64690157cb6b1136bb5ff5d3748a08deb2242daa1c7a5234350339d9acfb592d9a8ad642f430516fe8f4ec9135b4ce2cdbb65dd7459e843c5df07287ec3ba52a3931cda3763f1322cb81565cf699285edfcdc753b3aac53d3025cdf79226aa48f373d1efb9605471514e376b34d048a8632828cfd1c27fe636397f9fbacf69d1cf10fcc81950c64453aad616a660a24c79d6d43a2b993c136df3cd81acbd85378f0c26f2a628e3921670626ca9a2b1da57605c86aba5e10797ab70398bfc5510afe757de72d69faf169b65b0366eafbcd033144d72d05c636a9ceb5b8017d4df8254bcd4ea51fbdc2abf34c8ff38969680d212ba603cb646d476adb3244dc62c75074e925a90246e3276e820b1d8d91086db0428f2b4a866d15294eec04d4f47e341cc6ce7341e6e1d885d367062db4d5d4aa99dd89492c30979aab9820b2e2b2179d721721bfa911747e12698cf224f9790d22657179db1b680b71e151688a04f6a3ab4512e50a96db71f445e389b47fe8dd74d78011965fbf503ce38a5b90444d31a9ba7a05e8a2d368c04b3a57781603db19fc7a024933fcfa4ed79ebe24dcb5fe9110eb0b5abf497aca3d00f7e683b47c40dcd1b0d79ec0ea442cb77581bba3efc45242e6997855c6fbcf037e99e4248a186927d3d4d04ebc097ffda71f1118bab8f3252e11d7787c95684d5d0ed10d7e51ed92367640d8806d7ea436c3c768f5d6b73b419a18052bd54d42d3e16da8935f2158441",
      "1c7fa0bb75f807afec645378040000",
    ],
    [
      "ETag",
      "8IkyeQuegfmeHMQoRukXrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1604090111888"
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
      "dd4e83401085df65bc141248dada927841b52a86fe48a937a669b630502ab07477b1a94ddfdd59acd5a889dec0ccf0cd72ce813d3c67650c0e2cb37453a3d89da5a81e7411a0ac7325e956f1522218808aa5444ebcde63340d7c713e7497e3f16673ff6a59dbcb4b2264b4c28281b38724c33c96e03ceda16405d25ac4f3ba28174d6780da557a380d036f744b7dc163dd8f66beeff6fd011c8cd362cc145b34fc3fd6e60703d67c19608202cb08b5964af03546cad336252baa1c4dc96b11a184066e1ea482d715139c9b34315b6dd3ee582dab67d9b6dded7609cc79c454c64b626753d2078a2b96077c4b2ea14380684a329c34d7171a6771634497de28ecb41a7d5f01929664392efe0649ef8ad167f8c08e117ce758c1eb529da81b7fecfe761c65fa79d4b51b0e7e105251522724f4868369e80e279a9b1fbdf7770ae544700a52a2ced0b65addf645c77a8ff58aeba8e93d8e12351a1031fa3bee32054ec2728987375a86f1287b020000",
    ],
    [
      "ETag",
      "PI9VcSRLr+MAbOOqqJz00w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1604090111888",
    },
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
      "a34014fe2b64f645935e865e8036316eb7c55d92967629d5e866d30ed30147814166a831a6ff7d0f60d5c6ac3e41e6bb9cef9c39f38cee79ba454314f0e8a160f9d3b73b11a006628a4470cad585daa5314d26fdbbf196678b9b30958f6767c0e0a54a92248b59538a22a74c0e57cb56948b2223b9104d306af68ca66ee01e1e605dd72dcb029d647138e5e93da86f95cae4b0dd3ed46e454244312319972d2a92d7f3f6aed3ce7271c7a892ede3926da822db9f173d8f05258a8bf46cb584008564f99a2584c710e14db90dbe1f5bb738495a1190779c3242a9285255c6020b2ad29047455eb9a2e133aa62befb414b7b6a8f7d6d3c5fb9fec98624a57873aa11a9add7399345ac1ada067a0a79ccd67cbba991ec5ebbf0e6334020c12d914c6eb4ab5fb6676bda462a48b7d1ceb4736de44eb463b5e36a27e7a7da4f6fbe5a683fae8f40c8bb6552f1b44aeb93206665d297813a1fafb1141005d56b706d6283e8161e046160d2d0eaf68310b320b002b34fba01a6831eeb6d034640a74af74a455291f6faa6d1b758c8ccb04bccb0135a7a9f0c30eb5382290b0c13778341d80dd0be811e73aed884cb4c485e4f155d798e6faf7d6fe58e47be5db5111298dca40e5736f13ea7822681f4495ffb12e5022a9557e4b8beed8dc6be7369d75b316511a14fcb07d88b90c492019be424618ae533b185a1a1c57ce9f8cedc1d4d41515df5e2c09068f8e7f94de03f65d59455f545be33b397fe68b6a8321c4897242e2ad6aefe411ddcc14ddc69ea7d5fef0cf5ee50efb530c63768bf6ffcdf1c1a317a9f1bebe0f01718f03c6a31fabdb2bd6b541f797045394be9d77b01e40af8f2951f9e1c70e1d14119585fc5610ba92c8bd09cd5dbc8932ade8bda308cce0055e45c7dc04c131fc65e7a948e2c61a97a",
      "e9a87e72e5a82aa890af240061895cc7fd09e83f52791173f2040000",
    ],
    [
      "ETag",
      "itFtvnlcmD5jCdipPZfnsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d90416f82401085ffcbf45848c05a43493c686baa093195eaa931668581a2c0e0eed08618fe7b67a9871e7bd99dbcfddeee7b7b857351a710c2b1c82f2deaee2e47ded82146d3966c646ba836080e20ab5cc8f4516d2ef16cb97d8868c459f7528ceecd663a15c2249f582908af901558a606c28f2bd4aa42b11d0e7ab85130ee1aabacd6dbc5eb2216a1a2d40aeb5d14cde6d1027ae78fad39ffcbb2ef1d38d131c60c35d609da148da61326bcb2058daa9a125d43ad4ed0c0000f07b9a6b6519ac815c51d4f5c7fe28dbd27cff7fd2008042c29515c502decee5db20113ab32a66fe907be007a18a56a36ac5f836c3bdca67dbfbf99e61da379d324090cdac7c781f71be5996c3c96d8ac5b742051f297cb8221cc5469b0ff01374201aba9010000",
    ],
    [
      "ETag",
      "d5aQqRAHT3Lo2tfyDi2+sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "74",
      "ad06e427b3a302a2ad0a6928389b069a82f25104b4ca64ee3e66de0dde0fc83817c3c0c65b2daee00bbcb3a5bde00bd429509782a8ace112f191d5d61c4ef57864e49e6cf6ac9a3845ae700c3c05cb803cabc70a672c99c2f6dba2eb6bd45386bc5d15dc9c3cf19fd838222f22414899a9356503f124f3bda0dba86a5aeb91cdcf07c34aa322f1ee26eed215e12fad08ed78d3b6ba19db5579c7e790d81ed36bcf876aec9a419de3754f74a792691ad1cc18475f45d7f5f156ee949d424b5793e969902f7850b607a510ea899f223003e2d55d7a31b0cb27ab19b63d03ff7336be3bf1e94391f5a207bf7ffb51241818010000",
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
      "Fri, 30 Oct 2020 20:36:07 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-47-1604090111888",
    },
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
      "5d6f9b3014fd2bc87b6d1268480291a235a2748dd4901548a3699a903117ea9660864da7aaca7fdfc53451bb49ed13b6ef39f79cfbc10b79e45546e624e5c5ef169ae72f0f22256704142df0b5b8cf975bd78b5cb05dcf1c6f77cb736f77bb582082772c49f775090329da86819c6fa361d188b6a68d10034c34b067036b6adaa66b5a96e5380ef22494f90daf1e917daf542de7a3d1517b58085194406b2e874cec4fefa3a7f351dd8807604a8ede4b8e50458e3e16fd5a0a461517d5621ba181564293c09ef2b22bf0c4ccd28bf7a9879cee8705829f3803ca98682bd5d9c2144c54392fda466725f317a26dbe3990c8bff1bdd860a26cf75552d13d9c1919553451cf351857e1666dac82ab4db85ec6ab4d9044deb5bf5e0ebdcdcd761d44c6eeda0f7d43d1b404cd3516c685be057841fd0ca4e295568fbbe74ef9b541abffc7d211505a421f4c66e6945a8ee9a6793a63b9339ea4b90969eaa4b3091da726736db0b31428f2b4a866d14a54f66c329966902533db3a4f6c339d25d435c7c9c4b45cb06cc70236258733f2a7e10a2eb9ac85e47d87c82e5cc57e1287dbc05bc6be2e21a76da92e7b635d016f3d2a2c10411fd474e8a25ca052d7ee5510fbe1d28b57777e3fe11b28287b8e7ee38c735a4a40346db0790a9ab5c8b0612458aefd4b04eb897d3f062599ff7c215dcf3b176f5a7ea2c738c0ceaed25f12c5e12af8a6ed1c1177b46c35e4a93f901a2ddf636de8faf00b91b8a47d1672bbf5c31fa47f0a2187062af6f93411ac039ffe6bc7c5472cae3eca488577dc1d263b11d640bf435c977b644f67ae35211adca87f638e35768f5deb727419610f957aada85f7c2cb4176be50984411c7fa0bb75f80b0073305978040000",
    ],
    [
      "ETag",
      "ghfAU9CS9e49C03UWA2CWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1604090111888"
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
      "401085ffcbf48a09241691c403565b4dd55ac5f4d018b3c280d885a5bb4b1b62fcef9da5d6366d93f60233c337cb7b0f0ef0941531f8b0cdd2e70a657d91a2be37c50255c5b5a25b290a8560016a9612e9a942795d352aeb5b1cb82f019f3e04d3b4d72342453bcc19f8074832e4b102fff10005cb91d622c1abbcd8349d05ba2ecd70192ec6b31bea73119b7eb69a4c82fe640847ebbc1833cd360dff8fb5f5d182bdd82e3041894584464b29c51e233d363615cb4b8e2d252a19a182066e1ea45254259342b468d26a775a8e6bb7edaeed388ee779047211319d8982d8d592f481169af185782597e012209b920c27cdf585c659dc1831e57816baed46df5780a42519c7cddf20e9dd31fa0c1fd82982ef1ccb4555e833753db90b7e3b8e32fd3c6a1084c31f84d294d41909c7d3e1320ca673c3ad4fdefbb5463597828254683274ecb677d971edf758af84899adee36b59a10511a3bf639469f013c6151edf000ac227517b020000",
    ],
    [
      "ETag",
      "8sns89sHpyKeD6vAlMWAMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1604090111888",
    },
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
      "e2",
      "40",
      "10fe2bcdde174d7829506821211e87d56b82a0a568cce502db76b6aeb6dddadd6288f1bfdfb41595bb9c7ea2ecf332cfccce3e93079e8664447c1e3d1690efbedd0b9f3408281ae12985707ba1ae678f3fc599915d2dedfe4e6e9fc66364f052256992c5d094a2c80390a3d5b215e5a2c8682e44138d9a86d5ec0c74431fea9d4ec7b22cd44988d98ca70fa8be532a93a3767b5fbb150911c540332e5b8148decedbdb6e3bcbc53d044ab60f4bb6b18a6c7f5ef4241601555ca4e3d512031412f2352494c718e15d19fadf0fad5b9c26ad08c95b1e000d0251a4aa8c85168148198f8abc7225a36752c5fcf04196f6cc9e7ada74b19a7b471b9a94e2cdb146a5b65ee7208b5835b40df6c4780c6b1e6e6a247bd0cedcc5052298e08e4a901bede6a7edda9ab6f7d0c6da8936999f6a877267ae1d9d1c6be7ee6275a9fdb83d0031700852f1b48aeb513f8632eaeb449d7fefb1145085e56b706dea03dab1f4a1cf7c336056afef331d7cdff2cd3eedf97a3034c0087da0a853a57ba5a2a948031676bbdd41afcf3a5d6a5203586031d3f47506fd6ed7a03e1d987e8f31f2d2204f395770ca652624afc74a6e5cc7b3d79ebb9a4f279e5db5c1288eeeb40e5736f131a7c22691f4495f2f25ca05562aefc8997bb63b997aceb55dafc50c221aec968fb8188cc612904d739a8082fc4284383472b9583a9eb3984f66a8a8eefa72cf9064f4ebf95de0edb26acaaafa2567b3c5c41b1855823de59ac645c5d9d61fa4d3ea23e3a5f17f1b8cfca5093afc4606be845a4cae56b67b4bea231718e490065f6f00922be0cb07bd7f5dc8c5f78565a4c2ffb86f812c8b0439d47bc7932adeab7a6059439354e45cfd8d0d7563b01f70e9513a4202",
      "a97aeda87e5de5a82aa8906f2404715de6cefc1cd13fddb2d232dd040000",
    ],
    [
      "ETag",
      "aedvMtVLqHoF4pQSE5ysvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1604090111888"
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
      "5f",
      "4f",
      "83",
      "30",
      "14",
      "c5",
      "bf",
      "cb",
      "f5",
      "15226ccb82247b7066ea0cd91fdc12a359968e5d10065c6ccb0c927d776fab0f3efad2de9cfe4e7b4e7b38e5f5114238e4d9478bb2bbca50afcd10a36a4bad786ba856080ea0161993e3d56b779fe3d357355f5e0f0391bd144bb59e4c9850c93b5602c21ed21ccba382f0ad875a54c8b6fd5eda1b19d35d6394f962337b98c52c547434c2621b45b7d3680617e78fad39fdcbb2bb3850d021c61425d6099a148da402133d370595a89a125d45ad4c508185ed4126a96d84247259714781eb8fbd9177e3f9be1f040183252542e75433bb7de66ca0498b32a64fee073e03d28e5c35b5eb99e581ed70b60047dbfd9aa69d46b592c409149ac78703ef27ca1d99789a636bd9a20389e0bf7ccc3584a928155ebe0125b5e123a9010000",
    ],
    [
      "ETag",
      "6PZyFieJzmIO/38agXjOsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b7282300000d0bb64ad0e4a00e92e7c6a1461001905364c804851893401043abd7b9ddee0bd1f408a820a9175cf3b65e0034c64a3af8a95d34a067c51cb9760d037c36c2718255dc97bc19955101be5db48d9abb2bbc6950f85ab1e5ed032b0282b6fb069ba097bd5c4d46bc26c4f596621bd294ff9d68469c726b4bb1c1d9e3f66f38b30b5b5e7a922b8387470fea4cbd849c815df0ce1bba98854d984b66bc3f383e42240c3bdf1f06d7a5bb3e771e3adeffd526a4e17a8ed2c34c565338e1718f3f91c191d0e1533adbe5346b657cda9b1146823020b40c7b6e65464f53b2b2bbabe00fff3ac9b5afaee1b9470cac1ef1fa6e894bc18010000",
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
      "Fri, 30 Oct 2020 20:36:09 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-49-1604090111888",
    },
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
      "5d4fdb3014fd2b91f74adb943634ad548dae0da3539b6e490a9aa629b29d9bd490c621764008f5bfefc6a10c84044fb17dcfb9e7dc8f3c915b5124644298c8ee6aa81ebfdc48464e08689ae12b94df3c5bcf768143af163f9853dd5eefc26c3a458468588aeecb1c3a4ad6150735d986ddac9275492b293b98a8331c77fa67f6d01edbfd7edf755de429c8d395286e91bdd3ba54935eefa8ddcda4cc72a0a5505d2ef72fefbdfbd35e59c91be05af5de4af65045f53e16fd9a4b4eb590c5741ba2815a4115c39e8a1c2dfc6726ecfc6deaaea0fb6e86e07bc181722eeb4237b6300597452ab2ba3259c9e489189baf0e24f456de3cb2b8cceb7d1117740f275642358df56309d645b0595b4bff6213ac67d172e3c7e1fcd25bcfbaf3cd6abbf643ebfad20b3c4b539683e15a53ebdcdc7cbca07e024a8bc2a847cd73a3fcdca0e5fbb134049456d006e3917d46fbae3d66291bf1d41d382cb58131978d1c3a60361f0f619830a0c833a286450b590c86c0b1b13c76184be321b3dd98313b8913d63fa5eed87106a7437238210f95d0b010aa944ab41d22d7c132f2e228d8faf359e49912525ae77ad11a6b0a78ed51638108faa0a643131512959a762ffdc80b66f36879e5b5135e4146f9637887334e69ae00d1b4c2e669a8d632c186117fb6f616083613fb790c2a32f9f3449a9e372e5eb5fc851ee1001bbbda7c4918054bffbbb173445cd1bc3690fbf6404ab4bcc3dad0f5e12f227149db2ce4d7d60b7e93f62980142a28f8e7d344b0097cfaaf1d171fb1b8fa28a334de7177b86a447805ed0e0953ee913db2fbf6881870a5dfc506b673ec5a93a3c9087b28f47345ede263a1ad58ad5e4018c4f1fba65b877f9330f69f78040000",
    ],
    [
      "ETag",
      "epBE0tAhR5aVDJb5rkWhSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd6e82401085df657a8b2934962a8917f8d3d604ad454c9a34c6ac30287661e9eea231c677ef2cb5b6699bb43730337cb39c73e0002f59918007cb6cf55aa1dc5fac503f9a22445571ade8568a422158809aad885cf79e42bd89ca7679e92e03bd1d5f057dbeeb748850f11a7306de01d20c79a2c07b3e40c172a4b558f02a2f16756781de9766388dc2e1f88efa5c24a61fcf82c0ef0603385ae7c58469b6a8f97faccd8f166cc432c4142516311a2da5141b8cf5d0d8542c2f393694a8648c0a6ab87eb092a22a9914a2419346b3dd705cbb69b76dc7715aad16815cc44c67a2207636257da085663c143b72092e01b22ec9705a5fb734ce92da882987e3c86dd6fabe02242dcd382efe0649ef9ad167f8c04e117ce7582eaa429fa9dbe0c1ffed38caf4f3a8be1f0d7e104a535267241a8e06d3c81f4d0c373f79efee35aa891414a44293a163375bd737aefd1e6b4f98a8e93d9e96155a1033fa3bee330d5ecab8c2e31b64a985847b020000",
    ],
    [
      "ETag",
      "hCXRtjTp9p/6bLtvN2LDlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1604090111888",
    },
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
      "f4",
      "fa92a8fe001b836dc94a5d87a6480e4e314e9456957dc0422e018e7047a228f27fef02b11b2b52f2d0278e9b99ddd9bddd6772c7b2908c89cfe2fb128aa7cfb7dc272d0292c6781b9bb7c6b9559ce6bfe6fd2f8fa65f30d7be8c271364b04a25689a27d016bc2c0210e3d5b21317bccc69c1791b03b5076a5b33545d1da99aa60d8743d40948a239cbee507d23652ec6ddee2e7727e63c4e80e64c74029eeeefbb0fbd6e5ef05b08a4e81ea6ec6216d17d3fe949c2032a19cf26ab251a2805146b48294baa02f7cad0ff7a18bac368da8991fcc002a041c0cb4c56b63044c0b388c565514725e36752db7c75204b6b6ecd3c65b65839ded186a6957873ac50a1acd7058832912d658335452c81350b370d92df29dfddc53922e8e0860a101be5ea87e55a8ab2a9489f26ca8932754e9543aded284727c7ca99bb585d28dfae0f40741b82902cabbd7ad44fa0f2f9d24efbed2356022a317703ae4dd5a0da501df9916f06d1b03ff023157c7fe89b03daf7d560a4831efa405127abe8b58a663c33c0507b91361af642ddf4c1a4fac018f5fc10225da360aa9aeef77a5a5f27db16792c98845326722e58d35372e5da9eb5f6dc95339b7a565d4644b16fa78db9aa88d73e251689a477eada5628e398a97a20dbf12c773af3ec4bab998939c434785adee354443411806c5ad0142414e73cc4a6918bc5d2f6ec85339da3a27ee88b1d4390f1efe77f02ef29afbb2ceb6f95cba8cbdc132e6952d68c87e640b401d96e5bff170223fc4106ae4023263f57967b4d9a2b172228200b3e7e7d24d7c0879b",
      "bc5b2be4e262611a21f11f672d105592a08066e6585adb7b519b9aa6f7494d2ee41bac67f477cdad62541121854cbe54d4ac55d5aa1a2ac59e84208e8a633b6788fe05eaae7750d6040000",
    ],
    [
      "ETag",
      "g7j6MErDpZL3+w7briRIVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d905f4fc23014c5bfcbf5758b5b02662ce181211192893ae5c11842ca7637cbfedcd9761842f8eede161f7cf4a5bd39fd9df69c9ea1965d0131ec65f535a03add54685eec90a11e1aa379eba9d3081ea0111593f35026b775f92e376a42c3d3f21e1fe57c369d32a1f34f6c05c4672825368586f8e30c9d68916dbb9d723732664ebd5556ebb7c5c32263a1a5c20aeb4d9ace92740117ef8fadafff65d95e3c38d03ec312157639da14bda203e666650b6ad1f60dfa9a0695a30607bb834ad1d00b45e4b3e28f033fbc0b46c12408c3308a22061bca8591d431bb79e56c60c88826a36fee072103ca8d5cb574eb91e5b1eb70740047dbfe9a929341fdac881368b48f8fa2e01a654e369ee1d8460de8412ef82f97d2405c8a46e3e507eba71eefa9010000",
    ],
    [
      "ETag",
      "C1iB/kfYiUr9ouOHDeMiCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfc95283300000d07fc9b974c226e24dc0080562879d5e181a031494867d71fc773bbe3f783f2027840e4336de1bda8217b0e5827a24479b414d5a3e3944d7e6244745a69f044c6663b6877981e3eb1722423ea92d8ed2582bdc2539b3b96222de1d8b489644689c4a2830f8ac85df3e332f1b2e20f4f567a13bdda677eff2d17149c805c95e3fd59842bdc64a3575570e4fb6b29e35bfc5ca38b8252a99e7e5770d6fcb10ee129775754c2a2b0d78dd739ca95a18c2213219a4c8560407466ff2eece7d149aa2d1d8314fa4fc1c0557b3b16818cb253800bab25b4f87ecf6c88ab2aa1ec0ff3c1b37461f7d8de63dedc1ef1fbba0fea218010000",
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
      "Fri, 30 Oct 2020 20:36:12 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-51-1604090111888",
    },
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
      "9b3014fd2bc8fbb8269090078914ad514a57d4846c84a47b6842c65ca85b8229369daa2aff7d17d374ad2ab59fb07dcfb9e7dc078fe4961709999298677735540f9f6e444c4e08289ae1abb75bcc3fdbf472247fdd5d9f8f7eec96aeb8cc663344f08625e9becca123455d3190d3eda69b55a22e69254407137586bd4e6f640dac89d5ebf51cc7419e843c5df2e216d9d74a95726a9a47ed6e264496032db9ec32b17f7e37effb6659891b604a9aaf254d5491e6fba25f72c1a8e2a2986d3768a0965045b0a73c470bff99497cfa3a7597d37d3743f03d6740191375a11a5b98828922e5595de9ac64fa48b4cd1707b27197ee223498c8eb7d1115740f274642158dd44309c679b05e199e7fbe0e56f3d05bfbd16671e1aee6ddc57ab95df91be3eac20d5c43d13807cd3566c6a9bef97841fd04a4e285560f9be746f9a941dedbb134049496d006a3b135a23dc79ac4693c66a9630fe3d4823876e2f190dab1c5260318243150e46951cda28528acc44ad27edf8a6cbb6f4783099d44d48641048ee5d0413a9e3067480e27e46fc5159c71590ac9db0e91abc00bdd280cb6fe621ebaba8494d6b93a6b8d3505bcf4a8b04004bd53d3a18972814a4dbb3d3f7483f922f4766e3be12564943d6cee70c629cd25209a56d83c05d54a24d830e2cf57ee1982f5c4be1d83924c7f3f92a6e78d8b172d7fa68738c0c6aed25fb20903cfffaaed1c113b9ad71a72df1e488996afb136747df883485cd2360bf9be75839fa47d0a20850a0af6f13411ac031ffe6bc7c5472cae3eca488577dc1d261b115641bb435c977b648ffbb66d110daed49bd870d83f76adc9d164843d14eaa9a276f1b1d056ac96cf200ce2f87dddadc33f71ccc4ed78040000",
    ],
    [
      "ETag",
      "IVCA+3aK6sZqhF6XVLEoKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1604090111888"
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
      "c2401085df65bc6d631ba162132e8aa290006229f1c210b2b4d31f6cbb65772b41c2bb3b5b118d9ae84d3b33fd667bce69f7f09c9511b8b0ca924d8d627796a07ad0858fb2ce95a45bc54b8960002a9610693d32dcae5fd370903e4c2f906d06c9b9b3ed768990618a0503770f71867924c17dda43c90aa4b590e775512e9bce00b5abf47016f8c3c91df5058f743f998f465e6fd48783715a8c9862cb86ffc7dae260c09aaf7c8c516019a2d65209bec6500db54dc98a2a4753f25a8428a1819b0789e075c504e7264dccb66dda8ed5b2ae2cdbb63b9d0e81390f99ca7849ec7c46fa4071c5729f6fc925380488a624c371737da17116354674399c044eabd1f71520697196e3f26f90f4a68c3ec307768ce03bc70a5e97ea44dd8eeebddf8ea34c3f8fbaf182fe0f422a4aea8404c3717f1678e3a9e61647efbd9d4239159c8294a833b4ad56a77de958efb15e731d35bdc755a2460342467fc72053e0c62c977878037243581e7b020000",
    ],
    [
      "ETag",
      "0WaewjzhcHhQP3eaqHg/6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1604090111888",
    },
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
      "00000002ff8554ef6f9b3010fd5798f7a595f2031a4848a4a8cb12b621a5a405d2aa9aa6c41843dd00a6d8a4caaafcef3ba0691b556b3f01bef7debd3bdff184362c0bd108052c7e2869b1fb7acf03d44254e2184eff7ac67633df4d6fefaf983d18f833cfc393c7f11810ac62099ce6096d0b5e16848ad1d2ebc4052f735c70de06a1b671d6d6faaaae0e554dd34cd3049ea0493467d906d87752e662d4ed1e727762cee384e29c890ee1e9cb79777bd6cd0b7e4f8914dde3945dc822ba1f273d4f38c192f16cbcf4c0402968b1a229660958786586c1b763e90ec3692706f096118a09e165262b5b20417816b1b82c6a55347a42b5cd372fc8b3e6d6d457a68ba5e39fac715a91d7a70a16ca6a55505126b2a5aca1a6882574c5c27513c937ca0f7771011170708705156be5e697e55acaebd15af93256ce958933538e156c4739393f557eba8be5a5f2fdf628089e432a24cb6ac73e0e125ab97d6eaafdfe2a2b029690ae09ae066a1f6ba63a0ca2604022b36704914a83c00c0606ee052a19ea540f038a81272bf59a85339ee955effa6a6468c630d2b4508d06d430355d0dce86a646b448d7fb61d0eba17d0b3d164cd219133917ace92cba716ddf5af9eed2994e7cab2e23c2d0bd5963ae2ae2ad4f094502e883baf6559471c8545d93edf8963b99faf6b5d54cc69cc698ecbc07988d082782021a1738a59216173c84a6a1cb8567fbf6c299cc81515ff7e50121d0e8f7d32bc1dfe5759765fd449eefdacecfdac001718d93b2866c9b1734c9c12bdaef5bff9701cb7dfd63150d14fe000296a121a3aba5e5dea2e6c8a5112d68463e9f0000d7814f77fab060808515833442c237cc1b11551252d066ee585adb7b660f7abde68f207121dfc50c5d3f34b8d2a814694a33f95c51b36055abea50295e4010847171ea5eefff01263cfc2ae0040000",
    ],
    [
      "ETag",
      "zS5vkLyCYjQiI77TDSSaAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90414fc2401085ffcb786d93d620d4261c40ab6208d122170d214b3bad85b65377a71824fc7767570f1ebdec4ede7e6ff7bd3dc1be6a7388615b951f3deae34589fc6c87144d5fb391ada3d6207880ac4a21cbbbf66b9818e46a346b46af4b7cbc4d7693f1580893bd63a3203e4151619d1b88df4ed0aa06c5b6d96877a3607cecac325bbc24f7492a4243b91516abf97c329d2770f6fed8bafdbf2cebb3073bdaa658a0c636439ba2d3b4c38c67b6a0514d57a36fa8d7191a70b03b2835f59dd244be28fed5a51f0e8341701d84611845918035658a2b6a855d2d251b30b1aa53fa947e100aa0dd28550bb71e441eb80e070748b4f5af697a64344f9a248141fbf8201afd44b9211b8f2536eb1e3dc894fce543c51017aa3678fe0639a49172a9010000",
    ],
    [
      "ETag",
      "gFnz6Eseti7Im7ZSeJDEjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b8e82300000d0bb742d460191ce4e3e6180208288954d83a5fc2a7f107132771f33ef06ef07c484d061c063c3680dbec012f3704dd676bb51c499848361995c73d126393b3a5de6b83b767ef6f313052a0f33892e53b024902bab2b557d887d2550c2d21a9924b8760d1f0405d19d16b263dde6fcea1029649e5f9552c2238e9bf5c64ab6c91839df3a96cfe5c9dc1f6838a1562443d323d66a6c32b9fc4d797c3322fd6e74443ba3125dbc48507336c4712e2a21ae8e7e2dbd3b373d95cf7d5f6cb45765ba9e7d458fd4cbc254afa56dda1de449133cb002f4d5163d1d70f1c90a3b0857e07f8ec7a5a59fbe42e39ef6e0f70fd180f8a318010000",
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
      "Fri, 30 Oct 2020 20:36:14 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-53-1604090111888",
    },
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
      "14",
      "fd",
      "2b",
      "91",
      "f75a20144802125a114ddb4c104608ada6698a6ce3a46e9338b51d2654f1df77e394ae55a5f629b6ef39f79cfb9167f4c8cb1d9a20c2b3a79ac9c3b70741d019621a67f02af9fefab00ed6ab1f548eeea93328fc35cea65340f086a57051e5aca3442d295393eda69b495157580ad181449dd1a0d377eca13db6fbfdbee779c0532c4f17bc7c04f6bdd6959af47a27ed6e264496335c71d5a5a2787defedcf7b95140f8c6ad57b2fd90315d5fb5cf47b2e28d65c94d3ed060cd48ac9841598e760e13f73472edea7ee725c743300ef396598525197bab10529a828539ed5d264459367646cbe39a08dbff0e7b145455e176552e2829d593bac71a20f15b3aea2d5d20ac2ab55b49cc5c12a4c36f31b7f39ebce578bed32dc5877377ee45b1a939c19ae35b52ecc2d840be8ef98d2bc34ea71f3dc28bf3428f838968600d28ab5c1c4b51ddcf7ec3149894b536f3022a9cd08f1883bc20362d3f1900d778461e01951c3c2a528b1e312929ea7091ef4bd6448866ee28dc6e384f4c7d067c7b1a9bb43c733f45772cd2eb9aa84e26d87d05d14c47e1247db703e8b7d53428aeb5c5fb6c69a02de7ad45020803ea9e9d844b900a5a6dd4118fbd16c1e07b77e3be105cb303d6c9e60c629ce15033496d03ccde452eca061289c2dfd4b009b89fd3c05159afc7e464dcf1b176f5afe4a8f61808d5d6dbe68134741786dec9c10b738af0d64df1e500596efa136707dfc034858d2360b5a6ffde8176a9f229632c94afaf534016c025ffe6ba7c5072cac3ec8280d77d81daa1a112a59bb43",
      "dc947b62bbc39163230396fa43cc759c53d79a1c4d4656b052bf54d42e3e14da8ad5ea150441187f68ba75fc077abefa0c78040000",
    ],
    [
      "ETag",
      "rivGyQIQOJcr5hc63mEQag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d925b6f82401085ffcbf4151348bd95c4076f6d4d945ac198b43166850151d8a5bb4b8d31fef7ce526b9bb649fb0233c337cb39078eb04b79042eacd3e4a54479b84a503f9a6286aaccb4a25b21b842b000354b88f4a2c520972d6fefb738ef8783dd66e13f259d0e112adc60cec03d429c621629709f8fc0598eb4168aacccf9aaea2cd087c20cfd6036f2eea8cf45647a6f3e1e777be3219caccb62c4345b55fc3fd696270bb6623dc31825f2108d96428a2d867a646c2a961719d6942865880a2ab87a904851164c0a51a349ad715d739a76ddbeb11dc769b7db046622643a159cd8b94ffa400bcdb299d8934b681220ab920cc7d5f595c669541931e5c80b9af54adf5780a4c56986abbf41d2bb61f4193eb07304df39968b92eb0b753b7ee8fe761c65fa79d4a01b0c7f104a53521724184d867ed09d4c0db73c7bef1d34aaa91414a44293a163d7db8d56d37e8fb52f4cd4f41e57cb122d0819fd1df7a906376699c2d31b4302a0887b020000",
    ],
    [
      "ETag",
      "NdWDmr7NwS7nnCcDkhWSZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1604090111888",
    },
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
      "a3",
      "40",
      "10",
      "fd",
      "57",
      "b8",
      "bd",
      "2f9ad802f6176dd278bdca7924957a94aacde5d22ecb80abc022bb7831a6fffb0d60d5c69c7e62d979efcd9bd9992772c7b3908c48c0e3fb128ac7afb722204704148df17675d997709deb4e5fe9ab5928cdf9f5348dc76344f08a25699a27d092a22c18c8d172d18e0b51e6b410a28542ad5eb765f68dae31344cd3b42c0b79129268c6b33b64df2895cb91aeef72b76321e20468ce659b89f4e55e7f38d6f342dc025352df4fa96316a97f9cf424118c2a2eb2f17281064a09c51a52ca13b4f0ca0c836ffbd26d4ed3768ce007ce803226ca4c55b65082892ce27159d4aa64f4446a9b6f0e6461cfeca9af4de74bd73fd8d0b4226f0e352ab5f5ba005926ea48db604d114f60cdc34d13c9efb41fdefc1c23e8e0864a901bedeaa7edd9daebd546fb32d64eb4897baaed2b38ae767072a89d79f3e585f67db51744cf2148c5b3dab14f83042ab7cf4d75de3f6545a00ad335c1f5c0e853d3328641140c5864757a4164401058c1a0473b81c1865de8860150e4a94abd66d14c649dc8643da313d23064113b666167181901eb0e4d66f521e840a76744c1f1806c8fc8df822b38e5321792379d25579ee3db6bdf5bbad3896fd7654414bb77da98ab8a78eb53619108faa0ae6d15e5023355cfe4b8beed4da6be73693793318398b2c7c53dce4644130988a6054d4141712e426c1ab9982f1cdf99bb931932eae7bed8212419fd7e7a25f88f79dd65557fc9c2f71cf7ac36b0435cd2a4ac210fcd81d01cbd92edf6e8ff3268b9dffd58c544853f88c06568c8e4d7d2f6",
      "56a4b9f220820232f6f90420b80e7cbad3bb05432cae18a6910aff71de98ac92b0029ab9e3696def993de8f5bb26a9c1857a17b38cdeaec19546a5082964eab9a266c1aa56d5a152be803088e3e2d6bddefe0380503ec1e0040000",
    ],
    [
      "ETag",
      "YV6seXp/I6t/YLds1OXCmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90514fc2301485ffcbf5750b9b993097f0008a4a42080ef7640829e36e0ebaddd9763364e1bf7b5b7df0d197f6e6f43bed391de05c354748e050959f1daacb4d89e6d50e29ea4e1acd5b4b8d46f0008d2899dc66235d46dd48de3ef6ebcd79f914a534994da74ce8fc036b01c9004585f2a821791fa01135b26dbf57ee46c6cca5b5ca72fdb6785ea42cd474b4c23a5bad66f3d502aede1f5b7bfe976577f5e04487140b54d8e46853b48a4e989ba52da845dd4af435752a470d0e7607a5a2ae158ac867c5bf8bfc701c44c17d1086611cc70c4aca85a9a86136db72363064844ce98bfb41c8807223572ddcdab33c761d7a0770b4ddaf697e31a8378a388146fb78144f7ea23c908d6738b6511d7a900bfecb97ca405208a9f1fa0d8eac58f3a9010000",
    ],
    [
      "ETag",
      "SU/sg4u/l2DvNPkIF4Ro7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e82301800e077e9b51a370f0bbba36a2b01a10cc7e1aaa9f52730b1108a14307bf7997d6ff03d919012b4e65d7d03853ed128dead855cb8cd12af0d9c6d8f3d6af5330d84c7d258233b5c299eb35c5cd9d96f6a0e5a5d7c5f74f7d2a4bb29200e29d5b20e9c936d005346a33e5e7944e0f948bfb2624d39f35c87b995b1376fa104b70b8ce491ea2d2ff28c09f222b9eff47813ec18dd3b9f16a6625b9c270f93a98cf74e3a815bed09c98be531884b477d4b7edc323858132ec6d0eeec144f742f2ec34798684d2f67669f7c3a11a7f5f22a4433044353b6a079f9caae36963543ff73de8d0dbcfa18440b2dfafd035a4c382718010000",
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
      "Fri, 30 Oct 2020 20:36:16 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-55-1604090111888",
    },
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
      "000002ff85536b4fdb3014fd2b91f795b669e923ad548daa0d235a9b8e24056dd314d9ee4d30a4711a3b2086fadf77e350069b049f62fb9e73cfb98f3c913b916fc9843091ee2b281f3fdd4a464e08689ae2ebe277585c240fe10fc7f7dcaffa8a97c3fde56c3a4584a8598aee8a0c5a4a56250735d984edb49455414b295b98a83518b4ba43bb6f8fed6eb7eb380ef21464c952e477c8bed1ba50934ee7a8dd4ea54c33a085506d2e772fef9dfb5ea728e52d70ad3a6f253ba8a23aef8b7ece24a75ac87cba09d140a5a08c6147458616fe32b7ecec6deab6a0bb768ae07bc181722eab5cd7b63005977922d2aa3459c9e489189baf0e247497ee3cb2b8ccaa5d1ee7740727d6966a1aebc702acf360bdb23cff7c1dac6691b7f6e3707ee1ae66edf97ab959f9a1757de106aea529cbc070ada975666e3e5e507f0b4a8bdca847f573adfcdc20efffb1d4049456d004e3913da45dc71eb3848d78e29c0e586203630e1b0de829b3f9b80ffd2d038a3c236a583497f9787cca1d67d08bfb0963719f6d47b103762feeda00bd6e7f9038744c0e27e4a1141a1642155289a643e43af022378e828d3f9f45ae2921a155a6178db1ba80d71e351688a0776a3ad4512151a96eb7e7476e309b47de95db4c780929e58fe11e679cd04c01a26989cdd350aee4161b46fcd9ca5d20d84cecdb31a8c8e4e713a97b5ebb78d5f2177a8403aced6af325611478fe1763e788b8a2596520f7cd811468f9066b43d7875f88c4256db290cb8d1b7c27cd5300099490f38fa7896013f8f05f3b2e3e6271f5514669bce3ee70558bf0129a1d12a6dc237b3474c6e64fd5b4d4ffc64698fbd8b53a479d117690ebe78a9ac5c7421bb14abd803088e3f74db70e7f003ae0752178040000",
    ],
    [
      "ETag",
      "DzSpHfwSZ8NIEKtVcr6qQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1604090111888"
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
      "0000000002ff8d926f4f833010c6bf4b7d0b09241b4392bd606eea926d4ec6cca2599602c79f0914dba22ecbbebbd73aa751137d53ee8edf1dcf3d744f1e8b3a211e898aeca905be3bcb40deaa2000d19652e0a361b5006210903443d2c97bf4b23b5c45f72b8b469dd0cdc5eb9ddfef2321e21c2a4abc3d490b281341bc873da96905d816b3b2adea8dce0c22778d2a2ec2603cbbc2bc6289ca67cbc9c41f4c46e4609c1a132ae946f3ff685b1f0cb26551002970a863505a1aceb610cbb15a53d0aa29c114ace53108a261fd22e3ac6d2867ccc48ad9ed9ab66375ac73cbb66dd775112c594c65c16a64970bd4472493b40cd88b509e20c075880ba7fa7cc67291e84554389e854e47ebfb0aa0b4b42861f337887a738abfe1033b5af09da3156b6b79a22e2737fe6fe3d0d3cf51433f1cfd208444a74e48389e8e16a13f9d2b6e7ddc7db09320e69ca191029487b6d571bb3dc77ab7f58229abf13b9ee42d1824a6783bae0b49bc9496020e6fb7c003dc7b020000",
    ],
    [
      "ETag",
      "6h7aF5DXbZX0ab4T8hsxVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536d6fa24010fe2bdcde97365101450413d3b34a7b34167b886d9acb459775a1db028becd24bd3f8df6f80dad634d77e12f779996766679fd103cb36688842166f4b5a3c7dbfe7216a212a710ca7ba6107db0bfbfee27483f119dff6d3eda91a8f46c060954ae0344f685bf0b220540c978b4e5cf032c705e76d306af7cdb66e6a86666bbaae5b96053a419368c6b20750df49998ba1aaee6b7762cee384e29c890ee1e9ebb9fad855f382df5322857a5852852a42fdbce849c209968c67a3e502029482162b9a6296408437e526fc7168dd6138edc4407e648462427899c92a1658109e452c2e8bda150d9f511df3dd075a383367122893f9d20b8ed638adc4eb63050b65b52aa82813d952d6d053c412ba629b7583e40fca993fbf040412dc6141c55ab9f9e9f88ea2ac3758d2b5f26da49c28636faa1caa5d4f393a3956cefdf9f24a39bd3d0021ef860ac9b23a6d80c38456495f06ea7ebcc64a8025546fc0d54033b16e69761885031259bd7e1869340cad70d0c7bd5023b6418d4d4831e864e55eab70c6331b5bba1d7635624666dfb0a881c38149f4ae695333ea6a51684451cf0e2db46ba1bf059374ca44ce056ba68a6e7c37705681bff426e3c0a9db88304c6eda84ab9a789f53429340faa4af5d85320e95aa2b72bdc0f1c793c0bd769aad98d11893a7c516f622c289a0c0c6054ea9a4c525dfc0d0d0d57ce106eedc1bcf40515ff5d59e21d0f0f7f39b2078caeb29cbfa174dab0676ef0caf7152d684c7e60375b5aed6d6ba6dbd8f76bbd6ff9d20b5697c6ea583c31f60c05b68c4e8d7d2f16f5173e4d3881634235f2f01906be0cb27bd7f5fc0851706658484ffb07244544548419bd563691def453db07abd01aac985fc80f50d633fe3caa372a429cde44b47cdfbaa465543a5782501081be3b9de39a0ff00fb33eb3fdf040000",
    ],
    [
      "ETag",
      "149TqJ9jJBdaaFoq5mqB/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1604090111888"
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
      "90514fc2301485ffcbf5754bb608642ee141109564129942348690aedccdc1b63bdb0eb310fe3bb7d5071f7d699bd3efb4e7dc131cca6607316465f1d5a1eaaf0a344b7b48517795d1bcb5d468040fd08882c9f2ed3d492b8dd3fbbbc55aae9fa24176dd2cc76326b4fcc45a407c82bcc46aa721fe3841236a64db76abdc8b8c99beb5ca7cf13a7b98a52cd4b4b3c2629524b793640667ef8fad3dfccbb2397bb0a72cc51c1536126d8a56d11ea599db825ad46d85bea64e49d4e060775128ea5aa1887c56fce1c80f47c120b809c2308ca288c18aa4302535ccae5e381b1832a24ae99bfb41c8807247ae9abbf5c8f2d075383a80a36d7e4d93dea07e56c40934dacf0751f013654a369ee1d84675e881143ccbc7d2409c0b1ef6f9025d4823efa9010000",
    ],
    [
      "ETag",
      "iXYLRlseCFDNVcVM84b3nQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7f",
      "c9591dd622bd1136098ad441042e0c4b4a53109044b64effbd4edf1fbc1f901505a634655d8d5bf00e964c5077c5ceed39284d25099f70ebada1ee1f326d328378a91f63375f0c112149082e962544733312b316795e91d85e977b94cb4caabe4bb61ea97a8ae4eb986ca530f2693a206a3b892d8e7b9f40037e045ee6b60645cdbda8f4e79619d5c21c7d2e0c8817b4da8ec3f5a435b59418f2975fe79132795175fa3c6773507318be79cdc15cee81488e6674bbba37de7221c6c2797c308b2be3c6ac9012747c42e5356ef821d7c006e0b92703a629796545595537e07f9eb2a5c7af3ec4d98007f0fb07d41b288e18010000",
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
      "Fri, 30 Oct 2020 20:36:19 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-57-1604090111888",
    },
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
      "000002ff85535d4fdb3014fd2b91f74adb84b624ad548daa04e8d4a6234d41304d91eddc04b3340eb1c340a8ff7d370e652024788aed7bce3de77ee499fc114542c68489ecbe86eae9db9d64e48080a619be0e2bcd1737778fd7e7ce234b6ece2e02f8d19b4e2688100d4bd16d994347c9bae2a0c69b7537ab645dd24aca0e26ea0cdd8e73640fec91ed388ee779c85390a70b51fc41f6add6a51af77a7bed6e266596032d85ea72b97d7def3d1cf6ca4ade01d7aaf75eb2872aaaf7b9e8f75c72aa852c269b351aa81554316ca9c8d1c27f66c28edfa7ee0abaed66087e101c28e7b22e74630b537059a422ab2b93958c9f89b1f9e640d6fec29f45169779bd2de2826ee1c04aa8a6b17e2ac13a0d574b6b1e9caec2e5349aaf82783d3bf797d3ee6cb5d82c83b57575ee87bea529cbc170ad89756c6e015e503f01a54561d4a3e6b9517e69d0fce3581a024a2b6883b16b1f51c7b3472c652e4fbdfe90a53630e6317748fbcce6a3010c1206147946d4b068218bfe51df3ec44ec46e42593c18a64eec0d38c443db6509ef33709c01d91d90bf95d07022542995683b44aec279e4c751b80966d3c83725a4b4cef5496bac29e0ad478d0522e8939a764d5448546ada3d0f223f9ccea2f9a5df4e780119e54feb7b9c714a730588a615364f43b59409368c04d3a57f826033b19ffba022e35fcfa4e979e3e24dcb5fe9110eb0b1abcd97aca3701e9c193b7bc425cd6b0379680fa444cbb7581bbadefd46242e699b855c6cfcf09ab44f21a45041c1bf9e26824de0cb7f6dbff888c5d54719a5f18ebbc35523c22b6877489872f76c7774e4bac4802bfd21e60ddc7dd79a1c4d46d842a15f2a6a171f0b6dc56af50ac2208e3f30dddafd03bc9681fd78040000",
    ],
    [
      "ETag",
      "5rtcLZjxYH1xbdZGQNeJ/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1604090111888"
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
      "401085df65bca50924fd93a41768ab626aad141b13639a2d0c880283bb8b4a9abebbb358ab5113bd8199e19be59c031b78ccca185c5867e9538db23948515f99224055e75af1ada2522158805aa44cce82aa11e992ec347c5d8ecf2f43ffe5e9c61b8d9850d13d1602dc0d2419e6b102f77603a52890d722caeba25cb59d05baa9cc701106feec94fb8262d3cfaea753ef683a81adb55f8c8516ab96ffc7daddd682075a0798a0c43242a3a592f48091f68d4d258a2ac78ea25a46a8a085db07a9a4ba1292a8c3934e6fd071fa76d73eb41dc7190e870ce614099d51c9ecf582f581262df2805ed825f419906dc98693f6facce32c6e8d98d29f85fd6eabef2bc0d2922cc7d5df20ebbd17fc193eb05d04df3951505dea3d7532bdf47e3b8e33fd3c6aec85931f84d29cd41e09fd8bc922f42ee686bbdb793f6a34aab9240e52a1c9d0b1bbc3dea06fbfc77a4c266a7e8fab658d164482ff8eb34c839b885ce1f60d7fc1d84c7b020000",
    ],
    [
      "ETag",
      "NRpyagVo0gTxVDJOTIwqXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1604090111888",
    },
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
      "da",
      "4010fd1577fb92485cd6e66690504ac16dad82a1c6244aab0ad666ec6cf02dde355114f1ef1ddb21098a9a3c61f65ce6ccecec23d9f1784b06c4e5c15d0ed9c3e7dbc4253502920578baff792ba85ce5fe4d4835c38a2f3bf7bbc9fd70880c5ea8048bd210ea22c9330fc460b56c045992a72c4b923a1ad53b7a5dedd236ed535555755d479d80d09ff27887ea1b29533168368fb51b41920421b0948b869744cfe7cdbdd64cb3e4163c299aa7259b584534df2f7a11261e933c8987ab2506c805646b88180f31c28b72eb7e39b56e7016350224efb907ccf3923c96452cb4f092d8e7419e95ae64f048ca98af3ec8d2981a634719cf579673b6615121de9c2b4c28eb7506220f654dd9604f3e0f61cdb79b0a4977ca377b3e430413dc300162a35cfd306c4351364262ba8df269a85c28236ba29cca4d4b39bb3857bedbf3d542f97a7d0262e02d08c9e332aec3dc108aa84f1335dfde63216012cb57e0ba47bb4cd569dff5dd9ee7ebad8eeb53705ddded7558cba55ebf0dedad0b0c75b2702f552cc621419b75db1dbfa5eb7d0abae6b36d4b7355c02355edba2dfc0f7e0f2839d4c87dc6254cb84813c1abb1922bdb748cb563afacf1c831ca367c86a39b54e18a265ee794d82492dee9eb50a03cc14ac51d999663d8a3b1635e1ad55a4c2160dec3f20e17c367a10064b38c4520219b255b1c1a59cc97a663ceadd11415e55d2f8e0c41067f1e5f04ce435a4e5996bfc43167c6d219cd16658623e9928579c9da571f44a31aad53adae761c551ba8ad81da6e504a7f93c3a1f67f736ca4db7edf584587bfc8c0f75189c9af95615f93eac8061f3288bd8ff702c925f0e1333fbe39e4e2abc332b8bf92e3167aa228e265506d238fca784f6a9df6348d94e44c",
      "bec1745d3b8ebdf0281c2182583e7554bdb9625425948b671282b84496697d47f41fd4e9d601f3040000",
    ],
    [
      "ETag",
      "vKjs0tUufhl02ENnV5wkDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1604090111888"
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
      "4f4fc24010c5bfcb786d9336a1a434e120862091a0563919429632ada57fa6ee4ec14af8eeceae1e3c7ad99dbcfdbdddf7f60255d91e20817d597cf4a8879b02f9d90e299abe66235b47ad41f0005915423e460f3ce249ba08c6b9a9beaaf3270fc3793a15c264efd828482e9097581f0c246f1768558362dbedb4bb51301e3aab2cd7aff3c53c15a1a18315d69bd5ea76b69ac3d5fb63ebaa7f59b6570f8eb44f31478d6d863645a7e988192f6d41a39aae46df50af3334e060775068ea3ba5897c51fc28f6c371300a26411886711c0b5853a6b8a456d8cd8b64032656754a67e907a100da8d523577eb49e4c875383940a26d7f4db381d13c69920406ede3a338f8897247361e4b6cd63d7a9029f9cbfb9221c9556df0fa0d4ac256dba9010000",
    ],
    [
      "ETag",
      "O5Kt4t9RG06fskzkwxtyyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "9642400000e07799eb744892bd3328fac164d8b87186662d9a6224b467df7d3b7bfd5d7d3f80e439edbaf471afe90d7c80892cb4793edf37225c0e5f6b4c18d4cfe8a83c5d4c915919c4bcac4e5cab8ca438c7938fe362bff1e3de7e35b21c1de3dd05b50c8e4a36748a1e36029736215d66858e3cfb6afa11b5d8d25e19519b7e1f8c7b2a42942d1cbadd772bcff40421ca25371c316bd58377d3aa5aad83d14be0229492005d5dacbb76c96dc1b978cfcf5a94586df539b786562c2c311d6ffe95c1b5e9bc6d8dd50aa9fd76202ce8030bbe34b8230398013a3625a75d5abeb3b2a26933f03f4f1f5343df7d4809a71cfcfe0124caaea418010000",
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
      "Fri, 30 Oct 2020 20:36:21 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-59-1604090111888",
    },
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
      "02ff85535d6f9b3014fd2bc87b6d02349040a4688d52da31256403d26e9a26648ca16e01536c327555fefb2ea6e95a556a9fb07dcfb9e7dc0f1ed11dab333447292bee3bda3e7cbae5293a4154e2025e6df78a78778e65fefd915fda5fad6e7f997bcbc50210ac67095c35251d09deb5848af92e1a172def1adc723e824423db1d9953c3325cc3344dc77180276899af597d07ec1b291b31d7f5a3f6b8e0bc28296e9818135e3dbfebfb53bd69f92d2552e8af25755011fafba29f4b4eb064bc5eec2230d009da26b4c2ac040bff99597af63af598e16a5c0078cf08c584f0ae96bd2d4841789db3a26b5556347f44cae68b038abcb5b78a35c2cbaeaa931a57f444cbb0c4897c68a876116e379a1f5c6cc3cd32f6b74112adbe789be578b55def3641a45d7ff1424f93382da9e26a0bed4cdd02b8807e468564b5528ffbe75ef9a941fedbb1f404901674082633638a4dc770d33c9d91dc99d8696ed03475d2998d27a9415c8b5a594a31f094a862e19ad7936ce6666e9627f8d49e2496e1e48933257632c5699e191363665b263a9ca03f2d93f49c89860b3674085d877eec2571b80b56cbd85325e4b82be5f960ac2fe0a547090502e89d9a0e7d947150eadbed07b1172e57b17fe50d135ed3029387e81e669ce3525040e3169a2769bbe119340c05cb8d770e6035b16fc7a040f35f8fa8ef79efe245cb9fe9310cb0b72bd5174571e80797cace117185cb4e41f6c3013560f9066a03d787df8084251db2a0ef3b2ffc8986a790e6b4a535f9789a0056810fffb5e3e20316561f6484843bec0e11bd0869e9b0434c957b643be6cc9922056ee59b987b3a3976adcfd167a415ade55345c3e243a18358279e411084f107aa5b877fef12f6a178040000",
    ],
    [
      "ETag",
      "59VcEk841zXfG5J4uvGfEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1604090111888"
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
      "85ffcb78b4246d82059b70a08a484414282763c8d24ecb62dba9bb5b0d21fc77672ba25113bdb433d36fb6efbd76074fb24c208095cc9e6b54db930ccdd41633d4756e34df2a2a3582036844c664369caca752de3c6d2e293c0dd79d571aaaacd76342c76b2c04043b4825e68986e06107a52890d762caeba25c369d03665bd9e13c9a8d2643ee0b4a6c3f598cc7fd703c80bd735c4c8411cb86ffc7dae3de810dad6698a2c23246aba552b4c1d88cac4d2d8a2ac796a65ac5a8a1819b0799a2ba128aa8c593d6d979cbf3ddb67bee7a9ed7ed7619cc29164652c9ec62cefac09011f98c5ed925f80ca8a664c369737de1b14c1a23b61c4d22bfdde8fb0ab0b454e6b8fc1b64bd6bc19fe1033b44f09d1305d5a5395257e3bbfe6fc771a69f475df6a3c10f421b4eea8844a3dbc13ceadfde5beef1e03ddc1ad4f78a38488d3643cf6d77cf3abefb1eeb05d9a8f93d8151353a100bfe3baea5812015b9c6fd1ba8b00b487b020000",
    ],
    [
      "ETag",
      "gGNhQiiKkjDoB+Bh7woGrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1604090111888",
    },
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
      "fe2b9ef70524da266ddaa6952a564ad8229594a5292f9aa6d6769c6048e2103b3084f8efbb249451a1c1a7a67e5eeeb9f3f909df8a2cc4634c457c57f2e2f1eb8da4f800734d62388d2f2fe891ba5b3e845343c697e797f69f53399d4c80212a9522699ef0969265c1b81aaf96edb890654e0a295b60d41a182d736058c6c8304dd3b66dd0299e447391dd82fa5aeb5c8d3b9d6ded762c659c70920bd566327d3defdc773b79216f38d3aab35bb2035554e7e3a2878964440b994d564b08502a5eac794a445235f8aa0ce9b75debb620693b06f2bd609c3026cb4c57b1c082c92c127159d4ae78fc84eb986f3ef0d2993bb300cd162b2fd8db90b4126ff6115168bd2eb82a137d8036d0532412be16e1a641f25b74e22f4e018104d74471b541173f1cdf4168eb81be4cd0219a7ac76857ef7a68ef701f7df717ab337474b50342e2902b2db23a6f4068c2abac2f2375df5f6425201aea37e07a680c88691b231ad1218bec5e9f4606a7d4a6c33ee951838d2c6e859413d0e9cabd56914c66c6c0024d685273d0edb22e89482f34cc28a45668f7cceec8ec59a119591c3f1fe08742687e2c542e9568e68a2f7c3770d681bff266d3c0a9db8808cceeb8095735f136a7862681f4415fcf152a2454aa2ec9f502c79fce02f7dc69f662ce63c21e9777b01911491407362948ca352f4e650843c3678ba51bb80b6f3a07457dd9675b86c2e35f4fff04c1635e4f59d7bff864be980603ab4eb0a59c93a4ac39f7cd0736db7d603c1ffcdf06227f6a020ebf81014fa111e39f2bc7bfc2cd91cf235ef08c7dbe0140ae814f5ff4f67901171e1894511afec3be31551561056ff64ea475bc17b5dd1df607b8",
      "2617fa1d36eaf6b603ae3c2a479ef24cbf74d43caf6a543554aa571280b02e9eeb7d07f42ff3b8f4a7de040000",
    ],
    [
      "ETag",
      "gXWbBsqSwdA0ogXVX8xMoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1604090111888"
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
      "85ffcb78b44d5a24159b701043948844ab78c010b22dd35a683b75778a21a4ff9dd9d583472fbb93b7dfdb7d6f4fb02f9b2dc49096c55787fa785120bfd82141d3556c646ba931081e20ab42c8f7284a57ab74fff498f0e560b8385cd7455a8cc74298ec136b05f109f212abad81f8e3048daa516c9b8d76370ac6c7d62ab3c5dbf47e9a8850d3d60a8be57c7e3b994fa1f7fed8dafdbf2cebde831da509e6a8b1c9d0a66835ed30e3992d6854dd56e81bea7486061cec0e0a4d5dab34912f8a1f057e1805c3e02608c370341a095851a6b8a446d8e5ab640326565542dfd20f4201b41ba56aeed683c843d7e1e00089b6fe354d8e8ce659932430681fbf1a043f51eec8c66389cdba430f32257ff95032c4b9aa0cf667b8dec284a9010000",
    ],
    [
      "ETag",
      "V66bZZbkMKRt+24Nv7mgbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cf4b7282300000d0bb64ad0e583ea13b45100a63b14a113619a001429060c2a7d0e9ddebf4dde0fd8034cfb110a86714b7e015cce9d6d8e41baf93f6ca84d98d4445460b572967ffdc1b706b72238c1b6889763d912cac4917078b74c027dd4812fdd49b5f9fce833e167e9c43456b6617c1f788d9ee586a81d9f89db52761e2a2e1a09c233d6f1338b06c90a32dc913f5325edac01d5949d718ba891df03c1644dc8f5aaf519fecae4b694215dab1fe365435455756941e531bcae5c093ee223559356491630592de4e836321b9306f44f9d0ea5865bb6a0756007f77846381c833fba21ac60afccf513f77f8d9dfe394630e7eff00a9c7102518010000",
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
      "Fri, 30 Oct 2020 20:36:23 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-61-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda84b0bc2052b446295d9112b211d2769a2664cc85ba014cb1695755f9efbb98a66b55a9fd84ed7bce3de73e78227b5e266446629edd35503f7eb915313921a06886af1b08536759afaeddebe99eff2d6eef16fb8b6c3e47046f599216550e3d299a9a819cedb6fdac164d456b217a98a837b17ad664301a3803cbb26cdb469e843c5df1728fec1ba52a3933cda3763f1322cb81565cf699285edecdfbaf66558b5b604a9a6f254d5491e6c7a2df72c1a8e2a29cefb668a091504750509ea385ffcc243e7d9bbacf69d1cf107ccf1950c64453aad616a660a24c79d6d43a2b993d116df3d5816cdd95bb0c0d26f2a628a3921670622454d1483d56609c079bb5e1f9e79b60bd08bd8d1f6d9717ee7ad15f6e56bbb5bf35ae2edcc035148d73d05c636e9cea9b8f17d44f402a5e6af5b07d6e959f1be4bd1f4b4b4069095d309a0e26d4b2074e9cc65396dac3719c0e208eed783aa6c378c09c118c921828f2b4a866d152946c648d87a338899c0446d1c86693c89e247664310070c086c9644c0e27e4a1e60aceb8ac84e45d87c855e0856e14063b7fb9085d5d424a9b5c9d75c6da025e7b545820823ea8e9d046b940a5b6dd9e1fbac162197a976e37e11564943d6eef70c629cd25209ad6d83c05f55a24d830e22fd6ee1982f5c47e1c8392cc7e3f91b6e7ad8b572d7fa18738c0d6aed25fb20d03cfffaeed1c1197346f34e4be3b900a2ddf606de8faf00791b8a45d16f273e706bf48f714400a3594ecf3692258073efdd78e8b8f585c7d94910aefb83b4cb622ac866e87b82ef7c8b687b81344836bf52ee6d8e363d7da1c6d4628a054cf15758b8f8576628d7c016110c7efeb6e1dfe01bff9322b78040000",
    ],
    [
      "ETag",
      "OeTf9CrLXEX7kixmjqAkHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1604090111888"
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
      "cbf8dac636c1824d7c28888a027229f2600859da2914db6ed98b8410febbb315d1a889beb433d36fb6e79c760f2f6911830f8b74b9d12876674b5443538c50ea4c49ba95bc900816a0624b22eb5eabb67d9aeae946e743671b3ce8fcfc7e787545848c569833f0f790a498c512fce73d142c475a8b78a6f3625e7516a85d6986e370d4e9df529ff3d8f4fd49b71b34bb6d3858a7c5982936aff87faccd0e16acf96284090a2c22345a4ac1d718a98eb129595e66684bae4584122ab87ab0145c974c706ed3c4f65cdbf59c9a73e9b8aedb683408cc78c454ca0b622763d2078a2b968df8965c824780a84a329c54d7571aa77165c4949d7ee8d52a7d5f019296a419ceff0649ef8ad167f8c08e117ce758ce75a14ed44df731f8ed38caf4f3a8eb206cff20a4a2a44e48d8e9b5c761d01b186e76f4dedc299403c12948892643d7a9352eea9ef31e6b8b9ba8e93dbe121a2d8818fd1d77a9023f6199c4c31ba70231bc7b020000",
    ],
    [
      "ETag",
      "76C4wVWuWqumQ0wAKum/JQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc5535d4fdb3014fd2b96270448fd445d2995102b6d36b285b64b53109b50e326b7c134898bed54aa10ff7dd70e85554cec610f7b8ae37bce3dc7c7d78f74c9f39876e99c270f05c8cd877b31a7150a9a25b8db5b7fbd5fb6d9e061d3f426911a1c9dfcb8ebf74e4f11c10d4bb16c954255894246a0bad3492d91a258312944151b55db47d566bbd16a9c349acd66a7d3419e8274e1f17c89ec3bad57aa5baf6fb56b8910490a6cc5552d12d9cb7e7d7d545f49710f9156f55dc93aaaa8fafba267a98898e6223f9d4ed040a140ce20633c450bafcc78fe69b7758db3ac962078cd236051248a5c1b5bd82212f9822785b45d69f7915a9bbf2de8c4f19c7e40faa3e93038085966c8e121618acc66125491ea0a09f14c0b9ec28cc76159592dc9677f7489157470c714a8905c5f38be438837ba76fc8310a187c473bf39e48cf48603b2dbc41d9283b343f2c51f4dc7e4fc66a788b6635830541e308dadb5b11b974bd7dca506a511f41cb4fbf67ae993a97221b93647748781e3f7fa817be594a97a90b0683379c05c172c5580682659061ae4a5880129e3d1c40ddcd1b0e721c34635de2214edfe7c7c25049b151883da7e8d56bb65f5b7802b961616b12e1774aff9718f3e3d55fea949133bdc2202c7a824d3ef53c7bfa1e5960f0b90904796f24e4e166c0b7f7d0ddbd1442c0e27ca288dff4af348199148822d073cb3f69ed99dd6f171835ab0d46f6a9dc6b179c179fcc7cab34661fb839442fa761ecd2faa29eb85e79808bef00acd4029969836d31c4fa280cd5320f6eec84b8e240c09cf89c99984c1cdd899d9acc30a3967315674bb456cc45d62ae69bbde373ffbc691f5518ec07ff2705bc6624406a3a18373f00b30f05a041b050000",
    ],
    [
      "ETag",
      "AvJjk6aDqy1LScsD29ZhCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfdd9642400000e07799eb7486a29dbdcb4f4a112174e34c6354c8ef08edd977dfce7e6ff0fd004c08edba9855392dc13798b080e664beafa1bc1c08bfb99a07c732f8777a2710e99ada552ee30a55bc5871e33c35e155c1d891f7b6a4067d239ec9608fcb07f25777df3e1fa9119c2be3a07bcd186eb2525494c54eb7ebe7b6674543f9c82201ce765fa2c7b897a45cc55322556b7f65b7d0e48e9498be9a4e5188db61454378ebda3bda8e4fe970d2d277c02556869d11bafe30f2028bd63798f72e7f4b3261e035426c36a1a4f4ba7ee81def52286e8ed76006e8583f5adac58f4f7621223403fff3984d35fdf4658a5bda82df3ff29df36918010000",
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
      "Fri, 30 Oct 2020 20:36:25 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-63-1604090111888",
    },
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
      "4e",
      "db",
      "40",
      "10",
      "fd",
      "156bfb4a129bdcec48518982a1511387da0ea8ad2a6b7733360b8ed778d75084f2ef1daf090521c153bc33e7cc3973c913b915c5964c0813d95d0dd5e3971bc9c811014d338cfef5861741f0ebf6bb28e06c5d5f1637727dfe309d2242342c4577650e1d25eb8a839a6ca26e56c9baa495941d2cd419f53bcec81ed89eed388eebbac85390a74b51dc22fb5aeb524d7abd8376379332cb81964275b9dcbdc47bf7c7bdb29237c0b5eabd95eca18aea7d2cfa35979c6a218be9264203b5822a811d15395af8cfdcb293b7a5bb82eeba1982ef0507cab9ac0bddd8c2125c16a9c8eaca54259327626cbefa2091bff4e7b1c5655eef8aa4a03b38b2b654d3443f96609d85eb95b508ced6e16a162fd64112cdbff9ab5977be5e6e5641645d7df343dfd294e560b8d6d43a31af001fa8bf05a54561d4e326dc283f0f68f17e2d0d01a515b4c9646c8fa8e3da1e4bd998a76e7fc8521b1873d97848fbcce6de00065b06147946d4b068218bb137da8eeca193383060c9c01e7b09f33c9aa45e1f230e1bb87444f647e4a1121a4e852aa512ed84c855b888fd240e37c17c16fba68594d6b93e6d8d350dbcf6a8b141047dd0d3bec90a894acdb81741ec87b379bcb8f4db0d2f21a3fc31bac31da7345780685ae1f034542bb9c5819160b6f24f116c367671482a32f9fd449a99372e5e8dfc851ee3021bbbdafc92280e17c1b9b173405cd2bc3690fbf6839468f91a7b43d7fb3f88c4236dab901f1b3ffc49da5008295450f0cfb7896093f8f4bf76387cc4e2e9a38cd2f8c6dbe1aa11e115b437244cbb07b63b3c763c62c0957e971b38e3c3d49a1a4d45d841a19f3b6a0f1f1b6d",
      "c56af502c224ae3f30d3daff03c6c49ff278040000",
    ],
    [
      "ETag",
      "x95PNNZkKineFOuVnjoOGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1604090111888"
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
      "ff8d92d14e83401045ff657c9426102b22491fa856dba4d6dad244639a660b034581c1dd456d9afebbb358ab51137d8199e1cc72ef850d3c66650c3e2cb3f4a946b93e4851df986282aaceb5e25b45a542b000b54899f48aea297b3d0c5c31a371bf7d17aef0364a3b1d2654b4c24280bf8124c33c56e0df6fa01405f25a44795d948ba6b340af2b339c8693c1e892fb8262d38f66c361d01df6606bed1763a1c5a2e1ffb136df5af040cb092628b18cd068a9243d60a407c6a6124595634b512d2354d0c0cd8354525d0949d4e249cb3d6a39aeddb64f6dc7713ccf6330a748e88c4a666753d6079ab4c827f4c22ec1654036251b4e9aeb338fb3b83162cac12874db8dbeaf004b4bb21c177f83ac7725f8337c60bb08be73a2a0bad47bea62781dfc761c67fa79d47910f67e104a73527b241c5cf5a661703536dc7ce7bdbbd6a8c6923848852643c76e7bc727aefd1eeb1999a8f93dbe96355a1009fe3bfa99063f11b9c2ed1b36b021607b020000",
    ],
    [
      "ETag",
      "8mpqix+A6aUoPH4YTheXcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553ff4fda4014ff579a5b4c341168a19642621c83ce3543d052746659e07a7dc59b6daff6ae3a66f8dff7da8a4accf427ca7dbebccf7bf7ee91dcf234247d12f0d55d01f9fad36f119043028aaef0f4e18fb4d746fcc3d147a743fa570f9db0dbbe383e46062f559226590c0d298a9c81eccf67cd552e8a8ce64234d0a861990dc3d24dbda71b8661db36ea24c4d198a7b7a8be512a93fd566b5bbbb912621503cdb86c32913c9fb7eedbad2c17bf8129d9da2dd9c22ab2f57ed1935830aab8488fe7330c5048c81790501e63841765187cdeb56e729a345748bee70c2863a24855190b2d984823be2af2ca95f41f4915f3d50799396367e86bc3e97ce2ef2f69528a97071a95da6291832c6275a82db1a788c7b0e0e1b246b25bedab373d430413dc500972a95d7d733c47d3c6d32bc7db7f06d06bec7e77b4136d301969bb56ee44db3f39d04ebde9fc5cfb72bd0362f810a4e26915dda7410c65eca7e9ba6fefb4145085156b70d1d52d6ad87a2f88822e8becce5110e9100476d03da29d40673d13cc30008a3a55ba572a9a8ab4c7a801168b821e30db323b41c76cb74366592674f46eaf4b7568dbac6b93cd2179c8b98211979990bc1e31b9f25cdf59f8de7c321cf84ed54644718ca33a5cd9c4eb9c0a9b44d23b7d6d4a940bac54de973bf11d6f30f4dd4ba75e9131ac285bcfee7049221a4b4036cd69020af23311e2d0c8f974e6faee743218a3a2baf7f32d4392fecfc71781bfceaa29abea97cc7ccf9d9c5601b68c4b1a1715e5befe207b34cbf6c86673f87f1b8c6c99efbb18e8f00b19f82a6a31b9983bde35a98f3c882087947dbc0148ae800f1ff7f6a52117df1a96910affe3be3159166139d47bc7932ade93dab6dabd36a9c8b97a839986b11d70e9513a4202a97aeaa87e69e5a82aa890cf2404715d26d5ac37ff00408a694ae9040000",
    ],
    [
      "ETag",
      "wxs8y1lXE0DGCaz0dEd72Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1604090111888"
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
      "4f",
      "c2",
      "30",
      "14",
      "85",
      "ff",
      "cb",
      "f5758b9b213097f0208621611299121f0c2165bb1b836d77b61d8a64ffdddbea838fbeb437a7df69cfe9058e65934108bbb278ef509eaf0ad42b3324a8ba4a2bde5a6a148203a845c1e4625547fbc5f5eb672c97c12cca9ae8eb71548cc74ca8748fb580f002798955a6207cbb40236a64db762bed8d8ce9736b94f9f2653a9b262cd4941961b98ee3bb493c85def9636b8fffb26c7a070eb44b3047894d8a26452be980a99e9b824ad46d85aea24ea6a8c0c2f6a090d4b54212b9acb8c381eb0fbd8177ebf9be1f04018315a54297d430bb7ee66ca0498b2aa10fee073e03d28e5c35b7eb89e51bdbe164018eb6f9354dce1ad593244ea0d03c3e08463f51eec9c4d31c5bcb0e1d4805ffe543a921cc45a5b0ff0602e59631a9010000",
    ],
    [
      "ETag",
      "KQmFhK/WxLrN8GFdnFzM7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282301800e077c9591c5914d39b18c1a50e9ba2ed2583bf610d88010ae8f4ddcbf4fc9dbe370a01585dd3e691b3127da02154f014a6876a6668ddddea73a2d0c7cd362cf3ec64a6abc4aad89a75d46db3d20bceeee77d758b39d19fbc7724825b9c6f5e78198bc0beca252cbc39d82dd8772a09ebf0dc6861b41edd03e72bcd12a7bc607dd7ed73198275b90051efa4a24a4879da86fa7716157463e14837d21f8d282ef057b54fdb61072bd2f866cabd405d26ad6a75b02c6699bccf8e97d7497097f88b9e1f67a4f6034e1d3ecceda15b8bea0a74852688f5552a584dd331abce319ea0ff396d868a8d7d83858209f4fb07676a507218010000",
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
      "Fri, 30 Oct 2020 20:36:27 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-65-1604090111888",
    },
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
      "3014fd2b91f74adb94b6495aa91a5d09a3529b6e690a42d314d9ce4d30a471163bb00af5bfefc6a10c84044fb17dcfb9e7dc8f3c917b5124644298c8fed450edbfdc49464e08689ae1ebbeeadfd8e5b7e8e69e3e0c07d963f257dbab6c3a458468588aeeca1c3a4ad6150735d96eba5925eb925652763051c71975fa8e3db4c776bfdff73c0f790af274298a7b64df6a5daa49af77d4ee66526639d052a82e97bb97f7dec369aface41d70ad7a6f257ba8a27a1f8b7ecd25a75ac862badda0815a4115c38e8a1c2dfc6726ecec6deaaea0bb6e86e007c181722eeb4237b6300597452ab2ba3259c9e489189baf0e64e32ffd79647199d7bb222ee80e4eac846a1aeb7d09d645b85e598be0621dae66d1621dc49bf9a5bf9a75e7ebe576156caceb4b3ff42d4d590e866b4dad33730bf082fa09282d0aa31e35cf8df2738316efc7d210505a411b8c5ddba17dcf1eb394b93cf5062396dac098c7dc111d309b8f87304c1850e41951c3a2852c460ea4a7e09dc609676e8c0d1ec674e47a317559627bce988ddc941c4ec86325349c0b554a25da0e91eb7011f971146e83f92cf24d0929ad737dde1a6b0a78ed51638108faa0a643131512959a762f82c80f67f36871e5b7135e4246f97ef307679cd25c01a26985cdd350ad64820d23c16ce59f23d84cecc731a8c8e4d713697adeb878d5f2177a84036cec6af3259b285c04df8d9d23e28ae6b5813cb40752a2e55bac0d5d1f7e231297b4cd427e6efdf086b44f21a45041c13f9f26824de0d37fedb8f888c5d54719a5f18ebbc35523c22b68774898728f6ccf1d0c1d62c0957e171b3aceb16b4d8e2623eca0d0cf15b58b8f85b662b57a016110c71f986e1dfe01e254f21178040000",
    ],
    [
      "ETag",
      "yr1Y0pBTYkav43gwdxt0Mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1604090111888"
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
      "00000002ff8d92414f83401085ffcb78a511924a91a407d4aa44dada8207634cb3858162171677174d6dfadf9d45ad464df40233c337cb7b0fb6b02eeb0c7c5896c5638b727350a09e99628eaae55ad1ad11b542b000352b88f442be7682597d3b585dc9e9e1e3b419bdc4c57048844a575831f0b79097c83305fedd166a5621ada582b755bde83a0bf4a631c3389987930bea2b91997e721345c14934829db55fcc98668b8effc7dafdce8207b19c638e12eb148d96468a074c75686c2a56351c7b4ab43245051ddc3d28a4681b2685e8d1a4e71ef51cd7eedbc7b6e3389ee711c845ca74296a626f62d2075a68c6e7e2995c824b80ec4a329c77d7271a975967c494e12471fb9dbeaf0049cb4b8e8bbf41d2bb62f4193eb0f708be73ac126dadf7d479340d7e3b8e32fd3cea2c48463f08a529a93d9284e3519c04e36bc3ddbf7b3fd96854d75250900a4d868eddf78e06aefd16eba93051d37b7c2d5bb42065f4775c961afc9c7185bb57b35eb2097b020000",
    ],
    [
      "ETag",
      "8Ilk1AQnY7hKrO/qOpEzSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1604090111888",
    },
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
      "0000000002ff85536d4fe24010fe2bcd5e4c34c74b81520a89f1107b5e4fe4a5148db95c60bb4c71a5edd6eed63b63f8ef376d4525e6f413659f97796676f6896c78bc223de2f3f57d06e9e3973be1930a0145d7787a363587ed4dfdf6ebe46f37d14ff9c5cfef9de9f4f818193c57491a252154a5c85206b2379fd5d6a9c8129a0a5145a3aa69561ba66ee85dbdd1685896853a096130e4f106d5b74a25b257afef6ad7d642ac43a009973526a297f3fa43b39ea4e20e9892f5fd9275ac22eb1f173d0905a38a8bf8783ec3009984740111e521467855aefc6ffbd6354ea3da1ac90f9c01654c64b1ca63a1051371c0d7595ab892de132962bef920337b680f3c6d309e8fbcc3258d72f1f248a3525b2c529059a82ada127b0a78080bbe5a9648b2d1bebbe34b4430c12d952097daf50fdbb5356d38beb6ddc31700bd86ce85ad9d68fdd199b66fe58cb4c39323eddc1dcf27dae9cd1e88e15720158f8be81ef543c8633f4fd7797fa7b9802aac58828b8e6ed286a577fdc0efb0c06ab5fd4007dfb7fc4e9bb67c9d750d30563e50d4a9dcbd50d158c45d461b60b2c0ef02b34ca3e5b78c6673c54cd38096dee976a80e4d8b752cb2ad903f295770c66522242f474cae5dc7b3179e3b1f0dfa9e5db411501ce359192e6fe26d4e854d22e983beb639ca0556caefcb1979b6db1f78ce955daec810d6943dceee7149021a4a40364d69040ad24bb1c2a191c978e678ce78d41fa2a2b8f7c98e2149efd7d3abc07b4c8a29abe297cc3cd7199d1701768c2b1a6605e5a1fc200734490ec8765bf9bf0d46368d8f5d1ae8f01b19f82a4a3199ce6df78694472e049042cc3edf002417c0a78f7bf7d2908b6f0dcb4885ff71df98cc8bb014cabde35111ef596d5986d124053955efb0765bdf0d38f7c81d2182583d7754beb47c540594c9171282b82ea362d6db7f6821d47ae9040000",
    ],
    [
      "ETag",
      "DQ6L5k/h+Px9p0BiKJF7QQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1604090111888"
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
      "cd",
      "6e",
      "c2",
      "30",
      "10",
      "84",
      "df",
      "657b6ca226a842148903a9a28284501b0a072a844cb20981249bda1b1042bc7bd7a6871e7bf1cff81b7bc65738964d0643d895c57787faf250207fd84582a6abd8c8d45263103c405685907144c964152d7a7b7e9cf6564fb8de4dc6e7d1480893eeb15630bc425e629519187e5da151358a6dbbd5ee46c1f8d25a653aff8cdfe244849a322bcc97b3d9389ac570f3fed8dae3bf2c9b9b0707da2598a3c626459ba2d574c094a7b6a051755ba16fa8d3291a70b03b283475add244be287ebfef87fde0397809c2301c0c060256942a2ea91176b9906cc0c4aa4ae82cfd201440bba554cddd7812b9e73a9c1c20d136bfa6e8c268de35490283f6f1e01ee4956c3896d0ac3bf42055f2939392effbdb0f4ee41898a6010000",
    ],
    [
      "ETag",
      "EBoRHVBS2ht+I2V/eZbHAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb642d4e0286427762898856f953d9649898a840112108d8e9ddebf4dde0fd809c31de7554de4a5e837730e5aa3967f36d03adc5c017963c8667a4c2d089a3a360714669369ab56511cfe9de94d0dc3beea65f1ebebc2a0c516f675aeadbdb11ad3e6b8539083d6e03ad93c4089783820fccbfc852ea72177945498b5d9ba71faad6dd9fa83a47504041b0c18ffb3a39ede26fe75e9562224d5cbbfd2133446a91a0ac307ef40a569abd0a99875c1d25e31a468440c89b343805dbd65707bcd0d7d220ee664536c5051171c676eef93e98013e36d79677f4faca6ad83467e07f4ee5d4f057dfe279cb5bf0fb075c5db9db18010000",
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
      "Fri, 30 Oct 2020 20:36:29 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-67-1604090111888",
    },
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
      "0000000002ff85545d4fa34014fd2b64f6d5165a4a4b9b346b537125db5205aad1cd860cc380a3944166d018d3ffbe7706eb6a4cf40966ee39f79cfb012fe89e55199aa194150f2d6d9e7fdcf1141d212a7101b7e1d8b46efdc1bdfc7d633fdd38d7958b697e319f03822996c0bbbaa43dc1db865031db46fda2e16d8d1bce7b90a8379ef406636b644dadc160e0ba2ef0042df315abee817d2b652d66a679d0ee179c1725c535137dc2776ff7e6e3d0ac1b7e478914e64749135484f9b5e8cf92132c19afe6db080cb4823609dd61568285ffcc2c3dfe98bacff0ae5f00f891118a09e16d25952d48417895b3a26d7456347b41dae6bb1714792b6f191b8497edae4a2abca3474686254ee4734d8dd370b336fce07413ae17b1bf09926879e6ad17fde566b55d07917175e6859e21715a52cd35e6c6b13e057000fd8c0ac92aad1eab6ba5fcda20fff3581401a405ed82c9c41ae3816b4dd33c9d90dcb59d34b7689abae9c4c1766a91e9888eb29462e06951cdc215aff0904c88e3d8c9744aec64940d490289b26498a54362dbae63a704ed8fd053c3243d61a2e682751d4257a11f7b491c6e83e522f67409396e4b79d2195305bcf728a140007d51d35e45190725d56e3f88bd70b18cfd4baf9bf08a16983c470f30e31c9782021a37d03c499b35cfa0612858acbd1300eb899d1f8202cdfebc20d573e5e25dcbdfe8310c50d995fa89a238f4835fdace017189cb56431ebb175483e55ba80d5cefff021296b4cb822eb65e788dbaab90e6b4a115f97e9a00d6816fbfb5c3e20316561f64848433ec0e114a8434b4db21a6cb3db0dda93d1a230d6ee4a79833b40e5d53395446baa3957cada85b7c28b4136bc51b48fd4eb641a0bbb5ff07c3f9218278040000",
    ],
    [
      "ETag",
      "R6/0hI1ktKZ3wZ5Yn8aefQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1604090111888"
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
      "02ff8d925f53825010c5bfcbf68a335086c68c0f5a56169a213e358e73850531e0d2fd53438edfbdbd64d65433f502bbcb6f2fe71cd8c26356c6e0c12a4b9f348afa2845756f8a00a5ce95a45bc54b8960012a9612795cfbd34df27a5b059d5ae34d19fb27da4d7b3d2264b4c68281b78524c33c96e03d6ca16405d25ac4735d94cba6b340d59519cec26034b9a2bee0b1e92773dfef0ffc21ecacc362cc145b36fc3fd6163b0b367c15608202cb088d964af00d466a646c4a565439b624d72242090ddc3c4805d715139cb768d2723b2dc7b5dbf699ed384eb7db2530e71153192f899dcf481f28ae581ef01772092e01a229c970d25c9f699cc58d11538e26a1db6ef47d05485a92e5b8fc1b24bd6b469fe103db47f09d6305d7a53a5097fe5dffb7e328d3cfa32efae1f0072115257540c2d178380bfbe3a9e1167bef835aa19c0a4e414a34193a76bb7bda71edf758cfb9899adee329a1d18288d1df719d29f012964bdcbd01516c65907b020000",
    ],
    [
      "ETag",
      "2yLPjfzKpR7yueJndL3u6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1604090111888",
    },
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
      "10fd572cef0b68f41730563a215620b0883629490a4208b526b904431207db614288ff7d67a785556cecf33ec5b97befddf3ddf999def332a1037ac3b3871ae4d3a73b71433728689661f4e473759e89d3e917f87aecff5407a3e9c50f27dbdb4304372cc58a2a879612b58c410da6613b93a2ae9814a28542ad9d7eabb7d3ddeeee767bbd5ebfdf479e823c1df1f21ed9b75a576ad0e92c6bb73321b21c58c5553b16c56bbcf3b8d9a9a4b88358abce6ac90e56519d8f8beee722669a8b726f1aa2815a819c41c1788e16de98c9cdf755e93667453b43f0238f81c5b1a84b6d6ca1442cca9467b5b4aa74f04cadcddf0e347446ce61440efda917adcd5961c8f375c21499cd24a83ad71b648e774a790e339ecc9b4c754f8e037f8c197470cb14a839c186070e2123ffc209d6e64aa347141ab9a70ed92743ef88aceab81e59db5f2727813f9d9083cb95243a4f206558fc886954d7c671d21c5d334e0d4a2368d16bf7fd84e98bc97221b936b774bdc8098687917bee348d1d41c6e2a7f0015b9bb25c01a2996405689063910052267ee846aeef0d47c8b0dd9a2c118a0eae9edf08d15305c6a0b65f1ab963278c86e3097d79d9f83b0c2ded6c5b9b4bc039cb6b8b786c0eb4870ad788c05d69c8f46cea0497b4090590828432b6940f3a61c136f1cf955fee1f627103b10c4e5173a579ac4c9158824d47bcb0f616ecddeed6668f5ab0d4ef72db5bbbe69996c91f338b1ab5d50729850cecd2995faca6ac175e62477872665776c5e5c3225480522c33f29e2005d3f12d2f33a27856a2b604920a49d2ba8c0dadd9501b6232ab0b283531335103f23aba3609ebaa125243f2a6828066b9c32870bd93f56f8bdf83cbc809f1c968",
      "72d51bf437afcda5ec559a3df97faf71dd0cc7f839f23d07b7f117f6d9b6db86050000",
    ],
    [
      "ETag",
      "G+pVgoKU5e7FOwsBLUWHEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cb",
      "72",
      "82",
      "30",
      "14",
      "00d07fc95a1c3460a53be8f88436a1160b6c323c2e0251408c24d2e9bfd7e9f983f383922c83db8d899643835ed123995bd36cea76ba634868369f5ddc2e720af43d68ebf99e4747cd378f0aa4b59af128bdc6f9fac4295e9251b8c788f0415dcbdd4b110ee16238e0bb9d68bdd1fa3b7c31aafa442febc37c34f6b1678ee7edf74a8d32139555868f7393865a7a2d1ae9e71b9d40ab6f54a12bfa867daf26adfcea807af9f943d4b39afb8c80e854c3f076e99564c6a5ef3641a102d3d2d215118eb0991395f1dd05903b3ae0b42605d36c1b4d10a8aeeae1c6aa67169b963541ff73261e1d3cfb0e243df4e8f70f5b41d3f218010000",
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
      "Fri, 30 Oct 2020 20:36:30 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-69-1604090111888",
    },
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
      "ff85535d6f9b3014fd2bc87b6d02a4348148d11aa5b4cdd4908e9056db3421632ed40bc1149b745595ffbe8b69ba7693da276cdf73ee39f78327b2e1654ac624e1f97d03f5e3a75f2221470414cdf17576e9fcb66f76d3e6fb97eb8bcdd0f4e164e33c4c2688e02d4bd26d55404f8aa66620c7eb553faf4553d15a881e26ea0dbd9e3db41ccbb36cdb765d1779128aec8a971b64df2955c9b1691eb4fbb9107901b4e2b2cfc4f6e5dddc0dccaa16bf802969be953451459aef8b7e2e04a38a8b72b25ea18146421dc396f2022dfc65a6c9e9dbd47d4eb7fd1cc13bce8032269a52b5b630051365c6f3a6d659c9f889689baf0e64e55ff9b3c860a268b6655cd22d1c19295534568f1518e7e17261cc83f365b89846f36510af6697fe62da9f2dafd68b6065dc5efaa16f289a14a0b9c6c438d5b7002fa89f8254bcd4ea51fbdc2a3f3768feff585a024a4be882f1c81a52dbb5bc244b462c738f4f92cc82247193d1093d4e2ce639e0a40950e46951cda2a5288f01d2413674e3ccb107b1336069ec5a83519c24de103c6fe4b8d421fb23f2507305675c5642f2ae43e4369c477e1c85eb60368d7c5d42469b429d75c6da025e7b54582082dea969df46b940a5b6ddf320f2c3e92c9adff8dd84af20a7ec71758f33ce682101d1b4c6e629a81722c5869160baf0cf10ac27767d084a32fef144da9eb72e5eb5fc851ee1005bbb4a7fc92a0ae7c185b67340dcd0a2d1905d7720155abec3dad0f5fe27227149bb2ce4ebda0fbf91ee29840c6a28d9c7d344b00e7cf8af1d161fb1b8fa282315de7177986c45580ddd0e715dee81ed59ae3b201a5cab7f63b635f00e5d6b73b419610ba57aaea85b7c2cb4136be40b088338fe40776bff07206f8a5478040000",
    ],
    [
      "ETag",
      "CH4x1VvAuZJPGk6/Ee5k4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92d16e82401045ff65fa0a09244a95c407b4b6d2a0b58a264d63cc0a836281c5ddc5c618ffbdb3d4daa66dd2bec0cc7066b9f7c2115ed222061756e97a57a1385cad513dea6282b2ca94a45bc90b8960002ab626b2d9c560eef956bb77bf1f946134db0de64f5ea743848c369833708f90a498c512dce723142c475a8b7856e5c5b2ee0c5087520fa7e1c41fdd519ff358f7a3591078dda00f27e3b21833c59635ff8fb5c5c9802d5f4d30418145845a4b29f81623e56b9b92e56586a6e4958850420dd70fd6825725139c9b34319db6693b56c36a5bb66db75a2d02331e3195f282d8d994f481e28a6513fe4a2ec12140d425194eeaeb9ec6695c1bd1a53f0a9d46adef2b40d29234c3e5df20e9dd30fa0c1fd83982ef1ccb7955a80b751b3c78bf1d47997e1e75e385fd1f845494d40509fd617f1a7ac3b1e61667efdd834239169c8294a833b4ad46ab79ed58efb1f6b88e9adee32a51a10111a3bf63902a701396493cbd01a32df20c7b020000",
    ],
    [
      "ETag",
      "5BeLVAI09CJvHpTcUqHVYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1604090111888",
    },
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
      "53614fdb3010fd2b96f70524685a60ac7442acd00c22dab44d521043a835c935189238d84e2586f8ef3b3b2dac62639ff729cedd7bef9eefcecff4811709edd05b9e3e56209f3edd8b5bba4541b314a367e7f7813ad85d3852e7bdfe588d273fb29fddc3434470c3522c2f33d856a29231a8ce246ca452542593426ca3d0f697e6766bbfb9d73c68b65aad76bb8d3c05d9bccf8b0764df695daa8ee3ac6a375221d20c58c9552316f96bdc59ec38a514f7106be5ac9774b08a723e2e7a948998692e8ac34988062a05720a39e3195a786326b7dfd6a51b9ce58d14c10b1e038b635115dad842895814739e56d2aad2ce33b5367f3bd0d0edbb271139194efc6863c672439e6d12a6c8742a415599de2233bcd39c6730e5c9acce940fe47b301c60061ddc31056a462ecfdcc025a43fbc74838d99d2e81185fadeb94b8e48d7ef91751dcf271b479be434184e46e4f86a2d89ce1398332cde631ad5b5719cd447cf8c5383d2085af6da7b3f61fa62b25c48aecd2d3d3f7283ee49e45db87563fb90b2f8297cc4d6ce59a600d14cb21c34c881480029a361e845ded0eff69161bb355a2114ed5c3fbf11a2a7128c416dbf34f2066e18750723faf2b2f577185adadfb33657800b965516b1a80fb4850a3788c05da9c9743c71832b5a870298838422b6940f3a61c136f1cf955fed1f627103b10c4e5173a579ac4c9158824d473cb7f696ec83bde6fe2eb560a9dfe55a9f77cc332d923f6696352aab0f520a19d8a533bf584d592fbcc08ef0646c5776cde5e3329483522c35f2be2039d3f11d2f52a2785aa0b604321792ccab2236b47a436d88c9b4caa1d0c4cc4475c8ebe81a24acca52480dc99b0a02eae50ea3c0f34f37bf2e7f8faf2237c427a3c975abd3deb93197b257a9f7e4ffbdc64d3d1ce3a737f45ddcc65f61bf6c1686050000",
    ],
    [
      "ETag",
      "HKjRs93v/rtmDLQsQUZlzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfd97282301400d07fc9b33a5454a46f060417405914e58581f43261190d21406ca7ff5ea7e70fce0fca0881ae4bc5b38607fa44af6caecfc8ecc814bc188bf0dbbbc7c6422599832bd92a4610d8d5f05034263674f7e05b9e1543611f44811d2f51bcf26490eecbd2d453b96e2ffa3cdd312bbf89ab6bd2c61eade0649cc3dba619ece17a26f860894c1da75aa8dd9ff10799c23e142272eb4ae6b0f053da42e22d4d8649df2f6b3099d1e0026add97cdfc725eef47a9c7bd99bb51a4c276e5e661ad248e3a3a6634e529a584aefcb27264d3969c06473b96239a2090ace4d0a5e53bab2e757d82fee7a9783178f731641c38fafd037895655e18010000",
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
      "Fri, 30 Oct 2020 20:36:34 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-71-1604090111888",
    },
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
      "00000002ff85535d6f9b3014fd2bc87b5c939042028914ad514ad768095981b49aa609d9c650b70453db748aaafcf75d4cd3b5aad43e61fb9e73cfb91f3ca17b5e65688a082f1e1a26f75fee04412788695cc06bfc751f38737fbb9772bd21d56d85c98f87abd90c10bc6529bcab4bd653a29194a9e936ee175234359642f42051cf1bf68663dbb527f67038f47d1f788a95f98a57f7c0bed5ba56d3c1e0a8dd2f84284a866baefa54ec5ede078fa7835a8a3b46b51abc951c808a1a7c2cfaad14146b2eaad93606038d6232653bcc4bb0f09f9991b3b7a9fb1ceffa05801f39659852d154bab50529a8a8725e34d26445d327646cbe3aa03858058bc4a2a26c76555ae11d3bb132ac71aaf735b32ea2cdda5a86179b683d4f969b308d1797c17ade5f6c56db75185b37974114581a939219ae35b3cecc2d840be8674c695e19f5a47d6e959f1bb47c3f969600d28a75c1d4b3c778e8db1392138fe6be3322b9cd08f18937c20eb1e9c4656e4618069e11352c5c892ab31dc7f1294d479ee7a6eed873527f4286e9844e6cdf71333b1b117438417f25d7ec9cab5a28de7508dd44cb244893681b2ee649604ac87153eaf3ce585bc06b8f1a0a04d007351dda2817a0d4b67b192641345f24cbeba09bf08a1598eee30798718e4bc5008d25344f33b91619340c85f375700e6033b19fc7a042d3df4fa8ed79ebe255cb5fe8090cb0b5abcd17c549b40cbf1b3b47c4352e1b0379ec0ea806cbb7501bb83efc01242c6997055d6d83e817ea9e229633c92afaf934016c029ffe6bc7c5072cac3ec8280d77d81daa5a112a59b743dc947b644fdc913b42062cf5bbd8d83b3d76adcdd166643b56e9e78abac587423bb146bd802008e30f4db70eff0095ceecf778040000",
    ],
    [
      "ETag",
      "S+yE3A8UyrrMObnhnabKqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1604090111888"
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
      "10",
      "85",
      "ff",
      "cb",
      "f4151348ac17121fb45a4b8ad40b364d1a635618140bbbb8bbd418e37fef2cb5b6699bb42f30337cb39c73e0082f298fc18555bade95280f576bd413534c51959956742b04570816a0666b228709aa36e7f3d9be5fecbda7f83edd3d06934e8708156d3067e01e2149318b15b8cf47e02c475a8b4456e67c597516e8436186b370ea0543ea73119b3e98fb7eb7e70fe0645d1663a6d9b2e2ffb1b63859b015ab292628914768b414526c31d29eb1a9585e645853a294112aa8e0eac15a8ab26052881a4d6a4da7e634ecbaddb61dc769b55a046622623a159cd8f98cf481169a6553b12797d020405625194eaaeb2b8dd3b832624a2f081bf54adf5780a4256986cbbf41d2bb61f4193eb07304df39968b92eb0b75eb3f747f3b8e32fd3caadf0d073f08a529a90b127aa3c12cec8ec6865b9cbdf70e1ad5580a0a52a1c9d0b1ebadeb66c37e8ff54698a8e93dae96255a1031fa3bee520d6ec23285a73796645c0a7b020000",
    ],
    [
      "ETag",
      "Gfes9nnUSwDpwIXdKiqVNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1604090111888",
    },
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
      "6d",
      "4fdb3010fe2b962704687d656d814a8815085bb4d274690a62136adce41a4c93b8d84e2584f8ef3b3b2d50b1c1c77d8aed7bde7cbe3cd239cf63daa5539edc17201f3edd8929ad50d02cc1d360bff007ed60daf932cfb3cff1f0ead71e7793a3234470c3522c5ba45055a29011a8ee78544ba428164c0a5145a1eafe5eb5d969b41a878d66b3797070803c05e9accff339b26fb55ea86ebdbef6ae25422429b00557b54864cfe7f5e55e7d21c51d445ad5372debe8a2eaef9b1ea722629a8bfc683cc200850239818cf11423bc30e3e9d74de91a67592d41f09247c0a24814b936b1502212f98c2785b4aab4fb486dcc570b3a72face69404ebdf120d8095966c8e12e618a4c26125491ea0a09f14e339ec284c7615959ccc9b9ef5d600513dc32052a2457df1ddf21a4ef5d39fe2ba5befbc321c7a43738239b42ee80ec1cef926fbe371e9293eb8d22468f61c6d0fd8c6994d726725c2e5df39e1a9446d0aad9eedb27a64fa6ca85e4da5cd31d048edf3b0ddc4ba7ec6c1f12163d8ceeb1b733962a4034932c030df242c48094a1377203d71bf4fac8b0ed1aae118a767f3fbe108287059880da7ee979dfeb059d964db0865cb2b4b09865b9a05bcd5abbb5459f9e2aff16c2d01fc93451e10611384e2599fe1c3bfe352d8f7c9881843cb294777a65c1b6f0e15fb11e51c4e290a28dd2b8579a47ca9844126c39e0998db7621fb6db871d6ac152bfa9755a0df327e7f15f2b2b8fc2ea839442fa762ecd16dd94cdc273ec08fee9159a81522c3132e31c6fa2804d5320f6fdc8731f4918129e13d3671206d74367b27ab4b0424e584c62511896ed7297946fb5de6d97db6d13ccc629a7e1ff46b9299b64bccebc818353f1073fc7ef2e31050000",
    ],
    [
      "ETag",
      "T7uRN5Tb63knm+dPWZ2iIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb642d0e8100d25d1010b58a0855609321181411a4fc62a6d3bbd7e9bbc1fb01599eb3be27c3b3620df8002253cc793edfb6b285382b71784c8a7d2dd658f617d00fac2c35e141a47c8b6adea0340b9a08f69501e1104ff7756d60993c6cc57013de8ee183f29b9b537a30f4ee482be5a49534f5f11813672aede91a9fd170c1aa349d4fe86ac7a99f2ca45db08958d49643f4849efb6a3e8b7e89280e889a8ddf02269a7e2f34875fba097998e41ea2b6a07ba6ee2c7a6ba42fad161ba810dd71bcb059f94b6fb08a83b24abc11520e6680bddab2633d29df595533cd19f89f9341b4ecddb758d6b10efcfe0125175eb418010000",
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
      "Fri, 30 Oct 2020 20:36:35 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-73-1604090111888",
    },
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
      "0000000002ff85535d4fa34014fd2b64f6716d015b296dd2acb5c5b549a14aa9ee66b321c3f482a3944166d034a6ff7d2f83753526fac4ccdc73ee39f7836772cf8b0d199184670f3554bb6f772221470414cdf0d5b9f4bf4f2e9dde2ed8d933f3acfe75767f6565e3312278c392745be6d091a2ae18c8d17ad5cd2a5197b412a283893a835ec776acbe35b46cdb765d177912f274c18b7b64df2a55ca91691eb4bb9910590eb4e4b2cbc4f6f5dd7c3c36cb4adc0153d27c2f69a28a343f17fd910b461517c578bd4203b5842a862de5395af8cfdc24a7ef537739dd7633043f720694315117aab185299828529ed595ce4a46cf44db7c73202b6fe14d238389bcde167141b770646ca8a2b1da95609c874bdf9807e7cbd09f44f36510afa6179e3fe94e978bb51fac8c9b0b2ff40c45931c34d7181ba7fa16e005f53720152fb47ad43c37ca2f0d9a7f1c4b434069096d301e580eb55d6b98a4c980a56eef24492d481237199cd05e62b1611ffa9b0428f2b4a866d142140377e85a4e3f8907cc76e23e24bd7808d08fedf498f6a965a7e050b23f224f155730e3b21492b71d2237e13cf2e2285c07d349e4e912525ae76ad61a6b0a78eb51618108faa4a67d13e502959a76cf83c80b27d3687eedb5135e4046d96ef580334e692e01d1b4c2e629a87cb1c1869160e27b3304eb895d1e82928cfe3c93a6e78d8b372d7fa54738c0c6aed25fb28ac279f053db3920ae695e6bc8637b20255abec5dad0f5fe2f227149db2ce46aed85bf49fb14420a1514eceb69225807befcd70e8b8f585c7d94910aefb83b4c3622ac827687b82ef7c01e3ac8271a5ca90fb163c73a74adc9d164842d14eaa5a276f1b1d056ac96af200ce2f803ddadfd3f00a950d478040000",
    ],
    [
      "ETag",
      "6PM+AP63yNy1D/BuXBkQ0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1604090111888"
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
      "1085df65bc2d491bb140132f0a8234293f42d10b43c8d24ea1b8edd6ddad8610deddd98a68d4446fda99e937db734e7b80a7ac48c08375b679ae50ee2f36a8ef4c31435571ade8568a422158809a6d88e49dd8ed6c27f7a1af83f97af8d0eaf4a603fffa9a08156f3167e01d20cd90270abcc703142c475a8b05aff262557716e87d6986f368168c6fa9cf4562faf1220cfd6ed887a3755e4c9866ab9affc7daf268c14eac6798a2c42246a3a5946287b10e8c4dc5f2926343894ac6a8a086eb071b29aa9249211a3469b42e1b8e6b37ed8eed384ebbdd26908b98e94c14c42ee6a40fb4d08ccfc42bb904970059976438adaf2f34ce92da88298371e4366b7d5f019296661c577f83a477cbe8337c60a708be732c1755a1cfd4209cf8bf1d47997e1e75e347fd1f84d294d4198982517f1ef9a3a9e19627efddbd463595828254683274ec66fbaae5daefb1f684899adee36959a10531a3bf639869f052c6151edf00b6dd9c167b020000",
    ],
    [
      "ETag",
      "l9c69hOVLAtISbHW79CPFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1604090111888",
    },
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
      "5b4fdb3014fe2b96270448bd5054da5209b142b32d5a9b74690aab26d4b8c969302471b11d2684f8ef3b7628ac62620f7bd8536c9fefe6e393477acb8b84f6e992a77725c8870f3762496b14344bf1542cbd716f34bc11c701eb7d3ff2c6f39fe9e1e0e40411dcb014cbd719d49528650caa3f9b365229ca359342d451a8de6dd75b9d83f6c1f141abd5eaf57ac85390ad46bcb845f6b5d66bd56f3637de8d54883403b6e6aa118bfce5bc797fd85c4b7103b156cd6dcb26baa8e6fba6a7998899e6a238994d3140a9402e20673cc308afcc64f9715bbac159de48117ccf6360712cca429b5828118b62c5d3525a55da7fa436e66f0b3a7546ce7948cefd9917ee452c37e4689f3045160b09aacc748d4478a715cf60c193a8aaac6fc9a7c01f6305135c33052a22975f9cc02164e45f3ac15e84d07de2f92119b95f1d724a06de906c0bb91ed93bdd279f037f362167f3ad22464f60c5d07dc834ca6b1339a996ae794f0d4a23e8b9d9eedb27a64fa6ca85e4da5cd3f54227189c87ee8553757604298b1fa677d8db15cb14209a499683063916092065e24fddd0f5bdc10819b65d930d42d1fe8fc75742f8b0061350dbaff1eab4adff0670c1b2d222eeab05dd691dedd0a7a7da3f89b450e10a11384a15997e9b39c19c564701ac4042115bca3b7db2605bf8eb1fb1194fc4e280a28dd2b8579ac7ca98c4126c39e4b98df7cc3eeeb67a5d6ac152bfa91d768d3214c91f2bcf1ea5d50729850cec4c9a2dba299b8517d811fccb6b3407a5586a646605de44015b6640ecdb91973e922822bc20a6cf240ae71367617b1dd5c8194bb0a23b6d625bdc27e69936eb5db3d935896c8e6a04fe5386abaa2dc664e87b0ecec12fca7731181f050000",
    ],
    [
      "ETag",
      "obNM8LDjo9Ra8X5NMYwg2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb646d1d9082d09db11a06ac2058a46c9800e10f868f24e0f4ee75fa6ef09e00c731198670bc57a4051f60c61b6d1daf4d2ac077169707128e76aaf8253722f99ec31f0da646659614f28d7e93922cb8d1cbc4f796ea5405ea1b14efe7659bb1f1aa563584c6bcc43bc393023c9984ed2c62bb484ea653e4b5b2b8689b3e552589c9a28b74af56526f1482e6527cfb4dfdd906a7213c8a666762e85397ab579c0fbcaa1e49c6069fd6f6d908a63462f95ba4a84e20748ad039e3a4d4d951478be2e387fd85ce87adc553ab55094542cec00a104e8b9e0c61f1ca4ab2a6adc0ff3c1c674a5e7d48704f7af0fb073962900f18010000",
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
      "Fri, 30 Oct 2020 20:36:37 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-75-1604090111888",
    },
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
      "02ff85536b6f9b3014fd2bc8fbb82681e6018914ad514a57b4846c405a4dd3846c63a85b822936ada22aff7dd7a6e95a556a3f61fb9e73cfb90f9ed01daf3234438417f72d6bf65f6e05412788295cc0eb45f595edebf13e2cec9b1f76400aecf1fbc7f91c105cb324ded525eb49d13694c9d936ee178d686bdc08d183443d77dc7326f6c89eda8ee3789e073cc9ca7cc5ab3b60df2855cbd96070d4ee17421425c335977d2a762fef8387d341dd885b46951cbc951c808a1c7c2cfaad14142b2eaaf9360603ad644dca76989760e13f3323676f53f739def50b003f70ca30a5a2ad94b60529a8a8725eb48dc98a664fc8d87c7540b1bff297894545d9eeaab4c23b76626558e154ed6b665d449bb51584179b68bd48824d98c6cb4b7fbde82f37abed3a8cadeb4b3ff22d8549c90cd79a5b67e616c205f4332615af8c7aa29fb5f2738382f763d1049096ac0ba6ae3dc18e674f494e5c9a7bc331c96d468847dc311e129b4e476c9411868167440d0b5750331d020c931448593af2729a4e47fa9ab9b63325c389ed0cd1e1043d365cb1732e6b2179d721741d05899f26d1365c2e12df9490e3b654e79d315dc06b8f0a0a04d007351d74940b50d2ed0ec2c48f16cb24b8f2bb09af5881e93ebe8719e7b8940cd0b881e629d6ac45060d43e162ed9f03d84cece73128d1eccf13d23dd72e5eb5fc859ec000b55d65be284ea220fc6eec1c1157b86c0de4a13ba01a2cdf406de0faf01790b0a45d16f46beb47bf51f714b19c35aca29f4f13c026f0e9bf765c7cc0c2ea838c547087dda1528bd086753bc44db947f6d475272364c08d7a179b0e4f8f5dd3397446b663957aaea85b7c28b4136be50b088230fed074ebf00f407084b278040000",
    ],
    [
      "ETag",
      "Fn+eyp5yNg0hK0Ibga8iqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1604090111888"
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
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cb78a509246d45120fd4d64a426b4ba9078d69b630541418dc5d344dd3ffee2cd66ad4442f30337cb3bcf760074f79958207eb7cf3dca0dc9e6c50cf4d11a16a0aadf85653a5102c402d364cce6ec783ed7a301b8e47c14d8f7c37d4d1787e7ece844a1eb014e0ed20cbb1481578773ba84489bc9650d194d5aaed2cd0dbda0c1771144cc7dc97949a7eba0c437f108e606f1d1753a1c5aae5ffb176bfb7e091d6116628b14ad068a9253d62a203635389b22eb0a3a891092a68e1f6c14652530b49d4e149e7b4d771fa76d73eb31dc7715d97c18212a173aa985d2e581f68d2a288e8955d429f01d9966c386baf2f3cced3d688298369dcefb6fabe022c2dcb0b5cfd0db2de07c19fe1033b44f09d132535953e5297e1b5ffdb719ce9e751433f1efd2094e6a48e481c4c468bd89fcc0c777ff03ed86a5433491ca44293a16377ddde69df7e8ff5824cd4fc1e4fcb062d4804ff1d57b9062f1385c2fd1b5df2c4967b020000",
    ],
    [
      "ETag",
      "PZGBybBPDGEIV5oA8LtRGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1604090111888",
    },
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
      "a3",
      "40",
      "10",
      "fe",
      "2b642f269af4052aa5d0c478bd96f3c855ea516acf5c2eed42075c0516d945634cfffb0d60d5c69c7e2adde7659e999d7d22b72cdb902109587c5742f1f8e58607a44540d2184fa7d66872eb2fe177acf7ad07a15dc95174f67072820c56a9044df304da8297450862b89877e28297392d386fa3517b60b43543d5554bd534cd344dd40948a229cb6e517d2d652e86ddeeae7627e63c4e80e64c74429ebe9c77ef7bddbce037104ad1dd2fd9c52aa2fb71d1d3848754329e9d2ce618a01450ac20a52cc108afca4df075dfbac368da89917ccf42a061c8cb4c56b1d022e459c4e2b2a85dc9f089d431df7c90b93db5c7be329e2d5cff704dd34abc3e52a85056ab024499c896b2c69e2296c08a6dd60d92df2adfbdd9392298e09a0a106b65f9c3f66c4599ce96b677f802a0973bf395a9f3d3564e95913b51f6ed1c57393c3d52cebcd9e242f976b50762031b109265757c9f060954d19f27ecbcbfd74a4025566dc0d54035a866aa5610058330328ffb41a4421098c1a04f8f0335b474d0370150d4c9cabd56d18c67e1c0e807a6deeb83d5d768a4abc6a017aac711eaa90906f4361a44aa19906d8b3c144cc284899c0bd68c992c3dc7b757beb770c723dfaedb88288e72d284ab9a789b53629348faa0af6d85328e95aa3b735cdff64663dfb9b49b3599424cc3c7f91d2e4a441301c8a6054d414271ce37383472319b3bbe3373475354d4777fb1630832fcf3f42af01ff37acab2fe2573df73dcb33ac08e714993b2a6dc371fe48017343b20db6debff3e98d9d03fb6d1d0e12f32f0693462f26b617b57a439f2208202b2f0f31540720d7cfac277cf0db9f8e0b0",
      "8c90f81f172e145591b08066f1585ac77b565be640ef919a5cc877986558bb09571e9523a490c9e78e9ae7568daa864af1424210f7c5ad87bdfd0758bb1fddee040000",
    ],
    [
      "ETag",
      "L9ADkTWeXg459ws1YtAfGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90516bc2301485ffcbdd6bcb5a28da157cd0215310d9ea64a088a4f5b6abb6bd31491557fcefbbc9f6b0c7bd249793ef24e7a48753d51e2081ac2acf1daadb4389e6cd0e29eaae369a3749ad46f0008d2899fcd8c8597b6966b11e9f8fabaf2cd8e8ecf13a1a31a1f34f6c04243d1415d6070dc9b6875634c8b6fd5eb91b1933376995f9f27dfa324d5968e86085e57ab1184f1653b87b7f6cf2f42fcbeeeec191b2140b54d8e66853484547cccddc16d4a29135fa9a3a95a30607bb835251278522f259f187033f1c0451f014846118c7318335e5c254d432bb5e71363064449dd295fb41c8807223572ddc7a6139721d2e0ee068bb5fd3e46650bf2ae2041aede3513cfc89f24c369ee1d84675e8412ef82f679581a410b5c6fb37593553faa9010000",
    ],
    [
      "ETag",
      "WZpHnvmH8sAqjSzb0Zsb/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c97282300000d07fc9599cb088d09bb1292a061718162f198704542a61d140ecf4dfebf4fdc1fb01e73ce77d4f1fa2e235f800ea6cb8d37cea3710590317bd7ea5c9d7e51952b8493542a434791db68776bbd2c4e09ad94547417e4a3ab2c79ec8770286a5237965b37b1d2a83a1d3e6c6f732c141182f958a3d3788281ad385250346d9e25830eda57f43235d3b9940cfd0147718a7f1a7f9601215b6df1d49669f5a2509ad50a93bafb68aa2a25d8adb625d1f32b21a04c4a49a1929b23d7d3bda18fa3eb9603c5a1e6dacb9e0b9de2fe79153e15d0926808fcdb5e33dbdbeb3e6cc7527e07f4e1faae1ef3ee2e78e77e0f70fd188272b18010000",
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
      "Fri, 30 Oct 2020 20:36:39 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-77-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6f9b3014fd2bc87b5c1348480a8914ad5142d74c09590969354d1332e642dd124cb0691555f9efbb98a66b35a97dc2f63de79e733f78260fbc48c898c43cdbd7501dbedc8b989c115034c3d7da3dccbdbdba9f7eb5afef1e0e62b9ffc1a64f93092278c3927457e6d091a2ae18c8f176d3cd2a5197b412a283893a8ed3e99d5b036b64f57a3dd7759127214f97bc7840f69d52a51c9be649bb9b0991e5404b2ebb4cec5edfcdc7be5956e21e9892e67b491355a4f9b1e8b75c30aab82826db0d1aa8255411ec28cfd1c23f66125fbc4fdde574d7cd10fcc81950c6445da8c616a660a2487956573a2b193f136df3cd816cbca5370b0d26f27a574405ddc199915045237528c1b80cd62b63e15fae83d5345cacfd6833bbf256d3ee6cbddcaefc8d717be5059ea1689c83e61a13e342df7cbca07e0252f142ab87cd73a3fcd2a0c5ff636908282da10d468e754e7bae358ad3d861a96b0fe3d4823876636748edd862a3010c921828f2b4a866d1421460595662431c39fda11b0da8ed44b163b911a57dcb1959433bb107e478469e2aae60ce6529246f3b446e8345e84561b0f567d3d0d325a4b4ced5bc35d614f0d6a3c20211f4414dc726ca052a35ed5ef8a1174c67e1e2c66b27bc848cb2c3668f334e692e01d1b4c2e629a85622c186117fbaf2e608d613fb790a4a32fefd4c9a9e372edeb4fc951ee2001bbb4a7fc9260c16fe776de784b8a179ad218fed819468f90e6b43d7c73f88c4256db390ebad17fc22ed5300295450b0cfa789601df8f45f3b2d3e6271f551462abce3ee30d988b00ada1de2badc137b341af56da2c1957a1febe3060c7aa7ae35399a8cb08342bd54d42e3e16da8ad5f21584411cbfafbb75fc0b93baec5678040000",
    ],
    [
      "ETag",
      "u8yDEqtjA+3QhkyoLqJcAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1604090111888"
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
      "82401085df657a0b0924162c89176ab535f117b131698c5961401458babbb435c677ef2cb5b6699bb43730337cb39c73e008fbb488c0834d9a3c55280e5709aa992e7c9455a624dd4a5e48040350b184c8be1fcf70b7d9771793384ff25737583e2c67ad161132dc62cec03b429c621649f01e8f50b01c692de4599517ebba33401d4a3d9c07fe607c477dce23dd8f17c361bb33ecc1c9b82c464cb175cdff636d753260c7373ec628b008516b2905df61a806daa6647999a1297925429450c3f58344f0aa6482739326a6eb9ab66335ac1bcbb6ed66b34960c643a6525e10bb98933e505cb1cce72fe4121c02445d92e1b8be3ed3388d6a23ba1c8c03a751ebfb0a90b438cd70fd37487ab78c3ec307768ee03bc7725e15ea42f58793f66fc751a69f47ddb683de0f422a4aea820483516f1eb44753cdadcede3b0785722a3805295167685b8de6b5eb58efb176b98e9adee32951a10121a3bfe33e55e0c52c93787a030b061fd57b020000",
    ],
    [
      "ETag",
      "FRfQejbkCUOfmgmx7TXVXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1604090111888",
    },
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
      "6d4fdb3010fe2b91272490689394bea49510ebdac0224acad21484a6a9b5dd4b312471881d2684fadf774928d04d834f4dfdbcdc73e7f333b917e98a0c0813eb8702f2a72f77929143029aaef1348cee8663eb3431597702cc4ba51edbe7c3e363648852a56892c5d050b2c839a8c17cd65ce7b2c8682e65038d1a3da76177adb6d5b76cdb761c07750ae26822d27b54df6a9da981696e6b37d752ae63a099504d2e93d773f3b16566b9bc03ae95b95bd2c42acafcb8e8492c39d542a6c7f319062814e40b48a88831c29b72c5beee5a37054d9a6b243f0a0e947359a4ba8c85165ca691581779e54a06cfa48af9ee83ccdc893b0a8dd174ee87fb4b9a94e2e5814195b158e4a08a581f1a4bec2912312cc46a5923d9bd711a4c2f10c104b754815a1ad7dfddc0358cc9f4da0df65f01f4f2a7a131f1ce5de3c418fa6363d7cef38dfd9303e32c98ce2f8d6f373b2036b002a5455ac50f298ba18cfe3261efdf7b2d055463d51a5cf4ac2eb51dabcf22d6e39173d46191058c39acd7a147cce2fd36b4570c28ea74e95ea9682a53deeb7698d36e75a0dfb169d4b6babd16b78e22d45307bad05ad910590e239b43f23b171ac6426552897acce43af042771106737f340cddaa8d88e228c775b8b289f739353689a40ffada94a89058a9bc33cf0fdd60380abd2bb75e9309ac297f9a3de0a2443456806c9ad30434e4177285432397d399177a537f38414575f7975b8622839fcf6f82f029aba6acab5f320b03cf3fab026c1957342e2aca63fd41f6644ed33db2d91cfedf073377db1fdbd8e8f00b19f8346a31f93177831b521f0510410e29ff7c05905c019fbef0ed73432e3e382ca334fec785e3aa2cc273a8174f2455bc5addb22ca763938a9cebbf31dbb2eced844b8fd2111248f54b47f5732b475541857a252188fbe257c3defc01b651de29ee040000",
    ],
    [
      "ETag",
      "TfjAD0Fm/b6LebInotD1KA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1604090111888"
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
      "5f",
      "6b",
      "c23014c5bfcbdd6b0b2dc8d6093ee8e85490a2ed84c11089ed6dadb6bd35491529fdeebb893eec712ff973f23bc939e9e15c36198ce15016970ee5fda540bd318b18555769c5534b8d427000b52898fc0c9370b4d866d9651ec5dfdefae627c7e966326142a547ac058c7bc84bac3205e39f1e1a5123dbf67b696f644cdf5ba32ca3af701ec62cd4941921daae56d3d92a84c1f9636bcfffb2ec06074e74883147894d8a26452be984a95e9a824ad46d85aea24ea6a8c0c2f6a090d4b54212b9acb86f81ebbf7a23efddf37d3f0802062b4a852ea961769b7036d0a44515d38dfb81cf80b44bae9adbf1caf2c876b85a80a3ed9ea6d95da35a4be2040acde3de23c80799709a436bd9a103a9e09f5c94fab11f7e015be384b2a6010000",
    ],
    [
      "ETag",
      "FESE4HUddqGNRX0Pw1ShAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0bb646d1c5012a5bb62232222163f75d864308d08848f49944fa777afd37783f70312c6b85254d705afc01be893893d6663bf311cab65b91dab3028342ceb4c125291ed6dfdfd888cd3f27ca079146d73ff64692462ff76d87da19ac94620ef71ee2712151be6bae65e1c0c770ee1d325f88105341dd55eebd56a7896edee59deaf8c1a1fb45aa63a30a6a4773e93bb14b9a370749caf611fd629ac3b4c2b8cd4b00a8fadafcd5c0e693268da91c00a08f5f4624fe0fba59c459e3217c37eb151f8f59921a1705cde4ae15797027226533002bc6b32c915cd5ed929b2ed11f89f53dd37fcd5777822b904bf7fdee0bf4b18010000",
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
      "Fri, 30 Oct 2020 20:36:41 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-79-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b4fdb3014fd2b91f795b64949d787548daa0da35b9b8e3405a1698a6ce726189238c40e88a1fef7dd3894c126c1a7d8bee7dc73ee234fe4561431991026d2bb1aaac74f37929123029aa6f85acae01b1bfbe7a3dc5d6c66ea775a7cf7ae1ea653448886a5685e66d051b2ae38a8c96edb4d2b5997b492b283893ac371c7f96cbbf6d8761c67341a214f4196ac44718bec6bad4b35e9f50edadd54ca34035a0ad5e5327f79efddf77b65256f806bd57b2bd94315d57b5ff44b2639d54216d3dd160dd40aaa08722a32b4f09719b393b7a9bb82e6dd14c1f78203e55cd6856e6c610a2e8b44a47565b292c91331365f1dc8d65b79f3d0e232abf3222a680e47564c358df46309d669b0595b4bff7413ac67e172e347dbf999b79e75e79bd56eed6fadcb332ff02c4d5906866b4dad1373f3f182fa31282d0aa31e36cf8df2738396ff8fa521a0b48236180dedcfd419d96396b0214f46c70396d8c0d8880d07f498d97cec821b33a0c833a286450b59c48363e07d1b22468147ae331c46cc1d3b11c76b9fc58c727740f647e4a1121a1642955289b643e43258865e14063b7f3e0b3d534242eb4c2f5a634d01af3d6a2c1041efd4b46fa242a252d3eea51f7ac16c1e2e2fbc76c22b48297fdcdee18c139a294034adb0791aaab58cb161c49fadbd0582cdc47e1c828a4c7e3e91a6e78d8b572d7fa18738c0c6ae365fb20d83a5ffd5d839202e68561bc87d7b20255abec6dad0f5fe17227149db2ce47ce70557a47d0a20810a0afef134116c021ffe6b87c5472cae3eca288d77dc1dae1a115e41bb43c294fbcceedbb81c0362c095fe37d6b75de7d0b5264793117228f47345ede263a1ad58ad5e4018c4f1fba65bfb3fb6f5f2e178040000",
    ],
    [
      "ETag",
      "poRJb9NQ8m4DOAszgnKEYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1604090111888"
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
      "000002ff8d92dd6e82401085df657a594c21b588245ef85f13b42de25563cc0a83a2c0d2dda5c418dfbdb3d4daa66dd2dec0ccf0cd72ce8123ec933c0217d6c9e6a54471b8daa07ad2858fb24c95a45bc1738960002ab621f266d01f897ee595b6baf6addbdeae1aeff755a743840cb79831708f1027984612dce723e42c435a0b795a66f9aaee0c5087420fe7813f998da9cf78a4fbd9c2f3ba3d6f0827e3b21831c55635ff8fb5e5c9801d5ffb18a3c03c44ada5107c87a19a689b9265458a0dc94b11a2841aae1f6c042f0b26386fd0a4d16a372cdb6c9a6dd3b22cc771084c79c854c273621773d2078a2b96fabc2297601320ea920cc7f5f595c649541bd1e56416d8cd5adf5780a4c5498aabbf41d2bb65f4193eb07304df3996f13257176ae43d747f3b8e32fd3c6ad00d863f08a928a90b124ca6c379d09d3e6a6e79f6de3b28948f82539012758696d974ee5ab6f91e6b9feba8e93dae12251a1032fa3bee13056ecc5289a737ed483f8f7b020000",
    ],
    [
      "ETag",
      "/DCFrCwLu6t+R13BjwGkkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1604090111888",
    },
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
      "ffd5535d4fdb3014fd2b96f70212fd04a1d209b1163216515248525885506b929bd490c4a9ed544388ffbe6ba71deb3ed8f39e62fb9e73eef1f5c90b7de2454cfbf481a7cb0ae4f38747f140f7286896e2e9c85b4c976a55ac565f2ff68755f21c7c1b4ed2e3634470c3522c2f33682851c908547f12345329aa9249211a28d4e8b51b9dc3f641fba8dde9747abd1ef21464c988174fc85e685daa7eabb5e9dd4c854833602557cd48e43fce5bab6eab94e21122ad5adb2d5bd845b5de6f7a928988692e8ae34980062a05720639e3195a7863c60f9fb6a59b9ce5cd14c12b1e018b225115dad842894814094f2b695569ff855a9b3f2d68e08c9cd3909c8e275eb83367b921cf770953643693a0aa4cef9139de29e119cc783caf2be513f9ec8f2fb1820e164c819a93db2f8eef10321adf3afece3c661a50c71b8764e45e38e4840cbc33b22de57a64e764979cfbe3c915194eb78a683e868461ff33a6b18136a6e37ae99a17d5a03482d6e3767f7f64fa6aaa5c48aecd455d2f74fcc169e8de38f56c4790b2e83958e2741396294034932c070df252c48094ab71e086eed81b8c90610776b54128dabf7b792384cf251883da7ee9d92074e8ebebdedf11e8e6f0c03adc006e585659c4aa5ed00e2adc2302935293e9f5c4f1a7b43ef2210109456429ef0cc1826de19f81dfa40fb1983f6ca334ee95e691324d2209b61cf2dcdaabd9dd76f7e8a84d2d58ea5f6bfbed5ed7fca445fcc7caba4765f5414a217d1b39b3c56eca7ae1054e84c7d736b05b2e97eba31c9462a991f704c9998e16bc4889e26981da1248222449aa2232b43a9ff688c9b4caa1d0c4bc89ea13f36a4d12546529a486f84d006b75aa83d077bdf3dd8febed701a3a01fe2b9adc75fabdeebdb98fbd459d8efff206f7f593d8148f3d93e2ef72e647ee7a050000",
    ],
    [
      "ETag",
      "LNhYqsvnvvXK3BufySxBUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcf4b7282300000d0bb64ad0e9ff0eb0e082556516b8560370c848058040908a49ddebd4edf0dde0f4829657d9f0ced176bc00b10a962ade86a73971c38159ed053b866539c63cfefaf9ea5d5f9cd17151efb0da27abcbb18995ecb648e940f12c7a6ae2905be991bc97c1d4da2e1517524c53cec656c6fb734bc8e14e22b5491cbbb50228f76d483e5715f979ca8fc3c0761d961ac09d9776b34735b415dbbbc8403cade8a9c98ee7b736c508952b1f7dc352b2c1ae493184e103a9f63617c3fbc8c050db1a191a0c82361a4a25da6c493d61d9c53b6a4e7122c009bef15677d523db3aa66590bf03f4f067167cfbec352ce38f8fd034789d42418010000",
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
      "Fri, 30 Oct 2020 20:36:43 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-81-1604090111888",
    },
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
      "4fdb3014fd2b91f74adb849626ad548daa84d1ad4d214d61d334458e73130c691c6287a942fdefbb766805421a4fb17dcfb9e7dc8fbc90475ea6644c129e3f3550efbe3c88849c105034c7d7bc0427f8392dd22573be5f5f973f7657c1ea66324104d72c49b755011d299a9a811c6fd6ddbc164d456b213a98a8e3391d67680fec91ed388ee779c89350640b5e3e22fb5ea94a8e7bbd83763717222f80565c7699d81edf7bcfa7bdaa160fc094ecbd97eca18aecfd5ff46b2118555c9493cd1a0d3412ea18b69417bac023334dcedfa7ee72baede6087ee60c2863a22995b685299828339e37b5c94ac62fc4d87c73206b7fe1cf228b89a2d9967149b77062a554d158ed2ab02ec3d5d29a0797ab70398de6ab205ecfaefce5b43b5b2d36cb606ddd5df9a16f299a1460b8d6c43a37b7002fa89f8254bc34ea917ed6caaf0d9a7f1c8b26a0b4843618bbf6903a9e3d4ab2c46599d73f4b321b92c44bdc33da4f6c361ac0204d8022cf881a162d4549fb2380613f8bb39147e34176c6e2917beac6599a30d71e8063a70ed99f90bf355770c16525246f3b44eec279e4c751b80966d3c8372564b429d4456b4c17f0d6a3c20211f49f9af63aca052ae976cf83c80fa7b3687eebb7135e404ed96efd8433ce682101d1b4c6e629a89722c5869160baf42f106c26767d084a32fefd4274cfb58b372d3fd2231ca0b6abcc97aca3701e7c33760e885b5a3406f2dc1e488596efb13674bdff83485cd2360bb9d9f8e12fd23e8590410d25fb7c9a0836814fffb5c3e22316571f65a4c23bee0e935a84d5d0ee1037e5beb24fedfed01e1203aed587986bbb87aee91c3a236ca154af15b58b8f85b6628d3c823088e30f4cb7f6ff0029eb276178040000",
    ],
    [
      "ETag",
      "gne1NXAldMc1JPPnKyHNOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1604090111888"
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
      "00000002ff8d92d14ec2401045ff657c2d4957b1d6263c80801011919684c410b2b4d3526cbb7577ab12c2bf3b5b118d9ae84b3b333db3bdf7b63b784c8b083c58a5c95385727b92a0be37c51455956945b752140ac102d43c21b23f8f6ffcd3796287679301cbf195750396b45a44a8708d39076f07718a59a4c07bd841c173a4b55064555e2cebce02bd2dcdd00fa6c3f135f5b9884c3f9e8d46edcea8077bebb81871cd9735ff8fb5c5de828d584d3146894588464b29c506433d343615cfcb0c1b4a54324405355c3f48a4a84a2e8568d0a4e1b20673eca67d6933c65cd725301321d7a928889df9a40fb4d03c9b8a1772090e01b22ec9705c5f9f699c46b511530ec781d3acf57d05485a9c66b8fc1b24bd6b4e9fe1033b44f09de3b9a80a7da4faa3bbf66fc751a69f4775db41ef07a13425754482e16dcf0fdab713c32d0ede3b5b8d6a220505a9d064c8eca67b7ee1d8efb15e091335bdc7d3b2420b424e7fc720d5e0c53c53b87f03b71f0ea27b020000",
    ],
    [
      "ETag",
      "FXfKS2Xg0c3PH1mex1DT1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1604090111888",
    },
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
      "61",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2b",
      "96",
      "f7",
      "0524da345dc7ba4c88150810ad4d4a92822a845a9338c1348983ed2021c47fdfd96961151bfbbc4f71eede7bf77c777ec62b56a5d8c1b72c7f68a878fa74cf6ff11ea68ae410bdac1a775514f7646e8d022f1e54535b9e5e1c1c0082699624655dd08ee48d48a87466513717bca989e0bc03429d61bf63eff706bd6f3ddbb687c321f0242db231ab56c0be53aa968e656d6a7773cef382929ac96ec2cbd7b8f5d8b76ac1ef69a2a4b55dd2822ad2fab8e861c113a218af0e6611186824150b5a1256808537667afb635bbacb48d9cd01fcc8124a92843795d2b64022e155c6f2461855ec3c6363f3b7038edcb17b1ca3e360e6c73b4b526af272171189160b416553a83db4843b65aca00b962edb4cbd42a76130810c38b82392ca25ba3a774317a17170e5863b4ba9c02308f9418cc6de4f171da2917f82b6b53c1fed1ceea2b330984dd1d17c2b09ee539a11307042145450da75da1e3d3d5245a502d0badfdefb29e3179d655c30a56feaf9b11b8e8e63efd26d9b3ba639499ea207686f460a49014d0429a9a262c2530a94691079b117f8a331304cc7a61b84c4cef5f31b217eaaa936a8cc17c7dec48de2d1648a5f5ef6fe0e034bfb03637303b8244563108fed01dba0700308d897968c2f666e38c76d28a41915b44a0ce5834e18b049fc73ed373b0858d842280393544c2a96485d2411d4a463561a7b2dbbdf1b7cf9fc151bb050ef72fb764f3fd52afd63665da331fa54082e42b378fa17aa49e38555d011965e98b5dd72f9b00e95544a926b799fa392a8e48e",
      "5539922caf405b50947181b2a64a34addd521322226f4a5a29a467221df43aba2e8a9abae642d1f44d0500ed824771e8f967bbdfd7bf47f3d88de0d928746d3bc3fe8dbe94b94abb27ffef356edae1683f2781efc236fe0267a7eaad8a050000",
    ],
    [
      "ETag",
      "VnuEklljaY/AOIT4nP1sFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "64ad0e3f8574c727558446ad7cbb6100a34085440208747af73a7d37783f20cd73c279d2d16fd2803730a5125ce52b870986f2bc2aaaba7f8777146efb73416bec10018d1273f5262da2bd79943ff70536b7bcc3bd45c25c67957cce72525dc4019d028fbba6161ce2a99a6223585e4cf454b9c29a43fb58872eff928edc16a9efe23849c589597d737a16fecdd220d2eefc4c65d59d7728f4fbd185d8ecbd2858d25d09d57b16890e1a46a839dedcfab5413f1c52d7c84ecaea8abb591e529d9287b1d9e87e20f00cfb919db36370030b404656b68427e52b2baf215c80ff79d24d8cbcfa06495bd282df3f6c9f067e18010000",
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
      "Fri, 30 Oct 2020 20:36:45 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-83-1604090111888",
    },
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
      "a34014fd2b64f6d5b6505a4b9b346b53712569e92ea51ab3d99099e182a3c02033e836a6ff7d2f605d8d893e3133f79c7bcefde099dc8b222633c244fa5043b5ff7627193921a0698aaf79b097537a593c3d5c6753f1f7c603e9c64ff3392244c352342f33e82959571cd46cb7eda795ac4b5a49d9c3443dc7ee59a7e6c89c9a9665398e833c0559b212c53db26fb52ed56c30386af75329d30c6829549fcbfcf57df0381c9495bc03aed5e0bde40055d4e073d1ef99e4540b59cc775b34502ba822c8a9c8d0c27f66cccedea7ee0b9af753043f0a0e94735917bab18529b82c1291d6559b95cc9e496bf3cd816cdd95bb0c0d2eb33a2fa282e67062c454d348ef4b302e82cddaf0fc8b4db05e84dec68fb6cb4b77bde82f37abdddadf1ad7976ee01a9ab20c5aae3137ceda9b8f17d48f416951b4ea61f3dc28bf34c8fb38968680d20aba6034314fa9e5985396b0094f1c7bcc12131873d8644c6d66f2e9084631038abc56b465d14216361bd9f1a93d8a92a1634723469d883a961381694e181f0e6d8819399c90a74a683817aa944a741d22d78117ba5118ecfce52274db12125a67fabc33d614f0d6a3c60211f4494d87262a242a35edf6fcd00d16cbd0bb72bb09af20a57cbf7dc01927345380685a61f334546b1963c388bf58bbe7086e27f6f3185464f6fb99343d6f5cbc69f92b3dc401367675fb25db30f0fc1fad9d23e28a66750b79ec0ea444cbb7581bba3efc41242e699785fcdab9c10de99e0248a082827f3d4d04b7812fffb5e3e22316571f6594c63bee0e578d08afa0db21d196fbc21e9a636b3c212db8d21f62b6353c76adc9d164841c0afd5251b7f858682756ab57100671fc7edbadc33f810c04ea78040000",
    ],
    [
      "ETag",
      "mRyo9aHnwqWl9ixYIeoEdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1604090111888"
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
      "0002ff8d92dd4e83401085df65bc9426905644925e50ad95487f6ce995699a2d0c940a2cee2e36b5e9bb3b8bb51a35d11b9819be59ce39b087a7ac8cc18555963ed728766729aa075d4c51d6b99274ab7829110c40c55222ebcee0d5ebdffb33cc1c351eb763d93e0fb6dd2e11325a63c1c0dd4392611e4b701ff750b202692de2795d94cba63340ed2a3d9c85537f34a0bee0b1ee47f320f07a411f0ec66931668a2d1bfe1f6b8b83011bbe9a628202cb08b5964af00d46cad736252baa1c5b92d72242090ddc3c4805af2b26386fd1a4e5b45b966d76cc2bd3b22cc77108cc79c454c64b62e733d2078a2b964ff9965c824d80684a329c34d7171a6771634497fe28b43b8dbeaf00494bb21c977f83a477cde8337c60c708be73ace075a94ed46d30f67e3b8e32fd3ceac60bfb3f08a928a91312fac3fe2cf48613cd2d8ede7b3b857222380529516768991de7e2d236df63bde63a6a7a8fab448d06448cfe8ebb4c819bb05ce2e10dd8bbd7be7b020000",
    ],
    [
      "ETag",
      "u4GzAEKISei8tOO3ds3+Lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1604090111888",
    },
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
      "6d",
      "4f",
      "db",
      "30",
      "10fe2b96270493daa6655dd75542ac9430a295a64b535037a1c64daec190c4c5769818e2bfefec50a062838ffb14dbf7bcf97cb9a357bc48688f2e787a5d82bc7d772916b44641b3144f8f3b65735786bf9ba9767eb8b3c520e93afeafbd3d4470c3522c5f655057a29431a8de74d248a528574c0a5147a17ab75d6f759aede6e766abd5ea76bbc853902d87bcb842f685d62bd5739cb577231522cd80adb86ac4227f3c776e769d951497106be56c5a3ae8a29cd74df7331133cd45b1379d608052819c43ce7886119e98c9e2cba67483b3bc9122f886c7c0e258948536b1502216c592a7a5b4aab477476dcc670b3a7187ee2024037f3a0a7722961b72f49e3045e67309aacc748d4478a725cf60ce93a8aaacaec851e09f6005135c30052a2267c76ee01232f4cfdce099d2c80fc9d0fbe6927dd21f1d924d316f4476f6df93af813f1d9383d94611e327b06498e09069b4d02676522d3df3a61a9446d043c3bd97cf4cef4d950bc9b5b9aa370adda03f08bd53b7eaee105216df4eaeb1bf4b96294034932c070df244248094b13ff142cf1ff587c8b02d1baf118af67ede3d11c2db159880da7ee9d1d0ef879db64db0869cb2acb4989b6a41b75a8d8fed2d7a7f5ffbb710867e4ba6850ae788c091aac8f4fbd40d66b43a0a6009128ad8525ee99505dbc29b7fc67a4c118b838a364ae35e691e2b63124bb0e590e7365ec5de6d763e7c6a520b96fa65cd2a4391fcb5f2e0515a7d9052c8c0cea6d9a29bb25978811dc1bfbd4673508aa546665ae04d14b04506c4be1f79ec238922c20b62fa4ca2703676e70f8f16d5c8014b48224ac3b25dee91eaadd6bbed6abb6d82d938d534fcdf28e755938cd7a13f72712afe00",
      "e0e0658c35050000",
    ],
    [
      "ETag",
      "H6u02rTz0gt/ZEYbCd8/Ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcf4b7282300000d0bb642d4e494280eee4d31628a20491ba71200d9aa2400383c14eef5ea7cbb77c3fa0648c0fc371ec1ade82673097d05eb265d43f39f8c6f6f3e5ea51fca65fee2c82d3e9ecacb23d698d4f959a9dd9d54c53391428a35a380fa7b66bb3d1bd07f54a8f7be7ce5e939959aa38a03a35dd524edcc3fc001b5cf9dfbbab51071d0e76e709c7ee7588056d5af1b571b037852d29e536eacacb2d76d7955f6f880a4851204ebdfc036ac5242b99e6d8c6d8d619b29af53b49541fca269507cb848921fc9d89288d096b54fcf230112122ec061680ab5e483e1cc5238b0cdb5e80fff9719c7bfee83bbc945c82df3fa33f9a6818010000",
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
      "Fri, 30 Oct 2020 20:36:46 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-85-1604090111888",
    },
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
      "a2",
      "40",
      "14",
      "fd",
      "2b64f6e35641ab022666eb5adc9a28ae88ed3eb221c378a1d3224399c1a6dbf8dff732d46e9b26ed2766e69e73cfb90f1ec92dcfb76448629ede55503e7cba11313921a0688aaf973ffe7e76f72b7b95fdba994cf3af5db39c7656a3112278cd92745764d092a22a19c8e166dd4e4b5115b414a285895a4ebfd519583dcbb53a9d8ee338c8939025739edf22fb5aa9420e4df3a8dd4e854833a005976d2676cfefe6be6b16a5b801a6a4f95ad2441569be2ffa25138c2a2ef2d1668d062a0965043bca33b4f09fb98dcf5ea76e73ba6ba708de7306943151e5aab6852998c8139e56a5ce4a868f44db7c71206b6fee4d428389acdae5514e7770626ca9a2917a28c09806cb8531f3a7cb60310e674b3f5a4f2ebcc5b83d59ce370b7f6d5c5d788167281a67a0b9c6c838d3371f2fa8bf05a978aed5c3fab9567e6ad0eced586a024a4b6882916d0d68c7b1dc38896d9638a7fd38b1208e9dd8eed3d3d8626e0f7adb1828f2b4a866d15ce4839eeb26a78c460eeb42d4eb75fb91ebb8bdc8496cbaa5aecd98ed92c309b92fb982732e0b2179d3217215cc422f0a838d3f19879e2e21a155a6ce1b6375012f3d2a2c1041efd474a8a35ca052ddee991f7ac17812ce2ebd66c27348297b58dfe18c139a4940342db1790aca85d862c3883f5e78e708d613fb7e0c4a32fcfd48ea9ed72e5eb4fc991ee2006bbb4a7fc93a0c66fe376de788b8a459a521fbe6400ab47c8db5a1ebc31f44e2923659c86ae3053f49f314400225e4ece3692258073efcd78e8b8f585c7d94910aefb83b4cd622ac846687b82ef789ddb506f6a04b34b8546f624edf3e76adce5167841de4eaa9a2",
      "66f1b1d046ac92cf200ce2f87dddadc33f3c0882d078040000",
    ],
    [
      "ETag",
      "VXz+9vQ7QlZjCFnB2/rF1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1604090111888"
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
      "5f",
      "53825010c5bfcbf68a13346ac48c0f9a564c68fec1f1a1719c2b2c880117efbd94e6f8dddb4b664d35532fb0bbfcf672ce813d3c2579080e2c937853a2d89dc5a846ba18a32c5325e956f05c2218808ac5445edccf4ad7f3bad966f732986dcf5f47396ee3568b0819ac3063e0ec214a300d25388f7bc85986b416f0b4ccf245d519a076851e4efcb13bb8a53ee3a1ee0753cf6b77bc1e1c8cd362c8145b54fc3fd6e60703d67c39c60805e6016a2d85e06b0c94ab6d4a961529d6242f4580122ab87a100b5e164c705ea349cd6ed4aca65937af4ccbb26cdb2630e5015309cf899d4e481f28ae583ae62fe4129a0488aa24c351757da67112564674e90efc66bdd2f71520695192e2e26f90f4ae187d860fec18c1778e65bcccd589baf11edabf1d47997e1ed56dfbbd1f845494d409f1dd7e6fe2b7fb43cdcd8fde3b3b8572283805295167689975bb71d934df63bde63a6a7a8fa3448906048cfe8ebb448113b154e2e10d437321417b020000",
    ],
    [
      "ETag",
      "2KWuILLDmqywNWx/zQnexg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1604090111888",
    },
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
      "61",
      "53",
      "da",
      "40",
      "10",
      "fd",
      "2b99eb179d41480c098119c6524c6d5a0485a0e3743a70b96ce269c8c5dc85963afcf76e12516967f4433f11eebdb7efeddede23b9e769487a24e0f14301f9e6c39d08488380a27179bab6369777e2dafef68b5da55f5333fc7dbbbeecf791c14b95a4ab2c8123298a9c81eccd67cd3817454673218eb0d091631f19b6ded6bbba61188ee3a04e42128d787a8fea5ba532d96bb576decd588838019a71d96462f57cde5a1fb7b25cdc0153b2b56fd94217d97adbf424118c2a2ed2fe7c86010a09f90256942718e14519061ff74b37395d356324af3903ca98285255c6c2124ca4118f8bbcaa4a7a8fa48af9ea83ccdc913bf4b5e1643ef60f9674558a97871a95da6291832c12d5d096d853c41358f0705923d9bdf6793a39470413dc520972a95d7f71a7aea62d4b525f3bd106e3536d5fea8db5839343ed6c3a995f689f6ef6400c1b82543cada2fa3448a08cf9344defdf3b2c0554a1750d2e3aba4d0d47ef0651d06191635a41a443103841c7a266a0b36e1bda61001475aaac5ea9682a528b861183a8031dc78ea865dba6d9d5bb604721ea190b1c301c33b418d936c8cf9c2b38e5321392d72325d753cf7717fe743e1e0e7cb76a23a238b6d33a5cd9c4eb9c0a9b44d21b7d6d4b940b742aefc71bfbee7430f4bd2bb75e8911c4946d660fb814114d24209be674050af27311e2d0c8c564e6f9de643c18a1a2bae78b1d4392def7c71781bfc9aa29abeab7f4b2db95ff8e704593a262aceb0f625864bb6dfc5f09acf00319f8026a31b99cbbd31b521f4d21821c52f6feed23b902de7dc8bb57855c7c57682315fec75d63b2346139d43bc757",
      "55bc5a7dac77ba86492a72aefec61cddb476c32d6b94156105a97aeaa87e55e5a82aa890cf24047155c6def80cd13f22f330d4d5040000",
    ],
    [
      "ETag",
      "bv5yQjoW6KxcVnJn3dzhvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1604090111888"
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
      "83",
      "40",
      "10",
      "85",
      "ffcb78850412ad48d28335449bd446a978699a668181d202b3ee2e2269f8efced21e3c7a61671fdfdb7d6fcf70aada1c4248abf2ab4335dc9468deed10a3ee6aa37991d46a0407d08892c962fd79976f7e8a44ead68ffbd7fbe690a6fd7cce84ce0ed80808cf505458e71ac2ed195ad120dbf67b359dc89819a45596eb8fe8398a596828b7c23a59ad1e17ab0846e78f4d9efe65d98d0e1c298db140856d8636855474c4cc2c6d412d1a59a3aba953196a98e0e947a9a8934211b9acb8c1ccf567deadf7e0f9be1f0401833565c254d4329b6c381b1832a28ea9e77ee033a0a691ab16d3f77b926d87ebb41b7757d36230a8df1471028df672ef12e4896c38c3a18dead0814cf04bbe54e6b21f7f011bce4f49a6010000",
    ],
    [
      "ETag",
      "fNV5dSxfUpsn1RwM7mhbbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0bb645d3a2d14047742c3b7042a05c10d8321f289b43401f938dedd8eef06ef07141813cef3e146c9153c83a510b52dde7afd4e3f4ce5274ae6eea5529536c36e63ed66f1244d517655bc94aed6687c7d235b4b06383a212fe9c7ea09d1bec8fc7ba855899850163f75641cc77049481018765fd3f22c1806e6b91a0cdc943d43d6c81b32ea66852c85012edd716fb7aedf5fe43c28dc4eaf2a099eee0d7bbf0bd0666ab6d6c8b4e4db310a0f76ebb448d2fdd7d2e24c5090238be9391d74343914c604ae1729ae8e3dad4d4b75c3480826b00164ee1b4678de3cb292ac691bf03fcf87a5278fbe4e0a4618f8fd03e273521118010000",
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
      "Fri, 30 Oct 2020 20:36:48 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-87-1604090111888",
    },
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
      "b82681340910295aa384ae5481ac84b49aa609d98ea16e01536cfa5095ffbe8b69ba7693da4fd8bee7dc73ee836774cbcb1d9a22c2b3bb86d54f5f6e04414788299cc16b70377c7473fcf5749d2fed4c9d3f58e74e78319b0182b72c898b2a673d299a9a3239dd6efa592d9a0ad742f42051cfb17bd6c41c99ae695996e338c0932c4f57bcbc05f6b552959c0e0607ed7e264496335c71d9a7a2787d1fdc0f07552d6e185572f05e72002a72f0b1e8b75c50acb82867db0d186824ab1356609e8385bfcc1d39799fbacf71d1cf007ccf29c3948aa654ad2d48414599f2aca97556347d46dae69b03da782b6f111b54e44d5126252ed891b1c30a27eaa962c669b40e0c3f3c5d47c13cf6d761b2599c79c1bcbf58afb641b831aecebcc833142639d35c63669ce85b0817d0df31a978a9d5e3f6b9557e6990ffff585a02484bd60513db9c60cb315d92129ba6cef198a42623c421f6181f1393ba2336da118681a745350b97a2b45d1ba7ce6e98a4263593d1f1689c90f1d84c089db8a3a13571ad94a0fd117aa8b9624b2e2b2179d7217415f9b197c4d1365ccc634f9790e22657cbce585bc05b8f0a0a04d00735eddb2817a0d4b6db0f632f9a2f62ffd2eb26bc6219a64f9b3b98718a73c9008d6b689e62752076d03014ce036f09603db11f87a044d35fcfa8ed79ebe24dcb5fe9310cb0b5abf4176de2c80fbf6b3b07c425ce1b0db9ef0ea802cbd7501bb8deff06242c6997055d6cbde827ea9e2296b29a95f4f3690258073efdd70e8b0f5858",
      "7d90910aeeb03b54b622b466dd0e715dee0b7b683acec8421a5cab7f63ae35710e5d6b73b41959c14af55251b7f8506827d6c857100461fca1eed6fe0f85aef54d78040000",
    ],
    [
      "ETag",
      "Mq2x9la+FOlD7gtJw1J8NQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1604090111888"
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
      "65bca50924b545925e50ad4ad23f5b7ad198a6d9c240a90b8bbb8b0d367d7767b156a3267a0333c337cb39070ef094153178b0c9d2e70a657d91a27e30c50c55c5b5a25b290a8560016a9612e9dbcbfd24db043c1dbdd6097736b5e32ffd5e8f08156d3167e01d20c990c70abcc703142c475a8b04aff262dd7416e8ba34c379380bc677d4e72236fd78311cfafde1008ed67931669aad1bfe1f6baba3053bb1996182128b088d96528a1d463a303615cb4b8e2d252a19a182066e1ea45254259342b468d272bb2da763b7ed2bdb711cd77509e422623a1305b18b39e9032d34e333b12797d021403625194e9aeb0b8db3b83162ca601c76da8dbeaf00494b328eebbf41d2bb65f4193eb05304df39968baad067ea7638f17f3b8e32fd3ceac60f073f08a529a9331206a3c13cf44753c3ad4edefbb5463595828254683274ecb67bd9edd8efb15e0b1335bdc7d3b2420b22467fc77da6c14b1857787c03324977af7b020000",
    ],
    [
      "ETag",
      "A0YwOibIlgMzyfl1by1AYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536d4fa34010fe2b64ef8be6fa0285b6b449e3f52a9ee42a554a35e67269779705d7028beca231a6fffd06b0bec49c7e62d9799e679e999d79425b9e85688c088fef4a563c7ebb1504b5105338865b57df0ae7243d25bfd3f0bb956ce3feec21bf984c00c12b96c4699eb0b6146541991caf969db810658e0b21da20d4b6edb631d02d7da41b8661db36f0244ba239cfb6c0be512a97e36e779fbb130b11270ce75c76a8485feebbf7bd6e5e885b4695ecbe4fd9852cb2fb79d2a34450acb8c826ab251828252bd62cc53c010bafcc90fc782fdde138edc400bee794614a4599a9ca16485091453c2e8b5a158d9f506df3cd012d9db9330bb4d962e505071b9c56e4cda186a5b65e174c96896a691ba829e2095bf370d344f2ad76e22fce20020e6eb06472a35d9d3abea3bd5e6db48976a44dbd63edbd80eb69074787da2f7fb13ad77e5ebf0b82e59049c5b3da708049c22ab3cf3d753fbe6445c00ab235c1f5501f60c3d6472422431ad9669f443a23c426c33e36894e4716b342c230f054a55eb3702632d30c07864ef4fec06236a33ac6c48ef0908e6cbd675a7668ea7dd223d444bb167a28b862c75ce642f2a6b1e8ca7703671df82b6f360d9cba8c0843f38e1b7355116f7d2a2812409fd4b5aba25c40a6ea955c2f70fce92c702f9d6630e62cc6f4717907a311e1443240e302a74cb1e24c84d03474be58ba81bbf0a67360d4af7dbe474834fef3f44a081ef3bacbaafea265e0bbdeafdac01e718993b286dc370734cdc12bdaed5aff9701cb03eb73150314fe020276a121a38b95e35fa3e6ca67112b5846bf9e0000d7812f577abf5f80850d833452c13fcc1b9555125ab066ee785adb6bd83d43d70726aac185fa10ebf5ad7d832b8d4a91a52c53cf1535fb55b5aa0e95f20504411817afeef5ee1f5e4f0f20df040000",
    ],
    [
      "ETag",
      "I0koEFmHbKmd+4lkg5CwpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d904f4fc24010c5bfcb786d9316c554120e62aa9234442a241843c852a6b5d076eaee144248bfbbb38b078f5ef6cfdbdfdb7d6f2f70289b1d8c605b16df1deaf34d813cb78b144d57b191a9a5c6207880ac0a21cd502f0743c3e636cc93e78fb25ac4abf9693c16c2645f582b185d202fb1da19187d5ea051358a6db3d1ee46c1f8dc5a653a5bc42f712a424d3b2bcc9649f2384962e8bd3fb6f6f02fcbbaf7604fdb1473d4d8646853b49af698f1d41634aa6e2bf40d753a43030e760785a6ae559ac817c58f223fbc0fee8287200cc3288a04ac28535c5223ecf25db20113ab2aa593f4835000ed96523577e351e481eb707480445bff9a266746f3a6491218b48f07d7204f64c3b18466dda10799929f7c2df9baef7f002760caa3a6010000",
    ],
    [
      "ETag",
      "s5rU25sts31fLFYilTEXQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4b7282300000d0bb64ad0e0d28a43ba2a0f8e3d398829b0c60d01454242806a777afd37783f702699e7329597b2df9057c02954234ca47ab5ac346c7895370d8bbb70594deea9c1a53ebd9ada3dd3c99fb0d79cc038c8bcdf7348481536e5119f02e32d7d40ed5c636cf34bac3fb3dc3f2f9e17699c90b65d428ee2565d6be3a32d50ba128ed13cdc7959fe3bdd79df2e3421ca82b98d22fc362286add4aa8eb5c65c5e8e3146edb59467dedd0137db63912f716b7c860cb981a2a388c4b0bee82893d215ad192afa5af99cea9f7b0f3d37a8dde55faa408c100f0672d1a2e997867f5314203f03f67adaaf9bb8f79daf006fcfe01bb369ca918010000",
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
      "Fri, 30 Oct 2020 20:36:50 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-89-1604090111888",
    },
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
      "5d6f9b3014fd2bc87b6d1242d30422456b94d03552421602a9a66942c65ca85b822936eda22aff7d17d374ed26b54fd8bee7dc73ee07cfe49e1709199398670f3554872f772226670414cdf07527fdf966b4d9c476180ed3e0777d8060974d2688e00d4bd27d9943478aba6220c7e1b69b55a22e6925440713756ca7d31f9a03d331fbfdbe6ddbc89390a74b5edc23fb56a9528e7bbd9376371322cb81965c7699d8bfbef71ead5e59893b604af6de4bf65045f63e16fd9a0b461517c524dca2815a4215c19ef21c2dfc6526f1e5fbd45d4ef7dd0cc18f9c01654cd4856a6c610a268a946775a5b392f133d136df1cc8d65dbab3c06022aff74554d03d9c190955345287128c2b7fbd3216ded5da5f4d83c5da8bb6b36b7735edced6cb70e56d8d9b6bd7770d45e31c34d7981897fae6e105f513908a175a3d689e1be597062dfe1f4b434069096d301a9943dab74d274ee3114bedf38b3835218eed787441cf6393390318243150e46951cda28528c064161b264974615ae7d160649b91c3ac241aa609b0d81c246ce890e31979aab8823997a590bced10b9f117811b057ee8cda681ab4b48699dab796bac29e0ad47850522e8839a8e4d940b546adabdf002d79fce82c5ce6d27bc848cb2c3f601679cd25c02a26985cd5350ad44820d23de74e5ce11ac27f6fd149464fcf399343d6f5cbc69f92b3dc001367695fe926de02fbc6fdace09b1a379ad218fed819468f9166b43d7c75f88c4256db3904de8fa3f48fbe4430a1514ecf3692258073efdd74e8b8f585c7d94910aefb83b4c3622ac827687b82ef7856df54dc71a110daed4bfb1be69d9a7ae35399a8cb08742bd54d42e3e16da8ad5f21584411cbfa7bb75fc03b8d5b0a278040000",
    ],
    [
      "ETag",
      "VsRDQ7QQb8UU6fTxuyeTVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1604090111888"
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
      "6d",
      "4f",
      "83",
      "30",
      "10",
      "c7",
      "bfcbf9161248e664247bc174ea923dc958e24396a52b076302c5b6a8cbb2efee15e7346aa26fe8ddf577edfdff74078f5919830fab2c7daa516e4f52d437260851d5b956b454a2540816a06629918c2ba7d3bb5f079a17afb777c5e9597b1206dd2e118aafb160e0ef20c9308f15f80f3b285981d4c6455e17e5b2c92cd0dbca14675138185f515e88d8e4e3f97018f4867dd85bc7c69869b66cf87fb42df6166cc42ac40425961ccd2c95141be47a60642a565439da4ad492a382066e365229ea8a49216caad85ec776db4ecbe938aeeb7a9e47602e38d39928899dcf683ed042b33c142fa412da04c82624c149f37da6721637424c381847ed5633df5780464bb21c977f8334ef9ad16ff8c00e167ce75821ea521fa9cbe124f8ed38f2f4f3a88b20eaff209426a78e483418f56751309a1a6e71d0dedb6a545329c84885c643d76979f41a9c775bcf85b19aeef1b5acd102cee8755c671afc84e50af76fbc7b669c7b020000",
    ],
    [
      "ETag",
      "acs09BZhAtcmxXYm576ORA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1604090111888",
    },
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
      "ef6f9b3010fd5790f7a5557e0021092152d465296b91529212d22a9aa6c41843dd124cb1e99455f9df7740d3369bd67ec2f8de7bf7ee7cf78c1e581aa2210a58fc58d07cf7e59e07a889a8c431dc9aaadfb0e7d355a377f9fb7ab70a7ddc68f8d7a3112058c912789b25b4257891132a86cb453bce7991e19cf31608b52cada5f7b5ae6669baae0f0603e0099a4453963e00fb4eca4c0c55f590bb1d731e2714674cb409dfbedeab4f1d35cbf93d2552a8c72955c822d48f939e259c60c9783a5a2ec0402168bea65bcc12b0f0c60c83afc7d26d86b7ed18c04f8c504c082f5259da0209c2d388c5455ea9a2e133aa6cbe3ba0853db527be32992d5dff6483b7257973aa60a1acd7391545229bca066a8a5842d72cdcd491ec41f9eecdae20020eeeb0a062a3dc5eda9eadbc5d6d949172a68cdd73e558c0719593b353e5c29b2de7cab7d551102c8754489656867d1c24b434fbd253e7df972c095842b63ab836b53ed6079a15448149a281d10b228d06c120307bd80834627569370c28069e2cd52b164e794a43a34bb06e9898589a410cbd135986d9b32ccda4340a826e145aa41b9868df44bf7226e939131917ac6e2cbaf51cdf5efbded29d8c7dbb2a23c2d0bcf3da5c59c47b9f128a04d00775edcb28e390a97c25c7f56d6f3cf19d1bbb1e8c298d31d92d1e6134229c080a689ce32d9534bfe221340dcd670bc77766ee780a8ceab5e7078440c31fcf6f047f97555d96d5172d7ccf712f2a0307c40d4e8a0af2541f10cec02bdaef9bff9701cbfdeec72a3a28fc0404ec424d46d74bdb5ba1facaa311cd694a3e9f000057814f57fab05f80850d833442c23fcc1b11651292d37aeed8b6b257b33bc0ee1ba802e7f2ef5807be8706971aa522ddd254be5454ef57d9aa2a5488571004615cdcaad7fb3f0285b9e2df040000",
    ],
    [
      "ETag",
      "7/T+EPLY+5HzQyYdTa++TQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1604090111888"
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
      "00000002ff8d904f6b834010c5bfcbf418052da5682087a4489b20a1b50d0d9412569d18e39f31bb2312c4efded1e6d0634fbbf3e6376fdf6c0f455ea7308738cf2e2deaeb5d86fc365e22346dc9468e866a836001b2ca849cf9178e579be2b3b88fc36eb65fce36eea95b2c8430c9092b05f31e8e3996a981f9570fb5aa50c60e073d390ac6d76654d6db8fe0398844a8281d85ed2e0c97ab3080c1fa33d614ff1af91e2c38531ce11135d6098e291a4d674c783d2e6854d594681b6a75820626786a649ada4669225b14db776cf7d179707cc7755dcff3042c29519c532decee5db20113ab32a24ef603076ef5eaca685e3589b9c1f4d611c7271adf65c9c3ba450b12259ff492f36f3dfc009e89e17b81010000",
    ],
    [
      "ETag",
      "+9qtbBJkWk2bLw+XA+J1hw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcf4b7282300000d0bb642d0e844f9beef808123a545182b061226604ac9226281fa777afd37783f704b4aa989465df5dd80d7c808942b4ac9611571d6360364a0a2ab7b9161331d71c6238dc70611e9115b34e8d02af77c33e5b69b57051b74ef32942cd2089c108742da8b300af7cffcdfeb1e739b9966df748edf59814aadebbc6de690e4ad622dbe4fc5c17a7ecfe3e335aa58f56d22c09d0970a1116d0c0f1f1b4ab85f77d48878d1265851d8e2439785afcc0865fee144dbf10e75a86bed53ada7d242a25fb020d72b7393b7913629547d3f839c7c6162c001b7923982c9b575637115a80ff79d94f9cbdfa0ea38209f0fb071ce75fd018010000",
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
      "Fri, 30 Oct 2020 20:36:52 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-91-1604090111888",
    },
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
      "00000002ff85545d6f9b3014fd2bc87b6d1248930091a2354d691729211b21adaa6942b631d42dc1049b765195ffbe6bd374ad2ab54f60df73ee39f7039ed1032f53344684e7bb86d5fb6ff782a013c414cee136f2f6d3bf4dd0bf7b62bbf3e62638dfd1abdba7c904105cb324de5605eb48d1d494c9f166ddcd6bd154b816a203893abed37146f6c0f66dc7713ccf039e6445b6e0e503b0ef94aae4b8d73b6a777321f282e18acb2e15dbd7fbde63bf57d5e29e51257bef257ba0227b9f8b7e2f04c58a8b72b259838146b23a615bcc0bb0f09f9992b3f7a9bb1c6fbb39801f39659852d1944adb8214549419cf9bda6445e367646cbe7941eb6011cc628b8aa2d9964989b7ecc44ab1c289da57ccba8c564b6b1e5eaea2e5349eafc2643dfb112ca7ddd96ab159866bebe647100596c2a460866b4dac33730ae100fa29938a97463dd6d75af9a541f38f63d1049096ac0d26ae3dc28e67fb24232ecdbcd321c96c468847dc213e2536f5076c9012868167440d0b97a24c5d371b7a9e930cdd51960c3c421362a76e9251e20d3d3f1bd8231f1d4ed053cd15bbe0b21292b71d4237d13c0e9238da84b3691c981232dc14eaa235a60b78eb51418100faa4a6838e72014abaddf3300ea2e92c9e5f07ed84172cc774bfdec18c335c4806685c43f314ab97228586a170ba0c2e006c26f6f3189468fcfb19e99e6b176f5afe4a8f6180daae324fb48ea3797865ec1c11d7b8680ce4b17d411558be83dac0f5e10f206149db2ce8d726886e517b15b18cd5aca45f4f13c026f0e5b7765c7cc0c2ea838c547086dda1528bd09ab53bc44db92fecbed377fbe64b55b8561f627e7f74ec9acea133b22d2bd54b45ede243a1ad58235f41fa77b20943d3adc33f480e4b3e78040000",
    ],
    [
      "ETag",
      "R8yAxuE2hweqBuWEBqcGYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1604090111888"
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
      "401085ffcbf828a490602f247da0176b4d5b7ba14fa669b630502ab0b8bbd4d4a6ffdd59acd5a889bec0ccf0cd72ce81233c2579082e6c92f8b94471b88a51cd74314759a64ad2ade0b9443000158b89c4da43d7bb7766fbdee17aba6bf55f078d656dd66e1321832d660cdc234409a6a104f7f10839cb90d6029e9659beae3a03d4a1d0c3853f1f4e06d4673cd4fd64391a799d511f4ec66531648aad2bfe1f6bab93013bbe99638402f300b59642f01d066aa86d4a9615299a9297224009155c3d88052f0b2638376962b66cd3ae5b8ed5b26cdb6e369b04a63c602ae139b1cb05e903c5154be7fc855c429d0051956438aaae7b1a2761654497c3895f772a7d5f0192162529aeff0649ef96d167f8c0ce117ce758c6cb5c5da8dbd183f7db7194e9e7513dcfefff20a4a2a42e883f1cf717be379e6a6e75f6de39289453c12948893a43db729a378dbaf51e6b97eba8e93dae12251a1030fa3bee12056ec45289a737f79ab6b17b020000",
    ],
    [
      "ETag",
      "e/OCAJ4QvDy+Pj9EzG7U/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535b6f9b3014fe2bc87b69a55c20172e91a22e4d588794928e9076d53425c618ea1430c5265557e5bfef004ddba85af714e2ef72be737cfc8cee5916a2110a58fc50d2e2e9cb9607a885a8c4319c6e7737d334f9e39a77dbddf94fd27373312b1fc76360b04a25709a27b42d7859102a46ab65272e7899e382f33618b5ad5e5bd3d5816aa99aa699a6093a419368ceb27b50df49998b51b77ba8dd89398f138a73263a84a7afe7dd5daf9b177c4b8914dde3925da822ba9f173d4b38c192f16cbc5a428052d0624d53cc1288f0a60c83afc7d61d86d34e0ce41d231413c2cb4c56b1c082f02c627159d4ae68f48cea98ef3ed0d29edb535f992e56ae7fb2c16925de9c2a5828eb75414599c896b2819e2296d0350b370d92df2bdfbcc5252090e00e0b2a36cacd77dbb3156513624937ca58395326ee4c39163bae727276aa5c788bd595727e7b0442dc900ac9b23aac8f838456415fe6e97cbcc54a8025146fc0b5a1ea5833552b88028344667f18442a0d02333086b81fa8c41ad04118500c3a59b9d72a9cf10c9b3a19a8b81f11d50a031259c381ded7496468d6101b562fd4fb74a86b21dab7d063c1249d319173c19aa1a21bcff1edb5efaddce9c4b7eb36220c839b35e1aa26dee794d024903ee96b5fa18c43a5ea861cd7b7bdc9d477aeed6629e634c6e469f9006b11e1445060e302a754d2e29287303474b5583abeb370277350d4377d75600834faf5fc26f09ff27acab2fe45b3aa81fd3bc36b9c943561d77ca09eda53db2a2cee10edf7ad7f3b416a7df0b995060ebf81014fa111a31f2bdbbb45cd9147235ad08cfc7f09805c03ff7dd187e7055c7860504648f80f2b4744558414b4593d96d6f11a754feb1b4315d5e4427ec04cc338ccb8f2a81c694a33f9d251f3bcaa51d550295e4900c2c6b88e7b01e85f4208dd73de040000",
    ],
    [
      "ETag",
      "jvWCmlzN8hjvBXc2NpsDuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1604090111888"
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
      "0002ff8d90516f82301485ffcbdd2b24b02d064d7cd0856d26c44c361f8c31a6c28555815bdb32e70cff7db7e8c31ef7426f0fdf69cfe9050eb2c961043b591e5bd4e7bb12edc20d299ab6b28617458d41f000ad2899fc39ac9e87898aa3c940a6abe377f17092cd623c66c2649f580b185da09058e50646eb0b34a246b66db7ba3f91317b564e99cd3fe2973865a1a6dc09f365924ca6490c9df7c7a60effb26c3a0ff6b44bb1408d4d862e85d2b4c7ccce5c41236a55a16fa8d5191ae8e1fe47a9a9554213f9acf8c37b3f1c048fc13008c3308a22062bca8495d430bb7ce76c60c98a2aa513f7839001dd8f5cb5e8bf5fbdec3adca64db7b999a6678be64d132730e82e0fae419ec885b31cdaea163dc804bfe4abb4d77df70b5b09f2d2a6010000",
    ],
    [
      "ETag",
      "zkYF9LpE8A6iRYqxf3winQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfd97282301400d07fc9b33a407149df58a44510c502155f32142e2d3103312c019dfe7b9d9e3f380f94e539b42de99a2bd4e8154d998617f9c2e38aa9cb7264aae50777ae0f918a0d4395729fa43e1b767e280c892d0e7eb80a0dea40bbed8b8f78e9ebb0c9092bba28816cb2938b46de262d4e155becbbfd81c6954ecb48f6df0575e6deeae069951243646d59449bb39b8a4d50d372bcd5e4e4d44d643a6be1eadafc1373012eb56f77c1f07ce4ea6e7365f2c760a9c59cf7a4718fcdb03ef7951cd4f3f150f66e909fb22ffb521092df56b25fcaa0f2a8816608465e096849f5ccbe2c319ea1ff39e9260ecfbe099900817eff00414c55b718010000",
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
      "Fri, 30 Oct 2020 20:36:54 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-93-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6c1320a10d448ad628a12b52423620ada66942b631d42dc1149b545595ffbe8b69ba5695da276cdf73ee39f7836774cfab0c4d11e1c543cb9aa76f7782a053c4142ee0b53e3959f2c0dbc67757cc29360b9a4c56c1e36c0608deb124ded5251b48d13694c9e9361e168d686bdc08318044036f3cb0cf2dc7f22cdbb65dd7059e6465bee2d53db06f95aae5d4348fdac34288a264b8e67248c5eef5dddc8fccba11778c2a69be973441459a9f8b7e2f05c58a8b6ab68dc1402b5993b21de62558f8cfccc8c5fbd4438e77c302c07b4e19a654b495ea6c410a2aaa9c176da3b3a2e933d236df1c50ecaffc45625051b6bb2aadf08e9d1a195638554f35332ea3cdda08c2cb4db49e27c1264ce3c595bf9e0f179bd5761dc6c6cd951ff986c2a4649a6bcc8c0b7d0be102fa19938a575a3de99e3be59706051fc7d211405ab23e984eac736cbb96477232a1b93b3e23b9c50871c9e40c8f89453d8739196118785a54b37025aa6c9439f6c422a9639151eae07c9c7a96374ef3714e5c6fecda966ba1c3297a6cb8624b2e6b2179df21741305899f26d1365ccc135f9790e3b654cbde5857c05b8f0a0a04d027351dba2817a0d4b53b08133f9a2f92e0daef27bc6205a64ff103cc38c7a56480c60d344fb1662d3268180ae76b7f09603db19fc7a044d33fcfa8eb79e7e24dcb5fe9090cb0b3abf417c54914843fb49d23e21a97ad86ecfb03aac1f22dd406ae0f7f01094bda6741bfb67ef41bf54f11cb59c32afaf53401ac035ffe6bc7c5072cac3ec8480577d81d2a3b11dab07e87b82ef7853db29d73eb0c6970a33ec4268e75ec5a97a3cbc876ac522f15f58b0f85f662ad7c054110c61fea6e1dfe01058098d078040000",
    ],
    [
      "ETag",
      "p++DiI9USjHe4gOCcT7LIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1604090111888"
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
      "0002ff8d92414fc2401085ffcb782d491b114b130f20a0184084e20143c8d24e4bb1edd4ddad0609ffddd98a68d4442fedccf49bed7bafddc1639287e0c12a899f4a94db9318f59d2926a8ca542bbe15942b040b508b9849d7e9ccd7f366dca1a24c7ae3d7e6fd2cbe892f2e9850c11a3301de0ea204d35081f7b0835c64c86b01a565962fabce02bd2dcc70ea4ffaa32bee330a4d3f9a0d06adf6a00b7bebb8180a2d9615ff8fb5c5de820dad2618a1c43c40a3a590b4c140f78d4d25b222c59aa25206a8a082ab07b1a4b21092a8c6935af3b4e634ecbaddb41dc7715d97c19402a113ca999d4d591f68d2229dd00bbb840603b22ad970545d9f799c84951153f6477ea35ee9fb0ab0b4284971f937c87ad7823fc3077688e03b27322a737da47a83dbd66fc771a69f47755a7ef707a134277544fcfeb03bf55bc3b1e11607efedad463596c4412a34193a76dd3d3b6fd8efb15e92899adfe36959a20581e0bfe33ad1e0452255b87f03c08270427b020000",
    ],
    [
      "ETag",
      "81DZhZ9gDopuiFPz9VUgJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1604090111888",
    },
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
      "02ff85536d6fa24010fe2b64ef4b9bf8022a8226a6e759ae47a2e821d6f42e175dd6c16e8b2c65172f4de37fbf016a5bd35cfb09b2cfcb3c333bfb44ee79b2217d12f2ed430ed9e3973b11921a0145b7783aa1778bab683c34971b6fda9ec1722f6e6038182083172a4977690c7529f28c81ec2fe68d6d26f2946642d4d1a8deebd48daeded17bba6118b66da34e421c8d79728fea5ba552d96f368fb51b5b21b631d094cb0613bb97f3e6bed54c3371074cc9e669c9265691cd8f8b5ec48251c5453258cc31402e215bc18ef21823bc2a37e1d753eb06a7bbc616c97bce803226f24415b1d0828924e2db3c2b5d49ff899431dffc90b933764681369a2ebce06c4d7785787dae51a9ad5619c83c56356d8d3d453c8615dfac2b24bdd7befbd3092298e0964a906b6df9c3f11d4d5b4b85e9d6da40bbd086dea576aa763dedece25cbbf2a78b99f6ede604c4bc1b908a2765da80863114499f07eabebfc642401556afc095a577a961ebbd300a2d16d96d338c7408433bb44cda0e75d6eb40671302459d2adc4b154d44d231adae69430456d4a656d48a6cc3a43d1d4c46750661d7d2db612f6a87e450237f33aee092cb54485e4d952c7d37705681bff046c3c029db88284eeeb20a5734f136a7c22691f4415f8702e5022b1557e47a81e30f47817bed545b31862d658ff307dc8b88c612904d33ba0305d9446c706864369dbb813bf586635494573d3b3224e9ff7e7a15048f693965557e49e04e9c79309cccca0c47d2358df392b5af7e484b6fe975bd5537ccc068f58d76dfe834745dff450e87daffcdb1916ee76363031dfe20039f4725263f178e7f43aa231faf2883847dbe17482e814f5ff9f1c921171f1d96c1f5551cb790c9a208cba0da46be2be355ea966176ad1629c9997a87d9edee71ec8547e1083b48d47347d5932b465542b97c2121884be4b9de15a2ff004a4ecde9f2040000",
    ],
    [
      "ETag",
      "MajUGfLA5WdNO3PeWvoYeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1604090111888"
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
      "6f",
      "82",
      "40",
      "10",
      "c5",
      "bf",
      "cb",
      "f4",
      "5848a031144d3c94865813a22dd443d318b3c280c89fc1ddc5c618be7b67d1438fbdb0b38fdfdb7d6faf50956d0633d897c5a947797928507f982146d5d75af1d251ab102c402d0a2683f33af7bcec942487f5a33b5d7c3d55cf75319f33a1d20336026657c84bac3305b3ef2bb4a241b6ed76723c91317de98cb25c7d868b3066a1a1cc08ab4d14bd04510883f5c7d655ffb26c070b8eb48f3147896d8a264527e988a95e9a824a345d8db6a25ea6a86084c71f85a4be1392c866c59e4e6cd77326ced4715dd7f77d066b4a852ea96576937036d0a4451dd30ff7039701398e5c351fbfe751361deed376d8de4dc145a37a97c409149acb9d5b905732e13487d6b2470b52c12ff956eadb7ef805197a007ea6010000",
    ],
    [
      "ETag",
      "BvOf66dqSShO+19GY2k7lg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d0bb64ad0e0d20a43b88d12a88c857d8309846e5a340f8899ddebd4edf0dde0f4829656d9b7455c11ee0134c29440bba306a4197c6cb2b0d97d1b66b6e42472f46a3692b9f183424d1de2a656bdde8abf9c87c4ec4513a7c55d789c235179c5a3b286e62ef604c119ef68578dc612b83a7cd20092cbb05d0f1e515c30ac4b567b1426608c757be23ee4377c4ea641cb3ef325fba943ac176e39e2121d83ef336bbbbd1bed978615c8cb27f9ecc4915f49779a8820ee5c5f38ee72e52a27ee81bb3137b587e28a23a7849aac5b9a7c6c4ae463003ec59679cb549f6ce8a324233f03f4fbaa966efbece52ce38f8fd036b1c237e18010000",
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
      "Fri, 30 Oct 2020 20:36:56 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-95-1604090111888",
    },
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
      "db3014fd2b91f795b6097da595aad19500d5da14d214344d53e43837c190c621768a18ea7fdfb5431908093ec5f63de79e731f7926f7bc48c898c43c7ba8a17afa762762724440d10c5ffd735ec43fe86376f9b7b06156eec2abece7d5648208ae59926ecb1c5a52d4150339deacdb5925ea925642b430516bd46f3903bb678f6cc7715cd7459e843c5df0e21ed9b74a9572dce91cb4db9910590eb4e4b2cdc4f6f5bdb33bee9495b803a664e7bd64075564e773d1efb9605471514c366b34504ba822d8529ea385ffcc243e799fbacde9b69d2178c71950c6445d286d0b533051a43cab2b93958c9f89b1f9e640d6dec29b85161379bd2da2826ee1c84aa8a2917a2ac13a0b564b6bee9fad82e5349caffc683dbbf096d3f66cb5d82cfdb57573e1059ea5689c83e15a13ebc4dc7cbca07e0252f1c2a887fa592bbf3468fe712c9a80d2129a6034b407d471ed519cc64396badd7e9cda10c76e3cecd36e6cb3510f7a490c147946d4b068210adb46f420e9463018ba512f65c711f6c589923e75633761f6a0d725fb23f2587105a75c9642f2a643e42698875e14061b7f360d3d53424aeb5c9d36c674016f3d2a2c10419fd4b4d7512e5049b77bee875e309d85f36baf99f00232ca9ed60f38e394e612104d2b6c9e826a2912d0ab3d5d7aa7083613bb3c042519ff7e26bae7dac59b96bfd2431ca0b6abcc97acc360ee9f1b3b07c435cd6b03d9350752a2e55bac0d5defff201297b4c942ae365ef08b344f01a45041c1be9e26824de0cb7fedb0f888c5d54719a9f08ebbc3a4166115343bc44db92fec6367d0efdbc4802bf5213674fa87aee91c3a236ca1502f15358b8f853662b57c056110c7ef9b6eedff014f21083178040000",
    ],
    [
      "ETag",
      "NGinbBawgPzn0eCpvTQgKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1604090111888"
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
      "83",
      "40",
      "1085ffcb78142224152b490fd4a236a9b5b678324db385a1a2c0d0dda58a4dffbbb3a8d5a8895e6066f86679efc1161eb332011f96d96a5da36c0e56a86f4c314555e75af1ada2522158805aac98acd3d4098ec24d4c97e1f36470d8d04bb3bee9f59850f13d1602fc2da419e68902ff6e0ba52890d762caeba25cb49d05baa9cc70164d87e30bee0b4a4c3fbe1d8d82fe28849db55f4c84168b96ffc7da7c67c1032da798a2c43246a3a592f480b11e1a9b4a14558eb6a25ac6a8a085db072b4975252491cd13fbf4d8763da7e39c3aaeeb76bb5d06738a85cea864f676c6fa409316f9949ed825780cc8b664c3697bddf0384b5a23a61c8e23afd3eafb0ab0b434cb71f137c87aef057f860fec3d82ef9c28a82ef59e3a1f5d07bf1dc7997e1e3508a2f007a13427b547a2e155388b82ab89e1e6efdefb8d463591c4412a3419ba4ea77b7ce2396fb19e91899adfe36b59a305b1e0bfe332d3e0a72257b87b050507720a7b020000",
    ],
    [
      "ETag",
      "uff0A/EvcoHExPD+yozyqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1604090111888",
    },
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
      "6d",
      "4f",
      "a3",
      "40",
      "10",
      "fe",
      "2b",
      "64ef8b267d81be006dd278bd8a27974a3d4a35e6726997ed80abc022bb688cf1bfdf00566dcce92760e7799e796676862772cbb32d199390c77725148fdf6e44485a04148df154cfe391939fe6f1af650a37ce65a64f4fdd87c90411bc62499ae609b4a5280b0672bc5a76e24294392d8468a3507b64b60d531fe823dd300cdbb691272189e63cbb45f6b552b91c77bbbbdc9d588838019a73d961227d3defdef7ba79216e8029d9dd4fd9c52cb2fb79d2a34430aab8c826ab251a2825146b48294fd0c21b731b7edf97ee709a766204df730694315166aab285124c64118fcba25625e32752db7cf74296cedc9905da6cb1f282830d4d2bf2e650a3525baf0b9065a25ada066b8a78026bbedd3491fc563bf11767184107d75482dc6897a78eef68da4e439b6847dad43bd6f6e9aea71d1c1d6a3ffdc5ea5cfb71b51744c35b908a67b5dd80860954565f3aea7ebcc78a4015a66f826b4b37a961eba3300a2d16d9fd6118e9108676680d693fd4d96800836d081479aa52af593413198bb6bd5ecfec0f23a3472d3a8088d99165857a04c35e6f40436a5a613f8ac8738b3c145cc13197b990bc692bb9f4ddc05907feca9b4d03a72e23a2d8bae3c65c55c47b9f0a8b44d027753d57512e30537547ae1738fe7416b8174e33167388297b5cdee16044349180685ad014141467628b4d23e78ba51bb80b6f3a47467dd7e73b8424e33f4f6f84e031afbbacea2739992fa68139a81dec201734296bcc7df3428cce1011cfadffcba0e52f4550e12f2270131a32f9bd72fc2bd21cf910410119fb7a02105c07be5ce8",
      "dd762116f70bd34885df386f4c56495801cddcf1b4b6d7b07b86659af5ef40d1427d88d97a7fd7e04aa352841432f55251b35d55abea50295f4118c471f15cef2746ff01594c078bdd040000",
    ],
    [
      "ETag",
      "0pg9EpHpgJSmejEWn0AHIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1604090111888"
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
      "5f",
      "6f",
      "82",
      "3014c5bfcbdd2b24309580890fbab169428c63f36931a6c085a1c0656d7131c6efbedbeac31ef7d23fa7bfd39ed30b1cebae80296475f53da03c3f54a8dfcc224535345af1d453a7101c402d2a26abe2d4d2d0be4cc6236f1e8c96d9e47913cd67332654fe85ad80e905ca1a9b42c1f4f3029d68916dfbbdb43732a6cfbd5156eb8ff8354e5968a930c27a9b24f34512c3d5f963eb8fffb2ecae0e1c284bb144895d8e26452fe980b95e99824ab47d83aea241e6a8c0c2f6a09234f44212b9acb851e0fa8137f622cff7fd300c196c2817baa68ed9ed3b67034d5a3429fd703ff0199076c9554b3b9e587eb41d4e16e068bbbb6971d6a83692388142f3b8770bf244269ce6d05a0ee8402ef82797b5beedafbf42a315f8a6010000",
    ],
    [
      "ETag",
      "gdvmoumF5430A63Hb5DP9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c97282300000d07fc9d971aa0881de886b01411af60b1330d2b048586a904effbd4edf1fbc1f40f29c0e433ab615bd8377f0246b6d992f4dfe8636e2964c8a90a592c52761c6496507a2b0db5840d75adf94d595404fd438735343e5503baaf5c921beb13e5b19bc6a2a3c470f341b5aed8afd07f6db2ea2ea8d66ce3568c4a4c098e99d5361b7f10ab4f5e54bf064f833b98c6514aa73251973ac7725e4eee83154cc2e370fdfd868bda2dd4b6a849b30df1877cb2e77799ad8870e4d5f95cfeb10d9b36806fdbeed096165b04196e93c76b5dd1d5758070b4027ce7a3aa4ec9595644d5b80ff793a3e397df511253dedc1ef1fbde3af4718010000",
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
      "Fri, 30 Oct 2020 20:36:58 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-97-1604090111888",
    },
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
      "6b4fa34014fd2b64f6ab6dc13ea04d9ab569a936dbd215a88dd96cc8300c380a0c3283464dfffbde19acab31d14fcccc3de79e731fbca03b562668826296dd37b47efa71cb637482a8c419bceec4d25b2e12f33cbbde27c5fe716b3f5bbf2ea7534030c512b8a872da11bca90915935dd0cd6ade54b8e6bc03893a63bb638dcc8139362dcb721c077882e6e99a9577c0be91b212935eefa8ddcd38cf728a2b26ba84176fefbd87d35e55f35b4aa4e87d94ec818ae87d2dfa33e7044bc6cbe92e00038da075440bcc72b0f09f99c4671f5377192eba19801f18a19810de9452d98214849729cb9a5a67459317a46dbe3ba0c05dbbf3d0203c6f8a322a71414f8c044b1cc9a78a1a4b7fbb3156de72eb6f66e16aeb45c1fcc2ddccbaf3ed7ab7f102637fe1faae21719c53cd35a6c699be797001fd840ac94aad1eaa67a5fcdaa0d5e7b12802480bda0623db1c61cb31c7711adb2475fac33835691c3bb13dc4fdd824e3011d2431c5c0d3a29a854b5e0ed281e90c9338c2b645a3c178e444b1351c457dbb3f2224e95b2327458713f4583349174c545cb0b64368efaf42370afd9d379f85ae2e21c54d2e17ad3155c07b8f120a04d017351d5494715052ed5e79a1ebcfe6e1eaca6d27bca619264fc13dcc38c5b9a080c635344fd27ac3136818f2661b7701603db1dfc7a040933f2f48f55cb978d7f2377a08035476a5fea220f457deb9b673445ce1bcd19087f6802ab07c03b581ebc35f40c292b659d0e5cef5af51fbe4d394d6b424df4f13c03af0edbf765c7cf527074a4648b8c3ee10a144484ddb1d62badc57f6a9e58ccc53a4c1b5fc14b3fbe363d7540e959116b494af15b58b0f85b6628d78034110c6efe96e1dfe015e7f3d2e78040000",
    ],
    [
      "ETag",
      "UsFNFDd0GgYWdmWwO7z1KQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92d14e83401045ff657ca509249552121fa8d64a42ab521aa3c6345b1890bab0b8bb686ad37f7716b51a35d1179819ce2cf75ed8c2435967e0c3aa2c1e5b949b8302f5a52962542dd78a6e8da8158205a8594164fc125edfdcb89a953c980c36f5687d858be2e8880895de63c5c0df425e22cf14f8b75ba85985b4960ade56f5b2eb2cd09bc60ce7491cce26d4572233fd6c1145c1281ac3ceda2f664cb365c7ff63ed6e67c15aac62cc51629da2d1d248b1c65487c6a66255c3b1a7442b5354d0c1dd83428ab66152881e4d7ac341cf71edbe3db41dc7f13c8f402e52a64b5113bb98933ed042331e8b6772092e01b22bc970de5d9f685c669d115386b3c4ed77fabe02242d2f392eff0649ef3da3cff081bd47f09d6395686bbda74ea3f3e0b7e328d3cfa34e8264fc83509a92da2349381dcf93607a61b8bb77efa38d4675210505a9d064e8d87def70e0da6fb11e0b1335bdc7d7b2450b52467fc759a9c1cf1957b87b05bc8417a27b020000",
    ],
    [
      "ETag",
      "RzIYZZ6tailAG7ynBjWeUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1604090111888",
    },
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
      "4f",
      "db",
      "30",
      "14fd2b91f702523f927e269510eb4a60d14a5ad21486b6a9b51d27189238c40eac42fdefbb49285021c1c39e9afa9c73cfb9d7d74fe88ea7011a21c2a3fb82e59b2fb782a006620a47707a1a1a763adfb88fb1b8f8f1d75651f7e7c6b8383a02062f55122759cc9a5214396572b45cb4a25c1419ce856842a1a665368d81ded32ddd300cd3344127591c4e797a07ea1ba532396ab777dead4888286638e3b24545f272de7ee8b4b35cdc32aa647bdfb20d2eb2fdb1e9712c28565ca447cb05042824cb572cc13c8608afca807cdd2fdde2386945407ee094614a4591aa321694a0220d7954e45555347a4255cc371f68614fed89af4d664bd73f58e3a414af0f352cb5d52a67b28855435b434f218fd98a07eb1ac9eeb4536f760e0824b8c192c9b576f5ddf66c4d5b97a4df85ae779976ac8ddd136d5fefb8dac1f1a176e6cd9673eddbf51e08890326154fabbc3e26312bb33e8fd4797f91a5002bf0afc1d5501f60c3d42d1292210dcd6e9f843a23c424c33eee129d5a3dd60b08c3a05365f54a85539176ad5ebf63f63b845142021a0e0ddac1c40c280e42c3249649ba43130f09da36d063ce153be1321392d77345579ee3db2bdf5bba93b16f576d8418667752872b9b789b53419340faa0af6d8972014ee52539ae6f7be389ef5cdaf55e4c5984e966710f9b11e2583260e31c274cb1fc5c043034349f2d1cdf99b9e32928aacb9eef18128d7e3dbd0afc4d564d5955bfa5d7a057f9ef0897382e2ac643fd818c3eda6e1bff57022afc01063c835a8c2e96b6778dea238f852c6729fdfcf6815c019fbee6ddd3022e3c2eb0910afec3ae51599ad09cd53bc7932a5eadee1856bf6fa18a9cab77d86060ed865bd6282bb284a5ea",
      "b9a3fa6995a3aaa042be90008455711df70cd07f9f8215e6da040000",
    ],
    [
      "ETag",
      "Ff1EnPyNwloQKxEtg3Xy1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:36:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1604090111888"
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
      "5f",
      "4f833014c5bfcbf51512308b61247b7006270617656e0f9a65e9e0828c3f17db825916bebbb7d5071f7d696f4e7fa73da717a8ab2e87108e55f939a03c5f95a85fcc90a21a1aad78eba953080ea0162593c28f87fb371c37f57277949d7a9ac9d563b95830a1b20f6c058417282a6c7205e1fb053ad122db0e07696f644c9f7ba3c4ebd76815a52cb4941b61bd4d92db6512c1e4fcb1f5f5bf2cfbc981131d532c506297a149d14b3a61a663535089b66fd05534c80c1558d81e9492865e48229715771eb8fe8d37f3e69eeffb411030d8502674451db3db0d67034d5a34297d713ff0199076e4aa855d4796af6d87d1021c6dff6b5a9e35aa67499c40a1797c16783f51eec8c4d31c5bcb011dc804ffe543a5212c44a370fa068db33e32a9010000",
    ],
    [
      "ETag",
      "a1IuFZevSkBVbrnsM4rGJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfc97282300000d07fc9591dcaa2a437418b4e645f0cbd30694859aab2844570faef65fa056fde0b104a19e74957fdb00778071311e1866e502d68f2487547a8b48f74f86eedc6a275e1cfd89caf4ad9d8db94c4e830a8a538854e7e5443a3b40d84d774c84b6e704c73ab52218167a7abe46bffb474066753a9722245715c8676d2d826f1b54f775482bb509ec668583c594fe30c9d3d4f97cd21cbdd475c1ffa9d8cc404a30bc45c3047476a29baf5fed60f941aae459c350c8ebbe3d447d570f90a72c1c26ebfbe134b85fbeeaddbbb8e679ef8cd9a32b002ec59172de349b1642505c215f89f27dd54b3a5af31d2b216fcfe01afb2c7b618010000",
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
      "Fri, 30 Oct 2020 20:37:00 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-99-1604090111888",
    },
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
      "00000002ff85536b6f9b3014fd2bc8fbda0448027948d11aa574654ac80aa4dd344dc83686b8259862d3a9aaf2df77314d97aa52fb09dbf79c7bce7df08cee7999a219223c7f6858fdf4e54e10748698c239bc0ea330d835dfef02ee12737c8dfdfae70ee7f3392078cb92785f15ac274553532667dba89fd7a2a9702d440f12f5a6d39eed5a236b6ad9b63d994c80275991ad78790fec9d52959c99e651bb9f0b91170c575cf6a9d8bfbe9b8f03b3aac51da34a9a6f254d5091e6c7a25f0b41b1e2a29c6f2330d04856276c8f790116fe335372fe36759fe37d3f07f023a70c532a9a52b5b620051565c6f3a6d659d1ec19699b270714792b6f191b5414cdbe4c4abc6767468a154ed453c58ccb70b336fce07213ae17b1bf09926879e5ad17fde566b55d0791717be5859ea1302998e61a73e35cdf02b8807ecaa4e2a5568fdbe756f9a541fefbb1b4049096ac0b2663cbc5f6c49a928c8c6936193a24b31821133276f09058743a62a394300c3c2daa59b814254d3199da032b19a653928cdc899b1027a3493a74ada1955ab6e33ae87086fed65cb10b2e2b2179d721741bfab197c4e136582e624f9790e1a650179db1b680538f0a0a04d007351dda2817a0d4b6db0f622f5c2c63ffc6eb26bc6239a64fd103cc38c3856480c635344fb17a2d5268180a166bef02c07a623f8e418966bf9f51dbf3d6c549cb5fe9310cb0b5abf4174571e807dfb49d23e206178d863c76075481e51dd406ae0f7f00094bda6541d75b2ffc85baa79065ac6625fd7c9a00d6814fffb5e3e20316561f64a4823bec0e95ad08ad59b7435c97fbc21e0c2cd7729006d7ea5d6cec8c8e5d6b73b419d99e95eaa5a26ef1a1d04eac91af2008c2f803ddadc33ff747babf78040000",
    ],
    [
      "ETag",
      "3SRNhuJjNi6b/7QaIrXhag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1604090111888"
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
      "02ff8d925b4f83401085ffcbf84a13686a6d497ca017b549efa50fc634cd16064a050677174d6dfadf9dc55a8d9ae80bcc0cdf2ce71c38c0639287e0c226899f4a94fb8b18f5cc14735465aa15df0aca158205a845cc64a9ea31c9f8be2ebce56b5278935e77d4995d5f33a1822d6602dc034409a6a102f7e100b9c890d7024acb2c5f579d057a5f98e1c29f0fc6b7dc67149a7ebc1c0ebdceb00f47ebbc180a2dd615ff8fb5d5d1821d6de618a1c43c40a3a590b4c3400f8c4d25b222c59aa25206a8a082ab07b1a4b21092a8c6935abb5d739a76c36edb8ee3b45a2d06530a844e286776b9607da0498b744e2fec129a0cc8aa64c351757de6711256464c3918fbcd46a5ef2bc0d2a224c5f5df20ebdd0afe0c1fd82982ef9cc8a8ccf599ba194ebcdf8ee34c3f8fea797eff07a134277546fcc1a8bff0bdd1d470ab93f7ce5ea39a4ae220159a0c1dbbd1babc6adaefb176c944cdef71b52cd18240f0df7197687023912a3cbe0159cb87e47b020000",
    ],
    [
      "ETag",
      "us2gorgY2aAUzipAODCMBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1604090111888",
    },
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
      "a3",
      "4010fe2b64ef8b267d8196b6b489f16acb792495564a35e6eed22ecb80ab944576f1a2a6fffd06b0bec49c7e62d9799e679e999d7922b73c0dc988043cbe2b207ff8762302d220a0688cb727cee3e2a77b395317d3f9d850b3c79ee9e6e7474788e0254bd26d9640538a22672047ab652bce4591d15c88260a350d5d6f1a7dddd487ba6118966521514212cd787a8bf46ba532396ab7f7c95bb110710234e3b2c5c4f6e5be7ddf6967b9b801a664fb7dce36a691ed2fb21e278251c5457ab45aa2834242be862de5097a78a586c1f7f7da2d4eb7ad18c1f79c01654c14a92a7da1041369c4e322af54c9e889543edf1cc8d29ed9135f9bcc57ae7fb0a1db92bc39d4a8d4d6eb1c6491a886b6c1a2229ec09a879b3a92dd6a3fbcf91946d0c135952037dae54fdbb3b5d7ab8df6bbd0f52e68c7dad89d6aef551c573b383ed44ebdf96aa19d5cbd0ba2ef10a4e269e5daa74102a5e3e7ce3a1f1fb424508529ebe07aa0f7a961e9c3200a062cb2babd20d22108ac60d0a3dd40674313cc30008a3c55aa572c9a8ad4a40674427d18457dd3645d23ea9a5d3a086168f58dfec0ec59412f0a580fc8ae41fee65cc194cb4c485e77975c7a8e6faf7d6fe54ec6be5d951151ece0b4365716f1d6a7c22211f4495dbb32ca05662a9fca717ddb1b4f7ce7c2aea7630631650fcb3b9c8f882612104d73ba0505f99908b16964315f3abe3377c73364544fbed8232419fd7a7a25f80f59d565557dc9d2f71cf7b432b0475cd0a4a820f7f5818c33f44a76bbc6ff65d072dffc5cc540853f88c08da8c9e47c657b57a4bef220821c52f6f50420b80a7cbdd9fb2d4330ee19e6910aff71e0982cb3b01ceac1e3dbca5fcdee748c9eae930a9cab0f311cb97d874b8d5211b690",
      "aae792ea2d2b7b55850af902c220ce8b5b357bf70fd990fbcae7040000",
    ],
    [
      "ETag",
      "BIzPHNWLtVDOA1tLz54NrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90514fc2301485ffcbf5d12dd912a263090f62508884c014351a42cab89b836eb7b41d0a84ffee6df5c1475fda9bd3efb4e7f404dbaa59430aabaadcb5a80f1725da991b3234adb48637458d410800ad28997c3e4ebf8ef266d83d5eeeee766f59f1faa05e66bd1e1326ffc05a407a82a242b93690be9fa01135b26db9d4fe46c6ec41396534791adc0f32166a5a3b61321f8f6ffae3019c833f36b5fd9765710e6043ab0c0bd4d8e4e852284d1bccedc81534a256124343adced18087fd41a9a955421385ac84711485f155d489ba511cc7499230292917b6a286e1f92387034b56c88c3eb920c40c683f72d7c2af7b963bbec4de039c6df16bea1f2c9aa9268e60d0bdde49ae7fb2dc92cb6739b7d52d06900bfecc6165212d843478fe065c933b83aa010000",
    ],
    [
      "ETag",
      "VzPxzlAH9z+qFqZRfXKpWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcf4b7282300000d0bb642d0e1a3ed29dd15254e4376140369980013148909fd04eef5ea7ef06ef07d02c635d477ac1590d3ec04cd7c6325b9e1a19292f5675fd20a38127fda5783c87d0bfe0c68c5af2703c1dc547c90ef647538f1abb75b123a861bfce3b42dced6a031507f3449503b5a865ae96a9e641fc255549709f57e8ba61d5c8a2a2ae1de568698793f80e0fafab37e6bc3d6b5acc27277d78e32cead5b4b3247fb31e9fcffb4edf0e7628dc0e4bdcb6fcf826caa8672684c6c03ef37d846ff17d1f851025461cc2299f5241c73c77ad5aaab88b680116804d4dd9b28e94ef2c540d6301fee7a49f1bf6ee23465bd682df3f9c2a6d0d18010000",
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
      "Fri, 30 Oct 2020 20:37:02 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-101-1604090111888",
    },
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
      "14",
      "fd2b91f75a20a1210124b4229aae6810b610da55d314d9c6494d93388d1dbaaae2bfefda29a855a5f529b6ef39f79cfb9117f4c0cb2d1a23c2b3c786d5cf5f7682a033c414cee0357bfabbdbdded6f83c7f8fbf4d7c02d5c4fee9f26134070cd92b8a872d691a2a92993e3cdba9bd5a2a9702d440712751cdbe9389eedda23db719ce1700844c9f274c1cb07a0df2b55c971af7714ef66426439c315975d2a8ad37b6fdfef55b5d831aa64efbd660f6464ef13d5afb9a05871514e366b70d0485627acc03cd7259ea85b72f13e7797e3a29b0178cf29c3948aa654da17a4a0a24c79d6d4262b1abf20e3f3cd01ad8345308b2d2af2a628931217ecccda628513f55c31eb2a5a2dad7978b58a96d378be0a93f5ec3a584ebbb3d562b30cd7d6ed75100596c22467866b4dac0b730be102fa5b26152f8d7aac9fb5f26b87e61f07a309202d591b4c7cdbc3ced01e9194f8341d9e0f486a334286c41fe07362d391cbdc2d61187846d4b070294a8f0c4623979c27bed7ef272e8113719997780e4907be371c383e418733f45473c52eb9ac84e46d87d06d348f83248e36e16c1a07a6841437b9ba6c8de902de7a54502080fe53d34147b90025ddee791807d17416cf6f8276c20b9661fabc7e8419a738970cd0b886e629562fc5161a86c2e932b804b099d88f6350a2f1ef17a47bae5dbc69f9891ec300b55d65be681d47f3f09bb17344dce0bc31907d7b401558be87dac0f5e10f20614bdb2ce8e72688ee50fb14b194d5aca49f4f13c026f0f9df76dc7c00c3ee838e547087e5a152abd09ab54bc44dbdafec7ebf3fb07d64c0b5fa10f3fbdeb16d3a87cec80a56aad792dacd874a5bb1469e401084f9",
      "87a65d877ff34a632c7b040000",
    ],
    [
      "ETag",
      "gwxjjYvWEqTKAX54m46svw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1604090111888"
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
      "82",
      "40",
      "10",
      "85",
      "df657a8b09b44a2d89175a7f6aa256112f9ac6981506446117779736c6f8ee9da5d6366d93f60666866f96730e1c6197f2083c58a7c9be4479b84a50cf4ce1a32a33ade85608ae102c40cd122207e346e0dfe40aa79af717d7ddddfe89e3acd52242851bcc1978478853cc2205def31138cb91d6429195395f559d05fa5098e13cf0879301f5b9884c3f598c46edcea80727ebb21831cd5615ff8fb5e5c982ad58fb18a3441ea2d15248b1c5500f8d4dc5f222c39a12a50c514105570f1229ca8249216a34a939b653735cbb6edfd98ee3349b4d223311329d0a4ef0624e02410bcd325fbc924d70099055498ee3eafa42e334aa9c98723809dc7a25f02b40dae234c3d5df2009de30fa0e1fd83983ef1ccb45c9f585ea8f1edbbf1d47a17e1ed56d07bd1f84d214d5050986e3de3c688fa7865b9ebd770e1ad5540a4a52a109d1b1ebcdc6ad6bbfe77a2f4cd6f41e4fcb122d0819fd1e0fa9062f6699c2d31be8769f847c020000",
    ],
    [
      "ETag",
      "GM5TR3msePtnFU2DkqYneQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1604090111888",
    },
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
      "0002ff85536d4fdb3010fe2b91f705b4beb8e94bda4a88756dc62295b44b5310daa6d6712fc590c421764008f5bfef9250a042834f717ccff3dc73e7bb27722b920d1992406cef72c81ebfdcc880d40868b6c5dbc5b2d39cc4f38765c7b960027271e5a9af0f27278810054bb1388da0ae649e7150c3e5a2b1cd649eb24cca3a0ad55bd4acb77ab44307b4d56af5fb7d242a88c2a9486e917ead75aa86cde63e79632be53602960ad5e0327eb96fde9bcd349337c0b56a1ee66c621ad5fc24eb692439d3422627cb053ac815642b889988d0c32b75137c3bd46e081637b608be171c18e7324f74e10b25b84c42b1cdb352950c9f48e9f3cd812ceca93df68df16ce9fa476b1617e4f5b1c194b15a65a0f248d78c3516158a085662b3ae22e9adf1c39b9d63041d5c33056a6d5cfeb43ddb78bd5a1b7f724adb609c1a2377621caa38ae71747a6c9c79b3e5dcf87e751044df1b505a24a56b9f0511148e9f3bebbc7fd082c034a6ac822b8bf658ab4f074118583cecb7bb41482108fa81d565ed80f241073a9b0018f274a15eb2582213935b21ed6e2c66f62db337d8f090f2700001eb716a511602ed9a1c2c93ec6ae421131a2642a55289aabbe4d2737c7be57b4b773cf2edb28c9061072795b9a288b73e351689a00feada1551213153f1548eebdbde68ec3b1776351d53d832feb8b8c3f90859a400d12c633168c8cee5069b46e6b385e33b3377344546f9e4f33d4291e1efa75782ff98965dd6e5972c7ccf71cf4a037bc4058bf212725f1d084bd12bd9ed6aff9741cbbdcec72a2d54f88b08dc888a4c7e2d6def8a54571e849041c23f9f00049781cf377bbf6508c63dc33c4ae33f0e1c5745169e413578222efd556cd36cf7066d528233fd2ed6efd27d870b8d42116248f47349d59615bd2a43b97a016110e7c52d9bbdfb0700adaa0de7040000",
    ],
    [
      "ETag",
      "SU4/DmPwU4IVaieuiYRs+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1604090111888"
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
      "c3",
      "30",
      "0c",
      "85",
      "ff8bb9b6528b2628957660a3da2655d328f480109ad2d42bddd23a24a9a66aea7fc7191c38724af2fcf9f9391738b57d0d29546df335a0196f1a74cffe52a01d94b37c68ea2d4200e844c364bfae13f356e64feb7aa5abd9b82cb39d3acfe74c58f9899d80f4028716556d217dbf402f3ae4b6fdde5c1d1973a3f6ca66fb9aadb282858e6a2f6ccb3c7f5ce4194cc19f367dfa57cbc714c091aa020f68b097e853684347946ee317b4a2d30a434b839168e10a5f0b8da1410b4314b212c6d16d18df45b3e8218ae3384912261549e15aea192e5f381c3872421574e6052182dff76274687786d8dda2379e25f73f6396e4473b8ee4cc800148c1ffb46e1da407a12c4edfef71ff6e85010000",
    ],
    [
      "ETag",
      "nHd8rYULDHdGpb4yCUEPlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7f",
      "c9",
      "591c2c8ba6375244910a3856965e981042495196b0453afdf732fd8077783f001342bb2ee9eb9256e0153cf10b5c93b5d3c8489d72e94e30f3e3e4404acd2a3f746d96aaa1337d1febf31851112413e2db568e3dfb38647bf36489c81dd8eef8086d61c43eeb399e6f6a84f0a3b2c83c5e062e6e5449319e8a92661c6d50e87e17d2d8aa30d8c25171452e19ce817b9ee49ed5aa659969287bbbe9c366a78492eba7e1739a83c4bcf45fa7f2c8ae1339eb9e565711ec9f4ddd9d22279fcdbc1288339abfa5eff7cf60a317194d6db9b88015a0a2619c76095bb28a06e10afccf9345d3a58f28e69483df3fcf42b94b18010000",
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
      "Fri, 30 Oct 2020 20:37:04 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-103-1604090111888",
    },
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
      "3014fd2bc8fbda0448c8538ad628a56ba48474405a6dd3848cb950b704136cda4555fefb2ea6e9da4d5a3f61fb9e73cfb90f9ec9032f12322531cff63554874ff72226670414cdf0959a934bba0fea85257ec5def5fe961fecefd96c8608deb024dd953974a4a82b0672ba0dba5925ea925642743051c7b6fa1d7b6839d6c4b26d7b3c1e2351429eae78f180f43ba54a3935cd9378371322cb81965c7699d8bdbe9b8f3db3acc43d3025cdf79a26ca48f303d5cfb960547151ccb6013aa8255411ec28cfd1c31f6a129fbfcfdde574d7cd10fcc81950c6445da8c617a660a2487956573a2b993e13edf3cd8104eeca5d84061379bd2ba282eee0cc48a8a2913a94605cfa9bb5b1f42e37fe7a1e2e375e142caedcf5bcbbd8acb66b2f306eaf5cdf35148d73d05c63669ceb9b8717d44f402a5e68f5b0796e945f3ab4fc77300d01a525b4c168640da93db626711a8f583aee0fe2d482381ec7a301edc7169b38e0243150e46951cda2852806233b4e1348a3e170e244ce3071a28993249195b031757a14a86591e31979aab8820b2e4b2179db2172eb2f43370afdadb79887ae2e21a575ae2e5a634d016f3d2a2c1041ffa9e9d844b940a5a6dd4b2f74fdf9225cdeb8ed845790517608f638e394e612104d2b6c9e826a2d126c18f1e66bf702c17a62d7a7a024d31fcfa4e979e3e24dcb5fe9210eb0b1abf49704a1bff4be683b27c40dcd6b0d796c0fa444cb77581bba3efe44246e699b857cddbafe37d23ef990420505fb789a08d6818fffb6d3e62318771f75a4c23b2e0f938d0aaba05d22aeeb7d61f77acea4df271a5ca9bf63036b3838b5adc9d164841d14eaa5a476f3b1d256ac96af200ce2fc3dddaee36ffa7f7d177b040000",
    ],
    [
      "ETag",
      "a/9FaqSuC0oxbNPqWiy1Zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1604090111888"
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
      "02ff8d92dd4e83401085df65bc942610b122492fa8a2c560ed0f3526a669b630b454607177b1a94ddfdd59acd5a889dec0ccf0cd72ce812d3c6565022eccb3c5738d6273b44035d4c508659d2b49b78a9712c100546c41e49a55e370b9f4eddecdab5f3a0fd6e07e78ec753a44c878890503770b69867922c17ddc42c90aa4b598e77551ce9ace00b5a9f4701c8d82fe35f5054f74df9f84a1d70d7dd81987c58429366bf87fac4d7706acf87c84290a2c63d45a2ac15718ab40db94aca8726c495e8b18253470f36021785d31c1798b262dcb3c69596dd336cf4dcbb21cc72132e73153192f099e8c492028ae583ee26bb2096d02445392e3b4b9bed0384b1a27ba0cfa51db6e047e05485b9ae538fb1b24c14b46dfe103db67f09d6305af4b75a0aec23befb7e328d4cfa32ebdc8ff414845511d9028b8f5c791773bd0dc74efbdbb51280782539212758896693ba7676df33dd70baeb3a6f7b84ad46840cce8f7e8650adc94e512776f08df3c537c020000",
    ],
    [
      "ETag",
      "wapSLhhE4HJzEn8X1PVQ+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1604090111888",
    },
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
      "da",
      "30",
      "10",
      "fe",
      "2b",
      "91",
      "f7",
      "a595803809908054750cb20d894207a155b54de03817ea36c469ecb4aa2afefb2e4969cba6b59f087e5eeeb9f3f989dc8a34227d128acd5d01f9e3a71b19920601cd3678eadac9ad3497ca7322a19666d675bbbdab879313648852a5d8364ba0a964917350fde5a2b5c96591b15cca261a352dda6e5a5ddaa63d6a5996e779285490c41391dea2fc5aeb4cf54d735fbcb591729300cb846a71b97d3937ef6d33cbe50d70adccc39a269651e607554f13c99916323d592e3041a1205fc196890433bc4aa3f0f3a1774bb06d6b83e47bc181712e8b5497b9d082cb34169b22af5c49ff895439df7c90853ff18781319c2da7c1d19a6d4bf1fad860ca58ad725045a21bc61a9b8a45022b11ad6b24bb35bece67678860826ba640ad8dcbeffedc378c75c434ac8d5f05a50e18a7c6603a320e1dc653e3e8f4d8f8369f2dcf8d2f570720668e406991568903162650a67d9eeaf8dfcb2c054c63821a5cb9b4cb2c8ff6c2387479ec399d30a610865ee876981352de6b433b0a81a14e97ee958aa532758085bd8e6347b1153a56c7a56dce3b56d47529a731772dea02c79b02b26b90875c681809954925eac992cbf938f057c17c391d0e02bf6a236638bd511dae6ce26d4e8d4d22e99dbe76252a24562aaf693c0dfcf960188c2ffc7a3326b061fc717187bb11b34401b259ceb6a0213f93110e8d9ccf16e3603c9b0e26a8a8aefb7ccf50a4fff3e955103c66d59475f54b466503bb3786172c292ac27dfd416c6ad326b59b5687ec768dff3b61ea6efb7d2b0b1d7e23",
      "031f442d263f96fefc8ad44773882187947fbc0448ae808f1ff6fe9121199f19d6511affe3ce715556e139d4bb27b655be5a6ddb1dcf714945cef5df58977aedfd904b8fd211b690eae796ea4756ceaa820af542421057663a9e7e43f40fa7ad80f9e6040000",
    ],
    [
      "ETag",
      "72lko/Us83disU/p6769Yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1604090111888"
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
      "4bc3301485ffcbf5b5c57616a9853d6ca5e8600cad0e613246d6ded66e6d6f4cd26919fbefde441f7cf425b99c7c2739276738367d0909ec9bfa6340355ed5689eec90a31e5aa37993d46b040fd0889ac92adddcc8457a5d8b4c4c74f31a9dbe56c36c3a654217efd80948ce5035d8961a92b733f4a243b6ed76caddc89819a55516ab97ec3ecb59e8a8b4c26abd5ccee6cb0c2ede1f9b3cfecbb2bd7870a07d8e152aec0bb429a4a2031666610b6ad1c9167d4d832a508383dd41ad68904211f9acf86110f9e16d100577411886711c33d952214c433dc3eb670e07868c6873fae4821032a0dcc85d2bb79e589eb812270770b6edaf693e1ad48f8a388246fb7a14073f5952b2f90ce7366a400f0ac19ff9d018482ad16abc7c032e84ca61aa010000",
    ],
    [
      "ETag",
      "fCZ3pIC/gaEa2siW4vxNuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d07fc9591c5116d31bb243ad76d8062e9910a32c06d2901669a7ff5ea7ef0fde0fc084d0694272ece9005ec082b7704dd631df1cb4f952d87d1560f14a98bcb8f3cd5f1809df213666684d8fb4b492a23f378d87ebfd62e5fe50653c4bf622152442f1964b63b7bfeb9a3921ee403e0e47b7cba4545139d991621c581b8d8a859246cd3f956b7befa20d19935388f3a0cbd5b7afc0ac4ce640bda98b20fb2629f3d4b8f1822a72fc26be9ddc703ebbaa1873e6b7ca55bf9bc7c0a8cdb946a96e936d4135253be5e5471c0eacd3884cda6a062b401fbc157442ed33bbd3215c81ff39920ba7cffe81624105f8fd0351640b6f18010000",
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
      "Fri, 30 Oct 2020 20:37:07 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-105-1604090111888",
    },
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
      "85535d6f9b3014fd2bc87b6c1308491a12295aa394aeac09590969354d13b2e142dd124cb1c91455f9efbb98a66b55697dc2f63de79e733f78268fbc48c884309e3dd550edbf3c08464e09289ae1eb8e7939b3fdfde0f1fae9fb8979b29a997379339d2282372c49b7650e1d29ea2a0639d9acbb5925ea925642743051a7670d3bbd336b608dad5eafe7380e1225e4e982178f48bf57aa9413d33c8a773321b21c68c9653716dbd77773679b65251e2056d27caf69a28c343f51fd9a8b982a2e8ae9668d0e6a0955045bca73f4f08f9ab0f3f7b9bb9c6ebb1982773c061ac7a22e54e30b53c4a2487956573a2b993c13edf3cd81acdd853b0f8d58e4f5b6880aba855323a18a466a5f827119ac9686e75fae82e52cf4567eb49e5fb9cb5977be5a6c96fedab8bb7203d75094e5a0b9c6d438d7371f2fa89f8054bcd0ea61f3dc28bf74c8fb38988680d212da6034b2ce68cfb1c62c65a33875fa43965ac098c34643da67563c1ec020614091a745358b16a2704667763f8161341eda341a24c37e449d511a594e32a66c004387517238257f2aaee082cb5248de7688dc055ee84661b0f1e7b3d0d525a4b4ced5456bac29e0ad47850522e83f351d9a2817a8d4b4dbf3433798cd43efd66d27bc808cc6fbf513ce38a5b90444d30a9ba7a05a8a041b46fcd9d2bd40b09ed88f635092c9af67d2f4bc71f1a6e5aff41007d8d855fa4bd661e0f9dfb49d23e296e6b586ecda0329d1f23dd686ae0fbf11895bda6621371b37f849daa70052a8a0883f9f268275e0f3bfedb8f908c6dd471da9f08ecb13cb4625aea05d22aeeb7d61dbf6c8b6fb44832bf521d6b707c7b635399a8cb08542bd94d46e3e56da8ad5f21584419cbfafdb75f80b7f10d9ec7b040000",
    ],
    [
      "ETag",
      "vbIlb2Ny4kKqJ+/+OA/CsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1604090111888"
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
      "82401085ffcbf48a09248896c40356ab266815f1601b635618140b2cdd5dda1ae37fef2cb5b6699bb4179819be59de7b7084c7b488c1854dba7daa501caeb6a866ba0850569992742b7921110c40c5b6440ebde5abe5f706bd6280f6f8d56fdd1f36cb59a743848c769833708f90a498c512dc8723142c475a8b7856e5c5baee0c5087520fe761309a0ca8cf79acfbc9c2f7bdaedf879371598c9962eb9affc7daea64c09e6f024c506011a1d6520abec7488db44dc9f232c386e4958850420dd70fb6825725139c3768d2b0cc66c3724cdbbc362dcb6ab7db44663c622ae505c18b390904c515cb02fe4236c12140d425394eeaeb338dd3b876a2cbd12474ec5ae05780b4256986ebbf4112bc63f41d3eb07306df3996f3aa5017ead6bff37e3b8e42fd3caae785fd1f845414d5050947e3fe3cf4c653cdadcedebb0785722a3825295187689976bbd972ccf75c6fb8ce9adee32a51a10111a3df63982a701396493cbd014d0db95c7c020000",
    ],
    [
      "ETag",
      "HAYx1LDGDnGe4MxL7ZybYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1604090111888",
    },
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
      "000002ff85536d6fa24010fe2b64ef4b9ba82c0a8a264dcf53ae47a2e821b6e9bd449775a1db024bd9a597a6f1bfdf00b5adb95cfb09b2cfcb3c333bfb84ee78b6432314f2f8be64c5e3a75b11a216628ac4709adcce0d9da90bebd217fed4964174635dc76767c0e0954a92344f585b8ab2a04c8ed6ab4e5c88322785106d306a1bb8df36fad8c4436c18866ddb20942c89663cbb03f98d52b91ce9faa1782716224e18c9b9ec5091be9ceb0f5d3d2fc42da34aeac735752823f50faa9e278212c54576b65e418252b262c352c213c8f02add859f8fbd3b9ca49d18c80f9c3242a9283355e5020b2ab288c76551bba2d113aa73bef9412b67e64c026db2587bc1c996a495787baa11a96d36059365a25ada169a8a78c2367cb76d90fc4efbea2fe68040821b2299dc6a57df1cdfd1b4ad54906eabfd2a31ee31ed5c1b7b53edd8c2f5b493f353edc25fac97da97eb231042ef98543cab2307244c5815f779aceebfb759098882080db819e03e316c3c0ca3704023bb67851166616887038bf4424c872633772123a053957bad2299c8886d516a933eb6cd21c3e6ae6f0d4c6c0fa25ed7a243233269446cc3b60668df427f0aaed894cb5c48de8c165df96ee06c027fed4dc68153b7111118dfb4095735f136a7822681f44e5ffb0ae5022a55f7e47a81e38f27817be934ab316331a18fab7b588e882492019b1424658a1573b183a1a1e562e506eec21bcf4051dff7f2c09068f4f3e955103ce6f59455fd45813b7756c178beac331c489724296bd643f383bab88bdbb8db36acc0e88e8cdec8303b18e31f68bf6ffddf1c1ae99bef1b1be0f01b18f0481a31fabe76fc6bd41cf92c6205cbe8c77b01e41af8f8b11f1e1e90e1e9411d5862c5610da9acaad08235ebc8d33a5fa3ee766dc31aa29a5ca87fb01e360f73af3c2a4796b24c3db7d43cbc6a563554ca171280b0459eeb5d00fa17cf1fc611fa040000",
    ],
    [
      "ETag",
      "ljM1/etG5VRoRD8sTfh5Yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1604090111888"
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
      "90516f82301485ffcbdd2b24308d41121f743193608c63f365c698522e0c052e6b8b8b31fef7dd767bd8e35eda9bd3efb4e7f406e7ba2b2086bcae3e0754d7870acd8b1d32d44363346f3d751ac10334a26292e4d48c5632cdd2bc7857c3361f8dd3643e9b31a1e507b602e21b9435368586787f834eb4c8b6e351b91b1933d7de2ac9e66df9bccc5868a9b0c266b75ecf17eb25dcbd3fb6fefc2fcbe1eec189f20c4b54d849b4297a45279426b105b568fb067d4d8392a8c1c1eea05234f44211f9acf86130f1c349300ea6411886511431d99014a6a68ee1dd2b8703434634197d71410819506ee4aea55b2f2c3fba12170770b6c3af697135a8b78a388246fbfa380a7eb23c91cd6738b751037a20057fe6aa361097a2d178ff06aaccd661aa010000",
    ],
    [
      "ETag",
      "oc9t3HcKRKbdZruPb34KIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d0bb64ad0e5a01d31dc84f0519999a001b26c458a04a628814e8f4ee75fa6ef07e00a194755da1f8176bc13b18c90a2ee8e220347bfd4d83e4ecf5fb26f3ea9dae32bbbabad6538dca5c4dcddd563dea761eaefca5615869e4788fa0c2ea3964272eee096a8df1ec3c96428f12d33d5e06cefbde8c9e972085f355a83c4a4d24b06bc5b7923b44ac731857d3d4b2e88ae3981c11e98d1cb99b8672114c4bad7486635eaa9d16bb8eb4ab40421ceee169c2b7cff084fcbbdbaa31bcb55b9e1c3e5036c7b94c8da6f6e4c6d7c836a7cd21f52d30036c10b5645d51bfb26f3a8433f03f2fd428d8ab6f33229904bf7fa81cc21218010000",
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
      "Fri, 30 Oct 2020 20:37:09 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-107-1604090111888",
    },
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
      "c8fbda04c893448ad628a16ba4846c84b4daa609d9e642dd124cb1695555f9efbb98a66b5569fd84ed7bce3de73e782677a248c8943091ddd7503d7db9958c9c11d034c357801b6734b77f8555a1c2eb45f8b8de2ee78fb3192244c352f450e6d051b2ae38a8e97ed7cd2a5997b492b283893aae33eeb82367e04c1cd7753dcf43a2823c5d8be20ee9375a976a6adb27f16e266596032d85ea7279787db71f7a7659c95be05ad9ef356d9451f627aa5f73c9a916b298ed77e8a05650c570a022470fffa8093b7f9fbb2be8a19b21f84170a09ccbbad08d2f4cc165918aacae4c56327d26c6e79b03d9f96b7f11595ce6f5a1880b7a80332ba19ac6faa904eb22dc6eac5570b10d37f368b50de2dde2d2dfccbb8bed7abf0976d6f5a51ffa96a62c07c3b566d6b9b9057841fd04941685518f9ae746f9a543ab8f83690828ada00dc66367445dcf99b0948d79eaf5872c7580318f8d87b4cf1c3e19c02061409167440d8b16b2f01c970d87c351dc73fa100ffa691233870d62c74d29f79c3124d023c733f258090d4ba14aa944db21721dae223f8ec27db09847be2921a575ae97adb1a680b71e351688a0ffd4746ca242a252d3ee5510f9e17c11adaefc76c26bc8287fdadde38c539a2b4034adb0791aaa8d4cb06124986ffc2582cdc4be9f828a4c7f3f93a6e78d8b372d7fa54738c0c6ae365fb28bc255f0cdd83921ae685e1bc8437b20255abec1dad0f5f10f22714bdb2ce4c7de0f7f92f62984142a28f8e7d344b0097cfeb79d361fc1b8fba8a334de7179b86a547805ed120953ef0bbbd79bb8931e31e04a7f88f547dea9",
      "6d4d8e26231ca0d02f25b59b8f95b662b57a056110e71f98761dff0287575d727b040000",
    ],
    [
      "ETag",
      "eeh06A/ZRrnsRWCRwLODAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1604090111888"
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
      "0002ff8d92d14ec2401045ff657c2d499b60c1263e14414501118a460d216b3bc5e2b65377b71a42f87767aba251137d6967a667b6f7de76038f59914000f7d9f2a942b5de5ba2b9b4c50475258de65b49854670008d5832d91591a1735c89b39ebcf287addbeb9b83dbf0f090091d3f602e20d8409aa14c3404771b28448ebc1693acf26251770e98756987d368d21f9d709f5362fbd16c30083b831e6c9ddd62228c58d4fc3fd6e65b0756743fc1141516315a2da5a215c6a66f6d6a9197121b9a2a15a3861aae1f2c1555a550440d9e343cb7d5f07cb7e91eb89ee7b5db6d2625c5c26454303c9bb2403064849cd00bdb049f015597ec38adafcf3cce92da892dfba3c86fd602bf02ac2dcd242efe0659f083e0eff081bd67f09d13395585d951c7838bf0b7e338d4cfa3ba61d4fb4168c351ed90a83fec4da37038b6dcfcdd7b676d508f1571921a6d889edb6cefb77cf72dd723b259f37b02a32a742016fc7b9c66068254488ddb5701e02ee67c020000",
    ],
    [
      "ETag",
      "DaTtoKejaJElV6M7ZWY9ZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536d6fa24010fe2b64ef4b9b5805410593a66795f6b8586c1135bd97e8b22c74afc05276f1d26bfadf6f80dad634777e12f779996766679fd03dcb423444018b1f4a5a3c7efac503d44254e2184e97d9edc8b8fcbafae64c56e70fcb4921ff9c6f6f4e4f81c12a95c0699ed013c1cb8250315cccdb71c1cb1c179c9f80d189a69a275a5f35544bd534cd344d100a9a445396dd83fc4eca5c0c3b9d5df176cc799c509c33d1263c7d3def6cbb9dbce0bf2891a2b35fb3036544e740d5b384132c19cf4e177348500a5aac698a590219dea461f079dfbbcd70da8e81bc658462427899c92a1758109e452c2e8bda150d9f509df3dd079adb537bec2be3d9c2f58f3638adc49b63050b65bd2ea82813d95236d054c412ba66e1a641f27be5c29b5d010209eeb0a062a3acbed89ead283b0fe547a9aa3a55ce94913b51f63d1c57393a3b562ebdd9e25a39bfdd032175488564599dd9c74142abbc2f73753e5e6725c0123234e07aa0f6b166aa5610050312997a2f88541a046630e8613d50896550230c28069dacdc6b15ce786659fdbe8ad55ea847dd500db015183dac1944d78d30b40cdc1de81651e9003db7d0ef82493a6122e78235b3452bcff1edb5ef2ddcf1c8b7eb36220cf39b34e1aa26dee794d02490fed3d77385320e95aa8b725cdff64663df59dacd6e4c698cc9e3fc01b623c289a0c0c6054ea9a4c5150f6168e87a36777c67e68ea6a0a82ffc7ac71068f8fde94de03fe6f59465fd8b2ea6b391df37ea043bca122765cdd9361f486bf780f1dcfab70d443e68020e3f8101efa111a39b85eddda2e6c8a3112d68460e6f00906be0f0bbdebd3120c32b833a42c27f583822aa2aa4a0cde2b1b4ced7a8bbbaaa41b735b9901f30ddeced265c79548e34a5997c69a97963d5ac6aa814af2400615f5cc7bd04f42f3d0a7a20e5040000",
    ],
    [
      "ETag",
      "VnYA4GJWZIDWBqVDrtzBvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1604090111888"
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
      "ff8d90514fc2301485ffcbf5d12dd900cd5cc283e82224883a9c2f869052eec660db1d6d872164ffdddbea838fbeb437a7df69cfe9050e65b38518366571ec509daf0a346f7648517795d1bcb5d468040fd08882c98fe3f4d924321b76d78f37341aedf4cb3e2bc66326b4dc612d20be405e62b5d5107f5ea01135b26dbd56ee46c6ccb9b5ca6cf19e3c25290b356dadb0c8e6f3fbc93c81defb636b0fffb2ac7a0ff6b4493147858d449ba255b4476966b6a016755ba1afa953123538d81d148aba5628229f153f0c223fbc0d46c15d10866114454c56248529a961385b723830644495d21717849001e546ee9abbf5c4f2c095383980b3ad7e4d93b341fdaa882368b4af0f07c14f9607b2f90ce736aa430fa4e0cf9c9606e25c541afb6f9bcde869aa010000",
    ],
    [
      "ETag",
      "VqHMtEcU3u+D5o44hsOjUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b7282300000d0bb642d8e1a29a5bb801531b64ab492b8c94088807c0585a0d3bbd7e9bbc17b824008d9b6fc5665b2041f600866e6588c713db1e67d448a8dc355acaece25ea5accf1e34eb5ec2bb9eba6d81b6609337f3ba5462e7594527ab8f4fe35f7d795a5327f9e4c085ebe138f5d8f9e2659f508ec3c3242b288aada26153474765eb25d5c94d9f674883044f576dfa093bee91e6d1139f4070fd8778edfc15b1053816a35856896e335c5aab7ce2c347078a6e1a7bbb0491c7a6ea778ec6ab65a54deca5e322eb34438ece8cfd16e651aa21710811190aa4e1bd9f2f49585ba698ec0ff9cdf865abefa960c1ad980df3fbe06e5db18010000",
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
      "Fri, 30 Oct 2020 20:37:11 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-109-1604090111888",
    },
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
      "6f9b3014fd2bc87b6d0234494322456b96d01629211b9056d33421632ed42dc1149b4c5195ffbe8b69ba5695d6276cdf73ee39f78367f2c8cb944c49c2f3a706eac39707919033028ae6f89ad5b6790d1b5a9f5f87b9673787e5e2e9db7c3643046f5992eeaa027a5234350339dd86fdbc164d456b217a98a8675b939e7d610dad8965dbb6e338489450642b5e3e22fd5ea94a4e4df324decf85c80ba015977d2676afefe6fedcac6af1004c49f3bda68932d2fc44f56b2118555c94b36d880e1a09750c3bca0bf4f08f9a2697ef73f739ddf57304ef3903ca98684ad5fac2144c9419cf9b5a6725d367a27dbe3990d05db98bc860a26876655cd21d9c1929553456870a8cab60b3363cff6a13ace791b7f1e37071e3aee7fdc566b55dfba17177e306aea1685280e61a33e352df7cbca07e0a52f152ab47ed73abfcd221efe3605a024a4be882f1d8baa0b6634d922c19b3cc198c92cc82247192f1880e128b4d86304c13a0c8d3a29a454b5102b5ecb19d4e626762d178381e0ce309f639766cb092719a656c9491e319f95373054b2e2b2179d721721778911b47c1d65fcc23579790d1a650cbce585bc05b8f0a0b44d07f6a3ab6512e50a96db7e7476e305f44deaddb4d7805396587f009679cd14202a2698dcd5350af458a0d23fe7ced2e11ac27f6fd149464faeb99b43d6f5dbc69f92b3dc201b67695fe92300a3cff5adb39216e69d168c8be3b900a2ddf636de8faf81b91b8a55d16f263eb063f49f71440063594ecf3692258073effdb4e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef7857d3eb007039b6870ad3ec446d6e8d4b636479b117650aa9792bacdc74a3bb146be823088f3f775bb8e7f01b8081cd37b040000",
    ],
    [
      "ETag",
      "fr1/GeOar2GSgI1uyDCqBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1604090111888"
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
      "df65bc2d499b203f4db8004520014428578690a59d9685ed6edddd4a08e1dd9dad88464df4a69d997eb33de7b427d8739940081b9ebd94a88f3719da2757ccd194c21aba154a1a040fd0b28cc8e65e7329f609cae676b2181ef2800d78d6e91061e22de60cc213a41c4562207c3e816439d25aac4499cb75d579608f851b2ea2f9683aa03e5789eba7cbf1b8db1bf7e1ec5d171366d9bae2ffb1b63a7bb0539b39a6a851c6e8b4145aed30b62367d3b0bc105833aad4311aa8e0ea41a6555930ad548d26b5c06fd782865ff7db7e1004ad568b48a16266b992042f172410acb24cccd5816c4283005d95e438adaeaf34e649e5c495a369d4a85702bf02a42de502d77f832478cbe83b7c60970cbe732c57a5b457ea61fcd8fded380af5f3a8fb6ed4ff41184b515d916834e92fa2ee64e6b8d5c57bef68d1ccb4a2240dba1003bfdeba6d36fcf75cef94cb9ade135a5da20731a3df63c82d84291306cf6fe74f2d677c020000",
    ],
    [
      "ETag",
      "7krinlkden7hMSHwm1aGig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1604090111888",
    },
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
      "4f",
      "a3",
      "40",
      "14fd2b64f64593b67c9452dac4b8ddcaba6c2a554a356677d30e30e0586090196a8ce97fdf3b60d5c6647dd8a7d239e7dc73ee9d3bcf68438b188d5148d3879a544f5fee59883a88089cc2a9695f69d79b59f573ebab257fb469f0509a8f2727c0a052c5715e66a4cb595d45848f978b5e5ab1bac415635d28d4d575adab5b9aa98d345dd76ddb0621275932a3c506e47742947cacaa7bf35eca589a115c52de8b58fe7aae6e0db5acd83d8904570f3d55b0e1ea27aea7198bb0a0ac38592e2041cd49b52239a619647893c6e1d7c3da3d8af35e0ae42d8d088e22561742e68212112b129ad65553158d9f5193f3dd075a3833671a28d3f9d20b8ed63897e2f5b182b9b25a5584d799e8286b682aa11959d178dd22e546f9eecf2f008104779813be566e7e38bea3286b49fa5d6b5a3f524e958977a61cea5d4f393a3d56cefdf9f252f9767b0042e29870418b266f80c38cc8ac2f33753f5ea5146001fe2db81a6a16d66d6d1426e1304aecfe204c34128676381ce07ea845239398714830e884acdea870c18a384e2c2dd1630d1bf670140efa96391c19c4b0a57c101bb196f4f5511ca35d073d56549033ca4bc6693b5774e3bb81b30afca5379d044ed346826176676d38d9c4fb9c029a04d23ffada499432709297e47a81e34fa6817bedb47b3123298e9e160fb01909ce380136ae704e04a92e580c434397f3851bb8736f32034573d9977b0647e35fcf6f82e0a96ca62c9a5fe965998dff9e708db3ba616cdb0fa40fd06ed7f9bf1250e10f30e01db46274b574fc5bd41ef924211529a2cf6f1fc80df0f97bdebf2d20c3eb021f2ee03f2c5bc4a54b549176e968dee46bd546df3046166ac895f88099b6b59faeac",
      "212b929c14e2a5a5f66dc9593550cd5f4900c2ae78ae770ee85fedd41a31dd040000",
    ],
    [
      "ETag",
      "48Q0VkLrJvR/psw8iTqp4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1604090111888"
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
      "516bc2301485ffcbdda32d344ca42bf8a0c3394164abba972112e36d576d7bb3247514f1bfef26dbc31ef7925c4ebe939c932b9cabf608191caaf2b343d3df95e85efd90a3ed6a6779d3d45a8408d0c992c9cbe2c94d07ba1cf6a3b5da8853337a9b0f26e33113567d602321bb4251617db490bd5fa1950db26dbf37e146c65cafbdb2586d66f359ce4243472facb6cbe564ba9cc12dfa63d3e77f5976b7084e74c8b14083ad429f421b3aa1720b5fd0ca46d7185bea8c420b010e07a5a14e4b4314b3120b91c462940c9387440891a629933529e92a6a19deae391c3872b2cee98b0b8260c08491bb1661bdb07c1f4a5c02c0d976bfa669efd0be18e20816fdebc334f9c9f2483e9fe3dcce74188192fc99cf9583ac90b5c5db3788ee83d8aa010000",
    ],
    [
      "ETag",
      "vIFtB+pg4y6ScT1jm6VG+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb64ad0eb67c4c97a2200a140c14e9264321b1d0f04b0001a7772fd313bc794f90a429110277f50fa9c01b989217b849379746dacb0f7a8b6b46b937f0b63274e5fa21639d67b35f7ac2f5097f40b5d43e87821936b3462abe29fc3a1869bd2b446f66bd8edaa4d332bf65d86a501f444c977db75a3f9c3e8c0af570f472c4cdb57796e6fa2494619b4ed682293d4da0645c143b2ae2895c7dedded46a9d69e13d6a338766a1ec9d8f6c3c8573240525539ca0bcad43c12e7168621ced688cec1c06c9fbb66949de21f786282d5584ee6005c8d8e49c089c2fd95705c215f89fe36e6ac8d2df9384130e7eff00ed23719018010000",
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
      "Fri, 30 Oct 2020 20:37:13 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-111-1604090111888",
    },
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
      "3014fd2bc87b5c134842128814ad5142bb48095981b45aa709d9c650b780293699aa2aff7d17d374ad2aad4fd8bee7dc73ee07cfe88197099a21c2b3c786d54f5fee05416788299cc1eb637eb094bccdf16495dc7eb5aaabe2522db2f91c10bc65495c5439eb49d1d494c9d93eec67b5682a5c0bd18344bdc160d01b4c2cdb722d383a8e0344c9f274c3cb07a0df2955c999699ec4fb991059ce70c5659f8ae2f5dd3c0ccdaa16f78c2a69bed73441469a9fa87ecb05c58a8b72be0fc14123591db302f31c3cfca326e4fc7dee3ec7453f03f081538629154da95a5f90828a32e55953ebac68f68cb4cf3707147a1b6f191954e44d51c6252ed89991608563f55431e322d86d8db57fb10bb68b68bdf3e370f9dddb2efacbdd66bff543e3e6bb177886c224679a6bcc8d737df3e102fa09938a975a3d6a9f5be5970ead3f0ea62580b4645d309e5a133c702c97a4644a53673426a9c50871c8748c47c4a2aecdec84300c3c2daa59b814e5d87513773a4ee3b13bb4633b25568c93d48a13625b76327448e226e87886fed45cb115979590bceb10ba09d6911747c1de5f2e224f9790e22657abce585bc05b8f0a0a04d07f6a3ab6512e40a96df7da8fbc60b18cd6d75e37e10dcb307d0a1f61c629ce250334aea1798ad55b9140c390bfd87a2b00eb89fd3805259afd7a466dcf5b176f5afe4a8f6080ad5da5bf288c82b57fa9ed9c10d7386f34e4d01d500596efa036707dfc0d48d8d22e0bbada7bc14fd43d052c65352be9e7d304b00e7cfeb79d361fc0b0fba02315dc6179a86c5568cdba25e2bade17f67034b2dd01d2e05a7d884d2cebd4b636479b9115ac542f25759b0f9576628d7c054110e6efeb761dff024df0db627b040000",
    ],
    [
      "ETag",
      "qlv0tsZla6DdZ+0pQmGtAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1604090111888"
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
      "0002ff8d92614f82501486ffcbe963b8413324363f6069d1d44c716d35e7ae704014b878efc5e69cffbd73c9ac555b7d81730ecfb9bcef0b7b58a745042e2cd26453a1d89d25a81e75314659654ad2ade485443000154b881c31d9739e9fd28bd672c3eebbeb85dafae75ebb4d840c97983370f710a7984512dc973d142c475a0b7956e5c5bcee0c50bb520f27c1d81fde529ff348f7c369bfef75fa5d3818a7c5882936aff97faccd0e06acf8628c310a2c42d45a4ac157182a5fdb942c2f336c485e891025d470fd2011bc2a99e0bc41938665590dcb369be69549a5e33844663c642ae505c1d3090904c515cbc6fc956c824d80a84b721cd7d72d8dd3a876a24b7f18d8cd5ae05780b4c56986f3bf4112bc64f41d3eb06306df3996f3aa5027aad77ff07e3b8e42fd3ceac60bba3f08a928aa1312f883ee24f00623cdcd8ede3b3b857224382529518768994de7b2659befb95e739d35bdc755a242034246bfc75daac08d5926f1f006ec5272a67c020000",
    ],
    [
      "ETag",
      "PasF8ZWi27hqaJEkbtvI+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85537f6f9b3010fd2ac8fba7d5f203129240a4aacb52b62125a423a455b54d893186ba054cb169d756f9ee3b4cd336aad64a4880efbd77efce778fe89ae5111aa3902537152def3f5df110b510953881531ecce6ec73122dffaeccf06ef0307fd093e2eee80810ac66099c15296d0b5e95848af16ad9494a5e15b8e4bc0d426dc3e8b58da16eeab66e188665594014348d672cbf06faa594851877bbbbe49d84f324a5b860a24378f67cdebded758b925f512245773f6717d288ee07598f534eb0643c3f5a2dc1412568b9a61966297878a146e1977ded0ec3592701f02d231413c2ab5cd6be4082f03c6649552a55347e44cae7ab0fb47466ce34d0a68b95171c6c70569337871a16da7a5d5251a5b2a56da0a898a574cda24d1329aeb56ffe620e1170708905151bedfc87e33bdacbd146fb5de97a9f68c7dac43bd1f6555c4f3b383ed4befb8bd5a9f6f5622f08be232a24cb95eb008729ad1d3f75d67d7ba135014b48d904d7237d880d4bb7c3381c91d8ea0fc258a7616885a301ee873ab14d6a4621c5c093b5ba62e19ce75668da3daa0f74b36f1bc6c0880c7840c4ee015327a63524bd9115c668db42772593f48489820bd674179dfb6ee0ac037fe54d2781a3ca883174f0a4315717f1daa7842201f44e5ddb3aca3864aaafcaf502c79f4c03f7cc69a66346134cee9737301f314e0505342e7146252de73c82a6a1d3c5d20ddc85379901435df9e90e21d0f8d7e30b21b82f5497a57aa365e0bbde7765608738c369a520b7cd079a14e0156db7adffcb80e5a1f9be8a010a7f00011bd190d1cf95e35fa0e6c8a7312d694e3e9e0000abc0c79bbddb3200c39e411e21e11f068e883a0b296933782c53fe1a76af6f0eec1e52e052be898dfad6aec3b546ad48339acba7929a2dab7ba5429578064110e6c553cddefe0315f3ca40e7040000",
    ],
    [
      "ETag",
      "oTLMi+gdSxU4bw5zMz0gpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1604090111888"
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
      "6f",
      "c2",
      "30",
      "0c",
      "c5",
      "bf",
      "8b",
      "776da506b1ad54e23026b4215508cad0fe69426931a590d62149375515df7d0edb61c79d923cfffcfc9c1e8e55b38504f2aa3cb568baab12ddd25f32b4ad72960f4d8d4508009d2c999c9c5683cffddbe87996be568717bc5ee45db91c8f99b0c51e6b09490fbb0ad5d642f2de43236be4b6cdc65c1c19739df6ca6cfe347d98662cd4b4f5c27c9da67793740ae7e04f9b3efeabe5e31cc081f20c7768b029d0a7d0860e58b8995fd0ca5a2b0c2db5a6400b17f852280db55a1aa29095508841286ea261348a8410711c33a9a890aea286e1f58ac381232755465fbc2044f0fb9e740eedc210bb5bf4c6c3f8f667cc3df9d18e2339d3620085e47f7aac1c243ba92c9ebf01ce72f3d285010000",
    ],
    [
      "ETag",
      "BqS2vhZ9WILYijXe5PbygQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfc96e82400000d07f99b335ec94ded8d7082305712e0661d80b238b404cffbda6ef0fde0ba45986a7e9360f2deec117d853463a664797500ab71615aa4228b93cddf4a65f2d43a18bf2185d42cf1708c4cee9ee9b1fd6791b47ed2ee9d2e01a08fdf80fc141a859a3583720152ce82c4e81508a54e0f7a1dd4653b4104a806c63f3daca42ed1bf14f5616196d53f39a5164ef196f327130ddecf1d5e492c7a4ea59995a1405f935e83f532e09ae3b616b19a9386218879ee90e77965d0d64ebf63070cadc6886daf058db5ce0352f12e6e457e8d2aee000f046ea114fb7fa9d6579493a80fff96dde097ef7159c8e7804bf7f7a3394bc18010000",
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
      "Fri, 30 Oct 2020 20:37:15 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-113-1604090111888",
    },
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
      "000002ff85535d6f9b3014fd2bc87b5c934048168854ad5142d76809590969554d13b29d0b754b30c5a65356e5bfef629aae55a5f509dbf79c7bcefde089dc8b624bc68489eca1866affe94e32724240d30c5ffd9bcff162f8c7f1aef7dffd491a5ea5abd5ecf2f41411a26129ba2b73e82859571cd478b3ee6695ac4b5a49d9c1441dc7713bce177b60fbb6e3389ee72151419e2e44718ff45bad4b35eef58ee2dd4cca2c075a0ad5e572f7f2de7becf7ca4ade01d7aaf756b38732aaf781ead75c72aa852c4e376b74502ba812d85191a3877fd42d3b7b9bbb2be8ae9b21f85170a09ccbbad08d2f4cc165918aacae4c56327e22c6e7ab0359078b601a5b5ce6f5ae480aba83136b4b354df4be04eb3c5a2dad7978be8a969378be0a93f5f422584ebad3d562b30cd7d6f545100596a62c07c3b54ead33730bf182fa5b505a14463d6e9e1be5e70ecddf0fa621a0b48236988cec2fd4f16c9fa56cc453cf1db2d406c63c361a5297d9dc1fc060cb8022cf881a162d64d1779da19b8eec84f191970cfafd6d42d3d13061603b7dd77399ebf9e470427e5742c34ca8522ad176885c47f33848e268134e2771604a48699deb596bac29e0b5478d0522e83f351d9aa890a8d4b47b1ec6413499c6f3aba09df00232caf7eb079c714a730588a615364f43b5945b6c180927cb60866033b11fc7a022e39f4fa4e979e3e255cb5fe8310eb0b1abcd97ace3681e7e33768e882b9ad706f2d81e4889966fb136747df88548dcd2360bb9dc04d10d699f2248a182827f3c4d049bc0c77fdb71f3118cbb8f3a4ae31d9787ab468557d02e9130f53eb3fbeed01bf8c4802bfd2ee6fbfeb16d4d8e2623eca0d0cf25b59b8f95b662b57a016110e71f9a761dfe02341a65ad7b040000",
    ],
    [
      "ETag",
      "9Y+TL5z18WyK9AfNVfOODQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1604090111888"
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
      "92d14e83401045ff657ca511b46225e943abd592d05a0b4d4c4cd36c61a0d485c5ddc5a669faefce62ad464df405668633cbbd1776f09c970978b0ccb3971ae5f62443fd608a29aa9a6b45b74a940ac102d42c23727d365c87795fd5137e9a6d1fcba1ed86f6a6db2542c52b2c18783b4873e48902ef6907252b90d662c1eba25c349d057a5b9961184dfdf11df585484c3f9e0541af1f0c606f1d1713a6d9a2e1ffb136df5bb016cb29a628b18cd168a9a45863ac7d6353b1a2e2d852a296312a68e0e64126455d3129448b262dc7396f39aeddb6af6cc7713a9d0e915cc44ce7a22478169240d042333e151bb2092e01b229c971da5c5f699c278d1353fae3c86d3702bf02a42dcd392efe0649f08ad177f8c00e197ce75821ea521fa9dbe0bef7db7114eae75137bd68f083509aa23a22913f1a84516f3431dcfce0bdbfd5a8265250920a4d888eddee5c5cbaf67baed7c2644deff1b4acd18298d1ef31cc357829e30af76f3a1a8c987c020000",
    ],
    [
      "ETag",
      "j2HjSiBsuPl/gyXnH06S0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["STRING", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8553ef6f9b3010fd5790f7a5d5f203129240a4aacb52d6a1a5a423a455b54d893186ba054cb1c95a55f9df7798a66d36adfd84f1bdf7eeddf9ee11ddb23c426314b2e4aea2e5c3871b1ea216a21227707b7d2fe4b2fae8f427ce37e36a63b997f737d1e4e80810ac66099c15296d0b5e95848af172d1494a5e15b8e4bc0d426dc330dbc65037755b370cc3b22c200a9ac63396dfd6f2521662dcedee927712ce9394e282890ee1d9f37d77d3eb1625bfa1448aee7ece2ea411dd77b21ea79c60c9787eb45c80834ad0724533cc52f0f0428dc24ffbda1d86b34e02e00d231413c2ab5cd6be4082f03c6649552a55347e44cae7ab035a3833671a68d3f9d20b0ed638abc9eb430d0b6db52aa9a852d9d2d65054cc52ba62d1ba8914b7da177f7e061170708d05156bedf2abe33bdacbd55afb59e97a9f68c7dac43bd1f6555c4f3b383ed44efdf9f25cfb7cb51704df111592e5ca7580c394d68e9f3aebfefba035014b48d90457237d880d4bb7c3381c91d8ea0fc258a7616885a301ee873ab14d6a4621c5c093b5ba62e19ce751d437cca847b16e03c6324dcb1ef6f41126bdd8ee9964d427a135882c8ab62df4bb64929e305170c19aeea24bdf0d9c55e02fbde92470541931860e9e34e6ea225efb94502480dea86b5b4719874cf553b95ee0f89369e05e38cd74cc6882c9c3e20ee623c6a9a080c625cea8a4e5198fa069e87cbe700377ee4d66c0504f7ebe430834fef1f842081e0ad565a9be6811f8ae77aa0cec101738ad1464d31c102ec02bda6e5bff9701cb43f36d1503147e010236a221a3ef4bc7bf42cd954f635ad29cbc3f01005681f7377bb76500863d833c42c23f0c1c11751652d266f058a6fc35ec5e7f68f70648814bf9776ca4dbd6aec3b546ad48339acba7929a2dab7ba5429578064110e6c553cddefe01c1b34773e7040000",
    ],
    [
      "ETag",
      "hxstUu+E3AEK1Yv8IWxjdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1604090111888"
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
      "4f",
      "c2",
      "30",
      "14",
      "85ffcbf5754b68409c4b78706451124274ca9321a6747763b0edd6b60309e1bf7b5b7df0d197f6e6f43bed39bdc0a1e94b4861dbd49f039af34d8deec50f05daa17596374dbd4588009dac992c3325d4ae98e759d5edbec6b7f361acabd36cc684553bec24a417a81a6c4b0be9fb057ad921db3e3e4cb8913177d65e59acdef2c7bc60a1a3d20babf572f9902d73b8467f6cfaf02fcbe61ac19eb6055668b057e85368437b546ee10b5ad9e916634b83516821c0e1a036346869886256622126b1988e26a3fb9110224912265b52d235d433bc7ee570e0c8c9b6a0131704c180092377adc27a64791a4a1c03c0d936bfa6ececd03e1be20816fdeb93e4ee27cb9c7c3ec7b99d19300225f9339f1a0769255b8bd76f0a26cb2faa010000",
    ],
    [
      "ETag",
      "dBc1chRCEBfmhx35Cu3pfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfc97282300000d07fc9591d646be90d0644062a5296142e991023ca9a066473faef75fafee03d012684f63d1aba8ab6e0032c58d47664e732c190a7cb2a1cc23cb2720ecfec0cbde8a8ca611b3f4231129d2dbe61e33da9b13a8ddebd3d6552fa28b819a4b4f426d32a75dd6e2b7fa0a198f92b925251ce0741cf9d8642a2e0552909ea6035c7ec08f7a570493823b6ee2c2a1b0d74f59c821436ed62e966c19f7efc749bb952e474bbcff1705d04997ea36d40ea436325b1fb651a31725b51876fb3d9ce6b6c39fca4fa97ac1ff2be38074152df9af4aa830da033bb73daa3fb2b2b299ab601ff73342c8cbefa06c59c72f0fb074dad0caf18010000",
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
      "Fri, 30 Oct 2020 20:37:17 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-115-1604090111888",
    },
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
      "535d4fdb3014fd2b91f74adb849626ad548daa8411a94d479a82a6698a1cf72618d238c40ed0a1fef75d3bb402218da7d8bee7dc73ee475ec9032f37644c529e3f3650efbedd8b949c105034c7d7fce5faef7c1d3cb3dd7277cf17e0dfb895379d4c10c1354bd26d5540478aa66620c7eb5537af4553d15a880e26ea38ce59c719da037b643b8ee3791e122514d99c970f48bf53aa92e35eef20decd85c80ba015975d26b6c7f7ded369afaac53d30257b1f357b28237b5fa87e2f04a38a8b72b25ea18346429dc096f2429778a46ed2f38fb9bb9c6ebb39829f3803ca98684aa57d610a26ca8ce74d6db292f12b313edf1dc8ca9ffbb3d862a268b66552d22d9c581baa68a276155897d1726105e1e5325a4ce3601926abd995bf987667cbf97a11aeacdb2b3ff22d45d3020cd79a58e7e616e205f53720152f8d7aac9fb5f25b8782cf83d1049496d00613d71e52c7b3476996ba2cf3fa676966439a7aa97b46fba9cd4603186c52a0c833a286454b5162fcd4755296d89b8c2583d47193913374136c0e8c18b3870eb3c9fe843cd75cc105979590bced10b98d82d84fe2681dcea6b16f4ac86853a88bd6982ee0bd47850522e83f35ed75940b54d2ed0ec2d88fa6b338b8f1db09cf21a76cb77ac41967b49080685a63f314d40bb1c1869170baf02f106c26f6f3109464fcfb95e89e6b17ef5a7ea4c738406d57992f59c55110fe30760e881b5a3406f2d41e488596efb03674bdff8348dcd2360bb95efbd12fd23e4590410d25fb7a9a083681afffb6c3e62318771f75a4c23b2e0f935a85d5d02e1137f5beb14ffb9ed3778801d7ea53aceff60f6dd3397446d842a9de4a6a371f2b6dc51a79046110e71f9a76edff01ba1e38dd7b040000",
    ],
    [
      "ETag",
      "gxQzLUIwcyOyjiMeEV7p8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1604090111888"
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
      "83",
      "401085ffcb7885044c8b95a407aa554928564ae3c134cd1686961658dc5d6c6ad3ffee2cd66ad4442f30337cb3bcf7600f9bbc4ac18545be7c6e50ecce96a81e7411a16c0a25e956f34a2218808a2d897cdd6d2ac434446fed9cfbf964b3d8ae1fbd7e9f0899acb064e0ee21cbb14825b84f7ba85889b496f0a229ab79db19a076b51e4ee2c80f6fa92f79aafb701a04de2018c2c1382da64cb179cbff636d763060cd17116628b04a506ba9055f63a27c6d53b2b22ed094bc11094a68e1f6c152f0a66682739326a66d774ddbb13ad6a565db76afd723b2e0095339af089e4e482028ae5811f12dd9048700d196e4386baf2f34ced3d6892efd30763aadc0af0069cbf202e77f832478c5e83b7c60c70cbe73ace44da54ed44d70effd761c85fa79d4b5170f7f105251542724f647c349ec8dc69a9b1dbd0f760ae558704a52a20ed1b63abdee8563bde77ac575d6f41e5789060d4818fd1e77b902376385c4c31b3a1fdab87c020000",
    ],
    [
      "ETag",
      "zykneedNeAj62IiSkbwjWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["DATE", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1604090111888",
    },
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
      "4f",
      "e3",
      "30",
      "10",
      "fe",
      "2b",
      "91",
      "f7",
      "05a41eb97a4a88ed962c442a694953107ba8b51d27189238c40e2b16f5bfef24a14085169e9afa3be69bf1f809ddf12c446344787c5fb2e2f1cbad20a88598c27175fa6371f6d73396be2b2e7ba7d45adccc66f8e2e80818bc52499ce6096b4b511694c9f16ad9890b51e6b810a20d466dc3e8b78dbe6eeb23dd308ce1700842c99268c6b33b90df2895cb71b7bb2bde8985881386732e3b54a42fe7dd07b39b17e2965125bbfb35bb5046763fa97a9c088a1517d9d16a09094ac98a354b314f20c3ab34245ff7bd3b1ca79d18c80f9c324ca9283355e5020b2ab288c76551bba2f113aa73bef9404b67e64c036d3a5f79c1c106a7957873a861a9add7059365a25ada069a8a78c2d63cdc34487ea77df7e7e78040821b2c99dc6857678eef68da26c48a6db45fa5ae5b543bd626de89b6efe07adac1f1a176eacf570beddbf51e0899432615cfeac4012609abd23e4fd57d7f9995002b48d080eb81dec7c6501f91880c6834b47a24d219214332e8618be87464333b240c834e55eeb50a67220bcd814543bb6f137318ea36237604c324060b4d6c0330c214935148d1b685fe145cb1132e732179335974e5bb81b30efc95379d044edd4684617a274db8aa89b739153409a40ffada56281750a9ba26d70b1c7f320ddc4ba7d98c198b317d5cdec36e4438910cd8b8c02953ac3817210c0d2de64b3770e7de64068afaba173b8644e39f4faf82e031afa7acea5f745235b07d63788993b2263c341fc8d44dbdad9b6da387b6dbd6ff9d2075dffed8ca0087df",
      "c08007d188d1c5caf1af5173e4b388152ca39f2f01906be0f387bd7b644086670675a482ffb07354565568c19adde3699daf519bd6c8e859a82617ea1d66f547bb21571e95234b59a69e5b6a1e5935ab1a2ae50b09405819cff54e01fd0712ab377ae6040000",
    ],
    [
      "ETag",
      "bZPHzN1SRIoV5Gc3PhLLaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1604090111888"
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
      "ff8d90514fc2301485ffcbf5754bd648c858c20318a29841704862620829dbdd1c6cbbb5ed5024fc776fab0f3efad2de9c7ea73da71738d65d0109ecebeabd477dbea9d03eb92143d337d6f0a6a8330801a0951593692a8ac7d1ea73fd25e68bc3ea45f5d3c162321e3361f2376c252417286b6c0a03c9eb053ad922db763bed6f64cc9e9553e6cbe7d9fd2c63a1a5c209cb4d9a4ea6e90caec11f9b3afecbb2bd0670a07d86256aec72742994a603e676ee0a1ad9aa064343bdced18087fd41a5a957521385ac84420c43318c06d1281242c471cc6443b9b435750c6fd61c0e2c59d964f4c1054130a0fdc85d4bbf9e58bef5254e1ee06cdb5fd3f46cd1ac34710483eef5411cfd64b92397cf726eab7b0c2097fc990fb585a4948dc1eb37fa8b020aaa010000",
    ],
    [
      "ETag",
      "LL1dJ9PxSz1IMjPXpuB4MA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b7282300000d0bb646d1c918fd21d512abff257291b26c5b4a0209144203abd7b9d5ee0cdbc27c06549182b78772157f006045eeaf372eed20552c6d335b1b1af51dcb90f2e7b22ff9cec23128196b9978d6db1551ee8c2fad1d26aeba1cee387751c366a2485694ee4be32eedd4915a63f61d165b7b33fa0227c08ae55c57211b3b14e1d2346b06ef6c63be35ff6641c3268e72def864d184fd2918ebee25632b7a4e42c119493508dceca771f248f88ad8d8fcc64700c22cacdb5bc12cd5052736cad3d842fa6cc5b276a6e83b22ba18f77d809eedb11cc009968dd1356d4afacaceafa0cfccf0b2e2879f511c13de9c1ef1f46f1517218010000",
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
      "Fri, 30 Oct 2020 20:37:20 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-117-1604090111888",
    },
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
      "0002ff85535d6f9b3014fd2bc87b6d1248098148d11aa574454a4807a4d5364dc8760c750b986293a9adf2df77314dd7aad2fa84ed7bce3de77ef08cee79b543334478fed0b2e6f1cb9d20e80431857378ad924bbb14cb7bf1f433af48613ff989bccae77340f08e257159176c2045db502667db789837a2ad7123c400120d2c6b3ab01cd3363dd3b22cd77581285991ad78750ff45ba56a391b8d8ee2c35c88bc60b8e6724845f9fa3eda8f477523ee185572f45e73043272f489ead74250acb8a8e6db181cb49235292b312fc0c33fea8e9cbdcf3de4b81ce600de73ca30a5a2ad54e70b525051653c6f1b9d15cd9e91f6f9e680627fe52f13838aa22dabb4c2253b317658e1543dd6ccb888366b23082f36d17a91049b308d9797fe7a315c6e56db75181b37977ee41b0a938269ae3137cef42d840be8ef9854bcd2ea49f7dc29bf7428f838988e00d292f5c1746a3ad8724d8f64644a33f77442329311e292e9049f12937a36b3778461e06951cdc295a82663676c11c749ddb133496d73eaa440c0a949bc49e679ae0d347438417f1aaed83997b590bcef10ba8982c44f93681b2e1789af4bc8705ba8f3de5857c05b8f0a0a04d07f6a3a74512e40a96b7710267eb45826c1b5df4f78c5724c1fe3079871860bc9008d1b689e62cd5aeca061285cacfd7300eb895d1d8312cd7e3da3aee79d8b372d7fa52730c0ceaed25f142751107ed3768e886b5cb41ab2ef0fa806cbb7501bb83efc06246c699f057ddffad10fd43f452c630dabe8e7d304b00e7cfeb71d371fc0b0fba02315dc6179a8ec5468c3fa25e2bade17f6d8362d6f8c34b8511f62a7e6e4d8b62e47979195ac522f25f59b0f95f662ad7c054110e61fea761dfe029b01fe8c7b040000",
    ],
    [
      "ETag",
      "nTH4moCkozZgnbl4zETsPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1604090111888"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd6e82401085df657a8b0918ff4ae205566d49d08ae05563cc0a83a2c0d2dda50d31be7b67a9b54ddba4bd8199e19be59c032738a6450c366cd3dd7385a2bed9a1f275b14459654ad2ade48544300015db69b26c1fbdf8d8ad0b3f88c6edc3b63f55be3f1c1221a33de60cec13242966b104fbe90405cb91d6229e5579b1693a03545dea61102eddf93df5398f753f5f799e33f2267036ae8b31536cd3f0ff585b9f0d38f0ed1213145844a8b594821f3052aeb629595e66d892bc12114a68e0e6c14ef0aa6482f3164d5a96d56f593db363de9a96650d060322331e3195f282e05540024171c5b2257f259bd023403425394e9aeb0b8dd3b871a24b771ef63a8dc0af00694bd20c377f832478cfe83b7c60970cbe732ce755a1aed4d47b747e3b8e42fd3c6aec84931f845414d51509ddd924089dd94273eb8bf751ad502e04a72425ea102db333e8f67be67bae775c674defb195a8d08088d1eff1902ab01396493cbf01abf8040e7c020000",
    ],
    [
      "ETag",
      "bp2kLdk5ynQScD2jb7FtQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1604090111888",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535b4fa34014fe2b64f645935e06680b6d62dcaae892b4b44ba9c6bda41da6038e0283cca031a6ff7d0f60d5c6ac3e31e1bb9cef9c39f38cee78b6412314f2f8be64c5d3b75b11a216628ac4f03708635b909e75739226b7e27c5c70b7b8783c3a0206af5492a479c2da5294056572b45c74e242943929846883515bd7edb63ec03d3cc43a9c6d1b849225d184677720bf512a97a36e7757bc130b11278ce45c76a8485fff771f8c6e5e885b4695eceed7ec4219d9fda2ea712228515c6447cb052428252b562c253c810c6fd24df87ddfbbc349da8981fcc02923948a3253552eb0a0228b785c16b52b1a3da33ae7bb035a3813e734d04e674b2f385893b412af0f3522b5d5aa60b24c544b5b4353114fd88a6fd60d92df69e7fe6c0a0824b82192c9b576f5c3f11d4d5b4b05e9d6da9f1263936ac7dad83bd3f62d5c4f3b383ed42efcd972ae9d5cef81107ac3a4e2591d392061c2aab82f63753fde6625200a2234e0cac203a2db781846a14523dbec871166616887569f9821a6c31eeb6d424640a72af75a45329159c33e35756c9370d3d7077a140d082370e80fcc616461cb0a4d930e9989b62df45870c5ceb8cc85e4cd68d195ef06ce2af097dee93870ea362202e33b6bc2554dbccfa9a049207dd2d7b642b9804ad53db95ee0f8e3d3c0bd749ad598b098d0a7c53d2c474412c9804d0a9232c58aa9d8c0d0d07cb6700377e68d27a0a8ef7bbe634834fafdfc26089ef27acaaafea2c09d3a8b603c9dd71976a44b929435eba13920031bb88d8db6de0f7463a49b23bdd7c118ff42db6debffe6d0c8a0f7b9b10e0e7f81018fa411a39f4bc7bf46cd2f9f45ac6019fd7a2f805c035f3ff6ddc303323c3da8034bac38ac219555155ab0661d795ae76bd446cfc0fd21aac985fa8019a6b59b7be55139b29465eaa5a5e6e155b3aaa152be9200842df25cef02d07f48c2fa82fa040000",
    ],
    [
      "ETag",
      "Tbg8oa47hBmljoFAriIrGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1604090111888"
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
      "4b",
      "c3",
      "40",
      "10c5bfcb784d20d12231d0432bc1164ad1d82228a56cd3494cf367d2dd496d28fdeeceae1e3c7ad91ddefedeee7b7b81aa6cf710c3ae2c8e3deae1a6407eb1438aa6afd9c8d6516b103c40568590ab68727b7eab66d130bd3d578d9ebd27479e8cc74298ec131b05f105f212ebbd81f8e302ad6a506cdbad76370ac6436795f972953c25a9080dedadb05c2f1693e92281abf7c7d655ffb26cae1e1c6897628e1adb0c6d8a4ed301339edb8246355d8dbea15e6768c0c1eea0d0d4774a13f9a2f86118f9e17d300a1e8250e62812b2a64c7149adc0eb5709074cacea94bea420840268374ad7dcad2791ef5c89930324dbe6d7341d18cdb3268960d0be3e8a829f2c8f64f3b1e466dda3079992cf9c950c71ae6a83d76fff9ebc96aa010000",
    ],
    [
      "ETag",
      "T8A2xWkH8yB2xkmrHZEqtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfc95283300000d07fc9b9d3c1b2c69b6c22196a81a6a15e1896b0ca8e40e8f8ef767c7ff01e204a123a4de1dcd5b405af804527784c8ea8e75461a589510df1c04a6d512de19693a2e269758d1bfb2de589cf6c1186337de14806b593139accf55672d7de7f2cccd99f7b64a7929945331d5c676d59a7eb229ab82dc8932eeef0026b1323fed26752796f9daac652c6a7c4396b289015233fdb9e8fd220883f70a8f844f09620de7dd8d4c1da959b5cc4375ddfb05b9406ab265f8b062c7edb5fbe3c7396e2b88cc805da2bd6ec7869687645977a59c101d0ad2f473a85e533cb8b101ec0ff3c9c594f9f7d9546231dc1ef1f34af156c18010000",
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
      "Fri, 30 Oct 2020 20:37:23 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-119-1604090111888",
    },
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
      "535d6f9b3014fd2bc87b6d1248684222456b96d236534236206db76942c65ca83bc0149b6e5595ffbe8b69ba5695d6276cdf73ee39f78347f28b970999919867770dd40f1f6e454c8e08289ae1eb9ff1ad7ded3b17db4fd7e7934206fce673f23d9bcf11c15b96a44595434f8aa6662067bba09fd5a2a9682d440f13f52c6bdab3c6a66d4e4dcbb21cc741a2843c5df3f217d26f94aae46c303888f73321b21c68c5659f89e2f97d703f1c54b5b805a6e4e0b5e60065e4e01dd58fb960547151ce77013a6824d4111494e7e8e11f35894f5ee7ee735af43304df73069431d194aaf585299828539e35b5ce4a668f44fb7c712081bb7697a1c144de146554d2028e8c842a1aa9870a8c337fbb3156ded9d6df2cc2d5d68b82e585bb59f497dbf56ee305c6d585ebbb86a2710e9a6bcc8d137df3f082fa0948c54bad1eb6cfadf25387566f07d312505a42178c26e6985a8e398dd378c25267741ca726c4b1134f8ee92836d9d4063b8981224f8b6a162d45398c47e988c134b26cd38c6c3ab122ca86344ac6c9748cc16492c4647f447ed75cc129979590bceb10b9f257a11b85fece5b2e42579790d22657a79db1b680971e151688a0ffd4b46fa35ca052dbee9517bafe6219ae2edd6ec26bc8287b08ee70c629cd25209ad6d83c05f54624d830e22d36ee2982f5c4be1c8292cc7e3c92b6e7ad8b172d7fa68738c0d6aed25f1284feca3bd7760e884b9a371a72df1d4885966fb03674bdff8948dcd22e0bf9ba73fd6fa47bf221851a4af6fe3411ac03efff6d87cd4730ee3eea4885775c1e265b155643b7445cd7fbc41edaa3d1684834b8566f62b6e51cdad6e668334201a57a2aa9db7cacb4136be4330883387f4fb76bff17969367457b040000",
    ],
    [
      "ETag",
      "x6j4XR8HOBXG7msSihJdZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1604090111888"
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
      "df65bcb4246d82084dbc288240e49f72650859da2914db4ed9dda284f0eece5644a3267ad3ce4cbfd99e73da233cc759082eace2f5ae4079b85aa39e98628aaa48b4e25b4e9942b000b55833d97e0dbb0dd1a06d7537bade3b9dc9630b57dedd1d132ad8602ac03d421463122a709f8e908914792da0a448b365d959a00fb919cefc696fd8e13ea5d0f4c379bfef35fb6d385997c55068b12cf97fac2d4e166c6935c5082566011a2db9a42d06ba676c2a91e609561415324005255c3e584b2a7221892a3ca9384ea3e2d4ecaaddb01dc7a9d7eb4c2614081d53c6f07cc602419316c9945ed826d4189065c98ea3f2bae7711c964e4cd91bfab56a29f02bc0daa238c1e5df200bde08fe0e1fd83983ef9c48a9c8f4857ae88fbcdf8ee3503f8f6a797efb07a134477541fcdea03df3bdc1d8708bb3f7e641a31a4be224159a101dbb5abfb9add9efb9de93c99adfe36a59a00581e0dfa31b6b702391283cbd01058cd0087c020000",
    ],
    [
      "ETag",
      "ExdH9a9oj4qO+v1GQKDebA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND  `profile_id` IN (?) GROUP BY `profile_id`",
        types: ["FLOAT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: ["1"] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1604090111888",
    },
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
      "ff",
      "4f",
      "da",
      "40",
      "14",
      "ff",
      "579adb2f9a09b450a09018c7b06e4db0b85234665be07abcd693b68777579d31feef7b6d452566e327ca7dbebccf7bf7ee89ac79be224312f1e4ae00f9f8e95644e48880a6099efaebdbbb8e946df987896cfd70f3d9b9d4fde4f81819bc54299a6d5268285148066a389f3513298a0d954234d0a861b5cd86d5336d73605a96e5380e0a15a4f184e76b94df68bd51c3566b5bbc990891a440375c35b1e0eb79ebbeddda48710b4cabd66ecd169651ad3d554f52c1a8e6223f9ecf3041a1402e20a33cc50c6fd255f465d7bbc969d64c907ccf1950c64491eb32175a3091c73c2964e54a864fa4caf9ee83ccdc893b0e8df174ee87074b9a95e2e5a14195b158485045aa8f8c253615f314167cb5ac91cdda380ba6e78860821baa402d8dabef6ee01ac6d6c3f8559866871927c6c83f35763d3cdf38383934be05d3f985f1f57a07c4d42b509ae755e690462994795fe6ea7dbcce52403566a8c145dfec51cb3107511cf559ec74ba516c42143951bf4b3b91c90636d8ab0828ea74e95ea9682ef22e38109b488b686c765671e4500bacbeedb4bb66bf17537bd0b31d6699e4f9883c48aee194ab8d50bc9e2db90abcd05d84c1dc1f8f42b76a23a638bfd33a5cd9c4fb9c1a9b44d27ffa7a2e512eb05279519e1fbac1681c7a976ebd1b1348287b9cdde176c43455806c2a69061ae4b958e1d0c8c574e685ded41f4d50515df8c596a1c8f0e7d39b207cdc5453d6d52f399b4c4761cfae126c2997342d2ace7dfd41ac661719cf47ffb6c1c87b4dd0e13732f03dd462f263ee06d7a43e0a20060939dbbf0148ae80fdef7afbc6908caf0ceb288dff",
      "71e1982aab3009f5e2f1acca57abdbb66df53aa4224bfd01eb98eded844b8fd21132c8f54b4bf51b2b675541857a252188fbe27bfe3744ff027720d800e5040000",
    ],
    [
      "ETag",
      "Nkjq3rr2rxcomkwh+8Vt7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1604090111888"
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
      "0002ff8d90514f83301485ffcbf55148605b0c92ecc12d5397e0a2280f6a96a5830bb201b7b6654a96fdf7dd561f7cf4a5bd39fd4e7b4e8fb0afbb0262d8d6d5678f6ab8a8d03cd92145dd3746f326a9d3081ea0111593b7edae7bad2fe759a157e3643e39bcc9ef876a3a6542e71fd80a888f50d6d8141ae2f72374a245b66d36caddc89819a45596ab97c5dd2265a1a5c20aab2c496e66c9024ede1f9bdcffcbb23e79b0a36d8a252aec72b429a4a21de666690b6ad1ca067d4dbdca518383dd41a5a8974211f9acf8e128f0c3ab60125c0761184651c46443b93035750c67cf1c0e0c19d1a4f4c505216440b991bb966e3db03c72250e0ee06ceb5fd36c30a81f1571048df6f5f128f8c932279bcf706ea37af42017fc99f7b581b8148dc6d319cbc39ebcaa010000",
    ],
    [
      "ETag",
      "FmjnYi+CUdsN3LC4vZpxMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b7282300000d0bb64ad0ea091d21d28d2ca278202d64d0631d384887c0241e8f4ee75fa6ef07e4096e74408dc559c3cc03b1833cd58e40bb756acd570a3fe83d12c2dfb612dbdc4abd2d189f549ecbd9b4c38da295387e21ccedda2817497da733aea0d61076a6e9340550509596773d7ac6cf291f82e320c3ac49c474f84b40aaa63da1535b18a7d3f6c3ea9bc46457281e7cc0ba67043ce4ea00febea2265d77e1591924b76bfe6ccafefb82c1a713c8dd601e26aa98beff218a23d879b3769462a6a4c2b9cef626cacb8ed9fa8bb0d6ba6f57707e201cc0079d6ac2502b35776090d6306fee7b81b6bf2ea5b246b490b7eff005d40f45118010000",
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
      "Fri, 30 Oct 2020 20:37:25 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-121-1604090111888",
    },
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
      "000002ff85536b4fdb3014fd2b91f79536491f34ad548daa8411ad4d479a82d034458e739319d2b88d1d1842fdefbb762803218d4fb17dcfb9e7dc479ec93daf323221292ff60dd44f5fee444a4e08285ae06bd0db43756f5f2d6ef77fa29bda1d54fef7b8984e11c1354bd2edae848e144dcd404e36eb6e518b66476b213a98a8e3f6dc8e7bea0c9cb1e3baaee779489450e60b5edd23fdb7523b39b1eda378b710a22881eeb8ec32b17d7db71f7af6ae1677c094b4df6bda2823ed4f54bf968251c54535ddacd14123a14e604b79891efe51b3f4ec7dee2ea7db6e81e007ce8032269a4a695f9882892ae745539bac64f24c8ccf3707b2f617fe3cb698289b6d9554740b275646154dd4d30eac8b68b5b482f062152d6771b00a93f5fcd25fcebaf3d562b30cd7d6cda51ff996a26909866b4dad33730bf182fa1948c52ba31eeb67adfcd2a1e0e3603401a525b4c164e49c52d773c6699e8e58eef58769ee409a7ae96848fba9c3c60318642950e41951c3a295a846cccdfbe36c98b8e39c25038427141b93e85c59dfe979830cc8e1843cd65cc139973b2179db21721305b19fc4d1269ccf62df9490d3a654e7ad315dc05b8f0a0b44d07f6a3ae82817a8a4db1d84b11fcde67170edb7135e4041d9d37a8f33ce692901d1b4c6e629a897025d4e48385bfae7083613fb710c4a32f9f94c74cfb58b372d7fa5c738406d57992f59c751107e33768e886b5a3606f2d01e7419392fb5e9c32f04e292b649c8d5c68f6e49fb14410e3554ecf36122d8043effd98e8b8f605c7dd4910aefb83b4c6a155643bb43dc94fbc2ee0d86fdf1981870ad3ec4867defd8359d4367842d54eaa5a476f1b1d256ac91af200ce2f843d3adc35fb435ded57a040000",
    ],
    [
      "ETag",
      "I2qenk/QLYqxRWr14nEKTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1604090111888"
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
      "93614fa3401086ffcbfa9526607a3d8ec40fb457cf26b4f528e68cc6342b3be0f6160677975e9aa6fffd6651ab5113fc0233c333d979675ff6ecafac058bd8bd2c1f5bd0bb9312ec6f17a4605a650dbd1aac0d308f81e52591c3e9a8985cdffc595dcccf61193efa9b743389cfce8830f903549c457b564850c2b0e876cf6a5e01b5e5a8daaa5e7799c7ecae71c55596ce16bf28af50b87c719524f13899b283776c14dcf275c77fa1edeee0b10ddea75080863a07374ba37103b99d399986578d8281c156e7605807771f4a8d6dc335e2802a83e0341804237fe8fff0832008c390488539b7126b82af563420b368b94af11fc964c12911ba8b4972d13db75497a293e2c2d9221b0dbb09df0285d4c63e6de5057c56f79e54fc8b205d81547d5009b500dd47c966cd85d0604c2f8966cd9be6888d97cbe403c46ba1518a7e702b7b0065b747e03c59c69fad968cf3baab9f7136fd40184b763822d96c3e5d65f1fcd27177cff73bde5930971ac92d069c51027f187efb3ef29fbc3341e7273a27b2ba058fe59c7e810b6959547065e0f01f2f3d70e460030000",
    ],
    [
      "ETag",
      "4E6fCXZWSHMFeO8q0jRjCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfcb7282301400d07fc95a1c1028b53b48a520161d81f8d8303c020d4c217053213afdf73a3d7f701e282b0a0a908abea51d7a43325bad97c532e0aa634c857a82a86adf09ce2cf0ca8063cda163aebf346cf4e5ac4cb9426613c69f90cd47578b6d31d58d42bcd98b21b212ec40f7cd61b8128269616b6d582b86940394fbab5441e5d5aaac583471ff10890a3704efb766d9b5f47e3f6c7667d7e4b66af915cb1368b4f0d365fd4ea5d9890e71822fb17b825a9407769e79927dbd6afdc72acfbbdd51066408b7b67331f45be05616bef91b43087c496bb44074e66ca490b2675637d7eb05fa9fa74272faec3b341be9887eff006537f2ee18010000",
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
      "Fri, 30 Oct 2020 20:37:26 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-122-1604090111888",
    },
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
      "14fd2b91f75a20a1011224b4229aae6c10b6105a55d31439e626731be2103b5dab8affbe6ba774ed26ad4fb17dcfb9e7dc8f3c913b5e6ec998a43cdf37503f7eb815293921a0688eaf3f53b8f1cb62ba8abfac869f9737fd87ea619f4f2688e09a25e9ae2aa02345533390e3cdba9bd7a2a9682d440713759c7ebfe30c6dd7f66dc7713ccf43a284225bf0f24ea757aa92e35eef28decd85c80ba015975d26762fefbdfb7eafaac52d30257b6f357b28237befa87e2c04a38a8b72b259a38346429dc08ef2023dfca16ed3b3b7b9bb9ceeba3982ef3903ca98684aa57d610a26ca8ce74d6db292f113313e5f1dc83a5804b3d862a268766552d21d9c585baa68a21e2bb02ea2d5d29a8717ab68398de7ab3059cf2e83e5b43b5b2d36cb706d5d5f065160299a1660b8d6c43a33b7102fa8bf05a97869d463fdac959f3b34ff77309a80d212da6032b287d4f16c3fcdd211cbbcd3419ad990a65e3a1ad0d3d466be0bee36058a3c236a58b414e5d01e8c18f83471333a485c968d120ffc6de2678e3f1c0c9c810d1e399c905f355770ce6525246f3b44aea3791c2471b40967d338302564b429d4796b4c17f0daa3c20211f49f9a0e3aca052ae976cfc33888a6b3787e15b4135e404ed9e37a8f33ce682101d1b4c6e629a897628b0d23e174199c23d84ceceb3128c9f8fb13d13dd72e5eb5fc851ee300b55d65be641d47f3f093b173445cd1a23190fbf6a0cbc878a14d1f7e201097b44d42be6d82e886b44f11645043c9de1f26824de0fd9fedb8f808c6d5471da9f08ebbc3a4566135b43bc44db9cfecbe3b721d971870adfe8ef9b6e71ebba673e88cb083523d97d42e3e56da8a35f20584411c7f68ba75f80debd0",
      "18017a040000",
    ],
    [
      "ETag",
      "hbeY9nlAOTKO6JMY2xpxqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1604090111888"
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
      "93514fdb3010c7bf8bf7b8544a4a57ba483cb4a56c91420b69784013aadcf892191cdbb59d4e51d5efbe736005c1a4f092dc5d7e27dffffccf813c71c9484cb6bcda3560da2f15b85b1f64601be12cbeb492164840c0d10ac9cba7fb2a6bbfcecfe4bcd9edf4f9789bb549757181842d7e434d497c202507c12c897f1d88a435605ba14453cb4d9705c4b5da17d779962c7f605e2be6f3e55d9a4e67e9821c835323a38e6e3afe136d0fc7803caa6d0625189005f859b4518f50b8c4cbb4b4d602065635a6004b3ab8fb5019d5686a941a6065100d8783681c8ec2ef61144593c90449a10aeab89208dfad7140e294a322537f5026898648982e46c965f7dc639db34e8a0f93653e1e7513be054a6eac7bdeca3ff045dd7b52d04f8278055cf441154806a68fe27a431933606d2fa9ec866a7dc266ab55fa01a29219c5593fb8e73d8070fb137095aea6ff5b2d1ae7755797d37cf181b00eed7042f2e47ab1cea7d7379e7b78b9df59ebc0de18856eb1e08d1285a3c9b7f371f8ec9db9f27ec27362671a084841f117f8c91d894b2a2c1cff0269330c3b60030000",
    ],
    [
      "ETag",
      "DkYgRy+C3nCuqqp76bRyIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 30 Oct 2020 20:37:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
