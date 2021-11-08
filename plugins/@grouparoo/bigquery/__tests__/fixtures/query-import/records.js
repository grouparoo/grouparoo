const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636335943877";

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
      "02ffedd3db7243400000d07fd9e7302ea1f48d885b524292522f3bca762be2b68b20d37f6fa6bfd19c7f3877906619a214f64d896af00ae65450d98cddb58a6ee2a273378d768d303e0cb66c1c73ebe6e5074ff03fbc75e94f7bfd1d8eb4481b4c398d6c5d41e1a638b2accfab1bc5b594d8451949d0b3b381bf28e6a25562a86aad928f4ad8374da18f49a854b5c3187617aecf2166dec8d5dc27ee3e30b3e4b29cf8d9e0cce0ab7ec17ebc04bb8581635b5fe2d3e01ccedb8deb4c15f10dd597d799136042b952176529b68eb4ca775dcf2fb71c337d8b041e87a7a9ac7104bfd9a7a7ff0bac009ada82200a8bc7765152d515f8ab0ffbb9458fff3a4a0922e0e7171d4feabb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1636335943877",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85525b4fa34014fe2b64f6716d01a1409b985db7e20653db48e99a3e35c3706047298333834d63fcef7ba6685763a26f30dfeddc9ec83d6f0a322139af1e3a90fb6f772227270434adf075e7aca5bebad905d3fb2c58f8df8bf2f68aeecece90c18d4ad16d5bc340894e325093d5725849d1b5540a3140a3813b70032ff0bcd1d8f7a230449982ba9cf1e61ec57fb56ed5c4b65fa3879510550db4e56ac8c4f6f86e3f9edaad1477c0b4b2df27da18a2ec4f337fd48251cd4573b65a627ea7406e604b798d15fc1716f9cff7ce434eb7c30ac98f9c01654c748d3655a105134dc9ab4e1e5cc9e4891caa7cf34196f12c9e66162faccb74716d49604216ca5aa417716afd5a1be07c39b566c9759259aee338d6e2f27219679683f60528cd9b837946f31a8cf14bfbc9c7991b01d554410f6e4227a06ee48cf3320f591979a3bc7420cfa33c1c512f77d8d807bfc881a24e1bf7838a36d852048e1b45118b3cea871130efd4a16e19b93e1b97a1e71794d1085fc8f309d949aee182ab5628de0f81dca649166fb274359f9e67f1a18d9276b5bee88b334dbcad53639348faa4af678372814966a2c93c8bd3f36996fc89fb25cea0a26cbf7cc03596b45680745c7eb66f715ee46615a76bd23fa5508284867d3d47241f80af4ef8f5a0908a2785294ae33f2e8d2993c124f4cbe35b53cb513d1a8dcd7a912cf5072c8802c48e87641c610b8d7e69a83f28f2fc12d6a92309419cf93c99ff46f41ff9f77f07ce030000",
    ],
    [
      "ETag",
      "w0YrtJQw6CkT6O4+dfWJaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636335943877"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91516f82301485ffcbdd2b24228a62e2c35cc8a671c6b1996c597ca8706538e0625bdc8ce1bf7b8b7b58d297f6f6ebb9ede9e905bef32a8509ecf2ecd8a03cdf65a85f4c11a36a0aad78aaa952080ea016192bfb61b03806c3def35ae06f7d8a3f3cff7d914da7ac50c91796022617d8e758a40a269f17a84489dc96a72cd0e7dad4f3d55bf418c50c4a4a0d586d96cbfbd9328276db3a70a05d8c7b945825680eab251d30d173e35389b22ed055d4c8041574e26e2393d4d44212b94c5ccff5023ff0fd6138f0c7a311eb0a4a84cea962e9e615f8164d5a1431fdb04bf07aac905dcd8ef7dd7832bc33f49ff42de25b646091a145028b8c2c32b648681176ce68fbf79cd959a35a4be268149a547ab7841ec8a4a6394d2d1b742011fc534fb9beaddb2b16045ea106020000",
    ],
    [
      "ETag",
      "296Jq650MPaexpvRY13XJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:45 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd34b7282300000d0bb646d198c14a13b408314ca5f65d83011028d223024d860a777afd36bd47787f70d705912c60ade5f4807dec08ca12e95923b68266a1a87d6aba4d68416c4e664c58e15ccc1323cf42d8a2372a43c9e521ff373e8316b8a2e5564a93d5c17f3969e8cc1bffa4c731d6f7b3356022a874983d37da6cd3d4cbb5da922fd4c6e45bcdfa4f08e4739e932641d217e91c52ef3ed6a4d71706d4da2e776e5644d580d6a516d7421ab5f751e2e439429bc3b29efa8c1ae607b47997bce3f32e31463dba311f28241864b1a6d1425b94ed9eef39033396da5a7a7ff0b2c0011031d092be863fbea55d717e0af7ec1e7813cfe9b048f64043fbff0d0741219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1636335943877",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4010fc2be8fa1a1b6c30604b569b3aa4a5751c19e336798aee8e855e82397277a4b2a2fcf72ee0b88922253cc1cececc7ef148ee4495911961a2b86f40ed3fdd4a464e08185a60f4e7bd163fcaf22a83f50a02f57d5d5eadaed6f339668896a5e9ae2e61a065a338e8d976332c946c6aaaa41ca0d0603c18f9aeefba93a9e7864180340d65be14d51d92ff1853eb996d3f5b0f0b298b12682df490cbdd316e3f8ced5ac95be046dbaf1d6d34d1f6bb9e9f4bc9a911b29a6f37e8df685037b0a3a2c40afe1333f6e5b5f250d0ddb0c0e407c181722e9bcab455a10497552e8a4675aa64f648ba2a5fbc904db48c16a92532eb3cb9bcb01470a9326d5d266751627dbd6e81d3cdc25ac617716a8d1cc7ba3c3fdf44a935c5070d32d046549d7c4a5909adf46100f1dba9b7046aa8861ebc091c9f8e4267ca7216f03c74272c7780b1900513ea32874f3df032061479a655ef58b49215a393319b3821f82ef5180d826930ca478cbae0e7e3d0cbdd2c74b3f1c4234f27e4af1206ce84aea516fd18c8ef244ea39b34d9ae16a769d4b591d3a634677d716d132feb34d82426bdd3d7538b0a894eed4ce3551a25a78b34fe15f56b5c4241f97e738f8bcc69a901d371fde9bec67991f5364aae491f4a20070515ff788e98dc011f1df1f349612a1e15ba6883dfb834ae5b0faea05f9ed8b5b51cd9fed8e97e0143957983b99e8fd8f1945a45d841650e0df527459e0e668d3e262188335fc5ab6f88fe038038b9bfd0030000",
    ],
    [
      "ETag",
      "KqsiJllXdeQNe7rHQlXNXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636335943877"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "8f",
      "dd",
      "4e",
      "83",
      "40",
      "10",
      "85df65bc85d88afd91a417d410db84340a36468d17db658a8bc0d0dd250d12deddd9daab9d39f3ed993303fca82687100eaa3875a8fb9b02ed8b2b52345d650d3f2d3506c103b4a260b29c65d3d36dfa2e969b4c88e87712bdf51fe7d58a0923bfb116100e705458e506c2cf011a51237f533903b66f5dbdddbdc64f71ca424db91376fb2489d6490ce3d7e8414987148fa8b191e8cc5a4d254abb75398da8db0a7d439d9668e0025f0685a6ae159ac867c5bff3a7f3601e04b387fb60b958305791145651c3e83e03de62c98a2aa533a784095cfb756fd13c6b626f83f975c2868fe4d65a8e6375871e48c1a76e94fdefc73f1fdf995e47010000",
    ],
    [
      "ETag",
      "j5S1q/RYa8HSaaAz0AWyZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:46 GMT",
      "Server",
      "ESF",
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
      "bb646d198c14a13b408314ca5f65d83011028d223024d860a777afd36bd47787f70d705912c60ade5f4807dec08ca12e95923b68266a1a87d6aba4d68416c4e664c58e15ccc1323cf42d8a2372a43c9e521ff373e8316b8a2e5564a93d5c17f3969e8cc1bffa4c731d6f7b3356022a874983d37da6cd3d4cbb5da922fd4c6e45bcdfa4f08e4739e932641d217e91c52ef3ed6a4d71706d4da2e776e5644d580d6a516d7421ab5f751e2e439429bc3b29efa8c1ae607b47997bce3f32e31463dba311f28241864b1a6d1425b94ed9eef39033396da5a7a7ff0b2c0011031d092be863fbea55d717e0af7ec1e7813cfe9b048f64043fbff0d0741219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1636335943877",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "9b",
      "40",
      "18",
      "ff",
      "57c8ede36cc1428136319bab7461a93552aaf193b93b1ed855cae1dde1628cfffb9e03ed744bdc37b8dfdbf3f644ee4453903961a2baef403d7eda49468e08185ae16bb12e763f76cde7c57ab24caeb7f515bb5f5d5d9e9c20435895a6fbb68691969de2a0e7dbcdb852b26ba992728446237f741cfaa1ef4f67811f4711ca34d4e54a347728fe694cabe7aefb1a3daea4ac6aa0add0632ef78777f761e2b64aee801bedbe4f743144bb1f667ea925a746c8e664bbc1fc4e83ba853d153556f04758b0afef9dc782eec715921f0407cab9ec1a63ab420b2e9b52549dea5dc9fc89f455bef9209b64952c724714ce32bb38771470a90aed5c646749e67cbbb1c0e966e1acd2f3347702e762b9dc24b9e3a17701da88a677ce29abc1babef49efe3b702ba0866a18c0dbc80be971eccd58c9225ec6fe94951e3016b3684a7de6f1590041c180a2ce58f75e451bd9f069e8c594162c8ccb300e6849237fe2852104b3491406d3900731ceb220cf47e4971206ce846ea516c304c87596e6c96d9e6dd78bd33ce9db2869579bb3a138dbc4db3a0d3689a40ffa7ab6a8909864c799aef3243b5de4e955326c700515e58f9b7bdc61496b0d48c7cde78f2dce8b5c6e93ec860c4f1994a0a0e1ff9f23927be07ff7fb7a4d48c57bc2146df01f97c6b5cde00a86e589bdade5a00ee368467ab2327f6391e759e7c3155947d843635e1a1aae893cbf8475fa40421067be4ed7df11fd0dfed680d0cb030000",
    ],
    [
      "ETag",
      "dNdjJjn+CN2FEWUlVbqLVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636335943877"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "30",
      "10c7bfcbf9caa2d809b28487cda0904c02539e0c0f5d778ccd6d37db4e43c8bebbd7e183092fedf5d75f7bfff60c9f4593410069917f75a84f3739daad2b12345d650d4f2d350661046865cee62cbd15a23cce96dbb099aafa35dac8e7389ccfd930ea88b584e00c8702abcc40f0718646d6c8c78a8c057b6a5dbd5abf2f5e1609839a3207d6bb380ea37801fdbe1f4149698207d4d8287497b59a4a5476e5721a59b7157a863aadd0c0200f1bb9a6ae959ac863e2096f3c1113211e66be789c4ed9ab48495b50c3eaee0db88b252bab847e3825f82ce8a1e4c08761fc663c1ef2fc27f757445c11df91fd5f83e864d16c347158832ee7dd25f313b977587e9fd51d8e4049febb65612febfe1797be7eef98010000",
    ],
    [
      "ETag",
      "9b/33jh9HQAn7cmMBPaFLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:47 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd34b7282300000d0bb642d8ca2d0a63b40b103f8a998a06c32010383443ee14fa777afd36bd47787f70d6814b1ba264d91b11c7c80912a508e64a77c37ac24258b589788ba0d878e7a9c9b536270e78bda85f08d83e31ca7eaf2e854e2aeb8d5d8ea129f6cac5898996a1e9c999efaa8ec935aabe08446b1355b9cddafebf3108ef6d54bbdf26dbf0d2a088567d1f6617eba92ad399b70d75ab7f0deaf63e61f7b5e2cb41a11aacda57d8afb863ee2dbe4ce4d9eb0e0205dab36df40648c94bbc30eafb4584d94523a77931eef273fcb06bc4262874cb20e08ba703d905f5efe2f30036c2853c16a923eb72f550867e0af3e69c6923dff1b8c0a26c0cf2fec28287b19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1636335943877",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8552ed4f9b4018ff57c8edab2d505a689b984d5b342cb5dd28dde2be98bbe3815da51cde1d6a63fabfef01b4d398e837b8dfdbf3f6446e459992296122bfab41edbf6c252327040ccdf135806a72fea87efcb914dfb77715a5423c84f9e9293244a3d2745715d0d3b2561cf474b3eee74ad6155552f6d0a837ecb9bee77bde6832f4c64180320d45b610e52d8aff1a53e9a96dbf44f77329f3026825749fcbddf1ddbe1fd895925be046db6f136d0cd1f687995f0bc9a911b23cddac31bfd6a06e6047458115fc17a6ecdb5be7bea0bb7e8ee47bc181722eebd23455a105976526f25ab5ae64fa44da2a5f7d9075b80867892552eb225e5d590ab854a9b656f13c8cadf3eb06385bcfac45741525d6d05a5d5cac43fc40ef14b41165eb9c505640e3fadc7bf47ee08d801aaaa1036f02c7a7eed899b08c053c1b7b239639c0d8980523ea31874f86304c1950d499c6bd55d152967ce0065916041e73b3a1c35340923f72fc01d21d377361e08f7d4629399c9007250ccc85aea416dd04c8ef384ac29b24de2c676749d8b691d1ba30f3aeb8a689d7751a6c12491ff47568502131a91967b44cc2f86c9644bfc26e830bc829dfafef7087192d34201d379fec2b9c17f9b909e36bd23dc5908182927f3e4724b7c067f7fb724d48c57bc2146df01f97c67593c11574cb13bba696a33af05d9fb46465de61c17880d8f18a1a47d841699e1beaae891c9ec36a7d242188335f46cb4b44ff01c7489843cb030000",
    ],
    [
      "ETag",
      "7ep9BxrPZGiJjqpaaiiwEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1636335943877"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c1",
      "6e",
      "c2",
      "30",
      "0c",
      "86dfc5bb5289a9b405240e30551b1b435b01ed307108a9db95b57597b8208478f7396587495c12e7cb97f84fcef05dd4298c6157e43f2d9ad35d8efcee8a046d5bb295a9a1da22f40059e562eab61aad46c7e090c4af1f3b8e9a4dffe5793a998861f517560ac667c80a2c530be3cf33d4aa423956a422f0a971f57cb98e1fe3444045a903cbcd62319d2d62b86c2f3dd8d32ec10c0dd61add658da13d6a9ebb9c56554d899ea5d668b4d0c9dd466ea86d9421f2847803ef3ef443df0f46037f1845e295a41517548bba598174616255267494943010c174a504cebaf12038e8f2fc27e10d896ec8d091ed5f83d989d1be1992b0165dcefe35f303b977b0bc8f4d8b3dd04afeeea9e0ebfaf20b2066f3cb98010000",
    ],
    [
      "ETag",
      "cum9S9w5vREMWbt7pU0KJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:48 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd3417282300040d1bb64ad0e4651d39da402224c285810370c424c112129898a38bd7b9d5ea3bef5dffe07c8f29c4a992a5ed106bc817b06d1281f6dc4c23019b30de195f7ae8763ddeeeb247947aa4e179ab3279bed382a39f4b590284d86c1854dea5bbcd43c2b5ce6c670b1bf38cf4e9de791db91b80dae49d12fdd829b564da3949a53acdc55c3f21b6e25fb6a92f05b2087a9ed29ecaa537cdba868d65b762ce8358842d7f7c58aee6672ad67a7c3c7cebf92630ccda6e095449cb96d3e712a42a827fb830e31ae7636e6d3717cfef4e01113ccd1705d177338b7462f2fff171800da89b2a5322d9fb74f748406e06ffd54dd057dfe6fd0aca52df8f905e58c37ec19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1636335943877",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85525b6f9b3014fe2bc87b5c1348200122555b979209294d34209bfa54d9e6c0dc124c6cd3adadfadf7780366b55a97d0af1773bb7077223ea9c2c0813e5a10575f7e95a327242c0d0125fd57636cfe1f352ff9d15f7072fbe80fb49549e9e2243742a4df74d05232d5bc5412f76e9b854b26da892728446a3d9683277e7ae3b0b3d37f07d9469a88ab5a86f50fcdb98462f6cfb397a5c4a5956401ba1c75cee8feff6edd46e94bc066eb4fd3ad1c6106dbf9bf9a5929c1a21ebd35d8af9ad0675057b2a2aace0bf30675f5f3b8f05dd8f4b24df0a0e9473d9d6a6ab0a2db8ac0b51b6aa77258b07d257f9e283a4d13a5a6696c8ad55b2bdb01470a9726d6d93f328b1be5d76c059bab4d6f1459c599eb55dadd228b302f4ce411b51f7ce19651574ae4fbdc76f07de09a8a11a06f0ca77e6741238212b98cf8bc09db1c201c602e6cfa8cb1c1e7ae0e50c28ea4ce7deab682d6b973ad4e7dcc31f98062cf49c9c43488ba070a6ccf1a6a10f0c426f421e4fc81f250c9c0bdd482d8609905f499c455759b2db2ccfb2a86fa3a06d65ce87e2ba265ed669b04924bdd3d763870a8949dd38e34d162567cb2cfe190d1b5c4349f95d7ac01d16b4d28074dc7c76d7e0bcc88f5d945c92e129810214d4fce33922b9073ebadfe76b422ade13a66883ff71695c77195cc1b03cb1ef6a39aa836930273d599937981b86881dafa873843dd4e6a9a1e19ac8e35358ab8f240471e69b78f31dd17f2aa84f80cb030000",
    ],
    [
      "ETag",
      "rO56de+Csx5fzq4IMez1Eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1636335943877"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff4d904d6f83300c86ff8b7705a92deb07957a582bb6b2b16a63f434f59082616901b324acaa10ff7d0edd6197c479f3d879940eceb2ce600947597cb7a8ae77059a775bc4a8dbd268de1aaa3582036844c1e419f3e7edebfa58452fc924d924fe63182e2eab15133afdc24ac0b2835c629969587e76508b0ab94d660c986b63eb7097044f41cc4145990d76fb287a584701f487de81131d63cc51619da21dd6283a616a42eba945d594e86a6a558a1a0678b82814b58d50442e27eed41dcfbc99e74dfd7b6f319f3357522a8ca49ad1fd07f02b868c2863bab0254c185043c9c2f9b0fe70ec0f3eff93f1c84687bfeef5d5a07e53c4261aadc4e826b4212b6958dea8161d48057fcc569adbb9ff0550bbe6f275010000",
    ],
    [
      "ETag",
      "kefJHMBbmLKT2TCT9FII8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:48 GMT",
      "Server",
      "ESF",
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
