const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640201494657";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffedd3597282300000d0bbe45b1d15284dff580ab2174489fc645802b21a83b540a777afd36bd47787f70d922c23c3806f9786f4e00d4cc916aeb255ba96d07d3d874e9f4142c5b517efe16be576f9a896e630a77a181968a990b47cdf6346e1cd861b27d625062553ab55ea8df8a0648d78b6c8291f22792e948988214ffb8fcdb43534be0e44d76c836a57bff8f97ddf87c4e278dfd2daae3dd6ccc8a3e3679c34da125d83f2aa7376d888889d4f58553ae63afe36688adad50a1b7b30b5bb31a369a75c84e3ce417c282f25d914e6330a1ad360578e8e82157be58c524f1f60fb850e85bf7a7afa77c0029091568c0cb87a6ce7040817e0af3ebe4d943cfecb246184819f5fa335eca519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-1-1640201494657",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2bc8fbda24a4214f295ab394ae91025981b49aa6091973a16e09a6d8748aaafcf75d9ba68f4d6a3f61fb9e73cfb90f9ec83d2f53322309cf1f1aa8f75fee44424e08289ae3eb968ea6fbbbc130894a95afbfb1f022b8f216f33922b86649baab0ae848d1d40ce46c1b76f35a3415ad85e860a24ebfd31f39f6a9dd77a6ce6838469a84225bf3f21ec9b74a5572d6eb1da5bbb9107901b4e2b2cbc4eee5bdf778daab6a71074cc9de7bc51e8ac8de879a5f0bc1a8e2a29c6f43d46f24d431ec282fd0c12b314dcede67ee72baebe6087ee40c2863a229957685299828339e37b5c94a664fc4b87c7320a1bb769791c544d1eccab8a43b38b152aa68acf6155817c1c6b356fec526f016d16ae3c7e1f2d2f516dde566bdf5fcd0bab97403d7523429c070adb975666e3e5e503f05a97869d423fdac959ffbb3fa7f289a80d212da603cb647b43fb1a749968c5936c1d9663624c924190fe920b1d9d401274d8022cf881a162d4599a6537be4401a3b3064b1339a8ee3a49fa6311bdab6e38c295e06e47042fed45cc139979590bced10b90956911b47c1d65f2e22d79490d1a650e7ad315dc05b8f0a0b8c6dbb8fc00fea3ae82817a8a65bbef22337582ca3d5b5db4e790d3965fbf001e79cd14202a2698d0d54507b22c5a6117fe1b9e7083653fb710c4a32fbf54474dfb593376d7fa14738446d59992f09a360e57f37768e886b5a3406f2d81e4885966fb13e747df88d48dcd3360bb9dabac14fd23e0590410d25fb7ca2083681cffeb6e3eeeb5f39d42a52e11dd78749adc16a68d7889b6a5fd95367420cb856ffc6867d67706c9acea133c20e4af55c50bbfb58672bd6c817100671037cd3acc35f38f6216579040000",
    ],
    [
      "ETag",
      "Ua69yj35bTntgLBcSFRQMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640201494657"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92514fc2400cc7bf4b7d1d09903174090f4311491011c68b8690e356c6705be7dd4d2484ef6e6f221a35d1975bdbfddaf5ffdfede129c923f06199c4cf25aadd598ce6de0613d4656a343f0aca3582036844cc642b2e9ae67514de3fc871dc9b06b365b3ec6f3b1d26b45c6326c0dfc32ac134d2e03fee211719729ba4b4ccf24595396076852d4ec3c960d4e73ca3c8e6a3d9701874873d3838a7c64818b1a8f87fb4cd0f0e6c6839c1152acc25da5d0a451b946660656a911529d634954aa2860aae5ec48aca4228a21a576a8d5ac373ebcd7ac3bd70bd569bb994a43009e58ccea6bc1e1832229dd0964582c780aa42d6bbaace172e2751a5c3868351e8b9d57a5f01859254b4f8932b78dbb5e09ff0811d0df8ce898ccadc9ca8ebe15df0db3876f473d45510f67e10dab04f27241cdcf6a661703bb6dcfc28bdbb33a8c78ad8468dd6c146dd3d6fb5bdfabba997648de6eff84695e880147c376e1203fe4aa41a0f6fd7b1172179020000",
    ],
    [
      "ETag",
      "5gp2txNTQZcPgESAUb2uGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:35 GMT",
      "Server",
      "ESF",
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
