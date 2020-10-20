const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1603145340774";

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
      "4e",
      "83",
      "30",
      "00",
      "00d07fe9f358360406bed10d7010614b83202f4d810e6ab959ee18ffddc5f307e707902ca37d8f8796d306bc8295c8c63edb7bad0e95fb83db657e9dc28c97162aa241887baae4626c5ab77357a2ceb119370af4c2a6449b96c12a85a2974dc77b38d696a3a1e8eaefa3a46ecb25f90c608665122812470887f158fb5cd24fb8644e6e0f907ce1b952ec29f0d95b97376778b8dc8c1b4a92f49d9f9969f651c5501b8df5c83e1276dab8355f8f0a291ab7332d630a8bb42d0e9ae6706fb16abdf20d12821da04bc704ed317bce5e54c3d881ff261ed68e3eaf90124105f8fd035625cd9905010000",
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
      "Mon, 19 Oct 2020 22:09:03 GMT",
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
      jobId: "grouparoo-job-1-1603145340774",
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
      "c8fbda0408a47948d19aa5b48d94901548ab6e9a90ed18e696608a4da7aeca7fdfb569b27493da4fd8bee7dc73ee8317f4c0cb0d1a23c2f3c786d5cf9fee05412788299cc3ebfafeeebaba24a378f9db1d7d21be3ff8e6dbf9640208ae59126fab8275a4686acae4781d77f35a3415ae85e840a28edb714f1dcff5fb9eef0c063ed0242bb2052f1f80fc53a94a8e6d7b2fddcd85c80b862b2ebb546c0feff653cfae6a71cfa892f65b451b44a4fdaee6e74250acb82827eb18f41bc9ea946d312fc0c15fe2869cbdcddce578dbcd01fcc429c3948aa654da15a4a0a2cc78ded4262b1abf20e3f2e880e26011cc128b8aa2d9966989b7ecc4da608553f55c31eb225a2dad7978b18a96d364be0ad37876152ca7ddd96ab15e86b1757b154481a5302998e15a13ebccdc42b880fe8649c54ba39ee867adfcda9ff9ff43d1049096ac0da603e714bb4367443232a0d9d0eb93cc61840cc9a08f3de2d091cffc0d61187846d4b070294a72ea7b9830920e86cc4f7da7d74f87bee3a499ebf48893f57b5e6f847627e857cd153be7b21292b71d42b7d13c09d2245a87b36912981232dc14eabc35a60b38f6a8a04000bd53d34e47b90025ddee799804d17496cc6f8276c20b9663fa1c3fc28c335c4806685c43f314ab9762030d43e174199c03d84ceceb3e28d1f8fb0bd23dd72e8e5a7ea02730406d57992f8a93681e5e1a3b7bc40d2e1a03796a0fba8c8c17daf4ee07006145db24e87a1d4477a87d8a58c66a56d28f87096013f8e847dbafbdfe8b63ad22",
      "15dc6173a8d41ab466ed067153ec81ed8ddc1e32e05afd1bf35dcfd9f74ce7d019d99695eab5a076eda1ce56ac9107100461f8a1e9d5ee0fb746c46074040000",
    ],
    [
      "ETag",
      "UjYQpGb9SMz19Bb447Z4/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:09:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1603145340774"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d93616f9b301086ff8bf795486125c984d40f49433b249a740995b64e55e4e083b9333e669bb45194ffbe33edb269ad44bfc0ddf19c7ceff9e5c07e4a2d58ccb6b2fad582d97fa8c07df1c10a6cab9ca55783da020b18385e11a99f16aebdacbea658ecbe6d47c9dccdef92c7f373226cf1036acee2032b25286159fcfdc034af81da0a546dad375d1630b76f7c719dafd2c515e5350a9f2f6eb36c3acb12760c4e8d823bbee9f877b4dd1f03f680db1594604017e067690c3e40e1522fd3f2ba5130b0d89a022cebe0ee4365b06db8411c5065100ec2f1f02c8c4667d1703289885358702751137abba6f19843c7d50a1f49240b3f1261ba980497dd734775293a213e4c17f938eae6fb1728a5b1ee79277fc0176dff938abf13a40b90aa0faa400b307d946c365c0803d6f6926837bc694ed86cb9cc5e415c0b8352f4833bd90328b73b0197d972fad66ac9367f77359fe6c92bc23a32c309c9d3eb649d4faf6f3c77ff72bfb3bd037b6390bc62c1db241c469f4693f1f0d93917e8dd44e7c4ceb410b082d30ff0593a16975c5938fe0615adf9e65e030000",
    ],
    [
      "ETag",
      "nxNtuFgXIocvYb5EDtDZEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:09:05 GMT",
      "Server",
      "ESF",
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
        query: "SELECT COUNT (*) AS __count FROM `profiles` WHERE `stamp` > ?",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "1970-01-01T00:00:00.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1603145340774",
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
      "79",
      "4fdb3014ff2a91f7cf36d1d6394a9a4a8855258cb01ed0a6a05d6a6dd70986242eb1c38450bffb5e1cca2124902cc5f2fb1defca03ba11c51af51115e96dc5cbfb4fd792a23dc43549e155fc90b7d7a72731758eaeec6e76921de783e9f9c1012044cd5224df64bca5645532aefa8b793b2d65b521a5942d106a392d7b1fbbb6d7753decfb1ed014cf9291286e807ca5f546f53b9d9d753b9532cd38d908d566327f7aefdc399d4d29af39d3aaf3dab10326aaf3aee7612619d14216078b39f8578a974b9e13914106cfc435fdf65ab92d48de4e017c2718278cc9aad0755620c1649188b42a8d2aea3f2093e58b0b9a87a370185bc3e962125b9fbf7eb106736bb9341ad6f16c3ab656504f2232ae56d6e549380bad95d260bfb2fe5418bbdc3a049b35575a14c6242634e3b5c1631ba2b7bdaf094413c59be0d2c7fbc4eee18026d46749cfedd204734a7bd4ef1297621678dc5b534e80a76b75c322852cf66d6677a9ef048ce1606df73ce2fa5ee0b8818f6d2771038ffa6b2fb17b68bb87fe9542f323a1365289a619e87216c5e1329e2d26c3411c9a32125265faa849ae2ee2659e1a8a04d03b756deba890e05477369ac4e16c308ca38bb019e688a784ddcf6f619c09c91407342949ce352fc7720d4d4367d3791447d3c960040c33a1b31d42a1feef8767427cbf315dd6e68be2681ccee3c1f8cce4b0035d90ac32a8bbe6826ce84c0bdb70628cfbe6b431c6bfd076fb1788b0928d2e3a5f84b39fa8799af18497bc601f4f15c026f0d18fb55b7380c2a2830b6c9416b0424cd51eace4cd2a89dc24bd63779d2040065cea37b1c077763dab356a459ef3423f16d4ac39d4d99855ea090441d8804934f90ed1ffd66739af64040000",
    ],
    [
      "ETag",
      "iKoqjJHTb2Dh15lHlFmAOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:09:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1603145340774"
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
      "90416fc2300c85ff8b771c950a7463aac4614c6854aad0d6c109219406b72b4beb2e71872ad4ff3ea7db25b15ebef83dfb065f55738618f2aafceed0f67725f2bb2f32749d6127574b8d439800b22a859c2ed23e377b3be3fcbadbcd5d526eee9372b914c2e94fac15c437282a346707f1e1068daa51be9d4e9aba8685e2bef542b2ddad5fd79908359dbdb0dda7e9f32a5dc3701c2670a13cc3022d361a7dc7d6d20535273eac53756b3070d4598d0e46787c282d75adb2448128c12c983e86f369f4308fc2c52212ce90565c5123e8fe03c4858995c9e8eafc6002d8b194d4c578fe7839f4818effecaa67746f96c4d7a1b77c0afffc5fc86762c9cab6c3096825cbd8540c71a18cc3e1177e8318906a010000",
    ],
    [
      "ETag",
      "17LyblUr2tbwTT3sIgH+Ig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:09:06 GMT",
      "Server",
      "ESF",
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
      "0002ff1dcfe19242400000e077d9df697024f70f430c096599fdb3b3d63a52c84aa9b977bfe6be37f8de8050ca38c753dfb20e7c8385c8fa9aaefd7e6b2a31eda6da9a37d45db8e837a3b5c3d77b39420a1b232e36c6d0e23a44f45121f81a0c8b78d8dfab36dac383fc980bc79b0f558684869c96a39c88d876526d56e2e944eca4e66d7fed28ee83708b20f1d36411087f2a527ecbb5d9c86c58e6e8e54554582e99392102efb66c1524cdcba756ed5ac9e5ceed5252253847540babfe2757a124a6b38bace878f60331062bc09e4333328e9bcfec4bd5f515f86fe26919d8e76a3232b211fcfe01aef4f69e05010000",
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
      "Mon, 19 Oct 2020 22:09:06 GMT",
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
      jobId: "grouparoo-job-3-1603145340774",
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
      "8553616fda3010fd2bc8fbb80281040248684569ba2295b08550344d53e43897d46d12d3d8695555fcf79d9d825a556a3fc5f6bd77efeedde585dcf32a253392f0fca181faf9db9d48c8190145737ccdcbc25ad9df8374e7dd0fbd5bba7b4a3c3b9fcf11c1354bd2725f40578aa6662067db4d2faf45b3a7b5105d4cd4b5bb83b1650f9c91ed58aeeb204d42915df3ea1ec9b74aede5acdf3f4af77221f202e89ecb1e13e5e9bdff38ecef6b71074cc9fe7bc53e8ac8fea79a3f0ac1a8e2a29a6f37a8df48a86328292f747b27629a9cbfcfdce3b4ece5087ee40c2863a2a994ae0a533051653c6f6a9395cc5e88a9f2cd816cfc6bdf8b3a4c144d59c5152de1ac93524563f5bc87ce65b85e7596c1e53a5c2da2e53a8837de95bf5af4bcf5f576156c3abb2b3ff43b8a2605186e67de3937b7002fa89f8254bc32ea917ed6caaffe2c3f0e4513505a421b8c5d6b4c07136b9a6489cbb2893d4a320b926492b8236a27169b3ae0a40950e41951c3a295a826c321b51d17623a9940eca4ee384ea6d9289e3a19b386d3816bbb537238234f355770c1e55e48de3a4476e132f2e328dc06de22f24d0b196d0a75d116a61b785ba3c20611f4494f071de50295b4ddcb20f2c385172d6ffc76c2d79053f6bc79c01967b49080685aa3790aea9548d130122c56fe0582cdc47e1d8392ccfebe10edb9aee28de5277a8403d4e52af3259b285c063f4d3947c40d2d1a03796c0fba8d8c17bae8c33f04e28ab649c8efad1ffe21ed530819d450b1af87896013f8ea473bae3d4271f151452abce3e630a935580ded0671d3ec893d1edb0362c0b5fa1073a7eed1339d436784122af5da50bbf6d8672bd6c813088338fcc07875f80f629443ee74040000",
    ],
    [
      "ETag",
      "gml0M3+NdWCk2ChaWwbC3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:09:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1603145340774"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93614fdb400c86ff8bf73595521ada2d121f5a5646a5d0421b24a4095547cec9aebbc4e1ee52a8aafe777c01ba694c0a5f12db79acf3eb7bb387dfaa9210c3832a1e1b34bb2f05ba1b1f2cd136da597ed554598400d08982c9f3cbcdf3b7a7d02d06faf1e22e110e7727517176c684cd7e612920de43ae504b0bf1cf3d54a2446ecb483765b56eb300dcaef6c555ba9ccd7f705e92f4f9fc3649c693640a87e0d8288513eb96ff44dbfd21800d3d2c31478355867e96dad0063337f332ad286b8d3d4b8dc9d0420bb71f0a434d2d0c518f2bbd41af3f0c07fde8741085a351c49ca64c384515a3b72b1e0f1c39a197f4c422a17fc2846963169cb7cf2dd7956c85f870364f87513bdfdf40ae8c75af3b7907dfb4fd4b6af149902f40e92ea8c04aa2e9a254bd16521ab4b69324bb16757dc4268b45f201129534a46437b8551d8076db2370912cc6ff5b2ddbe6cfaebe8fd3e907c23a36c311496757d3553abebaf6dcfddbfd4e760eedb521f68a456f937e187d3d1d0dc357e79c9377139f133bd3600099e01fe052398873a12d1e5e0075a3c73a5e030000",
    ],
    [
      "ETag",
      "CHjx9w0tO3lqFXLatey24g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:09:07 GMT",
      "Server",
      "ESF",
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
        query: "SELECT COUNT (*) AS __count FROM `profiles`",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1603145340774",
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
      "02ff8552db6e9b4010fd156bfbd24b6c205c6d296a2d8756480e6e6d48db27677719e83ac01276491545f9f70ed87113454ade60e75ce6cccc3db9167546668489e2a683f6eedd4e32724240d3025fdd4b917edac5f6af78177fbd359b5478e67971768608d1b314ad9a12c64a762d07354b3793a2955d435b29c7283476c69667da96e3da8ee9fb0ed21494f952d4d748fea375a36686f1683d29a42c4aa08d50132eabe3bb717b6a34addc01d7ca78ee68a089325ef5fc5c4a4eb590f559ba41ff4e41bb858a8a123bf84fccd897e7ca1341ab4981e05bc181722ebb5af75da10497752e8aae1d54c9ec9e0c5d3ef9209b70192e92d16295c6c9e8fdc70fa3f966b4dd0e1aa3afebd5c5e80af3e4a20475857a19282dea412da1ac845ee990377a39e49e403555b02f6e7dd3a356604e59ce7c9e07b6cb7213180b98ef529b997cea809331a0c8d3bdfac0a2b5ac5ddf727c6a53d7621602dc9c4ebd53df77bd69c6bccccc4e5d37084c16908713f2b7151ace856aa412fbd4e4e73a4ac26db24ee3c53c09871839ed4a7dbe6fae0ff1b44f8d2111f44aae87be2a243af5238ce2245ccf17497419eeb7b68482f2bbcd0dee2da7a50244d39656a0a1bd90190e8d7c5f6da2245ac5f365af85a790dc35fdfb8f345cff3e3cad2187166afef690113c14de3ae8c7f342281e18ba288dffb851ae7a0fdec27eb3a2ea7b39b27dcff2c8006ef58b5a605b583b9e55af0815d4fa10687f5ee4e160d6a923088bb890388abf61f51f427a4df8dc030000",
    ],
    [
      "ETag",
      "5ViU+jN3XNjNFv0pUi60Dg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:09:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1603145340774"
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
      "5d",
      "6b",
      "c2",
      "30",
      "1486ffcbd9e55a68b19b4ef04245a650dcd64d181b22319e76756d4f9b9cae88f8df3da9bbc9c79b27791f7286dfbc3ac018f679d6b4684e7719f29b5b2468db82ad4c355516c103649509f9d5254fcd68d6c5f397656a87cde77d3d4aa693891056ff60a9607c8634c7e26061fc7d864a9528d7763b4d6dc542f1a976c16afdb1785e2412947470c17a13c7d359bc80cbf6e2c191f609a668b0d2e85eac0d1d51f3cac95a55d605fa965aa3d1420ff70799a1b65686c897c48ffcf0311884d1c3200a86c348b882b4e29c2a4137ef202d4cac8a843a51855000d32fc53aedc73f17074e68fbcfce4e8cf6d590f45a7495c1ad7e4e4e8945954d8b1e68257fb1ccf9b6bf5c01e77ae34f68010000",
    ],
    [
      "ETag",
      "ZwR9q8BwLCOHfs7qX+p8RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:09:08 GMT",
      "Server",
      "ESF",
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
