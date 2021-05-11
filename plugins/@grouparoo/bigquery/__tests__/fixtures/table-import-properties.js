const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1620764096226";

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
      "8b08000000000002ff1dd04b7282300000d0bb64ad0ee513a1cb880832a030e1e7860949b414140c51814eef5ea74778ef07104af93094b26bf80d7c8289a8d68aaefcde44e58585229e6510126b7d474a59db7d306ecac7eccc054c8f028ed178773ef86c6552f7d267e46dbb8ac64346f69cdac9c9d462b330f5e640c2a13d62942c63a7865775d93e0f4ce6671653ecee0a5d69bf553c65cdb61059f6a4b7615f31053ba8c7937e715163880e051d641bd9f4d5862dc328f572b3d51f534cce79c15f6b0c13fbabda32066df7e0ecb049c26b025bcd4fd553466410e4d8f1a1f1b2c002f0b1af051fcafacdd50ccb5a807f7b29a79ebf031027820bf0fb073c8c87831a010000",
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
      "Tue, 11 May 2021 20:14:59 GMT",
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
      jobId: "grouparoo-job-1-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b6f9b3014fd2bc8fbda04f2822452b446296da3256405d26a9a26649c0b734b708a4da6aeca7fdfb569b25695da4fd8bee7dc73ee8367f2c0cb0d199394e78f35544f5fee454ace08289ae36b41d77fed7b8f5ee5b7fb6f54dd659b2aeadd4c2688e09a25e97657404b8aba6220c7eba89d57a2ded14a8816266a755a1db7eb786edf19b9ddae8b340945b6e0e503927f2bb59363db3e4ab77321f202e88ecb3613dbd3bbbdefdabb4adc0353d27eab68a388b43fd4fc5a08461517e5641da17e2da14a604b79810efe1337e9f9dbcc6d4eb7ed1cc17bce803226ea52695798828932e3795d99ac64fc4c8ccb570712f90b7f165b4c14f5b64c4aba85336b43154dd4d30eaccb70b5b4e6c1e52a5c4ee3f92a48a2d9b5bf9cb667abc57a1944d6ddb51ffa96a26901866b4dac73730bf082fa1b908a97463dd6cf5af9a53ff3f743d1049496d00413cf716967e88cd22cf55836ec0dd2cc81341da6de80f652878dfad0dfa4409167440d8b96a24c07ae33ec3aa3c41da690f4fbe026b4e70c13a70769bf83473670c8e18cfca9b8820b2e7742f2a643e42e9cc77e1287eb60368d7d534246eb425d34c67401af3d2a2c10411fd474d0512e5049b77b1ec47e389dc5f35bbf99f00272ca9ea2479c71460b0988a615364f41b5141b6c1809a64bff02c16662df8f4149c63f9f89eeb976f1aae5277a8c03d47695f992280ee7c195b17344dcd2a236907d73d06564bcd0a60fbf10882bda2421376b3ffc419aa71032a8a0649f0f13c126f0d98f765c7b84e2e2a38a5478c7cd61526bb00a9a0de2a6d8137bd41b7ac4802bf52ee679fd63cf740e9d11b650aa97829ab5c73a1bb15a9e4018c4e107a657877fb7315a1074040000",
    ],
    [
      "ETag",
      "laUz/j7aGgVvKatWfdrS3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:14:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d93514fdb3010c7bf8bf79a4a6d57028bc443ba7550115a68c3cb261419fb929939b1eb730a55d5efbe7360dd34268597e4eefc3be5eeef7ff6eca76a244bd883aa362db8dd870afc6d085680adf6482f6b1a041631f0bc22f239cbaf707356637af1edea7273b2b36a7dfb747e4e048a1f507396ec59a9404b64c9f73d6b780dd4268c6eeba6e8b288f99d0dc575be9a2f2e28af8d0cf9e22ecbd269366387e8d828b9e745c7bfa3edfe10b147f3b082121c3402c22cd69947107e1ed6445e5b0d0334ad1380ac83bb83ca99d67267cc802a83d160148f87a7f164f8291e8f63e2b411dc2bd3107ab7a6f198379eeb9579a225d9e82311ae8b69e1b27b6ea9ae64b74808e78b3c9e74f3fd0d70214cdbf8a2172c9543ff22de6ff055847f49cddf09d24d29dd0755d048707d94b20597d201622f69b0e0d61eb1e97299bd55a591ce28d90f6e550fa0fdf6087ccd96e9ffa4257ffdd1ea4b9acfde10e8c93547249f5fcfd6797a7d13b8fb57234c771ef0c619321542f0d36838393b398d872f16fb6c82ede83b89772d444c70fa532e956749c935c2e117385a052e87030000",
    ],
    [
      "ETag",
      "xLTKsq8msAGZKHq5ypiSQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:00 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4e",
      "a340147e1532fb6737a9056ab9b48971bbca2ad94a95528dd96cda811ed851607066d034a6efbe07b05ed644932674e6bb9cdb9c4772cbca3519939865773588cd971b1e931e014533bc3d760b959e6e1617c6955ee7bfe2a9f7c01eb2830364b046256951e5b027792d1290e3c5bc9f095e575470be87467b833dd31e188e3d3446f66060a34c429e4e59798be2bf4a5572acebbbd0fd8cf32c075a31d94f78f17cafdf0ff44af01b4894d4df46d43188d43f8c7998f3842ac6cb83c51ce3d712c4120aca72cce045b88ebfbf75ee335af43324dfb3046892f0ba544d566891f03265592d5a57327e246d96affe90b937f58e226d953221d5b2a405ac342ab5e55280ac73d5d3566cfd7453dd6a3fc3d999b6c20a5396835c6957a75ee8691dc70fb4451078f348fb7af84d3b09678b73edc7758bf5def8635e6b908a956d56118d7368327aea9bff7e588d802a2aa103978e6153d33546711a3b49eaee5b716a401cbbb163d1fdd848464318ae63a0a8538d7baba2252f5dd719c5e6d07229351cc372acfd81e382b9b6621bac14a86d2509a443976c7be4413005c74c565cb2ae7be42af4236f19858be06812796d1929c5261d77c93545bcce53619148faa0ae6d83328e919a51f841e48593a3c8bff4bae94f21a3c9667e87f34f692e01d9546007158833bec6a691f3d9dc8ffc593099a2a21de9f98e21c9f8f7e38b20da546d9755fb2593309c5ca3860a4137ff6198873d24dbedab709734af5b4acb6f4f9dff7d0710136b79390dc8f6cf167f3d82afbc7327170b2fbc26dd550829082893cfe78ee416f86c57779b8354dc1d8c22159ef19125b2899108e81e1b2bda6c3bb5691896e992962cd43bcc1e99bbae361e8d231450aaa782bacd69fbd440b57c2621886f24f0831344ff0155990977b7040000",
    ],
    [
      "ETag",
      "D8mtfHyUQ0W/ulKbLEwiwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff6d90d14fc23010c6ff97f3754b60213392f020644194200c7c308690aedc6661dbcdb64391f0bf7b2d26f2e04b7b77fd7d97efeb09f6aade421f32557cb4a88f3705da852b52346d690d5f0dd5062100b4a260f29099f98116f9137e7f8d7ab97ccef0f5b1180c9830f21d2b01fd13e40acbad81fedb096a5121cb361bed3732668f8d9b2c57e96436e6bea2adeb672fd3e9fd709ac039b85235fb3fc564b64ac649fa9f647d0e6047598a396aac253a138da61d4a3b71f98ca89a124343ad9668c0c3fea1d0d4364213853c09a3b01b479ddbb8d7b98ba32866ae2429aca29ad197255b034b5694297d723a8818d0bee4a0b93f0f3c4eb4429fc2355d6feefa7924a42aaf88c811ebdfcdc3a34533d7c42e0d3a839d8bd911b900968359dd620052f0673f287be9cf3ffe7553f6c9010000",
    ],
    [
      "ETag",
      "vbsPvoQfKezxC4fcObeYJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:01 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0516e82300000d0bbf45b8c206c767fa2130a4c810e447e9aa616b014c74a23e2b2bbcfec08effd00ca181f06a2bf5a7e056f60a2169cb379d8af5c5257c7e550ac0536d57e42b5b86d6c63a70a6547af717e2e4e6dbade06250a11239ce5f936adcc56eed78d8bbf6b2d75e7681534163dc871850f79b5a8657cdd76e2f310d20cdfcb7e671ae147e4c9739997514fbb2480ed39867a12411507f0bae81e62197b8ef0ec3a32fddb06eded4ca6d832e1689051ba99872abd43c782192e368d41db2839d5347d618eb831dfe7644cca06674dc43aec9377cb0633c0effd45f1815c9edca503e10cfcdb899e7afe0c7039555c81df3fcd7efb441a010000",
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
      "Tue, 11 May 2021 20:15:01 GMT",
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
      jobId: "grouparoo-job-3-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2b91f7b54080f094d0ca205d91206c21b49aa629729c9bd46d88d3d8a16515ff7dd74ee95a556a3fc5f63de79e731f7922773c8fc998443cbdafa03c7cb915113923a0688aaf4c5e1c865df5cdf61fedbffbd5e3fef1665ea4930922b86649ba2b32684851950ce478bb69a6a5a80a5a0ad1c0448d6ea3ddefd883be638ffa9d4e1f6912b264c9f33b24df2855c871ab75926ea642a419d082cb2613bb97f7d6bed32a4a710b4cc9d65bc5168ac8d6879a5f33c1a8e2229f6c37a85f492843d8519ea183ffc4383a7f9bb9c9e9ae992278cf1950c644952bed0a533091273cad4a93958c9f8871f9ea4036eed29d05161359b5cbc39ceee0cc8aa9a2a13a14605df8eb95b5f02ed6fe6a1a2cd65eb8995dbaab6973b65e6e57dec6babe747dd75234cac070ad89756e6e1e5e503f06a9786ed403fdac959ffbb3783f144d40690975301cd87dda1edaa32889062c19767b516243140da3418f76239b8d1c70e20828f28ca861d15ce4b6c33a43e82661771047a1133bc370d466bd903a117346edc4a67d20c733f2507205732e0b2179dd2172ed2f02370cfcad379b06ae2921a155a6e6b5315dc06b8f0a0b44d007351d75940b54d2ed5e7881eb4f67c1e2caad27bc8494b2c3e61e679cd04c02a26989cd5350ae448c0d23de74e5ce116c26f6e3149464fcfb89e89e6b17af5afe420f7080daae325fb209fc85f7ddd83921ae685619c8be3ee832129e69d3c73f08c415ad93909f5bd7ff45ea271f122821679f0f13c126f0d98f765a7b84e2e2a38a5478c7cd61526bb012ea0de2a6d86776db6e77866d62c0a57a1773babd53cf740e9d117690abe782eab5c73a6bb14abe803088c3f74caf8eff00f4785d6774040000",
    ],
    [
      "ETag",
      "csFy83tB0Rx0zvMxvxhDpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "10c7bf8b795c2ab5a5a42c120fed5646a5b4656978422832f125181c5fb09db0aaea77df39b00e8d49e125b93bff4eb9fbfb9f3d7b925ab088ddcbf2b901b33b29c1fdf44102b651ced2ab466d81050c1c2f89fc55ae9ee5a6d5e753d1261a9e42b8fae25e2e2e88b0f903549c457b564850c2b2e876cf34af80da72544da5b32e0b98dbd5beb84d93e5fa07e5150a9faf6fe278368f17ec101c1b05773cebf84fb4dd1d02f688f709146040e7e067a90d3e42ee967e4dcbab5ac1c0626372b0ac83bb83d26053738338a0cae074300ac7c36938197e0dc7e390388539771235a1375b1a8f39745c25f8424bb2d12911a68b69e1a27bb65497a25bc487cb751a4ebaf9de033ccfb1d12eeb050b69ac7b15ef0ff826c2bfa4e29f04e9a6a4ea834ad0024c1f25eb8c0b61c0da5e126dc6ebfa88cd379bf8a32a5a1894a21f6c650fa05c7b042ee3cdec7fd292bffe6af57d962e3e10d6916b8e48ba5c2db6e96c75edb9bb3723cc770eecb541329505efa7d170727e360d87af16fb86de76f49dc89906029673fa53aea46351c19585c36f627abb5b87030000",
    ],
    [
      "ETag",
      "xgMqiOvn87dvRnek6eH+tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:02 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "eb6e9b30147e15e4fdd9a45c20a19044aabab4651d524a5a425a55d3941873606e094e6c9329aaf2ee3b40d3cb2ab55224627f97f39d63fb913cf022212312f36c5382dc7db917316911d034c3dda0bf49123775ae93d9ede9919a9fdafd4d363e3e4606af548aaed639b495282503359acf3a9914e59a4a21da68d4b6db96d3335dc736874eafe7a04c419e4e78f180e23f5aafd5a8db3d94ee64426439d035571d2656cffbdd6dafbb96e21e9856ddb715bb5844753fac79920b463517c5f17c86f54b0572012bca734cf0224ce2ef6f9d3b9cae3a1992b79c01654c9485ae52a1051345cab352d6ae64f448ea94affe909937f1ce226399ebedd2a0ca582c24a832d72d63c993a79df583f1239c5e1a4b6c2de539a8a571fbd30b3da3e1f881310f026f16195f4fbe1917e1747e659cded558ab31c6240928cd8b3a4744e31caa0c4f93f2df1f4f25a09a2a68c0856b3ad41a98c3388d5d960efa47716a421c0f62f788f663930d6db0931828ea74e55eab68218a182c6be8baaec32cd366963db012cb8223334e5d0a76cf02c6904013b26f91bf926b38e76a2d146fe6456e433ff21651380fcec69157b791529cce7913ae6ae2754e8d4d22e983bef615ca0556aa86ef0791178ecf22ffc66bce7b021965bbd9064f3ca5b90264534957a0415e8a048746aea6333ff2a7c178828afa10af0e0c4546bf1e5f04d16e5d4f59d75f320ec3f11d6aa89474f71f86391c9becf7afcaddd0bcac2935bf5e35fedb062016f6f2b2ea91fdef3dfe5a04ef75e34eaee75e78479aad10529050b0cfcf1dc935f0d9eb3cbc15a4e26bc12a4ae31a2f1953550d26a1b96c7c55a76dd496d9b3b0d39a2cf53bacdfef1fa65a79548eb082423f35d4bc957a4e1554aa6712827847023fb840f41fade346a0a9040000",
    ],
    [
      "ETag",
      "N3qdd7f6QdSWB5sUB43qgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "30",
      "0c",
      "85",
      "ff",
      "8b776d11b4ac884a1c60828156b15140d33421148ae90a6ddd25e91042fcf73961da38ec92c4f6f7acf7728643566e21844d967ed6284f7729ea9979c4a8ea5c2bbe2a2a158203a845ca64673cf70759f136f2557a783a8ad1e4d5efcc7a3d2654f2818580f00cbb0cf3ad82f0fd0ca5289065ebb5b41b19d3a7ca7446d1737fc165415b534e9751d41f4443b83837a2eaf027984c17c3c761fc9f647571604f9b187728b14cd078a824ed31d113134f89a2cad15554cb041558d80e524975252491cb1db7edb602afd909dacd6ee0790173392542675432ba9cb335d0a4451ed391c381c780b44fceb9b3e79769df771b2dcfe63065cbdabb05baed861ffcce3d335ffd6c1e9c34aa1749ec52a131d8bc9a7d20134073302d6b742011fcd7e34c5febcb3734f0bd6ac8010000",
    ],
    [
      "ETag",
      "7HS3BimYF3sgkKwaFIW37Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:02 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "7282300000d0bb642d0e88fcba2b0c502c6d61b4226c32186208bf000902767af73a3dc27b3f204708730e05ab71075ec09aefac2ddabef7a60dc98dfa97a12a76fcb4bc8a8274ab6d37dfe9991e63ed46f7c83131f374af6def578f75e3d96c1ce63b7adc143066fda4a43c58a81486ee8a33653fd4816e95b5c4b9b82e22411e39988d5132f1964c4d749f8c34c8a0366701646179760b593116a252c36a6c4a7cbf552294baa52cd58306fb23aa3e2334133612b743d17048e1a0f61f95ac15de74194490406fae1e45998bd65856df8cd5f1f4c556b00178e9e98839a44faeaa59d606fcdba1587bfc0cb0713ee211fcfe01ef8f36fb1a010000",
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
      "Tue, 11 May 2021 20:15:02 GMT",
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
      jobId: "grouparoo-job-5-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6d0249099048d11a2574454bc806a4d5344dc81843dd124cb0e95455f9efbb364dd7aa52fb84ed7bce3de77ef084ee599da319ca5879e868fbf8e58e67e80c51894b7815dfeba62a9ad52abe1d1fdcc3c8a637cbabc57c0e08a65802ef9b8a0e04ef5a42c56c170fcb96770d6e391f40a2c1643072c696ebd8d6d4198f1da0095a156b56df03f956ca46cc4cf3243d2c392f2b8a1b268684ef5fdecd87b1d9b4fc8e1229ccb78a268808f343cdaf152758325ecf7731e87782b629dd63568183ffc43cbb789b79c8f07e5802f881118a09e15d2d952b4841785db0b26b7556347b42dae5ab038afdb5bf4c0cc2ab6e5fa735ded33323c712a7f2b1a1c665b4dd184178b98d368b24d88669bcbcf2378be172bbde6dc2d8b8b9f223df9038aba8e61a73e342df42b8807e4e8564b5564fd4b3527eee4ff07e288a00d282f6c1d4b51c3cf2ac6956642e29bcf349565834cbbccc9de0f3cc22539bda794631f0b4a866e19ad7963db26de238a9e77838b55de2a6de64324d3dcf1e8dc6e4dc9a78393a9ea1bf2d9374c544c305eb3b846ea220f1d324da85cb45e2eb120adc5572d51b5305bcf628a140007d50d35145190725d5ee204cfc68b14c826bbf9ff09a96983cc6079871812b41018d5b689ea4ed86e7d030142e36fe0ac07a623f4e418166bf9f90eab972f1aae52ff40406a8ec4afd45711205e1376de784b8c655a7210ffd419551b04a993efe0120ac689f04fddcf9d12fd43f45b4a02dadc9e7c304b00e7cf6a39dd61ea0b0f8a02224dc617388501aa4a5fd06315dec337b648d3ddb421adcca77b1a9e79e7aa672a88c744f6bf95c50bff650672fd68917100461f8a1eed5f11f10be999174040000",
    ],
    [
      "ETag",
      "sKnplfpDDSh2q7q14eWCHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d93514fdb3010c7bf8b794db5b494c022f1d06edd56296d599bee610845c6be0483637bb6135455fdee3b0756d0400a2fc9ddf977cadddfffecc983509ca4e456547f1ab0bb930afccf10acc135d23b7c19ad1c908880a7159217a7abdf86c56dd28aad182d1f169f9a5ff2f1f21209c7eea0a624dd935280e48ea4d77ba2680dd8c6b46c6a55745944fcce84e2265fcf97df31af350ff9729b659369362387e8d8c8a9a745c77fa0ede610917b7dbb86122c2806611663f53d303f0f6b3a5a1b0903a71bcbc0910eee0e2aab1b43add603ac0cce06c364149f27e3f873321a25c849cda8175a21badde078c46b4fe55a3fe29264788a84ed625cb8ec9e2dd605ef1609e17c9927e36ebed700654c37ca17bd6029acf34fe2fd039f45f89f94f48320de94907d50058a83eda3842928e7169ceb25b52ba831476cba5a656f5551dc6ac1fbc156f400d2b747e05bb69abc272dfaeb45abaf937cf686701e5d7344f2f962b6c9278babc0dd3c1b61baf3e0aeac465339087e1ac6e38bb3f3247eb2d8171d6c87df49bd6d20228ce29ff243789296543a38fc0501dac4e887030000",
    ],
    [
      "ETag",
      "83OZpc0v6viUi2NkM/uVlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:03 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553eb6e9b30147e15e4fdd9a424402e4022555dd6b28e29211d218daa694a8c31cc2d606a9b56519577df019aa65da5568a447cbecbb9d98fe89615319aa088a5771515bb4f373c421d44154e21faa017f68ff061ed247dfb6235cfbdf5fc67323d390106ab5512e76546bb9257825039592d7ba9e0558905e75d30ea5a5dd3ea1bb63534c656bf6f814cd22c99b1e216c47f952ae544d70fa97b29e7694671c9648ff0fc39aedff7f552f01b4a94d45f67d42189d4dfcd799a718215e3c5c96a09f92b49c586e6986550c15118475f5f3bf718ce7b2990ef19a198105e15aaae0a2c082f129656a271459347d454f9e20f5aba33f72cd4b68ccb0d2ecbad86a5b6d9082aab4c75201c3f45ca5bed7bb0986b5b682f6119955b6dfdc30d5cade578beb6f27d77196a9f4fbf6817c16275a97dbb6eb0ced11c2a8aa954ac68ea097194d1ba96a789796fd7540bb0c292b6e0c6362c6c3ac6384a229b24ce601425068d2227b247781019643ca4c338a21874aa766f54b8e0c5c8198e1c524bccd87286648c6d830c4678e424b6650de2786c9a38310768df410f82297ace64c9256be786d68117ba9b3058f967d3d06dda48304ce8bc2dae6ee2659d0a9a04d23b7ded6b9471c8542fc1f34337989e85de95dbee7d46534c76cb3bd87c823349818d05cea9a262ce63181aba5c2cbdd05bf8d319289a655e1e18124d7e3f1e05e1ae6ca6ac9a2f9a06c1f41a345808bcfb0f833aac21daef5fa4bbc259d5501a7e736afdef5b0099d0cbf1d447fb3f7bf87510dcefd61dfd5ab9c1356a43014da8a005f978ef406e808f5ee9e1cd00155e0d64910ace70c988ac731041dbcbc6f2a6da566d1a03c730504316ea0d36b60687a9d61eb523cd69a19e1a6adf4c33a71aaae4330940b823bee75f00fa0f5f9a33bab1040000",
    ],
    [
      "ETag",
      "w/n7HTwW8f27GUMmIWMJfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d",
      "4f",
      "c2",
      "40",
      "10",
      "fd2fe3b54da0c11a48388069b4da801438194296322d856da7ee6ed586f0df9d5d4ce4e06577e77d4cdedb339cca7a0f23d895c5478baabb2bd02cec2345dd4aa3f96aa8d6081ea011052b972fafabef43373ccaf9fd20558b2c8c639c8cc7acd0d9012b01a333e425cabd86d1fb196a5121dbb65be536b2cc748d45a6f379124d660c54b4b7c06c9d24936912c1c5bbb135a73f4b3c5b454f51fa9f6573f1e048bb14735458676853348a8e9899d816d4a26a24fa9a5a95a106277644a1a86d8422f219f143bf1f06bd8770d01b864110b24e52264c49354bd74b8e06868c90297d713d0858a0dc939be6eefc64d8a8165d0b3bf45db85b3a1752fff181e537bf7ba79d41fda688336ab4f17ad7a88f64e31bae65777b9009feebe7d25ce7cb0fe7ba1d1fc8010000",
    ],
    [
      "ETag",
      "SJKTxhy9jlO54RrQc6IIeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:04 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd0c97282300080e177c9591d40db21bd89e20202229be59261099b2c8184453a7df7327d80fff0fd3f2088224c2962cd0bd7e00bbc03016ea28d4a4409a5f1bd529542d2743256bd940eb3515bfc941f6a33bc8f09ca3d3b9a9d497bb6eb9b42cb96c1a40c23141a56c6b24adfd3efd789fabd46c46ace3881bfe2da12d12561a949b84ae8613e3609452ddcd96b3925ca799fc76a175b179e1ba03ff04aa1ef4cc7b51efc1679cccb1ccf9907b50d4a87f909c7a546a7f12d0e6757ce5479fb0125cd2e94397c1e45b737026622d236e4889a537c385f6f8e1b7d2a6005f044f20e53942fdc25822bf06f47ec4df03240c241873bf0fb076f8f09bf1a010000",
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
      "Tue, 11 May 2021 20:15:04 GMT",
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
      jobId: "grouparoo-job-7-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d4fdb3014fd2b91f738daa4a16d9a4ad5a84a18959a942529689ba6c8769ccc90c625764080fadf77ed50064282a7d8bee7dc73ee479ed00daf7334458497b72d6b1ebe5c0b828e1053b88457fb319c57bfaaafa3f3bc38bb50f7b91f5d25e56c0608ae59126f7715eb49d13694c9e926e9978d6877b811a207897a5e6f30761d6f3c74fcb1eb8e81265955ac787d03e4bf4aede4d4b60fd2fd5288b26278c7659f8aedcbbb7de7dabb465c33aaa4fd56d10611697fa8f9ad12142b2eead92601fd56b226635bcc2b70f09f989393b799fb1c6ffb2580ef38659852d1d64abb821454d4052fdbc66445d327645cbe3aa02458058bd4a2a26ab77556e32d3bb272ac70a61e76cc3a8bd7a1b58cced671384f97eb284b16e74138ef2fd6ab4d1825d6d579100796c2a462866bcdac13738be002fa39938ad7463dd5cf5af9b93fcbf743d1049096ac0b669e33c68389e3938278b4981c8f48e1304226c41be163e2507fc8863961187846d4b0702d6a3220ae3f193959e17aa36ce87b830c33dfcddce33c1f17d81b13df45fb2374df70c54eb9dc09c9bb0ea1ab789906591a6fa2c53c0d4c09056e2b75da19d305bcf6a8a040007d50d35e47b90025ddee659406f17c912e2f836ec22b5662fa90dcc28c0b5c490668dc40f3146b429143c350340f8353009b895d1c82124d7f3f21dd73ede255cb5fe8290c50db55e68b92345e46df8d9d03e21257ad81dc75075d46c12b6d7aff0780b0a25d12f46313c43f51f714b38235aca69f0f13c026f0d98f76587b80c2e2838a547087cda1526bd086751bc44db1cfec81331c392364c08d7a17f306cea1673a87cec8b6ac56cf05756b0f757662ad7c014110861f995eedff0138164f5874040000",
    ],
    [
      "ETag",
      "/zMAlZl+5HdfFPtwd9NWSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd6edb300c85df45bb7580244b9dcd402f92366d03b8f9752e86a2305489f694c9a627c9de8220ef5ecaedb2621de0ded824f511268f8e8fec872a258bd893ca7fd6600e9f72706b1f6cc0d6da597a55585a600103c773229b35d7d7cdeaee76fdfbea1b663683fd6e9d5f5e1261c57728388b8e2c53a0a565d1c39195bc006a13a8eba24cdb2c60ee50f9e236d9cc17b79417287dbed8c5f1641acfd82938374aee78daf21f687b3c056c8f4f1bc8c04029c0cf5219dc837073bfa6e545a5a167b136022c6be1f620375857dc20f6a8d21bf706e1b03f0e47fdafe1701812a75170a7b02474b7a5f19843c7f5067fd1926cf09908d3c6b470d63e1baa2bd92ee2c3f9220947ed7c6f012e04d6a54b3bc14c19eb5ec4fb03be8af02fa9f90741ba29a5bba01c4a09a68b5255caa534606d278936e55575c6a6cb65fc5e95521a54b21b6c5407a05d73066ee2e5e47fd292bffe6a753d4966ef08ebc835672499dfcfb6c9e47ee5b9c757234c0f0eecca2099ca82f7d3a03ffa72310efb2f16bb426f3bfa4ee44c0d01139cfe943be55894716de1f40c1b89726087030000",
    ],
    [
      "ETag",
      "vQalDvPHGQxCYofsfejUQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:05 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8553eb6eda30147e95c8fbb3695c9200e122551da5698744a184d0164d1338e624751be2d4765aa18a77df4902bdac522b2105fbbb9cef1cdbcfe49e276bd223018f1e3290db6f77222015029a46b87bf6f3642ad96072e3df2c60eaf9f2761ab1a7a32364f05ca5e8268da1aa442619a8de7c568ba4c8522a85a8a251b553b51cdb6c3b4db3ebd8b68332057138e2c93d8a6fb54e55af5e3f94ae45424431d094ab1a139b97fdfaa35d4fa5b803a655fd7dc53a1651f54f6b1ec78251cd4572349f61fd4c815cc286f21813bc0ad7c1aff7ce354e37b508c98f9c01654c6489ce53a1051349c8a34c16aea4f74c8a946ffe90993b7207beb15a530d2b832a63b994a0b258578c155fef77d27be3cc9b5c182bec2de431a89571fddbf55ca3e40cc7c67c3c7667bef1fdf88771ee4de697c6c9a2c02a7b67ccb206a5795224f16910439e623fabe1c703ca0554530525b86c9b0eb53a66370883360b3b8d56109a10049da0dda28dc064dd2634d70150d4e9dcbd50d144240ddb6a77ed266d9aad36ebda6d302dea045dca1c1aaeed4ec36e598d308090ec2ae449720da75ca542f17262e4da1bfaeed2f7e6e341df778b36428ae3392dc3e54dbccda9b149247dd2d72e47b9c04af9f88763dff5fa037f78e596273e8288b2edec01cf3ca4b10264534937a0415e88350e8d5c4e66437f3819f747a8288ef1f2c050a4f7e7f955e06fd362cabaf892bee7f517a8a152d2ed7f18e6709a64b77b53ee8ac6594129f8c5aaf47f2c0162612faf2b9becfeeef0572178b34b77329dbbde82945b1e842021615f9f3b920be0abf779782d48c5f7825594c6355e32a6f21a4c4279d9f8a6485baa2db3e5381629c8527fc0ba4dfb30d5dc2377840d247adf50f95a8a39e550a65e4808e21d190fc7e788fe035e3e7105ab040000",
    ],
    [
      "ETag",
      "F+BQrcCOXTXYeQRTrhQgcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2301485ffcbf5758b5d35534978009d0a02d101f2600829e36e16b675b69d6621fc776f87511f7869ef3dfd6e7b4ef7b093e5063ab096d9478dba39cbd0beb8224653e7d6d056a9d22078805664445ebc4e65848b6120c3749c9c3f0d17cdf8bed7ed126192772c0474f6904acc37063a6f7b28458134b65ae9f646c26c5339e5ae378ba82bd4c67593f968d4eb8f223878ff66aadd1f3f98cca287283e35b23c78b055eb1853d45826e82c545a6d31b10397ce88a2cad137aad6091a68e1f620d3aaae8456ca27c5bff68390b3abf092dd849c87c4e52a1156aa92d0f994ac815556e4b1faa26cc009d06d4931d376fd7432e3cc67dc67419bc549416bf124c47f21eea0e5cf13fdc6a279d68aec1a744ed9d1f5ad72492c25b4ba460f12417ffe28edb13f7c033b1d4f8cd0010000",
    ],
    [
      "ETag",
      "3VSiEeWJ1i6fMc/KJWyMFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:06 GMT",
      "Server",
      "ESF",
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
      "d0",
      "cb7282301400d07fc95a1d1e8ad2658ad254072d2a6236199a5c303c044250b1d37fafd34f38e707259c43d7315d1770456f68482c77c227eb668159968635b74ccdb6993726614e77443ce6589deeee7bfc251f2aee53d73b2e1ab1bc4d95e8481256ed5cb28194255f428005a743ce239606b771474fc74d16c02aceb7c68e447615e0cadf3ccffb789d9578b1d29b621bf94f2eebe452ca6f2f913d85c28b3b573bbea1da7d7fc795080fcc3e3a7df931fd0ce8cc74ae4fd3a2564df717c16dd23a7cbd0411c9e69c46da08799afb2d85b1361d028753c4d108c1a3910a3a265f5c7be6ba23f46f677a68e015802151a0d0ef1fa2070ad31a010000",
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
      "Tue, 11 May 2021 20:15:06 GMT",
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
      jobId: "grouparoo-job-9-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536d6fda3010fe2b91f7b540780b0d125a11a46b54085b0874d334458e73c94c434c63a75357f1df77764ad7aa52fb29e7bbe7b9e7def2486e7999923149787e5743f5f0692712724640d11cbddb45703d5ffddd8e76ddfa7ab70db7df77fd7e3e9920826b96a4fb43012d29ea8a811c6fd6edbc12f5815642b43051cb6d759d9e3d7206b6ebf47a0ed22414d98297b748feadd4418e3b9d93743b17222f801eb86c33b17ff677ee7b9d432576c094ecbc56eca088ecbcabf9b9108c2a2ecac9668dfab5842a863de50556f09f982617af33b739ddb77304df7306943151974a5785299828339ed795c94ac68fc454f9c2206b6fe1cd228b89a2de977149f77066a554d1583d1cc0ba0c574bcb0f2e57e1721af9ab205ecfaebce5b43d5b2d36cb606ddd5c79a167299a1460b8d6c4ba30af001fa89f8254bc34ea91766be5a7f9f86f97a209282da109c623dba1dd73db4db264c4b2f3fe30c96c4892f36434a4fdc466ee00066902147946d4b06829ca9eebda5dd7b16336e8a7f1a097b1d8a56875d10930183a6890e319f9537105732e0f42f26642e426f4232f8ec24d309b469e6921a375a1e64d61ba8197352a6c1041eff474d4512e50498fdb0f222f9cce227feb351b5e404ed9c3fa0e779cd14202a26985c353502d458a0323c174e9cd116c36f6f5149464fcf391e899eb2a5e8cfc991ee10275b9ca7cc93a0afde08b29e784d8d2a23690fbc6d06d64bcd0451f7f21104fb44942be6dbcf007695c21645041c93e5e26824de0a31fed74f608c5c34715a9f08d97c3a4d660153417c44db34fecaeed0c9bdf54d14abd898d1cfb34339d4367843d94eaa9a1e6ecb1cf46ac96cf200ce2f20333abe33f62c8e59a74040000",
    ],
    [
      "ETag",
      "VLNKDOzV7j1uKjVRVXj33g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d936f6f9b3010c6bf8bf77244227f4a57a4be48b66c43a24946a8d66eaa90631fcc9db1a96db24651be7bcfb44ba776127d0377e7df89bbc70f7bf25b284e62b211d55d0b66f7ae02f7cd0719d8563a8baf462b0b2420e0688524cc36d7e5d5bd82efefb3e5f8477895aceec6d5f9391296fd829a92784f4a01925b12ffdc13456bc036a6655baba2cb02e2768d2faef32c597cc1bcd6dce78bcb349dced2393904c7464e1d2d3afe0d6d378780dcea4d062518500cfc2c8dd1b7c05ce2d7b4b46e240cac6e0d034b3ab83ba88c6e1b6ab41e606570361846a3f0349a8467d16814212735a34e6885e8e51ac7234e3b2a33fd079724c33112a68b71e1b27b6eb12e78b7880f93451e4dbaf9fe052863ba55aee8054b61ac7b14ef2ff824c24b52d23782785342f64115280ea68f124d413937606d2fa96d419be688cd96cbf4b52a8a1b2d783fb8153d8074db23f0395d4eff272dfaeb59ab4fd37cfe8ab00e5d7344f2e462becea7172bcfdd3c1961b673605746a3a92c783f0dc3c98793d3287cb4d847ed6d87df899d6921208ce29ff255381297545a383c00ef557c1187030000",
    ],
    [
      "ETag",
      "eBbYfXxneW+RO3Z0XIPq3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:07 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "40",
      "10",
      "fc",
      "2b",
      "e8",
      "faa5956c03c6c60f294a5d87a6480e4e314e1455957dc0422fc61cb93b9c5a91ff7b1788f368a44442026e676667776f1fc886e531199390a5772588fda75b1e92160145533cbd758bd9df3d7776b44cf2707abfdfcc997e7f72820856b124dd1619b4252f450472bc5c7452c1cb820acedb28d4368db669778d81dd334676b76b234f4296cc58be41f61fa50a39d6f563ee4eca799a012d98ec447cfb74aeefba7a21f82d444aeaaf53ea9845eaef273dcd784415e3f9c97281064a0962055bca32b4f0cc8cc3afafa53b8c6e3b2982772c021a45bccc55650b25229e272c2d45ad4ac60fa4b6f9e2832c9c99330db4b554a8b9d6a8d4562b01b2cc544b5bb3f8f1a4d868dffdf985b6c6ea1296815c6bd73f1cdfd11a8ceb694bcf731681f6f9f48b76eecf9797dab79b3ad63a4aa39b18a46279ed25a06106958fc776b96f875411a8a2129ae06a60d8d41c1aa33009075132b4fa616240180ec3419f5aa1118d7ad08b43a0c853957acda239cf236a1930b26dcb34a9655adda105b61df5c11cc5038863dbee27100ecd1e39b4c8bd600ace982cb8644dcfc8b5ef06ce2af097de741238751909c5fe9c35e6aa225efa54582482dea9eb504519c74cd5005c2f70fcc93470af9c66e6334869b45fdce1d4139a49403415740b0ac4058fb169e472be700377ee4d66c8a8077979444832fef5f04c08f645dd6555bfc9c4f72737c8a142d0fd7f31f461630b0e2fd25dd1acac2135befe6bf4774d809858cbf35f971c7e1ff06911bcdc8d3af9b974fc1bd21cf99080803cfa78ee08ae031feee87161108b2b8369f0ae2986b72c925592484073dbd8b6b6db",
      "b04d63d0ebd71baea8506f62b63538b6b5d2a814610bb97aaca85998ba5155a8944f200ce225f15cef1ca3ff00462c81dcb0040000",
    ],
    [
      "ETag",
      "jIpLxyoEvaufnbCwykOi/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff6d905d4fc2301885ffcbeb259bd9169842c2059029c4f1e18078610829e3650eb675b41d6612febb6f8b89247ad38fd3e7b4e7f40c87b4d84207366972ac50d47709aa57bd88505699923495bc900816a06209918d7d3d7c5b66a7d9f44b3d4d072f8df08869afdb2542c61f9833e89c619762b695d0793f43c17224db7a2dcc8d84a9bad4ca62340ee68bde784652ceb75a9a2cc3b0d70f03b85837c6f2f06b1a4d16c17310fd67595d2cd8f34d843b1458c4a8739482ef3156235d51b2bcccd096bc12314a30b0394804af4a2638b749b15dc7767dcf79f09b4edbf73c9fc08cc74ca5bc207639a76ca0b86259c43fa921780408b3a4b23b339e4876ef5b8f4eabd576dbcda06dfa18d5c4fcc3f94d226f394f73ab9f87fab54239139c524bd4819d6bf801d785141555a2420b6246ff3f4cd5757ff9064e5c070adc010000",
    ],
    [
      "ETag",
      "+jyHWUlvPOztFOCK+LqeiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:07 GMT",
      "Server",
      "ESF",
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
      "d0",
      "db",
      "72",
      "43",
      "40",
      "00",
      "00",
      "d07fd9e7c86c5d8abe916d6a6889d0b8bcec2c96281beb56a4d37f6fa69f70ce0f20794ec7114f5d436fe0056c44d4f7f9dee19a89ab3218965782dcee3ed59704cb7a51c9335a784150d7329e5a71119fbe70596ee2da49585c4d26f6ee98f3ac810964c901b6aa1186d46e4f7c5bc93c2268857ed4ddfc9ec5bea57e3fb137a13d4eaad736193144a6088a7975b5205624786cbd0f2f8e1a9a6995ddaff3b57857c2a50c10acd2292f0fb60beb79f1cad4968d8bb3e461241808d59fdb6886674bd0ee1133ce34d6b1c2d6e1596f32c9110cb00374e5f540475c3fb892a2eb3bf06fc7d3c6e923c0a464a003f8fd036db2cbbc1a010000",
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
      "Tue, 11 May 2021 20:15:08 GMT",
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
      jobId: "grouparoo-job-11-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d4fdb3014fd2b91f74adba4346da8548daa84d1a94d479282d834458e7b9319d238c44e1143fdefbb76280321c1536cdf73ee39f7234fe48e971b322629cfef1ba81fbfdc8a941c115034c7575f3491fabbba747d3bfece647353afef7e3e4c2688e09a25e9b62aa02345533390e375d4cd6bd154b416a283893a8ed371867d7b341cd827c37e7f883c0945b6e0e51db2ff2855c971af77d0eee642e405d08acb2e13db97f7deaedfab6a710b4cc9de5bc91eaac8dec7a25f0bc1a8e2a29cac2334d048a813d8525ea085ffcc4d7afa367597d36d3747f08e33a08c89a654da16a660a2cc78ded4262b193f1163f3d58144fec29fc5161345b32d93926ee1c8da504513f55881751eae96d63c385f85cb693c5f054934bbf097d3ee6cb5582f83c8babef043df52342dc070ad89756a6e015e507f0352f1d2a8c7fa592b3f3768fe7e2c9a80d212da6032b287d4f1ec93344b472cf38edd34b3214dbd74e4d2e3d4662703186c52a0c833a286454b5142dff5bcd1c84d0619739201656e82b034a1de66446d175267e092fd1179a8b982332e2b2179db21721dce633f89c375309bc6be2921a34da1ce5a63ba80d71e151688a00f6adaeb2817a8a4db3d0f623f9ccee2f995df4e780139658fd13dce38a3850444d31a9ba7a05e8a0d368c04d3a57f866033b11f87a024e35f4f44f75cbb78d5f2177a8c03d47695f992280ee7c13763e780b8a2456320bbf6a0cbc878a14def7f231077b44d422ed77e7843daa71032a8a1649f0f13c126f0e9af76d87bc4e2e6a38c5478c7d561528bb01ada15e2a6da67b6637b4edf21065cab77b1637b70689acea133c2164af55c51bbf758682bd6c817100671fa8169d6fe1f9a5a32b677040000",
    ],
    [
      "ETag",
      "EouStzOQ5E0TJcsuYrUkZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93616f9b301086ff8bfb95a8214de986d40fb0665b241a3a42a44953855cfba0ee8ccd6c93368af2df77a65d36ad95e817b83b3f27ee5ebfecc94fa13889c99d687ef56076270db86f3e28c0f6d2597c755a59200101471b24bfb790e6e2f1e9ea5414db79b4b94f4ff328b9bc44c2b27b682989f7a41620b925f18f3d51b4056c635af6adaa862c206ed7f9e2ba2c96ab2f98b79afb7cb5c9b224cd16e4101c1b3975b41af877b4dd1e02f2a0ef0aa8c18062e067e98c7e00e6967e4d4bdb4ec2c4eade30b064808783c6e8bea346eb095626613809a3d9f4229a4f3f46b35984a0d48c3aa115b29b35ce479c765416fa11b724e11912668871e37a786eb12ef8b0890f97ab329a0f03fe0b50c674af5c350ad6c258f7acde1ff04585ff4949df09e25509390635a03898314a7415e5dc80b5a3a4b615edba2396e679f65a15c58d167c1cdc8a1140baed11f89ce5c95bd2a2c1fe6a7595948b578475689b23522eaf17eb32b9bef1dced8b11d29d037b6334baca823754389d7f38bf88a6cf1efba4bdeff03bb1333d048451fc55be0a47e29a4a0b87dfd1d09fc188030000",
    ],
    [
      "ETag",
      "XmeBOiwxD/iRv46UhB/O6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:08 GMT",
      "Server",
      "ESF",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5722ef974da290f0113ea4aaa534eb22d1d086d0ae9a26701c27338438b51d3a56f1bfefe2405b3a69952291f8bd77f7ee7cc7335ab12c420314b2e4b1a062fb69c943544354e1044eff38c1e62afa7eb11adf8f3c3cce4473f2b4bc3d3d05062b5512aff3949e485e0842e56036ad27821739169c9f40a013ab7962d94db36bb7cdbedd6cdaa093348dc72c5b81fa9752b91c341a87dcf584f324a53867b24ef8fae5bcb1693672c1979428d9384ed9802cb2f1ffa467292758319e9dcea660a09054cce91ab3142cbc2aa3f0fc38749de1753d01f286118a09e145a64a5b1082f02c6649217454347846dae69b173475c6ce283016311352cd33bca60b034b633e175416a9aa190bed607f98af8caffee4da584095314ba95c18f7df1cdf315e68ae67cc3ccf9906c6e7b32fc6953f99dd18170f07b87694080c46542a96697b010e535a5adb77d0fdf7de4a015658d20a9c774d1b5b3db31fc66197c4bd56278c4d1a86bdb0dbc1add024fd366d4721c5a0536574adc219cf3a36b67b2d62e1b61902b385232b8c9abd4ecf24b16d5a7d624531b13a31dad5d093608a5e329973c9aa36a27bdf0d9c79e0cfbcd13070741931866e5d56e6ca22defa54502490fe53d7ae4419874ce59db85ee0f8c351e0de39d5188c6982c976fa088310e354526063011d54545cf3089a866e2653377027de700c0a7db737078644831fcfaf82609beb2e2bfd8b86be3f7c000d16026fdf61d3c077bd2bb4dbbdc97787d34273b4407f5509361580e812069133699ed3dfba483d8abbda2b03865451eb18feb983a786602b2a0fe876e6f80fa83af2694c05cdc8c7d301640d7cb8dc874d032eec1aa4910abe6116892c931041ab",
      "9964ebd2cc5e6d99bd7e5bff35282cd47bac6fd9ed43f3cb186544baa699da57546d9aee660915f28504208c9257f5fa2f0d6ad5aee9040000",
    ],
    [
      "ETag",
      "zETvGdXBkLWCNaLnr2OwjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "6b",
      "c2",
      "301485ff4bf6da8eb68c8e09c2a61327886c757d902112d3db1a6d7b6392ea44fcefbb897b903ded25b9f7e69ce47ce4cc76b22d588fad65b5ef409fee2ab01faec8c074b535b4296c0db08081e5152987e6a8069b2a81625cbcee55be28f33caefa7d5218b18186b3de999512eac2b0ded799b5bc01b2ad56dadf48327b526e32ffcc26b331f50d16ae9fe5d3e9cb603a6297e0c6a576ff712c2f01dbe23a831234b4025c06a5710bc24e1c9ee18daa2134d869018679b13fa834768a6bc49026619c84719a448fe943f49426494ac21a05b7125bd2e6738ac62c5a5e6778243a969040fb92404bbf1e683cd2123c856b600bfa80d244cff0ed53dc0b6c7ce25bcb900b59dfb804700bf15fcbf2f7f9c1c98279d7482c061c4674451aa2535bc2b7ba8380094e3ff226edb5bffc0083b89959ee010000",
    ],
    [
      "ETag",
      "CswpBhg2edGdDqpUYfUU1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:09 GMT",
      "Server",
      "ESF",
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
      "d0",
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0bbf4db9a4c41cbfe04a113266a0083fe34500bb420d616515876f7991de1bd1f9051cab426ddad662df8044336b3a6741a486493f222cedbc28a6eea540f97bbde574f4c0752bf608fc2650e6f6afc9e1be87af5379dbd13382d3cd74d621cf8c7e5560f67e5e1dce4bd498b5de8a04894bcee67cd636144fb1592575f8446828c95dcac83c3d1b817e57a8e70203dd37d8c6dc85f3d8c6de89dddafcecb4418690d9d5c8db81af35cc02c5da5794f635356fca3797a4834bc5d8709ded64d2277088e894f465f1f4ee290b68eb5706c4a666002d84b72c534e16feedcb4ac09f8b7936e90ec1d60b34c31057eff002274eb981a010000",
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
      "Tue, 11 May 2021 20:15:09 GMT",
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
      jobId: "grouparoo-job-13-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b4fdb3014fd2b91f795b649e95baa4657c288d6a65b9a82d83445b67b9319d238c40e1b43fdefbb7628834d824fb17dcfb9e7dc471ec88d28b6644298c86e6ba8eedf5d4b468e08689ae12bf4e7579b809ef7065f67c5ef0fb7f0e95756cea6534408c3527457e6d052b2ae38a8c966ddce2a5997b492b285895ade71cb1b74dde1a0e78e07ddee00790af274218a1b64ffd0ba54934ee7a0ddcea4cc72a0a5506d2e774fef9dbb6ea7ace43570ad3a2f253ba8a23aaf8bbecf25a75ac862ba59a3815a4195c08e8a1c2dfc656ed9c9cbd46d4177ed0cc1778203e55cd68536b6300597452ab2bab259c9e481589bcf0e64ed2ffc79ec7099d7bb2229e80e8e9c2dd534d1f7253867d16ae904e1d92a5acee2601526ebf9b9bf9cb5e7abc56619ae9dcb733ff21d4d590e96eb4c9d137b0bf182fa5b505a14563d36cf46f9b141c1ff6331049456d00493a13ba0dec81db3940d793a3aeeb3d405c6466cd8a7c7cce5e31ef4b60c28f2aca865d142167d2f75bd111b27fd63be4d7a43ce12067d37197bc3c128ed77e9d805b23f223f2ba1e154a8522ad174885c4641ec2771b409e7b3d8b725a4b4cef56963cc14f0dca3c60211f44a4d7b131512954cbb8330f6a3d93c0e2efc66c20bc828bf5fdfe28c539a2b4034adb0791aaaa5dc62c348385bfaa708b613fb7c082a32f9f6404ccf8d8b672d7fa2c738406357db2f59c751107eb4760e880b9ad71672d71c4c19a9c88de9fd7704e28e3649c8978d1f5d91e62982142a28f8dbc344b00dbcf9ab1df61eb1b8f928a334de7175b83222bc82668584adf691edb9e35177482cb8d2ffc43cb7dbf30e4d33394c46d841a11f2b6af61e0b6dc46af504c2204e3fb4cddaff0166c49df177040000",
    ],
    [
      "ETag",
      "e5CYUIaH46ZAnzBqeKxgpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93614fdb301086ff8bf9b8546b4b49d7487c6847619542cbd220a44d2872ed4b3073729eed945555fffb2e8195694c0a5f92bbf373caddeb377bf6435592456ca38a9f35d8dd4901fe6b1324e06aed1dbd0c560e58c0c0f382c8876fa9b9c3c9f8ec4392f8c9c75f49ecece6e9fc9c08271ea0e42cdab35c81968e45dff7ace225509b405d9755d66601f33bd314d769b2585e515ea26cf2e56d1c4f67f19c1d8263a3e49e672dff8eb6fb43c01e7193400e162a01cd2cc6e22308bf68d674bc341a7a0e6b2bc0b1166e0f0a8bb5e116b14795dee0b4370887fd7138ea4fc2e1302450a3e05e6145eced9ae6631e3dd7093ed1966c704a846d63da386f9f5baa2bd96ed2848b651a8eda01ff06b81058573eeb0473659d7f56ef0ff8a2c2bfa4e6ef04e9aa94ee820aa824d82e4a998c4b69c1b94e125dc68d3962b3d52a7eab4a252d2ad90d6e5507a0fdf6085cc6abe9ffa42583bd6a75314de76f08e7c93647245d5ccfd7e9f4faa6e1ee5f8c30db79703716c9550e1a430dfaa34f67e3b0ffecb1cfd8f88ebe13795b43c004a75fe58bf22ccab97670f80d0de627da88030000",
    ],
    [
      "ETag",
      "hZTpWo975+RRt9/xRLsrbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:11 GMT",
      "Server",
      "ESF",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6fda4010fc2bd6f54b2b017ef0468a124adcd61181c498445155c1d95ed30bc6e7dc9d6951c47feffa0c7934522259b27d3bb333bbb7fb48d62c8bc980846cf55080d87dbae721a911507485a7de8508ae5ba3f9f016ec87d85dd38b9ec9ae4f4e10c14a96a49b3c85bae48588400ee6b3c64af022a782f33a26aadbadbadd71ac6ea765f53b8ed3419e843419b36c8decdf4ae572609a47edc68af3550a3467b211f1cdd3b9b975cc5cf07b8894345f4b9aa822cdf7454f531e51c57876329fa181428258c086b2142d3c33e3f0ec75ea06a39bc60ac15b16018d225e64aab48529229e256c55089d950c1e89b6f9e283ccdcb13b0a8c65aab64b834a63b110208b54d58ca5963e1ce66be39b3fbd3496585ec252904be3f687ebbbc613cc9b18f3c9c49d05c6e7d32fc6777f3abf32bede1dc3b54a012dc52015cbb4a180862994660e3df3dede5449a08a4aa8828baed5a176cfea8749d88d925eb31d261684612fecb66933b4a27e0b5a71081479aaccae5934e359b7d94fc28e1d5ad08dfb612b892da0e0244eb3dde93b1de887916d35e33e907d8dfc114cc139933997ac6a1cb9f5bdc05d04fe7c321a06ae2e23a1d8a6f3ca5c59c44b9f0a8b44d03b75edcb28e3a854de8237095c7f380abc1bb7baf831ac68b49b3de0d527349580682ae80614884b1e63d3c8d574e605de74321c2343dfe6d51121c9e0e7e33321d8e5bacb4abfc9d0f78777c8a142d0dd7fb159e07b93ef64bf7fa17743d342633441ff5502db2a40e01e478f33699dc15f5da41ebe7ded198163a9c07e1dfeb5c7a746700f2a0fe47aeefa77a43af221010159f4f1742058073e5ce7e36e2116b70b65a4c27f9cc548962291806a26d9a6347360dbb6633b6da2c142bd8935dbdd63f3cb1c6546d840a60e1555bba5bb59860af904c2208ed2a4eaf53fde374263db040000",
    ],
    [
      "ETag",
      "IJrTQ4CUAWe1qdEkaJ8/iQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4fc2301486ff4bbd1d641b38331212c14fe282323ebc308494723607dbce6c3b8410febba7c52831deb4e79cbe6ffb3ee9816db272c53a6c99a51f35c8fd450a7a648a18549d6b455b85a502e630d03c25e56c17de8ed2a7c1386955bc954f66b1788dd36e97144abc43c159e7c0920cf295629db7032b7901645b2ca4bd91647a5f99c97df4dc9b505be0cab4c36914f5fad11d3b3a67a66af36b184fe2c1f0e13fc7fce8b0352e6348404229c044a824ae41e881a153bca8726828aca500c5acd81ea412eb8a4bc4064d1a5ebbe105be7b15b4dd30f0fd8084390aae332c493b1d5334a651f33cc64f82633e09a42d8933b1ebd68c2fc3a6e75b0ed3c21ae41633e55ec3cee6680a2c6ce67353d86eb6821f8f00aec1fb6b987f3fdfdf6b502f12894581c1704f483768d49af0b5acc16182d3873c66fad41fbf00b423e4aaed010000",
    ],
    [
      "ETag",
      "Vx9DQgKISf3pa3lTVRcWRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:12 GMT",
      "Server",
      "ESF",
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
      "d0",
      "516e82300000d0bbf45b0dc23aecfe6408ae4a554018fc34084d032894d639cab2bbcfec08effd80a22c9952f4deb7ac036f4017265a948b9d583994b3981b663cd5733c355a62167c8a0c85a7fd709b9fad0153a72b036de32581f766ffd8935c25d0ffea6e26de565762b867af3ab61b99dcbc219938d26da6c66a3a72e2367564b97cece3743b6081581f65bc301e626d9c641b607a60794c1e0862490ca86bc127b77b31aeafab885cbc4315d130e45e64fbdbe63b4d539dc2a0433989f18ead97fc234717df668e22639149684e96b25c3bf4fbcd3b9801368a5a3245eb27d78208cdc0bf9ddeb560cf0087159249f0fb074c5674431a010000",
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
      "Tue, 11 May 2021 20:15:12 GMT",
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
      jobId: "grouparoo-job-15-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b4fdb3014fd2b91f795b649dfad548daa84d1a949214d61d334458e73130c495c6287a943fdefbb7628834d824fb17dcfb9e7dc479ec83d2f13322531cf1e6aa8f69fee444c4e08289ae1ebef87bbee5c7dbb5cecbd8bccc96febaf5745ff6a364304d72c498b5d0e2d29ea8a819c6e37edac12f58e5642b43051cb19b49c61d71e0dfbf664d8ed0e9127214f57bcbc47f6ad523b39ed748edaed4c882c07bae3b2cd44f1f2de79ec767695b803a664e7ad64075564e77dd1cfb960547151ceb61b34504ba8222828cfd1c25f66129fbe4ddde6b46867087ee40c2863a22e95b685299828539ed595c94aa64fc4d87c75201b77e52e428b89bc2ecaa8a4059c5809553452fb1d58e7c1dab396fef93af0e6e172ed479bc585ebcddb8bf56aebf91bebe6c20d5c4bd13807c3b566d6a9b9f97841fd04a4e2a5510ff5b3567e6ed0f2ffb168024a4b6882d1c81e52676c4fe2341eb174dc1bc4a90d713c8e4703da8b6d36e9433f898122cf881a162d4599f4d36432e9f5a2389eb0a84f87349ad874100d18d86c688f122771c8e184fcaab882332e7742f2a643e42658866e14065b7f310f5d53424aeb5c9d35c67401af3d2a2c1041efd474d0512e5049b77be9876e305f84cb6bb799f00a32caf69b079c714a730988a615364f41e589041b46fcb9e79e21d84cecf2189464fae389e89e6b17af5afe420f7180daae325fb20983a5ffc5d83922ae695e1bc86373d065a43cd7a60f3f11883bda2421575b37f84e9aa70052a8a0641f0f13c126f0e1af76dc7bc4e2e6a38c5478c7d561528bb00a9a15e2a6da67b6e374c7dd3131e04afd1bebd9f6e8d8349d436784024af55c51b3f758682356cb17100671fabe69d6e10f64bbf3fc77040000",
    ],
    [
      "ETag",
      "zqj2AtXPCyMHg1lhuJQm4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6fd3301086ff8bf99a8ab474298bb40f2904a8c8dad166d2109a22d7be641e8e2fd84ea752f5bf73c946410c29fb92dc9d9f53ee5ebf39b0efca4816b3adaa7eb460f7af2af05fba600daed5ded1ab41e380050c3caf889cd55f7f9e9b3cbb29d36d58f3cfaffddd4d9a5c5c10e1c41dd49cc507562ad0d2b1f8db81195e03b509d46d6d8a3e0b98df375d7193af17cb8f94d728bb7c799d65c93c4bd93138354aee79d1f32f68bb3d06ec1eb76b28c18211d0cdd258bc07e117dd9a8ed78d8691c3d60a70ac87fb83ca62db708b38a2ca687c361a479370164dc3f368328908d428b8576888bdded07ccca3e77a8d0fb4251bbf21c2f6316d5cf6cf1dd595ec37e9c2c5328fa6fd807f035c086c8d2f06c15259e71fd5fb0d3ea9f02fa9f90b41ba2aa587a00a8c043b44a9a6e0525a706e904457f0a63961f3d52a7bae8a9116951c06776a00d07e77023e64abe47fd292c1fe68f53ec9d36784f3649b13922f2ed34d9e5c5e75dced9311e67b0feeca22b9ca4167a871387d7b368bc2478fbdc3ce77f49dd8db16022638fd2a9f946771c9b583e32f87ed824188030000",
    ],
    [
      "ETag",
      "7mYz9nTLXfEb0maK/thXEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:13 GMT",
      "Server",
      "ESF",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8554fd4fa34010fd57c8de2f77492dd00f4a9b18ad153d72952aa57ee47269173a70ab944576f1ae31fddf6f585aab5ea20949cbce7bf3decccef04c1e58b6240312b2e4b18462fde59e87a44140d2044fedebf4ece4d6b82d27ecfb0f3d8baf6eef47597278880856b1045de5291c085e161188c16cda4c0a5ee6b4e0fc00131d98163e2da367758cbed56a59c81390c663963d20fbb794b918e8fa4ebb99709ea44073269a115fbd9ceb4f2d3d2ff83d4452e86f25755411fac7a247298fa8643c3b9c4dd14029a098c38ab2142dec99cbf0f86dea26a3ab6682e02716018d225e66b2b28529229ec52c290b95950c9e89b2f9ea0f993a636714680bc6c59ce6f942a3429bcf0b10652a1bda42c96f0ff307edcc9f5c680b2c316629888576f3ddf11ded05e67adaccf39c69a07d3dfaa69dfb93d9a57672b70b37f62a686d0942b24c190b689842656adb3bf7ff1bab085452017570de332c6ada463f8cc35e14dbed6e181b108676d8ebd2766844fd0e74962150e4c92abb62d10cdb11d916984637b497b115760d73d9b642a343bbcb6ebf6b773b9669763a51df269b06f9533009a74ce45cb0ba81e4c67703671ef8336f340c1c55464cb155a7b5b9aa88d73e251689a00feada5451c651a9ba0dd70b1c7f380adc6ba71e803124345a4f1f7104629a0a40342de80a2414177c894d239793a91bb8136f384686bad5cb1d4290c1cfe73d2158e7aacb52fd92a1ef0fef90438b82aedfc5a681ef7ae764b379a5774dd352611441bdd5024f7580c03d8e2067c23886bfaa4835849bc61e81e329c17c1bfeb5c1a741701f6a0fe46ae6f877a43ef2218602b2e8f3e940b00a7cbad6bb1d432c6e19ca0889ef388b91a844a202ea9964abcacc966d9aed7e5b7d14242de4fb58c7b08d5df3ab1c5546584126b715d53ba6ba59854af102c2208e9257f7fa1fb49d138ae3040000",
    ],
    [
      "ETag",
      "8VlFBX0XuOiHK/nfQXjCng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff6d91716bc23010c5bfcbeddf3a6a191d1384d9e1a650ea56278c8d21315e6b35edd5247513f1bbef5207ca1884f6f2fa7be97be4009ba25a420f1645be6d50efaf72b42f6e48d134ca1a7ed55419040fd08a9cc96834ca5799dce23b25ea6d3c7c5ca9dd76d0ef3361e40a4b01bd036405aaa581dec7012a5122dbe673dd9ec898ddd74e892693783848582869e9846416c783281ec2d1bbb0d59bb365fa9a8e93a7ff1c9f470fd6b44831438d954417a2d6b44669c7ae9f1165adb063a8d1120db470fb21d7d4d442137558e974435e817f1bdef8776110840c2a92c21654313b9b7234b064854ae98beb41c0806e476e9ab5cf1dcb5637d8b6701b5ca3de5161fc7bfc6e535c4b2adbc497964c2873f6481416bb7f0d9fbf3f8ff616cdb3266e62d095f04f851ec8d196cbbb001e48c117322aec697ffc01ff8f2d64ed010000",
    ],
    [
      "ETag",
      "BHHghfcqeZoNlXIEFhlvqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:14 GMT",
      "Server",
      "ESF",
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
      "d0d97282300040d17fc9b33aa22ca56fa2c60591a5522c2f1908415912b604a19dfe7b997ec19d737f408431e93ac4ab8230f00ec668a52ff0c2acdf0cf448ec34437b79eb53bbba780626f4604127a7a57bd353990b79fbe8f628b714fa593f2ca6685ec9e6c14e1a211fabbddfeb9bf8dc3b21ec1adff4b4a13fb59b3b74cd20d6ef6b98e5def7a96a9b73948b7208fab47dfad7bca75852062f123bad924d3bab8597b942142ff621aa440847a56140e357a1b183969447d35f8dc7afdbf619a0e2625ff87579624bf82431e3a51ace87d1924accdd296736bdaf821920439db5a443d9c45d2bba3e03ff76c4c79a4c030c12b5a405bf7fdaab586a1a010000",
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
      "Tue, 11 May 2021 20:15:14 GMT",
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
      jobId: "grouparoo-job-17-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d4fdb3014fd2b91f74adba494a6ad548daa8411ad4d214981699a22c7b90986342eb1d309a1fef75d3b948190e029b6ef39f79cfb9167f2c0ab8c4c48ca8bc706eaa76ff722254704142df0555e3a925f37b77782ad7fce6fe98cd620afa6534470cd9274b32da123455333909375d42d6ad16c692d440713751cb7e30cfbb63b1cd8e361bf3f449e84325ff0ea01d9774a6de5a4d73b68770b218a12e896cb2e139bd7f7deaedfdbd6e21e9892bdf7923d5491bdcf45bf978251c545355d4768a0915027b0a1bc440bff99597afa3e7597d34db740f08e33a08c89a652da16a660a2ca79d1d4262b993c1363f3cd8144dec29bc7161365b3a9928a6ee0c8caa8a2897ada82751eae96961f9cafc2e52cf6574112cd2fbce5ac3b5f2dd6cb20b26e2ebcd0b3144d4b305c6b6a9d9a5b8017d4cf402a5e19f5583f6be59706f91fc7a209282da10d26ae3da4cec81ea779eab27c747c92e636a4e928754fe8716ab3f10006590a147946d4b06825aa61e68e323ace133aa4900cfad92819bb3924993b1ebb4e4e33009bec8fc8df9a2b38e3722b246f3b446e423ff692385c07f359ec991272da94eaac35a60b78eb51618108faa4a6bd8e72814abadd7e107be16c1efbd75e3be10514943d458f38e39c9612104d6b6c9e827a29326c1809664bef0cc166629787a02493dfcf44f75cbb78d3f2577a8c03d47695f992280efde087b173405cd3b231905d7bd065e4bcd4a6f77f10883bda2621576b2ffc45daa71072a8a1625f0f13c126f0e5af76d87bc4e2e6a38c5478c7d561528bb01ada15e2a6da17b6e30c5cdb21065cab0fb1d1a87f689acea133c2062af55251bbf758682bd6c857100671fa8169d6fe1f6f92246e77040000",
    ],
    [
      "ETag",
      "sP1siVuXhocUKCXaAaresQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d93616fd3301086ff8bf9482ab5a54b21d23ea450a090b5a3c984004d91675f82879333b6d3a9aafadf3967a32086947d49eececf2977afdf1cd80fd54a96b01b55ffecc0ee9fd5e03f85600baed3ded1cb60eb80450c3caf899ce8f48bb01fd5fab9f8fa393dfb60f23cf6f5f939114e7c8786b3e4c02a055a3a967c3bb09637406d0275d7b4659f45ccef4d28e6c576b57e47798332e4ebab2c4b17d9921da353a3e49e973dff84b6eb63c46ef1660b1558680584598cc55b107e15d674bc311a460e3b2bc0b11eee0f6a8b9de116714495d1643e9ac4d3f13c9e8d5fc5d3694ca046c1bdc296d8ab9ce6631e3dd75bbc7341931744d83ea68dabfeb9a3ba92fd26215cad8b78d60ff837c085c0aef5e5205829ebfcbd7abfc10715fe25357f224857a5f41054432bc10e51ca945c4a0bce0d92e84a6ecc095b6c36d963555a6951c96170a70600ed7727e06db649ff272d19ec8f566fd262f988709e6c73428ad5c5322fd28bcbc05d3f1861b1f7e02e2d92ab1c04434dc6b39767f3787cefb1d7187c47df49bced206282d3aff25e7996545c3b38fe023767848288030000",
    ],
    [
      "ETag",
      "1lAYcrKiN+cZWA5JpSS6tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:17 GMT",
      "Server",
      "ESF",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "30",
      "10fd2a91f7cf2695360d250995d0e820db227585a5e926344dedc5bd6486342eb6c360a8df7d17a7e5c7268114a989efbd7befce77bd6757a25ab221cb44715da3ba7b732933d66168a0a0d37329c7b73df5fb164e336f1a8feb5f833fb2383a228468581a56eb12f7b4ac15473d9c4dbb8592f51a94947b9468af1feef57dcf0dfc817be87b9e4f3c8d653e16d515b17f19b3d6c35e6fa7dd2da42c4a84b5d05d2e570fe7bd1bafb756f212b9d1bde7923d52d1bd9745df97928311b23a9a4dc940ad51cd7105a2240b8fcc6576fc3c7557c0aa5b10f8467004ce655d99c616a5e0b2ca45512b9b950def99b5f9e4854da37174923a8b25185c38a09df95ca1ae4bd37116567b7bb8be723e26675f9c05d5978b12f5c2f9fe394a22e701164f9cd964124d53e7edfb77cea7e46c76ee7cb8d8853b5b0932b5446d44652da59095d8d8d9762dfeffae1a0218d0d806e781eb433f740fb33c0b781eee1f64b98b591666c101ec672e3f1ce060992110cf34d92d0b2a59a117f2200f3cf038c7dc5de67e1f60003ccc8370e9fb9041ee1f0461c8361df65b0983a742afa5166debd8f7244ea3799acc2627a334b265e4407d3a6dcd35453cf569a84802bd50d7a6890a494acd3dc493344a462769fc2d6aaf7e8c05f0bbe9355d7e0ea546428382151a545fe4129b993f9bc6697c36198d8961eff37c87d06cf8e3fe9190dead6d978dfd65a324195d10079482bb7f62d33489279fd866f344ef1b94b5c55882fd6a056eda00c34b1a3e29b47b8cb7b6483b7e9bce238206d360ff79f8e7869e0ea34d683db0afb328b960ed5182392aacf8ebd341601b7875a177db4558da2f92d186be6916b96e44b8c27626c5aa31b365f7fb41dfb57f070694f92fe61d84bbe637399a8cb8c2ca6c2b6ab7cb76b309d5fa",
      "0144411aa549dbebbf069d7881dd040000",
    ],
    [
      "ETag",
      "PooLx/rwxaDb2SILuh4zog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "4f",
      "c2",
      "30",
      "10",
      "86",
      "ff4bfdba99ae315349484441c1108203628c21a494630cb6dd6c3b9010febbd762d418beb477d7e76ddeb73db04d562e5883cdb3f4a306bdbf48c1beb8220153e7d6d056616980050cac4c897cb6c96ebe7b5ca543fd6adaddb7a83d2e92b4d924c2a8151492350e6c9941be30acf17e60a52c8064b399f6371266f7959bb45be30e75052e5c3798f4fbadfb7e871d833f9a6af3cb8fc6496ff0744e313d066c8df30496a0a154e01c541ad7a06ccf8533b2a872080dd65a81611ef607a9c6ba921a31a44918dd84512cf8757cc56f632162027354d26658123b19913566d1ca3cc11d65638200ed4b8ab9f4ebd68db9e02117218f7c16378235e82d6686dfc1a7f772a9b0f0becf0ac58f5081b410fd574dbf7ddcef2d98a1460a65c0e5e1a76c0fe8684bef60750d0153923ea69bd9537ffc02dd7e057df5010000",
    ],
    [
      "ETag",
      "JtRwbwFhgPrWsDHY1DTmRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:17 GMT",
      "Server",
      "ESF",
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
      "d0",
      "d1",
      "96",
      "42",
      "400000d07f99e7ea88d1b28fa64c8628a5e8c5996592629a06519dfdf7edec27dcfb0634cb58d3a4ededca38f8064faa9a936ce20ac34a8bfcb9834e7246b12a760f2e89dc75280c8f982cd63febe2aebcf6cdd42ea51f3c02c76a4f0467f9e2488a6836f384a8f7b76e708d3cad7237ea69d29a2b3e0f162aaf20d5bc298eedb6500f715dad087fe84bf71265426eecad521b7130f8db46a55f275e4f21f2ba0ebbf4daf42a8a7c485fa40b360822c51727cb1b3663cc9987e607cfc445cdc9f272eeb57b872da8f4613ee81262613bba9f8ca541c008b04194923569f9e16aba698ec0bf3d6d9f827d022c462593e0f70f39920bcd1a010000",
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
      "Tue, 11 May 2021 20:15:17 GMT",
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
      jobId: "grouparoo-job-19-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fbda2490172152b446295d53256425a4d5344dc8c085b925768a4daaa8ca7fdfb569ba5695da2f807dcfb9e7dc07cfe481f18c8c49c28ac71aaac3b77b919033028a1678abba9c3fdeecaf0679ef70cd6fa7c2ee5f67c5648208a659926e7725b4a4a8ab14e478b36e1795a877b412a285895a8ed772865ddb1df66d6fd8ed0e9127a1cc178c3f20fbaf523b39ee744edaed4288a204ba63b29d8aedeb7d67dfedec2a710fa9929df7921d54919dcf45bf9722a58a093ed9acd1402da18a614b598916fe33b3e4fc7dea36a3db7681e03d4b81a6a9a8b9d2b630452a78ce8aba3259c9f899189b6f3ec8da5ff8b3c84a45596f79cce916ceac8c2a1aabc30eaccb70b5b4e6c1e52a5c4ea3f92a88d7b32b7f396dcf568bcd32585b77577ee85b8a262518ae35b1cecd29c003ea672015e3463dd2d75af9a541f38f63d1049496d00463d71e5267647b499eb8693eea0d92dc86241925ee80f6123bf5fad0cf12a0c833a28645b9e0762fc9bcdc83b89f78393e5c88478e3d88dd9e9d7b993de8395d20c733f2543105174cee84644d87c85d388ffc380a37c16c1af9a6849cd6a5ba688ce902de7a545820823ea9e9a8a34ca0926ef73c88fc703a8be6b77e33e10514343dac1f71c6392d25209a56d83c05d55264d830124c97fe0582cdc47e9e82928c7f3f13dd73ede24dcb5fe9110e50db55e64dd651380f7e183b27c42d2d6b03d9371fba8c9c95daf4f10f0271479b24e466e387bf487315420e15f0f4eb6122d804befcd54e7b8f58dc7c94910acfb83aa9d4226905cd0a3153ed0bdb715c77e81003aed48798d71f9c9aa673e88cb005ae5e2a",
      "6af61e0b6dc46af90ac2204e3f30cd3afe036e7e85ed77040000",
    ],
    [
      "ETag",
      "t2nnqQvH5f3yJnVAo04Jdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d936f6bdb3010c6bf8bfad681384dddd5d017c9967501e7bf0385518c229d3d65b2ce95e48c10f2dd7776bb74ac03f78d7d77fa1dbe7bf4f8c47e2a2359cc76aa78aec11eaf0af0ab265883abb577f4aad038600103cf0b2273732caecd6eb6e4cf7c5f84c9e38d586d57f7f74438f1034acee213cb1568e958fcfdc40c2f81da04eaba34599b05cc1faba6b849d7d3f903e525ca269f6f9364344e26ec1c5c1a25f73c6bf90fb43d9d03b6c7dd1a72b0600434b35416f720fcb459d3f1b2d2d073585b018eb5707b5058ac2b6e117b54e98577bd301af46fa361ff2e1a0c2202350aee151a62b71b9a8f79f45caff1176dc9c26b226c1bd3c679fb3c505dc97693269cced368d80ef837c085c0daf8ac13cc9575fe45bd3fe0ab0aff929a7f10a4ab52ba0b2ac048b05d94aa322ea505e73a497419afaa0b365e2c92f7aa186951c96ef0a03a00ed0f17e06bb218fd4f5a32d89b565f46e9e41de13cd9e682a4d3d964938e66cb867b7a35c2f8e8c12d2d92ab1c34860afbc34f37b751ffc5639fb1f11d7d27f6b68680094ebfca37e5599c73ede0fc1bdb53532888030000",
    ],
    [
      "ETag",
      "fnyg3nbMPaqajg1LX5cQUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:18 GMT",
      "Server",
      "ESF",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2b91f765d37824e18d54b58ca61d1b852e8456d534816d6e329710a7b1d31555fcf7dd38d0c726b51212e07bce3de7be1ec95a242bd2274c44773964db0fb792910a014d237cfdfe30bc0ebeadafe2cff2627c96360349d3b3e8e80811a26029ba4963a82a99671c547f3eab4599cc539a4959c54455d7ae3a6dd7eeb49b76afedba6de42988c3b148d6c8fead75aafaf5fa41bb164919c54053a16a5c6e9edeebf76e3dcde42d70adeaaf25eba8a2ea6f8b1ec792532d6472349fa1815c41b6800d15315a7866aed8c9ebd4354137b508c1f78203e55ce6892e6c610a2e9350447966b292fe2331365ffc20336fec0d036ba934e65c5a54598b45062a8f75c55a1af1fd63bab6cefce985b5c4024311835a5ad75f3ddfb39e60a389359f4cbc59607d3cfe649dfbd3f9a5f5e5e610ae1c34d0d60a94168931155016436168dfb7d1ffd32a085453056570d1b1dbd4e9da3d16b20e0fbb8d160b6d60accb3a2dda6036ef35a1b9624091a78bec8645136c85cd588bb71cc7713b3dd7613ddb6d84bce182d3e8f58039ddf68a53064db2ab903f99d0702a542a95289b47aefd51e02d027f3e190e02cf9411526cd46969ae28e2a54f8d4522e88dba76455448542a26319a049e3f1806a32baf1cfe1822cab7b33b1c7f48630588a619dd8086ec42aeb069e4723a1b05a3e96430468699e8e501a148ffe7e33321d8a6a6cbda7c9381ef0f6e9043b38c6eff89cd027f343927bbdd0bbd2b1ae7066308e65f29705f0608dce2fa49a1ec137830459a05dc559e11b89a1a9cd7e15f3bfc5408de42e981fc987bfe0d299f7c08218384bfbf1d083681774ffa705f88c50b4319dc482d7017b92a447806e54e8a4d6166cf76702fec1631e04cff17eb399d43f38b1c4546d840a2f71595f765ba598472f504c2",
      "20aed2a4ecf55f7ac16b1adf040000",
    ],
    [
      "ETag",
      "KxCWTJkVl+oMLFp4ToapFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff6d915f4fc23014c5bf4b7d1d641b301d0989a04431b0c0001f3084947219836d77b61d0a84efee5d3191a82ffd73fa3bcd39ed89ede26cc59a6c1947ef05c8c34d047a542e425045a2154d39660a98c540f388c86089c79a56b5d9ccdd3c06a3e3c6f65e5edbad16114a6c20e5ac7962eb18929562cdb713cb780a645b2ca4b991307dc84b65d21b74c793f66048528aab520aa6fd7ebbd3efb2b37565cc773fa6f124ec054fff39e6678b6d7119c21a246402ca18b9c42d08dd2b1b2a9ee60954141652806206360791c422e712b1424ac5b52b8ee7dab75eddf63dd7f5084c50701d6346ec744cd19846cd93103fa82073099066495dd766dc93ec541b7776a3e13b7ebdeb9b3aa50a5b907b8c957d0f9f264e55606aa2fff17a75725f7b05700dce6fe3fc3b4de7a0410d25523505652bfbd2f0014b5ad36b685980c504a73f7a8ef5657ffe0235f638a000020000",
    ],
    [
      "ETag",
      "Nboz3ts3ZZ2hDNQzh06JVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:19 GMT",
      "Server",
      "ESF",
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
      "0002ff1dd0c97282300000d07fc9591c9045e8118114649fca72ca0086a5b284000276faef75fa09effd80ac28f034a17978e01e7c803d3b29c7e27825b28a2a7c7278d313115bb8545b4a4dccbd76a93fe1e86b15454211216b60182c25776eb39a14b6b08d3b2a7d9995b8f6cb552766dd8e10075b6c48da16840184e2ea96bc1c5d8d68bdd4029974ff5cb07e9347b2990d3282b6a6bbcf018d4997799761cd1f7aff5d77b1e03cc220bcb3e4cc845198fab127544efacae66da22fa3746d36b98deac287d67397ec990bc4359dbd91a7659adf4cdc3a2c996a85f3c001e08d34144fa879737951510ee0df8ee69de077808a338a29f8fd033494405a1a010000",
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
      "Tue, 11 May 2021 20:15:19 GMT",
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
      jobId: "grouparoo-job-21-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fa34014fd2b64f6ab6d690bf491346b5351495aba02d56c361b320c171ca50c3283bbc6f4bfef65b0aec6443f3133f79c7bce7df04cee799992394978fed040fdf4ed4e24e48480a239be5eba7cbcf4523bdcad26d3bf53c7afabbb8babc50211bc6549baaf0ae849d1d40ce47c17f6f35a3415ad85e861a2de68d81b3a2373e258e6cc198d1ce44928b2352fef917dab5425e783c151bb9f0b9117402b2efb4cec5fdf078fa341558b3b604a0ede4b0e50450e3e17fd5e08461517e56217a28146421dc39ef2022dfc67a6c9e9fbd47d4ef7fd1cc18f9c01654c34a56a6d610a26ca8ce74dadb392f933d136df1c48e8aedd5564305134fb322ee91e4e8c942a1aaba70a8cf360bb313cff7c1b6c9691b7f5e37075e96e96fdd576bddbf8a17173e906aea1685280e61a0be354df7cbca07e0a52f152ab47ed73abfcd220efe3585a024a4be882f1c474e8706ace922c99b06c3ab693cc84249926139b8e1393cd2cb0d20428f2b4a866d1529453b0d3192476cc66a6135be3118d29b520a6766a5b19a39963dbe47042fed45cc119979590bceb10b909bcc88da360e7af9691ab4bc86853a8b3ce585bc05b8f0a0b44d027351dda2817a8d4b6dbf3233758ae22efdaed26bc869cb2a7f001679cd14202a2698dcd53506f448a0d23fe72e39e21584fecc73128c9fcd733697bdeba78d3f2577a84036ced2afd25611478fe85b673445cd3a2d190c7ee402ab47c8bb5a1ebc36f44e2927659c8d5ce0d7e92ee29800c6a28d9d7d344b00e7cf9af1d171fb1b8fa282315de7177986c45580ddd0e715dee0b7b389c5943936870ad3ec46cc73c76adcdd166843d94eaa5a26ef1b1d04eac91af200ce2f87dddadc33fd4d8644f78040000",
    ],
    [
      "ETag",
      "HEi3AId5SUC78x86NrpjGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "657a8ba9128b2d89176afd2151ab884993c6981506441796ee2e6d8cf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c23ecd2370619326cf25cac355827a6e0a1f55c9b5a25b21728560016a9610696f1e7bfbeb9137d8213ff8f345120d8661d26e13a1c22d660cdc23c429f24881fb74849c65486ba1e06596afabce027d28cc7011f8de74487d2622d34f97e371a73beec3c9ba2c464cb375c5ff636d75b26027363ec628310fd16829a4d861a83d6353b1ace05853a294212aa8e0ea412245593029448d2635bb516b3876bde534eb778e6d3b047211329d8a9cd8e582f481169a715fbc924b3080ac4a321c57d7171aa75165c494de34709a95beaf00498b538eebbf41d2bb65f4193eb07304df39968932d7176a307ee8fc761c65fa79d47d27e8ff2094a6a42e48e04dfa8ba03399196e75f6de3d6854332928488526c346bd797bd372eaefb1f684899adee36a59a20521a3bf63946a7063c6159ede00c62bb0827b020000",
    ],
    [
      "ETag",
      "2bXCk/HIFjelyRQSgdFGcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:22 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fa33018ff2aa4f78f267b616c632f89f1b8c9293a99c798c65c2e5b2905eb80625b7659ccbefb3d805377269a2c61edefe5f93d4fdb67b4665988c62860f15341c5f6db230f5003518563d855f6e5637fbd553abf30ccabc126bbba1453ebe40418ac54499ce6096d4a5e0842e578316fc5821739169c37c1a86918cd8e69e803b3a78f4cc330412769124d59b606f58352b91cb7dbfbdaad98f338a13867b24578fabadfde18ed5cf0474a946c1f966c4315d9febce869c209568c67278b39042824154b9a629640843765187c3fb46e319cb662206f18a198105e64aa8c05168467118b0b51b9a2f133aa62befb83e6f6d49ef8da64664dedf9c43eb26ecf8f56382d3d56c70d4d3fd6b0d4964b416591a886b682f62296d0250b573592afb59fdeec1a1008f38025952bedeec2f66ced90ecb8dac275edb9af1d9d1e6be7de6c71a3fdb83fe040e0904ac5b22aae8f838496515f26ea7c3cc7528015d4acc1e540377167a88f8228189068d8ed07914e8360180cfab81be864d4a3bd30a01874aa74af5438e39989830047a46f4461483b031d8fba1ddc1d067844a370343028e9996041d0ae81fe0aa6e819933997ac1e2bbaf31cdf5efadec29d58be5db5116198d7591dae6ce27d4e054d02e993be7625ca38542acfc8717ddbb326be736bd7d7624a634cb6f327b818114e2405361638a58a8a6b1ec2d0d0cd6ceef8ceccb5a6a0a8cefa66cf9068fcfbf94de06ff36acaaafa22cbf3ac7bd06021f0f63f0c72983db4dbbd2b778b93a2a254fc6a55fb6f6a0075a097b79581767f76f06b20b8ffb53bfab5b0bd7b546f7934a28266e4eb730772057cf98cf76f0ab8f0aaa08c54b0865b46645984085adf369656716b75c730fafa105564a13e60667fb81f6be9513ad29466eaa5a3fa4d55832aa142be9200844be23aee39a0ff0022c6cb75d3040000",
    ],
    [
      "ETag",
      "tEJj5kyt0oH26K7vnKJrLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "30",
      "14",
      "c5",
      "bf",
      "cbf5150ca0325db287cda02e215319d344b32c1d5c905128b6650b59f6ddbd65269b897da0f7cfefc039eca12cea1486b02ef2ef16657791a37e354584aae55ad1d5885a2158809ae54476d1bbfb7153f384bfadd3b2ccfc791cc4bbd18808957c61c560b887ac409e2a187eeea16615926cb592fd1b09d35d63260fe1f338a6b612a969678b301c4fc2000ed699a8294f82e92c0e1e83e83fc9f260c146ac23cc50629da0f1d048b1c1444f4d3cc5aa86a3ad442b1354d0c3fd2297a26d9814c2a689ed79b6eb7bcec0bf76ee7ccff309e42261ba1035b18b3979032d34e391d8513af008907d4941b3feb9a5b17b793bf09db373d587daf60ae3f52f3c38ad5db35efe7e64d269542f52906385c6ac73347e2f4c184d21b56cd18284d17f7f2af4b13ffc005dc876e9d4010000",
    ],
    [
      "ETag",
      "yRW1Z5nlclVbdkkf6STETw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:23 GMT",
      "Server",
      "ESF",
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
      "d0",
      "c9",
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "c9",
      "b9d36981b27813641110642ba11786255022266c69a18eff6ec74f78ef07145585e6395fe81722e0056c05a7ecabbd33c86ade36d63133df907d0de22ed08e976ee8897cb89af4b5218e0b6ff58c703cdadeb93deb766df86ed5440f6efb90163aa6e4bb3df4a580b5bb111373d6b2a44f85f70a3a5e02a56be66ad96ac168652213f2629e986f0be5e08da96edf982f3a7dc048295b56a253bf8c022442c31f93c5c538ec655e3c596de815894568c8e91b8f29b453aaf878e10b1ab1bbe2384210b435562f92f1a935eb92cb0ac7716007d03a74139af3eec9e54f8ab203fff67cd906f40c505131a109fcfe01bb0870331a010000",
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
      "Tue, 11 May 2021 20:15:23 GMT",
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
      jobId: "grouparoo-job-23-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b4fdb3014fd2b91f771d0863ed287548daa04c8d6a6234d41689a22dbb90986340eb15356a1fef7dd38948190d8a7d8bee7dc73ee23cfe441e431191326d2c70acadd977bc9c811014d537cdd5eb9de835e3fa9dd9fe476fd9d7e15173fb64f93092244cd5274536470ac64557250e3f5aa9596b22a6829e531263aee748f4f9c8e3d707af6c8e9741ce429c892b9c81f907da775a1c6edf641bb954a9966400ba15a5c6e5edfdbdb4ebb28e53d70addaef25dba8a2da9f8b7ecb24a75ac87cb25ea1814a4119c1868a0c2dfc63c6ecf47dea96a09b568ae0ade040399755ae6b5b9882cb3c1169559aac64fc4c8ccd3707b272e7ee2cb4b8ccaa4d1ee5740347564c358df4ae00eb3c582e2ccf3f5f068b69e82dfd6835bb7417d3d66c395f2ffc957573e906aea529cbc070ad89756a6e3e5e503f06a5456ed4c3fab9567e6990f7712c3501a51534c168603bf464688f58c2063c1976fb2cb181b1211bf46997d97cd4835ecc8022cf881a16cd65eec44e7fd01f24d1b0c786516fd0eb44ac3bea47d86d48fa231842ccc8fe883c9542c399508554a2e910b909bcd08dc260edcfa6a16b4a486895e9b3c6585dc05b8f1a0b44d02735edeba890a854b7dbf3433798ce42efda6d263c8794f2ddea11679cd04c01a26989cdd3502e648c0d23fe74e19e21d84cece721a8c8f8d733a97b5ebb78d3f2577a8803aced6af325ab30f0fc0b63e780b8a6596520dbe6400ab47c87b5a1ebfd6f44e2923659c8d5da0d6e49f314400225e4fcffd344b009fcf75f3b2c3e6271f5514669bce3ee70558bf0129a1d12a6dc17f649a7db1bd9c4804bfd21e674ed43d7ea1c7546d840ae5f2a6a161f0b6dc42af50ac2208edf37dddaff052ae8c01f78040000",
    ],
    [
      "ETag",
      "vQEIktUwsyxfYUJa+iGKvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92414fc2401085ffcb78b42450b160130e05519b1484524e8690a59d42b1dbadbb5b0921fc77672ba25113bdb433d36fb6efbdf600cf5991800bab6cfd52a1dc5fac514f4d11a2aa72ade8568a422158809aad89c4cb72e3edc65997f3ca1b4ce5c41e2ae5f57a44a878839c817b8034c33c51e03e1da0601c692d1679c58b65dd59a0f7a519cea2d01fdf53cf4562faf13c08bc7e3084a3755e4c9866cb9affc7dae268c156ac424c516211a3d1524ab1c558fbc6a662bcccb1a14425635450c3f583b51455c9a4100d9a34ecab46cbb19b1da7ddbc716cdb21301731d39928889dcf481f68a1591e8a1db90403c8ba24c3697d7da57196d4464ce98f23a75debfb0a90b434cb71f937487a378c3ec307768ae03bc7b8a80a7da6ee8247efb7e328d3cfa36ebd68f883509a923a23913f1ace226f3431dce2e4bdbfd7a8265250900a4d86ad66bb7bdd719aefb10e84899adee36a59a10531a3bfe321d3e0a62c57787c03e908ea287b020000",
    ],
    [
      "ETag",
      "e+phAwNi8mmuACQrP2EssA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:24 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fe33010fc2b91ef0b487da449481f12e27a25c7459414d214844ea7d649ed6048e2603b3d55a8fffd360eaf1e124895527b667667d7bb4fe881156b3442314b1f2b22b6dfee798c5a88289cc22df526f6fd54de7957711545e767e7349a0cc7c7c7c060b54ae2bccc485bf24a24448e16f34e2a785562c1791b02b52da7dd732db3ef3ae6d0b52c1774926474ca8a0750df2955ca51b7fb92bb93729e6604974c76129ebfde773756b714fc9e244a76f75376218bec7e9ef424e309568c17c78b3918a824114b926396818537e53afebe1fbac370de4981bc6109c149c2ab42d5b62044c20bcad24ae8a868f484b4cd777fd0dc9b7a93c898cc164174b0c2792d5e1d1a581acba520b2ca54cb58414d946564c9d6ab06291f8c9fe1ec021070708725912be3e697177ac63ed90f8c451078f3c838383934cec2d9e2d2f871bbc701976b22152bb4c708c719a9fd3db7d1fff878b5002bc8d980cbbee9e2dec01cc634ee2774601fc5d424713c88fb47d88ecd64e810671d130c3a5547d72a5cf0c232293563d3c6d8a1f611e9b9b6e3e07ecf7486568f529cc4d41e58d4b1d1ae85fe0aa6c829932597ace925ba09fdc85b46e122988c234f974131f4ebb4315717f1dea7822281f4495dbb1a651c32d50fe30791178e27917fed35b33025294eb6f34798068a3349808d05ce8922e282afa169e87236f7237f168ca7a0d00f7cf9c29068f4fbe94d106d4bdd65a5bf681c86e35bd06021f0f63f0c7cb80edaeddea5bbc659a5299aaf4f4dfc4d03a01ed4f276b2d0eecf0e7e2d0443df4447570b2fbc45cd55482811a448be7e77206be0cbdd7d5924e0c22a411aa9e00c5396c83a492248336d2cd7761b75cf72dce10069b2501fb0a18efcba4075449293423d57d42c926e540d55f29504200c49e0076780fe035cd8444cc8040000",
    ],
    [
      "ETag",
      "fEC3jLshEQbuTTKGKfTC9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10",
      "c5",
      "bf",
      "cb786d0334582309073144890d910a07630859da692db49d65770b16c27767763186a397fdf3de6f266fe604dba24e6100eb22df35a8dabb1ccdcc3e62d44d69345f926a8de0011a913319c8ecd8eede3a51fb696673dc1e83ce0f1d86432674f28d9580c109b202cb54c3e0eb04b5a890cb562be53a32665a6995c9743e7e19c72c54945a61ba88a2a7513486b3775326b7ff2a599e3dd8d03ac60c15d609da1452d1061333b1036a51c9127d4d8d4a5083839d912b6aa450443e2b7ed0f77b61d07d08fbddc7300842064b4a8429a86676f1c1d9c09011654c076db7c180724f1e3573e79ee57b37c3de0136daad17fe793deb2d7f1b8e5a83fa5d11a7d3688375af219fc906373c90510d7a9008def26b61aefff305fcc53cadc2010000",
    ],
    [
      "ETag",
      "2pfzyqK/LyYtQTekz2/xow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:25 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "8e",
      "82300000d0bb74ad06f1839d9d2005d482c8f0dd34584be38f32b40ac4ccddc7cc11de7b839252262551e2c66af005865287133ad9352b9370ba955d13ccdcfdd5708b8217fe1267e90185da09d66ae7370ecfa3a2827b48b0c2090b688625cf515dac09eaecc7a33e6eb63f50f9f70ce5c289e4b76eb438edf9e1b988753e9099d128431d4be51ed5341461328eae19acacdc211c23d3df7b37ad5a57c836e3613b259627daf8bc0cc9ea9cbeda83629d863dd3dfe0e7e0e4ebbb1fe970ec315bd8010d03cbe6a29f27e12b88523c1763e3a4d155074680f5cda565925c3edcd902c211f8b7133534ec1360b2b2652df8fd0342d24f4a1a010000",
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
      "Tue, 11 May 2021 20:15:25 GMT",
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
      jobId: "grouparoo-job-25-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fa34014fd2b64f6ab6d292df491346b6d716dd252a554b3bbd99061b8e0286590196a5cd3ffbe97c1ba1a13fdc4ccdc73ee39f7c133b9e7794cc624e2e94305e5d3b73b119113028aa6f82a8afdbcbcfa75767b7936e8f502161762fe773a992082d72c497745062d29aa92811c6f37edb41455414b215a98a865d9adae639903a76f8e1ccb729027214b963cbf47f6ad52851c773a47ed762a449a012db86c33b17b7defecad4e518a3b604a76de4b765045763e17fd9e09461517f964bb4103958432841de5195af8cf8ca3d3f7a9db9ceeda2982f79c01654c54b9aa6d610a26f284a755a9b392f133d136df1cc8c65dbab3c06022ab767998d31d9c18315534544f0518e7fe7a652cbcf3b5bf9a068bb5176e6617ee6ada9ead97db95b7316e2e5cdf35148d32d05c63629cea9b8717d48f412a9e6bf5a07eae955f1ab4f838969a80d2129a6038301dda1d9aa32889062c19f6ec2831218a86d1c0a6bdc864a33ef4e30828f2b4a866d15ce4dd41770840211c9aa615f607b11552a73f0a7bb6dd07d319257634228713f2587205732e0b2179d32172e32f02370cfcad379b06ae2e21a155a6e68db1ba80b71e151688a04f6a3ad4512e50a96ef7c20b5c7f3a0b16d76e33e125a4943d6d1e70c609cd24209a96d83c05e54ac4d830e24d57ee1cc17a6297c7a024e3dfcfa4ee79ede24dcb5fe9010eb0b6abf4976c027fe1fdd0768e886b9a551ab26f0ea440cbb7581bba3efc41242e6993855c6d5dff27699e7c48a0849c7d3d4d04ebc097ffda71f1118bab8f3252e11d7787c95a8495d0ec10d7e5beb0bb96dd777a44834bf521668fac63d7ea1c7546d841ae5e2a6a161f0b6dc42af90ac2208edfd3dd3afc032d42043378040000",
    ],
    [
      "ETag",
      "opvDrQZBhPB733TcdpoDzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92414f83401085ffcb789426881595a487b6564bacb5523ca831cd16064481c1dd45254dffbbb3a8d5a8895e6066f86679efc10a1eb232060f9659fa58a36cb652d417a60850d5b9567caba8540816a01629932fc1ee766aa75935bea6faaa39c5c4718669afc7848aeeb010e0ad20c9308f1578372b284581bc16515e17e5a2ed2cd04d6586f330f0a727dc17149b7e7a3999f4079311acadcd622cb458b4fc3fd66ed716dcd332c0042596111a2d95a47b8cb46f6c2a5154397614d53242052ddc3e4825d59590441d9e749cbdce8eebd8fb6ed73e741dc76530a748e88c4a662fe7ac0f34699107f4cc2ec100b22dd970d25e9f789cc5ad1153fad3d0edb6fabe022c2dc9725cfc0db2de3bc19fe1037b8fe03b270aaa4bbda18e27e7fddf8ee34c3f8f3aea87a31f84d29cd40609fdb3d13cec9fcd0c77fbee7dd0685433491ca44293e18edd3dd8db77edb7588764a2e6f7785ad6684124f8ef18671abc44e40ad7af86f997f67b020000",
    ],
    [
      "ETag",
      "xR3+g0gipHZouYyKef22Cg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:29 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a2",
      "30",
      "18",
      "fe",
      "2a",
      "a4",
      "f7cf96384154149365e71cbb2351dc016e31978b1628d80994b5658bb7f8ddef05e6366fc9969860fbfc789ff76dfb8cb6348fd0080534792809df7dbb67016a21227102bb331ad91bdc79d00c77b9b976f3bfeaf672f0747e0e0c5aa904ce8a949c0956f29088d1c26b279c9505e68c9d81d1996e9c750c5d1b183dcd3474dd009d20693ca5f916d41b290b3152d543ed76c25892125c50d10e59f6baaf3eea6ac1d93d09a5508f4baa5045a89f17bd4859882565f9f9c28300a5207c45324c5388f0a68c82efc7d66d8ab37602e4471a121c86accc65150b2c4296c7342979ed8a46cfa88ef9ee0ff2aca935f195c97c3cb5bc8975e22d66276b9c551eebd396a29d2a5828ab1527a24c654b59437b314dc98a46eb0629b6cab53b9f010261365810b156ee7e5aaea51c936d4759388ee5f9cac9c5a9f2c39d2f6e94cbe51107024744489ad7717d1ca4a48afa3251fbe33956022ca16603ae069a813b43cd0ce26010c6c36e3f88351204c360d0c7dd400bcd1ee94501c1a093957badc239cb0d63180c31ee8726eee878609a7a3820fda1d60d3abd9898bd2020910e4668df424f9c4a724545c1046dc68aee5cdbb756bebb702663dfaadb8831ccebaa095735f13ea7842681f4495ffb0aa50c2a5567643bbee58e27be7d6b35d7624a121ceebc07b818314e050136e6382392f0198b6068e866eed9be3d77c65350d4677d73600834fafdfc26f077453d65597fd1d875c74bd060cef1ee3f0c72183db4dfbf2b778bd3b2a6d4fc7ad5f83f3600ea402f6f2b1dedffece1d74270ff1b77f46b61b94bd46cb924269ce4e1d7e70ee41af8f219",
      "1fde1470e155411921610db72c1455919093e6b6d1ac8edba83b5d4deb77514de6f203a6ebe661ac9547e5483292cb978e9a37550faa824af14a02102e89633b3f00fd07514503a7d3040000",
    ],
    [
      "ETag",
      "MidIha1q06RYhFRnz/kB7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff6d905f6f823014c5bfcbdd2b38c405c5c40735b8b1109d4c932d8b3115af8802656d7131c4efbedbba6c3eac0ff4fef91d3887068e59b9853e6cb2f4b34671be4b51cd7511a3ac7325e9aa7829112c40c55222f7bd30bd3f1ed23c9874dfdec5ec391c2b7f3e181021933d160cfa0dec32ccb712fa1f0d94ac4092add7c2bc913075aef46412cd860b6a0bbed5ed741945c35114c0c5ba1155c73f41385d048f41fc9f6475b1e0c03731ee506099a0f650097ec044853a9e644595a32d792d12946060b34805af2b2638b76962bb9eddf65ca7eb3d38bee7ba1e81394f98ca7849ecf295bc81e28ae531ffa274e012204c494177e679a2b1dfea74fddb63329d8c405bbd65db4eabd3fbddb7f57ef5f391d159a17c119c1c4bd4669dabf131d761148554a2460b1246fffd2953d7fef20d3c9c345cd4010000",
    ],
    [
      "ETag",
      "h8Ig/kjglEF7XYrOJICt9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:30 GMT",
      "Server",
      "ESF",
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
      "d0",
      "41",
      "72",
      "82",
      "300000c0bfe4ac0e44a8a43711940e88204429974c4a0312103041043bfd7b9d3e61f707d02c635292bead5803dec144215a640bb7334c52e451a87ff2c1a2348c07b831e334df8fa3247980acadba192dc1ddd48d2ce774d39e71857d0c43e39e501a68a225fa414c95d76ad85f7b8503d1a9ac63ef416093aef64755095624eb2edf5c3b7ca587532a13b5e392ed125b7ff8ee0d76c778ceb4edd51fbd41691a25304a8933bcac8c361a9f04859e69ed86223a3af72a9873f4d1d7b65d3b6fe21a428e35df17fda5c0975639077164f43c3fdb9170c00cb0b12b0593a47c71973a4233f06f27fdd4b15780c9a86002fcfe018499b1bb1a010000",
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
      "Tue, 11 May 2021 20:15:30 GMT",
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
      jobId: "grouparoo-job-27-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fe24014fd2bcdeca302058102095909d6b50914b714cd66b36966a6b775a4746a678a6b0cff7d6fa7e26a4cf4a93373cfb9e7dc8f3e93adc86332214ca40f15944fdfee2523a704344df1d5bb1a9c74479b6dbcfc7b62df50f1785d6d753a9d2242d42c457745062d25ab92839a6cd6edb49455414b295b98a8d5735add61cf76867d7b3cecf586c85390250b916f917da775a1269dce51bb9d4a9966400ba1da5cee5edf3bfb5ea728e53d70ad3aef253ba8a23a9f8b7ecf24a75ac87cba59a3814a4119c18e8a0c2dfc67c6ecfc7deab6a0bb768ae0bde040399755ae6b5b9882cb3c1169559aac64f24c8ccd3707b27617ee3cb4b8ccaa5d1ee57407a7564c358df45301d665b05a5a9e7fb90a96b3d05bf9d17a7ee52e67edf96ab159fa6bebf6ca0d5c4b539681e15a53ebdcdc7cbca07e0c4a8bdca887f573adfcd220efe3586a024a2b688291630f6977648f59c21c9e8cce062cb181b1117306f48cd97cdc877ecc8022cf881a16cd653e1c245dc60634ea27308afa4edf8e1873ba51cc1c3b19d371afc718399c92c75268b810aa904a341d22b78117ba51186cfcf92c744d0909ad327dd118ab0b78eb51638108faa4a6431d151295ea767b7ee806b379e8ddb8cd84179052feb47ec01927345380685a62f334944b1963c3883f5bba17083613bb3e061599fc7e2675cf6b176f5afe4a0f7180b55d6dbe641d069effc3d839226e685619c8be3990022ddf616de8faf00791b8a44d16f273e306bf48f314400225e4fceb6922d804befcd78e8b8f585c7d94511aefb83b5cd522bc8466878429f785dd3db39d41971870a93fc4c6a3f1b16b758e3a23ec20d72f15358b8f853662957a056110c7ef9b6e1dfe018c0dd28878040000",
    ],
    [
      "ETag",
      "IH5+18UkdMx+0VaiwPuktg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92d14f825014c6ff97d32b6cc8088dcd072d2d4bcd001f5a73ee0a07c4804bf75e72cef9bf772e99b56aab1738e7f03b97effb600fcf59198307ab2c7da951ecce52540fbaf051d6b99274ab7829110c40c5522287be5fdcdace5d67bbadfc60f6e86cfde93aed768990d11a0b06de1e920cf35882f7b4879215486b11cfeba25c369d016a57e96110faa3e935f5058f753f9d8fc7bdfe780007e3b41833c5960dff8fb5c5c1800d5ff998a0c03242ada5127c83911a699b9215558ea6e4b588504203370f52c1eb8a09ce4d9a9876db6cb9b6d5761debc2b56d97c09c474c65bc24761e903e505cb1dce75b72091a104d498693e6fa4ae32c6e8ce872340d5da7d1f71520694996e3f26f90f4ae197d860fec18c1778e15bc2ed5891a8eef7bbf1d47997e1e75d50b073f08a928a913128e268320ec4d669a5b1cbdf7770ae54c700a52a2ceb065399df3b66bbdc77ac975d4f41e4f891a0d8818fd1d3799022f61b9c4c31b6979a4027b020000",
    ],
    [
      "ETag",
      "FRRmJ24K8wwpRSPY4wRNhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:31 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85537f4fa34010fd2a64ef1f4dfa835204dac47855b93b924a3d0a7ae672699765c155cae2ee62d333fdee378055eb259a34a1bbefbd9937b3334fe89e15091aa398650f15159b2f773c461d4415cee0f68ac8f5dfd3d0361f4cdffcb58e9c48dc6cd6c7c7c060b54ae25599d3aee49520548ea3792f13bc2ab1e0bc0b81ba86d31d58866e5ba63eb20cc3029da4793a65c53da86f952ae5b8dfdfe5ee659c6739c525933dc2572ff7fd47a35f0a7e478992fdfd947dc822fb1f273dc939c18af1e2389a83814a52b1a02bcc72b0f0aa4ce2affba17b0caf7a19901f19a198105e15aab60521082f529655a2898ac64fa8b1f9e60f9abb53f72cd42e3cff608957b57479a861a92d1682ca2a571d6d0915a52ca70b962c5ba4bcd7be05b30b4020ff2d96542eb5eb1f6ee06afb64cfd722df77e7a1767072a87d0f66d1a5767ab3c7018f09958a158dc310c739addd3d37d1fbffe96a015690b30517b66ee181a38fe234b649ea0c8fe254a771ecc4f6111ec63a1999d44c628a41a7eae88d0a17bc300c27a17a9a24a3d8a0c3234bb71d23368740c629192416c4b4896d8ed0b683d682297ace64c9256b3b89ae032f74176110f96793d06dca4831f4ebbc355717f1d6a7822281f4415ddb1a651c32d5cfe2f9a11b4cce42efca6d27614a334c36f307988514e792021b0bbca28a8a0b9e40d3d0e56cee85decc9f4c41d13cefe58e21d1f8f7d3ab20dc944d9755f345932098dc80060b8137ef30f0619968bb7d93ee0ae7554369f8cda98dffd8026800b5bc9e0cb4fdb3855f07c1c8b7d1d1cfc80d6e507b15d0940a5a90cfdf1dc80df0e9e6eed608b8b04890462a38c3941159272182b6d3c6568ddd563d180e4643073564a1de63068ccbaead758c3a225dd1423d57d4ae51d3a81aaae40b09401812dff3bf03fa0fbe2b88acc6040000",
    ],
    [
      "ETag",
      "VcswzBT74q4N4XwU8UrYyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d90dd4ec2401085df65bc6da1545290840b3028c406a5808931842ccb500b6db7ee0f8634bcbbb38b512ebcd9dd99f9cee49cade190955be8c1264b3f0dcad34d8a7a661f092a936b4557254a85e0016a9612d9e453bd2cc7b7af73667461dec64fcd5992f6fb4428fe8105835e0dbb0cf3ad82de7b0d252b9064ebb5741b09d3a7ca761ee2e7c182ca426c6d395dc6f160188fe0ec5d89aac39f60325d8c1e47c97f92d5d983bdd824b843892547eba192628f5c4f6c3cc58a2a475f0923392a70b01ba452988a49217ceaf861d76f4561d089dac15d14861181b9e04c67a2247639276fa085667922be281d840448f7a4a03b771ea91d343a5d17e3e818ebee7adc6ab4c3df71cb8e573f6b87278dea450af2a8d0da0b2e56ef85b5af299696063de08c7e7a9ce94b7dfe068802fd99c6010000",
    ],
    [
      "ETag",
      "/cNtUnH3VSautmuYHK/QRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:32 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4d",
      "72",
      "82",
      "301800d0bb64ad8e5a51e94e408313a1fc54296c32103e4900218088b4d3bbd7e911defb413163d075f45e1750a17734c64b75c666446e359ab1c585615b78b95befad8313cf69a7c0adbe0ea96a96d6757a7b642cf9341e031c5a29385e6dc5253aa4c4c3acbb2ea275e39154e72229bcbcc638c98d9e473c7571558163ea6bf205ad3b3a947b3b6c95665f92d029023f8434284e845302b66f6f82cd4998989cf79eed93f390e1b05f92f54ad71a2597df49bf9bdbcd54546cef07d691e82236b27ea72cd2231f1eaa7bfa905665e5fa45325c528926089e52b4d051f1e2be29aa3a41ff767a1f25bc0234885b68d1ef1f1c928d481a010000",
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
      "Tue, 11 May 2021 20:15:32 GMT",
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
      jobId: "grouparoo-job-29-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d6f9b3014fd2bc87b6d1292901022456b94d21529211b9056d53421e35c885bc0149b4e5595ffbe8b69ba5695da276cdf73ee39f7836772cfcb3d999384670f0dd44fdfee4442ce08289ae16b7a792f0ff6cdfa70db14bebf7d281d7f77952d1688e02d4bd2a2caa12745533390f35dd8cf6ad154b416a287897a23a7379c8e4c7b6a99ce74349a224f429eae79798fec8352959c0f0627ed7e26449603adb8ec3351bcbe0f1e4783aa1677c0941cbc971ca08a1c7c2efa3d178c2a2ecac52e44038d843a8682f21c2dfc67ee93f3f7a9fb9c16fd0cc18f9c01654c34a56a6d610a26ca94674dadb392f933d136df1c48e8aedd5564309137451997b48033634f158dd55305c665b0dd189e7fb90d36cbc8dbfa71b8ba7237cbfe6abbde6dfcd0b8b97203d75034c941738d8571ae6f3e5e507f0f52f152ab47ed73abfcd220efe3585a024a4be882b16d4ee970663a499ad82c9d8d27496a4292cc127b42c789c91c0bac7d0214795a54b368294a6acf98994e209e38368d2d1368ec8c6d2bb6666c640e4d67688dc7e47846fed65cc105979590bceb10b909bcc88da360e7af9691ab4b486993ab8bce585bc05b8f0a0b44d027351ddb2817a8d4b6dbf3233758ae22efdaed26bc868cb2a7f001679cd25c02a2698dcd53506fc41e1b46fce5c6bd40b09ed8cf535092f9ef67d2f6bc75f1a6e5aff40807d8da55fa4bc228f0fc1fdace09714df346431ebb03a9d0f2016b43d7c73f88c425edb2905f3b37b825dd530029d450b2afa789601df8f25f3b2d3e6271f551462abce3ee30d98ab01aba1de2badc17f6703cb26726d1e05a7d8839c3f1a96b6d8e36231450aa978abac5c7423bb146be823088e3f775b78eff00d30834f878040000",
    ],
    [
      "ETag",
      "fFksh7WLhYumNNOqn9NUHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92d14ec2401045ff657c2d4969b040131e405189800845128d214b3b8562dba9bb5b0912feddd98a68d4445fda99e999edbdb7ddc1539c85e0c1225e3e1728b7274bd4b7a618a32a12adf89653a6102c402d964c5edf913daba113fb912e66af8dc67dbe196c5a2d2654b0c25480b78328c62454e03dec201329f25a40499166f3b2b3406f73339cf8e3def092fb9442d30fa7fd7ebbd3efc2de3a2e86428b79c9ff63ed716fc19a16638c506216a0d1924b5a63a07bc6a612699e60455121035450c2e583a5a4221792a8c2938ad3ac545dc7aebb35bbe93a8ecb604281d03165cc4e27ac0f3469918c69c32ec100b22cd970545e5f781c87a51153f686be5b2bf57d05585a142738ff1b64bd2bc19fe1033b44f09d132915993e5217fd9bf66fc771a69f479db7fdee0f42694eea88f8bd4177e2b70723c33d1ebc77b61ad5481207a9d06458b56b8dd3ba6bbfc77a46266a7e8fa76581160482ff8eab5883178944e1fe0db70551997b020000",
    ],
    [
      "ETag",
      "KVo0W4e2iTftuWz88ZpwMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:33 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8553fd4fdb3010fd5722ef17d0fa917e24692b21d641c62295b44b53ba6a9a5ac77182218983ed800aeaffbe4b42810e09a44aa9fddebb7b77be7b42b72c0bd108052cbe2ba8d87eb9e1016a20aa700cb79dc75e11d932940fdbc7e0ab9c2db7dde56a7c72020c56aa244ef38436252f04a172b498b762c18b1c0bce9b10a8d9d39b1db3ab5b665f1f9addae093a499368c2b25b505f2b95cb51bbbdcfdd8a398f138a73265b84a72ff7edfb6e3b17fc861225db8729db9045b63f4e7a9a708215e3d9c9620e060a49c59aa6982560e1551906df0e43b7184e5b3190ef19a198105e64aab4052108cf221617a28a8a464fa8b2f9e60f9adb13fbccd72ec7bf8f36382da59b630d4b6dbd165416896a681ba82862095db3705323f9adf6c39b5e0202f9afb1a472a32d7fda9ead1d921d575bb8ae3df7b5a3d363edc29b2e66daf7d501073c86542a96550e7d1c24b474f7dc44e7fdd39502ac20670dae2dddc49d813e0ca2c022d1a06704914e8360105806ee053a19f6693f0c28069d2aa3572a9cf12cb4c2a86fe99dfe80040625a11186ba15e83d6c92be6e9826269898062668d7400f82297ace64ce25ab3b89969ee3db6bdf5bb86763dfaeca8830f4ebbc365716f1d6a7822281f4415dbb12651c3295cfe2b8beed8dcf7ce7caae276142634cb6f33b9885082792021b0b9c5245c5250fa16968369d3bbe3375c7135054cf3bdb33241afd797a15f8dbbceab2aabe68ec79e31568b01078fb1f063ecc3edaeddea4bbc24951512a7e75aae3dfd700ea402dafa72edafdddc1af8160e4ebe8e8d7c2f656a8bef2684405cdc8e7ef0ee40af87473f76b045c58244823159c61ca882c931041eb69636965b756777a3dc3d0514516ea1d665ac37d5bcb1865449ad24c3d5754af51d5a8122ae40b09401812d7712f00fd075420b59ec6040000",
    ],
    [
      "ETag",
      "1z3ufEsdswyzb+sPWy2WYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d90414fc2401085ffcb786d4929a42a0907308848035a20c618429632ad85b65376b798a6e1bf3b5b8c72f0b2bb33f3bdc97b5bc321c977d0836d121f4b94d54d8cfad53c025465aa155f05e50ac102d42266325edc3d4fa259f63ede1e17d3b7f9b43aecc771bfcf840a3f3113d0ab214a30dd29e87dd4908b0c59b6d9c8662363ba2a4ce7d19f0f965c66b433e56ce5fb83a13f82b375252a0e7f82c96c391a8f82ff24ebb3057bda0618a1c43c44e3a190b4c7504f4c3c25b222455b51294354d0c0cd209654164212d9dcb13b8eddf65ce7d6eb3af79eeb7a0ca6140a9d50ceec6ac1de40931669405f9c0e5c0664f3e4a051739eb8dd69b5bb4d8c53c31877d763b7e5767ec76d335effac1d561ad58b24f6a8d0d8732e561fc8d8d71c4bcb122d0805fff453a22ff5f91bfa0029d8c6010000",
    ],
    [
      "ETag",
      "gS8JIfNmYGbqSKWOKykjGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:34 GMT",
      "Server",
      "ESF",
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
      "1dd0c97282300000d07fc9d93a41229ade4a95b26f22562f1996240a28bb1a3afdf73afd84f77e409265b4efc95097f406de814816789ecdad66ad129ed5016cdd5a5f056e5421ac179501c35832b9b78732624e715c5581512b016f972c6d24c7da93c96b45a5f154c92da564e560e752299b5b3c09363de1e6e41a3bfbf0e16b50b0548ddf3ab3a9d87518e553925bd37dbd389cb9722e5116f94f0e6323f40eabdcf4d0434581b218635ddd6d7061fbb2caed5b82cde806a7cf2fcb28f2aba0e2a8294e14b21aa579d75b7e48f5919cd076b817924db46f630f66803e9b4b477b727971e525c633f06f278368e82b40a549473bf0fb077e69ce4f1a010000",
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
      "Tue, 11 May 2021 20:15:34 GMT",
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
      jobId: "grouparoo-job-31-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2b91f7b54908214f295aa394ae6c09e90869364d1332e642dd02a6d8a4ebaafcf75d4cd3b5aad47ec2f63de79e731f3c925b9e47644a429edc55503e7cba11213921a06882af96fb977e35e1c7a5b32bee59b6fbb6fbb3bf9fcf6688e0354bd2ac48a12d45553290d3eda69394a22a6829441b13b5fbbd766f681aa3a1654c86a639449e84345ef2fc16d9d74a1572daed1eb53b8910490ab4e0b2c344f6fcdedd9bdda21437c094ecbe96eca28aecbe2ffa39158c2a2ef2d97683062a09650019e5295af8cf8cc2d3d7a93b9c669d04c17bce803226aa5cd5b630051379cc93aad459c9f491689b2f0e64632fed85df6222adb23cc8690627ad882a1aa887025ae7de7ad572dcf3b5b79afbceda0d368b0b7b35ef2cd6cbedcaddb47617b667b7140d53d0dcd6ac75aa6f2e5e503f02a978aed5fdfab9567e6a90f3762c3501a52534c160640c696f6c4cc2381cb178dc1f84b10161380e4703da0f0d36b1c08a42a0c8d3a29a4573910fc6e164641983a06ff6a2c08a1804d432cc208e47e1281a9a7438b0c8e184dc975cc119978590bce910d9798e6f07beb7751773dfd625c4b44ad55963ac2ee0a547850522e89d9a0e75940b54aadbedb8beedcd17be736537135e4242d9c3e60e671cd35402a26989cd5350ae44840d23ee7c659f21584fecf2189464faeb91d43daf5dbc68f933ddc701d67695fe928def39ee176de788b8a269a521fbe6400ab47c8db5a1ebc36f44e2923659c8f7adedfd24cd9307319490b38fa789601df8f05f3b2e3e6271f551462abce3ee30598bb0129a1de2badc2776af6f99864534b8546f62fd71efd8b53a479d1132c8d55345cde263a18d58259f4118c4f1bbba5b877fa35314c478040000",
    ],
    [
      "ETag",
      "4NzaJ2eXPIWpwcmWKWxvwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd6e82401085df657a0b89588b95c40bb55a4df0a788174d63cc0a036281c5dda5d618dfbdb3d4daa66dd2dec0ccf0cd72ce81233c2779080eac937857a2385cc5a81e74e1a12c5325e956f05c2218808ac544b6b03eb076c347c97aaf6a3015f16bb9dfecdb6d2264b0c18c81738428c13494e03c1d216719d25ac0d332cb575567803a147a38f7bdd1e49efa8c87ba9f2c5cb7d375fb70322e8b21536c55f1ff585b9e0cd8f2b587110acc03d45a0ac1b718a891b6295956a4684a5e8a00255470f52016bc2c98e0dca489796d99965daf35ed46ad65d7eb3681290f984a784eec624efa4071c5528fefc92568405425198eaaeb0b8d93b032a2cbd1c4b71b95beaf00498b9214577f83a477c3e8337c60e708be732ce365ae2ed4c09d767e3b8e32fd3ceaaee3f77f1052515217c41f8dfb73bf339e696e79f6de3d289433c12948893a43abd6b8bd69dab5f7587b5c474def719428d18080d1df314c1438114b259ede00ab02611d7b020000",
    ],
    [
      "ETag",
      "9e2F1qHYsaCxtFOrgxuwhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:34 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8553fd4fdb3010fd5722ef1790fa91a625fd90102b25834e25853485b1696aede4120c691c6c0754a1feefbb2414e890408ae4d8efbdbb77e7f333b9e769480684f1f82107b9fe762718a911d034c6d330d0bddbdff1c3b13c7bfaf5333b3d0e3b2d767978880c5ea8145d6509d495c865006a309f356229f28c4a21ea18a8deb6ea2ddb32bb76c7ecdb9665a34e41124d787a8fea5bad33356836b7b91bb110710234e3aa1188d5eb79f3d16a6652dc41a05573376513b3a8e6e7498f121150cd457a389fa1815c815cc08af2042dbc2943f67d377483d3552346f2230f800681c8535dd8c2108148231ee7b28c4a06cfa4b4f9ee87cc9c8933f28dd174eefa7bcb906a58ee1b54198b85049527ba662cb1a28827b0e0e1b242b27be387373d4704f3df52056a695c9f399e63ec92c7ae31775d67e61b7b47fbc6a9379d5f18c7373b1cf41882d23c2d1dfa942550b87b69e2f8e3d51502aa3167052ebaa64d5b3db3cf22d60da25efb80452630d663dd03da6666d0ef4027644051a78be8a58aa6223de875c1ea98ac6b8614583bb459c78c8a25b018b52942fd16834e876c6ae449720d275c6542f1aa93e4da1bfbcec2f7e6ee68e83b651911c57e9d54e68a22defbd45824923ea96b53a05c60a6e25ac6aeef78c3913fbe72aa4998404c83f5ec016721a2890264534957a0419e8b109b462ea6b3b13f9ebac3092acaebbdd8321419fc797e13f8ebacecb22e5732f4bce10d6aa89474fd1f863e6c6cc1e65dba2b9ae425a5e497bb2afe63059016d6f2b6b3c8e6ef06bf1ac191afa293cbb9e3dd90eac8830824a4c1d7f78ee412f8f2e56e9f1172f121611aa5718f5316a8224920a19a36be2aed56ea56fbc0ecf7484996fa0366d9ad6d5b8b1845445841aa5f2aaa9e51d9a802cad52b09411c1277ec9e22fa0f208f9c50c6040000",
    ],
    [
      "ETag",
      "dct8hZgqBrHwXJpGBd41bQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b023110fd2fd3eb2ed56d4da9e041455a41a4dd2a488b488ce3767577272659ad88ffdd492cc5632fc9e47d0cefe504dbbc5a411b9679b6abd11cef3274ef7e48d1d685b37c69aa2c4204e864c6caa9923f3dfdd9dd89fe4cc8fe7debd09c4d0e9d0e2bacfac65242fb04eb1c8b9585f6d7092a5922db160b1336b2cc1db54786e3c9e065903250d2ca03e3e968d4ed8d06708e6e6c7afb2fcbfc1cc1869629aed160a5d0a7d08636a8dcd017b4b2d405c6966aa3d04210072233546b69886246e287246e8aa4f1241e1bcf2249040b0b52d2e554f9ee1f9c0d1c3959a474e07e90b0c08491abaec3b967b8153aec83c047bbe5c41fd7f4dcfc7761efe8d0be19e274167db0c635649f7c70c7859ca9310225f9975f73777d9f2f957745b1c2010000",
    ],
    [
      "ETag",
      "UcaxBpZAq6CX6aC/5w1XTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:35 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04b7282300000d0bb642d0e5f81ee8c3f1444243a289b0c84f0ab40042540a777afd323bcf703224268d7e157f34d6bf005c64836e7646e3303e28c88e1545c9fed3a0d3cb8dd76fe39939f5e19f00b0c7b0b2f86a612466965717742ca9d1f4e68417de9104ffab04f5955e29d273be9a89f762633b263ac419c48e12bdfd865e59a0cf62e418522a8c63b136f8f9b9522af669cbfa5a05a8eefa96f8acb71a896c286cb46a273c771d3ccae362847bde347522baf5531571e531c84f5d0e1a39d104d3e5b64e544ea4ad1c9fd2a94fbbab599d5b84d86d5bd0866800eac6869878b0f57d14c7306feedf83532fa0980346a690b7eff007429f9cc1a010000",
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
      "Tue, 11 May 2021 20:15:35 GMT",
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
      jobId: "grouparoo-job-33-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c87b6d1212124222456b94d03552423a20ada66942c65ca85b822936adb22aff7d17d374ed26b54fd8bee7dc73ee07cfe49e1709999298670f3554872f772226670414cdf0b554e9f0f7f5fc8a0787916b8bf952c0ddfdd36c8608deb024dd973974a4a82b0672ba0bba5925ea925642743051c7b23a7d7b608eeda139b107031b7912f274cd8b7b64df2a55ca69af77d2ee66426439d092cb2e13fbd7f7dee3a05756e20e9892bdf7923d5491bd8f45bfe68251c54531db0568a0965045b0a73c470b7f99497cfe3e7597d37d3743f0236740191375a11a5b98828922e5595de9ac64fa4cb4cd370712b86b77111a4ce4f5be880aba873323a18a46ea508271e16f37c6cabbd8fa9b79b8da7a51b0b87437f3ee62bbde6dbcc0b8b9747dd75034ce41738d9971ae6f1e5e503f01a978a1d5c3e6b9517e69d0eaffb134049496d006a3b169d3be634ee2341eb3d4b146716a421c3bf17844add86493210c931828f2b4a866d14214d4b2c756bf3f8a1280341a8e1c1639cec489d8c0b21c1827f1209d90e31979aab8822597a590bced10b9f157a11b85fece5bcc43579790d23a57cbd65853c05b8f0a0b44d007351d9b2817a8d4b47be585ae3f5f84ab6bb79df01a32ca0ec103ce38a5b90444d30a9ba7a0da88041b46bcf9c65d22584fecea149464faf399343d6f5cbc69f92b3dc401367695fe9220f457de376de784b8a679ad218fed819468f9166b43d7c75f88c4256db390ef3bd7ff41da271f52a8a0609f4f13c13af0e9bf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b92fecbe3572fa43a2c195fa37669bfdc1a96b4d8e2623eca1502f15b58b8f85b662b57c056110c7efe96e1dff",
      "0098f0bf9f78040000",
    ],
    [
      "ETag",
      "ptf4zVAPiSy5E6oADoejkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "df65bc2d49f92bd2c48b820844448472650859da6929b49dbabbd510c2bb3b5b158d9ae84d3b33fd667bce698fb04ff2105cd824f15389f27011a37e30c51c55996ac5b782728560016a1133797b1865aadb1fc6ddb85dd06c3f13b61f7b57574ca8608b9900f708518269a8c07d3c422e32e4b580d232cbd75567813e1466b8f0e7e3e990fb8c42d34f979389d79b0ce0649d1743a1c5bae2ffb1b63a59b0a3cd1c2394980768b414927618e8b1b1a94456a4585354ca00155470f5209654164212d578526b366b75a761779c96dd751a0d87c19402a113ca995d2e581f68d2229dd30bbb0403c8aa64c351757de6711256464c399efa4eabd2f71560695192e2fa6f90f56e057f860fec3d82ef9cc8a8ccf599ba99dc7bbf1dc7997e1e75edf9831f84d29cd419f1c7778385efddcd0cb77af7de3b685433491ca4429361dd6e5db63b8efd166b9f4cd4fc1e57cb122d0804ff1da344831b8954e1e91512a36d7b7b020000",
    ],
    [
      "ETag",
      "KyHms9CGg9g5poPkPa0TgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:36 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85537f6fda3010fd2a91f74f2bf123044800a9ea589b75916868436885a6096cc7096e431c6ca715aaf8eebb24a52d9db44a48c17eefddbd3bdfbda0479e456884084fb60593bb6f0f82a006621a2770ab276b4cb7c9e2be9fe1f5f3c0b934e75b797b76060c5eaa14dee4296b2a5148cad4683e6b255214399642342150b3db6b766ccb74ec9e39b42dcb069d62693ce1d923a8d75ae76ad46e1f72b712219294e19cab16159bb7fbf693d5cea5786054abf671ca366451edff273d4f05c59a8bec6c3e0303856272c93698a760e15d1991efc7a15b1c6f5a09909f386598525164bab40521a8c8629e14b28a8a462fa8b2f9e10f9ab913f72234ae3dff641561cd56a70656c67229992a52dd3056504fcc53b6e4d1aa46f247e36730bd0604b2afb1626a65dcff7203d738267bbe31f77d77161a27e7a7c655309ddf183f16471c701831a57956f90b314959e9edb585debf0f570ab0869c35b8744c1b7706e690c4c4a1f1a0db27b1c9081910a78fbbc4a4c31eeb458461d0e9327aa5c299c8cc38729c38ee503cc49db8d3ef5ac4e9da66df8c31b3fac472884d0626eea37d033d4baed92557b950bcee23ba0fbcd05d86c1dcbf18876e55468ca15f97b5b9b2888f3e351409a4ffd4b52f512e2053f9289e1fbac1f822f4eedc7a0e262cc17437dbc224c438550cd858e20dd34c5e8b089a866ea6332ff4a6fe78028aea716f0e0c8546bf5fde05e12eafbaacab2f1a07c178011a2c25de7dc2c087dd43fbfd877477382d2a4ac5af4e75fca71a401da8e5fd64a1fd9f3dfc1a0806be8e8e6ee76eb040f555c062265946bf7e772057c0977b7b5822e0c21a411aa5e10c53465599844a564f1bdf54766b75a76b0f1c135564a93f638ed9750e6d2d639411d98665fab5a27a89aa469550a1de4800c290f89e7f05e85f523d612ac4040000",
    ],
    [
      "ETag",
      "tLhacqgYW5nahw87D0UqrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10c7bfcbf9ba25db20534978005d8464129df0a221a48cdbdcd876a3ed300be1bb7b2d467d2069dabbebefaeff7f4fb02f9a1d8c605be4870e657f93a37e354182aaabb4e2a3a5462138805ae44c26e5f32c39f877477f4ba11ebc97ab38eef3f19809957e622d607482acc06aa760f4718246d4c86d9b8db41319d37d6b2a8f9365c4594d3b932d78cc641a477076fef5b4fb3f7ebe58464f5172ad657d76a0a46d82194a6c5234125a4925a67a6edc2951b715ba8a3a99a2020bdb8b5c52d70a49e472c51d0c5d3f0cbcdb70e8dd8741103258512a74410db3ab37d6069ab4a812fa62731030206dc83e33bb1f4dd90b3cd70b785933b664355e85fc5fc837d0fae78969af51bd4862bd0a8d54ef22fb818c15cd16b5ecd08154f0a7cf0a7dc9cfdf95d09ccbd1010000",
    ],
    [
      "ETag",
      "RjMHRq18v1bo6t3ZjULLyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:37 GMT",
      "Server",
      "ESF",
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
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dd04b7282300000d0bb646d1d908fd21d20e1a3a88808b8c90049f8a8100145e8f4ee757a84f77e409265a4eb50df5c490dbec1982c947936dfb09586728ab022374d968c4e15e6b8e2e14bae293329e5d8ce9890124d46fd552d533bb5a9459d77e97243b2ebbd6908a621169ff9f5a805c5823bfb89c57078b7a95b6dddfac42d973eaf59223e086c1fdc59f90825e7ecddcf7c919ebc4d08bda32ffb381227c854c50cdab8926ce40cc50e0a70f49e66bd1516301e06e1a9062bfeb49628d1dd208ee28b384697ee402c752f09b73577a3d8d6c506460f43ef750c6680bc59d9920e951fae2029ca0cfcdb513f32f209d048d29216fcfe019e0cd52a1a010000",
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
      "Tue, 11 May 2021 20:15:37 GMT",
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
      jobId: "grouparoo-job-35-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6fa24014fd2b64f6b52a2a2a9a98ad51ba25abb80bd8a6d96cc8305ce8b4c85066b0691afffb5e86da6dd3a47d6266ee39f79cfbc133b9e745426624e6d9430dd5d3b73b119333028a66f81ad8aba979f5f36eb976c5f581868bac886f1ee77344f08625e9becca123455d3190b35dd0cd2a5197b412a283893ac351a73f1e9893b1654ec783c1187912f274cd8b7b64df2a55ca59af77d2ee66426439d092cb2e13fbd7f7de61d02b2b71074cc9de7bc91eaac8dee7a2df73c1a8e2a298ef0234504ba822d8539ea385ffcc243e7f9fbacbe9be9b21f8c01950c6445da8c616a660a2487956573a2b993d136df3cd8104ceda5986061379bd2fa282eee1cc48a8a2917a2ac1b8f0b71bc3f52eb6fe6611ba5b2f0a9697ce66d15d6ed7bb8d1718d7978eef188ac63968ae3137cef5cdc30bea2720152fb47ad83c37ca2f0d723f8ea521a0b48436184dcc31eddbe6344ee3094bede1284e4d88633b9e8ce83036d9d4022b8981224f8b6a162d440196658de2c48e528ba691d5372791cd12339a0e87a33e1da4609903723c238f1557b0e2b21492b71d22d7be1b3a51e8efbce52274740929ad73b56a8d3505bcf5a8b040047d52d3b18972814a4dbb5d2f74fcc53274af9c76c26bc8287b0a1e70c629cd25209a56d83c05d54624d830e22d36ce0ac17a62bf4e4149667f9e49d3f3c6c59b96bfd2431c606357e92f0942dff57e683b27c415cd6b0d39b40752a2e55bac0d5d1fff221297b4cd427eef1cff86b44f3ea45041c1be9e268275e0cb7fedb4f888c5d54719a9f08ebbc36423c22a687788eb725fd8fde1643c9d120daed487983d364f5d6b723419610f857aa9a85d7c2cb415abe52b0883387e4f77ebf80f6188b30e78040000",
    ],
    [
      "ETag",
      "S8D90VKjCLIoWvaTAgnbYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bc",
      "2d0920146dc205282009203f255e184296765a8aed4edddd6a08e1dd9dad88464df4a69d997eb33de7b407784a64081e6c92f8b940b5bf88d1cc6c31475da446f32d27a9111c4023624b4a6a657d7a98b566af7241d1209ffacdb8dd6642075bcc04780788124c430ddee301a4c890d7024a8b4caecbce01b3cfed70e1cf879301f71985b69f2c47a34e77d483a3735e0c8511eb92ffc7daeae8c08e36738c50a10cd06ac915ed3030436b538b2c4fb1a2a950016a28e1f241aca8c88522aaf0a472d9acd4dc7ab5e536aad76ebdee329852204c4292d9e582f5812123d239bdb24bb0802a4b361c95d7171e276169c496c389ef364a7d5f0196162529aeff0659ef56f067f8c04e117ce74446853467aa3fbaeffc761c67fa79d46dc7effd20b4e1a4ce883f1cf7167e673cb5dceae4bdbb37a8a78a38488d36c35ab571d56cb9d5f7586fc846cdeff18c2ad08140f0df719718f022916a3cbe0199e3b5db7b020000",
    ],
    [
      "ETag",
      "bno7mFoWQ7QwnSofGpPT5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:43 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "e2",
      "40",
      "10",
      "fd",
      "2b",
      "cdde174d104aa92d90180fb1e73581a2a5e899cb0576b7dbba5aba7577ab2186ff7ed35654cee44c48caee7b6fe6cdeccc0b7ae0798c8688f0f4b16472f3ed5e10d4424ce3146e4592cdce5272974fb3ced5c5e07a1cdbeef8f9e40418bc5229bc2e3276a444292953c3c5bc9d4a5116580a7104818e7ace51d7b14cd7b1cd8163590ee814cb9209cf1f407da775a1869dce2e773b1522cd182eb86a53b17ebbef3c599d428a7b46b5eaeca7ec4016d5f97fd2d34c50acb9c84f167330502a26976c8d790616de9531f9be1fbacdf1ba9d02f9895386291565ae2b5b10828a3ce16929eba868f8826a9b1ffea0b937f1c691311dfd3a58c558b3d5a18195b15c4aa6ca4cb78c15d493f08c2d79bc6a90e2c1f811cea68040f63bac985a19373fbdd033f6c97e602c82c09b47c6c1e9a17111ce1697c6d9ed1e071cc64c699ed7fe224c3256797b6da1fff9e12a01d690b30197aee9e06edf1c9084b834e9f78e49623242fac43dc63d62d281cdec98300c3a5d45af55381779ecda76374992d822b19bd89665f55dccbaaee510d78c4dd2a78e6d3bd444db167a965cb373ae0aa178d3477413fa91b78cc245301e455e5d4682a15fe78db9aa888f3e351409a4ffd4b5ad502e2053f5287e1079e1681cf9d75e3307139662ba993fc2242438530cd858e235d34c4e450c4d4397b3b91ff9b360340145fdb8973b8642c3df2fef826853d45dd6f5178dc270740b1a2c25defc83810fc746dbed8774d7382b6b4acdaf4f4dfca706405da8e5fd64a1ed9f2dfc5a0806be898eae165e788b9aab90254cb29c7efdee40ae812ff776b744c0853582344ac319a68caa2a0995ac9936beaeed36",
      "eaaeddb31d0bd564a93f614eb7bf6b6b15a38ac8d62cd7af15354b5437aa824af54602108624f0830b40ff02d6e9938ac4040000",
    ],
    [
      "ETag",
      "oflOBgbhnMl/QG9VCd47Cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85",
      "ff",
      "cb",
      "f5",
      "754b4a353390f0003a054310c748348690322e63b0adb5ed2448f8efde16a33ef0d2de7bfaddf69c1e6157d42be8c0b2c83f1ad487ab1ced8b2b12344d690d6d4ad6062100b4222772f2c6d3c153f5503fabafcdb4886c6ffadade77bb44986c839580ce11d605962b039df723d4a2421a5b2cb4bf91307b504eb9efa53175955cb96e3c1b8d7afd510ca7e0df8cdafdf1c3711a3fc6c9a591f92980ad5c26b8468d7586ce82d2728b991dba744654aac4d0c8466768c0c3fe20d7b251424b1992125e47612be2ec36ba61ed88f388c05266c216b2267636256f60a5156522f7140e3801da979473edd74f2733ce42c6c356db87f192f77809e2ec176a3968fef344ff60d14cb424bf069d5576b67d275d144b11ad6e30804cd0a70f0a7bee4fdfdbb2b86ed1010000",
    ],
    [
      "ETag",
      "PY2THJmFnOpzhSi6tASX9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:43 GMT",
      "Server",
      "ESF",
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
      "1dd04d7282301800d0bb642dce20894097828a48a5d80c5a364c800f1a548206f949a777afd323bcf783589e839469272ed0a03734b1853dcfe7fbd65aa51514c1b8b6bf07e26a605931f62f879ba96e469808e51b865cf6a6d55246f0b988b7a3c8c2ed7858e48e48485da84cedab5372e51fe535a9ad68c7bc40bbdb2014892ecfe77084982738aaa9f3451bea1f33c563d9847db5119ddcdca355551137581f1cac0bd794bb96e9e04ea597bf9f7da66ec472f358ef17dae079a1a2b4e9215a6ae214625eb86546d751580e4153748e8de380e3b3597d26e613cd108c2d7f804cf98b6b10db9ea17f7bda4d2dbc0256c01ef040bf7f12f530c21a010000",
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
      "Tue, 11 May 2021 20:15:44 GMT",
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
      jobId: "grouparoo-job-37-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2b91f7da2424a11022456b94d23552423a20eda66942c65ca853822936d9a22aff7d17d374ad2ab54fd8bee7dc73ee074fe4811709999098678f3554872f5b119333028a66f8fac3dfdf6cddc7e53614d7d6a13683fa6fe865d3292278c3927457e6d095a2ae18c8c926e86595a84b5a09d1c544dd91dd1d5843c3b64cc3b186430b7912f274c98b0764df2b55ca49bf7fd2ee65426439d092cb1e13bb97f7fe7ed82f2bb105a664ffad641f5564ff63d1afb9605471514c37011aa8255411ec28cfd1c27f66125fbc4ddde374d7cb10bce70c2863a22e54630b533051a43cab2b9d954c9e88b6f9ea400277e9cec30e1379bd2ba282eee0ac935045237528a173e5af579d8577b5f657b370b1f6a2607eedae66bdf97ab9597941e7eedaf5dd8ea2710e9adb99762ef4cdc30bea2720152fb47ad83c37cacf0d5abc1f4b434069096d30b20d8b0ec68613a7b1cdd2f1e83c4e0d88e3716c9fd3516c30c704338981224f8b6a162d446132c34e9c3144a633a29169c55644e9308dcea9e124b6119b2603723c237f2aaee092cb5248de7688dcf98bd08d427fe3cd67a1ab4b48699dabcbd65853c06b8f0a0b44d007351d9b2817a8d4b47be185ae3f9b878b5bb79df01232ca0ec123ce38a5b90444d30a9ba7a05a89041b46bcd9cabd44b09ed8cd2928c9e4d713697adeb878d5f2177a88036cec2afd2541e82fbc6fdace09714bf35a43f6ed819468f91e6b43d7c7df88c4256db390ef1bd7ff49da271f52a8a0609f4f13c13af0e9bf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b9cfec81690e1c876870a5dec546867dea5a93a3c9083b28d47345ede263a1ad582d5f4018c4f17bba5bc77f178f0b1e78040000",
    ],
    [
      "ETag",
      "XRvPjEqLjToH6yu4SuxTNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "4f",
      "82",
      "50",
      "14",
      "c6",
      "bfcbe92d6e6886c5e60b2cf3cfd44c70d59a73573820065cbaf75243e777ef5c326bd5566fe09cc3ef5c9ee7811d3cc5590036ace2e8b940519e44a86e75314359244ad22de799443000158b88bc670fa5b9dd6ecc49ebaedfb386fd7cb8759d769b08e9af316560ef208c310924d88f3bc8588ab4e6f3a448b365d519a0ca5c0f5d6f3698f4a84f79a0fbc97c34723aa32eec8de362c0145b56fc3fd6167b03367c35c31005663e6a2db9e01bf4d540db942ccd13ac495e081f255470f52012bcc899e0bc4693da69ab56b71a66cb6a9a1756a3611198709fa99867c4ce5dd2078a2b96ccf82bb9040d88aa24c361757da1711c54467439987856b3d2f7152069619ce0f26f90f4ae197d860fec10c1778ea5bcc8d491ba1edd38bf1d47997e1e75e578dd1f845494d411f106e3aeeb39e3a9e61607ef9d52a19c0a4e414ad419d6cde6f959cb32df63bde43a6a7a8fad448106f88cfe8e7eacc00e592271ff061baa47407b020000",
    ],
    [
      "ETag",
      "XaYy0zzj0N7WHG6JHpJzSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:45 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a3",
      "40",
      "10",
      "fd",
      "2a64ef1f4d6a5b28a53f92c6ab95f3482af528d598cba55d60c0556029bbd4f44cbffb0d60d5464f1312d89df7e6bd999de5893cb0342043e2b1685d40befd76cf3dd220206984bb9db3753fdaf85ac7eaae637e33ef6f82f5dfc7d10811ac64099a64319c085ee43e88e162de8c725e6434e7fc04139d74fa27aaa1b57b86de1e189a66204f401c4e59fa80ec3b2933316cb5f6dacd88f328069a31d1f479f2b2dfda68ad2ce7f7e04bd13a946ca18a687d2e7a1a739f4ac6d3d1628e060a01f91212ca62b4f0ca0cbcef87a99b8c26cd08c11be603f57d5ea4b2b485297c9e862c2af22a2b193e91cae69b0f3237a7e6c45526b385ed1ead68529257c70a15ca7299832862d950565853c86258b2605547b207e58733bbc4083ab8a302c44ab9f9693aa6a2ac4ad0483955c6f6b97248b56c6561dbe6dc558e4e8f950b67b6b852ce6e0f30e8390021595a3976a91743e9f6b9a9d6fba32c0954a2833ab8ecb50daaf6db032ff47a7ed8ef74bdb00d9ed7f77a5ddaf1dafe40073df080224f96d92b164d796a00a586d75141537b3a1d04da40f702e80e54d5875e07689f8641bbad03d935c863ce249c339171c1eace921bc772cda5eb2cecc9d835ab32428add3bafcd9545bcf529b148047d52d7ae8c328e4ae53159b66b3ae3896b5d9bf5644c21a2fe76bec6d908692c00d134a70948c82f79804d2357b3b9e55a337b3c454675dc577b8420c3df4faf04779b555d96d5bbd432f44a7f0fb8a671512136f50751bb64b76bfc3fc5d871c6b7284bf39c6e3f4eff61fe0a5fad6a8b2f7aa454dbaf34b2fbb3c3a741f016d5d9c9af85e9dc927acb81107248fdaf4707c155e0cb9fc1fe662216ef26ca08896b1c545f",
      "94227e0ef5c0b2a4b25bb355bd8ba3482a702edfc53addc1fe64ca1c6546482095cf15d537b36a54192ac40b08833867b6655f60f41f3ef55c9f19050000",
    ],
    [
      "ETag",
      "3Bq8gvc23I5qloWS8vdqzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6e",
      "83",
      "301044ff657b0589908aa6483924156a23a128a54d2f158a1c5828c1b0d436a922c4bf774d72e8b117bc1eded8331ea0aeda1c423856e5778fea7257a279b54382ba9746f3d251ab111c40234a263f30daf92a6889b4948b20cea3733d5f2d974ce8ec0b1b01e100458532d7107e0ed08a06d97638a8e944c6cca5b3ca66fb1e3d47090b0de556d8eee378b58e23189d3fb6aefe97251d1d38d131c10215b619da149da2136666630b6ad174125d4dbdca50c3044f3f4a457d271491cb8a3b5fb8b3c0f71e827bef31f0fd804149993015b5cceedf381b18324226f4c3fd60c6809a46ae5a4cdff324db0eb7291dd39b697d31a8778a3881467bb9770df244369ce1d046f5e84026f8255f2a73dd8fbfbe2ffaa0a6010000",
    ],
    [
      "ETag",
      "VeEP2r6noosll86LdEvk3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:45 GMT",
      "Server",
      "ESF",
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
      "ff1dd04b7282300000d0bb646d1d0ba492ee4401818218030a1b06d2f091af7c854eef5ea74778ef078494b2ae0bfa3a6715f80473c8a1355d1b8d2805099da68df9088b4e9361d3f1c251b5d8927b06afcc8d58a28ce0f77833415fdfc54b5de5a585dff2e79946d174b163d1f938de1f9a318894a407f314d65ecd43e26b9d33f3938d24a404d7a4f2778b64913dbddc82c89dbf21f992e22cb774233f69cce5088282c74d225f7a853b2c251ec7645f415d1d31ea75c6aee31647c4ad9224d565576e15dfd91a70b90be6010baaad0fa927dece4259947182390456803d9bac655d90bdb83c446805feed413f37ec1520b1b0652df8fd0391a444731a010000",
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
      "Tue, 11 May 2021 20:15:45 GMT",
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
      jobId: "grouparoo-job-39-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4014fd2b64f6ab6da1a50f9a346badb83669e94aa9bad96cc8305c70141864064d63fadff732585763e27e6266ee39f79cfbe0853cf022265312f1f4b1866affed5e44e48480a229be669bd55572e1fafb72ddbfdd9d95f9f3edf8ec6a3643046f5892e665061d29ea8a819ceeb6ddb41275492b213a98a833703ad6a86f8e47b6e98cfafd11f22464c98a170fc8be53aa94d35eefa8dd4d854833a025975d26f2b7f7de53bf5756e21e9892bd8f923d5491bdaf45bf678251c54531db6dd1402da10a21a73c430bff987174fa317597d3bc9b22f88933a08c89ba508d2d4cc14491f0b4ae7456327d21dae6bb03d9ba2b7711184c64755e8405cde1c488a9a2a1da97605cf89bb5b1f42e36fe7a1e2c375eb85d5cbaeb7977b159edd6ded6b8b9747dd75034ca40738d9971aa6f1e5e503f06a978a1d583e6b9517e6dd0f2f3581a024a4b6883e1d81c516b623a51128d5932190ca3c484289a44e3211d4426736cb0e30828f2b4a866d14214f628199ba6638589e940680f2d2b8c0683381c8cfb5642130b204ec8e1843c575cc13997a590bced10b9f197811b06fece5bcc03579790d03a53e7adb1a680f71e151688a02f6a3a34512e50a969f7d20b5c7fbe0896d76e3be115a494edb78f38e3846612104d2b6c9e826a2d626c18f1e66bf71cc17a623f8f4149a6bf5f48d3f3c6c5bb96bfd1031c606357e92fd906fed2fba1ed1c11d734ab35e4a93d90122ddf616de8faf00791b8a46d1672b573fd5fa47df221810a0af6ff69225807fefbaf1d171fb1b8fa282315de7177986c445805ed0e715dee2bdbb28793fe906870a53ec59c897dec5a93a3c9083914eab5a276f1b1d056ac966f200ce2f83dddadc35f58584e6478040000",
    ],
    [
      "ETag",
      "lOLQfFERypM2XUBpmwX7BQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085df657a5948d45aac245e60b54ae25f156f6c8c5961501458babbd8aaf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c2364a03b06119ad9e7314fbab15aa475d8c51e6b19274cb782a110c40c556441e9cc1f430dc765b6b6796775e9b91b3bb9e398d0611d25f63c2c03e4218611c48b09f8e90b20469cde7719ea48ba23340ed333d9c786377d0a13ee181ee07d35ecf69f6da70322e8b01536c51f0ff589b9f0cd8f0e518431498faa8b564826fd057aeb6295992c5684a9e0b1f251470f16025789e31c1b94913f3a66e96ad4aa966554b75ab52b1088cb9cf54c45362a713d2078a2b168ff90bb9040d88a224c36171ddd1380a0a23ba74079e552df47d05485a18c5b8f81b24bd6b469fe1033b47f09d6309cf5375a11e7a43e7b7e328d3cfa35a8ed7fe414845495d10cfedb7279ed31f696e7ef6dedc2b9423c12948893ac372a97a775bb34aefb1de731d35bdc7562247037c467f47375260872c96787a033d4703b27b020000",
    ],
    [
      "ETag",
      "zANUzOkHDhAZuGxBiAv+ZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:46 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3010fd2ac8fba795f283100a49a4a8cb52d631a5a425a45d374d892186ba2198da265356e5bbef304dd3ac5b2b21817defdd7b773ef38896345ba01e0a69f25010bef970cf42544344e20476bb4bbebcbe4f5a0ff46bf1fb42c8eef7e9fadb55bf0f085ab2045ee529a90b56f08888de74d248382b72cc19ab43a2baa9d75b96a1db96a9772dc3b08027481a8f68b604f69d94b9e8359b3bed46c25892129c53d188d8ea79bfb9369a3967f72492a27928d90415d17c5bf4346511969465fde9040c1482f01959619a82853d73117e3c4cdda078d54800bca611c151c48a4c96b62045c4b2982605575951ef11299b2f3ed0c41939c3401b8ea75e7034c7ab923c3fd6b0d066334e4491ca9a36879a629a92195dccab48bed43efbe30b8880833b2c88986b375f1cdfd1f65b73adaf9d6a03ef4c3b4ce07adad4f39c49a01d9d1e6be7fe787aa97dba3dc080f305119266ca7780c394949e9f5aebbe3ed09280258856c199ad5bb8d5d1bb611cda51dc699f84b14ec2b013da27b81dea51d724e622241878b2ccae583863996eb475d2b6e139314c33320d6c7781d7eec4ed8ede89bb7ac72076a765a16d0dfde25492332a722668d55f74e3bb81330bfca9371c048e2a23c6d0c3b3ca5c59c44b9f128a04d01b756dcb2865a0541e96eb058e3f1806eeb553cdc7882438da4c1e6042629c0a0268ccf18a48c22fd8029a862ec7133770c7de60040c75e8973b8440bd1f8f7b42b0c95597a57aa349e0bbdeb932b0435ce3b4509075f58106397845db6dedff6906be3fb80569cc39defc1583722cb3a4ff4342e1d5aab2b9936ca1526db732d0f6e7169e1a82fb5465475753c7bf45d5964f62c24916bd3f3e005681777f0bbb3b0a58b8a5202324ac615823518a449c54434b57ca6ec56e9996ad1b4881b97c15eb421b6afbbb5966242b92c9a78aaa3baa1a55860af10c8220cc9aa70e6afb07",
      "9053511623050000",
    ],
    [
      "ETag",
      "9krkVjg1qiJuzMst9ZUvXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6a",
      "c2",
      "40",
      "10",
      "85",
      "df",
      "65",
      "7a9b408c9a52c18b5a422b5aa9a916da22b2c6491a4d32717f1411dfddd9b5142f7bb33b7be69be19c3dc1b6a8d7d0835591ef0ccae35d8e7a6a8b049529b5e2aba15a2178805ae44c1acaabee74987ded32f33a1b75ab8ff6e8f3d0ef33a1d21fac04f44e901558ae15f4be4f508b0a796cb9946e2363fad858653899c5cf71c242456b2b4ce6e3f1e3601cc3d9bb196bb6ff1a599c3dd8d02ac10c25d6295a178da40da67a68032a513525fa8a8c4c5181835d2397641a21897c56fc4ee0b7a230b88f3ac1431486118325a5421754333b7f676fa0498b32a103e7839001e94a8e9ab973cf72db65d83bc05abbed857fbd96ed2d7e170e8e1ad59b2476a7d01a0bae269fc81ad71c484b831ea4827ff9a5d0d7f7f902e9e94063c2010000",
    ],
    [
      "ETag",
      "uogm5QIfZqfuMTK5mV3KYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:47 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0516e82300000d0bbf45b0c9d48607fa010672d110743fc6948298a48415ab1c5ecee333bc27b2f5050ca8420b26b18079f40171fee9cce51eff8e44c7384efd7d45477cf4c264f4d3747c89fc818f4a96f22ade543f389d807f808131f3e7992da115c35ee909f6477895504bbaaddecf1b641a918fd60778a6f70637d7b6be48d4b4293afa3a7782bf9c25bac332310d660895a656d13c3da5f29a28f23657670500edd76a57341617e0b23551d52b549f1f99167823b16dfa99d9dd0126374b5a19984e33ece9b2a338e13c3638944fb3450e476cb3e0033c0545f0f4c90facd5d2c5d7706feed44ea9ebd037c560c6c00bf7fe560e9991a010000",
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
      "Tue, 11 May 2021 20:15:47 GMT",
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
      jobId: "grouparoo-job-41-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3014fd2bc87b6d1292924022456b9ad2152d211b21ada66942c65ca85bc0149b4c5595ffbe8b69ba5695da276cdf73ee39f7832772cfcb84cc48ccb38706eac72f772226270414cdf0755c9e9fb3b1baab93e1f4f23e48fd9befeb65369f2382b72c498b2a879e144dcd40ce76db7e568ba6a2b5103d4cd4b386bde16464da13cb9c4e46a309f224e4e98a97f7c8be55aa92b3c1e0a8ddcf84c872a015977d268a97f7c17e34a86a71074cc9c15bc901aac8c1c7a25f73c1a8e2a29cefb668a091504750509ea385ffcc243e7b9bbacf69d1cf10bce70c2863a229556b0b533051a63c6b6a9d95cc9e88b6f9ea40b6eeca5d86061379539451490b383112aa68a41e2b302e83cddaf0fccb4db05e84dec68fb6cb2b77bde82f37abdddadf1a37576ee01a8ac63968ae3137cef4cdc70bea2720152fb57ad83eb7cacf0df2de8fa525a0b4842e18d9e6840e1d731aa7b1cd52e7741ca726c4b113db637a1a9b6c6a8195c44091a745358b96a2b41dc71c0f4710514659644d2d2b72ecf1343a4d868cc514281dc5e47042fed65cc105979590bceb10b909bcd08dc260e72f17a1ab4b486993ab8bce585bc06b8f0a0b44d007351dda2817a8d4b6dbf34337582c43efdaed26bc828cb2c7ed03ce38a5b90444d31a9ba7a05e8b041b46fcc5dabd40b09ed88f635092d9ef27d2f6bc75f1aae52ff41007d8da55fa4bb661e0f9dfb49d23e29ae68d86ecbb03a9d0f22dd686ae0f7f10894bda65213f776ef08b744f01a45043c93e9f268275e0d37fedb8f888c5d54719a9f08ebbc3642bc26ae87688eb729fd943cbb6cc11d1e05abd8b4d2ce7d8b536479b110a28d57345dde263a19d58235f4018c4f1fbba5b877fe6a330cf78040000",
    ],
    [
      "ETag",
      "5nBBc5tjrd19FkRfNWKMCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cb",
      "78a5b1ad884ad243ab55892dad2df5624cb3c240d185c1dd45d334fdefcea256a3267a8199e19be5bd071b78cccb047cb8cfb3a71ad57a2f43736d8b19ea5a1acdb78a4a8de0001a91317930b90a6fdc15ad3bfbdd500ce7c140e64f59afc7848e575808f03790e628130dfeed064a5120afc524eba25c369d03665dd9e13c9a05e105f70525b60f17a3517f301ac2d6d92d26c28865c3ff63ed6eebc003ddcf304585658c564ba5e8016313589b5a1495c496a65ac5a8a1819b0799a2ba128aa8c59396db6975bc6efbc873db275eb7eb3128291626a792d9c59cf5812123e48c5ed825584035251b4e9beb338ff3a43162cb208c3cb7d1f7156069692e71f937c87a57823fc307f61ec1774e14549766479d8f26fddf8ee34c3f8f3aeb47c31f84369cd40e8982f1701ef5c753cbddbd7b1fac0deaa9220e52a3cdb0d3768f0f8fbcf65baca764a3e6f7f846d5e8402cf8efb8cc0df8a9901ab7af671845717b020000",
    ],
    [
      "ETag",
      "3OKNV4hoy1/2NaESIBliqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:48 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554fd6f9b3010fd5790f74b2be50b924012a9ead286754829690969d54d53621c43dd02a6b6491555f9df7798a61febb64a4860df7bf7de9dcf3ca17b96afd108452c7928a9d87eb9e3116a20aa7002bbd39e73eede896c7242a4b7497e5c3ab762fc7874040856b124ce8a9436252f05a172b498b712c1cb020bce9b90a8d9b39aa66d751cbbd719da9665034fd2349eb2fc1ed8b74a1572d46eefb55b09e7494a71c1648bf0ec65bfbdb1da85e0779428d97e2fd90615d9febfe871ca09568ce7478b39182825154b9a6196828557e63afafa3e758be1ac950078c308c584f03257952d4841781eb3a4143a2b1a3d216df3cd079abb53f734344e670b3f3c58e1ac22af0e0d2c8de5525059a6aa61aca0a698a574c9d6ab3a52dc1bdf82d93944c0c12d9654ae8cebef6ee01aaf5b2be3c83836c6fec4789fc0f38d85efbbf3d038383e34ce82d9e2c238b9798701e76b2a15cbb5ef104729ad3c3fb7d6fb78a015012b10ad834ba7636373d0194671e49078d0ed47718746d12072fab81b75c8b0477beb8862e0a92abb66e19ce710b03a18d36e6c0d2cc732fb66af6bda6bb3ef5876d78962d271065dd237d1ae811e055374c264c125abfb8bae032f749761b0f04fc7a1abcb8831f470529bab8a78eb53419100fa4f5dbb2aca38285587e5f9a11b8c4f43efcaade7634a134cb6f307989018a792021a0b9c5145c5395f43d3d0c56cee85decc1f4f81a10ffd628f9068f4f3e995106e0bdd65a5df681e069e7fa60dec1157382d3564537f205c8057b4db35fe9d661c04e31b90c642e0ed1f3128c7ee55f4bf4868bc5ed536f79255e75f5716dafddac1d340709feaece872e10637a8de0a684c05cdc9e7e303601df8f4b7b0bfa380855b0a3252c11a8695c84a84085a0f2dcbb4dd9a6df6067d7b803458a80f31c71cee4fa7ca5165a419cdd57345f51dd58daa42a57c01411066cdd707b5fb0d3747c0c423050000",
    ],
    [
      "ETag",
      "L47MEjrmDBcsIvgZQ7hrAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83401085ffcb788504498b91a487b612c56063519226c634db658ab40b83bb4b9410febb03f6e0d1d3eebcf9e6ed9bede15cd6398470288bcf16757755a0dd8e97144dabace1a3a1da20388056144ccad89fef4c7bb7dcd54ae9c779fcfd94adb78b0513467e602520ece158a2ca0d846f3dd4a2421edbeff5e4c898ed9a518937afd17d94b250513e0a9b2c4996ab2482c1f933d69cff35f23e3870a2438a47d4584b1c53349a4e286d3c2e6844d528740db55aa281099e1a85a6b6119ac865c59df9ee75e07b37c1ccbb0d7c3f60509114b6a49ad9ec85b381252b544a5fbc1f7870a9579d45f3ac89cd0de6970e3bae697cd7721eab5b74400afea487d2fed6c30f0bf14aba81010000",
    ],
    [
      "ETag",
      "cI25XsuDAXnllrJ5IxMUCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:48 GMT",
      "Server",
      "ESF",
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
      "d0",
      "db",
      "6e82300080e177e9b5184519b03b2b0727e2246c03b96968295858a51c8650b3771fd90bfcc9f73f414a08ed3ad4d715bd835730a5aab9244b4f181015c47082a89f2cdb277cbdbe55d0ee8536d2709f0d22fcc2578ba8d6196a282b4f1c1e2e377da5a9617e657cb38f8db9941f576c500a96209b49e5fbae8830aa70899c68e7dbea91b95d8aef126fe373e779657e3270369c1ad158fd6827fae5c021f6db56366f2f72a4626756d1073242afe0b917e83fc14109e4f43e29faba3a0ebe88eb44c7f2e19a3b12970f27959c3bd9cade1211ba75e47c5a8f188105a0a3602ded109bb91bcd3417e0df8efa49d07900a4694b5bf0fb073d56f8dd1a010000",
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
      "Tue, 11 May 2021 20:15:49 GMT",
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
      jobId: "grouparoo-job-43-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2bc8fbda2440c8538ad62ca52b52423620ada66942c6b950b704136cd25555fefb2ea6e95a556a3f61fb9e73cfb90f9ec83d2fb6644a129eed6ba81ebfdc89849c115034c3d7ebf06ff0c0fdf17eeff1851d6c8bcd8df7ed613643046f5892eeca1c3a52d4150339dd84ddac1275492b213a98a8e3f43bd6d0364743c79c0c6d7b883c0979bae4c53db26f952ae5b4d73b69773321b21c68c9659789ddcb7bef60f7ca4adc0153b2f756b2872ab2f7b1e8d75c30aab828669b100dd412aa187694e768e13f739b9cbf4ddde574d7cd107ce00c2863a22e54630b533051a43cab2b9d954c9f88b6f9ea404277e92e228389bcde1571417770666ca9a2b17a2cc1b80cd62bc3f32fd7c16a1e796b3f0e1757ee6ade5dac979b951f1a37576ee01a8a263968ae3133cef5cdc70bea6f412a5e68f5a8796e949f1be4bd1f4b434069096d301e99436a8dcd49922623968efb8324352149c6c96840fb89c9260e38db0428f2b4a866d142140360ce646c5bf1b86f8f62270116d3813d89fba6c58656c26c6b6492e31979a8b8820b2e4b2179db21721378911b47c1c65fcc23579790d23a5717adb1a680d71e151688a00f6a3a36512e50a969b7e7476e305f44deb5db4e780919658fe11e679cd25c02a26985cd5350adc4161b46fcf9cabd40b09ed88f535092e9ef27d2f4bc71f1aae52ff40807d8d855fa4bc228f0fcefdace09714df35a430eed819468f9166b43d7c73f88c4256db3909f1b37f845daa70052a8a0609f4f13c13af0e9bf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b9cf6ccb9958ce886870a5dec5ec897dea5a93a3c9083b28d47345ede263a1ad582d5f4018c4f1fbba5bc77f3d6a55fe78040000",
    ],
    [
      "ETag",
      "VSxRwiN8qqIiC2RdnUWIBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92d14ec2401045ff657c2db120146dc203086213408462620c214b3b2dc56db7ee6e250de1df9dad88464df4a59d999ed9de7bdb3d3c2759082eac93f8a540599ec5a8ef4d31435570ade8968b4c2158809ac544b6d6d1e3d566527778ff61d80acb1d3fb7cb5da743840a36983270f71025c84305eed31e329622ad05821769b6aa3a0b74999be1dc9f799321f5a9084d3f598c46ddde680007ebb41832cd5615ff8fb5e5c182ad58cf3042895980464b2ec51603ed199b8aa539c79a12850c504105570f62298a9c49216a34a9352f6a75a761b79da67de5341a0e815c044c2722237631277da085667c2676e4120c20ab920c47d5f595c649581931a537f19d66a5ef2b40d2a284e3ea6f90f46e187d860fec18c1778ea5a2c8f489ba19dd757f3b8e32fd3caadff5073f08a529a913e27be3c1dcef8ea7865b1ebdf74a8d6a2a0505a9d06458b79b97adb663bfc77a2d4cd4f41e57cb022d0818fd1db7890637625ce1e10d09b13a5f7b020000",
    ],
    [
      "ETag",
      "5bfY9hN16lDVG5dywl/0yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:49 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "eb",
      "6e",
      "9b",
      "30",
      "14",
      "7e",
      "15e4fd69a55cb8855ca4a8cb12d651a5a423a455344d893186ba259860d32daaf2ee3b40d336ddd64a91023edfedd8c73ca27b9686688002166f0b9aef3eddf1003510953886d5dd45b8fd7d777131d992e5181789abb9763c1a0e01c14a96c09b2ca14dc18b9c503158cc5b71ce8b0ce79c3741a8699a4dcdd2d5ae65aa7d4bd72de0099a445396de03fb56ca4c0cdaed83772be63c4e28ce986811be795e6f3fe8ed2ce7779448d13eb66c838b68bf6f7a96708225e3e97031870085a0f98a6e304b20c20b330c3e1f4bb718deb462003f30423121bc4865190b24084f23161779a58a068fa88af9ea01cdeda93df695f16ce1fa276bbc29c9eb53050b65b5caa92812d950d6d053c412ba62e1baae64f7ca576f76091548708b05156be5e69bedd98ab20eb1a46b65a89c292377a21c931d5759b8ae3df79593b353e5dc9b2dae942fcb230ca40ea9902cad32fb38486899f7695b9dbf0fb324600919eae2aaab5a58eba9fd200aba24ea199d20526910f4826e071b814afa2635c38062e0c952bd62e194a73d2d328cc03208ed1906b10cdab3fa8474ba41370c75ac19a6199951a71fa27d03fdca99a41326322e58bdb7e8c6737c7be57b0b773cf2edaa8d0826514eea706513af734a681240eff4b52fab8c835379508eebdbde68ec3bd7763d1b531a63b29b6f613a229c080a689ce30d9534bfe4216c1aba9acd1ddf99b9a32930aa03bf3a20041afc787c21f8bbacda6559fda349d9c0fe95e0354e8a0af0503f205dd5d5a6aa37b50edaef1bff571a79de6809ee38cff1ee4d0d3ab2cc92fe0f9f0a5fbdd5490fbe1a2add9e53a0fdcf3dfc1a08ae53ad8ebe2f6c6f89ea258f4634a729f97882005c153efc2a1cae2860e19282",
      "8d90f00ef34a446942725acf2ddb54716bb666f6fbbdea9b22712edfd43aaa665987032a354a45baa1a97ceaa8bea2d54695a5423c83a008e3e63aee3954ff00c1380c0522050000",
    ],
    [
      "ETag",
      "yJdqxjJJDqcYCaulN1NEgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d90416f82401085ffcbf40a891aa52989076d4935215aa136260d312b0c14050677973668f8ef9d450f3df6c2ce3ebeb7fbde5ee1945709b870c8b37383b27dc8506fcc10a06a0aad78a9a9520816a0161993bbdd62b2b9842feb70928b8ff3da5b5c1c7f369d32a1e22f2c05b85748732c1205eee7152a5122dbf67bd99fc8986e6ba32c57efdeab17b050526284d5d6f76773df83cefa63ab4fffb2449d05473a0498a2c42a4693a29674c4582f4d4125caba405b51236354d0c3fd8f4c52530b4964b3628fc7f6d0190d1e9df1e0c9198d1c060b8a85cea962761b7236d0a44511d00ff7832103b21fb96ada7fbf7bd974b84f5117dd4df356a37a93c409149acb07b720cf64c2690ead658316c4825f7291ebdbbefb05d2e421dda6010000",
    ],
    [
      "ETag",
      "XXH5QzSDOS5iaVqOEHz6LA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:50 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64ad8e0151d31dd8f2119000750ad964421a3e2288115b62a777afd323bcf70318e7e276a3e3a5153d78018a6968c117feb0b56825548dbaa994198fa9bbac34bcb444957f40376f5acf9bae328f83b9a1c8dd81b278dd9938fdcade87d414578acf91dc4cce672c1032ed1d5f8f8fcd78257a62abf6a1537a5f93ae65a78beed79d85487f5cd5e1d1de4009e3c3c176e6ec141cea9e9fb02af01e3253e541bdd46448efdbec5132423c1e3a7e1624c17ed5c8b3a9557c17901416151cbca825721e8d117e73cb21eb0d9c7c9b4deaaf740466404c4323c58d364fae6e203403ff763aaa413c032cc1a490e0f70f20c831541a010000",
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
      "Tue, 11 May 2021 20:15:50 GMT",
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
      jobId: "grouparoo-job-45-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f74adbb44d9bb45235aa1246259a6e690a62d314d9ee4d302471881d5085fadf77e350064282a7d8bee7dc73ee479ec9bd2876644a98481f6aa8f6dfee24232704344df1f5e6a660bfe94568df83bfc8ebbd7b3e2caf9e6633448886a5685e66d051b2ae38a8e976d34d2b5997b492b283893acea8d31f0f6c77ecd893f16030469e822cb914c53db26fb52ed5b4d73b6a775329d30c68295497cbfcf5bdf738e89595bc03ae55efbd640f5554ef73d1ef99e4540b59ccb61b34502ba862c8a9c8d0c27fe68e9dbe4fdd1534efa6087e141c28e7b22e74630b5370592422ad2b93954c9f89b1f9e64036fea5bf882c2eb33a2fe282e67062eda8a6b1de97609d87eb95b50cced7e16a1e2dd741bc595cf8ab7977b1bedcae828d757de187bea529cbc070ad99756a6e015e507f074a8bc2a847cd73a3fcd2a0e5c7b134049456d00663d71ed3be674f58c25c9e78c3114b6c60cc63ee880e99cd270e383b06147946d4b068218b816b33db7126b163bb5eec781e8bbdb167c7c3fe9061b2be934cc6e470429e2aa1e14ca8522ad176885c87cbc88fa3701b2ce6916f4a48689de9b3d65853c05b8f1a0b44d027351d9aa890a8d4b47b19447e385f44cb2bbf9df025a494ef370f38e384660a104d2b6c9e866a2577d83012cc57fe1982cdc47e1e838a4cff3c93a6e78d8b372d7fa54738c0c6ae365fb289c265f0c3d83922ae68561bc8637b20255abec5dad0f5e12f227149db2ce4d7d60f6f48fb1442021514fceb6922d804befcd78e8b8f585c7d94511aefb83b5c3522bc8276878429f785dd1fd9ae3d22065ce90fb1c96078ec5a93a3c9083914faa5a276f1",
      "b1d056ac56af200ce2f803d3adc33fa217a14278040000",
    ],
    [
      "ETag",
      "YYnbZaHR0keECmuy7F3pVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "657c2db11228da840740542220d062420c214b3b8562dba9bb5b0921fcbbb315d1a889be7467b66776efbded1e9ee32c041796f1eaa540b93b5ba11e9b6282aa48b4e225a74c2158805aac988cbba38ebd2595cf3c4f9fab47ed84f7b371b3c9840ad6980a70f710c598840adca73d6422451e0b2829d26c517616e85d6e363d7fd21bde729f5268fae1b4df6fb5fb5d3858a7c15068b128f97f8ccd0f166c6839c1082566011a2db9a40d06ba676c2a91e609561415324005255cbe58492a7221892abc53a9d52b174ed56e3835fbcaa9561d06130a848e296376eab13ed0a44532a12dbb0403c8b264c351f97c355185a51153f686be532bf57d05585a1427b8f81b64bd6bc19fe1033b46f09d132915993e5137fd87d66fc771a69f475db7fcee0f42694eea84f8bd41d7f35b8391e1e647efed9d463592c4412a34195ed8b5cb7ac3b1df63ed90899aef71b52cd08240f0df71176b702391283cbc01919a74de7b020000",
    ],
    [
      "ETag",
      "iEPC0wospYSSt/sVt6dKYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:51 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2a91f74fabf1c3092150a4aa6334eb2241a021b4eba6099c70a16e9398c64e2b56f1dd77494a3bd6ad959048fcdebb7b77becb23b9e5e992f448c0577739649b0f37222035028aadf0540edbdf28fcca93c18377167fec0c6726cdcf8f8f91c10b9564c93a86ba14791682eccda68d5526f235cb84a863a0ba69d575cba01dcba447966158a8931047439edea2fa5aa9b5ec359bbbdc8d9510ab18d89acb462892e7f3e6bdd15c67e20642259bfb299b984536df4e7a128b90292ed2e3d9140de412b239248cc768e145b90c3eed876e7096345648bee721b0301479aa0a5b18221469c45779564625bd4752dafce3814ceda13df0b5c178e6fa070b9614e2c5a1c6a4369f6720f358d5b405d614f118e67cb9a890f5adf6c51b8f104107d74c825c68975f6dcfd6b48554e86ea11d6b275adf3dd5f6d58eabcd5cd79efadac1c9a176e68d6713edf3d51e076d2f412a9e96a67d16c450187eeaabf3fa360b015368a202e71d6a31bd4b8f8228e88451b7d50e220a41d00d3a6dd60a68786482b90c80a14e15d14b154b45da093b5da09db665991040642c4dd6d681eaeda815842d4b37ba10b5ba6c49b635f2907105a75cae85e45573c9a5e7f8f6dcf766eea0efdb651911c3069e56e68a22fef4a9b04824bd51d7b640b9c04cc54d39ae6f7bfd81ef5cd8d5700c61c5c2cdf40ec72362b10464b38c25a0201b8925368d4cc653c777c66e7f888af2c6273b8624bd1f8f2f027fb32ebbacca7fe23b23bca3fe68527ad8912e589c97acfbea8118d4a0756ad4f5b6af1b3dbdd5d3cd06a5f43bd96e6bff0fdef7bcfe151a6259c6367f6158a46516f27f642df9e55b657ee7422745b6674f64fb738bbf1ac115aba293",
      "f399ed5d91eac883083248c3f7870ac925f0ee9762b7b6c8c5c5c534b8028ae30887b2481266508d324f4abb955a6f1b7af59d512c53afb09641777756c428224202a97aaaa85adbb2510594cb6712823881aee39e21fa1b21d7403a36050000",
    ],
    [
      "ETag",
      "sL5X0ezumCwRGl+7LU40uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "301485ffcbdd2b24e80c66263ec8429c8951c766966531a6c085a1d05bdbe2620cff7db7e8c31ef7426f0fdf69cfe9158e95cc610269559e5ad4978712edab1b12346d6d0d2f8aa441f000ad2899fc90731546a754aed7261a3c9e679bc5f873369d3261b26f6c044cae505458e706265f5790a241b6edf7ba3f91317b514e59acdee3799cb0d050ee84d576b99c45cb183aef8f4d1dff65d9751e1c284db0408d32439742693a606617aea0118daad137d4ea0c0df470ffa3d4d42aa1897c56fc51e80fc261300e47c153381c860cd694095b916476fbc6d9c0921575423fdc0f060ce87ee4aa45ff3df7b2eb709f76ddee6e8a2e16cd46132730e82e0f6e419ec985b31cdaea163dc804bfe44b656ffbee1769c8417aa6010000",
    ],
    [
      "ETag",
      "WnGp6BqbnOOsB13vAPI7YA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:52 GMT",
      "Server",
      "ESF",
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
      "1dd0c97282300000d07fc9591d05d1d01b4b51400a042aca858921c3a62c21cad2e9bfd7e927bcf7033021b4ef13de54b4061f60c282bc222bbb856a92d17b468cb0820c5de679c0a63648f2eeb8469e35a3c35892e0d139c43d1e523b4f793e176abd0ca22c1c3516079ac4dd8a71ef59c456e17dbd6ea8362357a1b7d2121e5dea220f2a9db81504e66c9c412a89989f2f96f27d9a8ca5b2673d8c847024f940944edfe83ddfebf635331dc3f771353bbbcff229f063976297acc30679f4e05fa994cdecf43a473513351894c905d6e47c67326ac2d8b030da32b000746c0b46fba4787345499617e0df9ef0a9a5ef0095624619f8fd03c1ec1ef71a010000",
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
      "Tue, 11 May 2021 20:15:52 GMT",
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
      jobId: "grouparoo-job-47-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2bc8fbda04421e9048d11a2574454ac84648ab6a9a90712ed42dc1149b6c5d95ffbe8b69ba5695da4fd8bee7dc73ee832772cf8b1d999084670f35548f5fee4442ce08289ae1abbf58adfbf67898fce9dde41777dbb5993efc9d4da788e00d4bd27d9943478aba622027db4d37ab445dd24a880e26ea0c9c4e6f645bce68608d47b63d429e843c5df2e21ed9b74a9572629a27ed6e264496032db9ec32b17f79370fb65956e20e9892e65b491355a4f9b1e8d75c30aab828a6db0d1aa8255431ec29cfd1c27fe62e397f9bbacbe9be9b21f8c01950c6445da8c616a660a2487956573a2b993c116df3d5816cbca5378f0c26f27a5fc405ddc399b1a38ac6eab104e3225caf0c3fb85887ab59e4af837833bff456b3ee7cbddcae828d717de9859ea1689283e61a53e35cdf02bca0fe0ea4e285568f9ae746f9b941fefbb134049496d00663c71ad19e6b8d93347158eaf687496a4192b88933a4fdc462e3010c760950e46951cda205d6dcb35cb70ffdd84e611c0f1c80d875522b0687b9c96e00fd9e9b90e319f95d71050b2e4b2179db21721dfa911747e13698cf224f9790d23a578bd65853c06b8f0a0b44d007351d9b2817a8d4b4db0f222f9ccd23ffca6b27bc848cb2c7cd03ce38a5b90444d30a9ba7a05a891d368c04b395b740b09ed8f7535092c9cf27d2f4bc71f1aae52ff40807d8d855fa4b3651e807dfb49d13e28ae6b5861cda0329d1f22dd686ae8fbf10894bda66213fb65e7843daa71052a8a0609f4f13c13af0e9bf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b9cfecded076ed1ed1e04abd8b8d07fd53d79a1c4d46d843a19e2b6a171f0b6dc56af902c2208e3fd0dd3afe03e558bb1c7804",
      "0000",
    ],
    [
      "ETag",
      "IDMO3295bx1YlFjUO/fqzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d925b4f83401085ffcbf84a93b6566a49fa402f2ab1574a7d314db385815281c5bd689aa6ffdd59acd5a889bec0ccf0cd72ce81033ca545040e6cd2e459a3d85f24a8e6a6f051ea4c49ba95bc900816a0620991fd30bfef77a6897f99a88ef6268307bd1bcebb5d2264b8c59c81738038c52c92e03c1ea06039d25ac8339d17ebaab340ed4b335c04be37b9a53ee791e927cbd1c8ed8d8670b4ce8b11536c5df1ff585b1d2dd8f18d8f310a2c42345a4ac177182acfd8942c2f33ac49ae4588122ab87a9008ae4b2638afd1a4d66ad71a76b3deb65bf58edd6cda04663c642ae505b1cb05e903c515cb7cfe4a2ec100a22ac9705c5d5f689c469511537a93c06e55fabe02242d4e335cff0d92de2da3cff0819d22f8ceb19ceb429da99bd1d4fded38caf4f3a8811b0c7f105251526724f0c6c345e08e67865b9dbcf7f60ae54c700a52a2c9b0516f5d5fb5edfa7bac7d6ea2a6f7384a68b42064f477dca50a9c9865128f6fd08c944d7b020000",
    ],
    [
      "ETag",
      "CcmKC9OgR3gt9uINDVujEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:53 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54fd6f9b3010fd5790f74b2be58bf0111229ead284766829490969154d5362c0502f04a7d8748daafcef3b4cd336ebd64a4860df7bf7de9dcf3ca135cd22d443014dee0b92efbefc6201aa21227002bbdf35f6b8184c47ecd218cf77dee3fa66786e5df7fb80a0258be3cd362575ce8a3c24bc379f35929c155b9c3356874475ddaaab66bbd531f556d76cb74de07192c6639aad817d27c496f79acd837623612c4909de52de08d9e665bff9d06e6e73f68b8482378f259ba0c29b1f8b9ea52cc482b2ac3f9f818182937c493698a660e19519055f8f533728de3412003fd090e0306445264a5b902264594c9322975951ef09499b6f3ed0cc1edb435f194ee6ae7fb2c29b92bc3a55305796cb9cf0221535650535c534254b1aadaac876ad5c78932b8880833bcc095f29b7df6ccf5694430ea5af9c290377a41cd31d5799bbae3df39593b353e5d29bcca7caf9e20803be23c205cda46b1f0729291d3f37d6797f9c25010b705105979d968955abd50de2a013c6966604718b048115740cac05adb0ab133d0a08069e28b34b16ce5866697a171b6d233454d550a36eab15aa7a60624debe846d48e3ba44bd4c0b0d0be867ee7549011e55bc669d55d74eb39bebdf4bdb93b1cf8b62c23c6d0c15165ae2ce2ad4f014502e883baf6659432502a8fca717ddb1b0c7de7c6aea6634c121cee66f7301f314e390134cef18608925fb1089a86a69399e33b13773006863cf2e901c151efc7d32bc1df6d6597857ca38bf164e09bba747080dce0b4909887ea03a90d0310fbdaffd30c3c6fb000699ce778f7570cca3125fd1f0a122f5795cd174554aa1d566db4ffb987a786e03655d9d1f5dcf616a8daf2484c7292859f8f0f8065e0d39fc2e1860216ee28c870016b18d6909722614eaaa1a51b69b762ab86666a5d24c1b97817b354eb703a658e3223d9904c3c5754dd50d9a83254f017100461d65cc7bd84e81f1f2131be21050000",
    ],
    [
      "ETag",
      "K3oxYAPDoG5LUyRxkVCB8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "505d4fc23014fd2fd747b704260e25e1410c2a094e99e28b21a4747773b0ed96b6d310c27fe7b618c3a32fededf9b839a77bd8944d06035895c5b645bdbb28d0cedc90a2692b6bf852d4188400d08a8295bd5cf5e5c365925d7d3c6faf930dbea8d96a361cb2c2c82fac050cf69097586506069f7b68448d6c5b2eb5dfc832bb530e9924efe3c771ca404d990392f9747a379a8ee1109cd9d4e65f96c5218035ad52cc516323d1a5509ad628edc41534a2561586865a2dd180177ba2d0d42aa1894246c2de4dd88da34e3fee756ee3288a59589114b6a486b5f337ce0696aca852fae17e10b140fb91abe6fefcf6b0ebe0a6ae8f76ce75ffb8c8718bdf85a39d45f3aa89d31974c13aa790f7e4825b2e64758b0148c1bffc54dad3fb7004251f1f55c2010000",
    ],
    [
      "ETag",
      "4fp7cF+Nd3VMq5NkeOpQbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:54 GMT",
      "Server",
      "ESF",
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
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dd0db7243400000d07fd9e7c88422f42da9b824c8a26478d941166b4536969674faefcdf413cef901795962ced178a7b807ef60c9257d5dae4f4cdba3ba2402872db20de9a03e1491993b519de0143feb9ec18ec9db5e23272590d54dfb3497c6884da82bd207441bddcd8f4dfc543a735177dfde19b609952a3f4f8debce7369e6568ee5df9d735bf517a1de3a6e945893f7653971e044db917bbcf5180c0383f86ab28cb3f0e86759cd0bab618d9179e2a927b7b02bcce96a6b36315811f2cf833c8437772c0a84329685471a11d1a1174d49ed14d38ed391cf6005f0ccc88039222fee9ba2eb2bf06f47e3c2f02b608ff3010fe0f70f210029981a010000",
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
      "Tue, 11 May 2021 20:15:54 GMT",
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
      jobId: "grouparoo-job-49-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2b95f7953ed2a64d5aa91a55095089a65b9282a6698a1ce72635a471163b2040fdefbb76280321c1a7c4bee7dc73eec3cfe48e9729999184e77f1ba81fbfdd8a849c105034c7dbedd3f9c568b4bbc89e1ed8361f5a7598eedc87f91c115cb324dd570574a5686a0672b60d7b792d9a8ad642743151d79e76adc970e04cecc174321c4e9027a1c8ae787987ec9d52959cf5fb47ed5e2e445e00adb8ec31b17fbdefdf0ffb552d6e8129d97f2fd94715d9ff5cf47b2118555c94f36d88061a09750c7bca0bb4f09f9926a7ef53f738ddf77204df73069431d1944adbc2144c9419cf9bda6425b367626cbef921a177e52da30e1345b32fe392eee1a493524563f55841e73cd8ac3b2bff7c13ac17d16ae3c7e1f2d25b2f7acbcdd576ed879d9b4b2ff03a8a2605186e67de3935271f0fa89f8254bc34ea91bed6ca2f0d5a7d1c8b26a0b48436183b8309b5dcc134c9128765ee689c640348123771c674940cd8d4063b4d8022cf881a162d45e9ba9643eda9158333b663db72a6f1d4013b76d23475689abaae9391c30979a8b982332e2b2179db217213ac222f8e82adbf5c449e2921a34da1ce5a63ba80b71e151688a04f6a3ae82817a8a4dbbdf2232f582ca3d5b5d74ef80a72ca1ec3bf38e38c1612104d6b6c9e827a2d526c18f1176bef0cc166623f8e414966bf9f89eeb976f1a6e5aff40807a8ed2af3256114acfc0b63e788b8a6456320f7ed0fa9d0f20e6b43d7873f88c4256db3909f5b2ff845daab0032a8a1645f4f13c126f0e55b3b2ebe7ec9a196910acfb83b4c6a115643bb43dc94fbc2b6c6b63d362f55d15a7d884d26d6b16b3a87ce087b28d54b45ede263a1ad58235f4118c4f1fba65b877f475d19d578040000",
    ],
    [
      "ETag",
      "UzFG33hGfzwcUg21rSdh8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6e82401045ff65fa8aa91a8b95c407b4d49aa8b580896963cc0a834281c5dd45638cffde596a6dd336695f606638b3dc7be108af711e8205ab78bd2d511caed6a89e74e1a22c5325e956f05c2218808aad89ec4f709e24f3edf376178eafbd3d2b064ec7ee768990c1063306d611a218d35082f572849c65486b014fcb2c5f569d01ea50e8a1e7bbc3c980fa8c87ba9fcc4623bb3772e0645c1643a6d8b2e2ffb1b6381990f0958b110acc03d45a0ac1130cd450db942c2b52ac495e8a00255470f5602d785930c1798d26b556a7d6309bf5b6d9aa77cc66d32430e5015331cf899d79a40f14572c75f99e5c8206445592e1a8baee681c8795115d0e27bed9aaf47d05485a14a7b8fc1b24bd1b469fe1033b47f09d63192f7375a1ee478ff66fc751a69f47ddd9bef383908a92ba20fe70ec78be3d9e6a6e71f6de3b289453c12948893ac346bd757bd336ebefb1f6b98e9ade632951a20101a3bfe3215660452c95787a03a923c48b7b020000",
    ],
    [
      "ETag",
      "CNeXjjXqZqvdM/SwapGE9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:55 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54fd4fa34010fd57b8bd5f34e907209f4d1aaf56f4482aed51aa31974bbbc0826b298bece2a531fddf6f00ab367a9a90c0eebc37efcdec2c4f684df3180d5048d3878a94dbeff72c441d44044e6137bff7afce042ef1357e38f12fa299b6d6ec74380404ad591c6f8a8c7439abca88f0c162de4b4b5615b864ac0b89babadc550c55360d4db60d553580c749964c68be06f69d10051ff4fb7bed5eca589a115c50de8bd8e665bfffa8f68b92dd9348f0fea1641f5478ff73d1d38c455850960f1773305071522ec906d30c2cbc32e3f0c761ea1ec59b5e0ae0471a111c45acca456d0b52442c4f685a954d563478428dcd371f68ee4c9c71208da70b2f385ae14d4d5e1d4b984bcb65497895898eb4829a129a91258d576da4584b17fef40a22e0e00e73c257d2cd4fc77724695583be0da55369e49d4b875cd793169ee7cc03e9e8f458baf4a78b9974767b8001d331e182e68de5008719a9ed3e77d57d7f9635010bb0d00697a66c60c592ed3009cd28b14ef4309149185aa1a9e393508e6c8d68714830f0449dbd61e19ce5566c99aa1963dd4c6c5db36543b3345b314dc5526d5333151b2b36d1ed18ed3ae86f490539a7bc609cb6ad4537be1b38cbc05f78e351e034652418da77de9aab8b78eb53409100faa4ae5d1da50c94ea7372bdc0f147e3c0bd76dad198901447dbf9030c4782334e000de3bf218294572c86a6a1d974ee06eed41b4d80d19cf76c8fe068f0fbe995106c8ba6cba279d75a86d6e8ef01d738ab1ac463fb81141ded769dffa718f9fee816647159e2edc7e93fccdfe09b556bf1450fd56afb958a767f76f074105ca3363bfab570fc5bd46ef9242125c9a3af4707c04de0cbbfc1fe6a02162e27c870016b18d488d7225149da81a59bc66ecb5674ddb06cd4804bf12e66abeafe64ea1c7546b221b978aea8bd9a4da3ea50c55f40108439f35cef12a2ff0097f339c01a050000",
    ],
    [
      "ETag",
      "njRMBtaraVaq3RFcP4k49g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d90416f82401085ffcbf4584890284d493ca8252d89b12dd55363cc02034581a1bb8b8618ff7b67570f3df4d0cbeeec9b6f26efed190e559b430869557ef72887bb12f5bb2912547dad155f1db50ac101d4a264723dc487d7384d83797e3f5b9c92a76a1c27a7e99409957d6123203c4351619d2b083fcfd08a06796cb7937623637ae88c12afd6d17394b0d0506e84d566b99ccd97115c9c5f63dde15f23db8b037b4a132c50629ba171d149da63a663135089a6abd155d4cb0c1558d8364a497d272491cb8a3bf1dc51e07b0fc1d87b0c7c3f60b0a64ce88a5a66371fec0d3469512774e27ce033206dc9510b7b1e599ed80c470b186b7ff746a6b7bd2d9c0f1ad59b2476a7d018f3ae2617648c6b0ea4658f0e64827ff9a5d2d7f7e5070b8b2bd9c2010000",
    ],
    [
      "ETag",
      "TyIkOIbb6Bd+ACwRDi4IRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:56 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0d16e82301400d07fe9b3310282746f038b4b700311adf8d260e9c001a5708121cbfe7d669f70ce0f4a391700ac6f4a21d10b7aa43a5ef2a5af6c87e5a231cb83cdb8c4e71da7967255660214da36cc933c2988917ed3a4d3766ea7415384305cca281b431e87f3f553b295b90ae855249b4d05afdb1b2107abf68ea347671567ba65047aebbbb4be54767a4943d5f42795dfc6ebc4aa528810fb4d454eda49a76b49f168c7aebdc75603ebc892ce140d99acf600c3c73bff8a66eaf1c16f6fdee868ad76ac3dd72567f276d687b90cb8c162d6073d9011d0028949dd3b01ecfee41a26c60bf46f67fd4389678023d24e74e8f70f73d425271a010000",
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
      "Tue, 11 May 2021 20:15:56 GMT",
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
      jobId: "grouparoo-job-51-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2bc8fbda8457802452b446295d9112b211d26a9b26641c43dd02a6d8a48baafcf75d4cd3b59bd47ec2f63de79e731f3ca17b56edd014a52c7f686973f874c7537486a8c439bc56abc3529ffcb01eb9512ed6777b8a8bdff67c360304eb58029775410782b70da162badd0cf386b7356e381f40a281630e4cd7323c77644c5ccb72812768912d59750fec5b296b31d5f593f630e73c2f28ae9918125ebebceb7b4baf1b7e478914fa5b491d5484febee8e782132c19af66db0d1868056d125a62568085bfcc5d7afe36f590e172980378cf08c584f0b6929d2d48417895b1bc6d5456347d42cae6ab03daf84b7f116b84176d5925152ee999b6c31227f25053ed325aafb420bc5c47ab791cacc364b3b8f257f3e162bddcaec28d7673e547be26715a50c5d566dab9ba857001fd1d1592554a3dee9e3be5e70605ff8fa52380b4a07d30f10c179b63639266a947b2b1eda49941d3749c7a0eb653834c4674b44b29069e12552c5cf1caf46cd7194d70e28e5d271939239260cbb512d3b46ddb20a96d620b1dcfd063c324bd60a2e682f51d42375110fb491c6dc3c53cf65509196e0b79d11beb0a78ed514281007aa7a66317651c94ba760761ec47f3451c5cfbfd849734c7e4b079801967b81014d0b881e649daacf80e1a86c2f9cabf00b09ad8d75350a0e9cf27d4f5bc73f1aae52ff41806d8d995ea8b367114845f949d13e21a17ad82ecfb03aac1f22dd406ae8fbf00094bda6741dfb67ef41df54f11cd68432bf2f13401ac021ffe6ba7c5072cac3ec8080977d81d223a11d2d07e87982af7996d3a305e0f297023ff8d79e6c83b75adcbd165a425ade47345fde243a1bd582b5e401084f187aa5bc73fc531777878040000",
    ],
    [
      "ETag",
      "nMyL/9Z2wo0mCOjvealx3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6e82401085df657a8b091ac596c40bb4b625c19f2a7ad318b3c280d885c5dda58d31be7b67a9b54ddba4bd8199e19be59c034778ce8a185cd864e9be4279b84a513f9a6286aae25ad1ad148542b000354b891ca47cbc40598cf6cb473f5f0ed2f6c41e79bd1e112ada62cec03d4292218f15b84f4728588eb416095ee5c5baee2cd087d20ce7e1cc1fdf539f8bd8f4e3451078fd600827ebb21833cdd635ff8fb5d5c9829dd8cc3041894584464b29c50e23ed1b9b8ae525c78612958c50410dd70f5229aa9249211a3469749a8da6d3b2bb4edbbe715a2d87402e22a6335110bb98933ed042333e13afe4120c20eb920c27f5f585c6595c1b31a53f0e9d76adef2b40d2928ce3fa6f90f46e197d860fec1cc1778ee5a22af485ba0b26de6fc751a69f47dd7ae1f007a134257541427f349c87de686ab8d5d97bffa0514da5a020159a0c9b76fbbad375ecf75807c2444def71b5acd08288d1dff190697013c6159ede00634deb717b020000",
    ],
    [
      "ETag",
      "CglNUernMqVQImVCg4O0MA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:57 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8554fd4fdb3010fd5732ef1790fa997ea612625dc9b64a90429ac2aa696a6de7520c691c620754a1feefbb381428db408a94d8f7debd77e7731ec9ad484232204cacee72c8369f6f242315029aae70f7a72bd261eba6cfc01d3d2476de0e36f3d9c5d1112244c152749dc6505532cf38a8c16c5a5b65324f6926651513553b76b5d9b51bbd6ebbe1746dbb8b3c0571742a925b645f6b9daa41bdbed3aeada45cc54053a16a5cae9ff7ebf7763dcde40d70adeafb92755451f5f7458f63c9a91632399a4dd140ae205bc09a8a182dbc3043f6653f754dd0756d85e07bc181722ef34417b63005974924567966b292c12331365f7d90a97bea8e026b349979c1c192ae0bf2f2d0a2ca5a2c325079ac2bd6126b8a440c0b112ecb487a6b7df32767184107d754815a5a573f5cdfb55eb696d6a723ebd81a7a27d67e86b167cd3ccf9d06d6c1f1a1f5dd9fccceadaff33d0c5a0f41699118e301653114a69f7a3bfefb440b02d5a85a0617bd469736fb0d8745acc7a37eabc3a20630d667bd0e6db10677dad00e1950e4e922bb61d144268c8521755acce9874e87375afda81386ddb01552e88534b4c1e6c0b8e3906d853c6442c38950a954a26c30b9f2c781bb08fc99371a06ae2923a2d8c493d25c51c46b9f1a8b44d03b756d8ba890a8549cd6d80b5c7f380ac6976e3920a7b0a27c33bdc3118968ac00d134a36bd0909dc9109b46ce27d371309e78c3536498533fdf211419fc7a7c21049bd474599b379906fed8fb6e0cec109734ce0de4befc20c314bd92edb6f2ff3443df1fce519a6619ddbc896139dd7641ff8784c19b55697327d92485da6e6593edef2d3e158217aacc4e2e66ae3f27e5960f116490f08fc707c126f0e17f617749118bd7146594c6350e2b578508cfa01c5ab136764b76b3d3739c2631e04cbf8df5edb6bd3b9d22479111d690e8a78aca4b6a1a558472f50cc220ce9a670e6afb07a7237ab724050000",
    ],
    [
      "ETag",
      "XEipA3j8beECwn2u4TyYUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6b",
      "c23014fd2f77af2dd4e0ba29f8304799b2225ae7180c9118af5db5eded92d44dc4ffbe9b38868f7b496ecec7e59c9c605fd41be8c3bac83f5bd4c79b1cedcc0d199ab6b486af866a8310005a99b3f2beab9edf46e3f2605e4d2bb379359df5bef3c18015467d6025a17f826d81e5c640fffd04b5ac906dab95f61b59668f8d43c69397e429c918a868e380c9224d1f866902e7e0cad6ecff65599e03d8d13ac32d6aac15ba148da61d2a3b76058dac9a124343ad5668c08b3d916b6a1ba9894246c25b11766211ddc5dda8170b11b3b024256d41356b1773ce0696ac2c33fae27e2058a0fdc855b7fe3c30dcf51ddcd4f1d1ae39f1c709c72d7f170e8f16cd5413a733e8824597908fe4825b2e64758b0128c9bf3c2aece57dfe0178e35358c2010000",
    ],
    [
      "ETag",
      "84cKXHIlvsVsuaRSmPQ9xg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:58 GMT",
      "Server",
      "ESF",
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
      "d0",
      "cb",
      "72",
      "82",
      "301400d07fc95a1c29a8d01d0805ab2010a3e82603f4f2a83c6240043afdf73afd84737e509424d0b6b46b6e50a37734466fea3c99ef98a2d32c55b0793096d88e7abfb11a06a5f2f08cfba59db2218122716aa3c471e71179c3fcde90ae82b163e3ddb4a7d83d9741650d8517953c74b0082e76a2ecbbe4eb42d6b52f8d06843847433a51ebe8e087b0709b715169ec14e7d70fbb130f17724acd9b4f7bea9e2d90c976a3fbcf4f76096a92a60b6d6b77fbe0ccf952566a9192a1daa881106a028e7b61c5bcbd2bf7a6e090290ff90d5c3fcc57bb5a5a039a211858c1a1a5c58b2b2d557586feedb41b19bc0274883870f4fb07c273ebcf1a010000",
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
      "Tue, 11 May 2021 20:15:58 GMT",
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
      jobId: "grouparoo-job-53-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b6f9b3014fd2bc8fbb82610f2208914ad514ad748096981a4daa6091973a16e09a6d8b4aaaafcf75d4cd3b59bd47ec2f63de79e731f3c933b5e24644a629eddd7503d7db915313921a06886afa2f246eed760a74024f7667cf5d33cefef1e673344f08625e9becca123455d3190d36dd0cd2a5197b412a283893ac37ea737b22d6734b02623db1e214f429eae787187ec1ba54a3935cda376371322cb81965c7699d8bfbe9b0fb65956e2169892e67b491355a4f9b1e8b75c30aab82866db000dd412aa08f694e768e12f33894fdfa7ee72baef66087ee00c2863a22e54630b533051a43cab2b9d954c9f89b6f9e6400277e52e428389bcde175141f770622454d1483d95609cfb9bb5b1f4ce37fe7a1e2e375e142c2edcf5bcbbd8acb66b2f30ae2f5cdf35148d73d05c63669cea9b8717d44f402a5e68f5b0796e945f1ab4fc7f2c0d01a525b4c1c8b146b437b626711a3b2c1df787716a411c8f636748fbb1c5260318243150e46951cda28528c6ce6008966347603bfd68900e5934b126fdc87158ecd809b3c736238713f2587105675c9642f2b643e4da5f866e14fa5b6f310f5d5d424aeb5c9db5c69a02de7a545820823ea8e9d044b940a5a6dd4b2f74fdf9225ceedc76c22bc8287b0aee71c629cd25209a56d83c05d55a24d830e2cdd7ee1982f5c42e8f4149a6bf9e49d3f3c6c59b96bfd2431c606357e92f09427fe97dd7768e881dcd6b0d79680fa444cb37581bba3efc46242e699b855c6d5dff07699f7c48a182827d3e4d04ebc0a7ffda71f1118bab8f3252e11d7787c9468455d0ee10d7e5beb07bc3f1646c130daed4bfb149cfee1dbbd6e46832c21e0af55251bbf858682b56cb57100671fc9eeed6e10fd6f25eb478040000",
    ],
    [
      "ETag",
      "orN6E+SVteodq/bQZ/F3Vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92dd4e83401085df65bc9426585b54925e50adb509ad95d21b8d69561828edc2e2fe686ad3777716b51a35d11b9819be59ce39b0857551a5e0c343913f1a949b831cf58d2d2254866b45b75a540ac101d42c27323087c30b1e26ab02cdd573d4bd75f39775d0eb11a19225960cfc2d6405f254817fb7858a95486b89e0a6ac164de780ded476388ba3d164487d2952db4fe66118f4c301ec9cfd62ca345b34fc3fd6ee770eacc44384194aac12b45a6a295698e891b5a95859736c296164820a1ab879904b616a268568d1a4d53d6e1d796df7c4ebb8675ebbed11c845c274212a62e733d2075a68c623f14c2ec102b229c970d65c9f685ca48d115b8e26b1d769f47d05485a56705cfc0d92de25a3cff081bd47f09d63a53095de5397e175f0db7194e9e75117413cf841284d49ed9178341ecce2603cb5dcfdbbf7fe46a39a4a41412ab4191eb99dd3ee89e7bec57a2e6cd4f41e5f4b830e248cfe8eab42839f31ae70f70a0fe177f07b020000",
    ],
    [
      "ETag",
      "Au+GDlLcjieuHwR5Z0gzkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:15:59 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "eb",
      "6e",
      "da",
      "30",
      "147e95ccfbd3aa5c120a2120a18e41d665a2818550544d1338c101b7499cda0e15aa78f79d38a52debd64a48243edfed1cdb794477345da12e0ae8fa3e277cf7f99605a88288c46b58fdb13deb6cfc87dd66e2eecee6c3d0985fdae943af07085ab0044eb2985405cb7948447736adad39cb33cc19ab8250b5d5ac1a66436f9b4dbd63361a26f00489a3114def80bd913213dd7afde05d5b33b68e09cea8a8852c795eaf6f1bf58cb35b124a513fb6ac838ba8bf6f7a11b3104bcad2de6c0a017241f8822498c610e185b90abe1c4bd7284e6a6b006f69487018b23c95452c9008591ad175ce952aea3e2215f3d5039ada237be06b83f1ccf54f963829c8cb530d0b6db1e044e4b1ac684be829a23159d0d5b2ac6477da376f7c051548b0c18288a536ff6e7bb6f6b2b4d43ef5b40badef0eb56305c7d566ae6b4f7dede4e254bbf4c6b389f6f5e60803d15744489aaae03e0e6252847e9aadf376470b0296e05a16176dddc486a577822868879175de0a229d048115b45bf83cd0c34e93345701c1c09385ba62e194a5e78434db4d0b0756d46ee820b032f50e0635cb0c2ccb6c04968189159a685f410f9c4a32a422638296034673cff1ed85efcddc41dfb7551b1186210ecb704513af734a681240eff4b52faa948153b15b8eebdb5e7fe03bd776794046648dc3ddf41e8e48846341008d394e8824fc8aad606868329e3abe3376fb2360a85d9f1c1002757f3dbe10fc5da6a62cd53f9afa9ee35eaa0007c4358e7305d9960f08679015edf795ffcbf43daf7f03d69873bcfbab06ed98cd82fe0f0b85576f65cc83a5810ab7c35b03ed7fefe1574170a14a75f473667b37a85cf248443849c38f8f0f8055e1c3efc2e1920216ae29d80809ef7058435198849c948796262a6ec9365a1d",
      "cbd0910273f9a6d6691b87dd29340a459290543e75545e5235a8a2948b671014e1acb96aa3f67f0018b1d36224050000",
    ],
    [
      "ETag",
      "Jv+9hTwyhPNy+WDc1WGEnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff",
      "cb",
      "78",
      "6d93d24011120e621a45094a917830842cedb416da9dbabb8520e1bf3bbb18c3d1cbeeec9b6f26efed0976a5cc60089bb2f86a511d6f0a34735b24a8dbca68be1a921ac10334a26072100dfaedd3ed7e210ff14bfe5e3ee7dff1fc301a31a1d34fac050c4f909758651a861f2790a2461e5baf95dbc89839365699ccdee2873861a1a6cc0ab3e5747a379ec670f6aec69addbf4656670fb6b4493047853245eba251b4c5d44c6c402deaa6425f53ab52d4e060d72814b58d50443e2b7eafeb77a230e847dd60108561c46045a930254966970bf606868ca8123a703e081950aee4a8b93bf72cf75c86bd03acb5eb5ef4d7ebd8deea77e1f86850bf2a62771aadb1e062f29eac71c3818c6ad18354f02f3f96e6f23eff0080beb40ac2010000",
    ],
    [
      "ETag",
      "9697uJ8vSnwEOfWiKfzEQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:00 GMT",
      "Server",
      "ESF",
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
      "1dd0516e82300000d0bbf45b0d53a7657f74328353814e0ce187b4b522125a6c2950ccee3eb323bcf7048431ae75deca8a0bf0012c99bb3336fb6e20ca0b1e6e6b4302bc894d901b7d764a39ed2fcadf9f645624f5fe6b3dadb3f3d40f48b3ad84606a5cc27b95b00dca0ea76a77f39d8020f859da1e5a980c1aaf6ca49472867b6d58e21d1086bb8bb0b73a92380e3b334a3ea7d5d50c94a29580e54225e961bc0e5ddaa980ca87657c59ac7f0653f5304850d80a271557223cbe7e2cf25576ec257fa47e7cccbc7447ddbea60a175d7cd7e1a8de324c22074c001f9a52719d972feee2dd7527e0df9eb7b6e1af00c489e20afcfe01ce040f701a010000",
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
      "Tue, 11 May 2021 20:16:00 GMT",
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
      jobId: "grouparoo-job-55-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7b",
      "6d0249130291a2354ae98a94908d9056d33421e35c885bc0149b545595ffbe8b69ba5695da276cdf73ee39f7836772cfcb1d999284670f0dd44fdfee4442ce08289ae1eb9df95814c9fe7e5cedcf2b5879d92853ec713643046f599216550e3d299a9a819c6e37fdac164d456b217a98a8371ef706f6d09ad823cbb587431b7912f274c9cb7b64ef95aae4d4344fdafd4c882c075a71d967a2787d370f43b3aac51d3025cdf79226aa48f373d1efb960547151ceb61b34d048a8632828cfd1c27fe62eb9789fbacf69d1cf107ce00c2863a229556b0b533051a63c6b6a9d954c9f89b6f9e64036ded25b44061379539471490b38337654d1583d55605c85eb95e10757eb70358ffc75106f16d7de6ade5fac97db55b0316eafbdd033144d72d05c63665ce85b8017d4df8154bcd4ea51fbdc2abf34c8ff38969680d212ba603cb16c3a702c374993094b9df371925a90244e3219d3f3c462ee0846bb0428f2b4a866d1126b1e38eed849693c485c2b1e4d864eec308bc5cec8b62cd7da8d310d399e91c79a2bb8e4b21292771d22b7a11f7971146e83c53cf27409296d7275d9196b0b78eb51618108faa4a6631be50295da76fb41e485f345e4df78dd84979051f6b479c019a7349780685a63f314d42bb1c3869160bef22e11ac27f6f3149464fae799b43d6f5dbc69f92b3dc201b67695fe924d14fac10f6de784b8a179a32187ee402ab4bcc7dad0f5f12f227149bb2ce4d7d60b7f93ee2984146a28d9d7d344b00e7cf9af9d161fb1b8fa282315de7177986c45580ddd0e715dee0b7b605b23774234b8561f62",
      "137778ea5a9ba3cd080594eaa5a26ef1b1d04eac91af200ce2f803ddade33fd3b54a7d78040000",
    ],
    [
      "ETag",
      "j/wmmbhk5ph3peMEg4gtcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92416f82401085ffcbf48aa91ac196c403b66a49905ac45363cc0a036281a5bb4b1b62fcef9da5d6366d93f60233c337cb7b0f0ef0949531d8b0cdd2e71a457391a27ad04580b2ce95a45bc54b8960002a9612d94c9b593a0c7a95ef14f5a5796545d9c27746232264b4c382817d8024c33c96603f1ea06405d25ac4f3ba28376d67806a2a3d5c8681ebcfa82f78ac7b7fe579ced89bc0d1382fc64cb14dcbff636d7d3460cfb7012628b08c506ba904df63a45c6d53b2a2cab123792d2294d0c2ed8354f0ba6282f30e4d3aa6d9e959fdeed01a74afad7edf2230e71153192f895d2d491f28ae581ef05772091a106d498693f6fa42e32c6e8de8d2f5436bd0eafb0a90b424cb71f337487a778c3ec307768ae03bc70a5e97ea4c4dbd7be7b7e328d3cfa36e9d70f283908a923a23a13b9f2c4367bed0dcfae47ddc28940bc12948893ac35e7770650eadee7bac375c474defb195a8d18088d1df719729b013964b3cbe01f43b95f47b020000",
    ],
    [
      "ETag",
      "yFyGg7R1pNAmu/586ciPNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:01 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8554fd4fa34010fd57b8bd5f34e907a5a55f49e3f55af49a54aa946a9acba55d60a8abc022bbe835a6fffbcd82d57ade694202bbf3de9b37b3b33c913b9604a44f3cb6b9cf21db7ebde51ea910907483bb10c797b33c6c73fe7b9988f3f4d4f296e3c7c100114cb1048dd308aa82e7990fa2bf98d73619cf539a715e45a1aad9ae36da86de69b7f45edb30dac81310855396dc21fb46ca54f4ebf57deeda86f34d043465a2e6f3f865bffe60d4d38cdf822f45fd6dca3a6611f58f939e44dca792f164b098a3815c40b68298b2082dbc3203efdb5be91aa3716d83e007e603f57d9e2752d942099f2721dbe459a14afa4fa4b079f041e6d6d41ab9da68b6b0dda3358d15797dac51a1ad5619883c92156d8d35852c82150bd66524bdd34e9dd93946d0c10d1520d6daf50fcbb1346d1d50096bedcb403bd186f6587bcb9ed8dac2b6adb9ab1d9d1c6b67ce6c71a17d5fbec1a0ed0084644961daa55e04caf0735f27ef4f5311a844136570d5d1dbb4d1d57b5ee875fcb0db34bd5007cfeb7a1d93363dddefb5a01578409127957ac1a2094f8cae6906a1d9ecf420d09bd06c34bd86e9e941c70fa0d5f21bcd100c9d9a0db2ab90c78c4918339172c1cae6926b67e25a2bd759d8a3a16b156584141b382ecda9220e7d4a2c12411fd4b55351c631933aa989ed5ace70e44eaeac7238a6b0a1fe767e8fe311d24800a269466390909df3009b462e66f3893b99d9c329328a13bfd82304e9ff7c7a25b8dbb4e8b22cde64ac0ad81d085ed1282f000fe507317443afea46b56192ddaef27fa5a1e30c97989d6619ddfe15c38ada2d45ff479e025fac4aa7fbbcaaf9072ec8eed70e9f0ac1fb54aa93cb85e52c49b9e540081924fee71384e022f0e96f617f47118bb714d308896b9c575fa8247e06e5dcb2b8b05bb2d50be7a60067f25dacd931f607a4349422c490c8e78aca3b5a344a8572f102c2208e9b3db1cf30fa0748ab755823050000",
    ],
    [
      "ETag",
      "emmQOuf6ooxYnsMpFEbYDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f6fc2300cc5bf8b775c2b41358a40e200036d8c0a6d1d3d218442714be91f67490a4288ef3e27ecb0c30ebb24cef3cfd67bb94259347b18c2aec8bf5a5497871ccd872d62d46d65345f921a8de0011a9133991f26fdc7a9a472952c166fd34a0ca8398f472326747ac05ac0f00a5981d55ec3707d8546d4c863dbad721b1933176995f972357b99c52cd4b4b7c23289a2f1249ac1cdfb3526cb7f8d6c6e1e1c691763860a9b14ad0ba9e888a999db805ad4b2425f53ab52d4e060d7c815b55228229f15bf17fadd30e8f4c3a7ce200c8290c18a52610a6a984d3ed91b1832a28ae9ccf9206040b992a366ee3cb1dc73194e0eb0d6feee756d6ff3b3707231a8df15b13b8dd658e76ef299ac71c3818c6ad18354f02fbf16e6febe7d03a39ec66cc2010000",
    ],
    [
      "ETag",
      "ghB7+DpokTUKKJDla9onwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:03 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd04b7282300000d0bb646d1d4590a43b13c8a844ab1dd1c286811015f9c5846f3bbd7b9d1ee1bd1f10732eb48e9a3a17157807636ca0299f7a12e2e8764ddbab43b5db6fb6bb9eb02c11d6f8d5d9f7e51a8551c756adbe0fa5bf6a0b775bd1656dc0e2e409ff31e763dde1c38ccd38363a7d3bacc3c3f35ea7a8de8b92f90896193693232de0e5a9fa2a86b49eab6fef03138189bd7e1b501ef844e59eb3646ed9709a37d24a76ce2d44ad64bd8907339405e9ede7455bfc735cc8874eb3997fa64e4156fb0a0e2ac84d483776726686f9e8905f34013e6ec8094c801864a6848eb2177761213401fff6a819a5780560112ba1c0ef1f2f6ad6971a010000",
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
      "Tue, 11 May 2021 20:16:03 GMT",
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
      jobId: "grouparoo-job-57-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d4fa34014fd2b64f6716da19552daa4596b8b2bd996ae946acc664386e905472983cce0c635fdef7b19acab31d12766e69e73cfb91f3c913b5e6cc998243cbbafa17afc722b12724440d10c5fab1fa7d7c129bb4fce2b77f6d7b7adaf77cefc623241046f5892eeca1c3a52d4150339deacbb5925ea9256427430516730ecf49cbe35746c6be4f4fb0ef224e4e9821777c8be51aa9463d33c68773321b21c68c9659789ddcbbbf9d037cb4adc0253d27c2b69a28a343f16fd960b461517c564b34603b5842a861de5395af8cfdc26276f537739dd7533043f700694315117aab185299828529ed595ce4ac64f44db7c75206b6fe1cd228389bcde1571417770646ca9a2b17a2cc1380b574bc30fce56e1721af9ab205ecfcebde5b43b5b2d36cb606d5c9d7ba167289ae4a0b9c6c438d1b7002fa8bf05a978a1d5a3e6b9517e6e90ff7e2c0d01a525b4c1786839b4e75aa3244d862c758f07496a4192b8c970408f138b8d6cb0b70950e46951cda285285c7b9432cbedc7f6b69fc4b6d373e3d1c06531751c1b860e00a436d91f913f155730e7b21492b71d2257a11f7971146e82d934f2740929ad73356f8d3505bcf6a8b040047d50d3be8972814a4dbbfd20f2c2e92cf22fbd76c20bc8287b5cdfe38c539a4b4034adb0790aaaa5d862c348305d7a7304eb89fd3c042519ff7a224dcf1b17af5afe428f70808d5da5bf641d857ef05ddb39202e695e6bc8437b20255abec1dad0f5fe37227149db2ce462e385d7a47d0a21850a0af6f93411ac039ffe6b87c5472cae3eca488577dc1d261b115641bb435c97fbccee39c783418f6870a5dec55c7b70e85a93a3c9083b28d47345ede263a1ad582d5f4018c4f107ba5bfb7ffe71f68678040000",
    ],
    [
      "ETag",
      "rKBYNBcqbHr8CzI40+k6DQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085ffcb786d132058b4898722084d1011ca418d214b3b8562bb5377b71842f8efce5645a3267a6967a6df6cdf7bed1e9e3299800fcb6cf55ca1da9dacd0dcda628abaca8de65b495223388046ac980cee77dedd7030d03d895b195697e7090d5e2e2e98d0f11a0b01fe1ed20cf34483ffb007290ae4b598f2aa908bba73c0ec4a3b9c45d3703ce0bea0c4f6e3f9681474477d3838c7c54418b1a8f97fac3d1e1cd8d0728a292a94315a2da5a20dc626b436b528ca1c5d4d958a51430dd70f568aaa5228229727ee69c76d7aad46c76b37cebd56cb6330a758988c24b3f319eb034346e4537a6197600155976c38adaf5b1e67496dc496e138f2dab5beaf004b4bb31c177f83ac772df8337c60ef117ce74441953447ea6a7413fc761c67fa79542f88fa3f086d38a9231285d7fd59145c4f2cf7f8eebdbb33a8278a38488d36c366a37d76daf11a6fb15e928d9adfe31b55a103b1e0bf639819f053916b3cbc0282257ac67b020000",
    ],
    [
      "ETag",
      "AZy6YHGGsDnevnIuC9doGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:04 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85546b6f9b4010fc2bf4fa2591fc00cccb96acd475688bea6007e3444955d97770389700e77047222bf27fef02711e4d9b48960c3733bbb37bbb3ca01b96c76880085bdf96b4d87ebee604b51095780da7f6cf7471716fa6bc9f9c8eedcbd4f2eeaec6f7c3213058a51238dba4b42d785944540c16f3cebae0e506179cb72150db74da9aa5abb665a87d4bd72dd0099a261396df80fa4aca8d1874bbfbdc9d35e7eb94e20d139d88674fe7dd3bbdbb29f8358da4e8be4ed9852ca2fb7ed2a3944758329e0f177330500a5a2c6986590a169e9531f9f23a7487e1acb306f21d8b288e225ee6b2b20521229e276c5d167554347840b5cd170f68ee4edc71a88ca70b3f3c58e1ac12af0e152c94e5b2a0a24c654b59414d094be992c5ab06d9dc28df82e90920e0e00a0b2a56caf90f377015652524b85b299f86ca9132f28f95d772cf5716beefce43e5e0e850f91e4c1733e5ebc52b0ef88ea9902caf5d8798a4b472fcd858efed7556022cc145032e6dd5c29aa3f64942ec28717a2649544a88436c13f7881af50d6ac48462d0c92a7aadc239cfe3d8d04cbb6f6bb86f3831767a16e96bc4504dc7ec39a447f45823766262b46ba1fb82497accc4860bd674179d075ee82ec360e18f47a15b979160e8e07163ae2ae2a54f094502e99dba7615ca3864aaaecaf34337188d43efcc6da66342d738dace6f613e129c0a0a6c5ce08c4a5a9cf0189a8666d3b9177a537f3401457de5b33d43a0c1af876741b8ddd45d96f53f0abd13b8a3d1c9acf6b0279de1b4ac5977cd03d2555d6dab7a5b33434d1f68bd8166745455bd44bb5debffc1474130ba0043b828f0f62f0c8ab48c4afe8fac35bf7e6bccef5d68a8caf6e409ed7eefe0d742b0634d7474ba70830bd41c0534a105cda38f870ac835f0e1a762bfb7c085cd8534b00392c10847a24a1215b4196596d5761bb566194ef3a191b8906f3098c2fd9d5531aa8834a3b97caca8d9dbba5115548a2712803081bee77f07f40f224a6a5c37050000",
    ],
    [
      "ETag",
      "7KlUYw5lo9fQC7Zl6IvhCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10",
      "c5",
      "bf",
      "cb786d6369a46a130e60409b140255f4600859cab496fe99babbc53484efeeece2c183072fbbb36f7e33796f4f5016cd1e42d815f96787b2bfca51af4c91a0ea2aadf86aa951080ea0163993af112d67917cc372b7cacad975335fcbf978346242a51f580b084f901558ed1584ef2768448d3cb6dd4abb9131ddb74689162fd3c769c2424d7b232cd6713c9ec453383bbfc6daf25f239bb30307da2598a1c42645e3a29574c0544726a012755ba1aba893292ab0b06de492ba56482297157778e70e02dfbb0d6ebcfbc0f703062b4a852ea86176fdccde40931655425f9c0f7c06a42d396a66cf23cb439be1680163edefdec0f4363f0b27bd46b594c4ee141a63dec5e40319e39a0369d9a103a9e05f7e2af4e57dfe0652ffea28c2010000",
    ],
    [
      "ETag",
      "VIoPFIrWekbQfkF/nMUrMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:05 GMT",
      "Server",
      "ESF",
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
      "1dd05b7282301840e1bde4591d291548dfb8e824a6057440b02f9934fdd118c5948b153add7b9deee07ce7070929a16d7977d550a3173488273c933366bc801faa283806ade584e6c24ee6433476f6e917cb57eae9bcef635d5f7aed3372b6eb39658667e5d756b36835ddb8bc004fae13801a4730ee16893ae73c9419f723f66d2d8fe4de4412ac18cfb5aac4750cb6efa338a84c12707625edf2363839ca75f12659d8dd34f5705e72672049087325e8fd12a98c6a19e7fbdb7ee95ad3f4c0d6e2449bc26892c79da50da32908d1bf5596533e939579549b5b8a2608ee4635d072f5e0da0b8c27e8dfcebbc1c0634000a28106fdfe0182c09bc01a010000",
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
      "Tue, 11 May 2021 20:16:05 GMT",
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
      jobId: "grouparoo-job-59-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc8fbda2424e191448ad628a51d5a423620eda66942c6b950b704536c5a5555fefb2ea6e95a556abf00f63de79e731f3c915b5eeec88ca43cbf6ba07efc722352724240d11c6fc7d1f798f25fac629bdb617e99c9ba762f1ee67344f09625e9be2aa02745533390b36dd4cf6bd154b416a287897af6b4377446a6eb58e6d4198d1ce44928b2152f6f917dad54256783c151bb9f0b9117402b2efb4cec5fee07f7a341558b1b604a0ede4a0e50450e3e16fd5a08461517e57c1ba18146429dc09ef2022dfc67eed2d3b7a9fb9ceefb3982ef3903ca98684ad5dac2144c9419cf9b5a6725b327a26dbefa2091b7f296b1c144d1eccba4a47b38317654d1443d56609c879bb5e107e79b70bd88fd4d9044cb6fde7ad15f6e56db75101957dfbcd033144d0bd05c636e9cea538007d4df8154bcd4ea717bdd2a3f37c87f3f969680d212ba60e29a0e1d4ecc699aa52ecb26633bcd4c48d349eada749c9a6c6a81b54b81224f8b6a162d45e9da63970e0112db657662517c4c2c6626cc86d435ad298033228713f2507305675c5642f2ae43e42af4632f89c36db05cc49e2e21a34da1ce3a636d01af3d2a2c10411fd47468a35ca052db6e3f88bd70b18cfd4baf9bf00a72ca1ea33b9c71460b0988a635364f41bd163b6c1809166bef0cc17a623f8e4149667f9e48dbf3d6c5ab96bfd0631c606b57e93789e2d00f2eb49d23e292168d86dc771fa442cbd7581bba3efc45242e699785fcdc7ae16fd25d8590410d25fb7c9a08d6814fffb5e3e22316571f65a4c233ee0e93ad08aba1db21aecb7d660f1ddbb2c644836bf52e663b9363d7da1c6d46d843a99e2bea161f0bedc41af902c2208e3fd0dd3afc037a98bbde78040000",
    ],
    [
      "ETag",
      "3SKTaiXcpcOk1gVfsrr7Gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92414fc2401085ffcb782d11081469c2a1202a0650a09c0c214b3b8562dba9bb5bb112febbb315d1a8895eda99e937dbf75ebb87c7280dc08155b47eca5116676bd413534c51e5b1567ccb28550816a0166b2693cdb6412fb7bbdaa608e54e77cfbdbcf73ae9749850fe061301ce1ec208e34081f3b0875424c86b3ec579922ecbce025d646638f3a683f135f70905a61fcf8743b73becc3c13a2d06428b65c9ff636d71b0604bab29862831f5d168c9246dd1d703635389248bb1a228973e2a28e1f2c15a529e094954e149a5d9aed4ec7ab56537aa6dbb5eb7198cc9173aa294d9f98cf581262de229edd825184096251b0ecbeb338fa3a03462cac1d8b31ba5beaf004b0ba318977f83ac7723f8337c60c708be7322a13cd527ea6a78e7fe761c67fa79d4a5ebf57f104a735227c41b8cfa33cf1ddd1b6e71f4de2d34aa7b491ca4429361addab868b6ecea7bac3d3251f37b1c2d73b4c017fc77dc441a9c50c40a0f6fad1607c97b020000",
    ],
    [
      "ETag",
      "mhj4oxJw1hyfrwtB/TuCzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:06 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54fd6f9b3010fd5798f7cba6a509a4847c485197b5ac8b94928e9055d53425c61ccc2dc1d43699aa2afffb0ed3b4cd3e2524b0efbd7befce671ec82d2f12322231cfee2a90f7af6f444c5a0434cd7037b15397792abab9589657db7777f278e2f4b3f11811bc6629ba29733852a2920cd468b9686752542595421c61a223cf3e72bcaeddf75c7be875bb1ef214e4e98c17b7c8feae75a9469dce5ebb9d0991e5404baeda4c6c9ef63bdb6ea794e20698569d43c90eaaa8cebf454f72c1a8e6a2182f1768a0522057b0a13c470bcfcc247e7f98bacde9a69d2178cb1950c64455e8da16a660a24879564993958c1e88b1f9e2832cfc997f1a59a7f36510bd59d34d4d5ebfb5a8b2562b09aaca75cb5a634d29cf61c5937513296fad8fe1fc0223e8e03b55a0d6d6d5273ff42d6b9fc37a35b64eac4970661df2a781b50c027f11596f4ede5ae7e17c79697db83ec0a0f10494e685b11dd13887daf26367a7bf9f674da01a6d34c155dff6a833b087711af7593a38eec5a90d713c88fb3d7a1cdb6ce8829bc44091a7ebec86450b5178e079f660d877bb8edd4d7be0f5286509f3060e1d80e3409cc4bd61e20ec8ae457e48aee18cab5228deb4975c85d3c85f45e132389d44be2923a5d8c2b3c65c5dc44b9f1a8b44d03feadad5512e50a93eab6910f9e1e4349a7ef19bf1984146d9fde20e0724a5b90244534937a0415e88049b462ee78b69349d07931932cc995fee118a8cbe3e3c13a2fbd274599b37f9389b4f22cf350ef6902f34af0c66db7c10a7dd43c4aef5f73493309c5ca3349592deff12c3723c43ff8382c19b5563f34991d46afb5597ecbeedf06911bc4e4d76f279e987d7a4d90a21050905fbfff820d804fefb57d85f51c4e2254519a5718dc3ca542dc2243443cb37c66ec3763caf7b6cfe299a4afd5bcc75dcfde9d439ea8cb081423f56d45c51d3a83a54a927100671d68269708ed19fa825c39022050000",
    ],
    [
      "ETag",
      "d0f4c6sTjMUpWv+qr3A17g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d904f4fc24010c5bfcb786d93d2608d241cc420121b902a24c610b2b4d35a683bebee166908dfddd9c583070f5ef6cf9bdf4cde9b13eccb2683016ccbe2b345d55d156816f691a06e2ba3f992d468040fd08882c9fe5b709c774779fdd0ce9793a755b46ae2f962386442a71f580b189c202fb1ca340cde4fd0881ab96db3516e2263a6935699ce5ec79371c2424d991566cb38be1bc563387bbfdae4fe5f2debb3073bda2698a3c22645eb422ada616aa636a016b5acd0d7d4aa143538d8150a45ad148ac867c58f02bf1785c14dd40f6ea3308c18ac2815a6a486d9e50b7b03434654097d713e081950eec95173771eec925c868303acb5bf6b3d5b5bff0c1c7506f5b32276a7d11a0b2e26efc91a371cc8a8163d48056ff9b13497fff91b790b9dd8c2010000",
    ],
    [
      "ETag",
      "4Y0xOyxp5FuOUGKV6VnLOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:06 GMT",
      "Server",
      "ESF",
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
      "d04b7282300000d0bb646d1d40d2427746f96952042a8a9b0c86f0111584c8afd3bbd7e911defb013163bc6da9a84a7e079f608c157dcee6db5a4334e37888c734d2f7d1da8a90f25e7a8d2f522d573206376c1590b54a1c37c0616290803861a6e1732b4f575484ee114fc336e27b4a1277d7481df6119135f501ad53854df144df1d779424962df3645671782950ee6b5546fba986c66db710cda3579ec9e017d63d7cab1c9c4b178884f971141711b9ab53005ba22cb57b7134ece060a7a1cfba51455f9667e9f6d5abca4d7aa387ed005bd69f55283dca340533c087ba68784b8b177701757d06feed548c357f05201e37bc01bf7ffbc363ee1a010000",
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
      "Tue, 11 May 2021 20:16:06 GMT",
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
      jobId: "grouparoo-job-61-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d4fdb3014fd2b91f738da266d49da4a6874256c95da7424290c4d5364bb37c190c669ec8010ea7fdf8d43196c123cc5f63de79e733ff244ee44b12113c244b6aba17afc742b193922a06986af0f0395c9151f9ffffc7c7c1dc1eeebae3f585e9c9c2042342c45b7650e1d25eb8a839aaca36e56c9baa495941d4cd4719d8ee3f66dcf1dda63b7df7791a7204f17a2b843f68dd6a59af47a07ed6e266596032d85ea72b97d79efddf77b65256f816bd57b2bd94315d57b5ff44b2e39d5421627eb080dd40aaa04b654e468e12f73c34edfa6ee0abaed6608be171c28e7b22e74630b537059a422ab2b93954c9e88b1f9ea40227fe1cf628bcbbcde164941b770646da8a6897e2cc13a0f574b6b1e9cafc2e5349eaf82249a7df797d3ee6cb5582f83c8bafaee87bea529cbc170ad13ebd4dc02bca0fe06941685518f9be746f9b941f3ffc7d210505a411b4c3cdba5cec81eb394793c1d0d8e596a036323e61dd301b3f97808c30d038a3c236a58b49005789e4b696a272ce5c36438f29c84f6d341c2061bd7761cca6c6f44f647e4a1121ace842aa5126d87c855388ffd240ed7c16c1afba68494d6b93e6b8d3505bcf6a8b14004bd53d3be890a894a4dbbe741ec87d3593cbff4db092f20a3fc31dae18c539a2b4034adb0791aaaa5dc60c348305dfa67083613fb71082a32f9f5449a9e372e5eb5fc851ee3001bbbda7c491487f3e09bb173405cd2bc3690fbf6404ab47c83b5a1ebfd6f44e292b659c8c5da0faf49fb14420a1514fce36922d8043efcd70e8b8f585c7d94511aefb83b5c3522bc8276878429f799edb8eed8f3880157fadf98e70c8687ae35399a8cb085423f57d42e3e16da8ad5ea0584411c7f60bab5ff03416dffdd78040000",
    ],
    [
      "ETag",
      "w3sgoOc9FX+5YSeqBq23MQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401045ff657c2d492158b4090fa0a8108a584a62620859b6d352dc76ebee564208ffee6c45346aa22fedccf4ccf6dedbeee1392b62f06195a52f15aadd598ae6c11621ea4a184db752161ac101342c25b2688d7847c5f9631010c957c9681b6cd36e9708cdd79833f0f7906428620dfed31e0a9623ad7129aabc58d69d036657dae12c0a87935bea7319db7e321f8f7bfdf1000ece693166862d6bfe1f6b8b83031bb90a3141850547aba5547283dc0cad4dcdf2526043cb4a71d450c3f58354c9aa644aca064d1a5eb3d1f45a6ec76bbb975eabe511282467269305b1f319e903230d13a1dc924bb080aa4b329cd4d7571a67716dc496c349e4b56b7d5f0192966402977f83a477cde8337c60c708be732c9755614ed4cdf8bef7db7194e9e751d7bd68f083d086923a21d13018cca25e30b5dce2e8bdbf33a8a74a52901a6d864db77d71def1dcf758afa48d9adee31b55a1039cd1df719719f01326341ede006c7e8bb27b020000",
    ],
    [
      "ETag",
      "n2Jc7rdmXMMtQucbfJwMwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:07 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ffc5547f4fdb3010fd2a96270468fd41bb124425c44ac9b668252d6902eb26d4b8891b4c9338d84eb70af5bbefec505805637f4e8a149fefdd7bcf774e1ef082e531eee2194bee4b2a56efeef80cd730552481dd79ff82fdca0fdfafc8f2eadbedf7e2de6697cecf931340305d254956a4b42e7929222abbc1b891085e1644705e07a2bad5aeb7acf6c191d53938b6da6d0bea244de703962fa0fa56a942769bcd8d7623e13c492929986c443c7bda6f2edbcd42f03b1a29d9dc966c828a6cbe2d7a9af28828c6f393600c064a49c5946684a560e1b9329e7ddca66e30923512002f59444914f13257da1650443c9fb3a4148615771fb0b1f9c7028fed81ddf7517f18b8fe5e48325d1cee2322d1742aa82c535543219c69ce523a657158658a05fae40d2f20030e6e89a43244d75f6ccf466830bcb6bdbd10a0fb68e07cb5d129eab9e7689bc47151e0baf6d8477ba7fbe8b3370c46e86cb28501f7319d1330704e142828ed3aae968e1ea9a25201e8b1dfcecb29e3b5ce322e98d227755cdff67a7ddfb9b2abe60e6842a2d5f81eda3b27a9a480268264545171c1630a25a3e1d8f19da1db1b4085e9d8688390b8fbe3e1b9c05f15541b54e6adb5ac8ed1df00ae485a1ac4b25ae09dd6e10e5eaf6b7f27e9795e6f02c24408b27a5de055058337516572a3d8c25a6d13b5f1fa660d4f0dc355acd8f165607b135c6d79744e05cd2343f946930dd824fef9456dae3760e182838c54104bc522a94522414dda6799b15b55b7aca3e3f6013660a15ee63e74f45f208f5fcd3c6a94869f0ac18567eeb40e414d1a2f2c879ec05fa286332a2549344d90c3492425b394223378f4d467148688e5480f0285fe64644fcd30c21a3a23316494d541a6c95da467bc59efea60573b323eaad1fc270f37555bb4c8f9d0b5e11efd061d2071495f050000",
    ],
    [
      "ETag",
      "fCMixn5+yavVXhZpqEiQIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:08 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04b7282300000d0bb64ad8ef251e98e5014442b28e1b761520c11e3840841c04eef5ea74778ef07e0a2206d9bcb9a110e3ec088156356cc3cb186392dcf6a5c05925e908fea7e7e609d0f73689ee857ca09fd148ed092dd0b93d386b2d7ddb078e6c727771f8dd9b64dd72b96dc1d967866c76d5be04d38c0f110d0a510d7a96a95647191bc48fdc1255db208d974a9985ae86f9f5009a5b0028e1fd6d9a6ba978c771630299d6c854ab66e87141d6f5d83e88023dd7b1c9cdedcc7b07fd6aed67f1fa317beeabeaac43b24f3a2ac6f9bc44de7d52d46866c3998003288aa216d5ebdb9aa6e1813f06fcfe528c83b0012dc9006fcfe01abff5fbf1a010000",
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
      "Tue, 11 May 2021 20:16:08 GMT",
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
      jobId: "grouparoo-job-63-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6fda3014fd2b91f77185044879496845345de9206c215055d31439ce4dea36c469ecd07615ff7d370e745495da4fb17dcfb9e7dc475ec83dcf223224214f1e4a289ebfdc89909c105034c1d7bf6be9ccaebdaf70f5f4b4bdbdba8bafd63f6e1e472344f08a25e9264fa12145593090c3d5b29914a2cc692144031335ba9d46abdbb67a5ddb1a74dbed2ef224a4f18c67f7c8be552a9743d33c68371321921468ce659389cdebbbb96d9b7921ee802969be953451459a1f8b7e4b05a38a8b6cb45aa281524211c086f2142dfc6746e1d9dbd44d4e37cd04c15bce803226ca4c55b630051359cc93b2d059c9f085689b4707b27466cec4379848cb4d16647403274644150dd4730ec685b7981b53f762e1cdc7fe74e106cbc9a5331f37278bd96aee2e8deb4bc7730c45c31434d7181967fae6e205f523908a675addaf9e2be57d83a6efc75211505a421d0c7a5697b6fad6208cc31e8bfb9dd330b6200cfb61ef9476428b0d6cb0a31028f2b4a866d14c6476bb65f5ed980510c510d8ac6d07143a7610590c069d30eaf76d8bec4ec863c1159c73990bc9eb0e916b6fea3b81efaddcc9d8777409312d53755e1bab0a38f6a8b040047d50d3ae8a72814a55bba7aeef78e3893f5d3bf584679050f6bc7cc019c7349580685a60f31414731161c3883b9e3be708d613fb79084a32fcfd42aa9e572e8e5afe4af77180955da5bf64e97b53f7bbb67340ac695a6ac8b63e901c2ddf626de87af70791b8a47516f26be57837a47ef220860232f6f93411ac039ffe6b87c5472cae3eca488577dc1d262b115640bd435c97bb67b7bafdfd9faa68a1dec53aa7ad43d7aa1c5546d840a6f615d58b8f85d662a57c056110c7efea6eedfe0130660def78040000",
    ],
    [
      "ETag",
      "zVsELWR+eJxxvhJjfJVKYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92dd4e83401085df65bc8548ffa892f4826ab54ddaaa94c618d3345b18281558dc5dda90a6efee2cd66ad4446f6066f86639e7c01e5e923c04075649fc5aa2a8ce62540fbaf05096a992742b782e110c40c56222ad61ec36779d75d7f62a193d3eb5dcad7b1ef77a44c8608d1903670f51826928c179de43ce32a4b580a765962febce0055157a38f3bdd1f496fa8c87ba9fcec763b73f1ec0c1382d864cb165cdff636d713060c3571e4628300f506b2904df60a046daa6645991a2297929029450c3f58358f0b26082739326a6dd321b76d3eada6debd26e366d02531e3095f09cd8f98cf481e28aa51edf914bd080a84b321cd5d72d8d93b036a2cbd1d4b7dbb5beaf00498b9214977f83a477cde8337c60c708be732ce365ae4ed4cdf8cefded38caf4f3a86bd71ffc20a4a2a44e883f9a0c66be3bb9d7dce2e8bd5f2994f78253901275860dab7dd1e9dad67bac575c474def719428d18080d1df314c1438114b251ede0092ae56017b020000",
    ],
    [
      "ETag",
      "0HgA2w5h76RysfWY3AvA/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:08 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "8d",
      "4f",
      "a33014ff57482f269aec93313696186f6e9c724ee631a6672e97ad948255469116cd62f6bfdfa33875e79d2624d0bedfc77bafaf3ca13b968668800216df17345f7fb9e501aa212a710cbb9de3b39f1e6e9ff6bf8fb17f6b9dc4fd79683c1e1e0282952c81575942eb821739a162309f35e29c1719ce39af8350dd34ea6d536ff54ca36599ba6e024fd0249ab0f40ed837526662d06c6ebd1b31e7714271c64483f0d5cb7ef3416f6639bfa5448ae6ae65135c44f363d3a384132c194f0fe73348a010345fd0156609a4f0ca0c83afbbd20d86578d18c00f8c504c082f5259a6051284a7118b8b5ca9a2c1135269bef940337b628f7c6d349dbbfefe12af4af2f240c3425b2c722a8a44d6b425d414b1842e58b8ac22d99df6cd9b9e430432b8c1828aa576756a7bb6a64da657b6b7ff1200ad8973666b47dad01d6bbb528eabcd5dd79ef9dafed18176e24de717daf1f50e066a08a9902c5515f838486899fd73939df7475b12b004e32ab8e8b54cdceeb7ac200a7a24ea77ba41d4a241d00f7a5ddc095ac432a8110614034f96ea8a85539ef6ba61440cbd63f530b1c2408fda563fd0694bc716253dd3b43add28c2c4449b1a7acc99a46326322e58d56974e539bebdf0bdb93b1afab62a23c2d0cd71955c59c4db3c251409a00feada9451c6c1a93c36c7f56d6f38f29d4bbb9a94098d3159cfee6156229c080a689ce31595343fe721340d5d4c678eef4cdde10418eaf82fb6088106bf9e5e09fe3a535d96ea8d66bee7b8272a812de2122785823c541f680f67d91eda6c6aff97197adef01aac719ee3f55f3128c7344afa3f2c145eadaa34b7966d54ba6d573adafcdec0534370b32a75f4636e7bd7a8daf26844739a92cfc707c02af0e90f627b5b010bf7156c8484350c2b11a509c96935b46ca5d2add86dd36a191da4c0b97c17d33bc6f6744a8d5291ae682a",
      "9f2baa6eab6a54192ac40b0882306bae3aa8cd1f9d2df0af2d050000",
    ],
    [
      "ETag",
      "3BKXRa1H8JDaTj9Gg8Ud4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d90416b83401085ffcbf4aa34b162692087a684362026b50985961056335a8d3a76773548c87fefeca6941c7bd99d7df3cdf0de9ee050347b984052e4df1dcae12647fd6a8a18555769c5574b8d427000b5c8995c26eba68faa59a44a7fb95aad6fb3fee3fd389d32a1d22fac054c4e901558ed154c3e4fd0881a796cb7937623637a688db288d6f3e779cc424d7b23449b307c9c8573383b5763ede15f23dbb3032525316628b149d1b868259598ea8509a844dd56e82aea648a0a2c6c1bb9a4ae1592c865c50d7c771c78a3fbc01f3d049e173058512a74410db39b37f6069ab4a8623a723ef01890b6e4a8993d7b96ef6c86de02c6da75cffbeb8d4d6ffbbb703668542b49ec4ea13136ba987c22635c73202d3b742015fccb2f85bebccf3f3adfcd91c2010000",
    ],
    [
      "ETag",
      "ObTnvNlBNsj4OPPT/fvZWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:09 GMT",
      "Server",
      "ESF",
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
      "d0",
      "41",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "bb",
      "64",
      "ad4e83834277064101658a08081b2686101111fac188747af73a3dc27b3f8832c6bb2eeb9b8adfd1277a51459fb199db6a24132cd1be86fae47432f6544c8d9d276c88f0e1ccf206b01d44cfa533788aaf396a7b9e5f7292c7cd68a54dfd146175fa48d4cab10a916eb51bec13500ce51adad2374e8d69edeae216e380df0280c4952c78e00db14220d50a845b92a9c82f7b9717a35cd4c4c49991d6c9d8d36d5656d44fad058e74699221ac228fae579677940ff32eafd306cebdad6e8870fdf6b0e6c5d5f91e692d56502ed963734413c487b604de65e59b3b57757d82feed59ff6af93b80700a1cd0ef1f76e029ad1a010000",
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
      "Tue, 11 May 2021 20:16:09 GMT",
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
      jobId: "grouparoo-job-65-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2bc87b6d02844048a4688d52daa64ac806a4d5344dc81843dd0266d8a48aaafcf75d4cd3b59bd43e61fb9e73cfb91f3ca34756a568861296ff6e6973f8f2c0137486a8c439bcbae48ad93757079996ec904d85a9dfc8fdd37c0e08d6b1042eeb820e046f1b42c56c170ef386b7356e381f40a281630f4c67644c9cb13175462307788216d99a558fc0be97b216335d3f690f73cef382e29a8921e1e5ebbbbe1fe975c31f2891427f2fa9838ad03f16fd5a708225e3d57c17828156d026a625660558f8cb4c93f3f7a9870c97c31cc07b46282684b795ec6c410ac2ab8ce56da3b2a2d9335236df1c50e8adbd65a4115eb4651557b8a4675a8a258ee5a1a6da65b0dd682bff721b6c16d16aebc7e1f2dadb2c86cbed7ab7f143edeeda0b3c4de2a4a08aabcdb57375f3e102fa291592554a3dea9e3be59706adfe1f4b47006941fb603c311c6cbac634c99209c95ccb4e328326899b4c6c6c2506998ee9384d28069e12552c5cf10aa7896db9a615dbc4a5f1d8728c383153339ed896636696050d27e878869e1a26e905133517acef10ba0b56911747c1ce5f2e224f9590e1b69017bdb1ae80b71e251408a00f6a3a7651c641a96bf7ca8fbc60b18c56b75e3fe135cd313984bf61c6192e0405346ea07992361b9e42c390bfd87817005613fb760a0a34fbf98cba9e772edeb4fc951ec1003bbb527d5118052bff4ad939216e71d12ac8be3fa01a2cdf436de0faf80b90b0a47d16f47de7053f50ff14d08c36b4229f4f13c02af0e9bf765a7cc0c2ea838c907087dd21a213210ded7788a9725fd8a63375c753a4c08dfc273631469671ea5a97a3cb484b5ac9978afac587427bb156bc822008e3f755b78e7f009875f8d478040000",
    ],
    [
      "ETag",
      "8cGi5JGytdmiyf9s1/Jtvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085ffcb782d492150a40987a2a84da020142e8690a59d4271dbadbb5bb521fc77672ba25113bdb433d36fb6efbdf6008f691e830b9b74fb54a2ac2eb6a8ef4d31435572ade856885c2158809a6d89e42c58facd656f1fbc0eed72126b158795d7ef13a1a21d660cdc032429f25881fb70809c65486b91e06596afebce025d1566380f677e704b7d2662d3078bd1c81b8c8670b4ce8b31d36c5df3ff585b1d2dd88bcd0c1394984768b41452ec31d2beb1a95856706c2851ca0815d470fd602b455930294483260da7d3683a2dbbebb4ed9ed36a39047211319d8a9cd8c59cf481169af199782197600059976438a9afcf344ee3da8829fd2074dab5beaf00494b528eebbf41d2bb63f4193eb05304df39968932d767ea6634f17e3b8e32fd3ceada0b873f08a529a93312fae3e13cf4c653c3ad4ede079546359582825468326cdaedcb4ed7b1df63bd12266a7a8fab658916448cfe8ebb54839b30aef0f806d39949867b020000",
    ],
    [
      "ETag",
      "laNVI1V9jNxE0uOdtsdTyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:11 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "540b6f9b3010fe2bc853a556ca93242444aa3a96b20e2d250921edaa694a8c63a85bc0d43699a22aff7d07346db36ead8404f67d8fbbf3994774cfd2351aa280450f3915db4f773c403544158e60f7feeea1f3c3caa2d9465ccef24e1b5fc9e9cc3a3d05042b581227594ceb92e78250395ccc1b91e0798605e77510aa1b46bd6de8adbed16d9986ae1bc093340ec72cbd07f6ad52991c369b7bef46c47914539c31d9203c79de6f6ef46626f81d254a360f2d9be0229bef9b9ec59c60c5787aba984302b9a4624913cc6248e185b90e3e1f4a37184e1a1180378c504c08cf5355a4051284a7218b7251aaa2e1232ad37cf581e6f6d81ef9da68b270fde3154e0af2ea44c3525b2e059579ac6ada0a6a0a594c976cbdaa22d9bdf6d59b5c420432b8c592ca9576fdcdf66c4d1b4fae6deff839005a63e7bbad9d69967bae1d4a39aeb6705d7bee6bc76727da8537594cb52f370718a8614da5626959818f839816d93f35d9797bb405012b30ae82cb7ecbc0ed41cb0cc2a04fc241a717842d1a0483a0dfc39da045cc2eedae038a81a70af59285539ef67beb9074f58ed9c7c45c077ad83607814e5b3a3629e91b86d9e985212606dad5d06fc1143d6732e392559d46d79ee3db4bdf5bb823cbb7cb32420cdd3caf922b8a789da7822201f44e5dbb22ca383815c7e6b8beed5923dfb9b2ab4919d30893edfc016625c4b1a480c60227545171c9d7d034349dcc1ddf99b8d61818e5f14ff70889863f1f5f08fe362bbbacca379afb9ee35e9409ec115738ce4bc8a6fa404738cb8ed06e57fbbf8ce579d60d586321f0f6af189463740bfa3f2c4a7cb9aad2dc5bb651e1b65fe968f76b074f0dc1cdaad4d16c617b37a8daf26848054dc9c7e303e032f0e10f627f5b010bf7156ca482350c2b91850911b41a5a9694e956ec76bffdf47b5158a837b14e77b03f9d42a350a4094dd55345d56d2d1b558472f90c8220cc9a5b1ed4ee0f82ce5fa02d050000",
    ],
    [
      "ETag",
      "kjq3XApgQvrMQu31aVsPQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "6b",
      "c2",
      "30",
      "10",
      "c6",
      "ff",
      "97db6b0bb593ca041fe6904d2832ebecd886484caf5db5ed7549ea70e2ffee258ee1e35e92cb77bf3bbe2f47d8954d0643d894c55787ea7053a099db2241dd5546f3d552a3113c40230a26b55ac8f2ad9fa6cdcf6690a5ef6117bca6f3d188092d3fb116303c425e629569187e1ca11135f2d87aaddc46c6cca1b5ca74f632799c242cd4945961b68ce3fb713c81937735d6eefe35b23a79b0a54d82392a6c245a17ada22d4a33b501b5a8db0a7d4d9d92a8c1c1ae5128ea5aa1887c56fc28f27b51180ca27e70178561c460455298921a66970bf606868ca812fae67c1032a05cc9517377ee59be7519f60eb0d6ae7be15faf677babdf85e38341fdac88dd69b4c6828bc907b2c60d0732aa430fa4e05f7e2acde57d3a0322f73b21c2010000",
    ],
    [
      "ETag",
      "srSciY4VVnzb7dVZ2u0WVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:11 GMT",
      "Server",
      "ESF",
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
      "000002ff1dd0db7243400000d07fd9e7c8688c5bdf8ab02e1151d2f06264ad7b318b65a7d37f6fa69f70ce0fc811c2f39c2d638707f00e587e528fe8e84e8a9655787f9ece647f18a1b4ad1b5e1ddea454ae90637ca7eb47175e7d7ad99c015511b30bafde68cde66b519634de6b14b8d18cd6b5b707ea994547399a34e73cd13ccc07a362f984234ffea248b224570a22772134c7a919206babdb02d33737afefa128eac90e35bf6c4bbee8ad1dc3720a8d60347a596ad997a6f3fc56c4b26ec1888c69fd6973b78c3201b314ea86d82e0f7775829823b6ae44268a377000789f1a82e7ac79710551550fe0df9e2d6cc2af000de70413f0fb07d6cd3dcb1a010000",
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
      "Tue, 11 May 2021 20:16:11 GMT",
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
      jobId: "grouparoo-job-67-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2bc8fbda24e44912295ab394ae4c09d90869b54d13b2cd85ba2598629329aaf2df77314dd7aa52fb09dbf79c7bce7df048ee451e932961227da8a03c7cba938c9c11d034c5d7eac0ee99974ee6e3f2dbaf58f51dfa657848673344889aa5e8aec8a0a564557250d3eda69d96b22a6829650b13b5464eab3bead9ce68604f46bdde08790ab26429f27b64df6a5da869a773d26ea752a619d042a83697bbe7f7cebed7294a79075cabce6bc90eaaa8cefba29f33c9a916329f6d3768a0525046b0a322430bff99313b7f9dba2de8ae9d22782f3850ce6595ebda16a6e0324f445a95262b993e1263f3c5816cdca5bb082d2eb36a974739ddc19915534d237d28c0ba0cd62bcbf32fd7c16a1e7a6b3fda2caedcd5bcbd582fb72b7f63dd5cb9816b69ca32305c6b669d9b9b8f17d48f4169911bf5b07eae959f1ae4bd1d4b4d4069054d3072ec11ed8eed094b98c393717fc8121b181b336748fbcce693010c6206147946d4b0682ef378304c98dd1d447d1ad36830716834b6fb3c4a867438ee423776867d723c237f4ba1e142a8422ad17488dc045ee84661b0f517f3d0352524b4caf44563ac2ee0a5478d0522e89d9a8e75544854aadbedf9a11bcc17a177ed36135e424af961f380334e68a600d1b4c4e669285732c686117fbe722f106c26f6fd145464fafb91d43daf5dbc68f9333dc401d676b5f9924d1878fe5763e784b8a6596520fbe6400ab47c8bb5a1ebe31f44e2923659c88fad1bfc24cd5300099490f38fa7896013f8f05f3b2d3e6271f5514669bce3ee70558bf0129a1d12a6dc2776d7e93a930131e052bf894d7ae353d7ea1c7546d841ae9f2a6a161f0b6dc42af50cc2208edf37dd3afe030abe362a78040000",
    ],
    [
      "ETag",
      "uybkbIg9A8rJZds37aB5yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92dd6e82401085df657a0b095a454be205b6b625f11731696c8c5961502cb0b8bbb4b1c677ef2cb5b6699bb43730337cb39c73e0004f491e8103ab64bd2b51ec2fd6a826baf05196a992742b782e110c40c5d644b6a70fd9e4327ef5e6f3a289e568b51b0c5fdc4e8708196e3063e01c204e308d24388f07c85986b416f2b4ccf265d519a0f6851e4e03df1bde519ff148f7c359bfef76fb3d381ae7c58829b6acf87fac2d8e066cf9cac71805e6216a2d85e05b0c95a76d4a9615299a9297224409155c3d580b5e164c706ed2c4b45b66cdae5b2dbb615dd9f5ba4d60ca43a6129e133b9b923e505cb1d4e72fe4123420aa920cc7d5f599c6495419d1a5370cec46a5ef2b40d2e224c5e5df20e9dd30fa0c1fd82982ef1ccb7899ab3375db1fb9bf1d47997e1e75e306bd1f845494d41909bc416f1ab883b1e61627efddbd4239169c8294a833ac598d76b3655befb15e731d35bdc751a2440342467fc77da2c089592af1f806655673517b020000",
    ],
    [
      "ETag",
      "8SXmQ3fzIZZp5euObqMNwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:12 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b4fdb3014fd2b96f705a4be41053a2156da8c65b4694952a042a83589130c491c6ca75385fadf77edb474651bfb3ca95263df73ce3df7e157fcccb21077f0038b5f0a2a969f9ef803ae60aa480cb727bdfe854a27b74e1c794d87dd4e2fbf5f2f7e9c9e0282699624699ed0aae48508a8ec4cbc5a2c789113c1791584aaede36ab3dd6a1cb50f1b27ed56ab0d3c499368c0b267603f2a95cb4ebdbec95d8b398f134a72266b014fdfeeeb8b563d17fc89064ad67753d6218bac7f9cf42ce101518c67a7130f0c14928a194d094bc0c296193e7cd995ae3192d662002f58404910f02253da1648043c8b585c08a38a3bafd8d8fce5037bd6c0eaf9a8379a38fede9ca49a3cdf4744a2d94c505924aa82e65053c4123a63e1bc8ce4cfe8ab3b1a42041c3c1249e51cdd7cb35c0ba1c1e8c672f7e6528147101ad897163a435da78f76756c074d1cc7f27cb477b68f2edcd1648ccea73b182820a411010f7da22089d2c6c3f2d3d65355542a00ad5b6eff3e68bcd251c60553ba58dbf12db7dbf3ed6babecef80c624587a2fd0e1882492029a08925245c590871428e39167fbf6c8e90e80619a36de2024eedcbd6e09fe32a7daa032ffd8b787505c7738c6ab55e5efb0aeeb76a7204d8420cb7731b0db3ed4f42dfb9a24858118bc39953616650037b1ceb639b5f0ea7e05bf0a867d2bd5f1d5c472a7b8bc72694405cd0223f9411b0dd804fef96c363b0c58d86248039ba098542c903a4920a809fb2c35764b76f3a87572d0c4062cd4fbd841a3d9d04f3d0bff1859e7288c3e15820bd72cae3e423669bcb00c7ac2c22bb3f63b2e5fd657299592c45adee128252a7864598c248b33d01614455ca0a8c8024d2bb7dc5c11111729cd14d243931df436f71af28a3ce742d170ab0280f28178be6b3b17fb9fd7c7f3a96f79f0ec14ba6b768e5bf7ba28534a39ddffb78cfb7238da4f7fe458b0cd3f01a3939ac0ca050000",
    ],
    [
      "ETag",
      "9CDGtmUXNgfS1NiXYKJVvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:13 GMT",
      "Server",
      "ESF",
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
      "d0cb7282300040d17fc95a1c4444e8ce0720a1808c410a1b26c4905250208916edf4dfcb747d57e7fe004c0815a2905d436fe00d3cb166cdc9dcefcd6dc1a8baed347885ea5d67b9408d9da88d351ebcdc4f4f021ac443efcc76ce915e65e6f9160f5a30bc7818c445f599b8cdf239540df39468e85445f53cbe8c172d5d23aebb7b1c5e4d1cc1f651b5953c7ca09deb9caedf129569aaed772c837cdce05897eba3ebbcda8194a22c615485be2f1a4efd35e71be867ad6917ca91dd0d7cc129c221913df5f25756731a8fabfe4c16fbc7d7253064628aba765606013340c77eeaa2a827ee72655933f06f2fe4b3a7d3802dc59c72f0fb077d3097111a010000",
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
      "Tue, 11 May 2021 20:16:13 GMT",
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
      jobId: "grouparoo-job-69-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc87b6d4242521222456b96d21535211b9056d33421632ed42dc1149b545595ffbe8b69ba5695ba17c0bee7dc73ee07cfe49e9729999184e70f0dd44f5fee44424e08289ae3edf29ae57bea4c36757235f6f8e369feedea2e9fcf11c15b96a4bbaa809e144dcd40ceb6613faf4553d15a881e26ead94e6f685b83893d1e38b665d9c89350642b5ede23fb56a94ace4cf3a8ddcf85c80ba015977d2676aff7e6de32ab5adc0153d27c2f69a28a343f17fd5a08461517e57c1ba28146421dc38ef2022dfc63a6c9d9fbd47d4e77fd1cc17bce8032269a52b5b630051365c6f3a6d659c9ec99689b6f3e48e8aedc6564305134bb322ee90e4e8c942a1aaba70a8c8b60b3363cff6213ac1791b7f1e37079e9ae17fde566b55dfba17173e906aea1685280e61a73e34c9f7c3ca07e0a52f152ab47ed75abfcd220efe3585a024a4be882f16460d3e174e024593261d974749a64034892693239a5a364c09c318cd30428f2b4a866d15294d61426ccb286f1d81966f8a056ec8ca62cb69d945a56c6326625e470421e6baee09ccb4a48de7588dc045ee4c651b0f5978bc8d52564b429d47967ac2de0ad47850522e8939a0e6d940b546adbedf9911b2c969177ed76135e414ed953f88033ce682101d1b4c6e629a8d722c586117fb176cf11ac27f6e3189464f6fb99b43d6f5dbc69f92b3dc201b676957e93300a3cffbbb673445cd3a2d1907df7412ab47c8bb5a1ebc31f44e2927659c8cfad1bfc22dd550019d450b2ff4f13c13af0df7fedb8f888c5d54719a9f08cbbc3642bc26ae87688eb725fd8c3c9c81aeb3f55d15a7d888d1cfbd8b536479b117650aa978abac5c7423bb146be823088e3f775b70e7f016c12705678040000",
    ],
    [
      "ETag",
      "CVcgva97OrbK4Iiw5gBKjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4ec2401085df65bc2d492158a48917a0a8184028c5680c214b3b85e2b65bf60725847777b6221a35d19b7666facdf69cd3eee039cd63f0619e2ed606e5f664817a648b0095e15ad1ad10b9427000355b10b97c5c175e7f33b96d3fdcab1137ae794d1aa3f3732254b4c48c81bf8324451e2bf09f7690b30c692d12dc64f9acec1cd0dbc20ec761d01d5c539f89d8f68349afd76af73ab0778e8b31d36c56f2ff589bee1d58897980094acc23b45a0a295618e9aeb5a9585670ac286164840a4ab87cb090c2144c0a51a149c56b56aa5ecd6d7875b7e9d56a1e815c444ca722277632267da085663c102fe4122c20cb920c27e57543e3342e8dd8b23b08bd7aa9ef2b40d29294e3ec6f90f42e197d860fec10c1778e65c2e4fa485df5ee5abf1d47997e1e75d90a3b3f08a529a9231276fb9d71d8ea0f2d373d786f6f35aaa11414a4429b61d5ad9f9d363cf73dd60b61a3a6f7f85a1a742062f477dca41afc847185fb373e998c2e7b020000",
    ],
    [
      "ETag",
      "hYqp6MvUJBXVsQlu0uxf7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:14 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffd5536b6fda3014fd2b96f7a595788bd195a9ea28645b34083409ed505581499c609ac4a9ed744215ff7dd70e94b16edde74948c4bee79c7beec3cff8816521eee2258b1f0b2a36efd67c892b982a12c3addd914be67aca5d0dc2f3a4ff7dbd5ea6ce8f8b0b4030cd9224cd135a95bc100195dda9578b052f722238af8250f5ac516d765a8db34ebb71de69b53ac0933489862c7b00f64aa95c76ebf57dee5acc799c509233590b78fa725f7f6ad573c1d73450b27e9cb20e5964fdeda497090f88623cbb987a60a09054cc694a5802160ecc70f9e958bac6485a8b01fcc4024a82801799d2b64022e059c4e2421855dc7dc6c6e62f1fd8b38656df47fdf1d4f14f1624d5e4c5292212cde782ca225115b4809a2296d0390b1765247f409fddf10822e0604524950b74fbd5722d8486e35bcb3d5948051e4168687fb3d025ea390374ac633b68ea3896e7a393cb53f4c51d4f27e86a76848102421a11f030200a92286d3c2c3f6d3d5545a502d0aee5f6eb41e3ad8e322e98d2c5da8e6fb9bdbe6fdf58657f873426c1c67b840e47249114d04490942a2a463ca440998c3ddbb7c74e6f080cd3b4c91e2171f7eef940f03739d50695f9c7be3d82e27aa309de6e2b7f87f55cb73703692204d9fc1603bb9db6a61fd83724290cc4e0cda9b4f154067013eb6cfb530b6fefb7f0ab60d8b7521d5f4f2d7786cb2b974654d02c30926fb4d1804de09fcf66bfc380852d8634b0098a49c502a99304829ab0cf5263b76437cfdaadf76d6cc042bd8ab51b4dfdd4b3f08f915d8ec2e85321b870cde2ea236493c60bcba0272cbc366b7fe4f2717795522949ace51d8e52a28215cb6224599c81b6a028e202454516685ab9e5e68a88b84869a6901e9aeca297b9d79057e439178a86071500940fc4f35ddbf972fa7177bc9af99607cf4ea1bb66f743eb5e17654a29a7fbff96715f0e47fb198c1d0bb6f927a01117f6ca050000",
    ],
    [
      "ETag",
      "I6sbiRStRhDd9lCXjjbmNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:14 GMT",
      "Server",
      "ESF",
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
      "d0",
      "51",
      "6e",
      "82300000d0bbf45b8c0854d9df141966a00561083f0d2d9d56ea0aa551d0ecee333bc27b4f5051cafa1e6bd9b01ff006c66aee4ee9f4b35daef089c1eedb7cf46a8329bd275eb488b3f362c19c1219814f86a553e56a1f27338f54a96f0d10918614c4f2bfb2344189dcfb87f15023b1bfef1c663bb379d85e308ac220b85ecfdacea40e35367b6ede0a669ecc9c722b1eb1e6d08ebc46058fe38acfa264e82e757a7cf449b9f36ababe7c8444183223bacb2837b428d6e2dd906eaa46632ba8234a0bc612de36f95cdef22dce38127687206a0a98d76002d8d072c57acc5f5ccb71dd09f8b7633db6ec15b06295620afcfe01379697371a010000",
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
      "Tue, 11 May 2021 20:16:14 GMT",
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
      jobId: "grouparoo-job-71-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b4fa34014fd2b64f6ab6d0169699b346b53712569e90a54f7910d19e082a3c02033d418d3ffbe97c1ba1a13f7133373cfb9e7dc07cfe49e5529999398e50f2d344f5fee784c4e08489ae3ebaf53795ffe081a579f3eda93d578b32bf7edd5628108d6b1042deb020682b74d0262be0b8679c3db9a369c0f30d1c03606c6c4d4ed89a5cf26a639419e80225bb3ea1ed9b752d6623e1a1db58739e77901b4666298f0f2f57db4374775c3ef209162f45e72842a62f4b9e8d7822754325e2d76011a6805341194941568e11f338dcfdea71e325a0e7304ef59023449785bc9ce16a6487895b1bc6d5456327f26cae69b03099cb5b30ab584176d5945152de1444ba9a4917caa41bbf0b71bcdf52eb6fe6619ba5b2f0a5697ce66395c6dd7bb8d176837978eef6892c60528aeb6d0ced4cdc30beaa72024ab947ad83d77ca2f0d723f8ea523a0b4803e18d9fa841a537d1667b19d64d3d3719ce910c7d3d81ed3d3584f661658690c14794a54b168c5ab298c67c62c8d23cb32279105d48ca89e599165ceecd830a7c6d848c9e1843c364cc239133517acef10b9f1ddd089427fe7ad96a1a34ac8685bc8f3de5857c05b8f120b44d027351dba28e3a8d4b5dbf542c75fae42f7dae927bc869c264fc103ce38a3850044d3069b27a1d9f0141b46bce5c63947b09ad8f7635090f9ef67d2f5bc73f1a6e5aff41007d8d995ea4b82d077bd6fcace11714d8b5641f6fd81d468f9166b43d7873f88c425edb390ab9de3ff24fd930f19345025ff9f268255e0bfffda71f1118bab8f3242e21d7727119d48d240bf434c95fbc2366ccbb64da2c08dfc109b99d6b16b5d8e2e239450c9978afac5c7427bb156bc823088e3f754b70e7f0146c4fbee78040000",
    ],
    [
      "ETag",
      "Z3tkmXSrI08w76C5MUmvuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "65bc859436955a925e50ad4a427f6ca9311ad36c61a0b4c0e2eea2364ddfdd59acd5a889dec0ccf0cd72ce811d6cd22202079669f254a1d89e24a86e74314559654ad2ade485443000154b886cc8d7f6daabc4a611de8efdee7da2cabbc4edf58890e10a7306ce0ee214b34882f3b08382e5486b21cfaabc58d49d016a5beae12c987aa32bea731ee97e34f77db7ef0f606f1c1723a6d8a2e6ffb1f6b83760cd97538c516011a2d6520abec65079daa6647999a1297925429450c3f58344f0aa648273932666a76936ed96d5b1db56d76eb56c02331e3295f282d8f98cf481e28a6553fe422e4103a22ec9705c5f9f699c46b5115d7aa3c06ed7fabe02242d4e335cfc0d92de15a3cff0811d22f8ceb19c57853a5297fed8fded38caf4f3a80b3718fc20a4a2a48e48e00d07b3c01d4e34f778f0dedf2a9413c12948893ac3a6d53e3bedd8d67bace75c474def7194a8d08090d1df719d2a70629649dcbf01c18f990b7b020000",
    ],
    [
      "ETag",
      "/sx4jIurk/cVOL9ZgtpXgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:15 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "57",
      "2c4f0826f58356fd1895102b10b68c9074690aeb26d4b8891b5cd238d84eb70af57fdfd9a14007633f4e8a149fefdd7bcf774eeef12dcb62dcc35396dc1554acdecdf9145730552481dde01b3bfeb274aec6f3bcddf86575be07f373faf3f010104c5749b2c8535a95bc101195bdd1b096085ee444705e05a26ab7596d749afbdd4e6bffa0d36c76a04ed274e6b0ec16aa6f94ca65af5edf68d712ce9394929cc95ac4178ffbf565b39e0b3ea79192f56dc93aa8c8fadba247298f88623c3b1c0dc14021a998d00561295878aa8ca71fb7a96b8c2c6a0980972ca2248a7891296d0b28229ecd585208c38a7bf7d8d87cb6c043cbb14e0274e28ddc602f240b5d1cbe4744a2c9445059a4aa824238d38ca574c2e2b0cce4b7e8ccf72e20030e6e88a43244579f2ddf42c8f1ae2cff1993639f5be808f5dd53b44d64bb68e4bad630407b47efd127df1b0dd0f1780b032788e98c808953a2404569e771b9b4f55815950a400f3db75f4e1aaf759671c1943eaded0696df3f09ec4bab6cb0431312ad8677d0e219492505341164411515173ca65032f08676607b6edf810ad3b5c1062171efc7fd5341b0caa936a8cc1b9f395e3fe8b48c830de492a485c12ccb05de69d4daad1dbc5e57fe4ed4f7fdfe18c4891064f5470e0ea4255ed53078139546379a0dacd5365113afafd7f054305cc9921d7f1d59fe18975b3e9d5141b3c850bed1680336897f7e599b6b0e58b8e8202315c452b1486a914850930ed8c2d82dab1bddf68756171bb0502f73ed03fd37c8e257330f1a85e1a74270e19bbbad435093c60bcba027f0b7a8e0059592249a6694c1492425d39422337cf4d867148688",
      "65480f0285c178604d1e261e56d0318951cc0b5d65fadc43e5a037d16e19ee6a63c64e39a1ff6be5ba6c92d63af55c0b6ed56fe5010b4875050000",
    ],
    [
      "ETag",
      "TXiBJvLWYjp51xE6ZTjKew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:15 GMT",
      "Server",
      "ESF",
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
      "d04b7282300000d0bb642d8e85a498eee4a70245404b4a379980a18055fe4ca2d3bbd7e911de7b0096e77c18e8d85cf80dbc01c954bccc975ebb36e87721b1e3215c4c5bb91174b6fc34ec206e476116fe3e54aea3964c0457c23fcacb4bd67b67d19451e09824b68fe70c6e60bc8bf03d5a7b663725fa4074d993a43ebdeaf52a2510dad921328ac9ddc220de7799a290da6e90e7eba7498c2725957c0eab324172de8f84a5ee27a40d3a0c375353afb82c7e769877c190ab28a92aa234ba63d11d5b155f1f87784ea56e79f6367b0f342452771d337aa731030bc0455bf57ca0d593ab218c17e0df4e47d9f26780c159cf7bf0fb0786d2831d1a010000",
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
      "Tue, 11 May 2021 20:16:16 GMT",
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
      jobId: "grouparoo-job-73-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2b64f6d5b6b4b4509a346bb7a276d352a554e36e3664985e701418640637c6f4bfef65b0aec6449f98997bce3de77ef04cee79b1231312f3f4a186eae9db9d88c9110145537c3d933fee2ef8e06759bafd8b9bf17dfecb2e7e5e4ea788e00d4bd2bccca023455d319093eda69b56a22e6925440713751cabd3b707a6630f4dd71e0c6ce449c892252fee917dab542927bdde41bb9b0a9166404b2ebb4ce4afefbdc741afacc41d30257bef257ba8227b9f8b7ecf04a38a8b62badda0815a4215414e798616fe3377f1f1fbd45d4ef36e8ae047ce803226ea4235b630051345c2d3bad259c9e499689b6f0e64e32dbd79683091d57911153487236347158dd45309c669b05e190bff741dac66e162ed479bf9b9b79a75e7ebe576e56f8ceb732ff00c45e30c34d7981ac7fae6e305f57720152fb47ad83c37ca2f0d5a7c1c4b434069096d30724c9bf6c7a61b27b1c392b1358a1313e2781c3b236ac526738730dcc54091a745358b16a28847b13b70c08a76a6c3a2215849344e683f4a2c3731ddc466d6a84ff647e46fc5159c70590ac9db0e91eb60117a51186cfdf92cf4740909ad3375d21a6b0a78eb51618108faa4a67d13e502959a762ffcd00b66f37071e5b5135e424ad9d3e601679cd04c02a26985cd5350adc40e1b46fcd9ca3b41b09ed8c52128c9e4f733697adeb878d3f2577a88036cec2afd259b3058f867dace017145b35a431edb0329d1f22dd686aef77f10894bda6621975b2fb821ed5300095450b0afa789601df8f25f3b2c3e6271f551462abce3ee30d988b00ada1de2badc1776dfb1fbd6886870a53ec42c7370e85a93a3c9083914eaa5a276f1b1d056ac96af200ce2f87dddadfd3f215e6a",
      "dd78040000",
    ],
    [
      "ETag",
      "GsBjPi2Jpp91PY8kmZ6nJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d925f53825010c5bfcbf68a139a6131e3039615336a8ad84be338575810052edd3f368ee3776f2f9935d54cbdc0eef2dbcb3907f6b0c9ca185c5866e98b46b13b4b514d4c11a0d4b99274ab7829112c40c55222fdedf5728c6cb37d9a64bd2438d7852af5a4db2542462b2c18b87b4832cc6309eef31e4a5620ad453cd745b9a83b0bd4ae32c36918f8a37bea0b1e9b7e341b0cbcdea00f07ebb41833c51635ff8fb5f9c182355f0698a0c03242a3a5127c8d91f28d4dc98a2ac786e45a4428a186eb07a9e0ba6282f3064d1a9d8b46d369d91da76d5f3bad964360ce23a6325e123b9b923e505cb13ce0afe4120c20ea920c27f5754be32cae8d98d21f854ebbd6f71520694996e3e26f90f4ae187d860fec18c1778e155c97ea44dd0d1ebddf8ea34c3f8fbaf5c2fe0f422a4aea8484feb03f0dbde1d870f3a3f7de4ea11c0b4e414a341936edf6d565c7b1df63bde1266a7a8fab84460b22467fc743a6c04d582ef1f0064b9230307b020000",
    ],
    [
      "ETag",
      "Iv9bPeakvVQiBfR/umtnuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:17 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "547f4fdb3010fd2a96270448fd414b69a11262810616ad245d9a82ca841a377183218983ed3055a8df7d6787c22a18fb7352a4f87cefde7bbe73f28c1f581ee33e9eb3e4b1a462f9e59ecf710d534512d8ed1c15dd1b35f8757369b5aeadabf3fd838138b48e8f01c17495245991d2bae4a588a8ec4fc68d44f0b22082f33a10d57b9d7aabdbdeeb753b7b47dd76bb0b7592a68b21cb1fa0fa4ea942f69bcdb57623e13c492929986c443c7bdd6f3eb59b85e0f73452b2b929d90415d9fc5cf424e511518ce7c7933118282515339a11968285b7ca78fe7593bac148d64800fcc4224aa28897b9d2b68022e2f98225a530acb8ff8c8dcd3f16786c0fedb3009d791337d80949a68bc35d44249acd049565aa6a2884332d584a672c0eab4cf180ce7def1232e0e08e482a4374fdcdf66d8486deb5edef8400dd45ae17a0a1f3dd4627c872076893c871d1c475ed7180764e76d185ef4d46e874ba818113c47441c0c480285051da795c2d1d3d5645a502d04bcf9df793c62b9d655c30a54febb881ed5b67817365570d1ed28444cbf123b478415249014d04c9a8a2e292c7144a46ded8091ccfb5865061ba365a2324eeff7c7e2b089605d50695796bad6ec7e8af0157242d0de2a95ae0add6c1165ead6a7f27b17cdf9a823011822c3f16f850c1e04d54995c2bb6b0565b476dbcba5dc153c3701d2b76fc6362fb535c6df9744105cd2343f949930dd824fef955adaf3860e192838c54104bc522a94522414d3a6099b15b55b77abdfdc3363660a1dee78e3afa4f90c71f665e344ac34f85e0c237f75a87a0268d1796434fe04f51c3199592249a6692c3492425f394223378f4da67148688e5480f0285c17464cfcc30c21a3a25316454b7834c93fb48cf78bdded6c1b676647c54a3f94f1e6eabb6689181e7da708f7e032f0565be63050000",
    ],
    [
      "ETag",
      "49p6ZtDwZMA1WAVF35Dr8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:17 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "0000d0bb64ad8e8202e92e4184421c45060137198434fc2c7f4a747af73a3dc27b2f102709eb7b3ad425fb061f40c4125c252ba7d130e5e913e1f5c362fc9025ba541c779fe359f5b707641ea35b761d47e4923c96edd1886ab745433934cd25e89c5b74c8833db169bddc583b4f263e57f683354b32a974e96854edb3b492506b2733439b28cd4e6e51d648a1da892d5bf596f23ec0a7a542e4b5388b70521e7853659ce280bbc2b13b784530105f5bd5506b3f14e412dcb9f4487f8aad73f7bab6cee37da3e3011a139be0ec41477eaa849a1a116001d8dce41deb69fee6ca3b0817e0df4e07d1b077006671c73af0fb07dbeec78b1a010000",
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
      "Tue, 11 May 2021 20:16:17 GMT",
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
      jobId: "grouparoo-job-75-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc8fbda24e4412091a2354ae91a2d908d9056eb3421db31d42d608a4daaaeca7fdfb569ba5695da2f807dcfb9e7dc074fe88e973b34458467f70dab1fbfdc0a824e10533883db3bda0fbfdbe3fd75b1becc8373e2fd95d7bb87d90c105cb3242eaa9c75a4686acae474bbe966b5682a5c0bd181441dd7e9f4c703db1d8fecc9783018034fb23c5df1f20ed8374a5572daeb1db5bb991059ce70c565978ae2e5beb71ff4aa5adc32aa64efad640f5464ef63d1afb9a0587151ceb61b30d0485627acc03c070bff993b72fa367597e3a29b0178cf29c3948aa654da16a4a0a24c79d6d4262b9a3e2163f3d507daf82b7f115b54e44d5126252ed889b5c30a27eab162d679b40eac6578be8e8279bc5c87c96671e107f3ee62bdda06e1c6babaf023df5298e4cc70ad99756a4e211c407fc7a4e2a5518ff5b5567e6ed0f2fd583401a4256b83896b8f71dfb32724252e4dbda143529b11e211d7c14362d3c9888d768461e01951c3c2a528c70e75532f1d25932176921119ba09f19c7ee2b8d419d9e964e00d06e870821e6aaed819979590bced10ba8a96b19fc4d1365ccc63df9490e2265767ad315dc06b8f0a0a04d007351d74940b50d2ed5e86b11fcd17f1f2d26f27bc6219a68f9b7b98718a73c9008d6b689e62752076d03014ce03ff0cc066623f8e4189a6bf9f90eeb976f1aae52ff41806a8ed2af3469b385a86df8c9d23e212e78d81ecdb0f5481e51ba80d5c1ffe001296b4cd827e6efde8176aaf2296b29a95f4f36902d8043efdd78e8b0f58587d90910aceb03b546a115ab37687b829f799dd77f5031970addec5bc9177ec9acea133b28295eab9a276f1a1d056ac912f2008c2f843d3adc33fe4751e2678040000",
    ],
    [
      "ETag",
      "kc1NK06vZmOVlMFb8zsZdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92d153824010c6ff97ed152662148d191fb0b42c3543eca1c6714e5814038eee8ecc1cfff7f6c8aca966ea057697df1edff7c1161e933c0217e6c9e2a944b1395aa0bad5858fb24c95a45bc1738960002ab620f25a76e7ddd5bded39f2aef95ad8572ff5ec78dd6a1121c325660cdc2dc409a69104f7610b39cb90d6429e96593eab3a03d4a6d0c371e0f78617d4673cd2fd70d2ef7bed7e0776c66131628acd2afe1f6bd39d012b3ef731468179885a4b21f80a43d5d33625cb8a144dc94b11a2840aae1e2c042f0b263837696236eae689635b0da7669d3ab6ed1098f290a984e7c44ec6a40f14572cf5f99a5c8206445592e1b8ba3ed338892a23baec0d03a756e9fb0a90b4384971f637487a978c3ec307b68fe03bc7325ee6ea4075fb37de6fc751a69f479d7b41e707211525754082dea0330ebcc14873d3bdf7f646a11c094e414ad4199e58b566bde158efb19e711d35bdc755a2440342467fc765a2c08d592a71f706bce845d37b020000",
    ],
    [
      "ETag",
      "KsFbFjZ2A6sV8zp2Jx5m/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:18 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85540b4fdb3010fe2b9127242695364ddf9510eb68c6a29584a5290ca6a9b55d27352471b11da60af5bfefe2501e6303295262dff7b83b9f738f6e78be44434478725b30b9f9702d08aa21a67102bbedd975e04eaf243d5905ab71ffc7dde6aad3480e0f01c14b96c2d93a65074a149232359c4deb8914c51a4b210e40e8a0d73d68761dbbd76ddb83aee37481a7581a4f787e03ec95d66b356c3476def54488246578cd559d8aec71bf71e734d6525c33aa55e3a565035c54e36dd3a35450acb9c80f675348a0504cce5986790a293c3197e4d34be93ac7593d01f01da70c532a8a5c976981041579cc93421a5534bc4726cd671f68ea4edce3c83a0e667eb4bfc059495e7cb4b0b2e673c95491ea9ab5809a629eb2395f2eaac8fac6fa1206a710810c565831b5b02ebebaa16b5993e0c20df71f03a0e5079135f1beb9d69135f2c7d64b39cfb766beef4e236bffe8a3751206b333ebf3e50b0cd4b1644af3dc54116192b2b28287467baf8fb724600de65570deb3bbb8d9b70724263d1af75b1d12db8c903ee975708bd874d066ed25611878ba54372c9c8b7cd019601ac77da7435bb61313bbd78997b6c30825a4d5740684e056cb6e63b4ada1df926b36e66a2d14afba8d2e422f72e75138f38f47916bca883174745c255716f13c4f0d4502e88dbab665940b702a8fcef323371c1d47deb95b4dcb8425986ea6b7302f314e1503349638639ac953b184a6a1b360ea455ee08f26c0302370b6432834fc79ff4488366bd3656dde681a859e7f6212d821ce715a18c85df581f684c4f91eda6e6bffd71985e1e812bcb19478f3570ceae9b64bfa3f3c0cdeacaa3c779e4d54baed560edafedac2534370bd2a75f47de68697a8da0a59cc24cbe9fbf303601378f72fb1bbb280854b0b364ac31aa695aad2844a564d2dcf4cba15bbd9ebb7073d64c052bf8a75fbfdddf1941aa522cb58ae1f2aaaaeac6954192ad4230882306cbe39a9ed1fbeee319532050000",
    ],
    [
      "ETag",
      "4UjOESZrcGhOhD8XvyZ5/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "c2",
      "40",
      "10",
      "c5",
      "bf",
      "cbf49a80061b51f05035b442108df55444d6649246934cba7f2c41f2dd3bbb96e2b197ddd937bf19dedb1b5cca2683299ccae2cba0ec9e0ad45b5b24a84ca5155f2d350ac103d4a26032df149365161b13a94574dd2dc5dc44c3ed6cc6844a3fb11630bd415e629529987edca01135f2d8f128dd46c674d75a65b57e8f5ea384859a322bacf771fc328f23e8bd87b1f6f2af9143efc1994e09e628b149d1ba68259d31d52b1b5089baadd05764648a0a1cec1a8524d30a49e4b3e28f437f18068371381a4cc2200819ac2815baa486d9fd8ebd81262daa84be391f040c485772d4dc9d57969f5d86ab03acb5c7dee8af37b4bdc3efc279a7516d24b13b85d6d8e06e7241d6b8e6405a1af42015fccb6fa5bebffb1f8a3982e2c2010000",
    ],
    [
      "ETag",
      "fPg9DdLuuEsCEvSDaBuE1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:19 GMT",
      "Server",
      "ESF",
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
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dd0d97282300040d17fc9b33ac822a46f32b8005251402c2f0c09c1a60159826c4effbd4c7fe0ce9cfb0609c684f3b82d1979820f3026225ce1955d697afc48113ee7a9626e271d25578cfcc36465210fcf41306efa47cdce6bc8bed45c42bd5ec1bb93dbc74d231682cd8db5d67c8b47defbcecbd952a1dd49cb42f1556d7fb37397f36eb058f6bcb8b7418efa030d526a081ec1ec828b9f75866af9e9977e22967c8e218f9a3b83622d16edb6df1ff2b666b43b45d7b2b42fb9faf2cc237487e2ce43224f5e24a6525aa7a7a072378dc73e3babebfd2e9c0c813b4b0e16800c156d088fe9cc95140817e0df1eb76345e6013a491ad280df3fb5522cd11a010000",
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
      "Tue, 11 May 2021 20:16:19 GMT",
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
      jobId: "grouparoo-job-77-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "2b",
      "64",
      "f6",
      "b52aa2829a98adb1b42551dc22b6d96c3664182e745a645866b06b1afffb5e86da6dd3a47d6266ee39f79cfbc13379e44542a624e6d99f1aaac3b707119333028a66f8ea0c1efcbf4ffb2a3ff40757d913af1dbf1edecc6688e00d4bd25d9943478aba6220a7db4d37ab445dd24a880e26ea384ea76f5ba6630fcd896d5936f224e4e992178fc8be57aa94d35eefa4ddcd84c872a025975d2676afefbdbdd52b2bf1004cc9de7bc91eaac8dee7a2df73c1a8e2a2986d3768a0965045b0a33c470bff99497cfe3e7597d35d3743f09e33a08c89ba508d2d4cc14491f2acae7456327d26dae69b03d9b84b77111a4ce4f5ae880aba833323a18a46ea50827119ac5786e75fae83d53cf4d67eb4595cbbab7977b15e6e57fec6b8bb7603d75034ce41738d9971ae6f3e5e503f01a978a1d5c3e6b9517e6990f7712c0d01a525b4c1c8316dda1f9b93388d1d968e07a33835218ec7b133a283d86493210c931828f2b4a866d14214b14dc729c466e48c476634a4298d26663a8a46094d466ce83896cdc8f18c3c555cc10597a590bced10b90bbcd08dc260eb2fe6a1ab4b48699dab8bd65853c05b8f0a0b44d027351d9b2817a8d4b4dbf34337982f42efd66d27bc848cb2c3e60fce38a5b90444d30a9ba7a05a89041b46fcf9cabd40b09ed88f535092e9af67d2f4bc71f1a6e5aff41007d8d855fa4b3661e0f957dace09714bf35a43f6ed819468f91e6b43d7c7df88c4256db3909bad1bfc24ed5300295450b0afa789601df8f25f3b2d3e6271f551462abce3ee30d988b00ada1de2badc1776df9958964534b8521f62",
      "83c1e4d4b5264793117650a8978adac5c7425bb15abe823088e3f775b78eff00ba0f44ec78040000",
    ],
    [
      "ETag",
      "73jNxwvrly13Ggwiu7Nu4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4ec2401045ff657c2d09606db1090f4550480a22141334842ced148adb6edddd6a08e1df9dad88464df4a59d999ed9de7bdb3d3ca5790c1eacd2f573897277b6467d678a09aa926b45b742e40ac102d46c4d6471df6dcc1acd79303f0ffa0f36efbac3d685df6e13a1a20d660cbc3d2429f25881f7b8879c65486b91e065962fabce02bd2bcc701a4e06a31bea33119b7e340b02bf13f4e0609d1663a6d9b2e2ffb1b63858b015ab092628318fd06829a4d862a407c6a66259c1b1a64429235450c1d583b51465c1a410359ad45cb7d6709a75d7b1eb974eb3e910c845c4742a72626753d2075a68c627e2955c8201645592e1a4babed0388d2b23a61c8c42c7aef47d05485a92725cfe0d92de0da3cff0811d23f8ceb14c94b93e51d7c1adffdb7194e9e7515d3fecfd2094a6a44e483818f6a6a13f1c1b6e71f4ded96954632928488526c346dd6e5db84efd3dd62b61a2a6f7785a966841c4e8efe8a71abc84718587378d42523d7b020000",
    ],
    [
      "ETag",
      "pVD1U12YLY3LHZ4lD7M85A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:20 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85540b4fdb3010fe2b91272490fa4893be25c4ba12b66825853405a1696a6dd7694dd3b8d84e5185fadf777128d0b1811429b1ef7bdc9dcf79424b9ece5017113e7fc898dc7eb917049510d3780ebbfe22715a0317f72ea24d35b117a1785caaebd35340f09ca5f06a9db0b21299a44c75c7a3ca5c8a6c8da51065102ab7dae55ad3b15bcdbadd693a4e13788a25f180a74b602fb45eab6eb5baf7aecc8598270cafb9aa50b17ad9af6e9cea5a8a7b46b5aa1e5a56c145553f363d4b04c59a8bf4743c820432c5e484ad304f208557e68c7c3d94ae70bcaacc01bce194614a4596ea3c2d90a0228df93c934615759f9049f3cd071a7903af1f59fde138888ea7789593a7271656d6642299ca125db2a65053cc1336e1b36911592fad8b70780911c86081155353ebf687177a963518de7ae1f14b00b48261640dfc9f9e7566f58273eb50ce0fac711078a3c83a3e3bb1be87c3f195f5edee000375cc98d23c35554498242cafe0b9d1fefbe3cd09588379119cb4ec26aeb5ed0e89498bc66db741629b11d226ad0676894d3b75569f118681a77375c3c2a9483b8d0ea671dc761ad4b59d98d8ad463cb31d4628216ecde910825dd7ae63b42ba147c9353be76a2d142fba8d6e433ff22651380efabdc83365c4183a7a5e249717f1364f0d4502e883ba7679940b70ca8fce0f222fecf523ffc62ba665c0e6986e470f302f314e1403349678c534939762064d4357c3911ff9c3a03700861981ab3d42a1eeafa75742b45d9b2e6bf346a328f483ef26813de2062799816c8a0f7424244e8fd06e57fabf4e2f0c7b77e08da5c4dbbf62504fb39ed3ffe161f06655e4b9f7aca1dc6dbf72d0eef70e9e1282eb55a8a3ebb117dea1622b6431932ca59fcf0f804de0d3bfc4feca02162e2dd8280d6b9856aa72132a5931b57c65d22dd8308c8e5d43062cf5bb98ebb6f6c7936be48a6cc552fd5c5171654da3f250a65e401084610bcc49edfe00c99bbef732050000",
    ],
    [
      "ETag",
      "Ihl27L3aAFTv/l0hRowksQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90dd6ac2401085df657a9b400c36b682172ad20a41342af4079135196334c96c7737162bbebbb36b295ef66677f6cc37c3397b86435167d0854d917f35a84e0f399a992d12d44d69345f926a8de0011a9133791cf7a7fa6347e5f07d3a7f5bfcc47b59cdfabd1e133add6125a07b866d8165a6a1fb79865a54c863ebb5721b1933276995f164317a19252c54945961b28ce3fe201ec1c5bb1b93877f8dac2e1eec6993e01615d6295a1752d11e5333b601b5a86489bea646a5a8c1c1ae912b6aa450443e2b7ee7c96f4561d089dac1731486118325a5c2145433bb9cb33730644499d037e7839001e54a8eba75e791e54797e1e8006bedbed7feebb56c6ff5bb707032a8a78ad89d466b2cb8991c92356e3890510d7a900afee5d7c2dcde972b39c035fec2010000",
    ],
    [
      "ETag",
      "vIAPsZholCYPSXTzLjpmQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:20 GMT",
      "Server",
      "ESF",
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
      "d0",
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7fc9591db0b2a43740180613169161b930942618a8c812d0b4d37fafd34f78ef0754754de6b9e4f78ef4e01d886a0f77f5ee34e866d9d4a6df6bdfa7fe7a4e1e5a21b32a7a7c685e68c5164eca9b3d6639f7216ab01075772b69ccfb91c243869fa9c857da54b775eb62bbeb8315a3877f28169669ad688b93faa5649735703e67d6857e95b832e4b26899a2687a74dec3c935b678c047924c1e5f9146afb219f1308f86d4706cfb525312926c8aa4b3be5d246121d51d628fa686628f3a822d9216fd18d0366148f64813c80cde1d95f2006c00790e6c2273c95edc3705c20df8b7975c0ce41560926a2213f8fd03e9918cdc1a010000",
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
      "Tue, 11 May 2021 20:16:20 GMT",
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
      jobId: "grouparoo-job-79-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "2b64f6b52a454534315bab744ba2b88b58d36c3664182f745a642833d8b88dff7d2f43edb669d23e3133f79c7bcefde0993cf07c4b4624e6e96305e5e1dbbd88c9190145537cfdfb70b9119be5e564e6d95797dede739f6ef793f11811bc6649ba2b32684951950ce468bd6aa7a5a80a5a0ad1c244adc1b0756e5be6c0ee9943dbb26ce449c89239cf1f907da75421479dce49bb9d0a9166400b2edb4cec5edf3b7bab5394e21e98929df7921d54919dcf45bf678251c5453e5eafd04025a18c6047798616fe33b7f1c5fbd46d4e77ed14c17bce803226aa5cd5b630051379c2d3aad459c9e899689b6f0e64e5cedd6968309155bb3ccae90ece8c2d55345287028cab60b9303cff6a192c26a1b7f4a3d5f4da5d4cdad3e57cbdf057c6e6da0d5c43d13803cd35c6c685bef97841fd2d48c573ad1ed6cfb5f24b83bc8f63a909282da1094603d3a6e78e398c9378c012a7db8f1313e2d889077dda8d4d36ec416f1b03459e16d52c9a8bdc02c7a65b0ba23ec030ea0d00a2b8efd0c801ab0f7632e8f62d931ccfc853c915ccb82c84e44d87c826f042370a83b53f9d84ae2e21a155a6668db1ba80b71e151688a04f6a3ad6512e50a96eb7e7876e309986de8ddb4c780e296587d523ce38a1990444d3129ba7a05c882d368cf893853b43b09ed8cf535092d1ef6752f7bc76f1a6e5aff4100758db55fa4b5661e0f93fb49d13e286669586ec9b0329d0f21dd686ae8f7f10894bda6421bfd66e704b9aa700122821675f4f13c13af0e5bf765a7cc4e2eaa38c5478c7dd61b2166125343bc475b92f6c5c0dc7ec130d2ed587d8b0db3b75adce5167841de4eaa5a266f1b1d046ac92af200ce2f87dddade33fb69d2a5678040000",
    ],
    [
      "ETag",
      "zkBWoWOBADI6FBIvIEwYvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "65bc2d49412cd0848b22556bf813ca95216469a750dc76ebee5624847777b6221a35d19b7666facdf69cd31ee029cd63706195ae9f4b94fb8b35ea07534c51955c2bba1522570816a0666b228bcbbe1fcd7bc37e70df1e2b0c8a21e3afbb6e9708156d3063e01e204991c70adcc703e42c435a8b042fb37c597516e87d6186b3701a8c6ea9cf446cfad17c30f07a031f8ed67931669a2d2bfe1f6b8ba3055bb19a628212f3088d96428a2d463a303615cb0a8e35254a19a1820aae1eaca5280b2685a8d1a4d6ead4ea4ec36e394dbbe3341a0e815c444ca72227763e237da085667c2a76e4120c20ab920c27d5f585c6695c193165300a9d66a5ef2b40d29294e3f26f90f46e187d860fec14c1778e65a2ccf599ba198cbddf8ea34c3f8fea7ba1ff83509a923a236130f467a1379c186e71f2dedb6b54132928488526c3badd6c5fb51cfb3dd66b61a2a6f7b85a966841c4e8efb84b35b809e30a8f6f45df5f6f7b020000",
    ],
    [
      "ETag",
      "p3DEcUBMDIJ8OseIpMalxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:21 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ffd5536b4fdb3014fd2b96f70534e84b505827c44ac9b66c258124857508b526b94d0d491c6c0709a1fef75d3bedba8e8d7d9e54a9b1ef39e79efbf033bde745427bf496a70f15c8a73777e296ee50d02cc5db6f65d8fd127eafdefafefedc3f50733598b7fb474788e086a5585e66b0ab44256350bd51d848a5a84a2685d845a1ddc3d66ebbdb691d74f75aefba9d4e17790ab2d99017f7c89e6b5daa5eb3b9cadd488548336025578d58e43fef9b8f9d6629c51dc45a35375336318b6abe9ef4381331d35c1447a3100d540ae40472c633b4b06626b71f36a51b9ce58d14c18f3c0616c7a22ab4b18512b128663cada455a5bd676a6dfef2414367e80c2232f0475eb43565b9214fb70953643291a0aa4cef9029d634e3194c7832ad23e53df918f86718410773a6404dc9d56727700819fa574eb0354d9806d4f1fc880cddaf0e39267def946c4ab91e19799e134664eb789b7c0afcd13939196f60b08604660c6d9c328d79b4f19ed49fae19ac06a511b4ecbafb72d67461a25c48ae4dbdae1739417f10b9974edde221a42c7e0a1fb0c93396294034932c070df24c248094733f7423d7f7fa4364d8be9daf108af6ae9fd784e8a9046350db7f7ada8f1cba58ecfc1dd10f82fe18559994ece9b7183aedee19fa9a7dc9b2ca422cde9e6a078f7580b6a9c9b63a75e8e26681bf1d8adb56abd38b91138c697d15c00c2414b1957ca583166c03ff7c34ab0d462cee30a6511acf4af3589924b1041b8e786eedd6ecf661bbdb6a510b96fa45ec60df284391fc31b2cc51597d9052c8c0aead39623665bdf0027bc2930bbbf41b2e1f96573928c55223ef0992331dcf799112c5d302b525909990645615b1a1d53b6eaf984cab1c0a4dccd0548f989137485895a5901a92b500c6ea97114681eb7dda7ebf3c9e8c2327c4f7a6c975bb77d8b931f5d82aeac1fe9715dcd423b14fc0f7cc13f8010f7df766be050000",
    ],
    [
      "ETag",
      "XpS6JSZu+OO5hO7shsCh1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:21 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "7282300000d0bb642d8ea0207427202d1f4144a164c38410a81327fc31e0f4ee757a84f75e00614cfa3e1b6a4a18f8003392b4355ebb8daa6755c9fc7c8e127e42b14d9c45eabfa6ae3d4051a29e118b980e817bf10cf7ae8e900acb60628e2f792bcf6ce3474fe3291a1133ca43c81e957bd56ec9b18ebffdc5e6672957bcb9b04c65bfe98a364d2bb32afccf7299f0a9bcd5c24e38195c77b4a47edabaa6c212e5b6ec98ecd15939b3da89ee134585bba6fed98c541528b42e7341c473e0bbc2f698402fa281c3651d4d69d4482989c3902165a4fe15821520bcb977a4cfee6fee56d6b415f8b767c3dc9077804e50473af0fb07aeb8a2901a010000",
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
      "Tue, 11 May 2021 20:16:22 GMT",
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
      jobId: "grouparoo-job-81-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fa34014fd2b64f6d5168a14da26cddab4b836dbd29552cd66b32133c380a3c0203368aae97fdfcb605d8d89be0033f79c7bcefde019ddf1324113447876dfb07affed5610748298c219dcdac5d3e5eeeafe91fd342ffd851084ef7d3e9b4e01c15b96c44595b39e144d4d999cecb6fdac164d856b217a90a8371af406ae6d79ae638d5ddb768127599eae787907ec1ba52a3931cda3763f1322cb19aeb8ec5351bcde9b0fb659d5e2965125cdf79226a848f373d1efb9a05871514e775b30d04856c7acc03c070bff9909397b9fbacf71d1cf00fcc029c3948aa654ad2d48414599f2aca97556347946dae69b0fb4f557fe3c32a8c89ba28c4b5cb01323c10ac76a5f31e33cdcac8d6570be09d7b368b909e2edfcc25fcffaf3cd6ab70eb6c6f5851ffa86c224679a6b4c8d337d0ae000fa09938a975a3d6aaf5be597062d3f8ea52580b4645d30f62c170f46d698a4c4a3e9e87448528b113222de109f128b8e1de6248461e06951cdc2a52887c364341edb34764ebd041e5612132771e3843ac4b3bc51eab8093a9ca0c79a2bb6e0b21292771d42d7e132f2e328dc05f359e4eb1252dce46ad1196b0b78eb51418100faa4a6431be50294da762f83c80f67f36879e577135eb10cd3fdf61e669ce25c3240e31a9aa758bd1609340c05b3b5bf00b09ed8af6350a2c99f67d4f6bc75f1a6e5aff40806d8da55fa8db651b80c7e683b47c415ce1b0d79e83e5005966fa036707df80b4858d22e0bbadcf9e16fd45d852c65352be9d7d304b00e7cf9af1d171fb0b0fa2023159c6177a86c4568cdba1de2badc17f660640f5c0f6970ad3ec4ecb173ec5a9ba3cdc80a56aa978abac587423bb146be822008e30f74b70eff00eb3a93d578040000",
    ],
    [
      "ETag",
      "2mzQUVqweK/QEDoobiyEiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6e82401085df657a0b09188b96a417586d4b833f558c178d312b0c8a028bbb4b8d31be7b67a9b54ddba4bd6167966f76cf3970846d5ac4e0c2325ded2a1487ab15aa675d8c51569992b494bc900806a0622b22d3a0bbb367b3e1522453cbde867e1c3c79fbdb5b2264b4c69c817b8424c52c96e0be1ca16039d258c4b32a2f167567803a947a73128efdc103f5398f753f980681d7097a70322e8331536c51f3ff189b9f0cd8f0e51813145844a8b594826f3052beb629595e66684a5e890825d470fd6225785532c1b9493b66db366da761b59ca675e3341a0e81198f984a7941ec7442fa4071c5b231df934bd080a84b329cd4cf571d555c1bd1a53f089d66adef2b40d29234c3c5df20e95d33fa0c1fd83982ef1ccb7955a80b751f0cbddf8ea34c3f8fea7a61ef07211525754142bfdf9b845e7fa4b9f9d97be7a0508e04a72025ea0c6dabd9be6e39d67bac775c474df7b84a546840c4e8ef784c15b809cb249ede00ed9dc20c7b020000",
    ],
    [
      "ETag",
      "iLDq1WWObrfU01kTIdLJAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:22 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f",
      "da",
      "30",
      "14",
      "fd",
      "2b",
      "96f7d26a054a563160aa3ada665b34486812a8505581494cea92c4a9ed30a18affbe6b07cae8b6ee791212b1ef39e79efbe167bc64798cbb78ce92a7928af5bb473ec727982a92c0ed70e477f8aa1df5fdf19a384b6f387f3f1efd383f0704d32c49b222a535c94b1151d91d05f544f0b22082f31a08d5da56add9b24e3fb6ce4e3b2dcb6a014fd274d167f912d80f4a15b2db68ec72d713ce93949282c97ac4b397fbc6ca6a14823fd248c9c661ca0664918db7935ea43c228af1fc7c148081525231a519612958d833e3f9e743e93a23593d01f08a459444112f73a56d8144c4f3054b4a615471f7191b9bbf7ce0c0eedb5721baf2466e7834239926cf8e1191683a155496a93a4133a869c1523a65f1ac8a144bf4c5f7061001070f44523943b7df6cdf46a8efdddafed14c2af00842ae17a2bef3dd4617a8e75ea3432dc74523d7b583101d5d1ca3afbe371aa2cbc901068a88e982808f6ba22091d2e6e3ead3d19355542a006ddbeefc3e6cbcd151c60553ba60c70d6dbf77153a63bbea719f26245a074fd0e505492505341124a38a8a018fa95e2e2f7042c7737b7d6098c60d770889bb77cf7b42b82ea836a8cc3f0e9d0114d71b0cf16673f27758cff77b1390264290f5ab18d86d9d69fa9e3d26696920066f4e958d5515c04dacb3ed4e16dedc6fe0778261e72a757c33b2fd09aeae7cbaa082e691917ca38d066c02ff7c3abb3d062c6c32a4816d504c2a16499d2412d484439619bb15bbd9b63a56071bb050af631f4e8d32cde33f46b6394aa34f85e0c237cbab8f904d1a2f2c879eb0f8c6acfe81cba7ed5546a52489967739ca888a1e589e20c9921cb405450b2ed0a2cc",
      "234dab36dd5c11919419cd15d243935df432f73a0acaa2e042d178af0280ea9104a1efb85f8f3f6d8f9793d00ee0e92974d7ecb6ad7b5d9429a59aeeff5bc67d351cede7da736dd8e69f369211bbce050000",
    ],
    [
      "ETag",
      "PUR9ov8cLRVyaIkOPb+VUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:23 GMT",
      "Server",
      "ESF",
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
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dd04b7282300000d0bb642d8e50b1a43b2320a0443ed5229b0c9f8014462221f2e9f4ee757a84f77e4092659473d2b735bd830f30250a5c66cb03d3102973d4c8993efb9bf7a9d90763229f60343bf2b9762a5db8475f6342e5535b4eb0961ecd5c2ba1a49c9d2087a648e090ca156e7808a924bc7b49d46cd0ed08fb3c3054db68a15f22f3d99336cd7b543551788d8d78b3ef86e92104a928dced6477ddad383c85b57ebb1a21be31b3786224b0f9c946e48e92352a98518d6c59afe8f7efcb57e05917352dd2a2b6d263bc923cfbe0e59619cf96e25b0674d76001e8c8aa8e7252bdb86f2a840bf06f27fdc4e82b00d1a4a31df8fd03b45b9ff41a010000",
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
      "Tue, 11 May 2021 20:16:23 GMT",
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
      jobId: "grouparoo-job-83-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6f9b3014fd2bc87b6d1242289048d11a51ba464ac80aa4d5364dc82617ea96608a4da7aaca7fdfc5345dab4add13b6ef39f79cfbc133b9e7d58ecc08e3c5430bcdd3973bc1c80901450b7c8dd760fff44fefc637706f5119e60e6cfcabf91c11bc6349baaf4b1848d13619c8d9361e168d686bda0831c044036f32183b96e93ab639752ccb419e84325ff1ea1ed9b74ad572361a1db58785104509b4e6729889fdebfbe8d11ad58db8834cc9d17bc911aac8d1e7a25f4b9151c54535dfc668a095d0a4b0a7bc440bff983b76f63ef590d3fdb040f023cf806699682bd5d9c21499a8725eb48dce4a66cf44db7c732071b00afcc4c844d9eeabb4a27b38317654d1543dd5605c449bb5b10c2f36d17a912c37611afb97c17a31f437abed3a8c8d9bcb200a0c4559099a6bcc8d337d0bf182fa3b908a575a3de99e3be597062d3f8ea523a0b4843e98baa643c79e39653973b3dc9b9cb2dc04c63ce69ed20933b3a90df68e01459e16d52c5a89cab4d9d89c7a90bab6bb4bed699ea78c3a790a536bcc3c779233cb258713f2a7e10aceb9ac85e47d87c84db44c823489b6a1bf48025d424edb529df7c6ba02de7a545820823ea9e9d045b940a5aeddcb3009a2859f2caf837ec22b2868f6143fe08c735a4a40346db0790a9ab5d861c348b85807e708d613fb7e0c4a32fbf54cba9e772edeb4fc959ee0003bbb4a7f499c44cbf09bb673445cd3b2d590c7fe406ab47c8bb5a1ebc36f44e292f659c8d536887e90fe29821c1aa8b2ff4f13c13af0df7fedb8f888c5d54719a9f08ebb93c94e246ba0df21aecb7d618fbd896d7944831bf521e67aceb16b5d8e2e23eca1522f15f58b8f85f662ad7c056110c71fea6e1dfe02387abc0678040000",
    ],
    [
      "ETag",
      "SMe4ZC5j1Wek2asNf6eOCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d925f53825010c5bfcbf68a139aa132e3039626336a06f8d438ce1516c5804bf74f8de3f8dddb4b664d35532fb0bbfcf672ce81033c6565022eacb3cdb346b1bfd8a07a30458052e74ad2ade2a544b00015db10998c9dcb71d2eb2df46857947ad70bd769ecf5fb44c8788b0503f70069867922c17d3c40c90aa4b598e7ba2857756781da57661846813fbba3bee089e9678bc9c41b4c8670b4ce8b09536c55f3ff585b1e2dd8f17580290a2c63345a2ac177182bdfd894aca8726c48ae458c126ab87eb0115c574c70dea049a37bd5683a2dbbe3b4ed9ed36a3904e63c662ae325b18b90f481e28ae5017f2597600051976438adaf2f34ce92da8829fd59e4b46b7d5f0192966639aefe0649ef96d167f8c04e117ce758c175a9ced46872effd761c65fa79d4ad170d7f105251526724f2a7c330f2a673c32d4fde077b85722e380529d164d8b4dbddeb8e63bfc77ac34dd4f41e57098d16c48cfe8e71a6c04d592ef1f80611c9a5b07b020000",
    ],
    [
      "ETag",
      "dH6/Hd99UuFjmnuj9SbfcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:24 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7f4fdb3010fd2a96270448fd414be9ba4a881508235a49ba3429ab26d4b8891b4c93b8d80e5285fadd777608d0c1d89f9322c5e77bf7def39d9347bc64798cfb78ce92fb828af5a73b3ec7354c15496097bbd924bebcf20fdb97f9cfdef53a995ef426c9f1312098ae92245ba5b42e7921222afbc1b891085eac88e0bc0e44f55ea7deeab60f3e773b075fbaed7617ea244d1743962fa1fa56a995ec379b957623e13c49295931d98878f6bcdf7c68375782dfd148c9e6b664135464f363d193944744319e1f07633050482a6634232c050b2f95f1fceb36758391ac9100f881459444112f72a56d0145c4f3054b0a615871ff111b9baf16786c0dad331f9db981e3ef8524d3c5e13e2212cd6682ca22553514c299162ca53316876566b544179e7b051970704b249521babeb43c0ba1a17b6d79af981cd74743fbbb854ed0c03947db64b68302c7b1c63eda3bd947df3c3718a1d3e916064e11d3050123e7448192d2eee37269ebd12a2a15809efa6ebf9d36dee82ce382297d62dbf12d6f70e6db13ab6cf29026245a8fefa1cd0b924a0a682248461515573ca6503272c7b66fbbce600815a673a30a2171ffd7e34b81bf5e516d509937be18ba03bfdb310e2ac884a485c13c940bbcd36a1c7576f06653fb3bd1c0f3065310274290f51f393890967857c3e04d541aad345b58ab55511b6f6e36f0d4305ccb921dff082c6f8acb2d8f2ea8a07964283f68b4019bc43fbfaeeaaa03162e3bc84805b1542c925a2412d4a47d9619bb6575abd739ea1d620316ea4daedbeee83f421ebf9b79d2280c3f15820bcfdc6f1d829a345e580e3d813f460d67544a92689a208793484ae6294566f8e8b9cf280c11cb911e040afde9c89a3d4d3caca15312a39817bacaf4b98fca4157d16e19ee6a63c64e39a1ff6be5a66c92d63a771d0b6ed56f14c00a6079050000",
    ],
    [
      "ETag",
      "oOmVdHMT32HnX8WygYF8Vg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:24 GMT",
      "Server",
      "ESF",
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
      "ff1dd04b7282300000d0bb64ad0e5af97567a412818ae368f86c32102206102140443abd7b9d1ee1bd1f9050caba8ef48f92d5e013bc9295b9a00bb73120c9af2c77e080e7cfb656d38defdfe2423ff848ca4659ee31ea0a5a3751e0ecf456637817235aabf73c5a32beb22ff9cae266ab9d2b3b93416756ea29d42feb3683a3591db7ba368d3dcebec2cd8eb496b1cf498ae8945fa6c457078a5dced3f108cba437907c6e658135cd70ec28e04ae091528d21f976b0a3a0d1123e3a1b73b71ed65e7be8a167857aa808ef61f43cd56eb28b86adb88a409ee23bdcbb6006d8d870c13ac2dfdc0fd53467e0df4efa57c3de0190258209f0fb0752a8b1361a010000",
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
      "Tue, 11 May 2021 20:16:24 GMT",
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
      jobId: "grouparoo-job-85-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d6f9b3014fd2bc87b6d1292104822456b94d29529900e48ab699a903186ba25986293aeaaf2df776d9aa8dda4f609dbf79c7bcefde0053db02a437394b2e2b1a5cdf3977b9ea23344252ee0b588feac7cbfdd3bfbefcda5dd5ad7b371f6f0b45800822996c0bbbaa43dc1db865031df46fda2e16d8d1bce7b90a8379df486f6c8746ccb9cd9a3910d3c41cb7ccdaa0760df49598bf96070d4ee179c1725c535137dc277a7f7c17e34a81b7e4f891483f792035011838f45bf969c60c978b5d84660a015b449e80eb35215786266e9f9fbd47d8677fd02c07b46282684b79554b62005e155ce8ab6d159d1fc05699b6f0e2872d7ee2a36082fdb5d95547847cf8c0c4b9cc8e79a1a97e1c637bce07213facbd8db0449b4ba72fd657fb5596ffd20326eafdcd035244e4baab9c6c238d7b7002ea09f512159a5d563f5ac945f1be4fd3f1645006941bb60e298361e4ecd599aa70ec9a7e3499a9b344da7a933c1e3d424338b5a594a31f0b4a866e18a57569ea7d6644a130bdb4e624dc824c143d34c2043660eb13533ed0c1dced053c324bd60a2e682751d42b7a117bb491c6e83d532767509396e4b79d1195305bcf528a140007d50d34145190725d56e2f88dd70b98abd1bb79bf09a16983c478f30e31c9782021a37d03c491b9f67d030142c7df702c07a62d7c7a040f35f2f48f55cb978d3f2133d86012abb527f5114875ef04ddb39226e70d96ac8be3ba01a2cdf416de0faf01b90b0a45d16f463eb863f51f714d29c36b4229f4f13c03af0e9bf765c7cc0c2ea838c907087dd2142899086763bc474b9afece1d49a8d2da4c18dfc3736319df1b16b2a87ca4877b492af15758b0f857662ad38812008e30f74b70e7f01e7595e3d78040000",
    ],
    [
      "ETag",
      "gSxCMMuv7vJrF6u4P93dkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd6e82401085df657a0b891a454be2855a5b69f0a782bd698c5961502cecd2dda5c618dfbdb3d4daa66dd2dec0ccf0cd72ce81233ca73c0617d6e9e6a54479b8daa07e30c51c55996945b742708560016ab621329ac48fe3b2cdf3019fde6f991c35a6416bdfed12a1a22de60cdc23242966b102f7e9089ce568d64456e67c557516e84361864138f72677d4e72236fd64e1fbbdbe3f849375598c9966ab8affc7daf264c14eace798a0441ea1d15248b1c3487bc6a6627991a1ad4429235450c1d5838d1465c1a410364dec4ecbae3b8d5adb69d6ae9d46c321301311d3a9e0c42e02d2075a6896cdc59e5c8201645592e1a4babed2388d2b23a6f426a1d3acf47d05485a9266b8fa1b24bd5b469fe1033b47f09d63b928b9be50b7feb4f7db7194e9e75137bd70f883509a92ba20a1371e06616f3c33dcf2ecbd7fd0a8665250900a4d86f55ab3d36a3bb5f75807c2444def71b52cd18288d1df314a35b809cb149ede0015ab985d7b020000",
    ],
    [
      "ETag",
      "cNdVMu7nmCnOJharH2OS5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:25 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "a3",
      "40",
      "10",
      "fd",
      "57c8de2f1afb41bfa06dd278b5e53c72957a4035e672691718ea2ab0c82e358de9ff7e0358b5d1d3840476e7bd796f66677922f72c09c890786cfd9043b6fd76c73d522320e91a774ff25f77e6667ee64c1f55676ec583b9a79f8c472344b08225689c4650173ccf7c10c385d358673c4f69c6791d13d5fb5abda5b5555debaa03adddd69027200a672cb947f6ad94a918369b7bedc69af375043465a2e1f3f865bfb96937d38cdf812f45f350b2892aa2f9b9e869c47d2a194f460b070de402b225c4944568e1951978df0f5337188d1b6b046f980fd4f7799ec8c216a6f07912b2759e9559c9f0899436df7c10c79819135799cc17967bb4a271415e1d2b5428cb6506228f644d59614d218b60c982551549ef951ff6fc0223e8e0960a102be5faa7611b8ab22a4023e554195b53e5906a5acac2b20cc7558e4e8f95737bbeb854ce6e0e30e839002159523a76a91741e1f6b9a9e6fba32c0854a2832ab8d4558db6faeac00b3ddd0ffb9d9e17aae0797d4fefd18ea7fa832e74030f28f26491bd64d184271a50aa799d16b45b7a970e82f6a0eb05d01bb45a3ee81da07d1a06aada05b2ab91c78c4998329172c1aace926bdb748da56b2facc9d835ca32428add9b56e68a22defa945824823ea96b57441947a5e2984ccb35ecf1c435af8c6a3266b0a6fed679c0d908692400d134a33148c82e78804d239773c774cdb9359e21a33ceecb3d4290e19fa75782bb4dcb2ecbf25d6869dd527f0fb8a2515e2236d50769f5c86e57fb7f8ab16d8f6f50966619dd7e9cfec3fc25be5c55165ff448a1b65fb5c9eeef0e9f1ac15b546527bf17867d43aa2d1b42c820f1bf1e1d0497812f7f06fb9b8958bc9b282324ae7150",
      "7d5188f8195403cbe2d26ec56ef57b7aa74d4a7026dfc5fa5a7f7f32458e2223c490c8e78aaa9b5936aa08e5e20584419c33cbb4ce31fa0f9052c5fc19050000",
    ],
    [
      "ETag",
      "+uKjIvOBSDw0SONm9Ob7+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90414fc2401085ffcb78b44d0ac12a241c401b2512d4225e0c214b3b2d85b65377a7924afadf9d2d1c3c7ae9cebe7e6ff7bd3dc1212b6318c1364bbf6ad4cd558afc6687104d9db391a5a2d2203880ac52216f82ebddea61c047efa7299e3ff68b6dfd329c8cc7429868878582d109920cf3d8c0e8f304a52a506c9b8dee4e148c9bca2ab3c57bf018842214145b61b19acf27d37900adf3c7561dfe6559b70eec691b62821acb086d8a4ad31e239ed9824615558eaea15a4768a083bb1fa9a6ba529ac815c5bdf3dd9edff76efd8137f4fb7d5fc09c22c51995c2ae96920d9858e5211da51ff404d0dd285593eefbddc9b6c3655ab7eb8b69da309a574d92c0a0bddc3b07b9271b8e2534eb1a1d8894bce453c6e77dfb0be02943cca6010000",
    ],
    [
      "ETag",
      "5E+hUD4tw0zymKVjNbuO9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:26 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4d",
      "72",
      "82",
      "30",
      "18",
      "00",
      "d0",
      "bb642d0ee22fdd81808a6230061436190c9f8a8062044be8f4ee757a84f77e50c239bc5eac7ee470475f48269adee7fd753533d905c687c7d0dfe4d1b19887f44ad4b73f383e8d93d02966b313cf5ba5c1cd45138e46f2b05d4d46ae57faa4a1cedc0415b67624f3da7bcea194292bb8b8af6516ebf76f824b18f9a1745c9aa487b336d12cf23494591a4ce395c947d64add9f3267d9aae17b1136d10d632f945b1154a511939bfb80a1cba706b55c3bd8d413120d163b8b2a5db10db4bd47afb16be365f566913eedcefcd6c5bbb5d3e2b43015d443d056998017cb3edce158d77be8dfce6a59c127c084448040bf7fc60969631a010000",
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
      "Tue, 11 May 2021 20:16:26 GMT",
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
      jobId: "grouparoo-job-87-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3014fd2bc87b6d4242089048d11aa5b4454ac84648aa699a906d0c754b30c5265354e5bfef629aae55a5f609dbf79c7bcefde0193df23245534478fed4b0faf8ed4110748198c239bcee768ee766c33159063e31712e6e0a7e98cf6680e02d4be27d55b09e144d4d999c6e37fdbc164d856b217a90a8e7b9bda1630d5cc71e4c1ccb72802759912d79f908ec7ba52a3935cdb3763f17222f18aeb8ec53b17f7d370f9659d5e2815125cdf79226a848f373d1ef85a0587151ceb61b30d04856276c8f790116fe335372f93e759fe37d3f07f081538629154da95a5b90828a32e37953ebac68fa8cb4cd3707b4f197fe2236a8289a7d999478cf2e8c142b9ca863c58ceb68bd3282f07a1dade671b00e93cde2d65fcdfb8bf572bb0a37c6ddad1ff986c2a4609a6bcc8c4b7d0be102fa29938a975a3d6e9f5be59706051fc7d212405ab22e98b803070fbdc18464c4a599371a936cc008f1883bc62332a0139bd9296118785a54b370294ac74abdb16b8f12e2794e62d3114e2616c549e6ba940c46e9d862363a5da0bf3557ec8acb4a48de7508dd4541ec2771b40d17f3d8d72564b829d45567ac2de0ad47050502e8939a4e6d940b506adb1d84b11fcd1771b0f3bb092f598ee971f30433ce702119a0710dcd53ac5e89141a86c2f9cabf02b09ed88f7350a2e9ef67d4f6bc75f1a6e5aff41806d8da55fa8b3671148437dace19b1c345a32187ee802ab07c0fb581ebd31f40c2927659d0cfad1ffd42dd53c43256b3927e3d4d00ebc097ffda79f1010bab0f3252c11d7687ca5684d6acdb21aecb7d610f3d6764d948836bf52136b6ad73d7da1c6d46b667a57aa9a85b7c28b4136be42b088230fe5077ebf40f2c9b2d2178040000",
    ],
    [
      "ETag",
      "VV687f15bLIEb/agoGlivA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085ffcb782d492558b08987a2a8240511cac910b2b453286c3b75770b2184ffee6c45346aa2977666facdf6bdd71e60931509f8b0c896af15aafdc512cdb32dc6a82b6934df4a2a34820368c492c960bddd6432f0b68372f34451d875770b0a6e6e98d0f10a7301fe01d20c65a2c17f39402172e4b598649517f3ba73c0ec4b3b9c44e3fef081fb9c12db0fa7611874c31e1c9df362228c98d7fc3fd6664707d6b418638a0a8b18ad9652d11a63d3b736b5c84b890d4d958a51430dd70f968aaa5228a2064f1a9d76e3d26bba6dafe55e7bcda6c7a0a458988c0a66a713d607868c9063dab14bb080aa4b369cd6d72d8fb3a43662cbfe30f25ab5beaf004b4b3389f3bf41d6bb12fc193eb05304df399153559833751f3e05bf1dc7997e1e751744bd1f84369cd41989fa83de240a0623cbcd4edebb7b837aa48883d46833bc745b9dabb6e7bec77a4b366a7e8f6f54850ec482ff8ec7cc809f0aa9f1f8064e0d5b647b020000",
    ],
    [
      "ETag",
      "AjvkilA6vMpkOoTLB0wboA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:27 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6f9b3010fd2ac8fba795f283101248a4aa63096b9152d211d22e9aa6c41043dd124c6dd32aaaf2dd7798a66dd6ad9590c0bef7eebd3bfb784277345fa3218a687a5f12befd72cb22d44044e21476835e520a3ccac617e7dc6486f5e85fff5c38272780a0154be04d9191a660258f8918ce67ad94b3b2c09cb126246ada76b3d33774ab6fea83be61f4812748964c687e07ec1b290b316cb7f7daad94b13423b8a0a215b3cdcb7efbc168179cdd92588af6a1641b5444fb63d1d38cc55852969fcc6760a014842fc906d30c2cbc32d7d1d7c3d42d8a37ad14c00f3426388e5999cbca16a488599ed0b4e42a2b1a3e2165f3cd079ab91377146aa3e9dc0f8f5678539157c71a16da72c9892833d9d05650534233b2a4eb551d29eeb4efc1f40222e0e0060b2256daf5b91bb8daebd64a3bd14e35c71f6b87093c5f9bfbbe3b0bb5a3d363ed2c98ce2fb56f8b030c385f132169ae7c8738ca48e5f9b9b5defb03ad085882681d5c5a7a1f776c7d102591152776b717253a89223bb27ab81be9f1c024e63a221878b2caae583867b96e7475d2b5e0e919a6199b06b606c0ebda49d7d6ed64a0db06b1ec4e1fed1ae8915349c654144cd0babfe83af042771906737fe484ae2a23c1d0c3716dae2ae2ad4f094502e883ba7655943250aa0ecbf343377046a177e5d6f76342521c6f67f77043129c090268ccf18648c22fd81a9a862ea7332ff4a6be3301863af4cb3d42a0e1afa75742b82d5497a57aa3591878fe9932b0475ce1ac549087fa0339057845bb5de3ff699c207016208d39c7dbbf62504edface8ff905078b5aa6dee253ba852dbaf0cb4fbbd83a781609eeaece8c7dc0d16a8de0a484238c9e3cfaf0f8055e0d3dfc27e46010b530a3242c21a2e6b2c2a919893fad2d28db25bb33bb665ea1da4c05cbe8bf54c7b7f3a558e2a23d9905c3e5754cfa86a54152ac50ba8faf3c130a983dafd01bfcfff7c23050000",
    ],
    [
      "ETag",
      "R5fusaClDMHr4o27wNWXYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b83401085ffcbf4aa546db036904353a40904696c038512c2c64cac893a66778d48f0bf7776534a8ebdeccebef966786f2f702cea1d8c615be4a716657f97a35e9a2245d5965af1d550ad101c402d72269351177b27ef5efa9f2af1a34e1caad976399930a1b26fac048c2fb02fb0dc29187f5da01615f2d86623ed46c674df18659e7cc4af71ca42453b2324abc5e279ba8861706ec69ae3bf46d6830307daa6b847897586c64523e980999e9b804a544d89aea25666a8c0c2b6914b6a1b21895c56dc2872fd30f01ec391f7140641c8604999d005d5ccaeded91b68d2a24ca9e37c1030206dc951f7f63cb3fc60339c2d60acddf682bf9e6f7aebdf85d35ea37a93c4ee141a63ded5e40b19e39a0369d9a20399e05f9e15fafa1e7e008d552ceec2010000",
    ],
    [
      "ETag",
      "N4wE0q0/r1XsN18wajmHbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:27 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb64ad8e4883a63b28fe810a44826c32810904b088442780d3bbd7e911de7b0196655c4afab8d5bc019f60600b34cb66c77665d1822f4524982aca659d2fa76bbc13b488cc983ca189ecd6d5dc4118f22cbf2f305819525a22a654e79132b50a356a4b74db4b8db19fdbecb8c3377220a74d6c7861ff5062bfb73eaeb1be5994a768ed3ad7ea4261301f6be8d73e99e6b19654b5755f7f796690f7679b52d2e4c998d84d9be29486ce45dd7055a911291642afd7f0fdc9fd504b8bc316a28035cc743c8778f3048f19fa3116bbdced88d88009e07d5b765cd2f2cdd5214213f06fa78fa1e5ef008bb38e77e0f70f00a7e2581a010000",
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
      "Tue, 11 May 2021 20:16:27 GMT",
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
      jobId: "grouparoo-job-89-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d4fdb3014fd2b91f74adbb4b44d52a91a550990a94d479ac2a6698a6cf72618d238c40e1343fdefbb7128834d82a7d8bee7dc73ee479ec89d28b6644298c8ee6ba81e3fdd4a468e08689ae1eb793a0cdce0388fb2df5fbe7c735719752f57b3e91411a26129ba2b73e82859571cd464b3ee6695ac4b5a49d9c1441dd7ebf4c703db190f6d6f3c188c91a7204f17a2b843f68dd6a59af47a07ed6e266596032d85ea72b97b79ef3d0c7a65256f816bd57b2bd94315d57b5ff4732e39d54216d3cd1a0dd40aaa047654e468e12f73cb4edea6ee0abaeb66087e101c28e7b22e74630b537059a422ab2b93954c9e88b1f9ea40d6fec29fc7169779bd2b9282eee0c8da524d13fd58827516ad9656109eada2e52c0e5661b29e5ff8cb5977be5a6c96e1dababef023dfd294e560b8d6d43a31b7102fa8bf05a54561d4e3e6b9517e6e50f0ff581a024a2b688389638f69dfb53d963287a7eef188a53630e63267448f99cdbd210cb70c28f28ca861d1421600301c8f464ec21c8727439a8e12176c96608e21776c977a6c4cf647e45725349c0a554a25da0e91eb2888fd248e36e17c16fba68494d6b93e6d8d3505bcf6a8b14004bd53d3be890a894a4dbb8330f6a3d93c0eaefc76c20bc8287f5cdfe38c539a2b4034adb0791aaaa5dc62c348385bfaa7083613fb7a082a32f9f1449a9e372e5eb5fc851ee3001bbbda7cc93a8e82f0dcd83920ae685e1bc8437b20255abec1dad0f5fe27227149db2ce472e347df49fb14410a1514fce36922d8043efcd70e8b8f585c7d94511aefb83b5c3522bc8276878429f799dd771dcf337faaa695fe37e6f63dfbd0b5264793117650e8e78adac5c7425bb15abd803088e30f4db7f67f0043f81d1478040000",
    ],
    [
      "ETag",
      "Gf4I8I3lRgzJJX8Oga8QOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92614f82501486ffcbe92b2c344365f303a6259b9a216e6dcdb92b1c10032ede7ba939e77fef5c326bd5565fe09cc3732eeffbc2019ed3220207d669b2ab50ec2f12540fbaf051569992742b7921110c40c512225d7fd75f6cf79d46988f7c7730b96457e563d2eb1121c30de60c9c03c429669104e7e90005cb91d6429e5579b1aa3b03d4bed4c379e07bd33bea731ee97eba188fddfe780847e3bc1831c55635ff8fb5e5d1802d5ffb18a3c02244ada5147c8ba1f2b44dc9f2324353f24a8428a186eb0789e055c904e7264dcc4ed76cd84dab6db7acaedd6cda04663c642ae505b18b39e903c515cb7cfe4a2e4103a22ec9705c5f5f689c46b5115d7ad3c06ed5fabe02242d4e335cfd0d92de0da3cff0819d22f8ceb19c57853a53b7e37bf7b7e328d3cfa3066e30fc414845499d91c09b0ce7813b99696e79f2dedf2b9433c12948893ac386d5ea5cb76deb3dd61baea3a6f7384a546840c8e8ef18a50a9c9865128f6fda16bf797b020000",
    ],
    [
      "ETag",
      "ARqBUjy81cmHRADM/a3pXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:28 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6f9b3010fd2ac8fba7d5f20348022452d46529eb9052d212d2ae9aa6c480a16e01536c3a4555befb0ed3344db7b51212d8f7debd77e7334fe89ee6111aa180260f1529379fee58805a88089cc0eec6a7dae7583f2f7ef42ee7b7d1b57d5544a7c9780c085ab338ce8a94b439abca90f0d172d1494a5615b864ac0d89da43b5ad19ba6a1a7d7568e8ba013c4ed27846f37b60df0a51f051b7bbd3ee248c2529c105e59d90652ffbdd47bd5b94ec8e8482770f25bba0c2bbef8b9ea42cc482b27cbc5c80818a937245324c53b0b06746c197c3d41d8ab34e02e0471a121c86acca456d0b52842c8f695295322b1a3d2169f3d5075ad8337bea2bd3f9d2f58fd638abc9eb63057365b52a09af52d152d650534c53b2a2d1ba8914f7ca376f7e0e1170708b39e16be5fabbedd9ca7e6bad8c951365e29e2a87091c5759baaebdf095a39363e5cc9b2f2f94af370718701e112e682e7dfb384849edf9b9b5cedf075a13b000d126b83255036b963a0ce2c00c63ab370862950481159803dc0bd470d827fd28201878a2ce2e5938673904741563d28b754b37756da0f57b9a11690353377a661087aa69f5c28186b62df4bba4829c525e304e9bfea26bcff1ed95ef2ddde9c4b7651931861e9e36e6ea225efb14502480dea96b5b472903a5fab01cd7b7bdc9d477aeec663e6624c1e166f1001312e3941340e312674490f29c45d03474315f38be3377273360c843bfd821381afd7cda13fc4d21bb2ce41b2d7ccf71cfa4811de20aa795843c361f0817e0156db7adffa79978dee406a47159e2cd9b189463f46bfa3f24245eae1a9b3bc9baf3fb958eb6bfb6f0b410dca7263bba5cdade0d6ab63c129392e4e1c7e3036019f8f0b7b0bba380855b0a325cc01a8635e4b548589266686926ed366ccdb2ac818924b8146f6343b5dfdf9d4e9da3ce4832928be78a9a3b2a1b55872afe028220cc9a2b0f6afb07c444a09923050000",
    ],
    [
      "ETag",
      "yTi1+f2MpX3QOhdWEVpdDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "414fc2401085ffcb78b44d6a833534e1004890041ba97230c690653bd496b6b3ec4e6348c37f775a3978f4b43b6fbe79fb663b38164d0631ec8bfcd4a23ddfe4c89bfe92a26b2b7672186a1c8207c82a17725a26f3f9fb33dfde6f4fc751edf4d2448f9bc94408a7bfb05610777028b0ca1cc41f1d34aa4619dbedece028189f4dafac92b7c572918a5053d60bc976bd9eced60bb8787fc6ccf15f239f170f4adaa778408b8dc63e85b154a2e655bfa053b5a9d077d45a8d0e067868e4965aa32c912f8a3f0efcbb280c1ea251308ec23012b022adb8a046d8edab64032656554adfb21f0470ad676746f76249cc1d66d78e38cea97f97250fdb163dd04a3ee9a9e0dffaf203a1d1f7f681010000",
    ],
    [
      "ETag",
      "AjNCCYMt+5Uqk4mscGp6DQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:29 GMT",
      "Server",
      "ESF",
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
      "d0",
      "c9",
      "72",
      "82",
      "30",
      "00",
      "80",
      "e1",
      "77c9591c642bf4e6060c050591f5922131b20a3480063b7df732bdff97efff0119c66418e0d8d5a4059f60ce046d8dd75fbdba83f95d294cab31ee9dc03e9aefea8c4a3d95d4c336321a27b9be87983c9e45121617c9b8ede7f4784c4f754ca651682cab974a25d5d480973b2ff46dec84e2a1123755d0417e1f151b37506081f49bcf5c88a600474b973914b586efda31a5e75e8a4c3551f2997a468a0833b9896c5915b164c4b3ee9471eb3c9b5a91a49e9de4294755c779bc9b77d3a5881fa187dfb659ef84da7778ee9871a80e5ed635012b40585f5232c072e18ab2a6adc0bf1d8e734f96013b925142c1ef1fad804f401a010000",
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
      "Tue, 11 May 2021 20:16:29 GMT",
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
      jobId: "grouparoo-job-91-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2bc8fbd82681bc0891a2354ae99a29211b21ada66942c65ca85b822936e9a22aff7d17d364ed26b59fb07dcfb9e7dc07cfe481e731199388a78f1594fb4ff72222e704144df1d59e0653d729ce1cb53f5b26feef3e5d7dbd7a9a4c10c16b96a4db2283961455c9408e37eb765a8aaaa0a5102d4cd472ac9635ec9af6b06f3ac36e77883c0959b2e0f903b2ef942ae4b8d3396ab75321d20c68c1659b89ede9bdb3eb768a52dc0353b2f356b2832ab2f3bee8e74c30aab8c8279b351aa82494216c29cfd0c25f661c5dbc4ddde674db4e11bce30c2863a2ca556d0b533091273cad4a9d958c9f89b6f9ea40d6eec29d05061359b5cdc39c6ee1dc88a9a2a1da17605cf9aba531f7ae56fe721acc575eb89e5dbbcb697bb65a6c96dedab8bd767dd75034ca40738d8971a16f1e5e503f06a978aed583fab9567e69d0fcffb1d4049496d00443db1c526b643a5112d92c19f506516242148d227b407b91c99c3ef4e30828f2b4a866d15ce483419c44bd110b59622561df1a3a218dec38ec75bb903866dfeadb037238274f255770c96521246f3a446efd79e08681bff166d3c0d52524b4cad46563ac2ee0b547850522e89d9a0e75940b54aadb3df702d79fce82f98ddb4c78012965fbf523ce38a1990444d3129ba7a05c8a181b46bce9d2bd44b09ed8b7635092f1cf6752f7bc76f1aae5277a8003aced2afd25ebc09f7b5fb49d23e286669586ec9a0329d0f21dd686ae0fbf10894bda6421df37aeff83344f3e245042ce3e9e268275e0c37fedb8f888c5d54719a9f08ebbc3642dc24a687688eb725fd8d6c8195a3da2c1a5fa27e698a68e9d16bece085bc8d54b45cde263a18d58254f200ce2f83dddadc31ffd9853de78040000",
    ],
    [
      "ETag",
      "7ATAE9p+9ty+MfRx4aOJFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92414fc2401085ffcb78b44da0c1024d381405250144281e34842cedb414daddb2bbd510c27f77b6221a35d14b3b33fd66fbde6b0fb04d79041eacd26457a2dc5f24a81f4c314555665ad1ad105c2158809a25443e6e67dba77e8ba77576b9e3ce3ce8ae1b93d74e870815ae3167e01d204e318b1478cf07e02c475a0b4556e67c597516e87d6186b3603a18df529f8bc8f4e3f970e877873d385ae7c58869b6acf87fac2d8e166cc46a8a314ae4211a2d85141b0cf5c0d8542c2f32b4952865880a2ab87a904851164c0a61d3c46ed7edbaebd49a6ea3d6761dc725301321d3a9e0c4ce67a40fb4d02c9b8a5772090690554986e3eafa42e334aa8c9872300edc46a5ef2b40d2e234c3e5df20e95d33fa0c1fd82982ef1ccb45c9f599ea0feffddf8ea34c3f8fbaf183de0f42694aea8c0483516f16f8a389e11627efddbd4635918282546832acd71aadaba65b7b8ff55a98a8e93d9e96255a1032fa3bee520d5ecc3285c73703cbd1d07b020000",
    ],
    [
      "ETag",
      "VkSkZF8ni1a+qn2UTBh4Pw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:30 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6f9b3010fd2ac8fba795924020213fa4a84b13d621a52425a455374d893186ba2138b54da7a8ca77df014ddbac5b2b21817defdd7b773ef384d62c8b501f852c79c8a9d87db9e721aa21aa7002bbfaa43dfb711e8b8bab7132bb6a59ebec7a4c8683012058c19278b34d695df25c102afb8b7923113cdf62c1791d12d57b66bd699b46c76e193ddb346de0499ac61396ad817da7d456f675fda0dd48384f528ab74c3608dfbceceb8fa6be15fc9e1225f563491d54a4feb1e859ca09568c6783c51c0ce4928a25dd609682855766147e3d4edd6078d34800fcc808c584f03c53852d48417816b324176556d47f42a5cd371f68ee4c9c51a08da60b2f3859e14d415e9d6a586acba5a0324f554d5b414d314be99245ab2ab25d6bdffce92544c0c11d9654aeb49bef8eef68da2ac28aaeb48176a60dbdb1764c763d6de179ce3cd04ece4eb50b7fba9869e7b74718701d51a958567a0e7098d2c2ef735bddf7875910b0020f5570d9316cdcec1abd300e3b24ee5aed3036681876c34e1b5ba1417a2dda8a428a81a78aec250b673ceb3663cb0a6d8bd0ae6511dba25dbb4748bb1376a2c8c44dabd58a5b71bb17a17d0dfd164cd131935b2e59d55b74e3bb81b30cfc85371a064e59468ca17fe3ca5c51c45b9f0a8a04d00775ed8b28e3a0541c94eb058e3f1c05eeb553cdc6842698ece60f301d314e2505341678431515973c82a6a1d974ee06eed41b4e80511ef8ec8090a8fff3e99510ecb6659755f946e3a280fd9b84d738cd4bc063f5814cc334ea06cc6f1bedf7b5ff671afafef016d4b11078f7570c2ab25b05fd1f3a25be5c554e0fba4d54a8bdb840fb5f7b786a08ae53951d5d2d1cff16555b3e8da9a019f97c82005c063efd2b1cae2860e192828c54b0867925b21021825673cb36a5dd8addec19b665a1122cd4bb58c7ee1e0ea8c85164a41b9aa9e78aaa2b5a36aa08e5f20504411837cff52e20fa07989a35fa22050000",
    ],
    [
      "ETag",
      "/L5PZBfrGQDgPQ43knVDcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4b",
      "c3",
      "30",
      "14c5bfcbf5b5c5ad4875833d38295a2c43eb0a828c9175b7b57f6f4cd28d52faddbde9f6e0a32fcdcde9ef24e76480aa688fb0844391ff74a8fa9b1ccdbb1d62d45d6d342f925a8de0001a913329f055dece4f8bf02149d6fad3abb625c5e7d58a099d7e632360394056607dd4b0fc1aa0150db26dbf57d3898c995e5a25dc6c83e72066a1a1a3153649143daea30046e78f4d56ffb2ec46074a3ac498a1c236459b422a2a3135a12da845236b7435752a450d133cfdc81575522822971577e1b973df9bddfb77b385ef793e8335a5c214d4329b7c70363064441dd399fbc19c01358d5c359bbea749b61daed36edc5d4debdea07e53c40934dacb6797204f64c3190e6d54870ea4825ff2a53097fdf80b7e17248ba6010000",
    ],
    [
      "ETag",
      "aeKp/1v9I8UUBsX2kTjoRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:31 GMT",
      "Server",
      "ESF",
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
      "000002ff1dd0c95283300000d07fc9b9e9208b0dde58266513a805042e0ca4115022c82210c77fb7e327bcf7034a42e8341573ff413fc113d84b513d92a33b20bda86fb27ccd58a5ec11ac97d085eb3677ee69149e61aaf64e08e5d3865cdee61d9dedab7191de781f1178fe4604ce56522d8805554a92baaf30f5495aad417b335dac8fb18505b1fb3a4b51a6250d7664070f8cc39ae2dc4b3791e5d965b1ecc820fa90b3a8b1f700cd8922144d16cbb1d9bd7a8ebf696aff12971c87cc6c19ab2551f390f72eb96ba779e123eaf47229b1da5cf883e16311c585df781c1c00dd8676a453d1deb992a2aa07f06f2fe67da0f7009d96231dc1ef1fba6125c31a010000",
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
      "Tue, 11 May 2021 20:16:31 GMT",
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
      jobId: "grouparoo-job-93-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2bc87b6d1242121222456b94923552423620adb66942c65ca85b8229369dd22aff7d17d374ad2ab54fd8bee7dc73ee074fe48e170999929867f73554872fb72226670414cdf0f5d763113c8258d6bb43394a1ecd5d61b165369b2182372c49f7650e1d29ea8a819cee826e5689baa495101d4cd471069dbe6d99637b683ab665d9c89390a76b5edc21fb46a9524e7bbd9376371322cb81965c7699d8bfbcf71eac5e59895b604af6de4af65045f63e16fd9a0b461517c56c17a0815a4215c19ef21c2dfc6726f1f9dbd45d4ef7dd0cc10f9c01654cd4856a6c610a268a946775a5b392e913d1365f1d48e0aedd45683091d7fb222ae81ece8c842a1aa94309c6d2df6e8c95b7dcfa9b79b8da7a51b0b87437f3ee62bbde6dbcc0b8be747dd75034ce41738d9971ae6f1e5e503f01a978a1d5c3e6b9517e6ed0eafd581a024a4b6883d1d8b4697f623a711a8f593a198ce2d484389ec4e3111dc4267386304c62a0c8d3a29a450bacd9b2e2344dcc2831138886a36410d12449a2a46fa513ea60b3539b1ccfc8df8a2bb8e0b21492b71d22d7fe2a74a3d0df798b79e8ea12525ae7eaa235d614f0daa3c20211f4414dc726ca052a35ed5e79a1ebcf17e1eaca6d27bc868cb243708f334e692e01d1b4c2e629a83622c186116fbe712f10ac27f6fd149464fafb89343d6f5cbc6af90b3dc401367695fe9220f457de376de784b8a279ad210fed819468f9066b43d7c73f88c4256db3901f3bd7ff49da271f52a8a0609f4f13c13af0e9bf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b9cfecbed31f3803a2c1957a17b3edfea96b4d8e2623eca150cf15b58b8f85b662b57c016110c7efe96e1dff01f6d35a5578040000",
    ],
    [
      "ETag",
      "ZznSzeoFuUyp5dz0Un2cFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92d153824010c6ff97ed1566900c93191fb42c69d00af1a9719c13164481c3bba3721cfff7f6c8aca966ea057697df1edff7c11e365919830bcb2cddd628766729aa475d0428eb5c49ba55bc940806a062299123899bd5d616e80d037b7cf76a09598cd35e8f0819adb060e0ee21c9308f25b84f7b285981b416f1bc2eca45d319a076951e4ec3c09bdc525ff058f79399eff707fe100ec66931668a2d1afe1f6bf383016bbe0c30418165845a4b25f81a23e5699b9215558ea6e4b588504203370f52c1eb8a09ce4d9a98dd73b3e5d856c7695b5dc7b61d02731e3195f192d8d994f481e28ae5017f2197a001d194643869aecf34cee2c6882ebd49e8b41b7d5f01929664392efe0649ef8ad167f8c08e117ce758c1eb529da81bffbeffdb7194e9e751d7fd70f883908a923a21a1371e4ec3fef84173f3a3f7c14ea17c109c8294a8336c59edcb8b8e63bdc77ac575d4f41e57891a0d8818fd1da34c819bb05ce2e10d3642fce87b020000",
    ],
    [
      "ETag",
      "Hsekhq2reIER2MJx0rsmMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:32 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554fd739a4010fd5798eb2fc98c1f80881f334e6a139a32553488496da7a3072ee612e0943b6c9d8cff7b1788496cda648619f0de7bbb6ff7767d20f72c59922ef1d96a9341bafb70c77d522120e90a4fbfce7e9bdfbcdb0d30166d06a14547db29bfeaf590c17295a0f13a82aae0591a80e84e27b555cab3354d39af62a06ac7a86aa6aeb64c43ed98ba6ea24e40140e58728fea5b29d7a25baf1f72d7569caf22a06b266a018f9fceeb5bbdbe4ef91d0452d48f53d6318ba8bf9df42ce201958c27bde9040d6402d239c4944568e159b9f43f1e87ae311ad75648deb2006810f02c91b92d0c11f02464ab2c2da292ee03296cbef820136b609d7bcaf968ea78270b1ae7e2c5a94285329fa720b248569405d614b208e66cb92891f5bdf2d91d0d114107b754805828375f2cd752948590e86ea1f49433a5ef5c28c76adb51a68e634d3ce5e4ec54b97447d3b1f26976c441db4b10922585698ffa11e4861ffb6abfbecd5c40259a28c1794b35a9d6563b7ee8b782b0dd68faa10abedff65b4ddaf0d5a06380b1f481a24ee6d10b154d78d20a5a6d505b4dd334c087505f1ab4a981aa35c3861f344c4d6f43d868d325d957c8af9449b86062cd052b9b4b6e5cdbb3e69e3b75cefb9e559411526ce045692e2fe2a54f894522e98dbaf639ca3866ca6fca763ccbed9f7bf6b5550ec7005634d84d36381e218d04209ba6340609e9902fb169643c9ad89e3d72fa035414373e3e3004e9fe78781678bb75d16559bc89670ff18efac371e1e140baa65156b0b6e507d1555dadaa7a556b7a9aded51a5dcda8a9aafa9decf795ff07efbb6e7f8686689ad2dd5f1816691ab9fc1f590b7ef1ab347f70a1913cdb9327b2ffb9c7a74270c5cae8e46a6ab933521eb910420a49f0fe5021b900defda738ac2d727171310dae806438c281c893042994a3cce2c26ea9d63a7a436b91829cca5798d1d40f7796c7c823420c897caca85cdba25139948927128238818eed5c22fa07b75ea7dc36050000",
    ],
    [
      "ETag",
      "KYx6XThqeiilqLfEaOvUoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085ffcbf49a808aa455f0a045ac2052d34aa94564938ce9ea2693ee4e5a82e4bf77367ae8b197ececcbf776dfdb0b9c7599c118129d7fd5689bbb1c79e387185d6dd8c95251e910024056b99066d3648e1ff4e28df426a162a733f33e9d4c8470e927160ac617386a349983f1c7054a55a0d80e07db9d281837955796ebd7f9621e8b5050e685f576b59ace567368833fb6eafc2fcbbe0de044498c47b458a6e85354964e98f2d21774aaa80c868e6a9ba2830eee7ee496ea4a59a2509470340cfbd1a0771f0d7ba36830880434942ad6540abb7d916cc0c4cac4f423fda02f80ed46a97aecbedf9dec3bdca67dbbbf99660da37bb624091cfacb7bd7208fe4c3b184665b6300a992977cd27cddb7bf20e38795a6010000",
    ],
    [
      "ETag",
      "lQydst8iGWoiQbomZidlYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:32 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb642d0e42a9d09dfc11ab2896df26032160aa92f031029ddebd4e8ff0de0fc811c27d0f077ac50df800532e694bb4f499aac31a257bda06f4803899dcf83b7c0601339f7cfe62a2e68c3872e0fd3c8497d1d7d45573690798c596b776fb3e9967a208959ab905ddc5e549209be8e6b31c6b841c46b531e8fbc331b24e5643bb60450ab7d93d4f132f1a26fa108ed7102948a095df4ec4eeaedc65e9acbe05dbba281b7e33695125b6ee645cd71b6e9c03af4e2d22ad4704652f96da153fc93b69b2accde7a01b3b2245e5bcda9b47d1172bb0007864a4c33d242faeac68da02fcdbe13031fc0ad071dee10efcfe017e793af31a010000",
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
      "Tue, 11 May 2021 20:16:32 GMT",
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
      jobId: "grouparoo-job-95-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbb82610f22452b546295d9112b20269b54d13b28da1ee08a6d8a4aaaafcf75d9ba66b37a9fd84ed7bce3de73e7842bf7995a13922bcb86f59f3f8e94e10748298c205bc86ee5acd2ebd1f0ff63ebefb8cedab3a20abe2f414105cb324ded525eb49d13694c9f936ee178d686bdc08d183443d6fdc1b4c5c673a1939dec47527c093accc57bcfa0dec5ba56a39b7eda376bf10a22819aeb9ec53b17b79b7f7ae5d37e28e5125edb79236a848fb7dd12fa5a05871519d6e6330d04ad6a46c87790916fe323372f636759fe35dbf00f09e538629156da5b42d48414595f3a26d4c56347f42c6e6ab038afd95bf4c2c2aca7657a515deb1132bc30aa7eab166d645b4595b4178b189d68b24d88469bcbcf4d78bfe72b3daaec3d8bab9f423df529894cc70ad53ebccdc42b8807ec6a4e295514ff4b3567e6e50f0ff583401a425eb82e9d499e0c1ccf1484ea6349f0dc72477182133321de32171a83762a38c300c3c236a58b812d598382e198c67e924cb9c7444f22cc553324c099dbaaec7bccc194fd0e1043d345cb1732e6b2179d721741305899f26d1365c2e12df9490e3b654e79d315dc06b8f0a0a04d03b351d74940b50d2ed0ec2c48f16cb24b8f6bb09af5881e9637c0f33ce712919a07103cd53ac598b8ce9d55eacfd73009b897d3b06259aff7c42bae7dac5ab96bfd01318a0b6abcc17c54914845f8d9d23e21a97ad81ecbb03aac1f22dd406ae0fbf00094bda6541575b3ffa8ebaa788e5ac6115fd789a0036810fffb5e3e20316561f64a4823bec0e955a8436acdb216eca7d660f3cd71b79c8801bf56f6ce84cdd63d7740e9d91ed58a59e2bea161f0aedc45af90282208c3f34dd3afc01ef9e9c7978040000",
    ],
    [
      "ETag",
      "N2Mt8H9Zw/vSj+a/QpIbLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd6e82401085df657a8b091ac54ad20bacb692e01fe24d1b635618100b2cee2e6dacf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c2535a4460c3264df6158ac355826aae0b1f65952949b7921712c100542c21723a1f260ff1de7f4567b4e95bb1b7c0e6607e7343840cb79833b08f10a7984512ecc723142c475a0b7956e5c5baee0c5087520f1781ef4eeea9cf79a4fbc9d2f39cbe37849371598c9862eb9affc7daea64c08e6f7c8c516011a2d6520abec350b9daa66479996143f24a8428a186eb0789e055c904e70d9a347a9d46d36a995dab6df6ac56cb2230e32153292f885d2e481f28ae58e6f31772091a10754986e3fafa4ce334aa8de8d29d0456bbd6f7152069719ae1fa6f90f46e197d860fec1cc1778ee5bc2ad485baf3a6ce6fc751a69f470d9c60f883908a92ba20813b1e2e02673cd3dceaecbd7f5028678253901275864db37ddde95ae67bacb75c474defb195a8d08090d1df314a15d831cb249ede0045d337347b020000",
    ],
    [
      "ETag",
      "OQEgZfqRzeAHbB6fLSe1DQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:34 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85547f6f9b3010fd2ac8fba795f20312202152d4d194b699529211b2aa9aa6c41843dd129c62d329aaf2dd7798a66dd6ad9590c0bef7eebd3b9f7942f72c8fd100452c7d2869b1fd72c723d44054e21476fd598289e5dccddcd3cb7b42bb59f92d99a4c3212058c51278bdc96853f0b220540c16f3565af072830bce9b90a8e9d84dc3eee83ddbd41dbbd3b1812768964c587e0fec5b293762d06eefb55b29e76946f1868916e1eb97fdf663a7bd29f81d2552b40f25dba022da1f8b9e649c60c9783e5cccc1402968b1a46bcc32b0f0ca8ca3af87a95b0caf5b29801f19a198105ee6b2b2052908cf13969685ca8a064f48d97cf381e6dec41b85da68baf0c3a3155e57e4d5b18685b65c165494996c682ba82961195db278554736f7da7930bd820838b8c5828a95767de9059ea6ed736843ed4473fd33ed903ef6b585ef7bf3503b3a39d62e82e962a69dde1c60c0774c8564b9721de228a395e3e7c68edf1f6745c0125cd4c1654fb7b1d1d79d28897a24e977ad28d16914f5a39e85bb914e1c939a714431f064955db170cef37ed774b0d5b188651896113bba4e0c33b271b7db33adb893f4a8438dc8eaa35d03fd2e98a4674c6cb8607577d175300ebd65182cfc911b7aaa8c044307cf6a7355116f7d4a2812401fd4b5aba28c83527554633ff40277148e7f78f5744c688ac976fe00f391e04c5040e302afa9a4c5158fa16968369d8fc3f1d47727c050473edb23041afc7c7a2584db8deab2546f743e99baa16d2a077bc80f9c950af3587f20a3650162d7f87f1a3708dc1b90c64581b77fc5a01c5bd1ffa1a0f06a55db7c514495da7ed541bb5f3b781a086e539d1d7d5f78c10daab7029ad082e6e4f3f101b00a7cfa53d8df50c0c21d051921610dc34a4425420a5a0f2d5b2bbb35db704c5337910217f25dccd2fbfbd3a9725419e99ae6f2b9a2fa86aa4655a152bc802008b3e68ffd0b88fe01c29b482421050000",
    ],
    [
      "ETag",
      "NPfac59jPABHkce3luJfLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d50c16ac24010fd97e9b1099850520c78d0d65641a44d150f22b22693349a64b6bb9bb641f2ef9d5d4bf1d8cbcecc7b6f86f7f60ca7b2c9208643597cb4a8ba9b02cdab6d12d46d653417498d46f0008d2858f9bd7aba9d3f6e6625cf914c7231a937723c1ab142a7ef580b88cf909758651ae2ed191a5123afedf7ca5d6499e9a445e6cbd5f4799a3050536681e57ab1184f1653e8bdab3579fad7caaef7e04887047354d8a4685d4845474ccddc06d4a29615fa9a5a95a206277644a1a8954211f98cf8c3c80fa270701fdd0d865118462cac2815a6a486b5eb37f606868ca812fae27c10b240b996a3e6eefd74b0cd60bbc059bbe6823f2eb4dceef7e0a433a85f14b13b8dd6d8e062f281ac71c3818c6ad18354f02fcf4a7399fb1fe1229f3ac2010000",
    ],
    [
      "ETag",
      "xTF+IDWHieta6pRfaBmWpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:34 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "72",
      "82",
      "300000d0bb64ad0e08087427108ba54168c45a360c42b0088440f8443bbd7b9d1ee1bd1f906619e13c19da8a50f002eee9da5c652b8f1956722ddad1dec2ee60d804159ef31937959e874ad41fa2abead52e7237e4b196e2ba375c93d6fa5c3858a91ba74d593fbd425cb2191edf2d7fed4cd907ecfcd338b65b6940b1cc82066d3a918b4a04fcc86f5cb2f15917973d0bf91e5a190a1aba0c6d67e4ba8165f9b14397ea6bd0eb021acb9ddc05b809a819352395d52981f05a59423d13af3cd2bdfa38bcc53841f8a42937a1f873eaeada3754d352a33958002258d9139e944faea299e602fcdb93e1cec833c022694f7af0fb076eaa74ff1a010000",
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
      "Tue, 11 May 2021 20:16:34 GMT",
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
      jobId: "grouparoo-job-97-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6fda3014fd2b91f75a20d0841024b4229aae68247421b49aa629b28d93ba0d71881d5055f1df77ed94aedda4f629b6ef39f79cfb9167f4c8cb0d1a23c2f35dc3eaa72f0f82a033c414cee1d5e6a3e1cdf71d5fec0e53cfa3f6ed3eacbcc3640208ae59126fab8275a4686acae478bdeae6b5682a5c0bd181441ddfebf48703db1b3ab63f1c0c86c093acc816bc7c04f6bd52951cf77a27ed6e2e445e305c71d9a562fbfadedb0f7a552d1e1855b2f75eb2072ab2f7b1e8d74250acb82827eb15186824ab53b6c5bc000b7f991b72f13e7597e36d3707f09e538629154da9b42d48414599f1bca94d56347e46c6e69b035a058b6096585414cdb64c4bbc6567d6062b9caaa78a5957f132b4e6d1d5320ea7c97c19a5abd975104ebbb3e5621d462bebee3a88034b615230c3b526d685b9457001fd0d938a97463dd1cf5af9a541f3ffc7a209202d591b4c3d7b88fb23db2719f168363a774966334246c473f139b1a9ef30674318069e11352c5c8a928e9c81c6a5c4a17eeaf8de26f56d4ad2be3dc27dd7717d97b8e878860e3557ec92cb4a48de7608ddc5f3244893781dcda649604ac87053a8cbd6982ee0ad47050502e8839a8e3aca0528e976cfa32488a7b3647e1bb4135eb01cd3a7d50e669ce1423240e31a9aa7581d8a0d340c45d330b804b099d8cd2928d1f8d733d23dd72edeb4fc959ec000b55d65be6895c4f3e89bb17342dce2a231907d7b401558be87dac0f5f137206149db2ce8c73a887fa2f6296619ab59493f9f26804de0d37fedb4f88085d50719a9e00ebb43a516a1356b77889b725fd87ddff1dd0132e05afd1b73fb76ffd4359d4367645b56aa978adac587425bb146be822008e38f4cb78e7f0002cc767878040000",
    ],
    [
      "ETag",
      "0i86PKqiLqwA77c0VvMp7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85ffcbf41512351695c407b55649d07ac1171b635618140b2ceea5c618ff7b67a9b54ddba47d8199e19be59c03677849f2085cd824db834671badba29a9a628652a74ad2ade0b944b00015db12398cbb614f1681f26b87a6d35c2ef5c09f1edb6d2264b8c38c817b8638c13492e03e9f216719d25ac8539de5ebb2b3409d0a339c07336f3ca03ee391e9c70bdfef74fd3e5cacdb62c4145b97fc3fd656170bf67c33c31805e6211a2d85e07b0c95676c4a961529da926b11a284122e1f6c05d705139cdb34b15b0dbbead42a0da75e6939b59a4360ca43a6129e13bb98933e505cb174c68fe4120c20ca920cc7e5f595c649541a31a5370e9c7aa9ef2b40d2e224c5f5df20e9dd31fa0c1fd83582ef1ccbb8ced58d7af49f3abf1d47997e1ef5d009fa3f08a928a91b1278a3fe3ce88c26865b5dbd774f0ae544700a52a2c9b05aa937ef1b4ee53dd61e3751d37b5c25345a1032fa3b8689023766a9c4cb1b5a8c73cc7b020000",
    ],
    [
      "ETag",
      "HfBcCspTtL2q868ZZuGLQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:35 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "a34010fd57c8de2f9ad496968f9626c6ab16bd26952aa51a73776997ed80abc022bb688ce9ff7e03583fee3c4d486077de9bf76676962772cbb335199290c77725148fdf6e44485a04148d71f7cace7bf1f1388bfd1fe7ac37181b905a870ffbfb88e0154bd2344f604f8ab26020878b793b2e4499d342883d4cb4e70cf6ba764fefdba6eed8bd9e8d3c094934e5d92db2af95cae5b0d3d96ab76321e20468ce659b89f465bf73dfebe485b801a664e7bd64075564e773d1834430aab8c8f6177334504a289690529ea08557e63afcfe3e759bd3b41d23f89e33a08c893253952d4cc14416f1b82ceaac64f8446a9b6f3ec8dc9dba478176345b78c1ce8aa61579b5ab51a92d9705c832512d6d8535453c81255faf9a487eab1dfbb3538ca0836b2a41aeb4cb1faeef6adaaa02fd2a75dd00ed401b7963ed3d7fe2690bcf73e781b673b0ab9df8b3c5997678f50e83c6d72015cf6adb010d13a82c3f7776f2ef795604aad046135cf6759b7607ba1346619f4503c30a231dc27010f62d6a843a734c30d72150e4a92a7bcda299c80cb0227bb0d6c350771cabcb2cc3e999a645ed08d6a6417573601bacdf37c8a6451e0aae60cc652e246fda4b2efd49e02e037fe11d8d02b72e23a2d8c27163ae2ae2ad4f854522e893ba3655940b54aace6ae205ae3f3a0a26176e331e5388297b9cdfe18044349180685ad0141414a7628d4d2367b3f92498ccbcd11419f5999f6d11920c7f3ebd1282c7bceeb2aadf95966dd6fa5bc0054dca1a71df7c90ae45369bd6ff538c7c7f7485b2b428e8e3c7e93fcc5fe3eb5563f1458f546adb558f6c7e6ff06911bc4a4d7672be70fd2bd26cf910410119fb7a74105c07befc236caf2762f182a28c54b8c64165b21261053403cbd3da6ec3ee3a9663f5490d2ed4df315b77ccedc95439aa8c9042a69e2b6aae67dda82a54ca",
      "17100671cebc897782d13f5c9de8a91e050000",
    ],
    [
      "ETag",
      "Y6p2gFDngRHQc28D3em5Bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d50cb6ec23010fc97ed3551435a8587c4a1205490102d299c2a844cb2a401271bec4d5184f8f7ae03871e7ae8c51ecfceac667c81635ea630805d9e9d6a34cd4386bc7420465b6bb67255545a040f905526caeeb8a7d3ac33e5c7371d9d9ee2b42e56cbf370280a9b7c61a16070817d8e3ab530f8bc40a90a14db766bda8d22e3a672cc6cb19abc4e62210a4a1db158cfe72fa3f904aede2f5b75fc976573f5e040bb18f768b04cd0a5a80c1d30e1992b68555169f42dd526410badb81d6486ea4a19225f18bfdff33b511874a3e7a01f856124424d89e29c4ad1ae3f241b30b1d2319da51f8422302d94aafbf6fc6e69d7e18e360eff35ebb8d9e6be70d430da774392cea20b16dc428ec9056729c4a6460f1225bf3ccdf9f6befe00f050ff7ac2010000",
    ],
    [
      "ETag",
      "7C8ldg1Ht/Ol6q3RdumTQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:36 GMT",
      "Server",
      "ESF",
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
      "0002ff1dd04b7282300000d0bb642d8e80d4a43bf1932aa80505c10d1331a108864050214eef5ea74778ef05489a522993b62a28079fa027061aa64347403bc9d826469c4a86541c400647eee1a3bf3069ad7dcd74b8f7a3b26c3d5f7a55d0fb0fb615c7ed2e3f37ab39f1fcf2845a9b2a144dd0325acbdb7dba67852e73881fb04e7753436139beb514ea4f7d7f7435eb682cda34743d91cf0a838c1d523f9dd1d55d5d7b3eab22bdb60e7b7cefbe36955d98bcc2318bbeeb5d8716e1c528a35116949dc5791274d8114ad7081a1b67339da8133a614d2de3809459282b0a068076226fa84cf237d7b4101a807f7bd2f682be036c4a1ada80df3f45fe88b11a010000",
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
      "Tue, 11 May 2021 20:16:36 GMT",
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
      jobId: "grouparoo-job-99-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ab",
      "30",
      "14fd5748df5737609b30962ccf65e273c9c67c8c69cccb0b694bc12aa38c168d31fbdfdf6d718b2f26fa89b6f79c7bcefdc11b7ae255862688f062dfb2e6f5c7a320e80c31850b782deee77b19d297c6dddf543caaee570f8ff66c3a0504d72c897775c97a52b40d6572b2ddf48b46b4356e84e841a25e10f45c6fe0f8dec809bcc1c0039e6465bee4d513b01f94aae5c4b68fdafd4288a264b8e6b24fc5eef46e3f0fecba118f8c2a69ff2f69838ab4bf16fd590a8a1517d574bb0103ad644dca769897bac013332317ffa7ee73bceb17007ee694614a455b296d0b525051e5bc681b93154dde90b1f9e18036e1329c27161565bbabd20aefd89995618553f55a33eb2a5eafac4574b58e57b364b18ed2cdfc3a5ccdfaf3f572bb8a36d6dd75188796c2a464866b4dad0b738be002fa19938a57463dd1cf5af9bd418bcf63d1049096ac0ba6bee36177ec0424273ecdc7c373923b8c9031f1cff190383418b1514618069e11352c5c896ae80cb391ef0cd2311ef9e9c80b4629760392bab99b31c28601c9c6e870865e1aaed82597b590bceb10ba8b17499826f1369acf92d09490e3b654979d315dc0478f0a0a04d017351d74940b50d2ed5e444918cfe6c9e236ec26bc6405a6af9b3dcc38c7a56480c60d344fb166253268188a66abf012c0666237c7a044933f6f48f75cbbf8d0f2133d81016abbca7cd1268917d12f63e788b8c5656b20cfdd01d560f9016a03d787bf808425edb2a0dfdb30be47dd53cc72d6b08a7e3f4d009bc0b7ffda71f1010bab0f3252c11d76874a2d421bd6ed1037e5beb3ddc0f3fc2132e0467d8a8d87feb16b3a87cec876ac52ef15758b0f857662ad3c812008e38f4cb70eff00a26ea50978040000",
    ],
    [
      "ETag",
      "gYCqsEcwr1qPniNnYMhj/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc2401085ffcb782d09905aa0890740d09a8250ca4543c8d24e4b71dbadbb5b0d21fc77672ba25113bdb433d36fb6efbdf6004f5911830b9b2c7dae50ee2f52d4735304a82aae15dd4a5128040b50b394c8e103a63dbee1dd3b7fdcb2f3bcb0d34132bfba2242455bcc19b8074832e4b102f7f10005cb91d622c1abbc58d79d057a5f9ae1220cbce90df5b9884d3f5dfa7e7fe08fe0689d1763a6d9bae6ffb1b63a5ab0139b001394584468b49452ec30d29eb1a9585e726c2851c90815d470fd2095a22a9914a2419346afd76839ed66c7b19b3da7dd7608e422623a1305b1cb05e9032d34e381782597600059976438a9af2f34cee2da8829bd69e8d8b5beaf00494b328eebbf41d2bb65f4193eb05304df39968baad0676aecdff77f3b8e32fd3ceaba1f8e7e104a53526724f426a345d89fcc0cb73a791fec35aa991414a4429361ab69772f3b4ef33dd6a13051d37b5c2d2bb42062f477dc661adc847185c737908146847b020000",
    ],
    [
      "ETag",
      "CZeg9lbl8JLF14mmn4gBfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:37 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3010fd2ac8fba7d59200f90149a4aacb5ab6a1a62405d22adaa6c480a16e01536c324555befb0ed3b4cdbaad1212d8f7debd77e7338fe89ee6111aa380260f1529b71fee58805a88089cc0aee958cb8d36f0aee6822dd50bd6bfb8f838ba3a390104ad591c67454ada9c556548f878e175929255052e196b43a2b6ae696ddde86aa6d1d74646b76b009193349ed2fc1ee8b742147cacaa7bf14ec25892125c50de0959f6bcaf6eba6a51b23b120aae1e6aaa20c3d577544f53166241597eb2f0c041c549b92219a6297878a146c1a7c3dc1d8ab34e02e00d0d090e4356e5a2f605294296c734a94a99158d1f91f4f9ea0379d6d43af395b3d9c2f18fd638abc9eb63057365b52a09af52d152d650544c53b2a2d1ba8914f7ca177776091170708b39e16be5e69be55acacbd65af951695a8f28a7cac439570eb3d88eb2701ccbf395a3d363e5ab3b5bcc95cfcb030cd88f08173497e67d1ca4a436fed460fbedb9d6042c40b909ae4ccdc0fa501b05716086f1b03708628d04c1303007b81768e1a84ffa514030f0449d5db270ce72136b861e75c1bb1ef58816e87d0c8d1d9aa3381cf4b56114197a6c1a461fed5ae857490539a7bc609c364d4637aeed5b2bdf5d386713df9265c4181a79de98ab8b78ed53409100fa4f5dbb3a4a1928d527663bbee54ece7cfbda6a86644a121c6ebd07189318a79c001a9738238294972c82a6a1f9ccb37d7be64ca6c090273fdf23381a7f7f7c21f8db427659c837f27cd776be4a037bc4354e2b09d9341f68528057b4dbb5fe9d66e2ba932548e3b2c4db3f62504eddc9bf4a48bc5c3536f7923aaad5f6ab2edafddcc1d34270ab9aece86a61b94bd46cb9242625c9c3f7c707c032f0fedf617f53010c771574b880354c6bc86b95b024cdd4d24cfa6dd8fac8ec1b4324c1a57813337ac6fe78ea1c754692915c3c95d4dc54d9a93a",
      "54f167100461d81c7952bbdfe6a2d4422b050000",
    ],
    [
      "ETag",
      "7NEYv05SQPtoY/Ko4KK+9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "fd",
      "2f",
      "77",
      "8f6b591ba4a2e0838eb2c944b49b2f1b22b1bd66d5b6b74bd28988ff7d37710c1ff792dc9c8fcb3939c3a16c0a18c2b6545f1dead39d42bb744386a6abace1aba5c6200480562a56564a9977152fdb45fffe28a693e2e5a11b8c47235698fc136b09c333ec4aac0a03c38f3334b246b66d36da6f64993db50e99cedfd2a73463a0a6c201f3d56c369ecc52b80437b6f6f02fcbfa12c09eb619ee506393a34bd16ada636ea7aea091755b6168a8d3391af0624f284d5d2b3551c848184751182722ea27bd68900891b0b2a25cda921a16af5e391c58b2b2cae8c80541b040fb91bbeefcf9cd70cf977053ecb3dd72e28f138e5bff2e9c9c2c9a85268e67d0258bae291fc925b7dcc8ea0e03c8257ff37369afefcb0f6ba1dc61c3010000",
    ],
    [
      "ETag",
      "lggsZg1QpP7+w2IBdK/u9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:38 GMT",
      "Server",
      "ESF",
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
      "0002ff1dd04b7282300000d0bb64ad8e05334a77444b55840808453799408260828d84964fa777afd323bcf703689e73ad49fb29f81dbc82811ad62c9fb96a85c8b5486ad436977538a6f9c140d129d2d95bda5653a6f0c919eff6f6fb06b95d463e692d0392717d58dae9a61718aa78b17fc97d1c9a3b8de1870e44a7867575fcf2374d263daf368bc13c3fb2007bd059adea0ef1452fe38191ade1c0f13ad7759488409cd9d1f5a5222e74e2102ff13db9c18094fe3c89ca91e85250f4b0a8daa9f0dda3cc3642c3928bc3834e637dbc5e7a8f7625934d61b62e62727f0613c07b55355c93eac935a1654dc0bf9db483e2cf00c469c31bf0fb072dc444581a010000",
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
      "Tue, 11 May 2021 20:16:38 GMT",
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
      jobId: "grouparoo-job-101-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc87b6d1242684222456b96d215a9212b21adaa6942c65ca85b82996d3a4555fefb2ea6e95a555a9fb07dcfb9e7dc0f9ec923af323223292f7e3720f75f1e444a4e08685ae06b194e97dfec87f4c29791746e82cbbbbdbabd9ecf11c15b96a2bbba849e128d64a066db4dbf90a2a9a914a287897a437bd81b8e1d7b3276ede9d871c6485450e657bc7a44fabdd6b59a0d0647f17e21445102adb9ea33b17b7d1f3c39835a8a07605a0dde6b0e50460d3e51fd5a0a463517d57cbb41078d0299c08ef2123dfca366e9d9fbdc7d4e77fd02c14f9c01654c34956e7d610a26aa9c178d3459c9ec99189f6f0e64e35ff9cbd862a26c765552d11d9c5819d534d1fb1aac8b68bdb282f0621dad1671b00e93cdf2d25f2dfacbf5d576156eacdb4b3ff22d4dd3120cd79a5b67e616e205f533509a57463d6e9f5be5970e051f07d312505a41174c26f6980e3d7b9ae6e984e5dee834cd6d48532f9d9cd2516ab3a90b6e9602459e11352c5a89caa34366c3d04edccc85c475bd718234274947b9ebb16ce478e311399c903f926b38e7aa168a771d22b75110fb491c6dc3e522f64d09396d4a7dde196b0b78eb51638108fa4f4d8736ca052ab5ed0ec2d88f16cb38b8f1bb095f4141d97ef31b679cd35201a2a9c4e669902b9161c348b858f9e7083613fb710c2a32fbf94cda9eb72edeb4fc951ee3005bbbda7cc9268e82f0bbb17344dcd0b23190a7ee406ab47c8fb5a1ebc32f44e2967659c8f5d68fee48f714410e122af6f934116c029fff6dc7cd4730ee3eea288d775c1ea65a1526a15b226eea7d610fa79e638f88014bfd21363a9d1cdbd6e66833c20e2afd5252b7f9586927d6a857100671fea169d7e12f8c3a65c47b040000",
    ],
    [
      "ETag",
      "lN9CB0jbFErRr2VIHYysWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d925b4f83401085ffcbf84a135a5bb0243eb45a9584d65e303e18d36c61a82830742f9aa6e97f7716b51a35d1179819be59ce39b083a7bc4a218055bede1894dba335ea992de6a84ca115df6aaa148203a8c59ac9bedf73bb155d6cc667c7d2dc1a15f9c3edecf49409953c602920d8419663912a08ee76508912792da1c294d5b2e91cd0dbda0e17f13c9c5c725f526afbc94d140d86d108f6ce6131155a2c1bfe1f6bf77b071e6935c70c2556095a2db5a4474c74686d2a51d605b6141999a082066e1eac25995a48a2164f5a6db7dd6a7b1dd7f7ba6edfeb743c260b4a84cea962f866c102419316c59c5ed826584036253bce9aeb338ff3b47162cb70127bdd46e05780b5657981cbbf4116fc20f83b7c60ef197ce74449a6d207ea22ba1efc761c87fa79d4f9201efd2094e6a80e481c8e478b78309e5aeefeddfb70ab514d2571920a6d886db77bd2f33df72dd733b259f37b022d0d3a9008fe3dae720d41260a85fb57447f52a67c020000",
    ],
    [
      "ETag",
      "97504noFqMC3ruWusL7ByQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:38 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554fd6f9b3010fd5790f74babe50348423ea4aa4b5bd6454a494748ab689b129b1cd42bc1149b4c5195ff7d8769daa6fba88404f6bd77efddf9cc23b9e7e98a0c08e3f14301f9f6c34fc1488d80a231ee7af6c70d9cdd75fc66f190b1a9b82cc66c1e9f9c2082972c49d7590275298a3c0439984d1b712e8a8ce642d43151dd32edbae5d866d7699b7dc7b61d244a48a2314fef917ea7542607cde65ebc110b112740332e1ba1583fef37377633cbc54f08956c1e6a36514636df513d4d44481517e9c96c8a0e0a09f902d69427e8e185ba629f0e7337385d3762046f7808340c4591aad217a608451af1b8c87556327824dae7ab0f3275c7ee79609c4f665e70b4a4eb92bc3c36a834168b1c6491a89ab1c4a2229ec082af965524bb373efb932b8ca0833b2a412e8ddb2faeef1a2f5b4be37b619a2d304e8da177611c661979c6ccf3dc69601c9d1e1b97fe64766d9ccd0f30687f0552f1549b0f284ba034fed4e0d19fe75a12a842e52ab8e89a0eb57a669f45ac1b46bd5687452630d663dd0e6d3133ecb7a1bd624091a7caec9a4553915a6697861d8b81e5006d53e6f4ac15f45a8c42cbe9336883dd8f4cbb05645723bf72aee082cb4c485e3599dcfaa3c05d04fecc3b1f06ae2e23a2d8c88bca5c59c46b9f0a8b44d07feada95512e50a93cb19117b8fef03c18ddb8d5908c21a6e176fa806312d14402a2694ed7a020bf122b6c1ab99e4c47c168e20dc7c8d0277fbd474832f8f6f84208b699eeb2d26f320dfc9177a90dec113734293464537d109aa157b2dbd5fe9d66e8fbc3394ad33ca7db37312cc76997f4bf4868bc5e5536f7921629d5f62b9bec7eecf0a911bc555576f275e6fa73526df910410e69f8fef8205807deff3bec6f2a82f1aea28e54b8c6690d65a912e6504d2d5f6bbf15dbeaf7faad2ed1e05cbd8df54da7b73f9e32479911d690aaa792aa9baa3b55860af90cc2200e9ba74f6af71b6fe734512b050000",
    ],
    [
      "ETag",
      "N2+veBh5R/uqpbSoGuLbYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "414f83401085ffcb7814120a0623490fad526d42aa523126c6340b4c911698edee92a612fe7b07ecc1a3a7dd79f3cddb37dbc1be6c7208202d8b438bea7455a0791d2e31eab6329a0f498d46b0008d28987cf859e7e82d169e7e4e0ed7947e1cbd779a4da74ce8ec1b6b014107db12ab5c43f0d941236ae4b1cd468d8e8c99931c94e5ea2d7c0c63166aca07619544d16c1e85d05b7fc6e4fe5f235fbd053b4a63dca2c226c3218554b4c3cc2c8705b5a86585b6a65665a86184c746a1a8954211d9acd813c7b527beebdcfa37ce9defba3e931565c294d4309cac391c1832a28ae9c80b8203977a7e32a85f14b1bbc6fcd261cb7b1a1e361cc8a8162dc804ffd253697eebfe0c143afb6482010000",
    ],
    [
      "ETag",
      "DzSde3FF3sOUq+obXw3VoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:39 GMT",
      "Server",
      "ESF",
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
      "d0",
      "db",
      "72",
      "43",
      "40",
      "00",
      "00d07fd9e7c804a1f42d96ba8594a07831662d558bb554229dfe7b33fd84737e4089109ee762193b3c8057b09582ba477b972a5ad1d4a92f9e8fcd407bf3c41daacada0e2e092b2ee7b7b23244b2ad3e9356d15edbe6dad1a6d42d68f2c7b794c097a99710b38c363d2d398994a10f54987949624cbc2e309dd6fead66d2fc29e116290571b8c5249517c5d6ea0723adcce1da8b4b4227d3561af7d64274ceccafb8ce93c84197ec82c57ed573f6311482c3e018e4db220b1d83726927fa34f15398c68f20541f9d9cb16fd5a6c4e824eddd033b80efb465782eda275794547507feedc5b251fc0cd070c93003bf7faff361891a010000",
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
      "Tue, 11 May 2021 20:16:39 GMT",
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
      jobId: "grouparoo-job-103-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d6f9b3014fd2bc87b5c1348484212295aa394ac4c09590969354d1332e642dc124cb1695555f9efbb98a66b55697dc2f63de79e733f782677bc48c894c43cbbafa17afa722b62724640d10c5fc3f5be77bd5fa64bfbc6fe3a7cac53ef87995fcd6688e00d4bd2439943478aba6220a7bb6d37ab445dd24a880e26eaf42cbbd31bf52d6734b026a37e7f84440979bae2c51dd2f74a95726a9a27f16e264496032db9ec3271787d371ffa6659895b604a9aef354d9491e627aadf72c1a8e2a298edb6e8a096504570a03c470fffa8497cfe3e7797d3433743f0036740191375a11a5f98828922e5595de9ac64fa4cb4cf3707b27557ee223498c8eb431115f400674642158dd45309c632d8ac0dcf5f6e82f53cf4367eb45d5cbaeb7977b159edd6fed6b8b97403d75034ce41738d9971ae6f3e5e503f01a978a1d5c3e6b9517ee990f771300d01a525b4c1c8b146b437b626711a3b2c1ddbc338b5208ec7b133a4766cb1c90006490c14795a54b368218ac44a9c74348688a640a341cfb1a398da83c871acd46296958cec841ccfc863c5155c70590ac9db0e919bc00bdd280c76fe621ebaba8494d6b9ba688d3505bcf5a8b04004fda7a66313e502959a767b7ee806f345e85dbbed84579051f6b4bdc719a7349780685a61f314546b9160c3883f5fbb1708d613fb790a4a32fdfd4c9a9e372edeb4fc951ee2001bbb4a7fc9360c3cffbbb673425cd3bcd69087f6404ab4bcc7dad0f5f10f22714bdb2ce46ae706bf48fb14400a1514ecf3692258073effdb4e9b8f60dc7dd4910aefb83c4c362aac827689b8aef785dd9b4c86639b6870a53ec41ccb3ab5adc9d164840314eaa5a476f3b1d256ac96af200ce2fc7dddaee35f746357757b040000",
    ],
    [
      "ETag",
      "TMh1VhFfF3W3+5wufIJ/lQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff",
      "cb",
      "e9",
      "2b2c544263f30396a50dcd14b75673ee0a07c5808bf75e72cef9df3b97cc5ab5d51738e7f09ccbfbbeb08797248fc08545b2dc942876674b540fba18a32c5325e956f05c2218808a2d89ec782dbfd1db4ceeecf5e3e07c3828174f8dfab6dd2642862bcc18b87b88134c2309eef31e729621ad853c2db37c5e7506a85da1879360dc1fde529ff148f7c3a9ef7b1dbf0b07e3b41831c5e615ff8fb5d9c180355f8c31468179885a4b21f81a43d5d73625cb8a144dc94b11a2840aae1e2c052f0b2638376962d6ac865973ea56d3b1ad4ba75e77884c79c854c27382a71312088a2b968ef9966c8206445592e3b8babed238892a27baec0f03c7ae047e05485b9ca438ff1b24c12b46dfe1033b66f09d63192f7375a26efc7befb7e328d4cfa3aebda0fb83908aa23a21417fd09d04de60a4b9d9d17b67a7508e04a72425ea106b96ddba683ad67bae575c674def719528d18090d1efd14b14b8314b251ede00de6dc3c47c020000",
    ],
    [
      "ETag",
      "BA8L3HqSJ4jXM/NMubZ32w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:40 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54eb6e9b30147e15e4fd69a55c0c81dca4aacb52b621a5a423a4557751628c49dd024e6d932aaaf2ee3b40d336ebb64a91023edfed1cdb3ca23b9ec7688822beba2f98dc7eb815116a20a6c90a564532ee4dc30df62f039171f9fd7e636ea387931340f092a548b64e5953894252a686f3596b2545b12652882608354d6c37cdae857b5d1b0fba96d505a2626932e1f91dd06fb45eab61bbbd376fad8458a58cacb96a51913dafb737567b2dc52da35ab50f3ddb60a3daefb89ea68212cd457e329f41824231b96019e1296478a1c6d1c743ed1627596b05e00da78c502a8a5c97b940828a3ce1ab4256aa68f888aa9caf1ed0cc9db8e3d0184fe77e78b42459495e1e1b44198b8564aa4875c3584253094fd982c7cbbab2be333e07d373a840821ba2985a1a575fddc0358c654c345b1a3f0b8c3bcc383546fe9971a8e0f9c6dcf7dd59681c9d1e1b5f82e9fcc2f8747d8081e831539ae755f09044292b433f0dd77bbba7258168085217173ddc25661f0fa224ead1a4df71a204b328ea473d8774224c0736b3e38811e0e952bd62915ce4b66df63b66dc31ad2e717a0eed24566231738031ed75b013c7f1c031298dd1ae811e24d7ec8cabb550bc1e30ba0abcd05d84c1dc1f8f42b76a232130c4b33a5cd9c4eb9c1a9a04d07ffada95552ec0a9dc2dcf0fdd60340ebd4bb73e2013b622743bbb87239290543140134932a6993c17310c0d5d4c675ee84dfdd10418d5ae5fec110a0d7f3cbe10c2edba9ab2aefed159d9c0ee95e025498b0ab0a91f90852ddcc456d374d06ed7f8b7d2280846d7e04ea424db3f6ad051d72ee97ff1a9f0d55b9d74ef6ba2d2ed3905dafddac1af81e052d5eae8dbdc0dae51bd14b0844996d3f74f1080abc2fb1f87fd4505305c55f0511adee1c05255ba50c9ea83cbb32a6fcdb630b61d1b5560a9dfd49c4177bf43a546a9c83296eba796ea8b5a4daa2c15ea190445386fbee77f81ea6f49c33fda2a050000",
    ],
    [
      "ETag",
      "ofC7OTv0NVRomirZqv1ybw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c1",
      "6a",
      "c2",
      "40",
      "10",
      "fd",
      "97",
      "e935a13148a482872ad25a446c5aa120226b3289894966dd9d5444fcf7ce460f3df4d0cbeedb37ef0defed050e4593c21076457e6cd19c1f72e4770762b46dc5562e4d8d45f00059e5a25cec0fc7d3dbe3242d347f55e5321af497793e1a89c2267bac150c2f901558a51686eb0b34aa46b16db7a6db28323e6bc7cc169fd397692c444da92316abf9fc793c9fc2d5fb65d3877f5936570f4adac598a1c1264197421b2a31e1992b6855ad2bf42db526410b9db81be4865aad0c912f8cdf0bfa7e2f0a8341d40f9ea2308c445951a2b8a046c4ab0f09074cacaa984e52104211980e4ad7ac3bbf3bda95b8a38dc37fcd7a6eb6b92f1c9f19edd290c4b3e89205b7941372c9591ab169d18344c937bf167c7b5f7f00c87cce6fc3010000",
    ],
    [
      "ETag",
      "NhkqwJ/CdiptXljP674Pgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:40 GMT",
      "Server",
      "ESF",
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
      "d0",
      "d9",
      "72",
      "82300040d17fc9b338a8c3d637c512968cb8b52c2f0c901483802401049dfe7b997ec19d73df20cd732244d23deea4011f604ad7c6325f7aadbe4b0aecd2dab9143973e4c614fde788fc72fbac0de912296125289c7c547368e373536e75ad0a14ecb13264818d22f5f5baf5a75862944b23ce861b35f7dee0bb3fcf8df5b8d38d5a247b9b3906ff8e4897758186f060ac15bbb234b95cb54fdec3dc34b1eb5fc39356c0601ced06b273856fd40dd1d16492220b4bd86d7cb1c2d8f3e4d5a9385ebbbb9acdcd9d1fa394e147a50b0487739fa82b7c80ced7012c00195bca8948e8ccdd2886b100fff6a49b5a320fd89194130e7eff00d1fe2dfc1a010000",
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
      "Tue, 11 May 2021 20:16:40 GMT",
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
      jobId: "grouparoo-job-105-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2bc8fbb82640de8914ad694a57a4846c84b49aa6091973a14e01536c5a4555fefb2ea6e95a555a3f61fb9e73cfb90f9ec93d2f623223114f1f6aa80e5ff622226704144df175e25ea4fbfe3eb97a825d2d1d37bf38f0afe97c8e08deb024cdcb0c3a52d4150339db6dbb6925ea925642743051c7b6861d7bd4b3c6a381351df57a23244ac892152fee917ea7542967a67912efa642a419d092cb2e13f9ebbbf9d833cb4aec812969bed73451469a9fa87ecb04a38a8b62bedba2835a4215424e79861efe51e3e8fc7dee2ea7793745f0236740191375a11a5f98828922e1695de9ac64f64cb4cf3707b27556ce323098c8eabc080b9ac399115345437528c1b8f2376bc3f5ae36fe7a11b81b2fdc2eaf9df5a2bbdcac766b6f6bdc5e3bbe63281a65a0b9c6dc38d7370f2fa81f8354bcd0ea41f3dc28bf74c8fd38988680d212da6038b646d49e58d32889c62c99f487516241144da2f190f6238b4d07308823a0c8d3a29a450b5158341e8eacf1341c4da77638e80ffb6134e85ba18589faf184819d00399e91a78a2bb8e4b21492b71d22b7be1b3861e0efbce52270740909ad3375d91a6b0a78eb51618108fa4f4dc726ca052a35ed76bdc0f117cbc0bd71da09af20a5ecb07dc01927349380685a61f314546b1163c388b7583b9708d613fb710a4a32fbfd4c9a9e372edeb4fc951ee0001bbb4a7fc936f05defbbb67342dcd0acd690c7f6404ab47c87b5a1ebe31f44e296b659c8cf9de3ff22ed930f095450b0cfa789601df8fc6f3b6d3e8271f751472abce3f230d9a8b00ada25e2bade1776cfb26d7b4834b8521f62bd49efd4b6264793117228d44b49ede663a5ad582d5f4118c4f97bba5dc7bf68ca53317b04",
      "0000",
    ],
    [
      "ETag",
      "8IBgj3jfFweUusEImByi+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd6e82401085df657a8b291a8b2d8917f8d39614ad55bcb08d312b0c88024b77178d31be7b67a9b54ddba4bd8199e19be59c0307d8247908362c93f8b544b1bf88513de9628cb24c95a45bc1738960002a1613b9d9c55677b66db24dc37c789e5d2e7b66a19c769b0819ac3063601f204a300d25d82f07c85986b416f0b4ccf245d519a0f6851e4efcb13bbca33ee3a1ee8753cf733a5e1f8ec67931648a2d2afe1f6bf3a3016bbe1c638402f300b59642f03506cad53625cb8a146b9297224009155c3d88052f0b2638afd1a45637af6a75ab61b6aca67963351a1691290f984a784ef07442024171c5d231df914dd080a84a721c55d72d8d93b072a24b77e85bcd4ae05780b445498a8bbf4112bc62f41d3eb05306df3996f1325767ead67b747e3b8e42fd3caae7f8fd1f845414d519f1dd417fe23b8391e6e627ef9dbd4239129c9294a843ac9bcdebab9665bee7dae53a6b7a8fad448906048c7e8ffb44811db154e2f10db14d8dbb7c020000",
    ],
    [
      "ETag",
      "kwg6CYv4ak20KZY/bD0ptA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:42 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "69",
      "6f",
      "da",
      "40",
      "10",
      "fd",
      "2bd6f64ba270ac0d98438a524a9cd615186a4ca2f410accd1836182ff1ae8950c47fefd80e4968da46b264b3f3de9b37c7f248563c9e930ef1f9e23e8564f7e14ef8a44440b1059e7ea5ab5eba1d547b672d70aef8d9cdb2bfbc7e383f4704cf5892ad371194a5489300646732ae2c12916e5822441985ca3a35cbba69d0a659a76dd3304c244a88c23e8f57485f2ab5919d6af590bcb210621101db705909c4faf9bcba35aa9b44dc41a064f5386715d3c8ea3b592f221130c5457c3e19a3835442328535e3117a78a1cefd8fc7da15ced6950582b73c001604228d55e60b250211877c9126b92ae93c92dce7ab0f32b6fa56cfd37ac389e39dccd83a23cf4e3526b5e934019946aaa4cdb0a8904730e5f35911d9acb42b7738c0083a58320972a6dd7cb15c4bd36652a1bb99f633a5b406da85d6752eb56309dbd1268e638d3dede4e254fbec0e2723edd3ed1106bdcf412a1ee7ce3de64790b97eeaaefd76a8198129745204a74d6a32bd45db7ee83783b0556bf82105df6ff9cd06abf93468d7a13ef781214f65ea398bc5226e860db3c19a3a9de3681a50831a359bedb96e988dd06c856100619d99ed16d997c843c2155c72b91192171d2637aeed5953cf9d38bdae67e565840cbb785998cb8a78ed53619108fa4f5dfb2cca0566cac6653b9ee5767b9e7d6d151bd287050b76e37bdc9190451210cd12b60605c940ccb16964341cdb9e3d74ba7d64e4631f1d1092747e3cbe10bcdd26efb2cadfc4b30738a3ee60947b3880ae5994e6a86df1410c6ad03235ca7ac3d38d8e5eebe8f50aa5f43bd9ef4bff16efba6ef7160db12461bb3f6258a459cfe87fc99ae3f35f85f9830b9d64d99e3d91fdaf3d3e258217ad5027df26967b4b8a",
      "23174248200ede5f2a04e781f7ff300e9717c1787d310f5e04c571870399650912287699af73bf051b9b67d4db240727ea4dac418dc3d0328d4c11d610aba7928acb9b772a0ba5f21984415c41c7763e63f437008eb9223e050000",
    ],
    [
      "ETag",
      "J0kCuvM/C+8eNFi+WhLhVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d4fc24014fc2fcf6b9bb4d594d884831062491ab44534d110b294d75afaf1caee565209ffddb78583070f5e7667e7cdbcccec09caa2d94100db223f7428fb9b1c756c4082aaabb4e2aba5462158805ae4ac7c3df4cbe5fb687a4b93f2edb80ae3f8fb298cc76356a8f4136b01c109b202ab9d82e0e3048da8916d9b8d1c36b24cf7ad61e68b97d9e32c61a2a69d2116ab287a984433385bbf6c6df92fcbfa6cc19eb6096628b149d1a46825ed31d573535089baadd056d4c914150ce261904bea5a21896c666cd7f16dd7f79c917fe7dcfb9ee7b3b2a254e8821a16af961c0e3469512574e482e0b1400e90bb66c3f935d0a6c415ad0dfe6be69ad9faba70d26b54cf92389e4293ccb9a49c9249aeb991961d5a900afee6b0d097f7f90708e0fd39c3010000",
    ],
    [
      "ETag",
      "VqySSZ7C3oBkWwUHQQzOHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:42 GMT",
      "Server",
      "ESF",
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
      "d0",
      "db",
      "6e",
      "82",
      "300000d07fe9b3180474ebde28182e2aae8a4e9e9a821d5622f44204baecdf67f609e7fc005a554c6bd2770d6bc10798a803e7d57c23de11a92b78af451e5c6f867f7503d9c2fb7058b7cb5290aa5999d84b1ef6ae68bf098f42a9dd6211de0e5c4ea3c2ab7b9deea8b4acc4a0d6f4f658c447740bba7d842e7ca3849b92c28fe19a1fcf4c89d2ce2e85dfa805c5720a70fe44850861e2207c6e3f13e2537d3263f8cca2d0f503acf6a9633b62c4740b3d2b1f1f97fe6a0e963fc9e1ad7134d5038fa845087ab8f2590eb5b73ce54d8a26225394811960a3e08a69c25f5c7709e10cfcdb493f09f60a408c2aa6c0ef1fe2ff4cc61a010000",
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
      "Tue, 11 May 2021 20:16:42 GMT",
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
      jobId: "grouparoo-job-107-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da24e4d11022456b94d03653201d21ada66942c65ca81bc0149b545595ffbe8b69ba7693d64fd8bee7dc73ee8317b2e7454ca624e2e9630dd5f39707119133028aa6f87afda45c7bf82897f9dcfeb6f4f77bffeac64f673344f08625695e66d091a2ae18c8e96edb4d2b5197b412a283893a7dd3eaf4c703d31a8f4c7b3c188c9128214bd6bcd823fd5ea9524e7bbd9378371522cd80965c7699c8dfde7b8741afacc40330257b1f357b28237b9fa87ecd04a38a8b62b6dba2835a4215424e79861efe50e3e8e263ee2ea7793745f08133a08c89ba508d2f4cc14491f0b4ae7456327d21dae7bb03d93a6b6711184c64755e8405cde1cc88a9a2a17a2ec1b8f437aeb1f22e37be3b0f561b2fdc2eae1d77de5d6cd63bd7db1a77d78eef188a461968ae31332ef4cdc30beac720152fb47ad03c37caaf1d5afd3b988680d212da60689963da9f98769444164b26c3f32831218a2691754e8791c9ec118ce20828f2b4a866d1421434c67e2671128e2c1bc21142c3c8ead3d06216503c4c2c3b22c733f25471054b2e4b2179db2172e7af02270cfc9db798078e2e21a175a696adb1a680f71e151688a0ffd4746ca25ca052d3ee951738fe7c11ac6e9d76c26b48297bde3ee28c139a494034adb0790a2a57c4d830e2cd5d6789603db19b535092e9cf17d2f4bc71f1aee56ff40007d8d855fa4bb681bff2aeb49d13e29666b5861cda0329d1f23dd686ae8fbf10895bda6621df778eff83b44f3e245041c13e9f268275e0f3bfedb4f908c6dd471da9f08ecbc364a3c22a689788eb7a5fd90373608ff5bfaa68a5fe8e0dfbe3c9a96d4d",
      "8e2623e450a8d792dacdc74a5bb15abe813088f3f774bb8ebf01a6368db57b040000",
    ],
    [
      "ETag",
      "HwtM93qsDmA9JDRkkRGPRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92dd4ec2401085df65bc2db120146de205082211104bfd498c216b3b2dc5b65377b72a21bcbbb315d1a889de7467b6dfec9e73da353c2679082e3c24f1538972b517a3be348587aa4cb5e2a5a05c2158805ac44c26b7ada31b6f705e775e69bcdf3bf0f2eb9e8e8f8f9950c1023301ee1aa204d350817bb7865c64c86301a56596cfabce02bd2acce6ccf7869301f71985a69f5c8d469deea80f1b6b37180a2de615ff8fb1fb8d054b7af03042897980464b216989811e1a9b4a64458a3545a50c504105572f6249652124518d776a75bb5dab3b0dbbed34ed23a7d170984c29103aa19ce1ab190b044d5aa41ebdb04d3080ac4a761c55cf679355583931e570e23bcd4ae05780b545498af3bf4116bc10fc1d3eb06d06df39915199eb1d753abae8fc761c87fa7954afe3f77f104a73543bc41f8efb33bf339e1aee7eebbdbbd2a8a69238498526c4badd3c6cb51dfb3dd7133259f33dae96255a1008fe3dce120d6e2452859b3762037d477c020000",
    ],
    [
      "ETag",
      "iX59WRGK16xoM/D3RnVDtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:43 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85547f4fdb3010fd2a91f70f48fd91a66d9a5642ac6b03eb5452481310daa6d6769c6048e3123bb00af5bbefe250a0631b52a4c4bef7debd3b9ff384ee7816a101223cb92f58bef9742b08aa21a67002bb2ddeb9b0bb57f1ed6c1ede8fdbbf9a19fff6f5f1e80810bc6449bc5aa7ac2e4591532607e1bc91e4a258e35c883a08d55ba6536fd996d9b33b66dfb62c1b8892a5f194677740bf516a2d07cde62e7923112249195e73d9a062f5b2df7cb09aeb5cdc32aa64733f6713d2c8e607598f5341b1e2223b0ae7e0a0902c5fb015e6297878a546e4f3be7683e3552301f003a70c532a8a4c95be40828a2ce649916b55347842dae79b0f3477a7ee283046b3d00b0e9678559297870696c662913359a4aa662ca1a898a76cc1a3651559df1927feec0c22e0e0064b2697c6d557d7770d63a761fc284cb3cd8c6363e88d8d7d8d8967849ee7ce03e3e0f8d038f567e1b9f1e57a0f03e6232615cfb4f500939495b69fdb3b797faa25012bb05205173dd3c62dc7ec9398f468ecb4bb243619210ee975719b98b4df619d88300c3c55aa6b16ce44462da74dbac4618e15d93189ba26e9c5adbe45ccc871689bb28edd337bad086d6be831e78a8db95c0bc9ab16a32b7f12b88bc00fbdd1307075193186368e2b7365116f7d2a281240ffa96b5b46b9804ce5794dbcc0f587a36072e95623326509a69bf93d0c498c53c9008d73bc628ae5672282a6a1f3d97c124c66de700a0c7deee73b844483ef4faf8460b3d65d56fa8d4ea6b3616077b4831de412a785c63c541fa8d5e802625bfbb7ccd0f787d7901ae739defc1183726c4dff4b068dd7abcae64b465466dbad2cb4fdb985a786e04e55eae82274fd6b546df92c6639cbe8c7e303601df8f8dfb0bba700869b0a79a482354c2b9565169ab36a6af94afbadd896d9311d0b6970aedec52ccbdc1d4fa9512ab215cbd47349d53dd59d2a43857c01411086cd9b78a710fd0dc450876e29050000",
    ],
    [
      "ETag",
      "1i4Q65WfjOSUqD3x/niJHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c14e834010fd97f128249454d4263d5883daa46994ca45439a2d9d525a607077b021847f7796f6e0c18397ddb76fde9bbcb71d1cf36a0b13d8e4d95783babdca90df2c88d034051bb96aaa0c8203c82ab34afdc14fad5a857178735d8edba0d887de693a158549f7582a9874b0cbb1d81a987c7650a912c5b65eeb61a3c8b8ad2d335fbe87cf612444495b4b2ce3c5e261b608a1777ed9eae3bf2c49efc0813611ee506395a24d516b3a60ca735bd0a8b22ed035d4e8140d0ce26190696a6aa5895c61dc9177e78e02dfbb0dc6de7de0fb81280b4a15e75489385e493860625544749282e08b400f50baee86f37ba06d890b4a2cfe6b36b2b3e4b270d6329a574d12cfa04de69d533e924dced28875830ea44abef925e7f3bbff010c2463d7c3010000",
    ],
    [
      "ETag",
      "brZtFyaSEUE5+m4y6lhE0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:44 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb64ad0ee123a43b62a70a685a0135b06102440dc8a7a018e8f4ee757a84f77e00cb32def7c9bd29790ddec0c854b4c8165e6be1e492b174df9b1c1e6d55f1b89597084266d8df83e21c9156d7daa43b54a59bbd9e54fbc3e0bdaf3623cf0cbf25a9ee84944dd90d1fa3f83cbf7dae2be37cd6d5a51f3e641e60f774177d00052da3c46e2acdd89adba241989417b9ac57a8295cd31dd289e63b0695c378bb3ae584aa25b91245e6789a878fc2ca9f5c73636f3c61127b44168cf2e10b766467314b09820fbf11024666e7b7c282e5632d2f2698012e5bd1f13e112fae66203403fff6e43eb6fc158039eb78077eff0054423b4f1a010000",
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
      "Tue, 11 May 2021 20:16:44 GMT",
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
      jobId: "grouparoo-job-109-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbb8262184908714ad514ad768095981b49aa6091973a16e01536c5a5555fefb2ea6e95a555a3f61fb9e73cfb90f9ec91d2f13322731cfee1ba89fbedc8a989c105034c3d747615dd5e7fb342c57d58ff8c60abf5e26e3c7c50211bc65495a5439f4a4686a0672be0ffa592d9a8ad642f430516f68ce7a43c732278e6dce1ccb729028214f37bcbc43fa8d52959c0f0647f17e26449603adb8ec3351bcbe0f1eac41558b5b604a0ede6b0e50460e3e51fd960b461517e5621fa08346421d4141798e1efe5193f8f47dee3ea7453f43f003674019134da95a5f98828932e55953ebac64fe4cb4cf370712b81b77151a4ce44d5146252de0c448a8a2917aaac038f7775b63ed9deffced325cefbc28585db8db657fb5dbecb75e605c5fb8be6b281ae7a0b9c6c238d5370f2fa89f8054bcd4ea61fbdc2abf7468fd71302d01a52574c168623a74383567711a4f583a1d8de3d484389ec693311dc5269bd960273150e46951cda2a52847337b6a9b661c25ce388dec89ed4498641c39330b6ca0294dc68c1c4ec863cd159c715909c9bb0e916b7f1dba51e8efbdd532747509296d7275d6196b0b78eb51618108fa4f4d8736ca052ab5ed5e7ba1eb2f57e1facaed26bc818cb2a7e01e679cd25c02a2698dcd53506f45820d23de72eb9e21584fece73128c9fcf733697bdeba78d3f2577a88036ced2afd2541e8afbdefdace117145f346431eba03a9d0f20dd686ae0f7f10895bda6521977bd7ff45ba271f52a8a1649f4f13c13af0f9df76dc7c04e3eea38e5478c7e561b2556135744bc475bd2f6ccbb427c311d1e05a7d88cdece1b16d6d8e36231450aa9792bacdc74a3bb146be823088f3f774bb0e7f019d769f687b040000",
    ],
    [
      "ETag",
      "wo2VrFUfTnCpKbh2T+Qd5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd4ec2401085df65bc6d632158a0091720a8457e4b511343c8d24ea1d876ebee564308efee6c45346aa237edccf49bed39a7ddc3539c85e0c02a5e3f172876676b54535d78288b4449bae53c930806a0626b221fc4b8dbddfa597f7b7feb35fa93f33bb7594c5b2d2264b0c19481b38728c62494e03cee216329d25ac09322cd96656780dae57a38f33d77744d7dca43dd8fe68341bb33e8c1c1382d864cb165c9ff636d713060cb571e4628300b506bc905df62a05c6d53b2344fd094bc10014a28e1f2c15af022678273932666c56a9a15bb6ad5ed9ad5b4ab559bc884074cc53c23783e2381a0b86289c75fc92668409425398ecaeb0b8de3b074a24b77e4dbb552e05780b4457182cbbf4112bc61f41d3eb06306df3996f2225327ea6a306eff761c85fa7954b7edf77e1052515427c47787bd99df1e4e34b7387aefec14ca89e094a4441d62c5aa352eeab6f59eeb25d759d37b1c250a342060f47bdcc40a9c8825120f6f975b87ab7c020000",
    ],
    [
      "ETag",
      "XrODDjTnJjWKR8JP/VI9uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:45 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5722ef9756e3237c858054758c661d120d5d0865d53681e35ca84b8853dbe9862afef75d92d216b55ba548897defdd7b773ee781ac7912923e09f8ea2e03b9fd702b025221a0e90a77f504267c2ee7374d33faf37d1df08f5cf1c1c9092278ce527493c6505522930c547f36adada4c8522a85a862a26aa361561b56d3ec5a6db367359b161215c4d198276ba4df689daa7ebdbe17afad8458c54053ae6a4c6c9ef6ebf7cd7a2ac52d30adea879a759451f577544f63c1a8e62239994dd141a6402e6043798c1e9ea961f0e930778dd34d6d85e07bce803226b244e7be30051349c457992cb292fe03297cbef8205367ec0c7d633899b9fed1926e72f2f2d8a0ca582c24a82cd615638945453c86050f9765245d1b5fbcc90546d0c10d55a096c6fcabe33986b1cc413f33d36c31e3d418b867c6217fe41a33d775a6be71747a6c9c7b93d9a5f1f9fa0083c643509a27856d9f0631e4961f5b3b7a7da239816ab45106175dd3a20ddbec0551d06591ddea049109416007dd0e6d0526ebb5a11d064091a7f3ec058b262209ecc836c316588dd08646d4b229b09e65d9766421dcee5a11b35b5d68915d85fc965cc31957a950bc6c2f997b23df59f8decc1d0e7ca72823a2d8c2b3d25c5ec44b9f1a8b44d07feadae5512e50293fab91eb3bde60e88fae9c723cc6b0a26c3bbdc3018968ac00d154d20d68901722c4a691cbc974e48f26ee608c8ce2cc2ff70845fa3f1e9e09fe362dbaac8b77ae65b50bfd3de08ac65981b82f3f48a34376bbcabf530c3c6f708db2544aba7d3bfd9bf90b7cb12a2d3ee9915c6dbf6a92ddaf1d3e158277a9cc4ebecd1cef9a945b1e44202161ef8f0e828bc0fbff84fdfd4430de50d4511ad738a94ce5",
      "2a4c4239b17c53f82dd94db3d3e99aa4004bfd2a86b3ba3f9a3c479e113690e8c792cafb59742a0f65ea0984411c3477e49e63f42facbb741721050000",
    ],
    [
      "ETag",
      "tOeOiWrWh20fxXkbi+isiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d90414fc2401085ffcb786d635b4cd5261cc4102521048a1c8c216469a7b5d07696dd2da669f8efce2e1e3c78f0b23bfbe69bc97b3bc0b16a7348605f95a70e557f53a259d92245ddd546f325a9d5081ea0112593fdacbc3dada37cf25e3ca8e5285e05b90c56e331133afbc44640324051619d6b483e066845833cb6db29b79131d34babcc166fd39769ca4243b915169bf9fc69329fc2c5fb35268fff1ad95e3c38d03ec50215b6195a1752d1013333b301b568648dbea64e65a8c1c1ae512aeaa450443e2b7e18067e1847c17d7c173cc65114335953264c452dc39b359b034346d4297d7140881850aee4ac853bcf2c8f5c88b303acb7bf7ba1ed6d7f164e7a837aa988ed69b4ce82abcb67b2ce0d2732aa430f32c1dffc5a99ebfbf20d690edbffc3010000",
    ],
    [
      "ETag",
      "yIg/qS2dBYf8rP36Q0dp0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:45 GMT",
      "Server",
      "ESF",
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
      "ff1dd0cb7282301400d07fc95a9c0056a03bf1011d011105c40d13c295478504828cd8e9bfd7e9279cf38308a520443ab06f68d1279a8862cce97ccf75332d6e261ebcb504412102f54cad54dec571fcc2c5c856634ca03fb49468971701f96a61c8abcab94a39d3ca7653e6b9caeac677335a9b7af745cc953871b5b3861ac2fdf8a099bae17119be26e5d4288e9488ade9629e2ca4634ece77170337b4848593b7c4369b0ecdc58e1a0f170bff99445bff5614cc3adfa72c3ab4cb5a389ee73f701c66b03fb6aebaeda4dd3df1f496ae757be36842564ee439ae8308cd103c79d58348ab3757fd308c19fab7a7c3c4e11d6002e9a147bf7f6d84b0051a010000",
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
      "Tue, 11 May 2021 20:16:46 GMT",
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
      jobId: "grouparoo-job-111-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b6f9b3014fd2bc8fbda2490077948d11a2574cd94901548ab6a9a903117ea1630c5265555e5bfef629aae55a5f513b6ef39f79cfbe0853cf022263312f1f4b186eaf9dbbd88c8190145537cbda5c1e0a2f0b8e35edf3b57f267e5ae12789acf11c11b96a4799941478aba6220677bbf9b56a22e6925440713752ccbea5876df1cdb43736af7fb36122564c986170f48bf53aa94b35eef24de4d854833a025975d26f2b7f7dea1df2b2b710f4cc9de47cd1ecac8de17aadf33c1a8e2a298ef7d74504ba842c829cfd0c33f6a1c9d7fccdde534efa6083e700694315117aaf185299828129ed695ce4a662f44fb7c7720beb3719681c14456e74558d01cce8c982a1aaae7128c0b6fb735d6eec5cedb2e82f5ce0dfde5a5b35d7497bbcd7eebfac6cda5e33986a251069a6bcc8d737d73f182fa3148c50bad1e34cf8df26b87d69f07d310505a421b0cc7a64dad89398d9268cc92c96014252644d1241a8fe82032d97408c338028a3c2daa59b4c09a2ddbb262ab1f4ea6741a0e47630829b071381a0f4c36b2cd880e29399e91a78a2b5871590ac9db0e911b6f1d3861e0eddde52270740909ad33b56a8d3505bcf7a8b04004fda7a66313e502959a76afddc0f116cb607dedb413de404ad9b3ff88334e682601d1b4c2e629a8b622c6861177b1755608d613fb750a4a32fbfd429a9e372edeb5fc8d1ee0001bbb4a7f891f786bf787b673425cd3acd690437b20255abec3dad0f5f10f22714bdb2ce46aef78b7a47df220810a0af6f53411ac035fff6da7cd4730ee3eea4885775c1e261b155641bb445cd7fbcaee9bb6659b44832bf52936b007a7b635399a8c9043a15e4b6a371f2b6dc56af906c220cedfd5ed3afe05d68021e97b040000",
    ],
    [
      "ETag",
      "YaT3FnRiENVjEQsJrNDfew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92614f82501486ffcbe92b6ee2088bcd0f58a62c3413dcda9a73573820065cbcf76273ceffdeb964d6aaadbec03987e75cdef78503bc64650c0eacb2745ba3d85fa4a81e75314359e74ad2ade2a5443000154b890ccc2288b6856995f6b0b6aaeeee7ef4344a7b3d2264b4c68281738024c33c96e03c1fa06405d25ac4f3ba28974d6780da577a1884336f32a4bee0b1ee2773df77fbfe008ec67931668a2d1bfe1f6b8ba3011bbe9a618202cb08b5964af00d46cad336252baa1c5b92d72242090ddc3c4805af2b26386fd1a4659a66cbb43bedae6db5afed4ec72632e71153192f099e07241014572c9ff157b2091a104d498e93e6baa37116374e74e94d42db6a047e05485b92e5b8fc1b24c16b46dfe1033b65f09d6305af4b75a6eefc07f7b7e328d4cfa36edd70f083908aa23a23a1371e04a13b9e6a6e71f2dedf2b9453c12949893a44b36d5d5d76edf67bae375c674def7194a8d18088d1ef31ca143809cb251edf004116fbf67c020000",
    ],
    [
      "ETag",
      "S1mScqm14n6Gu4p7vKHXHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:47 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554eb6eda30147e95c8fbd34a5c42800490aa8ed2ac43a3a10ba115da26701c87ba4de2d476a850c5bbefc4296d59b7554290f87cb7631ff384ee5916a1010ad9faa1a062fbe98e87a886a8c26b58759cded4b7da8bb66925379bd159577cbb508f27278060254be2344f685df242102a07f359632d789163c1791d84eaad96556fd996e9d81db36f5b960d44499378c2b27ba0df2a95cb41b3b9376fac395f2714e74c36084f5fd69b1bab990b7e478992cd43cf26d8c8e607aea7092758319e9dcc6790a090542c698a5902195ea951f8f950bbc170da580378c308c584f02253652e90203c8bd9ba105a150d9e90cef9e601cddc893b0a8cd174ee05472b9c96e4d5b181a5b15c0a2a8b44d58c153415b3842e59b4aa2af9bdf1c59f5e420512dc6249e5cab8f9eafaaef1bab4327e16a6d926c6a931f4ce8d4395b167cc3dcf9d05c6d1e9b171e14fe757c6d9e20003f1232a15cb74f80087092d833f6ff0f8fdb99604acc0b92a2e1dd3c6ad9ed90fe3d02171afdd0d639386612f74bab81d9aa4dfa19d28a41878aa54d72c9cf1ccb1c228220e2656d48b6c12f54da76b99968d63029abd4e07d4ecb0d545bb1a7a144cd17326732e59b5c9e8c61f07ee32f0e7de6818b8ba8d18c3469e57e1ca26dee654d02480fed3d7aeac320e4ee5898dbdc0f587a3607ced564332a16b4cb6b3071893182792021a0b9c5245c5258f60d3d0d574360ec6536f3801863ef9ab3d42a2c18fa75742b0cdf52e2bfd8b66813ff62e74803de21a2785866caa0734cc212bdaed6aff9619fafe7001d65808bcfda306edd89d92fe170b8dd76f55ccbd650b956efb370bed7eede0534370ab2a75f47deefa0b542df934a68266e4e3f101b02e7cfcefb0bfa90086bb0a3e52c13b4c2b91a50b11b49a5a96eabc151bbe2cd3441a2cd4bb5abbdfdd1f4fa9512ad29466eab9a5eaa6ea9d2a4b857c01411186cdd327b5fb0d64151be02b050000",
    ],
    [
      "ETag",
      "778OR23Y302lWvCB5rKGtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d904f4fc3300cc5bf8bb9b6525ba1029376607f60436582c21002a1294bbdae5b5b87c4d5544dfbeeb865078e9c123ffffcf29c23ec8b3a8301ac8bfcbb41db5ee4c8cfdd2545d794ece430543b040f90552ee447f8fe361e13dfed1f67899e84dbc9c3b5390c874238bdc54ac1e0089b02cbccc1e0f308b5aa50c6562bdb3b0ac6ade994f9e2757a3f4d45a828eb84c532496e47c9144ede9f31b3ffd7c8d7c9831dad53dca0c55a6397c258daa1e679b7a0539529d177d4588d0e7ab86fe4961aa32c912f8a1f86911fc65170155f06377114c54296a41517540bbc7c9170c0c4aa4ce9200b4200e77ad432ba274be2ee303b77c4724cddc32c81d836e88156f24bb3827febd30f7f81335182010000",
    ],
    [
      "ETag",
      "Z1XVCCotFkMHLcD1hDJ8pw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:47 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd04b7282300000d0bb64ad8e8040e80e14e4572db6087593213104844124413e9ddebd4e8ff0de0fc808a19c2371af6803dec094c9c68aac82165a88e530f18aa03667df711b738d53a48c6154dbc617de1fe0b27ae04a635bd7505d899d2bbc1401243ca71b4db29f46a58f3d8dd7ecc0307434cc4538db8fe33ed9d04fccb771446425590a7f489356ca9f5ed2a770c33d52681f763ca30b528a3818a352a6423e9c2b88bad21cea460aa39e2526fb26eeae50afba37f5966dbdf7b7304be34ef14ebb3b1d4b24f0356c2e0e2c763eaf6f7c6ef4213aea1d010b40c7b6ec2847e58baba886b100ff7624a696be022c9a75b403bf7fc817a4031a010000",
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
      "Tue, 11 May 2021 20:16:47 GMT",
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
      jobId: "grouparoo-job-113-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbdabc9a8440a4688d52d2644b484748ab699a906d2ed42dc1149b565d95ffbe8b69ba5695d62f807dcfb9e7dc07cfe44ee431191326d2fb0acaa72fb7929113029aa678fbedf2da592c20bf983faebfcf9d380cfe8c168f93092244cd52745f64d052b22a39a8f16edb4e4b5915b494b285895abd5ebfd5b34fbb237bd075edd3531b890ab26425f23ba4df685da871a773146fa752a619d042a83697fbd7fbcec369a728e52d70ad3aef353b28a33a9fa87ecd24a75ac87cb2dba2834a4119c19e8a0c3dfca3c6ecec7deeb6a0fb768ae007c181722eab5cd7be3005977922d2aa3459c9f899189f6f3ec8d65b79b3d0e232abf67994d33d9c5831d534d24f0558f360b3b696fe7c13aca7e172e347dbd9c25b4fdbb3cd6ab7f6b7d6f5c20b3c4b539681e15a13ebcc9c7c3ca07e0c4a8bdca887f575adfcd2a1e5c7c1d4049456d004a351d7a63da7ebb2848d78e2f4872ce902630e1b0d699f75b93b8041cc8022cf881a16cd65cea90b43dba55162831d0d287323ca5d16d96e3fb6478c0dc11992c309792c858673a10aa944d321721d2c432f0a839d3f9b869e2921a155a6cf1b6375016f3d6a2c1041ffa9e950478544a5badd4b3ff482e92c5c5e79cd84579052feb4bdc71927345380685a62f334946b1963c3883f5d7be7083613bb3c061519ff7a2675cf6b176f5afe4a0f7180b55d6dde641b064bffc2d83922ae685619c843f3410ab47c83b5a1ebc36f44e2963659c88f9d17fc24cd5500099490f3cfa7896013f8fc6f3b6e3e8271f75147693ce3f27055abf0129a2512a6de17363e1ca7470cb8d41f62ae333ab6adce5167843de4faa5a466f3b1d246ac52af200ce2fc7dd3aec35f4c021b087b040000",
    ],
    [
      "ETag",
      "JPW8HHenGFwMKF8dTRz7Hw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4ec2401085df65bc2d9122146de24541509282fcd4c4680859da2956db4ed9dd6208e1dd9dad88464df4a69d997eb33de7b43b7849f2085c5826ab7589727bb2423d31c51455996ac5b782728560016ab162f2f4bebf2ec207ea765a7ddf5ed2b6d834ba93cb4b2654f88499007707718269a4c07ddc412e32e4b590d232cb17556781de1666380ba683d135f71945a61fddf9bed7f17bb0b78e8b91d06251f1ff589bef2d78a6e5146394988768b414929e31d403635389ac48b1a6a894212aa8e0eac14a5259084954e349cdb6cf6ab6d3a8b79d66fdc269341c26530a854e2867f86ec602419316e9945ed926184056253b8eabeb86c749543931e5601438cd4ae05780b5c5498a8bbf4116fc24f83b7c60870cbe7322a332d747aaefdf7abf1dc7a17e1e75e505bd1f84d21cd5110906c3de2cf08663c3cd0fde3b5b8d6a2c8993546842b4ebcdf356dba9bfe7da259335bfc7d5b2440b42c1bfc74da2c18d45aa70ff06d98ff9517c020000",
    ],
    [
      "ETag",
      "/XFqpcZoCB5FL1boypv2CQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:48 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b",
      "30",
      "10",
      "fd",
      "57",
      "90f74babe58310423ea4aacb12ba464a494748ba689b12630c750b9862d32dabf2bfef304ddbacdb2a21817defdd7b773ef3806e591aa001f2597457d07cfbee86fba886a8c411ecaea2feecfdb2db5e1489f1733e3bff355e7e398b4e4e00c14a96c04916d3bae0454ea8182ce68d28e7458673ceeb90a8de6a99f59665e85dcbd4fb9661584014340ea72cbd05fab5949918349b7bf146c47914539c31d1203c79da6fde1bcd2ce7379448d13cd46c828c68bea17a1a738225e3e9c9620e0e0a41f3354d308bc1c33335f03f1ce66e309c342200df33423121bc4865e90b52109e862c2a7295150d1e90f2f9e203cdeda93df2b4d16ce178471b9c94e4cdb18685b65ee75414b1ac691b282a64315db3605345b25bedcc9d5d40041c5c6341c546bb3ab75d5b7bdeda68df0a5d6f13ed541b3a63ed30cbc4d1168e63cf3dede8f458fbe4ce1697dac7d50106ec075448962af31ef6635a1a7f6cf0e4f5b996042c41b90aaebbba855b3dbdef877e9784bd76c70f75eafb3dbfdbc16d5f277d939a814f31f064995db170cad3be8ff54e37a0240054273089619a56df377cb36fb4b1d5e91add5e2b3428dad5d08f9c493a6622e382554d4657eec4b3d79ebb704643cf566584181a39aecc9545bcf429a14800fda7ae5d19651c94ca139b389eed0e47de6469574332a51126dbf91d8c49886341018d739c5049f30b1e40d3d0e56c3ef12633673805863af9cb3d42a0c1d7876782b7cd5497a57aa3b9e74e9c4fcac01eb1c471a120f7d507c2197845bb5deddf6986ae3b5c8134ce73bcfd2306e5586649ff8b84c2ab5565732fd942a5da7e65a0ddf71d3c3504b7aaca8e3e2f6c7785aa2d978634a729",
      "797b7c00ac026fff1df63715c0705741474858c3b41251aa909c5653cb12e5b7621b7acfeaa87f8bc4b97c15eb19c6fe78ca1c65469ad0543e9654dd54d5a932548827100461d81c7552bbdf9383517b2b050000",
    ],
    [
      "ETag",
      "Yg9O+V73Uum2xSOHzDVXFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4f",
      "c2",
      "30",
      "10",
      "c6",
      "ff97f3d12d6e73d448c20318a2240475484c30849472ccc1b69b6d8712c2ffeeb51ac3a32fedf5bbdf5dbeaf47d815f51abab02af28f16f5e12247fbec8a0c4d5b5ac35743b5410800adcc1d29be44e7713e4bcb295e5e5f454abeced37eafc78451ef5849e81e615360b936d07d3b422d2be4b1e552fb8d8cd943e394d1e465783fcc58a868ed84c96c3cee0fc64338056763cdee5f238b53005b5a65b8418db542e7a2d1b44565472ea09155536268a8d50a0d78d837724d6d233551c84a18c769188b24ba1169742b924430599292b6a09ae1d994cd81252bcb8c3e3920240c685f72d68d3ff72c777c88bd079cb7f39ef8ebc5aeb7f85d383858344f9ad89e41e72cfa717947ceb9e54456b7188092fccd0f85fd799fbe01c297b82dc3010000",
    ],
    [
      "ETag",
      "b6x65OZU4lSe+3/0caWZ4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:49 GMT",
      "Server",
      "ESF",
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
      "000000000002ff1dd04b8e82300000d0bb746d8c53446076201abe021310c3a629d850e44ff9d6ccddc7cc11de7b039c65843134b62569c037d83054f6d9deee640de5c4e0bcee6afe340fb5917bcbd81c7181e1544bb9506257173cead3d478c25a9f2b1d2d320bdbbcb866c2014158b339f06462e830fec26a25ba3c5ad8abb14dea741985942a617fdfc4880f5270e2a998b0c65f12afe1f2eaae56a2a5953f47a77eb005c7917039c9dc4c953ecc5ed4be2ce83cdb341ae3ab7e1eee623b59725bbabdea5aebad732af5722c8e11351d14baf0c163feb845db8f924f01d801b276c540182a3e5c4154941df8b7a371ebc8274023782003f8fd03c67d20ee1a010000",
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
      "Tue, 11 May 2021 20:16:49 GMT",
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
      jobId: "grouparoo-job-115-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b6f9b3014fd2bc8fbda2484900791a2354ae89a2a211b21ada66942c65ca853c0149b765595ffbe8b69ba5695d64fd8bee7dc73ee836772c78b984c49c4d3fb1aaaa72f07119133028aa6f87a654f6ed88197f3fcca5f46921efe3cde1d1e673344f08625695e66d091a2ae18c8e97ed74d2b5197b412a283893afdfeb0d31f59e678649bcec8b246489490256b5edc21fd56a9524e7bbd9378371522cd80965c7699c85fdf7b0f56afacc4019892bdf79a3d9491bd4f54bf668251c54531dbefd0412da10a21a73c430fffa87174fe3e7797d3bc9b22f88133a08c89ba508d2f4cc14491f0b4ae7456327d26dae79b03d9b96b7711184c64755e8405cde1cc88a9a2a17a2ac1b8f0b71b63e55d6cfdcd3c586dbd70b7b87437f3ee62bbde6fbc9d7173e9faaea1689481e61a33e35cdf3cbca07e0c52f142ab07cd73a3fcd2a1d5c7c134049496d006c3b139a2fd89e944493466c964308c1213a268128d87741099ccb1c18e23a0c8d3a29a450b5138f130726218855192d8a16d2734a4d68485c960e080655b430b62723c238f1557b0e4b21492b71d2237fe2a70c3c0df7b8b79e0ea12125a676ad91a6b0a78eb51618108fa4f4dc726ca052a35ed5e7981ebcf17c1eada6d27bc8694b2a7dd3dce38a1990444d30a9ba7a0da88181b46bcf9c65d22584fecfb2928c9f4d733697adeb878d3f2577a80036cec2afd25bbc05f79dfb49d13e29a66b5863cb40752a2e55bac0d5d1f7f2312b7b4cd427eec5dff27699f7c48a082827d3e4d04ebc0e77fdb69f3118cbb8f3a52e11d9787c9468555d02e11d7f5beb02dd3b11c936870a53ec46cdb3eb5adc9d164841c0af55252bbf958692b56cb57100671fe9e6ed7f12ff8cc3c1f7b040000",
    ],
    [
      "ETag",
      "J48WcjipAmJRDbsajxwkjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "416f82401085ffcbf428266a152b89076cb525556b112f6d8c5961402cb0b8bbd810e37fef2cb5b6699bb4179819be59de7b708097380bc082751ced0a14e54584ea51172eca2251926e39cf248201a8584464cddf458ba217dfbb72efa5bd51edb2c4a7a8df2742fa1b4c19580708634c0209d6f301329622adf93c29d26c557506a832d7c3b9e73ad35bea531ee87eba188fedc1780847e3bc1830c55615ff8fb5e5d1802d5fbb18a2c0cc47ad25177c8bbe72b44dc9d23cc1bae485f0514205570f22c18b9c09ceeb34a9379b9d7ad36c35ba66bbd1335b2d93c884fb4cc53c2378312781a0b86289cb5fc92668405425390eabeb9ec6715039d1a533f5cc7625f02b40dac238c1d5df2009de30fa0e1fd82983ef1c4b7991a933351a3fd8bf1d47a17e1e75637bc31f845414d519f19cc970eed99399e69627ef8352a19c094e494ad421361bedab4ed76cbce77acd75d6f41e4b89020df019fd1e77b1022b6489c4e31b654a4f2c7c020000",
    ],
    [
      "ETag",
      "+cqgUu9iKRsvTm9F+3yeZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:50 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54ff4fda4014ff579adb2f9a00fd02144a621c42a74db068293ab32d703d5ef1b4f4b077d510c3ffbed75654e6361312da7b9f6fefdd5d9fc93d4f17a44722be7cc821db7cb91311a911507489ab77cdcb93b376673330fbf05d3f1d08c6aea2a7a32344f08225e96a9d405d8a3c63207bd3496399897c4d3321ea2854374dbb6eda96d1b15b86635b968d4409493ce2e93dd26f955acb9eaeefcc1b4b219609d035970d2656afebfaa3a5af3371074c497ddf53471ba97fe27a9c08461517e9d17482097209d90c56942798e18dba88beee6b37385d3596087ee40c2863224f55910b25984863beccb35295f49e4999f3dd0399b82377106a83f1d40f0fe6745590e7871a95da6c9681cc1355d3e6d854cc1398f1c5bcaaacefb56fc1f81c2b98e0964a9073edfacc0d5c4d9b2fa882b9f633378c26d38eb5be3fd4f6153c5f9bfabe3b09b583e343ed34184f2fb4939b3d0c465f80543c2d8387344aa008fd325cefe39e1604aa3048559c750c9b9a5dc389e2a8c3e26eb31dc506445137eab469333298d382d622028a3c55a8972c9a8a94d9a60386c39c66c4ba0e7423ab0b76336a755a2d1357bbd44219d364645b234f195730e4722d24af064cae032f74676130f507fdd02ddb88290e7158852b9a789f53619308fa4f5fdba2ca053a15bbe5f9a11bf407a177e5560764044bca3693073c22314d24209a6674050ab273b1c0a1918bf1c40bbdb1df1f21a3dcf58b1d4292de8fe73742b859975356e53f19160d6cdf095ed1242f018fd503b10ccba81b56dd6c93edb6f66fa57e10f46fd09d6619ddfc51c38eec5641ff8b4f892fdfaaa43b5f93146eaf29c8f6d7167f358297aa5227975337b821d55200316490b2cf4f1082cbc2e71f87dd4545305e55f4910adff1c03259b8b00caa83cb5765de8a6d9946d3e990129ca90fb5b665ec76a8d028146105a97a69a9baa8e5a48a522e5f4158c4f3e67bfe29567f03035feb092a050000",
    ],
    [
      "ETag",
      "j3QBH57yC1AeX/GCoccVbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ffcb78b44d682535927010838a2920050ec610b294692db49dba3bc510c27f7776f1e0c18397ddd937df4cdedb13ec8b7a0b3dd814f9678bfa789523cf6c91a0694b367235541b040f90552ee4643135d3c5e3cb75f2d6e5f138473d3fcc66fdbe1026fdc04a41ef045981e5d640effd04b5aa50c6d66bed360ac6c7c62aa3c962f8344c44a8686b85c9328eef07f110cedeafb166ffaf91d5d9831d6d12cc50639da275d168da61ca231bd0a8aa29d137d4ea140d38d835724d6da334912f8a1f04911f4461e736ea76eea2308c842c29555c502df0722ee680895599d09704845000ed4ac99ab9f320f28d0b717080f5f6772fb0bdd5cfc2c191d1bc6a127b06adb3cec5e50359e72c8958b7e841aae49b9f0bbebccfdf91b294fbc3010000",
    ],
    [
      "ETag",
      "NTOsOTFJ+RY4tMMgerSvQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:50 GMT",
      "Server",
      "ESF",
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
      "d0",
      "db",
      "72",
      "43",
      "40",
      "00",
      "80",
      "e177d9ebc864c4b177a8b2414c682adcecb0bbce412d2d3a7df79a3ec07ff1fd3f20c5983286a6bea11d78016bcaab477c7406454705d162c8f766e71111ca5b82a23785e9f7b50bdcba41dfefcbf5963f06fe9cf69c55cdf2e80a247914e68c1c0567975edc62a2850663c49026c312b842d64a85cdb2cbc88db7a324bdd28f7980d6b3b6ef5189b01087a5640b3ed9c3d70c06d057235d54b6af3c47d232b7c88327f7c4f595c010a2aeb965f5161649116849664abdefe3164f5ac4e5c6a73a28993779b4db9c6a21396c82a7d35e96181c005d866aa40c553bf72caaea01fcdbd1b40e741fa0d374a423f8fd03248aa7f31a010000",
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
      "Tue, 11 May 2021 20:16:50 GMT",
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
      jobId: "grouparoo-job-117-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda2410f22252b4a629ed9012b20169b54d1332e642dd124cb1695555f9efbb98a66b37699590c0bee7dc73ee836772c7cb94cc49c2f3fb06eaa74fb72221270414cdf1b6bc57c199f3183adea5ddf83fceecbc1e5d2e170b44f09625e9be2aa02745533390f35dd8cf6bd154b416a287897a9635ed5993a1399d8c4c67321c4e9028a1c8d6bcbc43fa8d52959c0f0647f17e2e445e00adb8ec33b17fbd1f3c0c07552d6e81293978af39401939f840f5732118555c948b5d880e1a09750c7bca0bf4f0879a26a7ef73f739ddf773043f70069431d194aaf585299828339e37b5ce4ae6cf44fb7cf3414277edae228389a2d9977149f77062a454d1583d55605c04db8de1f917db60b38cbcad1f87ab2fee66d95f6dd7bb8d1f1ad75fdcc035144d0ad05c63619cea938f07d44f412a5e6af5a8bd6e955f3ae4fd3b989680d212ba603c3527d49a994e92255396cdec7192999024b3643aa67662326704a334018a3c2daa59b414a5934d10ec8ce391639af1c84ec6f16c98d9f1d41a6763183b766a5ae470421e6baee09ccb4a48de75885c075ee4c651b0f357cbc8d52564b429d47967ac2de0ad47850522e83f351dda2817a8d4b6dbf3233758ae22efcaed26bc869cb2a7f01e679cd14202a2698dcd53506f448a0d23fe72e39e23584feceb3128c9fce733697bdeba78d3f2577a84036ced2afd26611478fea5b673445cd1a2d19087ee835468f9066b43d7875f88c42dedb2906f3b37f84ebaab0032a8a1641f4f13c13af0f1df76dc7c04e3eea38e5478c6e561b2556135744bc475bd2feca1653a539b6870adfe8e59f81cdbd6e66833c21e4af55252b7f9586927d6c857100671febe6ed7e137ae3a3af27b040000",
    ],
    [
      "ETag",
      "nqtRB9wS9IG3uNZB3gr4GA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bca42405a168132e8aa212f9b39498680859da6929b4ddb2bb4509e1dd9dad88464df4a69d997eb33de7b47b58c75900362ce26853a0d89d45a81e74e1a22c1225e996f34c2218808a45442e27abfbca7a3ccacf5f83cad6dd3c164fcdd469b78990fe125306f61ec218934082fdbc878ca5486b3e4f8a349b979d016a97ebe1c4737bc35bea531ee87e38edf79d4ebf0b07e3b41830c5e625ff8fb5d9c180155fb818a2c0cc47ad25177c85beea699b92a5798255c90be1a384122e1f44821739139c576952add55ad59a55375b56c3bcb4ea758bc884fb4cc53c23783a2181a0b86289cb5fc82668409425390ecbeb96c671503ad1656fe8598d52e05780b4857182f3bf4112bc64f41d3eb06306df3996f2225327eaa63f727e3b8e42fd3ceadaf1ba3f08a928aa13e2f506dd89e70cc69a9b1dbd77760ae558704a52a20eb166362e9a2dcb7ccff58aebace93db612051ae033fa3dee620576c8128987375ead7f217c020000",
    ],
    [
      "ETag",
      "hSjK+kPOp3xd+vRqWuZ5mA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:51 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8554fd6f9b3010fd5790f74b2be5c3909490485597b5ac634a484748abee43893126f50a98da265b57e57fdf014d3fd66d9522057cefbd7b77bee30e5df33c462314f1f54dc9e4ed9bef22422dc43459c3e9fca2bb097fcd7e5a7170e30c7b03f1b190c5f8f01010bc62299215296b2b514acad46831efaca5280b2285688350db349db6695b7860f7f1d0b62c1b888aa5c984e7d740bfd2ba50a36e7797bcb316629d325270d5a1227b38ef6eac6e21c57746b5ea3ecfd98534aafb4ad6a35450a2b9c80f177370502a26972c233c050f8fd4387afb5cbbc349d6590378c32923948a32d7952f90a0224ff8ba94b52a1adda1dae79307347727ee71681ccf167eb8b72259455eed1b4419cba564aa4c75cb584151094fd992c7ab26525c1bef83d91422e0e08a28a656c6c50737700d63a534b85b195f4b8c7bd43832c6fe89f15cc2f38d85efbbf3d0d83bda374e83d9e2cc7877f90c03de63a634cf6be721895256b9beefaef7f2522b02d1e0a4092e07d826a6838751120d68e2f40ea204b32872a2c101e945980efbac1f478c004f57ea358be4222716c68eed50860f228249d47762821d4aecc1b01fc7111962d38e87661f6d5be887e49a9d705508c59b0ea38bc00bdd65182cfce371e8d6652404ba78d298ab8a78ea53439100fa4f5ddb2aca0564aaaecbf34337181f87deb9db4cc884ad09bd9ddfc08c2424550cd044928c6926a72286a6a1b3d9dc0bbd993f9e00a3bef6b31d42a1d197bb4742785bd45dd6f53f0abd29dcd1787a567bd881ce495ad6a84df3802c6ce136b6dae641685a23b33732fb1d8cf167b4ddb6fe2d3e0e82f12518225292db3f6250a4ddafe87fc95ae3ebb7c6fcce8589aa6c0f9ed0f6db167e2d048bd6a8a34f0b37b844cd51c01226594e5f1f2a00d781d73f18bbe50530ac2fe48145d01c6698aa2a0b95ac99659ed57e1bb6655aa6597f6e3491fa45cceae1dda5551a9522cb58aeef4b6a96b7ee54152ad50308823082bee79f42f437c39920a83e050000",
    ],
    [
      "ETag",
      "SW/vTzOx2dRq8937oJprpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "414f83401085ffcb78850468834ad283adc4624863d11e8c699a2d4c911618dc5d6a2ae97f7776ebc183072fbbb36fbe99bcb7031caab68008b655f9d1a33c5d95a897a6c850f5b5567c75d42a0407508bd290e96b29e759dcfbf7c9389d155fed76f4b89c4c9850f93b3602a2017615d68582e86d805634c8639b8db41b19d3a7ce28c9e2257e8833161a2a8cb058a5e9dd348de1ecfc1aeb0eff1a599f1dd8d336c31d4a6c73342e3a497bcc7562022ad17435ba8a7a99a3020bdb4629a9ef84247259717dffc6f5c3c0bb0ec7de6d1804219335e54257d432bc7a6673a0498b3aa34f0e080103d2969c7567cf23cb231be26801e3edef9e6f7aeb9f85d39346f52489ed2934cebc8bcb1919e79a1369d9a303b9e06f9e57faf23e7f03fcac804ac3010000",
    ],
    [
      "ETag",
      "bLYgrHREu1DI4LCdznb3JQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:52 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad4e5041e90e94222805141a65c3f0097f422620043bbd7b9d1ee1bd1f102509eefb70e86a4cc00798a3b5bc4a5667ba57c33c33d5d9a91e3838a4d9dc5a5ddc183eec9c8bae704769c955593e4d8f6b36c96edf75134f79b11598c4830922ae154bb83390472c0935dc4fc2764d3e0b181f4fc4276e49a16b36462a7849305e58b44fabeea26e07d7bbdedd67b11d66812a8ce77a1a4bba794a2d83ee8ed917ad772f4763bd1d29a9a8aeb16309486feaa1ae6ce896c81cdbfb34f6e747af9d2afd6121d4aa81786306c41b24de0f91021600735a32dc87e59bbb11657901feede13053fc0e5071c43003bf7f50f683841a010000",
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
      "Tue, 11 May 2021 20:16:52 GMT",
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
      jobId: "grouparoo-job-119-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2bc8fbda84bc202152b446295da3256425a455374dc8980b7107986293aaaaf2df77314dd7aad2fa09dbf79c7bce7df04cfef022265312f1f4a186eae9cbbd88c8190145537cf5ee4a9fef4de7e7f0f2f1e0ec17dfe3ab5c5dcf6688e00d4bd2bccca023455d3190d3ddb69b56a22e692544071375fa7da7d3b707bdb13dea39f6606023514296ac78f107e97ba54a3935cd9378371522cd80965c7699c85fdfcdc3c02c2b710f4c49f3bda68932d2fc44f56b2618555c14b3dd161dd412aa1072ca33f4f08f1a47e7ef737739cdbb29820f9c01654cd4856a7c610a268a84a775a5b392e933d13edf1cc8d65db98bc06022abf3222c680e67464c150dd55309c6a5bf591b4bef72e3afe7c172e385dbc595bb9e77179bd56eed6d8ddb2bd7770d45a30c34d79819e7fae6e105f563908a175a3d689e1be5970e2d3f0ea621a0b48436188e7b36ed4f7a4e944463964c865694f4208a26d1d8a2c3a8c79c118ce20828f2b4a866d1421463cbeadbcc8630a2a36138b26c2b9cf4865108d472ac68128f2838e478461e2baee082cb5248de7688dcfacbc00d037fe72de681ab4b48689da98bd65853c05b8f0a0b44d07f6a3a36512e50a969f7d20b5c7fbe0896376e3be115a4943d6d1f70c609cd24209a56d83c05d55ac4d02cf77ced5e20584fecc72928c9f4d733697adeb878d3f2577a80036cec2afd25dbc05f7adfb49d13e28666b5861cda0329d1f21e6b43d7c7df88c42d6db390eb9debdf91f6c987042a28d8e7d344b00e7cfeb79d361fc1b8fba82315de7179986c545805ed12715def0b7bd01f4cfa16d1e04a7d8839c3e1a96d4d8e2623e450a89792dacdc74a5bb15abe823088f3f774bb8e7f01a0c7f63c7b040000",
    ],
    [
      "ETag",
      "NYpRih/9Z3Fwv9hCKdHmtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4ec2401085df65bc6d93424a91265e8022120181166234842cedf407db6edddd6a08e1dd9dad88464df4a69d997eb33de7b47b784a8b105cd8a4f17385627716a39ae9628eb2ca94a45bc90b8960002a161399dc472d67e1e7cbdee02198259dc1edd2b367171744c820c19c81bb8728c52c94e03eeea16039d25ac0b32a2fd6756780da957ae8f9f3e164407dce43dd4f16a351b737eac3c1382d864cb175cdff636d753060cb37738c506011a0d6520abec5400db54dc9f2324353f24a0428a186eb07b1e055c904e7264dcc46a363369ca6d5766cabe3349b0e91190f984a7941f0c22381a0b862d99cbf924dd080a84b721cd5d7171aa761ed4497c389efd8b5c0af00698bd20cd77f83243861f41d3eb06306df3996f3aa5027ea7a74d7fded380af5f3a8abaedfff414845519d107f38ee7b7e773cd5dceae8bdb75328a78253921275880dcb3e6fb51deb3dd74baeb3a6f7b84a546840c0e8f7b84915b811cb241ede008f8fedfa7c020000",
    ],
    [
      "ETag",
      "hXf56UTmVBGZcQh9GKVS4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:53 GMT",
      "Server",
      "ESF",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85546b6f9b3014fd2bc8fbd2497910480889547534a51d524a5a425a650f25060c750398629329aaf2df77314d1febb64a4860df73ce3df7fa9a47b4a17984c628a0c94345cadda77b16a016220227b0fb4ddf16a79bebe5f436217786c1534e5ddf3a3e0604ad591c67454ada9c556548f87831ef2425ab0a5c32d606a1764f53db3d435387465f1d199a66009193349ed27c03f43b210a3eee760fc93b0963494a7041792764d9f37e77ab758b92dd9350f0eedb9c5d48c3bb1f643d4959880565f9f1620e0e2a4eca15c9304dc1c30b350abebcd5ee509c7512006f69487018b22a17b52f9008591ed3a42aa52a1a3f22e9f3d5079adb537be22b93d9c2f58fd638abc9ebcf0ae6ca6a55125ea5a2a5aca1a898a66445a375132936cab937bb840838b8c39cf0b572fbd5f66c453968283f2a55d543e544b1dc33e5ad86e32a0bd7b5e7be7274f259b9f0668b2be574f90603e623c205cda5751f0729a96d3fb5d7797faa35010bb0d2045743d5c03d531d0571300c63531f04b14a82c00c8603ac076a38ea937e14100c3c51ab4b16ce593e82601045bd914a0671d0570d330a7ada10c77a6c06fa68d08f4333d2b501dab7d0af920a724679c1386d5a8c6e3dc7b757beb77027966fcb32620c6d3c6bccd545bcf629a04800fda7ae7d1da50c32d5e7e5b8beed5913dfb9b19b1199920487bbf9030c498c534e008d4b9c1141ca4b1641d3d0d56ceef8ceccb5a6c090e77e75407034fefef842f07785ecb2906f743e9d59bed1970e0e901b9c5612b36d3e50af3300c4bef56f19cbf3ac25a4c66589777fc4a01c43d2ff9241e2e5aab1f99c11d5d90e2b0ded7feee16921b8538d3aba5ed8de12355b1e894949f2f0e3f101b00c7cfc6f38dc5300c34d853c5cc01aa635e47596b024cdd4d24cfa6dd85a4f1f0c3424c1a57817334cf3703cb546ad4832928ba7929a7b2a3b55872afe0c82200c9bebb81710fd0dd84ee74a29050000",
    ],
    [
      "ETag",
      "Z3vpBkQYLWgeh66slsiNTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d90414fc2401085ffcb786d63694c45120ea2048904a5803131846cdb6929b49dbabbc514d2ffeeece2c183072fbbb36fde4cbeb76738e455020388f2ecb341d95e65a817a608513585567cd554290407508b8c9dcffd360c8feff3b7dde329eabf54a7eb68b25c0c87ec50f10e4b018333a439168982c1c7192a51228f6db7d26e649b6e6ba34ce7abf1641cb250526284f97a36bb1fcdc6d039bfc6eac3bf46369d037b8a424c516215a3a1a825ed31d653135089b22ed055d4c8181558b36d64929a5a48229715b7e77b6e2ff0bddbe0c6bb0b7c3f606741b1d039556c5e2f190e34695184f4c501c16783b425674ded79b4b20961aa9e65fbbbe79bdee667e1a8d5a85e25319e4243e65d281fc8906b4ea465830ec482bff929d79777f70db477ae75c3010000",
    ],
    [
      "ETag",
      "K8yRRvXNVhDzb8Onz/bGSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:53 GMT",
      "Server",
      "ESF",
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
      "1dd04b7282300000d0bb642d0e9a864f77410aa468015b7570930934201f352644613abd7b9d1ee1bd1fc0ca922b45876bc72fe0154c6ce9cecb792c1c8fd6e5a673a51750840df3f079e51c2124bc4dabe52a23429144bff4791244e1d7ceeb9c7c2c03b674a0abae30e6e87c76587448f753ada204c7c9911916ccd2ea522049719267f8b19aeedb40c7e4adb076e650f8298eb4ddbaf587631a930743ddcbfbedbcb0488c450e7dc9fb347cf845af85710abb96b407128bf71adb475fea6d70b36b989b7da7360b9f341712447bbbcaaae1c4d63b4dbfd7e3cd0433c047d148ae68f3e442e4ba33f06fa7c324f833c0e34c72097eff00fc33dd731a010000",
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
      "Tue, 11 May 2021 20:16:54 GMT",
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
      jobId: "grouparoo-job-121-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b6f9b3014fd2bc8fbda24401e9048d19aa674654dc84a48bb8726643b8639054cb1e95655f9efbb98a46b5569fd84ed7bce3de73e784277bcd8a209223cbdaf59f5f86127083a414ce1145ef1fc737a550dc9d7ef7f76323d0befcfe677bbebe91410bc61499c9719eb48515794c9c966dd4d2b5197b812a203893a966d75ac916d3aa381391ed9f608889265c982177740ffa5542927bdde51bc9b0a91660c975c76a9c89fdf7b0f76afacc48e51257baf357b20237befa87ecc04c58a8b62ba5983835ab22a6639e61978f847dd92d3d7b9bb1ce7dd14c00f9c324ca9a80bd5f882145414094feb4a67459327a47dbe38a0b5b7f0e691414556e7455ce09c9d185bac70ac1e4b665c84aba5e10717ab70398bfc5510afe797de72d69daf169b65b0366e2fbdd033142619d35c636a9cea5b0017d0df32a978a1d5a3e6b9513e74c87f3b988600d292b5c1d83147d872cd3149884313b73f2489c908718933c47d62d2f1800db68461e06951cdc285282c77e06e2dc78c1d9b9af1c01d92d83507566cf5cdb1331a9ac4b15db43f41bf2baed83997a590bced10ba0dfdc88ba37013cc6791a74b48709da9f3d65853c04b8f0a0a04d07f6ada37512e40a969b71f445e389b47fe8dd74e78c1524c1fd7f730e3046792011a57d03cc5aaa5d842c350305b7ae700d613fb720c4a34f9f1849a9e372e5eb4fc991ec1001bbb4a7fd13a0afde093b67344dce0acd69087f6800ecb03a6f73f01084bda2641d71b2ffc86daa79025ac62057d7f9800d681f77fb6e3e20318561f74a4823bec0e958d0aad58bb435c977b60dbd6c0eeeb5f55e14abd89f547c363d79a1c4d4696b3421d4a6a171f2a6dc56af90c82208c3fd0dddaff05e08e87077a040000",
    ],
    [
      "ETag",
      "aCJgKr5bXZxjsgBRqBCkjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "c7bfcbf9e8966c13862ee1418851920565802f8690b2dd46b1dbcdb69310c277b7ad688cf1c197f5eef6bbe4ff6b8ff0ca9b0212d8f0eaad4379b8a850cf6c91a1ea8456e668a951081ea066952183c7fd6cbcad541ef5e9b98853bee097540d878650f9166b06c9114a8ea25090bc1ca161359ab59c4457376bd779a00fad1dce17d9647a6ffa9a0adb4f97697a3b4aefe0e47d2f164cb3b5e3ffb1b63a79b0a34d86254a6c72b4595a493bccf5c46a2a56b7027d459dcc518183dd8f4a52d73249e49b891f46a11fc65130887bc14d1c45b12105e54c736a0cbc9c9b80a0493391d1de68c29501a42b8d71e9beef66cc0b6762cbc97411f75cc09f8073fc42ce5abf9956b0e60f66754e303a68544f928c8f42ab1206bdebfe200e3eedc6648db5b9092d3bf42067e6911eb886a46442e1e9039359a04b02020000",
    ],
    [
      "ETag",
      "0OwQChgsc25oVd6LiTi+og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:54 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "0000d0bb64ad4e0c2ad01d18bf14a85a50b2c9100814918f2408e2f4ee757a84f75e208c222e049555ce4bf0019e21d227d1c4aa3593a6b1bdd86a5c8ed3e61e1f6e282fccf9c5e9c8ce433ae168b63e798b61538622ac14efcabe547bea0828a1b977fa2bb110b44449b3c239429cc7c123e8f471a2da2c3ce0fdb7b1252bdfc2fb804f2976fc13865bf7c98c480e59cfe2c8f47834d03bad0a76f1c6aca85cac78f60051cb36ddcd82ebc74aca1d3eabad3233d2e4deda4b455baae2b3ac6a8d1072f4cfea35295c6442a5392fa9fee3f7f9cce66004785f670d17347b7395b9ae8fc0bf9dca67cddf01260f1bde80df3fcf0ebadb1a010000",
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
      "Tue, 11 May 2021 20:16:55 GMT",
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
      jobId: "grouparoo-job-122-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f771f495a669a9548dae8451a949479a82a6698a6ce72618d238c40e08a1fef7dd382d03218d4fb17dcfb9e7dc475ec8bd281232254c640f3554cf5fee2423270434cdf0d5befc9e7fadaf4b779e4076b586917deb8b6c36438468588aeeca1c3a4ad6150735dd6eba5925eb9256527630516760db9d816bf7c7aed33f756ddb45a2823c5d89e21ee9b75a976adaeb1dc5bb9994590eb414aacbe5eef5bdf768f7ca4ade01d7aaf75eb38732aaf789eab75c72aa852c66db0d3aa8155431eca8c8d1c33f6ac2cedee7ee0abaeb66087e141c28e7b22e74e30b537059a422ab2b93954c5f88f1f9e64036deca5b44169779bd2be282eee0c44aa8a6b17e2ec1ba08d7beb50c2ed6a13f8f96eb20de2c2e3d7fde5dac575b3fd85837975ee8599ab21c0cd79a5967e616e005f513505a14463d6a9e1be54387961f07d310505a411b8cc77d970e26fd5396b2314f27c3114bfbc0d8848d4774c8fafcd4012761409167440d8b16b2980cecd4193a4e3c66a32476d2b11d4f46032766dc766cc61c975397ec4fc85325349c0b554a25da0e919b70197971146e83c53cf24c0929ad737dde1a6b0a78eb51638108fa4f4dfb262a242a35ed5e069117ce17d1f2da6b27bc828cf2e7cd03ce38a5b90244d30a9ba7a1f265820d23c1dcf7ce116c26f6f3185464fafb85343d6f5cbc69f92b3dc2013676b5f9924d142e831fc6ce11714df3da401edb03392c0f9adeff41202e699b845c6dbdf017699f4248a182827f3e4c049bc0e73fdb71f1118cab8f3a4ae31d7787ab468557d0ee9030e51ed8f66084e324065ce90fb1a1e31ebbd6e46832c20e0a7d28a95d7cacb415ab",
      "d52b088338fec0746bff1722b2c8d37a040000",
    ],
    [
      "ETag",
      "2HBl+uVp6AdegQOe52hMig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d916f4fc2301087bfcbf9d22d1913862ee105a0d12504e59f9a18624a779bc36e9d6da720e1bb7bad688cf1856fd6bbdb73c9ef6977f05c5429c4b02af29706d5f6284733b1c51475238ca6a3969546f0000dcb89bcbf1e6e14bfddbc07e9e4b8e9dca9243d57fd5e8f08cd9fb06410ef202b50a41ae2871d54ac445ae3523465f5e83a0fccb6b6c3d97c9a8c2fa92f656afbf16234ea0f4617b0f7be175366d8a3e3ffb1b6dc7bb096ab2966a8b0e268b3d44aae919bc46a6a56d6027d2d1bc5518383dd8f5cc9a6664a4a9f267e2b0cfd561406dda81d9c45611811292467a69015c18b190504230d1353f9469a70428072251967eefb4ae3227526b64cc6f3a8ed02fe049ce31772d0facdd482557f30cb4382c1d6a0be51927c345a9556d03eed74a3e0d36e28adb1a19b30aa410f38a347ba2a0cc419131af71fa1ad815c02020000",
    ],
    [
      "ETag",
      "XOCxrcVxz0dQ+u5WrIdDrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:56 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-123-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553eb6e9b30147e15e4fdd9b45c80249044aa3a96b28d28252d21adaa694a8c31cc2d606a9b4e519577df01925e56699590007f97f39d63fb11ddb122465314b1f4bea262f7e19647a883a8c229ac5a23615f7ed6e7ee7c503873c79be7b3eb4be7e40418ac56499c9719ed4a5e0942e574bdeaa5825725169c77c1a86b9883ae6199ba6d0df589659a160825cd92052bee40fe5ba9524efbfd63f15eca799a515c32d9233c7f5aef3f98fd52f05b4a94ecbfaed98732b2ff4ed5d38c13ac182f4ed62b4850492a3634c72c830ccfd238faf2dabbc770de4b81fcc008c584f0aa50752eb020bc48585a89c6154d1f5193f3c5075ab90b77166adb02e774ab61a96d3682ca2a531d6dcbe2c34a79a77d0b96e7daf6e02eb7daf50f3770b596e3f9dadaf7dd55a87d3cfda47d0f96eb0bedeb4d83750ece9025a652b1a24912e228a3758ac3b4bcb79b540bb0c292b6e0c6d62d6c8cf54994443649c6835194e8348ac6913dc283482793211dc611c5a053b57ba3c2052f0c4c0d6226861147980c0c7d341ad9893e1c5b668c937882135d27b61d0fd0be83fe08a6e819932597ac9d18ba0ebcd0dd84c1da9f39a1dbb4916018cf591bae6ee2654e054d02e93f7ded6b9471a8548fdff343377066a177e5b63bbea02926bbd53dec79823349818d054c505171ce63181aba58aebcd05bface0214cd365e1c19124d7f3e3e0bc25dd94c59356fe4048173031a2c04defd83410e6b88f6fb17e5ae7056359486dffcb5fe0f2d800cb4ffb587a783e034b77ee872ed0637a85d0a6842052dc8fb3b0de40678ff561e6f0890e18e401da9e01f0e1691751522687bc058de246cd5a6610d8c096ac842bdc14696719c64ed513bd29c16ead0527b439ad9d450259f4800c2b9f03dff3ba07f01601cc68fa3040000",
    ],
    [
      "ETag",
      "65r7Q+0JEJ3nAJAIJmCWQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cd",
      "6ec2301084df657b6c22415aa50289035408a2225a021caa0a45c65942c8cfbab6438b10efce3a546a0fbdd8def537eb199fa1c8eb14fab0cdb3cf06f5e92e43bb7087184d535ac39ba2da20788056644c96d3a8b8d7c3fcb5f8def67a8bfdfb4b3aa98783011346eeb112d03fc32ec73235d0ff38432d2a645992e8762263f6a45c67b98aa3f984eb8a5257cfd7b3d970341bc3c5fba352c5af229aafc69371fc9f6473f1e040db1877a8b196e84c284d07943672f98ca85489bea1464b34d0c2ed45a6a9514213f9dcf1bbc183df0d83ce53f8d8e98541103259921436a79ae1f592cd81252bca98be381f7419d0ed91a3eedaf5e89e6b14eaa4c24c2492b46a231d5b9c9d6e7e468c4e16cd9b263664d079e9dc7c3d93f36a3983d50d7a2005ffeb34b7b7fa7205fc59312ab4010000",
    ],
    [
      "ETag",
      "lHIk+rAiOkxb99QhYKdGnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:56 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "0000d0bb642d0ef231a5bb06c74f01b5e163cd2683212285040cd481747af73a3dc27b3f20678cf73d1dda9a4bf00aa6dcf2e66c1e742f8896acecf03649e37bb4d26a5cc082c44bfc75f4cc53c5f63761af04ae839a9c76437e13dd7b143fa0f17671f34313c214177641ce0e692cd5c3ac97e6a8421c06f943ca859fde47d41afdda1065d69c9b0d5c22efc33cfabe4fb6c7201896250e2473a3446b41434bb0f25e4c8248745ef93b7724ed3ecd5ad4eac3213174ec7c238e121ca572935cb5bdcee895d6f05259d0190bd369a74f5308acd7528119e0635729ded3eac9b55dcf9b817f3b1da68e3f0310cf1557e0f70f372ffafa1a010000",
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
      "Tue, 11 May 2021 20:16:56 GMT",
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
      jobId: "grouparoo-job-124-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535d4fdb3014fd2b91f738daa6699ab495aa5195009568cad21434a629b29d9bcc90c625769800f5bfef3aa10c84349e62fb9e73cfb91f792677a24cc9843091dfd7503d7eb9958c1c11d034c7d7b32726bc27e978f5cd0d449769fdb52a07f9748a0861588a6e77057494ac2b0e6ab25977f34ad63b5a49d9c1449dbee376fa9e63fb9e6b8f3dc7f190a8a0c82e447987f4df5aefd4a4d73b88777329f302e84ea82e97dbd7f7de83d3db55f216b856bdf79a3d9451bd4f54bf1592532d6439ddacd141ada04a604b45811efe515376fc3e7757d06d3747f083e040399775a98d2f4cc1659989bcae9aac64f24c1a9f6f0e641d5c04f3d8e2b2a8b76552d22d1c5929d534d18f3bb04ea3d5d25a84a7ab68398b17ab3059cfcf83e5ac3b5f5d6c96e1daba3e0fa2c0d29415d070ada975dcdc42bca07e0a4a8bb2518fcdb3517ee9d0e2e3600c01a515b4c1c4b73dda1fd96396319f67a3c1906536303662fe900e98cdc72eb829038abc46b461d152969c79c0dcc12819d07498b8ded04dc68e4f93913d729cd4f647994bc9fe88fca9848613a1765289b643e43a5ac44112479b703e8b83a6848cd6853e698d9902de7ad4582082fe53d3de44854425d3ee451807d16c1e2fae8276c2179053feb8bec71967b45080685a61f334544b9962c348385b0627086e267679082a32f9f94c4ccf8d8b372d7fa5c738406357375fb28ea34578d6d83920ae6851379087f660cac844614cef7f211097b44d42be6f82e807699f22c8a082927f3e4c043781cf7fb6c3e22318571f7594c63bee0e57468557d0ee9068ca7d613b7ddf6e7f554d2bfd21d6f70787ae991c26236ca1d42f25b58b8f95b662b57a056110c71f36dddaff05f590d0247a040000",
    ],
    [
      "ETag",
      "Gzbi6zo26uZZeRPdu+rn3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "10",
      "c7",
      "bf",
      "8b",
      "f7",
      "4a24c232d222f581b4d91a8d265d425e3655c8b50feaced8ae6d524551befbceb4cba675127d81bbf3efc4dddf7f0ee4a7509c64e45e344f1dd8fd8706fcb710acc175d23b7c19ad1c908880a70d92974daef85efafa691a6fcfa789b9fafe75d35c5c20e1d803b4946407520b90dc91ecc78128da02b6312dbb56557d1611bf37a1b829d78be517cc5bcd43bedc16453e2be6e4189d1a39f5b4eaf977b4dd1d23f2a8efd7508305c520cc62ac7e04e617614d475b2361e474671938d2c3fd41637567a8d57a8495d138998cc669124fd3497c9e26498aa4d48c7aa115c2db0d0e48bcf654aef533ae49c61f91b07d8c2bd7fd738775c1fb5542b85896e9a49ff06f8032a63be5ab41b016d6f917f97e83af32fc4b4afa4e10ef4ac821a801c5c10e51c25494730bce0d92da55d49813365bad8ab7aa286eb5e0c3e04e0c00d2ef4ec0e76295ff4f5a74d81fadaef272fe86701e7d7342cac5cd7c53e637b781bb7b35c26cefc1dd5a8db672101c358e27679fa669fc62b24b1d8c87dfc9bced20228ce2bf722d3cc96a2a1d1c7f0181d12f2889030000",
    ],
    [
      "ETag",
      "CgAndyltfq70U972pDZKSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:57 GMT",
      "Server",
      "ESF",
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
      "d0",
      "4b7282300000d0bb642d0ea258e88e283fa17c1474e8868921080a69f805c4e9ddebf408efbd00c298745ddaff3c08059fe089247589970e53607a237d5ceb39e2934393e8028b93a7eccbb317ba9e54adb3d99b0d5fd6a2ccc8a3cc6eb8b8a2eab1d80c301c540bafdc5d328a620e676a85d0ee8f44434a7d97bf5a65da17be999542f464152b463599a44d3c509d57ee51103477dae69b13d6af075b0a38eeef303464616e83f43b624a575e1ac18425aaa6c6373f124cb7cab8d31e5544f088b875a56d96c7ced959ef06d130c3fae6df7966ea018507c6c1029089952de9d2f2cd5dcbaaba00fff6b47f32f20e8004b5a405bf7ff51ea1571a010000",
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
      "Tue, 11 May 2021 20:16:58 GMT",
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
      jobId: "grouparoo-job-125-1620764096226",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2bc8fbda3c48027948d11aa5748d14c80aa4d5344dc8980b750b38c3a65355e5bfefda345dab4aeb276cdf73ee39f7c13379e075461624e5c5ef169aa72ff722256704142df0f5fa3672e87abe9b3facc1b9f3f9c4f5eb6cb55c22826b96a4d5a1849e146dc3402ef651bf68447ba08d103d4cd4b3474ecf7647c3a93b19ceddd1c845a28432dff2fa01e9774a1de462303889f70b218a12e881cb3e13d5ebfbe071343834e21e989283f79a039491834f54bf968251c545bddc47e8a095d02450515ea2877fd42c3d7f9fbbcf69d52f10fcc81950c6445b2bed0b533051e7bc681b93952c9e89f1f9e640226febad638b89b2adeaa4a6159c59195534514f07b02ec39d6f6d82cb5de8afe2cd2e48a2f595e7affaebdd76ef0791757be5859ea5685a82e15a4bebdcdc02bca07e0652f1daa8c7fa592bbf7468f371309a80d212ba60321dbad49e0de7699e4e593e1b3b693e84349da553878ed3219b4f6092a5409167440d8bd6a276f3b14d53c893394cb36442677642c7b69b0cf39c65333bcbf4888f67e44fc3155c70791092771d22b7e126f69238dc07eb55ec991272da96eaa233a60b78eb51618108fa4f4d471de5029574bb3741ec85ab75bcb9f1ba096fa1a0ec29fa8d33ce692901d1b4c1e629687c9161c348b0f2bd0b049b897d3f052559fc7c26bae7dac59b96bfd2631ca0b6abcc974471b809be193b27c40d2d5b0379ec0eba8c9c97daf4f117027149bb24e47aef853f48f714420e0dd4ecf36122d8043effd94e8b8f605c7dd4910aefb83b4c6a15d640b743dc94fbc21ed933db71880137ea436c62dba7aee91c3a235450ab9792bac5c74a3bb156be823088e30f4cb78e7f01372ad3027a040000",
    ],
    [
      "ETag",
      "QWS5aC9O9kCe5hMi46MndA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1620764096226"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da",
      "30",
      "10",
      "86",
      "ff",
      "8b",
      "f73548c068ba45ea07e828430ad0412a4d9aaac8b52f995bc7176c078610ffbde7b463d33a29fd92dc9d9f53ee5ebf39b22765244bd8832ab70dd8c38712fcb710acc135da3b7ad5681cb08881e72591cd365bec6e8a91bffe3ead8ad9d37efb6b76d85f5d11e1c44fa8384b8eac50a0a563c98f2333bc026a13a89bcae46d16317fa8437193ade7cb19e515ca902fefd2743c49a7ec149d1b25f73c6ff977b4dd9f22f6880f6b28c082111066a92d3e82f0f3b0a6e355ada1e7b0b1021c6be1f6a0b4d8d4dc22f6a8d21b0c2f7a8378d8bf8c47fdcff1701813a95170afd0107cb7a1019947cff51af7b4261b7c24c2b631ad5cb4cf1dd5956c5709e17c99c5a376c2bf012e0436c6e79d60a1acf32ff2fd065f65f897d4fc9d20dd95d25d50094682eda2549d73292d38d749a2cb795d9fb1c96a95be55c5488b4a76833bd50168bf3b0337e96afc3f69c9617fb4fa32cea66f08e7c93767249b2fa69b6cbcb80ddcfdab1126070feed622d9ca4170d4a03ffa747119f75f4c768dc178f49dc4db06222638fd2b5f956749c1b583d333934132f989030000",
    ],
    [
      "ETag",
      "uqTMvFf4tCXEmfGkwqxGyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 20:16:58 GMT",
      "Server",
      "ESF",
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
