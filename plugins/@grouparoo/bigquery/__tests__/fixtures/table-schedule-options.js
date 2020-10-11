const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1602380764911";

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
      "8b08000000000002ff1dcf4b7282300000d0bb642d0e208cd05d2950a908c8944fb3612204c24782317cc4e9ddebf4dde03d01ca737cbf679cb6b8076fe081647d9b6f8f543394f7e29415034a3e6c5f5447a190ce695915dd5e88c9eaac74ee18d7ec320d9c79329778b778107dd5d7402e1b198d126af2967443586b4544b9173a34d0ce37cb6624fa86a6a7dc4297cea209adbce28b395ea090b09511039e02bf8fac1ed3491e7b299b3bb5f51d0173bba22c6d48e98b175570afdee42afbea474d48768c63531aa075688bf0b07caee2dc4d0ed800bc0c35c3f7ac7ecd76aaae6fc07f33e38f01bfae06460c33f0fb0726bfeafb05010000",
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
      "Sun, 11 Oct 2020 01:46:05 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1602380764911",
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
      "0000000002ff85536b6f9b3014fd2bc8fbb82621256f295ab394aee912b20169b74e1332e642dd01a6d8b4caaafcf75d4c93b5aad47ec2f63de79e731f3c923f3c8fc884843cb9aba0dc7eb815213922a06882af5f8fafd9ed0f4fe45befe1e3c5df8bb38bcfd7d5c3748a085eb324cd8a145a5254250339d978eda41455414b215a98a8d56d7507e6b135328783deb8db459a84345ef2fc0f926f942ae4a4d3d94bb71321921468c1659b89ecf0deb93fee14a5b805a664e7a562074564e74dcd4fa9605471914f371eea5712ca0032ca5374f09f1885272f33b739cdda0982ef3903ca98a87255bbc2144ce4314faa5267259347a25d3e3b10cf5eda73df6022adb23cc86906474644150dd4b600e3cc5daf8c8573b67657337fb176026f7e6eaf66edf97ab959399e71756ebbb6a1689882e61a53e344df1cbca07e0452f15cabfbf573adfcd49fc5eba1d4049496d00483a139a0dd91390ee370c8e291d50f6313c270140efbd40a4d36ee412f0a81224f8b6a16cd45de83ee30b4e838881835835e77408371d4b70233a416b37ae33ea511d91d9187922b38e5b21092371d2257eec2b703dfdd38f3996feb12625aa5eab4315617f0dca3c20211f4464dbb3aca052ad5ed5e38beedcee6fee2d26e26bc8484b2ad7787338e692a01d1b4c4e629285722c2861167b6b24f11ac27f66d1f9464f2eb91d43daf5d3c6bf981eee3006bbb4a7f89e7bb0be78bb6b3475cd2b4d290fbe6400ab47c83b5a1ebdd6f44e28e3659c8f78dedfe24cd930b319490b3f7a789601d78ef4fdbef3d4271f351452abce3ea30596bb0129a15e2bada03bbdf1b8f880697ea556cd837f74dab73d41921835c3d15d4ec3dd6d98855f200c2204edfd1cddafd03f4e2f66175040000",
    ],
    [
      "ETag",
      "K2ZcjXSonySw+JzJFJBZuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:46:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1602380764911"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd6e82401085df657a0b51aa4525f1025b6b4d94fa83bd68d3981506c4024b77178d31be7b67a9b54ddba4bd8199e19be59c03077849f2101c5825f16b89627f11a39aea6286b24c95a45bc1738960002a161399bbbbce76327d687a6a32a8798fb6556b9471b74b840cd69831700e10259886129ca703e42c435a0b785a66f9b2ea0c50fb420fe7fe6ce80da8cf78a87b6f311ab9bd511f8ec67931648a2d2bfe1f6bcf4703367c35c30805e6016a2d85e01b0cd450db942c2b5234252f4580122ab87a100b5e164c706ed2c4b44ccbae5f36daf596ddec581671290f984a784ee8624ef24071c5d219df9149b0091055497ea3eabaa57112563e7439f47cbb59c9fb0a90b2284971f9374872d78cbec207764ae03bc7325ee6ea4cdd8eeedddf8ea3483f8fba71fdfe0f422a0aea8cf8c3717feebbe389e69e4fde7b7b85722238e528514768d59bedab965d7f4ff59aeba4e93d8e12251a1030fa39ee12054ec45289c73788a589cb7a020000",
    ],
    [
      "ETag",
      "nAw9vPQV4NtPG/NZ61/3ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:46:06 GMT",
      "Server",
      "ESF",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1602380764911",
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
      "db",
      "6e",
      "9b",
      "4010fd156bfb56c5068c0dc692d5ba0ead902f55304ed4be38bbcb4036c12c6197444ee47fef008e9b2852f2063be73267669ec99dc86332264ca4f71594fb2fb7929133029aa6f56be216f364fee3eaf27139772fc4d33c667fa793092244cd52745764d055b22a39a8f166dd4b4b5915b494b28b42dd7ed772ccbe3d325d67e05916d21464c942e47748bed1ba5063c378b1eea552a619d042a81e97bbd3bbf1d0378a52de02d7ca78eb68a089323ef4fc96494eb590f964b346ff4a41b9851d151976f09f18b3ef6f957b82ee7a29821f0407cab9ac725d7785125ce68948abb25125e367d274f9ea83acfd853f8b3a5f3b3fc3dfcbce75818a375481baee2c826510752c136562505ae48d48445906b5c03166f07eb635816a14698b5bd774a835323d96309727237bc81213181b3177486d66726f00839801459eaed51b16cd65de1f309bb9d4649427ce70381a3aa61dbb1eb803d3e9f763db1b0e2c2f7118399c91c752683817aa904ab461c9551844fe360a37abd934f29b1809ad327dde36578778dda7c69008fa20d7a1ae0a894ef5e48255e487d359145cfaedb2169052be5fdfe3ba129a2940382e39da17382f72b1f1c33fa47d0a21811272fef91c11dc143e3bd597c341289e0eba288dffb834ae6a0f5e42bb3cb1ab7b39b15dd36c0e5dd352bfab59b687b5d3c1d48ab0835c1f03b587430e47b34a9d4058c499af82d52facfe03f4406539b6030000",
    ],
    [
      "ETag",
      "bf7pKfKBWVwMK7QizKdbZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:46:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1602380764911"
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
      "9d",
      "94df6f9b3010c7ff17ef3554363fe3487da02beb3225591be8cba66a728849690966b6691545f9df77b02a90cdc996bec0e9b8cf7d7d77f8b6e8392f97688416f9ea67cde5e6c38aebbbc6987355175ac1ab12a5e26880b8662b889c25cf715c0cafb368fa32fd96d682f02fb3f0f2122254fac8d70c8db628cb79b15468f47d8b4ab6e680e54b08d09baab1c7b324ba89e6e0588b65e398dd4f26e1d52442bbc11ea8a4c8f282ff381fac65fac8da23bf6171321fcf6e4e536c2dea5277cca7c9d730398d2c99ee895c8749743a5e69b6ae3a20194fa33809a7b726ea6137404f6231e71997bc4c79d354e8c8134ff5b89997825405b7948062b9426d70fb6125455d312984051ecbb6888f6d678803dfa584405c2152a6735142e87d0ca7435a6856ccc52b4c0b110c11b2b5617259fb7c01bfd3967168c55ab2d7059772b377d917b8b3b18d2d6c5bb823c88507077108a56e44db12fb1aa463bd73457a6c23421cc70fcc22c1fb2be9b1ad0875896714f10c8584158cabd3be20eedf9df20e3b45b17ba408bb63cf11e8716d011ea6e602087da7003d10b009711db3401777243ff0860e91c30e791e25c6fcc13fcf6fceffc7847110981b3434fc45ff937f78989ff8ce91bbd0b1ee39023dae15f087f67e000f6f57fd6aa3b9ba9502d686e2cdc6a07ef07b7f7c14cd4e819d36d2b2e6039432d8e79f738d46192b14dffd026a6bca452d060000",
    ],
    [
      "ETag",
      "NTkSSl8DfEMvMZcuo1eJNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:46:07 GMT",
      "Server",
      "ESF",
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
