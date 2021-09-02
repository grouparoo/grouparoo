const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1630610295431";

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
      "ffedd34b7282300000d0bb64ad4c54caa73bac201265c2cf821b064304090a85c8afd3bbd7e935eabbc3fb060921b46d635e317a07ef604c96aa4004542beb4d9f53b92a822091237f1e96b60dfbfd79b33fa63b25b52e4b8c82c82c434995cd826067e83e10dc2ad3a9b29c5d289bad9ee66ec35ca87b91a76a231a4ffe652b760fbe5707094eb231d81d8b0e782bfa9c1f7d2d2437b99870cff285893224668514285517d7909f9dcabec64e7d5fba84fb5ea8c5d268a42e2b2f25162df28998d5139d1d4a98983677bbaffa16a6c3c2c3c6ea06b3c4e3c1848df9ea51092f2fff1798013ad4d786b6f1f5b97df5a6aa33f0573fe6634d9fffd7346968037e7e01cbafae1819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:18:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
        query: "SELECT first_name FROM test.profiles WHERE id = 1",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1630610295431",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85525b4fdb3014fe2b91f738da24344dda4ad5c64a36ca58a7a5296c7ba96ce738332471881d1043fcf71d27a50321c15be2ef766ef7e44a5619991126f3eb169abb77978a91030286e6f8faf5e434b8f59236fedb5cfc3ce79fc4fbabdffeed7c8e0c69559a96750103adda86839e6dd6c3bc516d4d1ba5066834f0077e38f242df3b9c8e83918f320d853893d5158aff1853eb99eb3e460f73a5f202682df590ab72ffeede1cba75a32e811bed3e4f743144bbaf667e2814a746aa6abe59637eaba1d94249658115fc1766ece373e7a1a4e53047f28de44039576d656c5568c1552564de369d2b99dd93aeca271f641d9fc58bd411b2d1665bd1129ccfc9f76f8e016d86d889900568e7e2244e624766cedcb183c9109455e799525680f5db75bd7c396a2ba0866ae8c16de485d49f78532658c4c5643466c203c6262c1ad311f3f834802063405167ac7ba7a295aaa251e421d71763e67be37022fc28e059c4c3803111665940b32864d311793820b78d34702c75adb4ec7b2717c9328db769b2592d8ed2b86b43d0b630c77d71b689a775da0920e995be1e2c2a1526d9412e57699c1c2dd2e579dcefee0c72caefd6d7b83d410b0d48c79da77735ce8bfcd8c4c92fd23f2520a0818abf3d472477c05b97fb784748c54bc2146df01f97c6b5cde00df4cb93a5ad65af0e2741483a72635e60d3a9c5f6f7631da184caec1aeaef883cecc25abd272188335f2d575f10fd07a17bbe07c5030000",
    ],
    [
      "ETag",
      "KHJ4w0RuEzrWXVcBf+kZ1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:18:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1630610295431"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "82",
      "30",
      "10",
      "c7",
      "bf",
      "cbed7190886e2e23f10137e34c8c1ba84f8b590a1eac0a1cb6c71642fceebbe25edafb5f7fedfdd21eceba3e4208a92e2e2d9aeeae408e5d91a06d4bb6b235545b040f905521e4d3f88255dc46cb347f8fa3d77b8c55718e6633216cf68d9582b0875c6379b4107ef650ab0ae55aae8de5af2178c05de37adb5db2da2c2557747479b35fafa3f97a01d7c3d58313a509e668b0ced0bdd9183a61c62ba76b55d594e85b6a4d8616067838280cb58d3244be74fcc00fa693d134188d9f1f1f26817025658a35d582eeb7205398589509fd8a2c38c00ca578e7c3fa23ed85d1e8940efff4bc63b41f8664b24537747413782127c522cba6450f3225fff1a6f996af7f077e2f536c010000",
    ],
    [
      "ETag",
      "72qemQuAGbfOQAD+eQagkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 02 Sep 2021 19:18:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
