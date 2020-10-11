const nock = require('nock');
process.env.BIGQUERY_JEST_TIMESTAMP = "1602381715270"

nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
  .post('/oauth2/v4/token', {"grant_type":"urn:ietf:params:oauth:grant-type:jwt-bearer","assertion": /.+/g})
  .once().reply(200, ["1f","8b","08","00","00","00","00","00","02","ff","1d","cf","49","6e83300000c0bff89c440a4b897b03225a96b2a4ec170b6c8b1a4acc1ea0eadf1b757e303fa0c0988e239a7843efe0156c85004ff864f38b26a9b835f6323ac3542a7b37e7c5ecd86e1ec22c9d1365d17cff0bd2b253884c6233f3e890a48ad537172fc3a8bc41cdf1e7c028ac9a5447c964a40dfbb60a571bca3edbdbab2854b11a84fa75dc054c16b957f5be7c642e5b2c937f3ebe036f3ebf8d338fa6404b467e67134124b127c4ebee83bcd7c754f2ac35d68d631b09b3ef6e2f6c15b1b387bb927bcdcd8bc001d0b563031d117bce4419c203f86fa269ebe8f3aad162a003f8fd031de2249805010000"], [
  'Content-Type',
  'application/json; charset=UTF-8',
  'Vary',
  'Origin',
  'Vary',
  'X-Origin',
  'Vary',
  'Referer',
  'Content-Encoding',
  'gzip',
  'Date',
  'Sun, 11 Oct 2020 02:01:55 GMT',
  'Server',
  'scaffolding on HTTPServer2',
  'Cache-Control',
  'private',
  'X-XSS-Protection',
  '0',
  'X-Frame-Options',
  'SAMEORIGIN',
  'X-Content-Type-Options',
  'nosniff',
  'Alt-Svc',
  'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
  'Connection',
  'close',
  'Transfer-Encoding',
  'chunked'
]);
nock('https://bigquery.googleapis.com:443', {"encodedQueryParams":true})
  .post('/bigquery/v2/projects/sample-sources/jobs', {"configuration":{"query":{"useLegacySql":false,"query":"SELECT * FROM `purchases` LIMIT 10","defaultDataset":{"datasetId":"test"}}},"jobReference":{"projectId":"sample-sources","jobId":"grouparoo-job-1-1602381715270"}})
  .query({"prettyPrint":"false"})
  .once().reply(200, ["1f","8b","08","00","00","00","000002ff8552db6eda4010fd15b47dab02bee10b48a845e056ae0851c1246a5fc8ee7aec6c62bc8e779d8846fc7bc736218922256ff6ceb9cc99992772278a848c0913d97d0dd5fecbad64e48c80a619be8abfd6af8b2ba0dc2dbde93cdc5cc60bf7dfe3648208d1b014dd9539f495ac2b0e6abc590fb24ad625ada4eca350dfea5b9e693b81e55baeed9b485390a70b51dc21f946eb528d0de3d97a904999e5404ba1065cee4eefc6836d9495bc05ae95f1d6d14013657ce8f92d979c6a218bc9668dfeb5826a0b3b2a72ece08598b0ef6f950782ee0619821f04c7fc5cd6856eba42092e8b546475d5aa92f11369bb7cf541d6e1229cc5bdafbd1fab8bf3de75898a375481baee2da2f328ee59cd2412505a14ad484c590e8dc03166f47eb60d816a14e98a5bdff4a815982396329fa781e3b2d404c602e6bbd461261f0d619830a0c8d38d7acba2852cec2173984f4d4679eab96ee07aa693f823f087a667db89337287d628f518399c91c74a68980b554a25bab0e46a15c5e1365e6d96b3691cb631525ae77ade35d78478dda7c69008fa20d7a1a90a894ecde4a2651caea6b338ba0cbb652d20a37cbfbec775a5345780705c72bc2f715ee4f7265cfd21ddd30a52a8a0e09fcf11c16de1b3537d3e1c84e2e9a08bd2f88f4be3aaf1e01574cb13bba69717b63772480baef4bb5a60fb583b1d4ca3083b28f431507738e47034abd50984459cf9325afec4ea7fb35235bdb6030000"], [
  'ETag',
  'iZ1JOWeac5p6ADEUVTL5zw==',
  'Content-Type',
  'application/json; charset=UTF-8',
  'Vary',
  'Origin',
  'Vary',
  'X-Origin',
  'Vary',
  'Referer',
  'Content-Encoding',
  'gzip',
  'Date',
  'Sun, 11 Oct 2020 02:01:55 GMT',
  'Server',
  'ESF',
  'Cache-Control',
  'private',
  'X-XSS-Protection',
  '0',
  'X-Frame-Options',
  'SAMEORIGIN',
  'X-Content-Type-Options',
  'nosniff',
  'Alt-Svc',
  'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
  'Transfer-Encoding',
  'chunked'
]);
nock('https://bigquery.googleapis.com:443', {"encodedQueryParams":true})
  .get('/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1602381715270')
  .query({"location":"US","prettyPrint":"false"})
  .once().reply(200, ["1f","8b","08","00","00","00","00","00","02","ff","9d","94","6d","6f","9b","3010c7bf8bf73644368f21525fd08d7591d2ac21549b365593434c4a4730b34d3b16e5bbefa055209b932d7d03c771bffbfbeee0b6e87b56acd0182db3f58f8a89facd9aa97963444c56b992702b7921191a20a6e81a227f0a9bfff2965116ccf3fad3e774ea7e993f0617171021937bb6a168bc4569c6f29544e3af5b54d00d032c5b4180aacbc69ecce2f02a8cc0b1e1abc631bb9d4e83cb698876833d500a9e6639fb763e5889e49eb6477ec1167134995d9da6e8865785ea98f7d38f417c1a5951d5137917c4e1e978a9e8a6ec8078721d2ee2e0fa4647dded06e8812f239632c18a84354d858e3cb0444d9a79494895334372289649d406b72fd6825725159c1be03188415c6c5a23e211c7f430c4e53ca12ae30584de2ee074487145f3883fc1b4106922446bc3e4d2f6fa087eab2de3d05a28419f964c887aef3287b8b3b1890d6c1ab823c8d01961cf22be6f877e5b625f8374ac73ae488f6d448865b99e5ec47b7d253db615f16de268451c4d214109e3eab487c4febb53ce61a77c6c1f29c2ecd873047a5c5b80837d7d01c47fa5807f206012625b7a812eee487ee0351d22871d721c9f68f37bff3cbf3eff1f13c69ea76fd048f315fd4ffed1617ee25a47fe858eb5cf11e871ad803b32f703b87bf9d52f6bc5e48de0b036246b36067ede1e6f79b35160a38d95a8d8002514b6f9874c3d3fef7e03361423ea2a060000"], [
  'ETag',
  'xr4oz7bRiAQlyWXfL6ZQvA==',
  'Content-Type',
  'application/json; charset=UTF-8',
  'Vary',
  'Origin',
  'Vary',
  'X-Origin',
  'Vary',
  'Referer',
  'Content-Encoding',
  'gzip',
  'Date',
  'Sun, 11 Oct 2020 02:01:56 GMT',
  'Server',
  'ESF',
  'Cache-Control',
  'private',
  'X-XSS-Protection',
  '0',
  'X-Frame-Options',
  'SAMEORIGIN',
  'X-Content-Type-Options',
  'nosniff',
  'Alt-Svc',
  'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
  'Transfer-Encoding',
  'chunked'
]);