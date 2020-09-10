const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1599751512501";

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
      "0000000002ff1dcfc97282300000d07fc9d93a651192de700650400b48b172c9b0842d0d6b24d24effbd4edf1fbc1f90e6399967cc7b4a3af006d65446db7cebf6702f8bc29d735464f35869ed6af9f09a59420f44732e4cdb6eba40397efa5ecd82965b2156179adda20c1b5245bf192b85e08647bfaec9f98e5ca3b7c3a6f6098e456bb89a9354a6ab4bf2d2a3f22e69c3bac4173f52db5dd91fb21a9ae69ed58581876cb45e1064caf0d12135725abeb4b04b4ffd8dc2579bdae37be97a837cb16abe260ed10e8915eb4746ab503f09b001e43134139971f39c293b8436e0bf89f93a90e7754fd2894ce0f70f179a5e3a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 10 Sep 2020 15:25:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-1-1599751512501",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d546d6f9b3010fe9e5f81d8d726401af252295aa394b69112d211d2ae9a26641b43dd124cb0695555f9efb34d4260a9ba7d02dfddf3dc7377f67db4344d7f2169a85f683a24f1b6c0f9fbb7670af533e9c11cc4d2e3bd58f6a3d98f0c73bbee3df4b76ff73f6ffcc9785c46118566609325b8cd689123cc2ed6ab4e9cd3220339a56d41d8b6da963d1a0d6ccbb6bab66995508693684ed21749f0c479c62e0ce320a313531a271864847510dd5476e3b56b64397dc68833a399d5108998f165deef094580139a8ed7ab5243c1701ee00d208954710487f0b2c9de2160d38945f42b411820448b944b65250da26944e22257e482e94318855949ae8e3583be72e6ced4d7104d8a4d1aa46083cfb4107010f0f70c6bd7de72a1cddceba5b798f8b3a51baca6b7ce62d2992ee7eb85bbd21e6e1dcfd138800956586dac5daa932b0e4a91ca1662c649aa34f9d25b5322bcfb36ce3e1960452149842a86f761c1c0ec036b688e600407281a9edb303231844338b0c13934d1a8877b21c4a0cea0949578908a4601138423bb1fd87634087ac81c0410c16ed0eb8670648b2985a3a1be47efaa5ade72c2f11561196564df64fdc19bf94ee07b6b773af19d7add1128127e552a6f56dd28878b06d5957ed5921345594ea810a5c639737dc79b4cfdd97d4d86b85b731c03f4bedacadb158184e1231ae462561ce70b1acac1e8ee64e15c1dc1eaa6dc1d829888f855e93c962302e5fc552d27f36fe6f1c5c56ab4a29c4d69d557be37736ff49a73f739cd3d488a4f785ef7663d13dd7a121d660daed6df7fbf5bb51cba78aa7b79fa8fb5e33d4aacf2498f87239ce3141db3fec7d595c0d2fdef4524a20f7b4102c46aa8d2332ecce21121764c8e725c3e295236be2214dff303a100e6fc24a26ff5ab8893dd2073e10d4ef9a115e58e28fbb86b482a6a72144cede9b5ebee67b86bed5a7f00685831c4de050000",
    ],
    [
      "ETag",
      "Rk15Y06f/0qU4W6qwVXGTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 10 Sep 2020 15:25:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1599751512501"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "c230147ddf572cf51522230cc58487a9a8449c0ac3180d2165bb1bd36e9d6da741c3bfdb7603f6a25922892f6bef3de7f6e4def6eccb304df41aa7013a31d1228ede7260ab8308c4bdda8c81e74470b96434e5801a8a0d02478a7df8e4b602e7ca7e140fede967dbcdd3ce3571fafd82c5fd252458f2be6424e330061270193febd82cf31a4b7102ea449f923c49e73a6cec60b1ca343cf1c643f7b28a2434d0883b1d8d9cd3d10095d0baf1b34880059eeb23ff26a1d799518aa117ba1843080c521f765d678cbe802f867abc1c27198126a739f3819722aab0802346f30c334a9b32d5b49a96ddeb1dd9966db5ed96b56113ea6311d354154c27682b2fa8c0644c3fd48451b7b8025684c5c037934061e50eaa0392d0bb2a8e03b4cdad1bbf1087aed7ed54b8e56e66542a6babca41853181f93fa9cb1b5962f9c0eb6997af644fe238a1792a6a4a5f8c6e9d3d362ecd50b7e973c71bec4b960b69859abadef06630f19c9bbb1fc5e577b633c1e94a00bf63545a8c833696d5ea1cdb47dd16da18f58c2a230ae553c172d0691fcb1fd6552c642ec48483b136be01c08e868c1c050000",
    ],
    [
      "ETag",
      "/ZN0dAH5XtV2Uz2Nun4KlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 10 Sep 2020 15:25:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-2-1599751512501",
    },
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
      "8d",
      "53",
      "5b",
      "8f",
      "9a",
      "40",
      "14",
      "7e",
      "f7",
      "57",
      "10fad654b9282026a635ae6d485c9b45dca64feecc78606717189619766336fef7ce8022c666db47ce39df65cef978ef699afe4cf39d3ed1744c93970acafda72786f52faa030225aa33f7d79c596298c7e83eb29e679965bbe6dd74da4cd11acd5156a4d0e7ac2a09f0c9663d484a5615a864ac2f09fb76df727cdf732cc7b21dd36aa01cd27849f36745f02844c1278671b23148184b524005e503c2b2b66ebcda4651b22720821b97aa8614e2c687ba5f534690a02c9f6ed68d878a43b9850cd154b9388377f8db25fb80a26c90c8e9574a0011c2aa5c28670d0d61794c93aaacc925d3bb2cca726db9fdec14f4f562b99847da67ed7bf8f3567b28a4c623e2c01fb465701b449a65d6c43568075cd0bca68e104ea14328bbc76d047fb9434ba1489090fcc7b1ad67bac81a9b3e8eb147e2f1d0c1b109188fb1e7a02136893f82d10e03ea3208a5dde051ce727b8487d843264624761d67ecb8e670e7f9e08d4cd7b67743df19597eec62fdc87068dff35652013794178cd3e3bef45f61102db651b859cd67d1a2fbf61855a9b869dc5fbefce249422ea9ebf6a3b55c392a4acaa4a9fa32c12a5a84b37914dc776cc8982c214164bf7e51418951caa1d7e1d065d8a27da14ea3df6d16e16fa551f7542784184ac8c9f972ff7135056cdafffe95e4f429d90a20c3ddca7321cb323f849fc549094d9a68563b6e093dd3764e8412588aeb097b7c4ae675ba951664908bd32a9a9437fb3e5c58aa3a766a981a97",
      "d75f05ab1fb5f9dea1f70757c730a1a0040000",
    ],
    [
      "ETag",
      "C9Sso1t3nfaVT1kAm1260Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 10 Sep 2020 15:25:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1599751512501"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffd557516fda30107ee757a0ec95203b21044fea43d8328604b483f46942930906c2429cd9ce5a54f1df6b9bd0a2894d6604a97d21f1ddf9eee3cb774eeea956af5b3f936c6e7dac5bb364f9ab206cfb6149c437753326bc480597979c669c580d154d045eaae8db5ed08683f563173f6ea3c970e4b9c56a15dcdceca378bc221b2ce39ee44aae170949e75caebfeb75bdb46b5f863744654ce67a6f6915db5c5bfba328ec85e363d786ceb56b743f1804dd416895ae5de3efc9734617494a7e5cb748c1e2152e99faa3c4241af747bd4b2be00d2d32712aff97c16d105d9a7e8ec549f09f8328bc34371778939f4a1ef587e1240a86774615f4755a2b6b596b3a1b930561248bc9abdce4d35e9358f4b5aeb9ac9b129b53f974082f8ba88d7bf792d122c78c525b9a6cc7861e42be073de878001ea2531a6391d04c6db89f582fe50515381dd307256d0b82bdf8d97ebd97fa81096b71a4fe6382a4ebb7daed5a2fa65da382b88960f8614618db1a6e709ac0341238c0068e0d4cb1c0a6d701be0b116a85e8684f7937ad1d6530260c9ac2f5de0e63c6981563d075db7ea58cf9ef4f63c6983563a825dbb742c64ca5631a17e4f228327d084dd83ab7214d71e88644a055adbc1c53b86f832d63bc5a5a1e40954a0ba277c696295ec5960361cbad942dd3e257204bfea1b31bd118af6a44cf43b04ab24c8fcc6b28eb7fc83aeb8807be5f691f762a7e275e9b2c53bc9a2cd876abfde632856b1a7765b68cf16ab6da1de7df8796fc9dbe7ef777b782f03b46e554c1899e2550dbb70e63c927aac60ea1a612c10aa2cd319673f1d74448db02a79cd476b567962d8eae830f0000",
    ],
    [
      "ETag",
      "OGA61LjxBaxyTSMN53uhhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 10 Sep 2020 15:25:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
