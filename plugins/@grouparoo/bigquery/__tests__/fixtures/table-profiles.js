const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1595717874971";

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
      "7fc9591c10cad21b8b2d1a6a85d056bc3018224b103084d5e9bfd7e9fb83f70009c6a4eb62de5052835730271b638dd7b0d12dc9c71df266e82cc83f985ee3966da78e61babf50f5a82b9252327bd11218573eea3f4ee92c1676c52c6ca245f0eb41ab6b69276ea9e1abbd2370ef1c62643038948344f17568dfb35e86d8743f5b878edd262dd25d3e4caad37f65b7695039bf84dea29465935d6fb67ca725f2a629c83514a5d1a968a01e2ae2e8edc3edf9de40d1783b0415cd8fe6d115f80ffe0e22b002646a0b46bab878cee417c35881ff66cce7963caf16491861e0f70f1d9ec84c05010000",
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
      "Sat, 25 Jul 2020 22:57:57 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1595717874971",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d54db6e9b40107df75720fad8f8427c2592d55836692dd938c138515455685906ba09b0845dd22691ffbdbb8b6d701da57d83993967ce5c76de1a9aa63f9234d02f34dd27d15301f9cba707eaeb67d2031c45d2e3dede5bc96b6add190fc9673ff93d7bc5e8fa663c2ea388423394643134192d720cec62b36e45392d329453da14844da369f4cdfed0188e863d736894500671b820e9a324f8c979c62edaedbd8c5644691403ca086b619a1cecede7f37696d307c09cb58fb3b64522d6fe30ef979862c4094dc79b75a9a160907b9020124b151538f02f8fd95b0425ad48443f130c08635aa45c2a2b69304d431215b922174c6fc228cc4af2e1b766d0d7d6c29aba1aa67191a45e8a1238d302c491c75f32d0ae9cd5529bdb572b673971e72bdb5b4fbf59cb496bba5a6c96f65abbfb663996c6911f83c26a63ed52fdd9e2472952d902609ca44a932bbd3525c2bb6be3fc9d011e28248950c56017e60d3b03648c3aa61ffa431c8eba7d3fec80ef8ffc611f75fd0e367bd00b7c407506a5acc4a394a6180dce71189adeb91960af87fba68706009e69e05ed841d083aea1efd0db432dbf72c26146584619d93559bf73e6aee5b9cec69e4e5cab5e77888a98cf4ae5c7551f95c34583ea4a3f6ac989a22c27548852e39cdbaee54ca6eefcb62643ecd60222845fd64f72bb421433a8d02817b3e2902f692007a3db93a535abc06a53aef7414c447c3fe8acca118172feaa9693f91fe771c5621db5a29c4d69d5d7ae33b7bfea35e7f67d9a5b1417eff03cefccb2852189ab7e29aac6df5f3f1ab514ba78a93b75facdc672ee2556f9a4c7811072487195f43f3657024bf7bfef9088de9f05091097e1909e7161166f08b32a39cea17c51a4ecfb8170d4e9f6f6840298f3d308c318ec234e4e83cc0509a47cdf8af244947ddc1e492a6a72144c868b5760ef46b86d6c1b7f003efa3842dd050000",
    ],
    [
      "ETag",
      "TVYEmznEW1jm+bmxDzcaPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:57:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1595717874971"
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
      "95",
      "df",
      "6b",
      "db",
      "30",
      "10c7dffd5704ed7109d46d52a7833e245dba069cdf0e83951054ebeca9932d4f92b36625fffb24d969fcd26168c02f96eebe77fae03ba47b755a2df48ba6047d69a1271affce41ec3fc5a01666b304993325f592f154026a9b68503836d10fdea2ffb97b75fff27d325f84577fd5fa65f463717b5b44c9f0272458c7bd6a4bdb110546a4b61faddd2afd564b7102e6c490b33c49b7d66c9f64b5cfacbc0a96e3e9b7aa92706295e9daf707437f844ae9d07e1f42b0c25b7be4c71076dd38250c3df3a7254420200de1f4d799e0cf10aab12dafc449c6a023792e429025c42416722c789e61c17947bb3a6ec7edddf43cd7eb7bdd1bcf3d46331e6245796a12d62bf486575c61b6e47f4c85917b59f440147651f1632950546942b5425ada996c4ad09befd0fe4fe0781a5c772bb1e56ee354326b53232aa42a5a5f8f5eb6ea4c78869ba4eb9b425923e4185202a21134cdb6981001523683e7728bb3ac267b389bf9e722e394084e4943f41d6d82cad4ae26f5de9f0dcef8aee8e7beee9dfe3a0846e7c24aa51ffb9adc603c19ad82c164fe2e5c7f37a7677eb85720e782eb2122c18e0ef7a2dbef79d717e8388aeeb81935ca4c222572b0ee10eb91fc4095f6459849700ece3f8a74c1b3fe070000",
    ],
    [
      "ETag",
      "H7Q8+43FxWMPQc3ztUxEZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1595717874971",
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
      "535b539b40147ef757ecd0b7d6043010c019a78d113b8c31a94074ec8b599685ae028bbb8b8e75fcefdd855cc8d8b17d833de7bb9cdbeb0100da03a952ed186809c91f1bcc5e3eddd3443b54112c60ae22e822ba183f85c17da4e70fd7bf6f4ebf4c7efa5727275d1669d11c967581079c360c617ebc8c8639a34d0d19a5034938381a98b6673ba6e33a96e7981d94e3229b91ea4111fc12a2e6c7babeb131cc29cd0b0c6bc2878896db77fde948af19bdc748707d5f5597425cff50f76b411114845627cba8f3d070ccee700949a15cecc069f26d9f7d486039cc65f613411822449b4a28671d0da25546f286b5e492e9553ecae7d6f2f6b7f7a045fecc9fc6e033380f179760254bca4881f90a2cc2333f04a7b760c58534b00293687a0856246dbfc02cb80c62601a06589c9f477e0c8cd6404b9e622e48d55a886152e09eb08caebb16fc655e5b0a450205e4789d76e7186368ba869764898332776427998193c44d1c1b8e12037916b6d204c33e8350da1d1e56b47252e8395e32f6b271625b863bb22c0b195e6a1b692a69d0d88268ec9ab6b66678dbd6f3cc88c06784d79493755fb59b3088fdbb385ccea793d8efd79ec1a610679dfbfdcaf74a12b2497db71fb5e59da39a112a4db5130ce6b11f4ea67170ddb321d7698673885ea247b550192c38dea121832516985dd2540d47fbb188823858cc27b34e6a2da4c9cd8d5fea36e56ae987b72adac65424c41966b842bbf1fec76815b00bfffb2e65f6e64c14405eca565eaea42072c910df892386bb952365eb7843e89ac691b521944026de6798a3d126e3dda9282d5ce24a6c5ad19dccba537b969a9e9d16a6d2e58acc83f9f7d6fcc1dbc11fc1227553ed040000",
    ],
    [
      "ETag",
      "cKSK6vRIjS/gkVzWB+AZEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1595717874971"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffd5995d6f22371486eff915d1f4b2c11dcff7545aa924994dc8928f256c6faa28323306869831b54db6e92affbdb6212c177475a6c1daee4502b65f9f33f2797c7c3c7ce91c1d798f755379bf1e79e37afae78a8ae79fa6547d345f8654ae9892fa63c91b49bd63a3a68a4c8dfaf7a2fce5f4e7f2c3e2723afb3bbdb89d45fddbd9c777efd62a59cee88268dd17ddd2ed494d592575fb0fdb3edaf4dbb1862ca8b1585776eea6573d2f6d6fff7a549c17c3dda105afecd0f5a7c1a0773228bccdd0cbf1bf1b9fd442aa07dbdae3e46e34ec5f9fbfd50723ce5de845ad993bf353da5454b8b35f2f1f4855092aa5431f5c3e90e5729f83939b9b41d1bb7eab07d25482d795632f4fb54beb4c3dedb3fe7e70d31bbdd57645d4de2d70d61b156fb52d1559ec5d9751ffaab81bf5ae6e411eece77d67e3cb9bf3f1904ea8a04d49bf26ada5e0735aaabecd8e52fb65b42bf94a94f4155f33713d3c157cb52482f3aeeeea065d1ce7718ad32c8df214bfaa192f89aa7963267cbaf3b6ee1557840df96793203decaf53a858b7d709f37525bcc94e0edd5d203df464677bdbae97e36fe80a5153a0f4928a275e4ba09aced772ff37fa975d3254f20570ee1561d087c2310aa21485194a03e014255650eb13c22454dbc26c10e708431f37f003bfeb075d1f1a528ce2cc8fe31ce75191efccd97cbbefec5800f3047dda5352d60c8c546132044c5a52adc5ff01a6f7faac04e314c421c25182228c02f0823ba2a48dd93c4261d21628684c2d5049a4913a205021d0f9b9a08a32b098af4a5e3e02e5d3e9461f38e70a6394e94d8f7d84c3e887495449922168a0b658412758acd210e787c40abab6bd0551049ad3b8a272c24505d493f27542e89a2b9c8728d727a0afffa0fbbf45fcdd4823bd13fcb65441036ba9ca70161e92aa18e87c500b2854977cd648a56b40989ccd37fac83552e6044ccc2aa23cffbed9a78dd92c308fdd162a685c2d54b91fa587840afab467b4a981d2bb92b01a4a6025ad3a769ea374718e43aceb2a5da4ff38675f90ead49ab5250a1ad43551393e68919e029d5f50368552f28151f09d6ff668c4896ba03273e7cb90a62a86c6e7fb9f79",
      "7e8ac0e9664b1334a08626eca7e9412b74e8da9e53a1c037bed3d5b8560a5a9f97569d3acf50faf008e2586729534739483b8e5254a6afa9516ba8a071b550e1243c687d0e2d29062bc12885564727827fa60c7a4b64e3b53c737eeb33a75e9c238d5604bd15393af8da6813bd1dc097d42d56d0c85aac82d83f68818ea1f789332ed4ec1928eeb728d0abda8873d74845e6ecc3288974b50b45ea7f509e07b98fe2b66f12c041b5488561f2edf25cffbffffa9afde459dfd16f052fa994d4bebadfbc6f9ff3f129372154e62700b31eb6bb24e58c5ed46ad3d779e9fc035a53a68e351d0000",
    ],
    [
      "ETag",
      "VEc/C+cKmJghz7HPh4IPhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d07fc9d93a80c8d29bb48d2c5a44a408172684749a58b624b275faef75fafee0fd00843111a290ed8d34e019cc48b3d7781db496a346d5c975bc3ed77cd5eaf1152a6cc63c9cd432a3340d260715aee52b59b258515dde647c329121501c373451cabb50df53596a020eec65c4fbcf2765610134069d67edbd326a3c664570e13e72034c8f96982d9130b6fb1a066d1b1dd9b5c2fd5437618bbc74c1c17278f5e0c273180e1f53240d8a2f8339bef54577764ceaa5b126f7f6d9cea181be0ffab8c975b00264ea2827a2a08fd9666bdb2bf0df2ce4dc91c7d52188130e7eff00a1964fff05010000",
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
      "Sat, 25 Jul 2020 22:58:01 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1595717874971",
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
      "02ff8d545d6fda30147de75744d96b81f0110295d08a205d9120b421b49aa629b2cd4d661ae22c763a7515ff7db6c3471855b7b7e4de7bce3df75cdb6f35c3309f69ba36af0d13d3f86701f9eba70dc3e695ca8040b1ca6c90bda1194b23eaaefddfed7baf988c6e1f86c3b28a6a3447db2c813a67454e805faf968d3867458672c6ea92b0dea9b7ec81edb49cbed31d38ad12ca218966347d56043f84c8f875b37990d188198b134019e50dc2b6c778f3a5ddcc72b6012278f3bc6b5336e2cd0ffb7e4e184182b274b85a961a0a0e79085b4413a5e2045ee39b73f60645db462cab5f280144082b52a194953444d91317b926974c6f3228c35af2f1b7123097eecc1d07066149b14dc3146de1ca58238142f19a8171eb2fe6c6d4bb5df8f351305d78e1727ce7ce478df162b69a7b4be3e9cef55d43209c80c61a43e346ff79f2472bd2ddd6c0054db5a640652b4a64766fe3f49d051e29148954c5615f163a560fb5fad60047d82151bf63e3c8028cfbd8b151075b64d085ee1a03aa326865251ea52cb57b4ebb87ad5e18d9a81576315861bf0f28ecd896851dab8bba189b7bf4ee38cbaf9c0a98509e314ef7269b4ffe3470c3c05f79e351e056e78e50918849a9fc7ceab3718434a8aaf4234b2e1465396552945ee7d40b5c7f340ea68f1519f26ccd2046e475f9539dae08251c4e6894cb5d09c8e76cad16637aa3b93b3981f549b93f147159f1eda8f3348e2c54fbd7b35cecffbc4f200fd69915e56ecaa8b90cfca9f7c5ac2477efd33ca2a47887e7651f5616463439f9a5a96a7f7f7daf555a98f2a6eed5990f2bd7ffaab03aa7323e4490434a4e4dffe3e42a6099fef73b24ab0fcf8202c897e1d89e0b19967788f05373924379a368e9fb81b0dfb29dde815002737159e1d8ed43c5c5d3a07ac1165271b0a27c224a1f7767928a8a1c0d53e5f21678fb15ee6abbda1f681d77d0dd050000",
    ],
    [
      "ETag",
      "ja5jiponfiEdRz2PNuDAFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1595717874971"
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
      "95",
      "df",
      "6f",
      "da",
      "30",
      "10",
      "c7",
      "df",
      "f35720ef7120910d9a76521fa0a32d52f85148a54d13426e7cc94c9d38b51d28aaf8df6b3ba1e4a553a421e525f6ddf7ce1fe54ef6bd39ad167aa629413f5ae889c62f3988fd9718d483d92c40e64c49bd643c9580da261a148e4df4e6d5f755f766aef2e8b73f8977772cf9f5f5e1faba8892e15f48b08e7bd396b6230a8c486dffb176abf45b2dc509981343cef2245d5bb37d92d53eb3f232588ca7775525e1c42ad347df1f0cfd112aa543fb7308c10aafed91ff87b0ebca296168c39f161081803484d35f67826f2054635b5e89938c4147f25c84204b88492ce458f03cc382f38e7675be77dcfe55df73bd4baf77e5b9c768c643ac284f4dc2e3127de01557982df8ce5418b9df8a1e88c22e2a7e2c058a2a4da856484b5b934d09faf01ddaff081c4f838b5e25b6dcad9c4a666d6a44855445ebebd1cb569d09cf7093747d53286b841c434a403482a6d91a132240ca66f05cae7196d5640f6733ff5c649c12c1296988bea54d5099dad6a4defab3c119df15fddcd7bdd33f07c1e85c58a9f4635f931b8c27a3653098cc3f85ebefeaf4cc0ff70ae45c703d4424d8d1e1767b977defa28b8ea3e8869b51a3cc24522207eb0eb11ec9f754695f849904e7e0bc030863e528fe070000",
    ],
    [
      "ETag",
      "jxLLt0CPtufYLMgwGlmX+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-4-1595717874971",
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
      "ff8d54db6eda40107de72b56ee5b15606d2e36482825c4b496b824c604256d15d666ec6e62bc8e779d8846fc7bd73617d344695f90999973e6cc65e7b58290f248a395d2458a4b83a71492cda707e62a679907040932cfc6ac8fc7dacd6281db49fbe5f7707e678f2fae7bbd228ae6684ed6710855ced2c403de9dcf6a41c2d298248c552561b559555b9d96aeea86deece86a01e510fa231a3d6604bf848879b75edfcba8058c05219098f29ac7d6077bfd59abc7097b004ff0fa69d6ba4cc4eb1fe63d0f99470465516f3e2b34a41c927b58131a662a8ee095fbe594bd46c9ba16c8e867ea01f13c9646225356d0782cf269902639b9647a954669ce251ffe960ccacc1c9903077d46437b3a464b59924f43e04bb4f866da265a7221b32fd18f14e306f4d0399ada97a68d2e6e0faefe6c70869674957fa19135b61ca4628ca6c3e1cc7410ce85e54957c0058d72690e7143280992de5d37ad77e678a0c84888201c7661f73a6e13d5c01dd77775cf371a2dd7c7e0ba86abb748c3c55ea709cd950ba4cc20b2dc059e442c320cdc06f9032ba2a9b8d1d6a0a379d8d0fda6efaa2dd55bb589df823651760cdb433d2f0915704979cc38ddf55b59d89663de3bf67c32e83b66b9769fa4a1b82cd49f567e5292904d2aabfda82d6f14c5096552543e596be298767fe05837251972cd4610106f337bca16cd272187239a24640d0292315b65c351aea633cbb1a693fee8c8906fced53e92cbb0ef07b1c79aca6cce263e1d753185c2aa38d6d89c39fdf19552f26fcfde65ba2161fa0ed5f3ceac6858c355ac55b1eea85a576d74d5660d637c77425df9fbeb67a5945291af752758b99e9bf66d86cd7d99c7061f1288bca388ff58db0c58b8ff7d8b64f4fe346400791d0ee9e57313543e208f1f937b0914cf89ae73c57b42436b76f60f2f0326e26d84d168ec23de9c872c17ac2112fb561467a2e8e3f644525a9293c3b270b9fe136bf235175fd956fe002eed5b5be105",
      "0000",
    ],
    [
      "ETag",
      "yE/MM2VWW06r6wzFUZRMBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1595717874971"
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
      "57df6fda30107ee7af40d9e34a949f24995469d0a614954247a93669aa2a931ca95b1367b6438baafeef730cb43cb0ca88467b21b9bbefee43779f0ff3d268368d479ca7c6b7a631c5d99f12d8f24b06e247f532065e12c1e5a3a03907e3a84283405985a6f1d92ff0c6ddde2279beb97874bffe64f3c5d3f1f10ac5937b9823897b9196b4671848caa5fd5bd9cdb55fc5723487aa224e55eeda2b9685f2f68793b8178fb743739aaad0f06630e87407b1b10ebd1efdbbf80c332eee94b583e47a32ee0f7b877210543b856c2a26f595cf204f81d5571f1777284d19705e2307e577a82876117447a341dc191eca80f294519cd6ccb2c075562762b1abfad960d4991c5a3b4562e71138ed4ce2436b7381e63bfb32e95fc6d793cee59516837ade36d65cc6039d8e61060cf204de9756c1e80324a2afb62397bc045a9c962c818d7cabc4553863b42c10a3b4255d2daf65fb911fd841187851606fd0842648609a570937d7c61bbda00291317daa16a4e1ad36285b99ab7db9698431db5aa1dbfd91a145951c186faed7a30f70e74032a489bd2080b926f6feb102b7bfc3b36a9799d0b966e6995c6d0434c1a16f3a5e6886a6ed879a298295bad5eb817a56605abe26d8b11cab65392d4b77a0b6e987b615047ee4c5d156cefaedb6b155415b4dbabded011358b70f27e5140ba109ce12850eea1694edb8a6e3fba6ed5a52599a493344b82ec13ed83d44157ab6e9ed2d2addb92a51d96d37fa4c51459ae4839211805c13dd95fb1208d14493e90a1ed6ad2bc7b5e58e8a4c292dcffdfcf1d7a5c0b63c0eaeee31789395ee6495ac1cdf723f5356b6a5c97e4a99b85f6a82fb5c505d09a6b80247754bcaab7efb6cb3ed99f264fedfedb34f5927b24c5ff7fb6e24a53d542529d76d071f4a4a7edebe5fb8ba4b01fc8a51799de3a02e7196b1b90d9ed06a84a2ba0c56fd50ee04c93fb5e758ac7d8dd7c65f",
      "96cd99343f0f0000",
    ],
    [
      "ETag",
      "oEFXe4RBGvcxUKk3+Wrmvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e",
      "82",
      "40",
      "00",
      "00",
      "d0",
      "7f99b31881b2f5c66243ca526604042f046140365986ddf4df6bfafee0bd409c249890686c2bfc049f608b19e9981c8d56546898091f7a2d7c4776071fde89e16a47b6c99d589bac538a755a75d414b8580d7a76a9d4e0d420df4ddef799d8b2a8bab1e9db9844547999bb267c98da4af3bb52a563eab02d6cca2686012c91d6f08b1098e8525d5bbdcf16513d4fdbbc64bd9f13bb544d2f47612d718c3757b35c598875a77e8ac8a68952ddb9dc8abafd6cdea4dd7f7ed1f71f87823d03f56ba187e000f0da15032651f19eb19c241dc07f331ab70ebfaf0a8e073c80df3fc3a372e305010000",
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
      "Sat, 25 Jul 2020 22:58:03 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1595717874971",
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
      "54",
      "db",
      "6e9b40107df75720fa1adfed0291acc67248e3cac62de0245555a16519e82698c5ec92c88dfcefdd5d7cc17594f60d66e69c3973d9796d689afe44b248bfd4f49024eb128acd87471aea17d2031c25d2338b5ebefc7e7958af079d8d8d395baf1f4c6f3c1a555144a1195ae52934192d0b0cec72e9b5928296392a286d0ac2e6b0d91d5a43a36b98c6c032ba1594411acf48f624097e719eb3cb767b2fa395509aa48072c25a98ae0ef6f673af9d17f4118490f669d6b648c4daefe6fd94528c38a1d968e9551a4a0645002b4452a9e2088ec2ab53f61641ab5622a29f090684312d332e95553498663149ca42910ba65761146625f9f05b33e89e3db327be86695aaeb220432bb8d022c451c037396837ee62ae4d9d9b853b1ffbd3851378935b7b3e6e4d16b3e5dcf1b4fb5bdbb5358ec21414561b6957eacf113f4a91ca1601e324539a7ce9ad2911de5d1ba76f0cf0402149842a06bbb0c0e87c445db363857168e0d8ec0fc3b803616886c610f5c30eb606308842407506a5acc2a38c66dd2142663fea07e1b0ff311840af1358161a086aab138591d5ebc696be436f0fb5bc1484c33561396564d764fdde9dfa76e0bb4b6732f6ed7add312a537e5d293fadfaa41c2e1a5457fa5e4bce14e505a142941ae7d4f16d773cf1a777351962b7669020bcf1d672bb62943238a2512166c5a198d3480e4677c673fbfa08569bf2751fc444c48f83ce63392250ce5fd57236ffd33cbe58ac935654b3a9acbae7bb53e7b35e736edfa6b94369f906cff3ce2c5b1893f4d82f45d5f8fbeb67a39642172f75a74effb6b4ddef12ab7cd2e3420c0564f898f43f3657022bf7bfef9088de9f05091097e1909e7161166f08b363725c40f5a248d5f73da1d9ef99bd3da10016fc3c62d035f61167a741e68215647cdf8aea44547ddc9e482a6b72144c",
      "868b57e0ec46b86d6c1b7f008d888edbdd050000",
    ],
    [
      "ETag",
      "LdwJzwXqq40yEctsqqX8SA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1595717874971"
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
      "95",
      "51",
      "6b",
      "db",
      "30",
      "10",
      "c7",
      "dffd2982f6b804ea90d4eda00fce966d666ed23a0e1b8c1054ebeca9932d4f921342c9779f243b8d5f3a0c0bf8c5d2ddff4e3f7c87742fce60807ed382a00f03f444b33f1588c3bb0cd4a3d944202ba6a45e4a5e484043130d0a67267ab11fc76b77f52dda0bf2fd0778e3c7e07de0dfddd55132f90539d6712fdad2764a8111a9ed9fd61e347eab1538077362c25995175b6b0ecfb23a94565ec551b0f8d256724eacb25887a13f0be7a8918ec3b721042bbcb547fe1fc2ae1ba781a167fe14410a028a04ce7f5d0afe0c890a6c7925ce4b0623c92b91806c2026b19633c1ab120bce47da359a8edce9edd473bd1b6f72ebb9a768c613ac282f4cc27a855ef18a2bcc22be371546eeb8ee81a8edbae2a752a0b4d5847685b4b433d994a057df71f88fc060115f4f5ab1cd6ee3b4323b53532aa4aa5bdf8ddeb4ea427886fba4eb9b42592fe40c0a02a217342db798100152f683e7728bcbb2237bb65c869722e382084e494ff41ded83cad4ae23f573b8f42ff8aee8e7beeb9dfee4c7f34b61a5d28f7d476e1cdccf57b17ffff0265c7f37e7677e7650201f04d74344821d1deed5e466ea5d5fa1d328fac8cda85166122951817527588fe4af54695f8a9904e7e8fc054e00f268fe070000",
    ],
    [
      "ETag",
      "Nw2TU1SKRwrdWXe72QI+IA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-6-1595717874971",
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
      "54",
      "6d",
      "6f",
      "9b",
      "30",
      "10",
      "fe",
      "9e",
      "5f",
      "61",
      "b16f5393988404881475594237a4bc1548ab769b1a630c73478062932eaaf2df67202164adba7d83bb7b5eeecef64b0300e9178d3c69002497064f1949771f1e6357bac83384a320cfdc2fd3dfdef533dfeea268b21829f786331e07c36159450b34439b24244d166729266cb0b25b411a67094ae3b829089bfda6dcd37baaac6aaaa2ab72096524f4a734fa9513fce43c618376fb68a315c47110129450d6c2f1a68ab7b79d7692c68f0473d63e576d0b21d67e57f7328c31e2348e862bbbf49031923e900da261eee204f6dc4fe7ec2d8a36ad40546f292608e3388b78eeaca4c171e4d3204b0b72c1f42282225c58ae7e6b01c936a6c6d8011fc195b59881b568c9a721616b70fbd5b00cb0665ca8afc1f70cc22e19824bb0b02686053edf55a9913dbe006bea155f606ace4c07c81082c5d5956d380016c60a518f304ea3c29a83dc90d40c89ec619ae61b7bac287212c4112387b20715f691ac41ddf55d15fb5ab7e7fa90b8aee6aa3dd47521d615a2782e4175069e6b97781489792902e1b93272615fc75eafd7d7354cf40e844455bb3ed634ade369ae2e1d18f6553fcf29e564425912337a98b7746b998ef1e058abf978e418f5de7d94857c52ba3feffcac252e865477fbde585e394a521a0b53c566cdb96358a3b163ded46c8863362501c23bfb293f683e0a1939a1518a36849374167bf972a4e5c2361d73311f4d4f0cc5c9591e2b9928fb56993df554677376c9f9aacb2d9451c9316786ed8c664ba996df5fbcc97483c2ec0daaed212c7560073661a7",
      "29cb8edc19c8dd81acb42084f767d48dbfbf7e346a9292b8ad07c3d2f5cab0ee726c91cb3316f1494a227c32f11fc7360796e97fbf45a2faf834e400f13a54f2e2ba712a2e106627719c92f23ad14de1f848a82950568e840298f2d71572af927cf53ce45a6443227e1c45f94c9473dc9f59ca6a760a585e2e8effdc9c7f29cc37f68d3f9a3eed59e1050000",
    ],
    [
      "ETag",
      "ZPrxdQwtvynnDOA4ZETCCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1595717874971"
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
      "b5",
      "94",
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "df",
      "f9",
      "14a4be4a9404444d7c1832101dffc6f0c51852d6cb2c6ebbb3ed3448fceeb6758a0f3331217b6aef39b7e7d734dbddd5ea75f2cc53462eeb64c5a3971cc4f6280235331b1f641e2ba9970c5309e4d87483a291e94eee5bb3a7dbf7ebcde8f984deddbe09ecf59dd9d5d557970c9f20a1ba6fa72b5daf39c44ceafac1d6f542b75e4a1330899cd9b385aab6995587e3c01db8fe6f2b4166adf1c2f39caee792c2fa38fe3b7ccd85544b5b9540e6813f1c0f0e65c4b472847e541e57171f41ca405497cfb325654c80941532502e69969501ba9389e73ae3430934650239ab98f2caab4c8fd56b597adf9b38c1a1d98caad25fa0e704eea1d952d1a4f45d82e1c89d07ce68fa2f825d1f6b058b6c70e5c31a04a421ec8756267003a11adae92835378686c45c84f0fdf99a835f762430cfa8406c68a971d668b62fda9d66e7bcd3bae834bfbb630ca9e2989a038b39f9c12b5434f6f1cd0c48724af65a77ab404e056aa204f6cbd5906b341752e6be4ae460e590eab97bc355a1d53e6a9fc2e10edbe2050000",
    ],
    [
      "ETag",
      "mV4QhJzCjMk/aKJwroDFAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "64",
      "2d8e05a1a13bf9d60f944fd0d10d032108454c4a9026747af73a7d37783fa0c098709e8fb42377f00664a19a4bbcdc5368bdc4d59afb7a8e92e367b273d9414cbc1c84626fe5f81daacd06c924c55def0ecd4a5710ba052e25af2c7d50145cadeb1cf5345eed1ec126acb8fc98294de3a67b778cb595cc4e85f6075618c669ee8463d6d0f17155b98515db48bbd5cd5d1ea9c8dbb2465faa77297599aaaa92d9d919423dd1b59c4f74d8c20b573c1179ace6913f61eddc6731f4a8139ec6a088c10210c1da81f0bc7dce34dd3417e0bf998f9291e7d522c54006f0fb07b089e86405010000",
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
      "Sat, 25 Jul 2020 22:58:04 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1595717874971",
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
      "54",
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "7e",
      "cf",
      "af",
      "40ec71cd858604a814ad514ad7ac095981b49aa609d9c630b704536c5ab555fefb6c930b59aa6e6f70cef9bef39d8bcf5b4bd3f40792c7fa99a643923e56b87cf9744fa17e223d9883547af26ba3ba79a58b6f37f0fa81c5b1f3f9354b9e47a33a8a283403ab22c36d46ab126176b60c3a6949ab029494b60561db6a1b03676019966d998e65d45086b36446f20749f09bf3829d75bb5b199d94d234c3a020ac83e86a67ef3e9d768b92de63c459f7306b572462dd0ff37ec928029cd07cb40c6a0d15c3658457806452c51e1cc3f343f60e01ab4e2aa29f08c200215ae55c2aab6910cd139256a522174c6fc228cc4af2eeb761d00377e64e420dd1ac5ae5510e56f8448b0107117f29b076e92fe6dad4bb5cf8f371385d785130b972e7e3ce64315bcebd40bbbb727d57e300665861b59176aefe3cf1a314a96c31669ce44a5328bd0d25c2bb69e3f49d01ee28248950c5f0262cb27a4360d83d0726d04289dd1fc0a48721b4a135007dd8438e89cd1862d06450ca6a3cc869dec730b14fcd618451cf894cc7b423600dcdc84e62d3309c411f4247dfa0d7bb5a9e4bc2f10561056564d364fdce9f866e14fa4b6f320edd66dd09a8327e512b3facfaa01c2e1ad454fa514b8e141525a142941ae7d40b5d7f3c09a7b70d1962b7663805e8257894db95808ce13d1a9462561c97731acbc1e8de78ee5eecc16a53be6f839888f8b9d3b92f4704caf9ab5a8ee67f9827148b75d08a7a36b5550f427fea7dd51bcef5fb34b720abdee179da98650b1392edfba5a85a7f7ffd6a3552e8e2a56e",
      "d4e9374bd7ff21b1ca273d3e4e708973b44ffa1f9b2b81b5fbdf7748446fcf820488cbb04bcfb8308b3784d83e392a71fda248ddf72da16d5ab6b32514c0921f450c7ac6701b71741a642ebcc239dfb6a23e11751fd70792aa861c0593e1e215789b11ae5bebd61f4f43a3fadd050000",
    ],
    [
      "ETag",
      "nK1uQzoOJQbKksdd9+zlfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1595717874971"
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
      "95c16ee2301086ef790ae4bd82b641d0b42bf5002ddd8d14a00de96985901b4fb2669d386b3bb4a8e2dd6b3ba1e4d255a422e5127be69ff1a7ccc89e37a7d7437f694ed08f1e7aa6e9bf12c4fe5b0aead16c42902553522f05cf25a0be890685531bbdfd3e1ebe96c9fd10dff9a14ffc391dbea4373755948cff408675dc9bb6b49d5060446afbb7b57bb5df6a39cec09c18735666f9c69afd93acf685955751e82f7e36958c13ab2c9e8260320d66a8960efdcf21042bbcb1477e0d61d7b553c3d0963f879080803c86d35f17826f2156be2dafc459c160207929629035c42456722a785960c1f940bb06dec01d5f8f3dd7bbf246d79e7b8c663cc68af2dc243cadd0075e718559c85f4c85913bac7a202abbaaf8b114286934a159212ded4c3625e8c377e8ff27d05f4497a3466cbd5b3b8dccd6d4840aa9aad6b7a3d7ad3a139ee12ee9faa650d60939859c80e8044d8b0d26448094dde0b9dce0a268c99e2e97c1b9c838278253d2117d47bba032b56b49bd0f969333be2bfab96f7ba7ef26d1ec5c58a9f463df921bf9f3d92a9acc1f3e85ebeffaf4cc4ff70ae483e07a8848b0a3c3bd185d8dbdcb0b741c45b7dc8c1a652691122558778cf548fe4595f6259849700ece3ba062558afe070000",
    ],
    [
      "ETag",
      "bj/52xufF2aDIRIdIMi2wg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1595717874971",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d535b6f9b30147eefafb0d8dbd404d2c0804ad596a6a462cb6503b2a94f8d6d0c730b98daa65555f5bfcf865c883a757b039ff35dceede50400e39e56a9710e0c44f38786f0e70f770c19a73a4224cc75e4492c4b61dd34d12cbe7cfac6afbfca7bd9e417175d166dd1029675410682351c1371be8e8739674d0d3963034538f00623c777dc91ebb9b6ef8e3aa8204536a7d5bd26f82d652dce4d7367639833961704d6540c312bf7efe6e39959737647b014e6b1aaa98484f9aeeee782612829ab2ed671e7a11184df9212d242bb388053f4e5987d486139cc55f623c50462cc9a4a6a671d0d665546f386b7e48ae9453daae7d6f2feb7f760c4c13c9826e0239845ab05d8a892325a10b101abe82a88c0e50dd808a90c6cc0249e9e820d4ddb2f300f1761026cb09acde22001562bdf52a744485ab50612880ad29355d16dcfc2bf4c6b4fa149a084826cd36e5deb131c79968f32e4e2cc1b3b28b308421e721d384616f66d62a788c03e83d4da1d1e56acb2708a2d6f6c8f6d84fd338c3cd7c39e853307abb1d8566a3b569a5999676c195ef7f53c712ac91515351374db55e3571426c16d12ad97d34912f46bcf6053c8abcefd71e5472549d5a4bedbf7daf2c651cd2953a6daf985cb248826d324fcd9b3a196694e72889fe307bd4e192c0439a021872591842f58aa87637c5fc56112ae96937927b51532d4de26cf759bf2631d44373adac674242219e1a4c287f1fec76835b00bfffb2a55f6ee483440ddc95e5e2da4a46ac9b03888634eba95a365eb7847e839eed8df112a20976f333cdfdb65bc3914ad454a52c95d2bba83d976eac852d3b3d3c274ba5a9165b8bc6ecd9fbc9efc01a95f6d5beb040000",
    ],
    [
      "ETag",
      "wsNms0YuRFSBwKrGJtktug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1595717874971"
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
      "d5",
      "574d73da3010bdf32b18f7d8a0b1fc81edce64a62675281d4252424e9d4c46b1654789b01c49d07c4cfe7b6561120e34234a7ce801ec5dbd7d6b769fd6e2b9d3ed5a77a4ccac2f5deb9a14f70bcc1f3f1558feac6fa6582ca814ea52b15260eba04663898a1afdf460df3c0d83cf928e07f73e8bc3d83ecbe3c3c3154aa437788e14ee5959cace09a69950f62f6d771bbf5e2bd11cd78c24d3b18d573e56da3b9acc926132dd5c9ab34c2f4d2ec6e378304eac66e9e5e0efe439e1425e696b4b92f3d9743419ee9b83a2d653a8a212da1e7d81cb0cf3f6f8497585b28c63215accc1c415aaaa6d0906a7a7e3249eec9b01951967246b39cb92b4c94ee5721bfbf1f8349eedcb9d21b9750b7c8b67c9bedc42a2f9d6bacc4627c9f92c3e3933caa0af979d269775cbaea738c71c97297e1b5a1567b73895233d1d85ca4b714fb0054ff15abe75e06ab9e06c5121ce584fb97a610ffa911fc0200cbc28806b34652992849575c0c5b9f59a5e3289e894fdae07a4e5ad26285f99ab79b92e84956f8cd0cdfaa8a5651d0cad57d7cbc13bb884136c08fd81f992116188c6b72bb8fd153fe88a8194cd0d634f10357d28e803c70b801b82c0310c917c61ca9e232a4cb13bd03a7e04a0e9e33ab663f76ca7679bb614023fb47d3f829197441b31cddd656783c1584fa64f7b8452428d2595d403c20c9a628585ff20a663f5aa349693e3bb007a7de041e01817bc2595ec421b79c0edef2a28d39e6a41f53d25a90f14946b987cc8b1c4d418cc16294bef0ce145d1e09dd675052108d5a6873680aef7df0caa7e3f04a68d7a959569809655e0c2e82365655adb788e24329d694c6291339e19e251ba0e70dbd6158c5c10a937a0ad3ea6fb7f87feb703f5d44eb07755956963b5aa4218baefaa4a7d5fbe9db8068faa5f679ca9f39cc0fa14675bebe3e011abfb27ebd360fd13b53b45ea5fed77221b5fe7",
      "a5f307c5f54299400f0000",
    ],
    [
      "ETag",
      "zx0hzG7+tlLBq5oA8A0PfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcfc97282300000d07fc9591d3619e90d84b2848e5290edc24048c7a410286bd0e9bfd7e9fb83f7042542781c8ba9fbc60cbc81ad94b4033ac0ee6488416d2743c29259cb7d482dd2ea8f0409d84166768f4312b229f3e31f98dd3f6ea9125f1cefacb4a69031c9d567caaa0daa69ef5d4d2f54d1239c3934c8b9ce0439b0a282a593943bdd4c6aa954170d8ab0b8b4341638358393bdae7c88fd4af64423c96dae53b2afda48e59d489b0d8ba3dbe4dd6255ab6245ae11f6b74f7569dceb917c2db2f26e7a7cdff6ae057600f39e0c782cc86b261f356d07fe9bc5b4f5f875357039e001fcfe018961c49c05010000",
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
      "Sat, 25 Jul 2020 22:58:06 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1595717874971",
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
      "8d545d6f9b30147dcfaf40ecb5f96a3e2095a2354ae81a2d212d21adaa6942c65c985b822936adba2aff7db609812c55b79728dc7bcfb9e79e6bfbbda169fa134902fd42d37d123de790bd7d79a4be7e2633c0512433379bfce9f9f6ba177fa7770f536b962f6f9cdf93f1b8a8220acdd0368da1c9689e6160179b752bca689ea28cd2a6206c8e9addc16860740dd3e88f8c6e016510870b923c49825f9ca7eca2dd2e65b4224aa318504a580bd3ed21de7e396fa7197d04cc59fbb86b5b3462ed4ffb7e8d29469cd064bc59171a720699075b4462a9a20207fee5317b8ba06d2b12d52f0403c298e60997ca0a1a4c93904479a6c805d3bb088ab0927cf8ac05f4b5b5b0a6ae86699c6f132f415b38d302c491c7df52d0ae9cd5529bdb572b673971e72bdb5b4fafade5a4355d2d364b7baddd5f5b8ea571e4c7a0b0da58bb545fb6f8508a54b700182789d2e4ca6c4d89c8ee6d9c7fb0c003852411aa18eccb3ca333445db333f243dfc0a1d91bf861077cdff48d01eaf91d3cea433ff001d51994b2028f1261d4d00c7af87ce4f5706078fdc01c793e42e247f26003ba03c0fa1ebd3bccf29a110e33c252cac8de64fdde99bb96e73a1b7b3a71adfadc21ca633e2b941f4f7d340e1706d5957e66c989a23423548852eb9cdbaee54ca6eefcae26439cad054408bfad9fe5e90a51cca042a34cec8a43b6a4815c8c6e4f96d6ac02ab937253163151f1e3a0b31a4714cafdab594ef67fdcc71507ebc88a623745545fbbcedcfea6d792bb8f69ee509c7fc0f3b20f4b0b4312577e29aac6dfff7e366a2d747153f7eaf4db8de53c48accac98c03216490e0aae97f9c5c092cd2ff7e874475f92c488078190eed191761718730ab9ae30c8a1b450adf4b4273d8378625a10066fcb462d8e99415274f83ec055b48786945f144143eee8e24e535390a26cbc52db0f72bdc35768d3f1a5a74d8dd050000",
    ],
    [
      "ETag",
      "PUukqQH3lKoVYCEDuMPRzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1595717874971"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc595516f9b3010c7dff91491f79a68650aa599d407b2665b249a6409d1264d51e4e283b93398d9262daaf2dd671bd2f0d209699178c1befbdff927ee64df8b3318a0df3427e8e3003dd0f44f09a27a9782fa66366b902553522f05cf25a0a18906855313fd635505efbdb22cfd89bbad227e47bde7ef4fb7b775948c7f418675dc8bb6b49d5060446afba7b5078ddf6a39cec09c18735666f9de9ac3b3acaac2ca9b683d5f7c692b192756596cc330988633d448c7e1db108215dedb23ff0f61d79dd3c0d0237f58430202f218ce7f5d08fe08b19adbf24a9c150c4692972206d9404c622da7829705169c8fb46b3419b9dec4f35dffc61f4f7cf714cd788c15e5b949d86ed02b5e7185d99a3f990a23f743dd0351db75c54fa54049ab09ed0a69e960b22941afbee3f01f81f345743d6ec536bb9dd3caec4c4da890aa6e7d377ad3aa0be119ee93ae6f0a65bd9053c809885ed0b4d863420448d90f9ecb3d2e8a8eece972195e8a8c732238253dd10fb40f2a53878ed4cfe132b8e0bba29ffbae77fa2e886697c24aa51ffb8edc687e3fdb44c1fdea4db8feeececffcb452205782eb2122c18e0ef76a7ce3f9d757e8348a3e71336a9499444a9460dd31d623f92b55da976026c1393a7f01dd64a9f3fe070000",
    ],
    [
      "ETag",
      "XPyA/5uuu791UyToDi5xWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
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
      jobId: "grouparoo-job-10-1595717874971",
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
      "000002ff8d545b6fa240147ef7574cd8b74d55401434315d57e92e89b7056cd3bda40ee3c1ce1619ca0c6ddac6ffbe0378c16dd3f40dcee5fbbe7399f3524348b9a3f14ae92125a0ebfb0cd2a74f7f59a09ce51e10789d7b98f69c1167301a8afbc7ebdbf9dd9c3c93abc77ebf8ca24536c79b24823a67594a80f7165e639db22cc12963750958d7d4bad6eeb64dcdb44ca36b6a652e87281cd3f82e47b81522e1bd6673afa3b1666c1d014e286f10b639d89b0f7a3349d95f2082374f699b928937df273e8f18c182b2b8bff04a111987f406369846b98c63f62af8720adfa078d358cbe8074a0013c2b258e4d24a18c2e290aeb3b40097482fd228cd85e6c36fc5a078f6d81efae833ba706713b49435853402be4457df6dd7464b2e24fb12fdce54b5057d748e66eec876d1d7eb836be00dcfd092ae8a2f3476268e8f0c34bbb8f06c1fa985ac8272055cd0b810e6e320828a1ce9dd35d379638e07881c040bcc61177663aa1dac596a370803938456ab1d842a048115986ddc0a54d235c0580580ab0822e72ef371cc62ddc2a6a60538243a007456a10c5703d03b866576bbbaa907561b5a86a1ec10b6877a1e532a604479c238dd755bb9721ddfbef1ddc57438f0ed6aed21ce22312ad59f567e5292904daaaa7daf2daf142529655254315767eadbee60e83b97151972c9c6b0c6e4c9bbcfd72cc4118763364ef10604a413b6ca87a3cc679ee33bb3e9607c4428f666be8fe432ecd741ecb1a62a9aff949c8eba9c4269557c67627bfe6032572afeedd99b489738cade807ad899155dd5d5baaad755c3d7f49ed6ea69464355d59f27d0b5ffbffed42a948a7cac3bc1ca8f85ed5ee7b9852ff7b810420a31398af8c0dae689a5fb03b74886ef2f439e218fc3815fbe3641e50b22fcc84e5228df13dd1492f78096d96e77f680323115af234c53df47bcba0e39176c2016fb5e9457a26ce4f64452569153a4e5e172ffa7cef45b21beb6adfd03bb1dddaae2050000",
    ],
    [
      "ETag",
      "o1zucIADCtqwYhPkPczcWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1595717874971"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc557df4fe240107ee7af20bd5768baa5b5ed2526875a15af820725b91f31666d175cdd76ebee8212e3ff7ebb6d511e38b3049b7b807667be99afec7c3b1d5e5aedb6f180f3d4f8da366ef1fc7181d8eacb1c891fea668cf882082e2f05cd39323a0a8d049c2b74967a839fabf8f179f9fba2389b3abf1611b29f0e0f2b144fee500625ee45aee47a861149b95cff29d7edda5efa7298219511a7656c6d15aba2b40e867178168e375d194d4bd7701a45fda328346ad76be7dfc96798717153aeb6904ce2f16078b62f07818d53c84dc5a4b9f47394a78835971f1737304d19e2bc410eca6f60516c23381a8da2b03fdc9701e629a3386d9865899bcc4ec4725bf6d368d48ff7cd9d42b1f5089cf4e370dfdc5cc06cebbec483cb7012f72fafb418caeb75abe632eee9ed18cd10437982de9b56c1e83d4ac4a0ec8e5cf212d4e574c112b496af0aacdc73461705649476a5a90bac2e7003d7039eef398107d67042132830cd55c47462bcf10b2a2019d327d5210da76aa1ac5a560d73bd13c66ca3876e6e90742dabe037d36be7035c3f83026a628fa9407c4659aa8987c93aa0f70d3d97fb662634d38c3e953d8e204d30087a6660da8e253f079a31822d74d3370375fcc0b434b1b6655b5dcbee5aba8505a6eb5b3ef07b8113061b31f5dd756b2383b6aa5c4df208335d515dd0bb9c0b7914f4e0e4bec63b4d4bcaed99e040eda219049a21334878033ad925ad6fabc7de5554ba752d4515588ef799a2d27dda1394634de8248104eb2a30e525da6dbc47f57c13f480091cdff4748f714332d921adedc9d6eaefaa28dda2568a0a00f84c45799ae4e788cc7555f29d20cc35b1770f0a7cd0b4a07c57beed7c53aacad5adcfff7fe7599ea9dd6eded4a45b50a52660799efba19ae4f7f5fbb875b49243ca15a3729ae3a89ce12c633d0c1e53553fa16641f51b4b7302e57fda732c6a5bebb5f517f6af15113e0f0000",
    ],
    [
      "ETag",
      "md7IXyTqxvZJpGU4YuLe2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b7282300000d0bb642d4ea1954f77848afca4813216d8303106417e313010ecf4ee75fa6ef07e0026848e63310d0dedc13b58b1626cc9d61f74284704eb16733e128f4915ac7c4b20fc262d22b21c53b532abf80a9136cba6b87c37b19b26ecba8f7d44891c797d6e64036eda402a8f2bb1d1d232afcdd9995f46d3a0b9ec92d361d1ed502cc489ef61343fa0b0e81907e62a6bf514a3e349efe6aa4b50a6be286ac21d6d1aec1b363a07069f6a7a9bd7de4df7f90ed6b04dda396f78d6d1b1bca6caa1bcd7c4e60bd8002a58cde958d4cfd9ebce3036e0bf594c2ba3cf2ba498530e7eff00265c2c7805010000",
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
      "Sat, 25 Jul 2020 22:58:08 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1595717874971",
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
      "000002ff8d54ef6fda3010fdce5f11651fd7022981844a684590ae6810b610da4dd31439ce25731be234769858c5ff3edbe1471855d56fc9ddbd77efded97e69689afe44b248bfd6f49024cf25149b0f8f34d42f6406384a64c634c7dfbf70f2906e3af6eca3f9976dfcfb753218545544a1195ae5295c325a1618d8f572d14c0a5ae6a8a0f452105e1ac6a5d1ed772dc3b22db36f191596411a4f49f624197e739eb3eb566bafa399509aa48072c29a98ae0ef1d6faaa9517f4113067add3b62dd189b5de6efc29a5187142b3c172518928191401ac1049a58c233a0a6f4ee99b04ad9a89a85e130c08635a665c4aab6830cd6292948522174c2f2228c24af3e1b716d017ced419f91aa669b9ca820cade0428b104701dfe4a0dd7af39936716fe7de6ce84fe66eb018dd39b36173349f2e67ee427bb8733c47e3284c4161b58176a3fe5cf1a314a96e11304e32a5c997d99a1291ddf938796585070a49225431d8950556bb870cbbdd0fe3d0c2b1dde986711bc2d00ead2eea846ddc37c18c42407506a5acc2a34c18d5c3ed7688acc08e310acc76140708612b88acb86b744cc3ec4147dfa1b78759fe1484c398b09c32b233597ff026be13f8ded21d0d7da73e778cca948f2be5a7539f8cc3854175a56f5972a6282f0815a2d43a27aeef78c3913fb9afc910676b0a09c29bc5b33c5d314a191cd1a810bbe250cc682417a3bbc399333e82d549f9ba2f62a2e2e741e7711c5128f7af6639dbff691f5f1cac132baadd54517de17b13f7b35e4b6e5fa7b94769f90acf7a179616c6243dfaa5a81aff7ffd6ad45ae8e2aaeed4e9df968ef74362554e663c88a1800c1f9bbee3e44a60957ec74b24caf7ef824488a7e1d09f7111169708b363775c4075a54865fc9ed0b6af7ae69e50000b7e5ed1b1bbfb8ab3b741f68215647cef45f54654466e4f249535390a26cbc53570773bdc36b68d7f3cacdae2e0050000",
    ],
    [
      "ETag",
      "44DXKtiWly38M+4zsyTVvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1595717874971"
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
      "95516fda3010c7dff32990f70a1241d0b493fa002b5b91526821d5b44d08b9f12573ebc49eed4051c5779fed8492974e91869497d877ff3bff943bd9f7e6753ae885e6047deea0279afe2940ee3fa5a01fec6609aa605a9945f05c01eada68d038b5d183ef3ffa3b713b8d5f77372fc120f95944af517a7d5d46a9f83764d8c4bd19cbd809054694b17f39bb53f99d96e30cec89316745966f9cd93dc97a2f9cbc8a96b3f9b7ba9271e294f963188e27e11455d2a1fb3184608d37eec8ff43b875ed5530f4cc9f969080843c86d35f0bc99f21d633575e8533c1a0a77821635015c42696722a7921b0e4bc675c3ddfeff9a3ab51e00797c1f02af08fe18cc758539edb8cc7157ae76bae315bf29d2d31f2076513646997253fd60225b52ed44b64a4adcda604bdfb0edd7f04cee6d1c5b0165bedd65e2db33135a152e9b2f7cde855afce8467b84dbab92a94b5424e2127205b4153b1c1844850aa1d3c571b2c4443f664b108cf45c639919c9296e85bda0695e96d43ead770313ee3bb62defba677fa661c4dcf8555dabcf60db9d1ec6eba8ac677f71fc2cd777d7ae6277b0dea5e72334514b8d9e1f78797a3e0a28f8eb3e80bb7b346db51a46501ce1d6333936fa936be043305dec1fb0bfcc7ea3cff070000",
    ],
    [
      "ETag",
      "2WY0wpHEcxwDk72fZuTxTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
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
      jobId: "grouparoo-job-12-1595717874971",
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
      "54",
      "eb",
      "6f",
      "9b",
      "30",
      "10",
      "ff",
      "9e",
      "bf",
      "c262dfb62631900c881475694a37a43c3a20adba871a430ee696608a4da7aacaff3e037990b5aafa0deeeef7b8b37dcf2d84947b9aae940152021a3f14903f7db863817252664090b8ccb8376717d7debd7bff907d32a7b39e255cd78b87c3ba8a56684ed659026dce8a3c043e58789d3867454672c6da92b0ad6a6db56ff50dd5308d9e65a8359643124d687a5f32fc1122e3836e77e7a3133316274032ca3b215befe3dd47ad9be5ec0e42c1bbc7b25da9c4bb6f0b9f262c2482b274b8f06a130587fc16d68426a58d037a157c39a6ef50b2eec4b2fa918640c29015a928add534214b231a1779452e999e6550862bcffbdf4640f1ec893df6d14774e1cea768297b8a68027c89aebfd9ae8d965c48f525fa5560acc3109da2b97b6ebbe8ec669f1a79e313b4a4abea0b4d9ca9e3a31e9a5f5c78b68f7065ab925c011734ad8cf92448a0614766b7c3745e39c73d45494204e1b02dbb35f067a29ad80aa2c0082353ef071186203003a34ff40087560f7aab0048934194da359ea42cb5fa18a2c0c4016075a5e3c8b474c09a1ee14837fb5644224d0f353d58295b86cdbe9fbf3915704e79c638dd4e5bb9761ddfbef5ddc56c3cf2ed66ef112912715ebb3feefca8252187d474fbd6585e38ca72caa4a9ea5c9d996fbba3b1ef5c356cc84b368198844fde4379cd22927038a0494ed620209fb2557938cae5dc737c673e1b4d0e0cd5bdb9dc557259f6736ff6d05393cd7fca8e8fba3e853aaaf8ced4f6fcd1f45269e43727af325d91a47885ea711b5634ace136d6dad8f0556da0",
      "ea03b5d7c118ff38a26efdfff5bbd59054e463dd1a56be2f6cf7a6c456b932e3420439a4e1c1c43bae6d09acd3efd845b27cb7194a845c0e7b7df9da04952f28e407f53087fa3dd175657947689a96a1ef082530172f2a2c6c19bb8a17dba1d48235a462378b7a4bd483dc1c592a1a762a58b5ab17b39933fb5a996f6d5aff00d428a230e2050000",
    ],
    [
      "ETag",
      "RYBFWSkRkqp+8MN49tRRSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1595717874971"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc557df6fda30107ee7af40d96bc9f29324932a0dda94a251da01ddcb54552639825b13a7b64387aafeef730cb43cb0ca88467b21b9bbefee43779f0ff3d268368d479ca7c6b7a631c5d953096cf52503f1b37a19012f89e0f251d09c837152a141a0ac423fd1e5d79ec5e7a57306e35f717e7edbcdb2ecf4748de2c91c1648e25ea425ed1906927269ff567673e357b11c2da0aa885395bbf18a55a1bcfde124eec5a3ddd082a62a34bc1d0c3add416c6c42af27ff2e3ec38c8b7b65ed21194f46fd61ef580e826aa7904dc5a4bef219e429b0faeae3e21ea52903ce6be4a0fc1e15c53e82eef5f520ee0c8f654079ca284e6b6659e23aab13b1dc57fd6270dd991c5b3b4562ef1138ef4ce2636b7381167bfb32e95fc5e349e7ea468b413def1a1b2ee3814e473003067902ef4bab60f40112d157db914b5e022d4e4b96c056be55e23a9c315a168851da92ae96edb46c3ff2033b08032f0aec2d9cd004094cf32ae3766cbcf10b2a1019d1e76a431ade7a85b2b5b95e98db4e18b39d1dbadb20195a56c981f1e67a3df900770924439ad81f0430d7c4ce1f2b70fb3bfc51fd3213bad0ccbc90bb8d802638f44dc70bcdd0b4fd503345b052b77a3d50cf0a4ccbd7043b9663b52ca765e90ed436fdd0b682c08fbc38dac9d9bcdd35762a68ab49b7b73d6002ebf6e1ac9c622134c159a2d041dd82b21dd7747cdfb45d4b2a4b33698608d72538047b80a842cf36bd8345a53b57252abbed469f29aa48937c503202906ba2bb725f02219a68325dc3c3ba75e5b8b6dc519129a5e5b99f3ffeba14d896c7c1d53d066fb2d29dac9295e35bee67cacab634d9cf2913f39526b8cf05d595608a2b7054b7a4bceab7cf36db9e294fe6ffdd3e87947522cbf475bfef5652da43559272dd76f0a1a4e4e7ddfb85abbb12c06f1895f7390eea166719dbebe019ad4628aadb60d50fe54e90fc577b89c5c6d7786dfc052f9cb076400f0000",
    ],
    [
      "ETag",
      "qov/G0shu2CeSVEnDUBggg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 22:58:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
