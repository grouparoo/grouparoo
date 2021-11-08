const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636337013394";

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
      "49",
      "92",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "bb642d968a08e91d498b80e2048e9b548c5f042222838856dfbdadbe46fbeef05e880b0145c1ca6b0229fa420defe1b6688f338358617c9f66f2c955ca68208c15d91e2bf79a0fc36a5f9259f7d29fe98671016ba2417c8b05169bf9299110685548211bfb376cab1d5829dfdb8eb3affd6c142f7b38d42dba54a43fa0a7c259649ebcf8463aa791d74b6d2df06cf3ccef87c8daae5d060ceafab1f19bd1f078f6f15e721b9bf58e30e93d03bb1af254e953622ac44daaab9874e514af57a5ee68aadb581a36a59d38e3889f073b9d1f70bd38a48bf6c7c7ff855a081e599443c1a2f77655c3b885feeab3b2c9e0fd9f00cf21473fbffce360c619040000",
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
      "Mon, 08 Nov 2021 02:03:35 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1636337013394",
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
      "85536b4fdb3014fd2b91f795be48df5235aa1220529b6e490a42d314d9ce4d6648e3623b4c15ea7fdf8d433b10127c8aed7bce3de73ef2421e4599922961227faa40edbf3d4846ce08189ae3eb75bcd7b0f1ef59359a3fa92262250bc7f96c860851b334ddee0a686959290e7aba89dab992d58e2a295b98a8d56bf586eed07547dd9eeb4efa48d350644b513e22f98f313b3ded748ed2ed5ccabc00ba13bacde5f6f4de793eefec947c006e74e7bd62074574e753cdef85e4d40859ce3611ea571a54025b2a0a74f09f98b28bf799db826edb39829f0507cab9ac4a53bbc2145c9699c82b65b392e90bb12edf1c48e42dbd45ec705954db3229e916ce9c941a9a98fd0e9cab70bd72fce06a1daee6b1bf0e926871e3ade6edc57ab95905917377e3859e63282bc0729d9973616f015e503f056d4469d5e3fab9567eed8fff71283501a53534c164d41dd2deb83b61191bf16cec0e58d605c6c66c34a02eebf2491ffa29038a3c2b6a59b494e5f90806fd749825932ecd923e75fb091b0fc7c904c1e79476f960c2c9e18cfc55c2c0a5d03ba945d3217217fab197c4e12658cc63cf9690d1aa30978db1ba80b71e0d1688a04f6a3ad4512151a96eb71fc45e385fc4feadd74c780939e5fbe809679cd14203a2a9c2e619502b9962c348305f799708b613fb710c6a32fdf542ea9ed72edeb4fc448f7180b55d63bf248a433fb8b6768e885b5a5416f2dc1c88022e558a9e0fbf11871bdae4203f375e784f9aa710325050f2af6789601bf8ea3f3b6e3d4271ef51451bbce3e2705d6b7005cd02095beb893d18f65c62c1ca7c888d7ae363cbea1c7546d842695e0b6ab61eeb6cc42a7d026110671fd8561dfe01c27c8e6b73040000",
    ],
    [
      "ETag",
      "GTyseUIYbu7AqrlSbnbR8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636337013394"
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
      "c1",
      "4e",
      "e3",
      "30",
      "10",
      "86",
      "df",
      "c5",
      "5c53a951ba858dc4212ded5229b4d0860b2b14197b92353899603b5d5555df9d71802e8295c2c599997ca3ccfcf9bd674faa962c660faa7c6ec1ec4e4a70373e58836db5b3f468b0b6c002068e9744aa7039bd789a8be7bb723a1fcad1b6bdbc31c9f9391156fc818ab378cf0a055a5a16ffdeb39a57406d02755bd5799705cced1a5fdc64ebc5f217e5154a9f2f6fd33499a43376088e8d923b9e77fc37daee0f017bc487351460a016e067690c3e82700bbfa6e555a36160b135022cebe0ee4569b06db8411c5065100ec271348ea2d36118453f47c46914dc29ac09bdddd078cca1e37a8d7f6949164644982ea6858beedc7aa964b7880f17cb6c3ceae6fb087021b0ad5dde0b16ca58f72ade3bf826c26752f36f82f4a794ee834aa825983e4a353997d280b5bd24da9c37cd119bac56e957556a6950c97e70ab7a00edb647609eae92ff494bfefaa7d54592cdbe10d6916b8e48b6b89a6db2e4eada73f76f4698ec1cd86b83642a0bde4fe17074f6e3743c7cb5d814bdede83bb1332d044c70ba2997cab1b8e0dac2e1058a02572387030000",
    ],
    [
      "ETag",
      "i1NCDkFcqZgCF0d4vuHQrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:36 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `first_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1636337013394",
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
      "6f",
      "9b",
      "3010fd2bc8fbb2a94920810089547551ca36a494b684b4aaa62931c6303780a96d3a4555fefb0e68da66935a294a727eefddbb3b9f9fd09695099aa298650f3515bb4ff73c463d4415cee054bfa8afbcedcd627e72520cdd71e95bf1b57b7d7a0a0cd6a8242eaa9cf625af05a172ba5a0e32c1eb0a0bcefb90a83fea0f6dd3364dc7189ae6c40299a479ba60e516c4bf95aae454d70fd6838cf32ca7b862724078f172ae3f8ef44af07b4a94d48f1d753091fabb9e67392758315e9eae96e05f4b2ad6b4c02c870a5e8549fcf538f380e1629001f991118a09e175a99aaa2005e165cab25ab459d1f409b555bef98396dec29b47da86251b0d4b6dbdaeb63d6d933221d5bac405dd68dfc2cb0b6d2328e122911bedf687177a5a27f0036d1504de32d23e9f7d01bb844ac5cad62cc2714e1ba3e771f8ffdf4123c00a4bda816bc7b0f1d03526711a3b2475cd719c1a348eddd819633336c8c4a25612530c3ad5646f55b8e4a5852decda23cba0ced89ad866ead8a963503321ae45921176c810bb964dd0be87fe08a6e839931597ac1b0aba0dfdc85b47e12a98cf22af6d23c575aecebbe29a26ded6a9a04920bdd3d7be411907a766c27e1079e16c1ef9375e77a90b9a61b25b3ec0b5a6389714d858c0a81515173c81a1a1abcba51ff997c16c018af6a6ae0e0c89a63f9f5e05d1ae6aa7acda5f340bc3d91d68b01078f70f0675d816daefdfd8dde0bc6e292dbf8dbafc8f1d8086d0cb6b343a8aaca3c846fb5f7bf8f4102c76e78cae575e7887baa390a654d0927cbc13406e818f9ee7e1b100159e0bb84805312c20918d0711b45b4456b49d1cd4f06da3962cd47f9865db878937399a8cb4a0a57a6ea87b2ced0c1ba8962f2400617f023ff80ee85f6b298043aa040000",
    ],
    [
      "ETag",
      "/MuPEkVLC++m185nI4bQ8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636337013394"
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
      "51",
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "fd",
      "2f",
      "d96bcbac1587820fea3a2d13d9aaeec12112e36d176d7bbb247588f8df771347196c2fcdbde7239c935ed851967bd6673b997dd6a0ce771998573b24a0ebdc683a2a2c35308f81e11929df7a983c8fc4e2743f5dc7c929982ed7f8341c0c48a1c507149cf52f2c9590ef35ebbf5f58c90b20db765b1d4962ce95dde2f9329a44090105ee2d305fcd66c3d12c6257afb1a45269b3754b635c2c93783ef9cfb7b97aec80bb045250500ab0312a85071026b60d352faa1c7c8db512a099133b225358575c21fa84f86d3fe886dd307c680561d8eb902e47c18dc492a4ab05e563060dcf13fca27ecc0a941ba96aeabe278203d7c34e9192e0c2fda6bb0dfd08a5fc43b71b7acc85ccffb9a0d328860537dcf29b9f60a3b301fda2904a6ab0fd5ab7ae63b4fd0dbd8b5135784c70fa5b53696efbf51b23a6682c0a020000",
    ],
    [
      "ETag",
      "V9oRKBcSv/HZIRv1HTZoFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:36 GMT",
      "Server",
      "ESF",
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
      "300000d0bb642d4e2b224977f2b1b50d0544f9b8c9d01885201f9380a59ddebd4eaf51df1dde37c829655212d556ac014f60cc67684aa76f1db45627be8c99d66bfd927734f8da868dc1d3983f04855e37d0ec9cd00eb012d83e90cd2baf55292c188a4a9f33f99166732fd745a5c54593ad9d54bd7b8be3fea46d22f48cd2d5b82b48a8608c2eed58bbd13572e95ef87327795cd4d8cb8a177284be71e1148f12e662b61e6497c1428f323c0c2d4db64cf22154863c3b57d3336c7fb019c77a6c11edaa15e7e3a585db7e286394107c36dd2071eba550bbc3f4eeeeff0213c03ebb523049cadb76dd406802feea133576ecf6df62b96002fcfc02284dcb5d19040000",
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
      "Mon, 08 Nov 2021 02:03:37 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1636337013394",
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
      "6b",
      "6f",
      "9b",
      "30",
      "14fd2bc8fbda2450f22091a2354a68cb94900e48bb699a903186b92538b54dbbaaca7fdfb569b25695da4f60df73ee39f701cfe88ed5399aa08c95f70d154f5f6e79864e1055b884dbe887b7e478615fc830b81afffd16f1bb5bf2389d02826996c4db5d453b9237825039d9c4dd52f0668705e71d48d4713bced01dbaeec8765c77dc079aa455b164f51d90ff28b593935eef20dd2d392f2b8a774c7609df1eef7b0fa7bd9de0b79428d97babd80311d9fb50f36bc509568cd7d34d0cfa8da422a55bcc2a70f09f9867676f337719de764b003f30423121bca99576052908af0b5636c264459367645cbe7a41b1bff4e7894578d56cebb4c65b7a62e558e1543deda8751ead5756109eafa3d52c09d6611acf2ffdd5ac3b5f2f37ab30b66e2efdc8b714ce2a6ab8d6d43a33a7100ea09f53a9586dd4137dad955ffa13bc1f8a2680b4a46d301dd943ec78f6382bb211293c77901536cd322f1b0db09bd964dca7fd3ca3187846d4b070cdeb21cea8933924b56de734ed3b85977a5e3e4a5d920f07eec01bd98583f627e8513045174ceeb8646d87d04d14247e9a449b703e4b7c5342819b4a2d5a63ba80d71e151408a00f6adaeb28e3a0a4db1d84891fcde64970edb7135ed21293a7f81e665ce04a52406301cd5354ac780e0d43e16ce52f006c267675084a34f9f58c74cfb58b572d3fd21318a0b6abcc13c549148417c6ce01718dabc6401eda172428e12207cffbdf80830d6d73a0ef1b3ffa89daab881654d09a7c3e4b009bc067dfd961eb010a7b0f2a52c119168748ad41046d1788995a8fec91337690010bf52ee63aa78796e91c3a23ddd25abd14d46e3dd4d98a35f208d27f924d189a56edff01ed3c726173040000",
    ],
    [
      "ETag",
      "RX8LoaD0GsNIP9xJRokjcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636337013394"
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
      "4f",
      "db",
      "301086ff8bf99a8a56e9c216890f2d2bac5268591ba6890945ae7dc95c1c5f663b45a1ea7fdf25b0328d49e14b72777e4eb97bfd66cf1e94912c661b55fcaac1362705f8af6db002576befe855a171c002069e1744a2899e868db83bd5df37d387ab667b2a2fbe3d9e9f13e1c44f28398bf72c57a0a563f18f3d33bc046a13a8ebd2645d1630df546d719daee68b2bca4b946dbeb84d92c93499b143706c94dcf3ace3dfd1767f08d816372bc8c18211d0ce5259dc82f0f3764dc7cb4ac3c0616d0538d6c1dd4161b1aeb8451c5065100e46511885e1d97014869fc6c46914dc2b3484deae693ce6d173bdc2475a928d42226c17d3c279f7dc515dc96e91369c2fd268dccdf737c085c0daf8ac17cc9575fe59bc3fe08b08ff929abf13a49b52ba0f2ac048b07d94aa322ea505e77a497419afaa23365d2e93b7aa186951c97e70a77a00ed7747e032594efe272df9eb55abcf9374f686709e5c7344d2f9f56c9d4eae6f5aeefec508d3c683bbb148a672d0fa69341c7ffc70160d9f2d7681adede83bb1b735044c70fa53be28cfe29c6b0787df9db775ea87030000",
    ],
    [
      "ETag",
      "on6z0ycZ/lXbBkGyj/dCVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:37 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `first_name`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1636337013394",
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
      "da",
      "30",
      "10",
      "fd",
      "2a",
      "91f7cf265108041240aa3ad6665b269a7621b4aba6091ce792b98438b51d2a54f1dd77494a5b3aa99590c2f9debb773f1fc88ae731199388a77725c8ed875b119116014d537cedddd9ce7abefafe6534855fddcd8f416139e1fdf1312278c552745d6470a4442919a8f17cd64ea5280b2a8538c24047fda3ae6dd996e5985dcb1af591a6204ba63c5f21f9afd6851a773a7be9762a449a012db86a33b17e7aef6c7a9d428a5b605a750e153b28a23a6f6a9e648251cd457e3c9fa17ea9402e604d7986193c13e3e8f361e436a7eb768ae00d6740191365aeabac30041379c2d352d651c9f881d459bef84366eed43d0d8d258f970655c66251ac5ac632e152e9454ed7b0442ba37bc3f81a5c9c1b4b094cc8582d8debef6ee01a0ddbf38db9efbbb3d0f878f209b563509ae7b57248a30c2ad5c7de78ff0fa422504d1534ce8563dab43b34475112392c195a832831218a869133a05664b2511ffa71041479ba8a5eb3682e727b4099d3ef3bd670d43393a13988c14eba2346a3880d6c1b2c3b8ea3115864d722f7926b38e3aa108a371d22d78117ba8b3098fba793d0adcb486899e9b326b9aa8897796a2c12416fd4b5abbc5ca052d56ecf0fdd60721a7a576e33e129a4946d677738e384660a104d25b65a833c1731368d5c5eccbcd0bbf0275364d463bbdc231419ff7e782684dba2eeb2aebf641204931be45029e9f6950ff3b0fb64b77b217745b3b286d4f8da6ae26f1a07e9622dcf56efc0ea1f5836d9fdd9e1af4570cb1b65f273ee0637a4790a200109397b7f27105c3bdebbd5fde520146f075594461b1790a94a8349681691afeb4af66c6764d797aea9d4af7d43d331f71daf625411610db97e2ca8b99c",
      "ba8795ab544f2074e2fef89eff0dbdff001d707177b7040000",
    ],
    [
      "ETag",
      "2q67mUkHB9LeX1vJ5p37Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1636337013394"
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
      "95",
      "92",
      "5f",
      "6b",
      "c2",
      "30",
      "14c5bf4bf6da82ae4e99b007ff147573b2b5fa344462bcd568dadb25a94ec4efbe9b3a3a4118ec25b9e7e677c2cd2127b693d98ab5d952ae3f0bd0c7bb35d8775744600a650d6d39660698c7c0f23591c3af87be2ae24ce02b6fe9970d4ec6337b787a22c2880da49cb54f2c91a05686b53f4e2ce329906db1c87784d863eed468320d0761448d1457ae31998dc79dee386467afb224521bbb2845658ca7d16832f8dba7f83f6cf3b3c7b6b88c20010d9900377dae710bc28e5c3086a7b902df60a1051856c2e5c15a6391738de853c76ff8f566d00c8256ad1e048f0de2140a6e256684ce621a8f59b45c4578a05898037459524249b9eea95d2f9fe1aa504ba8c433e83d4a530e7b8d372ba20f99ac442cb892fc86beaf801e17525ddd1f720b3778a33aeea4dcf25f335a3009ea9573cc7f9ed53d52f34d234564c0a553bb24d543971edddeb6ba008f094e5f6428ed459fbf0111f57aa07f020000",
    ],
    [
      "ETag",
      "Hx5DluSncoMa7rKhoNLUtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:38 GMT",
      "Server",
      "ESF",
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
      "0000d0bb646d1d4550d25d331d14f00b260a1b268440a93f4810129cdebd4eaf51df1dde0350c6b89449733bf12b78079a1a70c8867e6523a72831a4dbd15eb7ab2c440bc726bc6becc3556ef263398d0262f24f6f378e6a7c87355e1ce157bff6afe9ac703cb28cb1ef62f2a6f2e536247ed665b7642271a80cd218c4ec7d58b43bd713d665641a07557b019a87fdceb5283bd3aed3f177d7541fd88c369489f43641ad8ed787bd12c152a417c4f13ccb352b5b216bc172a5ceb30c39bebba27630bdf7e15834546f9355c062f31415336f2d47a7f1b418bebcfc5f6000b8aa4ac165523eb74f2c0807e0af7ed2e88a3fff234e0517e0e717db35116719040000",
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
      "Mon, 08 Nov 2021 02:03:38 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1636337013394",
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
      "0000000002ff85535d6fda3014fd2b91f75a20940009125a19a42b1b84358456dd34458e7393b92431b59d4ea8e2bfef2629ac55a5f629b6ef39f79cfb9127b2e5454c4624e2e9430972ffe95e44e48c80a669f57abbcf9938a7775b9b7efff233fa762d67db743c4604af588ae6bb0c5a4a9492811a6dd6ed548a7247a5102d4cd4eab7ba83dea0d71b9add5ecfb190a6204b16bcd822f98fd63b35ea748ed2ed54883403bae3aacd447e7aef3c9e777652dc03d3aaf35ab18322aaf3aee6e74c30aab928c69b35ea970a640839e5193af84f8ca38bd799db9ce6ed14c18f9c01654c9485ae5c610a268a84a7a5acb392d113a95dbe3890b5bb70a781c14456e64558d01cce8c986a1aeafd0e8c4b7fb534e6dee5ca5f4e82f9ca0bd7d32b7739694f578bcdd25b1bb757aeef1a9a4619d45c636c5cd4370f2fa81f83d2bca8d583eab9527eeecffced502a024a2b6882e1d01cd0ae6d3a51120d5962f7fa51624214d9d1b04f7b91c91c0bac38028abc5ab466d1421414a8057d07426be838a1e59c9b61645afdd0e94332b0ccd8b29d2e399c91bf926b9871b5138a371d22b7fe3c70c3c0df78d349e0d62524b4ccf4ac315615f0d2a3c60211f44e4d872aca052a55ed9e7b81eb4fa6c1fcc66d26bc8094b2fdfa01679cd04c01a2a9c4e669904b1163c3883759ba3304d713fb710c2a32faf544aa9e572e5eb4fc440f7080955d5d7fc93af0e7ded7dace117143b3b2863c360722810919a3e7c36fc4e1863639c8f5c6f5ef48f3e44302120af6f12c115c073efacf8e5b8f50dc7b54511aefb8384c551a4c42b340bcaef5c4b687a64d6ab0d46f6276d739b6acca5165841c0afd5c50b3f558672356aa130883387baf6ed5e11f0e9e53c173040000",
    ],
    [
      "ETag",
      "bWymco2aYk8aKBZbJQrDkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1636337013394"
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
      "4f",
      "db",
      "30",
      "10",
      "86",
      "ff",
      "8b",
      "f771a9d42aa1dd22f1a185b25584b66bd34908a1c8d8976070ecd4760255d5ffbe7360651a48e14b72777e4eb97bfd664f1e85e2242677a2d8d660765f0a70bf7cb0025b4b67f15569658104041c2d908c9a6d747179bdfd7a9f4f96cbc7e6797339fafd747a8a8465f7505212ef492e40724be29b3d51b4046c635ad6a5cada2c206e57f9e23a5dcde63f302f35f7f97c9324e349322587e0d8c8a9a359cb7fa2edf61090077db7821c0c28067e96cae807606ee6d7b4b4ac24f4acae0d034b5ab83d288cae2b6ab4ee61a577d21b0cc361188efa8330fc1e212735a34e6885e8668de311a71d952bfd844b9241888469635c386f9f0dd6056f17f1e16c9e0ea376be7f01ca98ae95cb3ac15c18eb5ec4fb0bbe8af03f29e92741bc2921bba0021407d345892aa39c1bb0b693d436a35575c4268b45f25e15c58d16bc1b6c4407205d73042e92c5f82369d15f6f5a9d8fd3e93bc23a74cd11496757d3753abe5a7aeef6d508939d03bb341a4d65c1fb69d08fbe9d8c86fd178b9d696f3bfc4eec4c0d016114ff949fc29138a7d2c2e10f78c79abd87030000",
    ],
    [
      "ETag",
      "4vq4FKYq+hfBPPkvxUK7Vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:39 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1636337013394",
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
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2a",
      "91f7cf26b54ddaa4e90f09b10ec2882881a5290c4d536b3b4e669ac6c1766015ea77df25a140870452a5f4fcdebb77773e3fa215cf63344684a77725939b4fb782a016621aa7703a3afde6f656270f3ceefd34c3d919fdeb29efe1e00018bc5229bc2e32d656a29494a9f17cd649a5280b2c856843a2b6dbeebab66bdb03ab6bdb2307648a65c994e72b10ffd1ba5063d3dc59775221d28ce182ab0e15ebe773f3be671652dc32aa95b9ef68828932dff53ccc04c59a8bfc603e03ff5231b9606bcc33a8e0451893affb993b1caf3b2990ef3965985251e6baaa0a525091273c2d659d158d1f515de5ab3f68e64dbda3c858f2786960652c16c5aa652c33acf422c76bb6344ec28b736329191532564be3fad40b3da3e1fb81310f026f16199f0fbf805bcc94e679ed156192b1cae7691afedb2ba8045863c51a7031b05cdc1d5a239290014d86769f2416236448067d6c138b8e1ce6c48461d0e92a7badc23974387209b18993503b2123da4b06a44fbb8e43ad6192c4438bf563ab67778768db420f926b76cc5521146f6682ae433ff21651380f8e269157b791e032d3c74d715513afebd4d02490dee96b5ba15c805335603f88bc707214f9575e73a7539662ba99ddc1ad2638530cd858c2a83593e72286a1a1cb8b991ff917c1640a8afaa22e770c85c6bf1e5f04d1a6a8a7aceb2f9a84e1e40634584abcf90f833a5c076db7afecae7056d6949a5f474dfefb06405de8e525eaed45ce5ee4a2edef2dfc5a08f6ba71463fe65e78839aa390254cb29c7ebc1340ae818f5ee7eead00155e0bb8280d312c2055950795ac5944beae3bd9a947ce60806ab2d46f30d7eaee265ee5a832b235cbf553",
      "43cd5ba9675841a57a260108fb13f8c17740ff01ad693a88a9040000",
    ],
    [
      "ETag",
      "9HB62kFwid2X/RSKcxEsEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1636337013394"
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
      "51",
      "6f",
      "82",
      "30",
      "14",
      "85",
      "ff",
      "4b",
      "f7",
      "0a898a6119890f6a8873236c037d5816632a5c5815b8d8163767fcefdee24296b897f6f6dcef34f7b427b61355ca3cb611f9be0179bccb41bf992202d5145ad15663a580590c34cf89fc1e0f07b97e89f7d3701bd4e973f02e7ef6f96844844a3ea1e4cc3bb14c40912ae67d9c58c54b20db7a5def08d1c7da9ce6e1c29ff9110925a646089741309e043e3b5b9da5e04aafdbbaf3c58b681ecefeb3adce16dbe226820c24540998296a895b48f4dc0454bcac0bb015363201c55ab86de4129b9a4b449b14dbb5fbaee33ace7dafef380f43e20a4cb8165811ba8c693ca651f322c22f8ac70c20db929266ed7a20b9dfc630d513c8030ad5cef797703b224e7821f80d30e8009f6bb8690fbbf61435a80c656a98d5ef78932389af1229aa0293b2774d3c45f30a749fa76503164b387dd9a3d0d7f3f90294b0fc930f020000",
    ],
    [
      "ETag",
      "xA42gtOSqCNjLpdKLYizqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:39 GMT",
      "Server",
      "ESF",
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
      "edd34b7282300000d0bb64ad4c401aa43b302a1f69cb6f5436198a112294849f0a9ddebd4eaf51df1dde3748b38c761de979496bf00ac654d1a54c72c5d2dce439c5ccd73528c37168d035be73adb095a338b3a61c765b98ac452adc70a3f065cdcc8f37e7c2c2ce08cf6bc794f7f40b3a88fbb1b877d6bc4591fceeaead3cd5033d598de290e7881701be90952835262fe6db0827553bc0be86decd44283b457b8cfc95f5b94de05543894d485caa464fd50af38155a38903ef04ad80f64d820fc729c8eb48e32aebb2c6f16cd975a729dcb9a418c44d8b43434c7d243d3dfd5f6006e85db09676843db62f5e747d06feea937e14f4f1dfa4694b5bf0f30bce43fd4f19040000",
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
      "Mon, 08 Nov 2021 02:03:40 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-7-1636337013394",
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
      "000000000002ff8553ef6f9b3010fd5790f7b5092410f2438a5694d23552425620edaa6942c639985b8229369dba2afffb0ed374ad2ab57c01fbdebb77f7ee782277bcdc911949797edf40fdf8e556a4e48480a239de56deb4b959157f27a673aebc1fd7e1f826da5ecee788e02d4bd27d55404f8aa6662067dba89fd7a2a9682d440f13f5c6bd816bbbb63db606b63d759026a1c856bcbc43f26fa52a3933cda3743f17222f80565cf699d8bfdc9b0f43b3aac52d3025cdb78a268a48f343cdaf8560547151ceb711ea3712ea04f6941758c17fe22e3d7d9bb9cfe9be9f23f88133a08c89a6546d5598828932e37953ebac64f6447495af3e48e4affc456c305134fb3229e91e4e8c1d5534518f1518e7e1666d2c83f34db8f6e2e52648a2c585bff6fa8bcd6abb0e22e3fac20f7d43d1b400cd35e6c6a93e057840fd1d48c54bad1eb7d7adf2b33fcbf7436909282da10b2663cba58389354db374ccb2893d4a330bd274928e47d44e2d3675c0d9a54091a745358b96a24ca7f8b84337b1526089e30ed364c29c2c711d6730b6262e056a91c309f9537305675c5642f2ce21721d2e633f89c36db0f0625fb790d1a650675d616d03af6b54d820823ee8e9d046b940a5d6ee6510fba1b78897577e37e115e4943d46f738e38c1612104d6b344f41bd163b348c04deda3f43b09ed8f7635092d9cf27d27ade56f1caf2177a8c036ccb55fa4da2385c06df743947c4152d1a0d79e83e480d4cd43bacf9f00b71b8a15d0e72b9f5c31bd25d8590410d25fb7c9608d681cffeb3e3d62314f71e55a4c2332e0e93ad06aba15b20ae7b3db287963d18110daed5bb98331a1d2d6b73b419610fa57a6ea8db7aecb3136be40b088338fb405b75f807e20477be73040000",
    ],
    [
      "ETag",
      "pA9uYLlz8/4FtAXWR7YSUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1636337013394"
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
      "93516fd33010c7bf8b792415ad525a16690f2d14a8c89ad266e2014d916b5f8237c7176ca7a854fdee9cb351a60d297b49eecebf53eefefee7c8ee94912c613b55fd6cc11e5e55e0bf866003aed5ded1ab41e380450c3caf88842c1f8af5f8f59dcdbe48b7d3176f0ebfbf5597974438f1036ace92232b1568e958f2fdc80caf81da04eab636459745cc1f9a50dce69be5ea13e535ca90afaed374364f17ec149d1b25f7bce8f817b4dd9c22768bbb0d9460c10808b334166f41f86558d3f1bad13070d85a018e75707750596c1b6e110754194c07a3493c89e3e97014c71763e2340aee151a42afb7341ef3e8b9dee02f5a928d62226c17d3c265f7dc535dc96e91102e57f964dccdf718e042606b7cd10b96ca3a7f2fde5ff04184a7a4e62f04e9a694ee832a30126c1fa59a824b69c1b95e125dc19be68ccdb32c7dae8a911695ec07f7aa07d07e7f063ea6d9ec7fd292bffe69f561962f9e11ce936bce48bebc5a6cf3d9d53a70370f46981f3cb8b545329583e0a7d170fceeed7432bcb7d87b0cb6a3ef24deb61031c1e94ff9ac3c4b4aae1d9cfe00d85f5c3087030000",
    ],
    [
      "ETag",
      "eOT0cP4+krOKdsbl9/yzWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:41 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `ltv` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1636337013394",
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
      "536d6f9b3010fe2bc8fbb2697981401212a9eab296ae4829ed0869574d53621bc3dc02a6b6c91455f9ef3ba0699b55eaa448e47ccfcbddf9fc88ee7911a329223c7da898dc7eb813047510d33885d3880c4ef9c5f98ff3afb36b529c7d26dcc49bd9d1112078cd52382f33d655a29294a9e972d14ba5a84a2c85e88250d7ed5a237b64db63d3b2ed890334c5b264ce8b7b20ffd6ba54d37e7f6fdd4b854833864bae7a54e4cfe7fdcda05f4a71c7a856fd43c73e98a8febb9ec799a05873511c2d17e05f2926572cc73c830a5e8831f972a8dce338efa500de70ca30a5a22a745d15485051243cad64a38aa68fa8a9f2d51fb4f0e6de4964ac79bc36b03256abf2be63ac33bd591b67e1e585b1968c0a19abb57173ee859ed122fdc0580681b7888c8fc79fc027664af3a2718930c958edf03407ffedf06b02d658b136b91a9b236cb9e68424644c13d71e92c46484b8643cc43631e9c4614e4c18069eaed51b162e44e18e87ee706c3a8919838663bb136ab904db5682872eb6986526b633b15db4eba03f926b76ca5529146fa7816e423ff25651b80c4e6691d7b491e02ad3a76d717513afebd4d02480dee96b5767b900a77ab47e1079e1ec24f2afbdf636e72cc574bb7880fb4c70a618a0b1c439d34c5e88188686ae2e177ee45f06b339309a2bbada23149afe7c7c2144dbb299b26ebe681686b35be06029f1f69f1cd43172d06ef7caee1a67550369f04dd4ea6fda04b2a097976870103907d108ed7eede0d741b0d1ad33fabef4c25bd41e852c619215f4ff3b01e026f1bf77b97f25008577022e4a430c0b4855ed41256b1791e74d274fec8165d9166ac052bfc90d9cc97ee2b546adc87256e8a786da57d2ccb04e55ea190449d89fc00fbe41f62fa8fe3ea9a3040000",
    ],
    [
      "ETag",
      "Tb2DiMHXHBAVbnF+bi0avA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1636337013394"
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
      "6d91516f823010c7bf4bf70a442c4331f141269b2ec429d3a7c5988a274381b2b6b019e377f78a8b2e712fedddfd7f97deff7a24fbb4d8901e59a7c95705e2f090809ae9200259654ae255f242023108289620e98c44e9bffa015bccebc96c9804c369fd93f4fb48c8f81372467a47b24d21db48d2fb389282e5806dab55b947441d4a9d8d27f3e02588b090f38d2e4c166138f0c3809c8c6b4ba6ea5bc773f83698ffc72f4f06d9f175045b1050c4a09f2f05df41acc6da99647999812979256290a4811b2111bc2a99e0dcc48ad9356d97ba94765a36a59e835cc663a6525e20ba78c7b988e28a6511ff967a0b088826448bdbe6acb16c37f3eba8fde85976bb19ef2fe0de800eb5bcee1dd0be029e6351f74e77aebad3f5ac96d697bfa3f90705722a38da94a01db62e6e9fb8de80c2cd285181416286ff344ad5253f9d01eb0d934b04020000",
    ],
    [
      "ETag",
      "4HrpBJBEaUTvNQDgEDPvxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:41 GMT",
      "Server",
      "ESF",
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
      "d0bb64ad8e4644e88e4f24a8283a20a19b4cc4f0f1033481223abd7b9d5ea3be3bbc276049c2a5a44d75e125f8003d83fa2819ad6acd5c6405eb9b5eecdc423fa1a2185e27e696735b54462514f86d2de74eff78f8e54176680b791a2bc8a4320b6f2d34b459b76fb01b4f4489da54af9c3019238cf98a4e452e1e17980fa3d238ab4e07e195dc036f768a0934ec3df5bf7692e239f49273833b75e1f86bd7de589b68229560bd3719562c8df886765b47d8cec8676e912c9487e8d86235460bc4bc23b1d360786a49adcec7757eaddb4316f6315b66a3b7b7ff0b0c00bfd785e09216afedd399ae0fc05f7ddaf4357ffd3739135c809f5f3f04882e19040000",
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
      "Mon, 08 Nov 2021 02:03:41 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-9-1636337013394",
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
      "fd2bc8fbda8490078148d11a25748d9490959056d33421632ecc2dc1a96dba5555fefb2ea6e95a556a3f61fb9e73cfb90f9ec81daf323221292fee6b908f5f6e454ace08685ae0ebe2ba90d15f7fb676fbce90de54e25216f6d5748a08deb014dd1f4ae828514b066ab2db760b29ea039542743051c7ef38eec01d0cc63d6730f087485350e62b5edd21f9b7d60735b1ed9374b710a228811eb8ea32b17f79b71ffaf6418a5b605ad96f156d1451f6879a5f4bc1a8e6a29aeeb6a85f2b9009ec292fd1c17f62969ebfcddce574df2d10fcc01950c6445de9c615a660a2ca79514b93954c9e8871f9ea40b6c12a98c7161365bdaf928aeee1cccaa8a6897e3c8075116dd6d632bcd844eb59bcdc84c9767e19ac67ddf966b55b875bebe63288024bd3b404c3b5a6d6b9b9857841fd0c94e695518f9be746f9b93fcbf743690828ada00d26e39e4b1dafe7a7793a66b93718a5790fd2d44bc7233a487bcc1fc2304b8122cf881a16ad4495322f05dfc992f1d81d26c391e7277e9eb989e380e738b437823e23c733f247720d0bae0e42f1b643e4265ac6411247bb703e8b0353424eeb522f5a634d01af3d6a2c10411fd4746ca25ca052d3ee651807d16c1e2faf8376c22b28287bdcdee38c735a2a403495d83c0d722d326c180967eb60816033b1efa7a022939f4fa4e979e3e255cb5fe8310eb0b1abcd976ce368197e33764e886b5ad606f2d01e88042664869e8fbf10871bdae62057bb20fa41daa708729050b1cf67896013f8ec3f3b6d3d4271ef514569bce3e230d5683009ed027153eb89dd77bcbe4b0c58ea77317fe89e5ad6e46832c21e2afd5c50bbf558672b56ab17100671f6a169d5f11f998ebcd073040000",
    ],
    [
      "ETag",
      "DVgrRx9AM6214aWnoHrg/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1636337013394"
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
      "ff8d93616fda301086ff8bf73548a0d0748dd40fb052c616a083549a3655916b5f32778e2fb31d2a84f8ef3ba71d9bd64ae997e4eefc9c72f7facd81fd5446b294ddabea570b76ffae02ff25041b70adf68e5e0d1a072c62e079456463b9aaf75fb34fdf3ef316e6f95cc23279bcbc24c2891f5073961e58a9404bc7d2ef0766780dd42650b7b529ba2c627edf84e236df2c5673ca6b94215fdd66d9649acdd8313a354aee79d1f16f68bb3b46ec01ef375082052320ccd2587c00e117614dc7eb46c3c0616b0538d6c1dd4165b16db8451c5065703118257112c7e7c3511c5f8c89d328b8576808bdddd278cca3e77a838fb4241bc544d82ea685cbeeb9a3ba92dd22215cacf264dccdf72fc085c0d6f8a2172c9575fe49bc3fe0b308ff939abf11a49b52ba0faac048b07d946a0a2ea505e77a4974056f9a13365dafb397aa186951c97e70a77a00ed7727e03a5b4f5e9396fcf557abab493e7b41384fae3921f96239dbe693e54de0ee9e8d30dd7b703716c9540e829f46c3f1fbb3f364f864b10f186c47df49bd6d216282d39ff2517996965c3b38fe06b766761e87030000",
    ],
    [
      "ETag",
      "praimyXLJZKaueGTGdeM6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:42 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `ltv`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1636337013394",
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
      "4fdb3010fd2b91f76593da266d4ad25642ac826c642a81a529084d536b3b4e304de2603bdd2ad4ffbe4b42810e09a44ae9f9bd77efee7c7e446b5ec46882084f1f2a26b79fee05411dc4344ee174ed39ebcdbdbebbb9a53ff27377fc579307273d3e0606af550ae765c6ba4a5492323559cc7ba9145589a5105d48d4ed5bddbe633bb6ed5a7ddb1e0f41a75896cc78b106f59dd6a59a98e6debb970a91660c975cf5a8c89fcfcdcdc02ca5b867542bf3d0d2041765be6f7a92098a3517c5f1620e05548ac925cb31cfa08417654cbe1ea6ee719cf752206f386598525115ba2e0b525051243cad6493154d1e5153e6ab3f68eecdbcd3c858f1786560652c97e5ba63ac32bd59d51facf4b2c0395b19dfc2cb0b6325191532562be3e6dc0b3da395f981b108026f1e199f4fbe8069cc94e64563196192b1daee692afedbbba8055863c55a70e95a0eee8fac3149884b93917d44128b113222ee11b68945c743368c09c3a0d375f646850b51f4edc48d87b6c32c8a1d0bc8e3a341ecda94108b59ee088f06d41abb84a25d07fd915cb333ae4aa1783b1a7413fa91b78cc245703a8dbca68d0457993e6b8bab9b785da7862681f44e5fbb1ae5029cea39fb41e485d3d3c8bff6daab9db114d3edfc012e37c19962c0c61246ad99bc10310c0d5d5dcefdc8bf0ca6335034f775b5672834f9f5f82288b6653365dd7cd1340ca7b7a0c152e2ed7f18d4e10cd16ef7caee1a67554369f84dd4e6dfb400ea432f2fd1e0201a1e440edafddec1af8360bf5b67f473e185b7a83d0a59c2242be8c73b01e406f8f099eedf0c70e1d5808dd210c30652559b50c9da4de479d3ca937a30705c0b3564a9df60236bb01f799da3cec87256e8a78eda37d30cb1862af54c02101628f083ef80fe03bd380deab3040000",
    ],
    [
      "ETag",
      "kE6kvjthWYcJmH79xtbq6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1636337013394"
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
      "85",
      "92",
      "5f",
      "6b",
      "c2",
      "30",
      "14",
      "c5",
      "bf",
      "4b",
      "f6",
      "382bd6565d051f54aaf30fce55c5872112db5b57adbd5d922a227ef7ddd451070ef692dc7bf23be1e6900bdb4749c09a6c136dbf3210e7a72da8775d7820b35849da524c24b01203c5b7443a731eb8cbe9e879d49f357a6e2dec0d97d9a9d52242fa9f70e0ac79616104712059f3e3c2127e00b2add7e99e10754e753798ccddbeeb9170c0400b93c578dcee8c5d762d1596581def8edef8ad3dff87e752adf3ba70cde6de60d2ffcbb6ba96d80e371e842020f1414f9d0adc81af063a10c90f690c86c44cf820590ee7075b8159ca05a2418a61560cb36ed52dab51312dcbb1098cd1e72ac284d8c58ce6630a158f3d3c511e4c03222f299a305f8f249bf93b7455ad3965b35ab44310478c643eef6f43fd6e685865e7a568673e8f23fec0df6f74ecb27577bb5cc1036c17c7f68b53ae145d1715c81045a01dab9f8775ce244e05524a127440955b585dd401d2ed4d253228319fd3ef788dd4adbf7e0339be1b997a020000",
    ],
    [
      "ETag",
      "9TadEWPK+KGS7FE5fFJWuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:43 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb642d0c62ada43bfea0b452d052564c083160f893caa7d3bbd7e935eabbc3fb060863320c096f18a9c10b98910c452c1e5a45b328c574feb20f6910ef8cf762a3e966c73d79e88ce758935893f53bd738b589d37bdd6884da187153b865c1fec4164bd6cf35934b7a846e154c70bd0907dd4a02c97ccb58ed535bf2b3ed94a714f14b209b1675622d2c9bd115a2ce5dceb137e91f6a21a093fa99e7a1771c5114cee98ced63a454d6824dae0a9009173f49afafb6e38c5029af37a957856a6876d7da777599174d80a375b5bff9367f723c8616f1e1e1ff022b40a6b6e8c99014f7ed9b2d842bf0573fe1734beeff35827ad2839f5feb3117eb19040000",
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
      "Mon, 08 Nov 2021 02:03:43 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-11-1636337013394",
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
      "02ff85536b4fdb3014fd2b91f795b669d3572a55a32b61546ad291a630344d91e3de6486340eb603ea50fffb6e1cca4048f029b6ef39f79cfbc813b9e3c5964c48c2b3fb0ae4fecbad48c809014d337c2dfdfc2fdcdca7b39f179b5bed9765b40fbe5d4ea788e0354bd15d99434b894a325093cdba9d495195540ad1c244ad6eb7d51d3a43c719d95dc771fbc85390a74b5edc21fb8fd6a59a743a47ed76264496032db96a33b17b79ef3cf43aa514b7c0b4eabc95eca08aea7c2cfa35178c6a2e8ae9668d062a0532861de5395af8cfdc26a76f53b739ddb533043f700694315115bab685299828529e55d264259327626cbe3a90b5b7f4e691c5445eed8ab8a03b38b1b654d358ef4bb0cec3956f2d82f355e8cfa2c52a88d7f30bcf9fb5e7abe5c60fd6d6f585177a96a6490e866b4dad53730bf082fa5b509a17463daa9f6be5e7062dde8fa526a0b48226188fec21ed8e6d374993114bc7ce20496d489271321a5027b199db87fe36018a3c236a58b4c09aedded0e9f6ec98bad48dfb3d77188f111c7707aeeb248e3318a7237238218f926b38e3aa148a371d22d7e122f2e228dc04f359e49912525ae5faac315617f0daa3c60211f4414d873aca052ad5ed5e049117cee6d1e2ca6b26bc848cb2fdfa1e679cd25c01a2a9c4e66990bed862c34830f3bd33049b89fd38061599fc7a2275cf6b17af5afe428f7080b55d6dbe641d858be0bbb173445cd1bc329087e640243021b7e8f9f01b71b8a24d0e72b9f1c21bd23c85908284827d3e4b049bc0a77fda71ed118b8b8f324ae31d3787a95a84496836889b628fec9ed31f98ff5453a9dfc506fddeb167758e3a23eca0d0cf15356b8f853662957a016110871f985e1dfe012de6b4b176040000",
    ],
    [
      "ETag",
      "pMlzeYqfAXHUjtMppTyNBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1636337013394"
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
      "6f",
      "6f",
      "9b",
      "30",
      "10c6bf8bf7966841a4e986d417c9967491c89f12fa6653851c7c3037c6c76c93298af2dd77a65d36b595e81bb83bff4edc3d7e38b1bdd482c56c27ab5f2d98e3870adc9d0f52b0ad72965e0d6a0b2c60e07845e4ed6ebf043edb5cedbf6f3ecea7e93c8d4a77777343842d7e42cd597c62a504252c8b7f9c98e635505b81aaad75de650173c7c617b759ba58dd525ea3f0f9ea3e4926d364c6cec1a55170c7f38e7f47dbc339608fb84ba10403ba003f4b63f0110ab7f06b5a5e370a06165b5380651ddc1d5406db861bc4015506613808c7d1388aae8761147d1e11a8b0e04ea226f67e4bf331878eab147fd3962c8c88305d4c1b97ddf3407529ba4d7cb85865e35137e0ff002f0a6cb5cb7bc1521aeb9ed4fb0b3eabf09254fc9d205d95547d50055a80e9a3649373210c58db4ba2cd79d35cb0e97a9dbc56450b8352f48307d9032877b800f3643d794b5a32d83fadbe4eb2d92bc23ab2cd05c916cbd9369b2c379e7b7836c2f4e8c06e0c92ab2c784385c3d1a7abebf1f0c9635fd0fb8ebe133bd342c00a4ebfca37e9585c7265e1fc076a704d2d88030000",
    ],
    [
      "ETag",
      "GbkMeaEP5kZP/FBRFR3ftQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:44 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `ios_app` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1636337013394",
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
      "00000002ff85537f4fdb3010fd2a91f7cf26b54dd2b4e90f09b10ab291a904485358354dade338c1348d83ed802ad4efbe8b43810e09a44acdf9bd77efee7c7e426b5624688c6296dd57546cbfdcf118b510553883d3b3457437fabd7664b230e57cf0eb56e457ddc7a32360b05a25f1a6cc695bf24a102ac7f3592713bc2ab1e0bc0d89da76b76dbb8eeb3803cb769c510f7492e6e994156b50df2a55cab169eebd3b19e7594e71c96487f0cdcbb9f9d0354bc1ef2851d23cb434c1459a1f9b1ee79c60c57871349f410195a462493798e550c2ab3289bf1fa6ee30bce964407e608462427855a8ba2c48417891b2ac123a2b1a3f215de69b0f34f3a6de4964ac58b232b03496cb72dd8288cb252ecb95f123bc38375682122e12b9326ecebcd0331ab61f18f320f06691f1f5f81b7825542a5668a708c739ad5d9e87e1bfbf825a801596b4019703cbc5f6d01ac5693c20e9d0e9c7a945e378180ffad8892d32ead15e12530c3a5567d72a5cf002936468f746ae153b4ee2800abe6dc8421cab3fa4b18bf1b06ba77d8a762df42898a2a74c965cb26622e826f4236f1985f3e0641279ba8d1457b93a6d8aab9b785ba7822681f4415fbb1a651c9ceaf1fa41e4859393c8bff69a1b9dd20c93edec1eee34c5b9a4c0c6026fa8a2e29c273034747931f323ff22984c41a1afe972cf9068fce7e955106d4b3d65a5ffd1240c270bd06021f0f63f0cea707b68b77b63778df34a53345f474dfe87064036f4f21a750fa2de41e4a2dddf1dfc5a08d6ba714657732f5ca0e628a42915b4209fef049035f0e9ebdc3f15e0c263011ba920860d24b2362182369bc836ba956775b7d7b51da4c942bdc31cdbda8fbcce5167a41b5aa8e78e9aa7a2875843957c2101080b14f8c14f40ff01d7093d5baa040000",
    ],
    [
      "ETag",
      "HYTj9Xk3sdY/sU7JhrlQ2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1636337013394"
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
      "7d",
      "51",
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "fd",
      "2f",
      "77",
      "af",
      "2d582b1d137cd0d16d42d1ad9b8c394462bdadd5b6374b5245c4ffee4d1d6ee0d84b72eff9807392036cf26a095d58e4d9578d6a7f93a179b1438cba2e8ce64b52a5111c402332562aaf9cfa7235799f6e03e347f547d1560fbb5e8f153a596129a07b8034c762a9a1fb79804a94c8b6f95c6e5862f6d26ec3d15bf818c60c94b4b4c0681245fd4114c2d1b95872d27321e58f6b301e47617ff4976b7674604d8b1853545825684348456b4cccd0f6d3a29405ba9a6a95a08646dc1099a25a0a45e432e27a6dd70bfcc0f76f5b9eefdf75585850224c4e156b27af1c0f0c1951c4b4e37a6005aa19b969da9c5b86bda6869d8caab149f79b0efea7db173a1585bee63b57f6d977aac1dea07e56c41535da76ad73d37bb2ed0dbf8a75389008fea9a7dc9cf7e309b893472f06020000",
    ],
    [
      "ETag",
      "r1mZ3phUWZv6t3LuYl2rFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:44 GMT",
      "Server",
      "ESF",
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
      "000002ffedd35d6e82300000e0bbf4598ca1c0646f548b0413278a48796918945f452c140b66779fd935e67787ef09e224615d47fb5bcd1af009c65835e7c97cdb2e919de7aa871da8423f23987d91c60d6babbf76e97e1778469ae98189f1e6dedb973d57242193ea391a37aace4f14cac3280e87f04ca3fd2a0e3668b596c4c5c23959f08e1a870ed9923c845c5e0da48eca515c3dbb2daada8689ad6fcb011575ee2316442711e3c981566116033b6c25929c6ab6e936e70f5c6bfee2d626c3230d0c562dd65869ca505ea283b06e221d1f47285d7537595138084fabf26f327f7bfbbfc00c30d9969c75b47c6d87ba69cec05f7dda8f2d7bfd472ce68c839f5f0df27d1e19040000",
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
      "Mon, 08 Nov 2021 02:03:44 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-13-1636337013394",
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
      "0002ff85536b6fda3014fd2b91f7b105f2801290d08a68ba2141d84268374d53e4383799db1053dba1ea2afefb6e9cd2b5aad47e8aed7bce3de73ef2486e7995913149797157837cf8742352724a40d3025f7dbffe717752fc3d2996a1735df469e8eefbf793092278c35274bb2ba1a3442d19a8f166dd2da4a877540ad1c1441dc7eb3867de99e70d6dc7f3467de42928f305af6e91fd47eb9d1af77a47ed6e21445102dd71d56562fbfcdedbbbbd9d1437c0b4eabd96eca18aeabd2ffab9148c6a2eaac9668d066a0532812de5255af8cfccd2f3d7a9bb9c6ebb0582f79c01654cd4956e6c610a26aa9c17b53459c9f891189b2f0e641d2c82596c3151d6db2aa9e8164ead8c6a9ae8871d5897d16a69cdc3cb55b49cc6f35598ac675f83e5b43b5b2d36cb706d5d7f0da2c0d2342dc170ad89756e6e215e503f03a57965d4e3e6b9517e6ad0fced581a024a2b6883c9d03ea38e6f8fd23c1db2dcf706696e439afae97040bdd466a33ef4b31428f28ca861d14a54ee6874963ab69db8238f267ddf83c4873c4f4643d71d647de60fe8801c4ec9bde41a2eb8da09c5db0e91eb681e07491c6dc2d9340e4c0939ad4b7dd11a6b0a78e9516381087aa7a64313e502959a76cfc33888a6b3787e15b4135e4041d9c3fa0e679cd35201a2a9c4e669904b9161c348385d0617083613fb760c2a32fef5489a9e372e5eb4fc991ee3001bbbda7cc93a8ee6e11763e788b8a2656d20fbf64024302133f47cf88d385cd13607f9be09a29fa47d8a20070915fb78960836810fffb4e3da2316171f6594c63b6e0e538d0893d06e1037c51ed9eec07687c480a57e13733ce7d8b326479311b650e9a78adab5c7425bb15a3d833088c30f4daf0eff00c7bff1e176040000",
    ],
    [
      "ETag",
      "88uXq+gz+gMN1Wg4aN2v4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1636337013394"
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
      "614fa3401086ffcbde579a9450eb49e207ea554b82ad47d1c45c0c59d9815b5d767077a9699afe7707d46ace4bf00bcccc3e1366de7dd9b147a9050bd9bdac9e5a30db1f15b8df5d90826d95b3f46a505b601e03c72b2227b72767faf6661107d1626182267dc2c7f3e7d353226cf1176acec21d2b25286159f867c734af81da0a546dadf33ef398db365d719da5f1f282f21a45972faf93249a2573b6f70e8d823b9ef7fc37daeef61e7bc0fb144a30a00be866690c3e40e1e26e4dcbeb46c1c8626b0ab0ac87fb83ca60db708338a2cac80f46fe349806c1f1d80f829309810a0bee246a62afd7341f73e8b84af199b6647e4084e963dab8ec9f1baa4bd16fd285f1329b4efa013f03bc28b0d52e1f044b69ac7b55ef1d7c53e15f52f16f827455520d411568016688924dce853060ed208936e74d73c066ab55f255152d0c4a310c6ee400a0dce6009c27abe87fd292c13eb4fa1565f32f8475649b0392c597f375165d5e75dcdd9b11665b07f6ca20b9ca4267287f3cf979743c1dbf7aec0c3bdfd17742675af058c1e9575948c7c2922b0bfb17ac2f6c8c88030000",
    ],
    [
      "ETag",
      "4Y9CnYVHI3AHHr3pRqokFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:45 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `ios_app`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1636337013394",
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
      "7b",
      "4f",
      "db",
      "30",
      "10",
      "ff",
      "2a",
      "91",
      "f7",
      "cf2695a66d1e7d488845906d914a803485a1696a1dc70986240eb6c356a17ef75d1c0a744820556acef77bdc9dcf8fe88e55299aa184e5f70d159b4fb73c413d4415cee1f42615d5df32745d629df39fd717a6977a37dee1212058cb92b8ac0b7a2079230895b3e5a29f0bded458707e00420743fb60e85aae658d0743cb9adac093b4c8e6acba6bd595aae5cc3477defd9cf3bca0b866b24f78f97c6e3e8ccc5af05b4a9434f72d4d7091e6fba647052758315e1d2e17504023a958d112b3024a7861a6c9d77de93ec3653f07f003231413c29b4ab5658104e155c6f2466855347b44bacc571f68e1cffde3d858b3746d6069ac56f55d0f222e57b8aed7f05960a956152ee9daf8169d9d1a6b410917a95c1b573ffcc8373a6a101acb30f417b1f1f9e80b18a7542a5669db1827056d2d9f2613bcbd8f96801596b44baec603170f278369922563924d2c27c906344926c9d8c1563220539bda694231f054abae59b8e2953375a94d2d92103b4989e3e2d178324c299e3ab665a5d9242164603b9983b63df44730454f98acb964dd78d05514c4fe2a8e96e1b117fbba8d0c37853ae98a6b9b785da7822601f44e5fdb36cb3838b5b30ec2d88fbce338b8f4bbeb9dd31c93cde21e2e38c385a480c60246ada838e5290c0d9d9f2d8238380bbd3930f49d9def1012cd7e3dbe10e24dada7acf43ff2a2c8bb060e16026ffecb411dae8db6db577697b8683444e375d4e93f740934845e5ea2d15e64ef452edafedec2af8760c73b6774b1f4a36bd41d4534a38256e4e39d00b04e7cf85477ef06b0f072c0462a886103896c4d88a0dd",
      "26b252b7f2c41e39637b883458a837b9c9d8d98dbcd5681569492bf5d451f76ef410db54239f419084050a83f03b64ff01826dea3eb7040000",
    ],
    [
      "ETag",
      "hdrnxmN66c3PoXYQ/AdAhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1636337013394"
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
      "7d92416f82401085ffcbf6584d550ca6241ed412b5215a514f8d312b0c882e0cdd5d34d6f8df3b8b0d36d1f4c2ce3cbe37997dd933db2759c81cb649e2af02e4e929063d33850faa105ad19163a680d518681e133910d317db6f6df5f3a833ffeea7b3b753bc3976bb44a8600b2967ce994509885031e7f3cc329e02d9d6eb7c4f883ee5a61b4f16eed0f549483134c264e979bdbee7b24badb224a8d63ccf6faefe74eab9bdc9ff2ec1955e9775e59b2ffcf164f8c8b6bad4d80e373e4420210bc0ec9e4bdc41a0c72616c5d35c405d61210350ac84cb1fb1c422e712b14e4abdd9ae376dcbb6ac4ea36959af6d0205065c279811bb9cd37e4ca3e6c2c723a5c20c20cb92028acaef81e466790f53695940d5bc833c60a2ca6dffe2f6637c1e7091f03bba55011117ea86bb5cc31ddc7e3c7a801a5484323486d5ef9dfa27123f2452400a4c368d6b4e0334d9d170c7cca8b180d3f31825fada5f7e00470964b47b020000",
    ],
    [
      "ETag",
      "ClO/6R2ht+H7SzBmQDygbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:46 GMT",
      "Server",
      "ESF",
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
      "02ffedd35d6e82300000e0bbf4590cb382b03745500181a264811752b06225a3ace5a7b8ecee33bbc6fceef07d035c964488bc633569c03b98f0c29c9773af35364e75176b4863c53979061a739f9e9dce4e617055af766b2d64b6923c3614bb69211e375a8fac5bf508d5bd94bdc1d20badd8253c59f504231615ce81ab415826596d1c756de51d0e1542c9a0b85f99bf95a769dbb7597d5b22f3239e9cab58e79253779f0aacfa7dbabbbbba6745a6df54e952f7c32ed5f19b80035370a1ed1a48567bc619be07ca808e2a8a075e9f23b22865f159980fc4931c8d856e53317f79f9bfc00c10d9524e444e9fdba1669a33f0573fefa6963cff6f08e684839f5fa50757be19040000",
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
      "Mon, 08 Nov 2021 02:03:46 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-15-1636337013394",
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
      "14fd2b91f74adba469da52a91a551ba0a34db734054dd31439ce4d6648e2623b4c08f5bfefc6a10c84044fb17dcfb9e7dc8f3c913b5ea56442129edfd7201fbfdc8a849c10d034c7d70ba8775773d9e7d1621edd06eceadb4896b3e91411bc61295aee0be828514b066ab2db767329ea3d9542743051c7f13aced01dbaeec8765cf774803c0545b6e2d51db2ff68bd57935eefa8ddcd85c80ba07baeba4c942fefbd877e6f2fc52d30ad7a6f257ba8a27a1f8b7e2d04a39a8b6abadba2815a818ca1a4bc400bff996972f6367597d3b29b23f88133a08c89bad28d2d4cc14495f1bc96262b993c1163f3d5816cfd953f8f2c268abaace28a967062a554d3583feec13a0f376b6b199c6fc2f52c5a6e82783bbff4d7b3ee7cb3daad83ad7573e987bea5695280e15a53ebccdc02bca07e0a4af3caa847cd73a3fcdca0e5fbb134049456d006e3913da4ced83e4db264c4b2b1eb25990d49324e461e75139b9d0e609026409167440d8b56a21adb9ee7a4368d6dd773e2013883983a94c65ee6c270c4c6693f4bc9e184fc955cc382abbd50bced10b90997911f47e12e98cf22df9490d1bad08bd65853c06b8f1a0b44d007351d9a2817a8d4b47b19447e389b47cb6bbf9df00a72ca1eb7f738e38c160a104d25364f835c8b141b4682d9da5f20d84cecfb31a8c8e4d713697adeb878d5f2177a84036cec6af325db285c0617c6ce11714d8bda401eda0391c0844cd1f3e137e27045db1ce4c7ce0f7f92f629840c2454ecf35922d8043efdd38e6b8f585c7c94511aefb8394c35224c42bb41dc147b64f78783c19818b0d4ef62ded03bf6acc9d16484122afd5c51bbf658682b56ab17100671f881e9d5e11f4761354b76040000",
    ],
    [
      "ETag",
      "GeuUKCr2iTDCTjNcKJ7rmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1636337013394"
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
      "93514fdb3010c7bf8b794da56629298bc443ba76a322b4d0a6e2614291b12fc1e0d899ed74eaaa7ef79d031434268597e4eefc3be5eeef7ff6e449284e12722faa5f2d98dd4905eec6072bb0ad74165f8d56164840c0d10ac91b3ecdbe5c9edd0e179be9c5388f2fcb3f0fd3f4fc1c09cb1ea0a624d9935280e496243ff744d11ab08d69d9d6aae8b280b85de38beb7c355ffcc0bcd6dce78b4d96a5936c460ec1b19153478b8eff44dbdd21208ffa7e052518500cfc2c8dd18fc0dcdcaf6969dd481858dd1a06967470775019dd36d4683dc0ca203c1d84711447d1781846d1d711825233ea8456c86ed6381f71da51b9d2bf714b124648982ec68dcbeeb9c5bae0dd263e9c2ff278d40df81ea08ce956b9a2172c85b1ee59bd57f045857f49493f09e25509d90755a038983e4a3405e5dc80b5bda4b6056d9a2336592eb38faa286eb4e0fde056f400d26d8fc0f76c99fe4f5a34d89b56d3349f7d20ac43db1c917c7e355be7e9d5b5e7ee5e8c30d939b0d746a3ab2c784385c3d1d9e9381e3e7bec9bf6bec3ef24ceb4101046f157b9108e242595160e7f01adbf8d7c88030000",
    ],
    [
      "ETag",
      "QdDL2K8W0NUDH7T6KfzhDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:47 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `date` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1636337013394",
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
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "2b",
      "c8",
      "fbb2496908904012a9eaa2966d4829e90869574d5362e0606e08a6b6699755f9ef3ba0699b556a25a4e4fcdebb77773e3f90352b12322611cb6e2b10db0f373c221d028a6678aa7e5cccffe87aefe6560dd667ee6c726df7ffde1f1f2383d52a4937650e4792572206395eccbb99e0554905e74798e8c8b0f1b36ccb727a86658dfaa89390a75356ac51fd5ba9528e757defddcd38cf72a02593dd986f9ecef53b532f05bf815849fdd0524717a9bf6d7a92f3982ac68be3c51c0ba82488256c28cbb1846765127d3e4cdd6574d3cd907cc762a071ccab42d565618a981729cb2ad16425e307d294f9e20f99bb53f734d4562c5969546acb65b9ee68ab842a58695f82d9b9b612107391c89576f5cd0d5cada57abeb6f07d771e6a1f4f3ea1510252b1a2b1096994436df13809eff5fc6b015554420b2e9d9e4d8d616f14a59113a7436b10a53d88a261e40ca815f5e2511ffa49041475aacedea868c18b6102a693a4e9006c3b4d06294d709a869946a635e81b23931a766a506b48761d722f988233264b2e593b0e721578a1bb0c83857f3a09dda68d9456b93a6b8bab9b7859a7c22691f4465fbb1a651c9dead97a7ee80693d3d0bb74dbeb9c4246e3edfc162f34a5b90464534137a0409cf30487462e66732ff466fe648a8ae68e2ef60c49c63f1f9e05e1b66ca6ac9a5f320982c9356aa81074fb1f8675d87db2dbbdb0bba479d5501a7e13b5f9ef5a8018d8cb73641e44fd83c826bb5f3bfc3a0477ba7526df176e704ddaa300521050c4efef04921be0dda7b97f27c8c597823652618c1b18cbda2416d06e22db34ad3caa4dc7322dd290857a85f51d673ff23a479d113650a8",
      "c78eda77d20cb1862af944421017c8f7fcaf88fe037de26c0ea7040000",
    ],
    [
      "ETag",
      "tXPSx//0jqt5kDEOAY64zw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1636337013394"
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
      "02ff6d916f4bc33010c6bfcbf9b6c5fe19150b7bb1cda283315cdd409031d2f65ab3b54d4c52c718fbee5e3a51a14248ee9efc8edc7339c381b705c490f1eaa34375baa9d0ac6c90a2ee6aa3e990a2d5080ea0611591aa34ea286f3b3e292bf33a4b31e5325b8dc744e8fc1d1b06f1194a8e75a1217e3b43cb1aa4b2dd4e1e08312769b3f9729d3c2629098d28acb0dc2c1693e922818bf353523083bf250f9375f21fbfbd38b017598a252a6c73b4cf4b25f6989bb975a659236b74b5e8548e1a7ab8bfa894e8245342b8a4b87e442b8cc2f0cef3c3f07e44602d7266b86889ddbc5063608461752a8e640c2ca0fa903c96fdfe49b2df1bb051e0059eeb05aee7f73dfe85a221140da0600805036834844616da7e373b3d19d4cf4a90738dd6b4771dc04cd8a1d07863a33a742067f4754fdc5cf3cb1702fcbcc317020000",
    ],
    [
      "ETag",
      "rftrwp/uiAfgtXCReRipbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:47 GMT",
      "Server",
      "ESF",
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
      "1f8b08000000000002ffedd34b7282300000d0bb64ad0cf229a43b3e01440ce097b271421a1068118188b4d3bbd7e935eabbc3fb068452d6f7a7e152b306bc82894850a0c2aad54da7a88cc216794e999bd08de6f054d1a305d956b5a764e2c715d9646a8375c9b273d2cc212acc84f03b6d5bd7bb70e21535f56b391a6f86e8437408bd359a826d8d3465daf13c3e2ee34d2047b26c2f988e2fd7868746f9e9c7fb9758534cb27cb3adaf06eddecf53bac14eb7527d110fe1d8f77329c54695aada9ead0dbbda633f092d170f7683747cd473e8c06454ac8c49faa1ab78996c797dc5aa6f05e24e787afabfc00cb07b5b76ac3f958fedb20ae10cfcd53f0d53cb1eff4d463ad6819f5ff4375aa019040000",
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
      "Mon, 08 Nov 2021 02:03:48 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-17-1636337013394",
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
      "4fdb3014fd2b91f7953ed2f4112a55a32a013ab5294b53109aa6c871af33431a07dbe98450fffb6e1cca4048f029b6ef39f79cfbc8337910c5968c492ab2c70ad4d3b77b999213028666f85af01ffec66cd2db7e7c7d7759f20bce06e174324184a8599aeeca1c5a5a568a811e6fd6ed4cc9aaa44aca16266ab9a3963bf4869e37eaba9e77da479e869c2f44f180ec3fc6947adce91cb5db9994590eb414bacde4eef5bdb3ef754a25ef8119dd792fd94115ddf95cf47b2e1935421693cd1a0d541a54023b2a72b4f09fb94dcfdea76e0bba6b6708de0b0694315915a6b68529982cb8c82a65b392f133b136df1cc83a5804b3d86132af764552d01d9c385b6a68629e4a702ea2d5d2998717ab68398de7ab3059cfae82e5b43d5b2d36cb70eddc5e0551e0189ae660b9cec439b3b7102fa8bf056d4461d5e3fab9567e69d0fce3586a024a6b6882c9a83ba4aedf3d4d793a62dcf70629ef429afae96840bdb4cb4efbd0dfa6409167452d8b16b2003ea05df0fc840ff830e9bb7d3f4987239eb843d6f5d21e67ae3f208713f2570903e74297528ba643e4369ac74112479b70368d035b02a7556ece1b6375016f3d1a2c10419fd474a8a342a252ddee791807d17416cf6f8266c20bc8287b5a3fe28c39cd35209a2a6c9e01b5945b6c1809a7cbe01cc17662d7c7a026e35fcfa4ee79ede24dcb5fe9310eb0b66bec97ace3681e5e5a3b47c40dcd2b0bd93707a28049b545cf87df88c3156d72909f9b20ba23cd53041c1414eceb5922d806befcd38e6b8f585c7c94d106efb8394cd7224c41b341c2167b64f77cd71b120b56e643ace7f58e3dab73d41961078579a9a8597b2cb411abf42b088338fcd0f6eaf00f223a7f2876040000",
    ],
    [
      "ETag",
      "nfJ8UtUbW4TPYGpfFfc5NA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1636337013394"
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
      "f74aa420d26443ea03e9b235124d32421fa6aa422e3ea83be363b6c99445f9ee3bd336adda49f405eecebf13777fff39b05f520b16b33b59ffeec0ec3fd5e07ef82003db2967e9d5a2b6c002068ed744f2ec6792febd9c559bddd9aa5151a7ef13519f9f1361cb7b68388b0fac92a08465f1cd8169de00b595a8ba46177d1630b76f7d719b67cbd577ca1b143e5f5da769324f17ec189c1a0577bce8f90fb4dd1e03f680771954604097e067690d3e40e9967e4dcb9b56c1c862674ab0ac87fb83da60d7728338a2ca289c8dc269348da2d9388ca22f13021596dc49d4c45e6f693ee6d07195e11fda92851111a68f69e3aa7feea82e45bf890f97ab7c3ae9077c0df0b2c44ebb6210aca4b1ee51bd67f04985b7a4e21f04e9aaa41a826ad002cc1025db820b61c0da41126dc1dbf684cdd7ebf4bd2a5a18946218dcc90140b9dd09f896ae93ff494b067bd1ea6b922fde11d6916d4e48bebc5a6cf3e46ae3b9db2723ccf70eecc620b9ca823754389e7c3e9b4dc78f1ebb40ef3bfa4eec4c07012b39fd2a97d2b1b8e2cac2f11f9ab55a1388030000",
    ],
    [
      "ETag",
      "aRYALzH7fPv5Nml3unhAdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:48 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `date`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1636337013394",
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
      "6f9b3010fd2ac8fb6793f203121242a4aa8b5ab622a5a423245d354d893107734b706a9b4e5195efbe039ab6e9a4564232e77befdeddf9ee91dcf122216312f3ecbe04b9fb742b62d222a06986b75179093f2d332e233db3af74b06417cb45767282085eb114dd6c73682b514a066abc98773229ca2d9542b43150db1ab5ad617fd8ef3ba6d5efbb36f214e4e9941777c8fea3f5568dbbdd8376271322cb816eb9ea30b179beef3ef4ba5b296e8169d53d96eca28aeabe2f7a9a0b463517c5c9628e09940ae40a3694e798c20b3389bf1e87ee70bae964087ee00c2863a22c7495168660a2487956ca3a2a193f923acd573f64ee4dbdb3c858f3646d5065ac56dbbb96b14ea886359e39557a55d00dac8d6fe1ecd2584b6042266a6d5c5f78a167343c3f301641e0cd23e3f3e917544d40695ed49a118d73a8f49edae2ffff1815816aaaa071ae1c7348ad91e9c669ecb074d41fc4a909713c8a9d01edc726736db0931828f27415bd66d1022bb59374e8d0c4624ec2864e8fb903c7b1cd21982e3347d8681858ae398ac9be45fe4aaee19cabad50bce90db90efdc85b45e122389b445e5d464acb5c9f37c95545bcce536391087aa7ae7de5e50295aa46fb41e48593b3c85f7acddb4e21a36c37bfc7d74d69ae00d15462ab35c84b9160d3c8d56cee47fe2c984c91513fd8d501a1c8f8d7e30b21da6deb2eebfa2493309cdc20874a49776f7c98c7d026fbfd2bb925cdcb1a52e36bab89ffd0388885b5bc58bd23cb3eb28664ff7b8f5f8be08037cae4c7c20b6f487315420a120af6f14c20b8767cb8a787a5412cae0dca288d364e2053950893d04c22dfd4a53cb17b23d7aab75c53a9dffa5cd3760e2daf6254116103857eaaa8599aba8995ab54cf2074e200057ef01dbdff009a8930d4b4040000",
    ],
    [
      "ETag",
      "TuMeX10buTtO4PtNVcHVUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1636337013394"
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
      "7d",
      "92",
      "51",
      "4f",
      "c2",
      "301485ff4b7d6571303264090f800b62089101316a0829dddd1c8cddd976ea42f8efde0ec38c185fda7b4fcf97de9ef4c0764916328f6d92f8ad00595ec5a067a6084015a956b4e59829600d069ac7e48cfd5d317f723a62ab3f9fb570bb8fee7539ebf5c8a1c42bec39f30e2c4a200d15f35e0e2ce37b206cbdce7764d1656ebaf174e18ffc80843d8646982e2793fe60e2b363e38c845c438ddcf617fefffe942bbdaeea33345f04e3e9e82f6c756cb02d6e0288404226c04c9d4bdc82d0631388e2fb3c054b612105285699ab835862917389689162356faca6ebb88ed3b19b8ed36d933145c17582197997739a8f69d43c0df083f260c620ab92a289aaf59de466f50e53b5ec966dd92dcbaea57b90ef98a86ae69f907b09d5d25cf034e1174ceb92a925df04fe9b685f12b534440d2a42191a6cf5fdd44149e28344ca4d8189cc3ec5374413295de169594083094effe52ed1a7fef805897091f18c020000",
    ],
    [
      "ETag",
      "gEkuSY37cjtxZtc69W6/yQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:49 GMT",
      "Server",
      "ESF",
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
      "0000000002ffedd34b7282300000d0bb64ad0e0241e80e065090a205420b1b06d3f09112f966889ddebd4eaf51df1dde37c83126e3984db78650f002782e6a1bbc3976aa619757d745e909d6138f3fe214622b5443c9e191d72fe896046517f66c792766213ab3df0c37c4f5b657fca24a844061c85a98256fe75abc985290a17357aa05a2028332d208a324a73acc3e87c3d5a5b9e2b7381af80cf7cc37775b7df90aba5644f7d917ccc0b32ec7dd5e58cf161dd7a58fc96214a2a8ca6fb482ad89435af06ad422e794c80704e95d4a8b567313373caf6daf65d40de39ef157d36e364f4fff175801b274f540c6ac7e6c97a0a6adc05ffd6ce21d79fc37483e9001fcfc020834f2f419040000",
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
      "Mon, 08 Nov 2021 02:03:49 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-19-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6f9b3014fd2bc87b6d1228498048d11aa5b48b94908d90b6d33421db5c985b82536c3a5555fefb2ea6e95a556a9fb07dcfb9e7dc0f9ec89da83232214c14f70dd48f5f6e25232704342df075e05d0d57f628bcbfbcd14e90dccd990f37b3e91411a26529badb97d053b2a939a8c976d32f6ad9ec692d650f13f59ca0e78cddb1eb7ab6e3bac110790aca7c29aa3b64ffd17aaf2683c151bb5f48599440f742f5b9dcbdbc0f1e4e07fb5ade02d76af05672802a6af0b1e8d75272aa85aca6db0d1a6814d429eca828d1c27f66c6cedea6ee0bbaeb17087e101c28e7b2a9746b0b537059e5a2686a93954c9e88b1f9ea4036e1329c27169765b3abd28aeee0c4caa8a6a97edc837511af57d622ba58c7ab59b25847e966fe2d5ccdfaf3f572bb8a36d6f5b7300e2d4d5909866b4dad33738bf082fa19282d2aa39eb4cfadf2738316efc7d212505a41174c3d7b4c1ddf0e58ce3c9efbee88e53630e6336f445d66f36008c38c01459e11352c5ac9ca76fc3c87c04e33c7e3e9d0b759ea8fc66e3af4c62ca75ec028f3c8e184fcad858673a1f65289ae43e43a5e24619ac4db683e4b4253424e9b529f77c6da025e7bd45820823ea8e9d0468544a5b6dd8b2809e3d93c595c85dd84975050feb8b9c719e7b45480685a63f334d42b9961c348345b85e7083613fb7e0c2a32f9f544da9eb72e5eb5fc859ee0005bbbda7cc9268917d1a5b173445cd1b2319087ee406ae0b2ced0f3e137e27045bb1ce4c7368c7f92ee29861c6aa8f8e7b344b0097cfaa71dd71eb1b8f828a334de7173b86a45780ddd060953ec917d1a78de2931e05abf8bf963e7d8b336479b117650e9e78abab5c7423bb146bd803088c38f4caf0eff0050fabed076040000",
    ],
    [
      "ETag",
      "/7V4M05EqGXt19TkCb8eXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1636337013394"
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
      "ff8bf735484461b046ea87b0b116354007a93469aa22135f8299e3cb6c870e21fefbce69c7a67552fa25b93b3fa7dcbd7e7362dfa5162c665b59fd68c11cdf55e0bef8600db655ced2ab416d81050c1caf883cdeed36e6e757bd7d5a4c567807fbdd32ac93eb6b226cb1839ab3f8c44a094a58167f3b31cd6ba0b602555bebbccb02e68e8d2f6eb2f57c7943798dc2e7cb87344da6e98c9d834ba3e08ee71dff86b6c773c0f6b85d43090674017e96c6e01e0a37f76b5a5e370a06165b5380651ddc1d5406db861bc4015506e1d5201c47e3289a0cc328ba1a11a8b0e04ea226f66143f331878eab353ed1962c8c88305d4c1b97ddf3407529ba4d7c385f66e35137e0df002f0a6cb5cb7bc1521aeb9ed5fb0dbea8f02fa9f81b41ba2aa9faa00ab400d347c926e74218b0b697449bf3a6b960d3d52a7dad8a1606a5e8070fb20750ee70013ea7abe47fd292c1fe68f529c966af08ebc83617249b2f669b2c59dc7beef1c508d3a3037b6f905c65c11b2a1c8e3ebc9f8c87cf1efb88de77f49dd89916025670fa556ea56371c99585f32ffd74ff7d88030000",
    ],
    [
      "ETag",
      "yKhSrxXnbwM7OoKejhN1mA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:50 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `stamp` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1636337013394",
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
      "02ff85537f6f9b3010fd2ac8fb6793d28400213fa4aa8b5ab631a5b403d2aa9ba6c418c3dc104c6d932aabf2dd7798a66d56a9952211fbbd77efee7cf78056ac4cd104252cbfaba9d87eb8e509ea20aa700eb7ab9fd79e333edf58f5f755747f194c4954ff9d1e1f0383352a89d755418f24af05a172328fbab9e0758505e74710e8c8328ffaaeeddaf6d0ecdbf6d8019da4453663e50ad47f94aae4a4d7db7b7773cef382e28ac92ee1eba7fbdec6ea5582df52a264efd0b2072eb2f7b6e949c109568c97c7f30812a825150bbac6ac80149e9569f2f9307497e1753707f286118a09e175a99ab42004e165c6f25ae8a868f280749a2ffea0c89b79a7b1b164e9d2c0d2582caa55c7584a050e4be34b78716e2c05255ca472695c7ff342cf68b97e60cc83c08b62e3e3c927704aa954acd43e314e0ada783cb6c27ffd008d002b2c690b2e86a68bfb23739c64c99064237b9064264d9251321c603b31c9d8a14e9a500c3ad544d72a5cf2d21c256e36c09943fb0e494cc74a6dd71a119b9a7dc7b24cb8c5e351960dd0ae83ee0553f48cc98a4bd6f6035d877eec2de2701e9c4e634f9791e1ba50676d724d112ff354502490dea86bd7a08c8353d35c3f88bd707a1afb575efb9e339a63b28deee045335c480a6c2cf09a2a2ace790a4d439717911ffb17c174060afd48977b8644935f0fcf82785be92e2bfd45d3309cde80060b81b7ff619087eba0ddee85dd152e6a4dd17c7d6ae36f5a00f5a196e7937570720e4e2edafddec1af8360a85b67f463ee8537a8bd0a6946052dc9fb3301640dbcbb9bfb45012eac0ad8c0c02a061348646342046d2791ad75298f6adb74fb2ed264a15e61c3e170dff226461391ae69a91e2b6a174537b1816af94402100628f083af80fe03a6c1be30a8040000",
    ],
    [
      "ETag",
      "kZWE49Mv2uJkSwPNAcSuzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1636337013394"
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
      "ff6d916d4fc23010c7bf4b7dbbe9c61ed84878016641e4213ac0440d21651c73b0ada3ed2448f8ee5e8b514978d3de5d7f77b9ffbf47b2cdca1569916596ee6ae0879b14e4b30a6210752e055e152b05108380a42992bd3dc4f271b4db2e8bbb973a1d7cbd0ef2b77dbb8d84483ea0a0a47524eb0cf29520adf723296901d8b658545b44e4a152597f3c8d7a518c8582ad54613c1b0e3bdd61444ec66f8b90b4a8fe7aa6fd51349976464fd7bae627836cd8328635702813504b549c6d20917da54fe0a81c4cc16a9e80201ad60f2967754539632656cc8665dabee33b4ed3b21d277411cc594265c64a6467135c8f4826691eb33dca230ae03a44a56b7d7e62d9d6327474eb0596e78576e846a15ef33fe75f7261685fe71a979cefe244d7bb02ba9760600728c2f39bc1999dff6cdf3d48104f9ca11502940bd6d9917ba65c92e89ee4351824a1f8a30f993ce7a76fe7fbc2dc2e020000",
    ],
    [
      "ETag",
      "GweRtJMqkbm/VugKzYKlZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:51 GMT",
      "Server",
      "ESF",
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
      "5b",
      "72",
      "82",
      "301400d0bde45b191f88d03f1145607c802525fe3088578100c1906940a77bafd36dd4b387f344499a42dbc68251a8d107ea9389a1a48ad7e8e6fa566cdb2f7ab1c831d88f7037ac882af7727e4efcc929d3baef3a2149779324708c54bd93be0c23e979eed5856219ecc360c7738d739a8fd98e81c39a62b3bed03b9e36d809841f8ef96956fa23dbbab4a5a66bc7dd555d008eb3fccc405f5513186e5c339215ab4a77ebebd82efccdb1179f56b89a7b36c3dbbe5ec803e91f16895aa97bb82a6af39e015f3e0a2af4e1980b272ac3921a8d6ad39938441957dedefe2f3440d035398736ce5fdba733c318a0bffab1e81b78fd3721e1c0d1cf2fc12c16cf19040000",
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
      "Mon, 08 Nov 2021 02:03:51 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-21-1636337013394",
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
      "2b",
      "64",
      "f6",
      "d5b65068699b346b53716db6a54aa9c66c3664985e70141864064d63fadff732585763a24fcccc3de79e733f78210fbcd891098979fa5843b5ff712f62724240d1145f9fcbdbbbabfeef3ab1f6ebfbf2c1cc1d97cd66d3292278c392342f33e84851570ce464bbe9a695a84b5a09d1c1449dbed5b186f6d0b65dd3b2edb1833c0959b2e4c503b2ef942ae5a4d73b6a775321d20c68c9659789fcedbdf7d4ef9595b807a664efa3640f5564ef6bd19f99605471514cb71b34504ba822c829cfd0c27fe62e3efd98bacb69de4d11fcc41950c6445da8c616a660a248785a573a2b99bc106df3dd816cbca5370f0d26b23a2fa282e67062eca8a291da97609c07eb95b1f0cfd7c16a162ed67eb4995f78ab5977be5e6e57fec6b8b9f002cf5034ce40738da971aa6f3e5e507f0752f142ab87cd73a3fcdaa0c5e7b134049496d00623d71c526b648ee324765932b2077162421c8f627740edd86463079c5d0c14795a54b368210ac772dcd81d8e2318b866e498fd241a5173108d2d2b198f9cc1680c16399c90e78a2b38e3b21492b71d2237c122f4a230d8faf359e8e912125a67eaac35d614f0dea3c20211f4454d8726ca052a35ed5ef8a117cce6e1e2da6b27bc8494b2fde611679cd04c02a26985cd5350adc40e1b46fcd9ca3b43b09ed8e53128c9e4cf0b697adeb878d7f2377a88036cec2afd259b3058f8bfb49d23e29a66b5863cb507520113d50e3d1ffe220e57b4cd41aeb65e704bdaa70012a8a060dfcf12c13af0ed9f765c7bc4e2e2a38c5478c7cd61b2116115b41bc475b147b66d0d6c936870a53ec58643ebd8b32647",
      "93117228d46b45edda63a1ad582ddf4018c4e1fbba57877f3e06a8bd76040000",
    ],
    [
      "ETag",
      "wpYhQ2Kuf1yOjpk0m47cAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1636337013394"
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
      "000002ff8d93516f9b3010c7bf8bf738228591d215a90f24cbb648344909ddcb5421c73ea83b6333dba44aa37cf79d699756eb24fa0277e7df89bbbfff1cc82fa13849c856d4bf3b30fb0f35b86b1fe4603be92cbe5aad2c908080a3359217d7ebc71fb3749acfc61fbb74efeee2edf6ece1f21209cbeea0a12439904a80e496243f0f44d106b08d69d935aaecb380b87deb8b9b225f2cbf61de68eef3e54d96a5d36c4e8ec1a9915347cb9e7f47dbed3120f77a9b43050614033f4b6bf43d30b7f06b5adab4124656778681253ddc1fd446772d355a8fb032fa148ec2388aa3e87c1c46d1c50441a91975422b646f36381f71da5199eb07dc92841112a68f71e3aa7feeb02e78bf890f17cb229ef403be062863ba53ae1c042b61ac7b52ef2ff8acc2bfa4a4ef04f1aa841c826a501ccc1025da92726ec0da4152db92b6ed099bae56d95b5514375af06170270600e97627e06bb64aff272d1aec45ab2f69317f435887b63921c5e26abe29d2abb5e76e9f8d30dd3bb06ba3d15516bca1c2f1e4f3d9793c7ef2d84c7bdfe17712673a0808a3f8ab7c178e241595168e7f00e77320ab88030000",
    ],
    [
      "ETag",
      "9QPzVCABRC0+uAyth6bb5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:52 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `stamp`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1636337013394",
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
      "02ff8553614fdb3010fd2b91f765d36893366d5a2a215641c6229514d21486a6a9b51d2733a471b09db20af5bfefe250a04302294a62bff7eedd9dcf8fe88e17091a21c2b3fb8ac9cda75b41d001621a67b0bb4e1f54ae2fcf7f6afcd7fe7a964d67ee69901d1d0183d72a855765ce5a4a549232359acfda99145589a5102d08d4ea765b1dcff55c77e0745cf7b0073ac5f274c28b3b50ffd1ba5423dbde79b73321b29ce192ab3615abe77d7bddb54b296e19d5cadeb7b4c145d9ef9b1ee78262cd4571349f4102956272c15698e790c28b3221dff643b7395eb53320af396598525115ba4e0b425051a43caba4898a468fc8a4f9ea07cdfc897f125b4b9e2c2dacacc5a2bc3bb0964a83c3127e72acf4a2c02bb6b4be47d3736b29191532514bebfa871ff956230c426b1e86fe2cb63e1f7f01db8429cd0b631a6392b3daf0a92fc1dbd3a8055863c51a7031703cdc193a872425039a0edd3e491d46c8900cfad8250e3decb15e4218069daea31b152ea054c7f3ba8321265d872443823121b847583a187658a743fa7d0722518fa0ed017a905cb353ae4aa178d31c741d05b1bf88a37978328e7d53468aab5c9f36c9d545bcce534391407aa7ae6d8d72014e75a78330f6a3f1491c5cf9cde14e5886e966760fc79be25c31606309add64c9e8b049a862ea6b3200ea6e178020a7362173b8642a35f8f2f8278539a2e6bf345e3281adf80064b8937ff619087d743dbed2bbb2b9c578662f866d5c45f3700ea402d2fabeedeaab7b7f2d0f6f7169e030413de38a3cbb91fdda0662b622993aca01fcf04900df0e145dddd1ae0c2bd011b985ecd6102a9aa4da864cd24f29529e549ed76e18d0c59ea3758cf1dee5a5ec7a823b2152bf45345cdad314daca14a3d930084010a83f00cd07fcaa92ed7b5040000",
    ],
    [
      "ETag",
      "vfwsltQMXtax/+GgOS3DIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1636337013394"
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
      "7d",
      "92",
      "5f",
      "4f",
      "c2",
      "3014c5bf4b7d05c3d81fd8121e802c3883a8030c8921a48ccb1c6cbbb3ed5442f8eede0e83108c2fedede9f9a5f79e74cfb649be621e5b26f17b09627713837ad64508b24c95a4adc05c02ab31503c2667fcd917c1a3633a33fbabb97b6995595acce24e871c327a838c336fcfd609a42bc9bcd73dcb7906842d16c5962c6a57e853309af8033f2421c3951646d3e1b0db1bfaec503b2152f1acf86526c1833f9e741f9efea7522ed5a2aa4fe4781206a3c15fd8fc50631b5c86b006017904baf742e0062215e858247590425d62292290ac325717b1c0b2e002b14e4abdd9ac1b948869b61a8669ba1619538cb84a3027ef744cfd31858aa7217e522a4c1b44555240eb6afd20d9a8e6a8aa5bbbddb06dd7702ddf3da9f7203e309155dbe79c73c9b9ae71c98d239e26fc0a6b5e628e450f5af619e7730557947549b58d360d6c3badf619d84705728d62a5e9f9cfecbd1d894f022948093ac3c631cf3eea8ce9254f89126a2ce2f48dee12753c1fbe01e2eec780a3020000",
    ],
    [
      "ETag",
      "gwCrIO636X5x2yV7umlpXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:52 GMT",
      "Server",
      "ESF",
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
      "ffedd34b7282300000d0bb642d8c14a3a4bb62f9091505f96e3280012903093fabe9f4ee757a8dfaeef0be415614641cf1441bd2815770cf5e905888365354bdba4891565358516c84f2de48bcd4413a62420dd75a3b17d7a4997b81a64232c5beb4b1a6f3727daa96f870e1b2be2b716841fb42ce9ecdad263f797177ee716a087bb46d78376b94fb58eb33e82f37a589826cf5a59ae5351af8cd0b1dcdb3ccd8727ba7bf62c877f2d1ddd6acca1c96c31c1be99bacb59fe6f811da52306f252fa0bed1a96d11af8466ad9894339d14cad18de2327e3785431faa6e603737f1e9e9ff020b406eac1ec888ebc7761922b4007ff5f17467e4f15f25d94006f0f30bc4318b2f19040000",
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
      "Mon, 08 Nov 2021 02:03:53 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-23-1636337013394",
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
      "6d0204929048d19aa574454a484748ab699a903186ba059cdaa6555ae5bfef629aae55a5f609dbf79c7bcefde019ddb13a435394b2e2bea162ffed96a7e80451850b781deebd27f6545ca9f2a65a3c4d7e0471b30f1e673340b0962571b52b694ff246102aa7db4dbf10bcd961c1790f12f5064ecf1e3923c7195bb6e34c5ce0495ae64b56df01fb46a99d9c9ae651bb5f705e9414ef98ec135ebdbe9b0f037327f82d254a9aef254d5091e6e7a2df4b4eb062bc9e6d3760a0915424b4c2ac040bff99597afa3e759fe1aa5f00f881118a09e14dad5a5b9082f03a6745237456347d46dae69b03daf84b7f111b84974d552735aee88991618513b5df51e33c5aaf8c203c5f47ab791cacc364b3b8f057f3fe62bddcaec28d717de147bea1705a52cd3566c6a9be857001fd8c4ac56aad1eb7cfadf24b83828f636909202d69174cc6d608db9e3549f3744c72cf19a6b945d3d44bc743eca41699b8d4cd528a81a745350bd7bc1e66cec025633b19d9d84b5ce2da8997b95962397636269e3b1978363a9ca047c1143d6372c725eb3a84aea320f69338da868b79eceb1272dc94eaac33d616f0d6a3820201f4494d8736ca3828b5ed0ec2d88fe68b38b8f2bb092f6981c97e730f33ce712929a0b180e6292a563c8386a170bef2cf00ac2776790c4a34fdf38cda9eb72edeb4fc951ec3005bbb4a7fd1268e82f0a7b673445ce1b2d19087ee8004255c64e0f9f01770b0a25d0ef46beb47bf51f714d19c0a5a93af6709601df8f24f3bae3d6061f141462ab8c3e610d98a1041bb0d62bad823db71ecc90869b0501f62838975ec599ba3cd48",
      "2b5aab978abab587423bb146be822008c30f75af0eff00ef36b8aa76040000",
    ],
    [
      "ETag",
      "5y8zizgVtlhmCz9BITuyIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1636337013394"
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
      "0002ff8d93516f9b3010c7bf8bf74a2418295d91fa90b4591789245d42f73255c8c50773677c9e6dd2a551befb0eda65535b89bec0ddf977e2eeef3f7bf6536ac1527627eb5f2dd8dd871afcd72e58836b9577f432a81db08081e735912bdb84a68aecd5b759e8cf7071f9d826bf1fcecf8970e50f68384bf7ac92a08463e9f73dd3bc016a2b51b58d2efa2c607e67bae2265fcf9757943728ba7c7993659369366387e0d828b8e745cfbfa3edf610b07bbc5b4305167409dd2cc6e23d947edeade97863148c1cb6b604c77ab83fa82db6865bc41155461fe35194c4491c9f86511c9f8d095458722f51137bb3a1f99847cfd51a1f684b16c544d83ea68dabfeb9a5ba14fd265d385fe6c9b81ff07f809725b6da17836025adf34feafd059f5578492afe4e90ae4aaa21a8062dc00e51d2145c080bce0d92e80a6ecc119bae56d96b55b4b028c530b8950380f2db23f0395b4dde92960cf64fabcb493e7b45384fb63922f97c31dbe493c575c7dd3e1b61baf3e0ae2d92ab1c74868ac2f1a793d3247cf2d80576bea3efa4deb610b092d3aff2457a96565c3938fc010b67731b88030000",
    ],
    [
      "ETag",
      "Orm0pf1rGVE0t9oMDzu6xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:54 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `first_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1636337013394",
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
      "0002ff85536b6fda3014fd2b91f765937885040848558b68b645a2404368554d1338e686ba0d716a3bed50c57fdf8d53fa58d5558a94c4e79c7beecb8fe496676b322031dfdc1520775f6e444c6a0434dde0e9c3f9e8fceeb43dccae23b9b8c8fae1349bcd1e8e8e90c14b95a2db3c85ba128564a0068b79632345915329441d03d5db6eddee3a5dc7e9b56cc7e9bba8539026639edda2fa5aeb5c0d9acd83776323c426059a73d56062fb7cdebc6f3773296e8069d57c6bd94417d5fcbfe9712a18d55c64478b39265028904bd8529e620a2fca757cf2367483d36d6383e47bce8032268a4c9769610826b2846f0a69a292c1233169befa20737fec8f226b657c561655d67299dfd6ac55c2a5d2cb8c6e61657d0fa767d64a021372ad56d6e54f3ff4ad674d30b11693893f8facafc7dfd0740d4af3cc5846344ea1b47bea4af07e16a5806aaaa00297bd5697da5eab1f27718f259ed3899316c4b117f73ad4895bacef82bb8e81a24e97d18d8a662273da8ed7b17bfdb6475dcfeedab6b7f65cbb1b23d949dc6eafd707c7867597ec6be441720da75ce542f1aa35e4320c227f19858bc96818f9a68c8416a93ead922b8b789da7c62291f49fbaf625ca053a957d0e26911f0e475170e157a31dc386b2ddfc0e879bd05401b2a9c46e6b9067628d4d23b3e93c8882e96438468599d7ecc05064f0ebf14510ed72d3656dde641886c32bd45029e9ee1f6c1e85c1e407d9ef5ff95dd0b4301c23307f95c17d0510b8c1e5125cb54ee08f29d2acd7bef6c2c0c5d3607f08e37cf435c88f7126b0a109ae97f396f37b8f4f8de06da9ea20e70b3fbc22d551080948c8d8e71b8664037c7ae90f3710b97807d14669fcc77d66aa346112aabde6db329983da713bb6470c59ea7758b7d33e0cb08c5146842d64faa9a2ea069a899450a19e4908e23a4eaa79fd05ef548bdb01050000",
    ],
    [
      "ETag",
      "wQCQqD2AnhTrUVn9ROnPPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d915f4fc23014c5bf4b7ddd74a388918444408244243a2031318494ee6e96fdb9b3ed54247c776f87313ef0e04bdb73fb3be93db77b96a932665db651e95b0d7a7796827d7287084c9d5b435b85a501e631b02225b27ffba0db2d9e655ff7c1736b7c91278bcb30edf58830f2150ac1ba7b9628c863c3ba2f7b568a02c8b65e571921765739355f4493d9987481b1d3b3e574da1f4c47ece0fd3a12a58d5d37e21fbed5c1635bdc449080865282eba2d2b80569272ea0114595836fb0d6120c6be0e622d558574223fa54f15b6d3fecf00ee75741c8f9759bc01ca5b00a4b6297736a9059b4228ff083f2314e806e8e143569d6772ac316f43b2a13dcc067f3f0b9c4a209e76e475a41d3f15f8b0461213cc90f8554f9098b9068c124a8637ed2d72f8415ceb5fa697ab023fe51234dc0800b1f1c073144e7b53434ab6bf09814f49377ca1ef5e11b7546f97b26020000",
    ],
    [
      "ETag",
      "ADMr423kkzK0X2G/lfT51g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:54 GMT",
      "Server",
      "ESF",
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
      "d3417282300000c0bfe4ac4c1141d35b4060842a8828900b8369aa496a85001ae9f4ef75fa8dba7fd86f501142dbb6ec2e827e815770af2650235a58cf6def78c4751918e6654f8af8a6f313dc7f4649beb10f8399e02be9230786a2c7d2cf0e1645cda0962e13ebaeca63ce20b482dd6ca143267a741d92e66da5bc05eebc466235965ec3a9938f59698965313f67284549213e280ac835594f6384bbe17db3cd4ca82ead2a226397e94e4822bfe267aec72957076782565632ab4fee5992f865d71b86db0863a3e4b68282721cba8ba9959699f05dd68a828ead427b7afabfc00850553349db923db61b268423f057bfecee357dfcb76925a9043fbf5213798419040000",
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
      "Mon, 08 Nov 2021 02:03:55 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-25-1636337013394",
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
      "536b6f9b3014fd2bc8fbda0408794bd19a2574454ac80aa4d5364dc818c3dc02a6b6691555f9efbb98a66b55a9fd84ed7bce3de73e784277ac4ad11c252cbf6fa8387cb9e5093a4354e11c5ed793dab26e7e1ddcbd5994cb6fabfdc193e3abc50210ac65495cd605ed49de0842e57c1ff673c19b1a0bce7b90a83718f5ecb133769c89653bce6c083c498b6cc3aa3b60ff55aa9673d33c69f773cef382e29ac93ee1e5cbbbf930306bc16f2951d27c2b69828a343f16fd5a708215e3d5621f8281465211d312b3022cfc67a6c9f9dbd47d86cb7e0ee0074628268437956a6d410ac2ab8ce58dd059d1fc09699baf0e287437ee2a32082f9ab28a2b5cd23323c50ac7ea5053e322d86d0dcfbfd805db65e4edfc385c5dbadb657fb5dbecb77e68dc5cba816b289c1454738d8571ae6f3e5c403fa552b14aab47ed73abfcdc20effd585a02484bda05e38935c6f6d49a25593221d9d41925994593649a4c46d8492c321bd2619a500c3c2daa59b8829aadcc196723274e47432b1eda033bc6b3cc89ad1126f6c4c6763a75d0f10c3d0aa6e89ac99a4bd67508dd045ee4c651b0f757cbc8d52564b829d4ba33d616f0daa3820201f4414dc736ca3828b5edf6fcc80d96abc8bb76bb096f688ec921bc871967b89014d05840f314155b9e42c390bfdcba6b00eb89fd3805259aff7e426dcf5b17af5afe428f6080ad5da5bf288c02cfffaeed9c10d7b86834e4a13b2041091729783efe011cac6897035deddde027ea9e029a51412bf2f92c01ac039ffe69a7b5072c2c3ec8480577d81c225b112268b7414c177b623ba3c1608a3458a87731c71a9f7ad6e66833d29256eab9a26eeda1d04eac912f2008c2f07dddabe33fe9d5329e76040000",
    ],
    [
      "ETag",
      "D7p00WZyEU/lmABCUyIs6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93616fda301086ff8bf73548b000dd22f543e8e886940285d055adaac88d2fc1ccb13ddb61ca10ff7de7b465533b29fd92dc9d9f53ee5ebf39901f5c321291475efeacc1341f4a70d73e5881ad85b3f8d24a5a200101474b24b7cdefdd68f41d9aedcd6d7c43974b7db9b9bb3e3f47c2e65ba828890ea4e0209825d1fd81485a01b6e54ad495ccda2c20aed1beb84e57b3f957cc2bc57c3edf24493c49a6e4189c1a1975346bf977b43d1c03b2538f2b28c080ccc1cfa28dda41ee667e4d4b2b2da067556d72b0a485db83d2a85a53a3540f2bbd8fa3de601c8ec3f0ac3f08c3cf430485caa9e34a22bb59e37cc42947c54afdc22dc92044c2b4316e5cb4cf3dd6396b37f1e16c9e8e87ed80ff0234cf552d5dd60916dc58f7a4de0bf8acc26b52d0778278555c7441254806a68be23aa38c19b0b6935436a35a9fb0c96291bc554532a338eb06f7bc03106e7f022e9345fc3f69d1607fb5fa12a7d3378475689b1392ceaea6eb34be5a7aeee1d90893c6815d1a85aeb2e00d35e80f3f8dcec6fd278f5d28ef3bfc4ee44c0d01c929fe2adfb82351418585e31f03f0d02c88030000",
    ],
    [
      "ETag",
      "hyzj55WeyhVXAVaPPpFUZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:55 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `first_name`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1636337013394",
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
      "6b6f9b3014fd2bc8fbb2497940c85baadaa8655ba49476401a55d3941873a16e094e6d932daaf2df77314d1fabba4a918839e7dc735fe681dcf122216312f3ecbe04b9fb742b62d220a069866ff5c857371ef8ee36946ab4e8f717d12c9a1c1d2183572a45d79b1c9a4a9492811acfc3562645b9a1528826066a76fa4da7eff65d77603bae3beaa24e419ece787187ea1bad376adc6e1fbc5b9910590e74c3558b89f5d3fbf6b6d3de48710b4cabf66bcb36baa8f6ff4d8f73c1a8e6a2389a879840a9402e614d798e293c2b93f8e475e816a7eb5686e42d6740191365a1abb430041345cab3529aa864fc404c9a2ffe90d09b79a791b5323e2b8b2a6bb9dcdc35ac55caa5d2cb82ae6185a79c1e0ed6d7e0e2dc5a496042266a652dbe7b81673d0598fad6dcf7bd30b23e1f7fc10c12509a17c63fa2710e95f7638ba66f075309a8a60a6a7039b0fbd419daa3388d072c1dbabd38b5218e87f1a047ddd866a32e74931828ea7415dda868210acae25e67307293218bbb307062870e69c71924893d6469c74e9cee28e9251db26f90df926b38e36a2314affb4416c134f2965130f74f279167ca486999ebb33ab9aa8897796a2c1249ffa96b5fa15ca053d5f4a91f79c1e4349a5e79f59c679051b60bef71d229cd15209b4aecb606792e126c1ab9bc08a7d1f4c29fcc5061867779602832fef9f02c88761bd3656d9e641204936bd45029e9ee1f2c8c82a9ff8decf72ffcae685e1a8e1198536db0ad0102b7b869822bfb04fe9822cdaeed1bcf0cdc420dcebb30ce47df807c1f67021b9ae27ab9af39bff6f86b10bc3a751de4c7dc0bae49fd2a80142414ece30d43b2013efc021cae2372f142a28dd278c67d66aa326112eabde6eb2a9983daeddb1df3fdd054ea3798d3eb1f0658c5a822c21a0afd58517d1dcd442aa8544f2404711dfd7a5e7f01ce1667920e050000",
    ],
    [
      "ETag",
      "t9NshEeN3vSrs9W66WTLTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1636337013394"
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
      "95",
      "52",
      "61",
      "4f",
      "c2",
      "3010fd2ff5eb30c0047509894088a048604862620829dd0d0bdb6eb41d4a08ffdd6b5124912f7c69fbaeefbdebbd74c756328b58c0e672b12e406daf166046f610822e12a369cb31d3c03c06862f88d98dfacfa3dafae5ae18bf75c2daa03cec56a366a3410c2d3e20e52cd8b15842126916bcef58c65320d96c96af8862b6b945e3d7b03778249c6264f160d2ef375bfd0edb7b47452c953633072ed225fc02d974efb125ce4388414126c03e3e57b804617a3617cdd33c8192c64209d0cc91ddc5426191738558a24aa95a2f55ea7eddf76fcb15dfbfbf216282821b89197127637a1f33687812e227c5c27c222877a48462b76ea80c4b501b94bafc005faef1b5c0d4cd666f3b4ac2113c1d986e82530b01dc40e5acbecd854c4e2c3ac4fca7e7020de81855e49f3569a6dcf03fcb5fb2f599feccd8da5271a89002d360b32a1f726ba375a39e815105784c70fa2f5d690e78ff0d4d25b5d58c020000",
    ],
    [
      "ETag",
      "HdLKQ5qM8uSXER5N0PH2dA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:56 GMT",
      "Server",
      "ESF",
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
      "59",
      "72",
      "82300000d0bbe45b1cca66e85f11284b59824a313f4c8014b08261b1029ddebd4eaf51df1dde3720794e87211d2f9fb405cf602682baced72e839a5956e5289d324ebbf95f04b64f65a5869a90cd097d3310127073db92404c2b357a55dc0185530c636ac0dc5b96ce9e4a896348c1a6611a44668ed5c1f23c2745b35c31c35e30f33572682b5347679ba6c0f235f012be3bd8a88cdbbcb0e17628c6a2ca22ef62e21de78af5a9b062413f461037ef8aa1c00fc20b689288e4103642a4ef6ee74d760d5f62afcb984f0f6d931ef7672d6ac3a0dfee3bdfb2796bfdf0f07f8115a013ab7b3aa4f57dbb28abea0afcd54fc799d1fb7f8d929ef6e0e7173333092219040000",
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
      "Mon, 08 Nov 2021 02:03:56 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-27-1636337013394",
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
      "6f9b3010fd2ac8fb734d8090842452b446095d33256423a4d5344dc89883b9259862d329adf2dd7798a66b55a99590c0bef7eebdfbc123b9e545422624e6d95d0dd5e1d38d88c919014533bc85f185f5cd767819246bf7f3c3c3eed05b98d9748a08deb024dd973974a4a82b0672b2db76b34ad425ad84e860a24ecfedd84367e838ae653bceb88f3c0979bae2c52db2ff2855ca89699eb4bb9910590eb4e4b2cbc4fef9debcef9965256e802969be963451459aef8b7ec905a38a8b62badba2815a4215c19ef21c2dfc6726f1f9ebd45d4ef7dd0cc1f79c01654cd4856a6c610a268a946775a5b392c923d1365f7c90adb7f2e6a1c1445eef8ba8a07b383312aa68a40e251817c1666d2cfd8b4db09e85cb8d1f6de797de7ad69d6f56bbb5bf35ae2fbdc033148d73d05c636a9ceb938f07d44f402a5e68f5b0b96e949f1ab47c3b968680d212da60e45a436a8fac719cc62e4b47ce204e2d88e351ec0ea8135b6cdc877e1203459e16d52c5a88828d878301c038b2d86814f56d368a46c334895ca73fecd9ccb618b8e47846fe565cc182cb5248de76885c07cbd08bc260e7cf67a1a74b48699dab456bac29e0a547850522e89d9a8e4d940b546adabdf4432f98cdc3e595d74e7805196587ed1dce38a5b90444d30a9ba7a05a8b041b46fcd9da5b20584fecfb2928c9e4d723697adeb878d1f2677a88036cec2afd26db3058fa5fb59d13e28ae6b586dcb71fa40226aa043d1f7f230e57b4cd417eecbce02769af0248a182827d3c4b04ebc0877fda69ed118b8b8f3252e1193787c9468455d06e10d7c59ed8f85816d1e04abd89d9bdc1a9674d8e2623eca1504f15b56b8f85b662b57c06611087efeb5e1dff01e4946cca76040000",
    ],
    [
      "ETag",
      "e9F0J13ipRdM7+zzUy2D/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d93516fd33010c7bf8b794d454b4a0a91f69042c72ab2764bb38781a6c8b32fc19b631bdbe954aa7e77ced9e81043ca5e92bbf3ef94bbbfffd9937ba13849c9ad687e7660776f1af0972128c075d23b7c19ad1c908880a70d92b35f26c94e8bb7f3eeebc6ace5fdeeecf2db7576728284633fa0a524dd935a80e48ea4dff744d116b08d69d9b5aaeab388f89d09c54d592c575f306f350ff9ea2acfb379be2087e8d8c8a9a755cfbfa2ede610913b7d5b400d161483308bb1fa0e985f86351d6d8d8491d39d65e0480ff7078dd59da156eb115646ef66a3491227713c1b4fe2f8e31441a919f5422b64af36381ff1da5359e807dc924c62246c1fe3c675ffdc625df07e93102e576532ed07fc1ba08ce94ef96a10ac8575fe51bd3fe0930aff9292be12c4ab1272086a4071b043943015e5dc827383a4761535e688cdd7ebfca52a8a5b2df830b8150380f4db23709aafb3ff498b067bd6ea73562e5e10cea36d8e48b93c5f6ccaecfc2270374f4698ef3cb80babd1550e82a126e3e987f7b364fce8b14f3af80ebf937adb414418c55fe54c7892d6543a38fc060b12072688030000",
    ],
    [
      "ETag",
      "7zp6AFR/BuKSpOlkyHQZYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:57 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f76593fa4849d3d24a080a84ad13044853109ba6d6766f824b1a17db61eb50fffb6e1cca6308902225f139e79efbf23db911f98cf40913e96d016af5692e19a9113034c5d376f3f46f7c7934bf5d85fbfbd90fbe7f917ecfce777690214a95a68b6506752d0bc541f7c7a346aa64b1a44aca3a06aa6f6dd75b1dafe3795db7e579bd36ea3464c9b1c86f507d6dcc52f79bcd8d77239532cd802e856e70b9783c6fde6d35974ace811bdd7c69d94417dd7cdf7437939c1a21f39df108132834a8092ca8c8308527e58cedbd0cdd1074d148917c273850ce65919b322d0cc1659e88b450362ae9df139be6b30f320a8e8383d8995a9fa943b533992c6f6ace34a3da4c72ba80a973149d9e3853055caa999e3a97df8228701e25c3d0198761308a9dcfbb5fd07306da88dc3ac6946550ba3d3465f87a14a5801aaaa102275db7435bdb6e8f25accb936dcf67890b8c6db3ae4f3de6f25e1bda33061475a68c6e55349779abe74297cddaed2dd7a32d3ef33b89dfe9f90c7c602db645a9ebf798ef33b2ae91df4a1838147a29b5a83a432ea3611c4ce2681c1e0ce2c09691d022338755726511cff334582492dea96b5da242a253d9e6611807d1e0201e5e04d5648f21a57c35bac5d92634d3806caab0db06d4899c61d3c8d9e968180f4fc3c1312aecb8ce360c4dfa3fef9f04f16a69bb6cec9b0ca26870851aaa145dfd878de268187e25ebf533bf0b9a15966305f6af32b8ab000273dc2d29b4bb077f6c9176bbd6b52706ee9d81d69b30cec75c837a1be7121b9ae07a792f39bfd6f8d4085e96aa0e723e0ea22b521d459080829c7fbc6148b6c087777e7301918b57106db4c17fdc67ae4b13aea0da6bb12893d9a8bd6eb7d72196accc2bace7fa9b019631ca88b080dc3c54545d403b91122af42309415cc7b09ad73f3af72a8e00050000",
    ],
    [
      "ETag",
      "4/OzTWFjqyNBBlZcBVgJlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1636337013394"
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
      "02ff8d51614fc23010fd2ff5a39b01665097900884004a880cf8640829dd6d6e6cbbd9764c20fc77af458d897cf04b7befde7be9bbeb916d9322643edb24f17b05727f15839e99220055655ad15562a180390c348f49a90279b8aeb7b3b41e745ba3e7e162336fd7b34e87144abc41ce997f64510259a898ff7a6405cf816ceb75b92589de9706cd17c1783a249c6368f0743999747b93013b393f8e8c2bbdb6f53f6cab93c352dc04108184428009514a4c41e8b1994ff1bcccc0555849018a59b125628955c925a24b1db775ef36db5edbf3ee1a4dcf7bb825618682eb040bd22ee7948f69d43c0bb0a6f1984702694b9a34b2e78eda9082dc61a21a8ff0611fbe1198dbd90cfb74266de8df2e015c43f3a26540cc1f3d17a841452843efa2a9ff4d1be7ea2b786f4fcd1789b4050566018df332fa68fcf48aaf65050e139c3e7394e8333e7d0266927ae529020000",
    ],
    [
      "ETag",
      "sRrz+wkQjwEA2HKGTbS6wQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:58 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ffedd34b7282300000d0bb642d0e1041d21d1fcb08229469d3c886c1100451b00181d0e9ddebf41af5dde17d838c52d67569dfd6ac012f40642a5ad2e55136c920cfefc1e7cc57214c94b2d062eb12bde6515f18f17592031deb56e2b559b7e9654cb7a7811abd2eebbb9d444ccdb96151cc11f7ddb71ee704b9c1c56c311c6135166a3bf1535246e7b4f1423bb8ae2f668ae33bde4f6ac8a904d12c94f3917853ed17940ceb4d6e7b8db22d0f8a646e4b3275becd8d7844ce21bba7f05a451fd5fe6bcc35d51436b26ae2341c266129c5fd7068e65a48a12b5c911a5aed34e1ca90eca3e6d3e5d3d3bf0316804db78ab32ead1edba186d002fcd54f7b71638fff16cb38e3e0e71797750c0319040000",
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
      "Mon, 08 Nov 2021 02:03:58 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-29-1636337013394",
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
      "53db6ea33010fd15e47d6dae24402245db28a5db4809e912d2ee452b649c81754b30b54daba8cabfef609a6cab4aed13b6e79c39672e3c937b5e6cc998243c7ba840eebfdc89849c11d034c3d7cb1fcbfeb5deabfbdbd2b9fac5c119168b249b4c10c16b96a2bb328796129564a0c69b753b93a22aa914a285895afd51abe7d88e6dbbdd9e6d8f06c85390a70b5edc23fbafd6a51a773a47ed76264496032db96a33b13bbd771efb9d528a3b605a75de4a765045753e16fd9a0b463517c564b34603950219c38ef21c2dfc676e93f3b7a9db9ceeda19821f3903ca98a80a5ddbc2144c1429cf2a69b292f13331365f1dc8da5ff8b3c86222af76455cd01d9c595baa69acf7255897e16a69cd83cb55b89c46f35510af6757fe72da9ead169b65b0b66eaffcd0b7344d72305c6b629d9b5b8017d4df82d2bc30ea51fd5c2bbf3468fe7e2c3501a51534c1d8ed3ab4e77547499ab82cf5ec6192762149bcc41d523be9b2d10006db0428f28ca861d142143d7b301a50368c1dd7a3f1a0ef7ab1e77a4e3c62a93374537047bd941ccec893e41a2eb82a85e24d87c86d388ffc380a37c16c1af9a6849456b9be688cd505bcf6a8b140047d50d3a18e72814a75bbe741e487d35934bff19b092f20a36cbf7ec019a7345780682ab1791ae4526cb16124982efd0b049b895d1f838a8c7f3f93bae7b58b572d3fd1231c606d579b2f5947e13cf866ec1c113734af0ce4b13910094cc82d7a3efc411cae6893837cdff8e14fd23c85908284827d3e4b049bc0a77fda71ed118b8b8f324ae31d3787a95a84496836889b628f6cdb1bf6cc7faaa9d4ef628e899dd6bdce083b28f44b45cdda63a18d58a54e200ce2f003d3abc33feb49183276040000",
    ],
    [
      "ETag",
      "FXM2PtyskWp6HZie65nLbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1636337013394"
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
      "10",
      "c7bf8bf79a4a29e9ca88c4435bcae814dad286a70945c6be642e4e2ed84e5154f5bbef1c58370da4f092dc9d7fa7dcfdfdcf813da94ab2983daae2b901d37e29c0ddf96003b6d1ced2abc6ca020b18385e10f9a32d5e7675b85c875b5e4a89ad98cdaeef2e2f89b0e217949cc507962bd0d2b2f8e78155bc046a13a89bb2caba2c60aead7d719b6e16cbef9497287dbebc4f92c93499b363706a94dcf1ace33fd1f6700cd80e1f379083814a809fa536b803e1167e4dcbcb5ac3c062630458d6c1dd4161b0a9b9411c5065707631188ea371149d87c328ba1811a85170a7b022f67e4bf331878eeb0dbed0966c181161ba9836cebbe79eea4a769bf870b14cc7a36ec07f012e043695cb7ac15c19eb5ed5fb03bea9f03fa9f92741ba2aa5fba0022a09a68f5275c6a534606d2f8936e3757dc2a6ab55f25e954a1a54b21fdcab1e40bbfd09b84e56938fa42583fdd5ea6a92cedf11d6916d4e48bab89d6fd3c9edda730f6f4698b60eecda20b9ca8237d4301c7dfb7a3e0e5f3d3643ef3bfa4eec4c0301139c7e951be5589c736de1f81bbec0cea388030000",
    ],
    [
      "ETag",
      "Jygwjp0NP0SamddoycCCFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:59 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `ltv` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1636337013394",
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
      "000002ff8553fd4fdb3010fd5722ef974d2a6dd2d04f094155b2ada8044853109aa6d6712fc16d1a07dbe9a850fff75d1ccac710438a94c4efbd7b77bebb47b2e2d982f449c493fb02e4f6cb5244a44640d3044fb743a15742dd9c3f2c3b778db3b3161d5e5e0d8e8e90c14b95a2eb3c8503250ac940f5a7937a2245915329c401063a70ed03a7edb65db7633baedb3b449d82341ef36c85ea3bad73d56f34f6def5448824059a73556762fd7cded8341bb9144b605a35de5a36d04535fe6f7a9c0a463517d9d1748209140ae40cd694a798c28b72119dbc0d5de7745d4f90bce10c2863a2c87499168660228b7952481395f41f8949f3d5079978636f185a73e333b7a8b266b37c55b3e6a9deccadefc1c5b93597c0845ca8b975f3d30b3ceb993cf2ada9ef7b93d0fa7afc0ddd16a034cf8c5748a3144a9fa7eb18bd6f4229a09a2aa8c059c76e53a76bf7a238eab0b8ebb6a2d88628ea469d1675239bf50ee1701101459d2ea31b15cd44469d88765da7ed4411c40eb3699346c0da4ecbed369bb6d3ecf468b34517407635f247720da75ce542f1ea4ec84d300abd59184cfde120f44c19312d527d5a255716f13a4f8d4522e93f75ed4a940b742a2f78e4875e301886a36bafeae91812cab6937bec6a4c5305c8a692ae41833c1798659f5c5e4c46e1e8c21f8c51611a75b96728d2fff5f82208b7b9b9656dde641004835bd45029e9f61f6c120623ff07d9ed5ef95dd3b4301c23307f95c1a602082c71aa0457f6093c9822cd5ced6a2f0c9c380dce8730f647df81fc1867022f34c6f172df727eeff0a9115c93aa0e7235f5825b521d051083848c7d3e614836c0a7dbbe5f3de4e2f2a18dd2f88ff3cc5469c2245473cdd765327bb5db6b761d62c852bfc3dc4e6fdfc032461911d690e9a78aaad5331d29a1423d9310c471f4ab7efd05ff505ec7fa040000",
    ],
    [
      "ETag",
      "yCotkosWMxj7h/JJ5aCPQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1636337013394"
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
      "6d91614fc2301086ff4bfd28c3b1020a098960404916c501f18321a474b739d876b3edd085f0dfbd0ea326f265edb5cf93de7b3bb05d9287accf3649fc5e82aa2e6230cf7613802e53a3692930d7c01a0c8c882d6982897fb9f55456755e86de55309b74c6f1604084966f9009d63fb0288134d4acff7a60b9c880b4f5bad81162aac256f345307dbca73ac3d0d68f4bdf1f8efc313b367e8cd4ec7f8589ff345c9ce357c706dbe226800814e412eceb85c22d4833b5c1b4c88a141c8da592a0590dd717b1c2b2100ad1a11387bb4eabcbbb9c5fbb2dce7b6d025394c2249813bb9c5363cca01169801f948b710254bda58851fdddd3316c41ed31d1ee2d7cd60f37256675287beb757acd9657f7fc5792200cb4ce1abd769377ff0942a2011da10af959ab7dd36bbad65a7d373daa889f29a40968b0e1ddd320eed0ba86866654090d2605fdc187c49ceae317213309081e020000",
    ],
    [
      "ETag",
      "btRFL+j2rmy5WA2/RPF5Eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:03:59 GMT",
      "Server",
      "ESF",
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
      "0002ffedd34b7282300000d0bb642d0ca66680eea00e54a105513eb261f80488c847924aa0d3bbd7e935eabbc3fb06699e634a13d637b803af604ea12ae6a23528ba51d50e9f6ccb590e93001b1b2f7245049a11ad8de5c92b537b919161c59d060ffc628f97b2e8a0dbfac9f825cf68718e7c03f3eafd2224b15fbaaaafd08e99c128d1bb6e28c68786e60c1f9b5dd4d37447ef1423cc4e6f9f995cb40dd9865567ac756d7d424833554a3adf35a456b90d81bc97c85eea63f36e0a30609b884f679b87d535924ac638db3ae7905d7beb907318b1b2296aefc6a6d8dd0e8b578b4f4fff175801cc0732629a90c7f617a4aa2bf0573f61f3801fff759c8e78043fbf1f454def19040000",
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
      "Mon, 08 Nov 2021 02:04:00 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-31-1636337013394",
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
      "14fd2bc8fbdabc803ca5684d53da450a6403d26a9a2664cc85b9019c62d3aeadf2df77314dd7aa52fb09dbf79c7bce7df04476bc4cc88cc43cbbada17af8722362724240d10c5f77b6a976c17d523c3e9e5ddeba83b3bf7451decfe788e00d4bd2629f43478aba622067dba09b55a2ded34a880e26ea5883ce60648d2c6bdc1f58d6d4469e843c5df37287ec3f4aede5acd73b6a773321b21ce89ecb2e13c5cb7befceeced2b71034cc9de5bc91eaac8dec7a25f73c1a8e2a29c6f0334504ba8222828cfd1c27f66129fbe4ddde5b4e86608bee30c2863a22e55630b533051a63cab2b9d95cc9e88b6f9ea400267ed2c438389bc2ecaa8a4059c18095534520f7b302efc8d6bacbc8b8def2ec2d5c68b82e537c75d74979bf5d6f502e3fa9be33b86a2710e9a6bcc8d537df3f082fa0948c54bad1e36cf8df2738356efc7d210505a421b8cc6fd111d4cfad3388dc72c9d58c338ed431c4fe2f1905a719f4d6db0931828f2b4a866d15294d30933c7f1c08ce21892c81ed2349a0ef16a43329e826d8e4c7b420e27e4bee20aceb9dc0bc9db0e916b7f153a51e86fbde52274740929ad7375de1a6b0a78ed51618108faa0a64313e502959a76afbcd0f117cb7075e5b4135e4346d943708b334e692e01d1b4c2e629a85c9160c388b7709d7304eb897d3f062599fd7a224dcf1b17af5afe420f71808d5da5bf2408fd9577a9ed1c115734af35e4ae3d900a98a812f47cf88d385cd13607f9b175fc9fa47df221850a4af6f92c11ac039ffe69c7b5472c2e3eca488577dc1c261b115641bb415c177b64dbfd8139251a5ca97731d3b28e3d6b723419a180523d57d4ae3d16da8ad5f20584411cbea77b75f80721f3917076040000",
    ],
    [
      "ETag",
      "k42tkSwdmzzBGqM1BxaAnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d936f6f9b3010c6bf8bf772440a224b5ba4be084bba65a2f943e8de4c1572ec83393336b34d2614e5bbf74cbb6c5a27d1377077fe9db87bfc70223f84e224267b51fd6cc174ef2a705b1f64605be92cbe1aad2c908080a315925bb5de2f0e9bddd79bee2e4baedf77c997f97c7b7b8b8465dfa1a6243e915280e496c4df4e44d11ab08d69d9d6aae8b380b8aef1c55d9e2d579f30af35f7f9ea214d6749ba20e7e0d2c8a9a345cfbfa1edf11c9083de67508201c5c0cfd2187d00e6967e4d4beb46c2c8ead630b0a487fb83cae8b6a146eb11564651380aa7d1348aaec66114dd4c10949a5127b442f66187f311a71d9599fe855b923042c2f4316e5cf6cf23d605ef37f1e172954f27fd807f039431dd2a570c82a530d63dabf71b7c51e15f52d237827855420e4115280e6688124d41393760ed20a96d419be68225eb75fa5a15c58d167c183c8a0140bae305b84bd7b3ff498b06fba3d57c962f5e11d6a16d2e48bebc5fecf2d9fdc6738f2f46483a07766334baca823754389e5c7fb89a8e9f3df6517bdfe17762675a0808a3f8ab7c168ec4259516ce4fc8ee415988030000",
    ],
    [
      "ETag",
      "QnObEjPSV9yFRB8+yBJDDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:00 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `ltv`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fdb3014fd2b91f765d3fa489a963e24041d64ac5a292c4d41689a5adbb92986340eb6d3ad42fdefbb7128af6920454ae273ce3df7e57b722bb2980c0813cbbb02d4e6c38d64a446c0d0259efad757acb7f64ec2a4f8fe3967dea9f8d2ef0cf7f791214a95a6ab3c85ba9685e2a007b36963a964915325651d03d5fd56dddbf3f77cbfeb7abedf6fa34e439a8c45768bea6b63723d683677de8da594cb14682e7483cbd5e37973dd6ae64ade0037baf9d2b2892ebaf9b6e9412a39354266fbb3292650685073585191620a4fca981dbe0cdd1074d55822792d3850ce659199322d0cc165968865a16c5432b82736cd671f641a8c83a3c859589f8543b5339fe7b73567919af5a27c516de6195dc1c2f91a9e9d3a0b055caa582f9ccb6f4118388fcad1c4994d26c134723e1e7c42eb18b41199358e284ba1347de8cde8df8994026aa8860a9c77dd3deaf5dc3e4b5897273dbfc3121718ebb16e87facce5fd36b463061475a68c6e55349319ebb8dd2e6bb55b9cb658bf4b99df8f5bae0b31f33a6d37e9c52dbfc798df26db1af9ad848163a173a945d52072198ea2601e85b3c9d1300a6c19092d52735c255716f13c4f834522e98dbab6252a243a95dd1e4da2201c1e45a38ba01af01896946fa67738e284a61a904d1576db803a9531368d9c9f4d47d1e86c321ca3c24eed7cc7d064f0f3fe49106d72db6563df641886c32bd450a5e8e615368dc2d1e4846cb7cffc2e685a588e15d8bfca605d01046e70c5a4d0ee21fcb145da25dbd69e18b87e06bcffc2381f730deaff3897d8d004d7cb7fc9f9b5c5a746f0ce5475901fb320bc22d551080928c8f8fb1b86640bbc7bf577f710b97813d1461bfcc77de6ba34e10aaabd16ab32999dbaedf6db5d62c9cabcc63ccfedef0658c62823c20a32f35051750fed444aa8d08f2404711d27d5bcfe0216d0013d07050000",
    ],
    [
      "ETag",
      "3hYb8v1GRfuK+pb1MiB95A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1636337013394"
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
      "6d",
      "4f",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "4b",
      "7d",
      "cb16a0c8c31212818062109487f8c21052ba630eb6dd6c3b9010bebbd7a1682289be59ef7ffddd5def9f1dd8264c7ce6b16518bc65a0f6570198271b8c416791d174a4986860050646044456db7e6f5d09ea9d5ecd8ffac3071c3e07a35db3498496af100be61dd82a84c8d7cc7b39b044c440658b45ba21c4ec53ab26d3717f784b3a46dfeae16c3068b5075d762c9c2b22b3fd2ee80d46ade91fbcd06691c7ff18333f16d81a976358818244827d74aa700dd2f4ad1f5ac469048ec64c49d02c87f38b4061960a85e850c6e165a754e555ce6bc512e78d0a81114a61424c889d4de87dcca011d118776407e304a83c246756f9774b695883da62a88b37f09e0f7625c6f96ef6b67cdd704be5b3bc3fb1f90e3f9b4810064a173b342a2eaf9e5597b85fd542a201bd42e5f38b2d2af5865b3cabce176cfbcc3f776cef29f9a8900cd360bd2a9e7ceba0ed46333da332283029e83fb90bcd491f3f00669599f284020000",
    ],
    [
      "ETag",
      "6BdFj4g8CF7dlINMoNWgOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:01 GMT",
      "Server",
      "ESF",
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
      "51",
      "6e",
      "82",
      "300000d0bbf45b4d4044d81f38dca4408111507e4881423b22eda0a8b8ecee33bbc67c7778df00571519c742f28ef4e005cc583557d50a0ac3deb74c5a0a7cf33d75a361e1d13a5b4b13a28667218b9d19fa52ebf4e84ef589ba47989f7ae4a0bab9ec823a3694838ef4dbfb997234a409a350cc0d8529d758c622373dc646dc04bb3cba7e25467c5287a0557c92b5f955b59ced584e817bd6f9be1f6a149507d5afc6f4e22c19ef2dae6a65b7ab04f562236f838f2eb412bf9c963d333b5f1695376e6b6ecbe6734a10ad894089f21ae6d2f442ec62bc7a7afabfc002909b6003190bf6d8bede98e602fcd52fe42cc8e3bf4df04006f0f30be2a7709119040000",
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
      "Mon, 08 Nov 2021 02:04:01 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-33-1636337013394",
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
      "14fd2b91f795b629097d49d5082540a536ddd21486a629729c9bcc90c4c5767808f5bfefc6a10c84049f62fb9e73cfb98f3c935b5ea56442129edfd5209fbedd88841c10d034c7573fbcf1bc737979b2780c1ebd5f6974bd2a4f1ea65344f086a568b92da0a3442d19a8c966ddcda5a8b7540ad1c1441dc7e9f407cec0718676df71c62ef21414d98257b7c8feabf5564d7abdbd763717222f806eb9ea3251bebef7ee0f7b5b296e8069d57b2fd94315d5fb5cf47b2118d55c54d3cd1a0dd40a640c25e5055af8cf4c93e3f7a9bb9c96dd1cc1f79c01654cd4956e6c610a26aa8ce7b53459c9e499189b6f0e64ed2ffc59643151d4651557b484032ba59ac6fa690bd659b85a5af3e06c152ebd68be0ae2f5ecc25f7addd96ab159066bebeac20f7d4bd3a400c3b5a6d6b1b9057841fd1494e695518f9ae746f9a541f38f63690828ada00dc6437b40fb237b9c64c9906523e728c96c489251323ca24e62b3b10b6e9a00459e11352c5a896a6853bb4f1d88fbeec88d5dc7eec7d4a5a3d8391cb3cc1df42171c76477401e24d770cad55628de76885c85f3c88fa37013ccbcc8372564b42ef4696bac29e0ad478d0522e8939a764d940b546ada3d0f223ff466d1fcd26f27bc809cb2a7f51dce38a38502445389cdd3209722c58691c05bfaa7083613fbb10f2a32f9fd4c9a9e372edeb4fc951ee1001bbbda7cc93a0ae7c1b9b1b3475cd2a23690fbf64024302153f4bcfb83385cd13607f9b9f1c36bd23e859081848a7d3d4b049bc0977fda7eed118b8b8f324ae31d3787a94684496837889b62f76cb73f183bc480a5fe101b8e86fb9e35399a8c5042a55f2a6ad71e0b6dc56af50ac2200e3f30bddafd0330f0e8a076040000",
    ],
    [
      "ETag",
      "ERjAAGrVBLxNxAXdTYOmBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1636337013394"
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
      "93516fda3010c7bf8bf71a2468286d23f5013ab6454aa185f03455916b5f3233c797da0e1b457cf79dd38e4deba4f425b93bff4eb9fbfb9f03fbae8c64097b54d5530b76ffa1027f1f8215b8567b47af068d031631f0bc22f2e9ea526d9ff3fb1b7f9efd4ccfcef69b71a5aaeb6b229cf8063567c981950ab4742cf97a6086d7406d02755b9ba2cb22e6f74d28aef355baf84c798d32e48b4d964d67d99c1da353a3e49e171dff8eb68763c4b6f8b882122c18016196c6e216844fc39a8ed78d8681c3d60a70ac83bb83ca62db708b38a0ca208e07a3493c89e38be1288eafc6046a14dc2b34c46ed6341ff3e8b95ee10fda928d62226c17d3c665f7dc515dc96e9310a68b7c32ee06fc1be042606b7cd10b96ca3affa2de6ff055857f49cddf09d25529dd07556024d83e4a350597d28273bd24ba8237cd099b2d97d95b558cb4a8643fb8533d80f6bb13f0295b4eff272d19ec8f561fa7f9fc0de13cd9e684e4e9ed7c9d4f6fef02f7f06a84d9de83bbb348ae72100c351a8e2fcf2f26c3178fdd60f01d7d27f1b68588094ebfca17e5595272ede0f80befc932d288030000",
    ],
    [
      "ETag",
      "q98ijzTQCt5LxI22yU4gig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:02 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `ios_app` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1636337013394",
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
      "8553fd4f9b4018fe57c8ed972da92d2dd0d626461b651baea2a354e396a53de0054f81c3bbc3ad31fddff772583f66a6090970cff3bccffb75f7e486950999908865b73588f5876b1e910e0145333c3d565191d9ebcbe3736bf66310a4df7a677631dddb43066b549216550e3b92d722063959ccbb99e0754505e73b1868c7b277fa436b685923b36f59bb36ea24e4e98c9537a8be52aa92935e6febddcd38cf72a01593dd98178fe7bdbb41af12fc1a62257b2f2d7be8227b6f9beee73ca68af1726f31c7046a096209056539a6f0a44ca28397a1bb8c16dd0cc9772c061ac7bc2e55931686887999b2ac163a2a99dc139de6b30f327767ee6168acb4cfcaa0d2582eab9b8eb1625c2e6955ad8ccfc1e989b112107391c89571f1d50d5ce351e0f9c6c2f7dd79687cdcff848e0948c54aed17d22887c6eba125deeb413402aaa884165c8ecc21ed8fcddd288d46713ab69c2835218ac6d1c8a15664c6bb36d849041475aa89ae55b4e4a5e5a423c744ce3819529b0e072635c17212ab8992824dfb91938ccd886c3ae4b7600a8e98acb8646d5fc845e085ee320c16fee13474751929ad7375d426d714f13c4f854522e98dba360dca383a354df6fcd00da687a177eeb6739d4146e3f5fc16279bd25c02b2a9a0052810273cc1a691b3d3b9177aa7fe74860a3dacb32d4392c9cffb2741b8ae7497957e9369104c2f514385a0eb7fb0791878fe17b2d93cf33ba779ad395aa0ff5a83bb1620708d9bc599340fe08f2e52efd6a6f3c4c0ad53d0ff2f8cf3515720fe8fc71c1b9ae27a592f39bf36f874085e95b60ef27de10697a43d0a20050165fcfe86215903efdef8edf5432e5e40b4910aff719f63d998c402dabd664593cc566d0f9ca1433459a857186ef476804d8c26221450aa878adaeba727d240b57c242188ebe8b7f3fa0bdbd8150dfe040000",
    ],
    [
      "ETag",
      "Jtbmg4yYJV3LZ2RfK/P4mA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1636337013394"
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
      "7d",
      "91",
      "6d",
      "6b",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "4b",
      "f6",
      "b61d4aa4a2204c37b7398a6e75823044627aedaa6d2f4b521f10bffb2e756c83c9de24f7f0fb73f74f8e6c939531ebb255967e54a00f5729d817174460aadc1aba14960698c7c08a94c83616c15de37eded96f769de184074fadd1bcdfeb1161e43b1482758f2cc9208f0debbe1d59290a20d972a93684d88372d9f4351a8d1f282f3076f9781686fd41386427ef5b91a1590aa57e4483c9241cf6c797548b93c7d6b88a20010da504b783d2b8066947ce9e1185cac13758690986d570dd4835564a68449f2a3e6ff9cd80079cb71b4dce3b2d027394c26658123b9bd27acca21579843b72c73801ba0ec968529f5b2ac31af41633d3b8817d3df85a62515b735dab2ba837fe2d91202c342ff289c8cd5f819068c124a863feef94c5d7c68303e1cf1ac9be01e7bc717e855b74524b2fe6141e93823ef131b3e7fcf40990dfb07a21020000",
    ],
    [
      "ETag",
      "7om6D0FX9xkw9EO36J4IXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:02 GMT",
      "Server",
      "ESF",
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
      "02ffedd34b7282300000d0bb642d0ea218d39d341110151df9954d06300888108280dae9ddebf41af5dde17d83284958dbd25b7d6115f8008f4841e3646cf185b63a1781e26f24ad24349913576f4328c59e7566565e4c902f94ae3ed8ab67cc428efbe33dc4d144b9d7cf43b537554a0c587eb2e30083d2735632f431773ccee4199ecdaf865624a1640f695973dd9a78f1a1f733b353737aba2e2c0ecb666889edeeb141889b98342348db376ea3ebb67f714bbacd51da0cdd3675b014a8e949dee2b553ed7647d15ca61b4884fe6554f13a707508b35e46bd6dc2aee9c472fcf6f67f811160779e0bd6d2fcb57daa2234027ff5e9edc1d9ebbfc622c104f8f9050761114b19040000",
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
      "Mon, 08 Nov 2021 02:04:03 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-35-1636337013394",
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
      "000002ff85535d4fdb3014fd2b91f74adb84a44da9548daa8451a94d599a82b6698a1ce726332471b11d1842fdefbb71280321c1536cdf73ee39f7234fe496d71999909417770dc8c72f3722254704342df0f54257e75bd7ff1971bfa17f6fbd3be7e6a19a4da788e02d4bd16a57424f8946325093eda65f48d1eca814a287897aeeb0e78cdc91ebfab6e3ba271ef21494f992d7b7c8fea3f54e4d06838376bf10a22881eeb8ea3351bdbc0fee8f073b296e806935782b39401535f858f46b2918d55cd4d3ed060d340a640215e5255af8cfccd2d3b7a9fb9c56fd02c1f79c01654c34b56e6d610a26ea9c178d3459c9e489189baf0e64132c83796c315136559dd4b482232ba39a26fa7107d679b45e598bf07c1dad66f1621d269bf945b09af5e7ebe576156eaceb8b200a2c4dd3120cd79a5aa7e616e205f533509ad7463d6e9f5be5e7062dde8fa525a0b4822e98f8f6883a63fb24cd539fe5637798e636a4e938f587d44d6d76e28197a5409167440d8bd6a2765c7becf8999330b0478947e138a19e0dc931a4633bf761e48c86647f441e24d770c6d54e28de75885c478b3848e2681bce6771604ac86953eab3ce585bc06b8f1a0b44d00735eddb2817a8d4b67b11c641349bc78baba09bf0120aca1e377738e39c960a104d25364f835c890c1b46c2d92a3843b099d8e521a8c8e4d713697bdeba78d5f2177a8c036ced6af3259b385a84df8c9d03e28a968d81dc770722810999a1e7fd6fc4e18a7639c8f76d10fd20dd53043948a8d9e7b344b0097cfaa71dd61eb1b8f828a334de7173986a4598846e83b829f6c0f65cd71d130396fa5dcc1b7a879eb539da8c5041ad9f2bead61e0bedc41af502c2200e3f34bddaff03c0059a4276040000",
    ],
    [
      "ETag",
      "HtmFU37ZRi7uaxk4q1jwmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1636337013394"
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
      "6f",
      "6f",
      "9b",
      "3010c6bf8bf7964820d27443ea0bd2a61b13cd1f42557555851cfb60ee0c66b6491445f9ee3dd3369bd649f40ddc9d7f27ee1e3f1cc82fd17012918da87e77a0f79f2ab02b1764603a690dbe5ad518201e014b2b24a7c1fd2af197df57e3dd3e4bef36ab1ffe75bcbbb840c2b09f5053121d4829407243a2870369680dd8c694eceaa6e8338fd87deb8aeb3c4be65f31af1577f9fc364de3693a2347efd4c8a9a545cf7fa0edf1e89127b5c9a0040d0d03374babd513309bb8350dad5b0923a33acdc0901eee0f2aadba966aa54658198567a360124ec2f0dc0fc2f0cb1841a918b54235c8deae713e6295a532533bdc92042112ba8f71e3b27f6eb12e78bf890b93793e19f703fe0d50c654d7d862102c8536f645bd37f055857f49493f08e25509390455d070d04394680bcab906630649650adab6276cba58a4ef5569b856820f835b310048bb3d01d7e922fe9fb468b03f5a5dc5f9ec1d612cdae684e4c9cd6c9dc7374bc73dbe1a61bab760965aa1ab0c384305fef8f3d9f9c47ff1d8a572bec3ef445677e01146f157f9262c894a2a0d1c9f015f14454b88030000",
    ],
    [
      "ETag",
      "B1YQI0PJQ4wyRLWbQZ0FAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:04 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `ios_app`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1636337013394",
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
      "3014fd2b91f765937824040820552d6ad30d89a65d08adba6902c7dc642e214e6da71baaf8efbb714a1fabda4a482439e7dc739ff764cdf315199198a7b725c8eda71b119306014d53fc7a22d6532f15c5997ffa63589e46e124e12a3d384006af548a6e8a0c9a4a9492811acd67ad548ab2a0528826066abafda6d377fbaeebd98eeb0ebba8539025539eaf51fd5beb428ddaedbd772b1522cd80165cb598d83c7e6fdf75da851437c0b46abfb46ca38b6abf6f7a9809463517f9c17c8609940ae40236946798c29372151fbd0cdde274d34a917cc71950c64499eb2a2d0cc1449ef0b494262a19dd1393e6b30732f3a7fe71642d8dcfd2a2ca5a2c8a75c35a72a116b42896f89851a51739ddc0d23a0dcfcfaca50426e44a2dadab6f7ee85b8fea4960cd83c09f45d6e7c32f68bf02a5796ecc231a6750193ff467f27a2a95806aaaa006179edda7cec01ec649ecb164e0f6e2c486381ec45e8fbab1cd865de8ae62a0a8d35574a3a2b9c8073486416fd807ea78ace3d9de6ae0acbc1e38b64351e238cec07521e9915d83fc915cc309578550bc6e12b90a2791bf88c279703c8e7c534642cb4c9fd4c955453ccf536391487aa7ae5d8572814e55c72741e487e3e36872e9d7439e424ad976768b634e68a600d95462b735c833b1c2a6918bf3d9249a9c07e3292acce42ef60c45463fef9f04d1b6305dd6e69f8cc3707c8d1a2a25ddfe87cdf04882af64b77be67749b3d2708cc0bcd506773540e006d74c70651fc15f53a459b45de389812ba8c17913c6f9e8df20dfc699c08626b85eee4bceaf1dfe1a04efa6ae837c9ffbe135a93f859080849c7dbc614836c087e7bfbf45e4e235a28dd2f88efbcc5465c224d47bcd3755327b75b7dbb13bc490a57e8561e8fd00ab185544d840ae1f2aaa6fd14ca4824af5484210d731a8e7f50f701b67100b05",
      "0000",
    ],
    [
      "ETag",
      "DokL7gopMEFZ9uFTRIfisg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1636337013394"
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
      "52",
      "ef",
      "4f",
      "c2",
      "30",
      "10",
      "fd",
      "5f",
      "ead7cd4046209090080b3f4340a7f8c590a574b739d876b5ed5042f8dfbd0e05138dfaa5bdbbbef7eeeea507b64d8b8875d83a4d5e4a50fbab04cc9d0d02d06566345d120b0dcc61607842c8c52217c365bb2d1f5bc36c3c9afaed61c3ef75bb84d0e21972ce3a0716a790459a759e0eace039102d0ce59620662f6d76ff104ce623ca738c6c3e5fce66bdfe6cc08ece9991a20eb99417527fb1980d7af3df5919d726ace27f345b1d1db6c1750031282804d8d1a5c20d0833b1ae689ecb0c5c8da512a05905ae1e1285a5e40ad1a58aeb35dd7ad36b7a5eab56f7bc768380190a6e522c08bbbca7f99841c3b3005fc914e611405521f91357e78ecab001b5c354d76ee0ad6a7c2d30af76b3af4695704ea62764b5c1570901dc40fd477ecc337d111810ee1b9b0b34a0635491f7f708fe27d6caac3e16ecefa978ab90dcd2608daa9d4cf3d18a51cb8ed57098e0f455c6a939e5c7775a7199d687020000",
    ],
    [
      "ETag",
      "OOmcFU99pV7FlHGJC9F4CA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:04 GMT",
      "Server",
      "ESF",
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
      "000002ffedd34b7282300000d0bb64ad8e8230a43b632194800e8245bac9409ada80c82f20e0f4ee757a8dfaeef0ee20618cb72d9565ceafe0058c8902176c412a03596741af0eddb6ae56bb5926f8ad58adf2801dac2d4ad5f7e4b3e0d47172eba2486cd7f63ad06d3b989b08a63ac6a6308a26c2ebe3c7d5c5182ad13c24648c5a8e89e71745a5b1099dc3e9e45e32bae3652f65ad9b7dc7b69befa3e89746e7af3c72e8183dbe195ea02f234d6cd4695f422d939bd71239bee5573d1c9954c3af214c776a89b2711e0fa668f5588bcfa6d7749dc54eb5b2c73921539e3ab7215e3c3dfd5f6006f8508986b7543cb6ab1a8433f0579fcab1e28fff88270d6fc0cf2fae591c6519040000",
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
      "Mon, 08 Nov 2021 02:04:04 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-37-1636337013394",
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
      "ff85535d4fdb3014fd2b91f74adb84b44d5ba91a550950a94d214941db3445b6e36486242eb6032ba8ff7d370e652024788aed7bce3de77ee419ddf12a451344787e5f33b9fb762b083a424ce31c5e1dc7257f8bf28a3c1d3b3f89b8ae9e76e7178fd3292078c352b8dc16aca3442d2953934dd4cda5a8b7580ad181441dd7eb384377e8ba9eedb8eeb80f3cc58a6cc9ab3b60ffd17aab26bdde41bb9b0b91170c6fb9ea5251bebef71e8e7b5b296e19d5aaf75eb2072aaaf7b9e8f74250acb9a8a69b080cd48ac98495981760e13f332527ef5377392ebb39801f386598525157bab10529a8a8329ed7d264459367646cbe39a0c85ffaf3d8a2a2a8cb2aa970c98eac146b9ce8dd965967e17a652d82b375b89ac58b759044f30b7f35ebced7cbcd2a88ac9b0b3ff42d8d49c10cd79a5a27e616c005f453a634af8c7adc3c37ca2f0d5a7c1c4b430069c5da60e2d943ec8cec31c98847b3913b2099cd0819116f805d62d3719ff553c230f08ca861e14a54de301d38d819267d6a8f937e3a1e2723e26609f6068ee38dc67d2fc3687f841e25d7ec94abad50bced10ba0917b19fc4e12698cf62df9490e1bad0a7adb1a680b71e351408a04f6ada37512e40a969f72288fd70368f17d77e3be125cb31dd45f730e30c178a011a4b689e6672255268180a662bff14c066629787a042935fcfa8e979e3e24dcb5fe9310cb0b1abcd174571b808ce8d9d03e21a17b5813cb4072419153205cffbdf8083156d73a0ab8d1ffe40ed53c832265945bf9e25804de0cb3fedb0f68085c50719a5e10e9b43552342256b37889b620fecfec03ef690014bfd21e6b8a343cf9a1c4d4656b24abf54d4ae3d14da8ad5ea150441187e607ab5ff074fde950e76040000",
    ],
    [
      "ETag",
      "113bxlmQbz21ZboVnzyGHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1636337013394"
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
      "0000000002ff8d93516fda3010c7bf8bf71a245028ac91fa001bdd9002b4217dd95445ae7dc9dc393ed776400cf1dd7b493b36ad93d297e4eefc3be5eeef7f8eeca7329225ec41554f0db8c3870ac26d1b64e01b1d3cbd2c1a0f2c62107845e46d654373b12f77d7e97cb5ff95b96f97f9d3feea8a082f7e40cd597264a5022d3d4bbe1f99e135509b40ddd4a6e8b28885836d8bdb3c5baebf505ea36cf3f55d9acee6e9829da273a3e481171dff8eb6fb53c41ef12183121c1801ed2cd6e12388b06cd7f4bcb61a061e1b27c0b30eee0e2a878de50e714095413c1d8c26f1248ea7c3511c5f8e09d42878506888bddbd27c2c60e03ac33d6dc9463111ae8b69e3b27beea8ae64b7491b2ed7f964dc0df837c085c0c684a2172c95f3e145bddfe0ab0aff929abf13a4ab52ba0faac048707d94b20597d281f7bd24fa825b7bc6e69b4dfa5615231d2ad90fee540fa0c3ee0c5ca79bd9ffa42583fdd1eaf32c5fbc217c20db9c917cb95a6cf3d9eaa6e5ee5f8d303f04f0370ec9551e5a438d86e38f17d3c9f0c5639fb0f51d7d2709ae8188094ebfca5715585272ede1f40c7916e6e488030000",
    ],
    [
      "ETag",
      "Qgptu5wfvFLBMwzRrZ9Tqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:05 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `date` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1636337013394",
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
      "fd",
      "2b91f765937884865790aa16b5d9968d424942bb6e9ac03137d434c4d476d850c57fdf8d53fa9ada4a9192f89c73cf7df98edcf06c4e7a24e68bdb1ce4f6c352c4a44240d3059e76227732fa165f8fe5cf1fcb4be7bbb4c79b707c78880c5ea8145dad53a82a914b06aa37096b0b29f2359542543150d5e9561b6da7ed381dbbe1386e13750ad264c0b31b545f6bbd56bd7a7def5d5b08b14881aeb9aa31b17a38af6f0eea6b2996c0b4aa3fb7aca38baabf6d7a940a463517d9e124c4047205720a2bca534ce151398f8f9f87ae71baaa2d90bce10c286322cf7491168660224bf82297262ae9dd1193e6930f127a03ef24b266c6676651654da7eb9b8a359b530d33eb73303ab3661298907335b32ebf7a81673db0fda135190ebd30b23e1e7d42bb3928cd336316d13885c2e8be1ffeff5328045453052538edd86ddae8da6e9cc41d96749d569cd810c7ddb8d3a24e6c33b709cd790c1475ba886e543413d9dce9b618739dae1d3b8df8c0b55beda47bd08096ed361b8eebb6da316db45b94ec2ae48fe41a4eb95a0bc5cba690cbc08fbc69144c8627fdc8336524344ff569995c51c4d33c351689a437eada152817e85474d81f465ed03f89fc0baf1cea0016946dc35b1c6b425305c8a692ae40833c13736c1a391f857ee48f86fd012acca4cef70c457abfee1e05d1766dbaaccd9bf483a07f851a2a25ddbec0c228f0875fc86ef7c4ef82a6b9e11881f92b0d36254060896b25b8b28fe1af29d22cd6aef2c8c095d3d07815c6f9e86b90afe34c6043135c2fe739e7f70e9f0ac17b52d641c6132fb822e551000948c8d8fb1b866403bc7bddf7770fb978fbd04669fcc77d66aa306112cabde6ab2299bdbad9c2b523862cf54bac6db73bfb011631",
      "8a88b0824cdf5754de3d339102cad50309415cc76139af7fef72951afb040000",
    ],
    [
      "ETag",
      "7T9UOJbhQrZXjW3Kr0QvSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1636337013394"
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
      "7d",
      "916f4fc23010c6bf4b7dbbe9fe10d0252482122412820334c41052badb1c6cbbd9762812bebbd761d444c39bb6777d7ebd7bae7bb6498b88056c9526af15c8dd5902fac11c425055a6156d25160a98c540f38494cd79df998f2f5a5a7f40b21d3d6d1eb7f783a4dd2685122f907316ec599c421629163cef59c173206cb92c3724d1bbd24493693818f529ce3132f168361c76bac31e3b58df44c435fc10b79d69ef3ffde260b135ae4288414221c0542f25ae41e88131a6785e66602baca400c56a717d9148ac4a2e116dcad8fea5ed36fda6efb71cd7f7af1a24cc50709d6241dad9841a631a35cf427c235fcc2781ac8f6431aed72da5610d728ba972aee1bd2e7c2e30af4d995bcff11cdbf16cc7adfbfe0d0a20b7ee69cafb4371811a548c32f24fa30d832ebe2c7477048d25d23c14985138c7b1dca07980861e685981c504a7ffbc4bf5313e7c0290c276db2c020000",
    ],
    [
      "ETag",
      "6YG0YP/7ttzegvNWkVvKIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:06 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd3516e82300000d0bbf4db100632cbfe9482088a48041c3f0d94aeb24ea805145876f7995d63be3bbc6f901342db16770da735780363ae990a517c01570e63f555cd5ed57ef129c6e02314dac41ddc37cbb0b26ad85a627b67fed2a728410589dd00699bed602fc3b0e053a4052777684a9ebed7ccd513537fd9d4a4cad328761c9debe5022583d7d48e8111daa907d558c7a99b5c25b4ecddb92af8e5225969c3501f5434ddd6dda983199c3392127a3b40c7f6766e4471981136c5f372cce4f6c2faf46c59c651b8dcdb179b36e19a114df1f5bec6f26bdf1f8736539e9efe2f3003741095a42dae1edb75c33467e0af3eee46411fff57349754829f5f6d679e7c19040000",
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
      "Mon, 08 Nov 2021 02:04:06 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-39-1636337013394",
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
      "da",
      "3014fd2b91f75a4820811024b4329a764810b6105a6dd314d98e93ba8498da0e5555f1df77e394ae55a5f629b6ef39f79cfb9127b4e55586c688f0e2be66f2f1cb9d20e80c318d0b78ddda873212a3df57deed8a7edbf6478b45ec3d4c2680e00d4be1ddbe641d256a49991a6fd6dd428a7a8fa5101d48d471834e6fe80e5dd7777aae1b78c053accc17bcda02fb56ebbd1adbf649bb5b0851940cefb9ea52b17b79b70f7d7b2fc51da35ad96f256d5051f6c7a25f4b41b1e6a29a6cd660a0564ca66c87790916fe333372fe367597e35db700f0815386291575a51b5b90828a2ae7452d4d56347e42c6e6ab035a878b7096585494f5ae4a2bbc63675686354ef5e39e5997f16a69cda3cb55bc9c26f35594ae67dfc3e5b43b5b2d36cb686ddd7c0fe3d0d29894cc70ad89756e6e115c403f634af3caa827cd73a3fcdca0f9fbb134049056ac0da6be33c4bd9113909cf8341fb903923b8c9011f107d8250e0d3ce6658461e01951c3c295a80623b797f5032ff5bc9ca45edfc95212e4413a70bc2cf00973f2918f8e67e84172cd2eb8da0bc5db0ea19b789e8469126fa2d934094d0939ae4b7dd11a6b0a78ed51438100faa0a66313e502949a76cfa3248ca7b3647e1db6135eb002d3c7f53dcc38c7a56280c6129aa7995c8a0c1a86a2e932bc00b099d88f5350a1f19f27d4f4bc71f1aae52ff40406d8d8d5e68bd6493c8fae8c9d13e21a97b5811cda03928c0a9981e7e35fc0c18ab639d0cf4d18ff42ed53cc722659453f9f25804de0d33fedb4f68085c50719a5e10e9b43552342256b37889b624f6c6f381c38c880a57e17f387fea9674d8e2623dbb14a3f57d4ae3d14da8ad5ea050441187e647a75fc07cbbbbba376040000",
    ],
    [
      "ETag",
      "k/vlNo8ZG4hOcBk28LLR4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1636337013394"
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
      "ff8d93516fda3010c7bf8bf71a345018ac91fa002bebd002b4217daaaac88d2f993bc7176c074411dfbde7b463555b297d49eecebf53eefefee7c0fe4a2d58c4ee65b969c0ecbf94e0ae7d90806d94b3f4aa515b600103c74b2243d76c76d75fc797bf57c96e211fa78b8b0ddf9d9f1361f33f5071161d58214109cba2db03d3bc026acb513595ceda2c606e5ffbe23a4de6cb4bca2b143e5fdec4f1641acfd83138350aee78d6f29f68bb3b06ec01ef1328c080cec1cf521b7c80dccdfd9a9657b5829ec5c6e460590bb707a5c1a6e606b147955e78d61b8cc251188efb83303c1b12a830e74ea226f6664df331878eab0477b4251b84449836a68d8bf6b9a5ba14ed263e9c2fd3d1b01df035c0f31c1bedb24eb090c6ba67f5fe812f2abc2515ff24485725551754821660ba2859675c0803d6769268335ed7276cba5ac5ef55d1c2a014dde0567600ca6d4fc0cf7835f9485a32d87fad2e26e9ec1d611dd9e684a4f3c56c9d4e16579ebb7b31c274efc05e19245759f0861af487dfbf8d47fd678ffd40ef3bfa4ee44c0301cb39fd2abfa46351c19585e31376712b5d88030000",
    ],
    [
      "ETag",
      "3tuqwQ/7GKORwMizBMDqaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:07 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `date`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1636337013394",
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
      "0000000002ff85536b4fdb3014fd2b91f765934a933669d356425041c62295c2d21486a6a9759c9b6248e3603b3084fadf77e3501e4380142989cf39f7dc971fc8352f523222095fdd5420efbf5c8984b40868bac2d3bc93523b0bcb2b7b92fde8dabf6eabb17374b7bb8b0c5eab145d9739ec285149066a349fb5575254259542ec60a01dcfd9e9f4ddbeebfa4ec775871eea14e4d98417d7a8bed4ba5423dbde7ab75742ac72a025576d26d64fe7f66dd72ea5b802a695fddad24617657f6cba970b463517c5ee7c8609540ae402d694e798c2b3324df65f876e73ba6eaf907ccb1950c64455e83a2d0cc14491f155254d54327a2026cd171f64164c8283d85a1a9fa54595b55894d72d6b99520d4b7ce754e94541d7b0b4be4727c7d652021332554bebfc471005d693349c5af3e93498c5d6d7bd6fe89d82d2bc30ce314d72a85d1f9b13be1d492da09a2a68c085eff46967e00c932cf15936707b49e640920c12bf47ddc461430fbc34018a3a5d47372a5a880206832ef350e783e30efb6ed7cb9cd4a77e9af598df816c90783d0f124a362d7227b98643ae4aa178d321721e8571b088a3f9f4601c07a68c8c56b93e6c92ab8b7899a7c62291f4415d9b1ae5029dea7687d33888c60771781634139ec08ab2fbd90dce38a3b902645389ddd6208f458a4d23a727b3300e4fa6e3092accd84eb70c4546bf1f9e05f17d69baaccd9b8ca3687c811a2a25bdff0f9bc551383d229bcd0bbf339a57866304e6af31b86d000257b863822b671ffe9a22cd966d5acf0cdc3f0d9d77619c8fbe04f93ece043634c3f5725f73fe6cf06911bc344d1de4e73c882e4873144106120af6f98621d9009fdefded45442e5e45b4511aff719f99aa4d988466aff9ba4e66abf67c773820862cf51bace774b703ac63d411610d857eaca8b98866223554a9271282b88ed3665eff00d1a939a708050000",
    ],
    [
      "ETag",
      "l1da/fIpj/LfH2/XvuA0Gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1636337013394"
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
      "52",
      "ef",
      "4f",
      "c2",
      "30",
      "10fd5fea4799e918c1484222200a86101d2c311a424a779b836d37db8e1f21fcef5e87a2f103f14b7bf7faeedddd4bf76c95e4216bb145127f94a076173198671bf8a0cbd468ba0acc35b01a032362626697851f949bedcb6bc0578351e77e9a04fcb9dd268696ef9009d6dab3288134d4acf5b667b9c880cae6f3624514b32b6c3699fac3f103e51986361f07a351a73beab343ed54110a033f15779d69ff3c3f15daccabf81f6d66871a5be2c2870814e412ecd085c2254833b47e68911529381a4b2541b38a5c3dc40acb4228448710a7c11db7e9353def9abb9e77d320628a52980473e206139a8f193422f5714376308f08aa0ac999a83ad704c312d41a13cd6f615b35be929855bbd9d73aaf7387d71dee9ea0c723bfdae3b7900432cd3daf523f417debf05f0921d1808e5085de799dc609ea7d5758b1d9d7c6dd1d814f0ac93e0dd6397e74b18756921ab78c2aa1c6a4a05f3348cc313f7c02efddbd4e92020000",
    ],
    [
      "ETag",
      "m+pRUuwxXZU0kHLAFTiU0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:07 GMT",
      "Server",
      "ESF",
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
      "497282401400d0bbf45aa820604b7632296a8102326d286c7e620bd208580c56ee1e2bd788ef0eef893242a06dd38e1550a14f3466738527fcae5eaae637dd4a9b133ca6091fca24cbfb38ebe82174e48b815bb353f14d285aeb0ec0d59d6faa51244b6a9087341713998d20505834b75b50a5deeab8f318a94e81a17bfbf3562f4341e34846aee6a8a58620715165bbba2bce3779e1f7b536048bd0a6b2a31c97775c91d255a843a695f4959e879111b5672cc65ac1f0204682940fd3d5b8faeeb02e9b3ae6fa667fd43c31d1f3083f040b3a975af071096db27ef06f6fff179a21186ada409bd2d77651569419faab9f76630dafff2a640d34e8e717655b279919040000",
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
      "Mon, 08 Nov 2021 02:04:08 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-41-1636337013394",
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
      "85536b4fdb3014fd2b91f771f445d236ad548daa8451a949479a82b6698a6cf72618d2b8d84e2784fadf77e3500642824fb17dcfb9e7dc479ec8bd2837644c98c81f2a508f5fee242327040ccdf115bcbdbaf6ddcbafc3857b13dedede25bf16d1d564820851b334ddee0a686959290e7abc5eb57325ab1d5552b63051cbebb57a0377e0bac36ecf75471ef23414d94294f7c8be3566a7c79dce51bb9d4b9917407742b7b9dcbebc77f6a79d9d9277c08deebc95eca08aee7c2cfaad909c1a21cbc97a85062a0d2a852d15055af8cfdcb0b3b7a9db826edb3982f78203e55c56a5a96d610a2ecb4ce495b259c9f889589baf0e64152c8259e2705954db322de9164e9c0d3534358f3b702ee265e8cca38b651c4e93f9324a57b3cb209cb667cbc53a8c56cecd6510078ea1ac00cb7526ce99bd457841fd0d68234aab9ed4cfb5f27383e6efc75213505a43134c87dd01edf9dd11cbd89067bedb67591718f3d9b04f5dd6e5230fbc0d038a3c2b6a59b494a54b5de4c169ea0f7d9e7a7de6a52370f1d44502cf983f628c1c4ec85f250c9c0bbd935a341d2237f13c09d2245e47b36912d812325a15e6bc315617f0daa3c10211f4414d873a2a242ad5ed9e4749104f67c9fc3a6826bc809cf2c7d503ce38a38506445385cd33a042b9c18691681a06e708b613fb710c6a32fefd44ea9ed72e5eb5fc859ee0006bbbc67ec92a89e7d1776be788b8a6456521fbe6401470a936e8f9f00771b8a24d0e72b50ee29fa4798a21030525ff7c9608b6814fffb4e3da2316171f65b4c13b6e0ed7b50857d06c90b0c51ed99edf1b0d88052bf32ee676fbc79ed539ea8cb085d23c57d4ac3d16da8855fa0584411c7e647b75f807253bdbdb76040000",
    ],
    [
      "ETag",
      "e4vrV83H+7L3WMhhjTZLNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1636337013394"
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
      "000002ff8d93516f9b3010c7bf8bf74aa420d26443ea43b2a65d344a1a42d787a942ae7d3077c6c76c93298af2dd7bd02e9dd649f405eecebf13777fff39b09fca4816b30755fd6ac1ee3f54e0375d90816bb577f46ad038600103cf2b22515d59fd4d2f4c94a517675f93cb597ab7d99c9f13e1c40fa8398b0fac54a0a563f1f70333bc066a13a8dbda147d1630bf6fbae236cf56e915e535ca2e4f6f9364be4896ec189c1a25f7bce8f977b4dd1f03f6880f199460c108e866692c3e82f0ab6e4dc7eb46c3c8616b0538d6c3fd4165b16db8451c5165340947e1349a46d16c1c46d1a709811a05f70a0db1b75b9a8f79f45c67f89bb664614484ed63dab8ec9f3baa2bd96fd285ab349f4efa01ff06b810d81a5f0c82a5b2ce3fabf7077c51e15f52f3778274554a0f411518097688524dc1a5b4e0dc2089aee04d73c216eb75f25615232d2a390ceed400a0fdee045c26ebf9ffa42583bd6a7531cf976f08e7c93627245f5d2fb7f9fcfaa6e3ee5f8cb0d87b703716c9550e3a4385e3c9c7b3d974fcecb1cfd8f98ebe137bdb42c004a75fe58bf22c2eb976707c02b4165a2788030000",
    ],
    [
      "ETag",
      "oiGrlVlBn3RND5KLF7NWQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:08 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `stamp` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1636337013394",
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
      "fd2b91f76593fa489af4914a082ac8a05a292c4d41689a5ac7b92986242eb60363a8ff7d370ee5350152a5b63ee7dc739f0fe49a1709199298af6e4a90f75fae444c1a04345de1ebc89e1ffd4db47f9aa9fc3ceff66f7e740e4fee767690c12b95a2f93a83a612a564a086f3596b2545b9a6528826066a7a9da6d3737baedbb71dd7f53dd429c8d2092fae517da9f55a0ddbedad776b25c42a03bae6aac544fef4debeedb4d7525c01d3aafddab28d2eaafdb1e96e2618d55c143bf31926502a900bc829cf3085676512efbd0edde2346fad907ccb1950c64459e82a2d0cc14491f255294d54327c2026cd173fc82c9804fb91b5343e4b8b2a6bb1585f37aca5d268b2b4be8727c7d652021332514bebfc280803eb893e9e5af3e9349845d6d7dd6fe89780d2bc306e118d33a89c1e1b32fe7f0c95806aaaa006177dbb479d81edc769dc67e9c0edc6a90d713c88fb5deac636f33df0921828ea7415dda868218a4117ba8ed367e031dbf7a8e333db4912dbf5ba9dbed763a9ed3a3dea3903b269903bc9351c70b5168ad75d21e7e1380a1651389fee8fa2c09491d232d307757255112ff3d45824923ea86b53a15ca053d5e2f1340ac2d17e343e0beaa94e6045d9fdec06e79ad24c01b2a9a4396890c722c1a691d393d9381a9f4c47135498519d6e198a0c7f3d3c0ba2fbb5e9b236df641486a30bd45029e9fd1b6c1685e3e921d96c5ef89dd1ac341c2330ff6a83db1a2070857b25b8b2f7e08f29d26cd6a6f1ccc09dd3e0bc0be37cf425c8f77126b0a129ae97fb9af37b839f06c143a9eb203fe7417841eaa710529050b0cf370cc906f8f4deb7c7875c3c3fb4c10bd01cf799a9ca8449a8f79ae755325bb537f03d9f18b2d46f31dfeef5b603ac625411",
      "2187423f56541f9f99480595ea898420aee3b49ed73f70db4da5fc040000",
    ],
    [
      "ETag",
      "A0UHzdt9PlsmWm57qK2GOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff7591516f823010c7bf4bf7aa0606289a984c37e24cd0296af6b01853cbc150e0585bdc8cf1bbefc065db83beb4bdebff77bdfff5c4f6491eb21edb26f14709f27817839e57870054996a455b81b902d660a0794c4a2f4b06633ef746b89dfab3ac83e1d3eb4bdcef93428977c838eb9d5894401a2ad67b3bb19c6740d86653ec49a28f45152d96c1783aa238c3b08aa72bdf1f0c7d8f9d1bbf84d23c2bfe90e578e22d9683c9ec1ab53e37d80eb7014420211750f55048dc81d0e3ca9ea25229341596528062b5b8be8825960597884dca34edfba6d9b6da96d5314ccbeada244c51709d604edad582da631a354f03fc2477cc2281ac8f6434aad703a56107f28089321ee0ab7eb82530abad55b766cb710dc7e99a5ddbebd6adff6705700de66db06d136a3b57482e50838a5086d66ddc355df2e5b43beea5c2fac7d0f048ec4c224d47413518e332a447acea681aa896253498e0f4c7cf89bec4e76f79a4932b40020000",
    ],
    [
      "ETag",
      "EmiAIaQEGobNLPm7odDWOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:09 GMT",
      "Server",
      "ESF",
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
      "000002ffedd35b7282301400d0bde45b9c89a242ffca2388a8408502fe300a178862c98487c44ef75ea7dba8670fe71b9db20cda36ed9a2b7ca137244e33759a4d1da668a4bcacee4b8759975850e8ef81be4fa02e719d051ff2681e7c1eeee5a0bef6f542dfca253c5ccf6fc28410caa4b9c0e5ed5a149a2d424d8971b563ad80b9997b8494d47e0f8da3ed9ab781f89b0eafcf6ec50c3ef2c132b7b341b14269cc78ab2467e1c7dcb5234fae25cd7063b6634e7327ba61240baf8f7c678bbda8a251aeac1e6a250714fcce953e3752971fc129eda5313421c61b8bd9295df3435f4c5f5efe2f34413032caa14de973fb7ca1aa13f4573fed0483e77f0d4e1c38faf90571ae0db019040000",
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
      "Mon, 08 Nov 2021 02:04:09 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-43-1636337013394",
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
      "ff85536b6f9b3014fd2bc8fbb82624850412295aa384ae9112b211d2eea109d9c630b780a96d5a5555fefb2ea6e95a556a3f61fb9e73cfb90f1ed10daf52344584e7b70d930f9fae05412788699cc36b7dab539f5c7c5e5ec5dee58fdcfe75ea946e3e9b0182b72c85cbba603d251a49999aee77fd5c8aa6c652881e24eab94e6f3876c68ee30d868e337181a75891ad797503ecbf5ad76a6adb47ed7e2e445e305c73d5a7a27c7eb7ef4eed5a8a6b46b5b25f4bdaa0a2ecf745bf148262cd4535dbefc040a3984c5889790116fe335372f63a759fe3b29f03f88e538629154da55b5b90828a2ae379234d56347d44c6e68b03da05eb60115b54144d5925152ed98995628d13fd5033eb3cda6eac5578be8d36f378b50d93dde222d8ccfb8bed7abf0977d6d545100596c6a460866bcdac33730be102fa29539a57463d6e9f5be5a706adde8ea52580b4625d30f106633cf4071392118f66be3322d98011e2136f841d32a01397b92961187846d4b070252a4c5d3fc523960c52cf4ddcccf39209998c93e1188fb201f15d6f42d1e104dd4baed992ab5a28de75085d45ab3848e2681f2ee671604ac87053e86567ac2de0a5470d0502e89d9a0e6d940b506adbbd0ae3209a2fe2d565d04d78cd724c1f76b730e30c178a011a4b689e6672235268180ae79b60096033b16fc7a042d3df8fa8ed79ebe245cb9fe9310cb0b5abcd17ede268157e35768e884b5c340672d71d906454c8143c1ffe000e56b4cb81beef83e827ea9e229631c92afaf12c016c021ffe69c7b5072c2c3ec8280d77d81caa5a112a59b741dc147b64bb13cff591014bfd26e6fbceb1676d8e36232b59a59f2aead61e0aedc41af50c82200c3f34bd3afc032f26033776040000",
    ],
    [
      "ETag",
      "pqtd8bH+DWT7VXg/Z23m4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1636337013394"
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
      "4f",
      "db",
      "30",
      "10",
      "86ff8bf735d55aa50b5b243ea4ac1b95425bda200d4d2832f625189c5cb09da252f5bfef1ca0a08114be2477e7e794bbd76f76ec4ed592c5ec5a95f72d98ed9712dcb90f56605bed2cbd1aac2db08081e325911b194d4e8be5e5ddc39fe9e37d917cbd793c87e4f898082b6ea0e22cdeb142819696c57f77ace615509b40dd5675de650173dbc617d7d96a36ff4d7985d2e7f38b344d26e994ed8343a3e48ee71dff89b6ab7dc06ef17a050518a805f8591a83b720dcccaf6979d56818586c8d00cb3ab83b280db60d378803aa0cc6e160148551181e0d4761f8634ca046c19dc29ad88b35cdc71c3aae57f8405bb2514884e962dab8e89e1baa2bd96de2c3d93c8bc6dd806f012e04b6b5cb7bc14219eb9ed47b019f55f89fd4fc93205d95d27d5009b504d347a926e7521ab0b697449bf3a6396093c5227daf4a2d0d2ad90f6e540fa0dde600fc4a17c947d292c15eb5fa9964d3778475649b0392cdcea6eb2c395b7aeeead90893ad03bb3448aeb2e00d351a8ebf7f3b8a864f1e3b41ef3bfa4eec4c0b01139c7e9553e5585c706d61ff0ffc0463f888030000",
    ],
    [
      "ETag",
      "vd6BHfPYkwXEzqfA/hzQeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:10 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `stamp`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1636337013394",
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
      "4fdb3014fd2b91f765d3fa489b267d48083ac846a452589a82d034b58e7b130c691c6c87ad43fdefbb71288fa18154a949ce39f7dce73db9e1f98a8c48ccd3db12e4e6c3b588498380a6297e9d256e7a75197cf97ca5c2ec76d539fe73dc9b8ff7f690c12b95a2eb2283a612a564a046f3592b95a22ca814a289819abd5eb3e3399ee3f4ed8ee30c7ba8539025139edfa0fa4aeb428ddaed9d772b1522cd80165cb598583f7e6fdf75db8514d7c0b46abfb46ca38b6abf6dba9f09463517f9de7c8609940ae402d6946798c29372151fbc0cdde274dd4a917cc71950c64499eb2a2d0cc1449ef0b494262a19dd1393e6b30732f327fe61642d8dcfd2a2ca5a2c8a9b86b5541a4d96f89051a517395dc3d2fa1a9e9e584b094cc8955a5a17c77ee85b8fda606acda7537f16591ff73fa1f90a94e6b9b18e689c4165fbd09de0f54c2a01d554410d2efab6473b037b1827719f2503c78d131be27810f75deac4361bf6a0b78a81a24e57d18d8ae6221f78b1d377dda4df1db83d5801c6f0e2046caf436da7db675e97259ed3b5c9b6417e49aee188ab42285eb7885c8441e42fa2703e3d1c47be2923a165a68feae4aa229ee7a9b14824bd51d7b642b940a7aadfc134f2c3f161149cfbf588279052b699dde290139a29403695d86d0df244acb069e4ec741644c1e9743c418599dbd98ea1c8e8c7fd9320da14a6cbdafc9371188e2f5143a5a49b7fb0591406d36f64bb7de6774eb3d2708cc0bcd506773540e01a974c70651fc06f53a459b36de389810ba8a1f35f18e7a3af40fe1f67021b9ae07a392f393fb7f86b10bc9aba0ef27dee8797a4fe1442021272f6fe8621d900ef1effee12918bb78836780e9ae33e3355993009f55ef37595cc4eeddaae3b24862cf52bcceb0f7703ac625411610db97ea8a8be4433910a2ad52309415cc7693dafbfbea6517009050000",
    ],
    [
      "ETag",
      "Sf5ghYIB+hsRlqd1HzH4UA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1636337013394"
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
      "000002ff8d52ef4fc23010fd5fea57305bbae120215191280650067c3284d4ee86836d37da0e45c2ffee75f883c460fcd2de5ddf7b77f7d21d5b2579c45aec3959ac4b50dbb30598910d42d0656a345d05e61a588d81110b42aa28b849a7e824ef72c0d55b67fdf01af351bb4d082d5f2013acb563710269a459eb69c7729101d1e6f3624510b32d6c369e84bde12de51946361f4efbfdabeb7e97ed6bdf0c6d4456fc5026bd41773cb91a3cfecd4a8536f32afe47b3d9bec696f81c420c0a720976f442e112a4e95957344d90425d63a924685681ab8785c2b2100ab14e95bae7d5dd066f707ee1b89c373d02a62885493027ec744cf3318346a421be92298c13405521f91357e786cab004b5c1443b97f056353e979855bbd957f7dc0f1cdf6fba4dafdbfcaede1f28d52ac75a128401f7b450c32329cf3f52ea12e1978c906840c7a8227e5a2b70035ada6f5c0447729d2fa2d59c7dee7fbda5e2a342325383f5d13978da41ab4cfd5b4695506352d04fba4bcc21df7f009b67dbb1a6020000",
    ],
    [
      "ETag",
      "rd8DlUo0izcM3rxCqOwf3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:10 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd34b7282300080e1bb64ad0c8ff0ea4ea0294a0111c5b61b266a144a1a62a00a717af73abd46fd2ef0affe1bc0fb3de9bab26f1bc2c01318b1ee2a7b25e28e874ef57476f5d555057beaf471b6d239827c68c70aebe29c7c47650a57173dd4d2b87cb3b927b919c84ea601125b84dc743be0e3ac5d78385fc4d09f5e8b2c82f31c066b0b09ae1579b26361b35b0e15cf7c83754648bf609857cdf28c07b29e8d4781824f4755a545bd74c9f226e6668cad4abebe1b89bd89d4ca99bbb4682fec5eeb34cdde6ddac373443f584159705c5fac91bfb496f44d1450999e9283ab3c3cfc5f6002c8c06b41bab2bedf6e98ae3b017feb97fdc8c9fd7f8f604104f8f90533e180ff19040000",
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
      "Mon, 08 Nov 2021 02:04:11 GMT",
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
      jobId: "grouparoo-job-45-1636337013394",
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
      "000002ff85535d6f9b3014fd2bc87b5c13488090448ad628a16ba684b484b49aa609d9c650b7802936adaa2aff7d17d374ad2ab54fd8bee7dc73ee07cfe88e97099a22c2b3fb86d54fdf6e05412788299cc1ab3b37dd0b190d3cf66bf9fdae18133a492e1f673340f096257151e5ac2745535326a7fb5d3fab4553e15a881e24ea396e6f30b247b6ed5903db9e38c0932c4fd7bcbc03f68d52959c9ae651bb9f0991e50c575cf6a9285edfcd87a159d5e2965125cdf79226a848f373d11fb9a0587151cef63b30d04856c7acc03c070bff9909397d9fbacf71d1cf00fcc029c3948aa654ad2d48414599f2aca97556347d46dae69b03daf96b7f111954e44d51c6252ed88991608563f55431e32cdc6e8c5570b60d37f368b50de2dde2dcdfccfb8bed7abf0976c6f5b91ffa86c224679a6bcc8c537d0be002fa09938a975a3d6a9f5be59706ad3e8ea52580b4645d30f6ac111e8cad09498947d3b1ed92d462848c89e7629b5874e23027210c034f8b6a162e4569a5969b32ecc423c248ecd8d624c6432f8947437bec519710cf4ad0e1043dd65cb125979590bceb10ba0e57911f47e13e58cc235f9790e22657cbce585bc05b8f0a0a04d027351dda2817a0d4b67b15447e385f44ab2bbf9bf09a65983eedee61c629ce250334aea1798ad51b9140c35030dff84b00eb895d1c83124dff3ca3b6e7ad8b372d7fa54730c0d6aed25fb48bc255f053db3922ae70de68c84377401558be81dac0f5e12f206149bb2ce872ef87bf51f714b294d5aca45f4f13c03af0e5bf765c7cc0c2ea838c547087dda1b215a135eb7688eb728f6c77603b43a4c1b5fa1073468363d7da1c6d4656b052bd54d42d3e14da8935f2150441187fa0bb75f807e54bf4a678040000",
    ],
    [
      "ETag",
      "5A/5PsT17eJD+km8bc9dQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1636337013394"
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
      "51",
      "4fc2400cc7bf4b7d1d09643075090fa0a8248030c6831a438e5b07c36d1d77379110bebbbda968d4445f6e6df76bd7ff7fb787a7248fc08745b2dc94a876274b34131b04a8cbd4687e14946b0407d0882593c3d9fd4bb09dc4a5c4c5662737c397fb3bdcb6db4c68b9c24c80bf8738c134d2e03fec211719729ba4b4ccf27995396076852d4ec3a03fbae63ca3c8e6a3d960d0e90e7a70708e8d9130625ef1ff687b3c38b0a64580312acc25da5d0a456b94a66f656a911529d634954aa2860aae5e2c159585504435aed49aad5ac3733dd73dad375cf7bcc9604a52988472666753de0f0c199106b46595e031a0aa9005c7d5f9cce524aa84d8b03f0abd66b5df5740a12415cdffe40a5e7725f82f7c60ef0e7ce74446656e8ed4d5e0b6f3db38b6f473d46527ecfd20b461a38e48d81ff6a6616738b6dce3bbf4eecea01e2b621f355a0b1bf5e659ebd4abbfb97a41d669fe8e6f54890e48c197e32631e0c722d57878055a5f963a7a020000",
    ],
    [
      "ETag",
      "MUZxRwQfucebqycqMxZYew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:12 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM (SELECT `record_id` as __pk, `purchase`, ROW_NUMBER() OVER (PARTITION BY `record_id` ORDER BY `stamp` DESC) AS __rownum FROM `purchases` WHERE  `record_id` IN UNNEST (?)) AS __ranked WHERE __ranked.__rownum = 1",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1636337013394",
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
      "6d",
      "6fda3010fe2b96f7a5dd2810427893504769b6a1b6a14b42ab6e9ac0719ccc25c4a9ed50a18affbe4b026d59a5564282f33d2f77e7334f78c9d3100f70c0e3879cc9cda77b11e01a669ac4707a117f1154a6b7f97dd6b8bfe87bc46dfe5a8f864340f082a5c82a4bd88912b9a44c0d665e3d9622cf8814e204844eda9d13a363764cb3db344cb3df069e624974c9d325b0ff6a9da941a3b1f7aec742c409231957752a56cfe78d75ab914971cfa8568d43cb06b8a8c6fba6a789a04473910e671e14902b26e76c45780225bc30c3e0eba1749d93553d06f09a5346281579aa8bb240828a34e2712e4b553c78c26599af7e60cfbeb4c73efa8cbeb9d32b74b40b17925121c3390f178828349f67cb1a5a6460f79728b6a821777a3b77665767b67b748ca637b68b8eae47ae3ff12753079ddd1d084cdd73c817874a43e10b746e7be36334f240578ac7345f55e6cffa6a816e7fd8ae8d0e64260e9a398eedf9e8e8f4784f27e992853bf43eac3fcb0e9101430899d23c2d47e093206145fbbb5b9abcdd8d824034545125e7dd668718bd663f88822e8d7aa615444d1604bda06b113368d27e9bb5c38011e0e942bd649154a406b1c28030d6897a86d52666482c8b5a61b7432c1a045633ea1b662b643dbcade147c9353be72a138a5757856fdd896fcf7d77e68c47be5db611913cd1e755714513afebd4d02480dee96b5b64b900a7e2de278e6fbba3b13fb9b1ab55bb6431a11bef01962d228962802692ac9866f24a8430347c3df5cafb1d5d02a3dc9feb3d42e1c1efa71782bfc9ca29ebf21b8f5c7774071c2225d9fc97833a3a6dbcddbeb2bb21495e424a7c1955faeb2a810de8e5256a1d44ed83a883b77fb6f0a961786f9533fe39b3dd3b5c1db92c6292a5f4e39d007099f8f06f63ff86010baf186c60e935870da4aa30a192559bc857652b3bb6d532ac162ec152bfc9b57afdfdc80b8d4291ad58",
      "aa771d558fb61c6291cad5330892b040cec4f90ed97f35db023e43050000",
    ],
    [
      "ETag",
      "Kg+ocrnWujp/jK9SaR0ZvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1636337013394"
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
      "4d",
      "6f",
      "82401086ffcbf60a891463a389076d8cb5b1b4454d0f8d212b0e0802b3ee2e5262fcefcea221edc5f4c2cec73399775e4e6c9f145b36609b243e9420eb8718f4a7097c5065a6153d020b05cc62a0794c64daafbcc3f190be61547b79476da6af3ffb6a382442853bc8391b9c589440b6556cf07d6205cf81c68240ec09d1b530d9cc5b4ea6139f0a396e4dc15bcde7a3f17cc2ce563b224a19ee78b3fb36b658fa336f7a7f2a0824564599ff6bd9fa6cb114373e4420a108c16817125308f5ccd8a2782e32b015921450ac819b462cb1145c22da54b1bb3ddbe9b93dd77dea38aedbef129861c8758205b1ab05e9631a35cf7cacc815e612209b900c8a9aef91ca8fcd1d261a095adb664e23f437e9b4bd77c98bf81eda6d7b5f5c83cc2123517ff0f54ddcb8d6a03e24d2a50acc919debc1cf684cd0648e9625582ce4f49f5f127dcdcf17213e195f44020000",
    ],
    [
      "ETag",
      "j9wNqvqjMofyNm0sbGJxkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:12 GMT",
      "Server",
      "ESF",
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
      "d35d6e82300000e0bbf4590da864766fc04491d0824c105e08835ad10af4670831bbfbccae31bf3b7c0f509425913257ed9534e01d8cc51cceca99d7ad2c87521df5e1b99f2a2d7b33310adcdc62225a0a0363d380691547575b8f52b66f3efc723a32ccb1bbb21bc6f31e3bf51d0599f1c522756812c3dd845579c15a714d7aaeacc4a3710cd15aec5a9b87c9d23c39ca6fa57d4307444997d9eb93493f771c32af8fd8d14d57b0eb2c3fa80679dc53180e6df17dbf2d463b8cda8de56e874ccfeb3ade6502f5a5ba0494dfea50dca59622b9d5e7679e2d625ff3ceb39797ff0b4c0019ba5a1099d7cfed0b03c209f8ab9fabb123cfff16290411e0e717525820f319040000",
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
      "Mon, 08 Nov 2021 02:04:12 GMT",
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
      jobId: "grouparoo-job-47-1636337013394",
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
      "fd2bc87b6d4212484222456b96d28e2d212b9076d53421630c754b30b54da6acca7fdfc5345dbb49ed13b6ef39f79cfbc123ba67658aa62861f9434dc5fec31d4fd009a20ae7f0fab0dcdd8a2ffddfdfefbfde547b6b35313f898bcbd90c10ac6149bcad0ada91bc1684cae926ece682d715169c772051c71e77fa236b6459e35edfb22636f0242db2252bef817dab5425a7a679d4eee69ce705c515935dc2b7cfefe66e605682df51a2a4f95ad2041569be2dfab1e0042bc6cbd9260403b5a422a65bcc0ab0f0979926a7af537719de767300ef18a198105e97aab10529082f3396d7426745d347a46dbe38a0d05dba8bc820bca8b7655ce22d3d3152ac70acf61535ce83f5caf0fcf375b09a47deda8fc3c5677735ef2ed6cbcdca0f8debcf6ee01a0a2705d55c63669cea9b0f17d04fa954acd4ea51f3dc283f35c8fb7f2c0d01a4256d83f1b837c27da73749b2644c32c71a26598f2689938c87d84a7a6462533b4d28069e16d52c5cf292da899d61cb8ab3d47162dbb606b1034d8e537b34708684f47bce181d4ed02fc1143d63b2e292b51d42d78117b971146cfcc53c72750919ae0b75d61a6b0a78e9514181007aa3a64313651c949a767b7ee406f345e45db9ed849734c7641f3ec08c335c480a682ca0798a8a154fa161c89fafdc3300eb897d3b06259afe78444dcf1b172f5afe4c8f60808d5da5bf288c02cfbfd0768e882b5cd41ab26b0fa802cbb7501bb83efc04242c699b055d6edce006b54f01cda8a025797f9a00d68177ffb5e3e20316561f64a4823bec0e918d0811b4dd21a6cb3db2878309cc518385fa3766f51cfbd8b5264793916e69a99e2a6a171f0a6dc56af90c82208cdfd7dd3afc016e5bada978040000",
    ],
    [
      "ETag",
      "qLvhrJ1zXkKYpy3M9/BrGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc2d09502cd2840b5050227f42b932842ced500a6da7ec6e31487877672ba25113bdd9ce4cbf99ce39dd236ca33400179651b8cb511eae42d44f2698a0ca63adf89151aa102c402d42261ba3fd6b1ed2f25157b755dc75cb8d8dd887cd2613ca5f6322c03dc22ac23850e03e1f211509729b4f719ea48b22b3401f32539c7a93def09ef38402930f67fd7eabddefc0c9ba3406428b45c1ffa36d7eb26043cb09ae5062eaa3d92593b4415ff78c4c25922cc692a25cfaa8a0808b17a1a43c1392a8c49552ad5eaa38b663dbf572c5b61b350663f2858e28657636e5fd409316f1845e5825380cc82264c1abe2dc73390a0a2126ec0d3da756ecf71590e8930c167f7219afbb16fc173eb0b303df3991509eea0bd5ed8f5abf8d634b3f47ddb5bcce0f426936ea8278bd4167eab50663c3cdcfd2db078d6a2c897d54682cac946b37d775a7fceeea2d19a7f93bae96395ae00bbe1c0f910677256285a7379b1920807a020000",
    ],
    [
      "ETag",
      "9OvzugobKt2k2eqF09javg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:13 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT * FROM (SELECT `record_id` as __pk, `purchase`, ROW_NUMBER() OVER (PARTITION BY `record_id` ORDER BY `stamp` ASC) AS __rownum FROM `purchases` WHERE  `record_id` IN UNNEST (?)) AS __ranked WHERE __ranked.__rownum = 1",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1636337013394",
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
      "00000002ff85546d6fda3010fe2b91f7854e9497262580843aa0d98644431b42ab6a9ac0761cea92c4a9edd0b18affbe4b02b4ac522ba1d2f33d2f77e7332f68c593007511e1cba78cc9cd9747415015318d97701aaf6f06315bcdc89f71c75603fe63fa774d9e7b3d40f09ca5709c46ec54894c52a6bab3696d2945966229c429089d5aedd366cb6c99a6dd689a66c7029e625138e6c90ad80f5aa7aa5bafefbd6b4b219611c32957352ae2c3797d7d564fa5786454abfab1651d5c54fd63d38b4850acb9487ab32914902926e72cc63c82125e9901f9762c5de338ae2d01bce694614a4596e8bc2c90a02209f93293852aeabea0a2cc37ffa0a9337686bef1d5f8ee4dae8cca2e5c4846850ce63c58185819f379baaa1a8b14ec1eb0628baae14deee6eeec6ae07895136372eb7846e5baeff9237f34718dc1fd91c0c4bb847c7ea83414be30fad3e109fc0159299e932c2ebd0ff26a61dcfd743cc7385219b9c6cc759da96f542e4ef6749cac58b043efc3da41b66734610601539a27c5047c4c229677bfbba4d1fbd5c80958431565726e375ab8d96e7448486c1ab6cd73123618216d629f63933468c762564018069eced50b164e4442429bb233336c9e313b0c424a5b8d0ea5f89c10b34143abd90e881d36c3006dabe85972cd2eb94a85e2e54da13b6fe43b73df9bb9c3beef146d84388bf465595cdec4db3a353409a00ffadae6592ec029bff691eb3b5e7fe88f6e9d72d3c66c89e966fa04bb16e2483140638963a699bc12010c0d5d4fa6c5f5f6c7c028d6e77a8f50a8fbebe595e06fd262cabaf8467dcfebdf03074b8937ffe5a08e9685b6db3776b738ca0a48812fa2527f5d2650137a798dce8e22eb286aa1edef2d7caa089e5be98c6e668e778fca238f854cb2847ebe13002e129ffe6aec9f3060e111830decbce6b08154e52654b27213795cb4b2639f9bb6d5460558ea77b9b665ef479e6be48a2c6689de7554bed96288792a530710246181dc91fb03b2ff00bf204a6c42050000",
    ],
    [
      "ETag",
      "mvQBmekUbxL97sBiGSzvbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1636337013394"
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
      "dd4ec2401085df65bdb44da84544122ea841246203058cc19066294329b49dba3f9286f0eece16d2e80df1a63b7be69bec99d323db27f99a75d82a89bf3488f226063531450052a74ad251602e81590c148f897ce68faf8bd63d26ef6f1f6ded1f6e1bfec29b74bb44c8680b19679d23db2490ae25eb7c1e59ce33a0b1302cf684a8b230b7a13feb0ffa010919ae8de0cf47a39e37eab393558f145a445b5ebd7d199bce82a13fb83e1586020fb9cefef5d8f264b11dae02d880803c02e3bd10b883480d4d2c9267450ab644b202925570d58805ea820b449b14bbd9b69d96db72dd8786e3ba8f4d02538cb84a3027763e257f4ca1e26980074a85b90488aaa48036d5f79be466b587a9bc54c30a84286bc5a9ccfea6efeade18b8b8023a75af57d0367fc9e5c599572a906381b4a604b361e3bced139a041425a384068b459c7ef24ba2cef7d30f866beab741020000",
    ],
    [
      "ETag",
      "Fa9KZ65oiVMX8uNw+0NZBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:14 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb64ad0ca27cd25d45a4805450a0c886496380103519b042ecf4ee757a8dfaeef0be01c298f47d79e58c5cc00b9048830a5602612dd7358da3180dd33166db13cfcc1ba71fe334c2aede1e1911d41deaf6b6833a693ae169f346738cb3bd99258b7dd4dcee747718d2d2a9f18916bc1a49c1e16163d909ce761dbbf8abed99c3b0e647cfeb3f8d0eb5392e25f6d9e29d99fb404d22a7df87e4aef9a9b472ebad5eb93cf4025dc82a4a670cc130ac7040ac795670d6c065f0255ba452848d965f396fd76a5689cc7f9d3548771391b3d83463692b4f4fff179800320ada91bea48fed731dc209f8ab5f5ea5208fff4b823ad2819f5fcddc6a0919040000",
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
      "Mon, 08 Nov 2021 02:04:14 GMT",
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
      jobId: "grouparoo-job-49-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda3c210f22456b96d02e52423620adb66942c65ca85bc0149b465595ffbe8b69ba5695da4fd8bee7dc73ee832772c78b98cc48c4d3fb1aaac72fb722226704144df195f3dfaacac56a7ab81afa876ffe6501ab9bc37c8e08deb024cdcb0c3a52d4150339dbfbddb41275492b213a98a863d99dc1d81c9be6a43f304ddb429e842cd9f0e20ed9374a9572d6eb9db4bba9106906b4e4b2cb44fef2de7b18f6ca4adc0253b2f756b2872ab2f7b1e8d74c30aab828e67b1f0dd412aa1072ca33b4f09f1947e76f537739cdbb29821f3803ca98a80bd5d8c2144c14094feb4a6725b327a26dbe3a10dfd938cbc06022abf3222c680e67464c150dd56309c685b7db1a6bf762e76d17c17ae786fef2bbb35d7497bbcd7eebfac6f577c7730c45a30c34d7981be7fae6e205f563908a175a3d689e1be5e706addf8fa521a0b48436184efa633a98f6ed2889262c999aa328e943144da3c9889a519fd91658710414795a54b368218a31c4089e246132184c422b194ec3e9c84ec2516c59b63d198e4d3626c73372a8b8821597a590bced10b9f6d6811306dede5d2e02479790d03a53abd65853c06b8f0a0b44d007351d9b2817a8d4b47bed068eb75806eb2ba79df00652ca1efd7b9c7142330988a615364f41b51531368cb88badb342b09ed88f535092d99f27d2f4bc71f1aae52ff40007d8d855fa4bfcc05bbb97dace097145b35a431eda0329d1f20dd686ae8f7f11894bda66213ff78ef78bb44f1e245041c13e9f268275e0d37fedb4f888c5d54719a9f08ebbc36423c22a687788eb724fec91351af6890657ea5d6c3c304f5d6b7234192187423d57d42e3e16da8ad5f20584411cbfabbb75fc077b0ea34178040000",
    ],
    [
      "ETag",
      "iiZtrmoD8wV2SwBSGneDhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1636337013394"
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
      "0000000002ff8d92dd4e83401085df65bc1492562a2a492f5aad4ac4da1f7aa331cd1606a40283bb8ba6367d7767b156a3267ab3cc0cdf0c730ebb86c7ac8cc18345963ed528577b29eab10926a8ea5c2b7e54542a040b508b94c9417515a8e2c95fbefab3dbfd83c745d26ad7e36e9709153d6021c05b4392611e2bf0eed6508a02b92da2bc2eca799359a05795294ec3893fbce0bca0d8e4c35910f4fac10036d6ae31165acc1bfe1f6df71b0b96b498608212cb08cd2e95a42546da37329528aa1c6d45b58c504103372f524975252491cd15bb7362b75dc7759ca356db714e3a0ce614099d51c9ec6ccafb81262df209bdb04a7019904dc88293e67ce6721637424ce80f43b7d3ecf7159018918ce77f7215affb20f82f7c605b07be73a2a0bad43bea3cb8e9fd368e2dfd1c75d60b073f08a5d9a81d12fad78369d8bb1e19ee7e2bbdbfd2a84692d84785c6c276ab737c78e4b6de5d3d25e3347fc7d3b2460b22c197e332d3e0252257b879035339be0b7a020000",
    ],
    [
      "ETag",
      "EpKLsmqIjzIUZ+2kbf01uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:15 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, `purchase` FROM `purchases` WHERE  `record_id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1636337013394",
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
      "6d",
      "4f",
      "db",
      "30",
      "10fe2b91f76593da266992a6ad84580519442a81a52908a6a9b51da718d238d80ea843fdefbb2414e8909854293ddff372773e3fa37b5ea4688c085f3d544c6ebedc09823a8869bc82d39b8d29fe5cf9d778aae9cde949b8093dee3d1d1c0082d72c85d765ceba4a549232359ecf7a2b29aa124b21ba20d4f5acae3d70068ee35bb6e38c5ce0299667535edc03fb56eb528d4d73e7dd5b09b1ca192eb9ea51b17e3d371ffb6629c51da35a99fb9626b828f373d3c35c50acb9280ee63328a0524c2ed81af31c4a7863a6e4fbbe748fe3756f05e0474e19a6545485aecb02092a8a8caf2ad9a8a2f1336aca7cf707cd82697094184bc9a890e982a74b032b63b128ef3bc6b204fd5bacd8d2f8119f9fbdc56a695c9d067160ecf1c2c8984751304b8caf87dfc03c654af3a2b14e30c9596dfb329df0e39dd404ac41bc4d2e7c6b80eda1352219f16936743c92598c9021f13dec108b8e5ce6a68461e0e95abd61e14214aeef116afbaed5f7993f1a65b6cfd2818589ed652ef1ad6c342294f4ad21da76d093e49a1d73550ac5db11a1ab384c824512cfa3a34912346d64b8caf5715b5cddc4fb3a353409a04ffadad6592ec0a99e771825413c394ac2cba0bde2295b61ba993dc0256738570cd058e235d34c9e891486862ece6761129e479329309a7bbbd821141aff7a7e23249bb299b26ebe6812c7936be06029f1e69f1cd43170d176fbceee12e7550369f04dd4ea3fb60964432f6f517f2f72f7a201dafedec2af8360cf5b67f4731ec4d7a83d8a59c6242be8ff7702c04de2bfcf75f776000baf076c9486183690aada844ad66e225f37adbcb03dcfe9dba8014bfd21e7dac3ddc86b8d5a91ad59a15f3a6adf4e33c43a55a95710246181a2303a81ec5f42eeeea8bb040000",
    ],
    [
      "ETag",
      "Zy/ozW7YaLtcZHGIyI5i5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1636337013394"
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
      "0002ffa552d16ac23014fd97ecb585d66ab7093ee8702a8873adc5872192d66badb64d96a4ba22fefb6eaacc819bb0f992dcdc734e726e387bb249f20569923089df0b10e55d0cea55171ec822551237ce7209c420a0688c4cdf0dea8d878286fef3d4ddeefa1f5650d8bb560b19325a414649734f9609a40b499a6f7b92d30c50369ff30d5254c9f569309a747b5d0f1b195be8c628180edb9d61971c8c2f092f44b4a2d5db27993ff106a3de4faad9c1206b167ab004017904da04176c0d911ae8f924cd780aa66478274852912b2016ace054306662c76c58a6ed3aaee3dc5bb6e33cd69198b288aa84e5c80d7cb447145334f5d80ec723b68b0c51d538eab25ab7d8af5573e8aacdf1ddcadf5f70fb467dfdc6fbcff88ba079fc0fc2d9c1942a1019a4f885bf93c640a3d515bc9316108210e51527b7716adfbd88eb562fe14bf5ec94944ea9408e05c3d849d089b38ee97b623a910a93aa44010689f003a09fa8e3f9f009a1f53d1e9a030000",
    ],
    [
      "ETag",
      "S6U458uabSFW6vwHx0Uu1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:15 GMT",
      "Server",
      "ESF",
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
      "02ffedd35d6e82300000e0bbf4d9900a03cbdee6c080a01d7fa2bc900a15198c16ca62c1ecee33bbc6fceef0dd01290a2a443eb28676e0154c44359542f1385a6faa6a768bad9712e77861b313f884a28206da1bf16d9ce9056e30b4b42fc93371c4b5753acd8dd083e5857c44eb50bbe69bef04b1c34a7765de4a6eda716b0c09f560decfb4ebaf257f71a0d59c9d9041daa2731aa4d9e7c1f56ced163b61e4ad46e4868d9a95762dd560a9479a31c6f1de48775d9921772799cc3ae386dfb78d9827dc43d34a90b16747bf2a0da8fbc2ab5c3e956c607624f915af54d42a4f4fff1758002a793d5091d78fed9a6e9a0bf0573f1f274e1fffd7940c74003fbff5f18ac919040000",
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
      "Mon, 08 Nov 2021 02:04:15 GMT",
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
      jobId: "grouparoo-job-51-1636337013394",
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
      "000002ff85536b4fdb3014fd2b91f771b44d9bbea56a542540a536ddd21486a629b29d9b6048e234764008f5bfefc6a10c84049f62fb9e73cfb98f3c937b9147644a9848f615944fdfee24232704344df0b5c71623fd789305f3df3deddff2ef7b2e2fe6b3192244cd52342b52682959951cd474b76d27a5ac0a5a4ad9c244ad41b7d51d3a43c719d95dc799f491a7208d5722bf47f6add6859a763a47ed76226592022d846a7399bdbe771e7a9da29477c0b5eabc97eca08aea7c2efa23959c6a21f3d96e8b062a0565081915295af8cf8cd8e9fbd46d41b37682e007c181722eab5cd7b6300597792c92aa3459c9f499189b6f0e64ebaedc4560719956591ee63483132ba29a86faa900ebdcdfacada577bef1d7f360b9f1c2ede2d25dcfdb8bcd6ab7f6b6d6f5a5ebbb96a62c05c3b566d6a9b9797841fd089416b9510feae75af9a541cb8f63a90928ada00986237b48bb637bc26236e2f1d819b0d806c6c66c34a00eb3f9a40ffd8801459e11352c9acb7c4cfb8e3de8b130466cd88fed281cf7262c9c386380611f7a0011399c90c752683813aa904a341d22d7fe3270c3c0df798b79e09a12625aa5faac315617f0d6a3c60211f4494d873a2a242ad5ed5e7a81ebcf17c1f2ca6d26bc8284f2a7ed1e671cd35401a26989cdd350ae65840d23de7ced9e21d84cece731a8c8f4cf33a97b5ebb78d3f2577a8003aced6af325dbc05f7a17c6ce117145d3ca401e9a0329d0f22dd686ae0f7f11894bda6421bf76ae7f439a271f622821e75f4f13c126f0e5bf765c7cc4e2eaa38cd278c7dde1aa16e125343b244cb947f660680f07c4804bfd21d61d0c8f5dab73d41921835cbf54d42c3e16da8855ea1584411cbf67ba75f80732aad89d78040000",
    ],
    [
      "ETag",
      "2bC7twYmTAX2tRhc+qcoGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1636337013394"
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
      "51",
      "4f",
      "83",
      "40",
      "0cc7bf4b7d149211262ac91e984e5d825319f341b32c27144481e2dda121cbbebb3dd469d4445f8eb6fc5afaff736b782cea147cb82bf2a71665b793a3be324184aa2db5e24743b542b000b5c899d4bb61b87bad4ff131ba1e1ebf1cde744f4e1e8c464ca8e41e2b01fe1ab202cb54817fbb865a54c86d09956d55affacc02dd35a6388fa3e9ec94f38a5293cf1661188cc3096cac6d632ab458f5fc3fda961b0b1ee82ec20c25d6099a5d1a490f98e8a991a944d594682b6a65820a7ab87f914b6a1b21896caed87b8eed78aee7bafb03c7750f870c9694085d50cdec62cefb81262dca885e5825780cc83e64c1597f3e73b9487b21269cce626fd8eff7159098904c577f720daf7b2ff82f7c60ef0e7ce744456dadb7d4497811fc368e2dfd1c751cc4931f84d26cd41689a7e793791c9c5f1a6ef92e7ddc69549792d84785c64267303cd8dbf7066fae1e91719abfe36bd9a20589e0cb715668f033512adcbc025c3f23637a020000",
    ],
    [
      "ETag",
      "t+LL+VtGekRV4Dw9Zyq1gA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:16 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COALESCE(AVG(`amount`), 0) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1636337013394",
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
      "6d",
      "6f9b3010fe2bc8fbd24a7921216f44aaba2c651d5b9ab4405245d3941863a817c0c436ada22aff7d07346db24aad8404e77b9ebbe7ce773ca30d4b0334443e8bb63915bb2f7fb98f6a882a1cc169d259ec4227327e25cb846d169badfbf4737b7771010856b0244eb298d625cf05a17238771b91e0798605e7750854efb6ebad9ed1338cbede320cb3033c49e370c2d20db01f94cae4b0d93ce46e449c4731c519930dc293d7f3e663bb9909fe9712259ba7299b9045363f4e7a19738215e3e9c5dc0501b9a4624513cc6290f0c60cfcafa7a11b0c278d08c08f8c504c08cf5355c8821084a7218b72514645c36754ca3cfa40ae35b1c69eb616947011ac58b0d6b0d456ab6c53d3c6b3d1c472c7d6d968717db6c64911787d5ed3f4f3027338d0be3bb31b6d9d8196072ca95c6bf73f2cc7d24e62da536d3e9d5aaea79d5d9e6bd7ce6c7eab7d5b1e43406d40a56269a9d5c37e4c0b9d2fedb4df5f6241c00a3256ce555fefe1d64037fdd0ef93706074fd50a7be3ff0fb5d6cf83a313bb413f814034f15d14b164e79eab7f40e36881152dcf7cdc01cc0d3eefb5db34f5a6d8c4968982d7dd069a17d0d3d09a6e815931997acea29ba776ccf5a79ce7c3a1e7956594688f3585d55e28a228e752a2812401fd4b52fbc8c43a6e282eca96739a3b1672fac6a262634c264e76e612a421c4b0a682c70421515373c80a6a1db996b7bf66c3a9a00a3bce8db0342a2e1efe73782b7cbca2eabf28d468e335a02070b8177fff94047af83f6fba3740b1ce725a4c4975615ffb172a0a2656f56fbc4ea9c583db4ffb387a7866031aacce86e6e394b541d3934a482a6e4f3990070e9f874bf0fcb06585837482315d8308144164988a0d524b2a42ce585dded0df4f2efa0b050ef7ca6611e5a5ec42822d284a6eaa5a26ad9ca2616ae5cbe82c0090334b5a7d7e0fd07e3d0c01eec040000",
    ],
    [
      "ETag",
      "m4VyfRg3KmYmikVkqSwJqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1636337013394"
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
      "db",
      "4e",
      "c2",
      "401086df65bc6d95d24a85840b902a9806b542e221842ced500a6db7ee6e3984f0eece16a34d742e76e7f0fdc9fcbb47d82479041d5824f16789e27011a37ad64980b24c95a4abe0b9443000158b89dc4ff7af43df196cdf5643ebdd6be2437435d875bb44c870851983ce119609a69184cec711729621c9e6f36243883a14ba1a8d27debd175023e3916e8ca7bedfebfb1e9c8c1f09cb7899ab5fd19dffd89bfc27999d0c58f345804b149887a83728045f63a846da9c645991a2297929429450c1d52016bc2c98e0dca48e79dd34ad96ddb26db761d976db2130e5215309cf899dbed06ea0b86269c077e40d6c02449592cd65756ea9ddac3ce8ccbabc715b8d5ad8d5ae75d8aac1eedfb1531b3baedbaec58d8667df1bf50f0ae593e0644fa276d638bbbce5dab9a21751a2440342465f344cd4b93e7d01ab563ee6ff010000",
    ],
    [
      "ETag",
      "xUxXHL4DvYhH1ZE2eJd/Dw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:17 GMT",
      "Server",
      "ESF",
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
      "bb",
      "64",
      "6d199542497701450a0358ac1ad86404020dbf848003b6d3bbd7e935eabbc3fb06972ca3c340465ed30ebc82db650d954cf18461da253b26be08501cf8959e68faa6aa6561b453232daf1ffd73f7bc0d3eb283b3c3679ef4d55e5de19782d6094785f31e667a6ff7139e521c5a62f535aba86dbb32278d071dfdd41d3ed7696f303aa76e14c628421a646a5c1468cef161b3cfa3a0426f421b68c32d2685cea7e5c92cf15698b2cdae434a9feaca9d9764679fddc1334b381e4d964cf41a1ba507777cb9c5dadaf139f1a2ce229ac323822aae3c3cfc5f6001e82c98a40361f7edaa06e102fcd527e34dd0fb7f935e2495e0e7175c36c40d19040000",
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
      "Mon, 08 Nov 2021 02:04:17 GMT",
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
      jobId: "grouparoo-job-53-1636337013394",
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
      "535d4fdb3014fd2b91f738daa64ddbb495d0a84a18d1da744b53189aa6c8766f82218943ec8010ea7fdf8d431908099e62fb9e73cfb91f7922b7a2d891196122bdaba17afc7223193922a0698aaf3f54e8df46d5d6cd43f6d5595eb1e9efca7b383e468468588ae665061d25eb8a839a6d37ddb49275492b293b98a833723afdb133761cd7ee3bce74883c0559b214c52db2afb52ed5acd73b68775329d30c68295497cbfce5bd773fe89595bc01ae55efad640f5554ef63d16f99e4540b591c6f3768a05650c5905391a185ffcc1d3b799bba2b68de4d117c2f3850ce655de8c616a6e0b248445a57262b993d1163f3d5816cbca5b7882c2eb33a2fe282e67064eda8a6b17e2cc13a0bd72bcb0fced6e16a1ef9eb20de2ccebdd5bcbb582fb7ab60635d9e7ba16769ca32305cebd83a31b7002fa8bf03a54561d4a3e6b9517e6e90ff7e2c0d01a515b4c1d8b5c7b43fb1a72c612e4f26ce882536303661ee883acce6d3210c770c28f28ca861d142166cca07c02693d8b661120ffbfd69cc46935d0c23bb3f6063d79d3287ec8fc84325349c0a554a25da0e91cbd08fbc380ab7c1621e79a68484d6993e6d8d3505bcf6a8b140047d50d3be890a894a4dbbfd20f2c2f922f22fbc76c24b48297fdcdce18c139a294034adb0791aaa95dc61c348305f79a7083613fb79082a32fbf3449a9e372e5eb5fc851ee1001bbbda7cc9260afde0bbb173405cd0ac3690fbf6404ab47c8db5a1ebfd5f44e292b659c8afad175e91f62984042a28f8e7d344b0097cfaaf1d161fb1b8fa28a334de7177b86a447805ed0e0953ee813d72c703871870a5dfc5dcd1f0d0b5264793117228f47345ede263a1ad58ad5e4018c4f107a65bfb7f589f9df378040000",
    ],
    [
      "ETag",
      "KsRIkTrU7mRb+3LYb9XrEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92514fc2400cc7bf4b7d7444c860ea121e40114906080c1f30861c5b19c36d9d7737cd42f8eef626a251137db9b5ddaf5dffffdd0e9ee22c04175671f45ca02c4f22d413134c51158956fcc829530816a0161193e5d92259a497f75e361e95a90e4ffb9b683569b79950c1065301ee0ed63126a102f76107994891db024a8a345b569905bacc4d71e64f07a33ee72985261fcd3dafd3f57ab0b78e8da1d06259f1ff687bdc5bb0a5d514d728310bd0ec924bda62a00746a612699e604d5121035450c1d58b4852910b4954e34aad65d71a8eedd8f679bd61db974d06130a848e2963763ee3fd409316c9945e5925380cc82a64c1ebea7ce1721c56424c3818f94eb3daef2b203120192effe4725e7723f82f7c600707be7322a522d347eac61b777e1bc7967e8ebaeef8bd1f84d26cd411f107c3deccef0cef0cf77890de2d35aa3b49eca3426361a3debc689d3bf57757afc838cddf71b52cd08240f0e5b88d35b86b9128dcbf0119dd837c7a020000",
    ],
    [
      "ETag",
      "y/ZlZm9VLnONymtd+GhgbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:18 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1636337013394",
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
      "0002ff8553fd4fdb3010fd5722ef17d0e8673e5b09b1ae642c5b494b9ac2d034b58eeb04431a07dbe954a1feefbb2414da218154293ddf7befde9dcf4fe881654bd447114b1e0b2a369fee79844e10553881d31fd867f7bfaebc75664e7e8e73dbf92c0777c9e9292058c9927895a7b42179210895fdd9b499085ee45870de00a18669343a966ee9baddeee87acf009ea4693c62d903b0ef94ca65bfd5dad56e269c2729c539934dc2572fe7ad75b7950b7e4f8992adc3922da8225bef173d4b39c18af1ec7436050385a4624e5798a560e195b98cbe1c4a37195e351300af19a198105e64aab405128467314b0a51a9a2fe13aa6ceefd415377e40e436d2128e1623967cb8586a5369fe70f27da703cf3c3a3055e958a8be332b10bb46fc1f8525be460e00e4b2a17dacd773770b50321cfd766beef4e43ede8ec58bb08c6b389f6f5761f021697542a965506431ca5b434f73c43efedcd9504aca0629d9cdb6d0b779c762f8a239bc48e6e46719b469113d926d6a336e919d4584614034f95ea150b673c6b5b06ed59b6694526e9768c764cbb0eeec60671f476af43a86d771dbbe3c4687b82fe0aa6e839933997ac1e24ba09bcd09d87c1cc1f0e42b76a23c645aace6b736513fb3e153409a077fada9659c6a152792b9e1fbac160187ad76ebd08239a60b2993ec22ac4389514d058e01555545cf2250c0d4dc6532ff4c6fe60048cea76273b8444fddf4faf847093575356d5170d8260700b1c2c04defc97031f9681b6dbbd72d7382d2a4885afa25a7f5d2750077a798dba079171105968fb670bbf1304afa1ae8cae666e708beaa380c654d08c7cbc1300ae121f3eeadd0b032cbc31282315c4b08144964588a0f526b255d5ca33db74ccae8e2ab0506f7256d7d98dbcd42815e98a66eab9a3fa8555432c53857c01411216c8f7fc0bc8fe035566dec7e1040000",
    ],
    [
      "ETag",
      "JaNijXQIvn5PKOp78+sAhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d505d4b024114fd2fb7d75dd0568d041fda584a10a9350d0c9171bc4eabbb73d7f92844fcefdd59438a5e7a99b9f77c30e7cc1176855e431f5685da7b34872b85ee390c395a5f3acb574dda2244804e2856ceddd497333b996df7ea354d675a8ed55c0d06acb0f21d2b01fd236c0a2cd716fa6f47d0a242b62d97f58e25ee50876d387ec91eb29c818ad601184f47a3bb7494c129ba5844455ebb7f9916a708b6b4ca718306b5c490a136b445e986a19e15555d626cc91b89161a71432843be1686286624ee76e2762fe925c94dab9d24b71d169624852b48b3763ae174e0c88932a74f6e07090b4c3372d14d737e307cddb40853b789f6936b5fb8de1faef3dbb7f87e2c3d38b44f8638b9c510ba752e704fa194e3b2ce788c400afeffc7c29df7d317864321d6dc010000",
    ],
    [
      "ETag",
      "ZtUulVsSVjqgWBBVncNgZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:19 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd34b7282300000d0bb642d0e2868d29d3aa256505094c026938448297e20183e3abd7b9d5ea3be3bbc27a09c8baa22f75b2eaee003747480fabccff409aef547b08586e678a7f68bc988a4b634cec1a3cdd5c20a4de1f25d76f1f70735621b1735f4736ec1493da445068fda1c42c98ef5de3c2ff3d9d648acb5b11927d9a928d125c50eb6ad318ecc264790377e1ec5c759b9aa3bed369ce3325410dec241bc2b3b63eda49ee3d5fe771e2dd4651d9cdaa556b99c1e98bdf358a91295c0b389f6bebbaa1b67744fb2c1954f83582ecce84a7c4c142b7ce948a5f4490e373169b19d8654efbfbdfd3ba007445b645254247b6d1f5a08f5c05f7d72ef0af1fa3f15540a097e7e012a16087219040000",
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
      "Mon, 08 Nov 2021 02:04:19 GMT",
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
      jobId: "grouparoo-job-55-1636337013394",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda0452f22252b466095da305d212d26e9a2664cc85ba25986293a9aaf2df77314dd76e52cb17b0ef39f79cfbe089dcf322211312f3eca186eaf1d39d88c909014533bc7d7066053ef7def9a5f9fddbc21feebf6cf3abe91411bc6149ba2b73e84851570ce464bbe96695a84b5a09d1c1449dc1a0d31bda43db1e593ddb76fac89390a72b5edc23fb56a9524e4cf3a8ddcd84c872a025975d26762ff7e6fed42c2b71074c49f3ada4892ad27c5ff4732e18555c14d3ed060dd412aa087694e768e12f3389cfdea6ee72baeb6608de730694315117aab185299828529ed595ce4a264f44db7cf54136eeca9d87061379bd2ba282eee0c448a8a2917a2cc1380fd69eb1f4cfd781370b976b3fdacc2f5c6fd69daf575bcfdf1837176ee01a8ac63968ae3135cef4c9c703ea2720152fb47ad85c37cacf0d5afe3f968680d212da6034b286b437b69c388d472c1ddb8338b5208ec7f16840edd8624e1ffa490c14795a54b368218ad170988e531b223b499da8df774611b507a7d1386689d58fc1497b400e27e477c5152cb82c85e46d87c84db00cdd280cb6fe7c16baba8494d6b95ab4c69a025e7b54582082dea9e9d044b940a5a6dd4b3f7483d93c5c5ebbed84579051f6b879c019a7349780685a61f314549e48b061c49f79ee02c17a6297c7a024939f4fa4e979e3e255cb5fe8210eb0b1abf49b6cc260e97fd5768e886b9ad71ab26f3f4889966fb136747df885485cd2360bb9dabac10fd25e0590420505fb789a08d6810fffb5e3e22316571f65a4c233ee0e938d08aba0dd21aecb3db2078e33b6890657ea9fd8d0b246fd63d79a1c4d46d841a19e2b6a171f0b6dc56af902c2208edfd7dd3afc01bfd37ce478040000",
    ],
    [
      "ETag",
      "q9AnnnnkMFP/XKDN6vBUlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1636337013394"
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
      "4fc2400c86ff4bfd3a12c8d890257e188a4a325060c41063c8b17563b8adf3eea62184ff6e6f2a1a35d12fb7b67bdaf57d777b78ccca183c5867e9538d727792a29e9a6086aaceb5e24745a542b000b548990c167ee8acd30cdd9ed39f2e974fcbbbb0373d3b6342451b2c04787b4832cc6305defd1e4a5120b74594d745b96a320bf4ae32c579381b4dae382f2836f9641104fe2018c2c13a36c6428b55c3ffa3ede160c196d6334c506219a1d9a592b4c5488f8c4c258a2ac796a25a46a8a0819b17a9a4ba1292a8c59596e3b43aaeedda76afddb1ed7e97c19c22a1332a995dcc793fd0a4453ea31756092e03b2095970d29ccf5ccee24688094793d0ed36fb7d05244624e3d59f5cc5eb6e04ff850fecdd81ef9c28a82ef591ba0c6efcdfc6b1a59fa32efc70f883509a8d3a22e1683c9c87fef8d6700fefd2073b8dea5612fba8d058d869774f9d9edb7e73f59c8cd3fc1d4fcb1a2d88045f8eeb4c8397885ce1e11550a7adfc7a020000",
    ],
    [
      "ETag",
      "LUAT5bgie6759QYYqYWT7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:20 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COALESCE(SUM(`amount`), 0) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553616fda3010fd2b91f7a5d5808426248054750cb22e1a0d6d08add03481e338d423c4a9ed744315ff7d97a4b4b04aad8414ec7befddbbf3dd135ab32c467d14b1d54341c5f6d36f1ea106a20aafe0565973537fc07c34fa3bcb68e4fc585f7e9637e7e78060254be24d9ed2a6e4852054f667d3d64af022c782f32608353b76b36d9bb6693a46db347b16f0244d9331cbd6c0be572a977d5ddfe76ead385fa514e74cb608dfbcdceb8f677a2ef86f4a94d48f53ea9045eaef27bd4839c18af1ec7c36050385a462413798a560e19519475f8ea55b0c6f5a2b003f32423121bcc854690b2408cf12b62a44a58afa4fa8b279f0074dddb13b0cb5a5a0848b78c1e2a586a5b658e4eb86369c0cc6ee74e89e4c6757274bbc298597a70dcd382d31fb0bed5b30b9d2963978b9c792caa576f7dd0d5ced48d3f3b599efbbd3503bb938d52e83c9ec5afb3a3f8480db984ac5b2ca6b88a394963e9fdbe9bd7dc492801564ac830bc7b071bb6bf4a2247248d2353b5162d028ea464e079b91417a16b5e28862e0a952bd62e18c67513b320c27317b9dd8b412939a16b1eca8d735db896563c7c1d872086977d0ae81fe08a6e888c99c4b56f714dd055ee82ec260e60f07a15b9591e02255a3da5c59c4a14f054502e89dba76659471c8543e90e7876e301886dead5bcfc498ae30d94e1f602a129c4a0a682cf0862a2aae780c4d43d793a9177a137f300646f5d0d77b8444fd9f4faf84709b575d56d5170d826030070e16026fff8b810fdb42bbdd41ba5b9c1615a4c257a75affb10ea036d4f27a3a3b3a5947271bed7eede0d740b01875667433738339aaaf029a504133f2f14c00b80a7cb8dffb65032cac1ba4910ace308144964988a0f524b24d55ca33db361ccb461558a837b1aed3d9b7bcd42815e98666eab9a27ad9aa2696a142be80200803e47bfe2544ff019867489eec040000",
    ],
    [
      "ETag",
      "t4Y3/qaoDDxUneb7KkG+sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1636337013394"
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
      "ff6d915f4fc23014c5bf4b7ddd70a3fc11121ec04c255910277bd11052c6650eb6ddda769285f0ddbd1d0649b40fededbdbf939cd31ed93e2b376cc8d659fa5981aa6f52302fb6884057b9d174482c35308781112991de5cfbaa2e03795b8bb89bbe1da278de4e47232274f2018560c323db66906f341bbe1f59290a20d96a25f784985adadb74b6081e83881a056e6c631687e1781206ece45c24a2c0aa34bfa287f079bcf84fb23c396c87eb08b6a0a04cc03a900a779098a90da74521737035562a01cd1ab819a40a2b2914a24b1db7db73fd1eef71def77cce071d02734c84c9b024367e256fcca011798407cac63801aa2929e6b6d9bfa8dd6e32d86ad0e2fdc1f56aac5eb3fe85f5bd16bffb33ef5ce6fd166fe4cb1f0f93da809e2ba4401a6c16ef9ceb1e6d56436f6054050e4b047dca5366cef7d33785fdb453f1010000",
    ],
    [
      "ETag",
      "0Ps1rynEp/yaU5gZwRUP2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:21 GMT",
      "Server",
      "ESF",
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
      "0000000002ffedd34b7282300000d0bb642d4ea2304a77055123041183a01b86c448a92214e4974eef5ea7d7a8ef0eef1b249c8bba8e1fc555dcc11b1892893ee66306dfa3164aeae50f59693c1d1ad78b07b6c159da7544e95d8516cdad0ed31b72d3c89410535b3299cb93d5ba75e17801dfec027c844e9c8b4cb30e12f639ba252c44f996e886e11ef5d9419604aaa66d5f4efcba628efa11cc3132bfdc7ea206697f4178a715fedc3f36abc37ce918ded5efce53ab5db4ecde597c4be859c5c59afaf63243d186189f33df0c13bcc818f5f644a13d9f588a5aee030a57a1d5d812127f8df46a1bbd8f5f5efe1d3002a22fb34ad471f6dc3ed5747d04feeac78fa114cfff86482a51819f5f89a0d66719040000",
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
      "Mon, 08 Nov 2021 02:04:21 GMT",
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
      jobId: "grouparoo-job-57-1636337013394",
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
      "2bc8fbda04f27e48d11aa5748d94900d48ab759a906d2ed42dc1049b545595ffbe8b69ba5695da4fd8bee7dc73ee8367f220f2984c0913e9be82f2e9dbbd64e48c80a629be2e0efb7df76e7b7b7f3b9e57c3adbd0e4347cf673344889aa5e8aec8a0a564557250d36dd04e4b5915b494b285895a8351ab33ec0d7bbd91d3e9f5267de429c89295c81f907da775a1a6b67dd26ea752a619d042a83697bbd777fbd0b58b52de03d7ca7e2f69a38ab23f17fd9e494eb590f96c1ba0814a4119c18e8a0c2dfc67c6ecfc7deab6a0bb768ae083e040399755ae6b5b9882cb3c1169559aac64fa4c8ccd370712b82b77115a5c66d52e8f72ba83332ba69a46faa900ebd2dfacada577b9f1d7f370b9f1a26071e5aee7edc566b55d7b817573e5faaea529cbc070ad99756e6e1e5e503f06a5456ed4c3fab9567e69d0f2e3586a024a2b6882d1c819d2ced899b0848d7832ee0d58e2006363361ad01e73f8a40ffd9801459e11352c9acbdc8911cc936ee4308745fdd118a231633cea0ee30e0c6287c18091e319792c85860ba10aa944d32172e32f43370afdadb79887ae2921a155a62f1a6375016f3d6a2c10419fd474aca342a252ddeea517bafe7c112eafdd66c22b48297f0af638e384660a104d4b6c9e86722d636c18f1e66bf702c166623f4f4145a67f9e49ddf3dac59b96bfd2431c606d579b2f09427fe9fd30764e886b9a550672680ea440cb77581bba3efe45242e699385fcdabafe6fd23cf990400939ff7a9a0836812fffb5d3e22316571f6594c63bee0e57b5082fa1d92161ca3db1879dc1a4430cb8d41f62236772ea5a9da3ce083bc8f54b45cde263a18d58a55e4118c4f17ba65bc77f822b848978040000",
    ],
    [
      "ETag",
      "Cvqq2hUZjZ8Au6U/MTT0tA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1636337013394"
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
      "51",
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf",
      "4b7d7424e060e0121ea6222e0144184fc69063ebe6745bc7dd4d8284ef6e6f221a35d1975bdbfddaf5ffdfede0392d2270619526eb0ae5f624417d678219aa2ad38a1f25150ac102d42261b2772ad7ab204950bc7686323ddb547ebcf0fa7d2654f888b9007707718a59a4c0bddf412172e4b690b22a2f96756681de96a6380f66fe64c8794e91c9278bd1c8bb180d606f1d1b23a1c5b2e6ffd1f6b0b7e08956338c516211a2d9a594f484a1f68d4c25f232c386a24a86a8a086eb1789a4aa1492a8c19546a7db6839b663dbdd66cbb6cfdb0c66140a9d52c1ec62cefb81262db2196d5825380cc83a64c1717dbe70398d6a2126f42781d3aef7fb0a480c4946cb3fb992d77d14fc173eb08303df39915355e823753dbaf57e1bc7967e8ebaf282c10f426936ea8804fe78300fbcf1d4700f07e9175b8d6a2a897d54682c6c35dbbd4ed769bebb7a49c669fe8eab65851684822fc74daac18d45a670ff0699c83f297a020000",
    ],
    [
      "ETag",
      "8+rqbTggeaz5Gri2wuIfUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:22 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, MIN(`amount`) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1636337013394",
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
      "000002ff85537b4fdb3010ff2a91f70f48a5af247d4988751058a636edd21484a6a9751c27782471b01d5885fadd777128b44302a9527abedfe3ee7c7e46f72c8fd008852c7928a9d87cf9c343d44054e1044eff9693cd54cef10fbfdb6b5f4e664b4aa2aba7d35340b08a257156a4f444f252102a47cb453311bc2cb0e0fc04844eecc149a767f64cb3dfee98e6d0029ea4693c61f93db0ef942ae4a8d5da793713ce9394e282c926e1d9eb79ebb1db2a04ff438992ad43cb16b8c8d6c7a667292758319e9f2e17504029a958d10cb3144a786346e1d743e926c3593301f023231413c2cb5c55658104e179cc92526855347a46baccbd3f68e14c9cf3c0580b4ab888562c5a1b581aab5571df30a6ae77b4c659a5b73eae8e778171e9cfa6c6ba00fb3b2ca95c1b37df1ddf310e645ccf587a9eb3088ca3b363e3ca9f2de7c6b7db7d08141851a958aecb0b7098d2aab49709baefefad2260058e7572d56ff77067d01e8671d827f1c0b4c3b84dc37010f66d6c866d32b4a8158514034f55ea9a85739e93a86f59f1d0862de9752dd3367187c4b81fdac3416c8142dc87e34168a16d033d09a6e805930597ac1e23baf1ddc05905fed23b1f078e6e23c665aa2eeae2aa26f6eb54d024803ee86b5b651907a7ea4e5c2f70fcf179e05e3bf51a4c6882c966f1008b10e3545240638133aaa898f2088686e6b3851bb8336f3c0186bedbf90e21d1e8d7f31b21d8147aca4a7fd1d8f7c7b7c0c142e0cd7f39a8a30723d8eed95de3b4d4108dd751adff582750077a798bba07917510f5d0f6f7167e0d046fa176463f978e7f8bea239fc654d09c7cbe1300d6894f9ff4ee7d01165e18d84805316c2091950911b4de4496e9565ed8d586b491060bf52e67dbe66ee49546a548339aab978eeaf7a58758a54af90a82242c90e77a5790fd07cdfc0a09df040000",
    ],
    [
      "ETag",
      "xuLyMsPaJR260FLOUecdGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1636337013394"
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
      "51",
      "5d6bc23014fd2f77afad58dbf9053ee8e65428ba750a832112d36badb64997a45311fffb6eea7083ed25b9f77c9073c819f6a988a10beb34f928519dee12342f7688509799d1741552680407d0b08494b328e81cf3b8713c8a455c6e47632e1edf0ebd1e2934df62cea07b864d8a59aca1fb7e06c17224db6a55ec49624e85dd26d3f970348c08c8656c81e9220cfb83700817e76661b92c85f9313d85b3fefc3fcbf2e2c04eae23dca042c1d1262894dc2137135b4eb3bcc8d0d5b2541c3554e28a48942c0ba6a4740971efdbaed7f49bbedfaa7bbedf09489849ce4c2a056917af940d8c342c8be481ba814f02558d5473539d9f0437aa0e76aad75aed2add6fdabbd15e2d68fca1833feee5f7ab839341fdac2455d068d3d7af4d1ea46d67a8b551253ac0197dc33835d7fdf205bf435379e3010000",
    ],
    [
      "ETag",
      "OR49xmd2xxnUduhGHcnDXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:22 GMT",
      "Server",
      "ESF",
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
      "49",
      "72",
      "82",
      "40",
      "14",
      "00",
      "d0bbf45aad088d42764154061bc4098a0dd5d5f918e6b1194ce5eeb1728df8eef0be11650cda36ecca140af48e262a280bb6b02a59dddd13d7d46f1f7352aa7b0333bb1eaa7e7427424ee5f8e09e5ecad29c93503e0bd62ea68e66900b5f3705bf1e3d990c38cffa6b1e6a34f5138387db137c0a5360f92c8e56a9f1d8079b25754dd0efd5d73a7a6bbc6475a96e1be56a0ff5ca73ec87a2e208004fdbe0389f722d50f42883b438b05ee4261c25928de78860f166a7ceb62e7d2e71ab631893c4dfb44b4eeaa1d02dc134eb5c8bd76d6e5331b60f8b9797ff0bcd108c55dc401bc6cfeda2a42833f4573feca60a9eff55a00d34e8e7172dbbfeb319040000",
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
      "Mon, 08 Nov 2021 02:04:23 GMT",
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
      jobId: "grouparoo-job-59-1636337013394",
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
      "02ff85535d4fa34014fd2b64f651db52694bdba4599b8adaa4a5bb946a76371b32335c70141864068d31fdef7b19acab31d11760e69e73cfb91f3c933b51c4644a9848ef6ba89ebedd4a468e09689ae2ad9a386efa3b1cde5d2c72ffa818574727ee6d3a9b2142342c45f332838e9275c5414d77db6e5ac9baa495941d4cd4194e3afd9133721cd7ee3bce64803c0559b212c51db26fb42ed5b4d73b68775329d30c68295497cbfcf5bef770d22b2b790b5cabde7bc91eaaa8dee7a2df33c9a916b298edb668a0565045905391a185ffcc989dbe4fdd1534efa6087e101c28e7b22e74630b5370592422ad2b93954c9f89b1f9e6836cbd95b7082d2eb33a2fa282e6706cc554d3483f95609d079bb5b5f4cf37c17a1e2e377eb45d5c7aeb7977b159edd6fed6babef402cfd2946560b8d6cc3a35271f0fa81f83d2a230ea6173dd28bf3468f9712c0d01a515b4c1c8b547b43fb6272c612e4fc6ce902536303666ee903acce693010c6206147946d4b068218bbec399ed0cfb91c362160d5c368e10c6a321d07898f0091b8f6cb23f268f95d07026542995683b44ae8365e84561b0f317f3d0332524b4cef4596bac29e0ad478d0522e8939af64d5448546adabdf4432f982fc2e595d74e780529e54fdb7b9c7142330588a615364f43b59631368cf8f3b577866033b11f87a022d33fcfa4e979e3e24dcb5fe9210eb0b1abcd9b6cc360e95f183b07c415cd6a0379683f4889966fb03674bdff8b485cd2360bf9b9f3825fa4bd0a20810a0afef534116c025ffe6b87c5472cae3eca288d67dc1dae1a115e41bb43c2947b60e3c3b1890157fa436ce00c0e5d6b723419218742bf54d42e3e16da8ad5ea1584411cbf6fbab5ff07b19f25da78040000",
    ],
    [
      "ETag",
      "s937gZT5kGCmN+n8r+27jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1636337013394"
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
      "0000000002ff8d926f4fc23010c6bfcbf9762490c19025bc188a88fc11d978650829db01c36d37da4e8384efee75221a35d137ed5dfbbbf69ea73dc0539c45e0c2325eef0a94fb8b35ea07134c511589563ce59429040b508b3593f16c304a76bd96f2ed60b9df0d5e97e95decb5db4ca87083a900f700ab18934881fb78804ca4c8652125459a2dcacc02bdcfcda21f4cfbe31ee72945261fcf8643af33ecc2d13a1746428b45c9ffa36c7eb4604bcb29ae506216a2e92597b4c550f78d4c25d23cc18aa24286a8a084cb8db5a4221792a8c22b9546ab52736cc7b69bd59a6db7ea0c26140a1d53c6eccce7fe409316c9945e5825380cc83264c1ab727c365645a51013f6c781532ffbfb0a480c49468b3fb99cdbdd087e850fece4c0774ea45464fa4cdd0cefbddf8e634b3f8fbaf682ee0f426936ea8c04fd51d70fbcd1c470f393f4ce5ea39a48621f151a0b6bd5fa65a3e954df5dbd22e334dfe36a59a005a1e0cf711b6b70572251787c0329c171217a020000",
    ],
    [
      "ETag",
      "iUKMlqG9sS3TbyqKzbmJiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:24 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, MAX(`amount`) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1636337013394",
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
      "85536d6fda3010fe2b91f7a5957809101240aa3a0a598744431b025d354de0384eea92c4a9ed30a18affbe4b525a58a556420ae77b5eeecee717b461698006c867d1734ec5eedb13f7510d518523385d36c7dbfbb6188d89335433fd6af9b8b99b4517178060054be2248b695df25c102a078b7923123ccfb0e0bc0e427553afb7cc8ed9e9587aabd3e91bc093340ea72cdd00fb51a94c0e9acd837723e23c8a29ce986c109ebc9d37b7ed6626f813254a364f2d9be0229b9f9b5ec69c60c5787ab1984301b9a4624513cc6228e19d19f8df4fa51b0c278d08c05b46282684e7a92aca0209c2d39045b92855d1e00595651efd41737b6a8f3c6d2d28e12258b160ad61a9ad56d9a6a6dd0c7f9dad7152e8adcf8be343a0fd706737da3a03fb472ca95c6bf73f6dd7d64e64268eb6701c7bee696797e7dab53b5bdc6a570fc7102830a052b1b42ccfc37e4c8bd25e2738f9786f05012b70ac922b4b3771aba7f7fdd0b748d8eb74fd50a7bedff3ad2eeef83ae91bd4087c8a81a70af59285539e76db56bb4f839e118604d87d43ef5addae455aa6aff7f436e9f7da3dab15f4d1be86fe0aa6e898c98c4b568d11ddbb13cf5e79eec2190d3dbb6c23c479acc655714513c7752a6812409ff4b52fb28c8353712713c7b3dde1c89b2ced6a0da634c264377f864508712c29a0b1c0095554dcf00086866e67f389379939c32930cabbbd3d20241afc7e792778bbac9cb22abf68e8bac307e06021f0eebf1cd4611a68bf3fb25be2382f2125be8c2afd6d95402de8e53d6a9f44c64964a2fd9f3dfc6a08de42e58cee16b6fb80aa23978654d0947cbd13002e135f3ee9c3fb022cbc30b0910a62d840220b132268b5892c295b79659b46cbd0510916ea43ae6d760f232f340a459ad054bd7654bdaf7288452a976f2048c2023913e71ab2ff0001d6989bdf040000",
    ],
    [
      "ETag",
      "V/DvW2rCDcNAtO0BVhkQOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1636337013394"
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
      "51",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "fd",
      "2f",
      "f5",
      "7523db4a3092f8c0082a71411d231a0d2165bb9b836d77b61d6421fc776f8741137c69ef3d1fe939e9816df32a6143b6ceb3af06647b95817e314308aa29b4a2abc64a01b31868919152440bcf4f9ddd5bf2f81e8dc6b3f9ebbaf5f7b7b7a450f12794820d0f2ccda148141b7e1c58254a20db6a556f49a2dbda6cd35934b99f840494981860b60882911f4cd8d13a5b44894da57f4d77c1d328facfb23c5a6c83eb10529050c56012d4123710eba929a7445917602b6c640c8a75e28ec82436b590883621f6c0b1dd011f707eedb89cdff44958602c748e15691773cac6346a5184b8a76e8c93407623d54cbb7347b0d7753013efb9fd2edd5fda3dd35ecfe31774ff825efebceab71ad4b344aaa0c0a4774e4dc668da696aad6503168b057dc343ae4ffbf11b2d92180ee3010000",
    ],
    [
      "ETag",
      "aTU2Bf0vXdKZTACNSWbyBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:24 GMT",
      "Server",
      "ESF",
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
      "02ffedd34b7282300000d0bb64ad8e220ea63b2202f2516454a29b0c842010f91810c14eef5ea7d7a8ef0eef1b8494b2a6216dc55909bec0104a70422776bd44fa35b3bd5919ed9fd643e6531cddb5c0767a2aabd66e31edd34a3d2b4c37e4fd260b1ac2b1ef22ee9a6465667a9cef93d30b1bfd15a74fa51d02ca9dc24f9ce2345811eea4f2ea3107f6676acc10458c0db7e5bacee50327c89c2630db894b240eddb60dd1986b4a93ae620feae65171b514c7fab3b654b83d8aa1a277f71c78b28f1e5622c16e5eb08b948ea52a5c8ba311afa414df92fc44370ad168b8b86c261f1fff171801d6d799600dc9dedbe70b0847e0af3e69879abdff23160a26c0cf2f782c9f8319040000",
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
      "Mon, 08 Nov 2021 02:04:24 GMT",
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
      jobId: "grouparoo-job-61-1636337013394",
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
      "4014fd2b64f6716da1d252daa4599b8a6bb32d75816a76371b320c171ca50c3283c698fef7bd0cd6d598e8133373cfb9e7dc0f9ec82d2f53322509cfef1aa81fbfdc88841c115034c7d7eaf7d7e16d995d9c8fcd1f8379cd560fec7af5309b2182b72c497755013d299a9a819c6ec37e5e8ba6a2b5103d4cd47306bd81633bb63db606b63d19224f4291ad78798bec6ba52a3935cd83763f17222f80565cf699d8bdbc9bf7c766558b1b604a9a6f254d5491e6c7a2df0ac1a8e2a29c6d4334d048a863d8515ea085ffcc3439799bbacfe9ae9f23f89e33a08c89a654ad2d4cc14499f1bca97556327d22dae6ab0309bd95b7880c268a6657c625ddc19191524563f5588171166cd6c6d23fdb04eb79b4dcf871b838f7d6f3fe62b3daaefdd0b83af702cf50342940738d9971a26f3e5e503f05a978a9d5a3f6b9557e6ed0f2fd585a024a4be882f1d872e8c0b52649968c59e6daa324b32049dc643ca27662b1c91086690214795a54b368294a2b4d8f5d2771e31150271e4e46e3d84d991b33e65296daa3d4b107647f441e6aaee094cb4a48de75885c05cbc88ba360eb2fe691a74bc86853a8d3ce585bc06b8f0a0b44d00735eddb2817a8d4b67be9475e305f44cb4baf9bf00a72ca1ec33b9c71460b0988a635364f41bd1629368cf8f3b5778a603db18b435092e99f27d2f6bc75f1aae52ff40807d8da55fa4bc22858fadfb59d03e292168d86dc770752a1e56bac0d5defff221297b4cb427e6ebde017e99e02c8a086927d3e4d04ebc0a7ffda61f1118bab8f3252e11d7787c95684d5d0ed10d7e51ed8cec8b25ca2c1b57a171b1c5b87aeb539da8cb083523d57d42d3e16da8935f20584411cbfafbbb5ff075dfe480478040000",
    ],
    [
      "ETag",
      "pZ+4knfPH7/K1ArcLwchLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1636337013394"
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
      "0002ff8d92514f83400cc7bf4b7d65c9900d95640f53a7b2b039077b3266b941c750a0787738e7b2ef6e0f751a35d197a32dbf96feffdc161eb232010f1659fa58a3dc1ca4a86f4c304555e75af1a3a2522158805aa44cfae965753d7cd1876136acbb8bf2247c16b375afc7848a575808f0b6b0cc304f1478b75b284581dc16535e17e5bcc92cd09bca14c368ea8f2f392f2831f9781604fdd360003b6bdf98082de60dff8fb6bb9d05f7b498e2122596319a5d2a49f7186bdfc854a2a8726c29aa658c0a1ab879914aaa2b21895a5c69b976cb761dd7718edab6e39c7418cc29163aa392d959c8fb81262df229ad5925b80cc82664c1cbe67ce2729634424ce88f23b7d3ecf7159018934ce67f7215afbb12fc173eb07707be73a2a0bad47bea22b8eeff368e2dfd1c75de8f063f08a5d9a83d12f9a34118f54713c3ddbd4b3fdd68541349eca34263a1ddee1c778fdcf69bab67649ce6ef785ad668412cf8725c651abca5c815ee5e017a1c83f07a020000",
    ],
    [
      "ETag",
      "IgGpOJzt2SiJu5bn9SxaUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:25 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`date`) as `date` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1636337013394",
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
      "ff85537f4fdb3010fd2a91f70f48a5cdafa64925c4ba92b14825edd21486a6a975122718d238d80ea843fdeebb24145a268154a9b1efbd7befce77cfe89e16091aa288660f15e19b2f772c421d4424cee016eb6416d88e397bd07f999bf1df916ddeaa4fa7a780a0354be075999313c12a1e13315cccbb1967558939632790e8c4d24f34cbb00c63a06a86e198c013244f27b4b807f6ad94a518f67a3bed6ec65896135c52d18dd9faf5bef7a8f74aceee482c45ef50b2072aa2f7b1e859ce622c292b4e1773305009c297648d690e16de9849f4f5307597e2753703f0238d098e635615b2b605296256a434ab7893150d9f516373ef03cddd893b0e95152731e3c992262b050b65b92cef3bca78baf0c3a3558225591dd7d7eda7f23d985e2aab12c46fb12062a55cff7003573948e2f9cac2f7dd79a81c9d1d2b17c1743153beddec43c05e4284a445632ec4514e6a632ffdf3fe7fb59a802528b6c1e540b5b066ab4e94468338b58d7e94aa248aec68d0c746a4c68e49cc24221878b2cedeb070c18ac4b1078eae6a563fb2758b987d5bb3b441929889e144714a0c474d9328eda36d073d712ac939152513b46d22ba0ebcd05d86c1c21f8f42b72923c5552ecf5b737511fb3e251409a00feadad651ca40a97e11cf0fdd60340ebd2bb71d8209c970bc993fc018a4381704d098e33591845fb2049a8666d3b9177a537f340146f3b2b31d42a0e1efe73742b8299b2ecbe61f8d826074031ccc39debc8b810fcb44dbed9edc15ceab06d2e09b539bffb10d200d6a793be90727f3e064a1ed9f2dfc3a0836a155463f176e7083daab80a4849322fe7c2600dc043e5de8dd760116f60b648484334c602c6a9198937612e9ba29e5856df51dcd400d98cbf7314b35f45dcbeb1c7546b226857ca9a8ddaea68975a812af2008c200f99e7f01d17fb611af8add040000",
    ],
    [
      "ETag",
      "a2ePR894Pq2X4yCzA84h0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-62-1636337013394"
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
      "4f",
      "c2",
      "40",
      "10",
      "fd",
      "2f",
      "e3",
      "b5",
      "8d85851a9b7028a6511240ad72d110b2b44329b49db2bb5509e1bf335b0cd178f1b23bf33eb2efed01b679954200cb3cdb35a8f657199a673bc4a89bc268be6aaa3482036864c6cad08bde26c35dee85fee366228aaff5f5a81f0e06acd0c91a4b09c101563916a986e0fd00952c916d8b45bd6589d9d7761b4d5fa3fb2866a0a4d402d3d9781c0ec7111c9d8b259506ff65991f1dd8d032c6152aac12b4096a451b4cccc896d3b2ac0b7435352a410dadb82532454d2d1591cb88eb77dd8e2f7c216ebc8e10b73d161694489353c5dad90b6703434616317d7237102c50edc83557edf9c170b7ed60a77e1bed27d7b970fe1faef7db37ff7e6cb837a89f1471728d36b4772e7047b614ff506054830e24927fff2137e7fd7802a8bf2518da010000",
    ],
    [
      "ETag",
      "A0EZMBqi0A6OjM3lxh/I5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:26 GMT",
      "Server",
      "ESF",
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
      "000002ffedd34b7282300000d0bb64ad8ef251d21d54d1422846f1533799805152945f12409ddebd4eaf51df1dde03d02461421059642c076fe046353848067e6939ee99d77943d548bf4dfc3d3f5ce9782703dc06972fa3b4866953888c20579445b818e214ae9ce4aeadf7328629759bacd211aaac49a0f056288dbbcceb4b9c9153b99a9d3eb8aa76978b69b255b8f81cc5b636ebc7041da40ca22da31bd88a71572855d932c166e476f3789c87670f9af7cd3299e22637909dfaf374bd7f8f0cc70cf1681ad6e4dcef3c7df37da411b2fdeb295668177806c7cb6317f2d6e2337bf0f2f27f811e605dc96b26087f6ed74d087be0af3e91b7923dff3b8cd6ac063fbfc039fed719040000",
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
      "Mon, 08 Nov 2021 02:04:26 GMT",
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
      jobId: "grouparoo-job-63-1636337013394",
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
      "c87b6c939092008914ad5942d74809590969554d1332ce85ba014cb1e95455f9efbb98a66b37a97dc2f63de79e733f78267b5eecc898c43c7da8a17afa722f62724a40d1145f9df862ffcdbaf6a7ec6496efcd8793d9687e7b35992082372c49f332838e1475c5408eb79b6e5a89baa495101d4cd4b1ad4edfb66ccb72ccbe658d06c89390254b5eec917da75429c7bdde51bb9b0a9166404b2ebb4ce4afefbdc7b35e59897b604af6de4bf65045f63e16fd9a09461517c564bb4103b5842a829cf20c2dfc65eee2f3f7a9bb9ce6dd14c18f9c01654cd4856a6c610a268a84a775a5b392f133d136df1cc8c65b7ab3d06022abf3222a680ea7c68e2a1aa9a7128c8b60bd3216fec53a584dc3c5da8f36b34b6f35edced6cbedcadf1837975ee0198ac61968ae3131cef5cdc70beaef402a5e68f5b0796e945f1ab4f87f2c0d01a525b4c1c8316dda77cd519cc40e4b5c6b182726c4b11b3b436ac5261b0d60b08b81224f8b6a162d44613b348e133a8810e24483fe7014b943974500c970e8ba897b66f6c9e194fcaeb8823997a590bced10b90916a11785c1d69f4d434f9790d03a53f3d65853c05b8f0a0b44d007351d9a2817a8d4b47be1875e309d858b6baf9df01252ca9e360f38e3846612104d2b6c9e826a2576d830e24f57de1cc17a623f8e4149c63f9f49d3f3c6c59b96bfd2431c606357e92fd984c1c2ffaeed1c11d734ab35e4b13d90122ddf616de8faf00b91b8a46d1672b5f5825bd23e0590400505fb7c9a08d6814fffb5e3e22316571f65a4c23bee0e938d08aba0dd21aecb3db26d7b34b0890657eadf98635aceb16b4d8e2623e450a8978adac5c7425bb15abe823088e3f775",
      "b70e7f00d5517d4d78040000",
    ],
    [
      "ETag",
      "7bFkB3VNAc+Cmk0q+C9DYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1636337013394"
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
      "000002ff8d92514fc2400cc7bf4b7d1d113218b8c40750c4258038e60b8690632b63b0adf3ee262184ef6e6f221a35d1975bdbfddaf5ffdf1d609be411b8b04ce29712e5fe2246fd68021f55996ac58f82728560016a113389b3f5652bf396d3b5d3aa27b3ce560ffc78777dcd840ad79809700fb04a308d14b8cf07c84586dc16525a66f9a2ca2cd0fbc214a781ef8d079c6714997cfc341c767bc33e1cad736324b45854fc3fdae6470b36b4f4718512f310cd2e85a40d86da333295c88a146b8a4a19a2820aae5ec492ca4248a21a576a8e5d6b38b663dbed7ac3b6af9a0ca6140a9d50ceecd394f7034d5aa43eed5825380cc82a64c1abea7ce5721255424ce88d03a759edf7159018928c167f7205afbb16fc173eb09303df39915199eb3375377ce8fe368e2dfd1c75db0dfa3f08a5d9a8331278a3fe34e88e26869b9fa4f7f61ad54412fba8d058d8a8373badb6537f77f5868cd3fc1d57cb122d08055f8efb4483bb12a9c2e31b1cedccec7a020000",
    ],
    [
      "ETag",
      "eZh/5mIbSh650iZ8ktGRgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:27 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, MIN(`date`) as `date` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1636337013394",
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
      "000002ff85537f4fdb3010fd2a91f70f68f467da24ad845807d98844034b53109aa6d6712ec190c6c176982ad4efbe4b42a11d124891e2f3bd77efee7cf74c1e781e93318978fa58825c7fb917113922a0698ab7e9f4c10bf269b0eef68bd466a7eee4ebb935393e4604af588aae8a0c5a4a9492811acf67ed548ab2a0528816066a598356cf322dd3b4bb3dd31c0d90a7204b2e78fe80ec3bad0b35ee74b6daed548834035a70d56662f57adf79ea770a29ee8169d5d997eca08aea7c2c7a9209463517f9f17c8609940ae4025694675581afcc38fab61fbacde9aa9d22f88933a08c8932d7555a1882893ce16929eba864fc4cea34770e64e65eb8a7a1b194c0848c173c5e1a54198b45f170644c3dff6019530dcbc3eab2391a3f82cba9b12c50fa8e2a504be3e6dc0d5c632f84e71b73df7767a171707268fc0c2ee757c6f7db5d08261783d23caf530b69944195d64bf7bcf76f5611a846c5c6b9b0bb16ed39dd519444364b1c7318255d882227b287d48cba6c3480411c01459eaea2d72c9a8bbc6f45bd7ee20c7b10dbb1d5eb39c020361d06098b29eb5a232bb1a3fe68483647e4afe41aceb82a84e24d0bc94de085ee220ce6fee92474eb32125a66faac49ae2a62374f8d4522e883ba3695970b54aadec3f34337989c86deb5db8cc005a494ad678f380409cd14209a4aba020d722a626c1ab9ba9c79a177e94f2e9051bfebd516a1c8f8f7f31b215c17759775fd27932098dc22874a49d7fff9300f6b40369b1db96b9a9535a4c6d75613ffa971901ed6f266f5f7acc19e6591cd9f0d7e4704f7a05126bfe66e704b9aab00129090b3cf6702c1b5e3d375deee166271bb504669b4710299aa4498846612f9aa2ee5856dd976df243558ea773ec7e96e5b5ec5a822c20a72fd5251b35b75132b57a95e41e8c401f23dff277aff013baa6e32db040000",
    ],
    [
      "ETag",
      "gMkIRnMRy02pg7cCEA+H6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1636337013394"
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
      "516bc2301080ffcbedb585d6768e157cd0599ce064ab0a932112dbb356db2626e94627fef75de2d8060e4272b97c47ee4b4e7028ea0c22d814f9b141d9dee4a85f4c90a06a4aad6811bc56080ea06639919de9707794ad7a159f312e67cbdba7a31af57b3d2254bac38a4174826d8165a6207a3b41cd2aa4b2f55a1c08d1ad30bbf1741e8fe2841215cf4c62ba984cfa83490c67e7a724631a7f4b86fd79fc1fbf3a3bb0e79b04b728b14ed15c2f24df63aac7c64cb14a94e82adec8141558d81ee492378249ce5dcab8ddd0f5bb413708ee3c3f08ee43024b9e325df09ad8c58c1a03cd352b13fe41621010206d488e5b3bbf9bd7b10236f23a9eeb7568d81eff42fe35e45f41e135141a68f5ddc7a0d5a89e25272985c6c7bbb83d70e34b2f1769d9a00329a35f792cf4657ffe02a8c16e28f2010000",
    ],
    [
      "ETag",
      "2NDhqrysXpzEeYSY5MqsGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:28 GMT",
      "Server",
      "ESF",
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
      "000002ffedd34b7282300000d0bb64ad8ec810a0bb048a03227ee27f9349698c14810801a29ddebd4eaf51df1dde376069ca9b86aa2ae725780377367147e968261d1c882fbb6ee3768c2d6b7e76024802bdf2999d0ce5e686cce141265a2c1d6c997d943eac523b457cb412072ed77bafd92e04a4450cf10356bab321bb9d3444912a44716164d955d70792448415ff2c4f67f95efaab8c5dc26aeb19688a1632579446fb4828ed92648a13f3127f342d9df9c1d1f0826eead1b0b9220c15e989ed1f104eeded5ae490b39a5cf3ba6fc3a1ad8e8e379ee79bbd71aa771e99e0dde8e5e5ff0203c0b5cc6aded0ecb9ddb45c7700feea537597fcf91f3ffff01afcfc02f09fd39619040000",
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
      "Mon, 08 Nov 2021 02:04:28 GMT",
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
      jobId: "grouparoo-job-65-1636337013394",
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
      "02ff85536b4fa34014fd2b64f6ab2d207d27cdda54d4262d5d816a369b0d19a6171c050699a1da98fef7bd0cd6d598e82766e69e73cfb90f5ec8032fb66442629e3ed650ed7fdc8b989c105034c557482ff3d09455e06e6468ef9f9f6b555c3f4da788e00d4bd2bccca023455d3190934dd04d2b5197b412a283893a837ec71e3803c7195ab6e38c7bc89390254b5e3c20fb4ea9524e4cf3a8dd4d854833a025975d26f2b77773776a9695b807a6a4f951d24415697e2dfa33138c2a2e8ae9264003b5842a829cf20c2dfc676ee3b38fa9bb9ce6dd14c13bce803226ea4235b630051345c2d3bad259c9e485689bef0e247097ee3c3498c8eabc880a9ac389b1a58a466a5f8271e1af57c6c2bb58fbab59b8587b5130bf7257b3ee7cbddcacbcc0b8bd727dd75034ce40738da971a66f1e5e507f0b52f142ab87cd73a3fcdaa0c5e7b134049496d006a3a135a0f6c81ac7493c64c9c8e9c78905713c8a877deac4161bf7a0b78d81224f8b6a162db0669b5976dfee47c32d3851cf896934ee331a0d1dcb1ad9f69026a73d7238214f155770ce6529246f3b446efd45e846a1bff1e6b3d0d52524b4ced4796bac29e0bd47850522e88b9a0e4d940b546adabdf042d79fcdc3c58ddb4e78092965fbe011679cd04c02a26985cd5350adc4161b46bcd9ca3d47b09ed8af635092c99f17d2f4bc71f1aee56ff41007d8d855fa4b82d05f7897dace117143b35a4376ed819468f90e6b43d787bf88c4256db390eb8debff26ed930f095450b0efa789601df8f65f3b2e3e6271f551462abce3ee30d988b00ada1de2badc237b30ea8d2ca2c195fa14eb0fac63d79a1c4d46c8a150af15b58b8f85b662b57c036110c7efe96e1dfe0132fd755178040000",
    ],
    [
      "ETag",
      "egGmT/srSEUsT1yxxutnQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92614f83400c86ff4bfd284bb6b0a192f861d329189c9361626296e506653281e2dda1d996fd777b38a75113fd72b4e569e9fb721b78caca045c98678be71ae5ea6081fad60421aa3ad78a1f15950ac102d462c1e47abc2e44783548ef9f0e3d2fbbf42649b07c3d3d6542c58f58087037906698270adc870d94a2406e8b29af8b72d66416e855658a9328f447979c1794987c741704fd413084adb56f4c8416b386ff47db746bc192e621a628b18cd1ec52495a62ac7d235389a2cab1a5a896312a68e0e6c542525d0949d4e24acbe9b53a8eedd8f651bb63db275d06738a85cea864f66ec2fb81262df2905e5925380cc82664c16973be70394b1a2126f44791d36df6fb0a488c4926b33fb98ad77d14fc173eb09d03df3951505dea3d7511dcf47f1bc7967e8e3aef47c31f84d26cd41e89fcebe124ea5f8f0d37dd491fac34aab124f651a1b1b0d3ee1ef78e9cf6bbab67649ce6efb85ad668412cf8727899063715b9c2ed1b0c01267d7a020000",
    ],
    [
      "ETag",
      "zPzmaRJBfXk+HHiGHSdLjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:29 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, MAX(`date`) as `date` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1636337013394",
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
      "000002ff85537f4fdb3010fd2a91f70f48fd9192366d2a21d641c6824a0a490a43d3d43a8e13dca671b09d6e15ea77df25a1d00e09a448f1f9debb7777be7b464b9645688842963c15546cbe2c78881a882a9cc0adb27a5717b1b9e8affde82fb7167eda5d5edd9e9e0282952c8957794a9b92178250399cfaad44f022c782f326046a9a66b3631aa661f4f58e61585de0499ac663962d81fda8542e87edf64ebb95709ea414e74cb6085fbddeb7d727ed5cf005254ab60f25dba022db1f8b9ea59c60c578763af52181425231a32bcc5248e18d19855f0f43b7185eb51200af19a198105e64aa4c0b42109ec52c294415150d9f5195e6de01f9f6d83e0fb4b9a0848b68c6a2b986a5369be5cb86763dfa79348fb0a2f3e3f2b23e6adfbdc9b536cf41fa114b2ae7dafd0fdbb3b583108eab4d5dd7f603ede8ec58bbf426d31beddbc33e04928ba8542cab520b7098d232ad97ee39efdfac2460058ab573d6d74ddc19e85618877d120f8c5e18eb340c0761bf878d5027569776a39062e0a9327ac5c219cf22d30c49bf1776fb839301e94596d5a131a063cbecc011a2e991a9c7146d1be88f608a5e309973c9ea16a27bcf09ec59e04dddf351605765c4b848d5459d5c59c47e9e0a8a04d007756d4b2fe3a054be87e306b6373a0f9c3bbb1e81314d30d9f84f3004314e2505341678451515d73c82a6a19b89ef04cec41d8d8151bdebcd0e21d1f0d7f31b21d8e4559755f54723cf1b3d00070b8137fff9200fb38bb6db3db93b9c1615a4c257561d7f5d3b50076a79b34e0eacee8165a2edef2d7c0d047b502ba3dba9ed3da0facaa3311534239fcf04802bc7a7ebbcdb2dc0c276818c5460c30412598a1041eb4964abaa9417b669198301aac042bdf3f5f4deaee5658c32225dd14cbd5454ef56d5c4d255c857103861805cc7bd04ef3f24b95fb5db040000",
    ],
    [
      "ETag",
      "t95JDf6j7vSdxo9jSl4kJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1636337013394"
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
      "00000002ff6d91df6f82301080ff97db2b24fc702c92f8801b99268c6ca84f8b31054e4481b2b6cc31e3ffbe2b2edb12f7d2de5dbf4bef6b4f70289b1c7c48cbe2ad43d1df14a85e7490a0ec2a25696b7923110c40c50a22a345d0a61f39c67de5ce76f1e7d3ed34381c27132264b6c39a817f826d89552ec17f3d41c36aa4b6cda63d10a2fa5667f378193e8609156a9eeb42bc8aa2601a8570367e5a72a6f0b7e5215886fff1ebb3017b9e26b845814d86fafa56f03d666aaecd24abdb0a4dc93b91a184011e0e0ac1bb9609ce4daa989e67da9eebb9ee9d65bbee784460c533a64ade10bb5ad060a0b86255c28f24062e016208c9713bacef5476068121b21ccbb41cd31e0f33fe85ec2bc8b1aea0d135646b68fd3dc7b457289f05272989dac7bab8dd73ed4b2fe72bd1a10119a35f9995ea929fbf0083792369f2010000",
    ],
    [
      "ETag",
      "LSApbxdeNyl3HhNzM5BAkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:29 GMT",
      "Server",
      "ESF",
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
      "bb",
      "64",
      "6d1d1051e90e080a050be208c8261342108a60081fc14eef5ea7d7a8ef0eef1b604268dba2ee56d21abc83092f943999db6ca36d2f79b04af5289639ac9cbac89bbab19130c28c3b6a21b9f06a876a35ec556b7ae88123abf9c24b21117868256680445384891d4da22bc49e793c6ae450de2922f2cee10dd64d6bd0c56a55199594096ffd7ef03ed7462be1f3f25ac55fa461703a9d6dbcbe1c90ef2613617df608472518a39d3238e79e9db66381d90773fdbc855cc337bef6ad12b1e86a2424b2dd62419725333743c725dc13b1f62c279dbfbcfc5f6006e8c80a4e5b543cb74bb2a2ccc05f7dd44d8c3eff6b1473cac1cf2fb203e3f619040000",
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
      "Mon, 08 Nov 2021 02:04:30 GMT",
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
      jobId: "grouparoo-job-67-1636337013394",
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
      "4014fd2b64f6d5165a68699b346b5351c9b674a554b3bbd990617ac151ca203368d4f4bfef65b0aec6449f98997bce3de77ef04c6e79b1251392f0ecae86eaf1db8d48c8110145337c7de04bd72ffce0c7c3d9d3eff1307f5ab9a979319d2282372c4977650e1d29ea8a819c6cd6ddac1275492b213a98a833743bbda13db46dd7ead9f6d8419e843c5df0e216d9d74a9572629a07ed6e264496032db9ec32b17b7d37effb6659891b604a9aef254d5491e6e7a2df73c1a8e2a2986ed668a09650c5b0a33c470bff99dbe4f87dea2ea7bb6e86e07bce803226ea4235b630051345cab3bad259c9e499689b6f0e64ed2dbc79643091d7bb222ee80e8e8c2d5534568f2518a7e16a69f8c1e92a5cce227f15c4ebf9b9b79c75e7abc56619ac8dab732ff40c45931c34d7981ac7fa16e005f5b720152fb47ad43c37ca2f0df23f8ea521a0b4843618bbd690f646d638491397a5237b90a41624c9287107d44e2c3676c0d9264091a745358b16a270ec11f47b5b2b6603bb1f3bc384c5a374e4c42eb5ec419af6fa835142f647e4a1e20a4eb82c85e46d87c855e8475e1c859b603e8b3c5d424aeb5c9db4c69a02de7a545820823ea969df44b940a5a6dd7e1079e16c1ef9975e3be10564943daeef70c629cd25209a56d83c05d5526cb16124982dbd1304eb89fd3c042599fc79264dcf1b176f5afe4a8f70808d5da5bf641d857e70a6ed1c109734af35e4be3d90122d5f636de87aff1791b8a46d1672b1f1c25fa47d0a21850a0af6f53411ac035ffe6b87c5472cae3eca488577dc1d261b115641bb435c977b60bb96dd1f100daed48798e3d887ae35399a8cb08342bd54d42e3e16da8ad5f21584411c7fa0bbb5ff07bf9a594e78040000",
    ],
    [
      "ETag",
      "wiM7InINKwGzZ96lzO7f/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1636337013394"
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
      "51",
      "4f",
      "83",
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d85b8056493640f4c5189dbd40de3835996133a64038a77876659f6ddeda14ea326fa72b4e5d7d2ff9fdbc23aaf52f0e121cf9e1a949b830cf58d09a6a89a422b7ed45429040b508b8cc960b5aed2be1e1f1e85e54b76b93a8c2edcbb60306042258f580af0b7b0ccb14815f8f75ba84489dc9650d194d5a2cd2cd09bda1467f1349a9c735e526af2c9ed68140c4721ecac7d632ab458b4fc3fdae63b0b56f430c5254aac1234bbd4925698e8c8c854a2ac0bb415353241052ddcbec82435b5904436576caf67773dc7739c5ea7eb38c72e83052542e754317b3be3fd409316c5945e5825780cc83664c1cbf67ce6729eb6424c184d62cf6df7fb0a484c48a68b3fb99ad77d14fc173eb07707be73a2a4a6d27bea6c7415fc368e2dfd1c751ac4e10f4269366a8fc4d1389cc5c1f8da70f377e9c38d46752d897d54682cec76dcfe51cfebbcb97a42c669fe8eaf65831624822fc745aec15f8a42e1ee15c407cc547a020000",
    ],
    [
      "ETag",
      "Ajknd8tM/5EmwgKj/IH4WA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:31 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1636337013394",
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
      "10",
      "fd",
      "2a",
      "91f70f48fd91366d9256aa5857028b54d292a620344dade3b8c590c6c176d82ad4efbe7342810a0652a4e47cefde7b679ff384ee5996a03e8ad9faa1a062fbed8ec7a886a8c26b581de567d3ebeeccfee9fc0d701217e1d99d7b7139180082e92a8937794aeb92178250d99fcf1a6bc18b1c0bceeb4054b7dd7acbb66ccb72cc9665f53a502769ba1ab3ec1eaa6f95ca65bfd9dc6b37d69caf538a73261b846f5ed69b8fed662ef81d254a360f259ba0229b9f8b9ea49c60c5783698cfc04021a958d00d66295878ad4ce2ef87d40d86378d35801f19a198105e644adb020ac2b3155b17a26445fd2754da7cf38166ded81b45c65250c245b260c9d2c0d2582cf2fb9a319acc83e86889379a7179ac13fbc0380b2717c6320703b75852b934ae7f7aa167184bcd30304e8c61706a1cd0fa81310f026f16194727c7c67938994f8d1f376f216038a152b1acb41be138a5daeaf38efaefcf51176005fa5572e198366eb9662f5ec50e59b956375e99348eddd8e9622b3649af433b494c31d429cd5e56e18c67c4726d17f7ccc4367bb6d9a156dc6bd3ae1dbbc436e38e439c36a1adc4256857437f0453f494c99c4b566d2bba0efdc85b44e13c180d23af6c63858b549d56e674136f7d2a6812409ff4b5d359c641499f911f445e381c45fe95578dc598ae31d9ce1e603056389514d058e00d55545cf004360d4d27333ff227c1700c15e5594ff70889fabf9e5e0ba26d5eeeb22adf5acbee94fa7bc0154e8b12f1587da05617ed76b5ff530cc3707803b25808bcfd98fe43fe125f4695c5173da4d5f651fb20ea1c4436dafddec1534370bd2a657439f7c21b542d85744505cdc8d76305e032f1e55f627f65010b971664",
      "a482188698482d4204ad86996dca569eab9d56abeda0122cd4bb5cbb63ef4f4d736846baa1997aeea8bab2e526ea54215f409084190cfce01cb2ff00e4e1ccd832050000",
    ],
    [
      "ETag",
      "CpFPW5S6H7xNadbuRFj8MQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-68-1636337013394"
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
      "ff8d90c16ec2301044ff657b4d24a2546941e250daa8202154d2c2052164cc9206e26c6a6f8a28cabf771d50cfbdd8ebf11b79c6173816d50e06b02df2af06edf92e479efb2143d794ec64aba972080120ab5cc83ea7f4a27fa26c3c4fb05e1ab33c90390d874238fd8946c1e002fb02cb9d83c1ea02953228b6cda63e0ac2e7da9f26b38ff435cd4430b4f3c26c319d3e8da629b4c19f45196a2afe9769dd0670a06d867bb45869f4196a4b07d43cf1f59c327589a1a3c66a74d0c1dd456ea9a995250a450993c7304ae2248e1f7a511cf7ef052c492b2ea81276f12ee980895599d149da412480ed4629baefd6ef4ef62d6ed3ba5ddf4ca333a37bb324091cfac77bd720cfe4c3b18466db60005ac93f8e0bbe9edb5f15227465a4010000",
    ],
    [
      "ETag",
      "9tEoDcz1RHQ6epVmmVjomw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:31 GMT",
      "Server",
      "ESF",
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
      "0000d0bb64ad0e52d4a6bb4683208a850661d830340de1233192a8d04eef5ea7d7a8ef0eef1be49432a5327d6a98002f60c84d38a1134f3e239bf38b8d6d5973717466e75570a90f3b8e785564be86fa50f4da5141df9265bb4b6492a041f82a20248c4fa2ad82a635b0e7bbd4d0987a31b6683dfdc4d0df17a61decf3dceffa3453302a1aeba0447f9ec37e1d59689c949b0d3487b7ad8b938f9af3c65096e9a5d775ed9234c5ef4b184783346ca2c7af8533afcd4b58ae7267a7842ae3526c23e45f8fb7e334c4952b49b45890155da22a7262f8b53f4f1e1efe2f3002ac9755c75456ddb73fcd201c81bffa991e24bbff472cef58077e7e013f18a87d19040000",
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
      "Mon, 08 Nov 2021 02:04:31 GMT",
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
      jobId: "grouparoo-job-69-1636337013394",
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
      "0000000002ff85535d6f9b3014fd2bc87b6d0209090991a2354b691b29211b90b6d33421630c750b98d8a65555e5bfef629aaedda4f609dbf79c7bcefde019ddb32a453394b07cdf50f1f4e58e27e80451857378bdb9fdb61f8782146b7bbbbf616e9d3a17ee623e07046b59129775417b9237825039db85fd5cf0a6c682f31e24ea396e6fe0d88e6d4fac816dbb23e0495a646b56dd03fb56a95ace4cf3a8ddcf39cf0b8a6b26fb8497afefe6c3d0ac05bfa34449f3bda4092ad2fc58f46bc109568c57f35d08061a49454c4bcc0ab0f0979926a7ef53f7192efb39801f18a19810de54aab5052908af329637426745b367a46dbe39a0d05b7bcbc820bc68ca2aae70494f8c142b1caba79a1ae7c17663acfcf36db05944abad1f87cb4b6fb3e82fb7ebddc60f8deb4b2ff00c8593826aae31374ef5cd870be8a7542a5669f5a87d6e955f1ab4fa7f2c2d01a425ed82f1c472f0606ab949964c4836b5c74966d12499269331b6138bb8233a4a138a81a745350b57bcc22eb687e980c4d6c4c9e2d178388a93c472e26c4cdc696a0fdca145d0e1043d0aa6e819933597aceb10ba0e56911747c1ce5f2e224f9790e1a650679db1b680b71e151408a00f6a3ab451c641a96df7ca8fbc60b18c56575e37e135cd31790af730e30c1792021a0b689ea262c3536818f2171bef0cc07a62df8f418966bf9e51dbf3d6c59b96bfd22318606b57e92f0aa360e55f683b47c4152e1a0d79e80ea806cbb7501bb83efc06242c699705fdd879c14fd43d0534a38256e4f3690258073efdd78e8b0f58587d90910aeeb03b44b62244d06e87982ef7c89e0ca6530769b050ffc686d6d03a76adcdd166a425add44b45dde243a19d58235f411084f1fbba5b873fb8119ff578040000",
    ],
    [
      "ETag",
      "XhBq5SrclL3OqXi9pd6G9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1636337013394"
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
      "c2",
      "40",
      "0c",
      "86",
      "ff",
      "4b",
      "fde89680c3a14bfc301494088830a3d110726cdd1c6eebbcbba984f0dfed4d45a326fae5d6764fbbbeef6e0d0f691181078b3479ac50ae7612d4972698a0aa32adf85152a1102c402d12267b2f816adf66e7cbddb3525f77da7b3717072ffed111132abcc75c80b78638c52c52e0ddada11039725b48599517f33ab340af4a539c0693fee894f39c22938fae0603bf33e8c2c6da3646428b79cdffa36db6b160498b09c628b108d1ec524a5a62a8fb46a6127999a1ada892212aa8e1fa4522a92a8524b2b962bb8776d3755cc769379a8e73d86230a350e8940a66afa6bc1f68d2229bd033ab04970159872c38aecf272ea7512dc484fd51e0b6eafdbe02124392d1fc4faee475ef05ff850fecdd81ef9cc8a92af496ea0d2efcdfc6b1a59fa34efca0fb83509a8dda22417fd89d06fe706cb8d9bbf4ce4aa31a4b621f151a0b9b8dd6c17edb6dbcb97a4cc669fe8ea765851684822fc759aac18b45a670f30a200083507a020000",
    ],
    [
      "ETag",
      "FxTs7ZlKj+HptWB72XO8xA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:32 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1636337013394",
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
      "6d",
      "6f",
      "da",
      "30",
      "10",
      "fe2b91f7a595784f4a00097514b20e89862e8456d53481e338d423c4a9ed50a18affbeb353dab26ead8484cff7dc3dcfbd384f68cdb218f550c4560f0515bb2fbf79842a882abc82dbfc72d454cecc0d47bbe6c574cd9cedd5a8f5d8ef0382e9288937794aab92178250d99bcf6a2bc18b1c0bceab90a8ea36aacdb6ddb66db7d1b4edae037192a6c984656b88be572a97bd7afdc05d5b71be4a29ce99ac11be79b9af6f5bf55cf0df9428593fa6ac038bac7f4c7a9e728215e3597f3e030185a462413798a520e135328ebe1ea7ae31bca9ad00bc658462427891292d0b52109e256c55089315f59e9091f9e68066dec41b86d65250c245bc60f1d2c2d25a2cf275c51a4ee77e78b2c41b9d7179aa1d07c3fa164cafac650e02eeb1a47269dd7ef702cf7abd5a5a7debdc1af823eb28f9d8b7e6beefcd42ebe4fcd4ba0ca6f36bebe2ee2d0464c7542a9619d1218e52aa053ff775fc7e9a3a002ba02c9d0bb7d1c6cd4ea31b25914b928e7d16250d1a459dc83dc376d4205d873a714431c4299ddd44e18c676e72d66d121846d26d77088930a6a4d3b5a36e4cf5a97106ed755ceca07d053d0aa6e888c99c4b563617dd06e3d05b84c1dc1f0e42cf9491e02255a3529c2ee2ad4e054502e883baf6dacb3830e9498dfdd00b06c3707ce395cb31a12b4c76b307588f04a792021a0bbca18a8a2b1e43d3d0f574360ec7537f30810833f1eb0342a2decfa7d78070979b2e2bf38f666130f62f8d8003e206a785816ccb031ae4a015edf795ffa71904c1e00ea8b11078f7970fca693b3afc1f14066fac52e681b28934dbc16a1d59ce91d546fb5f7bf855103cb49219fd987bc11d2aaf029a504133f2f96a01d8383efd5e1c1e2f60e1f9028d5460c32213a94988a0e542",
      "b38d29e539da6db5dd363260a1def93aadc661723a87ce48373453cf15958fd73451bb0af9020227eca16f86b8ff03aff4f3713c050000",
    ],
    [
      "ETag",
      "pGD1t4S7TDy1BOki4vMD2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-70-1636337013394"
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
      "000002ff8d90416bc2401085ffcbf4d8048c2b4a050f2ad25a44dab49e8ac8661dd3689289bb138b8affbdb3b148a1975e7667e67dc3beb767d865e51afa9064e9be467bbc4b915f7d11a3ab73767255543a840090752a64a4b6a7fdbd8d5c324dd3d3736617e391190e064238f3898586fe193619e66b07fd8f3394ba40595badaa9d207cac7c379dbf4f1e27b10c0a5afbc17c319b0d47b3095c82db8a2ea82ef95f4bcb4b005b4a62dca0c5d2a0f75059daa2e1a98fe77451e5183aaaad41070ddc08a9a5bad296289449d86b8551577595eab522a51e3a02e6643467540abb781377c0c43a8fe94bd28112c036a504dd34e741c6ed26c5a101bcb5df5a74d3da7fb4ce4d8bbcb6fc796c7464742f96c4b9436fba750d30261f8a252cdb1a03305afeff29e36b7ff906cb2bf42fdc010000",
    ],
    [
      "ETag",
      "13jzq+r1sbIggzJirUCBcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:33 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ffedd34b7282300000d0bb642d4caca0d01d481d30a2e56b759381104900413ecaa7d3bbd7e935eabbc3fb061121b46d7157e5b404ef608cde549188e8a6e89b34cdeb585606130a5f8b232aed184fae1507cb042785317e1c585ab9a4b0fd037a845e727fec5c5c48a1d6f542ae30789eac4527c4b0f6b09498d9a95639c30365c7878efc3a7004a45cf56d3f0e6629f168646b66aca173beccbdea90eed835b3abd09acc15836de038cb49bb6c3eab38449820e8ad8221afa95e5cee85c74f59bb82e5a4cd658353b6dfcf4967919e379bda1f4b631ba8e5bd6b33ae0e8af8f2f27f8119a0c38d37b4c5fcb97d21abea0cfcd5c7dd78a3cfff3a8d1ada809f5f58ddca7219040000",
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
      "Mon, 08 Nov 2021 02:04:33 GMT",
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
      jobId: "grouparoo-job-71-1636337013394",
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
      "a3",
      "40",
      "10fd57c8de575b68a9a53669cea6c5935c4b4f4a35dee5429665c05560915d34c6f47fbf61b19ec6443f959d796fde9b1f7d2677bc4cc894c43cbb6fa07efa762b62724440d10ca3d7b173fc78c17ecee3abe2eef752860d9fc3e36c8608deb2242daa1c7a5234350339dd6dfb592d9a8ad642f4b050cf19f406637b6cdb8e35b0ed9311f224e4e98a9777c8be51aa9253d33c68f73321b21c68c5659f89e2356e3e0ccdaa16b7c09434df4b9aa822cdcf45bfe78251c54539db6dd14023a18ea0a03c470bff99497cfabe749fd3a29f21f88133a08c89a654ad2d2cc14499f2aca97555327d26dae69b0fb27557ee223498c89ba28c4a5ac09191504523f5548171166cd686e79f6d82f53cf4367eb45d9cbbeb797fb159edd6fed6b83a7703d75034ce41738d9971aa5f3e3e503f01a978a9d5c336dc2abf0cc8fbb8969680d212ba64e458633a985827711a3b2c9dd8c7716a411c4f70d7d48e2d763282511203459e16d52c5a8ad2198c6c48e8301a5a8c4623b09268924e683486e120b51906529bec8fc863cd152cb9ac84e4dd84c855e0856e14063b7f310f5ddd424a9b5c2d3b636d036f3d2a6c10419ff4b46fb35ca0523b6ecf0fdd60be08bd4bb7dbf00a32ca9eb6f7b8e394e612104d6b1c9e827a2d121c18f1e76b778960bdb15f87a424d33fcfa49d79ebe2cdc85fe9212eb0b5abf42fd98681e7ffd0760e884b9a371af2d07d900a2ddf606fe87aff179178a45d1572b173836bd2850248a186927dbd4d04ebc497ffb5c3e123164f1f65a4c237de0e93ad08aba1bb21aedb3db01dfb7862110daed5879c635987a9b535da8a5040a95e3aea0e1f1bedc41af90ac224aedfd7d3daff038c17617b78040000",
    ],
    [
      "ETag",
      "Yb75wQcKAbWmkZDsTuiAew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1636337013394"
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
      "0000000002ff8d92614fc2400c86ff4bfde848c0e190257c4045254144181a35861cb73286db3aef6e2a12febbbd8968d444bfdcdaee69d7f7ddade021ce42f0611a478f05aae54e84e6d20643d44562343f72ca3482036844c4e4edfcb42f8fa62fafc14d7377b9d89b5edf665751abc58496734c05f82b98c598841afcbb156422456e9394146936293307cc32b7c55130ecf64f394f29b4797fdcebb50f7b1d583bdbc650183129f97fb4ddaf1d58d0748833549849b4bbe48a16284dd7cad422cd13ac682a94440d255cbe881415b9504415ae541ab54acd733dd76d546baedbac3398901426a68cd9f188f703434624437a6695e031a0ca9005cfcaf389cb71580ab161b71f78f572bfaf8042492a9cfcc9e5bcee5cf05ff8c0360e7ce7444a4566b6d449efa2fddb38b6f473d4713be8fc20b461a3b648d03def8c82f6f9c072f71be9874b837aa0887dd4682dac55eb07fb0daffaeeea1159a7f93bbe51053a20055f8eb3d8803f1389c6f51b21dac5f77a020000",
    ],
    [
      "ETag",
      "ZhGNcCbxzTY9+yj2bWZnVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:34 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6f9b3010fd2ac8fba795f21b0249a4a8cb12da464a490b2455354d890193ba054c6d9329aaf2dd7798a66dd6ad9590e07cefdd7b679f79468f348bd0000574f35410befbf6c002544344e20dac6e3be639efcf2ed3cc9bdc9bcbed72c244ff663804042d5902a77942ea82153c2462b0f01a1bce8a1c73c6ea50a86e75ea6d533775dd6ab575bd6f004f90249ed1ec11d8f752e662d06c1eb41b1bc63609c139158d90a5afebcd6da79973f64042299ac7924d5011cdcf45cf1216624959365c7860a01084af488a690216de9851f0fdb87483e2b4b101f096860487212b3259da821221cb62ba29b8aa8a06cf48d97cf7813c7b668f7d6dcd49c878b4a2d15ac3425badf2c79a369e2f1cff648dd3b2e2fab44c1c02eddc9d5f69eb1c0cdc6341c45abbbdb45d5b7b5b5a6b43ed4c1b3913eda8f8d4d1168e637bbe767276aa5db8f3c5b5f6e3ee3d046c4744489a29d33e0e12521a7ed9d7e9c7d32c09588264955c592d13b77bad7e10075618f7f46e10b74810f402ab8bf5a015f60d624401c1c0936575c5c219cb2cabdb8dcc76bf1b18a48ba39669b6bbc48c3a7d62b42d33ea9a1dbd15f67a1db4afa1df9c4a32a1226782569b8b6edda96faf7c77e18c47beadda887191c84965ae6ce2bd4f094d02e893bef6659632502a4f6aeaf8b63b1afbd3a55d0dc78c6c70b8f39e603c629c080268cc714a24e1572c824d43d7736fea4fe7ce68060c75e2d7078440839fcf6f047f97ab5d96ea8d3cdf9d3a17cac001b1c449a120dbea03e11cbca2fdbef6ff3223d71ddd8134e61ceffeca413ba651d2ff21a1f02aaa6c1e24dba8543b449da3c8388a4cb4ffb587a786e0a255cae86661bb77a85a72494c38c9c2af470bc02af1e5ffe27079010bd71764848418063914a548c84935d03455adbcb02d03660b2930971f72a66e1c4eaeac51562429c9e44b47d5e5559b58a60af10a8224cca1a30e71ff07762826483c050000",
    ],
    [
      "ETag",
      "v26Fr9LHmnSDh6VvVDos9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-72-1636337013394"
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
      "000002ff8d90414f83401085ffcb7885a4751b48497a1025da843415edc134a6d9c214a1c0e0ee102584ffee501bcf9e76df9b6f66dfec00e7a2c9208063917f7668fa9b1cf979ba2468bb8aad1c2d3516c101649d0b197ab8a4e4bb08c372ebd1e28d7d953ce4ab951036fdc05a4330c0a9c02ab310ec0768748dd27638b46741b86f27b5debc468f5122464dd9646c76717c17c6118cce5f8baea96bf85f4defa303251d133ca1c126c529436ba8c494d7d37a56d76d85aea5cea468e1025f0ab9a1aed586c815c7f56fddb9a73ca5fcd95ca9e542c08a52cd0535c2ee5e241d30b1ae12fa92ed6006571df68c766b48865bccae1599784fd3bb2c79d874e840aae58b9e0afed5e30f83b741c77f010000",
    ],
    [
      "ETag",
      "B6e9oRxiBBjP6o4Yt73RDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:34 GMT",
      "Server",
      "ESF",
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
      "5d",
      "4e",
      "83",
      "30",
      "00",
      "00",
      "e0",
      "bb",
      "f4",
      "792c8cc128be41b018c68fac98892f0d6baa65655028538af1ee2e5ec37d77f8be414d29538a4cbd601d7800bab6bc355def250cd04763288c0cd28b981df761e86ea01771dfea8a45eebd02aa10c26b475b2b33da9aa6b9380c115bceef7c79d2062ab963b5fcf48c8da8406289b03990335ea40cecd1bd7c96e1852f3949a4c6db64f64f872c77b8f325f12e476fc9c694567734dc602e127121c3e3ec97275d35c2abac4e992db58ba89c2a33db250c354e1fbf847102655dc121c5ce2cd26be372a1af8887afb1b6758b021acc92aeefeefe2fb0026c96cdc814696edbb78ee7adc05f7d3269c96eff03568f6c043fbf5a54fed419040000",
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
      "Mon, 08 Nov 2021 02:04:35 GMT",
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
      jobId: "grouparoo-job-73-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f771f499b6a195aa51b581556b534853109aa6c8766e82218943ec8018ea7fdf8d431908093ec5f63de79e731f792677228fc8843091dc57503e7dbb958c1c11d034c1d7b3f9427fbf1e3e9e57ce45e0fdfa3bf3e29dba984e11216a96a25991424bc9aae4a026bb6d3b296555d052ca16266a3976ab37b247b6ed747bb63d1e204f411aaf447e87ec1bad0b35e9740edaed44ca24055a08d5e6327b7def3cf43b45296f816bd5792fd94115d5f95cf4472a39d542e6d3dd160d540aca10322a52b4f09f19b193f7a9db8266ed04c10f8203e55c56b9ae6d610a2ef358245569b292c9333136df1cc8d65db9f3c0e232adb23ccc6906475644350df55301d6a9bf595b4bef74e3af67c172e385dbf94f773d6bcf37abdddadb5a573f5ddfb534652918ae35b54ecccdc30bea47a0b4c88d7a503fd7ca2f0d5a7e1c4b4d4069054d3074ba23da3bee8e59cc1c1e1fdb43167781b163e60ca9cdba7c3c8041c48022cf881a16cd654e631edb7de8879c8e5938a060876cd473c28853c6e8d0767a7d4af647e4b1141a1642155289a643e4ca5f066e18f83b6f3e0b5c53424cab542f1a6375016f3d6a2c10419fd4b4afa342a252ddeea517b8fe6c1e2c2fdd66c22b48287fdadee38c639a2a40342db1791acab58cb061c49baddd0582cdc4ce0f414526bf9f49ddf3dac59b96bfd2031c606d579b2fd906fed23b33760e884b9a5606f2d01c4881966fb03674bdff83485cd2260bb9d8b9fe35699e7c88a1849c7f3d4d049bc097ffda61f1118bab8f324ae31d7787ab5a8497d0ec9030e51ed8ced0ee75890197fa436c60f70e5dab73d41921835cbf54d42c3e16da8855ea1584411cbf67bab5ff07db1424af78040000",
    ],
    [
      "ETag",
      "GCDt+Y5wPu7QTNKzANfUsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1636337013394"
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
      "2d09a4b568132ff8139a0022942b43c8d24ea1d876eaee1682847777b6221a35d19bedccf49be99cd33dc2739247e0c12a59bf94280f576bd48f2698a22a53adf85150ae102c402dd64cce5e779d2c5a6de3ae33effb835e434d0ab1bfbb6342851bcc04784788134c2305ded311729121b785949659beac320bf4a130c55930f5c77dce338a4c3e9e0f87adf6b00727ebd218092d9615ff8fb6c5c9822dada618a3c43c44b34b21698ba1f68d4c25b222c59aa25286a8a082ab176b49652124518d2bb5a65d6bb8b66bdbcd7ac3b66f1d06530a854e2867763ee3fd409316e994f6ac125c066415b2e0b83a775c4ea24a8809fd71e03ad57e5f018921c968f92757f0ba1bc17fe1033b3bf09d131995b9be50f7c387d66fe3d8d2cf51dd56d0fb4128cd465d90c01ff566416b3431dce22cbd7dd0a82692d84785c6c246ddb9b96ebaf577573b649ce6ef785a96684128f8720c120d5e2c5285a737ce5a42f37a020000",
    ],
    [
      "ETag",
      "SzvCmdbjfD4UGIHE1sPpaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:35 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1636337013394",
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
      "15cbfbb34ab940482089547559caba681de90869574d53628c615e0133db74ebaabcfb8ea1e99a5da548c19cef76ec63eef10d2f133cc531cfbed44cde3dfb2c62dcc14c930cde666abe7ef37e3efa76550e5874fbfd2c282aebebf13120b86129525439eb2a514bcad474bdea6552d41591427441a8eb0dbbb6ebb88ee359b6e34c86c0532c4fcf797903ec4f5a576adaefefbd7b991059ce48c5558f8ae2f17dff76d0afa4f8cca856fd43cb3eb8a8febf4d4f724189e6a23c5eaf2040ad98dcb082f0dc34f8c84ce21787d23d4e8a5e06e05b4e19a154d4a536b140828a32e5592d1b553cbdc74dcc270f78e59ffbf3086d25a342261b9e6c115168b3a96e3a68be5c07d1f32d298ce2f6c814f60bf42a5cbe45db0a027c228aa92dba7aed873e42db8468b645c7e804cd82537420bc08d03a08fc55849e9f1ca1b370b9be402faf9f422072c294e66513382271ce4cd8873d5dfc7e9286403424688b1bcf72893db626711a7b341d3ba338b5581c8f636f449cd8a293211b263123c0d346bd61915294d4b3534a27ee84c49e3bb66c3b71406898b8ae37f6ac916b79493288270cef3af8abe49a9d725509c5db8dc557e122f23751b80ee6b3c86fda48499debd3369c69e2694e0d4d02e81f7ded4c950b7032a7b408223f9ccda3c5a5df0ec639cb08bd5b7d81d14849ae18a0892405d34cbe15096c1abe58ae16d16219ccce81d19cf6c51ea1f0f4c3fd4f42745735bbac9b7f7c6a1ad83d11bc2479dd006edb073cb00656d71a74ed11deed3a7f579a85e1ec1adc8994e4ee971a74e40e0dfd0f3e0dbe59b549f7be36366e8f290e56c383958b771f77f0eb60b867ad337eb7f6c36bdcbe0a59ca242be9ffa70bc04de1bf9f8bfddd05",
      "2cdc5eb0511ad630cb5419132a593bd3bc685a79607baeed8c710396fab7dac01bee0fcf68184556b0523f74d4dedd66134da9568f2028c228068be00caa3f00279b6ddc3b050000",
    ],
    [
      "ETag",
      "gsCUKXC5xWn2eTvzGNmp0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-74-1636337013394"
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
      "000002ff8d905f6bc23014c5bfcbdde35ad05594093eac9bdb8422b39bb03f88c4f6b6abb6bd59723b11e977f7a6ca9ef792dc9cfc0e392747d815750a63d814f94f83e67095232fdc10a36d4ab6b269aa2d8207c82a1772187df6f6c54778a3e9ba0c1faaec317d0f1793891036f9c64ac1f8085981656a61fc75845a5528b6f55aef04e18376a7d9fc6dfa348d45a82875c27c194577613485d6fbb3a88a9a9aff655ab51e6c6913638606eb045d066d688b09cf5c3dab2a5da26fa931095ae8e0ee2237d46865887c51fcd1c0ef0f8361108c7afd20b81d085852a2b8a05ad8e5aba4032656654c7b69077d014c374ad1ac5b7f3bd9b5b84cab767531850746fb62481258748ff7ce41eec9856309cda6410f1225fff85cf0f9dc9e0060e37d6ea4010000",
    ],
    [
      "ETag",
      "6LZ0wiYB2po+lBDmfFdXBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:36 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd34b7282300000d0bb64ad8e1fb0d01d5053044945450c9b0c0d51023402919f9ddebd4eaf51df1dde378829655292db356702bc82219eeb133a714bcd8497747676d262838895b38009c5176f196efd4f78d82099cd7b6fab4044a8c25513ee1cc831156e64c2303dee9149d5cc3b5c6777d1ef799fe11359dd14776ca5525b25760057f24ebbf5d729cd3e1a3cee7c2fd20ac5bd583147ef2ee1d57679196abb16210db1b13cda61e5364e751e44d0d689950445651cb9b628748c9ae885108c1b1a75b22b8d368f50b73b04285fc864ea1746b78ec2e990a51bc79b3c3dfd5f6004585ff29a49c21fdb17aaae8fc05f7d721b4af6f86fb2b86635f8f90546ba877319040000",
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
      "Mon, 08 Nov 2021 02:04:36 GMT",
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
      jobId: "grouparoo-job-75-1636337013394",
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
      "7b5c9390928410295aa384b69112d20169354d1332e642dd12ccb0699755f9efbb98a66b37a97d01ec7bce3de77ef044ee799190098979f6b3866affe94ec4e48480a219defe86c5d08eefed1bebf3afeb707b61eefb57dee3748a08deb024dd953974a4a82b0672b20dba5925ea925642743051c71e76fa236b6459b6d9b72c67803c0979bae2c53db26f952ae5a4d73b6a773321b21c68c9659789ddcb7defe1b45756e20e9892bdb7923d5491bdf745bfe48251c54531dd0668a0965045b0a33c470b7f99497cf6367597d35d3743f0036740191375a11a5b98828922e5595de9ac64f244b4cd571f247057ee3c3498c8eb5d11157407274642158dd4be04e3dcdfac8da577bef1d7b370b9f1a2607ee9ae67ddf966b55d7b817173e9faaea1689c83e61a53e34c9f3c3ca07e0252f142ab87cd75a3fcdca0e5ff636908282da10d46b639a2fdb1e9c4696cb3746c0de3d484381ec7f6905ab1c99c010c921828f2b4a866d14214a7436a9a8ed38f06c8c347e2447430629163534cc3c6493c1a91c30979acb8820597a590bced10b9f197a11b85fed69bcf42579790d23a578bd65853c06b8f0a0b44d03b351d9a2817a8d4b47be985ae3f9b87cb6bb79df00a32caf6c14f9c714a730988a615364f41b51609368c78b3b5bb40b09ed8d53128c9e4fb13697adeb878d5f2177a88036cec2afd2641e82fbd0b6de788b8a679ad210fed0729d1f22dd686ae0f3f10894bda66215fb7aeff8db4573ea45041c13e9e268275e0c37fedb8f888c5d54719a9f08cbbc36423c22a687788eb728f6c7be4987da2c195fa37669be6f0d8b5264793117650a8e78adac5c7425bb15abe80",
      "3088e3f774b70e7f00c3af069a78040000",
    ],
    [
      "ETag",
      "zeD57bk7W3+xVTUG0y1PNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1636337013394"
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
      "000002ff8d92514f83400cc7bf4b7d85b8858d29c91e984325c1a91bbe6896e5061d3281e2dde1b22cfbeef650a751137d39daf26be9ffcfede029af52f0609967cf0dcaed5186fad60453544da1153f6aaa148205a84566c897e76220f579d0bf3f0e45b08ec6cec6df0c874ca8e4114b01de0e563916a902ef6107952891db122a9ab25ab499057a5b9be22c9e86930bce4b4a4d3eb98b227f1405b0b70e8da9d062d1f2ff689bef2d58d3728a2b9458256876a925ad31d1a191a9445917682b6a64820a5ab87d91496a6a21896caed883bedd751dd771069daee39cf6182c28113aa78ad9bb19ef079ab428a6b46195e03220db9005afdaf385cb79da0a31613889dd5ebbdf57406242325dfcc9d5bceea3e0bff081bd3bf09d132535953e50e7d1b5ffdb38b6f473d4d88f831f84d26cd40189c3ab6016fb5737869bbf4b1f6d35aa1b49eca3426361b7d33be90fdcce9bab67649ce6ef785a36684122f8725ce61abc952814ee5f011731a3ea7a020000",
    ],
    [
      "ETag",
      "bvql7rtFE5Z/IaEjLD3wAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:37 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1636337013394",
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
      "3010fd2a96f70f48fd91346d522a21d641b6656a534853109ba6d671dc6048e3603b4515ea77df25a140c70652a4c4bef7debdb3eff288ef7816e3018e78725f30b9f9742b22dcc04c930476d7896b5e990fb669dc5e4ec21f3797ed8b89951c1f0382972c455679ca9a4a14923235984d5b8914454ea4104d106a3a76d3b42ddbb21cc3b4aca32ef0144b97239edd01fb46eb5c0ddaed5dee56224492329273d5a262f5bcdf5e77dab914b78c6ad5de4fd9862caafd7ed2935450a2b9c88e675330502826e76c45780a165e9871f4795fbac5c9aa950078cd2923948a22d3a52d90a0225bf2a490952a1e3ce2cae6ab0f3c7547ee698816925121e3398f178828349fe7770d743a99f9e1c182ac4ac5c56119d82dd0d76032468b1c0cdc10c5d4025d7d770317a185d2606e818ed1091afa67684fd9f3d1ccf7dd69880e4e0ed1b760323b475fae5f43c073cc94e659e5382451ca4ab74f87eabdbdca92403458a88373c7b089d9378ea265e4d065dfea454b8345513f727ac48a0c7ad465dd38620478ba54af582413596cf61dbbd7edc531633d934676bf434c3bb6bb1dc3e88158c7a2961545046f1bf84172cdceb8ca85e2f5c9e2abc00bdd7918ccfcd361e856652c4991eab3da5c59c46b9f1a8a04d03b756dcb281790a9bc26cf0fdd60781a7a976edd19239610ba99de436f2c49aa18a089242ba6991c8b180e0d9f4fa65ee84dfce10818d5759fef100a0f7e3dbe10c24d5e9db2aede38f4c67045c3f179e56107ba246951a1d6f507ee181da369749a662f343b03d31a98dd9661183ff176dbf8bff8300886d760884849367fc5a048bb5bd2ff91b5c257abdafcce8589cb6ccf9ef656ddbd958db7bfb7f03430cc5e9d195fccdce01ad75b015b32c932fa71c301b80a7cf80bd9cd336061a2210d0c87e6d0de549549",
      "a864759bf35555ca13db711cf3085760a9dfc4fabdfeee3e4b8d5291ad58a69f2aaae7b93ac43254a8671004a13b7dcfff06d13fb1f71aa34f050000",
    ],
    [
      "ETag",
      "vgE1W1w610jVOTJhV/QO3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1636337013394"
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
      "00000002ff8d90416bc2401085ffcbf468024a24a18287da4a1582d4a88722226b9ca4d16427dd9d5444f2df3b1ba5e75e7667df7e8f7d6f6f702ef411467028f2ef06cdf529475eba2141db946c65ab495b040f90552ee4db7295af50e7c1cc46c3f56718f77a9bfe653c16c2a65f582918dd202bb03c5a186d6fa0558562dbefebb3207caddd69be584fdfa78908151d9db0d8c4f1cb249e42ebfd5954458de67f9976ad07273a2498a1419da2cb501b3a61ca7357cfaaaa2ed1b7d498142d747077911b6a6a65887c51fc28f40761100641d41f04c1f350c09252c5056961372b49074cacca842ed20e0602986e94a259b7fe74b26bf19876edee619a5c19ed87214960d13ddebf077925178e25349b063d4895fce3ace0fbb9fd0534476481a4010000",
    ],
    [
      "ETag",
      "DQSgSeng3Hs74TY6L++U0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:38 GMT",
      "Server",
      "ESF",
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
      "000002ffedd3516e82300000d0bbf4db180415d99f205474a288d4869f066b575010566c05ccee3eb36bcc7787f70429a5ac69c8bdbab21bf8005daa5b433a5cd733dbe31cb79aa30efec8c7a1bf1b173cf28f115c44c6a356c87402e3b8cfb6eb9312d74e265f731e042e6d4d2d45a5262d45b2d0e42b1c2fa9512b9340e492e925809e60853b4dfa943739249b390dd598ca33942273bb32f7aa322be9ee213576d3fc557fa636f69aca0db7fa72b6104ab6b79ca3782421ae8e087dae31acf4a688b7967770926f3eb9f497bdd1e3136e8dd332120fc4c6534f5d0b7d126f56c3b7b7ff0b0c006beb5cb086e4afedc6c4b206e0af3eb977357bfdb7592a98003fbf0e737d9e19040000",
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
      "Mon, 08 Nov 2021 02:04:38 GMT",
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
      jobId: "grouparoo-job-77-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6fda3014fd2b91f75a2034400009ad08d21515c216026d374d91e3dca46e93388d1da6aee2bfefc6295dab4aed536cdf73ee39f7234fe49ee711199390270f15948f5fee44484e08289ae06bb94faf2fe797d7bb59cf5f65f16efbf3ef8d339d4c10c16b96a45991424b8aaa6420c7db4d3b294555d0528816266ad976ab3bb00696659b5dcb1af59027218d973cbf47f6ad52851c773a47ed76224492022db86c3391bdbc77f6a79da21477c094ecbc95eca08aec7c2cfa35158c2a2ef2c97683062a09650019e5295af8cf8cc2b3b7a9db9c66ed04c17bce803226aa5cd5b630051379cc93aad459c9f889689baf0e64e32c9d996f309156591ee434831323a28a06eab100e3dc5baf8c857bbef656537fb17683cdecc2594ddbb3f572bb7237c6d585e33986a2610a9a6b4c8c337d73f182fa1148c573adeed7cfb5f2738316efc75213505a42130c6c7340bb437314c6a1cde2a1d50f6313c27018da7d6a85261bf5a017854091a745358be622b7ecc8ec46300898dd87a0c7180d68cf62011b85b46fc7f670689ae47042fe945cc19ccb4248de74885c790bdf097c6febcea6bea34b886995aa7963ac2ee0b547850522e8839a0e75940b54aadbbd707dc79bcefcc5ce6926bc8484b2c7cd03ce38a6a90444d3129ba7a05c89081b46dce9ca9923584fecfb3128c9f8d713a97b5ebb78d5f217ba8f03aced2afd251bdf5bb8dfb49d236247d34a43f6cd811468f9166b43d787df88c4256db2901f5bc7bb21cd9307319490b3cfa789601df8f45f3b2e3e6271f551462abce3ee30598bb0129a1de2badc23db1ef647a744834bf52e669f5ac7aed539ea8c9041ae9e2b6a161f0b6dc42af902c2208edfd5dd3afc0357dd2ada78040000",
    ],
    [
      "ETag",
      "rvlXKDKXVC4TMmfVUZzYEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1636337013394"
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
      "51",
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d1d09643874890f03514960e2182f1a428ead83c1b68ebb9b0609dfddde44346aa22fb7b6fbb5ebffbfdbc3262d627061912eb715caddd912f58309025455a6153f4a2a148205a8c59249ed2ffa0bffb5d774546687bd60b37d4c26ded515132a5a612ec0dd439262162b709ff650881cb92da2acca8b799d59a077a5294ec260e0df729e536c727f3a1c7add611f0ed6a931165acc6bfe1f6db383056b5a0498a0c42242b34b29698d911e18994ae465860d45958c50410dd72f9692aa5248a206571a9d4ea3e5d88e6d779a2ddbbe6c33985124744a05b3d309ef079ab4c8027a6195e03020eb900527f5f9cce534ae859870e0874ebbdeef2b20312219cfffe44a5e7725f82f7c604707be7322a7aad027ea6678effd368e2dfd1c75ed85fd1f84d26cd4090907a3fe24f44663c3cd8ed2bb3b8d6a2c897d54682c6c35db17e71da7f9ee6a8f8cd3fc1d57cb0a2d88045f8ebb54839b884ce1e10dfe7511317a020000",
    ],
    [
      "ETag",
      "tNbEbNzC06sl3TCRkqZfSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:39 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1636337013394",
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
      "7f6fda3010fd2a91f74f2b01e1670248a8a310ba4c10ba105aa16902c738d46d8853db69c52abefb2e4e69cbbab552a4e47cefdd7b679ff384ee58b2465d14b2cd7d46c5eecb2d0f5109518537b07a6e9aed493d18367f0fc2ebdd6831b91fb1ef8fbd1e2058ce92789bc6b42c79260895ddf9acb2113c4bb1e0bc0c85ca76bb5cb31a56a361576b8d46a7093c49e368cc923b60df2895caae691eb42b1bce3731c5299315c2b72febe643dd4c05bfa54449f358d20415697e2c7a16738215e3496f3e030399a46249b798c560e195b90ebf1e97ae30bcad6c00fcc008c584f02c51b92d28417812b14d267455d47d42dae69b0f3473c6ce20305682122ed64bb65e19581acb657a573206d3b9179cacf036afb83acd1387c018f9d389b14ac1c00d9654ae8ceb6f8eef18af809e7166f4bda17154daf58cb9e739b3c038393b352efce9fcd2385fbc8580e935958a25da7280c398e6769f77d57d7f9639012bf050249776d5c2b576b51346a14da276a31546551a86edd06ee14658259d266dae438a81a7f2ea9a85139ed4c3366eb76a768bd82dbb1e35c216a1368e5ab0b40eb11d59754c9b8410b42fa147c1141d329972c98aad45d7be1b38cbc09f7b837ee0e836229cc56a5898cb9b78eb53419300faa0af7d9e651c94f27372bdc0f1fb83c0bd728ad118d30d26bbd93d0c47846349018d05de5245c584af61d3d0e574e606eed4eb8f81a1cffbf28090a8fbf3e99510ec52bdcb4abfd1683ced0756533b3840ae709c69cc43f1816a951620f6a5ff97e9fb7e7f01d25808bcfb2b07ed589afe0f058dd75161f34511e56a87a87e14358f220bed7fede12921b8668532fa3177fc052a967c1a514113f2f9680158273efd5b1cae2e60e1f2828c5410c32013998b10418b81665bddca33dbee342d0b69b050ef7256bd7d38b9bc465e916e69a29e3b2aaeaedec43c95c9171024610e3dd7bb80ec1f65627ddf3a050000",
    ],
    [
      "ETag",
      "B//8M2TD4zCbWyFYMqFiJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1636337013394"
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
      "6bc24010fd2fd3a3091823da0a1ed48a1544dab4d243115993498c26997477a2a8f8df3b1b8bb4f4d2cbeeccfb60dfdb33ecd222821eacd3e4b3427dbc4b905fec10a0a93236729554180407905522ca7663119d1e2b7e3d517cdabc0f1a93fd6474e8f74561c20de60a7a678853cc2203bd8f33142a47b1ad56e54e247c2ced369dbf8d27e340809c220bcc17b3d960381bc3c5b959544e55c1ff322d2f0e6c691d608c1a8b106d8652d316439eda7a46e56586aea14a8768a016d744a2a92a9526720571bbf7aed7f13bbedf6d7abeffd0166146a1e2940ad12e5e251d30b1ca023a483bf045a0eb518ac6f5b917d8ab5bd8a95547fbc9b56e9cf7876bffe696df8f0d8f8ce659932437684337af0546644bb194655da103a192ff7f4af9ba5fbe006e50689bdc010000",
    ],
    [
      "ETag",
      "4+UdzDutSzofzhWA+GvGCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:39 GMT",
      "Server",
      "ESF",
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
      "c9",
      "6e",
      "82400080e17799b31090b04c6f82b20d8b1009b517026440049961d13298be7b4d5fa37ed7fffc3f415e96789ab299b4b8071f80e55bc8973ca29a6ed6974ad47ca4665e9d2c8cc824b8e59734b9a3de51b1a28611635616f68ed41c1cf88aca189eeb1a95953e77ea50145d103f9add7cb5d5c5898db351ce47276f4c510fafa736410117491dd4c8434045ded17e4951fa6d91f80e13178ed1a0106a7327d7b3fb2a4c6ce3681c7699dcf495ff6973e351566e2e47c49599a7d42a84a1b0b65ce7f934daa1986aab26217d15c4f58ba97bc51b2cd2165eb717f9b7b7ff0b6c005e6833e2296b5eb74b32841bf0b77e36338a5fffeb381ff1087e7e01f79ba11e19040000",
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
      "Mon, 08 Nov 2021 02:04:40 GMT",
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
      jobId: "grouparoo-job-79-1636337013394",
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
      "85535d6f9b3014fd2bc87b5c939092862452b446095d9112b20169b54d13b29d0b754b30c5a65b54e5bfef629aae55a5f609dbf79c7bcefde091dc89624b268489ecbe866affe95632724240d30c5ffb7594a782de2f60bff8f9f7fa33cc8697fe6c3a458468588aeeca1c3a4ad6150735d944ddac9275492b293b98a8e38e3bfda133741cd7ee3bce78803c0579ba14c51db26fb42ed5a4d73b6a773329b31c68295497cbddf37befe1b45756f216b856bdd7923d5451bdf745bfe492532d6431dd4468a0565025b0a322470bff995b76fe3a7557d05d3743f083e040399775a11b5b9882cb2215595d99ac64f2488ccd170712794b6f1e5b5ce6f5ae480aba83136b4b354df4be04eb225caf2c3fb85887ab59ecaf83249a5f7aab5977be5e6e5641645d5f7aa16769ca72305c6b6a9d9b5b8017d4df82d2a230ea71f3dc283f35c87f3b968680d20ada60e2da43da1fd963963297a723e78ca536303662ee197598cdc703186c1950e41951c3a2852c58eada7ce8403276d9281938fd41c238f41360c0783a76b1d9437238217f2aa16121542995683b44ae433ff69238dc04f359ec9912525ae77ad11a6b0a78e9516381087aa7a643131512959a76fb41ec85b379ec5f79ed84979051be8fee71c629cd15209a56d83c0dd54a6eb1612498adbc0582cdc4be1d838a4c7e3d92a6e78d8b172d7fa6c738c0c6ae365f12c5a11f7c35768e882b9ad706f2d01e4889966fb036747df88d485cd2360bf9bef1c21fa47d0a21850a0afef134116c021ffe6bc7c5472cae3eca288d77dc1dae1a115e41bb43c2947b648fecbe7b4a0cb8d26f6298fad8b5264793117650e8a78adac5c7425bb15a3d833088e30f4cb70eff0056c5128978040000",
    ],
    [
      "ETag",
      "1uSlfiaqDeyDZxW+eA6HIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1636337013394"
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
      "0002ff8d92614fc2400c86ff4bfd3a12c870c0123e80829200e21831d11072dc0a0cb775dedd2484f0dfed4d44a326fae5d6764fbbbeefee00cf7116810fcb78fd52a0da5facd1dcdb20405d2446f323a74c23388046ac99ec3f36038f7a7dcf48b7b9c3d6ecc1ab87bb769b092d37980af00fb08a318934f84f07c8448adc262929d26c51660e987d6e8bd330188c6f384f29b2f978361c76bac31e1c9d7363248c5894fc3fdae64707b6b40c70850a338976975cd116a51958995aa47982154d8592a8a184cb176b45452e1451852b9546ab52f35ccf751bd59aebb6ea0c2624858929637636e5fdc0901149403b56091e03aa0c59f0aa3c5fb91c47a5101b0ec6a1572ff7fb0a2894a4a2c59f5cceeb6e04ff850fece4c0774ea45464e64cf587779ddfc6b1a59fa3ae3b61ef07a10d1b7546c2c1a8370d3ba389e5e627e9ddbd413d51c43e6ab416d6aaf5e665c3abbebb7a45d669fe8e6f54810e48c197e33636e0af44a2f1f8068684b2317a020000",
    ],
    [
      "ETag",
      "FZ8R6oEF6tc38we9UW64Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:41 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6fda3010fd2a99f74f2bf12310080409750cb20e8d86368456689ac0711cea35c4a9ed50a18aefbe7352daa276ad84442ef7eebd77e7731ed11d4b23d443215bdfe754ecbefee521aa20aaf01ade4e7e3d50a72eb6136b11e557e7933b2b1a9957fd3e2098ae92789325b42a792e0895bdf9acb6163ccfb0e0bc0a44d5ae596dd8966d591db361594e0bea244de2094befa0fa56a94cf6eaf583766dcdf93aa13863b246f8e6f97d7ddbac6782ffa544c9fab1641d5464fd63d1b38413ac184ffbf31918c825154bbac12c010b2f9551f8ed98bac6f0a6b606f096118a09e179aab42da0203c8dd93a17052bea3da2c2e6ab07347327ee30305682122ea2258b560696c67299dd558ce174ee05272bbcd18cab539d3804c60f7f7a61ac3230708b25952be3e6a7ebbb86b1d20c5ffac69931f046c611efd833e69ee7ce02e3e4ecd438f7a7f34be3fbe235041c47542a96167e031c26547b7d1ae9f8ed41ea02acc040995c764c1b37baa613c66187c45dab1dc6260dc36ed869632b3489d3a2ad28a418ea94662faa70cad388daa4416c1a6312b6dbd8ee926ebb63c64eab1d87d8321dc769dbb613b6d1be821e045374c464c6252be78a6efc71e02e037fee0d07815bb411e33c51a3d29c6ee2b54f054d02e883bef63acb3828e9431a7b81eb0f86c1f8da2df76242d798ec66f7b019314e2405341678431515173c82a1a1cbe96c1c8ca7de600215c5615f1e1012f57e3fbe1404bbac98b22afeb596dd2af40f806b9ce405625b3ea0068c615ff93fc5c0f7070b90c542e0ddfbf4eff217f8222a2d3eeb21ad76889a4751eb28b2d1fecf1e7e1504f7ab54465773d75fa0f2954f632a684a3e5f2b0017894f3f13873b0b58b8b5202315c4b0c4446a112268b9cc6c53b4f254dd6d349b1d5480857a93b35ad6e1d4348766a41b9aaaa78eca3b5b0c51a772f90c8224eca037f6ce21fb0ff3bae96c33050000",
    ],
    [
      "ETag",
      "LKwe9/rvL3YduQGLk3dD0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-80-1636337013394"
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
      "ff8d90dd6ac2401085df657a9b8036fe54c18b2aa241114d1b282d226b9ca4d12493ee4e5aacf8eecec652da9bd29bdd993367d8f3ed090e69b1833e6cd3e4ad427dbc499057b608d054191bb94a2a0c8203c82a112753387a0edbd3c9329df5d4d3ecb31bfae16a301087895e3157d03f419c62b633d07f3941a17294b5cda63c88858fa5edfcc5e378320e44c869678545389fdf0fe763383bdf2b2aa7aae07f2dadcf0eec691b608c1a8b086d8652d31e23f62d9e517999a16ba8d2111aa8cdf520d154954a13b9a2b8770db7d9f13a9ed76d343dafd712634691e2940af1860f924ef85965017d081d7862d07529a0717dbe8b7c5b53d8aa5d47fb396bfe316bfd9eadbf1e1b1e19cd52932437684337ae0023b2502cb0ac2b742052f2ffd394affdf90283d4df42dc010000",
    ],
    [
      "ETag",
      "toUCZU5HGPiK9aXKz7UIUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:41 GMT",
      "Server",
      "ESF",
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
      "d34b7282300000d0bb646d1d4b8349ba830056829f0a4e810d83102580c00002b1d3bbd7e935eabbc3fb067192f0ae8bfabae01578073256c83c99b306ebd62557c7d5e200934a78ccf051443e76d00f1c23362e81a5335b3dd3942e7a44296219ae42f726435a998ed9bc32e8dc0db323c720c6f00a713a9e0db23ff59be24519397255a8accb434cb3a819560db71c517b70c5065a8d7576dce947bf0b9136566d294346fbb4b4860249ef3e410db958c8695b5f5d17d7e3365de6dea634b5fdd922eccb364968e79f6a226dc20b65ba8a13c6cbb575ab37a520e9fce9e9ff0233c0a746b4bc8bc463fb9b4ac80cfcd58f7ad9f0c77f9dc72d6fc1cf2fbb11458819040000",
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
      "Mon, 08 Nov 2021 02:04:42 GMT",
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
      jobId: "grouparoo-job-81-1636337013394",
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
      "536b6f9b3014fd2bc8fbda84671212295a5142d74c09e90869354d1332c650a7802936ddaa2aff7d17d374ad2ab59fb07dcfb9e7dc074fe88e55299aa184e5f72d6d1ebf1c7882ce10953887d7a5555ffd2df7df93437a98f27be6dde4a5eecde780601d4be0b22ee840f0b62154ccf6bb61def0b6c60de703483470cd8139b6c7b63d314cdb9e3ac013b4c8d6acba03f6ad94b598e9fa497b98739e1714d74c0c092f5fdef5074baf1b7ea0440afdada40e2a42ff58f46bc109968c57f3fd0e0cb48236312d312bc0c27f669a9cbf4d3d64b81ce6007e60846242785bc9ce16a420bcca58de362a2b9a3d2165f3d501edfcb5bf8834c28bb6ace20a97f44c4bb1c4b17caca976116e37da2ab8d8861b2f5a6d8378b7b8f437de70b15def37c14ebbb9f4435f933829a8e26a73ed5cdd02b8807e4a856495528fbae74ef9b941abf763e908202d681f8c27c6189bae314db2644232d71e25994193c44d26236c2706993ad449138a81a744150b57bc722723d7b28c696c3ba6193be3b115e3694a62c71c19e36c44472367828e67e84fc3245d325173c1fa0ea19b7015f97114ee838517f9aa840cb7855cf6c6ba025e7b945020803ea8e9d8451907a5aeddab20f2436f11adaefd7ec26b9a63f2b8bb871967b81014d0b881e649da6c780a0d4381b7f197005613bb3a05059afd7a425dcf3b17af5afe428f60809d5da9be681785abe09bb273425ce3a2559087fe806ab07c0bb581ebe36f40c292f659d08fbd1ffe44fd534833dad08a7c3e4d00abc0a7ffda69f1010bab0f3242c21d7687884e8434b4df21a6ca3db15dcb34a648811bf92e6699d6a96b5d8e2e232d69259f2bea171f0aedc55af10282208c3f50dd3afe03e1052e1378040000",
    ],
    [
      "ETag",
      "D2pPxmUJbjdj9oqiAWgm/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1636337013394"
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
      "514fc2400cc7bf4b7ddd02389cba8407545492890a431e8c21e7d68de96d9d773709217c777b13d1a889bedcdaeed7aeffff6e0dcf799940008f79f652a35aed65686e6d30465d4ba3f95151a9111c402332262f9ee5dd4cce749a85b81fdd9db75aba9c2d7b3d2674bcc04240b0863447996808eed7508a02b92d265917e5bcc91c30abca1627d17838bae0bca0c4e6a36918f64fc2016c9c5d63228c9837fc3fda1e360e3cd1e318535458c66877a9143d616c8656a6164525d1d554ab18353470f3225354574211b95c718f3a6ec7f77ccf3b6c773cefb8cba0a458989c4a66a713de0f0c1921c7b46495e033a09a9005a7cdf9cae53c6984d870388afc6eb3df5740614c2a99ffc955bcee42f05ff8c0b60e7ce74441756976d47978ddff6d1c5bfa39eaac1f0d7e10dab0513b241a5e0d2651ffeac6720f5be9272b83fa4611fba8d15ad869778f0e0efdf6bbaba7649de6ef0446d5e8402cf8725ce6068254488d9b37735cea187a020000",
    ],
    [
      "ETag",
      "GklVWlWsfgLe2TVF//snWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:42 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1636337013394",
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
      "547f4fdb3010fd2a99f70f486dd336fd9156aa58818c552a29a429884d53eb384e302471b09d6e15ea77dfc5a140c70652a4e47cefdd7b679ff388ee5916a2210a58fc5050b1f97cc703544354e118565b6b6a86bfbf5f6669e6b7934dd3358f49148f468060254be2344f685df242102a878b792316bcc8b1e0bc0e85ea76bbdeea593dcbea375b9635e8004fd2249ab2ec1ed8b74ae572689a3bed46cc799c509c33d9203c7d5e37d76d3317fc8e1225cd7d491354a4f9bee851c209568c67a3c51c0c14928a254d314bc0c20b330cbeec976e309c366200af19a198105e64aab4052508cf221617425745c347a46dbefa407367ea9cf8c64a50c245b864e1cac0d2582ef3fb9a71325bb8fec10aa765c5d56199d805c6576f766eac7230708b25952be3fa9be339c6cbd2caf834328e8cb17b6aec559fb8c6c2759db96f1c1c1d1a67de6c71611cdfbc8680ef904ac532eddac741424bc74f1b3b797b9c25012bd0ac92cb7eb3875b76731044419f44b6d50da2260d023be877b11534c9a0433b614031f054595db370c6b341d4b5a3a8d70bbac41a5841c7ea5bb447c3a84bdaddb015f4a32eede3816da16d0dfd124cd15326732e59b5bbe8da9bf8ced2f716eec9d877741b112e12755a992b9b78ed534193007aa7af6d99651c94caa39ab8bee38d4ffcc995534dc794c6986ce60f301f114e2405341638a58a8a731ec2a6a18bd97ce24f66ee780a0c7de4173b8444c31f8f2f047f93eb5d56fa8de6be3771cfb4811de20a278586acab0f34cec12bda6e6bff2f33f6bcf10d486321f0e6af1cb4d3eb94f47f4868bc8e2a9b3bc9162ad576517b2feaec453db4fdb985a786e0a655cae872e17837a85af2684405cdc8c7a305609df8f087b1bbbd8085fb0b3252410c834c64294204ad069aa5ba9527b6ddb6ed3ed260a1dee406037b7772658db2224d69a69e3aaa6eafdec43255c8671024610e5d7d88db3fe7bb336e3d050000",
    ],
    [
      "ETag",
      "1ve/dxZQnmnT2ly0N/Bcfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-82-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d504d6bc24010fd2fd36313aaae68153cd4225610696385d222b2c6491acd66d2dd492588ffbdb3b1949e4a2fbb33ef837d6f4f70c88a1d0c619ba51f15dafa2a457ef24384aecad9c95552e1100240d6a9285f94b9b92e97af26e1a83fe0a9c27a6c8ea391285cfc8e46c3f0044986f9cec1f0ed04853628b6cda63c8884ebd26fb3c5f3643a890430b4f3c062359fdf8de71338073f166da82af85fa6f539803d6d234cd06211a3cf505ada63cc335fcf6953e6183aaa6c8c0e1a7143a496aa525ba25090f0b613b67baaa754bfd5566ad015614eb1e68c0ad1ae96920e9858e7111da51d2811d86694a249737e0adc6e5af8a9db44fbcd75ffe03a3f5cc773ebefc7c635a37bb424c91dfad0ad4b817bf2a558cab2ad308058cbff3f647cd9cf5f9a306b60dc010000",
    ],
    [
      "ETag",
      "X3m/+pSZmftR79tG3eyBmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:43 GMT",
      "Server",
      "ESF",
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
      "0002ffedd34b7282300000d0bb642d8e0842e88ea00d44443e22ca86d110aa14910242a0d3bbd7e935eabbc3fb06274a59d324edfd9395e00d0ca7b936a5d37505d1fbc725335cadd57d25a8b3af112633b9311d992e96c64ac1d4a32ab26403e9c165849bf3433e0addd1a224247c755d1141b26e78ebf07cefa499e059a4df99ed3cf544c6a204fb92d32575e5e1f4e0c5662c9478bd2942946e472ac43eb23d77190cf96e26c2b1f1a3b8e7ae187567a5d0d5d2554d88d3bd3bf3c7b2eb2df420b6582944c16a96c3832b16e422177675e0f72ebcd7bcc3aaa16950bad9031da72f2fff179800c6ab6bcd9ae4fadc2e2d346d02feea27ed50b1e77fc44e35abc1cf2fa16757b919040000",
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
      "Mon, 08 Nov 2021 02:04:43 GMT",
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
      jobId: "grouparoo-job-83-1636337013394",
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
      "0002ff85535d4fa34014fd2b64f6716d69a516daa4599b16d7262d5d81ea9acd860cd30b8e0283cc6035a6ff7d2f83753526fac4ccdc73ee39f7836772c78b2d199398a7f735544fdf6e454c8e08289ae2ebe33a590fbfef7c737e1ddcecfcdfe6dddcbed84d2688e00d4bd2bccca023455d3190e34dd04d2b5197b412a283893a8ed5e90fada165d9bdbe658d06c89390254b5edc21fb46a9528e4df3a0dd4d854833a025975d26f2d777f3e1d82c2b710b4c49f3bda4892ad2fc5cf4472618555c14934d80066a09550439e5195af8cfdcc6a7ef537739cdbb29821f3803ca98a80bd5d8c2144c14094feb4a6725e367a26dbe3990c05dbab3d06022abf3222a680e47c6962a1aa9a7128c337fbd3216ded9da5f4dc3c5da8b82d9b9bb9a7667ebe566e505c6d5b9ebbb86a271069a6b4c8c537df3f082fa5b908a175a3d6c9e1be597062d3e8ea521a0b4843618d9bd21ed3bbd519cc4364b1ceb244e7a10c74e6c9f502beeb1d10006db1828f2b4a866d142146ce4f462d68f23361a8ea2019c38114d6c1a1d0f8139e01c3b8e0d647f4476155730e7b21492b71d2257fe2274a3d0df78b369e8ea12125a676ade1a6b0a78eb51618108faa4a67d13e502959a762fbcd0f5a7b37071e9b6135e424ad953708f334e682601d1b4c2e629a856628b0d23de74e5ce11ac27f6eb109464fce799343d6f5cbc69f92b3dc401367695fe9220f417de4f6de780b8a459ad210fed819468f9066b43d7fbbf88c4256db3908b8deb5f93f6c987042a28d8d7d344b00e7cf9af1d161fb1b8fa282315de7177986c445805ed0e715dee81ed5843db211a5ca90f31a7d73f74adc9d164841c0af55251bbf858682b56cb57100671fc9eeed6fe1f111aa8eb78040000",
    ],
    [
      "ETag",
      "xOfO6+wR/DYShwRX/kD7Qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1636337013394"
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
      "0002ff8d92dd4ec2401085df65bc2d09582cd8840b5054127e2a941b8d216b3b40a1dda9bb5b9010deddd98a68d4446fb633d36fa6734e770feb44c6e0c373b2782950edce1668ee6d30465da446f32327a9111c4023164c8ece376b7323972105af41a0a40893ab876dabc5848e969809f0f7304f308d35f88f7b9022436e8b282d32392b3307cc2eb7c54938ee0d6f39cf28b6f970daefb73bfd2e1c9c53632c8c9895fc3fda9e0e0eace8798c73542823b4bbe48a5618999e95a94596a758d154a808359470f962a1a8c88522aa70a5d2742b35cff55cb751adb9ee659dc19422611292cc4e27bc1f1832221dd3965582c7802a43163c2fcf0d9793b81462c3de30f4eae57e5f018511a978f62797f3ba4bc17fe1033b3af09d131915d29ca89bfea8fddb38b6f473d4753becfe20b461a34e48d81b7427617b1058eee928bdb333a80345eca3466b61ad5a6f5e34bceabbab57649de6eff84615e84024f872dc2506fcb948351ede0063721f2b7a020000",
    ],
    [
      "ETag",
      "O2vktFnhToPxPPrnaTiCZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:44 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1636337013394",
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
      "db",
      "30",
      "10",
      "fd",
      "57",
      "32ef1790fa9134e9a754b1523288545296a654689a5ac7758a691a07db612aa8fffb2e0e053a36882a25e77bf7de3bfbdc27b466e912f550c456f73915dbaf773c421544155ec1aab853d353e776fdf8b8b4fc99378b9d7c7c31e8f701c18a2a89375942ab92e78250d99b4e6a2bc1f30c0bceab4054ed3855ab65b76cbb6d5ab6dd75a04ed2241eb1740dd5b74a65b257afefb56b2bce5709c5199335c2372febf587463d13fc8e1225eb8792755091f58f454f124eb0623ced4f2760209754cce906b3042cbc562ea36f87d4358637b515801f18a198109ea7aab0051484a7315be542b3a2de13d236df7ca0893b7287a1b1109470b19cb3e5c2c0d298cfb375c5188ea77e78b4c09b8271715c24f681f13d185f1a8b0c0cdc6249e5c2985db8816bbc2e2d8c2f7de3c418f867c601bbe71b53df7727a17174726c9c07e3e995717af31602be97542a966ad7218e125a387ede58effd711605588166999cb7cd16b63a66378aa336893b76338a4d1a459da8ddc4766492ae439d654431d4a9825d57e194a78da8dd6e343a36b56262990d0b78ba4d0b7769846d8b9a6693b423079b0db4aba0df82297ac664c6252b7717cd022f74e76130f58783d0d56dc4384fd45969ae68e2ad4f054d02e883be76459671502a8ecaf34337180c43efda2da7634457986c27f7301f314e2405341678431515977c099b86aec6132ff4c6fe600415fac8aff608897a3f9f5e0bc26da67759e9379a8481e79f6b037bc4354e720d79283f10cec02bdaed2affa71904c1e006a4b11078fb570eda693945f93f24345e47a5cdbda4850ab57dd438889c83a88576bf76f0ab20b869a532fa3175831b542e0534a682a6e4f3d1",
      "02b04e7cfa87b1bfbd8085fb0b3252410c834c642142042d079a6d742bcfd51d071ea4c142bdcb359de6fee40a8e82916e68aa9e3b2a6fafdec42295cb171024610e7d7d88bb3f45efff603d050000",
    ],
    [
      "ETag",
      "rjtUB4hkzzd1NWIWf4uOHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-84-1636337013394"
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
      "4f",
      "c2",
      "40",
      "10fd2fe3b58dc51654120ed620a284489504630859b6d352683b7577ab01c27f77b618a2f1e26577e67d64dfdb3d6cb232862e2cb3f4bd46b53d4bd14cec10a1ae73a3f9aaa8d4080ea011292b1fa4f73a3cdfb41f55b81b84b33b6f305b05935e8f155aaeb010d0dd4392611e6be8beeda11405b26db1a8362c31dbca6ec3f14b7fd08f182828b6c0783a1add84a33e1c9c9345145497e65fa6f9c181352d234c506129d166a814ad519aa1ada74551e5e86aaa95440d8db821524575251491cb887b15b8ad8edff1fd4bafe5fbd7010b7392c26454b276facce9c0901179449fdc0e7c16a866e4a249737e307cd1b4b053bb89f6936b9db8ce1f2ef8ed9b7f3f166e0dea27459c5ca30ded1d0bdc922d65b8ac51353a2005ffff7d668efbe10b2b732b26dc010000",
    ],
    [
      "ETag",
      "Jc0YI/k5KrBzGBXF0GXh4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:44 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd34b7282300000d0bb642d8ec8cf7487081651914111ba6100d3003a7c9288244eef5ea7d7a8ef0eef09b2a24094a6acbda2067c009ecde1b4987add62e9608ceffe0c7e1eb8d9cbc9d976739da7d12c90c54d232d5fd79e77a930bd5a9b920acb3cf668b79174dcc649bde54dceae7d69b3fcbb35cdfd4eba0b3a7ad1ee11d9b232777bff9032a92fb561cd8c3d3eeb41d818fcf4d0a18b12d7c7d92310c92a11353959484e84e6edbb10b27cb1cd6933b476161fe551351c3b8e9401c5d1ad70324aa4631ad95f831a9e827c0b6be6970b6366ad2cd580974610d519a76f6fff1798003476154134ad5edb150dc209f8ab9f32dea1d7ff25ca0822e0e717afe8752419040000",
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
      "Mon, 08 Nov 2021 02:04:44 GMT",
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
      jobId: "grouparoo-job-85-1636337013394",
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
      "c8fbda3c08249048d19aa5b48d14c84648ab699a903117ea96608a4da7aeca7fdfc5345dab4aed276cdf73ee39f7c113b9e3654a6624e1f97d03f5e3975b919013028ae6f8fa6d19a697fcaf0f723a9a86173b37ba1d858bf91c11bc6549baaf0ae849d1d40ce46cb7ede7b5682a5a0bd1c3443d77dc3327d6c4b29ca16959531b79128a6ccdcb3b64df2855c9d96070d4eee742e405d08acb3e13fb97f7c1c36850d5e216989283b792035491838f45bf168251c54539df6dd14023a18e614f798116fe33d3e4f46dea3ea7fb7e8ee007ce8032269a52b5b630051365c6f3a6d659c9ec89689baf0e64ebadbd6564305134fb322ee91e4e8c942a1aabc70a8cf370e31babe07c13fa8b68b509e2edf2d2f317fde566bdf383ad717de9859ea1685280e61a73e354df02bca07e0a52f152ab47ed73abfcdca0d5fbb1b4049496d005636738a1a63b9c2659e2b0ccb5c6493684247113674cad64c8a636d8690214795a54b36829ca11b51d733436e3893d31633b1d4d62d7cd684c337b98dab64d27cc248713f2a7e60aceb8ac84e45d87c875b88abc380a77c1721179ba848c36853aeb8cb505bcf6a8b040047d50d3a18d72814a6dbb5741e4858b65b4baf2ba09af21a7ec717b8f33ce682101d1b4c6e629a87d9162c348b0f0bd3304eb897d3f062599fd7a226dcf5b17af5afe428f7080ad5da5bf641b85abe042db3922ae68d168c8437720155abec1dad0f5e137227149bb2ce4c7ce0b7f92ee29840c6a28d9e7d344b00e7cfaaf1d171fb1b8fa282315de7177986c45580ddd0e715dee91ed8e878e4334b856ef62a6631dbbd6e66833c21e4af55c51b7f8586827d6c817100671fc81eed6e11f91511abd780400",
      "00",
    ],
    [
      "ETag",
      "BCRdHizMes929RGU8Tj2RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1636337013394"
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
      "8d92514fc2400cc7bf4b7d1dc9c860c8121f50518873228c07630839b60e87db3aee6e9a49f8eef6a6a251137db9b5ddaf5dffffdd0e1ed322060f56e97a5ba1ac8fd6a86f4d304555655af1a3a4422158805aac99c4643b0aecfa6575d7777be7765df5affce0f6e48409153d602ec0db419262162bf0ee7750881cb92da2acca8b659359a0ebd21467e1741c5c729e536cf260eefb83537f087bebd0180b2d960dff8fb6c5de820dada698a0c42242b34b296983911e1b994ae465862d45958c504103372fd692aa5248a216575ac7dd56db755cc7e9d96dc7e97718cc28123aa582d9f98cf7034d5a64537a6695e032209b900527cdf9c4e5346e8498701c846ea7d9ef2b203122192fffe44a5ef741f05ff8c0de1df8ce899caa421fa80bff66f0db38b6f473d4f9201cfe209466a30e4838be1ecec2c1f5c4708b77e9a7b5463591c43e2a3416b6edce71b7e7da6fae9e91719abfe36959a10591e0cb314a357889c814ee5f01f8b8b9527a020000",
    ],
    [
      "ETag",
      "efqHN0yzbY967D0yu9KLNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:45 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1636337013394",
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
      "db",
      "36",
      "10",
      "fd",
      "2a",
      "1c",
      "fb4f0bf8876cc9b66c20c85c47eb8cb9722acb2d8261b029eaa432914595a4326481bf7b8f529cc6ebd6020224f2debdf7ee78d423bd13654a673411f9971ad4c3ab5b99d00e05c372dc2ddeaea222fc07f2f5785145d51f03350f6e3f5c5c2042d82ccd0e55015d2d6bc541cfb69b5eae645d3125651789bafeb83b18bb63d79d3803d79d7a98a7a1c856a2bcc3eccfc6547ad6ef9fb47bb9947901ac12bac7e5e179bf7f3fec574ade0237ba7f2ed94715ddffb1e865213933429617db0d1aa835a81d1c9828d0c2b7cc34f9f59cba27d8a19723f85e70609ccbba34d6165270596622af55c34a678fb4b1f9e2836e8255b088c95e01972add89744f9826bb5d75d7218bf5368c5fefd9c132eedfd8c069417e8bd6efc9be42039f9906bd279f7e0fa280907dca0cecc92f17e492ccc32b72c6bc0cc9360c834d4c5e5fbe21efa2f5f69abcbd790941cf296823cac671cc9202acdba7a62ebf3f4a9bc00c5a6883bb89336603df99265932e199ef8e92cc8124f193c988b989c3a71e7869020cf38c656fb258897de290b9130f523e4a93f124f579327107a997f97e36f21367e84d5dcf75801e3bf46f250c5c095d492ddaced24fd1320e7671b40d17f33868cac8585d98abd69c2de2a54f834522e807751d6d544854b2c7b40ce3209a2fe2e5c7a09d8c15e48c3f6cbee06c64acd08068a6d8010ca8f732c5a6d1ebf566192fd7e17c8519cd715f9f109acefe7cfc96103f544d974df3a657b680e30bc28faca81bc07dfb4187ced0e93ac3ee60448fc7ceff33cda3687e83ea4c29f6f0af185634f66cfa7fe834f866d53a3de90ea8557b7671b6f2ce56637afc",
      "eb884f87e2456b95e9876d10ddd0762b820c1494fce7d385e026f0d3ffc5e9f22216af2fca68836b9c65aead0857d0ceb43834a53c65fb23df71690356e6bbd8d4754f8767392c231ca0344f15b597b769a20dd5fa1984411cc57019bec3e857838cad803c050000",
    ],
    [
      "ETag",
      "lBLRlNzegO6CpRpK1rAEjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d504d4fc24010fd2fe3b54d800544120e4050499068850b8690653b9442dba9fba16908ff9dd9628c5e8c97dd99f7917d6f4f704c8b18fab04d937787baba49d0bef82142e3326bf82aa9300801a095092bdd4a507bdf19afeea37dafb588b7d553ae8683012b8cda632ea17f825d8a596ca0ff768242e6c8b6cda63cb2c456a5dfa6f3c5e46112319053ec81f972361b8e66133807df1699932becbf4ceb730007da46b8438d85429fa1d4744065a7be9e9179996168c86985066a714d249a5c293551c848d8eb86cdaee80a71db680a71d76661464ada940ad62e5f391d58b2328be893db816081ae472ebaabcf0f865b750b3f75ea683fb9e61f5cfb37b7fe7a6c545934cf9a38b9411fba712d30265fca7259ab1d06a024ffff636aaffbf9026740e651dc010000",
    ],
    [
      "ETag",
      "uZ3o4h5CZFRh82TdbyMmcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:46 GMT",
      "Server",
      "ESF",
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
      "59",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bbe45b1d8822d03fd954561510f12713d35481129658163bbd7b9d5ea3be3bbc6f8009a19ca37b555006dec088a13a2333a75634eb9abb321ff6ef5191269c5d74d9bcc8761c7d6aa19be271171e0ed0f72ad5c1831893bea95b4f51085b8c92b46daaf5d1ba7674cfb2c3c94edc65506c7856c6a8f63f4c2fd065d6f446bae2551909dd09a5bd982786d298eae22c7ce996af2bb00c08e9e24c272b9f25f7c084d263d1ce73536da605829887fd7e936f51698c300f5d7e63c7ead62ad0c3065f664e1806fa145e71badaada7d8d8416277a2709ebdbcfc5f6002e850672de5287b6e9f4baa3a017ff5d17dace9f3bf46714b5bf0f30b6050573c19040000",
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
      "Mon, 08 Nov 2021 02:04:46 GMT",
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
      jobId: "grouparoo-job-87-1636337013394",
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
      "5d6f9b3014fd2bc87b6d4252924022456b94d21529211b9056d53421db5ca85382293699aa2aff7d1768ba5695da276cdf73ee39f78367f2208a84cc0813d9630dd5d3b79d64e48c80a619be1e1e0f770ceca5f2c2736f675ee5a2d865d97c8e08d1b014dd9739f494ac2b0e6ab60dfb5925eb925652f63051cfb17bc38935b12c7b30b4ace908790af274258a0764df6b5daa99699eb4fb9994590eb414aacfe5fef5dd3c9c9b652577c0b532df4b9aa8a2cccf45bfe792532d6431df8668a05650c5b0a722470bff9909bb789fba2fe8be9f21f8203850ce655de8c616a6e0b2484556576d56327b26adcd370712ba2b7719195ce6f5be880bba873323a19ac6faa904e32ad8ac0dcfbfda04eb45e46dfc385c5ebbeb457fb9596dd77e68dc5ebb816b68ca7268b9c6dcb8686f3e5e503f01a545d1aa47cd73a3fcd220efe3581a024a2be882b13d98d0a13398b294d93c75ac314b07c098c3ec31b5d8804f47304a1850e4b5a22d8b16b260438091e38ce31185241e8d2669ec0c52163b3673265327990ca736399e91bf95d07029542995e83a446e032f72e328d8facb45e4b625a4b4cef56567ac29e0ad478d0522e8939a8e4d5448546adaedf9911b2c969177e376135e4146f953f888334e69ae00d1b4c2e669a8d632c186117fb1762f11dc4eece729a8c8ecf733697adeb878d3f2577a84036ceceaf64bc228f0fc1fad9d13e286e6750b39740752a2e57bac0d5d1fff201297b4cb427e6ddde08e744f01a45041c1bf9e2682dbc097ffda69f1118bab8f324ae31d7787ab468457d0ed9068cb3db19dc9b8fb5335adf487987d3e3c75adc9d164843d14faa5a26ef1b1d04eac56af200ce2f8fdb65bc77fc384037c78040000",
    ],
    [
      "ETag",
      "vqvYbe7CsIS2Ij/Flinjgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1636337013394"
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
      "51",
      "4fc2400cc7bf4b7d1dc9e670e0121e86a21227228cf8600839b602836d9d77370d217c777b13d1a889bedcdaeed7aeffff6e079bb448c08779ba7cae506e4f96a81f4c304255655af1a3a4422158805a2c990cdbce6d6bbcb19baa4cedc7f0d41926d130e8749850f10a7301fe0e1629668902ff690785c891db62caaabc98d599057a5b9ae2381af507d79ce794987c3009c3a01bf6606f1d1b13a1c5ace6ffd136dd5bb0a6f9081728b188d1ec524a5a63acfb46a612799961435125635450c3f58ba5a4aa1492a8c19546bbd5703cd773dd96edb8ee7993c18c62a1532a989d8c793fd0a44536a25756091e03b20e59f0a23e5fb89c26b51013f60791d7acf7fb0a488c4926b33fb992d75d09fe0b1fd8c181ef9cc8a92af491ba0aef83dfc6b1a59fa32e83a8f783509a8d3a2251ffae378e82bba1e1a607e9ddad463594c43e2a34163a76b37dd6f2ec77572fc838cddff1b5acd08258f0e5b84935f80b9129dcbf01e99ae1827a020000",
    ],
    [
      "ETag",
      "L81K7Sk04spi0WL21PdTPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:47 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1636337013394",
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
      "6d",
      "6f9b4810fe2bdcde9756f50b18b0b1a52875139aa34d708a71ab5c55d9cb32d08d314b77979ca2c8fffd0688d3b8bd6b254bdedd799e9967de78205b5ea66446129e7fab41deff792b12d223a0698eafb7efacf7fe6a7bfe7e9b7ad3456adebe2bdd57f9c9092278c352745715d057a2960cd46cb51ce452d4159542f4d151dff3fad6d81edbf6c4b46c7bea204f41915df2728becaf5a576a361c1e620f7221f20268c5d58089ddd3fbf06e34aca4b805a6d5f038e410a3a8e1af839e168251cd4579b25aa2805a815cc38ef202257c67a6c9eb63d7034e77831cc1779c01654cd4a56e64a10b26ca8ce7b56cbd92d90369653e3b90a57fe99fc5c6460213325df374635065acd7d5b6679c2d5661fc6243778dc7cdcbc670b8186fa3c595b1a950c057aa406d8c4f7ff9916f181ba551dcc6f8e3c43835e6e1b971e43a088d5518facbd87871fad2b88816ab6be3cdcd73088a4e41695eb692639a14d0c87dac6af0732f1b02d5a8a133ae27e6985a9e394db264c232cf7693cc8424f192894bedc46453079c34018a3cdd786f59b414250518258e9b3919056fcac074bd31b519f3a895246e06de04cf890364df23ff48aee19cab4a28de95967c8a82d85fc7d12a3c9bc77e9b4646eb429f77e29a249eebd49824827e91d7beb17281919a3e0561ec47f3b338f8e877a371093965f7cb6f381c192d14209a4aba030df24aa4583472bd580671b008e797c868fb7d7d402832fbfcf09d10df576d9575fb4fe2e00a5b34bfba6e351c401f6951b7a8bbee4046e6c8ec9ba3bee5c6d66866d933cb1998a6f937d9ef7bffef7c1e45f31b1444a5a4f73fd830c9b1d3d0ff236a8b6f6f9df8830a8b34d19e341ddd9ca3db98ecbfecf1d723b87c5d64f261e54737a47b8a20030925fbfdc021b835fcf61b725868c4e24a6318dc0ecd71bc996a823009dd98f35d9bca23db9b381397b460a97fb2b963e7d0cf",
      "c647e3117650eac78cba856e8bd8986af50442234e6718841768fd17b7641d8a50050000",
    ],
    [
      "ETag",
      "jJ1KEUkDKkd89Od0jJn5+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1636337013394"
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
      "4d4fc24010fd2fe3b54d80222209076a88925422552e1a4296ed500a6da7ee4e5524fc77668b317a315e7667de47f6bd3dc02e2b1318c02a4b5f6b34fb8b1479e686186d9db395aba2d2227880ac5251aae433dd8c3ea2e79de64e6bd4b3b3f07e351b0e4561f5060b058303ac33cc130b83970394aa40b12d97d54e24bcafdc36993e8d6fc7b10005250e98cea368144663387adf1655505df2bf4c8ba3075b5ac5b84683a54697a132b445cd1357cfaaa2cad1b7541b8d161a7143a486ea4a19225f10bfdff7dbbda0170457ad76105c77459893569c5129daf9a3a4032656794cefd20e0211986694a2ebe67c13b8d3b470d36513ed27d7fe83ebfee6165f8f857b46fb6048925b74a15be70237e44ab1946553a3075ac9ffdf657cde8f2770a07f3edc010000",
    ],
    [
      "ETag",
      "adzghAxLZkct20A6sQBMbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:47 GMT",
      "Server",
      "ESF",
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
      "00d0bb64ad0ec3c796ee8029160896a2587093410924a4048404d04eef5ea7d7a8ef0eef1be4e7331e06245a86397801d75c3557e755d03ddb6e453ad54f4fea69972a650cd7d3246d13ce4bada27e458f969d18dccf651d5aec55dfb374477a46e4218922de88435bb27a0b275dce41f9ce2fb56126f5b87606e9c98ea83eff24caced94ac7278ab581e1cc891dc4ac186ffdbe7e634f784832b4bf1178bd88706abb583bce85e716bc7155a3a40e510ac6196e1b5f6748c0588f328b423c56393d699b2f776c70cb3815b150a325fa40478f85b76cf5f0f07f8105c073477b3c207adfae19a6b9007ff591b876f8fedfc6798f7bf0f30bd04065bc19040000",
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
      "Mon, 08 Nov 2021 02:04:48 GMT",
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
      jobId: "grouparoo-job-89-1636337013394",
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
      "9b3014fd2bc87b6d0294849048d19a26748b94900d48ab759a90712ed42dc1149b4e5595ffbe8b69ba5695da276cdf73ee39f7832772c7cb1d999094e7f70dd48f5f6e454a4e08289ae36b7d7d796ede2cfce25a45e97928efaa5286f9748a08deb224dd5705f4a4686a0672b28dfa792d9a8ad642f43051cf1bf76cd7711d6764d98e331e204f4291ad787987ec1ba52a3931cda3763f17222f80565cf699d8bfbc9b0fa766558b5b604a9a6f254d5491e6c7a25f0bc1a8e2a29c6e2334d048a813d8535ea085ffcc5d7af636759fd37d3f47f003674019134da95a5b98828932e37953ebac64f244b4cd570712f92b7f1e1b4c14cdbe4c4aba87136347154dd46305c645b8591bcbe06213ae67f1721324d1fcbbbf9ef5e79bd5761d44c6d5773ff40d45d30234d7981a67fa16e005f57720152fb57adc3eb7cacf0d5abe1f4b4b4069095d3019592eb53d6b9c66e988659e334c330bd2d44b4743eaa4161b0f60b04b81224f8b6a162d453966a9c75c4613e464c9c072ed84bad920b1a865674318eec6b64d0e27e46fcd152cb8ac84e45d87c855b88cfd240eb7c17c16fbba848c36855a74c6da025e7b545820823ea8e9d046b940a5b6ddcb20f6c3d93c5e5efadd84579053f618dde38c335a484034adb1790aeab5d861c348305bfb0b04eb89fd38062599fc7e226dcf5b17af5afe428f7180ad5da5bf248ac365f04ddb39222e69d168c8437720155abec1dad0f5e10f227149bb2ce4e7d60f7f91ee29840c6a28d9e7d344b00e7cfaaf1d171fb1b8fa282315de7177986c45580ddd0e715dee91ed79cea94b34b856ef6283d3c1b16b6d8e3623eca154cf15758b8f8576628d7c016110c71fe86e1dfe01028a55d978040000",
    ],
    [
      "ETag",
      "rZVB/hDElZtSbBRskpnsRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1636337013394"
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
      "bc2d09582cd0848b2228447eb4942b43c8d20e506c3b65772b21847777b6221a35d19bedccf49be99cd33dc24b9c45e0c2325eef0a9487ab35ea2713f8a88a442b7ee49429040b508b3593b3ee78b3d93db41a7da5ecc9f5a8d7d9e7bed76e33a1c20da602dc23ac624c2205eef311329122b785941469b628330bf42137c569e00fc6f79ca714997c3c1b0ebdceb00727ebd218092d1625ff8fb6f9c9822d2d7d5ca1c42c44b34b2e698ba11e18994aa479821545850c514109972fd6928a5c48a20a572acd56a5e6d88e6d37aa35db6ed5194c28143aa6cc3830e5fd409316894f7b56090e03b20c59f0aa3c5fb91c47a510130ec681532ff7fb0a480c49468b3fb99cd7dd08fe0b1fd8d981ef9c48a9c8f485ba1b4ebcdfc6b1a59fa3ba5ed0fb4128cd465d906030ea4d036ff468b8f9597ae7a0513d4a621f151a0b6bd57af3a6e154df5dbd25e3347fc7d5b2400b42c197a31f6b70572251787a033e25844e7a020000",
    ],
    [
      "ETag",
      "UDNhhqK97Hss3O2MEBwpRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:49 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85547f4fdb3010fd2a99f70f48a54d9bfe209510eb4ab6452a294b53109ba6d671ae9d471207db61aa50bffb2e0e053a36902225e77befde3bfb9c7b72c3f3840c49ccd7b725c8cdfb5f22260d029aaeab55966f6efd4d16b4607cf9edeee3f4f7573b1b9d9c2082572c45b3228523254ac9400de7b3e65a8ab2a05288232c74e4da47edbed3779c81dd761cb78b3c05e96ac2f31b64ffd4ba50c3566ba7dd5c0bb14e81165c3599c81ed75b779d5621c52f605ab5f6255ba8a25aaf8b9ea68251cd457e329fa18152815c4046798a169e9849fc61bf7493d3acb946f01d6740191365ae2b5b5882897cc5d7a53455c9f09e189bcf3ec8cc9b78e3c85a4a6042260b9e2c2daaacc5a2b86958e3e93c880e9634ab2a2e0fabc42eb03e85d3736b59a0819f54815a5a575fbcd0b39e00ef4eac536b149c597bb5fdc09a0781378bac83d343eb73389d5f581faf9f43d075024af3dc788e689c42e5f7615bfd97875911a84613757231b0fbb47d6cbbf12a1eb0d5b1d38b5736c4f1713ce85127b699db856e1203459eaeaa1b16cd454e7b348184251d377193d8eddb94d92e8ddbbd980273edbeed400f7a830ed936c86fc9359c715508c5ebbd2557a11f798b289c07e351e4993656b44cf5596dae6ae2b94f8d4d22e895beb655960b54aa0eca0f222f1c8d23ffd2ab6763026bca36b35b9c8e154d15209a4a9a8106792e12dc3472319df9913f0d4613649803bfd82114197ebf7f22449bc2ecb2366ff269321d45fdae71b0835cd2b43498bbfa83b49b3d446c1bff2f330ac3d1354a5329e9e6af1cb6d337f47f2818bc896a9b8f8aa452db459dbda8bb17f5c9f6c7169f06c17b562b93af732fbc26f552082b9090b3b7470bc126f1e6ef627777118bb7176594c6180799a94a8449a8079a67a69507f6b1dbe9f688014bfd22e70c9cddc95535aa8a9041ae1f3aaaefaed9c42a55aa471026710e033ff88cd93fa791b8503b050000",
    ],
    [
      "ETag",
      "bcnyqIymN/eCVZvBOwQ0mA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1636337013394"
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
      "6b",
      "c2",
      "40",
      "10fd2fd36b02eaa656050f8d845610a9514f45648d93349a64d2dd4945c4ffded9584a7b29bdeccebc0ff6bdbdc031aff630825d9ebd3768ce7719f2c20d31daa6602b574d9545f0005967a21ca81ef5e7c1b4589e8e6ab58c07e17d30598cc7a2b0c91b961a461748732cf61646af17a8748962db6eeba348f85cbb6d3a5f454f512c40497b07ccd7b3d963388be0ea7d5b74494dc5ff326dae1e1c6817638a06ab045d86dad001139eba7a56977581bea5c62468a115b74466a8a9b521f205f1871dbfdb577da51e3a5da58681080b4a34e7548976bd9474c0c4ba88e924ed4089c0b4a3144ddbf343e05edbc24d411bed27d7fd830b7e739bafc7c233a37d3124c92dbad09d5b8109b9522c65d934e841a2e5ff9f73beedd74fb158585fdc010000",
    ],
    [
      "ETag",
      "832o6N4IlSwk3TSR8B54CQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:49 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd34d7282301800d0bb642d0e2a89d01d548202822845719341fcf851b040b0089ddebd4eaf51df1dde378ae2183867ede7156ee80df5d15419c763ab92359a5ed646699c1546d6545f549b070f775da30d324da3b04bd26d9a83329bdcc996acdeb36c877dada94d103d5c3b60abe1c429032cfb9d68bad6d2e2f9fc987ed944ca3b71ffe1a8c4d978fa5460d4f7717123c7e1ee5d456a5715f5fa651fd6e24d084e59404ad3708f2e1db020b121f18b98746cae9f93c8b4b8d836e6d58a0e58522f7b67954d6c70e6c1306def8747b8807699c8b2c28dee54b0a4b6c1d5c72f2fff171a21785479039ce5cfed33ac2823f4579fb57d05cfff1a440d34e8e7177f5308cf19040000",
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
      "Mon, 08 Nov 2021 02:04:49 GMT",
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
      jobId: "grouparoo-job-91-1636337013394",
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
      "00000002ff85535d4fa34014fd2b64f6d5161068a549b3765b5c9bb474a554b36e3664985e709432c80c1a63fadff732585763a24fcccc3de79e733f782677bcdc921149797edf40fdf4ed56a4e48880a239be96b3c76256abc7bbc50f7b737dbdf127cbdcbe188f11c15b96a4bbaa809e144dcd408e36eb7e5e8ba6a2b5103d4cd4f3ed9e3d70068e33b46cc7f15de44928b2052fef907da3542547a679d0eee742e405d08acb3e13bbd777f3e1d8ac6a710b4c49f3bda4892ad2fc5cf47b2118555c94e3cd1a0d3412ea0476941768e13f739b9ebe4fdde774d7cf11fcc01950c64453aad616a660a2cc78ded43a2b193d136df3cd81ac8345308d0d268a66572625ddc191b1a58a26eaa902e32c5a2d8d7978b68a969378be0a93f5f43c584efad3d562b30cd7c6d579100586a269019a6b8c8d537d0bf182fa5b908a975a3d6e9f5be59706cd3f8ea525a0b4842e980cad01b54f2c3fcdd221cb4e1c2fcd2c48d39374e85127b598ef82bb4d81224f8b6a162d4509e03a0e3ba689e57b56e2da294ba8efd949963ac7aee7794e3670c9fe883cd65cc18ccb4a48de75885c45f33848e268134e2771a04bc86853a85967ac2de0ad47850522e8939af66d940b546adb3d0fe3209a4ce3f965d04d780139654feb7b9c71460b0988a635364f41bd145b6c180927cb6086603db15f87a024a33fcfa4ed79ebe24dcb5fe9310eb0b5abf497ace3681efed4760e884b5a341af2d01d4885966fb03674bdff8b485cd22e0bb9d804d16fd23d4590410d25fb7a9a08d6812fffb5c3e22316571f65a4c23bee0e93ad08aba1db21aecb3db07dcbf28744836bf52166fbdea16b6d8e3623eca0542f15758b8f8576628d7c056110c71fea6eedff0171432c8878040000",
    ],
    [
      "ETag",
      "nDwlDrtwkLB1UZZU9AMg1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1636337013394"
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
      "02ff8d92dd4ec2401085df65bcb424adc52a4db840056d02c84ff1c610b2b60356b79dbabb5509e1dd9dad88464df4663b33fd663ae77437f0981529847097ad9e2a54eb83159ab10d26a82b69343f4a2a34820368c48ac9592f90376e14c747ddde61cb7bf4f5ab2bc7ed36133ab9c75c40b881658632d510de6ea01039725b42b2ca8b459d3960d6a52d4ee34934bce43ca7d4e6c359bfdf39eb7761ebec1b5361c4a2e6ffd136df3af04077135ca2c22241bb4ba9e801131359995ae4a5c486a64a25a8a186eb172b4555291451832b8d96d7f0023ff0fd13d7f3fd5693414989301915d68129ef07868c90137a61951030a0ea90052febf399cb595a0bb161348c8366bddf574061422a5dfcc995bceebde0bff081ed1cf8ce899caac2eca95effbaf3db38b6f473d44527eefe20b461a3f6481c0dbad3b83318596ebe937eb636a8478ad8478dd642cf6d9e1e9f04eebbabe7649de6ef844655e84022f8725c6506c2a5901ab76fc2a678f77a020000",
    ],
    [
      "ETag",
      "UF6lV0ITT2EF+91k3sx0lQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:50 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5547f4fdb3010fd2a96270468fd4169e9a0126205b211ad245d9a5055136adcc40d5e9338d80e5285fadd77760850c1d89f932ad5e77bf7decbdd258f78c5f2180ff08225f72515eb4fbff90237305524815b359d06f2f3747150f857abebde9277b27b77787a0a08a6ab24c98a9436252f4544e52098b412c1cb8208ce9b40d43c396c76fadd7eb7fbe5a0d3ed9ef4a04ed2743962f90aaaef942ae4a0ddaeb55b09e7494a49c1642be2d9f37dfbe1b05d08fe9b464ab6b725dba022db1f8b9ea53c228af1fc34988081525231a71961295878a98c175fb7a95b8c64ad04c00f2ca2248a78992b6d0b28229e2f59520ac38a078fd8d87c75c0136b645df8281434e2229eb3384444a2f9bc5835d0851b38fe5e4832cd18eeeb441da06f9e7b8dc2020cdc11496588a6579667213472a796b71702cf3e1ad93f2c748686ce25da12b01d14388e35f1d1ded93efaeeb9c1189dcf5e43c07a4c97a44cd52551c0afb4e5b83ada7a9e8a4a05a0a766db6f478c373acbb8604a3fa6edf89637bcf0ed1babeaec8826245a4feea1b74b924a0a682248461515d73ca650327627b66fbbce700415a65de31a21f1e0d7e34b81bf2ea836a8ccbfd6eaf78c7e0db8216969100fd501ef748e76f066d3f83bc9d0f3863310264290f5fb02ef2a18bc892a93b562076bb53a3adc8a7a5b511f6f6e37f06b60d8d14a19ff0c2c6f86ab2b8f2ea9a07964e43e1880019bc43f5fb57aef010b9b0f3252412c158ba416890435699f65e6519eaa4f0e8e0f8fb0010bf536d73dd69f873c7e37f3a4511a7e2a04171e95b06e3a043569bcb01c7a029f8f06cea89424d134410e4f222959a41499a540cf33406188588ef49050e8cfc6d6dc0c2a6ca073124346f57bc8347980f4fcebf3ae0e76b523e3a31adb7ff2705bb5458b5cba8e053bf60788fde83878050000",
    ],
    [
      "ETag",
      "tWWUs+Wb0pTHkM4fo1mqOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:50 GMT",
      "Server",
      "ESF",
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
      "000002ffedd35d7243400000e0bbec73188445df42466a4508b6c88bd9b00491f84bd14eefde4cafd17c77f8be0149533a0cc978afe90dbc8185082a9bb256ab684651d22b3ef1b88e99dd07140de7916ee38c17e196b3f7281c9a33d1ac4de8d89f554ea5294f72e407bca98475d74d979c2b03cb8e2ae371948c5db9afb58ec6182e627fafec31759df468cb275c406b7cc8fc680ca13fb75383bc7792cbb21404f03c66f6cd95e9811626e45c1d714dd492c19ff2d663746723ab95d0e906838fe6152973d765c13aebab8b856e53e484587027e429a510c10213e640be548f7d79f9bfc00ad0b92d7b3a24e573fb5a52d515f8ab9f8c4b4b9fff354a7ada839f5fe465422919040000",
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
      "Mon, 08 Nov 2021 02:04:51 GMT",
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
      jobId: "grouparoo-job-93-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b5c13924220448ad628215bb4403620ada66942c618ea0630c5a65557e5bfef629aae55a5f609dbf79c7bcefde0111d5895a2194a587edbd2e6e1d30d4fd019a212e7f05a79d6fa706bfd5d4f0adb5f7dfe7e38eceecbc57c0e08d6b1042eeb820e046f1b42c56c1f0ef386b7356e381f40a281630cc6966119863d1a1b8663024fd022dbb2ea00ec6b296b31d3f593f630e73c2f28ae9918125e3ebfeb77e77addf01b4aa4d05f4beaa022f4f745bf149c60c97835df8760a015b4896989590116fe33d3e4e275ea21c3e53007f01d231413c2db4a76b62005e155c6f2b65159d1ec11299b2f0e2874b7ee32d2082fdab28a2b5cd2332dc512c7f2a1a6da3ad879dac65fef026f116d767e1c2ebfb9de62b8dc6df79e1f6a57dfdcc0d5244e0aaab8da5cbb50371f2ea09f522159a5d4a3eeb9537e6ad0e6ed583a02480bda07637b64e1f174e4245962936c6a4c926c4493649ad8136c2423e298d44c138a81a744150b57bc328c646a1b781c3b764a62d3caec18631bc7c6c434a796e964d604a3e319ba6f98a42b266a2e58df2174156c22378e82bdbf5c44ae2a21c36d2157bdb1ae80971e251408a0776a3a7651c641a96bf7c68fdc60b18c36976e3fe12dcd3179086f61c6192e0405346ea07992361e4fa161c85f78ee0ac06a623f4e418166bf1f51d7f3cec58b963fd32318606757aa2f0aa360e37f55764e884b5cb40a72d71f500d96afa136707dfc034858d23e0bfab977835fa87f0a68461b5a918fa7096015f8f05f3b2d3e6061f5414648b8c3ee10d1899086f63bc454b927b6333e1f1948811bf936e6d8a7ae7539ba8cb4a4957caaa85f7c28b4176bc5330882307e5f75ebf80f6fbbaed578040000",
    ],
    [
      "ETag",
      "nM6Fkq6zF5l7ND+KkkOwmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1636337013394"
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
      "02ff8d92614fc2400c86ff4bfd3a22381cb0c40f4311970c5498898931e4dcca186cebb8bba184f0dfed4d45a326fae5d6764fbbbeef6e07abb488c185a734595728b74709ea5b134c50559956fc28a9500816a0160993ab6198f55fbaeae4b41bfbbded7a73dcbb77bcb3332654b4c05c80bb83798a59acc07dd8412172e4b688b22a2f66756681de96a6380d27fe78c8794eb1c9c77741e0f58301ecad43632cb498d5fc3fda1ef7162ce9698273945844687629252d31d2be91a9445e66d85054c90815d470fd22915495421235b8d2e8d98d96633bb6dd69b66cbbd76630a348e8940a66efa6bc1f68d2229bd033ab04870159872c785e9f1b2ea7712dc484fe3874daf57e5f018911c978f62757f2ba0bc17fe1037b77e03b2772aa0a7da02e836befb7716ce9e7a80b2f1cfc209466a30e48e88f06d3d01bdd18eef15d7a7fab51dd48621f151a0b5bcd76f7b4e334df5c3d27e3347fc7d5b2420b22c197e32ad5e0ce45a670ff0aa1d2876d7a020000",
    ],
    [
      "ETag",
      "kGTlBx8s258dI9yqv/9X6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:51 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1636337013394",
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
      "0d",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2b",
      "91",
      "27",
      "2490fa9134fd4a25c43ac858b492b23405b1696a1dc70986340eb6c356a1fef75d1c0a746c20454acef7debd77f6390fe896e5311aa188a5772515eb0f373c420d44154e61759274a83b897a6df7fb78b08e7f3be7c12c4b0f0f01c12a96c4ab22a34dc94b41a81ccd67ad54f0b2c082f326146a3adda6d5b7fbb63d302ddb76bac093344b262cbf05f6b552851cb5db5bed56ca799a515c30d9227cf5b4debeefb40bc16f2851b2bd2bd90615d97e5bf428e3042bc6f3c3f90c0c94928a055d6196818567661c7ddc2ddd6278d54a017ccf08c584f03257952d2841789eb0b414ba2a1a3d206df3c5079ab913f738349682122ee2058b970696c66251dc368ce3e9dc0ff7977855555c1e54896d607c0ea667c6b20003d75852b9342ebfb8816b1893e9a51bec3f258035f1bebac69131f64f8c1d19cf37e6beefce4263ffe8c0380da6f373e3d3d54b08341053a958aeed8738ca6865fd7187bdd7e75a11b002d93ab918987d6c0d4d274aa2014986762f4a4c1a45c368d0c3766412a74bbb714431f054555db370cef3d8225607dbb66d76acbee5247ddcb386c4ee27b1edd84ecfb1876662f730469b06fa2598a2274c165cb27a9bd165e085ee220ce6fef13874751b092e3375529bab9a78e9534193007aa3af4d95651c94aa33f3fcd00dc6c7a177e1d66332a12926ebd91d0c4a823349018d055e5145c5198f61d3d0f974e685ded41f4f80a1cffe7c8b9068f4e3e19910ae0bbdcb4abfd12c0c3cff541bd8222e70566ac87dfd81f67051eca1cda6f1ff32e320185f81341602afffca413bfd6e45ff8784c6eba8b6b995b450",
      "a5b68d3a3b517727eaa3cdcf0d3c0d0457ae5646dfe66e7085eaa5802654d09cbc3f5a00d68977ff1cdb6b0c58b8c8202315c430c844562244d07aa0d94ab7f2c8763a6677803458a857b98e39d89e5c55a3aa485734578f1dd5d7586f62952ae51308923087be3ec4cd1f3b501e8a46050000",
    ],
    [
      "ETag",
      "Lf2eELb5/EZA7ydx9PRSlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1636337013394"
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
      "00000002ff8d90414fc2401085ffcb78b44d286d3025e100a6111244ad108c8690a50cb5d076eaee142584ffee6c31c4c48b97dd9979df64dfdb23ecb2720d5d5865e9478dfa7095223fd9224653e76ce4aaa834080e20ab5448733d7d9807d49ae3fdf02b7d0d5f46ab50f77b3d214cf28e8582ee113619e66b03ddb72394aa40595b2eab9d207ca86c379a4ca3bb289641416b3b98ccc6e3fe601cc1c9b9aca882ea92ffb5b43839b0a5558c1bd45826683d549ab698f0c8c633aaa872740dd53a41030ddc08a9a6ba529ac895891b06aed7f13bbe7fd3f27c3f0c04cc29519c5129ecec59dc0113ab3ca64f4907be00ba2925e8a639f7326e3729f60d60adfdd6bc8bd6fea30517cdb3dae2e7b1c181d13c6a12e706ade9d639c02dd9502c6159d7e840a2e4ff87199ffbd33756892b8bdc010000",
    ],
    [
      "ETag",
      "s+TOW4o0WeMHxgZ9XIb9rA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:52 GMT",
      "Server",
      "ESF",
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
      "000002ffedd34b7282300000d0bb642d0c02e1d31d50a156061054523699c844f949680816edf4ee757a8dfaeef0be01294b3a8e58b096f6e005dc886acba5bc192cd73fd7d7497438d1923042c4bc406b0a38161362f37c58b10aee8374d7317a4f8faf8161ebe9161137c88dd01bcff7b517a6dd1616d24e81dd49434e6664735c5b1edff8b84af8b4b4f4d2799f7a9cd6581704297d9506b9ebed8be35637572a53af7b6de9340a415274447613625398b05d4b758cdb897e5de68f960f74c4a74f05fa56de3b7106df92b26ba4c30ac52a1921e9f3424459e07ab4bd558cede4a7a7ff0b2c009d879a3fd2d48fed1ab4ed05f8ab8fc56da08fff2e259c72f0f30b7598f29819040000",
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
      "Mon, 08 Nov 2021 02:04:52 GMT",
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
      jobId: "grouparoo-job-95-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d6f9b3014fd2bc87b5c1392908410295ab3946e9912b211d26a9a2664cc85ba054cb1691b55f9efbb98a66b55a97dc2f63de79e733f782437bc88c994443cbdada1da7fba16113921a0688aaf5fc7b65a65deea61bd179f2fabfb9c3f143fee673344f08625695e66d091a2ae18c8e96edb4d2b5197b412a283893acea8d31f5b63cbb27b7dcb7286c89390252b5edc20fb4aa9524e4df3a8dd4d854833a025975d26f2e777f36e609695b806a6a4f95ad2441569be2ffa25138c2a2e8ad96e8b066a09550839e5195af8cf8ca3d3d7a9bb9ce6dd14c1779c01654cd4856a6c610a268a84a775a5b392e923d1365f1cc8d65db98bc06022abf3222c680e27464c150dd5be04e3dcdfac8da577bef1d7f360b9f1c2ede2bbbb9e77179bd56eed6d8dcbefaeef1a8a461968ae31334ef5cdc30beac720152fb47ad03c37ca4f0d5abe1d4b434069096d30b47b63da9ff49c28896c964cac5194f4208a26913da256d463ce1086710414795a54b368210a2ba14e2f4e06616f600fc3a13d9a84933e9e281bb3888d6c486c8b1c4ec87dc5159c71590ac9db0e914b7f19b861e0efbcc53c70750909ad3375d61a6b0a78e9516181087aa7a64313e502959a762fbdc0f5e78b6079e1b6135e414ad97e7b8b334e682601d1b4c2e629a8d622c686116fbe76cf10ac27f6f3189464fae791343d6f5cbc68f9333dc001367695fe926de02fbd6fdace117141b35a43eeda0329d1f215d686ae0f7f11894bda6621bf76aeff9bb44f3e245041c13e9e268275e0c37fedb8f888c5d54719a9f08ebbc36423c22a687788eb728f6c6730194d880657ea4dcc1959c7ae35399a8c9043a19e2a6a171f0b6dc56af90cc2208edfd3dd3afc038f682f4d78040000",
    ],
    [
      "ETag",
      "B67tLlNLxMyo+WrwmixnJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1636337013394"
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
      "51",
      "4f",
      "c2400cc7bf4b7d1d111c0c59c2c350c025800ae3c910726c1d0cb775dedd5442f8eef626a251137db9b5ddaf5dffffdd1e1e933c021756c9faa944b93b5ba3be37c11455996ac58f82728560016ab166f2623b0906644b3f2ee2a17e6d25835672ee75bb4ca870839900770f718269a4c07dd8432e32e4b690d232cb97556681de15a6380ba6fe64c8794691c927f3d1c8eb8dfa70b04e8d91d06259f1ff685b1c2cd8d26a8a314acc4334bb1492b6186adfc854222b52ac292a65880a2ab87ab19654164212d5b852ebb46a0dc7766cbb5d6fd876a7c9604aa1d009e5ccce67bc1f68d2229dd20bab04870159852c38aece672e275125c484fe24709ad57e5f018921c968f92757f0ba1bc17fe1033b3af09d131995b93e5183d1adf7db38b6f473d4b517f47f104ab3512724f0c7fd59e08def0cb7384aefed34aa3b49eca3426361a3debc6cb59dfabbab57649ce6efb85a96684128f872dc241adc58a40a0f6f0870e3e97a020000",
    ],
    [
      "ETag",
      "2jNTFo3rIfpfGtx5iF5i/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:53 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1636337013394",
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
      "02ff85540d6f9b3010fd2bc853a54e4a9310272444aabaaca51b5a4a3a42d655d394186332b780a96dba4555fefb0ed3b4cd3e252438df7bf7ded9671ed02d2f123446315fdf554c6e5edd8818b510d3640dabb777973fcee8c4ebf3f3cde0224f44effa7367727c0c085eb314c9cb8c1d295149cad478316fafa5a84a228538824247ae73643bd8c178d8b53176fbc0532c4ba7bcb805f637ad4b35ee7476daedb510eb8c9192ab3615f9d37ae7bed729a5b86154abcebe64075454e7dfa22799a04473511c2fe660a0524c2e594e7806169e9949fc66bf749b93bcbd06f03da78c502aaa42d7b6a0041545cad7953455d1f801199b2f3ed0dc9b7aa791b5928c0a992c79b2b288b296cbf2b6659dce164174b822795d71f5ba4eec02eb3c9c5d58ab120c7c238aa99575f5de0b3dcb9aceaebcf0f02901aca9ffc1b34eac497066edc9f881b508026f1e598727afad77e16c7169bdbd7e09810612a6342f8cfd88c419abad3feeb0fffbb9d604a241b6492e875d87d8a3ae1ba7f190a6233c88d32e8be3513c1c101c77a9db67fd24660478baae6e58a410456253bb4730c6dd9eedd86eea90813da2d84913ec6277e0e25137c50342d0b685be4baed91957a550bcd9667415fa91b78cc245703a893cd3464aaa4c9f35e6ea265efad4d02480fed1d7b6ce72014af599f941e48593d3c8ffe4356332656b4237f33b189494648a019a489233cde4854860d3d0e56cee47fe2c984c8161cefe72875068fce5e199106d4ab3cbdabcd13c0afde09d31b0437c22596520f7cd073a20657980b6dbd6dfcb4cc270720dd2444ab2f92507ed38fd9afe070983375163732769a35a6d17f5f6a2fe5ee4a0edd72d3c2d0457ae51461f175e788d9aa590a54cb282fe7fb4006c12fffd73ecae3160e122838cd210c32053558b50c99a81e6b969e591ed62a7d743062cf56fb92176762757d7a82bb29c15fab1a3e61a9b4dac53957a024112e6303087b8fd098ad75ccd46050000",
    ],
    [
      "ETag",
      "kqPxDcAE4iFy5Mmdo2YX/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1636337013394"
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
      "6bc2401085ffcbf49a80316251f0508b54a99536ad27115993718d26997477d612c4ffded958a4d04b2fbb33f3be61dfdb331cf32a83216c73fde9d034771af9cd17095a57b095aba6ca220480acb490485abfe8a631d3de7eeb2c67cfd3aed2a3911036dd63a96078865d8e456661b83a43a54a94b5cda63e0ac24dedbbd9e263f23449645052e6078be57cfe309e4fe012dc565449aee27f2dad2f011c689be00e0d56297a0fb5a103a63cf3f1ac2aeb02434bcea468a1855b411b72b53244a14cc2413f8cfa713f8eef3b511c0f7a0216942acea91276f92eee80895591d097a4835800d3961274d79e271977db14a716f0d67e6bd14debfed17a372df2dafae7b171c3685f0d89738bde74e71ae0917c2896b06c1c06902af9ff69ced7fef20ddc06f22edc010000",
    ],
    [
      "ETag",
      "eoggMgyyrH4hbustdKH2ag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:54 GMT",
      "Server",
      "ESF",
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
      "edd34b7282300000d0bb64ad0e4aa04d774607512a084adbb0612089ca271a7e95e0f4ee757a8dfaeef0ee20a194374ddc5e0b7e016f40253334a11347be62eb94effa45aa36b38e9ea643abca8f8bba3950e51de327c770cd731ed9ec38d6f6ebfad6a00e8ef161c76cc326bd8c34bc9f3799b6592d7251a69f657b98cbe4ca8eebed1a6b16affcd6b2f3a551a5630e6b7d893c93b8e77743dc8244e853c6885855c2d553a8411cbca0de0b2089accedc0f04f75a21a472da6f5f8610d16228cdb9cbc243147a3bb5ade990547e96eb7808bfdc904784d0d85f78c22aa693a7a7ff0b8c00ef6556f326ce1edb7503a111f8ab1fb74af2c77fcc939ad7e0e717ae71e50419040000",
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
      "Mon, 08 Nov 2021 02:04:54 GMT",
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
      jobId: "grouparoo-job-97-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fdb3014fd2b91f74a9b9684a6ad548daa8491a94db734056dd314d9ce4d304be3103b3084fadf77e350064282a7d8bee7dc73ee471ec91f51a6644a98c86f1ba81f3edd48468e08689ae3eb528e7ce9fd3cfe6ab36612a4d9dfe07ad0dccf6688102d4bd15d55404fc9a6e6a0a6db4d3faf6553d15aca1e26ea4dbcde70e48c1cc71b0c1d67e2224f41912d45f907d9d75a576a6adb07ed7e2e655e00ad84ea73b97b7eb7ef8eedaa9637c0b5b25f4bdaa8a2ecf7453f1792532d6439db6ed040a3a04e6047458116fe335376fa3a755fd05d3f47f09de04039974da95b5b9882cb321379539bac64fa488ccd1707b2f197fe22b6b82c9a5d9994740747564a354df44305d679b45e594178be8e56f3385887c96671e1afe6fdc57ab95d851bebeac28f7c4b535680e15a33ebd4dc42bca07e0a4a8bd2a8c7ed73abfcd4a0e0ed585a024a2be882893718d1e178306119f37836764e583600c6c6cc3ba10e1bf0890b6eca8022cf881a162d65e9a543871dbb3c9970e6256e968d92b13784241b036543f724a3434af647e4be161ace84aaa4125d87c85514c47e1247db70318f7d5342469b429f75c6da025e7ad4582082dea969df468544a5b6dd4118fbd17c1107977e37e125e4943f6c6e71c6192d14209ad6d83c0df54aa6d83012ce57fe1982cdc4be1d828a4c7f3d92b6e7ad8b172d7fa6c738c0d6ae365fb289a320fc62ec1c1097b4680ce4ae3b900a2d5f636de87aff1b91b8a45d16f27deb473f48f71441063594fce36922d8043efcd70e8b8f585c7d94511aefb83b5cb522bc866e878429f7c09eb84827065ceb3731f7c43b74adcdd166841d94faa9a26ef1b1d04eac51cf200ce2f843d3adfd3fc8d01de478040000",
    ],
    [
      "ETag",
      "Lo6Eo7Z2J/bu9IdfxIh0uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1636337013394"
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
      "51",
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d7444c860c0121e86a09200e2184fc69063eb60b8adf3ee262184ef6e6f221a35d1975bdbfddaf5ffdf1de039c923706195ac5f4a94fb8b35ea0713f8a8ca542b7e14942b040b508b3593d4990cb3593628fcc1e534deb6e2abbce3ed7a3d2654b8c14c807b8038c13452e03e1e201719725b486999e5cb2ab340ef0b539c07fe687acb794691c9a78bf1d8eb8f8770b4ce8d91d06259f1ff687b3a5ab0a5958f314acc4334bb1492b618ea9191a94456a4585354ca10155470f5622da92c8424aa71a5d66dd71a8eedd876bbdeb0ed6e93c19442a113ca995dcc793fd0a445ead38e5582c380ac42161c57e72b9793a81262c2d134709ad57e5f018921c968f92757f0ba1bc17fe1033b39f09d131995b93e5337e37befb7716ce9e7a881170c7f104ab3516724184d86f3c09bcc0cf77492dedf6b543349eca3426361a3deecb4da4efdddd56b324ef3775c2d4bb420147c39ee120d6e2c5285c7371a3c93c07a020000",
    ],
    [
      "ETag",
      "o8MEmPmDpRD+Nfj5f/n8Aw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:55 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1636337013394",
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
      "54",
      "61",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2b",
      "96",
      "f7",
      "05a4d250021d74422c40c622daa42429a842a835891b4c9b38d84ea50af5bfefecb4948e8d7d9e54a93ddf7bf7de9dcf7dc55356a4b8831f59f65251b1f8f2cc1f7103534532381ddac3de91edb49c5bab9886e57c3fb84ea737a7a780609a25495ecee89ee49548a8ec0ca26626785512c1f91e14da3b39de6bb5edb66d7fdd6fd9f6c921f0249d4dbaac9802fb49a952762c6badddcc38cf6694944c36139ebf9d5bf303ab14fc99264a5adb9216a848eb73d1b3194f8862bc381d4460a092548c684ed80c2c6c98e9e3f7edd24d46f26606e0394b2849125e154adb8212092f262cab84a98a3bafd8d87cf703476ed7bd88d158d0848b74c4d23122128d46e5b4812e82811fef8c49ae2b8e7775621da01f61d043e3120c3c1149e518ddfd744317a16e70e7863b63a9c02250badeb58bce90e35fa22d0dcf4703df77a318ed9ceda2ab3018f4d1f9f03d04dca77442aa99ba240a2494769dd63f3d7da58a4a05a0d5bcbd8fb78c973acbb8604a77eaf9b11b3a17b177ebd6c3edd28c248be805c63b213349014d04c9a9a2a2c7530a947e1079b117f84e17186662fd3542e2cefdeb86102f4aaa0d2af38d63af07bd39bd3e5e2e1b7f873961e80ca13411822c7ecb81ddf6a1a66fd8b764561988c19ba8b631af13b885b5da3a3ad88a0eb7a2365e3e2ce1d3c0b088b532be19b8e110d747219d50418bc4c87d32620336897fbea7f5720316d61b64604714938a25528b24829a74cc72d3ca8a7d72d46a1f630316ea43eec03ed2ff0145fac7cc4aa332f5a9105c8454c242e910d4a4f1c20a98094b6fcc7bd872f9b23acaa99424d3",
      "e57d8e72a29227566448b2ac80da82a2091768521589a6d5fb6f8e88c8aa9c160ae90b951df4b6134d145565c985a2e9a60a00eaa713c5a1e75fed7e5b85e7c3d88de0e92974dfea1cb71e7453a695fae6ffdf361eeacbd17e2e03df854dff058f4307e9e3050000",
    ],
    [
      "ETag",
      "Y3YM53A1AV/nkRpv0OKdkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:55 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd3d15682300080e177d9b57a409c73dd8940148a468ca21bceb2051b0583198e757af73cbd467e2ff05ffddf801e8f4ca9e2d4d6ac013760a4733c3bce22b97283b2cc4a1e0f752dbe2acd875d0751ce3481531c3ae8c05485e8eba21a7da3736145a27d26660e93b233d48348e326e50b7b3117a11d139265db77120c6f7b957870b9a7950e992984bf946378e7a472eaa4ab9db51d9a9140427a94ae63c21f2d26732cc3362b6890afb1b4d7d47dc2c92643e7b23eb8300e8c9dfa1f2253dd0bdc689a58d34f2f509d31ccbf54021731ef5648e8b4bbfb071e2dc5eceaeaff0213c0b4e43d5305bfdcee408c27e06ffde2344a76f9df65b4673df8f90515cf147c19040000",
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
      "Mon, 08 Nov 2021 02:04:55 GMT",
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
      jobId: "grouparoo-job-99-1636337013394",
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
      "000000000002ff85536b6f9b3014fd2bc8fbb8264048c8438ad628a56ba4847484b49ba609d9c650b780293689b22aff7d17d374ad2ab59fb07dcfb9e7dc074fe88117319a20c2d3c79a55872ff782a033c4144ee1f52ff1ca3bfbe7beb7673bf3eb61afbc7299efa75340f08625715e66ac23455d512627db4d37ad445de24a880e24ea8cc71ddb755cc7195ab6e38cfbc0932c4b96bc7800f69d52a59c98e649bb9b0a91660c975c76a9c85fdecd5dcf2c2b71cfa892e65b491354a4f9b1e8b74c50acb828a6db0d18a825ab2296639e8185ffcc989cbf4ddde538efa600de71ca30a5a22e54630b525051243cad2b9d154d9e90b6f9ea8036ded29b870615599d175181737666c458e1481d4a665c06eb95b1f02fd7c16a162ed67eb4995f79ab5977be5e6e57fec6b8bdf202cf5098644c738da971ae6f3e5c403f6652f142ab87cd73a3fcdca0c5fbb134049096ac0d4643cbc5f6c81a93840c6932720624b1182123321c60875874dc67fd98300c3c2daa59b8100519d198d9ae1b593d3789faeec88df090f422a76f0f2c4a6c371edbe87886f61557ec82cb5248de7608dd068bd08bc260ebcf67a1a74b48709da98bd65853c06b8f0a0a04d007351d9b2817a0d4b47be1875e309b878b1baf9df092a5981e368f30e3046792011a57d03cc5aa9588a161c89fadbc0b00eb895d9f82124d7e3fa1a6e78d8b572d7fa18730c0c6aed25fb4098385ff5ddb39216e70566bc8ae3da0122cdf416de0faf80790b0a46d16f463eb05bf50fb14b08455aca09f4f13c03af0e9bf765a7cc0c2ea838c547087dda1b211a1156b7788eb724fecf1c075f59faa70a5dec58643ebd4b526479391e5ac50cf15b58b0f85b662b57c014110c6efeb6e1dff01d9694ee078040000",
    ],
    [
      "ETag",
      "zbEph1Xw2wev/+ywtEpLmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1636337013394"
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
      "51",
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf4b7d7444c870c8121ea6a22e02e218f1c110726e650eb775dedd1442f8eef626a251137db9b5ddaf5dffffdd069ed22206171ed2e4b942b93e4850df9a204055655af1a3a4422158805a244c0e5789df3c1f9e1c7977b1ed85cbebc3c05e25bd1e132a7ac45c80bb81458a59acc0bddf402172e4b688b22a2fe67566815e97a63809037f74c9794eb1c947d3c1c03b1df4616bed1b63a1c5bce6ffd136db5ab0a487001728b188d0ec524a5a62a47d235389bcccb0a1a892112aa8e1fa4522a92a85246a70a5d1ed365a8eedd876a7d9b2ed6e9bc18c22a1532a989d4e783fd0a44516d02bab04870159872c78519f2f5c4ee35a8809fd51e8b4ebfdbe02122392f1fc4faee4751f05ff850f6ce7c0774ee454157a4f5d0c6ebcdfc6b1a59fa3cebdb0ff83509a8dda23a13fec4f426f3836dc6c27fd74ad518d25b18f0a8d85ad66fbe4b8e334df5d3d23e3347fc7d5b2420b22c197e32ad5e02e44a670fb06c5ab31547a020000",
    ],
    [
      "ETag",
      "MxgI0DM8/AWd3ATjK+R3xg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:56 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1636337013394",
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
      "546d4fdb3010fe2b96f705a4be9775a31362a5cd205a9b96bc80aa09b5267182218983ed3055a8ff7d67a7a5746ce3f3a44aedf99ee79ee7cee73ee3079647b88f6f59f25852b1fa70cf6f710d534512389d9f5ffc1c7566aebc3f0bb2616c056e965c0c4e4e00c1344b92ac48695df2528454f603af91085e1644705e8742f576ab556ff7babd6ef753abdded1e1f0151d2341eb3fc01e8774a15b2df6c6ec51b09e7494a49c16423e4d9cb79f3a9d32c04bfa7a192cd7dcd26c8c8e63baaa7290f89623c3f093c70504a2a1634232c050f3b6a74fb75bf768391ac9100f889859484212f73a57d418990e7314b4a61aae2fe33363e5ffdc09e35b6863e5a0a1a72112d58b44444a2c5a278a8a1e13470fc8325c974c5e5a14e6c03f4cd9d4ed0b20003774452b944d717966b21349e5e5beec1522ab00894b1fddd42a768e08cd09e86eda0c0712ccf4707a787e8dc9d063374367f0d01f7118d4999aa115120a1b4eba8fa69eb4b55542a006d066ebfbd67bcd659c60553ba53dbf12d7730f4ed2bab1aee9826245c798f30de98a492029a08925145c584471428b3a967fbf6d4198c81612636db2224eeff78de11fc5541b54165beb16f4fa0b7c16486d7ebdadf6103d71dcca1341182ac7ecb81ddde91a6efd857242d0dc4e04d54d978aa12b88db5da36eaec45477b510faf6fd6f0a961d8c44a195f06963bc7d5914b632a681e1ab97f8cd8804de2fd17b5dd6e00c37e830e2c896252b1506a95505093f659667ad9b08f7b1fbbc7d880857a93ebb53afa6f208ffe98d96894a63e15820b974ad8281d829a345e580e4361d1a579107b2e1f374719959224babcc351465478c7f2044996e4505b50147381e2320f35ad7a00e68888a4cc68ae90be51d9472f4bd1405e59145c281aedaa00a07a3b9eefdacef9e1974d7836f72d0fde9e423fdafdcfed1bdd9469a5bafaffb78d9bea72b49fd1d4b160d57f01128f791ee6050000",
    ],
    [
      "ETag",
      "YGHwD2PRsjBUmCfEURmgHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:56 GMT",
      "Server",
      "ESF",
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
      "00d0bb646d9d0145a03b2142912a9fb608dd6480862026c82742a0d3bbd7e935eabbc3fb06699ee3be47fc7ac1357806532aebcb7ce9369a61918a4732874560e89aefcd99d43ae274f8b0dbd964c18499022909591fc3d1cde39164f14cc97b40c2f5209c5be694e7ed6ab6cdf1b556a16d47436924f068c0fd57e224a39d1a7d541e31dd5a9bc3d3a9c8250235978eba1a40ca8a50693112f96d6a47862995b8dfd69e40b31556fbddec215f20fef2769555d9eacd4cd8974af16e1d976b734297d20a3f198b5282836a48b7747798d87ae306e6a02e1f1efe2fb0005834e70ef7e87cdfbe52747d01feea233e35f8fedfc069873bf0f30b1cde8e1219040000",
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
      "Mon, 08 Nov 2021 02:04:56 GMT",
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
      jobId: "grouparoo-job-101-1636337013394",
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
      "536b4fa34014fd2b64f6a3b680b4a56dd2ac4d456dd25297528dd96cc8305c709432c80c3e62fadff732d8aec664fdc4ccdc73ee39f7c11b79e04542c624e6d9630dd5eb8f7b119363028a66f8ca5f6e8f5e2e9cd27d39eae545b009fcdbc1f3f3648208deb024dd963974a4a82b0672bc5977b34ad425ad84e860a28e6dd91d7be00c1cc7b56cc719f59028214f17bc7840fa9d52a51c9be65ebc9b0991e5404b2ebb4c6c0fefe6d3895956e21e9892e6674d1365a4f98deacf5c30aab828269b353aa82554116c29cfd1c33f6a129f7ecedde574dbcd10fcc41950c6445da8c617a660a2487956573a2b19bf11edf3c381acbd85370b0d26f27a5b4405ddc2b191504523f55a82711eac96c6dc3f5f05cb69385ff9d17a76e92da7ddd96ab159fa6be3e6d20b3c43d13807cd3526c6a9bef97841fd04a4e285560f9be746f9bd43f3af836908282da10d46ae35a0f6d01ac569ecb274e8f4e3d482381ec66e9f3ab1c5463de8253150e46951cda28528dc7edf724edc516459a361d44b4fec880e13374ad3d160d003c7614387ec8ec973c5159c71590ac9db0e919b601e7a51186cfcd934f4740929ad7375d61a6b0af8e851618108fa4f4dbb26ca052a35ed9efba1174c67e1fcda6b27bc808cb2d7f523ce38a5b90444d30a9ba7a05a8a041b46fce9d23b43b09ed8d53e28c9f8f71b697adeb8f8d0f2033dc401367695fe927518ccfd0b6d678fb8a679ad214fed819468f90e6b43d7bb3f88c42d6db3905f1b2fb825ed5300295450b0efa789601df8fe6fdb6f3e8271f751472abce3f230d9a8b00ada25e2bade3d7be45abd3ed1e04a7d89d93a76d8f826236ca150ef25b59b8f95b662b53c803088f3f775bb767f01f8e98c307b040000",
    ],
    [
      "ETag",
      "ixY+xG3p7x+4lnRURNY6ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1636337013394"
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
      "51",
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d",
      "748bccc1d4253ea0a2904c44180fc61872de3a986eebbcbb4908e1bbdb9b88464df4e5d676bf76fdff776b78ceca044278cce62f35aad5de1ccdad0dc6a8ebdc687e54546a0407d08839939dd7832a1bdd8da2c355df4c93fd68b29062797aca84960b2c04846b4833cc130de1fd1a4a5120b749caeba29c3599036655d9e2241e0f86579c1794d87c388da2ee59d4838db36b4c8411b386ff47dbc3c681277a1c638a0a4b8976974ad1134a33b032b528aa1c5d4db592a8a1819b17734575251491cb15d76b79ae17f881ef1fb53cdf3f693399931426a392e1e98417044346e4635ab24c0818504dc88ad3e67ce57296344a6c3818c641bb59f02ba050924a667f7215efbb10fc1b3eb0ad05df3951505d9a1d7519dd747f1bc79e7e8ebae8c6bd1f8436ecd40e8907d7bd49dcbd1e59ee612bfd6c65508f14b1911aad875eab7ddc390a5aefb69e93b59abf131a55a30352f0ede86706c254e41a376f8288c1a27b020000",
    ],
    [
      "ETag",
      "5v/piPYPL2yHtUd+LShcaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:57 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1636337013394",
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
      "61",
      "4fdb3010fd2b962704486d4369574625c40a842da224254d61dd841a377183691207db41aa50fffbce4e0b74b0f17152a4f87cefee3ddf9dfd84e72c8f71174f59f25052b1f874cfa7b886a92209ec0e9cf92c4947e3ec22fdd9ea5cc7373f628b5e1d1d0182e92849b222a575c94b1151d91d0d1b89e0654104e77548546feeedd79b9d56a7d53ad86bb65a876d0894349df5593e87f03ba50ad9b5ac357923e13c492929986c443c7bdeb71ef7ad42f07b1a29696d725a4023ad0f588f531e11c5787e341a8282525231a11961296878098da75f37733718c91a09801f59444914f132575a17a488783e6349294c56dc7dc246e7ab051eda7dfb3440a1a01117f184c52122124d26c5bc864ebd911bec8424d319c35ded581be8dcf72e515880803b22a90cd1cd77dbb711ea7b37b6ff2aa6ef5cd8e818f5dc33b441e2b868e4baf630403bc7bbe89bef8d06e864fc1a02f2633a2365aace88020ea565c7d5d2d15d55542a00ad2aeebc6d345e6a2fe382297d54c70d6cbf771a38d77655dd3e4d48b4183e407d67249514d044908c2a2a2e794cf560794327703cb7d7870853b2c11a2171f7d7d34b40b028a816a8cc1f9ff7bd5ed0691b056bc835494b8379ac1678abd9f8dcdec2cb65edef897abedf1b033911822cfef0c18134c5bb1c066fac4ae89ab38935dbdadadfb0da1b56072f6f97f0d5300c6bc58caf46b63fc6d5964f6754d03c3274ff6882011bc7c7976e7d01000c570078a4025b2a1649cd12096adc01cbcc5956d187075f5afbd880857aebebece997228fdff5ac384a939f0ac1854f25cc9c36814d1a2d2c87a2c04b52c3199592243acd2887a3484aa629456632d073135018229623dd251406e3813d598d435843272446312f75942974175553b0b6b62b735b0b3372aaf6fd5f29b7559134d799e7da3072bf01c5fff94191050000",
    ],
    [
      "ETag",
      "PIkfglUYmKlZ36VdWXd/eQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:57 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd34b7282300000d0bb64ad0e18b4b53bf94688340896e22693a611913f840ed8e9ddebf41af5dde17d03c6b9e87b2aeb5c54e0054c6cb959f085d73ceb769a26d84a60ee8eb84d505b4696e0f8b8fe880b1845c83639460339b864ad465ffb8a79be5994c4805654bc69db54bdfa2c19429f1c774a6f55abda1f5c848c7299ec897d56c925a57980c381d2e5f5c06bede9e2ee62d98cb621953cea9d24cea8cebcb80d69eabcdebad33570633828d97cae8e589ae6947b45b7d78aad319c6fb89064fca4ef06438c04213cb465a51ff9aa9e1034f39d7b421a716ab97878f8bfc00c88b1c93ad1d3ecbe1dae369b19f8ab4fe5d488fb7f5db04e74e0e717db1fddba19040000",
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
      "Mon, 08 Nov 2021 02:04:58 GMT",
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
      jobId: "grouparoo-job-103-1636337013394",
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
      "000002ff85535d4fa34014fd2b64f6716d694b2da549b3d68a2b494b95528dd96cc8305c701418640637c6f4bfef65b0aec6647d6266ee39f79cfbc10b79e065426624e6d96303f5f3b77b119323028a66f87aeb2c6e9bf2e2d23b9d04a737f7e7df77a785ba9acf11c15b96a44595434f8aa6662067bb6d3fab4553d15a881e26ea0d07566f38b12696650f8696e58c9128214f57bc7c40fa9d52959c99e641bc9f0991e5402b2efb4c146fefe6d3c8ac6a710f4c49f3a3a68932d2fc42f5472e18555c94f3dd161d3412ea080aca73f4f08f9ac4271f73f7392dfa19829f3803ca98684ad5fac2144c9429cf9a5a6725b317a27dbe3b90adbb7297a1c144de146554d2028e8c842a1aa9e70a8cf360b3363cff7c13ac17a1b7f1a3edf2c25d2ffacbcd6ab7f6b7c6cd851bb886a2710e9a6bcc8d137df3f182fa0948c54bad1eb6cfadf26b87bccf836909282da10b46f6604287d38113a7b1cdd2a9751ca70388e3696c1f532b1e30670ce324068a3c2daa59b414a53d4c27f6349d46f6908da2716a8d2367348aa364ea407a6cd98e3d4ac9fe88fca9b982332e2b2179d721721378a11b85c1ce5f2e42579790d22657679db1b680f71e151688a0ffd4b46fa35ca052db6ecf0fdd60b10cbd6bb79bf00a32ca9eb78f38e394e612104d6b6c9e827a2d126c18f1176bf70cc17a629787a024b35f2fa4ed79ebe25dcbdfe8210eb0b5abf4976cc3c0f37f6a3b07c435cd1b0d79ea0ea442cb77581bbadeff46246e6997855ceddce096744f01a45043c9be9e268275e0ebbfedb0f908c6dd471da9f08ecbc364abc26ae89688eb7a0f6c673a9a5844836bf529668d8787b6b539da8c5040a95e4bea361f2bedc41af906c220cedfd7eddaff05605632e97b040000",
    ],
    [
      "ETag",
      "Y9AYunHPIB6RBWjF+UBmtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1636337013394"
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
      "0000000002ff8d92614fc2400c86ff4bfde84820c3a14bfc3014850410c7484c0c21c7ad8ce1b6cebb9b0609ffddde54346aa25f6e6df7b4ebfbee76f0901631f8b04c93c70ad5f62841736b8310759519cd8f920a8de0001a913029a26910e9bbed5a8ec2d9713f7839d69b59727ece84966bcc05f83b58a598c51afcfb1d1422476e93945579b1a83307ccb6b4c569140ec6d79ce714db7c3c1b0e83eeb0077be7d0180b231635ff8fb6f9de810d2d435ca1c242a2dda554b441690656a6167999614353a5246aa8e1fa45a2a82a85226a70a5d16aba8d96e77aaedb69b65cf7accd64465298940a8667535e100c199185f4cc32c16340d5212b5ed5e71397d3b85662c3c138f2daf5825f01859254bcf8932b79dfb5e0dff081bd5bf09d13395585395057c39be0b771ece9e7a8cb20eafd20b461a70e483418f5a651309a586efe2ebdbb35a8278ad8488dd6c356b37d7ad2f19a6fb65e90b59abfe31b55a10352f0ede8a706fc95c834ee5f0122329e557b020000",
    ],
    [
      "ETag",
      "aTSATsXyhcMRU+HAz+sjUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:58 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc5547f4fdb3010fd2a962704486d43e90f4425c40a645b4449ba340555136adcc44d0d491c6c87a942fdee3b3b04a860e3cf4991e2f3bdbbf77c77f613be67798c0778c19287928af5973bbec00d4c154960d78f455aaebadd1b6b79b51abbc5656f92cadf272780603a4a92ac486953f25244540ea6935622785910c179131235db07dd66bbdfe9773a4707ed4ee7b80b8192a6cb11cbef217ca5542107965593b712ce93949282c956c4b3977debf1d02a04bfa39192d636a70534d2fa84f534e511518ce727d30928282515739a11968286d7d078f1753b778b91ac9500f891459444112f73a575418a88e74b9694c264c583276c74be59e0893db2cf03140a1a7111cf591c2222d17c5edc37d0b9377583bd90643a63b8af1db581bef9de150a0b10b02292ca10ddfcb07d1ba1917763fb7b21e4d947ae17a0917369a35334742fd01689e3a2a9ebda9300ed9deea3efbe371da3b3d95b08c88fe99294a9ba200a3894961d574b47775551a900f45c71e77da3f1467b19174ce9a33a6e60fbc3f3c0b9b6abea8e6842a2f5e401eabb24a9a480268264545171c5630a21636fe2048ee70e4710614a36ae11120f7e3dbd0604eb826a81cafc3557bf6bf86bc035494b8378ac1678a7dddbc19b4de3ef4986be3f9c01311182ac3f26f890c1e08d5589ac19db58b3d5d6e196d5ddb2fa7873bb81af8161502b66fc736afb335c6df9744905cd2343f78f0618b0717c7ee1eae107308c3ff04805b6542c929a2512d4b8039699b33c471f1f1ff4cc755544a8f7befe917e25f2f843cf334769f25321b8f0a98479d326b049a385e5501478451a38a3529244a799e6701449c922a5c84c057a69020a43c472a4bb84c26036b6e7a65361039d91183caadf45a6ca03a407a05eef6a63572b323aaabefd270db7555934c985e7da30647f00d4dda2007f050000",
    ],
    [
      "ETag",
      "Rdrluh44W/fMhPNpK5Slsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:59 GMT",
      "Server",
      "ESF",
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
      "edd34b7282300000d0bb642d0e8808749718e42322d116a91b06212245241050a0d3bbd7e935eabbc3fb06719250cea3b62ae80dbc81219ee9d364ba661a5a65992ecfb5ab5bcbee3ab1171b75acc24e3920093229f22fc3213d3a85e01970b469b34d3fab907b75a748b1a72cc80e07028c99ed89a521a62d85cb1987c358ab4a17f8426097f8743131c96a5e630125f7d2770af3cc602695e9861e7bad09cfa9f4b52ad0d66cd4be3b5dc96d2f9f6b22faca03bb77d441745d5a4c3ae43348cc79645e3cca1d5ab94edbdabd85f13b16f9606d89d1ef4892079bfd877f9fbebcfc5f600268cff286f2287f6e97155d9f80bffa513b30fafc8f68dcd006fcfc0206efd2b719040000",
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
      "Mon, 08 Nov 2021 02:04:59 GMT",
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
      jobId: "grouparoo-job-105-1636337013394",
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
      "0002ff85536b6f9b3014fd2bc8fbda0412c8538ad628a52b5a423620adaa6942c6b950b7801936a9aa2aff7d17d374ad2aad9fb07dcfb9e7dc07cfe481977b322709cffe34503f7db917093923a06886af17ca3cccbe478381e584c1edda2b9a8d3b7a5c2c10c15b96a44595434f8aa66620e7bbb09fd5a2a9682d440f13f506d6a83718db63db9e5803db9e39489490a76b5e3e20fd4ea94ace4df324decf84c872a015977d268ad777f33034ab5adc0353d27caf69a28c343f51fd9a0b461517e56217a28346421d4341798e1efe51f7c9f9fbdc7d4e8b7e86e003674019134da95a5f98828932e55953ebac64fe4cb4cf370712ba6b7715194ce44d51c6252de0ccd8534563f5548171196c3786e75f6e83cd32f2b67e1caeaedccdb2bfdaae771b3f346eaedcc035144d72d05c63619ceb9b8f17d4df8354bcd4ea51fbdc2abf74c8fb38989680d212ba603cb1c67430b566499a4c583ab547496a41924c93c988da89c5660e38fb0428f2b4a866d1529493a103169d0e636074123bb3d4891367b08f6d7bec58c0583a6409399e91c79a2bb8e0b21292771d22378117b97114ecfcd532727509296d7275d1196b0b78eb51618108fa4f4dc736ca052ab5edf6fcc80d96abc8bb76bb09af21a3ec29fc83334e692e01d1b4c6e629a837628f0d23fe72e35e20584fecc72928c9fcd733697bdeba78d3f2577a84036ced2afd25611478fe376de784b8a679a32187ee402ab47c87b5a1ebe36f44e2967659c8cf9d1bdc92ee2980146a28d9e7d344b00e7cfeb79d361fc1b8fba82315de7179986c55580ddd12715def893d9b39d321d1e05a7d888dc69353dbda1c6d4628a0542f25759b8f9576628d7c056110e7efeb761dff025aea887c7b040000",
    ],
    [
      "ETag",
      "Dt/v9KT1104SRYLImuME5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:04:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1636337013394"
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
      "0002ff8d92614fc2400c86ff4bfde8882c83214bfc808a4a44c4318c8931e4dc0a0cb7ebbcbb8184f0dfed4d45a326fae5d6764fbbbeef6e034fa94c2080c774f65ca25aefcdd0dcd820445d6646f3a320a9111c4023664ccab6b87c5934f6e95adeb6ddf97239be0b0f5647474ce8788eb9806003d314b3444370bf012972e4b698b23297932a73c0ac0b5b1c45616f70ce794e89cd07e37ebf73dcefc2d6d93526c28849c5ffa3ed61ebc0821e439ca24219a3dda550b4c0d8f4ac4c2df222c39aa652c5a8a182ab173345652114518d2b35b7deacb9bee77b5eabee7a5ebbc16446b130294986c7235e100c199185b46299e033a0aa90154fab73c9e534a994d8b03788fc46b5e05740614c2a99fcc915bcef5cf06ff8c0de2df8ce899c4a6976d459ffbaf3db38f6f473d46927eafe20b461a77648d4bbea8ea2ced5d0720fefd28fd706f550111ba9d17ae8d61b87cd965f7fb3f584acd5fc9dc0a8121d8805df8e8bd440301599c6ed2b43c6f0177b020000",
    ],
    [
      "ETag",
      "n9aKxj4+oOnV91hvvUXR/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:00 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1636337013394",
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
      "0d4fdb3010fd2b96a7492095365f4d4a25c40a642cac4b214d41689a5ac7758b218d83ed8010ea7fdfc559191ddb902225e77befde7d39cff88e1773dcc7195fde574c3e7db815196e61a6c9124ed98577368e4fcee891ab9413b89d79f7e2f6f1e00010bc6629b22a73b6a744252953fdc9b8bd94a22a8914620f02edd996bf67fbaeefba8165bbeebe0744c5f2c590177740bfd1ba54fd4e6723de5e0ab1cc1929b96a53b17a39ef3c389d528a5b46b5ea6c6b76404675de513dcc05259a8be26032860c2ac5e494ad08cf2187dfd479f6693b769b93557b09e0074e19a1545485aef3821054140bbeaca4898afbcfd8e4f9ea038fc361789ca2996454c8f994cf678828349d96772d743c9ac4e9ce8cacea88b3dddab131d0e764f40dcd4a48e08628a666e8ea4b9884080d475761b2f3e200563c4ad130fa1aa24334884fd0965414a3491c87e314ed1ceea2d36434394747d7af2150c49c29cd0b53424ab29cd5e9ff6a73f476ba358168906e9cd3c0f289ddb3f6b34516d045cfed660b8b65592f0bbac4cd2cbaef316f9e31023c5d47372c5288a297d91621ae6713c7a2ccf618654e16b841d7e9663dc7f31d3f0b02cbf5f0ba851f25d7ec84ab5228deb41a5f25511a4ed364121f0fd2d094b12055ae4f9ae4ea225ee7a9a14800fda7ae75ede50294eab945711a2683e334ba0c9b5519b225a14fe37b589605c91503349164c53493dfc41c9a86cf47e3288d46f160080c33fff30d42e1fef7e7df84f4a9345dd6e68dc76912c5a726810de292e495813c341ff8a390a4f888d7ebd6bfe30c9264700dda444af2f4870feaf1bd9afe170d83375693e746d3c6b5dac672b62c6fcbf2f1fac71a9e16868bd728e38b49985ce3e628610b265941dfdf2d001bc7fb3f90cd6506305c67d0511a6c5865aa6a152a59b3d27c656a69d8b66579fb0e3660a9dff87cb7b7995d1da38ec856acd0bf4a6a2eb3e962edaad40b089cb089b119e3",
      "fa27539d352d4e050000",
    ],
    [
      "ETag",
      "eQ4JSNDJcB3ss273/d5Qjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1636337013394"
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
      "51",
      "4d",
      "4f",
      "c2",
      "40",
      "10",
      "fd",
      "2f",
      "e3b58dad450c241c0411888460958331842c65a885b6b3ee4e2584f0df992d8668bc78d99d791fd9f7b207d866e50adab0ccd2cf0acdfe2a457e76438cb6cad9caa5a9b4081e20ab5494a39d7e7ac8f1311df4aed3563018be2da7c1aed311854d3eb050d03ec03ac37c65a1fd7e80521528b6c5426f45c27bedb6d1e4b53fe8c70214b472c064361edf77c77d387a178b2aa82af95fa6f9d1830d2d635ca3c1324197411bda60c22357cfaa42e7e85baa4c82166a714da4862aad0c912f881f064d3f6c46cd28ba0bc2286a35449953a238a352c4b31789074cacf29876520f2211987a94a6ebfafc12f8a6aee1a6db3adb4f2ebc708d3f5ce3b76ffefd5877cf68a78624ba45973a3837e8916bc5d2964d851e244a3e6098f1793f9e0063048a69dd010000",
    ],
    [
      "ETag",
      "IwpKDleFgGC/g90GHYbP0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:01 GMT",
      "Server",
      "ESF",
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
      "edd34b7282300080e1bb642d0e0122a53bb44295521b0cf8d86402a634118d107c40a777afd36bd46ff55fe0ff06ac28b8d6b4557b7e04cfa06396372c86b9e9af2f664fe2f94d7d8a235c256c9284cdb4660a6246c958e5562b2c99050da9c924caebc3384b37f4f64154ed2e96469ae7d5067618268d91983872a32e362092ce283c6bb7425fa623628277fd66bb439e53f6492fb73399d9fb7a4d2b644b17bb2f34abe2d209fdab29ae64d64b54eece6f583e051846713f7752f51e68d5d6c27f2d0f5ab02adfde6baa314a031b4b2b18058bf59231cc67889d8b8949a1b50a716b84fef0e1e1df0103c06f27d1704dc5fd761b79de00fcad4fdbeec4efff8f396b78037e7e0162be6e2119040000",
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
      "Mon, 08 Nov 2021 02:05:01 GMT",
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
      jobId: "grouparoo-job-107-1636337013394",
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
      "000000000002ff85535d6f9b3014fd2bc87b6d0229490891a2354ae98696908e9056d53421dbb950b704536c3a5555fefb2ea6e95a555a5f00fb9e73cfb91f3c937b51eec89430913f34503f7db9938c9c10d034c75be7263cb5afdc07fa23639ace95b7bdbc5fcf6733448896a5e8be2aa0a764537350d3eda69fd7b2a9682d650f13f5068ed71b8cddb1eb7acec075fd21121514d95294f748bfd5ba5253db3e8af77329f3026825549fcbfdebbdfd786a57b5bc03ae95fd5ed34619657fa2fab5909c6a21cbd976830e1a05750a7b2a0af4f08fba6367ef73f705ddf773043f0a0e9473d994baf58529b82c339137b5c94aa6cfc4f87cf34136c1325824169745b32fd392eee1c4da514d53fd54817511af5756185dace3d53c09d751ba597c0f56f3fe62bddcaea28d75fd3d88034b535680e15a33ebcc9c223ca0fe0e9416a5514fdaeb56f9a543e1c7c1b4049456d00553cf19d3c1c4f159c63c9e4ddc11cb1c606cc2bc117599c3fd210c770c28f28ca861d1126b76d9c81b3a597a3a1c4fd2e1001f8c532f1d8dfc09701ffcd1d8218713f2a7161ace85aaa4125d87c8751c26419ac4db68314f025342469b429f77c6da02de7ad4582082fe53d3a18d0a894a6dbbc32809e2f92209af826ec24bc8297fda3ce08c335a284034adb1791aea95dc61c348345f05e7083613bb3c061599fe7a266dcf5b176f5afe4a4f7080ad5d6dde6493c461f4cdd83922ae68d118c863f7412ab47c8bb5a1ebc36f44e2967659c8cf6d10df90ee2a860c6a28f9e7d344b0097cfeb71d371fc1b8fba8a3349e7179b86a55780ddd120953ef0b7be00c868e4f0cb8d61f6223777c6c5b9ba3cd087b28f54b49dde663a59d58a35e4118c4f947a65d87bff7476d557b040000",
    ],
    [
      "ETag",
      "0YI2/V3qaKfbtaAs7UPkOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1636337013394"
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
      "00000002ff8d92614f83400c86ff4bfd28245b984c49fcc0742a09cec9303131cb72838ea140f1eed02dcbfebb3d9cd3a8897e39daf2b4f47db90d3ce5550a1eccf3ecb941b93ec850df9a2042d5145af1a3a64a2158805a644c9ebba13bf69f5751b65a1d4e04dd2f2ffdabecf49409952cb114e06d609163912af01e36508912b92da1a229ab599b59a0d7b5294ee228185d725e526af2d15d18fa8370085b6bdf980a2d662dff8fb6e9d682479a47b84089558266975ad223263a30329528eb026d458d4c50410bb72f32494d2d2491cd15bbdbe9db5dd7711da7dfe93ace498fc98212a173aa18be9bf082a0498b22a25796092e03b20d59f1a23d5fb89ca7ad121306a3d8edb50b7e05242624d3d99f5ccdfb2e05ff860f6c67c1774e94d4547a4f5d8437fe6fe3d8d3cf51e77e3cfc4128cd4eed9138b81e4e62ff7a6cb8e94efa60ad518d25b1910a8d87dd4eeff8a8ef76de6d3d2363357fc7d3b2410b12c1b7e32ad7e02d44a170fb0645c19ae57b020000",
    ],
    [
      "ETag",
      "D6L6PAqxRgxx+SaoXhGAHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:02 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85548b4edb3014fd15cb131248a5cdab0f2a21d641806825853405b1696a1dd72986340eb60342a8ffbe1b87021ddb902225d7f79c7beecb79c6773c9fe33e4ef8e2be64f2e9cbad487003334d16701a3adec3fd05d1c73fd4e3cdad1aa7a7c5e9f0627f1f10bc6229b22c32b6ab44292953fdc9b8b990a22c8814621702edda566fd7eeb81dd7ed5ab6ebee7940542c4b873cbf03fa8dd685eab75a6bf1e6428845c648c155938ae5eb79ebc1691552dc32aa556b53b30532aaf589ea412628d15ce4fb933164502a26a76c49780639bc51e7c9d7cdd84d4e96cd05801f3865845251e6baca0b425091a77c514a1315f79fb1c9f3dd071efb43ff304633c9a890f3299fcf1051683a2dee1ae8703409e3ed19595611673b95636da0e368748666052470431453337475ea473e42c3d1951f6dbf3a80158e62340cbefbe8000dc223b4211584681286fe3846db073be8241a4dced1b7ebf7102862ce94e6b929212649c6aaf45fda1c7c9c6e45201aa46be7b46b7588ddb3f69234e9d2b4e7b693d46249d24bba6de22616ddf398374f18019eaea21b16c945de4b6c8b10d7b3896351667b8c3227e9baddb6d34e7a8ed7713a49b76bb91e5e35f0a3e49a1d715508c5eb56e3ab2888fd691c4dc2c341ec9b32525266faa84eae2ae27d9e1a8a04d07fea5a555e2e40a99a5b10c67e34388c834bbf5e95215b10fa34be87654949a618a089244ba6993c1373681a3e1f8d83381885832130ccfccfd70885fb3f9fdf08f15361baaccd1b8fe328084f4c026bc425c94a0379a83ff0969024dfc2ab55e3df71065134b8066d222579fac307f574bc8afe170d8337569de75ad3c695dada72362c6fc3eae0d5af153c0d0c17af56c617133fbac6f551c45226594e3fdf2d001bc7e73f90f56506305c67d0511a6c5865aa2a152a59bdd27c696aa9d9b6e538ae850d58ea0f3ed7f5d6b3ab625411d992e5faa5a4fa329b2e56ae52bd82c0099b189a31ae7e035116fa0e4e050000",
    ],
    [
      "ETag",
      "N24vqQatFZswhjsSfHpHLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1636337013394"
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
      "51",
      "4d",
      "4f",
      "c2",
      "40",
      "10",
      "fd",
      "2f",
      "e3",
      "d1",
      "3669dd8a4ac24148a3240dd10a0735842c65a8a5ed4edddd4208e1bf3b5b0cd178f1b23bf33eb2ef650f50166a057d5816f9678b7a7f91a37d76438aa6adace1ab2165103c402b735696afc948c4d1d204dbf24d4797bd593a55bbc1801526fbc05a42ff00eb02ab9581fefb0194ac916d8b4553b2c4ee1bb78d27d3f8214e19a869e580c92c49ee87490c47ef6c9135b5cafecb343f7ab0a1658a6bd4a83274191a4d1bccecd8d533b26e2af40db53a43039db823724d6d233591cf881f06b77ed8133d216e825088bb88951565d216a4583c7be17860c9ca2aa51dd703c102dd8ddc74dd9d5b86afba1a6ebaeeb2fde4c23317fde1a2dfbef9f763c3bd45f3a489a31b74a983538311b95696db5adda20799e40f782cec693f7e015862088bdd010000",
    ],
    [
      "ETag",
      "kYLC3E4bs0vkZr4+6URTnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:02 GMT",
      "Server",
      "ESF",
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
      "bb642d0cf2a9a43b68752a4a098e126093e113852809422c60a777afd36bd47787f70db2a2a07d4fa438530e5ec194e9502dd44d6bbbab53b5250ef1a3dab0954cb26072b877c75fe7b4e35aa8a7ee353c6e3e487e618d446ee0e394d648cb47a39c441ebfa5871d17a1320c1712b19825d8bc2d376ca9936315f17a3536d5dc61266ba6c0397a38db1a5d6ee99c78fb52208c7d05c2617d1552b6d20a46eb7d08fd3564a921c6539418d83da40b0f251a8b446beded850203a536e96785c48bbe0b35d1c2f2a6c7b66cee877cee47bbd8996f31529f9efe2f3003746ceb8ef6a47e6c372c0867e0af3e91534b1fff5d9a75b4033fbf593f8b5319040000",
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
      "Mon, 08 Nov 2021 02:05:02 GMT",
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
      jobId: "grouparoo-job-109-1636337013394",
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
      "85535d6f9b3014fd2bc87b6d0229690891a2354ae99a29211b9046eb3421632ed42dc1149b565195ffbe8b69ba7693d6276cdf73ee39f7836772cfcb944c48c2f38706eafda73b919013028ae6f8fa10d5ce68be2db65f3367b934a37d7e73e3e5d3292278cb92745715d093a2a919c8c926ece7b5682a5a0bd1c344bd81e5f606237b64db8e35b06d7788440945b6e4e53dd26f95aae4c4348fe2fd5c88bc005a71d96762f7fa6e3e9e9a552dee802969bed73451469a1fa87e2e04a38a8b72ba09d14123a18e614779811efe50d3e4fc7dee3ea7bb7e8ee047ce8032269a52b5be30051365c6f3a6d659c9e499689f6f0e24f496de3c3298289a5d1997740727464a158dd5be02e33258af8c857fb90e56b368b1f6e3707ee5ad66fdf97ab959f9a1b1bdf202cf50342940738da971ae6f3e5e503f05a978a9d5a3f6b9557ee9d0e2dfc1b4049496d00563c71ad1c1d872932c715836b6cf92cc82241927ce19b5138bb94318a60950e46951cda2a5281d048e13db8ec7294be361760a71928eb2d8b15d708703a063d7268713f2547305175c5642f2ae43641b2c222f8e828d3f9f459e2e21a34da12e3a636d016f3d2a2c1041ffa9e9d046b940a5b6dd0b3ff282d93c5a5c7bdd84979053b60f1f70c6192d24209ad6d83c05f54aa4d830e2cf56de0582f5c4be1d83924c7e3e93b6e7ad8b372d7fa54738c0d6aed25f1246c1c2ffa2ed1c11d7b46834e4b13b900a2ddf626de8faf00b91b8a55d16f27de3053f48f71440063594ece3692258073efedb8e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef7853db04eddd1886870adfe8ed996631ddbd6e66833c20e4af55252b7f9586927d6c857100671febe6ed7e1377753f47f7b040000",
    ],
    [
      "ETag",
      "qTr76CWlWJf7LL/TygZZEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1636337013394"
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
      "51",
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d1d09643064890fa00844041d233e18428e5b19c36d9d77370d217c777b13d1a889bedcdaeed7aeffff6e0f4f491e810fab247e2e51edce6234f736085097a9d1fc2828d7080ea01131930feecd2a688abe7a9abeb87240e570b06ac517174c68b9c14c80bf87758269a4c17fdc432e32e436496999e5cb2a73c0ec0a5b9c85c16832e03ca3c8e693f978dced8dfb70704e8d91306259f1ff685b1c1cd8d22ac0352acc25da5d0a455b946664656a911529d634954aa2860aae5ec48aca4228a21a576a8d7aa7d6f05ccf75dbf586eb769a4ca62485492867783ee305c190116940af2c133c065415b2e27575be7039892a25361c4d42af592df81550284945cb3fb982f7dd08fe0d1fd8d182ef9cc8a8cccd89ba1e4fbbbf8d634f3f475d75c3fe0f421b76ea8484a3dbfe2cecdede596e7194dedb19d4778ad8488dd6c346bd79de6a7bf5775b2fc95acddff18d2ad10129f8760c1303fe5aa41a0f6f80e968cd7b020000",
    ],
    [
      "ETag",
      "W3KbR4aErkOv3cGouHGb5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:03 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1636337013394",
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
      "54",
      "6b",
      "4f",
      "db",
      "30",
      "14fd2b96f705a4b6696857a0136205b22d5b494a1ea00aa1d6384e6a48e2603b4815ea7f9fedb42b650f3e4faad45edf73ee39f7dab72ff09196091cc27b9a3dd5842f3f3cb07bd88244a24c9dc68747f1472bbc9cd48b71e07fe793072f155727270a41354ba0a2ca495bb09a63228671d8c938ab2bc4196bab426ddbeeb6ed416fd0eb1d76ed5eefb8af8882e4e998968f8abe90b21243cbda887732c6b29ca08a8a0e66c5af73ebf9c0aa387b20580a6b57d35232c27a47f534671849caca9338540e6a41f88c1488e6cac3969adc7fdeaddda1a8e8640afc4c314118b3ba94da972a815999d2ace6a62a1cbe40e3f3d50f183a63e73c02734e30e3c98c2673800498cdaac71638f7632fda9ba342579cefebc426005f02ff12cc2b65608104117370f3cd091c00c6fe8d13eccd13248962787e04c6ee0f079c8291770176645c0fc49ee78411d83bdd075f033f9e80b3e96b886a202129aa737981a45291da78d2fc74f5bd4a22a402ad67eefe7ed570a5b394712a75b3ae1739c1e83c72af9d66be639221bc0c9fd48453940ba2d088a38248c22f59421465e2876ee4fade68ac186668930d42c0e1edcb96102d2ba20d4af30d2f46910357abd6df11a320184d5555c4395abec929a783bea66fd9d728af0dc4e04dd438786e12d0865a6d131dec44fd9d680057772bf56941f50e1b6578153bc114364701490927253672ff98ae019bc4fbfbb479db7a5d43ad23a48a85a4586815cc894947b430bd346cbbdb3b3e3c8206cce5db5cbfdbefe93f8132f96366ad519bfa8473c60322d463d2a15213c60b2dd550687265d661c7e5d3faa82042a04c97f7182890c40b5a6640d0ac54b5390129e320ad4bac69cdf33747886775414a09f48d8a21d0efa103c2baaa189724d91650b96669c22870bdaffb9fd6e1",
      "d9347242b57412dcdac323fb4ef763ba686efdbfece0aeb912b31fbea7f7e32727a70a24da050000",
    ],
    [
      "ETag",
      "U78U5/SMPuhLROJrPjNfsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:04 GMT",
      "Server",
      "ESF",
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
      "51",
      "6e",
      "82",
      "30",
      "0000d0bbf45b0ca244d89f141822c420a29b3f4d29955129560a425d76f7995d63be3bbc6f8009a152a2ee7aa10d78030a1bf6944c37c272fc92e97b37f4897eb822eb46a9f779c483445120fdb8429167ed96755f92c3cdccf402bbbd10050ff633d6848d4cb82ccdee71d984f9de333f082b60ec6f075b4f95c1fbf5f2b2b05b97516bc8d2936bc1e6fdac3a598e337f842e82778767c72234b2243d26fceba4317d5c5df96a19ad9dbe4d34cd5204b3400be7677cd79a3a726288ab21e7bbe86c74b048ba3c21a5b1a88370e04d5d31b1edb93ad56afaf2f27f8109a0a3a85a2a51f5dc3e376d7b02feeaa34e09fafcef50dcd216fcfc025607d0af19040000",
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
      "Mon, 08 Nov 2021 02:05:04 GMT",
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
      jobId: "grouparoo-job-111-1636337013394",
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
      "fd2bc87b5c13a09090448ad628a56bb48474405a4dd3848c73216e09a6d8b4aaaafcf75d4cd3b5aab43e61fb9e73cfb91f3c933b5e6ec984a43cbf6fa07efa722b52724240d11c5fb31d7fdcdcffd84574f675e80cdcf2b4ccacd9748a08deb224dd5705f4a4686a0672b289fa792d9a8ad642f43051cfb6ed9e3d74868ee359b6e38c5d244a28b2252fef90be53aa9213d33c8af77321f20268c5659f89fdebbbf9706a56b5b805a6a4f95ed34419697ea2faad108c2a2ecae92642078d843a813de5057af847dda667ef73f739ddf773043f70069431d194aaf585299828339e37b5ce4a26cf44fb7c732091bff4e7b1c144d1eccba4a47b3831b654d1443d55605c84eb95b1082ed6e16a162fd64112cd2ffdd5ac3f5f2f37ab20326e2efdd037144d0bd05c636a9ce95b8017d4df8254bcd4ea71fbdc2abf7468f171302d01a52574c1c4b386d41e59e3344b3d968d9c419a5990a6a3d41b5027b5d8d805779b02459e16d52c5a8ad273e970808b905894da89cbc62c190d4e59e231c783edc81da79e4d0e27e4b1e60aceb9ac84e45d87c84db888fd240e37c17c16fbba848c36853aef8cb505bcf5a8b04004fda7a6431be50295da762f82d80f67f37871ed77135e424ed953748f33ce682101d1b4c6e629a857628b0d23c16ce59f23584fecea189464f2fb99b43d6f5dbc69f92b3dc601b67695fe92280e17c1776de788b8a645a3210fdd8154687987b5a1ebc31f44e2967659c8cf8d1ffe22dd530819d450b2cfa789601df8fc6f3b6e3e8271f751472abce3f230d9aab01aba25e2bade17b66db9eec8261a5cab0fb1c168706c5b9ba3cd087b28d54b49dde663a59d58235f4118c4f907ba5d87bf74b216aa7b040000",
    ],
    [
      "ETag",
      "fhiwUqKhSaA+6354n2nf0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92614fc2400c86ff4bfd3a22cb70ea123e80826200658c68620c396e654cb775dedd3484f0dfed4d44a326fae5d6764fbbbeef6e034f691143008b3479ae50ad0f1234131b84a8abcc687e9454680407d08884c9c978e2cbeb6ed84f26c5ad090fefb291b94ada6d26b45c612e20d8c032c52cd610dc6fa01039729ba4acca8b799d3960d6a52d4ea37030bee03ca7d8e6e3d970d8e90e7bb075f68db130625ef3ff687bd83af0488b1097a8b090687729153da234032b538bbcccb0a1a9521235d470fd22515495421135b8d2705db7e1fa9eef79c74dd7f34e5b4c66248549a9607836e505c190115948af2c137c06541db2e2657dbe70398d6b25361c8c23bf552ff815502849c5f33fb992f75d09fe0d1fd8ce82ef9cc8a92acc9eea0faf3bbf8d634f3f479d77a2de0f421b766a8f4483516f1a754637967bd849efae0dea1b456ca446eba1db6c9d1c1dfbcd775bcfc85acddf098caad00129f8765ca60682a5c8346edf001f29b3797b020000",
    ],
    [
      "ETag",
      "QNQ6cOBRFgQnWtR/XlMtJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:05 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1636337013394",
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
      "ef6fda3010fd572cef4b2bf1a3010a1b53d5d1926dd120d024b46255056e6252b7491c6c070955fcef3b3b50cabaad9f272191f3bd77efddf9fc8c9f5816e12ebe67f1b2a062fde191dfe30aa68ac470ba4cedce4f76b1b2aed5a9ea14abd655afeff5cece00c1344b92344f6855f242845476277e2d16bcc889e0bc0a85aa96d5a85aed66bbd9ec9c58cde6a71610254d1603963d01fd41a95c76ebf59d782de63c4e28c999ac853c7d39afaf1af55cf0471a2a593fd4ac838cacbfa37a9ef09028c6b3b3890f0e0a49c58ca68425e0614f8deebf1cd6ae3192d66200af58484918f22253da17940879b66071214c55dc7dc6c6e7ab0fecdb03fb32407341432ea2198be68848349be54f1574399ab8c1d19ca4bae2fc58277601faea8d86689e83810722a99ca39befb667233418ddd8ded15c2ab008147714a081f3c346e7a8e7f6d1818ee3a289ebda7e808ece8fd1376f3419a38be96b087410d1052912d5270a6494761e959f8ebe5845a502d076e8cedbbbc61b9d655c30a5bb75dcc0f67a9781736d97031ed098846b7f09235e90445240134152aaa818f28802653cf29dc019b9bd0130ccd4c63b84c4dddbe73d2158e7541b54e61f07ce107aeb0dc778b3a9fc1dd6f3bcde144a1321c8fab71cd86db7347dcfbe26496120066fa2d2c6aa4c600b6bb55dd438885a07511b6fee36f0ab60d8c652195f4d6c6f8acb238f2ea8a05968e4fe3162033689f75fd56ec3010c3b0e3ab0288a49c542a95542414d3a60a9e9a5645b27a78d461b1bb0506f731d9da359f4c7cc56a330f5a9105c7854c246e910d4a4f1c232180a8baecca33870b9dc1ea5544a12ebf22e472951e103cb6224599c416d41d1820bb428b250d3ca47608e88888b94660ae91b955df4b21435e41779ce85a2d1be0a00caf7e3079ee37e3bfebc0d2fa681edc3fb53e8d6ea7eb4ee7453a695f2eaffdf36eecacbd17efa23d78655ff05f7ff29e0ea050000",
    ],
    [
      "ETag",
      "qmE7ZiBv1Vt5t7uv4QADRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:05 GMT",
      "Server",
      "ESF",
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
      "0002ffedd34b7282300000d0bb64ad8e09054c77a081969f88289f0d13308222140922d2e9ddebf41af5dde17d039a658cf3a4fb2a590ddec183223ccb6666b350b53ca75c5a5703e989e95f4a8d28f3a6da2763de176eea1b7e13c1e35697113462769e5b41d499022ce69e8076ddc52166a0e4590cdb30fa340abb40edf47458a1ab15a9f0b64789bca7245e7e58c6ed68bba1b71062d9ad52bdcab7cb5459d2461b5776699df90516a97f206fa14d77f51a4f99db57579e8d8a16de282c89bdc1f09e8bd2b99e06d8b1868d8f1c89eba2867b957a6625a6f6ba90d1e121312d99bdbcfc5f6002d8d09c5ac693d373bb20623c017ff593eed1b0e77f95d196b5e0e7178381b7ea19040000",
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
      "Mon, 08 Nov 2021 02:05:05 GMT",
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
      jobId: "grouparoo-job-113-1636337013394",
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
      "6b6f9b3014fd2bc8fbda245012f290a2354be84a95908d9056d53421632ed42dc1149b4c5195ffbe8b69ba5695d64fd8bee7dc73ee8367f2c88b844c48ccb3a71aaac39707119333028a66f83a2fc7c3c5f9feeada5b0677a979b8fe66cd1eb2e91411bc6149ba2b73e84851570ce464bbe96695a84b5a09d1c1441dcbb23b96633bb63d342ddb1ef79128214f97bc7844fabd52a59cf47a27f16e264496032db9ec32b17b7defedcf7b65251e8029d97bafd94319d9fb44f56b2e18555c14d3ed061dd412aa087694e7e8e11f35892fdee7ee72baeb6608de730694315117aaf185299828529ed595ce4a26cf44fb7c73201b77e9ce438389bcde1551417770662454d1481d4a302e83f5caf0fccb75b09a85deda8f36f32b7735ebced7cbedcadf18b7576ee01a8ac63968ae31352ef4cdc70bea2720152fb47ad83c37ca2f1df23e0ea621a0b48436180d4d875a23731ca7f190a5237b10a726c4f1281e0ea81d9b6cdc877e1203459e16d52c5a8862d4076bccec51e40c2089fa8e954631d810f59373075330cb4907e47846fe545cc182cb5248de7688dc065ee84661b0f5e7b3d0d525a4b4ced5a235d614f0d6a3c20211f49f9a8e4d940b546adaedf9a11bcce6a177e3b6135e4246d961f384334e692e01d1b4c2e629a85622c186117fb6721708d613fb710a4a32f9f54c9a9e372edeb4fc951ee2001bbb4a7fc9260c3cffbbb67342dcd0bcd6907d7b20255abec7dad0f5f13722714bdb2ce4e7d60dee48fb14400a1514ecf3692258073effdb4e9b8f60dc7dd4910aefb83c4c362aac827689b8aef7856d9983a165110daed487d8c8724e6d6b7234196107857a29a9dd7cacb415abe52b0883387f5fb7ebf8173776d7387b040000",
    ],
    [
      "ETag",
      "Cp97D2vHJILRYf0yJB1Ajg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1636337013394"
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
      "0002ff8d92514fc2400cc7bf4b7d1d09733070090f4c514900718cf8600839b602836d9d77370c217c777b13d1a889bedcdaeed7aeffffee00db248fc18345b27a2951ee2f56a81f4d10a02a53adf85150ae102c402d564c3e6599bf6d6e2ea94cdac130f18bdd1837af9d0e132a5a6326c03bc032c13456e03d1f201719725b446999e5f32ab340ef0b539c84417f74c77946b1c947d3c1a0eb0f7a70b4ce8db1d0625ef1ff689b1d2dd8d022c0254acc2334bb14923618e9be91a94456a4585354ca08155470f56225a92c8424aa71a566db4ecd761dd7715a75db71ae1a4ca614099d50cef074c20b82262dd2805e5926b80cc82a64c5cbeadc7139892b2526ec8f42b7512df8159018918ce77f7205efbb16fc1b3eb09305df39915199eb33753b78e8fe368e3dfd1c75d30d7b3f08a5d9a93312f687bd49d81d8e0d373b49f7f71ad558121ba9d07868d71bed66cbadbfdb7a4dc66afe8ea765891644826fc77da2c15b8a54e1f10d96f1eb1b7b020000",
    ],
    [
      "ETag",
      "WmmBk5j2oui8RMiBpvPejw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:06 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1636337013394",
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
      "6b",
      "4f",
      "db",
      "30",
      "14fd2b96270493fa20f4b15109b10061cb56922e4d41dd841a377183218983eda055a8ff7dd70e053ad8f838a9527d7dcfbde7dc87738f6f5891e0019eb3f4b6a262f9ee9acf7103534552b81defdbbd8fc736f5f2f8eb5e16fcb27f744b2b3d380004d35192e465469b925722a6723019b752c1ab9208ce9b90a86959dda6d5eff43b9d0fbb56a7b3df854049b3c5901537107ea5542907edf69abc95729e6694944cb6629e3fdeb7eff6daa5e0d73456b2bdc9d9061ad97e83f530e331518c1707933128a82415339a13968186a7d064fe6933778b91bc9502f88ec594c431af0aa575418a98170b9656c264c5837b6c743e3be0b133748e4314091a7391cc58122122d16c56de34d0b13ff1c29d88e43a63f45e3bd6063a0dfc33149520e08a482a2374f1c5091c8486fe85133c8bf1fc100ddd6f0e3a44b6778236885c0f4d3ccf198768e7f03dfa1cf893113a9a3e874009095d902a532744018fd2d293fae8eac92a2a15801ebaeebe1c365e692fe382295daeeb854e601f87eeb95377784853122fc7b7d0e305c92405341124a78a8a339e500819f96337747dcf1e428469db688d9078f0f3fe29205c96540b54e61f9f0e7d3bec778d8235e49c6495c1dcd507bc65b57add2dbc5a35fe9ec80e027b0ae44408b2fcc30705698a57390cde58b5d035a78535dbdadadbb0ba1b561faf2e57f06b6058d89a197f9f38c114d757015d50418bd8d0fd6308066c1c6f3fbcf52300303c03e0910a6ca9582c354b2ca871872c37b5d4d1d66ebf573f5b45847ae1eb5b3dfdb52892573d0f1c95c94f85e022a012764e9bc0268d16564053e06bd2c0399592a43acda480522425f38c22b319e87108288a102b909e128ac2e9c8993dac43d44047244109af749469f400d55bb0b6b66b735b0b3372eaf1fd5f29977593",
      "34d789ef39b072bf01d1ddb9c995050000",
    ],
    [
      "ETag",
      "S9A58CAeNmcJ2lRxAZ4p1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:06 GMT",
      "Server",
      "ESF",
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
      "59",
      "6e",
      "82",
      "40",
      "00",
      "00d0bbccb712968e40ff202c226517b1fc90014610c2308295a5e9dd6b7a8dfaeef0be012a0a3c8ed9bd6f3101ef6041bccc148c4d25d5a82a69aaf663920be2b9f363fbd67aac90270a1be043b7fa21fdc41aa92f83e992b48aac8220a8c123a50de2c949647b270db6665e58d6fe6cc2872e10de51aaf978a68b115d6cd575d6ae5692c657777192ead42815f96189d7fa50666d49b6a1aa895ecfb29224d84a33f4cb9798661d1f7af4ed18ac69bc239351f25cd407d09939e9c08e10e965adcb50ceadc8fd38c5681c12e4353d37dbb7558ab249645e5efe2fb00178a6d7018fd9f5b95d80b2bc017ff5b3fb42f1f3bf8ad18007f0f30b595d899819040000",
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
      "Mon, 08 Nov 2021 02:05:06 GMT",
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
      jobId: "grouparoo-job-115-1636337013394",
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
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "57",
      "90f7b14d0221bfa568cd52ba22256423a4d5344dc8760eea86608a4daaaacaffbec3345dab4aeb276cdfbb7befde1dcf6427f22d991026d2870acaa72ff7929173029aa6f81add0ff48e7dbbf607a3fe99bbdb74e5d9217c9c4e1121ea2c45f745062d25ab92839a6cd6edb49455414b295b58a8e538fd96337007ae3bb41dd71df7305141962c44bec3f43bad0b35e9744ee4ed54ca34035a08d5e672fffade39743b4529ef816bd579cfd9411ad5f984f56b2639d542e6d3cd1a15540aca18f65464a8e15fea965dbcafdd1674df4e117c101c28e7b2ca75ad0b4b70992722ad4a53954c9e89d1f9e640d6dec29b47169759b5cfe39ceee1dcda524d63fd54807515ae96961f5cadc2e52cf25741bc9e5f7bcb597bbe5a6c96c1dababdf642cfd294656072ada975616e015e907f0b4a8bdcb047f573cdfce290ff71307502522b6882f1d01e5067648f59c2863c19b97d96d8c0d8880dfbd465361ff7a0b7654031cf909a2c9acb9c8fa93de8dabdb887c6c6bdd1781833bb0bf1a8cb297346ce80db5d723c278fa5d07029542195681c22b7a11f7971146e82f92cf24c0b09ad327dd908ab1b78ab51638308fa4f4fc73a2a2432d576fb41e485b379e4df78cd84179052feb47ec01927345380685aa2791acaa5dca26124982dbd4b049b89fd38051599fc7e26b5e7b58a3796bfa64738c05aae365fb28e423ff86ee49c103734ab0ce4d01c488192efb037547dfc8348dcd2a60af9b9f1c25fa4790a21811272fef934116c029fff6da7cd4730ee3ef2288d775c1eae6a165e42b344c2f4fb92edd843bb6bfe554d4bfd21e6b8cec9b6ba465d11f690eb97969acdc74e1bb24abd823088f30f8c5dc7bfafce4b087b",
      "040000",
    ],
    [
      "ETag",
      "Tj6tkbBHI685+3kU2o+vRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92514f83400cc7bf4b7d856484894ab20754a6986d4e864fc62cb7a3db50a07877689665dfdd1eea346aa22f475b7e2dfdffb92d3c16750e212c8ad5538b6a73b04273638314755b1acd8f866a8de0001ab162d24fdbc6971b3d2c543c1e52f3783589c4cd60c084966bac04845b581658e61ac2bb2dd4a2426e9354b6553def3207cca6b1c5599626930bce2bca6d3eb91d8da2d3510c3b67df980b23e61dff8fb6fb9d030fb44871890a6b89769746d1034a9358995a544d89aea65649d4d0c1dd8b95a2b6118ac8e58aeb7987ae17f881ef1ff53cdf3fe933599214a6a09ae1db192f08868c28537a61991030a0ba90152fbbf399cb45de29b16132c9827eb7e05740a12495cfffe41ade772df8377c60ef167ce744456d6df6d470741dfd368e3dfd1c751e65f10f421b766a8f64c9389e65d1786ab9fb77e9a71b837aaa888dd4683df47afde3c3a3a0f766eb1959abf93ba1512d3a2005df8ecbc240b814a5c6dd2b7b06b5577b020000",
    ],
    [
      "ETag",
      "3Rup3cysFirEMFopkJNAaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:07 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1636337013394",
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
      "547f6f9b3010fd2ac8fba7d5d20402011229eab294add152d211d21f9aa6c41827754b30b54da7a8ca77df199ab6d9ba554282f3bd7bef9d7de611ddb13c453d94b0d57d49c5e6c32d4f5003518557b07adab1bfb9a70e397536571f937b33f7c6f9d5a0df0704d35512af8b8c1e495e0a42656f366dae042f0b2c383f02a223cb728f2cd7766ddb332ddbee3a502869b61cb3fc0eca6f942a64afd5da8937579caf328a0b269b84af9fd75b0fed5621f82d254ab6f6355b20235befa81e679c60c578de9f4dc14129a998d33566197878294d934ffbdc4d86d7cd15801f18a198105ee64afb020ac2f3255b95a26245bd4754f97cf581a6c13818c6c64250c2453a67e9c2c0d298cf8bbb86319cccc2f86081d79a7171a813bbc0f8124dce8c4501066eb0a472615c9e065160180bcdd0378e8d417862ecd18e42631686c134360e8e0f8dafd164766e7cbe7e0d01c329958ae595dd182719d5569fb674f4f749ea02ac40bf4ece3dd3c5966f769365e291a56f7792a54993c44fbc0eb61393741deaa409c550a7347b5585739e13db777ddc3553d7ecbaa643eda4dba61d37f1896b268e47bc36a156ea13b46da05f82297ac264c125abb7155d46a33898c7d12c1c0ee2a06a6389cb4c9dd4e67413af7d2a681240ffe96babb38c83923ea3511807d160188f2e827a2cc67485c9667a0f83b1c499a480c602afa9a2e28ca7b069e87c321dc5a3493818434575d6e73b8444bd1f8f2f05f1a6a87659556fade53a95fe0e7081b3b2423cd41fc8eaa0edb6f16f8a41140dae41160b81376fd3bfc95fe1aba8b6f8ac87b4da2e6aef45ce5ee4a2edcf2d3c0d04f7ab5646df6741748deaa5882ea9a039797fac005c25deff4fecee2c80e1d6828e5410c31413a95588a0f534b375d54b5d6d999eeff9a8020bf567ce37dbd6eed8348766a46b9aaba796ea3b5beda24e95f219044918c270147e85ec6f709a7f2e35050000",
    ],
    [
      "ETag",
      "H53K6H4cH4yX+bq0n7LnXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1636337013394"
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
      "ff8d90514fc2301485ffcbf5d12d6199c148c283284184101c2e1a0d21a55ce660db1dedad8690fd776f07f1d997f6f6f43be9393dc13eaf36d083759e1d1c9ae35586fce28704ad2bd8ca565365110240569990c5ec7ab498a7e51be967f7b1783c4cd4e43debf785b0fa0b4b05bd136c732c36167a9f27a85489625badeabd207cacfd693c7b1d8e868908256dbc304ba7d3fbc174084df0675125b98aff655a3601ec689de0160d561a7d86dad00e358f7d3dabcabac0d092331a2db4707b911972b53244a128611475c3a81b77e3f8b613c5f1dd8d900569c5395502a70b89074cac8a847ea41e4402987694a6db76fd6e655fe3322d9be5c5343832dab9218960d1bfde392779209f8e25351b870168251ff994f3f9dcfc02cd48abe0a5010000",
    ],
    [
      "ETag",
      "lN+GSPUmWocJuZSDqKaKXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:08 GMT",
      "Server",
      "ESF",
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
      "41",
      "72",
      "82",
      "30",
      "00",
      "00",
      "c0",
      "bf",
      "e4ac8e5114d21b884541c1200cb6970ca6090685a61025d8e9dfebf41b75ffb0df20a794b52d519f67568317d0e71334a2a3405ace6b212aad222db8a43137376e5667ab6d3514ba29b14a3d67bcb7c35dd5bb6a63c55a15d77527083ed9e86d379c1639d77611127a4faec79e7333316147b6081aa8363509f1cd4cb197e50142edc458c3f96a57e2bd845b4ff8c762dc1ee273f40e2769e9da61709e7df88df9255dc3a08c2f2e6113a756c4f0522d2d8a4ebd37757cbee9e6014c8a437ded17370a695276331c55be386643d9914bb8589d9cd1d3d3ff05068069291ad612f1d83e9d2134007ff589ea257bfc7758deb006fcfc02afdfaf7919040000",
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
      "Mon, 08 Nov 2021 02:05:08 GMT",
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
      jobId: "grouparoo-job-117-1636337013394",
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
      "2bc8fbda2410f22091a2354b69c714c84a48ab6a9a90712ed42d608a4da7aaca7fdfc5345dab4aeb276cdf73ee39f7c133b9e7e59ecc49c2b38706eaa72f772221270414cdf055154ba7b95bd18b6f42ad6f857f73cf7e0c2f170b44f096256951e5d093a2a919c8f96edbcf6ad154b416a287897a9635ed59137b62db53d3b2edd9088912f274cdcb7ba4df2a55c9f9607014ef67426439d08acb3e13c5ebfbe07138a86a71074cc9c17bcd01cac8c127aa5f73c1a8e2a25cecb6e8a09150c750509ea3877fd47d72fa3e779fd3a29f21f89133a08c89a654ad2f4cc14499f2aca97556327f26dae79b03d9ba6b7715194ce44d51c6252de0c4d8534563f55481711e6e7cc30bce37a1bf8cbc4d106f57df5d7fd95f6dd63b3fd81ad7dfddd035144d72d05c63619cea5b8017d4df8354bcd4ea51fbdc2abf74c8fb38989680d212ba603c3527d472cc59922653963af638494d481227998ea99d986c3682d13e018a3c2daa59b414250c27d39909100f9db1198f9863c70ea510b374eccc66e9041858e47042fed45cc119979590bceb10b90ebdc88da37017ac9691ab4b486993abb3ce585bc05b8f0a0b44d07f6a3ab4512e50a96db717446eb85c45de95db4d780d19654fdb079c714a730988a635364f41ed8b3d368c044bdf3d43b09ed8cf635092f9af67d2f6bc75f1a6e5aff40807d8da55fa4bb651e80517dace117145f346431ebb03a9d0f22dd686ae0fbf11895bda6521973b37bc21dd530829d450b2cfa789601df8fc6f3b6e3e8271f751472abce3f230d9aab01aba25e2bade17b6653a93994934b8561f628e3d3db6adcdd16684024af55252b7f9586927d6c857100671fe816ed7e12f91dab5597b040000",
    ],
    [
      "ETag",
      "tmA8ujCaGBotLhoMYkcJ2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1636337013394"
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
      "51",
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf",
      "4b7d1d91653870090f5350490015c6831a43ce5b81e1b6cebb9b8284ef6e6f221a35d1975bdbfddaf5ffdf6de031c96308e021993f95a8d6077334d73618a12e53a3f95150ae111c4023e64cd66f6f56adf3a4b5ec78c79e54abceab389c84ed36135a2e3013106c6096601a6b08ee36908b0cb94d525a66f9b4ca1c30ebc216c7d1a8373ce73ca3d8e6c349bf1f9ef4bbb075f68db130625af1ff68bbdf3ab0a48711ce50612ed1ee52285aa2343d2b538bac48b1a6a95412355470f562aea82c8422aa71a5e6bacd9aeb7bbee735ebaee71d37984c490a9350cef064cc0b822123d211bdb04cf0195055c88a67d5f9cce524ae94d8b0378cfc46b5e05740a124154fffe40ade7721f8377c603b0bbe7322a332377beaac7f19fe368e3dfd1cd509a3ee0f421b766a8f44bd41771c85832bcbddefa49fac0dea2b456ca446eba15b6fb48e9a7efdddd653b256f37702a34a74400abe1d1789816026528ddb37dfd868587b020000",
    ],
    [
      "ETag",
      "0ZYx8Gi8jD393crxDza/UA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:09 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1636337013394",
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
      "6d",
      "4f",
      "db",
      "30",
      "10fe2b91f705a4be92366d2a55ac2b013a9514d214c4a6a9755c2798a671b01d5085fadf777628d0b10da9527dbee7ee79eec579462b962d510f452c7928a8d87cb9e711aa20aa7002b7e7537af5f43d619e9d143fecd5a923af5cffa9df0704d35112aff39456252f04a1b2379bd612c18b1c0bceab90a8da6c76ab4dc7766cbbd368dab6db824049d378ccb21584df2995cb5ebdbe23af259c2729c5399335c2d7aff7f5c7a37a2ef83d254ad6f739eb4023eb9fb01ea79c60c578d69f4d414121a998d335662968780b5d465ff773d7185ed712003f32423121bcc894d6052908cf629614c26445bd676474be3ba0a937f686a1b5109470b19cb3e5c2c2d29acff355c51a4e667e78b0c06b9d7171a81d3bc33a0d2617d6220701775852b9b06ecebdc0b3deae1656df3ab606fe89b5977ce45b33dff7a6a175707c689d0593d9a5f5edf63d04642fa9542c33a2431ca5540b7e69ece8e33c75005640593ae79d86839bdd861bc55187c45dbb1dc50d1a45dda8d3c676d4206e8bb69611c510a774761385339e75e2b6db24308cd875ba84441853d275edc85d527d6ab4a1bdad0e6ea16d053d09a6e809933997ac6c2eba0946a1370f83993f1c849e2923c645aa4e4a71ba88f73a151409a0ffd4b5d55ec681494f6ae4875e301886a36baf5c8e314d30d94c1f603d629c4a0a682cf09a2a2a2ef8129a862e27d351389af883314498895fee1012f57e3ebf05849bdc7459997f340d83917f6604ec10d7382d0ce4b13ca0410e5ad1765bf9779a41100c6e811a0b81377ff8a01ca7a5c3ff4261f0c62a65ee289b48b3edaca33dabb5673968fb6b0bbf0a82975632a3ab9917dca2f22aa0311534239faf16808de3f32fc6eef50218de2ff04805366c32919a85085a6e345b9b5acae866c375da0e3260a13ef8",
      "3aedee6e743a87ce48d734532f2595afd77451bb0af90a02272ca26fa6b8fd0d872a83dd3f050000",
    ],
    [
      "ETag",
      "HSeQwJgiE3guZ3kF6sQ9Nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1636337013394"
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
      "5b",
      "6b",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f4",
      "3501d788b5820f5a8215522fa93e1591358e319a64d2bd5844fcef9d8d120a7de9cbeecc9c6fd873d82b9cb272077dd866e9974575794ad12c5c11a3b6b9d17c55546a040fd0c894c9c5329fcf706c69a17be12c9487e1bbe8a58301133a396021a17f857d86f94e43fff30aa52c90d7369beac488b954ae9b4c97e1388c7950d0ce0da6ab281a8ea2106e5eb3220bb2a5f9d7d2fae6c191b631ee516199a0f350293a6262262e9e964595a3afc9aa0435d4702da48a6c251591cf135f889e2fba4137089e5b22085e3a4ce694489351c9f0ea83ed812123f398be391e040ca8bae4a4fbfa3cf3b85dc738d780f3f65b138dd6fea3751a4d386dfd786c7431a8e78ad8ba46e7ba754ff04a2e95e1b44659f42091fc016f99b9f7b71f33200452dd010000",
    ],
    [
      "ETag",
      "QTlPOeGuoQs8EOEahAM18g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:10 GMT",
      "Server",
      "ESF",
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
      "e1",
      "92",
      "42400000e077d9df31d254dcbf5c9924c4d0d21fc3dab451b4bbb134f7eed7dc6b5cdf3b7c2f902184194b7953e13bf80243a6ea3292ed5633ccf2b28f50aaea70316eef3e8f245728b56b6b52c882bab868a3435dfdd8174701775dacc16155f690248649d476233d3ac75a27d2e9ca79d8edcecbf955ca82e76db72149e1396d60ac72c4d630b6bd67ac547cfb1029bab3c7b8674ae34684856d25c54b76a27e79dc66f9a1b6f65a437c28ce07afb2a077b586a0fa4e065438e266a52bba98c2cb6636cf6a73e05e9c4761992b37df3ce4762fa84be8b46f2af9e3e3ff021380454b286629796f9fcd757d02feeaa77c68f1fbbf81338a29f8f905dbd9635819040000",
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
      "Mon, 08 Nov 2021 02:05:10 GMT",
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
      jobId: "grouparoo-job-119-1636337013394",
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
      "95f74adb84346d53a91a5509a3539b429ac2d83445b67313ccd238c40e08a1fef7dd38948190c6536cdf73ee39f723cfe48f281232214c64f735544f5fee2423470434cdf0f56a76713e7a9c7d4fc2cb1bc5d88f9fc743ee5f4ea788100d4bd15d994357c9bae2a026db4d2fab645dd24aca2e26eadab6d7b587ced0714696ed38de00890af274298a3f48bfd5ba54937eff20decba4cc72a0a5503d2e77afeffd87e37e59c93be05af5df6bf65146f53f51fd9a4b4eb590c574bb4107b5822a861d15397af8474dd8c9fbdc3d4177bd0cc10f8203e55cd6856e7c610a2e8b54647565b292c933313edf1cc8c65ffaf3a8c3655eef8ab8a03b38ea2454d3583f95d0390bd7abce22385b87ab59b45807f1667eeeaf66bdf97ab95d059bcef5b91ffa1d4d590e86db99764ecc2dc00bea27a0b4288c7ad43c37ca2f1d5a7c1c4c434069056d301e59436a8f2d8fa56cc4d3b1e3b2d402c6c66ce4528759dc1bc02061409167440d8b16b270ddc461de88c5d4053b1e30c78b993b64f1183ccfb559c21dd725fb23f258090da742955289b643e43a5c447e1c85db603e8b7c53424aeb5c9fb6c69a02de7ad4582082fe53d3be890a894a4dbb1741e487b379b4b8f2db092f21a3fc69738f334e69ae00d1b4c2e669a85632c1869160b6f24f116c267671082a32f9f54c9a9e372edeb4fc951ee1001bbbda7cc9260a17c13763e780b8a2796d200fed819468f9166b43d7fbdf88c42d6db390cbad1fde90f62984142a28f8e7d344b0097cfeb71d361fc1b8fba8a334de7179b86a547805ed120953ef0bdbb62dd772880157fa436c68d987b635399a8cb08342bf94d46e3e56da8ad5ea1584419c7f60dab5ff0b01742c",
      "c77b040000",
    ],
    [
      "ETag",
      "VAPH7wAJdRQYsbbXZ26cEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d926f4fc2400cc6bf4b7de94858865396f002151433903f23d118438eadc0f4b6cebb9b0409dfddde54346aa26f6e6df76bd7e7d96de131cd1308609e2e9f4a549b83259a910dc6a84b69343f0aca35820368c492c9f22a098d0c47ddc9fce6fcd6ac072fb27f386ab598d0f10a3301c1161629ca444370b7855c64c86d31c932cb6755e680d914b63889c6bdc105e71925361f4cc3b07d1a7660e7ec1b1361c4ace2ffd176bf73e081e6635ca0c23c46bb4ba1e80163d3b332b5c80a89354da58a514305572f968aca4228a21a576aaedbacb9bee77bde71ddf5bc66834949b13029e50c4f27bc201832428e69cd32c1674055212b5e54e73397d3a45262c3de20f21bd5825f018531a964f62757f0be2bc1bfe1037bb7e03b27322a73b3a7bae175fbb771ece9e7a8f376d4f94168c34eed91a8d7ef4ca2767f68b9fb77e9a71b837aa8888dd4683d74eb8d93a363bffe66eb1959abf93b8151253a100bbe1d97a9816021a4c6dd2b1dae85817b020000",
    ],
    [
      "ETag",
      "uJdLtlLQFSbXDYtwNzlM+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:11 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1636337013394",
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
      "fd6f9b3010fd5790f74babe50392403ea4a8cb12b6a1a5a425a455354d890143dd02a6b6e99456f9df7798a66dd66d9590e07cefdd7b679f7944b7348fd0080534b92b09df7eb861016a20227102ab8e271e4ebfcf57e71f6f06b30b77f2e017f338198f01412b96c0599192a660250f8918ad96ad84b3b2c09cb126146a1a1dbd69585dabdbedeb46b73bec015190349ed3fc16e8d7521662d46eefc55b0963494a7041452b64d9f37afbbed32e38bb21a114ed43cd36c888f63baa27290bb1a42c1faf96e0a01484af4986690a1e5ea851f0e9b0768be2ac9500f89e860487212b7359f9821221cb639a945c5545a347a47cbefa404b7b6e4f7d6dc349c878b4a6d146c3425baf8bdb86365dac5cff6883b3aae2e6b84aec03ed8bb738d5360518b8c682888d76f9cdf66ced6569a38db5136de2ceb483e28eabad5cd75efadad1c9b1f6d55bacceb4cf57af21603b2242d25c99f6719092caf0d3c63a6fcfb3226009927572ddd72d6c0cf4611007fd301e74cd20d649100c82be89bb811e0e7ba4170504034f56d5150be72ceff74d33b28ca119f4888923ddb20c93585167487a46df8a4cabd3d5c3c1a083760df48b53496654144cd07a73d1a5e7f8f6daf756ee74e2dbaa8d1897a99cd5e6aa265efb94d02480fed3d7aeca52064ad54939ae6f7b93a9ef5cd8f570cc4982c3edf20ec623c6a92080c61c6744127eca22d83474b6583abeb370277360a8133fdb23041afd787c21f8db42edb2546fb4f43dc7fdaa0cec1117382d15e4befe40b800af68b76bfcbbccc4f32657208d39c7db3f72d08ed5abe87f91507815d536f79206aad4f651e720ea1d4416dafddcc1d34070d36a6574beb2bd2b542f7924269ce4e1fba305609578ff8fb1bfbd0086fb0b3a42420c931c8a4a25e4a49e689aa95e6ab66118e650470acce59b9c35e8ef8faeaa51552419c9e5534bf5ed55bb58a54af10c82240ca2ab4e71f71b0dcf59403f05",
      "0000",
    ],
    [
      "ETag",
      "IRszMKLUQ+j8DVNAzTpLfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1636337013394"
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
      "83",
      "40",
      "1085ffcb7814d2220653921ec490b609368a363131a6d9c274a5050677871824fc7787b6f1ec69f7bdf966f6cdf6702cea1c42d815faab45d35d69e4e7f192a26d4bb67234545b0407909516329a4cccec27b956c592f56319bc69f2167a3e17c2669f5829087bd81758e616c2f71e6a55a1b46db7cd5110ee9a51add6aff1224ec5a8281f8df52649eea32486c1f96b5115b535ffabe96370e040bb14f768b0ce70ccd0183a60c6ab713dabaaa644d7526b32b470824f056da86d942172c571bd9ba9eb057ee0fb7753cff767b7429694292ea81678f322f180895599d2b7ac0753b8e8a863b44f8664bac5fc5291910f343ecc12884d8b0e644afe6859f0590fbf38b9dc8080010000",
    ],
    [
      "ETag",
      "B//r9zL+aiHtgMl6Xgo1Gg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:11 GMT",
      "Server",
      "ESF",
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
      "ffedd34b7282300080e1bb64ad8e3122d21daf00462803563b6c3211630d2a8f0023b1d3bb97e935ea77837ff17f0396e7bc6d69575d7909de80620b6396cf48bdb6f057f1244aed9a8b9326eff00c1b3bf0b0ea0b58ed7953990bb2f1bb65da4a647747f339bd2494dd91efe6f7b5b70eb5d6474ac08d27f56b4a5394b9f0ccc2005adae11ce9c3235e84ac4b0f24b2bd28dba1781a62cbb99d3ee241acfa443f666e6a53546c55b2dbd74d1ecf8f50f33ef5fee657e150f27d80890395b0632c737265e5768bad87e11a851bcd07af2f4c3a3695a7868b2031a325918e89c46af6f2f27f8109e0432d246fa9186f479a614cc0dffab453351fffb738935c829f5fe239009319040000",
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
      "Mon, 08 Nov 2021 02:05:12 GMT",
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
      jobId: "grouparoo-job-121-1636337013394",
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
      "000000000002ff85536b4fa34014fd2b64f6ab7d50aa7d24cdda545c892d5d29d5ec6e366466b8e02830c80c9aaee97fdfcb605d8dc9fa0598b9e7dc73ee8367722f8a984c0913e9430dd5eecb9d64e48880a629ded2cbdd937dfcb4bdb894dee24ffe93ce5dbabc9acd10211a96a279994147c9bae2a0a6db4d37ad645dd24aca0e26ead803bb639f38278e33eadb8e3319225141962c45718ff45bad4b35edf50ee2dd54ca34035a0ad5e5327fbdef3d0e7a6525ef806bd57bafd94319d5fb44f56b2639d54216b3ed061dd40aaa08722a32f4f08f1ab3d3f7b9bb82e6dd14c18f8203e55cd6856e7c610a2e8b44a47565b292e933313edf7c908dbb7417a1c56556e74554d01c8eac986a1ae95d09d679b05e599e7fbe0e56f3d05bfbd16671e1aee6ddc57ab95df91bebe6c20d5c4b539681e15a33ebd49c7c3ca07e0c4a8bc2a887cd75a3fcd221efe3601a024a2b6883d1a87f42ed717fc21236e2c9d83966491f181bb3d13175589f4f86308c1950e41951c3a205d6dca783093e22404c3464ce38a2a3c138725862c7f6d861713224fb23f254090d6742955289b643e426f042370a83adbf9887ae2921a175a6cf5a634d016f3d6a2c1041ffa969df448544a5a6dd9e1fbac17c117ad76e3be125a494ef360f38e384660a104d2b6c9e866a25636c18f1e72bf70cc16662df0f4145a6bf9e49d3f3c6c59b96bfd2431c6063579b37d98481e77f33760e886b9ad506f2d87e90122ddf626de87aff1b91b8a56d1672b575831fa4bd0a20810a0afef934116c029fff6d87cd4730ee3eea288d675c1eae1a155e41bb44c2d4fbc2b6ed813334ffaaa695fe101b8e4687b635399a8c9043a15f4a6a371f2b6dc56af50ac220cedf37eddaff05278c088b7b040000",
    ],
    [
      "ETag",
      "aKyw15wUHKoICzmZaAEaLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92614fc2400c86ff4bfd3a12e660e8123e80a2620005468c31861cb70e86db3aef6e1a42f8eff626a25113fd726bbba75ddf77b785a7248f208045b27c2e516d8e9668c63698a02e53a3f95150ae111c4023964c52e3f97e159be35682325bdf37ef866b753d6eb799d072859980600b718269a42178d8422e32e436496999e5f32a73c06c0a5b9c8693fee892f38c229b8f668341a73be8c1ce393446c28879c5ffa3ed71e7c09a16138c51612ed1ee52285aa3347d2b538bac48b1a6a95412355470f562a9a82c8422aa71a5e61ebb35d7f77ccf6bd55dcf3b6d3099921426a19ce1d99417044346a4137a6599e033a0aa9015c7d5f9c2e524aa94d8b03f0afd46b5e05740a12415cdffe40ade7725f8377c607b0bbe7322a3323707ea6270d3f96d1c7bfa39eabc13f67e10dab0530724ec0f7bd3b033bcb5dce35e7a776350df2a6223355a0fdd7ae3a4d9f2ebefb69e91b59abf131855a20352f0edb84a0c04b14835eede00a12566697b020000",
    ],
    [
      "ETag",
      "o4qYhft27iecmjY5WMjrJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:13 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-122-1636337013394",
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
      "ff85547d4fe23018ff2a4def1f4d78d9186c40623cc49d4782c31b43632e17e8ba0eab639d6da73186ef7e4f375139efce848475cfefed699fee19dff13cc1431cf3f57dc9e4d3975b11e306669aace1eda33df3c6ee3d5b7cbf185d3df44fdcc14d713d3a3a0204372c453645c69a4a949232355ccc5b6b29ca8248219a20d4b43b9da6ed3aaee37896ed38832e1015cbd229cfef807ea375a186edf6cebcb516629d315270d5a262f3fabefdd0691752dc32aa557bdfb30d36aafd89eb712628d15ce4478b39242815934bb6213c830c6fd424febaafdde264d35a03f8815346281565ae4d2e90a0224ff9ba94952a1e3ee32ae7bb073cf7a7fe38422bc9a890c992272b44145a2e8bbb061acf164174b0221ba3b83a3485dd027d0b67e7685540801ba2985aa1abef7ee823b44a88662b74848ed12838457bc293002d82c09f47e8e0f8109d85b3c5053ab97e0f81c809539ae755e088c41933615f3675f2f12c0d8168485017979ee512bb6f0de234f668da777a716ab138eec75e8f38b145075dd64d624680a78d7ac522b9c8a967a7940edc01893db76fd976e2805037715dafef593dd7f292a4130f18de36f0a3e49a9d725508c5eb8dc557e124f29751b808c6a3c8afda484999e9d33a9c69e27d4e0d4d02e83f7d6d4d950b7032a73409223f1c8da3c9a55f0fc694ad097d9adfc368a424530cd044920dd34c9e8b04360d5fcce69368320b46536054a77db143283cfcf9fc46889e8a6a9775f58f4f4d03db778297242b2bc043fd803b56c76a5a30bc3dbcdd36fead340ac3d135b81329c9d31f35e8c8ed1afa5f7c2a7cb5aa93ee7c6d6cdc5e53ecadba7b2b176f7f6de1d7c070d16a67fc63e187d7b87e15b2944996d3cfa70bc055e1f30fc6eef20218ae2ff8280d6b1866aa8c0b95ac1e6abea97aa9d9b6edd85d075760a93fd43a5e6f777a46c328b20dcbf54b4bf5e5ad76d1944af50a8222cc623009cea0fa1b48275e963e050000",
    ],
    [
      "ETag",
      "w1O7C6qeUHPAWv8B69hpYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1636337013394"
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
      "02ff8d90516bc2301485ffcbdd6b0bd63a65820f3a641644b63a873044627bedaa6d6f96dc3a8af4bfefa6ca9ef792dc9c7c879c932b9cf32a85311cf2ecbb46d33c64c86f6e88d1d6055bd9345516c103649509b91e4da347ec6bcdcd65bb89161f6a1b0fb2c944089b7c61a9607c85638e456a61fc79854a9528b6fd5e9f05e146bb53b47a9fbfcc63114a4a9db0da2c97d3d9720eadf7675125d515ffcbb46b3d38d121c6231aac127419b4a113261cb97a5695ba40df526d12b4d0c1dd4566a8d6ca10f9a2f841bfef07c3701886a35e10864f03210b4a14e75409bc594b3c606255c4f423f52010c074a3343d76eba5935d8dfbb46b7777d3ac61b4af86248245f77aef96e4995c3a96d46c6af42051f2918b9c6fe7f617b9fb65ada5010000",
    ],
    [
      "ETag",
      "S7AI5e2pptyvXUIHVaXR4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:13 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ffedd34b7282300000d0bb64ad4e0a01a43b3120280e23504cdd6430448d28221f0938bd7b9d5ea3be3bbc274819e3754d9b5bce0bf009fa5431276cb22aa79673144368cb7a7e76db6e9e34d542e2723f8655f3d86407c251e1e07ed81fce48e771ce04095b4a9be50772d100334faaea1dc1dc0b8591c7d1163ee82236cd429061162917a28f6511b2ab8bbfaec81665b0bb918bdab9a8f43d2391c9ca8f4e91d6dda6060c4f293e8e37f7c04f0f1a57dafaf1cdf479a8bac154c80dc9720403a78ef368bdb8cefa938ecd7b430b3b5862b6b30a7c890d95c8a4f5e176ed4ddedefe2f30025c96a2e23515afedaa669a23f0579f367dc95fff2d9e56bc023fbf0a6dd0f919040000",
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
      "Mon, 08 Nov 2021 02:05:13 GMT",
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
      jobId: "grouparoo-job-123-1636337013394",
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
      "0000000002ff85536b4fdb3014fd2b91f711da244ddf5235aa368c4a34dd921484a629b2dd9b6048e3103b2084fadf77e35006421a9f62fb9e73cfb98fbc907b51ecc89430913dd4503d7fbb938c9c12d034c3d77c6e0f78bebcb88148eb93fbeb939ead974fb3192244c352745fe6d051b2ae38a8e936ea6695ac4b5a49d9c1441db7e775dca137f4bc91e37adea48f4405797a298a7ba4df6a5daaa96d1fc5bb9994590eb414aacbe5feeddd7eecd96525ef806b657fd4b45146d95fa87ecf25a75ac862b68dd041ada04a604f458e1efe5177ecec63eeaea0fb6e86e047c181722eeb4237be300597452ab2ba3259c9f485189fef0e24f22ffd456c7199d7fb2229e81e4ead1dd534d1cf2558e7e1666dad82f34db89ec7ab4d90448b0b7f3def2e3697db751059d7177ee85b9ab21c0cd79a5967e616e005f577a0b4288c7adc3c37caaf1d5a7d1e4c434069056d30193943ea8e9d094bd988a7636fc05207181bb3d1807acce1933ef4770c28f28ca861d14216138a1d75284d86dea09ff4693a4c187359024ebfc77bc3d160e201399c92a74a68580a554a25da0e91eb7015fb491c6e83c53cf64d0929ad73bd6c8d3505bcf7a8b14004fda7a643131512959a76af82d80fe78b7875e5b713be848cf2e7e801679cd25c01a26985cdd350ade50e1b4682f9da5f22d84cece731a8c8f4f70b697adeb878d7f2377a8c036cec6af325511cae821fc6ce117145f3da401edb0329d1f22dd686ae0f7f10895bda6621bfb67e7843daa71052a8a0e05f4f13c126f0f5df76dc7c04e3eea38ed278c7e5e1aa51e115b44b244cbdaf6cd7ed3b8e470cb8d29f62ae3b3eb6adc9d164843d14fab5a476f3b1d256ac566f200ce2fc03d3aec35f818115be7b040000",
    ],
    [
      "ETag",
      "lA/5clDHYeStt+kW+2/tDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1636337013394"
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
      "c2",
      "40",
      "0c",
      "c6",
      "bf",
      "4b",
      "7d",
      "3b22381cba8417a8a88b80fc19266a0c39b70ea6b775dedd2484f0dded4d44a326fae6d676bf767d9edd1a9ed33c061f1ed3f94b896ab5374733b2c11875298de64741b94670008d983369e4edd5f322d95fde5c1d2d46c360742727ab65bbcd848e169809f0d790a428630dfefd1a729121b74524cb2c9f5599036655d8e2241c07830bce338a6d3e98f67a9d935e1736ceae311646cc2afe1f6d0f1b079ee8718c092acc23b4bb148a9e30328195a9455648ac692a55841a2ab87a315754164211d5b8526b1cb8b586e77aaedbaa375cf7b8c9a4a44898947286a7135e100c1921c7b46499e031a0aa901527d5f9cae534ae94d83018845eb35af02ba0302215cffee40ade7721f8377c605b0bbe7322a332373beabc77ddf96d1c7bfa39eaac13767f10dab0533b240cfadd49d8e90f2df7b0957eb232a8878ad8488dd6c346bd7974d8f2eaefb69e92b59abfe31b55a20391e0db71991af01321356ede00e06cb5297b020000",
    ],
    [
      "ETag",
      "tlYKkhf/wVK8hQPIQZlSyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:15 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-124-1636337013394",
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
      "db3010fd572cef1726f523df2d9510cb2083482565690a82696a1dc7ed3cd238d80e5385fabfef9250a0631b52a4c4bef7debdb3eff288ef7891e1114ef9eabe6272f3e1a7487107334d56b0eb9f9f3fb89bbb925ea553c7381b17b7791efb474780e0354b917599b3ae1295a44c8d66d3de4a8aaa2452882e08754dcbe99a9eedd9f6c0306dfbd001a262f972cc8b3ba0ffd0ba54a37e7f97bcb7126295335272d5a362fdbcdf7fb0faa5143f19d5aabf9fb30f6954ff9dacc7b9a04473511ccda6e0a0524cced99af01c3cbc50b3f4d3be768f93756f05e0074e19a1545485ae7d810415c592af2ad9a8e2d1236e7cbefac0d3601c9c2468211915329bf36c818842f37979d741279359941c2cc8ba565c7cac03bb05fa124f2ed0a204033f88626a81aecf83384068a134985ba023748cfce814ed2987119a4551304dd0c1f14774164f6697e8f3cd6b0878ce98d2bc681c2724cd59edf6e954c3b797591388060b6d703e303c620e8dc374990ee87268bbe9d260693a4c072eb153831e3accc9524680a76bf586450a5164e670e0b98e9b658cb9264dbda1454c2ff31ccb305c10b36c6adb694af0b6837f49aed92957a550bc3d597c1d8749304fe25974e2274153c69254b93e6dcdd545bcf6a9a14800fda7ae6d1de50232d5d714464910fb27497815b49d31662b4237d37be88d25c91503349164cd349317228343c3979369988493c81f03a3b9eecb1d42e1d1b7c71742b2299b53d6cd1b27e1055c917f71d978d881ae485e35a887f6035b8665740dab6bba89698d4c7b643a3dc3306ef176dbf9b7b81fc7fe0d18225292cd1f3128d2736afa5fb236f866d59adfb930719dedd9d3decad95b7978fb7d0b4f07c3f0b599f1d75910dfe0762b664b265941df6f38003781f77f22bb8106308c34e481e9d01cfa9baa3a0b95aced73be6e6a69d9a6e95a8e891bb0d46f",
      "62b66dec2eb4d6a815d99a15faa9a476a09b53ac43957a064110da330aa33388fe069907397f52050000",
    ],
    [
      "ETag",
      "AHHv5ykpcVbS40GLnZllRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90414fc2401085ffcb786d23b50402090730a8240d6ab551630859cab416da4edd9da20de97f67b610cf5e7667df7e2ffbde1e619f955b18c3264bbf6bd4cd558afc6c87104d9db391ada2d2203880ac5221af7f8751f3a17b87f7c87b4cde3677c528f0a793891026fec242c1f8084986f9d6c0f8f308a52a506ceb75b517849bca9e16cbd7f9fd3c14a1a0ad159651104c67c11c5ae7cfa20aaa4bfe9769d53ab0a34d88096a2c63b4192a4d3b8c7961eb19555439ba866a1da3810eee2e524d75a534912b8aebddf45d6fe00f7c7fd8f37c7fd41732a7587146a5c0d18bc403265679483f520f3c0174374ad3a45b0f9d6c6b5ca655bbba98660da379d224110cdad77be724b764d3b1a4665da303b1928f7cc8f87c6e4f173d19a3a5010000",
    ],
    [
      "ETag",
      "/x7UyYr0vXU1OfWbFm9L3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:15 GMT",
      "Server",
      "ESF",
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
      "000002ffedd34b7282300000d0bb642d8e3f10bb43407ee307a1806e3211220da124245a814eef5ea7d7a8ef0eef1ba03cc752c21ba3b8016fa047b3d5381f075c5f6fca4a16687faeb6fb5a5c981eda4416ee6c3930729fbbe525e914ea0c3c54e124e4cc6ee541d1e30ca2561a5c3df6cb093adb47e17a972462842f27866714be1591245a889dea337d773de62e5d58e6fc6bf319d302b9e783c31277e8ca48644e7affd0dfd3478d7a0aa91688809a5add9a71539b3363bbbf7b376b9a49489c537f854ea514fea66cf990a1b6f6cc93e65b9aa72ab69c9eac260e8966db3b948e5f5efe2f3002b8e344e0679be7f6b9ba5a8dc05f7d78eb397efe5f6324b0003fbf9ceb791a19040000",
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
      "Mon, 08 Nov 2021 02:05:15 GMT",
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
      jobId: "grouparoo-job-125-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b4fdb3014fd2b91f7953ed2b4495ba91a550923539b8e34054dd314d9ee4d30a471881d1842fdefbb712803218d4fb17dcfb9e7dc479ec99d2876644a98c8ee6ba89ebedc4a464e08689ae1abbd0e2f9d1d28594f96a5bcbe29ff7c67a3f96c8608d1b014dd973974305e7150d3eda69b55b22e692565071375ecc1a863bb8eeb385edf769cc910890af274298a3ba4df685daa69af7714ef66526639d052a82e97fbd7f7dec3a05756f216b856bdf79a3d9451bd4f54bfe692532d6431db6ed041ada04a604f458e1efe5177ecf47deeaea0fb6e86e007c181722eeb4237be300597452ab2ba3259c9f499189f6f0e64e32ffd456c7199d7fb2229e81e4eac1dd534d14f2558e7d17a6505e1f93a5acde3601d269bc585bf9a7717ebe576156eaceb0b3ff22d4d590e866bcdac53730bf182fa38132d0aa31e37cf8df24b87828f83690828ada00d265edfa5f6b83f6129f3783a76462ced036363e68da8c3fa7c3284e18e01459e11352c5ac8820db83b99809d70afcf92214f9d84baf62071c729d89e07e9d8a6e470421e2ba1e14ca8522ad176885c4741ec2771b40d17f3d83725a4b4cef5596bac29e0ad478d0522e83f351d9aa890a8d4b43b08633f9a2fe2e0ca6f27bc848cf2a7cd3dce38a5b90244d30a9ba7a15ac91d368c84f3957f866033b11fc7a022d35fcfa4e979e3e24dcb5fe9310eb0b1abcd976ce22808bf193b47c415cd6b0379680fa444cb37581bba3efc46246e699b855c6efde827699f2248a182827f3e4d049bc0e77fdb71f3118cbb8f3a4ae31d9787ab468557d02e9130f5beb06ddbc504c4802bfd21660fdc63db9a1c4d46d843a15f4a6a371f2b6dc56af50ac220ce3f34ed3afc05d17e9bf97b040000",
    ],
    [
      "ETag",
      "1ONQ3desou9LpoWhpxJb5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1636337013394"
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
      "0002ff8d92514fc2400cc7bf4b7d1d09733064090fa028338008233e18428ead8ce1b6cebb9b8610bebbbd8968d4445f6e6df76bd7ff7fb787a7248fc08355123f9728776731ea7b134c5195a956fc2828570816a0163193b69dc7657f3478d0b76dbaf26339c19e8a3b1d2654b8c14c80b787758269a4c07bdc432e32e4b690d232cb97556681de15a6380ba6fef886f38c22938fe7c361b737ecc3c13a3546428b65c5ffa36d71b0604bab29ae51621ea2d9a590b4c550fb46a6125991624d5129435450c1d58b585259084954e34acd3e6fd66cd7711da755b71da7dd6032a550e8847286e7335e103469914ee9956582cb80ac4256bcaece172e2751a5c484fe38701bd5825f018921c968f92757f0be1bc1bfe1033b5af09d131995b93e51d7c3bbee6fe3d8d3cf5157dda0ff83509a9d3a21813feacf82ee6862b8c5517a6fa7514d24b1910a8d8776bd71d16cb9f5775b2fc958cddff1b42cd18250f0ed18241abcb548151ede005754f7477b020000",
    ],
    [
      "ETag",
      "11nguEMHWtJ9oDIgrPeBsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:16 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-126-1636337013394",
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
      "0002ff8554fd4fa34010fd57c8de2f9af48b52a03669bc5ad1eba552a554632e977659165ca52cdd5dbc18d3fffd86c5aaf53e4c486076de9bf766779667f4c0f2180d50c4d24d49c5d3977b1ea106a20aa7b07ac2a22ce98faf62629f6f0279f6fd823f6cd2e11010ac6249bc2e32da94bc1484cac162de4a052f0b2c386f42a1a6d9759aa6633996e5764ccb3aea0151d22c99b2fc01e8774a1572d06eefc45b29e7694671c1648bf0f5eb7afbb1db2e04bfa744c9f6be661b6464fb13d5e38c13ac18cf878b39382825154bbac62c030f6fd438faba5fbbc5f0ba9502f891118a09e165ae2a5f5082f03c6169297455347846dae7bb0f34f7a6de38345682122ee2258b570696c672593c348cf16ce187072bbcae2aae0eabc42e30ce82d985b12ac0c01d9654ae8c9b6f5ee0196f80a1716c8cfc5363aff4c43716beefcd43e3e0f8d0380f668b4be3e4f63d044cc7542a966bcb218e325ad97dd9d6c99fa75911b0020f7572e9761c6cf63b475112b924e95b7694746814f523d7c656d421473dda8b238a81a7aaea9a85739e77a33eeedba66b13d776bb8915d984ba38b161298eb09b385d4c7b8410b46da05f82297aca64c125abb716dd0493d05b86c1c21f8f424fb791e03253a7b5b9aa89f73e153409a0fff4b5adb28c8352754e133ff482d1389c5c7bf5684c698ac9d37c03c391e04c52406381d7545171c163d83474399b4fc2c9cc1f4d81a1cffb72879068f0e3f98d103e157a97957ea3b3e96c143a3ded6007b9c659a9318ff507325b3620b68d7f971905c1e816a4b110f8e9430eda7134fd2f0a1aafa3dae6ab22aad47651772feaed450edafedcc2d34070cf6a6574b5f0825b542f0534a182e6e4f3d102b04e7cfebfd8dd5d00c3ed051da920864926b2522182d613cdd6ba979a6d9ace9169230d16ea63ceed58ddddd15535aa8a744d73f5d2527d77f52e56a952be82200983e84ffc73c8fe06c05e0cd43d050000",
    ],
    [
      "ETag",
      "Biblf8CQdc5GqRsFJMokqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-126-1636337013394"
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
      "51",
      "4d",
      "4fc24010fd2fe3b54d282535927000240a41c02a2743c8b20cb5d076eaee548284ffce6c3144e3c5cbeeccfbc8be973dc22e2dd6d086559a7c54680e3709f2b31b62b455c656ae920a8be001b24a4419ed66e9fde82bc9f5b4ff344aa67bd51dea7da7230aabdf3157d03ec226c56c6da1fd768442e528b6e5b2dc89840fa5db8693d7c1c3201620a7b50326f3f1b8db1b0fe0e45d2d2aa7aae07f9916270fb6b48a7183060b8d2e4369688b9a87ae9e557999a16fa9321a2dd4e29a480c55a53244be207ed08cfc200aa330bc6d046178d71265465a714a8588e72f120f98586531eda51e842230f5284d37f5f9297050d77053b3cef6936b5eb9e00fd7facd2dbe1feb1d18edcc9044b7e852372e0dfae45ab1b46553a1075ac9073ca67cd94f672dc14d98dd010000",
    ],
    [
      "ETag",
      "6kPiDJzgmcOCMJgOwaAIcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:17 GMT",
      "Server",
      "ESF",
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
      "d0bb642d8e7c04d29dd0f229037414aab0c9c410308a400905a2d3bbd7e935eabbc3bb034c08e51c0ded8536e00508acc02559069d6939155bdf64b5ae58e8a8e2d6eca26b5ac2a950cc8e04e74d90b3d6983bdd9cab8d88fb610c6d989da495c50b9de34a873532be467b2a693b396fc507cbab2c4efc54498f21bf1c8d6e270ef638633997e2b5819cc6bf222dd3899b27b22075be6249a3c69f9626b77574555e2369b6a3ef63d930e469b7c1f70a199e066f5a458cfb31f6f699eb677be48ee2fc8eb474abb774d81f6cb6e58d102196b12724b27c7afabfc002d0b9633de5883db6ab6b0817e0af3e1a44471fff2d8a7bda839f5f9317c39919040000",
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
      "Mon, 08 Nov 2021 02:05:17 GMT",
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
      jobId: "grouparoo-job-127-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fdb3014fd2b91f74adb94b44d5ba91aa584ad529bd224056dd314d9ce4d30a471881d2684fadf77e35006421a4fb17dcfb9e7dc8f3c937b5124644a98c81e6aa89ebedc49464e08689ae12b67b073b75be56fcf3737e39fe1d5b9fd703d9fcd10211a96a2fb32878e9275c5414d776137ab645dd24aca0e26eaf44fdd4e7fe48c1cc7b5fb8e33192051419eae44718ff45bad4b35edf58ee2dd4cca2c075a0ad5e572fffade7b3ced9595bc03ae55efbd660f6554ef13d5afb9e4540b59cc76213aa8155431eca9c8d1c33f6ac2cedee7ee0abaef66087e141c28e7b22e74e30b537059a422ab2b93954c9f89f1f9e640426fe52d228bcbbcde177141f770622554d3583f95605d069bb5b5f42f37c17a1e2d377e1c2ebe7beb7977b159edd67e68dd7cf702cfd294e560b8d6cc3a33371f2fa89f80d2a230ea51f3dc28bf7468f971300d01a515b4c1d8b547b43fb6272c652e4fc7ce90a536303666ee903acce693010c1206147946d4b068210b9a0e9c09e39398d983241e24dc89c77c92c6433ee0a7233e1c5177480e27e44f25345c08554a25da0e919b6019797114ecfcc53cf24c0929ad737dd11a6b0a78eb51638108fa4f4d87262a242a35ed5efa9117cc17d1f2da6b27bc828cf2a7f001679cd25c01a26985cdd350ad65820d23fe7ced5d20d84cecea185464faeb99343d6f5cbc69f92b3dc2013676b5f992300a96fe3763e788b8a6796d208fed819468f9166b43d787df88c42d6db390edce0b7e90f62980142a28f8e7d344b0097cfeb71d371fc1b8fba8a334de7179b86a547805ed120953ef0bbbdf77dd91430cb8d21f6213db39b6adc9d164843d14faa5a476f3b1d256ac56af200ce2fc7dd3aec35fa27c12657b040000",
    ],
    [
      "ETag",
      "cbeU7QQsNQBOW8ZSPB0qVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-127-1636337013394"
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
      "c2",
      "40",
      "0c",
      "86ff4bfde888e070e8123f0c459d22220c636208396f650eb775dedd3484f0dfed4d45a326fae5d6764fbbbeef6e058f6911830ff769f254a15a6e2568ae6d30425d6546f3a3a44223388046244c4617526c0f7643b3334e92db059d87dd9bb3e0f090092d1f3017e0af609e62166bf0ef5650881cb94d5256e5c5acce1c30cbd216c7d1281c9c729e536cf3c1a4df0fbafd1eac9d4d632c8c98d5fc3fdaa66b0716743fc2392a2c24da5d4a450b9426b432b5c8cb0c1b9a2a2551430dd72f124555291451832b8dd66ea7d1f25ccf753bcd96eb1eb499cc480a9352c1f064cc0b822123b211bdb04cf0185075c88ae7f5f9cce534ae95d8301c445ebb5ef02ba050928a677f7225effb20f8377c60ef167ce7444e556136d449ff2af86d1c7bfa39ea38887a3f086dd8a90d128597bd71145c0e2d377d97de5d1ad443456ca446eb61abd9dedfeb78cd375b8fc85acddff18daad00129f8769ca506fcb9c834ae5f01a00a928d7b020000",
    ],
    [
      "ETag",
      "TKca+N2It/SggXjoJIBVHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:18 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-128-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85547f4fe24010fd2acdde3f9a20145afa83c4789cd63b1228528ac6dc5d60db6eeb4ae9d6ddad1762f8ee37db8a4af4ce84844ee7cd7b6f6667fb84d6b448d00045347ba808df7eb967116a212271066fe56216d913c7b39da83bd32f27d3359d8db3d35340505525f0a6ccc98960158f89182ce6ed8cb3aac49cb113203ae9f69c93ae65588661eb5dc3704d2814244fc7b45843f99d94a518743a7bf176c65896135c52d18ed9e6e57de7b1d72939bb27b1149d43cd0ec888ce27aa67398bb1a4ac385dccc14125085f920da63978782d4da2af87dc6d8a37ed0cc08f3426388e595548e50b286256a434ab78cd8a064fa8f6f9e601cdbdb1771e6a2b4e62c693254d561a16da7259ae5bdaf974e187472bbc518cab6395d807da65309d68ab120cdc6141c44abbf9e1059ea6ad14c3af4ad70da29d6943ff423be01ef9dac2f7bd79a81d9d1d6bdf83e9e24afb76fb1602ae1322242d6acf218e72a2fc3ecf75f4fe3855019660a2492e6dddc25d4777a334b2e3d431fa51aa93287222bb8f8d488f5d9398494430d449c55e57e18215960b38d3b423c7365dcb217dd7b512db70886ba49669bbb69d3869cfeda35d0bfde154920b2a4a2668335b74138c426f19060bff7c187a751b29ae7279d198534dbcf529a14900fda7af9dca52064aeaa0467ee805c3f37074ed35bb3126198eb7f307d88e14e782001a73bc2192f0094b6068e86a3a1f85a3a93f1c43457de0577b8440839f4faf05e1b6aca72ceb7fa56599b5fe1e708df3aa463c360fa80b63d8b5fe4d310c82e12dc862cef1f663fa0ff96b7c1d35165ff49052db47bd83c83c882cb4fbbd835f0bc1256b94d16ce105b7a8791590947052c49faf1580ebc4e71f8bfdc505305c5dd0111262d8e25828959893669be9a6eea5a9ee761dcbd1510de6f25dce318dfdb1290ec54836a490cf2d3517b79ea24a55e205044958427fe47f87ec5fde7f2e8d3a050000",
    ],
    [
      "ETag",
      "tUQb7M8E78b1Q0FMOkiQLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-128-1636337013394"
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
      "000002ff8d51d14ec24010fc97f5b54d2847404978104394a4a2561b130d21d7b2d442db2d775b0d21fc3b7b85687c31bedccdcecce666727bd8e4d5128690e4d9b641b3bbc8909f1c88d036055bb96aaa2c8207c83a13e7c3406358267d8cbbc966abd4ecbe787bcd462371d8f4034b0dc33dac722c961686ef7ba87489b2b658d41bb1f0ae76d374f632b99d444294b474c42c0ec3eb71388183f7bda24b6a2afed7d2fce0c19a92085768b04ad165a80dad31e5a9ab67755917e85b6a4c8a165a732b64869a5a1b225f183fe85efa415ff5951a7402a5ae7ae22c28d59c5325e6f859e20113eb22a22fa9074a0ca685d274d59e9f4277db1a673477f8470bfed07abfb5f9f9b1f18ed13e1a92e8165deacea9c10db9562c6dd934e841aae503ee723ecd872342794e1bdd010000",
    ],
    [
      "ETag",
      "O7aeLmb6eU2bkq33NMlZWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:19 GMT",
      "Server",
      "ESF",
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
      "4d",
      "72",
      "82",
      "30",
      "18",
      "00",
      "d0bb646d1d1554e82ed4402916284605370ce267e4c7100982d2e9ddebf41af5dde17da3244d41cab8a90ae0e815dd93893e4c878ed00c939dbcd6ee2e18ef822c3ab4c20506e7243e40568ae3a55dd78728b188a48eafcdd7b669b5e3be006a8be3e42db07ac2a7f2e39c872a7158e53933c5150b304225ef56654a2763aaf4a55d565a2e0db9b3d60df1b4aff7c8e59f6132cf12ca785548083ab5dda6cd7ebe24ae1ffaf9798331dd07eab122f76ab49af56ce4e334f275afdfe02bcb0cbe34f34255e4084faf8cbc989e0301a7ba7fdadeac85e0c3a7a7ff0b0d10dc4456838cb3c77665aaeb03f4573f6eee021eff0d486aa8d1cf2f1237a4c319040000",
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
      "Mon, 08 Nov 2021 02:05:19 GMT",
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
      jobId: "grouparoo-job-129-1636337013394",
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
      "3014fd2bc8fbda8400794bd11aa574654a4807a4d5364dc8980b754b30c5a65357e5bfef629aae55a5f513b6ef39f79cfbe089dcf132257392f0fcbe81faf1d3ad48c8090145737cfd716fabd5d749144dededf84f92afd9a579bb5c2c10c15b96a4fbaa809e144dcd40ce77613faf4553d15a881e26ea59f6ac678d9db1e34c0696e3cc86489450646b5ede21fd46a94ace4df328decf85c80ba015977d26f62fefe6836d56b5b805a6a4f956d34419697ea0fab9108c2a2ecac52e44078d843a863de5057af8474d93d3b7b9fb9ceefb39821f3803ca98684ad5fac2144c9419cf9b5a6725f327a27dbe3a90d05dbbabc860a268f6655cd23d9c18295534568f1518e7c1766378fef936d82c236febc7e1eac2dd2cfbabed7ab7f143e3fac20d5c43d1a400cd3516c6a9bef97841fd14a4e2a5568fdae756f9b943defbc1b4049496d005e3c9604cade9609664c9846553679464034892693219512719b0d91086690214795a54b368294a46d3ccb1b234b647d6281e52801859563c4d327b9a02b527d9801c4ec8ef9a2b38e3b21292771d22d78117b97114ecfcd532727509196d0a75d6196b0b78ed51618108fa4f4d8736ca052ab5edf6fcc80d96abc8bb72bb09af21a7ec31bcc71967b49080685a63f314d41b9162c388bfdcb86708d613bb3c062599ff7c226dcf5b17af5afe428f7080ad5da5bf248c02cfffa2ed1c1157b46834e4a13b900a2ddf606de8faf00b91b8a55d16f26de706df49f71440063594ece3692258073efedb8e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef7996d59b3d1c8261a5cab77b1f1d039b6adcdd166843d94eab9a46ef3b1d24eac912f200ce2fc7dddaec35fabc1da5e7b040000",
    ],
    [
      "ETag",
      "Zq2tCJ7TT82O6zbgLcP/jA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-129-1636337013394"
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
      "02ff8d92614fc2400c86ff4bfd3a12703064091f86a2a28008c39818438eadcce1b6cebb1b4808ffddde44346aa25f6e6df7b4ebfbeeb6f01c6721b8308fa39702e5e628427d6b8231aa22d18a1f39650ac102d42262f2cebbb25f570dbc0e63ba3fa6e5329b76a275bbcd840a9e3015e06e611163122a701fb6908914b92da0a448b3599959a037b9294efc716f78c1794aa1c987d37edfebf4bbb0b30e8da1d06256f2ff687bdc59b0a4f9181728310bd0ec924b5a62a07b46a612699e60455121035450c2e58b4852910b4954e14aa576dcaad41cdbb1ed66b566dbad3a93090542c794313c9df082a0498b644c6b96090e03b20c59f1a23c575c8ec35289097b43dfa9970b7e05240624c3d99f5ccefb3e09fe0d1fd8de82ef9c48a9c8f4813aefdf78bf8d634f3f479d797ef707a1343b7540fcdea03bf1bdc1c8708f7be99d8d463592c4462a341ed6aaf59346d3a9bedb7a4ac66afe8eab65811604826fc765acc15d8844e1ee0d1b16c7b47b020000",
    ],
    [
      "ETag",
      "VAJ3xv5eKdioX2ojjnUBgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:20 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-130-1636337013394",
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
      "000000000002ff8554fd4fdb3010fd5722ef1790fa9134fd9610eb4a06954acad214c43ed43ac92518d238d80e5b85fabfefe250a0631b52a5f67cefdd7be73bf791dcb12c224312b0e4be00b1f970cb035223a06882a7bfe8e9d7995b3417b7e3de7c76636fa2b34b961c1d2182952c49d7790a75c90b11821c2ee68d44f022a782f33a16aa5bb659b7ba76d7b67ba665db83361225a4f194657748bf512a97c3667327de48384f52a039938d90af9fcf9b0fad662ef82d844a36f7359b28239befa81ea73ca48af1ec683147078504b1843565297a78a146c1c7fdda0d46d78d04c10f2c041a86bcc854e90b4b843c8b5952085d950c1f89f6f9ea07993b5367ec1b2b012117d192452b834a63b9ccef6ac678b670fd83155d97155787656217189fbdd9b9b1cad1c00d952057c6d599e339c6cbd1caf85e98a60dc6b131724f8c3d85896b2c5cd799fbc6c1f1a171eacd1617c6a7ebd710f41e81542cd3ce7d1aa450ba7ebaddc9dba19604aa50b74a2e7b66975a7d7310c4412f8cfb7627884d08827ed0eb503b30c3411bda51001479aaacae5934e35907ac7e3b34ad388a6d930e10027dd36cf50082b8d78dfbb1d9c599757a645b233f055370c264ce25ab6e985c7913df59fadec21d8f7c47b711d322552795b9b289d73e153689a0fff4b52db38ca35239ae89eb3bde68ec4f2e9d6a43a690d07033bfc71d89692a01d154d0352810e73cc24b2317b3f9c49fccdcd114197aec173b8424c36f8f2f047f93eb5b56fa9bcc7d6fe29e6a033bc4254d0b0d79a87e90518e5ec9765bfb779991e78dae519a0a41377fe4b09d6ebba4ff4542e37554d9dc495aa454db45adbda8bd1775c9f6c7163f3582cfad52265f168e774daa230f62109085efaf168275e2fdbf8ddd1346303e62d4910a63dce450962aa1806aa3d95af752b1ad96d9362da2c142bdc9755aeddde8ca1a65455843a69e5aaa9eb0bec53255c867102671115d3dc5ed6fee10ced644050000",
    ],
    [
      "ETag",
      "xaGZONu/UjC7SOh3ydHVig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-130-1636337013394"
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
      "51",
      "db",
      "4e",
      "c2",
      "40",
      "10",
      "fd",
      "97f1b54d68b74224e101b45122215a248618429676a885b653f7a241c2bf335b0cf1c9f8b23b732ed973b207d81575067d5817f98745b5bfcad13cbb21416d4ba3f96aa8d6081ea091392b43fdfa3db5616f11cf1eefe87abeebe270910f06acd0e93b5612fa07d81458661afa6f07a865856c5bad9a1d4bccbe71db78fa12dfc7090315650e98ce2793e16812c3d1bb586445b636ff322d8f1e6c699de00615d629ba0c8da22da666ecea69593525fa9aac4a51432b6e895c916da422f219f103d1f183aee80ad1eb0442dc44ac2c2995a6a09ac5f319c703434696097d713d102c50edc84d37edf9c970d0d67053d466fbcd457f70e1850b1db7fc796cb437a89f1471748d2e75e7dce0965c2bc36d8db2e8412af9031e0a73de8f2774409e00dd010000",
    ],
    [
      "ETag",
      "2sWzNu27YESKDo5Uk6eAYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:20 GMT",
      "Server",
      "ESF",
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
      "ffedd35b7282301400d0bde45b1da458a17f520b228fe203117f9808179a06041204a2d3bdd7e936ead9c3b9239c24c079dc56142ee80d092c6b936462d7aa6ee4b939041e238e5f6696a12fbcaf5db7cd98e0a962b9dd4acaa04fe7920c6ac09712260ab5c3c6bb81e5f473a79cd2ea3371701d0be29b1d07aea5ca2533dc819c6c3c6ed2238848e977c2db12ab0cc34dd02e9cf13219067f5dea37e62b6b9e927d517d1c358c75e8becd4505b2dd1767abc1a1c7379198ceb4683f0b231a96aae4b3d5d0177a7b36e2e8aa362d550e703da40e85130ddcd7e5fbc9dc46f9e4e9e9ff422304434d18f0983cb6bfcc346d84feeac7ada8e1f15f07cc80a19f5f5defb5cb19040000",
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
      "Mon, 08 Nov 2021 02:05:21 GMT",
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
      jobId: "grouparoo-job-131-1636337013394",
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
      "000000000002ff85536b4fa34014fd2b64f6e3da9647df49b33615b5494b9552dd473664182e380a0c3283c698fe772f83753526eb2766e69e73cfb90f9ec91d2f623225114fef6ba89ebedd8a881c115034c5d79fe6f5c2be9a7f97ccbebb4827834baf3efbfd389b2182372c49f332838e1475c5404e77db6e5a89baa495101d4cd4b11cab630d9da1e38c4ccb71267d244ac892152fee907ea35429a7bdde41bc9b0a9166404b2ebb4ce46fefbd07bb5756e2169892bd8f9a3d9491bd2f547f648251c54531db6dd1412da10a21a73c430fffa87174fc317797d3bc9b22f88133a08c89ba508d2f4cc14491f0b4ae7456327d26dae7bb03d9ba2b7711184c64755e8405cde1c888a9a2a17a2ac138f5376b63e99d6efcf53c586ebc70bb3877d7f3ee62b3daadbdad717deefaaea1689481e61a33e358df3cbca07e0c52f142ab07cd73a3fcdaa1e5e7c134049496d006c39139a4d6d89c44493462c9d81944890951348e4603ea44269bf4a11f474091a745358b16a288cd11331d360e87d1380efbce78148e6d9884a6138dac098d1d8b4dc8fe883c565cc10997a590bced10b9f697811b06fece5bcc03579790d03a5327adb1a680f71e151688a0ffd4b46fa25ca052d3eea517b8fe7c112cafdc76c22b48297bdadee38c139a494034adb0790aaab588b161c49bafdd1304eb895d1c82924cff3c93a6e78d8b772d7fa30738c0c6aed25fb20dfca577a6ed1c105734ab35e4a13d90122ddf606de87aff1791b8a56d1672b973fd5fa47df221810a0af6f53411ac035fff6d87cd4730ee3eea4885775c1e261b155641bb445cd7fbcab66ccb1ed844832bf529d6b7ac43db9a1c4d46c8a150af25b59b8f95b662b57c036110e7efe976ed5f00b29d64b47b040000",
    ],
    [
      "ETag",
      "X0WC2VA+sc2kPg95QNuGZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-131-1636337013394"
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
      "414fc2401085ffcb782d91a650a40987a288184084120f8690a51d4ab1edd4ddad8610febbb315d1a8895eda99e937dbf75ebb87a7248fc08355123f9728776731ea7b534c5195a9567c2b28570816a0163193f5ac489be7e3b23bc96fe359fcd0cf46edc8ef749850e1063301de1ed609a69102ef710fb9c890d7424acb2c5f569d057a5798e12c980ec67dee338a4c3f9e0f877e77d88383755a8c8416cb8affc7dae260c19656535ca3c43c44a3a590b4c5500f8c4d25583dd61495324405155c3d882595859044359ed46cc7aed9aee33a4eab6e3b4ebbc1644aa1d009e50ccf672c103469914ee9956d82cb80ac4a76bcaeae2f3c4ea2ca892907e3c06d5402bf02124392d1f24fae60bd1bc19fe1033b46f09d131995b93e51d7c33bffb7e338d3cfa3aefca0f783509a933a21c160d49b05fe6862b8c5d17a77a7514d2471900a4d8676bd71d16cb9f5f7582fc944cdeff1b42cd18250f0df719368f0d62255787803aef6de827b020000",
    ],
    [
      "ETag",
      "0mpl5/NuBPnJgSgWGmM9dA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:22 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-132-1636337013394",
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
      "7f4fdb3010fd2a91f70f48fd9126a1692b21d641c6229514d21484b6a9751c2798a671b01da60af5bbefe250a0631b52a5f67cefdd7b773ef709ad5891a0118a59f65051b1f974cf63d44254e10c4e577d9bda567a4686f2d699dee7e17536e157c7c78060354be27599d3b6e49520548ee6b34e26785562c1791b0ab57bb6d5eef5edbe6dbb66cfb6870e1025cdd3092b5640bf53aa94a36e7727dec938cf728a4b263b84af5fcebb8f56b714fc9e1225bbfb9a5d9091dd0f544f724eb062bc389ecfc04125a958d03566397878a526f1e7fdda1d86d79d0cc08f8c504c08af0a55fb8212841729cb2aa1aba2d113d23edffc40336fe29d46c65250c245b260c9d2c0d2582cca55cb389dce83e86089d775c5e5619dd805c6d7707a612c4b30708725954be3e69b177ac6ebd1d2f85199a64d8d13631c9c197b0a7e60cc83c09b45c6c1c9a1711e4ee797c697dbb710f09e50a958a19d4738ce69edfa79bafefb4bad0958816e935cb8661ff706e6304e6397a403fb284e4d1ac783d83dc2766c92a1439d24a61878aaaeae59b8e045cf71d2233b71dde1d08c1d3b8963274ed3c190ba96499cbe6bdac4c2b6dd43db16fa2598a2674c965cb266c2e826f4236f1185f3e0741c79ba8d1457b93a6bccd54dbcf5a9a04900fda7af6d9d651c94eaebf283c80bc7a7917fed351b32a119269bd903ec488a7349018d055e5345c5054f6068e8723af3237f1a8c27c0d0d77eb9434834fafef44a8836a59eb2d2df6816857e70ae0dec10d738af34e4b1f98170095ed176dbfa779971188e6f411a0b81377fe4a09dbe53d3ff22a1f13a6a6cee24ebc9bf46d65ee4ec457db4fdb9854f0bc1736b94d1d5dc0b6f517314d2940a5a908f570bc03af1f1dfc6ee0903181e31e84805316c3291b50a11b4d968b6d6bd34ec9e65f5ac01d260a1dee5ac23777775758dba225dd3423db7d43c613dc53a55c91710246111037d8bdbdf9020364a44050000",
    ],
    [
      "ETag",
      "k63e32fDc9sY4OjlRVgLoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-132-1636337013394"
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
      "414fc2401085ffcb78a44da84b504938004121698854b9680c59b6432db49dba3b159ba6ff9d2912cf9e76df9b6f66df6c03c7b4886104bb34f9aad0d63709f2babb44e8aa8c9d1c25150ec103649d08f95def17ebb759efc7dd078b81d2a741cf3c4ec663219cf9c45cc3a8817d8a59ec60f4de40a17394b6edb63c0ac275d9a9e5ea75fe348fc4c829ee8cd5260c27d3700eadf7d7a273aa0afe57d347ebc1817611eed16261b0cb505a3aa0e165b79ed37999a1efa8b2061d5ce04b21b15495da12f9e2f881baf583a11a2a75d70f947a18089991d19c5221f0e645e20113eb2ca293ac077db8ea69cde89e2dc97487f1b5222367d43dcc12886d851e182d7fb448f957b767525555e480010000",
    ],
    [
      "ETag",
      "vyfHQZC+xs81H43aw4+cFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:22 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd34d7282301800d0bb64ad4ea9444377528bd058352036b061347e2a081ac36fdae9ddebf41af5dde17da3ad10509649753dc305bd20bd7db606624025b19d6336ca70589afd45ccb150a726f48bd592b5f210e315dba5abf186b90e7937c56e8239932caf3e0a1ad11b2d9aa8491be61f2eee70cca70ec025795296eefc571e7e1d55257d49bdb714073358bb81704440f7fc566b638153453aa689e784ccf00ae2eeb2e0507bfc3a1bb56486ed203a93e37caae75deec743bca6ad4740c63c8bcfd4aadbbd1bc332df9ceadc36d67dd30835363c30836ce944e3d1e7e0e1e1ff423d049d4c1594497adf3ec496d5437ff5934a4bb8ffb761ab40a19f5fd7b35f4d19040000",
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
      "Mon, 08 Nov 2021 02:05:22 GMT",
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
      jobId: "grouparoo-job-133-1636337013394",
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
      "85536b6f9b3014fd2bc8fbda0408e429456b9ad22d5b4236425a4dd3848cb950b7802936ddaa2aff7d17d374ad2aad5f12dbf79c7bce7df0486e79999019897976d740fdf0e146c4e48480a219be7e896fd6dbc616105c7ccdedf872f4e7eccccce67344f096256951e5d093a2a919c8d97ed7cf6ad154b416a287897ab6e3f4ec9133729cb185e7a98b440979bae6e52dd2af95aae4cc348fe2fd4c882c075a71d967a2787e37ef0766558b1b604a9aaf354d9491e63baa1f73c1a8e2a29cef77e8a091504750509ea3877fd4243e7d9dbbcf69d1cf107ccf1950c64453aad617a660a24c79d6d43a2b993d12edf3c581ecbcb5b70c0d26f2a628a3921670622454d1483d54605c04db8db1f22fb6c16611aeb67eb45b7ef6368bfe72bbde6ffc9d71f5d90b3c43d13807cd35e6c6a9bef97841fd04a4e2a5560fdbe756f9a943abb7836909282da10b46636b44ed89358dd378ccd289338c530be278128f87d4892d3675c14d62a0c8d3a29a454b513af6d8b586d628a213fc715dea46d4994c22eaba499a265632188ec9e184fcaeb982732e2b2179d7217215ac422f0a83bdbf5c849e2e21a54daece3b636d012f3d2a2c1041ffa9e9d046b940a5b6dd2b3ff482c5325c5d7add84d79051f6b0bbc319a7349780685a63f314d41b9160c388bfd878e708d613fb760c4a32fbf948da9eb72e5eb4fc991ee2005bbb4aff935d18acfc4fdace117149f34643eebb03a9d0f235d686ae0fbf10895bda6521dff75ef083744f01a45043c9de9f268275e0fdafedb8f908c6dd471da9f08ecbc364abc26ae89688eb7a9fd8f66030b54644836bf536361d1fdbd6e668334201a57a2aa9db7cacb4136be4330883387f5fb7ebf017efd90f0a7b040000",
    ],
    [
      "ETag",
      "JbjLOu1oeRFKl1bV6xBB/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-133-1636337013394"
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
      "ff8d92614fc2301086ffcbf97544c870ea123f80a22e41c4318c8921a476c79c6ebdd9762a21fc77af13d1a8897e59efaecfb5f7bedd0a1e739542087779f654a35eee6468af5c10a3a90b6b78a94819040fd08a8cc9588e1fcfd475d179bdeea737ea393a6f4f77b3a323268cbcc75240b882458e456a20bc5d811225729ba4a22ed5bcc93cb0cbca1527491c8dce382f2975f9683a1cf6fac301acbd6d632aac9837fc3fda666b0f1ee82ec6056a5412dd2c95a607943672328d28ab025b866a2dd14003371b99a6ba129aa8c59556c7f75b9dc00f7c7fbfcdf16197c982a4b0392986a7131e102c5951c4f4c23221604037212b5e34df672ee769a3c485d12809bacd805f018d92743aff93ab78de7bc1cff0816d2cf8ce89926a65b7d4e9f0b2f7db71ece9e75127bd64f08330969dda224974319824bd8bb1e3661be9fda54533d6c4461a741e76dadd83bdfda0fd6eeb3139abf99ed0ea1a3d9082ff8ef3dc42b81085c1f51b72c7589e7b020000",
    ],
    [
      "ETag",
      "RcPkGnVl1xVBdXnvIH0U/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:23 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-134-1636337013394",
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
      "ff",
      "6f",
      "9b",
      "38",
      "14",
      "ff",
      "57",
      "2cdf2f9b942f1008f92255bdac65bb4c1de90859d5bb4d898107f54a30b54dabaccaffbe6758ba66bbbb4a9182799f6fcf7ee691def232a5531af3fcae06b9fbe3ab886987826639bebd7b7fb31b95cb87bfbf593783ab1d3c482fccf293134470c3526c5b15d055a29609a8e96ad9cba5a82b2685e8a250d776dcaeed399ee38c2cdb71262e121514d9052f6f917ea375a5a6fdfec1bc970b9117c02aae7a89d83ebdefdf0ffa95145f21d1aa7fecd9471bd57fc1f5b41009d35c9427ab2526a815c8356c192f30c34f6a1aff79acdde36cdbcb117ccf13604922ea529b5c28918832e3792d1b553a7da44dce670f74e95ff86711d94848844cd73cdd10a6c87a5ddd76c8d9621544af366c6b1437af4de1b0206fc3c507b2a930c00d53a036e4ea2f3ff409d9a44cc3867cae2dcb01724a66c13939529f07641504fe3222af4e5f9377e1627549de5c3f8760ee1494e665933a62710126f18f9d9dff7ea086c034c6688beb91e5317b6c4de22c1e25d9d819c69905713c8e4743e6c4563271c14d6360c8d346bd61b152946e3c7158960c6dcf9d4cc66065aee381cbbc490683893b4ec7a933765d7b40f71dfa20b98673ae2aa178bbbbf42a9c47fe3a0a57c1d92cf29b36325617fabc0d679a789e53639308fa9fbef6a6ca053a99a39a07911fcecea2f927bf9d8e0bc859b25bdee17c64ac50806826d91634c80f22c54da3978be53c9a2f82d905329a23bf3c20149dfef3f89310edaa669775f34fcf4d03fb67829f58513780fbf6810eac81d5b5065d7b48f7fbce7f2bcdc270768dee4c4ab6fba5861d79aea1ff8b4f836f566dd283af4d8ddb538aa3957bb4f2e8fecb1e7f1d8ab7ad75a61f577e784d",
      "db57216420a14c5e9e2e04378597bf1a871b8c60bcc3e8a334ae719813655c1209ed50f36dd34bcbb6078e37b4680396fab7dac8b30fa767348c226ca1d43f5a6a6f70b38ba654ab27101671168379f00eabdf0187a0327743050000",
    ],
    [
      "ETag",
      "qJhy7nSwZz0h2Wyewr6Rfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-134-1636337013394"
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
      "51",
      "d1",
      "4e",
      "c24010fc97f5d136528f6020e10194289114ad121e0c2147596aa1bd3defae9286f0efee15a2f1c5f872373b339b9bc91d6097ab35f46095671f159afa2243f7ec4182b62a9ce54b93b20801a093193befba53359fda38be6ad5f438efc69703adf6fd3e3b6cfa8ea584de013639166b0bbdb703285922af2d977ac716576b3f8de3d7d1fd2861a2a4b527e2d96432184e46700cbe5764499572ff5a5a1c03d8d22ac10d1a5429fa0cdad0165337f6f5ac2c7581a1a5caa468a131374266a8d2d21085cc8491688751477484b869454274dbec2c28952e27c5e6d90bc703474e1609edb91e0836980672d34d737e327dddd438a385c73f5af487d6fead2dce8f0d6b87f6c91047b7e853b74e0d6ec9b772dcd6990a0348257fc043ee4ef3f10bca296e7bdd010000",
    ],
    [
      "ETag",
      "D9OnWOsNN/0yoKW9N+Apnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:24 GMT",
      "Server",
      "ESF",
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
      "4d7282301800d0bb642d8e9450487744440d3f65a096b2fa0630d5281408c2009ddebd4eaf51df1dde37ca8a82771ddcea2bff422f68ca9ec8b258ba8d499d93e88343bd16a94a26906641078bcc57e3344e2a3469286b3f929507e547d90d8e2f3a9c6f986e0e5eb47bbbb86008982f5c40aa87d94a716cd6252c6746b8c1d199e5b01df6d8d168be65f9a774fa409bc1c24944f5b5ea3328eb581992b300d05d2b6edfdbe2bc9d28f461d54f71826d0b5b862b9e71bd3f29fe6a3eeee2ca0c889f1d6deac9572f6e0fb65761a690aad8692ad4eaa8639f0cdef2e1e1ff420bc4c74648de81b86fd7744216e8af3edca686dfff539e492ed1cf2f5ff235b919040000",
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
      "Mon, 08 Nov 2021 02:05:24 GMT",
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
      jobId: "grouparoo-job-135-1636337013394",
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
      "02ff85536b6f9b3014fd2bc8fbb8262401923452b446296dd912d211d2eea1091973a1ee00536c3a5555fefb2ea6e95a555a3f61fb9e73cfb90f1ec96f5e266446629edd35503f7cb815313922a06886afc579f0f9e38f2b99b0f05b166c8a2fc5e519cde67344f096256951e5d093a2a919c8d96edbcf6ad154b416a287897a43cbe90dc7d6d8b22683a1651ddb489490a72b5efe46fa8d52959c99e641bc9f0991e5402b2efb4c14cfefe6fdc8ac6a710b4c49f3b5a68932d27c47f5532e18555c94f3dd161d3412ea080aca73f4f08f9ac427af73f7392dfa1982ef3903ca98684ad5fac2144c9429cf9a5a6725b347a27dbe3890adbb7297a1c144de146554d2028e8c842a1aa9870a8cb360b3363cff6c13ac17a1b7f1a3edf2c25d2ffacbcd6ab7f6b7c6f5851bb886a2710e9a6bcc8d137df3f182fa0948c54bad1eb6cfadf25387bcb7836909282da10b4693c1980ea783e3388d272c9d5a4e9c0e208ea7f1c4a1563c60c736d8490c14795a54b368294a9ad0a93d9ada91638f20b219b0680a8c4529b393344d06f1743c21fb23f2a7e60a4eb9ac84e45d87c875e0856e14063b7fb9085d5d424a9b5c9d76c6da025e7a54582082fe53d3be8d72814a6dbb3d3f7483c532f4aedc6ec22bc8287bd8dee18c539a4b4034adb1790aeab548b061c45facdd5304eb895d1e8292cc7e3e92b6e7ad8b172d7fa68738c0d6aed25fb20d03cf3fd7760e882b9a371a72df1d4885966fb03674bdff8548dcd22e0bf9ba7383efa47b0a20851a4af6fe3411ac03efff6d87cd4730ee3eea4885775c1e265b155643b7445cd7fbc41e8e6cdb19120daed59b98e35887b6b539da8c5040a99e4aea361f2bedc41af90cc220cedfd7eddaff05d5a95b6e7b040000",
    ],
    [
      "ETag",
      "mGRJ+ZVsdcTXgROmKmPFag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-135-1636337013394"
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
      "85df65bc94c63654ac245ea0566da43fb678a3699a751910050677179bdaf4dd9d45ad464df4669919be19e61c760d8f5919830f7759fa54a35aeda468ae6c30455de746f3a3a25223388046a44c8ec3dd9b3dea5fbe24a697ca71d0bbf0966e7a74c48496f75808f0d7906498c71afcdb3594a2406e9394d745b9683207ccaab2c559341d8cce392f28b6f9e83a0c83e3b00f1b67db180b23160dff8fb6f9c68107ba9b62820a4b8976974ad1034a33b032b528aa1c5b9a6a25514303372f5245752514518b2bad8ebbdfea78aee7ba07ed8eeb1e7699cc490a9351c9f0f58c17044346e4535ab24cf018504dc88a93e67ce67216374a6c3818455eb759f02ba050928a177f7215ef7b2ff8377c60ef167ce744417569b6d459380e7e1bc79e7e8e3a0da2fe0f421b766a8b4483617f1605c389e5e6efd28f5706f544111ba9d17ad869777bfb075efbcdd613b256f3777ca36a74400abe1d1799013f11b9c6cd2b7f0c37027b020000",
    ],
    [
      "ETag",
      "OL+Z/oEKzft8gcOA8H6w3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:25 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-136-1636337013394",
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
      "6b",
      "6f9b3014fd2b96f76593f2e0959044aabaac651d5a433a425a750f25c631d40d60669b6e5595ffbe0b2c5db3572524b0ef39e79eeb7bcd03def262832738e6e9d78ac9fb17b722c61dcc344961f7bbd6e576e604c568fb3d48f3fcddcd7b72f7ede80810bc6629929719eb2a5149cad464b9e8a552542591427441a86bdac3ae39b487b6ed1aa66d8f1d202a9625e7bcd802fd06e4d5a4dfdf27efa542a4192325573d2af2c7fdfe9dd52fa5b86554abfe61ce3ea451fd67b21e678212cd4571b45c80834a31b96239e11978f845ddc4af0fb57b9ce4bd14c0779c3242a9a80a5dfb02092a8a84a7956c54f1e401373e9f7ce08577ee9d44682d191572b3e29b35220aad56e5b6834ee6cb207ab92679adb87e5507f60bf4369ccfd0ba0403374431b54657efbcd04368ad34985ba3cf9561d80c1da369708a0ee4fd002d83c05b44e8e5f12b7416ce9717e8cdf5530818df30a579d1d88e489cb1daf2cfa3f5ffec684d201a7cb4c1956b0c893932c67112bb3419d9833831581c8f627740ecd8a06387399b9811e0e95abd619142142ea5766c53c74cdcb16b8e2ddb1e59f68050d71a4097c6a66d6dc68381e9e25d077f935cb353ae4aa1787bbcf82af4236f1585cbe0641a794d1909a9327dda9aab8b78ea53439100fa4f5dbb3aca0564aa7be50791174e4f22ffd26bc7e39ca584de2fbec2802424530cd044929c692667620387862fe60b3ff2e7c1f41c184dcf2ff60885279f1e7e11a2fbb23965ddbc71e4cfa045d3d945e3610fba2459d5a0eeda0f6c1996d135acae39884c6b62da13d3e91986f111ef769d7f8b4fc3707a0d868894e4feb7181439746afa5fb236f866d59adfbb30719dedd1d3c1ca39580df1eecb0e9e0e861bd866c61f965e788ddbad90254cb2823e3f70006e02cfff49f6b71ac070af210f5c11cd61bea9aab350c9da39e779534bcb3661e2cce63fa489d47fc41ccb",
      "da37b4d6a81559ce0afdb3a4f65637a758872af50882208c67e0076710fd01a86212ef57050000",
    ],
    [
      "ETag",
      "xttpkM4Nn8kxNgmmHhKavw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-136-1636337013394"
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
      "51",
      "d1",
      "6a",
      "c2",
      "40",
      "10fc97ed6b02c64844c1875a4215446c5aa55244ceb8a6d1e436bddb5444fcf7ee4569e94be9cbddeccc2c37c39de190eb2df46193671f359ad35d86fce44082b62ed8ca5591b6081e20ab4c9c4914c7c319f7f67ad19b76f5eb62d45db68f8381386cfa8ea582fe197639165b0bfdb7336855a2acadd7d5412c7caadc349ebec48f712244495b474ce793c9fd7012c3c5fb5e5125d59affb5b4ba78b0a74d823b34a85374192a437b4c79ecea59555605fa966a93a285c6dc0899a1ba5286c817c60fc2c80fa2300ac36e2b08c35e479c05a58a73d2629e3f4b3c6062552474947a108ac134509aee9af353e87653e386560eff68c11f5ae7b7b6ba3d363c31da9921896ed1a56e5d1b3c906bc5d2964d8d1ea44a3e6094f375be7c01a8b79737dd010000",
    ],
    [
      "ETag",
      "R6EEBPt9jnV9N7nXVH7Y2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:25 GMT",
      "Server",
      "ESF",
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
      "0000000002ffedd34b7282300000d0bb64ad8e2528d21d2944103f20e0889b0ca6112288340928767af73abd467d7778df20a3944949d4b5643578077da699233af29b19c2392798a14571349b9d3c64d1c3d22fae23d14ddf7baa0c048c36b9b1d71e483b10a65ab8c1d88eca8f4a9e3fab14dd98739b92da8bc7be84edb89af3c5ceade9a208ee70efd8c7a3014fd630598b62d76508af62df708da93f2cbc546c8b3e77af8eaf9d6732108a9b999a637acd137bcb0eb44b5062f092a070a96a4bc797891e52ae77cbb0e8ef089face46b0d3d3795763a8be1ea6d1a24db306cbdf3b81abdbcfc5f6000d8bde18249c29fdbe1c43407e0af3e517dc39eff11cb0413e0e7170d39acf319040000",
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
      "Mon, 08 Nov 2021 02:05:25 GMT",
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
      jobId: "grouparoo-job-137-1636337013394",
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
      "14fd2bc87b6d1208090991a2354ae81aa9212b9056eb3421632ed42dc10c9b4c5595ffbe8b69ba5695d6276cdf73ee39f78367f2c8cb94cc48c2f3df0dd44f5f1e4442ce08289ae3ebeac2090f6e6ac1dde24e6c17e58a9bd39bebf91c11bc6549baaf0ae849d1d40ce46c17f6f35a3415ad85e861a29e654f7a96633bb63d312ddb76474894506457bc7c44fabd52959c0d0627f17e2e445e00adb8ec33b17f7d1f1c8683aa160fc0941cbcd71ca08c1c7ca2fab5108c2a2ecaf92e44078d843a863de5057af8474d93f3f7b9fb9ceefb39820f9c01654c34a56a7d610a26ca8ce74dadb392d933d13edf1c48e85d79cbc860a268f6655cd23d9c19295534564f151817c17663acfd8b6db05944ebad1f87cb4b6fb3e82fb757bb8d1f1ab7975ee0198a260568ae3137cef5cdc70beaa720152fb57ad43eb7ca2f1d5a7f1c4c4b4069095d309e980eb5a6a69b64c98465537b9c642624c934998ca99d98cc1dc1284d80224f8b6a162d45c9c69384d1e134769c741c8f86e6244e5c6ac5aec35c7798021d5b23723c237f6aae60c5652524ef3a446e8375e4c551b0f3978bc8d32564b429d4aa33d616f0d6a3c20211f49f9a8e6d940b546adbbdf6232f582ca3f58dd74df80a72ca9ec2df38e38c1612104d6b6c9e827a23526c18f1171b6f85603db1efa7a024b39fcfa4ed79ebe24dcb5fe9110eb0b5abf4978451b0f6bf693b27c40d2d1a0d39740752a1e57bac0d5d1f7f2112b7b4cb42ae775ef083744f01645043c93e9f268275e0f3bfedb4f908c6dd471da9f08ecbc364abc26ae89688eb7a5fd8d6d0b14c9b6870ad3ec486b6756a5b9ba3cd087b28d54b49dde663a59d58235f4118c4f9fbba5dc7bfa6af263b7b040000",
    ],
    [
      "ETag",
      "DF6Sv9d1eZAZoOAnDi08VQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-137-1636337013394"
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
      "8d92614fc2400c86ff4bfd3a12e670e8123e0c0425014418c6680839b602c36d9d77379410febbbd8968d444bfdcdaee69d7f7ddede029ce22f0601e2f9f0b94db9325ea5b138c50158956fcc829530816a0164b26c7a7fa0ee5bd4bade2217dbd6ddbf3cea6ea371a4ca87085a9006f078b18934881f7b8834ca4c86d2125459acdcacc02bdcd4d711c8cba832bce538a4c3e98f47a7eb3d786bd756c8c8416b392ff47db746fc19ae6235ca0c42c44b34b2e698da1ee1a994aa479821545850c514109972f96928a5c48a20a572ab653afd8aee33a4ebd6a3bce458dc98442a163ca189e8c7941d0a44532a21796092e03b20c59f1a23c375c8ea3528909bb83c0ad950b7e05248624a3d99f5ccefbae04ff860fec60c1774ea45464fa48757a37fe6fe3d8d3cf51977ed0fe4128cd4e1d91a0db6f8f03bf3f34dcf420bdb9d5a88692d84885c643bb5a3b3fabbbd5775b5b64ace6ef785a16684128f8765cc71abc854814eedf00a3f9c6c27b020000",
    ],
    [
      "ETag",
      "S2tVerX6oCuZmxQE1bFv0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:26 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-138-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554fd4fdb3010fd5722ef974d2a6ddaf48b4a886510b66a256569ca04dbd4dacea518d238d80e1342fddf777156a0ec03295272bef7eebdb3cf792037224fc88830b1ba2d41ddbfb9968c340818bac255e85c5e26454b9d7594a786c1350d4efccffec1012244c5d2745d64b0a765a938e8d17cd65c2959165449b98785f6dade70afddf7fa9e3770db9eb7df45a2862c9d88fc06e957c6147ad46a6dc59b2b295719d042e82697ebc7f5d65da75528790ddce8d6ae660b6574eb15d5c34c726a84cc0fe63374506a500b585391a187276ac2deefd66e0aba6eae107c273850ce65999bca1796e0324fc5aa54b62a193d10ebf3d907990593e02876960ab854c942244b876a67b1286e1aced1741ec66f97745d555cbeab12dbc03989a6a7ceb240035754835e3a5f3f0551e03c01be97aeeb8173e8f8e1b1b3537f1c3af3300c66b1f3f6f09df3319acecf9c0f17cf21e83c016d446e7dc794655079febdb7e33f8fb422508346eae462e0f6697be8eeb3940d783af47a2c7581b1211bf4a8c75cbedf856ec28022cf54d52d8be632a789970e7aed1e30ce18f419f061ca07a9c77b94a6c38431d64ed384bb64d3203f9530702c7421b5a8f7977c8dc671b088a37978e4c7816d23a565668e6b735513cf7d1a6c1241ffe96b53658544a5eab0c6611c44fe513c3e0feaf998c08af2fbd92d4e484a330d88a68aaec1803a95096e1a399bcec6f1781afa1364d8433fdb2234197d7b7822c4f785dd6563dfe46432f5e37ed73ad842ce69565acc5dfd41dacd1e22368d7f97f1a3c8bf4069aa14bd7f91c376fa96fe17058bb7516df35191546adba8b3137577a23ed9fcd8e0d32078d96a65f2651e4417a45e8a200505397f7db4106c13afff34b61718c1788551471b8c7192b9ae54b8827aa2c5daf652b3db9dfe7ec7fe720c55e6656ee076bbdba3ab6a5415610db9f9dd527d81ed2e56a9523f82308983188ec38f98fd05964326a942050000",
    ],
    [
      "ETag",
      "e2ZZdp/rP2r3r8EjaEFAKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-138-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d51d16ac24010fc97ed6b02a627da0a3e6809a920b646854211b9249b349a64d3bb4bdb20fe7bf7a2584a5ffa72373b3bc3cd704738e455022388f2ecbd41d5de6468961684a89bc268be6aaa348203686466958be065bfea45933a49bfd6c3a85df94fc1723c66858edfb094303a429a63916818bd1ea19225b26db7ab0f2c316d6da7d962ed077ec844498925169bf97c329dfb7072ae16595253997f99b62707f6148598a2c22a469ba156b4c7d8cc6c3d2dcbba405753a362d4d089bb45a6a8a9a5227299713d71e77a03311062d8f384b8efb3b2a0589a9c2a166f561c0f0c195984f4c9f540b04075909ba6ddf9c1f46d57e382b616ffecfad79df767e7fdf66d2f8f4d5b83fa591147d76853f7ce0d1ec8b632dcd6a8061d88257fc0636ecef3e91b40525e8bdd010000",
    ],
    [
      "ETag",
      "bNGXjS0bApdfxT7bySEOGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:27 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd3dd9642400000e07799eb749c1c317b47d8658d4411378e1821659af1139d7df7edec6b6cdf3b7c4f906619662ce9da0bbe810f30a52bb8cc96df44568d73ed0e07245b382f8263799f6fa1b6374a6aa2c33ecca823d752acea4e28d1d54e4405e79e38439e954128c94630d1953b15cc31ee13daf56d3140bdea0391bbcc5d174841c541e6ad0dc817c2689b8977cc1d2d1ddac79649f7316da630d225dfcd1efeb5c6316b8f1a9179a2a42e6d2c5bb1f6735fe3f1ebf6a9cc915c4ec8529bb6cf3dab42d1b8e6c490c59bdce07d2bf3749b0cc5f62cd4301a7c1ec6cbb7b7ff0b2c007e908a629654afed8208e102fcd54fba89e0d77f15a71453f0f30b42ecf3c119040000",
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
      "Mon, 08 Nov 2021 02:05:27 GMT",
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
      jobId: "grouparoo-job-139-1636337013394",
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
      "f795b609e95baa465502546b5396a6a0314d91eddc04431a87d82902d4ffbe1b873210d2f814dbf79c7bce7de485dc8b3c2663c244fa5041f9f4ed4e32724440d3145f4b7a4ed9cd397d785ec4d9ee07dcdfd8cf978f93092244cd52745b64d052b22a39a8f166dd4e4b5915b494b285895a8e3b6a397db7efba03db71dd5117890ab26421f27ba4df6a5da871a773106fa752a619d042a83697dbb7f7ceeeb85394f20eb8569d8f9a1d94519d2f54bf6792532d643ed9acd141a5a08c604b45861efe516376f231775bd06d3b45f04e70a09ccb2ad7b52f4cc1659e88b42a4d56327e21c6e7bb03597b0b6f165a5c66d5368f72ba85232ba69a46faa900eb2c582dadb97fb60a96d370bef2a3f5ecc25b4edbb3d562b3f4d7d6f585177896a62c03c3b526d689b9f97841fd189416b9510febe75af9b543f3cf83a90928ada0094603bb4f9da13d62091bf064e8f6586203634336e85197d97cd4856ecc8022cf881a16cd65ee3af188b94e121df78634eaf6398b68ecf0a8efd860c7cc1dbaf131d91f91c752683815aa904a341d22d7c13cf4a230d8f8b369e89912125a65fab4315617f0dea3c60211f49f9af675544854aadb3df7432f98cec2f995d74c780129e54feb079c7142330588a625364f43b99431368cf8d3a5778a6033b1cb435091f1ef1752f7bc76f1aee56ff4100758dbd5e64bd66130f7cf8d9d03e28a669581ec9a0329d0f22dd686aef77f10895bda64213f375ef08b344f01245042cebf9e26824de0ebbfedb0f908c6dd471da5f18ecbc355adc24b689648987a5fd9cef16060f7880197fa536c68bb87b6d539ea8cb0855cbf96d46c3e56da8855ea0d84",
      "419cbf6fdab5ff0b3f2b03a67b040000",
    ],
    [
      "ETag",
      "raGabZGaqzLdlvKekZ0zPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-139-1636337013394"
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
      "8d92614fc2400c86ff4bfd3a12c870c8123f0c01250144189a680839b63206db3aee6e2a21fc777b13d1a8897eb9b5ddd3aeefbbdbc326ce4270611147db02e5ee2c427d678231aa22d18a1f39650ac102d4223264bbdb7d106a93af5eb713473ee2bdce647479c9840a56980a70f7b08c310915b84f7bc8448adc165052a4d9bccc2cd0bbdc1427feb837bce63ca5d0e4c369bfefb5fa1d3858a7c65068312ff97fb4cd0e16ac6931c6254acc0234bbe492d618e89e91a9449a27585154c800159470f9229254e4421255b852a9d9cd4acdb11ddb6e546bb6ddac33995020744c19c3d3092f089ab448c6f4c232c1614096212b5e96e73397e3b05462c2ded077eae5825f018901c970fe2797f3be2bc1bfe1033b5af09d132915993e51ddfeadf7db38f6f47354dbf33b3f08a5d9a913e2f7069d89ef0d46869b1da5b7761ad548121ba9d07858abd62fce1b4ef5ddd62b3256f3775c2d0bb420107c3b6e620dee52240a0f6f4cc326827b020000",
    ],
    [
      "ETag",
      "bDFFWaskphxqS6rZeVtnrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:28 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-140-1636337013394",
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
      "db",
      "30",
      "10",
      "fd",
      "57",
      "22",
      "ef17904a9b361ffd90102b25b0486dcad214546d53eb244e7049e3603b4c1deaffbe7342810a36a448c9f9debdf7ce3ee709ddd33c460314d2f4a1247cfb65cd42d44044e2145627f984716b7dfe272efdc5dd4d692f2e47ebf4f41410545509bc2932722258c9232206f35933e5ac2c3067ec04884edaa67ed2b60ddb30ba7adb30fa26140a9225639adf43f99d948518b45a7bf166ca589a115c50d18cd8e665bdf5d869159cad492445eb50b30532a2f589ea59c6222c29cb4fe73370500ac297648369061e5e4be3f0eb217793e24d3305f0238d088e2256e652f9028a88e5094d4b5eb1a2c113aa7cbef9403367ec8c026dc549c478bca4f14ac3425b2e8bfb86369acebde06885378a7175ac12fb40bbf4a7136d5580813b2c885869b7df1cdfd1b49562f859eaba116967dad0bbd00eb85d4f9b7b9e330bb4a3b363edca9fceafb5f3c55b08b88e899034af3c0738cc88f2fbbcafeefbe354055882893ab9ecea366ef7f47e9884dd28e9195698e8240c7b61d7c246a8477d9398714830d449c55e55e19ce5c4b0626ceb5d3db6fabdaed14d42c3eadb898dedb01f424da76fb643cbb4d1ae817e732ac905150513b4de5b74ebbb81b30cfcb9371a064ed54682cb4c5ed4e654136f7d4a681240ffe96ba7b29481923a28d70b1c7f380adc1ba79e8d314971b49d3dc07424381304d098e30d91844f580c9b86aea7333770a7de700c15d5815fef11020d7e3cbd1604dba2da6559bd95966d56fa7bc00dceca0af1587fa0b68576bbc6bf2986be3f5c802ce61c6f3fa6ff90bfc257516df1450f29b57dd43988cc8308cee7d70e9e06824b562ba3ef73c75fa07ac92709e124",
      "8f3e1f2b005789cf7f16fb8b0b60b8baa02324c430c591502a1127f534d34dd54b5dddeef42cbd872a3097ef72b6d5d91f9be2508c644372f9dc527d71ab5d54a952bc80200943e8b9de1564ff02d42b8d3e3a050000",
    ],
    [
      "ETag",
      "MnMor5jBzduRYhVu6YFCjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-140-1636337013394"
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
      "0002ff8d914f4fc24010c5bfcb786d134a1b44120e6008626a0345e2c110b394a116da9dba7f40247c77678b317a315e7667defc26fb5ef604bb42aea107ab227fb3a88e57399a992b52d4b6349aaf9aa446f0008dc899b4d32489e3c3fbb83d8bbaf7c30ff934ef3e0cfa7d2674f68a9580de093605966b0dbde713485121afbdbcd43b46ccb176dd24791c8d47290b15ad9d902ce278308c4770f6be574445569a7f2d2dcf1e6c6995e20615ca0c9d875ad116333371f1b4a8ea127d4d5665a8a1819b41aec8d64211f9acf841d4f2834ed809c3eb5610863711932565c21424195eccd91e1832a24ce9c0f1206440352527dd34e79ee5761363df00cedbcf59f0c72cfa3d5b7e3d363c1ad453456c5da373ddba24b82597ca705aa32c7a9009fe80bbc25cfaf32770478d39dd010000",
    ],
    [
      "ETag",
      "uPNNLLwxG2Q48JBznWS8MA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:29 GMT",
      "Server",
      "ESF",
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
      "d34b7282300000d0bb64ad0c0d1048774414118534f5573619a5a9fc8d801aa6d3bbd7e935eabbc3fb068734155dc7fb73291af00a8603c45aaa85d221b35336e98f112dc764c225a4e1e0a9c1ccb789d14cc5cb9adbc45a346f48a19231b68983f3ad8b0ae4065990f8d5a7fa6899e33996808be3a948866b5d6de32a4eed28f5eedd3b9bce2d8a9302871c65c48d60609b3ca832a2eaa82e76b2e87dc743fad85f41b397caff22399e9bfb0b45f98eedef706926b450a55a9f37115be2ebc5e86dfde23afa04ee92fae4c7489f423b9f35b895d4b55aba52fe8a09ede9e9ff02232094cc5bd1f1fcb1ddb0301e81bffabc1fa478fc27e2d08a16fcfc0206e2812719040000",
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
      "Mon, 08 Nov 2021 02:05:29 GMT",
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
      jobId: "grouparoo-job-141-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda0428e429456b94d23552423620ada66942b663a85bc0149b766d95ffbe6b9374ad2aad9fb07dcfb9e7dc072fe88e573b344584e7f72d6b9ebedc0a824e10533887d73fcef5f3fd15494879f9e87b93ea79f41c92c7d90c105cb3242eeb82f5a4681bcae4741bf7f346b4356e84e841a29eebbb3d77e80d3d6fe4b89e37f181285991ad787507f41ba56a39b5eda3783f17222f18aeb9ec5351bebedb0fa776dd885b4695b4df6bda2023ed4f54bf168262c54535dbc6e0a095ac49598979011efe5177e4ec7dee3ec7653f07f003a70c532ada4a695f90828a2ae379db98ac68fa828ccf37071407ab60915854146d59a5152ed989b5c30aa7eaa966d645b4595bcbf06213ade7c97213a6f1e23258cffb8bcd6abb0e63ebfa3288024b615230c3b566d699b9857001fd1d938a57463dd1cf5af9d0a1e5c7c16802484bd605d39133c4eed899908c8c6836f6062473182163321a608f3874e2337f4718069e11352c5c890a633c028c9feefcc928f5ddec34c538a3a99f392e1d103a718663b43f418f0d57ec9ccb5a48de75085d47cb244893681b2ee649604ac8705ba8f3ce982ee0ad47050502e83f35ed75940b50d2ed5e864910cd17c9f22ae826bc6239a64ff13dcc38c3856480c60d344fb1662d76d03014ced7c13980cdc4be1f83124d7fbd20dd73ede24dcb5fe9090c50db55e68be2245a86df8c9d23e20a17ad813c74075483e51ba80d5cef7f0312b6b4cb827e6c83e827ea9e2296b18655f4f36902d8043effdb8e9b0f60d87dd0910aeeb03c546a15dab06e89b8a9f7c0764f27877f55e1467d880ddce1b16d3a87cec84a56a94349dde643a59d582b5f411084f987a65dfbbf75ab912f7b040000",
    ],
    [
      "ETag",
      "x0WzqVbTbmHw439nz7zNbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-141-1636337013394"
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
      "dd4ec2401085df65bcb42434c5aa4db800452529c84fb95043c8b29d62b5edd4ddad4a08efee6c45346aa237db99e937d339a7bb81c7b488218065ba7aaa50ad0f5668c63698a0ae32a3f95152a1111c4023564ccac3f0e8f6d58f966eaf4c1ed3b1bc69debae3769b092def3117106c2049318b3504771b28448eb68db22a2f1675e6805997b6388d26fde125e739c5361fcec2b0d30d7bb075f68db1306251f3ff689b6f1d78a0e50413545848b4bb948a1e509abe95a9455e66d8d05429891a6ab87eb1525495421135b8d2705b6ec3f53ddff38e9baee79db698cc480a9352c1f06cca0b822123b209bdb04cf0195075c88a93fa7ce6721ad74a6cd81f467eab5ef02ba050928a177f7225ef7b2ff8377c603b0bbe7322a7aa307bea22bceefc368e3dfd1c75de897a3f086dd8a93d12f507bd69d4198c2c37df49efae0dea91223652a3f5d06db64e8e8efde6bbad6764ade6ef044655e880147c3bae52034122328ddb37df4b12607b020000",
    ],
    [
      "ETag",
      "c+L5Zx6Tb1EpfkiQcY0Z1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:30 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-142-1636337013394",
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
      "6b",
      "4f",
      "db3014fd2b91f705b43ef2ea834a8875906d4190429af2d036b58ee304431a07db6163a8ff7d370e053ab621454aaeef39f79c6b5fe701ddb022412314b3ecb6a2e2fedd358f510b518533582dcaab63273a3c7c6fff1a10bf7ff1f3a23a15d9ee2e2058cd927859e6b42d79250895a3d9b493095e955870de86426dcbb5db56dfe93bcec0b41c67c705a2a4797ac48a1ba05f2955ca51b7bb16ef649c6739c525931dc2974febdd3bbb5b0a7e4d8992dd4dcd2ec8c8ee1baa7b392758315eeccea6e0a09254cce912b31c3c3c5393f8c366ed0ec3cb4e06e03b462826845785aa7d4109c28b946595d055d1e801699f2f3ed0d43bf2f623632128e12299b364616069cce7e54dcbd89fcc82686b819775c5c5769d5807c6a770726c2c4a30708525950be3fc8b177ac6f3d2c2f85699a6438c3d631c1c181b0a7e60cc82c09b46c6d6deb6f1399ccc4e8c8f972f21e03da152b1423b8f709cd3daf5e3eefaaf0fb5266005ba4d723e30fbd81a9a3b711a0f483a747a716ad2381ec6831e766293ecb8d44d628a81a7eaea9a850b5e2483c48d4d3b75ed01c19699da83a16ba5762f8602bdc4b1fafda4475392a0550bfd104cd103264b2e59b3c3e83cf4236f1e85b3607f1c79ba8d1457b93a68ccd54dbcf4a9a04900fda7af559d651c94eae3f283c80bc7fb917fe635137244334ceea7b7302329ce2505341678491515c73c814d432793a91ff993607c040c7dec276b8444a3af0fcf84e8bed4bbacf41b4da3d00f3e6b036bc419ce2b0db96b3ed0b804af68b56afdbbcc380cc797208d85c0f77fe4a09dbe5bd3ff22a1f13a6a6cae252d54abad237b237237a23e5a7d5fc1d34270dd1a65743af3c24bd42c8534a58216e4edd102b04ebcfddb585f6100c325061da920864926b25621823613cd96ba97866d39a66d0e91060bf52ae7b8e6fae8ea1a7545baa4857a",
      "6ca9b9c27a17eb54259f409084410cf429ae7e034077623b44050000",
    ],
    [
      "ETag",
      "nphM3TJJ+2z7cI6XxXuQrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-142-1636337013394"
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
      "6f",
      "82",
      "40",
      "1085ffcbf40a89148391c4835ad29a12a3b49e4c635618290a3b7477882584ffdec19a9e7bda7d6fbe997db31d5c0a9d4108c722ff6ad0b40f39f276b824689b92ad1c35698be000b2ca855c52b6593ce9ef57ceb35d32ad82f976125f6733216cfa899582b0835381656621dc77a05585d27638d41741b8ad07b55abf47cf51224645d960ac77713c5fc411f4ce5f8baaa8d1fcafa68fde81331d133ca1419de290a13674c69457c37a56557589aea5c6a468e106df0ab9a1a65686c815c7f5c68fae17f881ef4f469eef4fc74296942a2e480bbc7b9378c0c4aa4ce82aebc108ee7ad132da8d21996e31bb5764e49286875902b169d08154c91fbd14fcabfb1f04c93bcb80010000",
    ],
    [
      "ETag",
      "CodPBDnxKtgdUR9m6AQ7Lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:30 GMT",
      "Server",
      "ESF",
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
      "41",
      "72",
      "82",
      "30",
      "00",
      "00",
      "c0",
      "bf",
      "e46c1da901a437105108621121c0258318051512092ae8f4ef75fa8dba7fd827c8f29c0a415a76a235f8027df6a90df321e213c33a1c826ea1862c368cd6f1dc19f6bbc78a95d39643b667b3479f45b93e1b2ddbcad546a71d2b14dda7873952f43af4b615aff825d049b3825a39963a48ae9271a429beda2cbc47b0b3d6d17a318d3f983dc23ba84afde6523d96b698a7aa5c9bc5ad90bf3d6a6f92259ea0b52579722852271a27f878bbdb1821af4ece819bc43b4b47531b12a596cc33732e7b0d16a67fce8548e4b2cab7a992ce5d139d162b721dbebdfd5f600068c7cb860a52beb68f654d1b80bffaa4ed397dfd3768d6d006fcfc02d0491efc19040000",
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
      "Mon, 08 Nov 2021 02:05:30 GMT",
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
      jobId: "grouparoo-job-143-1636337013394",
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
      "85536b6f9b3014fd2bc8fbda2464e44122456b94d01529212d9076d33421e35ca85bc0149b545195ffde8b69ba5695d64fd8bee7dc73ee8367f2c08b1d999298a78f3554876ff722266704144df1d55ed260b3cadda7c00a1c38fcbabadec7f1d36c8608deb024cdcb0c3a52d4150339dd06ddb41275492b213a98a8d31f589dfec81a59d6d8ec5bd66480440959b2e2c503d2ef942ae5b4d73b89775321d20c68c9659789fcedbdb7ffde2b2b710f4cc9de47cd1ecac8de17aa3f32c1a8e2a2986d0374504ba822c829cfd0c33fea2e3eff98bbcb69de4d11bce70c2863a22e54e30b533051243cad2b9d954c9f89f6f9ee400267e52c428389acce8ba8a0399c193baa68a40e251817fe666db8dec5c65fcf4377e345c1e2d259cfbb8bcd6abbf602e3f6d2f11d43d13803cd3566c6b9be797841fd1d48c50bad1e36cf8df26b87dccf836908282da10d46637344fbb639899378cc12db1ac68909716cc7e321b562934d0630d8c54091a745358b16a2b0214926f69046ccda59d180512bb2a9398c92d8321348c6602623723c234f1557b0e4b21492b71d22b7be1b3a51e86fbdc53c74740909ad33b56c8d3505bcf7a8b04004fda7a66313e502959a76bb5ee8f8f345e8de38ed8457905276081e71c609cd24209a56d83c05d55aecb061c49baf9d2582f5c4ae4e4149a67f9e49d3f3c6c5bb96bfd1431c606357e92f0942dff57e6a3b27c40dcd6a0dd9b70752a2e53bac0d5d1fff2212b7b4cd42aeb78eff9bb44f3e245041c1be9e268275e0ebbfedb4f908c6dd471da9f08ecbc364a3c22a689788eb7a5fd97dab6f8e6ca2c195fa14eb0f47a7b635399a8c9043a15e4b6a371f2b6dc56af906c220cedfd3ed3abe00b4e381947b040000",
    ],
    [
      "ETag",
      "8DaSOLmIwS3SEeyXPQvbbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-143-1636337013394"
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
      "514f83400cc7bf4b7d657104644ab2874da792cc3981bd68cc72838238a07877689665dfdd1eea346aa22f475b7e2dfdffb92dac8b3a051f5645fed4a2dc1ce4a86f4c10a26a4badf8d150ad102c402d7226e308edd5b93b1fdfdcd6d1e56afd1ccef1301f0e9950c9035602fc2d640596a902ff6e0bb5a890db122adbaa5e7699057ad398621487c1ec82f38a5293cf16d3e9683c9dc0ceda37a6428b65c7ffa3ed7e67c123ad42cc50629da0d9a591f488890e8c4c25aaa6c49ea25626a8a083bb17b9a4b61192a8c7959eed3a3ddb733cc719f46dc73971992c2911baa09ae145c40b82262dca905e5826780cc82e64c559773e73b9483b25260c66b1e7760b7e05242624d3e59f5cc3fb3e08fe0d1fd8bb05df3951515beb3d753ebd1efd368e3dfd1c75368a273f08a5d9a93d12075793281e5dcd0d77ff2e7dbcd1a8e692d84885c643bbef1e1f0dbcfe9bada764ace6eff85ab6684122f8765c161afc4c940a77af2d3a56ed7b020000",
    ],
    [
      "ETag",
      "TSe1bF4PBQZnSHbkvRPe/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:31 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-144-1636337013394",
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
      "0000000002ff85546b4fdb3014fd2b91f705b43e1252525a09b102d916a9a490a63cf650eb384e31a471b09d3284fadf77ed50a0631b52d4e4fa9e7bcfb90ff711ddb222457d94b0f95d45c5c3871b9ea006a20acfe1f4ae385b7e9c389797cc3b1c8e7e7dcb97dd30b8dfdf0704d351122fca9c3625af04a1b23f19b7e6825725169c372151d3e9749a8ee77aaedbb51dd7ed752050d23c1bb2e216c2af952a65bfdd5e93b7e69ccf738a4b265b842f9ecfdbcb9d7629f80d254ab63739db4023dbefb01ee49c60c578b13f1983824a5231a50bcc72d0f0129a269f3673b7185eb4e6005e32423121bc2a94d60529082f3236af84c98afa8fc8e87cf581c6fed03f8aad99a0848b74cad29985a5359d96b70deb683409e3ad195ee88cb36ded581bd6e7687462cd4a10708d259533ebe2ab1ff9d6cbd1ccfa51d9b64bac036b101e5b1b0c41684dc2d01fc7d6d6c1b6f5251a4d4eadc3abd710d09e52a9586194c738c9a956fdd4dde0ed50750056c05b3ba75ddbc3ce9edd4bb2a44bb23d7737c96c9a247b497717bb894d7a1dda49138a214ee9ec260a17bcf068b693ba1e25bb9ee310db23dd5ecfb31d4abb76ea668edb815f68738a560d742f98a2c74c965cb2bac3e8220a627f1a4793f06810fba68c0c57b93aaec5e9225eeb54502480fe53d74a7b1907263dae208cfd68701407e77ebd21433ac7e4617c073b92e15c5240638117545171c253681a3a1d8d8338188583214498b19fae1112f5bf3fbe04c40fa5e9b2326f348ea320fc6204ac11e738af0c64597f205c8256b45a35fe9d661045832ba0c642e0873f7c508ed7d1e17fa1307863d532d7940ed26c6b6b67c3ea6c581e5afd5cc1d34070dd6a667436f1a32b541f4534a38216e4fdd502b071bcffb7b1bec200864b0c3c52810d9b4ca4662182d61bcd16a6963ada71f5aa220316ea8dafe7baebd1e91c3a235dd0423d95545f61d345edaae433089cb088a199e2ea37f635dcc544050000",
    ],
    [
      "ETag",
      "qnQv+U1XXi6BLOxZlv7NIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-144-1636337013394"
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
      "51",
      "4d",
      "4f",
      "c2",
      "4010fd2fe3d136525b21927000d228494529120e8690a51d4aa1ed94fdd020e1bf3b5b0cd178f1b23bf33eb2ef658fb0cbab14bab0cab3bd4179b8ca504fec10a33285567cd554290407508b8c955efff9337fc2cd7e389fdc74e6115d9b20c87a3d56a86483a580ee11d63916a982eedb112a5122db96cb7ac7127da8ed361abf860f61cc4049a905c6b328ea0fa2104ecec5224a3295fe97697172604bab18d728b14ad066a8256d31d1235b4f89b22ed0556464820a1a714364924c2d2491cb88eb0581ebb5fdb6ef775a9eefdf07ac2c28113aa78ac5b329c7034d5a14317d703df059209b919bae9bf39de1dba6869dee9a6c3f39efc2b5ff70c16fdfe2fbb1c141a37a91c4d115dad4ad738321d9569adb6a69d08144f0073ce6fabc9fbe004dcf26c4dd010000",
    ],
    [
      "ETag",
      "1AOziMehqCWQ/7WLo+u44g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:32 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd34b7282300000d0bb64ad0c5511e9ce041402150a22c8860910291835c31f3abd7b9d5ea3be3bbc6f40d294d675dc3caef40edec148168a900a26dfc05d5e46b6a81af5ea7cf495b97bdc62ab97934e631d921f09a1adcf2e1f6d29ba845895c12778d9cb65b856774d6eac2d1604d46467472f2c6d3c441c879b492b336c423ee53d1a96e2e82b5e180c6c4283344497dadbc3d322c424433097c70e3994add074e0bd779b3b44e345db60aa3fb61066069b622d5c25f73adaa55f7d8baf3a4d6e9a75c7719f105b3232f5139d8e6257c03768eb0df625038f8e2bbcbcfc5f6006e8c08b8ad671f1dcbe94146506feeac7cdc8e9f33fa4a4a215f8f9054affd2f219040000",
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
      "Mon, 08 Nov 2021 02:05:32 GMT",
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
      jobId: "grouparoo-job-145-1636337013394",
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
      "ff85536b6f9b3014fd2bc8fbdabc206f295aa394ae4809e980b4aaa609d9e642dd12ccb0691555f9efbb98a66b5569fd84ed7bce3de73e78218fa248c89c3091fda9a13a7c7b908c9c11d034c3d7ad37e497a55ade5d47e1ed2a64c5f5e1a17c5e2c10211a96a2fb32878e9275c541cd776137ab645dd24aca0e26ea0c86a3ce60ec8c1d67d21f38ce6c88440579ba16c523d2efb52ed5bcd73b89773329b31c68295497cbfddb7befc9ee95957c00ae55efa3660f6554ef0bd5efb9e4540b592c76213aa8155431eca9c8d1c33f6ac2ce3fe6ee0abaef66087e121c28e7b22e74e30b537059a422ab2b9395cc5f88f1f9ee404277edae228bcbbcde177141f770662554d3581f4ab02e83edc6f2fccb6db05946ded68fc3d595bb597657dbf56ee387d6ed951bb896a62c07c3b516d6b9b9f97841fd04941685518f9ae746f9b543dee7c134049456d006e3497f4c07d3fe8ca56cc2d3a93362691f189bb2c9883aaccf674318260c28f28ca861d1421693513a1bd084c7361bd178683be378c6188b676336b6a730a54edf26c733f25c090d1742955289b643e436f022378e829dbf5a46ae2921a575ae2f5a634d01ef3d6a2c1041ffa9e9d8448544a5a6dd9e1fb9c1721579376e3be13564941fc23f38e394e60a104d2b6c9e866a23136c18f1971bf702c16662d7a7a022f35f2fa4e979e3e25dcbdfe8110eb0b1abcd978451e0f93f8c9d13e286e6b5813cb50752a2e57bac0d5d1f7f2312b7b4cd427eeedce08eb44f01a45041c1bf9e26824de0ebbfedb4f908c6dd471da5f18ecbc355a3c22b689748987a5fd903c71e8f6c62c095fe149b4cec53db9a1c4d46d843a15f4b6a371f2b6dc56af506c220cedf37ed3afe05905ac5197b040000",
    ],
    [
      "ETag",
      "OI4cFpsAYPTSWCSbnPyjpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-145-1636337013394"
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
      "6f4fc2400cc6bf4b7d3b12c860c8125f0c052199c89f91180d21c75660b8adf3ee065908dfddde54346aa26f6e6df76bd7e7d91de139ce227061156f5e0a94e5c506f5c404535445a2153f72ca148205a8c586c9befd60fb8faabcdcc7c9b8f3984ecab937385c5d31a1c22da602dc23ac634c2205eed311329122b785941469b6ac320b74999be22c980e47b79ca714997c34f77dafebf7e0649d1b23a1c5b2e2ffd1b63859b0a3d514d728310bd1ec924bda61a88746a612699e604d5121435450c1d58b8da4221792a8c6955aa3d9aa351cdbb1ed76bd61db9d2693098542c794313c9ff182a0498b644a0796090e03b20a59f1ba3af75c8ea34a890987a3c069560b7e05248624a3e59f5ccefb6e05ff860fecdd82ef9c48a9c8f499eafbf7de6fe3d8d3cf51375ed0fb4128cd4e9d916078d79b05deddd8708b77e9dd52a31a4b6223151a0f1bf5e665abedd4df6cbd2663357fc7d5b2400b42c1b763106b70d72251787a05544e96437b020000",
    ],
    [
      "ETag",
      "F3X3LZsy8vilP9ZmQyUAHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:33 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-146-1636337013394",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8554eb6e9b30147e15cbfbd349b9402057a9eab2946d4829690969556d53628cc9dc02a6b6e9545579f71d43d336bb558a14ccf96ec73ee611dff222c1131cf3ed5dc5e4c3bb1b11e316669a6ce16d77e6f816b3adfecdada32eddf03cbfbab8bc383e0604372c45f232636d252a49999aac969dad145549a4106d106adbeea06d0f9c81e30c2ddb71c62e1015cbd2392f6e81fe43eb524dbaddbd79672bc43663a4e4aa4345fefcbe7bdfeb9652dc30aa55f7d0b30b36aafb86eb492628d15c14c7ab2524a814936b96139e4186176a127f38d4ee709277b600bee794114a455568930b24a82852bead64ad8a278fb8cef9ea012fbdb9378bd046322a64b2e6c9061185d6ebf2b685668b55101d6d486e1437ef4d61bf409fc2c519da9410e007514c6dd0d5172ff410da2444b30dfa56599643d1099a06a7e840dd0fd02a08bc65848e4edea3cfe162758e3e5ebf8640ee8429cd8b3a7544e28c99c44f3bebff79a0864034c4688aeba13520f6c81ac7693ca4e9c8e9c7a9c5e278140ffbc4892d3a76999bc48c004f1bf59a450a511016f7528739940ec7b143e160a843899dc4bdd1888dc7637b6c3b039212bc6be19f926b76ca5529146f76175f857ee4ada37015cca69157b791922ad3a74d38d3c4eb9c1a9a04d07ffada992a17e0648eca0f222f9cce22ffd26ba663ceb6843e2cef603e52922906682249ce34936722814dc3e78ba51ff98b603a07467de4e77b84c293af8f2f84e8a1ac7759d7fff8d434b07b257849b2aa06dc370fb867f5acb6d56bdb7dbcdbb5fead340dc3e935b81329c9c36f35e868e01afa5f7c6a7cbd6a92ee7d6d6cdc9e531cacdc83d500efbeefe0d7c270db1a677cb1f2c26bdcbc0a59ca242be8dbd305e0baf0f657637f83010c77187c9486350c3355c6854ad60c35cfeb5e1a3690dd611fd760a9ffa80d2c777f7a46c328b29c15faa9a5e606d7bb684a957a0641116631f083cf50fd05e38976ef43050000",
    ],
    [
      "ETag",
      "/C3I0e105jk3sV4RPmWQVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-146-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d91416bc2401085ffcbf49a8031d650c1432362059136ad978ac81ac7349a64d6dd8912c4ffded9584a7b29bdeccebcf9867d8fbdc021afb630804d9e1d6b34cd5d86fce28a046d5db0954b5365113c40569990efc1311b45266ace5a45ddf87eb299d8e03c1c0a61d30f2c150c2eb0cbb1d85a182c2f50a912656dbdd60741b8d1ae9bcedfc693712242495b27cc17b3d9633c1bc3d5fb5e5125d515ff6b6975f5604f9b047768b04ad179d086f698f2d4c5b3aad405fa966a93a285166e0799a15a2b43e48be207bdbe1ff4c37e18469d200c1f7a4216942acea91278f12af680895591d059e2412880694b49ba6bcf93c8dd36c6a9059cb79fb3e08f59eff76cf5f558dc30da674362dda273ddb92518914bc592964d8d1ea44a3ee029e75b7ffd04f955dcd2dd010000",
    ],
    [
      "ETag",
      "Z1qgC7r7ywpa72B5GbGs1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:33 GMT",
      "Server",
      "ESF",
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
      "000002ffedd3db6e82300000d07fe1594d959beccd0b3499a08b20305f1aec0a29588ba5adc0b27f9fd96fccf30fe7db2830265d87246fc8cd78338662e1cdf0ec0256b9066372c8d225806cd83436b492050d38b65d7b0d6a3ae46d94e9d26f6a51e5c93d5e0de5586c35c5824f2332151806c23f3bfd35870f6c05f393daab4db84f107375ea578a7528bddf3fa2f9cab4fa3ed44e7c68e741b5db9da019b5dd31ae69c6d9e3aa101b53c0980ab7670bf392f817d7ae64cce32d5fc887e3c1db4e9a3491c8552005623c32cfcae5f950bec34fd20b2d81a7fada51e1925c70a01bfe051039cd5e5efe1d636290bea58274883eb79bb6e74d8cbffa480e2d79fe5f93421061fcfc0205e2da5819040000",
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
      "Mon, 08 Nov 2021 02:05:34 GMT",
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
      jobId: "grouparoo-job-147-1636337013394",
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
      "ff85535d6f9b3014fd2bc87b6d0229249048d11a25748d94900d48bb699a906d0c750b9862d32daaf2df77314dd7aad2fa84ed7bce3de77ef084ee7995a219223c7f685973f87427083a434ce11c5e6f55bcb3f6d8a4d1f72b92de1f56e3ed1f2b9fcf01c13b96c4655db081146d43999ceda361de88b6c68d100348341839ee6034b127b6ed5a23db9e3a4094acc836bcbad7e9552d67a679121fe642e405c33597432aca9777f3f1dcac1b71c7a892e65b4d1364a4f981eae74250acb8a8e6fb081cb49235092b312fc0c33f6a4a2edee61e725c0e73003f72ca30a5a2ad54e70b525051653c6f1b9d15cd9e90f6f9ea80227fe32f63838aa22daba4c2253b3352ac70a20e35332ec3ddd6580797bb70bb88d7bb20899657fe76315cee36fb6d101937577ee81b0a938269ae31372ef42d800be8a74c2a5e69f5b87bee949f3bb47e3f988e00d292f5c1c4b52678e45953921197669e3d2699c508f1883bc636b1e8d4614e4a18069e16d52c5c890a4f1ccf636e9a9cdb139c38239225843824719c89ed8eada94b3c071dcfd0ef862bb6e2b21692f71d4237e13af69338dc07cb45eceb1232dc166ad51beb0a78ed51418100fa4f4dc72eca052875ed5e07b11f2e96f1fadaef27bc6139a687e801669ce1423240e3069aa758b31529340c058badbf02b09ed8d75350a2d9cf27d4f5bc73f1aae52ff41806d8d955fa8ba2385c075fb49d13e21a17ad863cf6075483e55ba80d5c1f7f0112b6b4cf82beedfdf007ea9f4296b18655f4e3690258073efedb4e9b0f60d87dd0910aeeb03c54762ab461fd12715def337b643be7ee146970a3dec56ccf3bb5adcbd1656425abd47349fde643a5bd582b5f401084f907ba5dc7bfc762d3717b040000",
    ],
    [
      "ETag",
      "htTO0Ua/cSXHbdkyD5Mx0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-147-1636337013394"
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
      "0000000002ff8d92514f83400cc7bf4b7d856413644ab2874da7cecce918faa031cb0dca8602c5bbc38d2cfbeef650a751137d39daf26be9ffcf6de0292d62f0619e2e9e2b94f5de02f5c40401aa2ad38a1f25150ac102d462c1e4850abce5a4aed7abd5f3ed5d5defaf457a38e9769950d1127301fe069214b358817fbf8142e4c86d1165555ecc9acc025d97a6380d83e1f88cf39c62938f6f46a35e7f3480adb56b8c8516b386ff47dbc3d682479a0798a0c42242b34b29e911233d343295c8cb0c6d45958c504103372f1692aa5248229b2b76dbedd86dcff11ca7d36a3bce91cb644691d029150cdf4c7941d0a44516d08a6582c7806c42569c34e70b97d3b85162c2e138f4dc66c1af80c488643cfb932b79dfa5e0dff081bd5bf09d13395585de51a7a3abde6fe3d8d3cf5127bd70f083509a9dda21e1f072300d7b97d7867b7897deaf35aa6b496ca442e361bbe51e1e74bcd69badc764ace6eff85a56684124f8769ca71afc44640ab7aff388b85a7b020000",
    ],
    [
      "ETag",
      "JsR6hQyyxwwqVZyy2xai8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:34 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-148-1636337013394",
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
      "6b",
      "6f",
      "db",
      "3810fc2b04ef4b0bf841497e0341ce17ab3d0189ecca728bf4ee605314e5b2914495a452a481ff7b97529cc47d5c000112b933b3b3cba5eef18d28533cc389d87fa9b9bafbe3b34c70077343f7b0bb997fab8b2961937cf166c1c255f1edf663f8eeec0c10c2b2342daa9c77b5ac15e37ab659f7f64ad61555527641a8eb0c265d67e48d3c6f4c1ccf9b0e80a8799e5d8af206e89f8ca9f4acdf3f26efeda5dce79c5642f7982c1ef7fbb76ebf52f2336746f74f73f6218deebf90f53c978c1a21cbb3cd1a1cd49aab2d2fa8c8c1c313354dfe3cd5ee095af4f600be158c53c6645d1aeb0b24982c33b1af55a38a67f7b8f1f9ec03affd4bff22463bc59954e956a43b4435da6eab9b0eba586ec2f8d58e165671f7da068e0bf4265a5ea15d05063e51cdf50e7df8db8f7c8476da80b91dfab726c463e81ccdc3053a910f42b409437f1da357e7afd1db68b959a1bfae9f43c078cab51165633ba649ceade587d6063f9fa82550033edae0764c46d4999069922563964dbc6192119e2493643ca45e42d874c00769c229f08c556f58b49425e3ae93257cc8019164033e25dc9d8eb2a1331c53963ac44b13e265998b0f1dfc5509c3174257528bb6bdf84314c4fe368e36e1c53cf69b32325ae766d19ab3453cf769a04800fd4f5d071b151232d9b30ac2d88fe61771f0de6fc7e392ef29bb5b7f8101c968ae39a0a9a205375c5dc9149a8657cb751007cb707e098ce6cc574784c6b37fee9f08f15dd574d9346f1c07577044f3ab55e3e1087a4ff3ba41ddb61fd8252ee912b7eb0c63c79d39decc19f408211ff1e1d0f9bdf83c8ae6d760882a45ef7e884191a381a5ff226b836f56adf9a30b07db6c8f9e4e568393d5081ffe3bc0d3c17003dbccf8ddc68fae71bb15f18c2b0e73f0e2c001b809bcfc2739de6afba35adb3c70458c80f966da66618ab7",
      "732e8aa69696ed7830742e6ec0cafc14f3dcf1f140ad8655e4052fcd4349edad6eba6843b57e044110c6330cc2b710fd0e9ff1952757050000",
    ],
    [
      "ETag",
      "UAzum90c8lDFDcNPmzvZNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-148-1636337013394"
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
      "41",
      "6b",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f49a8069c45ac183115121681bb5608bc81ac7349a64d2dd8945c4ffee6c2ca5bd945e7667de7cc3bec79ee190165be8c0264d3e2ad4a7bb04f9d916119a2a63235749854170005925428e6741f0ba5cf2b44df3e9cb70d40b753fec75bb4298f81d73059d33ec52ccb6063a6f6728548eb2b65e970741f854da6e3c990f868348849cb656982cc2b0178403b838df2b2aa7aae07f2dad2e0eec6913e10e3516315a0fa5a63dc63cb6f18ccacb0c5d43958ed1400dd7834453552a4de48ae27acdb6ebb5fc96ef3f343cdf7f6c0a9951ac38a542e0c54cec0113ab2ca24f8907be00ba2e25e9ae3e8f22dfd7318e3560bdfd9c797fcc9abf67abafc78213a379d224d60d5ad78d5b823ed9542c695957e840ace4034629dffacb157b4ac448dd010000",
    ],
    [
      "ETag",
      "ISBBZYYtO8oTOVGHALrCLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:35 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd3db6e82300000d07fe9b31a2810cade1066b86454183ab717c2a5b046b0a4e56231fbf791fdc63cff701e202f4b224436b02bb98117207368edca5dd8a3fda169b85361d425d8b445edd6301964af61d55ba20c297dfb061d27284f424b0ba3b23aa4b5b45bcc5cfd92362bdaab90529bec6b08ed98a1054ed3de8c59d15c96e38c30d3490cc5f65d0d92d71b3e50789667e4abe1d6bc44456c6b7a4d83448ec74f7b122c6ee5294d152c98ef6074f33a5f1f71daf00ff87d62862315676c2d37aabaa2eea93f77fc4ea3d9e5431e2337d4ad0b1ea26a20fa987bbba7a7ff0b6c00b9f7941391d175bb6658d606fcd5cfd6da64fdbf2739271cfcfc025c0573c819040000",
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
      "Mon, 08 Nov 2021 02:05:35 GMT",
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
      jobId: "grouparoo-job-149-1636337013394",
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
      "3014fd2bc8fbda0428e429456b94d23553423a42526dd3846cc750b780a96d524555fefb2ea6e95a555a3f61fb9e73cfb90f9ed1032f77688c08cf1e6b260f5fee05416788699cc16b7d2df1edd6b7e5af432db7eafbb6b8b11f9e261340f086a57051e5aca3442d2953e3cdba9b495157580ad181441dd71f75dcbed7f7bc81e37adec807a26279bae0e503d0efb4aed4d8b64fe2dd4c882c67b8e2aa4b45f1fa6eefcfed4a8a7b46b5b2df6bda20a3ec4f54bfe68262cd4539d9acc141ad984c5881790e1efe5177e4e27dee2ec7453703f09e5386291575a91b5f90828a32e5592d4d56347e46c6e79b035a078b60165b54e4755126252ed899b5c31a27fa5031eb2a5a2dad7978b58a96d378be0a93f5ec3a584ebbb3d562b30cd7d6ed75100596c62467866b4dac0b730be102fa3ba6342f8d7adc3c37ca2f1d9a7f1c4c430069c5da603270fad81d3a239292014d875e8fa40e236448063dec11878e7ce6ef08c3c033a286854b51523a48499ff909a1c37ee27ba49f8c068c24bd9ee30ddda137c29e8b8e67e84972cd2eb9aa84e26d87d06d348f83248e36e16c1a07a68414d7b9be6c8d3505bcf5a8a14000fda7a66313e502949a76cfc33888a6b378be0dda092f5886e961fd08334e71ae18a0b184e669269762070d43e174195c02d84cece6145468fcfb19353d6f5cbc69f92b3d86013676b5f9a2751ccdc36fc6ce09b1c5796d20fbf6802ab07c07b581ebe31f40c296b659d08f4d10fd44ed53c4522659493f9f26804de0f3bfedb4f90086dd071da5e10ecb4355a342256b97889b7a5fd8aed7779d013260a93fc4cecffd53db9a1c4d4656b052bf94d46e3e54da8ad5ea150441987f68da75fc0bfd53bdb57b040000",
    ],
    [
      "ETag",
      "uHraWV4/rZyurVsJVmP/kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-149-1636337013394"
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
      "c2",
      "40",
      "0c",
      "86",
      "ff4bfd3a12c870c8123f0c455c8280632426c690632b30bdadf3ee8612c27fb737118d9ae8975bdb3dedfabebb1d3c65450a3e2cb2d573856a7bb242736b830875258de64749854670008d5831f9da99c472bc99de7517267a3d1d84129fce82f3732674b2c65c80bf83658632d5e0dfefa01039725b42b2ca8b799d3960b6a52d4ee3281c0d38cf29b5f968361c06bd611ff6ceb1311546cc6bfe1f6d0f7b071e6911e112151609da5d4a458f9898d0cad4222f253634552a410d355cbf5829aa4aa1881a5c69b4dadd46cb733dd7ed345baedb6d3329291126a382e1d99417044346c8885e5826780ca83a64c5cbfadc70394b6b25360c47b1d7ae17fc0a284c48a5f33fb992f75d0bfe0d1fd8c182ef9cc8a92acc91ba1a8e83dfc6b1a79fa32e83b8ff83d0869d3a227178d39fc6c1cdc4720f07e9bdad413d51c4466ab41eb69aedb3d38ed77cb7f582acd5fc1ddfa80a1d4804df8eebcc80bf1452e3fe0d6cfd11db7b020000",
    ],
    [
      "ETag",
      "x7PTlOvSX9btRx5GIlek8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:37 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-150-1636337013394",
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
      "3010fd2a91f74f2bf123214000a9ea28cdba48347421b4abb6091cc7a12e214e6da715aaf8eebb388596755ba588e47cefdd7b679f79462b96c5688022b67c28a8d87cbae711aa21aaf01256cff0c5eafba8e926d7e2819a36cfeea38d783a3901042b5912aff394d6252f04a172309b3696821739169cd7a150ddea9875ab6b776ddb312ddbeeb78128699a8c59b602fa9d52b91c349b3bf1c692f3654a71ce6483f0f57ebdf9d86ae682df53a264f350b30932b2f981ea69ca09568c6727b3293828241573bac62c050fafd438fa7c58bbc1f0bab104f023231413c28b4c95bea004e159c29685d055d1e019699f6f3ed0d41dbba3d058084ab888e72c5e18581af379beaa19a3c9cc0f8f16785d565c1c97895d607c092697c6220703775852b9306ebeba816bbc027e16a66913e3d418fae7c6417dcf3766beef4e43e3e8f4d8b80826b32be3ecf62d049cc7542a9669df218e525a7a7ed95beffd919604acc048959c3b66175b3db31f259143929edd89129346512f723ad88e4cd26fd3761c510c3c5556d72c9cf18c3a564cfa66dc73da7d1b7ee318e3569f984964f53b9109cb71073b4e1b6d6be8493045cf99ccb964d5fea29bc00bdd7918ccfcd13074751b092e52755e992b9b78eb53419300fa4f5fdb32cb38289587e5f9a11b0c47a177ed56f331a64b4c36d307989004a792021a0bbca68a8a4b1ec3a6a1abc9d40bbd893f1c03431ffad50e21d1e0c7f32b21dce47a97957ea32fe3c930ecea46f7906b9c161af3587d20abd101c4b6f6ef32c32018de823416026ffec8413b5d4dff8b82c6eba8b2b95744a5da2e6a1d44ed83a88bb6bfb6f0d4105cb64a197d9bb9c12daa96029a504133f2f1680158273efed3d85d6000c315061da920864926b25421825613cdd6ba978a6dd94ea765210d16ea5daedb73764757d6282bd235cdd4",
      "4b4bd505d6bb58a60ab907411206d1f7fc0bc8fe06a583298842050000",
    ],
    [
      "ETag",
      "BaGkXC/EfVrqe03onjbyrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-150-1636337013394"
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
      "8d514d6bc24010fd2fd36b0289b14a050f6ac56a25b4514f22b26e2669ccc7a4bb9b1611ff7b676391965e7ad99d791fec7bec19f2ac8a6100872c7d6f509dee5234af7688503785d17cd554690407d08894958f328f178b673d0bfb7982ebd578e2859bd170c80a2ddfb0143038439261116b186ccf508912d9b6dfd7394bcca9b6db3c5c4f67d3888192620b849be572345e4ee1e2dc2ca2a4a632ff32ed2e0e1ce91061820a2b893643ade888d2cc6d3d2dcaba405753a3246a68c52d912a6a6aa1885c465cffde73fd5ed00b82bee707c143979505496132aa58bc59713c30644411d127d7838005aa1db969d29e1f0cfb6d0d3b75da6c3fb9ee8d0bfe709ddfbeddf763e39341fda288a36bb4a9bd6b8309d95686db1ad5a00352f0073c65e6ba5fbe00baba30e3dd010000",
    ],
    [
      "ETag",
      "DckdJJKsGN7kfeTSBC0NUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:38 GMT",
      "Server",
      "ESF",
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
      "0000d0bb642d4e4545e88ea0c04025188b081b06217c04d2f0934fa777afd36bd47787f70dc228226d1b745f05a1e01d4c212f2da3a5c944a8a61945852af2c9aa18a06b39d2cc74fa5925a7cabf5d7a79c6129f233bd90475cc2565561e513ec599560bbb438e0453a98ad48d0cb4df43ece2ee345d7717c3364ed74656b21de46c4691e044a4bb5932d9d4ae353ca2b3ac6f1de8b041f35df6a1ad370d1655eaad1fdc18a673e049bd3e1c9a9b5f28f99b39eb76661995a0cde3f18c03447933f57aaec6ce68dcc5720b454d9f94b28b07ba1a4d71c0777bf9f2f27f81052023cb1bd206f973fb7a2b490bf0573fe826469eff21091bd2809f5f73b4c5d619040000",
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
      "Mon, 08 Nov 2021 02:05:38 GMT",
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
      jobId: "grouparoo-job-151-1636337013394",
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
      "0000000002ff85535d6f9b3014fd2bc87b6d1252422091a2354ae81a2d212b21eda66942c65c983b822936d9a22aff7d179374ad2aad4fd8bee7dc73ee074fe4172f12322631cf1e6ba80e1f1e444c2e08289ae1eb67ebeb7c5fde82d32bcbf0f0c71b95e18c6793092278c3927457e6d091a2ae18c8f176d3cd2a5197b412a283893a7dbbdfe90fada1653966dfb24603244ac8d3252f7e21fda752a51cf77a67f16e264496032db9ec32b17b7eefed2f7b65251e8029d97badd94319d97b47f5632e18555c1493ed061dd412aa087694e7e8e11f3589af5ee7ee72baeb6608de730694315117aaf185299828529ed595ce4ac64f44fb7c71201b6fe9cd428389bcde1551417770612454d1481d4a30ae83f5ca58f8d7eb60350d176b3fdacc6ebcd5b43b5b2fb72b7f63dcdf788167281ae7a0b9c6c4b8d2371f2fa89f8054bcd0ea61f3dc289f3ab4783b988680d212da60e49843da77cd519cc60e4b5dcb8e5313e2d88d1d9b5ab1c9460318243150e46951cda28528ec01c4d4013732132b8906344e2337b18791953acc75ec4bd34e5d72bc20bf2bae60ce6529246f3b44ee8345e84561b0f567d3d0d325a4b4ced5bc35d614f0d2a3c20211f49f9a8e4d940b546adabdf0432f98cec2c59dd74e7809196587cd23ce38a5b90444d30a9ba7a05a89041b46fce9ca9b23584feccb3928c9f8fb13697adeb878d1f2677a88036cec2afd259b3058f89fb49d33e28ee6b586ecdb03392d0f9a3efe40202e699b84dc6ebde01b699f0248a18282bd3f4c04ebc0fb3fdb79f1118cab8f3a52e11d7787c9468555d0ee10d7e59ed87dcbb5cd4ba2c1957a13c3cfb96b4d8e2623eca050a792dac5c74a5bb15a3e833088e3f775b78e7f010fb48f7b7a040000",
    ],
    [
      "ETag",
      "K3XDvpQe7/ppTyxE9pTCig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-151-1636337013394"
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
      "ff8d915d4f83301486ffcbf11692113650122f36e3078610c7b6786196a52b07642bb4b645b22cfbefb6751a63bcf0869e73784ef23eed11f64d574202dba67eeb511e2e6ad4735b14a87aa6953904ef148207a8496dc8c76118f6f1f42e0b828ce6cf228d8526f3eb6b4328fa8a2d81e4085583ac5490bc1ca1232d9a35ca59df761bd779a00fc20e17cb22cdef4ddff2d2f6f92acba6b3ec164edef7624934d938fe1f6beb93073bbe2db042891d459b4548be43aa53aba9482b18fa8af792a20207bb1fb5e4bd209273df4cfc6012f841144661188f8230bc1a1b92714a74c33b03af16262068ae092bf8603421348074a531aedcf7dd8c9bd299d832cd97d1d805fc0938c72fe4acf59b118c747f30eb7382d941a37a92dcf828b42ac1687c3989a3d1a7dd0db7c6dadc84963d7a408979a48746435211a6f0f4014a574ab302020000",
    ],
    [
      "ETag",
      "Jwwwk7AFL11LcNWpI7ptaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:39 GMT",
      "Server",
      "ESF",
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
      "ffedd34b7282300000d0bb642d0c8482d21d51512ca8a0fcdc30a011521003a104ecf4ee757a8dfaeef0be417a3e63c692ee5ee21abc833185ba78163fe80c9939a1852c5b4a7c22771b4e55d9b9f14b3c6b7cba9585b51ac2eb976466323375d4ecbc3448dfca034526ace8b1f00de9042f36e7d0d649565519b172f8f0b27058c564e4fc647ac2429d969a22d0dba50e045e17b8971665b75d1e8b12d27560ad78e41a5c50621eec23ecf0543ba01e6a86de7a2e2b2cf78651340f375af52930988d57cdc77eb2f4ba3c305b45694b63be4470b7d28833f46c336bd67b4b7c79f9bfc004e0819216b3843cb72baaae4fc05ffda41b297efe47386d710b7e7e01954dfcdc19040000",
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
      "Mon, 08 Nov 2021 02:05:39 GMT",
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
      jobId: "grouparoo-job-152-1636337013394",
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
      "85536b6f9b3014fd2bc8fbd8268490b714ad514257a44036425a4dd3848cb9303704a7d8a48aaafcf75d4cd2b5aab47ec2f63de79e731fbc902d2f12322131cf9e2a288f5f1e454cae09289ae1ab2bb6d4ec1e7b579dacc7e6cf8fb3ad77b5c8a65344f09a25e96e9f434b8aaa6420279b753b2b45b5a7a5102d4cd4b2fadd9635b007b63dec58b63dee2151429e2e79b145fa1fa5f672629a17f17626449603dd73d96662f7fa6e1ebae6be148fc09434df6b9a2823cd4f54bfe68251c54531ddacd14125a18c6047798e1efe5193f8e67dee36a7bb7686e0036740191355a16a5f98828922e55955eaac64f242b4cf3707b27696ce3c3498c8ab5d11157407d74642158dd4710fc66db0f20cd7bf5d05de2c74577eb49edf39deac3d5f2d379ebf361eee9cc031148d73d05c636adce89b8f17d44f402a5e68f5b07eae95cf1d723f0ea626a0b48426180d3b036a8d3ae3388d872c1dd9fd38ed401c8fe2619fda71878d7bd04b62a0c8d3a29a450b5158cca27d6b644710f793a8d7c5d37804dd88419fb1011bd8dd3821a76bf25c72050b2ef742f2a643e4217043270a838d3f9f858e2e21a555ae168db1ba80b71e151688a0ffd474aaa35ca052dd6ed70f9d60360fdd7ba799f01232ca8eeb279c714a730988a625364f41e989041b46fc99e72c10ac27f6fd129464f2eb85d43daf5dbc69f92b3dc401d67695fe927518b8fe376de782b8a779a52187e640cecb83a64fbf11884bda24213f364ef093344f01a45042c13e1f268275e0f39fedb2f808c6d5471da9f08ebbc364adc24a687688eb72cf6ccb1e0f7a03a2c1a5fa101b0eed4bd7ea1c7546d841a1ce25358b8f953662957c056110c7efeb6e9dfe02fc19b9da7a040000",
    ],
    [
      "ETag",
      "Ioka/2y4+0g4cCwjAkM+Dg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-152-1636337013394"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d916f4f83301087bfcbf9524840189b247be18c7f96904dd9164dcc623a3818b3506c8b7359f6ddbdd6698cf1856fe8ddf15cf27bda3dbc544d0e31acaaf2b543b93b2951df9b2245d571ade86845a3101c40cd4a22bdc936395579f01e0e1eb68fd7d3deba1f4ecbe1900895adb16610efa1a890e70ae2a73d34ac465acb04efeae6d9760ee85d6b86b3793a9edc505f8bdcf49345925c8c922b3838df8b39d3ecd9f2ff585b1e1cd888558a054a6c3234595a293698e9b1d154ac6e39ba4a7432430516b63f4a29ba9649215c9ab87eefccf5a3200a82bee707c17948241719d39568085ecc282068a1194fc59634212040da928c0bfb7da371955b13538e27f328b4017f02d6f10b396afd665ace9a3f98e531c168a751dd49413e0a8d8aef85835e3ff23eed2e8531d674135a76e840c6e8916e2b0d71c1b8c2c307aa160c4e02020000",
    ],
    [
      "ETag",
      "0NwL+sd3x48WwXFO5h74Og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:40 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `name` FROM `accounts` WHERE  `id` IN UNNEST (?)",
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
      jobId: "grouparoo-job-153-1636337013394",
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
      "000000000002ff8553796f9b3014ff2ac8fb679372403872485517a5b4634a494748ab6e9a12db18e686608a4da7a8ca77dfc3346bbb4aab8404f8fd8e77f9116d7991a009223cbbaf59b5ff702708ea20a67006a717e75b7bbc4cbe2fdc73627e1dccec205feca7272780e00d4be25d99b3ae147545999cac96bdac1275892b21ba20d4b55cbb6b79b667db43d3b2edb10344c9f274ce8b2dd07f2955ca49bf7f34ef65426439c325973d2a767fcffb0f837e59893b4695ecbff6ec838decbfe37a9a0b8a1517c5c96a0919d492556bb6c33c871c9ea909f9fc5abbc7f1ae9701f8815386291575a19abc40828a22e5595d69553479443acf171f68e9cffd596c6c78b231b034d6eb72db313605deb18d711e2d2e8dcd93a2dc18375ffcc8375a6c101aab30f497b1f1f1f41338254c2a5e689f18939c351e4fbd08de8ea0216085256b83eba1e9616b648e494a86341dd92e494d46c8880c5d6c13938e1de6248461e0a9465db370210a4a139638f6d8f630b1a8e50e468e8513e2a5ae3b1852078fadd4c3e3a1850e1df4bbe28a9d71590ac9db7ea09b2888fd751cadc2d934f6751929ae7375d626d714f1324f054502e83f751d9a2817e0d4343708633f9acee2e0da6fe7396719a6fbe53d4c34c5b96480c615f45ab1ea5224d03474b5580671b008a77360e8215d1d11124d7e3c3e13e27da9bbacf41b4da3687a0b1c5c5578ff4f0cf2f01c7438bcb0bbc679ad211aafff5afd873680a0653f0ff07410ec6aab87beadfce816b547114b59c50afafea401ac03efdfb9e3fe03186e00f84805ffb05854362eb462ed82f19dceb0655b8ee95a16d2e04abd8979cee8d8c946a351643b56a8a792dafdd7bd6942b5fc0b8220ec4518841710fd035eb5dab381040000",
    ],
    [
      "ETag",
      "GFk39SdZO5Fb0J2C3IlOyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-153-1636337013394"
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
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "fd2f77af2d58b23926f830459c2065d68f31869418af59b5ed8d49ba51c4ffbe9b3af6b497dc734fce09e7e402a7a2dec30076853e3768db3b8d7e114086ae29bde361a8760811a0979a9566e137bda9ae36a373ab4f7d1a8bb7f7540f87ac70ea132b09830b1c0a2cf70e061f17a865856ccb737362896f4dd866e96a329d644c54b40f44ba9ecf9f47f3095ca33f4b37fe2ccb55364ba7ff39b6d7088eb4cbf080166b852180b17444e567a19b9395293176d458850e3a7177a12d35465aa2989938791071d2177d211e7b89104ff7ac2c49495f50cde2f592b381272fcb8cbeb91b242cb01de49a87eefceae8d02120d718b479855ae68aac0949b7bf4f8c5a8feed512077218b2f46eb9c614b27aeee06d831128c97ffa52f8db7efd018bfa0c27b0010000",
    ],
    [
      "ETag",
      "pQtV0GgmVBqygk6oC3WYNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:40 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd34b7282300000d0bb646d1c100ad25d402986a65694f8d93091068928ff7fa777afd36bd47787f70d5818f2aa0aea2ce1297805039b19d370eae673d3bec4f45c8c571aadc6eee810d9ef48d159e695ba59cb4a2bd10ef033d9756a1b5cbad8f776f818ed37222630254ba55265a8bbc56c5165050b29655bf97cb1340d2d84f6310e6a9db8a94dbc4857043bbd45ea2ac322d1b2b9a8257adf32cc204672606eeda2f5f6cb013668ce1b78f2ea7a2d42bfba05441a32df770a6fddf786ae3ae64db4076c49f88e1072cdbca1ef1d84f7e6cb1949aadc620be9984d9f9efe2f3001bccf45c9ab403cb62b2f8631017ff5837ac8f9e3bfc959c94bf0f30b9c2f44be19040000",
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
      "Mon, 08 Nov 2021 02:05:41 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-154-1636337013394",
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
      "14fd2b91f771f491a6a50fa91a5509a3539b6e690a62d314d9ce4d6648e3603b3c84fadf77e35006421a9f62fb9e73cfb98f3c911b5124644298c86e2b508f9fae252347040ccdf0759dcaab9fdb6fd76a397bd8b2f061bd7af8dcbb9f4e11216a96a6bb3287969695e2a027db4d3b53b22aa992b285895aeea0df728fbd63cf1b765dcf1bf791a8214f97a2b841fa1f634a3de9740ee2ed4cca2c075a0adde672f7f2deb9eb754a25af811bdd79abd94119ddf940f54b2e39354216d3ed061d541a540c3b2a72f4f08f9ab093b7b9db82eeda1982ef0407cab9ac0a53fbc2145c16a9c82a65b392c913b13e5f1dc8c65ffaf3c8e132af76455cd01d1c39093534368f253867e17ae52c82b375b89a458b75106fe6e7fe6ad69eaf97db55b0712ecffdd0770c653958ae33754eec2dc00bea27a08d28ac7a543fd7cacf1d5abc1f4c4d40690d4d301e768fa93bea8e59ca863c1d7903967681b1111b0ea8c7ba7cdc877ec28022cf8a5a162d64311a316f08d48d39652ceebb7d2f1e79632fee79c0533e4eba9c0dc9fe88dc2b61e054e8526ad174885c868bc88fa3701bcc67916f4b4869959bd3c6585dc06b8f060b44d07f6adad7512151a96ef72288fc70368f16177e33e12564943f6e6e71c629cd35209a2a6c9e01b59209368c04b3957f8a603bb1ef87a026935f4fa4ee79ede255cb5fe8110eb0b66bec976ca270117cb5760e880b9a571672d71c88022e55829ef7bf11873bdae4203fb67e78459aa710525050f08f6789601bf8f85f3bec3d8271f351471bbce3ea705dab7005cd0a095bed33dbedbb385362c1cabc8b0d7adea169758e3a23eca030cf25357b8f953662957e016110a71fd866edff02b4c1f00979040000",
    ],
    [
      "ETag",
      "OfoYZUJjrLAxUbRxOMx+2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-154-1636337013394"
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
      "516f9b3010c7bf8bf74aa420d27445ea0369d325124dba84ee65aa90631fd499f131db248da27cf71db4cba675127d81bbf3efc4dddf7f8eec873292c56ca3ca9f0dd8c3a712fcd73658816bb477f4aad138600103cf4b226176b5c99cdddfbc3cc3ddacd96ebfbd24b7fbeb6b229c78868ab3f8c80a055a3a167f3f32c32ba03681baa94cde6501f387ba2daeb3d57cf185f20a659b2f1ed33499a453760ace8d927b9e77fc07da9e4e01dbe2660505583002da596a8b5b107edeaee978556b18386cac00c73ab83b282d3635b78803aa0cc28bd1201c47e328ba1c865174352252a3e05ea121f8714d03328f9eeb15ee694d164644d82ea6958beeb9a3ba92dd2a6d385f64e35137e1df0017021be3f35eb050d6f957f97e836f32fc4b6afe4190ee4ae93ea80423c1f651aaceb994169ceb25d1e5bcaecfd864b94cdfab62a44525fbc19dea01b4df9d81bb7499fc4f5a72d81fad6e936cfa8e709e7c7346b2f9fd749d25f70f2df7f46684c9c1837bb048b672d03a2a1c8e3e5f5c8e87af26bbc1d678f49dd8db06022638fd2b33e5595c70ede0f40b16dd49cc89030000",
    ],
    [
      "ETag",
      "eH9bTsrwCxheFHujjVxADw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:42 GMT",
      "Server",
      "ESF",
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
      "d1",
      "56",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7fd9b3787080b2de22421dd2504a91170eb0a9b010dc0c079dfe3d4fbf91f71fee37c88a8249995e1bcecee009f41944e362ecb7b6e31d4bb2dfc12e7fc5a1ca399343efdb92ca1335c9b67371659a64da0dcb4a43de9b58dbc6c59a2797198ff11447d3385fdde4598734d05a196b5c61c334f96718d5ef44a72bc12619d28a8ddeafed79631ddce37315a97070b4f6b0bf517fc65b182b5db8247c29ab605b2faebb011989c03e9df099be5bac5052db833a79036c90619588c02f72548d734a0fce32dae619d6021ed4699c278ae9d8fac8211d3f3cfc5f6004986a4bc1645adeb71b164223f0573fbdf62dbbff77582698003fbf0ff5da8a19040000",
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
      "Mon, 08 Nov 2021 02:05:42 GMT",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-155-1636337013394",
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
      "ff85535d4fdb3014fd2b91f74adbb4699bb65235aa368c4834dd9214c4a629729c9b6048e3623b2086fadf779d5006421a4fb17dcfb9e7dc8f3c933b5e656446525edcd7209fbedc8a949c10d0b4c0d76df98756973b5add3c4af9f35ede5cfbe1aa98cf11c10d4bd1ddbe848e12b564a066dba85b4851efa914a283893afdd1a8d31f3b63c771edbee34c87485450e617bcba43fa8dd67b35ebf58ee2dd4288a204bae7aacbc4eef5bdf730e8eda5b805a655efbd660f6554ef13d5afa560547351cdb7113aa815c804769497e8e11f354b4fdfe7ee72baeb16087ee00c2863a2aeb4f1852998a8725ed4b2c94a66cfa4f1f9e64022efc25bc6161365bdab928aeee0c4caa8a6897eda8375166ed6961f9c6dc2f522f63741122dcfbdf5a2bbdc5c6cd741645d9d7ba167699a96d070adb975dadc02bca07e064af3aa518fcdb3517ee990ff71308680d20ada60e2da63da9fd8d3344f5d964f9c519adb90a693d41d5127b5d97408c32c058abc46b461d14a546e960d065396276c344e93a10b6e92bab99d642c1b653099507026e470421e25d7b0e26a2f146f3b44ae423ff69238dc06cb45ec3525e4b42ef5aa35660a78eb51638108fa4f4d0713e502954cbbfd20f6c2c532f62fbd76c2175050f614dde38c735a2a403495d83c0d722d326c1809166b6f85e06662df8f414566bf9e89e9b971f1a6e5aff4180768eceae64ba238f4836f8d9d23e29296750379680f4402133243cf87df88c31d6d73901f5b2fbc26ed53083948a8d8e7b3447013f8fc5f3beebdf99523a3a334de717598322a4c42bb42bca9f685dd1f3af6744a1ab0d41f6203c73e36cde430196107957e29a9dd7bacb415abd52b088338fda069d6e12f6333fa4879040000",
    ],
    [
      "ETag",
      "UlzanVmanhwrrZqrhYIRDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-155-1636337013394"
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
      "0000000002ff8d93516f9b3010c7bf8bf74ab430927443ea43d2a61b1a4dba049ea60a39f8604e8d8fd9266b16e5bbefa06d3ab595e80bdc9d7f27eefefe736077520b16b28d2c7f3760f61f4a703fda6005b651ced2ab466d81790c1c2f89d49fd0bfc46813a5e9dff4bb8cb7eeeefe63797e4e84cd7f41c55978608504252c0b7f1e98e615505b8eaaa974d6651e73fbba2dae9355b4f84a7985a2cd17691c4f67f19c1dbd53a3e08e671dff8eb6dba3c7b6b859410106740eed2cb5c12de42e6ad7b4bcaa150c2c362607cb3ab83b280d3635378803aa0cfcf178e04f8249109c0dfd20f832225261ce9d444d70baa6019943c7d50affd09acc0f88305d4c2b17dd73477529ba55da305a24935137e1ff00cf736cb4cb7ac1421aeb1ee47b021f6578492afe4e90ee4aaa3ea8042dc0f451b2ceb81006aced25d166bcae4fd86cb98c5faba2854129fac19dec0194db9d80ab78397d4b5a72d8b35697d364fe8ab08e7c734292e87abe4ea6d7372d77fb6884d9de81bd3148b6b2d03aca1f8e3e8fcf26c307935d606b3cfa4ee84c031ecb39fd2bdfa46361c19585e33f170529ca89030000",
    ],
    [
      "ETag",
      "n2o1DoIbIUUzUKiLjtkx/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 02:05:44 GMT",
      "Server",
      "ESF",
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
