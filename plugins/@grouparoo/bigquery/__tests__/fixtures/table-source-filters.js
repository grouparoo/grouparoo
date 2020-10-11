const nock = require('nock');
process.env.BIGQUERY_JEST_TIMESTAMP = "1602380935868"

nock('https://www.googleapis.com:443', {"encodedQueryParams":true})
  .post('/oauth2/v4/token', {"grant_type":"urn:ietf:params:oauth:grant-type:jwt-bearer","assertion": /.+/g})
  .once().reply(200, ["1f","8b","08","00","00","00","00","00","02","ff1dcf4b5283300000d0bb645d3bd00225ee2054e55b8ad82a9b0c84f029f24be81070bcbb1ddf0dde0f4809a19ce3a96f68079ec192eee0966cdd5e3715836275dd954597c8d7a0293e4414bfceda8567edbc1b5889241bf342e7f6122e6a332e4e96a3f63a1fcc374612fb40a42ef2d6185aa28d5b3ff01568c03424fc96e288e50dd203d6c64fdd2056f2c58cfb494183c82aa596722d3ef7caadba9434e89b97daab64a439936596423d5adf771faa961b19fb9a8e49e922cfa301aee8bbfc39aea16e71d828ce29f68e6003a8186a4639ae1fb3bd0ae106fc37f1b40cf4713569ca2803bf7fa728430105010000"], [
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
  'Sun, 11 Oct 2020 01:48:56 GMT',
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
  .post('/bigquery/v2/projects/sample-sources/jobs', {"configuration":{"query":{"useLegacySql":false,"query":"SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName","defaultDataset":{"datasetId":"test"},"parameterMode":"named","queryParameters":[{"parameterType":{"type":"STRING"},"parameterValue":{"value":"purchases"},"name":"tableName"}]}},"jobReference":{"projectId":"sample-sources","jobId":"grouparoo-job-1-1602380935868"}})
  .query({"prettyPrint":"false"})
  .once().reply(200, ["1f","8b","08","00","00","00","00","00","02","ff","85","53","6b","6f","9b3014fd2bc8fbda84bc1322456b94d2356a4236425a4dd3848cb950b7802936ada22aff7dd7a6c95a556a3f61fb9e73cfb90f5ec8032f623225114f1f6ba8f6dfee4544ce08289ae26b2cae9f59be7fecb8657ab759a8ebd1557e339fcd10c1354bd2bccca025455d3190d3ddb69d56a22e6925440b13b5baadeea8d3eb4f3a4e7f38194d9026214b56bc7840f29d52a59cdaf651ba9d0a9166404b2edb4ce4a777fba9679795b807a6a4fd5ed14611697faaf93d138c2a2e8ad96e8bfab5842a849cf20c1dfc27c6d1f9fbcc6d4ef3768ae027ce803226ea42695798828922e1695d99ac64fa428ccb3707b27557ee22b098c8eabc080b9ac39915534543b52fc1baf4376b6be95d6efcf53c586ebc70bbb872d7f3f662b3daadbdad757be5faaea5689481e15a33ebdcdc3cbca07e0c52f1c2a807fa592bbff667f971289a80d2129a6038ee8c68179b1325d1982593fe304a3a104593683ca4fda8c39c010ce20828f28ca861d14214d16032ea3b8c865de6f4c341ec242185e13864900c3ad073183863723823cf155770c16529246f3a446efd65e08681bff316f3c0352524b4ced445634c17f0d6a3c20211f4494d071de5029574bb975ee0faf345b0bc719b09af20a56cbf7dc41927349380685a61f314546b1163c388375fbb17083613fb790c4a32fdf34274cfb58b372d3fd1031ca0b6abcc976c037fe9fd30768e881b9ad506f2d41c488996efb036747df88b48dcd1260bf9b573fddfa479f221810a0af6f534116c025ffd69c7bd47286e3eaa4885775c1d26b506aba059216eaa3db147c3de801870a53ec4c6bdf1b1693a87ce083914eab5a066efb1ce46ac9627100671fa9e69d6e11f18b3cf367504","0000"], [
  'ETag',
  'doKwcmyq0EpghOCtK6HmVA==',
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
  'Sun, 11 Oct 2020 01:48:56 GMT',
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
  .get('/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1602380935868')
  .query({"location":"US","prettyPrint":"false"})
  .once().reply(200, ["1f","8b","08000000000002ff8d92d153824010c6ff97ed1567309594191f30cd6cd414f1a9719c1316c480a3bb2323c7ffbd3d326baa997a81dde5b7c7f77d7080c7380bc0864d1c3d1528ca8b08d55c172eca2251926e39cf248201a85844e46e63bef4a3b2d3799d955b7732ecdced51cebb5d22a4bfc594817d8030c62490603f1c206329d29acf9322cdd65567802a733d5c78ee683aa43ee581eea7cbf1d8e98d077034ce8b01536c5df1ff585b1d0dd8f18d8b210acc7cd45a72c177e8ab91b629599a275893bc103e4aa8e0ea4124789133c1798d26b57aad6e99978db6d969b4da569bb884fb4cc53c2374b92079a0b86289cbf764122c02445592dfb0ba3ed3380e2a1fba1c4d3dab59c9fb0a90b2304e70fd374872b78cbec207764ae03bc7525e64ea4cdd8cef9ddf8ea3483f8fea3bdee0072115057546bcd164b0f09cc94c73ab93f75ea950ce04a71c25ea08eb66b3ddbab2ccf754afb94e9ade632b51a0013ea39fe3365660872c91787c03a7f0db807a020000"], [
  'ETag',
  'jb0xDgy99zPyhRMG9JwesQ==',
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
  'Sun, 11 Oct 2020 01:48:57 GMT',
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