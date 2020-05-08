const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1588956132723";

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
      "0000000002ff1dcf6d7343300000e0ff92cf5d8fd035d9b7e25a57ec42c7f0c591857a191a11dc6eff7dbd3dffe0f90139a56c9a3231b4ac076f60cb21ded3bd332063ab68d786ec2b0dafb3a97125d5d6c1267c2dd5c492ab75117eeba99da826d9dcab8ebc2e362cc2bcb9a19836c89d85af68ba3110281d1f392b8772a64164c3910562fc5e6a8dba89d7b4b1a97f4e15b6098ccae5427be9104f06e81a15486c1696449ae9f16550da93f39edce3e374be99b1be7e1821774719159571eedd22ac1f16530fe589390f0f67235f12b0036c1d6bcea6ac7eceb403c63bf0dfccc436b2e7d56039671cfcfe01084405a205010000",
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
      "Fri, 08 May 2020 16:42:17 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30",
      "147dcfaf40ecb5f92625a914ad594257a684ac405a4dd3846cc750b70453db74adaafcf7d9262164a9babdc1bdf79c7bee97df1a86613e926c6d5e182624c95381d9eba7070acd33e5c10224cad3195e31eb25be7bb9ff16585f023b2e96fdd5cd785c46118de66093a7b8c969c110e617aba095305ae48051da9484cd6eb33b180e4783f36ebf67f7fa2594e3349e93ec5111dc0b91f38b767b2fa395509aa418e484b710dd54f6f673af9d33fa8091e0ede3ac6d9988b73fccfb39a5080842b3f12a2835141cb3086f0049958a03780d2f8fd95b046c5a898c7e26080384689109a5aca441348b4952304d2e99dea4519ab5e4eab766300367ee4c4303d1b4d864510636f8cc58030122f19a63e3ca5f2e0cd7bb5afa8b49e82ebd28985e3b8b496bba9caf165e60dc5d3bbe63080053acb1c6d8b8d47f9efcd18a74b635e682645a53a8bc3525d2bb6ba3fbce002b0a45225571bc0b8becce39e80e3b2318431bc5c3fe00c61d0ce110da03d0871d34b2b0b58618d419b4b2120f329a8d0636447d3c880643d08d2c399608000b442368dbe71dc902d73d7387de56b5208681c033c273cac9aecbe6d47726a113b95791e73833677628fd372327d177be2b83437fe54d25aadea61814a99895851e37e9a87a21fb592feca30e9e14903342a5283d7dd70b1d7f320ddddb9a0cb98a739c00f41a3ca9658c41caf1010d981cadc06c41d76a8ea63759d4ebd58bf57d1fc465c4cf4ae7a11c19a8d645d772b22ec77942b98747ad2847595acd20f45defab59736edfa7b90569f10ecff3ceac5a1893f4d02f4dd5f8fbeb57a396c29487bd5367deac1cff87c26a9ff2",
      "f838c60c67e890f43f165d014bf7bf9f2d19bd7f4514403e24557a2ea4599e1ce287e47a6fd50192b2ef15a16d5b15a10432711221afcbda479cbc242a17dee04cec5b51be28651fb747928a9a1c0d53e1f20abcdd08b78d6de30fc96c4b2c0c060000",
    ],
    [
      "ETag",
      "08Fr4xfWxhJS4BS7fuO3UQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1588956132723"
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
      "6f9b3010c7dff91491f79a48214d683aa90f64cb5a261ada846a52a72872f1c19c194c6d932aaaf2dd670369786985b448bc60dffdeffc1377b2efcdeaf5d05f9a11f4b5879e69f25280d87f49403d98cd1264c194d44bce3309a86fa241e1c4440737e39f5e310c02c7b9da16bff08b6b3fddbe5e5f575132fa0329d6716fdad2764c8111a9eddfa5ddabfda596e114cc891167459a6d4ab37f92d53e2fe555b8f416374d25e5a454168fbeefcefc39aaa543ff6308c10a6fca23ff0f51ae6bab86a12d7f5e420c02b2084e7f9d0bbe8548796579254e730603c90b1181ac2126b19213c18b1c0bce07da35b007f6643abd9a38f6c5e87274718c663cc28af2cc243caed03b5e7185d992bf9a0a237b54f540547655f1632950dc6842b3425ada996c4ad0bbefd0ff24d05b84ceb8115befd65623b33535a642aaaaf5ede875abce8467b84bbabe299475424e2023203a41d37c830911206537782e3738cf5bb26741e09f8b8c332238251dd177b40b2a53bb96d41f7ee09ef15dd1cf7ddb3bfddd0de7e7c24aa51ffb96dcd0bb9baf42f7eefe43b8feae4fcffc6caf40de0bae8788847274d8c3f17472e90cd171147de366d42833899428a07447588fe45baab42fc64c8275b0fe0126f6047cfe070000",
    ],
    [
      "ETag",
      "OG4JIu0OO669juWaqA1ZHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `first_name` as __result FROM `profiles` WHERE `id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1588956132723",
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
      "0002ff8d546d6fda3010feceaf88b2af8500212454425d05e91a89d2368476d33481e35c32b7214e6d87aaaaf8efb3135ec2a8ba7d4beeee79b9f3d9ef0d4dd39f4916e9e79a1e92e4a500f6f6e58986fa99ca804089ca98e2da587f9f982faf62646657b3c27ab5c8fd7058559112cdd12a4fa1c969c130f0f3f9ac95305ae48851da9484cd6eb36339cec0ea77ccaedd352b2887349e90ec5911fc1622e7e786b1b3d14a284d524039e12d4c57fbb8b1ee1a39a34f8005378e550d29c48d4f752f528a9120341bce67958782035bc00a9154b93880a3f0eb317b8ba0552b91d56b8201614c8b4c2867150da6594c928295e492e95d0665b8b4bcffad05f4993b714781b68c09e36291a1152c35c4b5c582012f52a15df9b737da52761a9314f8527bbc767d575b9268a90db58b52b4248c800b9295b2010a53a889c9ec7652de0767b4a7502448200edbb285ddeea38ed31e847168e3d831ad306e43183aa16d21336ce3410f7a5108a8ce2094768547999c0536ed4e0741e44017ccc1c031ed18e1ae1559b8dfb3cc3876ec08dac8d2b70c9b7d3f98011230263ca79c6c87a98f7cf7327017ded562eaba63777c68ff959193ea47df93c5813f9f8e24aa3eaa18c9d18eab668f0775340121675a6feeb3299e34903342a5a9f290bd69e0fa97a3c07ba8d9901b378104e1b7d98bdab918a51c0e68c4e42a086037345267a9dfddcebcc0bb9d5e4e0e0ce512dded2ab92cfbb9377be8a9ce16bce5c79b511d5a155536fb3dbd96db9c7dc8f280d2e2039af536ac778e381a7f7ffd6ad4b875793bb7aef4fbb9ebff50d832a7323ec4c020c307b5ff586505acd2ff7e7b64f5ee295000f91aece5b9906179a9303f88975ba9ae1859559dee0807ddb6bd239440264e2b4c6b2f79f21c282d58412676a3a89e856a8e9b234b45cd4e0953e572c7a7def45b69beb169fc0129e14866d1050000",
    ],
    [
      "ETag",
      "3tH/vXL3qwtC3nFSu5w5iQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d51d14ec230147ddf572cf5d5250e82a2090f608892cc4586242686906e5cc670eb9ded9d42c8feddb6db8097b6e79c7b7b7b4e4f8eebb2ef4c6cd893cbe22cfda9401e6f52a0b93944a0aa9c94de4a140ad8ada906e2a9a90e7687cf4094071ecffd8244f8b6080ee178346aaa54b28382ebba93461a6f33c8374ae32f8bdd96b79ae005981bd76b6907da1b5a8d8ea5d5161fd12c7cb9560adc58255c06c178124c592bd5765fe9b5b62fd9631cc1162488042eef2925ee21a19935ae7851e6e029ac6402aa1d621a1b399558955c227a9af27a9e3f180e1f07f77ebff7d0eb77d539269c3214a661b960e7f184c4f308ff8c77e637e1c80636517441b0ed553ad7f968e9d7344f6506ecccd6ed69e574687599373912a87789da8d02ebe18e75613ca3314b260b9215583ae1fabb5e336a39a776fe010a3d00fd19020000",
    ],
    [
      "ETag",
      "LhxXLnpxabQ1mtnNMSLxNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cf4b7282300000d0bb64ad0e9544a03bc0321501912016360cd2f00bff001a3bbd7b9dbe1bbc1f90a429612c9e3a4a5af00e78b25536e9e6d8c91acfb3d99327d9afcdc2124a6fab5b3e3aadb14ea3d6467e0c03f1693828338741890668b38b8c963d5d7f468b7b70bf935a707acc4ed7ab2a915ccd825b28dd2e9427bb74c90bcd284a5c9cfb8c58d00c29e4da5dfd70aa163a7756f76f74865977988f3a162bdb4344ad42910cb4b39ac71966bd5e384bcc262cb456f3d5b8be8df7940786be6049f530ddd57644c10a90475f8e84c5e56b2622455981ff663cf19ebcae1a49463282df3f84349d8805010000",
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
      "Fri, 08 May 2020 16:42:19 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d54db6e9b40107df75720fad8d806df1dc96a2c1b3754366e0127aaaa0a2d30d04d8025ece22a8dfcefdd5d7cc17194f60d66ce39736676765f1a8aa23ee22c54af15d5c7f15309c5f38707e2ab5722030cc522f331dde8f79d2fb3f44133ff94c1e28e39dbce7432a95058b2294af3049a94944500f47ae3b4e28294392a086972c166b7a9f747a3717fa0773bc34eb7a25248a225ce1e85c02fc6727add6e1f6cb46242e204508e692b20e931dede76da79411e2060b47d5eb5cd0bd1f6bb753f2524400c936cb2712a0f2585c28314e144b8389143ffe65cbd8551da8a397a8b03404140ca8c0967954c40b208c76521c5b9d20b0ff2b0b47cfcad0554c7581a3357094852a69997a114ae941031e4b1e71c9485bd5e29a6b558dbaba96bae2dcf99dd1aab696bb65e6e5696a3dcdf1ab6a130e42720b9ca44b9917f16ff918e64b51028c399f4e48a6ccd09cfeec768be7180470921c25d51d8c3bca13640fa481bfb913f0ca251b7ef471af8fec81ff651d7d782710f7aa10fa8ae209d557c94916c80341d90167ad0ed0fbcde68d0f17ce8f73c7f140eb5501f0ca103ea9ebd3bf612148018cc31cd09c5fb29ab33db98ba86672e3ccb30e6c6fcd4faef025fa0ef6d93835d7b63cd38ab3ea60895099b578d9e0fe9ac7bc6e7596fecbd095e349017987053f2f44dcb35ece9cc35ef6a36f82a2e2146c1b3f3249631420985131b15fc6819142b128a7354ade9aadeaf5cacaf0710e5881f479fa7763850ac8bece5625dceebb87c0fcf46511d6515551dd736adcf6a2db97b5be60e25e51b3adb7d588c30c2c9695e52aaf1faeb67a35642e5177bef4efdb631ecef822b73226343040564c1a9e87f2cba2056e97f3f5b1c7d784504813f24c7f294f130bf72013d15977b2b2e20aee67e141c8ff5de4190130bf61ad1d334bd7f405cbc24a216a490b1c328aa17a59ae3eecc5259b3236902ce6f81b53fc25d63d7f80b99fd43170c060000",
    ],
    [
      "ETag",
      "+mU1W2JCmj0IzucFVtSv2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1588956132723"
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
      "4d",
      "4f",
      "e3",
      "30",
      "10",
      "86",
      "ef",
      "f9",
      "1595f7da4af4932e1287144ab752fa411b382caa2a134fb2a64e1c6ca76c16f5bfafe3a4341750242ae5127be69df1a3ccc89e77abd1403b1a1174d540cf34784d40a43f0250f7d9660532614aea25e69104d4cca241e1c044f7768f93dbdfb349baa4afa96fdfa4fffeeeeeafaff328e9fd8110ebb8776d69dba7c088d4f693b11b85df68110e213bd1e32c09a3ad319b2759a5b191d7ee6a3a9f94959013a3cc1f1cc71e3963544887e6e7108215de9a23bf8730ebc62a60e8853fafc007019107a7bf8e057f014f4d4d79250e63062dc913e1812c2059622e07822731169cb7b4abd56db5fbc3e1cffea0dded5c76bac768c63dac288fb2848735fac02bae305bf1b7acc2a8ddc97b20723baff8b114c82f35a15c212dedb36c4ad087efd0fc22703a7707bd526cb1db58a5ccca549f0aa9f2d657a317ad3a139ee13ae9faa650560b39808880a8054de32d26448094f5e0b9dce238aec81e2d16ceb9c83822825352137d4feba032b5af48bd7316f619df15fddc57bdd3b7b63b3e17562afdd857e4bad3d978eddab3e5a770fddd9c9ef951aa402e05d7434482191ded8bdeb07f39b840c75174c3b351a3b249a44402c6ed613d927f51a57d3e6612ac83f51f48acc48dfe070000",
    ],
    [
      "ETag",
      "b4kVGDZMGyPiqyfACyzxkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ltv` as __result FROM `profiles` WHERE `id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1588956132723",
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
      "8d54ef6fa24010fdee5f41b8af554145b189e919a53d92d6b68836ede5a2bbcbc06d8b2c65179ba6f17fbf5df0079e4defbec1cc9bf7deccceee474dd3f4179a04fab9a6631abde690bd7f7b66583f531910285299fefdf33dbd42f4ad6b3ed9b9819f1e2fe7f3e16050a26851cdd12a8da1ce599e11e0e7b36923ca589ea28cb1ba24ac77eaa665db7dab6bb65bbd56bb2ce51087d734795104bf8548f979b3b9b3d188188b624029e50dc256fb7873dd6aa6197b062278f358b5298578f34bdd8b981124284b06b369e921e7902d608568ac5c1c8a03fcfd98bd41d1aa1149f49a124084b03c11ca5949435812d228cf0a72c9f42183325c58deff5602fad4b97646beb68cc57aa921ae2d1619f03c16daa5777ba32d658b218d812fb5871f8ee7684b1a2cb5817651a8154c0170419342cf4738868a8acc6e47e47e72387b0a458204e2b0852d7a461799b6d1c721ee91d06e5b383400631bf72cd4c606e977a01360405506a1b4cb7a94b0c40a43d40a5a616002d8085b760793a00b760b7703db328869187608664bdf326cf6fd900c908031e529e3743b457de43943df59b8978b89e38c9df1a1fdb78c9ea01f3c57827d6f3619c9aaeaa84224473b2e9b3d1ed4d104849c69b5b9afa678d2409a51264d15a7eb4e7cc71b8e7c775eb12157ed1a2244dea7af6ad94214733854a30cad404076c3027596faddedd4f5dddbc9f0fac0506ccfdd0ec925ece7deeca1a72a9bff9e1e6f4679686554d9ec76f44a6e73f629cb1cc5f92734eb6d58378f386a7f7ffdaa55b875792db7aef4fb99e33daada22a7321e849041420e6affb1caaab04cfffbd191e8dd1ba00ae433b097e74286e5a522fc205e6ca5ba62745576ba25ec18b6d5dd11cac24c9c22fa96bd439cbc034a0b569088dd28caf7a09ce3e6c8525eb1539429b8dcf1893bb92accd736b53f24",
      "68c6a8ca050000",
    ],
    [
      "ETag",
      "9QjQiGaiw61Z8u0bZYFVVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1588956132723"
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
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "57",
      "90ee752c82bae9121f70d1b8846cd3cd65c9624c2d17860297b5c58518fefbda02ea4bdbf3717b7b4f4f966d93439287e4d126bb24fe2d81573731c8a53eac4094a9146a2b3017406eb51b248db57b86e121592a5775fcfa148bde7c3067c29f4c1a97603f9051e53b29a47094401a0a85bf0db65bde6839cd40dfb8dd72d3d0dcd06ab22a8c360f5efd8f6b21c3d0082feb20f0a7c18cb4526df68d5a6bf3903dee561001879cc1e53905c73d30f96ce616342b527004969c81689be8c2468e399605e5888ea29c81e30e47a3f1f0deed7b0f5ebf73a7c8a84c30d705eb77726e2f51d274857f7a74e236d9f0063649743990e82a9ceb789474d4c5de707ce77ae4ccd7ed6963756873e938ad2488378e6a1e01668a1ee9e278423daed469485e82a11955ffb54864cb59b5f50fbaaae4b81a020000",
    ],
    [
      "ETag",
      "EodkiQeryyvXVsH0F4FcsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "52",
      "83",
      "30",
      "00",
      "00",
      "d07fc9b974943ddea0c8da0a23b25e320861913d200d38febb1ddf1fbc1f90e5395e16b48e2d1ec00bd833169ef3b333caea5e154a913b89405c9b5baec68592b760e01a61f679953f0a162ea8b3ed7260b1de411a3e8bd5666a112e0ff536de83ce8ac3c21d18fb88794b9c8faadcf9c0f10285e9b489f58d8dae66fa3e1aaed23b459d7275637a5ba44b5fbe6e7d5cb48e1439556699696538d6c47955d336883d651da7449f9faa5b08bf5584f61edaa998289a28ad7d40331647d7e9f390621e9c00a65343f0829ac78c13203c81ff265af7093fae2ace0826e0f70f632b0f5c05010000",
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
      "Fri, 08 May 2020 16:42:21 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1588956132723",
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
      "8d545d6fa240147df75710f6b52a282a36315ba3744ba2b80bd86eb3d9906118e8b4c05066d0348dff7d67063f706dbafb62e4de7bce3df7cc9d796f298afa82f348bd56d41027af152adfbe3c9350bd1219c44022321bb2189b8f19f9e9a57d3d71f1f62e5e3d6d2793ba0a4b34055991a23625550911bd5e7b9da42455014a42da9cb03d68eb03d31c0f867abf37eaf56b284569bcc0f98b207862aca0d7ddee414627212449112830ed40921de3dd4daf5b94e4194146bbe75dbbbc11ed7edaf76b4a206098e493b5576ba8282a0394019c0a15277014de9cb37730c83a09afde60880084a4ca995056d34092c738a94a49ce99de799087a5e4e36723a07ad6c29af90a246995e5410e3274a544808180bd1548b975574bc5766e57ee72eadb2b27f06677d672da99ad16eba5e3290f77966b290c8429925865a2dcc82f877f4845b25b8428c3b9d4e48b6c4309cfee6db43f38c0238520e1aa28da9705236d0874531b87713882b1d91f84b186c2d00c4703d00f353836901185083419a4b21a0f7292c31ed4c75a5f0f0c0318fc47d782106a51601a3d7da841100de350dda377c75960890043734c0b42f1de6575e65a53df0aecdbc0b1acb9353f8dbe2df145f5836bf362df5d3b338e6ada14832a65f37ad07393cea667dccfe6609f397831405162c245c9d3b71ddf72a733dfbe6fc8e0abb84009806fdeab58c618a4149dd0a0e447cb50b924913847d5992e9bf3cac5fa7e28a2bce2d751e7691c5e28d645ce72b12ee77d7cbe876756d447594755cf776de79bda48ee3ea6b90769f501cf661f1616c6383df925a95a7ffffbdd6ab450f9c5deab537fac2df75160654e645c14a312e5f0d4f43f165d00ebf4bf9f2d5e7d784504803f24c7f694f130bf72909e9acbbd151710d7be1f080ddd181a07420e2cd965c5501f1c2a2e5e12d10b",
      "652867072bea17a5f6717726a96ac8913051ce6f81b33fc25d6bd7fa03bb6d72080c060000",
    ],
    [
      "ETag",
      "voL98YmoXSl31gRiwHfOhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1588956132723"
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
      "6f",
      "da",
      "30",
      "10c7dff32990f70a52a185d2497d088cada869e820d5a45508b9f12573ebc4aeed30a18aef3edb09252f9d2215292fb1effe77fe2977b2efcdeb74d00bcd09fada414f347d2d40eebea4a07fdacd1254c1b4328be0b902d4b5d1a0716aa3c5749a9028cc7eb1d7e9edd538fc9dfad94b7a7d5d46a9f80f64d8c4bd19cbd809054694b11f9ddda9fc4ecb7106f6c498b322cb37ceec1e65bd134e5e45cb79f8a3ae649c38257c08027f12cc5025edbb1f4308d678e38efc1cc2ad6baf82a167feb4840424e4311cff5a48fe0cb19ebbf22a9c09063dc50b1983aa2036b19453c90b8125e73de3ea0d7bfde1787c351cf5cf079783f34334e331d694e736e16185def19a6bcc96fcafad30ea0fca1ec8d22e2b7e28054a6a4da857c8485b9b4d097af7edbbff099c87d1e8a2165bedd65e2db33135a152e9b2f5cde855ab4e8467b84dbab92994b5424e2127205b4153b1c1844850aa1d3c571b2c4443f664b1084e45c639919c9296e85bda0695e96d43eaf760e19ff05d31cf7dd33bfdcd8f66a7c22a6d1efb86dc687e375b45feddfd8770f35d1f9ff9c94e83ba97dc0c11056e74f4cf2ec6c3cbd1193a8ca229b7a346db49a46501ce1d6333926fa836be043305dedefb077d9d110dfe070000",
    ],
    [
      "ETag",
      "pCCfdTNmWlqCK98NZgAmkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ios_app` as __result FROM `profiles` WHERE `id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1588956132723",
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
      "ef",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "9ebf02b1af4d8090045229eaaa846e6869da12d2ae9aa6c4760ee696608a4da6aacaff3e1bf2832c55b76f70f7eebd77e7b3df1a9aa63fd374a99f6b3aa6f14b01f9eba72786f5339501816295f91677eed78f4f944d683a7ef86e3af1738aee06830a45cb6a8e5659024dce8a9c003f9f4d5b71ce8a0ce58c352561b3d7b4baaedbeff62cbbedb4edaa9443128d69faac087e0991f173c3d8d968c58cc509a08cf21661ab7ddc58b78d2c674f4004378e550d29c48d0f752f124690a02c1dcca6958782433e8715a2897271285ee2cfc7ec2d8a56ad58a2d79400228415a950ce2a1ac2d288c6455e924ba6371994e1d2f2feb716d0a7ded81b86da82323e4759b6d010d7e6f31c789108ed2ab8b9d616b2cd8826c017dac3572ff02476b9d006da45a958b22d810b9a969a21c209d49464763b26ff9d03da5328122410872d6cee983d64b9661f47d821916b77716402c62e76bac8c626e977a0b3c480ea0c426957f52865a9e5403772da6469d996dded23db75231361d374904b703bc23dd7763a60e95b86cdbe1f92031230a23c639c6e27a90f03ef32f4e6fed57ce279236f7468ff774e4fd00f812fc161309b0c65557d541192a31d55cd1e0fea680242ceb4dedc47533c6920cb2993a6ca13f627a1175c0e43ffbe6643aedb1862445ea72f6ae12294703854a31cad40407ecd96ea2cf5db9ba91ffa3793cbf181a1dca0db1d924bd88fbdd9434f75b6f0353bde8cead0aaa8b2d9ebe8b5dce6ec5d967b9414efd0acb761dd3ae268fcfdf5b351e3d6e5d5dcbad2ef665ef0a86acb9c",
      "ca0410410e2939a8fdc72aabc22afdef8747a277ef802a904fc15e9e0b1996978af08378b995ea8ad155d5e996b0d3ee987b4259988b5344d7eaed10276f81d28215a462378aea4da8e6b839b254d4ec94650a2e777ce24fbe94e61b9bc61fcf394c4ece050000",
    ],
    [
      "ETag",
      "Kg4VvYjioNinLWX07gknaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff4d515d6f8230147de75790ee7123191a9d2ef14117374d883a169f16636abd220a5cd65bb610c37f5f5b407da13de7dc8f9ec3c5715d768eb33d7b75d92e8e7e0a90e54304ead35c42a02251a48f1c3302f664aa41f1c8541fdf4fc38f5977254b7a5cc4f39e4f6741e3d1a8ae22718494ebba8b461a1f6248f6a4f1b7c56ec35b2de3299889dbadb40bed844653656eb5c972194cc78b7b29c5bd9516eb20184f82296ba4ca9e1bfdadec534eb80be100123201b707e5124f20d4dc3a279ee6097884851440cd12d358cb91c422e712d1d394d7f7fcde6030ecf5fd6ee7a5d36dab13145cc5989986f517bbae57a87812e29f31cffc3a1d59c33a8b360976b88be73e202dfd9a66250b6057b66a6e1ba7459bdbbe49a9805612b51b02ebe199b561bca131ab4c1666a2a505d7ff6b16ab86732ae71f56be37ae1a020000",
    ],
    [
      "ETag",
      "hFj9GH3Prys+NiI51skcsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b7282300000d0bb64ad0e127ee9ce082d54a80c480b6e183e29843f01c5d0e9ddebf4dde0fd8024cbc834c5735f930ebc009e886897ed4ebd867991fbcedd8e83e2ada4a6d87c9c93356a05c678b1aa763d2029d86613fc1283ef9ef716a7dd620b561b8e50f70f4e882525b5a482e89a9af915b314fcea1dd445d1204dcdd0c0545c04e4dd2f688c96eb3672c6a673ebb3b33fcae898db6babd830d6e52c293fa9b197cd1334d22ab72b7c73f1ad48eba84e4558b1b9e81ff265b9aa0ef7a43be4ef6e0bd5b131ca096c00790c949129a6cf199411da80ff663cf3813caf98248c30f0fb07357d7fbc05010000",
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
      "Fri, 08 May 2020 16:42:22 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545d6f9b30147dcfaf40ecb509242185548ad628a12d5a4236425a4dd3846c63885b822936adaa2aff7db6c90759aa6e6f70ef39e79e7b7dedf796a6e94f248ff52b4d87247dae70f9f6e59142fd42663007a9ccf0d7def3ea766d1a746a8f2fb3f51ae26f463a1ad528a2d80c6c8a0cb719ad4a84d9d56ad9494b5a15a0a4b42d04db76bb3b709ce1e0b2dbefd9bd7e4d65384b66247f92026bce0b7665187b1b9d94d234c3a020ac83e8e610375e7a4651d2478c38334eab1aa210333eadfb35a3087042f3d16a597ba8182e23bc0124932e8ee4185e9faa7708d87452817e21080384689573e9ac9641344f485a954a5c28bd8ba0082bcb87df46405fba3377126a8866d5268f72b0c1175a0c3888f85b81b59b6031d73cff6611ccc7a1b7f0a3e5e4ce9d8f3b93c56c35f797dac39d1bb81a0730c38aab8db46bf5e78b1fe548558b31e324579e42996d3811d9dd18bd0f0ef0202145842b8677b0c8362f41d731873081364a9cfe00262686d081f600f4a1898616b6628841534139abf920a7b9d533939e15f7a3a1dd3323cbb65004900d23e838660207311a0c1c7dc7de1e7a4125061c4f092b2823bb29eb93c01d876ee4dd44beeb4edde9b1f5d7929ca11f024f80c360e54f04ab39a60454199fd68d9e0ee9a47b2ee6d96cecb3099e355094840a53eaf43d3f7483f124f4ee1b36c42ace700ad0dbf2592e630232868f6c508aa3e5b89cd3589ea3ee8fe7cd7ed5627ddf839840fc3af83cb62380725d542f67eb725a27147b78328afa28eba8be0c03cfbfd51bc9edc732f720ab3ed079d985e50813921de7a5a45a7f7ffd6e354ae8e262efdce93f566ef05372554e66029ce012e7e858f43f165d12ebf4bf9f2d81debf2292201e924379c645585c39c48ec5d5deca0b48eab9ef05adbe691d0405b1e4e788aed3dd23ce5e12590b6f70cef7a3a85f947a8edb134b55c38ea249b8b805feee08b7ad6deb0fc685a3f90c060000",
    ],
    [
      "ETag",
      "tw2qUGh0/oD7A6lhhbeK/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1588956132723"
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
      "000002ffc595df6fda3010c7dff35720f7712035945f9bd487b0650c29400ba12f13426e7cc9dc3a71663b4ca8e27f9fed8492974e91869497d877df3b7f943bd9f7e6743ae89566047de9a0679afc2e401c6f12508f66b306593025f592f34c02ea9a68503831d1b345e22e374fc927ff556e675e21fdf160fc787f5f46c9e817a458c7bd694bdb310546a4b67f5abb53f9ad96e114cc891167459aedadd9bdc8ea985b7913aee7cb595d4939b1ca721b04de34f051259dba1f430856786f8ffc3f845d774e05432ffc790d3108c822b8fc752ef80b446a6ecb2b719a33e8495e880864053189a59c085ee45870ded3aedeb8e70e2793cfc3917bd71ff7efced18c4758519e9984ed06bde3155798adf91f5361e4f6cb1e88d22e2b7e2e058a6b4da857484b07934d097af79dbaff089c2fc3d1a0165bed764e2db33135a642aab2f5cde855abae8467b84dbabe2994b5424e2023205a41d37c8f091120653b782ef738cf1bb2a7ab55702d32ce88e094b4443fd036a84c1d1a52bf072bef8aef8a7eee9bdee96f5ee85f0b2b957eec1b72c3f9c2df84dee2e143b8feee2ecffcf4a8403e08ae8788043b3adcdbc164381edda2f328facacda85166122951807547588fe41f54695f8c9904e7e4fc05dc847f87fe070000",
    ],
    [
      "ETag",
      "GMg1NSVg+EksUGAusE747Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `date` as __result FROM `profiles` WHERE `id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1588956132723",
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
      "bf02b1afcd13c2a352d445095dd1d2b42324dd344d898183b92598daa65b54e57f9f0d7990a5eaf629e4ee7e8f3b9ffdda5014f50967917aa9a8014e9e0ba09b0f8f24502f6406384a6466319b2d4cfb26e238f1d3df1b4df7be7e1e0e0783aa0a976886d6790a4d460a1a02bb9ccf5a0925458e28214d41d8b49addbe65d97da3abf5cc9e564119a4f104674f92e027e739bb6cb7f7365a0921490a28c7ac1592f521de7ee9b5734a1e21e4ac7daada1642acfdaeee554a42c431c906f359e5a1604097b04638952e8ee028f878cadec268dd4a44f50b0e01852129322e9d553421c9629c14b424174caf2228c2a5e5c3df5a409d391367e42bab087158298829cb250556a45cb9f6ee6e9595e831c629b095f270e3788eb2c2d14a192857a55c491501e3382b057d14a4509311d9dd8cdc374ee740214910470c76654bb363a0aed5b1833830c3d8d2fa41dc8120b002b38fb4a013da3ae85100a8cec0a576854719c934bddbef06a68e0243fe1ab1d63762dde8f70cdb303b9666a30e981644ea8e617be827a4206631c62c270cefc6a88e3c67e83b4bf77a39759cb1333eb6ff8be2b3ea07cf15c5be379f8e04aa3eaa1889d18eab664f077532012e665a6feebd299e3590534c84a9f278dda9ef78c391ef2e6a36c4ae4d2041e166f62cb72d462983231a51b4060ef49644f22cd5fbbb99ebbb77d3e1e4c850aecffdbe9289b2ef07b3c79eea6cfe263fdd8cead0aaa8b469e86a2db7bd78936581d2e20d9a975d58ed9e7034fefefad1a871abe25eee5ca95f",
      "e68ef74d62cb9ccc781003852c3caafdc72a4b6095fef7ab23aaf78f80048877e020cfb8088b4b15b2a378b995f28ae175d5e98e50d7bb3d7d4f2880949f57f46c7b5f71f610482d5843c6f7a3a81e846a8edb134b45cd4e0993e562c7a7eef45369beb16dfc01c593dd4ccb050000",
    ],
    [
      "ETag",
      "VSSV79HdtigTlxy34RXKAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1588956132723"
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
      "ff4d515d6f8230147de75790ee756405e3744b7c90e9b225669b305fb61853e1c250e0b2b6b818c37f5f5b407da13d1feded399c2cdb26fbac8cc9a34db659fa5b033fdea420977a1380a87329d452612980dc6a3748966ab7e7c7fb2575bf9ec3e96c48ef82f05d1e46e964d2ba44f4030553be93420a2719e4b150f8db60bbe38d56b202f48d9b0d3703cd0d9d268f95d166d3cff9355f606cf8b7d56231f51773d2498d59d7eadb9877ec701b40021cca082eafa938ee2092af26b66045958323b0e611886e883ed8ca29c7ba621cd151943376dce178fc30bc7707dec81bf4ee1c2326332cf5815548cee3254a9607f8a79313b7ad86b7b02da2af812457dd5cb7a3a483a99b7ad4a19e435d72d69a6eb7b67ab4be4cf58f12c407479549804942495fc913eac8523722790d868e98fa652f99ec38abb1fe014566b11e1d020000",
    ],
    [
      "ETag",
      "2BdkQ01ZFSAD50/RSOtv7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcf4b7282300000d0bb64ad0e26a690ee8a62a540f9944164c38410914fc34728a19ddebd4edf0dde0fa08cf1fb3d1ddb9a0bf00c160ac9866dac56d397227fd71428305146a5eb7dd311ceb94a4e63e2f6aa350db01922b36c1cece9b7fd0bed8fb1726c5f3f9b5d5dac2fdb5a96a11a78073b8c2ed0c8925af84c64e335f2356f828df655d9e613659cc02996c1e40b379a5578926d9a7346bf0b633e976fd91e1aa68ebd6487b6459ecb790a13c74065da54f6c1bda25b202169038c75989b6b6655568c54647d0486eb8315e0b22b077e4fcbc70c614256e0bf998e4bc71f579dd3810fe0f70f11faa58a05010000",
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
      "Fri, 08 May 2020 16:42:24 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1588956132723",
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
      "00000002ff8d545d6f9b30147dcfaf40ecb5092421052a456b9690153590969056db3421e318e696608a4da6aaca7f9f6df24196aadb1bdc7bceb9e75e5ffbada528ea33ce57ea95a2c6387da950f9fae989c4ea85c820065291b9edf9cfb79a769718def75100e997b49b4eef87c31a85259b827591a13625550911bd5a2e3a6949aa029484b4b960db6e770796650f2ebbfd9ed9ebd7548ab26486f36721f08bb1825e69dade46272524cd102830ed40b23ec4b54d4f2b4af28420a3da69558d17a2da87753f67040286493e5c2e6a0f15456584d60067c2c591bc8aaf4fd53b18ac3b29476f3044004252e54c38ab6520c9139c56a514e74a6f3cc8c3d2f2e1b7115017cecc19870a2459b5cea31cacd185b2020c44ecb540ca34987b8aeb4fe781370addb91f2dc6378e37ea8ce7b3a5e72f94c71b27701406e20c49ae3254aee59fcf7fa423596d8528c3b9f4148a6cc309cfeec6e8be7380070921c25d51b48345a67e09ba966ec7496cc2c4ea0fe24447716cc5e600f4631dda06325631024d05e9ace6839ce43dbddb85fd018a6294f423c348ac08d8d620320dfbd2362d53377453ddb1b7875e60890043134c0b42f16ecaea387046a113b9d3c8779c893339b6febbc467e8c7c0e5e03058fa63ce6a8e290155c62675a3a7433ae99ef179361bfb6882670d142526dc943c7dd70f9d60340edd87860dbe8a339402f8ba7811cb98808ca2231b94fc68192a3db212e7a8fa23afd9af5cacbb3d8872c48f83cf633b1c28d645f672b62ea77542be8727a3a88fb28eaa8b3070fdaf6a23b97d5fe60164d53b3a9b5d588c30c1d9715e52aaf5f7d7cf56a384ca2ff6ce9d7abf74826f822b732213a004952887c7a2ffb1e88258a7fffd6c71f4fe151104fe901cca53c6c3fcca417a2c2ef7565c405ccf7d2f6818a66dee0539b164678881ae77f788b39744d4426b94b3fd28ea17a59ee3f6c452d5b0236902ce6f81bf3bc26d6bdbfa03aac5018c0c060000",
    ],
    [
      "ETag",
      "K2NkK//Pf4MZARcsBg1gFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc595516fda3010c7dff32990f70a52430ba593fa008c6e4c295008d2a6092137be64ee1c3bb51d5a54f1dd673ba1e4a553a421e525f6ddffce3fe54ef6bd79ad16fa4339419f5be89126cf39c8fda704f483dd2c41e54c2bb364822b406d1b0d1a2736faf9fbeb8f31f9491e7cb68bfae37091aeeff8cbed6d11a5a2df906213f7662c63c7141851c6fee5ec56e9771ac729d81323c1f2946f9dd93ec97a9f3979152ea7b3af552515c429b375100c47c10495d2a1fd3184608db7eec8ff43b875e39530f4241e971083041ec1e9af33299e20d253575e85d38c4147895c46a04a884d2ce4448a3cc352888e71756e3a7e6f30b8e9f5fdcbee75f7f218cd44843515dc26ac57e81daf85c66c295e6c8591df2d7a200bbba8f8b11428ae34a15a2123ed6c3625e8dd7768ff23703a0bfb5795d872b7f12a99b5a931954a17adaf472f5b75263cc34dd2cd4da1ac1172029c806c044db32d26448252cde085dae22cabc91ecde7c1b9c8981329286988bea34d5099ded5a4de05f3e119df15f3dcd7bdd35f86e1e45c58a5cd635f931b4eef27ab7078bff8106ebe9bd3333fda6b500b29cc1051e046877f7135e85df72fd071148d851d35da4e222d7370ee089b91fc8d6ae38b3153e01dbcbfc29d607dfe070000",
    ],
    [
      "ETag",
      "qJxXCdYdQ1lvc6CTPmUFnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `stamp` as __result FROM `profiles` WHERE `id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1588956132723",
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
      "da",
      "30",
      "10",
      "fe",
      "ce",
      "af88b2af0502040895508720ed22d1b40ba1d5344de0984be6368953dba16315ff7d76c24b1855d56fc9dd3d2f773efbada669fa334957faa5a607247ac9816dbe3cd140bf50191028521997b9f3f96d06f33481d19f9bb5ff171e36afc36159450a34474916439dd39c61e097f359236234cf10a3b42e09eb2da3deea5ad6a0db6b75dafd76a7c47288c329499f15c36f21327ed96cee7d34224aa31850467803d3e4106faedbcd8cd127c082374f659b5289373f16be8a294682d074389f9526720e6c010922b1b27144af82afa7f40d82924624abd70403c298e6a950d64a1a4cd39044392bc825d39b0cca70e1f9f05b09e8337b6a8f7d6dc98554596a886b8b05039ec742bbf6ee6eb5a5ec322431f0a5f6f8cdf66c6d49564b6da85d157a05d70ab82069a1e8a320868a8ecceea6e4bc7340070a458204e2b02b5bf48d1e6a59c62008833e0ead4e37080d08022be877512730f0c004731500aa3208a55de2514a531c74cd16ea9bb8db33c108503b408621a1185656d06ef791d53207bd9ea1ef18b6877e3003246042784639d9cd511f7bf6c8b717cef5c2b5ed893d39b6ffcac859f5a3e7c862df9bbb6389aa8e2a4472b493b2d9d3419d4c40c899569bfb688a670d648c5069aa385fc7f56d6f34f69d878a0db96c538810decc5ed4ba8528e6704423861210c06ee94a9da57e7f37737ce7ce1d4d8f0cc5fedcef2bb92cfb79307beca9cae66fb2d3cd280fad8c2a9b3d53afe4b617efb23ca0387f8766bd0bebad138edaff5fbf6a156e5ddecc9d2bfd",
      "fbdcf67e286c9153190f426090e2a3da27565901cbf4271e1e59be7f061442be04077d791b0591b70af3a37ab196ea8e91a46c754768767b036b4f28814c9c57589df6bee2ec29505a90402af6b3289f847290db134b79c54e0153e572c95dc7bd29ccd7b6b57f773ff3b4cf050000",
    ],
    [
      "ETag",
      "NrNUUMpeUnmeAxGvTzeVyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff4d515d4fc230147ddfaf58eaab330c2c32131ec0a09280225f0f1a42ba7119c36d77b69d6621fbefb6dd06bcb43df79cdbdb737ab26c9b7c47e98e3cdac48fc29f1c78711382fcd08739883c96426d19a602c8ad568364a1564734ecbcbd3f73bf7ba0c567b87859aed77ed8ef572a111c20614a775248e17d04f14e28fc65b05dd70d97b204f48ddb2d3703cd0d35278bcc70cbf174b4580ea6b36b32c19d21df5693c9603819919a2acdbe516b691e73447f0e7be09006707952c6f108811c1bef8225590c8ec09c0720ea21bab1a2438e79c638a2a34a8edb725cdaeb79b4eb76da0fed4e238f316032c25477ac16e43c5fa264f11cffb47fe25601f10a5671346190fd5542d71929ead734dfd15e8b52cff5ee471e39d3657dda580dda5c060f0b0962c651f91260dcb44813cb136adb52a722790ea61c30f577af91ac6b5669fd03a241f65826020000",
    ],
    [
      "ETag",
      "i5g3NOFrb6h5yZgSGTVVbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcf4b7282300000d0bb642d0e7f4a77f24b4110430b029b0cd22888421aa07c3abd7b9dbe1bbc1f509425e97b3c740d69c12b580a51df96db7df7622cd74beb2df9296a9c7c99d631107b8a9a006b97845b3421425c1a9b36b4f23047141538efb2aeb42b0b37908d5c25cf509d359eee46f6259fb22922757aa88e37177a8fe0e3a1ed695b9ee30aca6278a70915acdb9db9668153eead58c5cf16ad8ae2d6f03a9490f779618a992287f331f1a5f6ec249ad7ed26f310d67688aaef387b770c5341aaea3b129bfad5d06db00164a635233dae9f3349d1f50df86fe261a1e4793548c10803bf7f1db4e2d405010000",
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
      "Fri, 08 May 2020 16:42:26 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "40",
      "ecb5092109f9a814ad514257b4846c84b49aa6091973616e09a6d8a4aaaafcf7d9261f64a9aabec1bde79c7beef5b5df1a9aa63f912cd2af353d24c97309c5eb97471aea5732031c2532335db42773fa02d09e58fd2c33acd9f7d1fa653cae5044b119dae42934192d0b0cec7abd6a25052d735450da14824dd36c9ad67038b2fa66b733e8742b2e83349e93ec492afce53c67d78671f0d14a284d524039612d4c37c7b8b1ed1879411f0173669c97354425667c5cf86b4a31e28466e3f5aa3251322802d820924a1b277614de9ccbb708dab41281de120c08635a665c5aab6430cd6292948512174a6f2228c2caf3f1b716d057f6dc9efa1aa669b9c9820c6de04a8b1047017fcd41bbf5960bcd716f97de62e23b4b37584defecc5a4355dced70b77a53ddcd99ead7114a6a0b8da58bb517faef8518e54b508182799f2e4cb6ccd89c8eee7e8bc7384470929225c31d8c38241bb8fcc617b14c6e100c7c3ae15c66d08c36138b050376ce3510f7a5108a8aea09c557c94d1acdf19c53d731405315838e8a15e14a018778328c46114c771df1a58fa9ebd3bf6820b401c6684e59491fd94f5a9674f7c3b706e03d7b667f6ecd4fa4b412ed00f9e23c0beb776a782551f538cca94cfaa46cf8774d63d17f3ac37f6d1042f1ac80b42852975fa8eebdbde64ea3bf7351b6215e79020fcba7a96cb18a394c1898d0a71b41c8a058de439eaee6451ef572dd68f038809c4efa3cf533b",
      "0228d745f572b12ee7757cb18767a3a88eb28aea2bdf73dc6f7a2db97b5fe61ea5e53b3adb7d588e3026e9695e4aaaf1ffd79f46ad842e6ef6de9dfe736d7bbf2457e564c683180ac8f0a9e827165d12abf4271e2e013f3c2392215e92637dc64558dc39cc4ed5d5e2ca1b48aac11f047b7d6b641e0405b1e0978881393c202e9e12590b3690f1c32caa27a51ae4eecc5259b3a368122eae81bb3fc35d63d7f807b571c5250f060000",
    ],
    [
      "ETag",
      "CM0ALowee0A56nn/5DK9Uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1588956132723"
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
      "4d",
      "6f",
      "e2",
      "301086eff915c8bd82d4d0f2b1957a082dedb21ba01bd2d30a21379e644d9dd8b51d56a8e2bfafe384924b57918a944bec9977ec47999167de9d4e07bdd28ca09b0e7aa1c95b0e727f9180fe556c025039d3ca2c82670a50b788068d9322fa59ccf75b11fc54af6f7cf908bb68f463b8f06e6fcb2815fd81149bb87763193ba6c08832f66f6b772abfd5329c427163c4599e661b6b764fb2de0b2bafc260b678ac2b292756593cfbbe37f1a7a8920eddcf21046bbcb1577e0d61d7b553c1d096bf041083842c82d35f0bc9b710e9994dafc2a960d0533c9711a80a521c2ce544f25c60c979cfb87aaedb7307e3f1b7c1d0bdea8ffa57c770c623ac29cf6c0556e883afb9c62ce07f8b1423b75f1641967699f2632e505cab423d4546da15a729411fbe43f73f81b34538bcaec556bbb5533bd9981a53a97459fb66f4aa5667c233dc26dd3c15ca5a2127901190ada0a9d860422428d50e9eab0d16a2217bb25cfae722e38c484e494bf41d6d83caf4ae21f5c15f7a67ec2ba6df377dd3f75e383d175669d3ed1b72c3d97cba0abdf9d3a770f35d9fdafc64af413d496ea688023b3bdccbebf16034bc44c75974c78b59a38b51a4650ed61d613393bf536d7c31660a9c83f30f767d444dff070000",
    ],
    [
      "ETag",
      "UpMyjpRKskqoOGevc7J6NA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `first_name` as __result FROM `profiles` WHERE `email` = ?",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54ef739a4010fdee5fc1d0af51405030334ee22849e918932026d3763a7ae0422f458edc1db669c6ffbd77e00fac994cbec1eedbb76fdfeddd6b4351d45f385baae78a1ae2e4b900faf2e98984ea99cc004789cc7cf966c6d37b6c23f83b26cc5c8fdbd7da7ad0ef57285c5633b4ca53683252d008d8f96cda4a2829724409690ac2a6d16e1a1dc7e975ba86d9b6db6655cb208dc738fb25197e729eb3734ddbe96825842429a01cb3564456fbb8b66e6b39254f1071a61db7d54427a6bddff8222511e29864fdd9b4125130a07358219c4a1987ea6578794cdfc268d54a047a8d234051448a8c4b69154d44b21827052dc905d3ab088a70a979ff5b0ba85377ec0e03651163caf83c432b58288829f3390556a45cb9f26f6f94851835c629b085f2f8d9f55d65512a5d287de5a2ec5b722e81719c959d0314a650eb27b25bb7bc370e6a4f214910470cb6b0b9ad7791e1e8bd300eed2876cc4e18eb10864e68779019ea51cf026b1902aa3370d9bbaa4719c98cd0729065eb866399edaea9777a8e615b1ddb889d5e1cb60d03c500f6d251b70c9bfd3c1105c46184594e18defaa90e7d7710b873ef6a3e71dd913b3a8cff9be213f4a3ef0970e0cf26435155b72a46c2dd5135ecb151470e70e1697db8f75c3c1920a7980851e5397b93c0f507c3c07ba8c9104b378604452fd367b976314a191caa1115dbc081de90a53c4bf5ee76ea05deed64303e30947b74b7433201fbbe177b98a9ce16bce4c79b511d5a1555a781ef4daed55a7273f626cd034a8b3778d6dbb00a4fe28610ccf44bf853da54de913a6fe3ffaf1f8d5a3f555cdbad54f57ee6fa5f656d9993191f62a0904507051fd86f5958a53ff02a09f8ee8d9015e299d8f7675c84c5558bd8a17bb9abf2e2e15529794768d99669ef084521e5a7884ed7d9214ede09d90b5690f19d17d57b5119b9399254d4e49465122e367fb23dd04d63d3f80744ac6d7cec050000",
    ],
    [
      "ETag",
      "JZ3fSQi7aezLos3vL2G/vA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1588956132723"
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
      "4d",
      "51",
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "57",
      "2c",
      "f5d5250e1ca2090f608812098121c6c41052b6bbd9b9edd6b69310b27fb7ed36e0a5ed39e7dede9ed393e3bae48795317972c99ea5bf1588e34d0a6a650e21c82a57526f1c4b09e4d65483a2a9a98e035e7096e4cb30fbec1f56e26340dfeec7a3515325a36f28a8ae3b69a471c2208fa5c65f16bb2d6fb59216606edced841d686f683575e4565bbf87b3c5cbb552606c95c5663e1f4fe653d24ab5ddb77aaded4b32dc879080803282cb7bb8c00c2235b3c6252d780e9ec44a4420db21a6b191538115a702d1d394e7f73c3f180e1f8381dfef3df4fa5d798e11550c4bd3b15993f37c858ae6211e8c79e237e988063659744990e42a9eeb80b4f4679aa7820139b3757bda3a1dda5ee64d8e0ae452a0b623c19ab8235d1acf68dc2a13861215583aa2fabf5e996a39a776fe0167423ab11a020000",
    ],
    [
      "ETag",
      "d5pmpiflPRjX3wQrV6aK4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b7282300000d0bb642d8ea220746718312302e163a86c9810a2602dd00062707af73a7d37782f4019e35d97f5cd17afc107905435e76cee340694d742697efc610c6afd5ea2f144ac8aaa13b626fec003ac1df624c74b153d74899538489a1ab96966a4ecacc5e7723f1ea139d9c8b3710a3def14c685c99d40310e22d703ba7675448602d9a91465b8910bd5f1a475913e9f96030b5552faded675ab4427c695acfa001f683268bbbd552f118916f48e76b70de47d4e6fdde796d1756e9132525a89be5507fb710766803fdb4af02eabdeb395669a33f0dfcc7ad9f2f715722ab800bf7f5a26291f05010000",
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
      "Fri, 08 May 2020 16:42:27 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-13-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d545d6f9b30147dcfaf40ecb5f90e09548ad628a11b524256425a4dd3848c73616e09a6b6e95455f9efb34d3ec852557d837bcf39f7dceb6bbf350cc37c22f9c6bc36cc98a4cf25b0d72f8f3436af5406044a55c699baa1fd7cbfb8ebf4c247e67ac3d9b263dd8dc7158a683647db228326a725c3c0afd7ab56ca6859204669530a36bbfd66d7b26dc71a76fbbd51af5f713964c99ce44f4ae18f1005bf6eb70f3e5a29a56906a820bc85e9f6186fbff4da05a38f80056f9f976dcb4abcfd71e1af19c548109a8fd7abca44c98145b0452453364eec4d7c732edf2268db4a25fa85604018d33217ca5a2583699e90b4645a5c2abdc9a00c6bcfc7df5ac05cb973771a1a9866e5368f72b4852b6383048ac46b01c66db05c189e7fbb0c1693d05bfad16afadd5d4c5ad3e57cbdf057c6c37737700d81e20c34d7181b37facf973fda91aeb6012e48ae3d852a5b7322b3fb397aef1ce151428948571cf6b068d419a2aedd71e2241ee1c4ee5b71d28138b6e39185fa71073b03186c62407505edace2a39ce6a3413f060b591172464934e80f9dc841762f72ec21c630da24762f36f7ecddb117cc000998115e504ef65336a7813b09ddc8bb8d7cd79db9b353eb7f19b9403f049e0487c1da9f4a567d4c092a3331ab1a3d1fd259f742ceb3ded84713bc68a060844a53faf43d3f7483c934f4ee6b36e42ace2145f875f5ac9631411987131b3179b402d8826ed4399afe6451ef572fd68f03884bc4afa3cf533b12a8d645f772b12ee77542b98767a3a88eb28a9aab30f0fc6f662db97b5fe61e65e53b3a2ffbb01a6142b2d3bcb454e3ffafdf8d5a0953deecbd3bf36eed063f1557e75426800418e4f854f4138bae8855fa130f97841f9e11c5902fc9b13e17322cef1ce6a7ea7a71d50d24d5e00f8203bb63d907414964e212d1750607c4c553a26ac11672719845f5a45483dc9d592a6b76344dc1e535f0f767b86bec1aff00bd2e07340f060000",
    ],
    [
      "ETag",
      "9CET8qVMQ02TjrEI6DO05Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc595516fda3010c7dff32990f738d01a28944dea037474cb9492165275d384901b5f823b27ce6c870e557cf7d94e2879e914694879897df7bff34fb9937d2f4ea7837ed18ca04f1df44893df0588ddbb04d49dd92c40164c49bde43c9380ba261a144e4cf4eecf55b009e0e1877aef7ddb7cc7d71f1e06c1dde5651925a30da458c7bd684bdb310546a4b67f5abb53f9ad96e114cc891167459aadadd93dca6a975b79192ebcf997ba92726295f9bdef4fa6fe0c55d2befb36846085d7f6c8ff43d875e55430f4c41f171083802c82e35fe7823f41a43c5b5e89d39c414ff24244202b88492ce544f022c782f39e76f5dc41cf1d8ec71f872377d0bfe80f0ee18c4758519e998cfb257ae52bae305bf0675362e4f6cb2688d22e4b7ea8058a6b5da897484b5b934d097af5edbbff08f4e6e1e8bc165bed564e2db33135a642aab2f7cde855af4e8467b84dbabe2a94b5424e2023205a41d37c8d091120653b782ed738cf1bb2a741e09f8a8c332238252dd1b7b40d2a53db86d46b3f989cf05dd1ef7dd33bfd7912ce4e85954abff60db9a177335b86939bdb37e1fabb3a3ef3d39d02792bb89e2212ecec70cfcec7c38bd1193acca22b6e668d32a3488902ac3bc27a267fa54afb62cc24387be72f1a9a31b0ff070000",
    ],
    [
      "ETag",
      "yxCOhOeWYt+IJhXaF/W3OQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ltv` as __result FROM `profiles` WHERE `email` = ?",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1588956132723",
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
      "ef",
      "6f",
      "da",
      "30",
      "10fdce5f11655f0b04082154426d07e91689d2368476d33481ed5c5277214e6d075655fcef73127e845155fd96dcbd7bf7eef9ecb79aa6e97f6812e8e79a8e69f492017ffdf2ccb07e966740a228cf7cc51cb3913d1ead876bd135dbfd1feba7f07e302851b4a8166899c650172ce304c4f96cda8838cb52c419ab2bc27acbacb7bab6ddef5aad4ebbd7ee94b502e2704c933f39c39394a9386f36773a1a1163510c28a5a241d8721f6faedacd94b3672052348fdb365527d1fcb8f145cc0892942583d9b4149109e07358221ae7320ed501be3ca66f50b46c440abda20410212c4b642eada4212c096994f1825c31bda9a00a179af7bf95803e75c6ced0d716b15c2d3424b4f99c83c862a95d7bb737da42cd18d218c4427bfcee788eb628242eb4817651342cc802109226454b1fe1182a8d54766b93fbce09ed2972122491802d6cde332cd4b28d3e0e718f8476a78b430330b671af8b3ad8207d13cc0003aa32c8bc77598f12965881d12161607703039336981d6c1a41b765f5da018240c52d621a6059fa9661b39f877040124654a44cd0ad91fad073ae7c67ee5ecf278e33724687f1d79c9ea01f3d57817d6f3619aaaaaa552152ee8eca618f8d3a72402a4fabc37de4e2c90029a74c892a0ed89df88e7735f4dd878a0cb56d638810799dbee4fb16a258c0a11a71b40409fc8605f959ea77b753d7776f2757e30343b140773ba450b05f7bb18799aa6cfe6b7abc19e5a195517dea7beee49b5e496ecedea5794071f60ecf6a1bd6e1595d0d468571097f0b9b8acb51e5adfdfff5bb56e9a7abfbba95aadfcf1cef675e5be4f28c07217048c841c127f63b2f",
      "2cd39f788e147cf738e415ea7dd8f7175285d55523e2d0bdd8d5fce2d16521794768da7dabbd2354855c9e20fa46dfdc214e1e88bc172c21913b2fca87a23472732429abc829ca72b8dafcc9f64037b54ded1f0b3d7627e5050000",
    ],
    [
      "ETag",
      "BbrboD8LDwCws5429XwhfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1588956132723"
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
      "4d",
      "51",
      "5d",
      "6f8230147de75790eed1b10c985397f8a08bcb96b0e117c992c5988a5786032eb645430cff7d6d01f5a5ed39e7dede9ed3b3619ae42fceb6e4c5249b383a14c0cabb08c44c1de6c08b4470b9e5987120f7aa1a048d54f5e448fdc5e97b56fa9f9de9d1770f4be804d1705857f1f017522aebce1249bc8b21d972897f34361b5e6b194d41ddb85e333d50dfd068a2ccb5f6e6f9a3e5ad90e2560b5f81e78dc6de843452a5f7955c2bfd903d6ee6b003065908d7e7e40cf7108a0fed9bd3344fc0e258b01078334435d672c4b0c82943b42465d94f96ddedf707dd67db757a8edb962718521163a63a8205b9cc17286832c793f24eec3a1c56c33a8a3608b2bb49e7361f291d55b3d31d3cd80eb9f055735a192d5a5d278e4b017cca501ae2a06d3c92368f57547e858a43b002341d52f961efb16838a332fe01e4108e581b020000",
    ],
    [
      "ETag",
      "EvaOSwXQyOM+PvO3qTe+Ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "72",
      "43",
      "40",
      "0000d07fd9e7249361a3f4cd1a0411968ee0c560572bead25d5a2bd37f6fa6e70fce0394754d392fe6b1a3037805a294b4437df0461589f77aad744bb26f0c47e39b8af8769dc7558bdc5c3135932143c9a993f7c4382b62fbd49b3b09963c22e9165cf4e414cb2ff8a70fd5c609b27894af3373e4eae6afa661317e17d3d0f6b8ab3e6c1845ee5a41b1f03d493a0eb3543d1fe7c18f35cb436185d4cd3f2e0d8ab14f5a4c90aaf3948be68bb7b08170e9a5027f9bfb8da4999d6caee3e1f032b3d5d36bb003749d5a4679d13e67f249d376e0bf59cc62a2cf2ba225a30cfcfe012ff8984d05010000",
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
      "Fri, 08 May 2020 16:42:29 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-15-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "40ec716d92924f2a456b94d0952d212b9056d33421db18e61630c5a65b56e5bfcf3609214b5555ca43b8f79e73cf3dbef64b4bd3f4479285faa5a643123f95b8d87c78a0503f9319cc412c3334dcb81bc6bd2f33fbe35f07f6fe7cbdb5c27832a9aa88423390e6093e67b42c1066976baf1d17b4cc4141e9b9203cbf1888df786c0e86173d6364f42a2cc349b420d9a364f8c579ce2e3b9dbd8e764c699c609013d64634ade39d67a39317f40123ce3ac76d3ba213ebbcddf8534211e0846693b5578928192e029c02924819077408af8ee9db04a4ed58543f13840142b4ccb89456d1209a45242e0b452e985e44508495e6fab311d03d6b61cd7c0dd1a44cb32003293ed342c041c03739d6aeddd552b39deb95bb9cfaf6ca09bcd98db59cb667abc57ae978dafd8de55a1a0730c10aab4db42bf5e5880fa548750b31e324539a7c996d2811d99d8ff62b4758534812a18ae15d5930ea0ec1c5b86bc2088e5034ee0d60d4c5108ee168007ab08bcc3eee87108326835256e14146b321c2c62034cd20044618f4cd6e18c0214001181b21364c1342d8d777e86d3d0b2a30e0784e584e19d9b9accf5c6bea5b817d1d389635b7e687d17f17e4a4fadeb545b1efae9d9940356d8a4099f07935e8b14947d373e16773b0b71c3c19202f0815a2d4e9db8e6fb9d3996fdf356488555ce018a08df72497310209c3073428c4d1725c2c6928cf5177a6cbe6bc6ab1beed8b98a8f851eb3c8c230ae5baa8594ed6e5b88f2ff6f0",
      "c88aea28aba8eef9aeed7cd61bc9edeb347720295fe179de85a58511490e7e29aad6ffff7eb61a2d7471b377eaf4dbb5e57e97589593191747b8c0193a347dc7a24b60957ec7c325caf7cf88448897a4eecfb8088b3b87d8a1bb5a5c79034965fc9eb06f0ec7c69e50000b7e5a3132eb8a93a744f6c229cef8de8bea49a98cdc1e492a1b72144c968b6be0ecce70dbdab6fe0116f7ff240f060000",
    ],
    [
      "ETag",
      "odyRystSJCI+zNb3xKQEdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1588956132723"
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
      "4d",
      "8bdb301086effe15413d6e0271b2f9d8853d38addb069c8f26cea984a0b5c6aeb6b2e54a7296b0e4bf57929d8d2f5b0c0d188ca59977460f1ee19937a7d341bf6946d063073dd3e44f01e2f42901f5c36c36200ba6a45e729e49405d130d0a27267aea46c3bbe36425176b6f79e7f77d6f99ef92a7a7324a46bf20c53aee4d5bda8e293022b5fdd3da9dca6fb50ca7604e8c382bd2ec60cdee5556a7dccadb70335f7eab2b29275659ee82c09b053eaaa473f76308c10a1fec91ff87b0ebdea960e8853f6f2006015904d7afce057f8148cd6d79254e73063dc90b1181ac2026b19413c18b1c0bce7bdad57347fa994e1f46637738980c869770c623ac28cf4cc66e8bdef98a2bcc36fcd59418b983f21244699725bfd402c5b55ba897484b47934d097af79dbbff089c2fc3f17d2db6daed9d5a66636a4c8554e5dd37a3577775233cc36dd2f5af42592be4043202a21534cd0f98100152b683e7f280f3bc217bb65a05b722e38c084e494bf4236d83cad4b121f56bb0f26ed85774bf6ffa4f7ff142ff5658a974b76fc80de70b7f1b7a8bf58770fdde5fdbfceca440ae05d75344829d1d6eff7e3a9a8cfbe8328b3e73336b9419454a1460dd11d633f93b55da176326c1393b7f017681fe0bff070000",
    ],
    [
      "ETag",
      "81c3+v7OsMPAN+E0EANpUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ios_app` as __result FROM `profiles` WHERE `email` = ?",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1588956132723",
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
      "61",
      "4f",
      "e2",
      "40",
      "10",
      "fd",
      "ceaf687a5f05da42299a102550cf26885a8ac65c2eb05da675b574ebeed63b63f8efb7db522887317e6b67debcf76676763f1a9aa6bf9074a59f697a48e2d71cd8fb8f671aea272a0302c52a33862b6ea699e9394fc6e31d0f78c8d3e1dd6050a24851cdd13a4ba0c969ce30f0b3f9ac15339a678851da94844db3d734ed7effd4ee991dcbb13a652d87249a90f445313c0991f1b376bbf2d18a298d134019e12d4cd7bb78fbcd6a678c3e0316bc7d28db964abcfdb5f07942311284a683f9ac349173600b582392281bfbea55787148df2268dd8a25fa8d604018d33c15ca5a4983691a91386705b964fa9041192e3cef7e6b017de64edc51a02d09e50b94654b0d716db160c0f3446897fecdb5b6947d462401bed41eae5cdfd59685cda536d0ce0bd18270055c90b4900d5098404d4c66b7a3f23e39a51d8522410271d8c2168ed14366df380da3d0c151bf6387910161d80f1d1b7542039f76a1bb0a01d51984d22eeb514a53884cdb8990b5424ec741dd6ed70eb11d392b23ec45a66959960351179b1d7dcbb0d9f58319200163c233cac97698fac8778781bbf02e1753d71dbbe37dfb7f1839423ff89e0407fe7c3a9255f55145484e775c367b38a883090839d37a735f4df1a8818c112a4d1587ec4d03d71f8e02efbe66436edc046284df67af6ae7229470d8572386d620805dd3953a4bfdf666e605decd7438d933144b745b21b984fdda99ddf754670bdeb3c3cd280fad8ceab3c0f7a63ff55a7273f229cd3d4af24f78deb6611d9ee5f5a0841b17f0b718537141eabc8dff",
      "bf7e376a7ababcb35babfadddcf51f556d9153191f226090e2bd836fecb72a2cd3df789224bc7a2054857c2376fa5cc8b0bc6a98efd58b5d55178fac0bcb15a16d1a4eb72294854c1c23ac8e5d218e1e09a5056b4845358bf2b12807b939b094d7ec14650a2e377fba3dd04d63d3f80744eef381e9050000",
    ],
    [
      "ETag",
      "DeHs1np1I7h0YQsTsbsnAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1588956132723"
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
      "4d",
      "51",
      "5d",
      "6f",
      "8230147de75790ee752443e3c796f8a0c6649b449dc62dcb624cc12bc30117dacb8c31fc77db02ea0bed39e77ef41cce966db3bf28ddb1179bf9519817204e0f21d087be2c411631497564984a608fba1a8887bafafd3bf7b99f4f3fa9b7e87f41ab335e4da6c7c1a0aa92c12f245cd59d1552781f41bc930aff186cd7bcd1529e809eb8dd0ab3d04ca8353a65461bcde7de6438bb9712dc1969b6f6bce1c89bb05a2acdb951dfd23ce580fe12f620200de0f6a04ce001027a33ce254fb2181c89850840d64b74632587028b8c0b4447518edb75dc4ebfffdce9baed56afd56eca630c384598ea8ef58a5df713128f9778d4ee995bc5232a5885d144c1f677f9dc27a4a47fdd4ca2007665cbfab6b11ab4b9ed1b9d08e442a0b223c19878624d1a63d46e4987a1271a3ae0ea87bd46547356695d0076d97afe1b020000",
    ],
    [
      "ETag",
      "JYqbabqKVt7P8We25CSEKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfdb7243400000d07fd9e7c8289554dfd654441409b52e2f3bc816e3b26add56a6ffde4ccf1f9c0748f39c3086475a930ebc039e4aea3edf5bf44de30509e670ccea63e2a211d2d35a8892db406dde9c780b22f9762fdca46bb2301021f484a9be4bcdab8c90a75eb8d6c7d47574eceb92954f74d96eee927c49d7b8f3a7c6f84863b38a27684429facc323d725c0b69d067c3c0f06a5eca36f55f54a75202c8cde66a6be3dc72895a7300adacfb16f05099ebb15b4bc4bc50e9ed835816ed64fc44c2615a4ef47cf66c0a7680ac7d351086abe74c56547507fe9b78e43d795e35920e6400bf7fcb69205305010000",
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
      "Fri, 08 May 2020 16:42:31 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-17-1588956132723",
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
      "5d6f9b30147dcfaf40ecb5f920090da914ad514257b484ac84a49aa609d9c630b704136c3a5555fefb6c131258aaaa6f70ef39e79e7b7dedb796a6e9cf240df51b4d8724de17387ffdf244a17e253398835866f6a1f3dd98237b4b99b32d1eed275a38d6c36452a2886233b0cb12dc66b4c81166379b7527ce6991819cd2b6106c1ba3b6615ad6d8bc3606fd517f5072194ea205499fa5c21fce3376d3ed563e3a31a5718241465807d1dd29de7de977b39c3e61c459b759b62b2ab1eec785bf2614014e683ad9ac4b1305c37980778024d2c6991dc2dba67c87805d2716e81782304088162997d64a1944d388c445aec485d29b088ab0f27cfaad05f4b5bdb067be866852ecd220053b7ca585808380bf6658bbf3564bcd71ef56de72ea3b2b3758cfeeede5b4335b2d364b77ad3ddedb9ead710013acb8da44bb557faef8518e54b510334e52e5c997d99a13913dced179e7084f125244b862f8080b46bd6b6058bd318ce00845d6c084510f4368c1910906b087c6433c0c21067505e5ace48394a6603488d0109801308d7e301c9be3c032af61600981104238e8e1503fb20fa75e508e01c773c232cac871cafaccb3a7be1d3877816bdb737b7e6efd6f4e2ed08f9e23c0beb7716782551f53048a84cfcb469b436a74cfc53ceb8d7d34c18b06b29c50614a9dbee3fab6379df9ceb66643ace202c700bdaef772192390307c66835c1c2dc7f99286f21c7577baacf7ab16eb47056202f1ebe4f3dc8e00ca7551bd5cac4bb38e2ff6b0318af228cba8bef63dc7fda6d79287f765b62029ded1793986e50823929ce7a5a45aff7ffd6ed54ae8e2661fdde90f1bdbfb29b92a27331e8e708e53742efa894597c432fd89874bc0ab674432c44b72aacfb8088b3b87d8b9ba5a5c79034939f84ad03446",
      "9651090a62ce2f11d6d8aa10174f89ac857738e5d52cca27a51ce4a161a9a8d951340917d7c03d9ee1a17568fd039e7a2b310f060000",
    ],
    [
      "ETag",
      "qdIK1DcEVosIVuWEjouI8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1588956132723"
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
      "c7dff35720ef712011caaf4dea037474434ba140ba4d9a1072e34be6ceb133db616215fffb6c2794bc748a34a4bcc4befbdef9a3dcc9be67afd5423f2927e87d0b3dd2e4570ef2f02601bdb29b35a89c6965964c7005a86da341e3c446efbfe6e2668af9eaede72f8b3f22b9d5fd6fddd5f57511a5a21f906213f76c2c63c7141851c6feeeec56e9771ac729d81323c1f294ef9cd93ecbfa90397913aee78b8f552515c4298b8720984c83192aa563fb7508c11aefdc91ff8770ebd62b61e8493cae2106093c82f35f67523c41a4e7aebc0aa719838e12b98c4095109b58c889147986a5101de3eaf8a38e3f188fdf0d86fe556fd4bb3a853311614d05b7190f1bf4c2d74263b616bf6d8991df2b9a200bbb28f9a91628ae74a15a2223ed6d3625e8c5776cff2370be0887fd4a6cb9db7a95ccdad4984aa58bded7a397bdba109ee126e9e6aa50d60839014e403682a6d90e132241a966f042ed7096d5644f97cbe05264cc8914943444dfd326a84cef6b526f83e5e482ef8a79efebdee90f93707629acd2e6b5afc90de777b34d38b9bb7f156ebedbf3333f3d6850f7529829a2c0cd0ebfdb1f0f46c32e3acda21b61678db6a348cb1c9c3bc266267fa2daf862cc147847ef2f28c2902aff070000",
    ],
    [
      "ETag",
      "vWuoCBanQ+KVNzogFt4X0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `date` as __result FROM `profiles` WHERE `email` = ?",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1588956132723",
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
      "d9",
      "6e",
      "a3",
      "30147dcf5720e6719a85aca452d425a1334869da12d26a341a25b6b950b70413dbb45355f9f7b1210b995455dfe02ee79c7b7cedf78a6198cf3409cc53c3c4345a65c0dfbe3d316c9ee80c4814e9ccd5eaf19564a3d72efd9e0c2f5b969c06f6e5dd605054d1bc5ba0651a4355b08c1310a7b3692de22c4b1167acaa00ab965db53ab6ddef74ad56b3d76c15bd02e2704c93678df028652a4eebf5ad8e5ac45814034aa9a811b6dcc5eb2fcd7acad9131029ea87b475c524ea9f139fc58c20495932984d0b1199003e8725a2b196b1ef0ef0f9217c8da2652d52d52f940022846589d4d20a18c292904619cfc115d2bb0aaa70ae79f75b0a985367ec0c7d631120090b0309633ee720b2581a57decdb5b15043863406b1301e7e3a9e632c728d0b63609ce58c395a0042d224e7f4118ea1c4a4b21b9fdc0f8e6807a1419044023665f35ea38b2cbbd1c721ee91d06e7570d8008c6ddceba0166e907e1bda01065446909abbe847094b02842dab1742004d087aedbe6d6308fbed6e0737710028e83700ba81d5303708ebdd3c8483b2634445ca04dd38690e3de7c277e6eed57ce2382367b41fff95d3a3ea07cf55c5be379b0c5557d9aa10297747c5b087461d382095a7e5e13e73f168809453a644e527ec4e7cc7bb18faee7d49865ab7314488bc4d577ae142140bd877238e9620815fb3409fa5797b33757df7667231de23e41b74bbad14aaecf74eec7ea6329aff961e6e46716845d49cfa9e3bf9619692eb930f61ee519c7d80f3b2099bf0a4ee06a3a2710e7f739bf2db51c6adfcfff5a752e233d585dd4835ef668ef74bf7e6399df120040e09d92bf8c27eebc622fd85f748956f5f07dda1",
      "1e881dbf902aacae1a117bf67c57f5c5a3cb5cf216b0d3ecb63b5b40d5c8e57145afbba33c7a2134172c21915b2f8a97a230727d20292bc9c9db74b9dafcc9e640d79575e51f5f32b610e6050000",
    ],
    [
      "ETag",
      "FqhwcuDw6i+nCB31tSd8BQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1588956132723"
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
      "4d",
      "51",
      "d1",
      "4ec230147ddf572cf5d5c56d0445131e40099a203a94f8600829e53206dbee6cef3484ecdf6dbb0d78697bceb9b7b7e7f4e8b82edb27f99a3db86c95c43f25c8c3550c1499c30c549992d25b81b902766daa81786caaa7f1fe269d6e4b1af3afb7d13816af10ada27ebfae52620b19d775478d34de2490ae95c6df16bb0d6fb59c67606e5c2ea51d686f68343a14567b1a7c8e2ef90cd7969fce2793c17032628d54d97da1d7cabe6387ab196c40422ee0fc9a42e20e04bd58db8a67450a9ec2520a50cd10d358cbb1c4b2e012d1d39417f4bca0dbebdd776f834e781776daf21405a70473d331ff60a7f984c4d319fe19eb2ca8b39135ac936873609b8b702ee3d1d2af690efdd0f7fcd0f30376d2aae6b4705ab4384f1d1e08d4bb446d4a81b5e2b3369347349ec94442b2044b0baeffec39a186732ae71f5451f3571e020000",
    ],
    [
      "ETag",
      "Ngk/lNhutGaWOEGgcMeQbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d07fc9d93aac95f4c62a0a6a01c3e28561090cc8120345c0e9bfd7e9fb83f7024996e16188c7fe8e3bf005968483db6c6bf592b29485f1334ab80cd58471ca53d8428bc8ab77d81d0924a67fbe46ad7570474ec91bf6e69e1b24f8deaa290bf3086c6a7c68fbd47ae67c62e7f749ac5c9643bb190781b3a2a32bf0fc1542580e9f9a1f798da58f4ef8ac534472816a553f6ba98eea5a846d492f19879ce4bbb8409915ccd99c8c492a947dd03f6894b27217d4a71985b6cd347aa5faa5126b04de3a55021b806752513cc4d57bc68b106ec07f331e1782df5705271453f0fb071781890905010000",
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
      "Fri, 08 May 2020 16:42:33 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-19-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54db6ea330107dcf5720f6b54908940295a22d4ae816a9215d421aad562b648ca16e0966b1e94555fe7d6d930bd95455df60e69c3367c663bff714457dc265aa5e2a6a82f3bf0daadfbe3d92443d1319c4402e32a6fbe8cf56af4d8456af0f214add3b337b71c7e31685259b827555a03e254d0d11bd5c2e06794d9a0ad484f4b9607fe4f447a66d3be6c5c8d02ddd68b91415d92d2e9f84c2036315bd1c0e773e06392179814085e90092f53e3e7cd687554d1e116474785c76c82bd1e1e785bf1704028649395e2e5a130d45758cd60017c2c6819d2657c7f2030cd6839ca39f31440042d2944c586b652029339c37b514e74aef3cc8c3d2f3feb7135017dead378914488a665dc62558a33325050cc4ecad42ca75389f297e703d0f676ee4cf837831b9f166ee6032bf5dce8285b2baf1424f61202990e42a63e54afe05fc473a92d55244192ea5a748643b4e78763b47ff8323dc4b0811ee8aa22d2cb6b40b30b23527c9120b66b66126998692c44e2c131889069d73749e26087415a4b3960f4a522606b4525d3362dbd2b5f85cd7b238418613a7c0b12cced71c5b57b7eccdbe175823c0d014d38a50bc9db23a093d37f262ff3a0e3c6fea4d0fadbfd4f804bd0a7d0e8ec26530e1acee9832d0146cda367a3ca4a3ee199f67b7b1cf2678d2405563c24dc9d3f783c80bdd49e4df776cf055bc4539806f8bbf62193350507460839a1f2d43f58ca4e21cd5c09d75fb958b75b703518ef8bdf779688703c5bac85e4ed6e5b84ec4f7f06814ed51b6517511857ef043ed24371fcbdc83a2f940e7791b1623cc7071989794eafdfff5a7d729a1f29bbd75a7fe5c7ae12fc19539910951866a54c243d12f2cba20b6e92f3c5c1cbe7b460483bf24fbfa94f130bf73901eaacbc5153710b783df099a866eda3b414eacd929c2702e768893a744d4426b54b2dd2cda27a51de4e6c852d3b1236902ceaf41b03dc34d6fd3fb070cc5f0aa0f060000",
    ],
    [
      "ETag",
      "5AjIMWxuTeWxhRedAP5fwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1588956132723"
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
      "6f",
      "da3010c7dff32990f70a5a430ba593fa90b474450ad042fab2092137bea4664e9cd90e5354f1dd673ba1e4a553a421e525f6ddffce3fe54ef6bd3bbd1efa453382bef5d02b4d7e1720ca2f09a867b359812c98927ac9792601f54d34289c98e89d2a7fd062c822ffeb7359f88fca73e763eff6b68a92d11ba458c7bd6b4bdb310546a4b67f5abb57fbad96e114cc891167459a6dadd93fc9aaccadbc0e57b3c5f7a692726295c54b10787e3045b574e87f0e2158e1ad3df2ff1076dd38350cedf8eb0a6210904570faeb5cf01d446a66cb2b719a3318485e8808640d3189959c085ee458703ed0ae817b33704793c9cd68ec5e0eaf8797c770c623ac28cf4cc6cb1a7df0155798adf81f5362e40eab2688caae4a7eac058a1b5d6896484b7b934d09faf01dfaff089c2dc2f15523b6de6d9c46666b6a4c855455efdbd1eb5e9d09cf7097747d5528eb849c4046407482a6f916132240ca6ef05c6e719eb764fbcb65702e32ce88e0947444dfd32ea84ced5b521f82a577c67745bff76deff4bd174ecf85954abff62db9e16c3e5d87defce953b8fe6e4ecfbc5f2a904f82eb2922c1ce0ef7e26a32ba1e5fa0e32cbae366d628338a9428c0ba23ac67f22355da176326c139387f01448eb385ff070000",
    ],
    [
      "ETag",
      "jtyZiu2lcB/QyuBHtA1M6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `stamp` as __result FROM `profiles` WHERE `email` = ?",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1588956132723",
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
      "0002ff8d545b6f9b30187dcfaf40ec716d422e04a814b5594257a434ed0869354d5362cc07754b30b54db7aaca7f9f0db990a5aafa06dfe59cf3ddfcd6d034fd8964917ea6e921499e0b60af5f1e69a89f280f089428cfd52d44e6dd138b867d575c7eeb0ef1c3d76438185451a4cce66895a770ca69c130f0b3f9ac99305ae488517a2a014f3bc669dbb46dc7ecb7bb1dabd3ad7239a4f184644f0ae141889c9fb55a5b1dcd84d224059413dec474b5b3b75e3aad9cd147c082b70e695b9289b73e263e4f294682d06c309f55220a0e6c012b445225639f1d851787f04d8256cd4446bf100c08635a644249ab6030cd629214ac0497486fd228cda5e6dd6fcda0cfdc893b0ab425179265a921ae2d160c78910aedd2bfb9d696b2ca98a4c097dafd95ebbbdab214b9d406da794959c245c005c94ad2008529d4a8a477d328ef9d19ed2014081288c3266c61197dd4b60d278c430bc776d70c6303c2d00e2d137543033b3de84521a03a8250dc553eca6886db66dc771cb0dba6e9d8600182ae6963db30fba16d77636c3b562f321d7d83b0ded58319200163c273cac9a695fac8778781bbf02e1753d71dbbe37df97f18398abef73d191cf8f3e94866d55b1523d9dd7155ec61a30e3a20644febc57dd4c5a3027246a814558ed89b06ae3f1c05de5d4d86dcb7092408bfce9ed5c6c528e5b0cf460cad4000bba6919aa57e7b33f302ef663a9cec11ca15badd467219f66b27765f531d2d78cd0f37a31a5a65d56781ef4dbfeb35e7fae45d983b9416efe0bc6ccc3a3ccae3a0841b17f0b76c53791e75dcc6ff5fbf1b353e5d5eec46aafe63eefa3f556ee9531e1f626090e1bd824fecb74aacdc9f789064f8f6795019f285d8f1cb2b15449e1ae67bf67257d5e1915529790b68f60cabb70594894c1c47b42d731b71f444282e584126b6bda89e8aaa91eb0349454d4e99a6c2e5e64f37035d37d68d7f22b723cae7050000",
    ],
    [
      "ETag",
      "HPed5VkrdA6EtFB3Ach+gA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1588956132723"
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
      "02ff4d51d16e8230147de72b48f73a16d0b1c9121f7431d1a89b43dd1e16632a5c190eb8d8961962f8f7b505d497b6e79e737b7b4ecf866992df380bc98b497671742c80957711880f75f0811789e072cb31e340ee951a048d94fa38eeae06e0e6f0f91e2ebea2d2cff2e9f4d4efd72a1efc404aa5ee2c91c4fb1892904bfcadb1d9d43597d114d48ddb2dd303f50d0d27ca5c73abc97cb45c0de68b5b32c550936febd96c309c8d4843557adfc8b5d28f39e0ce873d30c802b83e29677880404cb4774ed33c018b63c102e0cd10d558d311c322a70cd19225ab635b8edbeb79ee93d3ed3c77baad3cc1808a1833d5b15e92cb7c8182263e9e947fe2d401b11ad671b46190fd4d42b71949ea4f373fb83ddb753dc77b1c79e44257cd6963b468731d3c2c05f00543e98b8376639336965754b6854a45b0027439a0f2efc6b1686a4665fc03917f767b26020000",
    ],
    [
      "ETag",
      "qH3TAe5peVOdPWgyRnpKKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb642d4e21b49aeef82b04418ac074c3408cc02001095f3bbd7b9dbe1bbc1f901142394f87b6a60c7c823593d0966c9d76afae05e18e715a64164981508fd6e521c25e9efb0463d367437585f15748b174f234c4a2fb181a775ba816a9f14c64857cb2c5f39b765e15bdb6c4ef3474e605e53041cc150f5eb7c67b85a87ef988af58d126ae4ba4608e9b45837b8479238fe99a7c94b5e1476e82f5c092fb7c2714ac844f5a84e620625fe2ed820eb67b9b8a9d088f0e41b84a82db258375d12433d800ba74554f795abd66f01da10df86fa6c3dad1d755a5594f7bf0fb07fcc8f51b05010000",
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
      "Fri, 08 May 2020 16:42:34 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-21-1588956132723",
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
      "5d",
      "6f",
      "a3",
      "30107ccfaf40dc6b1342481a5229ba4609bd2225e44a48abdee9846c63a85b822936ed5555fefbd9261f70a9aabec1eeccecec7aedf796a6e94f248bf40b4d8724792e71f1f6ed9142fd4c66300789ccb0c7bb18dc43fe0bdc94b3fbc1c2407fd7d6eb785ca1886233b0c953dc66b42c106617eb55272968998382d2b6106cf7ccb639b0edd1e0dcb47ac39e5571194ee339c99ea4c203e739bb308cbd8f4e426992629013d6417473881b2f3d232fe823469c19cdb286a8c48ccf0b7f4f29029cd06cbc5e55264a868b106f0049a58d233b82974df90e019b4e22d02f046180102d332ead553288663149ca42890ba577111461e5f9f05b0be82b67ee4c030dd1b4dc64610636f84c8b0007217fcbb176e52f179aeb5d2dfdc52470975eb89a5e3b8b4967ba9caf17de4abbbb767c47e300a65871b5b176a9fe3cf1a31ca96a11669c64ca5320b3352722bb9ba3fbc1111e24a48870c5f00e160ebbe7c0b4bb2318c3218a6d6b00e32e86d086c301b060178dfab81f410cea0aca59c50719cdd010406b609f87961d5b613f427608477d1846b669d9fd18dba689f41d7b7be8051518703c232ca78ceca6ac4f7d671238a17b157a8e337366c7d65f0b7282bef35d010efcb53715acfa986250a67c5635da1c52a37b2ee6596fecb3099e349017840a53eaf45d2f70fcc934706f6b36c42ace7102d0dbea592e630c52868f6c5088a3e5b858d0489ea3ee4d16f57ed562fddc839840fc3ef83cb62380725d542f27ebd2ac13883d6c8ca23aca2aaaaf02dff57ee8b5e4f663995b90961fe8bcecc27a2ea6f52026cc1a5aadffbffeb46a357471b577f6f49bb5e3df4baecac98c8f",
      "635ce00c1dab7e61d325b14a7fe1e512f0fd3b2219e22939d4675c84c5a543ec585d6daebc82a49afc5e70d01f9abdbda02016fc14610fbb7bc4c95b226be10dcef87e16d59b520d72dbb054d6ec289a848b7be0ed0e71dbdab6fe016f1bf54f10060000",
    ],
    [
      "ETag",
      "sjWfaYbtZaQuDY5M/cxU3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1588956132723"
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "af20f51512363e44131e86829220ea18be1842baed6e56b775b69d060dffddb61bb017cc12497c597bef39b727f7b667df46a381de481aa0cb06f248f49e03db9c45201ed5c6019ec782cb25a32907d4546c1038526cec794f63367226914526175fe62769070b7b382c58dc7f81044bdeb78c641c1288032ee3671d37cabcc6529c803ad1a7719ea46b1d360fb0d8641a5eb8ce747e5345121a6864be9ccdecd16c8c4a68db3c2e126081d7fac8bf49e875659462e8957a0e84c020f5e1d075c6e82bf862aac7cb7192c5d0e234673ef05244151670c4689e6146694ba65a96d9327b83c145af6f76ac73abb3a3c7d4c782d054552c1768af2fa8c0b1433fd58851bfb8035684c5c477a34061e512aa1392d0872a2601dae7b6cd5f88d3b9dbef56b8e56e65542a6babca49852486f53fa9cb2b79c1f285d7d32e9fc989c47142f354d4949ecceeed13362edd50b7e96bdb1d9f4a960be9859abaeef46ebc70edbb87a3e2f2bb3a9860b411c01f18951ee3a09d65b6bb83de79bf8d764ebda2ca89421955b01c74dac7f28f754b84cc8538e6606c8d1f9ab4d3661d050000",
    ],
    [
      "ETag",
      "abbVErBRFg2iF9z1wi0dSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT AVG(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1588956132723",
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
      "6b",
      "6f",
      "9b3014fd9e5f81d8974d6a421e9047a5a88b12da3225694b48da699a12db18ea1630b54da6aeca7f9f0d7990a5aafa0dee3df79c73afaffd56d134fd9924be7eaee990842f1966af5f9e28d4cf54060b10aa4c9892476381d6feddc3f5c3e4ef8feb4b9bc2bb7ebf4091bc9a83388d7095d38c21cccfe7b35ac868960246695512569bcd6ac3ea767b56bbd16a769aada296e3281893e459313c0a91f273c3d8f9a8859486110629e13544e37ddc58378d94d1278c04378e650da9c48d8f852f228a802034e9cf6785898c63b6c4312051deecbeda87df8fe96b04c4b550a2d704618010cd12a1ac1534882601093396934ba6371994e1dcf3feb714d067f6d81e7ada6071f575056245b6faa601ae2d970cf32c12daa57b33d156a9d47e041cf395767f6dbbb68c301a90082f89bfd2fada452e9f53fb980b92e4063c00235c9295d9edd09c77ce6b4fa14880906a5bd8b2536f8346b7de8301eca0a0dbb26050c7107661c7022d58473d139b3ec4a0cc209476510f129a00d0333b6dcb443ddf0f7a6d6c351b8119b47cd8eab6316c77603de8043eb0f42dc366df0f6218083c223ca59c6cc7aa0f5d7be0d94be77239b5ed913d3ab4ff879113f4bdeb48b0e7cea74359551e5500e48c4745b3c7833a9a8090332d37f7d1144f1a4819a1d2547edcced4b3ddc1d07316251b72f7c63804e875f6a2b62f0011c7876ac0408c056613eaabb3d46f6f668ee7dc4c07e30343be4eb73b2497b05f7bb3879eca6cde6b7abc19c5a1155165b36deaa5dce6ec5d960588b27768d6dbb0de38e2a8fcfff5bb52e2d6e545ddbad2efe6b6fb53d5e63995717180194ed041ed13abac0a8bf427de2109dfbd0aaa423e0c7b7d2e6458de2ac40fea",
      "f95aaa3b46e2a2d52da16575ebcd1da12c64e214d133cd1de2e465505a38c689d8cda278218a416e8e2c65253b799982cb259f3ad3abdc7c6553f90742b894cdde050000",
    ],
    [
      "ETag",
      "gpih/VcvdQXHXMzJHFEobQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1588956132723"
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
      "ff4d51d14ec230147ddf572cf511a76e0b02263c80c1685c1050628c21a48cbbd9b9edceb6d32c64ff6edb6dc04bdb73cebdbd3da707cbb6c937cbf7e4ce263b16ff94c0ab8b18e4521f5620ca540ab515980b2097ba1a248d75f5e87a91b1f7c93c297acfc170fac178d29b2dc7e3a64a845f905155775048e18841ba170a7f1a6cb7bcd1729a81be71bbe566a0b9a1d5645518ed217899bc9d0b19ee8d305f07c1641acc482bd566dfa8b5360f4970b7820838e4219c9e53704c20944fc6b7a059918223b0e4218876886e6ce4986359508ee828caf13cc7ed0f87a3feadeb7b03cfefca530ca96498eb8ef52b39ce972869bac23fed9db84d38bc814d145d10243a4be73c1f25fd9ae6ab814f8e6cdd9e36568736a779d34a825870547604181337a44be31eb55ba9c390bc044387547dd723932d67d5d63fc7b6c79719020000",
    ],
    [
      "ETag",
      "9/PmiWANjp+KL8BYirj+EQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcf4b7282300000d0bb64ad4e3068a0bb62eb80447e850add64680c1fa1e14f0d9ddebd4edf0dde0f4819e3c340c7a6e2023c01996ef50ddbd88d66c89c2371b095ab031dcc89aa61b856c6b7a68869f97c71916b74c434db5355ad8544c8f1fb44f72c12744620be4f39c626f45f449c1f5f8fcbe4a4b5baaf5c8b4d557c09da8e16eb79abf1084dd98e484562820f6ab284e94d11f08cd1279947c6a8cfcbcca6751c5e07f34367f0e60a595b2df99a1363f6169cd1a856a031edbdb3f79e8f34d2efd22c32198e10ac00bfb765cf075a3e6668a7eb2bf0dfa4a36cf9e36af0b4e73df8fd03db23c38605010000",
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
      "Fri, 08 May 2020 16:42:36 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-23-1588956132723",
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
      "ff8d54db6ea330107dcf5720f6b16dc8a581a452b48d12ba452264979056d56a858c19a85b822936ed4655fe7d6dc8053655d537989973e6ccf1d8ef2d45519f491aaa578a1a90f8a5807cf3ed8906eab9cc0047b1cc6cce3464079ee6d9f76ff619cd72db7bf8fb361e5755a44433b4ce12b860b4c831b0abd5b21de7b4c8504ee98520bce8f52fba83e17034d0bbfd9ed1eb575806496493f459323c729eb12b4ddbeb68c794c609a08cb036a6eb435c7bed69594e9f0073a635db6aa213d33e6ffc3da1187142d3f16a59892818e43eac1149a48c233a0cae9bf46d82d6ed5854bf120c08635aa45c4aab68304d23121779492e98de4550844bcd87df5a405d9ab639f5144c93629dfa295ac3b912228e7cbec940b9711773c5726e16ee7ce2590bc75f4e6fcdf9a43d5dd8abb9b354ee6f4dd754380a1228b1ca58b92eff1cf1532a2abb85c038494b4d9eccd69488ecce47eb83233c504812a18ac1aecc373a3aea0e3ba3200a0c1c0dfb8320ea40100c036380fa41078f2ee1320c00d5194a65151ea53485c8d0f50ee87ed41ff5fc4b23447e8031f886de0d054914e0d148dda1b78759700e88c38cb08c32b273599dbae6c4337debc6774c7366ce8ea3bfe5e4a4fadeb544b1e7ae9ca940d56d8a5091f0593568d3a4c6f45cf8591fec33074f06c8724285a8f2f42dc733ddc9d4b3ee6a32c42ada1023bc59bec8658c50c2e08846b9385a0ef99c86f21c556732afcf5b2ed6cf7d111315bf0f3a8fe38842b92ee52c27ebd2ece3893d6c58511d651555979e6b393fd45a72fb31cd1d4a8a0f785e776135136e3d0a875983abf5ffd79f56ad872aaef64e9efa6b65ba0f125be664c685087248f1b1eb17365d02abf4175e2e51be7f4724423c2587fe8c8bb0b874981dbb979b2baf20a99cdf130ef4416fb42714c09c9f56e8c6a1e5c95b227bc11a52bef7a27a532a23b70d49",
      "454d4e0993e5e21e38bb43dcb6b6ad7fa0364afa10060000",
    ],
    [
      "ETag",
      "y+/aLbT/TLWwL+oprLTYxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1588956132723"
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
      "545d6bc230147defaf90ec55617eebc0079d4e05adaed6c13644627b5bebdaa64bd20d11fffb92b46a5f1c85097b6972ef3937877b93d3835628a00f2fb4d143016d3cf73306babf73813fcb8d012cf639134b444206a828d9c0b12bd93bae0fdff4eda8fff26aefc3e6a8daf69c99dbe9242c666d21c082771091881d0f7c9b89f85dc58534afb01007204fb4881f07e15a85c50bccf7918217a631d687592420b642f4e564d2ed4d0628858ec5eb2236e678ad8efc9b845a575a2a86766463800314420b2e5d4794ecc0e263355e8683c887122331b580a522b230815d4ae20853424a2255aa544be57aabd5ae37cad54ab3523dd17d6261ee9150562c17e8accf09c7be41bee5885123b9039a84c9c44fa3404ee612b21312d0972cf66c74ce1d8bbf10c7bad9a865b8e96ea5652a73ab8a49399e0feb7f521757b2c5e285e7d34e9fc98dc47140e290e7947e9accba376c5cb8216fd3fdae39b8952ce3c20b3975cdf174b030bbd3f95571f15d5d4cd0db7360734a84c718286795ef6bad7ab3718f4e4e7d24d2895c1a95d31854dac2e28f35f2b8c839d867a01db51f68d90d761d050000",
    ],
    [
      "ETag",
      "jtNGZNhHDVYdyn7H39ifOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54db6ea330107dcf5720f665576a127285548aba5142bbacd2a425a455b55a25c60cd42dc1d436bda8cabfaf0db9904d55f50d66ce9c73663cf67b45d3f4479204faa9a6fb247aca80bd7d7ba0be7ea2322050a432ddfbf3d797c7976efcfb3e129d3b185ebc5ebf0efafd0245f26a8e56690c554e3386819fce67b588d12c458cd2aa24ac36dbd546c7b27a9d6ea3d5349bada296431c8e49f2a818ee8548f969bdbef5518b288d624029e1354c57bb78fdb9594f197d002c78fd50b62e9578fd73e1b3986224084dfaf3596122e3c016b042245636f6d581fff390be46d0aa1649f433c18030a6592294b58206d3242451c67272c9f42e83329c7bdefd9602facc1edb434f1b4ee713effb12ad14ddf28786b8b65830e0592cb473777aa92d53a97e8f38f0a576fbcb766d19613424312c48b0d4fada596e20270f800b92e4163ce4c7501296d9cdd89c0f4e6c47a14890906a1bd8c234baa861193d3ff44d1c5aad8e1f1ae0fb966f7650cb3770af0dedc0075466104abba847094d02f04d4066d8465db38b0d1c3424096e9a2ddc322c64584da31704924adf30ac77fd600648c088f09472b219ac3e74ed81672f9cf3c5c4b647f668dffe0b2347e85bd79160cf9d4f86b2aa3caa10c9198f8a660f0775300121675a6eeeb3291e35903242a5a9fcc09d8967bb83a1e7dc946cc8ed1b4384f0dbec49ed5f88620efb6ac4d00a04b04b1aa8b3d4afa633c773a693c178cf902fd4d516c925eccfceecbea7329bf7961e6e4671684554d9ecb6f5526e7df221cb0d8ab30f689e3761bd71c051f9ffeb6fa5c4adcbabba71a55fcf6df74ed5e639957121040609deab7d6195556191fec24b24e1db774155c8a761a7cf850ccb5b85f95e3d5f4b75c7c8aa687543d8315b1d634b280b993846b47bd61671f436282d584122b6b328de886290eb034b59c94e5ea6e072c927cee422375f5957fe0122e99138e0050000",
    ],
    [
      "ETag",
      "6hFxwkw6lJhgt5YeCGxQxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1588956132723"
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
      "4d",
      "51",
      "d1",
      "6e",
      "8230147de72b48f7b891294ea74b7c98866c1a631467b26431a6c285e1808b6d9932c3bfaf2da0beb43de7dcdbdb737a364c93fc44a94f5e4cb28bc2430eacb80b412cd5c1059ec782cb2dc394037950d52068a8ab8be5611c3d4e8be9fd6a91fc9d069fadc3f4381c5655dcfb8684cabab344120711c43e97f84b63b3e6b596d204d48ddb2dd303f50db5268a4c6b93f987f3e6b8b75282be96e6ebd9ec753473482d957adfc8b5d44fd9e3ce850018a41e5c1f9431dc832726da39a7491683c531671ef07a886aace490619e51866849cab29fac76b7df1f747bed8efd6c779af2183d2a224c55c77a452ef3050a1abb7854ee49bb8a8755b00aa389820437f9dc2624a55fd5dc2317aaac4f1ba3419bebb05121802f184a2f1cb4831669a218a3b22a541282e5a0698fcadf7a8f44cd19a5f10fb54e4c9618020000",
    ],
    [
      "ETag",
      "byQqCi/JyJ+SPmzx9X0qJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf497282401400d0bbf45a2dd28240764111115a0621c08a6ae087a9046d90c9cadd63e5dde0bd104d53e8bab86f6b68d0279a299637e9c6682565ce8124b243cd23e1bd357097f974b53023fd282953864da6349aa61fc07dc29e0937231887c8f683af6d91bb2e657b8ebb5c6dac0f7c2065c0c67ce14d1c26562a1a95d3fe3c77e95add558ba6e245fe30493e14df5d8c431a122f11ced5a1b7839270d4e41f5afcf045335a6aaf6e3362678e9e458d16ab8e3a0882928553702e1c76943dcb17ed943bd9370922825608a67bc9a08bcbf76c2bc8f20afd37e37ebec3fbaa0065c0d0ef1fc7cfd19405010000",
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
      "Fri, 08 May 2020 16:42:38 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-25-1588956132723",
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
      "6e",
      "9b",
      "40",
      "10",
      "7df75720fa1adf2fe0485663d9a445b2718b71a2b6aad0b20c6413cc1276719546fef7ee2ebe401d4579839973ce9c999dddd786a6e94f240df56b4d0f48fc5c40fef2e99106fa95cc0047b1cc6404f54def098f36e1cf01fe3b27deaad8c5934989228acdd0364ba0c968916360d79b752bce6991a19cd2a6106cf686cdeed034c7c351b7df337afd92cb208916247d920a0f9c67ecbadd3efa68c594c609a08cb016a6db53bcbdebb5b39c3e02e6ac5d2fdb169558fbfdc29f138a1127349d6cd6a5898241eec3169144da38b3c3e0a62edf2268db8a057a4730208c69917269ad94c1348d485ce44a5c28bd8aa0082bcfa7df4a405f5b0b6be6699826c536f553b4852b2d441cf9fc2503edd65d2d35dbb95db9cba967af1c7f3dfb6a2da7add96ab1593a6bedfeabe55a1a4741028aab4db41bf5e7881fe548550b8171922a4f9ecc569c88ec618ef61b4778929022c2158303cc373a23d4353be3200a0c1c99fd6110752008ccc018a27ed0c1e3010cc200505541392bf928a52942c17834307a3e3270d71fa011f6cd2e8cfc41673c8a8cee781c0e0cfdc0de9f7ac139200e73c232cac861cafaccb5a69ee5dbb7be6359736b7e6efd4f4e2ed0f7ae2dc09ebb716682551d53848a84cfcb46eb43aa75cfc53cab8dbd37c18b06b29c50614a9dbeed78963b9d79f65dc58658c505c408bfac9fe5324628617066a35c1c2d877c4943798eba335d56fb558bf5ed086202f1ebe4f3dc8e00ca7551bd5cac4bbd8e27f6b0368af228cba8bef65cdbf9a25792fbb765ee5052bca1b33b84f54c4ceb414c98d5b41aff7ffd6e546ae8e26a",
      "1fece9df3796fb4372554e665c882087149fab7e60d325b14c7fe0e512f0e33b2219e22939d5675c84c5a5c3ec5c5d6daebc82a49cfc51706876fb274141ccf925a2d7ef1d11176f89ac055b48f97116e59b520e725fb35454ec289a848b7be01c0e71dfd837fe01c51b477210060000",
    ],
    [
      "ETag",
      "pia38Tkc6UdZ4czDiTOuvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1588956132723"
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
      "514fc230107edfaf20f515124037c084075054928138c68b8690badd70baadb3ed20c4f0dfbd7603f6a25922892f6befbeeffae5aefdf665d46ae4234c7c725d23afe1fa3303bebb58837c521b07441649814bca1201a4aed820e95ab1db616a3aa90d91bfe93d598fc3b91f3fcfb6fd7ece12de1bc414795f18611c84481418bfe8b856e43596d018d4891e8bb23859e9b07e82e52ed5f0dc75c6d3fb3212335f23d3856d0f86f68814d0befeb3884f255de923ff26a1d7a551889177f6ea40001c120f4e5da79cbd8327c77abc82c669040dc132ee81284454610eaf39cb52ca196b60aad1361b2db3dbed9956ebb2dd695f1ee811f3a80c59a22a167372d4974cd2c8615b356262e577c0f3309ff8611424285d427942086d5471e893636e5fff85389ebad655895bec9646a9b2b22a4e2a082358fd933a5ec91bc5175e4dbb78266712a731cb125951face7e1c9cb1717443d5a66f07eee85cb242a2172aeabae3c968ee0e26b31fc5f1bb3c9960b89320669ca1c7046867b59a575db36335c9c1a9374c39512aa34a9e814e7b14ff580fa1c45c402301c6def80684531f181d050000",
    ],
    [
      "ETag",
      "2ip5RpLeldv9Q6OBSdmZPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT SUM(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1588956132723",
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
      "0002ff8d545d6f9b30147dcfaf40ec65d39a2f08042a455d95d0152d495b425a4dd3941863a85bc0d436a9a22aff7d36e4832c55d537b8f7dc73cebdbef65b4351d4679c85eab9a206387e29105d7f7922817a263388835866c67723fa3d335793b5750dcd5f63f8ddb8c5af834185c2653503699ea026230585889dcf67ad989222079490a6206c6a66b36b58966d985d5deb6b7a55cb50128d71f62c191e39cfd979bbbdf3d18a0989130472cc5a90a4fb787ba5b5734a9e10e4ac7d2cdb164aacfdb1f0454220e0986483f9ac325130441728053891360ed561f0e398be8541da8a057a852102109222e3d25a45034916e1b8a025b9607a1341112e3def7f6b0175e68c9da1afcce693af4b904ab2e537053065b1a088150957aebc9b89b2cc85f62360882d95876bc77344849208276881c3a532502e4af9923a448ce3ac34e0832041355991dd0ecd7de7bcf614920470a1b6852dfa1d1374ad8e1d44411f46966e045107058115f40da0071d68f7502f0c10a83370a95dd5838c64288a42c382fd1eb491d605511869dd106a7dc3d6a3483774bd8f34a887baba65d8ecfb8114018e4698e584e1ed58d5a1e75cfacec2bd5a4c1d67e48c0eedbf527c827ef05c01f6bdf97428aaeaa38a8098f1a86af678504713e062a6f5e63e9ae2490339c544982a8fdb9dfa8e7739f4ddfb9a0db17b631403b89ebdc8ed8b40c2d0a11a5090228ee88484f22cd5db9b99ebbb37d3cbf181a15ca7db1d9209d89fbdd9434f75367f9d1f6f4675685554da347b6a2db7397b97e51e24c53b34ab6d58ed1e7134fefffadba871abe2a26e5da97773c7fb2d6bcb9ccc7828421465f0a0f68955968555fa13ef9080ef5e0559211e86bd3ee3222c6e156407f5722de51dc369d5ea96d0b06cd3d8118a42ca4f1076c73677889397416aa114657c378bea85a806b939b254d4ec9465122e967cea4e7f96e61b9bc63f141a55b4de050000",
    ],
    [
      "ETag",
      "LQDr+n6vMy8Hc6KLc+5Piw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1588956132723"
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
      "ff4d51d14ec230147ddf572cf551a73002a2090f6034982c282889d11052cadd1c6ebbb3bd5381ecdf6dbb0d78697bceb9b7b7e774efb82efb8ab335bb75d92a8ebe0b90dbb308686a0e335045424a6f39660ad885a906e291a91e035ef9d3cd64f7174ed4db7bb2a37341c3c1a0aa52e21352aeebf61a691cc690ac95c61f16bb356fb58ca7606e5c2ea51d686fa835dae6567b089e86afa7428a6b2b4ce641301c05f7ac964abb2ff45ada876c703583102464028ecfc9256e40d0a3f5ad789a27e0292ca400550f318d951c492c722e113d4d797ecf6b77fbfd9b6eafddf1affd4e539ea0e01463663ae62fec309f907832c35fe39db5ab706405ab289a20587892ce693e5afab1cdadcb4e9f1de8b23e2d9c062d8e03475b02f52c51fb51605db45813c71d1abb64d2205980a505d7ff358ea9e69cd2f9079121de331a020000",
    ],
    [
      "ETag",
      "Heo/2QjNzxfNsXZlzt+ctA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfdb6e82300000d07fe9b398655ca47b1b5ad0123083e99417026d2194ab5cd69665ff3eb3f307e7076484b0694ae7be661d78032a7b855bb2f57bdb5125d18ae03d858938aaa49c6eae0165296a11decdd39a35777fdf7ebc38068649ab2f57b753f93057e7ced265c3a1494725772672b4d8336c4b1ea239f82eda804e8bc5171b4524c0e1c8a9dc8504175eacafdca599f411154c5be94533e163c18c5fbbcfa04193e82e0fa4bc661558e66d66f77c65f4cbc2b19dd7ec301f17fb1c29a7bd2dc39e277e744225d80026876a64535a3d67ba09e106fc37d3590dec79755836b211fcfe01981b1f5f05010000",
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
      "Fri, 08 May 2020 16:42:39 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-27-1588956132723",
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
      "0000000002ff8d54db6e9b40107df75720fad8c4778c1dc96a5c8c53241b271827aaaa0a2dcb4036c12c6197a469e47fef2ef8027514e50d66ce3973667676df1a8aa23e9224502f14d527d1530ed9eb9707eaab6732031c4532f3f895c1ccf81ed8dae4e63abd32fedeff898c97f1b8449182cdd0268de19cd13cc3c02ed6ab6694d13c4519a5e742f0bcab9f77b4e170a40d3abdaedeed955c06713827c9a354b8e73c6517add6de4733a2348a01a5843531dd1ce2ade76e2bcde80360ce5af5b22d5189b53e2efc2da618714293f17a559ac819641e6c1089a58d233bf02febf24d8236cd48a09f09068431cd132ead953298262189f2ac10174a6f2228c285e7c36f25a0aeccb969b80aa671be49bc046de04c0910471e7f4d419939cb8562d9b3a5b398b8d6d2f656c60f7331691acbf97a61af94bb1fa6632a1cf931145c65ac5c167fb6f8291c15d502609c24852757662b4e44763747eb9d233c484811e18ac10ee6e9ed01ea0cdb233ff4751c0e7b9a1fb6c1f787beaea19edfc6a33ef4031f5055a17056f25142936e30d0b0dfed79830e0cbd7ebf8fbd611f6b5edbd703dcef059d6084d41d7b7be8056780384c094b2923bb29ab86634e5cd3b3669e6d9a53737a6cfd252327e83bc71260d759db866055c714a23ce6d3b2d1fa906add7331cf6a631f4df0a481342354982a4edfb25dd39918ae755bb12156710e11c2afab27b98c218a191cd9281347cb215bd0409ea36a4f16d57e8bc5bade839840fc3af83cb62380725d8a5e4ed6a55ec7157b581b45799465545db98e655fa995e4f67d995b14e7efe83cefc26a2aa6752f26cc6a5a8dffbf7e372a355471b577f6d49bb5e9fc94dc2227330e849041828f553fb1e99258a63ff17209f8fe1d910cf1941cea332ec2e2d26176ac5e6caebc82a49cfc5e501b0d7addbda02066fc14a16bfa1e71f296c85ab08184ef6751be29e520b7354b79c54e419370710fecdd216e1bdbc63febcdc62d10060000",
    ],
    [
      "ETag",
      "k+seFCBdN5AQPpGCzhxgCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1588956132723"
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
      "00000002ffc5544d4fc24010bdf75790f50a091ff2a189071054942fa15c3484acedb414db4edddda284f0dfdddd16e905d344122fdd9d796ff66566f77567140ae4dd0b6d725d206f9efb1103db5eb8209ed5660a3cf605974b84210752546c10d455ec4d6bf5351cf3d953371ac72f5d70b1fb88eecd4dc2e2d60a022a793b19c9d8f1c0b7b98c5f755c48f31a0b6900ea440bfd3808973a2c1e61b18d343c33a7fdd17d1609d0d6c8683e18b43b831e49a17df1b4884d055dea23ff26a1d785918a9135be4dc10106a105c7ae23866bb0445f8f97d320f2a1c4316616f054441526b0cb308e28432cc954a9da2c55eaadd655bd51a9559bd5da81eea3458587a1aa98cfc88fbe4041fd297eaa11934672072c0993891f46419ccc25642724a18d2af66cf293db177f21f64766e332c34d770b2353995b554ecaf17c58fe93babc9215952f3c9f76fa4cce244e038c439153fa6e306e9fb171e986bc4d77db66ef5cb25c482fe4d435fbc3decc6c0f2727c5e577713441672b804f184a8f71d0ceaa942f5bf566a34c0e4ebd45e544a18c2a580c3a6d51f9c77af084cc39d4e760ec8d6f1bfd41931d050000",
    ],
    [
      "ETag",
      "v8hxMOsSKDpOuZDegoDJog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1588956132723",
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
      "5d",
      "6f",
      "a2",
      "40",
      "147df75710f66537a98a28884d4cd7286d492cb6886d369b8d0ec340a70586ce0c6e4ce37fdf19f003d7a6e91bdc7bee39e7deb933ef0d45515f7116aa978a1ae0f8ad4074f3ed8504ea85cc200e6299e19b0783ae6f366e347b98757c32be25afb3d17058a17059cd409a27a8c948412162978b792ba6a4c80125a429089bbad5ec18963530cc4e57efebddaa96a1249ae2ec55323c739eb3cb767befa31513122708e498b520490ff1f65a6fe794bc20c859fb54b62d9458fb73e1ab8440c031c9868b7965a260882e510a70226d1cabc3e0e7297d0b83b4150bf41a4304202445c6a5b58a06922cc271414b72c1f42e82225c7a3efcd602eadc9eda635fb973dcef2b904ab2d50f053065b9a488150957aebdd99db2ca85f6336088ad94a75bdbb345849208276889c3953254ae4af9923a448ce3ac34e0832041355991dd0dcdf9e0bc0e14920470a1b6832dfb9a093a963608a2a00f23ab6b04918682c00afa06e8061a1cf4502f0c10a83370a95dd5838c6466a80f74a823330c6107eaa169424d0bc26ea76b9a83c01af4a1898cae61a93b86eda11f4811e06882594e18de8d551d7bf6c8b797cef5d2b5ed893d39b6ff97e233f493e708b0ef2ddcb1a8aa8f2a0262c693aad9d3419d4c808b99d69bfb6c8a670de4141361aa3c6ec7f56d6f34f69dc79a0db17b531403b899bfc9ed8b40c2d0b11a5090228ee81d09e559aaf7b3b9e33b3377343d3294eb74bf473201fb7d307beca9cee66ff2d3cda80ead8a4a9b664fade5b6171fb23c82a4f88066bd0bab9d138ec6ff5f7f1a356e555cd49d2bf561617bbf646d9993190f4588a20c",
      "1ed5beb0cab2b04a7fe11d12f0fdab202bc4c370d0675c84c5ad82eca85eaea5bc6338ad5add119a9aa1f5f684a290f27384d937f688b397416aa114657c3f8bea85a806b93db154d4ec9465122e96dc75dc9bd27c63dbf807a7eb7408de050000",
    ],
    [
      "ETag",
      "tyQ5rvGyNfOQO1ToCHokOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1588956132723"
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
      "0000000002ff4d515d4f8330147de75790fa2a2acccd69b207a62c9a103fa68b26862c1d5c90095c6ccb262efc77db02db5eda9e73eeeded39dd19a649bed32222372659a5c94f05ac3e4940bca8c31c7895092eb7120b0ee4545583a089aafe4d920f7bf6cef2bf45e68de2c1e6fccef3ddc9a4ade2e117e454d6ed2492384e218bb8c49f1a9b1dafb582e6a06e5c2e991ea86fe83451975a9bf94feedbb19063a485c785efbb53df239dd4e83d906ba31fb2c6d51c6260508470784ec9700da178d0be39cdcb0c2c8e150b81774354632b270cab9232444b529633b6ece1787c3d1cd903e7ca19f4e5198654a458a88ec52bd9cf17286836c7adf24eec361cd6c2368a3e08121fa5739c8f9436baf9ecd2217bb6e94e81d1a3e0306f5a0be0cf0ca51d0edac405e9d3b845e556a83004ab40d32195df759f8a8e331ae31f32e1a80819020000",
    ],
    [
      "ETag",
      "xggX1FWrmzUlE6f3v/DELA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "c9d93a0211486fa023652b22cb402f0c814496b204b09071faef75fafee03d415e14649eb36568490fde01cf45b42ff6f6a0eafc4ecd751907180bc64d6fbab2f3901dd90d55aada8d2f2132753e33280d9f317273020daa60983c10eefdc93b95e87cbd6eabcec5a99235da965fcac33f498e76b66c9639c1e2cb6182b326c2b854c4b4bac38bf406656e0aa6cad7644107d551725675e9d18f42eb5b64ac35cc7a1456aa8e28a8a224ea6f31fe893ce6124bd32b16c8ed07443d2dd921dde416ec00d9c67a227356bf66d211a11df86f660b1fc9ebaa937c2213f8fd03ae5758f705010000",
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
      "Fri, 08 May 2020 16:42:41 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-29-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54db6ea330107dcf5720f6b5cd05022195a26d94902dda846c0969b75aad90710c750b98daa65554e5dfd7865c6053557d83993967ce5c3cef2d45519f71b651af1435c4f14b81e8f6db1309d50be9411cc4d2f396b0e136a5fa6cfdf0dbf4b6da4f3d995ab7a35115854b3403699ea04b460a0a11bb5aafda3125450e28219782f0521b5ef60ccb1a1a664fd7069a5e61194aa239ce9e25c323e739bbea740e3ada31217182408e591b92f468efbc6a9d9c92270439eb34d3764426d6f93cf1f78440c031c946eb5525a260880628053891324ee84d78dda46f6390b66311fd8a2102109222e3525a45034916e1b8a025b9607a1746612e351f7f6b067565cfed89af409214691664204517ca067010f06d8e9499b75c288e3b5b7a8bb1ef2cdd6035b9b117e3f664395f2fdc95727f637bb6c24198a012ab8c94ebf2cf153fa5a232db06318eb352932fbd3525c2bbefa3f3c1088f149244a862681f160cba26e859dd611885031859ba11465d1486563830801e76e1b08ffa9b10813a43a9acc2838c6466680cfa621881a675ada0dfed190130a01e84ba690c20001ad02d758fde1d6b8114018ea698e584e17d97d589678f7d3b7066816bdb537b7a2afd8de2b3e87bcf11c1beb7762702556f53048a844fab429b4d6a54cf453feb857dd6c1b302728a8910554edf717ddb1b4f7ce7ae2643ace21cc5006e572f72192390307442032a46cb115d908d9ca3ea8e17f57acbc5fa75086222e2cf51e7a91c1128d7a5ace56c5d9a797cb1878d5654a3acaceacaf71cf7875a73ee3ea6b90349f101cfebdeace6a25b8fa2c3acc1d5faffeb6fab9643154f7b2f4fbd5ddbde83c4963ee9f1508428cae029eb17365d022bf7172e97083fdc118910a7e4989f7161168f0eb253f67273e513c455e70f8466af679a074201a4fc3c42e43c449cdd12990ba528e3875e5437a56ae4ae21a9a8c92961325cbc03773fc45d6bd7fa07fb343dc110060000",
    ],
    [
      "ETag",
      "wls9ymr3FUYX6Ry2K3lD8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1588956132723"
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
      "0000000002ffc554cb6e833010bcf315917b4da4bc1f957a206d9aa2e655422eada2c881859000a6b66984aafc7b6d431a2ead901aa917ecdd99f568d71e3eb54a051dfcc841b715b4f5bdf704687ae3017f911b13581270269698440c5055b281634fb23d6bbaebaf9eb7bbe3f8d560f3c5c1eca447fdee2e63317b072116bc4f1189d8f521709888df545cc9f30a8b7008f2449b0449186d5458bdc03c8d15bcb44c63362e22217114325b4d26fa7032423974aafe2ce2608e37eac8bf49a875ade562684fb626b84021b2e1d2754cc91e6c6ea8f1321cc601d41849a80d2c17918519ec5192c498125213a95a73506b74fafd41a7db68357bcdd6991e101b739f44b262b544dffa9c701c98e428478cbad91dd02ccc267e1e05720b97509c90803e64b1efa0efdca9fa0bd19859dd76819befd65aa1b2b4aa9894eb07b0f9277571253b2c5e7839edfc995c491c8724897849e9c7c95cbf62e3c20d659b7ed0add1b56419175e28a96b19d3d1d2d2a78b1fc5c5777d31c130e5c01694088f3150ce6ad4dbfd4eaf5b4767a7de13e9442e8dca69022a6d63f1c77af2b9c8b93860a09db42f09c394f11d050000",
    ],
    [
      "ETag",
      "gTMh8UKbhwGZIsOPkR5ywA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1588956132723",
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
      "4e",
      "db",
      "40",
      "107dcf5758ee4b2b48e24b2e0629a269625ab749a08e81565595ac37e3b0607bcdee1a8450febdbb762e4e83106ff6cc9973ceccceee4b4dd3f47b922ef4534d0fc9f22107f6fce18e86fab1ca80404b95390a8fe8807d89af93f1f72e1f3ef56ff08fe8a9d72b51a4a8e628c962a8739a330cfcf46ada58329a6788515a978475dba89b6dc73969774cdbea5a7659cb218e4624bd570cb74264fcb4d9dcf8682c295dc68032c21b9826db78f3d16a668cde0116bcb92fdb944abcf9b6f0594c311284a6bdab696922e7c0669020122b1bbbea45f8799fbe4150d2584af423c18030a6792a94b59206d33422cb9c15e492e9450665b8f0bcfdad04f4a93b72078136eefffa384789229b7fd210d76633063c8f8576ee5f8cb57926b56f11073ed76ebeb9be2b238c4624861959ccb59e7656c817d40be082a48581008531546465763d34ef95f3da52281224a4da1a36eb1a1d643ac64918855d1c39763b8c0c084327ecb6911d1af8a405ad4508a8ca209476598f529ab60d0781158161b4cdd084c80e9d6e1b9bb66db50cd3325b96816d3bb41d7dcdb0daf68319200143c233cac97aacfac077fb813bf3ce6713d71dbac35dfb4f8c1ca06f7c4f8203ff6a329055d5514548ce785836bb3fa8bd090839d36a736f4df1a0818c112a4d15c7ed4d02d7ef0f02efba6243eede0896083f4f1fd4f64528e6b0ab460c2520808de9429da57e7931f502ef62d21fed188a75badc20b984fdd99addf554650b9eb3fdcd280fad8c2a9b9d965ec9ad8e5f65b94671fe0acde33aac9b7b1cb5ffbffed62adcbabca86b57facf2bd7ffad6a8b9ccaf810018314efd4deb1caaab04cbf",
      "e31d92f0cdaba02ae4c3b0d5e74286e5adc27ca75eaca5ba6324295b5d13763a46a7bb2194854c1c222cdbdc200e5e06a50509a462338bf2852807b9dab39457ec14650a2e977ce24dbe16e66babda3ff08313dcde050000",
    ],
    [
      "ETag",
      "+b+oCrBlVmMJ7sDwAWcKfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1588956132723"
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
      "4d",
      "51",
      "d1",
      "4e8330147de72b487d54cc806c32933d6c463313e210dd8331cbd2c105d9808b6d995916feddb6c0c64bdb73cebd3dbda767c334c9212b63f268925d96fed6c04e37298877750881d7b9e072abb0e440ee5435089aaaeadcf18a4948bf8e10dcee56ebe050a7d3e57c366bab78f4030595756789244e32c8632ef1b7c666c76bada405a81bb75ba60df50d9d264e95d65efcd5fc732814186be16dedfbf385ff4c3aa9d1fb46ae8d7ec81e772124c0a08ce0fa9c8ae11e22f1aae7e6b4a872b038d62c02de99a8c6564e19d615658896a42c7764d963cf9b8e27b6eb3c386e5f9e63444586a5ea587f908bbf4041f310ffd4ecc46ec3612d6ca3e88320c9209d613e523aaa66e75eba5dd8a63b6d8c1e6dae7e8b93001e3094e370d0438c489fc613aa69850a43b01a341d51f95dcb4c749cd118ffc27c0a6319020000",
    ],
    [
      "ETag",
      "l28m6RaYveP+bOUPkug9HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfdb7243400000d07fd9e7c810047d736d142523b1e1c5284b5156768d5ba6ff5ed33f38e705b23c4794a6236e510fdec09a9d94637e74b0acad55393f939363c1c7f68469c77f4ea3b9998c1bea46d093a209ca78881648dc2d6055e18b72f07abfe876113aa2da264c73eee83781c52dc39c2570f9fdc15b3c96a6b0c26e64405833cb6289442bcd0fdcfb7c37f28e749dddc2f5751f73e2d448519e7882adc6ba81bc72c472170feac51645b6ea95d1cbf1f63edf5a93517f3077ee91629f5a8dd56442e39d2c800340cb501344d37a9ff1a2a21cc07f331dd701ed570d650411f0fb07a444028f05010000",
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
      "Fri, 08 May 2020 16:42:47 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-31-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "40ecb5f94e80548ad68c901535211b9076d33421e318ea1630c5a65b55e5bfcf36f980a5aafa06f79e73eeb9d7d77e6d298afa88b3ad7aa9a8218e9f4a54bc7c7a20a17a213288815864fe12e0dd7f4951b499fc70cdbe7163b2ed62369d56282cd914a47982da94940544f472e375e282943928086973c1f6b0dfee8f0d6332d6fac3813e18565c8a926889b347a170cf584e2fbbdd838f4e4c489c209063da81243dc6bbcf836e5e90070419ed36cb767925da7dbff0e78440c030c9a61baf325152540428053811364eec6d78d594ef609076628e7ec610010849993161ad9281248b705c16529c2bbdf2200f4bcfc7df5a40f5aca565fa0a2449996641065274a16c0103017bc991b270d72bc576166b7735f3edb51378e6b5b59a75ccf572b3723ce5eeda722d8581304192ab4c952bf9e7f01fe94856db22ca70263df9225b73c2b3fb39da6f1ce1514288705714ed6181ded340dfe84dc228d461640cc761d443616884fa180cc31e9c8cd0681b22505790ce2a3ec84836d27a7ad803e3008e010a4663a80720ec69c140d742ddd0349deba87bf6eed80b2c1060688e694e28de4f59355d6be65b81bd081ccb9a5bf353eb7f0a7c86be736d0ef6dd8d6372567d4c11281336af1a6d0ea9d13de3f3ac37f6de04cf1ac80b4cb82979fab6e35beeccf4eddb9a0dbe8a4b1403f8e23d89658c4042d1890d0a7eb40c152bb215e7a83ab355bd5fb958df0e20ca11bf8e3e4fed70a05817d9cbd9ba34ebf87c0f1ba3",
      "a88eb28aaa9eefdace57b596dcbd2d730b92f20d9de77d58cdf9b4eef9846943abf5ffd7ef56ad86caaff6de9efa7d63b93f0557e644c645112a50064f553fb0e98258a53ff07271f8e11d110cfe941ceb53c6c3fcd2417aaa2e37575c415c4dfe20a8e9235d3b087262c1ce11dad03820cede12510ba528638759546f4a35c85dc35259b3236902ceef81b33fc45d6bd7fa07199a2cf310060000",
    ],
    [
      "ETag",
      "xoaShBmefU9XRC18KCtdFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1588956132723"
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
      "5d",
      "4f",
      "c2",
      "30",
      "147ddfaf20f595257c0b263c8080924c84319e0c2175bb8341b7ceb65390f0df6dbb217bd12c91c497b5f79e737bd27b7b76344a25b40b220fdd95d06bb07e4b801d6ed620666a63034f88e0728969c40195151b045e2b763018569e9bfbf70e89e3dd68bf893eedc1fdacdb4d59dcdd408825ef282319fb01108fcbf845c7a52cafb10887a04e742949c268a5c3f205168758c373c71e4f1ef248483d8d4c1696d5eb5b439441a7f2cf221e1678a58ffc9b845e97462686b6f4d5061f18442e5c6e1d33ba05578c757b390e630226a70973816722aa3085d78c263166949a3265d6ab66b5d96e779aad6abd765bab9fe984ba58043452158b39fad617546062d30fd562d44a67c0d230edf8b915c8cf0d21df2109bdebb97ae83b772aff421c4f9c5623c7cd764b235759585576ca0f08acfe495d8e6483e50b2fa69d3d932b89e390269128283db29e7b57bcb87443d14b0f7acef05ab25c482f14d475c64fc3b9d37b9afe282ebfcb8b09fa07017ccaa8f41807edac6aa5d16edeb62ae8ecd47baa9c289451054b40a75d2cff588f8190391f130ec6c9f80267026a2e1d050000",
    ],
    [
      "ETag",
      "iDE0O5xv9lppkFxhnzRDCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE `profile_id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30147dcfaf40ec659396102021a452d45509dd90d2a425a4d5364d893197d42dc1d4369daa2aff7d36e4832c55d537b81fe79c7b7cedd786a6e98f248bf5334d8fc8eaa900f6f2e98146fa57950181562a13a63ebdfe354d43447a974197de3f65a67133185455a4ece6689da7d0e4b46018f8d97cd65a315ae48851da94804ddb6a9a5dd7ed771dd3b67a965df572489331c91e15c2bd10393f338c9d8ed68ad2550a2827bc85e97a1f379e2d2367f401b0e0c631ad2199b8f13ef1794a3112846683f9ac125170600b5823922a1987ee38fa760cdf2268dd5ac9ea678201614c8b4c2869150ca6594256052bc125d2ab0cca70a979ff5b0be8336fec0d436d389d4fc2cfcb1809587ed110d7160b06bc488576194cafb4652eb9ef1107bed4ee7e788127238c262485058997da403b2fe94be818b82059292044510a355a99dd9ae6bf715e7b0805828464db962d7a6d07996ebb1f25510f27aedd8d923644911bf5bac88edab8df814e1c01aa2308c55df5a38c6656e2241de89bd84d7aa6ddc7916d5a4ec76a3b9dd8892d6cbb563bee4716d6b7089bfd3c9881746544784e39d9daaa0f03ef22f416fee562e279236f7418ff2f2327d577812f8bc3603e19caaeba5509921e8faa618f8d3a7240484febc3bde7e2c9003923548a2a8fdb9f845e70310cfddb9a0cb97b635821fc327b52db97a094c3a11b31b40601ec8ac6ea2cf5ebe9cc0ffde9e4627c4028d7e97a57c965d9efbdd8c34c75b4f0253fde8cead0aaa892e974f45a6ef3f54d945b94166fc03c6fc3ba7984d1f8ffeb4fa386adcb8bba55a5dfccbde0a7ea2d732a1340020c327c60fbc02aabc62afd81774896ef5e05",
      "d5211f863d3f17322c6f15e607f6722dd51d23eb6ad42da0e3da6e7f07281b9938ade89a7bca93974171c11a32b1f3a27a212a233747928a9a9cb24d95cb259ff893efa5f8c6a6f10fb79c36e3de050000",
    ],
    [
      "ETag",
      "TlIoPZOlTai7FR5ohqn1/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1588956132723"
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
      "0000000002ff4d51d16e8230147de72b48f73a1281e8dc121fe642a6897393cdec6131a6c085a1858b6dd9e20cffbeb680fad2f69c736f6fcfe9c9b26db2cfcb843cd824cab3430dfc7893815ce94308a26652a8adc25200b9d5d52069a6abfd7dc45e06f4e0069faf6ce91e867fde6eb69a4cda2a117f434155dd492185d31c582214fe32d8ee78a395b4007de376cbcd407343a7c96365b4f9f223780ec26ba9c0c448cbf562f1385d04a4931ab36fd4da98a7ec300a21050e650c9707551c7710cbb9712e6851317004d63c06d10dd18dad9c71ac2bca111d4539bee7b8c3f1f87e38727defcef3fb728631953996ba63fd4ecef3254aca42fcd5ee89dbc6c35bd886d14741d2ab7cae1352d28f6e1e9133d574a78dd5a3cd65d8f42841bc71545e04180703d247f184daaad449485e83a163aa7e6b96cb8eb31aeb1f6a4609e618020000",
    ],
    [
      "ETag",
      "3kblM0aq1EWOlN1q5z2jHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfdd7243401800d077d9ebc85894e85d58ad304bda21c88d61f355517f8b24db4edfbd999e37383fa8600ce6395f86167af48c44a1985bb6f5879d252ae058a2a1ad4acc16c480121c3992d28fe9b58edeb4dad8d15673cf8cbe60306c71730a7588b260a4ac249987a782c9761577ed911ee4d591092d6710b27d08322988f197b54fdcf2288c3836bbefaba504205999aa93864c72a0433557f975fabcf85ecfd6c13f5fcad380d7bd5eaa63d3d07059928e7a0539c55312e65e4cd2dea54aaa328ff30a4fefda0d6d10dcc79ac39cd78f99fa649a1bf4dfcc1731c2e36a41c181a3df3f3f6e5bad05010000",
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
      "Fri, 08 May 2020 16:42:48 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-33-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af40ec714d484a1248a5688d12b2d2266425a4d5344dc81843dd02a6d874abaafcf7d9261fb05455dfe0de7bce3df7f8da6f2d45519f7016aa178a1ae0f8b944c5eb974712a8672283188845c6795e60767d736f5fdda45f6ffedece7bd75631198fab2a2cd114a47982da94940544f462b3eec40529735010d2e6846d5d6ff706a6391a0c7bfab971ae57588a926881b327c1f0c0584e2f346dafa31313122708e4987620490f71ede55ccb0bf28820a35ab3adc63b51ede3c6df120201c3241b6fd6958892a2c24729c08990714487c16593be8341da8979f50b86084048ca8c0969150d245984e3b290e49ce98d0779586a3efcd602eada5a58534f812429d3cccf408ace941030e0b3d71c297377b5546c67be729713cf5e39fe7a7a652d279de96ab1593a6be5feca722d8581204112ab8c954bf9e7f01fa948760b116538939a3c91ad29e1d99d8ff63b4778a010245c1545bb32dfe80e41cfec8e8228306064ea8320eaa22030036300f4a00b477dd40f0304ea0c5259850719c9000081690c4c3f8c8cc0eff747c007d0ecfb46bfaf874138443d1daa3bf4f6300b2c10606886694e28deb9ac4e5d6be259be3df71dcb9a59b3e3e87f0a7c527defdabcd87337ce94a3ea3645a04cd8ac1ab46952637ac6fdac0ff691832703e405265c943c7ddbf12c7732f5ecbb9a0cbe8a0b1403f8ba7e16cb188184a2231a14fc68192a962444f25e4e96f579e562fdd817515ef1eba0f3380e2f14eb2267395997661f8fef61c38aea28aba8baf65cdbf9aed6",
      "92dbf769ee4052bec3f3b20bab3977eb813b4c1b5cadffbf7eb76a3d547eb577f2d4db8de5fe14589913191745a840193c76fdc4a60b6095fec4cbc5cbf7ef8840f0a7e4d09f321ee6970ed26377b9b9e20ae2caf93de170d41d1d0839b060a715bd91b1af38794b442f94a28cedbda8de94cac86d435259932361a29cdf03677788dbd6b6f50f972d97a410060000",
    ],
    [
      "ETag",
      "NqLitJKWIHKm+KxQF1JErA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1588956132723"
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
      "544d4fc24010bdf75790f50a8958be34f100884a02c847bd680859da2914da4edd0f9118febbbbdb22bd689a48e2a5bb33efcdbeccecbe7e5aa512d906b1476e4a6419acde24b0fdc50ac4446fa6c06528b85a128c3990b26683a02bcda681fc18d35657229f44db4ef76552abdbbbdbdb94c5dd354454f13e55a4623f80d0e32a7e357129cb1b2ca611e8135d0c65142f4c583ec1629f1878e64cfba3873c12a16790d1f360d0ee0c7a24830ee59f453c2ae8c21cf93709b3cead4c8c6c7039051f18c42e9cba4e186ec0157d335e4ea324840a47c95ce099882e4ce115439950865851a98a6d57aaf556ebbadea8da57cd2bfb480fd1a522c058573ccfc8b7be4041c329eef4884923bd039686e9c48fa3207eee12f21352d0bb2e0e3cf29d3b947f21f6474ea396e366bbb995ab2cacaa26e507212cfe495d5dc99aaa175e4c3b7b266712a711ca581494be1f3cb5cfd8b87243d1a6efda4eef5cb25c282f14d475fac3decc690fc73f8aabeffc6482ce5e001f33541ee3609c55bdacb5eacdc625393ab58bda89421b55300926ed52f5c77a0c84caf934e4601dac2ff53f9d2b1d050000",
    ],
    [
      "ETag",
      "aiuxPa8CuosQmkBCZQ453w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE `profile_id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54eb4fa34010ffdebf82705fee125bfae25193c66b2a2a978a4aa9e672b9b4cb32e02a6571176a8ce9ff7ebbd007bd1ae3379899df636667f7bda128ea334943f554510312bf14c0debe3dd1403d9119c8512c33d35f388a30b9e2978389aebdbafc7654acee86c3aa8a94688e9659024d4e0b86819fcea6ad98d122438cd2a6206cf6facd8e6e5903dde8f4ba66b757613924d184a4cf92e131cf337eaa695b1fad98d238019411dec274b98b6babae9631fa0438e7daa1ac2694b8f6b9f0594231ca094d87b36965a2e0c0e6b044249136f6e830f87948df2268d98a45f58a604018d322cda5b58a06d3342271c14a72c1f42e82225c7adefdd602ead49ed8635fb976dcef8b10e5b0f8a120aecce70c7891e4ca857773ad2c32a1fc8838f085f270657bb688301a9104e6245c2843e5ac142f8943e039494b791f0509d44445763332e783d3da514812940bb54dd9dc6c1ba863b50741149838b27a7a10b52108acc0d4512f68e3411ffa6100a8ce904bed0a8f529a1a816940c708cd4e641866bfdbede8dd7e68f5bb0323006cb501fa4184c5426c18d6bb7e3003319573c233cac966a8ead8b347be3d772ee6ae6d9fdbe7fbf65f1939aa7ef01c51ec7b33772c50f5514548ccf8bc6af670500713c8c54cebcd7d36c5a3063246a830551eb6e3fab6371afbce7dcd86d8bc09c408bf4d5fe4ee4528e1b0472386969003bba6a13c4bf5f666eaf8ce8d3b9aec19ca65badd567251f6676776df539dcd7fcb0e37a33ab42a2a6d1a7db5965b9f7cc8728f92e2039ad526ac760e381aff7ffd6dd4b855714d37aed4bb99edfd96d83227331e44c020c57bb52facb20456e92fbc42a27cfb264884781676fa3c176171ab30dfab976b29ef185956ad6e084d5d1f185b420164f97185d9b6b61547ef82d48225a4f97616d5fb500d727d60a9a8d92961b25c2cb9ebb897a5f9c6baf10f5f3fcb8fdc050000",
    ],
    [
      "ETag",
      "SJcffciHsG9L5/wNsPAuvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1588956132723"
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
      "0000000002ff4d51d14ec230147ddf572cf5d5c56d88a2090f434930a2419468348494ed3286dbee6cef5042f6efb6dd06bcb43de7dcdbdb73bab76c9b7d2779c46e6db64ce29f12c4ee2c067ad18729c83225a9b6027309ec5c5703f158573fca8ba0375a7fb893a751102da3f7cf35fdc5fd7e5d25c335645cd5ed15527895401a4985bf0cb61bde6839cf40dfb8580833d0dcd068b42b8c761fbc0d4ff90c23c33fcfc6e360301eb246aacc3e576b65deb1c1e5145620200fe1f89a42e006427a30b625cf8a141c89a50841364374632dc702cb820b4447514ee7d2f1babdde4df7caebf8d77ea72d4f31e49460ae3b66afec309f90783ac55f6d9d797536a28675126d0e6c7512ce693c4adaea66dff55dc7f51dd76307ad6a4e73ab45f3e3d4c18e404e042a53128c1597b599dca1f64c3a121225183ae4eacf4609359c5559ffebf9ef3a1e020000",
    ],
    [
      "ETag",
      "Ks/A8HhX0PMHAdbdWZhtxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "51",
      "6e",
      "82",
      "30",
      "0000d0bbf45b0d2238babf49110d9162d8d4f0d394525981526809c2ccee3eb37783f70494316e0c1954cd5bf00e666ac3155b45cadbcd65b1ef46475e4d7f1cadb42535747a64e057c138d91f18b93c4eeb2b56a124b79edeeb067b5b5d7de68f756ba3839d0671dcb8c49e6674c4cc52ec436a295cb4a17542618906ca4494a5e226be11e7700ec449cabaa933f543fda012969b4605ae1c5cc8372beeed733afa8556c48c383f63cba777bc5dce613b959724b1a29e04315426cf426fa91366976001f8d409cd0d11afd9c6857001fe9b64983bfebaee38d55c83df3fd53a051d05010000",
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
      "Fri, 08 May 2020 16:42:56 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-35-1588956132723",
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
      "6e",
      "a3",
      "30",
      "107dcf5720f6b509213748a5681b25748b36215b425ab5ab1532ce40dd124cb169d556f9f7b52117d854d5bec1cc3967ce8cc7fe68288afa4492b57aaea801899e73c8debe3dd2403d9319e028921918fcd4f318dfb3eb19dcbfa7d777d9fbab361e8d4a1429d80c6dd2189a8ce6190676be5ab6a28ce629ca286d0ac166b7dfd4fba639ec0ff46ec7e8744b2e83389c91e4492a3c709eb2734ddbfb6845944631a094b016a69b435c7be96869461f0173a6d5cb6aa212d3be2efc3da618714293d16a599ac819643e6c1089a58d237b1d5cd4e55b046d5a9140bf100c08639a275c5a2b65304d4212e559212e943e4450840bcf87df4a405d5a336be22998c6f926f113b48133658d38f2f95b0acaa5bb982bb673b970e763cf5e38fe727265cdc7adc962b69a3b4be5f6ca722d85a3208682ab8c948be2cf113f85a3a2da1a182749e1c993d98a1391ddcdd1fee4080f125244b862b083f9467b8074b33d0cc2c0c0a1d9ed07611b82c00c8c3eea066d3cec416f1d00aa2a14ce4a3e4a6862e89dd0c406f6f576afeff7a08dfc00b74d1f197a883a4363109886ba636f0fbde00c10872961296564376575e25a63cff2ed4bdfb1aca9353db6fe9a9113f4ad6b0bb0e7ae9c896055c714a23ce6d3b2d1fa906add7331cf6a635f4df0a481342354982a4edf763ccb1d4f3cfba66243ace20c2284df96cf721943143338b251268e964336a76b798eaa339e57fb2d16ebd71ec404e2f7c1e7b11d0194eb52f472b22ef53a9ed8c3da28caa32ca3ead2736de7875a496e3f97b94171fe89cecb2eaca6625a0f62c2aca6d5f8f7eb4fa3524315577b674fbd5e59",
      "ee9de41639997121840c127cacfa1f9b2e8965fa3f5e2e01dfbf2392219e92437dc645585c3acc8ed58bcd9557909493df0b1a834ec7dc0b0a62c64f11dd81be479cbc25b2166c20e1fb59946f4a39c86dcd525eb153d0245cdc03677788dbc6b6f117e455be0610060000",
    ],
    [
      "ETag",
      "e6K1ulcZsQLeZzpQYrzw/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1588956132723"
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
      "cb",
      "6e",
      "c2",
      "30",
      "10",
      "bc",
      "e72b907b0589578056e2100a6d6979130e6d859049361048e2603bad10e2df6b3b0172a18a54a45e62efceac47bbf6e4a0e57268eb06367ac8a1a5bbda4540f7772be063b999008b3ccec412928001ca4b3670bc92ecb7e53adab5e870ab07e6ae6c7cbcbefb9bf6b8d98c59cc5a838f05ef2022113b2e783613f1a78a73495e6101f6419e68112ff283850af31798ef43054fcd4977f09c467c622b6430ebf58c56af8312e898bf2e62638e17eac8bf49a875ae25626843961370804260c1a5eb90920d58bcabc6cbb01f7a506024a216b0444416c6f08a9228c494908248152a7aa1a4371af77aad5429d7cb9513dd2316e62e0964c56c8acefa9c70ec4dc8b71c31aac57740e3309ef86914c8495d427a4202fa92c5ae8dceb963fe17627760d6aa296eb29b6ba9caccaa62528eebc1e29fd4c595acb178e1d9b49367722371ec9328e019a59f7a43e3868d0b37646dba6d989d5bc9322ebc9051d7ecf63b53d3e88fae8a8beffc6282d69e031b51223cc64039ab54ac36f47aad884e4e7d24d2895c1a95d30854dac2e28ff5e2729173b0c7403b6a3f21da6c681d050000",
    ],
    [
      "ETag",
      "KbhuqBrOk5nTq2AZJYmjDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE `profile_id` = ?",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1588956132723",
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
      "ef",
      "6f",
      "9b",
      "30",
      "10",
      "fd9ebf02b12f9bb4249084102a455d94d00d294d3b42da4ed3941873503780a90d5dab2afffb6cc80fb25455bfc1ddbbf7de9dcf7e6d288aba2669a09e29aa4fa2c702d8cba707eaab5f65067214c90c1feb41a22d8cf5b3c59308dfdd2e9ed74e341c562852567394643134392d18067eb698b722468b0c314a9b82b0d9ed37756330b08cbedeed989d6e55cb210ea7245d4b86fb3ccff859bbbdf3d18a288d624019e12d4c937dbcfdd469678c3e00ce79fb58b62d9478fb7de1f3986294139a0e17f3ca44c1812d21412496360ed581ffed98be4550d28a04fa89604018d322cda5b58a06d3342451c14a72c1f42a82225c7adeffd602eadc9eda634fb91cdd7d5e052887d517057165b964c08b38572edcab4b659509e57bc481af94db1fb66b8b08a32189614982953254ce4bf19238009e93b494f7901f434d5464b72373de38ad3d852441b950dbc296a6d647fa40b3fcd0377138e81a7ea881ef0f7cd3405d5fc3560f7a810fa8ce904bedaa1ea534f5f51007a669695a68053da36374c0829e86a0dfd5036ce98686b54e5f33d52dc366df0f6620a632213ca39c6c87aa8e5d7be4d94be76239b3ed893d39b4ff979113f4adeb08b0e72e666351551f5588c48c2755b3c7833a9a402e665a6feebd299e3490314285a9f2b09d9967bba3b1e7dcd46c88cd9b4284f0cbfc51ee5e88620e876ac4500239b04b1ac8b354afafe68ee75ccd46d30343b94cd73b2417b0df7bb3879eea6cde4b76bc19d5a1555169b3df536bb9cdd737596e505cbc41f3b40dabfa1147e3ffaf3f8d1ab72aaee9d695fa7361bbbf",
      "646d99931917426090e283da0756591656e90fbc4202be7b1364857816f6fa3c176171ab303fa8976b29ef1849aa56b78466df1a683b4251c8f21384a90dcc1de2e45d905a90409aef6651bd0fd5203747968a9a9db24cc2c592cf9cd9f7d27c63d3f807dac4bc3bdc050000",
    ],
    [
      "ETag",
      "sC1dm0U5kx9smgcXWUxkIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1588956132723"
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
      "4d",
      "51",
      "d1",
      "6a",
      "c2",
      "30",
      "14",
      "7d",
      "ef",
      "5794ec758536a2d3810f76133690cdb9c9184324a6d71ad7f6d624dd10e9bf2f495bf525c939e7dedc9c9393e7fbe4471409b9f7c946a4870ae4f12605fd660f0b5055a695d94a2c14905b5b0d9aa5b63a7e5d8e28f04f31dfc9838886a8f00b27e37153a5f80e7266ea4e0619bc159025cae06f87fd96775ac172b037aed7d20d7437b49a3e964e7b9c7c4caff91c13c7bf2c67b3493c9b9256aaddbe326beddeb1c7cd02b620a1e070794d29710f5c3f3bdb8ae5650681c24a7250ed10dbd8c8a9c4aa6412313054d01b04517f381cf507518fded15e579e21675a60613b96efe43c5fa366d902ffac751235d9c8063649743990ed5538d7f118e9d736d390864148031a92b356b7a795d7a1d5656a7cd4a0e6128d2905ce4a48ba4c1ed07ad636122d2b703467e6cf9e846e39aff6fe011d4acd691e020000",
    ],
    [
      "ETag",
      "BOU92ecWiPhrqi18osoYoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfdb6e82301800e077e9b531c30507bba388c64238e8606d6f48c11f04e4580eeab2779fd9f706df0f12690a52c6635b41833ed1436cf475bab65b0d3ff28bb971c9cceecf70f04b2b0ba74355f3d6bc9989c02c7722872ea7be224303da51b1d9655170cd0b962c4e6b6f55a5c437cf2963de13bf53eaced3be88100c42e21d29969a359fb1110ac70df31d7570177c34679eeecdf1b09f551a173b190427e0691f4fbd6519b0ed741995e47b9049a0d2cc8eb2e764269e556563e53366a80a99f5abcbaf14da375b432b04f7ae1840c6c56bf6aeeafa0afd37e3f1d1c1eb8a410c30a0df3f3e52d43f05010000",
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
      "Fri, 08 May 2020 16:42:57 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-37-1588956132723",
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
      "0000000002ff8d54ef6f9b3010fd9ebf02b1af4d42425248a568cd12ba32256425a4d5344dc89883ba259862d3aeaaf2bfcf86fc80a5aafa0deede7bf7ee7cf65b4b51d4479286ea85a206247e2a207ffdf24003f54c6680a35866b4970cf7fadeb79b871ffdbf9b997d6f634bbf198f2b1429d90c6db204da8c16390676b15e75e29c1619ca296d0bc1b66eb47b43d31c0dcf7b7adfe8eb15974112cd49fa2815ee39cfd845b7bbf7d189298d134019611d4c378778f7b9dfcd72fa0098b36eb36c575462dd8f0b7f4d28469cd074bc5e55260a06b90f1b441269e3c80e83cba67c87a04d2716e8678201614c8b944b6b950ca66944e2222fc585d29b088a70e9f9f05b0ba82b6b6e4d3d05d3a4d8a47e8a3670a68488239fbf66a05cb9cb85623b574b7731f1eca5e3afa6d7d662d2992ee7eb85b352eeae2dd752380a1228b9ca58b92cff1cf1533a2aab85c038494b4f9eccd69c88ec6e8ef63b4778909022c215831dcc37b473d433b5511005068e4c7d18441a0481191843a4071a1e0d60100680ea0aa5b38a8f529a6ac3c17904e1c80f0d007f30327bbe19e99a1f20148651a00d7563a0eed8db432f3807c46146584619d94d599dbad6c4b37cfbca772c6b66cd8eadbfe4e4047de7da02ecb96b672a58f53145a848f8ac6ab439a446f75cccb3ded847133c6920cb0915a6cad3b71dcf722753cfbeadd910ab388718e1d7d5935cc608250c8e6c948ba3e5902f6828cf5175268b7abfe562fddc839840fc3ef83cb62380725dca5e4ed6a559c7137bd81845759455545d79aeed7c576bc9edfb32b72829ded179de85d54c4ceb5e4c9835b45aff7ffd69d56aa8e26aefeca9376bcbfd25b9654e665c882087141fab7e62d325b14a7fe2e512f0fd3b2219e22939d4675c84c5a5c3ec58bddc5c79054935f9bda061183d632f2888393f4598436d8f38794b642dd840caf7b3a8de946a90db86a5a266a7a449b8b807ceee10b7ad6deb1fcf2cb29210060000",
    ],
    [
      "ETag",
      "0wpc12TBQjJ2xmDIhIcE3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1588956132723"
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
      "4d",
      "4f",
      "c2",
      "40",
      "10bdf75790f50a091ff2a10987a2a82480d8967830842ced140b6da7ee6e35c4f0dfdddd16e805d344122fdd9d796ff66566f7f5dba854c836883d725b21ab60fd9102db5dad41bca88d053c0d05974b82310752556c1074add8f5f904ec9e634f563e7bc1f475b0f53dcbecf7331677df21a292f72d2319fb01841e97f19b8e2b795e63318d409de8629846f15287d5132c7689866dc71a4d1f8b48849e46a6f3f1d81c8c872487f6d5f3221e1574a98ffc9b845e17462e4636b8b2c00706b10ba7ae13861b70c5488f97d32809a1c631652ef05c441566f09a619a50865893a95aab5b6bb47bbd9b76a7d16a769bad033d44978a00635531b7c9515fa0a0a1855f6ac4a493dd01cbc26ce2875110bf7009c50949e85315071e39e6f6d55f88a3a9d3b92e70f3ddc2285496569593f2831096ffa42eafe49dca175e4e3b7f261712a711a6b12829fd307e362fd8b87443d9a6ef4d677829592ea4174aea3aa3c9d076ccc9ecacb8fc2e4e2618ec04f01943e9310eda598dfa75afddedd4c9c1a977a89c289451054b41a75d2aff584f8190399f861c8cbdf1030c1cec6e1d050000",
    ],
    [
      "ETag",
      "0UMeS8TSMbfrQouWBkfdRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ?",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1588956132723",
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
      "02ffc55451739a40107ef75730f4a59da9a2028a9971d25449ea8cc1143149dbe9e8018bb90438c21da64ec6ffde3b40c5d166f2d637d8fdf6fbbeddbbdbd79a24c94f38f6e5334976f1f2398374fde191b8f2679101869622c3949ff67d30597dbdd73b7075fd27f21e9df54bbf5fa0705e4d51948450a7244b3da067b3696399922c412921754e58578d7a4b378c9ede69a9ed6e5b2d6a2984c118c74f82e181b1849e29cad6476349c832049460daf048b48b2babb692a4e4113c46954359852b51e56de1f39078886112f767d3c24446219d438470286cecab7df7cb217d03a3a8b1e4e815f600791ec96226ac15341e8903bcccd29c9c33bdf2200fe79e77bf95803c35c7e6c091069399e57c5ca048d02d3e49884af3790a340b9974694faea545c2d51f1005ba90eebe99b6c9232909700873ec2fa4be742e5d5843495a947fb99d5cca07ca709c1b72901b42c506cf96431c9d38bf1d8520418c6b97b079b7d9412da3d97303b7eb0586aabb41135cd770bb3a52dda6d7d340f35d40550626b48b7a1493d8505bd0d37c68a2664b07dfd7b50e686db5adaa6e47d3c0403d5773f5a02b970c9b5d3f5e0a88c110d384505c8e591ed8e68563ce479773cb3487e670dffe4b8a8fd077f688831d7b660d7855755401e2131f16cd1e0eea60028ccfb4dadc5b533c6a204931e1a6f2e31f598e695f0c9cd16dc506bf8b6358226f3d7d16b7314021857d354a51040cd26be28bb3946f26d391339a5817e33d437ebd6eb648ca61bf7666f73d55d99c757278338a432ba2c26647932bb9cde7932cb728cc4ed0accab0dc3ae0a89d60fbafeef47fd82bbf7ed72ae432df2ba52df9fbccb47f88da3c273236049042ecede5def1d24461917ec7dae4f0ed1213157c8fedf429e361fee83dba57cf5f8d5801382a7b2d08bb86dee96e097961ca8e119dde0e71b4c884164410b3ed2c8a85560c72736029abd8c9cb049cbf416b645de5",
      "e66b9bda5f12cd8ecf8d060000",
    ],
    [
      "ETag",
      "t/ZRXfOvBX56eGMxmcjTyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1588956132723"
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
      "4d",
      "51",
      "d14ec230147ddf572cf5d525c202a2090f40a66208ea9418630829dbdd2c6ebdb3ed300bd9bfd3761bf0d2f69c736f6fcfe9c1715df2cb784cee5db265e95f09a2ba4a41bd994308b2cc94d45b815c02b936d5a0686aaabfe081b3bda02fb4e4f190cde873f2194fc6e3a64a463f90535d77d048e38441164b8dbf2d765bde6a9ce6606edc6c841d686f68355515569b2f3f82c720bc94728cadb45c2d1693e92220ad54db7dadd7da3e6587db101210c023383fa810b88348cdad7349f322034f62292290ed10d3d8c8a9c0b2a002d1d394e78fbcde6034ba1b0c7b7effb6ef77e519465431e4a663f54e4ef3152a9a85f86fdc935e138f686013461705492ef2b94c484bfba6f944d5ed69ed74687d1e36ad14c85781da8b04ebe0867451ccd058552609254ab07444f56f3d31d5724eed1c014bb3eb8d18020000",
    ],
    [
      "ETag",
      "YeFnivraOaund6iCaJfWdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfd16e82301400d07fe9b33113aab67b2b50981a118213f58594f6aa15020c705296fdfbccce1f9c1f24a484aecbfaba800abd23232c3a95d34d4d1c73051de5b35aa9b5ef0fcfe54ac5a514de77d05de8cd0f58a2f8da91f7d43ce16ec8319ce13161f11b67b0b2765ad32fe764977e996fe7f8bc708be7e6c4e74594082071e0592ecd3ef69fc460b54ccc02d8d1d5d7f830c2e2dc71517355f861d83a172f92383f0c23bf0163f8f2082d8fc2ce7889a7624c20f257da4efbd9beb22b39a4e9e9f6105b9e356b52a30982a1d12d74997ecdec39a513f4dfcc7ad3c0ebea8068a145bf7fbf2b480f05010000",
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
      "Fri, 08 May 2020 16:42:59 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-39-1588956132723",
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
      "0000000002ff8d54db6ea330107dcf5720f6b5b9910ba452b44d13ba454ac82e21ad56ab1532ce40dd124cb1695555f9f7b54d2eb0a9aabe446166ce9933c763bf37344d7f22e946bfd4f490c4cf05e46fdf1e69a85fc80c7014cbcc84b976c687d65d3cf3afa7d7eb7efa38725fc7e3b28a283443db2c8126a3458e815dae57ad38a74586724a9b82b0d91b35bb03cb1a0d86dd9e611abd12cb2089e6247d920c0f9c67ecb2dd3ee868c594c609a08cb016a6db63bcfd62b4b39c3e02e6ac5d6fdb169d58fbf3c6df138a1127341daf57a58882411ec0169144ca38a137e1559dbe45d0b6158bea178201614c8b944b69250da66944e22257e482e95d044558693e7e5602faca9edb535fc33429b66990a22d5c681bc451c0df32d06ebce54273dc9ba5b798f8ced20d56d35b7b31694d97f3f5c25d69f7b7b6676b1c850928ac36d6aed4972b3e9422d56d038c935469f265b6a24464f73e3a1f1ce191429208550cf66581d919a2aed519855168e2c8ea0dc2a803616885e600f5c20e1ef5a1bf0901551994b2128f529a0e37c6c840160efa436b18f423f1838cae15f48db00bb833e88389f43d7a779c05e78038cc08cb28237b97f5a9674f7c3b706e02d7b667f6ec34fa6b4eceaaef3d4714fbdeda9d0a54d5a60815099f9583d64daa4dcf859fd5c13e73f06c802c27548852a7efb8beed4da6be7357912156710e31c26fab67b98c114a189cd0281747cb215fd08d3c47dd9d2caaf3aac5fa792862a2e2cf51e7691c5128d745cd72b62ef53ebed8c39a15e55196517de57b8efb43af24771fd3dca1a4f880e7651fd633e1d6837098d5b81afffffbdba8f4d0c5d5decbd37fad6defb7c4aa9ccc7810410e293e75fdc2a64b6099fec2cb25ca0fef884488a7e4d89f711116970eb35377b5b9f20a92d2f903a1393206e6815000737e5ed11b0e0e15676f89ec055b48f9c18bf24d298ddcd5241515390a26cbc53d70f787b86bec1aff008d0ca9ae10060000",
    ],
    [
      "ETag",
      "AsNEpt68VgDTBCBU4nj9Nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:42:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1588956132723"
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
      "545d6bc230147defaf90ecd582dfd3810fbab9ad509db315064324b6b75ad7365d92fa81f8df97a455fbe2284cd84b937bcfb939dc9b9c1eb452097df9918b1e4a68e12fbf13a0fbbb25f077b999004b02cec4129388012a4b3670bc94ecd0b5e3b1b169ef3077761bcbdf55761fe1b6db4d59cc59418805ef2022117b3e042e13f1a78a4b595e61110e419ee8902009a3b90acb1798ef63055bf6c418bde49190b80a194d4db3d7370728838ee5eb222ee678ae8efc9b845a675a2686d66431010f28440e5cba8e295983c30d355e86c338009d91843ac032115998c24b4a921853427491d2eb1dbdda6cb73bcd56b55ebbafd54ff4803898fb249215530b9df539e1389890ad1c316aa57740d3309df86914c8cb5d427e4202dac862df45e7dcb1fc0bd118d9ad468e9bed665aaeb2b0aa9894e70730ff277571252b2c5e7831edec99dc481c8724897841e967f3ad77c3c6851b8a36fdd4b307b792655c78a1a0ae6d0c0796dd1b8eaf8a8befec6282fe9e031b53223cc64039ab5a69b49bf7ad0a3a39f59148277269544e135069078b3fd6abcf45cec30103eda8fd00ccd148f81d050000",
    ],
    [
      "ETag",
      "mdTpPIv8xatcxvSix0xXmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad545d6f9b40107cf7af40f4a555631b7f43a428b56cd2a2dad8c1d8515455f68117720970e40e524591ff7bef001b2cbb5155f5c5c2bb33b3b37b77fb569324f909475bf952921dec3fa7405f3f3c1247be101948902f32ac33fdbe9a4fbd36bd2796bf9ac2e7b932bdbdbaca5138633314c601d41949a90bec72b968f894a431a284d4b960bdabd45b3d55d57afd56a73d6877722e83c09be0e849283c2449cc2e9bcdbd8f864f881f008a316bb8243cc49b2fed664cc923b8096b1e976df24aacf97ee1eb80b828c124ba5a2e72132903ba8610e140d828d95be7cbb17c03a3b0e173f40b7601b92e49a34458cb655c1279d84f6926ce95de78908733cf87bf9580bcd027fac89646b3a5697fdca050c86d3e498849eb35059606897463cda6d226e6d51f1003b691eebee996ce239478388035de6ea42be95a1a9a63a9c465b1cc5456700b2cc15166cb464e0015333c5b8cd238738a0709218212ae5cc0d603a58f5aaaa2399e33703db5d3733c051c4775063dd4711457eb4277eb00aa2a24a276ce4711890090d2c97edafd6d97d3140d1ca5eff4babdb6aa395a5bebf65db70772a1b03bf4e35240098c318b09c3c5b0e591a50f6d7d6ddcac4d5d1febe3b2fd5f149fa0ef2c83836d6b698e38ab3a2a0ff1b98ff3668f0775348184cfb4dadc7b533c6920a6987053d925304c5bb78623db58556cf01b39011fb9af8b6771273d143028d988a21012a053b2156729cf670bc33666e670522a64976cbe47320efb71305bf65455b35fe3e39b911f5a1e1536fb5db992db5d9c5559a1203d23f35284e5d69146ed8cdabfb85bd896617efd0ff686313fb83f582cbe7ed62afa32df308535f976a95bf7829be544c6020f28446e59f12f5e9b20e6e9bf58a01cbe5f6782c137daa13e4b78983f7c9795d5b39723d6000ef3d3280455456db7f6829c48935384d6d1f6889395266a410851b29f45bedaf241ee8e2ca5153b194dc0f93b348b03dcd576b5dfe7c03ffb97060000",
    ],
    [
      "ETag",
      "s3MKVPMf2rYoRgVMe+P0MQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d515d4fc230147ddfaf58eaab8b6c88a0090fa28ba20bca84c4c42ca48cbb31dc76673f3484ecbfdb761bf0d2f69c736f6fcfe9c1b26df29d951b7267937596fe4860fb8b14c45c1f42e032175c6d15961cc8a5ae0641535d9d3cce976faf8bab30184c5fb6c34f391bfa321d8f9b2a1e6fa1a0aaeea090c24906f9862bfc65b0ddf2462b6901fac6d58a9981e6865613fbca68d3d9c27ff2c373a9c08d9166cb20b89f043e69a5daec915a6bf3941dae4348804119c3e94115c31dc4626a9c735a5439381c258b81b743746323a70c654519a2a328e7bae7b883d1e87670e3f6bda1d7efca738ca9c8b0d41dcb0f729c2f50d03cc43fed9eb84d3cac814d185d142439cbe73c2125fdea668f1ca9ba3d455687a2d3b0c95e007f67a8bc70300e7aa48be201b555a193104c82a163aa7eeb39132d67d5d63fb149e35518020000",
    ],
    [
      "ETag",
      "fDQUOKT/RL5IJh7XuN7Eug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cf516e82300000d0bbf45b4dc581747fb4ce0944d8b4d3c04f534a6530a050705297dd7d66ef06ef077021e430b0517dc9163c03c32db4108b50b9d8149736e65550aea11dc23835aaf2ea63c7e649c6e5e41fa23c897775ab5e153c8fbe6bd77392b695a5f53e7df27a820db308de270742e5b74bef9987b94e482dc26b34be99699770fab2be9c1a87aaed67302c0be7b6855204c23937f115aa71288842bd7347d0189e4dddfbc71111775e7b56dfd1699535be2bfc9b5d06547875b9cc73caec6893b8cee614630866404e5da9e5c0cac76c65233403ff4d369a4e3eae58722d35f8fd03235e3a1f05010000",
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
      "Fri, 08 May 2020 16:43:01 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-41-1588956132723",
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
      "0000000002ff8d54db6ea330107dcf5720f6719bfb055229da4609dda226a425a4d56ab542b631d42d606a9b76ab2affbe36e4029baaea1bcc9c73e6cc78ecf786a6e94f240df4734d87247ace317bfbf648a17ea6325880486512c13abdbff6e2e9fb0d839dcdf5e8165da3d7c9a4449182cd4192c5b8c969ce10e6e79b752b6234cf00a3b429059b836eb33b34cdf170d4edf78c5ebfe4721c870b923e29850721327ede6eef7db4224aa318838cf016a2c921de7ee9b533461f3112bc5d2fdb969578fbf3c23f628a8020349d6cd6a5899c63e6e3049058d938b2037851976f1190b422897e21080384689e0a65ad9441340d4994b3425c2abdcba00c179e0fbf9580beb616d6ccd3108df324f55390e0332d0002f8e22dc3daa5bb5a6ab673b9729753cf5e39fe7a76652da7add96ab1593a6bedfeca722d4d0018e382ab4db48be2cf913f85a3a25a80b92069e1c953d98a1399ddcdd1fee0080f124a44bae27807f38dce0874cdce1886d040a1d91fc2b0832134a131047dd841e3011e041083aa42e1ace48394a67d23e802d487be391e437f0060e0836ecff0a59a61187834ee183d7dc7de1e7a410c0381e784679493dd94f5996b4d3dcbb72f7dc7b2e6d6fcd8fa2b2327e87bd79660cfdd3833c9aa8e2904792ce665a3f521d5ba17729ed5c63e9be049031923549a2a4edf763ccb9dce3cfbae6243aee2024700bdad9fd5328620e6f8c8064c1eadc06c4903758eba335d56fb2d16eb660fe212f1fbe0f3d88e04aa75297a3959977a1d4fee616d14e55196517dedb9b6f353af24b71fcbdc8138ff40e76517d63339ad0739615ed36afcfff5a751a9a1cbabbdb3a7df6e2cf797e2163995717188194ed1b1ea17365d11cbf4175e2e09dfbf238a219f92437d2e64585e3ac48fd58bcd5557909493df0b9adde15150129938458c0c738f38794b542d9ce054ec6751be29e520b7354b79c54e415370790f9cdd216e1bdbc63fce32441710060000",
    ],
    [
      "ETag",
      "mtr02xILk+Prb0UK6QcKcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1588956132723"
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
      "5d",
      "4f",
      "c230147ddfaf20f55148f81cd384075054224e8491981842ca763786db3ada4e45c27fb7ed06ec05b344125fd6de7bceedc9bdedd9562b95d0bb1f39e8ba8416beb74e806e2e3ce02f72330696049c892526110354966ce0d893ecef75d334f8e50a7a9ef9a5bfb63decb047afd34959cc5e4288056f2b2211bb3e040e13f19b8a4b595e61110e419e68932009a3b90acb47986f62054facf1c0bccf23217114624e87c36e6fd84719b42b9f167130c77375e4df24d43ad33231b4228b31b84021b2e1d8754cc90a6c3e50e365388c03a83092501b5826220b53d8a324893125a422529566ad526b19c6554baf35eaed7a634f0f888db94f2259319da0833e271c0763f229478cf4f40e681aa613df8f02b9b94bc84f48401fb2d877d021b72bff421c9896decc71b3dd4ccb551656159372fd00e6ffa42eae6489c50b2fa69d3d933389e39024112f287d377cee9eb171e186a24ddf76adfeb96419175e28a86b0d9efa13abfb343a292ebeb3a3097a1b0e6c4489f01803e5ac5ab569b4da7a15ed9d7a43a413b9342aa709a8b48dc51febc1e722e7e28081b6d37e0007b899811d050000",
    ],
    [
      "ETag",
      "zq4N8t+jeBgNx6X7gadsKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1588956132723",
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
      "ad",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cfaf40ec659396906fa052d445095d9152d211d26a9aa6c41843dd124c6dd32aaaf2df67030944c9aa6ada1bdc7beeb9e77ef8be3514457dc249a05e28aa8fa3e70cd1eda747e2ab5fa5077110498f66741f9fcceded9d4366faf5747e7595bdf65f47a30285f3680636698c9a8c64142276b15cb4224ab21450429a82b0d9ef363b03c33007c34eafab777b452c437138c3c9936478e03c65179ab6d7d18a0889620452cc5a906c0e76eda5aba5943c22c899769c56139998f67ee2cb9840c0314946cb4521226388aed006e058caa8a203ffdb317d0b834d2b12e8170c118090640997d20a1a4892104719cdc905d39b300a73aef9f05b33a80b6b664d3c65325f3adee735d848baf517053065b5a288653157aedcf98db24e45f607c0105b2bf7d7966b090b25218ed10a076b65a45c2a6367aa54b8dc968bca130688719ce4b23ce0c7a8264678cb56da67a678a09024800be612b6d2db43d031daa61ffa3a0c8ddec00fdbc8f70d5f1f809edf86661ff5031f813a0397b98b7890885e01d481beee0f4038ec7461a883001962463d3308fb66db6c07433f14646ac9b03bd40329021c4d314b09c365b3d5896b8d3d6b655fad1ccb9a5ad3aafc578a4fd0f7ae2dc09ebb742622aadeaa1088be4f8b628f1b75d4012e7a5a2feebd2e9e1490524c84a87c096cc7b3dcf1c4b3ef6a32c446ce5004e076f12c77320431435534a0608338a2372490b3546fe70bdbb3e7ce785631e44b76bb473201fb75105bd55467f3b6e9f16614432bac52e6b0afd67cbbaf6759ee409c9da17929cd6ae788a37186ed5f",
      "d42d3cd776beff0779201583fb8bc4f2eb77a3c6af8a0b534a537f2c2df7a78ccd7dd2e3a2105194c02ae3075e9b0c2cdc1f38a002be3f6732425cb4437ec685593c7cc8aaecf9cb9167006f8a6994844657370e842290f25384d937f68893932673a10d4af8be17c5692b1ab93b9294d5e4e461122edea1530e70d7d835fe007126a96597060000",
    ],
    [
      "ETag",
      "/82jk9yPVNoL7HDOFFuw4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1588956132723"
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
      "4d",
      "51",
      "5b",
      "4f",
      "c2",
      "30",
      "14",
      "7e",
      "df",
      "af",
      "58eaa32ee1aa68c283900549c8d42931d11052b6b331dc76467ba641b2ff6edb6dc04bdbef727a7abe1e2ddb66df491eb2079b6d92785f82385cc540affae0832c53926a2b3097c06eb41b88c7da7dbdf586de74f0e71276e6b3c87dfef8dcbbbfe371ed92c11632ae7c4785148e124843a9f097c176c31b2de719e81bd76b611a9a1b1a8d0e85d1e6debb3b73fd4b29c3d048de72b1789c2c5cd64895d9576aadcc5376b8f12102017900e70715027710d0dc4c2e7956a4e0482c4500b269a20b6b391658165c203a8a72063da73b1c8dee87b7dd7eefaed76fed29069c12cc75c5f28d9dfa13124f7dfcd5d3b36e1d8fa8611d461b058b2ef2b94c48493fbab8c34e54d59c56568b56e7669303817c11a8669110d6956d1453d4a3924e824409860eb8faada7841aceaaac7ff9334d0318020000",
    ],
    [
      "ETag",
      "+hN5NC4zEto0IGfEOWZqEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "6e82300000d07fe9b3181411d99b05262299805cf7424a53b9ad5c5a1dd465ff3eb21f38c9f9010863c279fee85bd2813720d0565fe3f5a53f4051e21755e719b5bcf71ac7ece4a0dca7e3f80e15a950e7447c2711c485aa416be89b5b16fb5f9baeacd0998ac6ff4cdcbde6aa4fdc78c65442f94ab2d06e9db11d17f348d1ee68092325f78287f5c9d32bdf4126c5618ff3e26cdb31e3276eeb43c6e4ab38180ee2f4d565429bc229cc92741bec3eee91eb5e1856664b2ae4596a683c985210f9f8596eda5be5666005c83cd48cf0bc5e668aaaeb2bf0dfcc1f6220cb1512c40803bf7fb4680c5105010000",
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
      "Fri, 08 May 2020 16:43:03 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-43-1588956132723",
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
      "000002ff8d54db6ea330107dcf5720f6b5cd05482095a26d94d0965542b684a45aad56c83803754b30c5a6abaacabfaf0db9c0a6aafa063373ce9c391efbbda528ea334937ea95a286247e29207ffbf64443f5426680a358667e20fd1ea6f7eb7c68d940e2dbadef0cd6f16854559112cdd0364be092d122c7c0ae56cb769cd3224339a59782f0d2d02f7b7dcb1af6073d5d3335bdc23248a219499f25c323e719bbea740e3ada31a571022823ac8de9f618efbc6a9d2ca74f8039eb34db764427d6f9bcf1f78462c4094d47ab6525a2609007b0452491324ee84d78dda46f13b46dc7a2fa95604018d322e5525a4583691a91b8c84b72c1f42e82225c6a3efed602ead29ed9135fc13429b66990a22d5c281bc451c0df32506ebcc55c71dc9b85371ffbcec20d96933b7b3e6e4f16b3d5dc5d2a0f77b6672b1c8509945865a45c977faef8291595dd36c038494b4dbeccd69488ecde47e783233c524812a18ac1be2c30bb03d4b3bac3300a4d1c597a3f8cba10865668f6911e76f1d000631302aa3394ca2a3c4a8551fa26c2bd68100ccc9e19188669062136f500c0b2b4503334cd18a87bf4ee380bce01719812965146f62eab13cf1efb76e0dc04ae6d4fede969f4bf3939ab7ef01c51ec7b2b772250759b2254247c5a0dda34a9313d177ed607fbccc1b301b29c5021aa3c7dc7f56d6f3cf19d754d8658c519c408bf2d5fe4324628617042a35c1c2d877c4e37f21c55773cafcf5b2ed6cf43111315bf8f3a4fe38842b92ee52c67ebd2ece38b3d6c58511d65155597bee7b8b76a2db9fb98668d92e2039ed77d58cd845b8fc261d6e06afdfff5a755eba18aabbd97a7deaf6cef97c4963999f120821c527ceafa854d97c02afd85974b941fde1189104fc9b13fe3222c2e1d66a7eee5e6ca2b482ae70f84966ef4b503a100e6fcbc62d0eb1d2acede12d90bb690f28317d59b5219b96b482a6a724a982c17f7c0dd1fe2aeb56bfd03f8fb645510060000",
    ],
    [
      "ETag",
      "Ja3QeDQVr98EeigGmTI6Vg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1588956132723"
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
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "7d",
      "ef",
      "af",
      "90",
      "ec55991ff563031fea749b4c9dd30a832112dbdb5ad7365d923a8af8df97a455fbe2284cd84b937bcfb939dc9b9ceeb552097d7aa18dee4b68edb95f31d0e4c605fe26373360b1cf99582212324065c9068e5dc96ee8fa8e25c6a6deeeb3c1cbe4f63d48a6b6dbeda62c666d20c082b71791881d0f7c9b89f843c5a52cafb01007204fb4881f07e14a85e533cc9348c17373369c3ce59180d80a992c4623a3371aa00c3a942f8bd898e3953af26f126a5d6a9918da92f50c1ca0105a70ee3aa2640b161faaf1321c443e541889a9052c13918529ec52124798125211a98adea8d49a9dce5db3556bd4dbf5c691ee130b738f84b2623147277d4e38f667e45b8e18b5d23ba069984efc380ae4e42e213f2101ed64b167a353ee50fe85389c982d3dc7cd764b2d575958554ccaf17c58fd93bab8920d162fbc9876f64cae248e031287bca0f4e3e8d5b862e3c20d459bee1be6e05ab28c0b2f14d43587e3c1dc34c6d38be2e2bb3c9ba0977060534a84c7182867d5aa7aa7d96e55d1d1a90f443a914ba3721a834a5b58fcb19e3d2e720ef6196807ed076aaa3b3d1d050000",
    ],
    [
      "ETag",
      "344vsyAh27DsEKN/XmyPdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ?",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1588956132723",
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
      "02ffa555ff6f9a4014ffddbf82b05fb6a42a020a36693aa3b463b16811db2ccba2071cf45ae4e8ddd1cd35feefbb03548cae69b6dfe4bdf7f9f2dedd3d5f1b92243fa13494cf25d947f1730ec9fac323f6e53391810cc422e3b2af33dd7c1c58d3e7def5fa97723bbdfffd30b8b828ab5081a6609525b049714e0248cfe7b3564c709e01827193133675bdd9e99a66bfdbeb68aaa16a2596c2241aa3f449303c3096d1f3767beba315631c27106488b602bcdac5db2f6a3b23f811068cb60f65db5c89b6df16be4c700018c2e9c57c569ac829240bb802281136f6e8d0ff7c48df4260d58a79f50b0a2008029ca74c582b69029c4628ce4941ce995e7990870bcfbbcf5a409e59636be849c3c9dcf13e2ec14ad02d3f49804a8b0581344f9874e54e6ea465c6d51f00857429dd7fb15c8b47088e500217285c4a17d2a534704692b40c0183c57761a8100b2165282d2c79c04f60cd08cf5663b44f9ce08e429000c6d5abb285a1f440c754fa7ee41b41646a5d3f52a0ef9bbed1059aaf047d1deaa10f419d8109ed120f529c82483723bfab285d3f8430348dae6f74744deb69a6a6f2940243a3af1a1db962d8ecfa0908e44d8e10cd3045d5a0e5a16b0d3c6b615f2d1ccb1a59a37dfb3f093aaabe776d5eecb97367c851f5514580cf7c54367b38a88309303ed37a736f4df1a8818c20cc4d1517c0763ccb1d0c3dfbae6683dfc6318c41b09e3d8bfb188184c23d1a10b0820c921b1c8ab394a79399edd9136730de3314176cbaada4bcecfbceecbea73a9bb7ce0e6f4679686554d8ece9722db7393bc9720792fc04cd4b15963b071c8d136cffe26e240ef1ffcda98aaa341595ef8abfb8ac7efd68d44464be602a77f2eddc72bf096c911319174690c034d8cbbee3c10960997ec7fee4e5db6d26107ca1edf429e361fef603ba572f1e8fd80468551e484568eafc296e093990b0e30a2ebbad38da68420bae60cab6b32837",
      "5b39c8cd81a5bc66a78015ff2f73c7b19debc27c63d3f8038501ea0e96060000",
    ],
    [
      "ETag",
      "RtJS48jAEPq6Gyx0QPWzhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d515d4fc230147ddfaf58eaab4be46382263c8801259944a6188d5948d92e7363db1d6d2741b2ff6e3f36e0a5ed39e7dede9ed3a365db649b1411b9b7c93a897715b0c3550c62a10e3ef02a135c6e25161cc8b5aa06416355fd11f9bd62f7f5f792f60763ef13b7d3e9d65d8c46a68a873f905359779448e24d0259c425fed6d86e78ad15340775e36ac5f4407d43a38943a9b5d9fc7df234f12fa51c232dcd979ef730f626a4916abd0772adf553525cfbb001064508e707950c5308c54c3be7342f337038562c04de0c518d468e19562565888ea49c7edfe9b8c3e19d7bdbe97507dd5e5b9e6148458285ea58be91d37c8182663eee957bd231f130034d186d14647391cf654252fa35cd27aa6e4e81d5a2e03c6c7c10c05f194a2f1cb4831bd246f188caaa5049085681a6432a7feb39110d67d5d63f117d27cd18020000",
    ],
    [
      "ETag",
      "VdR3nqYzMj47BLXokFFk5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "dd",
      "72",
      "43",
      "40",
      "18",
      "00",
      "d077d9ebc8c456137a4782185d9268513706fbb1a87f8a64faeecdf4bcc179a028496018c2b129a1466f688db0b44db666232a6b06757733af39ef67642f67a3654151b6ed07e3bfebd8d517c76e9840ef9212ad7c09ee19c654abb125d2dcf09874f0794508f46e4f08d09846a7b2721c5e35de1d8e199ccba6e98c07efa02d0117e6f9fd448f7e07c2ed732a12635eb03db3cada35a91a7a2aa69729d0a66aae2ab3c4b2e65981d87585c05d7faa7ed70ecb458f0991cb3696cd2f3b5503428e046d102c6ddec310e6cfd9cbab246dd07f331cd7169e5705a21e7af4fb07129d572805010000",
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
      "Fri, 08 May 2020 16:43:04 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-45-1588956132723",
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
      "6e",
      "9b",
      "40",
      "107df75720fad8d8f8868d23598d65931ac9c60dc649abaa42cb7a209b004bd8256914f9dfbb0bbe401d4579839973ce9c999dddb786a2a88f24d9aa978aea93f02987ecf5cb03f5d50b99018e4299c93594d0e4ebea259d0d37f39f68be59c57f6fc6e312450a3643711a4193d13cc3c02e37eb5698d13c4519a54d21d8ecebcd8e6e18237dd0e97587dd5ec96510050b923c4a857bce5376a969071fad90d230029412d6c2343ec6b5e7ae9666f40130675abdac262a31ede3c2df228a112734196fd6a5899c41e6418c48246d9cd85bffaa2edf22286e8502fd4c30208c699e7069ad94c1340948986785b8507a1341112e3c1f7f2b01756d2ecca9ab601ae571e22528860b658b38f2f86b0acab5b35a2a967dbd729613d75ad9de7a3a379793d674b5d82cedb57237371d53e1c88fa0e02a63e5aaf8b3c54fe1a8a8b605c64952787265b6e24464f773b4de39c2a3841411ae18ec61deb03d401da33df2037f8803a3a7fb411b7cdff0873aeaf96d3cea437feb03aa2a14ce4abedc251d75475dddd0bd5e07c0ebf7f4a137328c81a7630cdd5e6724240d75cfde1d7bc119200e33c252cac87ecaead43127aee959d79e6d9a3373766afd252367e83bc71260d7d9d853c1aa8e294079c46765a3f521d5bae7629ed5c63e9ae059036946a830559cbe65bba63399bad66dc58658c5058408bfae9fe4320628627062a34c1c2d876c49b7f21c557bb2acf65b2cd68f038809c4efa3cf533b0228d7a5e8e56c5dea755cb187b55194475946d5b5eb58f677b592dcbd2f738ba2fc1d9de77d584dc5b4eec584594dabf1ffd79f46a5862aaef6de9e",
      "7ab3319d5f925be464c681003248f0a9ea27365d12cbf4275e2e013fbc2392219e92637dc645585c3acc4ed58bcd95579094933f081a7aa73d3c080a62c6cf11dd4efb80387b4b642d8821e18759946f4a39c85dcd525eb153d0245cdc037b7f88bbc6aef10f880cf70b10060000",
    ],
    [
      "ETag",
      "u/anon+OwpD7UHXaHUOmxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1588956132723"
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
      "5d",
      "4fc230147ddfaf20f51512f918a0890fa8a88b800833f12384d4ed0e86dbee6c3b1109ffddb61bb017cd12497c597bef39b727f7b6676ba354226f7ee492d31279f567ef09b0d5d10cc4bdda8c802781e0728931e240ca8a0d82ce14fbf1cbae63ffa9f1f94c930bcb1adfae5ab1b93c3b4b59dc994348256f2d23197b3e042e97f18b8e4b595e63110d419de8609084d15487e53d2c56b186c7f6c81a5ce791105d8d0c1e7abdce79af4b326853fe59c4a5824ef5917f93d0ebc4c8c4c8025f47e00183c8817dd731c30538c2d2e3e5348c03a8704c98033c135185293c6398c494215664aad2302b55b3dd3e319bd57aad55ab6fe9013a54f818a98a8731d9e90b143418e1528d9834d33b6069984e7c3b0ae2e52e213f21097da862df25bbdca6fc0bd11ad8cd468e9bed2646aeb2b0aa9c94e70730fd27757925732a5f7831edec991c489c869844a2a0f455efae73c0c6a51b8a367dd9b1bb8792e5427aa1a0ae6df5bb63bbd31ffe282ebf93bd09ce5702f890a1f41807edacea71a36db69ac764ebd40b544e14caa88225a0d30e957fac1b5fc89c47030ec6c6f8062a51fc621d050000",
    ],
    [
      "ETag",
      "XzT3oMY4xZauCIISKy7p5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ?",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1588956132723",
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
      "ad",
      "54",
      "5b",
      "6f9b30147ecfaf40ec65939670c90d22455d94d00e29b711d2aa9ba6c41843dd02a6d8a4aaaafcf7d9900b51b2aa9af606e79cef728eedf3569324f90927bedc93640f87cf39ca5e3f3d124ffe2a32888150645e14406fd8ed86e6f73307cebd7b682bddb0df2fab7081a6204e2354a724cf20a2bde5a21166244f4146489d13d65b9dbad6360cb3ddd19a7a576f96588aa2608c9327c1f0c0584a7b8ab2f7d10809092304524c1b90c487b8b2d19534238f0832aa9cca2a5c892aef0b5f4504028649d25f2e4a133945d90ac50047c2c611ed7bdf4ee91b18c48d90576f3044004292274c582b692049021ce65941ce99de7890870bcf87df4a405e58636be84ac3d972ea7e5e8358d0adbf48804aab5586681e31e9da994da475cad51f0045742ddd7db71c8b473212e008adb0bf96fad29534988e24694d19b75b040a47859a8f28c349e1c9055e842a4e78763747fbc2111e280409605c7e57b6eaaa1da019aae9055e170646b3ed052af23cc3ebb641d353a1d9422ddf43a0cac0847689070949f841182da0b67dddece8bed9093ca3854cd5083c13f901ea7681e1b52000f28e617be80766083034c2342514ef262d0f1d6be05a2bfb7a35b5ac91353ab6ff92e1b3ea3bc7e6c5aeb39c0e39aa3aaa00f0a18fca664f07753201c6675a6deebd299e359066987053c50db0a7aee50c86ae7d5bb1c1afe3188500be2e9ec5850c4044d1110d32102386b209f1c559caf3d9c276edd974303e3214376cbeafa4bcecd7c1ecb1a72a9bfb9a9ede8cf2d0caa8b0d969c995dcf6eb45965b10e5176836bbb0ac9d70d42eb0fd8b3bd79e580b773099ff0787baaaab7555e71bc3d5f49ed6ec69ad86aaaa3fff627cf7f5bb569194f9d2d919967f2c2d",
      "e75e608b9cc8382840194ae0d1c407dea00096e90fec545ebedf7002c197dc419fef0786f93a80f4a85ebc27b11c705c9ed18ed0689b86b927e4c08c9d557434f52079b6e584168a51c2f6b328b75d39c8ed89a5bc62a7808972fe3aa7f6f4a6305fdbd6fe0099929f24aa060000",
    ],
    [
      "ETag",
      "w/asGtVvsuYORcPbYcI/7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1588956132723"
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
      "ff4d51d14ec230147ddf572cf5d5250232c18407415464216ec8831a42ca7699c56d77b49d6621fb77db6e035eda9e73eeeded393d5ab64d7e5816917b9b6c597c2880975731485f1f0210452285da72cc04906b5d0d92c6bafad0753f26cbe8f3691cccd9d07f85f963c0fcd1a8ae12e137a454d51d155278c7208984c25f06db0d6fb48ca6a06fdc6cb819686e683459e6469b2ddea7cfd3e0524a3132d262e5790f636f4a1aa932fb5aad9579ca1eb701ec804316c2f94139c73d8472669c0b9ae60938020b1e826886e8c65a8e391639e5888ea29c5bd7e9f4078361dfedf4ba77dd5e5b9e604825c34c77ac96e4345fa2a449807fda3de9d4f1f01ad661b45190dd453e970929e9b76e3e5155735a5b2d5a9f878d4b09e28da3f222c038b8216d1413d456a54e42f2020c1d52f55b2f4c369c5559ffb9462d2018020000",
    ],
    [
      "ETag",
      "q26YCSdZFBRKi9QJeKDRiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb642d8e88fcba43b05228a006c47193892440481508c8a79ddebd4edf0dde0fc05946bb0ef535a70ff00666bc3697d9d2af8ded5cd06b94b86da53b016bcb5c1aede39d07efc38cee4e478de8743c8832b64e952f69c6a7fcd028744a999d2b46b014d875aa6fa65a251f044ea109e5620375e3c9e2c672bbbd9a372dee5b2be75cb1f2b06c0e9e504274f3321eed58326bd6ce184b7af59d3322a29fc60bfc56cb567c05859aa81708b783b722ebf449ba292576eeda371d672bab722536c4fb8673b000746a98a01d62af99a29ae602fc37513f37f475dd522ca800bf7fad386eea05010000",
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
      "Fri, 08 May 2020 16:43:06 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-47-1588956132723",
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
      "6e",
      "a3",
      "30",
      "107dcf5720f6b5b9358140a5681b25b4451bc82e21ad56ab15328ea16e09a6b6e94555fe7d6d930b6caaaa6f3073ce9933e3b1df5b9aa63fe27cad5f687a8cd3a712d1b76f0f24d6cf64067190ca4c9abe5a78e015aff8fa6ec508a43366fe78198f2b14566c06364586da8c94142276b15a76524aca025042da42b03d1cb5fb8665d986d91f9c8fce071597a12c99e3fc512adc735eb08b6e77efa3931292660814987520d91ce2dde7f36e41c903829c759b65bba212eb7e5ef87b4620e098e4e3d5b23251324423b4013853cd1ed8ebf8b229dfc160d34905fa194304202465cea5b54a06923cc1694995b8507a174111569e0fbfb580be74e6ce34d420c9ca4d1ee56083ceb435e020e26f05d2ae8285a7b9fed522f026a1bbf0a3e5f4c6f1269de962bef2fca57677e3048ec6419c21c5d5c6daa5faf3c58f72a4aaad11e338579e4299ad3911d9dd1cdd0f8ef0202145842b8676b068d43341dfead971128f60620d8c38e9a138b6e2910106710fda43345cc708d41594b38a0f7292f707760ca0358cfabd5e120dfbc08cecd81c46866d9beba195d8a665ea3bf6f6d00ba4087034c3ac200cefa6ac4f0367123a917b15f98e337366c7d65f283e41df05ae0087c1ca9f0a567d4c0928333eab1a6d0ea9d13d17f3ac37f6d9044f1a282826c2943a7dd70f9d60320ddddb9a0db18a739402f8b67c92cb98808ca1231b5071b41c518face539eafec4abf7ab16ebe71ec404e2cfc1e7b11d0194eba27a395997669d50ec616314d55156517d1906ae7fadd792db8f656e41567ea0f3bc0beb8598d6bd98306b68b5fefffadbaad5d0c5d5ded9",
      "d37fad9ce0b7e4aa9ccc04284114e5f058f50b9b2e8955fa0b2f9780efdf11c9104fc9a13ee3222c2e1d64c7ea6a73e515c4d5e4f782966918d65e5010293f459896b1479cbc25b216daa09cef6751bd29d520b70d4b65cd8ea249b8b807feee10b7ad6deb1f952ac1b310060000",
    ],
    [
      "ETag",
      "ggx8i3MpxiGWUsocrDs6Kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1588956132723"
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
      "5d",
      "6f",
      "82",
      "30147de75798ee5533bf40b7c407dddc64714c119f16632a5c140794b5658b31fef7b5059517179299ec85f6de736e4fee6d0f7bad52411f41eca1fb0a5a05ebcf14e8ee660d7c2a3736b034e44c2c098919a0aa6403c76bc91e25f591d5b2daad3a7f496fbbba3ea1ee6cdaeb652ce66e20c282b7179188fd00428f89f85dc5953cafb01847204f74499846f15285d533cc778982678e6d5acf4524229e42acf978dc1f8c8728870ed5cb221ee678a98efc9b845a175a2e86b66465830f146217ce5d27946cc1e5a61a2fc35112428d9194bac072115998c16b4ad20453426a22556b776a0dbddbbdd38d46abd969b68ef490b89807249615f3193ae973c27168936f396264647740b3309bf87114c82f5c42714202fa92c581874eb943f517a2693946bbc0cd770bad50595a554cca0f4258fe93bab8920d162fbc9c76fe4cae248e2392c6bca4f4d3f8ad7fc5c6851bca36fdd87786d792655c78a1a4ae63be0e674eff7572515c7c1767130c761cd88412e13106ca598d7abbab778c3a3a3af58148277269544e535069178b3fd628e022e7e3908176d07e006e2f509b1d050000",
    ],
    [
      "ETag",
      "Hp0HN3N430tJu/855PrcSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ?",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1588956132723",
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
      "ad",
      "54",
      "5f",
      "6f",
      "a2",
      "40",
      "10",
      "7f",
      "f7",
      "53",
      "10eee52ea9a2080a4d4ccf28ed91586c11dbb4978b2ecb42b74596b24baf4de377bf5d40c5e835cde5de60667e7f667677de1b92243fe124904f25d9c7d1738eb2b72f8fc4974f4406311089ccf0c102f1ddb51a69caebeb8539d2efefad5934189455b84053b04a63d4a424cf20a2a7f3592bca489e828c9026276c6a46b3a31b86a9f73a5db5af764b2c457138c1c9936078602ca5a78ab2f1d18a08896204524c5b90acb671e54555d28c3c22c8a8b22fab7025aa7c2c7c1613081826c9603e2b4de414650bb40238163676e8c0ffbe4fdfc260d58a78f50b86084048f284096b250d244988a33c2bc839d33b0ff270e179fb5b0bc8336b628d3c69349d3bded7255809bae537095069b1c810cd63269dbbd34b699972f50740115d4ab73f2cd7e2918c8438460b1c2ca58174260d9db1246d2844a4b054c80588329c14a63ce0c7a8668567ab41da47ce704b214800e3fa55d9a2dfee818ed136fdd0efc3d0e8ea7ed846be6ff87d1d74fd363435a4053e02750626b44b3c4848d20f74d550c3200c34a09a9a19020d6a661ba83a42d0807ed0d343d30c3a72c5b0def6033304181a639a128aab51cb23d71a7ad6c23e5f389635b6c6bbf67f67f8a0fad6b579b1e7ce9d1147d54715023ef571d9ecfea0f626c0f84cebcd7d34c58306d20c136eaab802b6e359ee70e4d937351bfc3e4e5004e0dbec59dcc810c414edd020032bc4507649027196f2d574667bf6d4194e760cc515bbda54525ef6736b76d753",
      "9dcd7b4bf76f4679686554d8ec69722db73e39ca7203e2fc08cd4b15963b7b1c8d236cffe2ee7c321dfe277f2d5dfb8bc5eaeb57a3462ff3fd525993afe7967b27b0454e645c14a20c257027f889d7268065fa13eb93976f969940f07db6d5a78c87f9c38774a75ebc1cb106f0aaecb62234fa9a666c0839306387157abfb3a9385868420bad50c236b328175b39c8f59ea5bc66a7808972fe0e1ddbb928cc37d68d3fb31c41e095060000",
    ],
    [
      "ETag",
      "AhEalYQ2g4/xxG9C5ZZESg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1588956132723"
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
      "000002ff4d51d14e8330147de72b487d9544865334d98333cb242e734397989865e9e00e99c0c5f6324316feddb6c0b697b6e79c7b7b7b4e8f966db39fb488d9a3cdb669f25b81a8af12a0a53e8420ab8ca4da4a2c24b06b5d0dc4135d1df8ae98a66f8957be2ec83b0441fde9c6cbd1a8ad92d137e45cd51d1552789742164b85bf0cb63bde6805cf41dfb8d90833d0dcd0695497460be61f93e924bc94728c8d345fcd664fe3d984755263f6b55a1bf3943d6e43d881802282f3834a817b882830ce25cfcb0c1c89958840764374632b2702ab920b444751ceadefb843df7f18deb9dee07ee0f5e519469c522c74c7ea9d9de61312cf42fcd3ee99dbc6235ad886d147c17617f95c26a4a4836e1eb013d574a7b5d5a3f579d8b826900b81ca8b04e3e086f5513ca3b64a3a091215183ae2eab75e52ea38abb1fe0158eec36d18020000",
    ],
    [
      "ETag",
      "I81rGiOg3pKPt3vIIyX1dQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb642d0e012da4bb64c022ad82a068bb6180868fe113432ca49ddebd4edf0dde0fc88a828e632a07467bf00c5466a065b17c1d6ca2aa527356dd77241337bfee7845cc827de97b08f9dbc4a564a1d360bfc795e95d5e94de8b3638312d90340ba035419318497c8de699ef2cb2911516e2807574f036f6538db420b1b3dc95f7ccd7240c8fad547bfe79a1346ecf71ed8fb372c5368f48b7e2ebb23378c4474b1fb0c3ca987637a826fda610eba37388613a2b8391eeee4ec7778f595b8bd41fe4041680cebc11744c9bc7cc5c23b400ffcd542a4e1f5742334105f8fd0323cf92dc05010000",
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
      "Fri, 08 May 2020 16:43:07 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-49-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d54db6ea330107dcf5720f6719b3b69924ad1364ae81629215d42dabd68858c31d45dc0149b56dd2affbe63930b6caaaa6f3033e7cc99e3b15f1b9aa6ffa169a05f68ba4fa3c782e42f9f1e98af9fc90c112892199e2cb3ebef9f839fcf7f4d9c17f33bf4707d339d4cca2aaad01c25594c9a9c153926fc62b36e45392b329433d604c2a6316e7607a3d17870deedf786bd7e89e5240e1734fd2319ee85c8f845bbbdd7d18a188b628232ca5b98258778fba9d7ce72f640b0e0ed7adb3674e2edf71b7f89194682b274b25997220a4e728f2488c652c6111df89775fa1645492b82ea278a09c29815a990d24a1accd2904645aec881e9158210569a0fbf9580be3617e6ccd5308b8b24f5529490332d400279e22523da95b35a6a967db5729653d75ad9de7a766d2ea7add96ab159da6bedeeda744c4d203f260aab4db44bf567c38f52a4ba05840b9a2a4daecc56944076e7a3f5c6111e282409a8e26457e60d3be7a83bea8cfdd01fe270d41ff86187f8fec81f0e50dfefe0b1418cc027a8caa094957894b234087b06a0065edf47c4338c61e88d830ef60c48f4fc6117d286be436f0fb3e09c2041e694678cd39dcbfacc31a7aee959579e6d9a73737e1cfd39a727d5778e05c5aeb3b16780aada14a22216f372d0ba49b5e905f8591dec3d074f06c872ca40943a7dcb764d673a73addb8a0c58c50589107e593fca650c51ccc9118d72385a41f2250be439eaf674599d572dd6cdbe8843c5af83cee3385028d745cd72b22ef53e2eec61cd8af228cba8be761dcbfeaa5792dbb7696e515cbcc1f3b40beb19b8750f0ef31a57e3ffafdf8d4a0f1daef64e9efe6d633a3f2456e564c62121c9498a8f5d3fb0e91258a63ff07241f9fe1d9108784a0efdb980305c3acc8fddd5e6ca2b484be7f784a351c73810023017a7155da3bbaf38794b642f929054ecbd28df94d2c86d4d525191a360b21cee81bd3bc46d63dbf8077c4df0f810060000",
    ],
    [
      "ETag",
      "smMpHX+dZwzEcruDWajHPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1588956132723"
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
      "cb",
      "6e",
      "c23010bce72b907b0589f7a31287d0068a04944750452b844cb281d0244e6da72d42fc7b6d27402e54918ad44becdd99f568d79e1cb45c0ebdbb818dee7368ed6e3e22a0fbbb0df089dc4c81451e67620949c000e5251b38de48b63179fdde8f8bb579c7ea61e365b1e836cb43bddd8e59ccda828f05ef2022113b2e783613f19b8a73495e6101f6419e68112ff283950af31798ef4305cfcc697fd44b233eb115329a0f067a6760a0043ae6af8bd898e3953af26f126a5d6a8918da91f5141ca0105870e93aa4640716efabf132ec871e141889a8052c11918531bca1240a3125a42052856aab50aa359bad5abd542937ca9513dd2316e62e0964c57c86cefa9c70ec4dc9971c31aac77740e3309ef86914c8495d427a4202fa94c5ae8dceb963fe17627f64d6ab296eb25b6aa9caccaa62528eebc1ea9fd4c5956cb178e1d9b49367722371ec9328e019a5bb8367fd868d0b37646dfa51378d5bc9322ebc9051d7ec0f8d99a90fc757c5c57779314167cf818d29111e63a09c552a569bb546bd884e4e7d20d2895c1a95d30854dac2e28ff5e4729173b0c7403b6a3f933a68941d050000",
    ],
    [
      "ETag",
      "EQZxyP05UBcGaEWYYF82MA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` != ?",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1588956132723",
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
      "c5",
      "54",
      "5d",
      "6f9b30147dcfaf60ec65d3960f42f848a5aa8b12ba32a5a423a459374d893126750b9862d3aeaafadf67034940e9aabeed0dee3df79c73afedfbd49224f91627817c24c93ededce5287b7c7f437cf9b3c820063622a32b9f96a67ee5ea3f2de56cf4e76286bffd583e1c1f97285c545310a7116a53926710d1a3c5bcb3c9489e828c9036276c6bbdb6a299e650d315b56ff4d5b296a2289ce2e456305c3396d2a36e77eba3b3216413219062da8124dec5bbf7fd6e9a911b0419ed3665bb5c89765f173e8908040c93e478312f4de414652b14031c091bfbeac0ffd2a4ef601077361c7d8f210210923c61c25a49034912e24d9e15e49ce9890779b8f0bcfbad05e4b935b5c69e349e2d1cefc31ac4826efd5102545aad3244f38849a7eeec5c5aa75cfd1a5044d7d2f2cc722d1ec9488823b4c2c15a3a964ea4913391a4b5f87bc77f0b3f85568028c349e1c8037e846a3e78b69aa2fdc201ee280409605cbc82ad8c9e0e14b337f443df80a1a96a7ed843be6ffa860654bf07870334087c04ea0c4c6897f5202149cf37c340ed870682c0d09400a87dc537c0504710a9baa119bea686011cc815c3f3ae1f9821c0d004d394505ccd591ebbd6c8b356f6e9cab1ac8935d9b7ff90e103f4d2b539d87317ce9857d54715023ef249d96c73508d09303ed37a73af4df1a08134c3849b2acedf763ccb1d8d3dfbb266835fc629da00f838bf13d731041145fb6a90811831949d93409ca57c319bdb9e3d7346d33d4371bf2eb648ca61bf7666f73dd5d9bcc7b47933ca432ba3c2a6be3b8a46374d964b10e52fd0dc5761596970b45e60fbafeeb47fd8abbe7eb76ae4325f2c952df9fbc272af446d9113191785284309dccbbde1a589c232fd86bdc9e1db2d262af822db",
      "e953c6c3fcd143ba572f5e8d580138ae7a2d094dd31ce85b425e98b143c450d7b688834d26b4508c12b69d45b9d1ca413e372ce5353b459980f337e8d8ced7c27cebb9f5174d52030b8e060000",
    ],
    [
      "ETag",
      "61+W86YR6ZE1HAxPOiJXWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1588956132723"
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
      "4d",
      "51",
      "d1",
      "4e",
      "c230147ddf572cf5d5250c9ca2090f208844441df2a221a4747773b8ed8eb6932c64ff6edb6dc04bdb73cebdbd3da747cbb6c96f9c05e4c126db38da17c0cbab08e4873ef8208a440ab5e5980920d7ba1a248d74350ba3f1d33e60fbf15bf9faf275f06f96bde97030a8ab04fb8194aabaa3420a8731248150f8db60bbe18d96d114f48d9b0d3703cd0d8d26cbdc68b3c5e7643af12fa51403232d56f3f970349f9046aaccbe566b659eb2c3ad0f2170c8189c1f9473dc019333e35cd0344fc011587006a219a21b6b39e258e494233a8a72bc8ee37afdfebd77ebf6ba77dd5e5b9e20a332c64c77ac96e4345fa2a4898f07ed9eb8753cbc8675186d1424bcc8e7322125fde9668f9ca8aa39adad16adcfc346a504f1ce517911601c74481bc5236aab5227217901866654fdd6732c1bceaaac7ff462513718020000",
    ],
    [
      "ETag",
      "cfgDFqdcqDOyMKZwR4S3GA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "92",
      "43300000d07fc973dba1a1c3beb9942965ac56a9179325564a09b188cefefb76f6fcc1790194e798b16cec6adc820fc0d15edde53bb75374fe5d3c92cad228439abc2445049d1c92c5d64dc5a63212fab08450ddd706a597cffb8859af3ec9d93b99bebc6e5d7bb4c4b98b073b4dab560bc4a9d2046874d6bdfc92e44366a2a5bcad61501fecc1d1d7ac24fd945c8bd1a6a4152b6fef44ad7819913f37be0f3dfe8c4e309a8e057d08579857bc5218e76de219e636c098dca4466f62f74ce261367ef43494bc23d800bc5032609691f70ccaaaba01ffcd6ce414bfaf3a46031ec0ef1f304e55cc05010000",
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
      "Fri, 08 May 2020 16:43:09 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-51-1588956132723",
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
      "0002ff8d54db6ee230107de72ba2ec6bb9060254425b04e9362b086d08edae56abc83193d46d88d3d8a1aa2afe7d6d874bb254555f10999973e6ccf1d8ef354dd39f49b2d62f353d20d14b0ed9dbb7271ae81732031c45328309ffd98d71d7026f6b74da77f7e8f6e9d7dd6854541185666893c6506734cf30b0cbd5b21165344f5146695d10d67bed7abb37180c7b66dbe8f43b468165108733923c4b8647ce5376d96c1e7434224aa318504a5803d3cd31dedc769a69469f0073d6acb66d8a4eacf979e3ef31c588139a8c56cb4244ce20f36183482c659cd0ebe0aa4adf2068d38844f596604018d33ce1525a418369129228cf14b9607a174111569a8f9fa580beb466d6c4d3308df34de227680317da1a71e4f3b714b46b7731d76ce77ae1cec79ebd70fce5e4c69a8f1b93c56c357796dac38de55a1a47410c0aab8db42bf5e5880fa548755b03e324519a3c992d2911d9bd8ff6074778a490244215837d99df6f99a83d680d8330e8e37060f482b005413008fa3d64042d3cec42771d002a332865051e2534c141cf30bae1c0374d64f85d130f7d01001f70db348dc034ba06d2f7e8dd71169c01e230252ca58cec5dd627ae35f62cdfbef61dcb9a5ad3d3e8af1939ab7e706d51ecb92b672250659b4294c77c5a0c5a35a9323d177e9607fbccc1b301d28c50214a9dbeed78963b9e78f67d498658c5194408bf2d5fe4328628667042a34c1c2d876c4ed7f21c75673c2fcfab16ebf650c444c59fa3ced338a250ae8b9ae56c5daa7d3cb187152b8aa32ca2fad2736de7875e4aee3ea6b94771fe01cf761fd653e1d6a3709855b86afffffb5b2bf5d0c5d5decbd3ef5696fb5b62554e665c082183049fba7e61d325b0487fe1e512e587774422c45372eccfb8088b4b87d9a9bbda5c790549e1fc8150fc18c303a10066fcbcc2ecf50f15676f89ec051b48f8c18be24d298cdc5524e525390a26cbc53d70f687b8abed6aff00d4d98b2810060000",
    ],
    [
      "ETag",
      "citJ4lc4EeTv321QVaPjXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1588956132723"
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
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "5798ee5513f17b4b7cc00da78b3a87983d2cc654b8280a94b5658b31fef7b5059517179299ec85f6de736e4fee6d0f07ad54423b3f72d14309adfcf56702747fb706fe263716b024e04c2c318918a0b26403c76bc91ebfbf58567d6e0276074e7fb7734d7d3631badd94c59c0d8458f00e2212b1e743e032117fa8b894e51516e110e4890e0992305aaab07c81f93e56f0ccb68693e73c1212572193f96864f44626caa063f9ba888b395eaa23ff26a1d6859689a12d5959e00185c8814bd731255b70f8508d97e1300ea0c248421d6099882c4ce13525498c29211591aa34f58adeec74ee9b2dbd5e6bd7ea277a401ccc7d12c98af90c9df539e138b0c8b71c316aa57740d3309df86914c8cb5d427e4202fa92c5be8bceb963f917e27062b71a396eb65b68b9cac2aa62529e1fc0f29fd4c5956cb078e1c5b4b3677223711c9224e205a5fba357e3868d0b37146dfac9b0cd5bc9322ebc5050d71e8ecd996d8ca757c5c5777131416fcf814d29111e63a09ca5571b9d66bb554527a73e12e9442e8dca69022aed60f1c71af85ce43c1c30d08eda0f7006db5d1d050000",
    ],
    [
      "ETag",
      "MWJRR3UEeadHcFkkdE1SNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1588956132723",
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
      "ad",
      "54ef6f9a4018feee5fc1d8972da90a228a4d4c67946e24165bc436cbb2e80107bd16387a7774e91afff7dd010a46d734cb3e98e0fb3eeff33eef8f7b5f5b92243fa23490cf25d943d1530ec9cbc707ecc967c203198884c7247470a34ef3d072ae275a12aa9afbfbe1663c2e51a888a620c962d8a638273ea4e7ab65272238cf00c1b8cd09db7aafadea8631d207aad61bf6b43296c2389ca3f45130dc3396d1f36e77a7a313611cc5106488767c9ceceddde75e3723f801fa8c760fd3767926da7d3bf1458c7dc0104ec7ab652922a790ac6102502c64d4d181f7e590be8340d28938fa19f910f83ece5326a495343e4e4314e5a420e74cafdcc8cd85e6fddf86415e9a7373ea4ad3c5ca763f6d4022e8369f2540a5f59a409ac74cba741657d226e3d9ef01857423dd7d331d935b080e510cd728d84863e9429ad833a9c66da40fdc58a82a320690329416ba5ce0c5b0a1867bab5e5a27c6b8a710248071ea0ab61e2a03a01acac80bbda11f1a9aee850af43cc31bea40f3147fd487fdc083a0c9c044ee321ea438d5c2a1a1a8bd500f0dc50846ca60d05702cd500050744d1968de48e1bfa12e570cdb7d3d3e8180c119a219a6a8eab63c75cc896baeadcbb56d9a33735697ff8ba023f49d6371b0ebacec298f6ab62a04bcf1b3b2d8c3461d7480f19e368b7bab8b47056404612eaad802cb764d673275addb860cbe92731801ff65f924963204318575342020810c922b1c8859cad78ba5e55a0b7b32af198a2dbbde212987fdd88bad6b6ab2b92fd9e16694432bad42e6a02f377cdbb3932cb720ce4fd03c5766593de0689d60fb17754bd7b1ecafff41de24e383fb8bc4eaeb67abc12ff3135349936f56a6f35dc4163ee1716008094cfd3ae33b5e9b082cddefb8a01cbebb6722829fb47d7ecab8993f7c9fd6d98b9723",
      "ce004aca69548423a5aff677843c90b06384de1fed1047374de482094cd9ae17e56d2b1bb93d909437e4146102cedfa15d0d70dbdab6fe003cbfe82a98060000",
    ],
    [
      "ETag",
      "Ers6Q1CufIRPA3mf13TzjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff4d51d16e8230147de72b48f7b8910d1dea96f83017b2b910a34c1fb685988a570481cbda32430cffbeb680fad2f69c736f6fcfe9c9304d7288f32d7936c9268e7e4b60d54d0462a10e3ef032155c6e05e61cc89daa064123559d2d6f13cff9f89aeebfe7c9e13ecb8f037bb2188f9b2a1eee21a3b2ee2491c4bb18d22d97f84763b3e5b596d30cd48deb35d303f50dad26aa426bd3d9d27d73fd6b29c3ad96662bcf7b99782e69a55aef815c6bfd9404373eec80411ec2e54105c3044231d5ce39cd8a142c8e250b81b743546323470ccb8232444b5296d3b36c67347a720676bf37ecf5bbf214432a62cc55c7ea939ce70b1434f5f1a8dc13bb898735b009a38b82ecaef2b94e484a7faaf9919ca9ba3d05468782cbb0492580cf194a2f1cb48307d245f18acaaa5049085682a6432a7feb3d162d67d4c63f2498cded18020000",
    ],
    [
      "ETag",
      "mT+jL5JYIhZPjk/mnw61BQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcfdb4e83300000d07fe9f3b2205001df4a15066c6c2892b62f0d9782b0b042619161fc77895f70727e405e96629af82cafe2065ec023d79d7db98fa4ed3e9abad6aa77798b3b5d267841aca97968b538626b16b6ebdcc1e890ac4f049bbc5f58f29d7a3c9cb846979179759a94f0d99e1521f0141c6d13c57ca5f878377d8e7acce626ad0d690955a17b89ab30b746ead924b8f8ab5b9c74ac2c04352825ee37969efbdcff429f61561d8c6a3aa7dad00e3e95fe98157180bb8fb7a9092c7c2185cdc8eb7a7511ed29d801b10cad12136fb799011d6707fe9b7c7e0c62bbba22574281df3f8747092905010000",
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
      "Fri, 08 May 2020 16:43:10 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-53-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545d6fe230107ce75744b9d7424203042aa12b82708d04e11a42abea748a6ce3a46e439cc60e27aee2bf9fedf0911c55d5b76477667676bdf67b43d3f45792aef51b4d87247e2b70befbf642a17e253398835866686cc3d1dfceebf4058d4cebf1c9daddc7e07e382c5144b119d864096e325ae408b39bd5b215e7b4c8404e69530836bb56b3ddedf707dd5edbbab6afad92cb7012cd48fa2a159e39cfd88d611c7db4624ae304838cb016a29b53dcd85e1b594e5f30e2cca897354425667c5ef87b4211e084a6c3d5b23451309c87780348226d9cd96b785b976f11b069c502bd2508038468917269ad9441348d485ce44a5c28bd8ba0082bcfa7df4a405f3a33671c688826c5260d53b0c157da1a7010f25d86b5a9bf986bae375df8f351e02ebc7039be73e6a3d678315bcdbda5f678e7f88ec6014cb0e26a43ed56fd79e2473952d5d69871922a4f81cc569c88ec618eee074778929022c215c30758689b3dd0ee9b0318411b457dab0b231343d887761758d044830eeeac21065505e5ace48394a6600d2300ba30ec45562fec00138710f43ba1dd893aedae19a128b2f5037b7fea05e518703c212ca38c1ca6ac8f7d671438a13b0d3dc799389373eb7f7272817ef45d010efc953716acea982250247c52365a1f52ad7b2ee6596decb3095e3490e5840a53eaf45d2f70fcd138701f2a36c42ace700cd06ef92697310209c36736c8c5d1729ccfe95a9ea3ee8de6d57ed562fd3c829840fc3af93cb72380725d542f17eb52af13883dac8da23cca32aa2f03dff57ee895e4fe63990790141fe86c0f613d13d37a16136635adc6ff5fbf1b951abab8da077bfafdcaf19f2457e564c6c711ce718ace55bfb0e99258a6bff07209f8f11d910cf1949cea332ec2e2d22176aeae36575e41524efe2838300703fb28288839bf40b4c5d71171f196c85a7883537e9c45f9a69483dcd72c15153b8a26e1e21e788743dc37f68d7fa3f5e30910060000",
    ],
    [
      "ETag",
      "og7bAz4kFjcA03WY3yQgaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1588956132723"
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
      "5d",
      "4f",
      "c2",
      "30147ddfaf20f51512904f4d7c0001c5002a8c07630829dbdd1c76bbb3ed3484f0df6dbb017bd12c91c497b5f79e737b726f7bb6b34a25f21e442eb92e9175e07f24c0b7173ec867bd99814898146a89311240ca9a0d92fa9a2d279bdec07f77aa43da7ec1a4df7988d8dcbfb94959c27983902ade4e452af60260ae50f1ab894b59de60110d419fe8204bc26865c2f20996dbd8c0737b369adee591105d834c17e371b7371e900cda977f1671a9a42b73e4df24ccbab43231b2c1f50c3ce0103970ea3ae6b801478ecc78050d630615810977406422ba30857d8e494c396245a52acd7aa5d6ec74ae9aad5afdb27d593fd0193a540618e98ac59c1cf5254aca66f8a5474c5ae91df0344c277e1805f17297909f90823e7571e092636e5ffe85389adaad468e9bed9656aeb2b0aa9a94173058fd93baba9237aa5e7831edec999c499c869844b2a0f470fcd83d63e3ca0d459bee77edc1b96485545e28a86b8f2683b9dd9d3cfd28aebecb93097a5b09e289a3f29800e3ac5ab5d169b65b557270ea2d6a274a6d54c913306987aa3fd67d2055cea34c80b5b7be01cb900d831d050000",
    ],
    [
      "ETag",
      "tMjBEgkc0Fa7YouD8JnlSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1588956132723",
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
      "ad",
      "54",
      "db",
      "6e9b40107df75750fad24af505db188864a5964d1a5407271827adaaca5e60219b004bd8c59115f9dfbb0bd8809c4651d537983973e6cc65e7a52508e2238a3df14c101d143c6530dd7d7cc08ef8857b200501f7f83f54eb6e77690dec99fefdf962b17db0eed1cd785ca0501e4d409484b04d7096ba909cad969d20c55902528cdb8cb02d0fdb92acaa9a3c92067da53f2862090cfd398a1f39c33da50939eb760f3a3a01c64108418248c7c5d1d1deddf6bb498a1fa04b49b799b6cb3291eedb89cf43ec028a703c5e2d0b111981e91a4600855c4615ed395f9bf41d04a24ec0d05be442e0ba388b299756d0b838f65190a53939637a614666ce351f7f6b0671a9cff5a92d4c172bd3feb40111a7db7c160011d6eb14922ca4c285b5b8123609cb7e0f08241be1ee52b7746649b18f42b846de46180be7c2c49c09156e237c60c65c559ed18384a238d7650327843535cc5bf6d278658c470a4e0228a32e616ba5370292dad31cdf515c5f1dc88edf838ea33a8a0c064ecfd58670e83910d41928cf5dc48318c78ae3819124f9caa0af02381c7a9edbd37afe002a8ae46b70a40e3557d3d4a15832ec8ff5b8290414ce1049304165b7c5a9a54f6c7d6d5cac4d5d9fe9b3aafce7149da0ef2c83816d6b654e5954bd553e608d9f15c5361bd5e800653dad17f756174f0a48528499a87c0b0cd3d6adc9d4366e6b32d84ace6100dcddf2892fa50f4202ab6890820852985e618fcf52bc5e2c0ddb58989379c5906fd9f5014918ecd7516c55539dcdde25cdcd28865658b9ccd171148d6a9a2cb720cc5ea1d99666516a70b45e61fb17754bdb32cc6fff411e48d8e0fe22b1fcfaddaaf18becc494d2c49b956efde4b1b98f7b2ce8c314c66e95f11daf8d07",
      "16ee775c50063fdc331ec14eda313fa1cccc1ebe4baaecf9cbe1670045c5344a424d5265f940c802537a8ad064f58038b9693c178c604c0fbd286e5bd1c87d43525693938771387b876639c07d6bdffa0352943fe598060000",
    ],
    [
      "ETag",
      "fX8RWyHR3TDEKwFOvjRhiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1588956132723"
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
      "00000002ff4d51d16e8230147de72b48f7e848864ee796f8300c7126cc6c6c26cb16636ab93014b8ac2d2ec6f0efb605d497b6e79c7b7b7b4e8f966d935d5a44e4c9269b34f9ab801f6e1290effa1082a83229d456622180dcea6a9034d1d5d1b7d8b1681f4e67affe57e081db2b7bbb643269aa04fb859caabaa3420ac729649150f8c760bbe58d56d01cf48deb353703cd0dad260fa5d1e68b4f7fe687d7528e919116cb2078f6029fb4526df6955a6bf3942d6e42888143c1e0f2a092e316989c1be782e665068ec08a3310ed10ddd8c809c7aaa41cd1519433bc77dce178fc381cb983fe437fd09567c8a84cb1d01dcb0f729e2f51d22cc47fed9eb84d3cbc814d185d1424becae73a2125ed75f3889ca9ba3dadac0ead2ec3bc8304f1c6517911601cdc912e8a296aab5227217905866654fdd64b2a5bceaaad13f0a5d26e18020000",
    ],
    [
      "ETag",
      "dZskcdvRCGMEXLBe1+p+kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcfdb6e82300000d07fe9b3182e2991bd898c462e02d30de48574500614015b108ad9bfcfecfcc179029ce784f36cec29e9c01b105835b6f9d6ed77a6f8c9e3a95412f83da99114a0c641aae352d787ad5d53bb527a497d08bb68ac86a26994d2a9b645743d6014519c0c324b3eadf876414c27cc2d8f5567471ec90b354d71b36f4fc517cfe689a20b0b78109ff8ea34d9d510497c0e8d0fafb4a49db9c2ae3d401dba4bb5d79c1c19f351d6e770ecefd40fef6acab58719ea1111a3a99cc3a5ebe58a6937df5bcb779f830d20cb5033c2b3fa35d3a0616cc07f331bc5405e5793604618f8fd035eff516105010000",
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
      "Fri, 08 May 2020 16:43:12 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-55-1588956132723",
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
      "6e",
      "a3",
      "30",
      "10",
      "7d",
      "cf5720f6b509b9d1844ad1364ae81629212d21ad56ab15b28da16e0926b6491555f9f7b52117d85455df60e69c3367c6637f34344d7f2369a8df683a24f126c76cf7e39542fd4a65b000b1ca18ddcde079221e729a3c6e10db8de1cbfb361e8d4a1429d81cacb3043739cd19c2fc66b56cc58ce619609436a560d3349b1d7338b4cceb4eaf3be8f64a2ec7493423e99b52781122e3378671f4d18a298d130c32c25b88ae4f7163db3532465f3112dca8973564256e7c5df86742111084a6a3d5b2349173cc02bc06245136ceec10ded6e55b04ac5bb1446f09c200219aa742592b65104d2312e7ac10974a1f3228c385e7d36f25a02fed993df13544937c9d062958e32b2d040204629761edce5bcc35c7bd5b78f3b1ef2cdc6039b9b7e7e3d664315bcddda5f67c6f7bb626004c70c1d546da6df1e7ca9fc251512dc45c90b4f0e4ab6cc589cc1ee6e87c7284270925225d717c800583f635e80cdb168ce00045c39e09a3368670080726e8c136b2fab81f420caa0a85b3920f529a0e40087bc0824164a130e887e630b0cc5e27409d3ee8a276f73ab2a07e60ef4fbd208681c053c233cac961cafac4b3c7be1d3877816bdb537b7a6efd9d910bf4b3e748b0efaddc896455c714813c11d3b2d1fa906add0b39cf6a635f4df0a2818c112a4d15a7efb8beed8d27bef354b121577186638076cb8d5ac608241c9fd980c9a31598cd69a8ce5177c7f36abfc5623d1c415c22fe9c7c9edb9140b52e452f17eb52afe3cb3dac8da23cca32aa2f7dcf717fe995e4fe73992790e49fe86c0f613d",
      "93d37a9113e635adc6ff5f7f1b951ababcda077bfae3caf67e2b6e9153190f4798e1149dab7e63d315b14c7fe3e592f0e33ba218f22939d5e74286e5a543fc5cbdd85c75054939f9a3a0d5353be651501299b8445cf74e888bb744d5c26b9c8ae32cca37a51ce4be6629afd829680a2eef817b38c47d63dff8070db94b0f10060000",
    ],
    [
      "ETag",
      "/2q7WCtPuolQqcryAbhwvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1588956132723"
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
      "00000002ffc554cb6ec23010bce72b907b0589578056e2002d6d2305ca23f4522164920d843a716a3b5408f1efb59d00b950452a522fb17767d6a35d7b72304a25f419441e7a28a155b0fe4a80edefd620266a33059e10c1e512d388032a2b3608bc56ecf09de1ead676cd9878ce70d7b46a5b934fbadd94c5dd0d8458f20e3292b11f00f1b88c3f745ccaf21a8b7008ea449792248c963a2c5f60b18f353c73a6d6e8258f84d4d3c8686edbbdbe3d4019742c5f17f1b0c04b7de4df24f4ba303231b4a5ab29f8c02072e1d275cce8165c61e9f1721cc6042a9c26cc059e89a8c2145e339ac498515a91a98a69566a66a7736fb66a8d7abbde38d10975b10868a42ae63374d617546032a5df6ac4a895de014bc374e2a751203f7709f9094968a78a030f9d73c7f22f446be4b49a396eb65b18b9cac2aa72527e4060f94feaf24a3658bef062dad933b991380e69128982d2cff65bef868d4b37146dfaa9e70c6e25cb85f442415dc71a0e664e6f38be2a2ebf8b8b09fa7b017ccca8f41807edac5ab5d931dbad2a3a39f5912a270a6554c112d06917cb3fd66b2064cec7848371347e00dacbfcb71d050000",
    ],
    [
      "ETag",
      "mVra0jLc5pldTMv4I1j5sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` != ?",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffa554ef6f9a4018feee5fc1d8972da90a88a84d9ace296b492c76886dba65d1e338e8b5c051eee8e61afff7dd012a46d7345be2077c7f3ccff3feb8f7a52149f2234e7cf954923d1c3ee5285bbd7f209e7c223c88815078eeafbedd3b8675f75b5b01c762179f7f25fdcbe1d95919858b6c0ae234424d4af20c227a3a9fb5c28ce429c8086972c066d768aadd7e7fd035d48ed6d33a652e455130c1c963c1c2584a4fdbed8d8e56484818219062da8224dedadbcf5a3bcdc803828cb6f769db9c89b65f273e8f08040c93e46c3e2b45e414650b14031c0919bb6cdffbb40fdfc2206e853cfa194304202479c284b412069224c0619e15e01ce9851bb9b9d0bcfd5b33c83373628e5c69349ddbee87258805dcf2a304a8b4586488e61193be38d32b699972f67b40115d4ab797a663724b46021ca105f697d299742e0dedb1242d7dc0d0527ac70d85a282cd4794e1a4d0e4022f423525dc5bf5d13a32c22d8400018cd357618b9e6200b5af0cbcc0ebc1a0dfe97a81823cafeff5baa0e32970a023ddf710a82330c15de68384246a0f1a81c67fa8db079aaea200fabee605c8f03b8662e87c4ec14019047285b0ded60333c4ab1c639a128aab4ecb23c71cbae6c2fab2b04d736c8e77e5ffccf041f4ad63f160d799db239e556f550078d3c765b1fb8ddaeb00e33dad17f75a170f0a48334cb8a862032cdb359de1c8b56e6a32f83a4e5008e06af6241632001145bb6c90811831945d115fcc52be9ece2cd79adac3c90ea1d8b0eb4d24e561dfb7627735d5d1dc55babf19e5d04aab9069e872cdb73e398a7203a2fc08cc736596d53d8cc611b47f51371643fc7f719aa2294d45e3c7e22f2aabaf1f8d1a89cc2f4ca54efe3a379d3b915bf884c74101ca500277b46f787022b174bfe180f2f0cd391319fca26df929e366fef621ddb1178f475c021c9703a900071d5d5737803c3163871186aa6f220e4e9ae042314ad8a617e5692b1bb9de9394d7e41469229c3f45dbb22f0af18d75e30f0e4fcd0a97060000",
    ],
    [
      "ETag",
      "hMZhR6IYz2yaRItGBxn8HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1588956132723"
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
      "4d515d4fc230147ddfaf58eaa32e0a647c98f02066410c01191213cd424ab9cce1b63bda4e32c9febb6db7012f6dcf39f7f6f69c9e2cdb263f51ba258f36d944e121075edc842017fae083c86329d496612a80dce96a9034d4d5afa93fee2dfed8c77c597c0eeec3b97798df1e87c3aa4ab06f48a8aa3b29a4f02e82782b14fe32d8ae79a3a534017de37acdcd407343adc92233da64f6ee8d3dff5a4a706ba4d96a3a7d1a4d3d524ba5d903b596e6297bdcf8b0030e2983cb83328e7b6072629c0b9a6431380273ce40d443746325871cf38c724447518edb755a6ebf3f70bbad4ebbd7ee34e531322a234c75c76a49cef3254a1afb78d4ee49ab8a8757b00aa38982ecaef2b94e4849bfbad92567aaac4f81d5a0e0326c5448106f1c951701c6c10369a278466d55ea2424cfc1d08caadf7a8964cd59a5f50f03d5289f18020000",
    ],
    [
      "ETag",
      "JnRG7QzcWOSyZ9/gOEqO+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfdb6e82300000d07fe9b3335860d0bd81d9908b635254e4a529b4224ea01416ca96fdfbc87ee024e707d0b2e4c340c6ee93b7e005cc14a275b90e3bdb9dab5268e1dbc51659846fb5622131141fa4db1ff83cb183f1cdeca9b04efa28589d7db058104be6a5b377b64743c569773f5f5f5bfbe1ab64e7d3276310561ce5cdf69690e769af6b6963b6bd074da7887160c90069086a6d157473c6bdc798761cab2f7a81f909f58dcba9234a6c5e6513325924956fdf9539ba5ed56cce33661287e13bab22fd0837d0a1bbde062bc095a8251f48bdcc7413a115f86f9271167cb92ea6e412fcfe01aa99a91905010000",
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
      "Fri, 08 May 2020 16:43:14 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-57-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d54db6ea330107dcf5720f6b5b9926ba5681b25748b94902d21ad56ab153266a06e01b3b6691555f9f7b52117d85455df60e69c3367c663bf37344d7f2169a05f6bba4fa2bf39b0ddb767eaeb572a0302452ac33ae2e11ef05bc89ead8135d8d1a49398d1745aa248c1e628c96268729a330cfc7abb69458ce619629436a56073306a7607e3f16430ec1abd51cf28b91ce27049d217a5f02444c6afdbeda38f5644691403ca086f619a9ce2edd75e3b63f419b0e0ed7ad9b6acc4db9f17fe1e538c04a1e974bb294de41c98070922b1b2716607fe4d5dbe4550d28a24fa95604018d33c15ca5a2983691a92286785b8547a9741192e3c9f7e2b017d632ecdb9ab611ae749eaa528812b2d40027962978176ebac579a65dfae9dd5ccb5d6b6b799df99ab596bbe5e6e57f6467bbc331d5313c88fa1e06a53eda6f8b3e54fe1a8a8160017242d3cb92a5b7122b387395a1f1ce149428948571c0e306fd419a2eeb833f1437f84c3b131f0c30ef8fed81f0d90e177f0a40ffdc0075455289c957c94d2d41f75a00393a1670443c3eb8746df9b1838f4fc612f40fe1802dc1dea07f6fed40b6680042c08cf28278729eb73c79cb9a667dd7ab6692eccc5b9f537462ed08f8e25c1aeb3b5e792551d5388f2582cca46eb43aa752fe43cab8d7d36c18b063246a834559cbe65bba6339bbbd643c5865cc5254408ef367fd5328628e6706623268f56005bd1409da36ecf56d57e8bc5fa79047189f87df2796e4702d5ba14bd5cac4bbd8e2bf7b0368af228cba8be711dcbfea15792fb8f651e509c7fa0f37a08eb999cd6939c30af6935fefffad3a8d4d0e5d53ed8d3efb7a6f34b718b9cca38100283149fab7e61d315b14c7fe1e592f0e33ba218f22939d5e74286e5a5c3fc5cbdd85c75054939f9a3e0a4df1b0d8f8292c8c425a2dfed1d11176f89aa0509a4e2388bf24d2907b9af59ca2b760a9a82cb7b601f0e71dfd837fe019774ed0310060000",
    ],
    [
      "ETag",
      "r0tVQecwfrjI5I5yom0mEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1588956132723"
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
      "cb",
      "6e",
      "c2",
      "30",
      "10",
      "bce72b907b2c483c03adc421144a91805208a70a21936c20e0c4a9ed1421c4bfd77602e44215a948bdc4de9d598f76edc9d12814d0ce0f5df45c402b7ffd15033b3cac417ca8cd14784c04974b44430ea8a8d820f05ab1fba3e87157ad3abc5bdfecb67d9358bd11deb7db098b3b1b08b0e41d652463cf07e272197feab890e63516e200d4890e2571102e7558bcc2e2106978664f07e37e1609a8ab91f17c38b43ac31e4aa153f1b6888b055eea23ff26a1d785918aa12d5d4dc10306a103d7ae2346b7e088811e2fc74144a0c469cc1ce0a9882a4ce035a3718419a525992a359aa54aa3d57a6a98955ab559ad9de9843a58f8345415f319bae80b2a3099d2bd1a3132933b6049984cfc3c0ae4652e213b21097dab62df4597dca9f80b7130b6cd7a869bee1646a632b7aa9c94e71358fe93babc920d962f3c9f76fa4cee248e031a8722a7f4ebf0ddba63e3d20d799bee5a76ef5eb25c482fe4d4b507a3deccb646939be2f2bbb89aa07310c0278c4a8f71d0ceaa94ebad46d32ca3b3535fa872a25046152c069d76b0fc63bdf942e63c4c381827e3073196d0981d050000",
    ],
    [
      "ETag",
      "GMp+k22csD4hkjG6lAEMaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` != ?",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1588956132723",
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
      "ad54616fda3010fdceafc8b22f9b562009040212ea10645b2408348456eb3481139cd46d12a7b6d3aaaaf8efb3930041b0aa9af62db97bf7debbb37daf3549921f50b291fb92eca1f03183e4e5e33df6e40b91810c8422833c9a3dcff03cb9c1fae33c1d3dd85f6e475783418142793505711ac13ac519f121ed2f178d90e02c0504e33a27aceb465dd50da3a777d496d6d55a452d85513041c98360b8632ca5fd6673e7a311621c4610a488367c1cefe3cd27ad99127c0f7d469bc7b24dae449b6f0b5f46d8070ce164b05c1426320ac90ac60045c2c6a17ae37d3da66f201037428e7e423e04be8fb384096b058d8f93008519c9c939d32b0ff270ee79ff5b09c80b73628e5c69345bdaeea7358805ddfab304a8b45a1148b38849df9cd9545aa75cfd0e5048d7d2cd0fd3317984e000457085366b69205d4a437b2c496bcab8ddb5f48147724bb9dc06528692dc940bbc0856acf06c3948ebcc19ee290409605cbf84adba4a07a886d2f302afeb07464bf702057a9ee17575d0f214bfd786ed8d0741958109eda21e243851f46ea7d3d315080c5d0f80aa06baaae84a0feabdaee775144df3fc96aa6972c9b0ddf7e31308181c239a628aca51cb23c71cbae6cafab6b24d736c8e0fed3f137482be712c0e769da53de255d55105804f7d5c347b3ca8a309303ed36a736f4df1a4819420cc4de557c0b25dd3198e5cebba6283dfc7090c81ffb278143732001185876a40400c192453bc116729cf670bcbb566f6707260c8afd87c87a41cf66b6ff6d05395cd7d498f6f4671684554d8ecb4e54a6e7b7196e51a44d9199aa7322cab471cb5336cffe2ceb5a6e6c21d4ee7ffc1a1a6684a5dd1f8ca7055adafb6fa6abba128caed5f8c975fbf6b1549996f9dd2b07cb5349d9fa236cf898c03034860e21f4cbce30d8ac222fd8ea5cae1bb15272af896dbebf305c1105f07",
      "3e3da8e7ef492c071417675412f674d5d07784bc90b053444b577788933527b4600c13b69b45b1ee8a416e8f2c65153b799980f3d7695bf6f7dc7c6d5bfb0343d050c9ab060000",
    ],
    [
      "ETag",
      "ibsuwOoPnWo5qPpCkN+ZCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1588956132723"
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
      "4d51d16e8230147de72b48f73a92a163634b7c98063713672693ed6131a6e295e1808b6d9110c3bfaf2da0bcb43de7dcdbdb737a364c93fcc5d98e3c9b641b47c7025875138158aa830fbc4804975b8e190772abaa41d048551ff9eafee84cbfbe6d6ff93e0d2665444fb372346aaa78f80b299575678924dec790ecb8c43f1a9b2dafb58ca6a06edc6c981ea86f683551e55a9b2d56deabe7f7a514775a5a04f3f9cb78ee9156aaf5be966bad9f72c0ad0f7b609085707d50cef000a19869e79ca6790216c78285c0db21aab1912386454e19a22529cb712ddb71dd27e7c11e0e1e07c3ae3cc1908a1833d5117c92cb7c8182263e96ca3db19b7858039b30ba28c8be974f3f21299d54b3432e54dd9ed64687d6d761e34a00ff6028bd70d00eee4817c5049555a19210ac004d8754fed65b2c5acea88d7f8bd659a818020000",
    ],
    [
      "ETag",
      "qsT4q5FVW1EQMFUCwgavIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcf4b7282300000d0bb642d0e6051e84ea650ca47507e831b864fa02024811821767af73a7d37783fa0a82a48697ec73788c03be085ac6dabad83559db74d3cb2b3d64a536ad6ae419293285e0eb4555ccad9314a19990654e5512915e96253efe44a62e83cd1d91fd651fd08b1d398cf083f764b19984936fadd2776aef5a31d8d379a0902cdfbfe56268a34a0d55d7501677bd1c361a7c76a3f2bba6fb586c7534bfc1a0d16344a1ccbea376281ed59329982235aae7d71a889c199354489e61a91c6567bdf453572670f6c005c4937439a77afd94ed1b40df86fe6774ee0ebaac3628633f8fd0346cb94ae05010000",
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
      "Fri, 08 May 2020 16:43:15 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-59-1588956132723",
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
      "5b6f9b30147ecfaf40ecb14d422e24a152b46609dd5013b212d26a9a26641b43dd124cb1e95a55f9efb34d2eb05455dfe09cf37de73b179fb786a6e98f240df50b4d87247e2a70fefae58142fd5c7a3007b1f49c31f3657ac797d729f856dcdc9fbda06b2bbc198fcb28a2d00c6cb20437192d7284d9c57ad58a735a6420a7b429089ba6d5ec98a391650e3abdeeb0db2bb10c27d19ca48f92e19ef38c5db4db7b1dad98d238c12023ac85e8e6606f3f77db594e1f30e2ac5d4fdb169958fbe3c45f138a0027341daf57a58882e13cc01b401229e3880ee1659dbe45c0a6158be86782304088162997d24a1a44d388c445aec805d39b300ab3d27cf8ad18f4953db7a7be8668526cd220051b7cae85808380bf6658bbf2960bcd71af96de62e23b4b37584d7fd88b496bba9caf17ee4abbfb617bb6c6014cb0c26a63ed52fdb9e2472952d942cc384995265f7a2b4a8477d747e79d111e28248950c5f02e2c181a03d01919168ce01045a39e0923034338824313f4a081ac3eee8710832a835256e2414ad301e883a1118641578c25e8875118587060041d13471d68400b8496be436f0fb5a01c038e67846594915d97f5a9674f7c3b70ae02d7b667f6ec58fadf9c9c44df798e08f6bdb53b15a86a9b2250247c56165a6f52ad7a2efa592deca30e9e1490e5840a516afa8eebdbde64ea3bb715196215e73806e875f52497310209c34734c8c56839ce17349473d4ddc9a25aaf5aac9ffb2026227e1f741ecb1181725d542d27eb52cfe38b3dacb5a21c6569d557bee7b8dff58a73fb3ecd2d488a77789e77663d13ddba171d6635aec6ff5f7f1a951cba78da3b79facddaf67e49acf2498f87239ce3141db37e62d325b0747fe27289f0fd1d9108714a0ef9191766f1e8103b66579b2b9f20293bbf27b4cc",
      "9139d8130a60ce4f220646ff90f2e496c85c788353beef457953ca466e6b928a8a1c0593e1e21db8bb216e1bdbc63f83ff323010060000",
    ],
    [
      "ETag",
      "+s5xCWtOKnaBuQh+xcK9dQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc5545d4fc230147ddfaf58ea2b4440c687090f43514926ea18be1842ea763727dd3adb4e4308ffddb61bb217cc12497c597bef39b727f7b6675bc334d13a4e037469a2d738fac8816dce22104f6ae302cf89e072c968ca0135141b048e14bb7383d7d15d8b38dde0f99cacfbe1701e85f66854b0b8ff060996bcad8c641cc640022ee3171d9b655e63294e409de8539227e94a878d032c369986e79e3b9ddd569184061a992d1cc71e3b135442bbc67191000bbcd247fe4d42af4ba31443eff4d5851018a43e1cbace187d075f4cf578394e32024d4e73e6032f45546101478ce61966943665aa690d9b6d6b30185abdf645a7dfb9d8d309f5b18869aa2a1673f4a32fa8c0c4a55f6ac4a857dc012bc262e2fb51a0b07209d50949e85315c701fac9ed1abf10a733afd7ad70cbddd2a854d65695930a6302ab7f529757f286e50bafa75d3e931389e384e6a9a8297de33cd8276c5cbaa16ed3d7b63739952c17d20b3575bde9fd64eed9f78f47c5e5777930c17823803f322a3dc6413babddea0eac7eaf85f64ebda2ca89421955b01c74dac7f28f75170b990b31e160ec8c6f481b07591d050000",
    ],
    [
      "ETag",
      "2FakgH0lL4dV/lk7f9SgfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` != ?",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1588956132723",
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
      "ad",
      "545d6f9b30147dcfaf60ec65d39a0f9240a052d46509dd9852d211d26a9ba6c41843dd02a6d8b4eaaafcf7d94012a2645535ed0deebde7dc738fedfbdc9024f90e27be7c2ac91e0eef73943dbdbd259e7c223288815064d2af9ae38724fc107b8fb9f5e93efe1d993f1e87c3b20a17680ae234424d4af20c227aba98b7c28ce429c8086972c2a6d6692aaaae1baaa6f4ba836eafc4521405539cdc09861bc6527ada6e6f74b44242c2088114d31624f136de7ee8b6d38cdc22c8687bbf6d9b77a2ed971b9f4504028649325ccc4b113945d912c5004742c60eed7b1ff7e95b18c4ad90573f60880084244f989056d240920438ccb3829c333df3200f179ab7bfb5803c37a7e6d895c6b385edbe5b8158d0adde4b804acb6586681e31e9dc995d48ab9477bf0114d19574fdc5744c1ec9488023b4c4fe4a1a4a67d2c89e48d286427ac34385a6a29f8f28c349a1ca055e846a5a78b672d23a72885b0a4102181750952d071d0d287ac7f0026f0003bda77a4107799eee0d54d0f33ad0e8a3beef21506760a277890709493445d554cd1f745117f4f8c10c54a8285e17196000f52ed4b8c18aa606865c31acb7f3c00c01862698a684e2ca6b79ec9823d75c5ae74bdb3427e66437fe63860faaaf1d8b17bbcec21e7354ddaa0070db27e5b0fb46ed39c0b8a7f5e15e72f1608034c3848b2aee8065bba6331abbd6554d06bf90531402f834bf1757320011453b34c8408c18ca2e882fce52be9ccd2dd79ad9a3e98ea1b863979b4acacb7e6ec5ee66aab3b94fe9fecd280fad8c0a995a5faee5d6274759ae40941fa179a8c2b2b2c7d138c2f62feacea7b3d17fd2d752fb7f91587dfd6ad4e865be602a69f2b785e97c17d82227320e0a508612b86bf88ad7268065fa15fb93976fb69940f085b6ed4f190ff3870fe9ae7bf172c41ac071396d45",
      "6868baae6c08393063871586d1df541c6c34d10bc528611b2fcacd561ab9de9394d7e4143051cedfa16dd99f0bf18d75e30fd9c163ce96060000",
    ],
    [
      "ETag",
      "pJ6Rdgog+mbwuIBqmzlEZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff4d51d16e8230147de72b48f73a12d1e9dc121fa6219b0b338ecdf0b01853e18a38e0625ba668f8f7b505d497b6e79c7b7b7b4ecf866992df380bc9b349d671b42f80957711884f75f0801789e072cb31e340ee5535081aa9eaadfd3144ff08c749b67fcfe7b03f39be7f188dea2a1e6c21a5b2ee2c91c49b1892904bfca3b1d9f05acb680aeac6d58ae981fa86461365aeb5e9ecdb7975bc5b29c5504bb385ebbe8c5d873452a5f7a55c2bfd941dae3dd800832c80eb8372863b08c4543be734cd13b038162c00de0c518db51c312c72ca102d4959838e65f787c3a7fec0ee751fbbbdb63cc1808a1833d5b1f82297f902054d3c3c28f7c4aee36135acc368a3209b9b7c6e1392d29f6a7e2017aa6a4e4ba345cbebb0712980cf194a2f1cb4830e69a398a0b22a54128215a0e980cadf7a8b45c31995f10fb8efc59418020000",
    ],
    [
      "ETag",
      "h1M8oWxexCnqJpPeqzEWWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfc97282300000d07fc9591c4b40a437c228fb224618b8303186c52aa16c829dfe7b9dbe3f783f8050cafa3e1ff8176bc0275888a8aee9dae13bb49445e74ab783e1a655f448e922c662c22b27b4204585371ca10f974799981322342f8bccd6d28d82b5e348ab9af0c81b5ba5e0cfa039f14c527b3b8bf1eb3091764be2bb39598e665a4f1819e5b9d97a110c4a1fe9e8baa78281ddfaca7dfe1d423c751c97fb2e0a8551c924def681e6da2ee2d9bd99e6732a2c196c5d8c75f943df04f2ec24276e5e6ef26567f46005d8dcd61debf3fa3d83b2aaaec07f331f9696bdaf88918e75e0f70f9e46f72e05010000",
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
      "Fri, 08 May 2020 16:43:17 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-61-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54db6e9b40107df75720fa1a5fb18d1dc96a2c9b24b4364e314e5455155a96816c8259cc2e699dc8ffde5df005ea28ca1bcc9c73e6ccececbed514457d26b1af5e2aaa47c24d06e9f6cb13f5d40b99018e4299c1c6dfec35c404ddf537374f9b6df2edf5bb1d8e46058ae46c86d649047546b31403bb5c2d1b614ab304a594d68560bddfaeb77b83c1b0d76f6b1dbda3155c06513023f1b35478e43c6197cde6c14723a4348c00258435305d1fe3cd974e3349e91360ce9ad5b24d5189353f2efc35a2187142e3d16a5998c818a42eac1189a48d13dbf7aeaaf20d82d68d50a05f08068431cd622ead153298c60109b33417174a6f2228c2b9e7e36f29a02e8d993171144ca36c1dbb315ac385e2238e5cbe4d40b9b61773c5b4ae17f67cec980bcb5d4e6e8df9b83159cc56736ba93cdc1ab6a170e445907395917295ff59e227779457f3817112e79e1c992d3911d9fd1ccd778ef0282145842b067b98abb7faa83d680dbdc0d37130d07a5ed002cf1b787a0f695e0b0fbbd0f53d406585dc59c147318d05a3a3e91ab880db3db7dbf391eb753abadbed83e6b7350ffca0abeed9bb632f3805c4614a584219d94f599dd8c6d8315cf3dab50c636a4c4fadff49c919fac13605d8b157d644b0ca630a5016f169d168754895eeb99867b9b18f2678d64092122a4ce5a76f5a8e618f278e795fb22156710621c2dbe5462e6380220627364ac5d17248e7d497e7a85ae379b9df7cb1ee0e202610bf8e3e4fed08a05c97bc97b375a9d671c41e5646511c651155978e6d5a376a29b97b5fe61e45d93b3a2ffbb09a88693d8a09b38a56edffafdfb5520d555cedbd3df5c7cab07f4a6e9e93191b024821c6a7aa9fd874492cd29f78b904fcf08e4886784a8ef519176171e9303b55cf37575e41524cfe2038d47bba7e1014c4949f23fa8323e2ec2d91b5600d313fcca278538a41ee2a96b2929d9c26e1e21e58fb43dcd576b57f931f57ce10060000",
    ],
    [
      "ETag",
      "cExuzgciaP6qGjqypJzKRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1588956132723"
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
      "cb",
      "6e",
      "c2",
      "30",
      "10",
      "bce72b907b0589670a9538008542059442500f154226d9844012a7b6434b11ff5edb09900b55a422f5127b77663ddab527072d97435b37b0d0430ead5ce72302babf7380bfcacd1458e471269690040c505eb2816347b2f1c8fc9a3ccfde7a7ebb51dbedb6df7dc7ea38cd66cc62e61a7c2c78071189d876c1b39888df559c4bf20a0bb00ff2449378911f2c5598bfc07c1f2a78664c07e3a734e2134b21e3f970d86a0fbb28818ef9eb2216e678a98efc9b845a175a2286366435051b2804265cba0e29d980c9076abc0cfba1070546226a024b4464610c3b944421a6841444aaa0970aa55abddea8e9a54af9be5c39d13d6262ee924056cc67e8accf09c7de947cca11233dbe031a87f1c44fa34076ea12d21312d04e16bb163ae78ef95f8883b1a15753dc64b7d052959955c5a46cd783e53fa98b2b5963f1c2b36927cfe446e2d82751c0334af7862fad1b362edc90b5e9c796d1bd952ce3c20b19758dc1a83b335aa3c95571f15d5c4cd0de7360134a84c7182867958ad57aed5e2fa293533b443a914ba3721a814a9b58fcb1fa2e17391b7b0cb4a3f60386f334cd1d050000",
    ],
    [
      "ETag",
      "aMcxPJSWFmB95vvkzHgdCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) LIKE ?",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1588956132723",
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
      "00000002ffc5545d4fdb30147defafb0322140a38dfa41814a15632513d14acbd2148426d4b8c94d302471b01d2684f8efb39d3649b582f6b4bd25f7dc7bcec9fdc86b0321e391a4813140c692444f39b0974f0f74691c2804048e14824dda753ae3cf17231cb24e7ecb8f2cf22b1a0e8b2ca2ab394eb2189a9ce6cc073e98cf5a11a3798619a54d49d8ec779aedc3e3e393c37ebbdb39ea748b5a0e713826e9a362b81722e303d35cfb6845944631e08cf0964f93326e3e77cc8cd107f0053737654da9c4cd8f854f63ea6341683a9ccf0a133907b680049358d9a8aa83e5974dfa16c1492b92d9cfc407ecfb344f85b256d0f8340d4994334d2e995e655086b5e7f2b5163066d6d81ab968349d4fdc3d0f278acedb4798a3c58201cf6381be39d34be46552fd1e73e01ebab9b01c4b46180d490c0b127868884ed1d9e41ca1f1f4c672f63c19db4763fbbb854eb5312d1a408825e139169247d4ec28ac08da7a8e02b828cb24b8eab4bd65c8c62aebad54c918a18c08fd75f6c4b59cb3916b5f5b950dd9ea3144d87f993da9668738e6505563861310c02e69008ae26a3ab35d7b3a391b570cba7b57eb4c2ed37e9666ab6faab3b92f196c7cb08645115536fb3da386bd1d6c65b9c671be85e6791536da1b1c8d2d6cffd3dd4efb70e71d83aba7bb468dde9087b33266fc985bceadaad598421c088141ea57821f6e494559c07ff15f90e9eb2b5515f2504b7d2e64980be2f34add67a0735d9214b358119e1c774f8ed684b290893f337aedce3a03d2603bbe219ed7848131ca1c7daaf50b977678e19ca47204f20759ae6f029ce3486bcc53d9050e781903d25b8dca7122cf4324456a0b90e7de5e590bbd08de01fa8a0389887e0fe9d90e909aecfa7957bdec1a1b93d416eb67523bfcf77dfe4ba7eb1dbcab0625b4ecf97462e9de37de1abf0181a89743aa060000",
    ],
    [
      "ETag",
      "a/o3R2L+HCafr2uYs7Eiwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cf4b7282300000d0bb642dce1045a43b194428d0005569d9642284209ff0899f40a777afd37783f70348965121f0adab29076f6022d058664bafdb9a13a38d62eb2e9a3f9353dc712bf52ad2840f73aa0cc4f56846cfcd8a73e1437c7253031a6d66d9b536616d4f67580eba4f2ea4f1b326df20c92319b6ca76969d6a8da98b8f9024b1807c60e89197397daaa438407640feac2ae4ae9e77659dcac10b3f8e6b74f159e10ce6170b5233299b758ff330d915321fcedf7145ee55a2bf3bcc0d6cf7cc9c6adf4681ad08b00054f6d7910a7c7dcd569a612cc07f13dfa69ebeae2625231dc1ef1f864e6c7e05010000",
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
      "Fri, 08 May 2020 16:43:18 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-63-1588956132723",
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
      "6e",
      "a3",
      "30",
      "10",
      "7d",
      "cf5720f6b509b90395a26d94d02d5242760969b55aad907106ea1630c5265555e5dfd7865c6053557d83993967ce1c8ffdde5214f599a45bf55a510312bd1490bf7d7ba2817a2533c05124338ec386fdbba536c3e1fc71f7ba4b0acdd2a3c9a4aa22259aa1248ba1cd68916360d79b7527ca6991a19cd2b6206c8f07eddec830ccd1b837e8ebfd41856510870b923e4b8647ce3376ad69471d9d88d228069411d6c13439c5b55d5fcb72fa049833add956139d98f679e3ef31c588139a4e36eb4a44c120f72141249632cee86d70d3a4ef1094742251bd231810c6b448b99456d1609a86242af2925c30bd8ba008979a4fbfb580bab616d6cc53308d8b24f55394c095b2451cf9fc2d03e5d65d2d15dbb95db9cba967af1c7f3dbbb396d3ce6cb5d82c9db5f27067b996c2511043895526ca4df9e7889f5251d96d0b8c93b4d4e4c96c4d89c81e7cb43f38c213852411aa181cca7cbd3b463da36b0661a0e3d0188c82b00b416004fa080d822e368730dc0680ea0ca5b20a8f529a021e1ac81c8f7da31f74fda1190e7c0383e11ba3d11099a6ded3f5ad7a40ef4fb3e01c108739611965e4e0b23a73ada967f9f6adef58d6dc9a9f477fcdc945f5836b8b62cfdd383381aadb14a222e6f36ad0a6498de9b9f0b33ed8670e5e0c90e5840a51e5e9db8e67b9d39967dfd76488555c4084f0dbfa452e638862066734cac5d172c897740be5bd9c2eebf3968bf5f358c444c59f93cef338a250ae4b39cbc5ba34fb78620f1b5654475945d5b5e7dace0fb596dc7f4c738fe2e2039edd21ac66c2ad47e1",
      "306b70b5fefffadbaaf550c5d53ec8537f6d2cf7b7c49639997121841c527ceefa854d97c02afd85974b941fdf1189104fc9a93fe3222c2e1d66e7eee5e6ca2b482ae78f84a631d6cd23a100e6fcb24237bac78a8bb744f68204527ef4a27a532a23f70d49454d4e0993e5e21e388743dcb7f6ad7f1258609a10060000",
    ],
    [
      "ETag",
      "NNs42HM/CcfDhvwvmu/E7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc554d16e8230147de72b4cf7aa998aa22ef14137dd4cd039c5a7c5980a174481b2b6cc18e3bfaf2da8bcb890cc642fb4f79e737b726f7b386aa512daf991839e4a68ed7b5f09d0c38307fc436e66c0928033b1c4246280ca920d1c7b92dddf3b8f8d8eee4d5b03f3f0ad37a2e16ebef5badd94c5ec0d8458f08e2212b1eb43e030117faab894e51516e110e489360992305aa9b07c85f92156f0dc9a8d26af7924248e42260bd3ecf5cd01caa053f9b68883395ea923ff26a1d6a59689a12d59cfc0050a910dd7ae634ab660f3911a2fc3611c40859184dac032115998c21e25498c29211591aa187aa5d66cb73b4da3a6d75b75fd4c0f888db94f2259b198a38b3e271c0733b2972346467a07340dd3899f4781dcdc25e42724a06f59ec3be8923b957f218e2696d1c871b3dd52cb551656159372fd0056ffa42eae6483c50b2fa69d3d933b89e39024112f283d34df7b776c5cb8a168d32f3d6b702f59c685170aea5aa3f1606ef5c6d39be2e2bbbc9aa07fe0c0a694088f3150ceaa551bed66cba8a2b3539f8974229746e5340195b6b1f863bdf95ce45c1c30d04eda0f3d4647d91d050000",
    ],
    [
      "ETag",
      "Bwd/493gP7ELyv34nFkSjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1588956132723",
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
      "ad",
      "54",
      "61",
      "6f",
      "a2",
      "40",
      "10",
      "fd",
      "ee",
      "af205c9af492531011b189e919a53d528b2d629bcbe5a20b2e745b60e92ed8348dfffd76011162af692ef70d66df7bf3666677de5a82203ea178239e09a28b82e70c92d72f8fd815bff1139882809f04b7e3edfc2536e55b225d3e85da95ae506b3c1a152894b329889210b629ce8807e9d972d10908ce1240306e33c1b6a6b6bb7d5d1ff6b56e4f1928bd824b61e8cf50fcc4151ed234a16792b4f7d109300e420812443b1e8eaab8b455a484e047e8a5546aa69558262a7d9cf83cc41e48118e47cb456122a390ac60045098175bb137eef7a67c0781a81330f4167910781ecee2945b2b643c1cfb28c8482ece94de58908573cfd56f2d202e8c99317184c97c6939a76b1071b9f557015061b5229066612a5cd8f36b619db0ec0f8042ba16ee7f18b6c12204fb28842bb4590b23e15c185b534198cdef0dfbb44233a999796508e7b9bd3cf506d214c5b94107b821acd962a76553cd77e6594970119032f512b61ac81ae8eaf2d0f5dd81e7ebbdbeebcbd0757577d0073d57f6862a54372e04758594e72ef820c6b1ea77155f733545197af240d594beaffa90f15d0fb8aab2d1745d767b8a2a960abbaa1e8f4090c229a209a6a86cbb38b18db163accc8b95651853637a28ff85a023f4bd6d32b0632fad0963d55be503368169516cb3518d0ea4aca7f5e23eeae2510109419899caaf836939863d9e38e65dcd06bb9b331800ef75f1cc6fa70f420a0f6c4040045348aef186cf52bc992f4cc79c5be3d94121bf6e377b2465b05f95d9434d",
      "7535e73569de8c62684594dbd4aa5134aa69aadc81307b47665b86c56e43a3f58edabfb85b38b6695dfe077b2720494efe62b1fcfaddaae98b6cd794d6c4dba561ffe4dcfc8c9fd8d08704c6de21e3275e1b2716c79f58a50cbe5f6c9cc1765b959fa62ccc1ebe470fd9f397c3d7008a8a6914828a2ccbaabe176444921e23ba9ab6471c2d379e0b46304ef7bd28965cd1c85dc35256b393d3389cbd43ab1ce0aeb56bfd0146f5f415a1060000",
    ],
    [
      "ETag",
      "gQAvOwnI0Qr/Gkl6K82sNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1588956132723"
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
      "4d",
      "51",
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "57",
      "2c",
      "f55197c81004131e40881217a25312124348197773b8edcef60e0264ff6edb6dc04bdb73cebdbd3da727cbb6d96f9c6dd893cdd671f4578038dc44401ffae0832c12926acb3193c0ee7435108f74f562fc16eebc71dfa705cdd6fbf4c843f7763818545532f88194abba93420a8731241ba9f0b7c176cd1b2de329e81b572b61069a1b6a8d0eb9d1a6b3afc9cbc4bf9652dc186936f7bce1c89bb05a2acdbe546b699eb2c5b50f2108c802b83c2817b88580a6c6b9e4699e8023b11001c87a886eace44860917381e828cae93e38ad4eafd7ef745b6df7d16d37e509069c62cc74c7fc939de713124f7cdc6bf7ac55c5232a5885d144c1c2ab7cae1352d24e37bbec4c95f5696935687919363a10c87781ca8b04e3e09e35513ca3b64a3a091205183ae0eab75e63aa39abb4fe01f50f6b2618020000",
    ],
    [
      "ETag",
      "XDKfvLD9RtXtNbwmzaf2+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb64ad4ea110a03bd1a2164481d40f1b268460532cc1f00d4eef5ea6177833ef093021b4ae938617b4046f4062d55a9085cb4d5bde4801e3075ca7ec0765cb1592c15762f63dbd3670b337ce6e7afea8df999fb2bc7b0cf45383bbca20f60af5125f97963720a9242270e6da297a11ce84951522a9422ece98a256edcc6f3730c2d1982b5113338cb63c47f9a5d4b5138e95c83ac0e8ee045b98756b1c8eac42509b1fdd96df1cecb7e1b8c7d941169eaf715c285265c23bc251bd0f7c47bb56df986006e8503141eb844db357ddb266e0bf9934b2a2d3d5a65850017eff0003ab9c1a05010000",
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
      "Fri, 08 May 2020 16:43:20 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-65-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30147dcfaf40ecb50909f920a914ad59423ba684b440da4dd3848c31d42dc1149b4c5595ff3edb900496aaea1bdc7bceb9e75e5ffbada528ea334e43f55251031cbf14287ffdf24402f542641003b1c8ecc073fccd756e9e36b7a3c85a2cfb3ff49ff1dd745aa2b06453b0cd12d4a6a4c821a2971bb713e7a4c8404e489b0bb647c3766f381e4f86a35e5f37f47ec9a5288996387d160a8f8c65f452d30e3e3a312171824086690792ed31aeed742dcbc913828c6acdb21aaf44b58f0b7f4d08040c9374ba714b130545b98fb60027c2c6891d06574df90e06db4eccd13b0c118090142913d64a1948d208c7452ec5b9d21b0ff2b0f47cfcad0554d75c9a734f812429b6a99f822dba5042c080cf5e33a45c3beb9562d9d76b6735f3acb5edbbf3efe66ad699af979b95ed2a0fdf4dc75418081224b9ca54b9927f36ff918e64b510518653e9c913d99a139eade668bd7384470921c25d5154c17ca33b02bd717712448101a3717f18445d1404e3c018827ed08593011a8401027505e9ace48394a4c880101803e4f7ba21f4076008fc0984ba6f4c86d1240af5f1200cd58abd3ff6027304185a609a118aab29ab73c79c79a66f5dfbb6692eccc5a9f5bf393e433f3816077bcec69e73567d4c112812b6281b6d0ea9d13de3f3ac37f6d104cf1ac8724cb82979fa96ed99ce6cee59f7351b7c15972806f0d57d11cb188184a2131be4fc6819ca572414e7a8dab355bd5fb958b70710e588df479fa7763850ac8bece56c5d9a753cbe878d519447594655d7732cfb46ad25f7efcbdc83a47847675785d58c4feb914f9836b45aff7ffd69d56aa8fc6a57f6d4bb8de9fc125c991319074528",
      "47293c55fdc4a60b6299fec4cbc5e187774430f85372ac4f190ff34b07e9a9badc5c71057139f94a50ef768d817e10e4c49c9d23c646ef80387b4b442db445293bcca27c53ca41ee1b968a9a1d4913707e0fecea10f7ad7deb1fbf53f95f10060000",
    ],
    [
      "ETag",
      "vakgBSRGjUP6fIDL3J2XgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1588956132723"
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
      "0000000002ffc5544d4fc24010bdf75790f50a091fb6a28907505412e4a3d49321646da7b5d076eaee560286ffeeeeb6482f98269278e9eecc7bb32f33bbaf5f46ad46d661e2919b1a790b838f0cd8f6220031531b1b7816092e9714130ea4aed82068a0d8cdeb9dc7c29989779bc96eeb4e77f360fd31bbbdcd59dc7d87984ade978c64ec8710795cc6af3aae15798d25340675a28b5116274b1dd68fb0d8a61a9e3bf670fc584662f434327e198d7afdd18014d0be7e5ac4a3822ef5917f93d0ebc228c4c80adf6cf08141e2c2b1eb94e10a5c31d4e3e5344e236870cc980bbc105185391c30cc52ca101b32d5b0cc46cbec76af4dabd5695fb53b077a842e152126aae2654e7ef4050a1ad9b8512326567e072c0ff3891f4641fcd225942724a14f551c7ae427b7afff421c8e1debb2c42d760ba3545959554eca0f2358fe93babc92772a5f7835ede2999c499cc69825a2a2f4c368d23b63e3d20d559bbeef398373c97221bd5051d7193e0fe64eef797a525c7e174713f4b702f894a1f41807edac56f3b26b5e594d7270ea1d2a270a6554c132d06997ca3fd6532864cea71107636f7c036d09afed1d050000",
    ],
    [
      "ETag",
      "09zdriQ5oCwOzycPzSgkqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad546b6f9b3014fd9e5f81982a75d2f222842495a22e4a684797929690660f4d89ed18ea1630c590a9aaf2df670321a0745535ed1b5c9f73eeb9f7daf7a52649f2230936f2992443e23e25387afef040a1fc499ce018b8e2e44eb9f196ded595195ca93fbed95b9c2cae2f6f87c30c455236037ee8e13aa34984303b5bcc1b6e4493104494d6b9605dd3eaed6ebf3fe86aed8ed2533a199761cf9992e05128dcc771c8ce9acdbd8f864ba9eb611012d640d42fe2cdadd20c23fa8051cc9ad5b44d9e8935df4e7cee5104624283e1629e9948188e56d807c413360eec0dfc5c956f10e0375c8ede12840142340962612d93413470889b44a938577ae1411e4e3d17bfa5803cd7a7fad896c6b385699fae812fe4d61f25c0a4d52ac22cf162e9c29a5d4beb9067bf070cb3b5b4fca25b3a8f44d4211e5e91cd5a1a4ae7d2c89c48d274b6d4add302cda5a6c6575d3a4feda5a93798c524480dda007ab8648b9fe64d355e996721214440ccd573d8aad7d240bbdf1a4007f690d3ef74a1d3c210f661af0b3ab085062a56371083b2422c72677c10d04075da8aa3414d5106a8d55335a5eba80ee67c880054958dd6efb7604751e55c6157d483220c623c212ca48ce46d97c7963eb2f59571b132757da24f0ee5ff8ec8117a69191c6c5b0b73cc59e55639804f6092155b6d54a50331ef69b9b8b7ba7854401811ca4da5d7c1306ddd1a8d6de3ae6483dfcd2976017a9e3f89dbe9008fe1031b44c0c7318eaee946cc52be99cd0ddb9899a3e94121bd6e377b24e3b09f85d9434d6535fb39acde8c6c685954d8d48a5154aaa9aadc012f7945669b87e57645a3f68adabfb89bdb96615efe077b27200c4ffe6231fffa552be9cb7cd7e4d6e4db856e7d17dcf44c9c58d8c1110ed021e33b5e9b2066c7ef58a51cbe5f6c82c1775b919fc53ccc1f3e6287ece9cb116b80f8d9343241a5a5687cbab9202746f131a2d753f688a3e52672611f07f1be17d992cb1ab9ab584a4a76529a80f37768e603dcd576b53f8c368f00a1060000",
    ],
    [
      "ETag",
      "V2PlWlJJNnJ4ZXTveuUMGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1588956132723"
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
      "4d",
      "51",
      "d16e8230147de72b48f73a1245716e890fd39849628c437d5a8ca9e5822870595b6688e1dfd716505fda9e73eeeded39bd59b64d2e491e920f9b1c93f8b7045ebdc420bff5210051a652a8adc05c0079d5d52069acab87f17931609759e8f74e43c82ed571e3adaf93495325d80932aaea6e0a291c25908642e11f83ed96375a4e33d0371e0edc0c3437b49aac0aa3f9abedfc6b1e3c4b1986465aed96cbcfe9724e5aa936fb5eadb579ca198f0144c02167f07850c1f10c4cfac6b9a059918223b0e40c443b44373672ccb12c28477414e58c464edf1b8fdfbd517fe0beb983ae3c45466582b9eed86dc87dbe4449d300afda3de937f1f0063661745190e8299fe78494f4a79b5d72a7eaf6b4b73ab47f0c9b5612c49aa3f222c038e8912e8a196aab5227217909866654fdd622912d67d5d63fa1f53c9218020000",
    ],
    [
      "ETag",
      "4gjH3ckCdI0h4emkybS5Pw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfdb6e82300000d07fe9b31a6522b037ab84924a77a102ee8594520a5328b646c065ff3eb3f307e70730ce8531f94d9d45075ec1c42c6fc11758b97092a547479f4ecda1cb3a02a9411739c0b05554c424435b6edd75459703396608134adc55ad9aa07af34dae432ad69f1c0e6d949f2ba8654a65824f6eea86f03dae51413a76dcefd29515203f393863b167325df78eb637bb2fdcaafa4a3e6812a7567c29b26f7dbfceb7819f603b89c279c895af62cc902369dc3eb8bb64655a5aceb0e1a72e1ab169ebc9936006c4d8375a98bc79ce5e6ccf9b81ff667e9b7af1bc42c1b4d0e0f70ff6b92ccc05010000",
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
      "Fri, 08 May 2020 16:43:23 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-67-1588956132723",
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
      "0000000002ff8d54db6e9b40107df75720fa1a5f31c68e6435964d5aa418b71827bda842cb32904d304bd825a915f9dfbb0bd8863a8af20633e79c39333bbbaf2d45511f4912a8978aea93e829876cf7e981faea85cc004791ccbc8cfc05438b1fbfeea10fc0face6efbf7ee653a2d51a46033b44d6368339a6718d8e566dd89329aa728a3b42d04db23a3ddd7c7e3893eea6b0363a0955c067178439247a970cf79ca2ebbdd838f4e446914034a09eb60ba3dc6bbcf836e9ad107c09c759b65bba212ebbe5ff8734c31e28426d3cdba349133c83cd822124b1b2776e05f35e53b046d3b91403f130c08639a275c5a2b65304d4212e559212e945e4550840bcfc7df5a405d9b37e6dc55308df36de225680b174a8038f2f82e05e5da592d15cbbe5e39cb996bad6c6f3dff6a2e679df9ea66b3b4d7cadd57d331158efc180aae3255ae8a3f5bfc148e8a6a01304e92c2932bb33527225bcdd17ae3088f125244b86250c13ca33742fd716fe287be81c3b1a6fb610f7c7fec1b3ad2fc1e9e0c6118f880ea0a85b3928f129a0cfa581bf5f4c0131cdd1b22ade7212d0c3c431f4d86031f193a805ab1f7c75e700688c382b09432524d599d3be6cc353debdab34d73612e4eadbf64e40c7de75802ec3a1b7b2e58f53185288ff9a26cb439a446f75cccb3ded87b133c6b20cd0815a68ad3b76cd7746673d7baadd910ab780311c2bbf5935cc610c50c4e6c9489a3e5902d6920cf51b567cb7abfc5627d3b809840fc3efa3cb52380725d8a5eced6a559c7157bd81845799465545dbb8e657f516bc9fddb32b728cedfd079aec26a2aa6752f26cc1a5aadffbffeb46a355471b52b7beaf78de9fc94dc2227330e849041824f553fb0e99258a63ff07209f8e11d910cf1941ceb332ec2e2d26176aa5e6caebc82a49c7c2538e8699aa11f040531e3e7087d303a20cede12590bb690f0c32cca37a51ce4be6129afd92968122eee815d1de2beb56ffd03db8d9a5910060000",
    ],
    [
      "ETag",
      "w6bDsaDXZhe1ees1RymxWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1588956132723"
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
      "545d4fc230147ddfaf20f51522080c30f101141503c8c78c898690badd8de9b63bdb0e2584ff6edb0dd98b668924beacbdf79cdb937bdbb3ad512a91373f72c87989bcf8de7b026c73e28198aacd0c7812082e9718230ea4acd820a8a7d893e60a91f7ee1e1f479dd3b537fe7c1293647a7191b2b8bd82904ade564632767d081c2ee3671d97b2bcc6221a823ad1c62009a3a50ecb07586c620dcfadd9607c9347427434327e180ebbbd619f64d0aefcb38843055dea23ff26a1d785918991577c99810b0c221b0e5dc70c5fc116033d5e4ec338800ac784d9c033115598c21ec324a60cb1225315b355a935dbed4ed3acd5cf5a67f53d3d409b0a1f2355f13027dffa02050d66f8a1464cccf40e581aa613df8f82b8b94bc84f48426b55ec3be43bb72bff421c8c2db391e366bb8591ab2cac2a27e5fa012cff495d5ec98aca175e4c3b7b264712a721269128287d3dbcef1eb171e986a24d5f75adfeb164b9905e28a86b0d46fdb9d51d4d7e1497dfc5c104bd8d003e61283dc6413bab566db49b2db34af64ebd44e544a18c2a58023a6d53f9c7baf585ccb934e060ec8c2f40bd16871d050000",
    ],
    [
      "ETag",
      "P5hoosBJWWM9/vgNxZtPuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ?",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T08:00:00.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffcd545d6fda30147de75758d94b2b1508a1a58c097514b22e5af86812da7555056ee204b7499cda4eb7aeea7f9fe3401234d64dd31e26f140eeb9f79c73ed7bfd5c0340b9c7b1a7f480728b838714d1a73777e45639c810c4619021e6d1b7d5e873a299ccc6c733b5f37d78796a7dedf7f32c2cab198c9210d51949a98b586f6e37024ad2045242ea82b0dee9d65b47ddeedba34eabad1d6bedbc96a1d037717c9f31ac384f58afd9dcf868048404218209660d974445bcf9a835134aee90cb59735bb6299458f375e19390b8906312f7e7766e2265882e50047198d928abbddbf7dbf40d0ca34620b21fb18ba0eb9234e699b59cc625b18f83944a72c1f42c82222c3d179f958062eba63e74c0703a9f387b4b186574cb7d0019582c286269c8c1076b3a06cb44a8af20436c092e3fea962e2294f838440bec2d411f9c80c164048039bdd4adbd25e3c2b4e0318d4f3a3891dea4ae877c283847900b2a5e71946179d09057c911e3459900d7876decb867659df552a82414138ab96cd09838ba35183ac6855eda10a76da200ba4ff64376de3e0c192aab218511e2888e8987328ad9d4361c633a199825833cc0d9269389b4ebc26cd95395cd794ad056c312e67934b3d939542ad8cbc14e960b18a63b681ed761a5b5c551dbc1f637ee1c63acdbce603cfb070e355553ebaa2616c251bb3d5515bf86aaaa5f7e617cfdefa6569154c44ead0d2be773ddbaca6a25962116f21145b15b9a78757a4aca1cfe832743a46f1638ab103b5ce88bc1e79871ecb252dda548e63a38caef2827d4d443edb8bb21148594ff9cd16e179228f676e35be2694518514aa825b7b8bafcc20ecb9de3585c0bf6cee56b50cc76b5b7876d28428cc1407a98101041eeae701c008683584853047c42819fc66e569f3f06320469904628e6209b28d603c54035809d2609a11c79258b48c8df11dbb18cc9d9febbf5e7e995a3dbe271e2e0bad5ebb66e94ada190dd5637b1f2b6fca6e5579bfe4fdbdeecc64d39405c3a1c4d27ba9c89da4bed074fc95f0c5d070000",
    ],
    [
      "ETag",
      "L5xhDXp2LsSi7P06zCWBRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcf4b7282300000d0bb64ed3855094277868f88058a41b16e188410f98649400d4eef5ea7ef06ef05d22c23422403ab49073e814c97fa3c9bef9986242db6d2f99a2a1ea5a31a71a3a73070298f4db128d6b727ef9410e6aecb1b880ca9d078e73d54922bf2bbdbb0953eec9cd4a73ab4dac8b8fa7625bdcbea8cdd0d0a4e57a7c24de71e59928c8389590bd5d2b827e6615a7829f3b7be5beeb932d265d6785669a316e7973a10f14f3809f5468f671de20e59c6c3fa70f014ac1dbb09efa1450ec8d6342f3e151192359801f2ec4b4e4452be672ba8eb33f0df4c06d993f7159194130e7eff0014b50e0e05010000",
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
      "Fri, 08 May 2020 16:43:24 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-69-1588956132723",
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
      "8d54ef6f9b3010fd9ebf02b18f6b13f283402a456b94d01529211b21edaa6942c639a85b8229369da22afffb6c20092c55d56f70f7debb77e7b3df5a8aa23e9364a35e296a40a2971cb2dd97271aa81732031c4532f3eb799aed5e1641f0606789053d6b6977bf46e3718922059ba16d1ac325a37986815dad57ed28a3798a324a2f85e0e57074d9d54d73a40fbbfd9ed1eb975c06713827c9b35478e43c65579dcec1473ba2348a01a584b531dd1ee39dd75e27cde81360ce3acdb21d5189753e2efc2da618714293f17a559ac819643e6c1189a58d137b135c37e5db046ddb9140bf120c08639a275c5a2b65304d4212e559212e94de4450840bcfc7df5a405d59736bea2998c6f936f113b4850b658338f2f92e05e5c65d2e14dbb959ba8b89672f1d7f35bdb51693f674395f2f9c95727f6bb996c2511043c155c6ca75f1e7889fc251516d038c93a4f0e4c96ccd89c85673b4df39c2a3841411ae185430dfd086a86b6aa3200c0c1c9a7d3d08350802333074d40f343c1ac0601300aa2b14ce4a3e4a6802a37edf1c81ee1b03c3f407a3a1ee9b80437fd3ef6a031d234dd335b562ef8fbde00c108719612965a49ab23a75ad8967f9f68def58d6cc9a9d5aff9b9133f4bd6b0bb0e7ae9da960d5c714a23ce6b3b2d1e6901add7331cf7a631f4df0ac81342354982a4edf763ccb9d4c3dfbae6643ace21c228477ab17b98c218a199cd8281347cb215bd08d3c47d5992ceafd168bf5e3006202f1fbe8f3d48e00ca75297a395b97661d4fec616314e551965175e5b9b6f35dad25f7efcbdca1387f47e7b50aaba998d6a398306b68b5fefffad3aad550c5d5aeeca93fd796fb20b9454e665c082183049faa7e62d325b14c7fe2e512f0c33b2219e22939d6675c84c5a5c3ec54bdd85c79054939f94ab0a70d865de3202888193f47183df380387b4b642dd842c20fb328df",
      "947290fb86a5bc66a7a049b8b8074e7588fbd6bef50fb709cb4210060000",
    ],
    [
      "ETag",
      "XkCryqMbbYIrnEe2EOI1+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1588956132723"
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
      "0002ffc5545d6f8230147de75798ee55333f992ef14137375dd431c5876531a6c2057140b12d1a63fcef6b0b2a2f2e2433d90bedbde7dc9edcdb1e0e5aa180bebdd0468f05b4f4dc4d0c747fe702ff909b09b0d8e74c2c110919a0a26403c7ae64d7379ffd51f9cd8d670d63bb312cb37c1f2e77ed76c262d60a022c78071189d8f1c0b79988bf545c48f30a0b7100f2448bf871102e5458bcc07c1f29786a4e06e3d72c12105b21e3d970d8e90e7b28858ec5eb2236e678a18efc9b845ae75a2a86d6643901072884165cba8e285983c5076abc0c07910f2546626a014b45646102bb94c411a6849444aaa4b74a9546b3d96ae8955af5a15a3bd17d6261ee915056cca6e8accf09c7fe84ece488919edc014dc264e2a75120277309d90909682b8b3d1b9d73c7e22fc4c1d8d4eb196eba9b6b99cadcaa62528ee7c3e29fd4c595acb078e1f9b4d3677223711c9038e439a55f86ef9d1b362edc90b7e9e78ed9bb952ce3c20b3975cdc1a837353b23e3aab8f8ce2f26e8ee39308312e13106ca599572bdd978d0cbe8e4d427229dc8a551398d41a52d2cfe587d8f8b9c837d06da51fb0110280a771d050000",
    ],
    [
      "ETag",
      "4qYHM0JguU5PvqPcT0/nbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ?",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1588956132723",
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
      "cd",
      "54",
      "5d",
      "4f",
      "db",
      "30",
      "14",
      "7d",
      "efafb0b217d0689ba405ba4e152b906dd9fa01490a6208b5267152431207db41aa10ff7db6d326a9d4b169dac3de927bee3de75cfb5ebf3400d01e711a687da0dde3e8294774f5ee81dc6b0712411c4612b1be9dea217938e21dafab2fdf7ba7ab69fa7e381814595855339864316a3292531fb1fecc6d4594e419a484340561f3586f1a87bdde87c323a3631e9b9da296a1381ce1f451322c39cf58bfdddef868458444318219662d9f2465bcfd6cb6334a1e90cf597b5bb62d9458fb6de19398f89063920e666e61226788ce5102712c6d54d5c1fda76dfa1686492b12d9cfd847d0f7499e7269ada0f1491ae228a78a5c30bd88a0082bcfe56f2da0b9d6c83af3c0d97436f1f6163091748b7d001998cf296279ccc167673a068b4ca82f21436c01aebf5a8e252294843846731c2cc0009c80e1e41c80d1f4da72f6168c0bd38267647fb7c089f2a674031442c1790eb9a0e23547122b82b6ba4a8e182fcb04b83e6c7bc73d6bebacd75225a39850cc5583f6c4b39ce199675f59950d71da2314417fe53ec9f30e61cc50550d294c1047744c0224292ea6aeedd9d3c9705431a803bcd8643291765b9aad7aaab379ab0c6d35ac605e44a5cda3ae56c35e0f76b25cc138df41f3bc0e6bc616476307dbdfb8f3ecb1e57ac3f1c53f7068eaa6ded44db1109e61f68d4edfe8b6745dfff10be3ebafbb464d52133bb536ac5dce2ce746d62a4c220e0a1145a95f9978737a2aca02fe832743a46f165856881d2ef5c5e073cc38f659a5ee53a4723d9c147754109afa61d7ec6d084521e53b327aa5244a",
      "83ddf896785e13469412eaa82dae2fbfb0c30ae73815d782834bf51a94b35defed691b4a106330521e26042490fb4b9c4680e12815d21481905010e6a92feb8bc74085208df204a51cc889627d500e540bb8799611ca5150b18884e21d713dc79e7cd9ffb8fe3dbdf12c573c4e1cdc1afd9e71a76d0d85eab6be89b5b7e5372dbfd9f47fdaf66637eeaa01e2cae1f97462a99968bc367e02174cf53e5d070000",
    ],
    [
      "ETag",
      "EJB0foj6t3T40h+TByOn+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4b5283300000d0bb645d3a956f71074c91166c092214370c85c8472684904852c7bbdbf1dde0fd80aaaed1b2946cfa42183c0359a9f6b6de86d3de952d8aeaa989ee16a3d9db10a956e61ccda7f51b433d2e1cd1042298c6ca57466cd42e74720d2ac809463e7b949f05ce1b5ad885dda46ae8b16ade1bb12e70e6ab8689a336e1b2ab2e9f7ae767912a0dce49928b847eb42d76ee47ef0a83a11faeec74d3f8ea07bb7702f5f67093e9d977941945af2e74539691f205d5f0640e960c3a7bb8341921cd215cd75dbc800d4082f4142d65ff9869866d6fc07fb36492a0c7d545154514fcfe019ec93b3e05010000",
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
      "Fri, 08 May 2020 16:43:25 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-71-1588956132723",
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
      "00000002ff8d545d6f9b30147dcfaf40ecb5f9242950295ab384b66c816c84b49ba609d960a85b8229369daa2aff7db621092c55d537b8f79c73cfbdbef66b4751d4479c45ea85a2429c3c95a878f9f440a07a2632888144647c6bfccdc997a3f9f5f2eacedc983f9d87af5f92e9b44261c9a6609ba7a84b495984885e6cd6bda420650e0a42ba5cb0ab0fbbc389619893f3a136d2475ac5a5288d97387b140af78ce5f4a2dfdffbe8258424290239a6bd906c0ff1fef3a89f17e401858cf6db65fbbc12edbf5ff8734a42c030c9a69b7565a2a4a808d016e054d838b22378d996ef61b0ed251cfd8c4304c290941913d62a999064314eca428a73a5571ee461e9f9f0db08a86b6b69cd7d252469b9cd820c6cd19912010602f69223e5ca5b398aed5ead3c67e6db2b3758cf6f2c67d69baf961bc75d2b77379667290cc01449ae32552ee59fcb7fa423592d4294e14c7af245b6e18467eb39da6f1ce1414288705714d5b0401f9c83a13130610cf53036b4098c07084203ea13a0c141688ed13882083415a4b38a0f329299009983b1360ab4181ac178024100e3891144461c69e3817eae6b915ab377875ec20201861698e684e27acaeadcb366be15d857816b590b6b716cfd6f814fd0779ecdc1beb771e79cd51c530cca942daa46db436a75cff83c9b8dbd37c19306f202136e4a9ebeedfa96379bfbf66dc3065fc5254a40f8b27e12cb188394a2231b14fc68192a1c12897354dd99d3ec572ed6f73d8872c4ef83cf633b1c28d645f672b22eed3a3edfc3d628aaa3aca2eadaf76cf75a6d24776fcbdc82b47c43e7b90eab399fd63d9f306d6975fefffad369d450f9d5aeeda93f3696f74b70654e643c14a30265e1b1ea07365d10abf4075e2e0edfbf2382c19f92437dca78985fba901eabcbcd1557105793af05478389ae197b414e2cd829c2d0cc3de2e42d11b5d016656c3f8bea4da906b96b592a1b76244dc0f93d70eb43dc75769d7fd4d4d96b10060000",
    ],
    [
      "ETag",
      "TE4KMpL2CGLFW9U9XMjJBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1588956132723"
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7ddfaf20f51522df1f263c80a09220220c25318494ed0e86dd3adb4e44c27fb7ed06ec05b344125fd6de7bceedc9bdedd9cec864d0bbebdbe8268316eef22304b6bd5a8278569b11f090082e9780fa1c5056b141e0a5627fbd345ecd8637694c2d52c2dee47bdb995e6f9acd88c5ad157858f2763292b1e302b1b98cdf749c89f31af3b107ea448b92d0f3e73acc9e60b10d343c3647bdc17d12f1a8ad91c1a4df6fb5fb5d1443fbec79111b0b3cd747fe4d42af332316436bba1881030c7c0b4e5d078caec1123d3d5e8ebd80408ed39059c063115518c14b46c300334a733295ab1572854abddea8540ba562ad583ad009b5b070a9af2a266374d417546032a21b3562548dee80456134f1c3289093b884e48424f4a98a5d1b1d73fbec2fc4dec0ac9613dc7837331295a955e5a41c97c0fc9fd4e595acb07ce1e9b4e367722171ecd1d01729a5effa4fad0b362edd90b6e94ecbec5e4a960be98594ba66efb13b365b8fc3b3e2f23b3b99a0bd15c0878c4a8f71d0ce2ae4cbf54aad9a4707a7de52e544a18c2a58083a6d61f9c77a7085cc39987030f6c60f44163d6f1d050000",
    ],
    [
      "ETag",
      "xV9WT9mU9Xcl3amUzyDX/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) LIKE ?",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1588956132723",
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
      "02ffc554614fdb3010fdde5f6165426c126dd6420bab54b102a916ad34d0a64568428d9b5c83218983ed746288ff3edb6993542a689a26ed5b7cefeebd67df5d5e6a08198f24098c2e3216247cca803d7f78a00be340212070a810f260ad06d7368b7f3926345767237f703dfbd9ebe5594457731ca711d439cd980fbc3b9d344246b314334aeb92b07edcaa37db27275fda9de661ebb87598d772889643923c2a867b2152de35cd8d8f46486918014e096ff8342ee2e6aa65a68c3e802fb8b92d6b4a256ebe2f7c1a511f0b4293de74929bc838b039c49844ca46591d2cbe6ed337088e1ba1cc5e111fb0efd32c11ca5a4ee3d36449c28c6972c9f4228332ac3d17c74ac0985843ebdc45e7ce74e47ef470ace8bc4f0873349f33e05924d060ec5c222f95eaf79803f7d0cd376b6cc908a34b12c19c041eeaa153d41f5d2034746eac718568687fb7d0a936a785035862497a8185e412154b0acb83b6eea5002e8a3209ae5fdbded168639df55aa8a48c504684bea13d72ad71ffdcb5675669433ef71042ec3f4f9ed4832f71c4a1acc60cc720805dd20014c59533b15ddb19f58725837ec1ab4d2697693f0ab3e59daa6cee730a5b17d6b0c8a3ca66e7c8a860af073b596638ca76d0acd661a3b9c551dbc1f637ee0643a7ff6ffced351beda3bd374caebfee6a1501432ed0da9c713db5c6b7aa56630a19c31218247e29f9eea4949439fc07ff0799bed956552117b6d0e74286b9203e2fd57d063ad72571de8f9cb0f5b9d369363784b290891d19adf62603926037be259e55848131cac67a65ab9b2eedf0dc39496413e48fb218e11838c7a1d69826f21538e04504484f362a1a8a3c0f9104a949409e7b7b65cdd7c3e01da0331ca08066aa4a37b88bf2f66e4efbf971dfd86aa8765add98ca3fe06dbbffc1f06622efcab609ad7ee18c2cdd89da6bed3765b212b2c0060000",
    ],
    [
      "ETag",
      "ijEvFQIrmzO/e1vBNcFQVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "72",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7fd9e7344316a56f944899a84b43262f86bdb075ed92b23afdf7667afee0fc800221324df93c34a4072f401407638ff6fea05ba222f7c91dc286f9ecda5b5a32242ee2427ebe9d8e9d8ea0497dad42a6c4daceb829ef3eb46def5a9690e524d66b6f3b9697afc52b53a592b2c00be880cc03ae66586578c37228c7d8aea1dc045a770eb50f38a4be8bad706af9980450b7a3c8955e9f56775ba933ada3e5f4732bab1e3fd55a1a53d578cbe21c1625dd228ac5a583b3b27c3bc6275dcef82e0477c00e9075649c4c397bcca06a183bf0dfcc673192c7d52205271cfcfe01b941285a05010000",
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
      "Fri, 08 May 2020 16:43:26 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-73-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545d6f9b30147dcfaf40ecb5f98224904ad19a2574454bc84648ab699a90ed18ea96606a9b565595ff3e1b48024b55f50deebde7dc738faffdd6d234fd91a45bfd52d321899f72cc5ebf3c50a85fa80c16205699fedd531c18285b1adf5c66ff08e00b08c0cb6452569102cdc12e4b709bd39c21cc2f37eb4ecc689e0146695b12b62db3dd1fdaf67838ea9b8665982596e3245a90f45131dc0b91f1cb6ef7a0a313531a271864847710dd1de3dd67a39b31fa8091e0dd66dbaeecc4bb1f37fe9a500404a1e964b32e45e41cb310ef0049948c137a0baf9af41d02769d58563f13840142344f859256d2209a4624ce59412e99de6450860bcdc7df5a405f3b0b6716688826f92e0d53b0c317da1608108ad70c6bd7fe6aa9b9def5ca5f4e0377e585ebd98db39c7666abc566e9adb5bb1bc777340160820bac36d1ae8a3f4ffe148a8a6e5bcc05490b4d81cad694c86ce5a3fbce111e29148954c57155165abd11e8dbbd318ca08522db1cc2a88721b4a1350426eca1f1000fb610833a43a1acc483541a858726b42d148e86360807108210c2e12034a0699a70047ad034f40abd3fce82180602cf09cf282795cbfacc77a68113bad7a1e73873677e1afd8591b3ea3bdf95c581bff1661255b729027922e6e5a04d931ad30be9677db08f1c3c1b2063844a51c5e9bb5ee0f8d359e0ded664c8555ce018a0d7f5935ac608241c9fd080c9a315982de9569da3ee4d97f5798bc5fa7928e2b2e2cf51e7691c59a8d6a598e56c5d9a7d02b9870d2bcaa32ca3fa3af05defbb5e4beedfa7b90549fe0ecf7315d633e9d6bd749837b85aff7ffd6dd57ae8f26a57f2f45f1bc7ffadb0454e657c1c61865374eafa894d57c032fd89974b961fde1185904fc9b13f17322c2f1de2a7eec5e6aa2b484ae72b42a337b2c747420964e2acc2ea19c6a1e2ec2d51bdf00ea7e2e045f9a69446ee1b92f29a9c02a6cae53df0aa43dcb7f6ad7f8aa0e9cd10060000",
    ],
    [
      "ETag",
      "1WqgT2cpM2BIr8KTbwaTaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1588956132723"
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
      "4d",
      "4f",
      "c2",
      "40",
      "10",
      "bd",
      "f75790f50a89c8a7261e8aa212ca8750e2c110b2b6d35a6c3b75778b41c37f77775ba0174d1349bc7477e6bdd99799ddd72fa352216f41ec92ab0a7909fcf714d8f6cc07f1a83633e06928b85c128c3990aa6283a0be624facfbde707893a2fff49934a7e3514f6cfae6f575c6e2ce2b4454f2be6424632f80d0e5327ed67125cf6b2ca611a8131d0cd3285ee9b07a84c536d1f0dc9e0dc6f74524425723e38565993dab4f726857fd59c4a582aef4917f93d0ebd2c8c5c81a5f66e00183d88163d709c3353862a0c7cb69948450e3983207782ea20a33d86798269421d664aad669d4eaad6ef7b2d5ae372e3a178d3d3d44878a006355b1989383be4041c3197ea811937676072c0bb389ef4741bcc225142724a18d2a0e5c72c8edaabf100763bbdd2c70f3ddd2285496569593f2821056ffa42eafe495ca175e4e3b7f262712a711a6b128297d674dcc13362edd50b6e95bd3ee9f4a960be98592baf660d49fdbe668faa3b8fc2e8f26e86d05f02943e9310eda59f5f366b7d5699f93bd536f50395128a30a96824e3b54feb11e0221731e0d39183be31b86c0d3f11d050000",
    ],
    [
      "ETag",
      "OLGBKKCuogWzp4PNMBtvEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) NOT LIKE ?",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1588956132723",
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
      "c5",
      "54",
      "5d",
      "4f",
      "e2",
      "40",
      "147de7574cba316a56a8e02724c475a1c44604b6148dd9183ab4973ada76eaccd4c418fffbce4ca12d099a7dda7d6befb9f79cd3fbd1f71a42c6334902a3838c05095f32606fdf9ee8c2385008081c2a24683a8b6b73d0ee395771737275677e6ff50761b79b67115dcd719c4650e734633ef0ce6cda0819cd52cc28ad4bc2fad971bd79727ede3e396d1eb5ce5a47792d87683924c9b362781422e51dd35cfb6884948611e094f0864fe3226ebeb6cc94d127f0053737654da9c4cdaf852f22ea634168d29d4d731319073687189348d928ab83c58f4dfa06c1712394d9afc407ecfb344b84b296d3f834599230639a5c32bdcba00c6bcfc56b25604cada1d573516f3c1bb97b1e8e159db78f3047f339039e45020d9cf10df252a9fe8839700fdd5d598e25238c2e4904731278a88b2ed0e5a88fd0707c67397b9e8ceda3d1d84543fbda4217da9c160e608925691f0bc9252a961496076d3d4b015c1465125c75dbde32686395f551a8a48c504684fe427be45ace65cfb56fadd2866cf71042ecbf4d5f54c39738e2505663866310c06e68008a62329edaae3d1e5d0e4b06ddc1c93a93cbb4df85d9f29baa6cee5b0a1b1fac61914795cdd363a3827d1c6c65b9c551b685e67515369a1b1cb52d6cffd3dd4ef364e71383aba7875a85de90c7b33266fc9a59cebdaad598421c580283c42f05bfdc92923287ffe2df20d3d797aa2ae4b116fa5cc83017c4e7a5bacf40e7ba24ce679113b60edb87e7cd35a12c64624b46bbc88024d88e6f88671561608c32479f6bf5caa51d9e3b27891c81fc4916eb1b03e738d41ab3447681035e4480f456a3629cc8f3104990da02",
      "e4b9f7136bae17c13b403f712011717a8cf46c3b484d76fdbcab5e768d8d496a8bd533a91cfee73effa5d3f50e3e9483125ab63f1e59baf7b58fda1f327c1ba7ae060000",
    ],
    [
      "ETag",
      "d1RbK/F9CRHm1PHW/+2DFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "dd",
      "76",
      "43",
      "30",
      "00",
      "00",
      "e0",
      "77",
      "c9",
      "754f8ff91bbb243a56a36261dc3869a41a5a0c43ececddd7b3ef0dbe1f402865e3584c5dc35af0020491cd3ddd1f3bc3121553ef1b6c21114d9936ba8bb2d72af3ec4f5c0adfe76767cbda4193d9c55bfdb7a7c53c94bc505ce1887119933eb0e4f99cd68d9c5c4fca61cac8e9667f2cbdb4c6f9b58c6ed4afe1d4c7d8231dcfe6f775918e68c1b04ec2fb34f3c6f09fe7ad0a310f7467a6abd432a40752fa55230a23f4dd0b8bc33944987bf6056908c6418ea99a478d2b272a1badce33c00eb0b5e7031b0bfe98299a69eec07fb39844cf1e578b91810de0f70f2ece2b8b05010000",
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
      "Fri, 08 May 2020 16:43:29 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-75-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "40",
      "ecb5f90e0ba914ad11a12b5b4236425a6dd3846cc750b704536c3a6555fefb6c43082c55d537b8f79c73cfbdbef64b4bd3f447926cf54b4d87247aca71b6fff040a17e213398834866bee4dbbf70ff64181bf070e33c5a3fbfce937e349d1628a2d80cecd218b719cd3384d9e566dd89329aa720a3b42d04db63a3dd374c73627cec0f07e3c1b0e0321c870b923c4a857bce5376d9ed1e7d74224aa3188394b00ea2bb2ade7d1e74d38c3e60c459b759b62b2ab1eedb853fc514014e6832ddac0b1339c359807780c4d2c689bd85574df90e01bb4e24d0cf04618010cd132ead153288262189f24c890ba517111461e5b9faad05f4b5bdb02d5f4334ce774990801dbed0b6808380ef53ac5d7baba5e6b8d72b6f39f39d951bacad1b7b39eb58abc566e9aeb5bb1bdbb3350e608c15579b6a57eacf153fca91aab6c58c934479f265b6e64464cb393aaf1c61252145842b864b5830ee7d047db33781211ca3d01c1a30ec61084d3836c010f6d06484475b88415d41392bf820a189e081091c4f829e313083111a80000c503f1862d3445213829e5eb20f552f28c380e339612965a49cb26e79f6ccb703e73a706d7b6ecf4fadffc9c819face7304d8f736ae2558f53185208ff9bc68b439a446f75cccb3ded85b133c6b20cd0815a6d4e93bae6f7b33cb776e6b36c42a2e7004d07efd2497310431c32736c8c4d1729c2de9569ea3eece96f57ed5627d3b829840fcaa7c9eda1140b92eaa97b37569d6",
      "f1c51e3646511c6511d5d7bee7b89ff55af2f0bacc2d88f357749ecbb09e8a69dd8b09b38656ebffafdfad5a0d5d5cedd29efe7d637b3f2457e564c6c321ce70824e55dfb1e99258a4dff17209f8f11d910cf19454f519176171e9103b55579b2baf2029265f0a0e7a93d1c83c0a0a62c6cf11865121cede12590bef70c28fb328de9462908786a5bc6647d1245cdc03b73cc443ebd0fa072f2988c310060000",
    ],
    [
      "ETag",
      "Judzbyq55UajHIkCZKDn1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5544d4fc24010bdf75790f50a11443e34f1501594842fa19c0c216b3b2dc5b65b77a72021fc7777b7057ac13491c44b7767de9b7d99d97ddd19a512f9f42387dc97c887ef7d25c0b7571ee09bda4c4024010ab9c42c1240ca8a0d483dc5ae7e7bd8e6d75d57bcae91879b2a1fbd7c9a0f0f294bd84b08a9e4ed642463d787c011327ed77129cb6b2ca221a8136d162461b4d061f904e336d6f0d49af4862f7924648e4686b37edf7cec774806edcbe7451c8a74a18ffc9b845ee746264656ec63022e70886c38751d73b6021b7b7abc8286710015c1126e83c84454610a7b9c2531e58c5564aad26a546a8d76fbaed1acd56f5a37f5033d6036459f45aa623625477d64488309dba81193667a073c0dd3891f4641dcdc25e42724a1b52af61d72ccedcbbf107b43ab799be366bbb991ab2cac2a27e5fa012cfe495d5ec992ca175e4c3b7b261712a7214b222c28dded8fcc0b362edd50b4e967d3ea5c4a56a0f442415dab37e84c2d73303e2b2ebff393091eb70862cc99f49800edac5af5b6dd6835abe4e0d427a69c88caa8c813d0699bca3fd6ab8f32e7d24080b1377e000aead7431d050000",
    ],
    [
      "ETag",
      "0xgt8r/FfsHvtrmw0rOGkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1588956132723",
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
      "ad",
      "54",
      "f1",
      "6f",
      "9a",
      "40",
      "14",
      "feddbf82b034e992aa2022dac4744ee94666b145b45b96450f38e8b5c0d13be8621afff7dd012246d734cb7e83f7bef77ddf7b77f75e1b82203ea1d8132f05d141c17306c9e6c32376c40b9e8129087866706d99ea5221ceddf7c16669cb8a3dff4c47c36181427935055112c226c5197121bd5ccc5b01c1590208c64d46d8d47a4d59edf7076a4f563a5a47296a290cfd298a9f38c3439a26f4b2dddef968051807210409a22d174755bcfdd26927043f4237a5ed43d93653a2edb785af42ec8214e178b8981726320ac90a460085dcc6beda733e1dd2b710885a0143bf201702d7c5599c726b058d8b631f0519c9c919d32b0bb270eeb9faad05c4b93ed5c7b6309e2d4cfb7c0d224eb7fe28002aac5604d22c4c856b6b7623ac13a6fe0028a46be1feab6ee92c42b08f42b842de5a180a57c2c89c08c27476af5be7159a5199335b981adf74e12ab798cb7b90a628ce4ddac00961cd1acb9683354e9c6945c14940ca144ad84a937a40ee4b03c77734d7ef2baae34bd071fa8ea602c591dc4117763d07823a43cab58b7a10e358757d49ee7a83aea202e84872cfed7b9ad395644d1e004dee00b9e32bb2a38925c3b6eac72510a470826882292a472f8e2d7d64eb2be37a65eafa449fecdbff4dd011fade3218d8b616e69855d547e503760a93a2d9c3411d4c206533ad37f7d6148f1a4808c2cc547e250cd3d6add1d83696351bec7e4e6100dccdfc99df501f8414eeab0101114c21b9c11e3f4bf17636376c63668ea67b86fccaddee9094c17e5666f73dd5d9ec4d7278338a432ba2dc66af2bd672db8b932c4b10662768",
      "5ecab0281f70344eb0fd8bbbb96d19e697ff60ef0c13109ffdc563f9f5ab511310d9c229bd89770bddfac16bf31ccf58d08704c6ee5ef21dcf8d1716e977ec5306df6d375ec1165ca54f5316662fdfa57bf5fce9f03d80a2e2380ac28e2ca95a7747c80a497a8cd03a15e268c3712d18c138ddcda2d874c520b70796b29a9dbc8cc3d94334cb13dc36b68d3f83421aa3a6060000",
    ],
    [
      "ETag",
      "9FRN5V3rbQX9yVT13TSBsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1588956132723"
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
      "4d",
      "51",
      "5d",
      "4f",
      "c2",
      "30",
      "147ddfaf58eaab8b02f265c2031854224199121f0c21655ce670eb1ded1d8864ffddb6db8097b6e79c7b7b7b4e8f8eebb29f48acd8bdcb9651b8cd401eae42a0a939f8a0b29894de52140ad8b5a906e2a1a9de8ad7e6ef74f279233b7ff492e1eeb11b897eaf5754a9e01b12aeeb8e1a69bc8e205e298dbf2c764bde6a8227606e5c2ca41d686f28353aa4561b4d3e864f43ff524a7065a5c96c3cee0fc643564ab9dde77acded5336b8f4610d124400e707a5123710d0c83a573c4963f014663200550e318d851c4acc522e113d4d79ed96576b763add66abd6a8b7eb8daa3cc6805384c274ccded9693e21f1d8c7bd71cf6a453cb280451855146c7d91cf65425ada99e63b76a2f2f234772a343f0f1b1c08d49b44ed45817570cbaa281ed058259304c90c2c1d70fd5bcf11959c933bff36977b4d18020000",
    ],
    [
      "ETag",
      "qnO5xQNW/r8ztKuovF9inA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cb",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "7f",
      "c95a1c25184d7720500a03588a0fdc64687a9187608468899dfe7b9d9e3f383f28e71c8681c94b031d7a412ad7e9944f83cbca5227b800dde42c5ab6704f78b88ff7b6503bfd6cc7e6a39cd50fe9ec56a58d5ddb9df979ec8a5bb17e25ea4ada34b91fbede95b63493bbeacd71ee4b7d45dadaea3f9c662bb1d41a2bc15d15c4692dbaf26890e21b3b9da761469b96906301c14dbf32234ba30535462d3b7d2a69989e338722149e144538a8086ed18eaf9359807dde1d36576f144bf6760ecd91655b3441308aaa878155cf195e503a41ff4d269580e7d582bc871efdfe019f57764c05010000",
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
      "Fri, 08 May 2020 16:43:31 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-77-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545d6f9b30147dcfaf40ecb509f986548ad628a11b524236425a6dd3848c31c42dc1149b745d95ff3edb10024b55f50dee3de7dc73afaffdda5214f51127817aada83e8e9e7294bd7c7a20be7a2532888148640ebb38c9c7cba7bf93d901fe74ee9ed33fbbf16c3a2d5058b229d8a7316a53926710d1ebeda61365244f4146489b0bb675bddd1b19c66434ee0dfa7a7f5070298ac3254e1e85c28eb1945e6bdac9472722248a114831ed40b2afe2daa1afa51979409051ad5956e395a8f67ee1cf31818061924cb79bc2444e51e6a13dc0b1b0716607fe4d53be83c1be1371f4014304202479c284b542069224c4519e4971aef4ca833c2c3d57bfb580ba3197e6dc552089f37de225608fae940030e0b1971429b7ce7aa558f6edda59cd5c6b6d7b9bf9577335ebccd7cbedcade28f75f4dc75418f06324b9ca54b9917f36ff918e64b500518613e9c915d99a139e2de768bd7184958410e1ae282a619ede1d839ed19df8a1afc3d0188cfcb08b7cdff0f51118f85d3819a261e023505790ce0a3e4848d21b7152a8071e478fbd61d01f7ac01f18de443786dd7e38003a1aaa25fb58f5023304185a609a128acb29ab73c79cb9a667dd7ab6692eccc5b9f5e70c5fa0ef1d8b835d676bcf39ab3ea610e4315b148d3687d4e89ef179d61b7b6f82170da41926dc943c7dcb764d673677adbb9a0dbe8a4b1401f8b27912cb188298a2331b64fc6819ca562410e7a8dab355bd5fb958df4e20ca11bf2a9fe7763850ac8bece5625d9a755cbe878d5114475944d58deb58f617b5963cbe2d7307e2fc0d9d431956533ead1d9f306d68b5fefffaddaad550f9d52eeda9dfb7a6f34370654e641c14a20c25f05cf5039b2e8845fa032f17879fde11c1e04f49559f321ee6970ed27375b9b9e20ae262f2a560bfd71b742b414eccd82562d8ef9e10176f89a885f62861a759146f4a31c863c3525eb3236902ceef815d1ee2b1756cfd03cd96621310060000",
    ],
    [
      "ETag",
      "vhlnu6Lqz9AvcZRVwpxh6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554cb6ec23010bce72b907b059567804a1c424b5b2a5e85200e154226d940681207db0121c4bfd77602e44215a948bdc4de9d598fbcebc951cbe5d0b71bd8e8298796ee6a1b013d3cac807fcacd1858e471269690040c505eb281e39564bbb3c761d330b61fcdddac6c4cf76dbde93b46ab15b398b5061f0bde514422765cf06c26e22f15e792bcc202ec833cd1225ee4070b15e6af303f840a9e98e3eee02d8df8c456c860daeb19ed5e0725d0297f5bc4c61c2fd4917f9350eb5c4bc4d0862cc7e00085c082ebad434a3660f1ae6a2fc37ee8418191885ac012115918c32b4aa21053420a2255a8d70ba55aa3d1ace9a54ab95eae9ce91eb1307749202ba61374d1e784636f4cf6b2c5488f6740e330eef8b915c8490d21dd2101edd45c6d74c99df2bf10bb0353afa6b8c96eaea52a33ab8a4e39ae078b7f5217235963f1c2b36927cfe44ee2d82751c0334abff686c61d2f2edc90f5d22f86d9b9972ce3c20b1975cd6ebf33318dfee8a6b8f8ceaf26681f38b01125c2630c94b34ac56aa356d78be8ecd467229dc8a551398d40a52d2cfe58ef2e1739077b0cb493f603049adf3a1d050000",
    ],
    [
      "ETag",
      "iW/O9AAqJ9vW2AUwB69mfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1588956132723",
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
      "ad",
      "54",
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "9e",
      "5f",
      "81982a7552131e79402a455d96b0152d252d21ada6694a0c18ea1630b5a15d56e5bfcf06921025abaa69dfe0de73cf39f7dabeaf0d41101f51e28be782e8a2f0298764f5e101bbe219cfc00c843c33994543f9f3ea72f8f822cb730013e9d76f703318942854545310a7116c529c130fd2f3f9ac15129ca78060dc64844d4d6f2a5d5def777b4a5bd5d476594b61144c50f2c819eeb32ca5e792b4f1d10a310e230852445b1e8eb771e9599552821fa09751695f56624a547a5bf822c21ec8104e06f3596922a7902c600c50c46decaa7df7d33e7d0b81b81532f433f220f03c9c2719b756d2783809509893829c31bdb2200b179eb7bfb580383326c6c81146d3b9e59c2e41cce9961f054085c582409a4799f0c59e5e09cb94a9df030ae952b8bb346c8345080e500417c85f0a03e142185a6341984cef0cfb748b6654d6d41126e63743b8282c16f23ea4194a0a930e702358b3c6b2d560cd2367baa5e02420630a156ca1c93da0e872df0d5ccd0bf476d70d64e8babaab7541db95bd7e07767c17823a43c6b5cb7a90e0a4eb05b2d2f1fb9d76174057567a9eee6b6e475634a50f3445058a1ab41557132b86f5b61f8f4090c131a229a6a81abd38b28da1632ccc2f0bcb30c6c678d7fe0b4107e83bdb6460c79e5b2356551f5500d8298ccb66f707b537818ccdb4dedc5b533c682025083353c595302dc7b08723c7bcadd960f7730243e0ad664ffc860620a270570d08886106c915f6f9598ad7d399e998536b38d931",
      "1457ee7a83a40cf6636b76d7539dcd59a5fb37a33cb432ca6df63a622db73e3bca720ba2fc08cd731516953d8ec611b67f7137736cd3fafa1fec9d60029293bf78acbe7e366a02225b389537f1666ed8df796d91e3191b0690c0c4db49bee3b9f1c232fd8e7dcae09bedc62bd882dbead38c85d9cbf7e84ebd783a7c0fa0b83c8e9250555445573684ac9064870855d73688830dc7b5600c936c338b72d395835cef59ca6b768a320e670fd1aa4e70dd5837fe009cfa904da6060000",
    ],
    [
      "ETag",
      "LSlA0ByHAkw00Uaen/xzaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1588956132723"
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
      "4d",
      "51d16e8230147de72b48f7b8914c91e996f83017e2cc989b3893250b3115af88835e6ccb8c31fcfbda02ea4bdb73cebdbd3da727cbb6c96fcad6e4c926ab34d997c08f3709c8993e8420ca4c0ab515c804903b5d0d9226badadbcf6e5d7f3efe08bed9f6fdade831d74b0ec3615d25e22de454d59d1452789342b6160aff186c37bcd118cd41dfb85c7233d0dcd068f258186d32fdf2c77e782de5b836d2741104cfa3c0278d54993d526b659eb2c355081be0c062b83ca8e0b883584e8c7341f322034760c96310cd10dd58cb09c7b2a01cd15194d31f381d6f3078f41e3a6eb7df75dbf20c632a5364ba633127e7f91225cd423c68f7a453c7c36b5887d146413657f95c27a4a43fdddc2367aa6a4e91d5a2e8326c7494203e392a2f028c837bd246f182daaad449485e82a163aa7eeb35950d6755d63f35318afc18020000",
    ],
    [
      "ETag",
      "5qQ+3ESGOLXnhMKp4n35gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfc97282300000d07fc9591d0dc8d21b299b05b14081944b06d2203bc862c14effbd4edf1fbc1f9050cac6914c5dc55af002d604ca3bbab33a09ad576a29a55e8ba6179dcb6fa390e923d355de6e31e4ca745b08081b3c227215b3683f57aac74d104239eb9459f4b88b7ad3eaf9705d2a3e4ac5bb1ba2dbd7291785ae4989b9b64b2e694468151a9e3e30575e143f37ed2d0d32144a2c78556c1f62a7afdf098973bb3354828f666cb412ffc998fba61a7cd1c5931628ed395a9ce8801f4b831d11fa4da2bbd69ea20a6c005bfa626023299e33ee28cb1bf0df24d3dab3e715b1646003f8fd0359d6b07805010000",
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
      "Fri, 08 May 2020 16:43:32 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-79-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54ef6fa24010fdee5f41b8af557e68159b98ab517a3551bc22b6b95c2e641706ba576429bbb4691afff7db0554389ba6df60e6bd376f6667f7bda328ea134943f54a5131899f0bc8dfbefda558bd9019e0289699e7d7bef6fa30f7acecf6c95e16430785c6f26e32a950a46433b4cb12e8325ae401b0abeda617e7b4c8504e6957087647e3ae716959e3cba1d1374766bfe23248a225499fa4c223e719bbd2b4838f5e4c699c00ca08eb0574778c6b2fa696e5f42f049c69edb29aa8c4b4cf0b7f4f688038a1e964bba94c140c721f768824d2c6891de2ebb67c8fa05d2f16e81712000a025aa45c5aab64029a46242ef2525c28bd8ba008979e8fbf8d80bab197f6cc53029a14bbd44fd10e2e941071e4f3b70c941b77bd5216cecdda5d4dbdc5daf137b35b7b35edcdd6cbedcad9280fb7b66b2b1ce1044aae3251aecb3f47fc948eca6a21304ed2d29327b30d27225bcf71f1c1111e25a48870c5a086f9237d880c4b1fe3088f82c8ea5fe248078c2d3cba447dac07e3010c420ca8a9503aabf828a5a939d4711861d3d7fb96e90ff070e05b860e7e0438d487608c23b0d49abd3ff612e48038cc09cb2823f594d5996b4f3ddb5fdcf88e6dcfedf9a9f5d79c9ca11fdc85007beed6990956734c112a123eaf1a6d0fa9d53d17f36c36f6d904cf1ac8724285a9f2f4178e67bbd399b7b86fd810abb88418056f9b67b98c114a189cd8281747cb215fd1509ea3ea4c57cd7ecbc5fa79003181f87df4796a4700e5ba94bd9cad4bbb8e27f6b0358aea28aba8baf1dc85f3436d24f71fcbdca3a4f840e7a50eab9998d6a398306b6975fefffad369d450c5d5aeeda9775bdbfd25b9654e665c882087343855fdc2a64b6295fec2cb25e087774432c45372accfb8088b4b17b053f57273e51524d5e46b41d3302dd338080a62cecf11637370409cbd25b216ec20e58759546f4a35c87dcb52d1b053d2245cdc03a73ec47d67dff907887825cf10060000",
    ],
    [
      "ETag",
      "qw3/wWDT8pHkELu6Nad1LQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1588956132723"
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
      "02ffc5545d4fc230147ddfaf20f51522205f9af0808aba3811b7f1640829dbdd1c76eb683b0d12febb6d37602f9a2592f8b2f6de736e4fee6dcfb646ad86dea3c4475735b48cc275066c73168278511b1b784604974b4a130ea8aed82070a8d8e1b978e1cf6b309d47d2b2d8dac9c65ff87338cc59dc7b83184bde5646320e22203e97f1ab8e6b455e63098e419de85192c5c94287f5232c36a9861dd73627f76524a6be462633cb1a5d5b635440bbfacf223e1678a18ffc9b845ee746218656746943000c120f8e5da78caec013a61e2fc7714aa0c169c63ce085882acce190d12cc58cd2864c35fa978d567730b8ecf65a17ed7efb624f27d4c322a289aa9839e8a02fa8c0c4a69f6ac4a897df01cbc37ce2fb51a0a07409e50949e84315473e3ae476f55f88e6c4ed754adc6237374a959555e5a48288c0e29fd4e595bc61f9c2ab6917cfe444e238a659222a4adf59cfa313362edd50b5e9db913b3e952c17d20b15755df369ecb8a3a7e98fe2f23b3f9ae07a23804f19951ee3a09dd56a7606dd7eaf89f64ebda1ca89421955b00c74dac3f28ff51009990b30e160ec8c6f952e45eb1d050000",
    ],
    [
      "ETag",
      "g/tQsOqeISKl1LrqSuEzaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`date`) NOT LIKE ?",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "%2020-02-15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1588956132723",
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
      "00000002ffc5546d4fdb3010fede5f616542308dbef2d655aa580741449496a529884da871936b7049e2603b4c15ea7f9fedb4493a15344d93f62db9e7ee791efbeefc5a41c87822b16f74903125c1730a6cf1614ea7c6be4240e040219727ed23eb8e7cb5bf5b17be79b1f839bfea7f0abadd2c8be86a8ea324842aa729f38077c6a35ac0689a604669551256db8d6af3a8ddfe7c74dc3c689db40eb25a0ee1ac4fe227c5f02844c23bf5fada472da03408012784d73c1ae5f1fa4bab9e303a074ff0faa66c5d2af1fafbc2a721f5b02034ee8e47998994039b408449a86c14d5fef4cb267d8de0a816c8ec17e201f63c9ac64259cb683c1acf4890324d2e995e655086b5e7fcb714304666df3c73d0d9703c70f65c1c293af723c21c4d260c781a0a74610faf919b48f547cc81bbe8eed2b44d19617446429810df455d748a7a837384fac33bd3de737d2c40d20c860eea5b57263ad5f6b4b40f332c69cfb1906ca2644a6159d0d2dd14c0455e26c1d57d5b5b5a6dacb296b94ac2086544e8335a03c7b47b678e756b1636e485f721c0de62f4acae7c86430e453566380201ec9afaa0286e8623cbb186835ebf60d07778b3cee432ed476eb6385399cd5924b071600d8b2caa6c1e1f1a256cb9bf95e51687e9169a9755d8686e7054b6b0fd8dbbf39e63fe03733bad46ab516db4e43eecbce173f5f55029c918728b56fe8c6f63d3be57b51a53880d3360107b85f0bbc3525066f01f3c12327dbdb2aa426e6daecf850c73413c5ea87b0c74ae43a2ac251961ab79707c9213ca4226b664b40fd71910fbdbf10df1b4240c8c5166ebbd2dafbbb4c333e72496ad90af653ec511708e03ad318ee52d70c0d310901e6e94b715b92e223152c3805ce7fec69ca87970f79195f121b5f01db45b6eef2ed25dff3d6a6cf4551b2eef4ee93578dbf5fff3bd9ecf87a28922db8fe140efc7b2b2acfc024c3bbf10d3060000",
    ],
    [
      "ETag",
      "H785IWiBRZIFdEFywjKL+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b8e82300000d0bb742d6614186176f229f28b5544810d294df9480a481b04cddc7dccbc1bbc37c08450ce73d1b7b4033f60c15b7d4dd67eaf194b55a6ccea68a66159b8d264dd67f3f5d59e877436432d2d025c7a8f1d89bae724baca7aa1bded0d5274dcb0c4219e2a3397ed10eb8a608b38360d7ef337415cfa23ccee0f5ea25b282b6a60b61ac7c8ff86a681247a20d9f372e861d1d7934c34ccec9e28d883d5e902fb795fc70d8c87abc9e2edc90914028b3ab542e49ca3234e479b5d975924aa10419ba82e58013a0fcd4879de7c66b2aaeb2bf0dfccc532d0cfd5a078a423f8fd0339b094e405010000",
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
      "Fri, 08 May 2020 16:43:33 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-81-1588956132723",
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
      "5d",
      "6f9b30147dcfaf40ec71cd370452295aa384ae4809d90869554d1332c650b78029369dba2aff7db621092c55d537b8f79c73cfbdbef65b4751d4279c85eaa5a206387e2e51f1fae59104ea85c8200662917960375f9ffe2e87bb88a6294bef9d7bddc4f3d9ac4261c9a620cd13d4a5a42c20a297bb6d2f2e48998382902e17ec9ac3ee5037cda93e198e47c6685c71294aa215ce9eaa2a2ca797fdfec1472f26244e10c831ed41921ee3fd97513f2fc823828cf6db65fbbc12ed7f5cf85b4220609864b3ddb632515254f828053811364eec30b86acbf730487b3147bf60880084a4cc98b056c9409245382e0b29ce95de789087a5e7e36f23a06ead95b5f014489232cdfc0ca4e8420901033e7bcd9172ed6ed68aed5c6fdcf5dcb3378ebf5ddc58eb796fb159edd6ce56b9bbb15c4b61204890e42a33e54afe39fc473a92d5424419cea4274f641b4e78b69ea3fdce111e2584087745510df38dc1040ccdc13488020346e6580fa2010a02333074300e0670aa212d0c10682a4867151f642433cc8109b549e4c3c964e46b606cf8d310ea7ea8e9104c034d3726865ab3f7c75e608100434b4c7342713d6575e15a73cff2ed6bdfb1aca5b53cb5fea7c067e83bd7e660cfdd390bce6a8e290265c29655a3ed21b5ba677c9ecdc63e9ae0590379810937254fdf763ccb9d2f3cfbb66183afe20ac500be6e9fc5324620a1e8c406053f5a868a3509c539aace7cddec572ed68f038872c4afa3cf533b1c28d645f672b62eed3a1edfc3d628aaa3aca2ead6736de7bbda48eedf97b90549f98ece4b1d56733ead073e61dad2eafcfff5bbd3a8a1f2ab5ddb537fee2cf75e70654e645c14a10265f054f5139b2e8855fa132f17871fde11c1e04fc9b13e653ccc2f1da4a7ea7273",
      "c515c4d5e46bc1d1703cd5b583202716ec0ca10df4e10171f696885a2845193bcca27a53aa41ee5b96ca861d4913707e0f9cfa10f79d7de71f79fff15310060000",
    ],
    [
      "ETag",
      "htH+kzD1UfsmmtmYNY58iA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1588956132723"
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
      "000002ffc554514fc230107edfaf20f51522a8c369c2c354d4258008f3c91052b61b4ebbdd6c3b0c1afebb6d37642f982592f8b2f6eefbae5f7ad76f5f56a341dee23424970db28897ef39f0f5d112e4a3de4c40e44c0ab564980a204dcd0649979afd74edd89fdee2f1ee5830e7bd3d5ad9435cb9bd5ec112c10b2454f1be54a4e22806160a153f9bb851e60d96d204f48901b23c49e7266cee60b9ce0c3cf527dee8ae8a24181a64f43418b857833e29a14d73bf4848259d9b23ff2661d699558a91575c4c20020e6900bb5b671c5f21909e69afa049c6a02530e7018852441716f092639e518ed852a996d369756cc7b9b0bb9dd393f393d32d9d6140658ca999c094fce84b94944df043b798748b19f0222c3abe6d05892a43a87648412b5d1c87e427b769fe42f4467ef7acc22d7733ab52595b55752a8a19ccff495d8de485aa175e4fbb7c260712a709e6a9ac297d3b78700f7871e586ba97be71fdfea16485545ea8a9eb7bc3fed47787e3bde2ea3bdb99e06a2d418c392a8f0930ceeab4cf1cfbbcdb265ba75ea376a2d446953c07930ea8fa63ddc752e522ca04581beb1b241a8c0d1d050000",
    ],
    [
      "ETag",
      "UC85zIbQG/sl8q0Nv5MovA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) NOT LIKE ?",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1588956132723",
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
      "00000002ffcd545d6f9b30147dcfafb0d84b2b2d1fd0a64d33455d96b20d2d811648abaeaa12071cea1630b54da6aeea7f9f6d12205ad64dd31ef606f7e39c73afefbdcf0d00b4079c865a1f680b1c3de6883ebdb9270bedadf4200e23e98993c5f72e5f9c58d72332b1b1e9f82c587d1b0c8a28acb2194cb2183519c96980587feab5224af20c52429a02b0d9339a7ab7d73be91ee907c6b17150e432142fc7387d9008779c67acdf6e6f74b42242a218c10cb3564092d2de5e19ed8c927b1470d6dea66d0b26d67e9df8342601e498a483a95788c819a23394401c4b195576b878bf0ddfc2306945227a8503048380e42997d20a9880a44b1ce554810ba467611466a5b9fcad1934cf1c9b231f8c9ca9edefcd6122e1e6fb0032309b51c4f298838fae3301f34cb0df4186d81c5c7d365d53582859e218cd70380703700a86f6190063e7ca74f7e68c0bd102c7767c30b6be98e054e953dc215a42817b06b980e33555d257182df59c1c315ea609e7bae1d68eb7d6d6512f254b4631a198ab222ddb37dde1c8b72ecd4a86e8f818453078f21e65cf973066a8ca86142688233a21219210e78e67f996630fc715826ae2f9269289b09b526c55531dcd7fcad056c1cacd0bab947974a8d57c2f6f77a25cc238df01b35a9b357d0ba3b103ed6fd4f9d6c4f4fce1e4fc1f28343a46a7d9914be1eb465f3fe8eb87ad4ea7f3f517c2d75fb78d1aa526f66a2d58bb989aeeb5cc553ee971d112519406958857a7a7822cdc7f703644f866896586d8e3925f0c3fc78ce38055ec01452ad6c749f14605a0a11f1d9e94802291f29f23bac7c79b089486bbfd5be4798d18514aa8ab36b97e00841c5628c7a978161c5ea88b50ce76bdb6c76d5782188391d2601390401edce134020c47a9a0a6082c0905cb3c0d647e71109409d2284f50ca819c28d607e540b580976719a11c85158a08286e89e7bb96fd69ffddfaf7c3b56f7ae2407170a3f77bfaadb63514aadafa26d66ecb6f4a7eb5e8ffb4eccd6edc5603c495c233c736d54c345e1a3f00",
      "069c198561070000",
    ],
    [
      "ETag",
      "lmbz5tb9IYCoMNiEOTscvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcf4b5283300000d0bb645d3a5a3e06775024958f5850816e9804523eb62424c0401def6ec77783f703705952298b917dd31e3c8315efcc6db9f519b4d7fa9c1ba472e1307d948d9aa5cb514f488418b33dc561affc16674b867c1596dae3c4796d386efab03441cbe0d3976aed8c5ba2d751f2396495e21566ad5d4fa18cf90bca63c4ae52bc755d23f764d62e9c3b248171d0a1401efa80ce8ac80fcd981679d285f082c354ac8e3f0d6a5fba338229b615253a4764ad90ee3382df697b22d03a3a96932b1ade7b21b1c006d085b782caa2bdcf54dd3437e0bf598c2ba7f7ab4db1a002fcfe01d071f7fe05010000",
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
      "Fri, 08 May 2020 16:43:36 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-83-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d54db6ea330107dcf5720f6b5cd05722195a26d94d02d52427681b45aad56c81843dc02a6b6691555f9f7b58124b0a9aabec1cc9c33672e9ef78ea2a8cf380bd51b450d70fc5220bafff64402f54a7a1007b1f44cc669bfd8eddc91b9a40f6f46be4b568ffbb7d9ac8ac2259a81344fd03523058588dd6cdd6e4c4991034ac8b520bc36f4ebc1c830a6a3f140d7269a5e61194aa215ce9e25c38ef39cddf47a471ddd9890384120c7ac0b497ab2f75eb55e4ec913829cf5da697b2213eb7d9ef87b4220e09864b3ad5b892818a23e4a014ea48c333a0c6edbf45d0cd26e2ca25f3144004252645c4aab6820c9221c17b424174cefc228cca5e6d36fc3a0bae6ca5c780a244991667e065274a58480039fef73a4dc399bb562d9771b673df7ac8dedbb8b7b733def2e36abedda7695c77bd331150e8204955865a6dc967fb6f8291595d942c438ce4a4d9ef43694086fdd47eb83119e28248950c5501de64ffa633030fad3200a263032f45110f5511018c16404f4a00fa743340c03049a0ca5b20a0f3292c148d3c67034f68d0108fda1188e0f8c68e087135d0b227d88f420546bf4e1540ba40870b4c42c270cd75d56178e39f74cdfbaf36dd35c9acb73e96f145f443f3a9608f69cadbd10a8669b2250247c5915da6e52ab7a2efad92cecb30e5e1490534c84a872fa96ed99ce7ce1590f0d19621557280670efbec8658c40c2d0190da8182d47744d423947d59eaf9bf5968bf5f318c444c49f93ce73392250ae4b59cbc5bab4f378620f5bada846595955d7732cfb87da701e3ea6790049f101cf6b6d5673d1ad9de8306b7175fefffadb69e450c5d3aee5a9bfb6a6f35b624b9ff43828421465f09cf50b9b2e8195fb0b974b841fef8844885372cacfb8308b4707d9397bb9b9f209e2aaf335a136181bc3e991500029bf8898f407da31e2e296c85c2845193ff6a2ba2955230f2d4945434e0993e1e21dd8f5100f9d43e71f5a4b0e3b10060000",
    ],
    [
      "ETag",
      "76m0uhhS5EDrVw8phlLWyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1588956132723"
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
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "7d",
      "ef",
      "af",
      "90ec71cafcd60d7c50a753a8ced50a832112dbdb5ad7365d924e44fcef4bd2aa7d711426eca5c9bde7dc1cee4d4e0f5aa1803ebdd0464f05b4f6dcaf18e8fece05fe263706b0d8e74c2c110919a0a26403c7ae64b35dfce00dfaf7d40adff561d91839d51ab89d4ec262d606022c78071189d8f1c0b799883f545c48f30a0b7100f2448bf87110ae5458bcc07c1f29786e1ae3e94b160988ad90e942d7bb3d7d8052e858bc2e62638e57eac8bf49a875a9a562684bd606384021b4e0d27544c9162c3e56e36538887c283112530b582a220b13d8a5248e3025a42452a576ad5469b4db8f8d66a5566d556b27ba4f2ccc3d12ca8ac51c9df539e1d837c84e8e1835933ba049984cfc340ae4642e213b21017dcb62cf46e7dcb1f80b713c359bf50c37dd2db54c656e553129c7f361f54feae24a3658bcf07cdae933b991380e481cf29cd243fdb57bc3c6851bf236fddc3507b792655c7821a7ae399e0ce6667732bb2a2ebecb8b097a7b0e6c4689f01803e5ac4ab9de6eb49a6574726a9f48277269544e6350690b8b3fd6c8e322e7609f8176d47e00a7907f771d050000",
    ],
    [
      "ETag",
      "swu/iEC+rcnXLF0RHf23eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) NOT LIKE ?",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1588956132723",
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
      "c5",
      "54",
      "614fdb3010fdde5f6165426c1a6d965258a954b10e8296511ad6a62034a1c624d7cc90c4c176800af1df673b6d924a054dd3a47d8befddbdf7ecbbcb730321e38ea4a1d143c60d89ee73608b77b7f4c6d85108081c29a46d3d89bbeed3c7ef8fce25b7c4a9f8640e168ffd7e91457435c749164393d39c05c07bd3492b6234cf30a3b429099bdd4ed3daeb760ff6f6adddf6e7f66e51cb219e0f497aa7187e0991f19e69ae7cb4224aa3187046782ba04919371fda66c6e82d04829bebb2a654e2e6dbc287310db02034ed4f2785899c039b418249ac6c54d5e1cd9775fa16c1492b92d90f24001c04344f85b256d004349d9328679a5c323dcba00c6bcfe5b1163026f6d03ef2d0913b1d79ef7d9c283aff03c21ccd660c781e0b743276cf909f49f55f9803f7d1e5377b6ccb08a37312c38c843eeaa34334181d2334742fed718d68e47a68e89cdae8501bd4e221ccb1243ec642f2899a2d85154147f7530017659904972fee6c68b6b1cc7a29553246282342dfd21979f67870e439177665433ef910221c2c26f7ead1e738e6505563861310c0ce68088ae2dc9d389ee38e06c38a41bfe2f92a93cbb49fa5d9ea4e75366f91c1da85352c8aa8b2b9df316ad8cbce46960b1ce71b681e9661c35ae3686c60fb1b77274377f06ffc6d59adbdced62b26975fd78d9a8021976869cef831b5c757aa56630a19c31c18a44125f9e6a4549405fc07ff0899beda58552197b6d4e74286b92001afd403063ad72349d18f82b06d750f2c6b45280b99d890d1eeac32200d37e36be2794d1818a36cacd7b6beedd20e2f9c93543641fe2ccb114e80731c698d692a5f8103be8901e9c946654391ef2392223509c8f7aeceedd97218fc1df4158728a4b9aad20deea1a2bdabd37671dc36d61aaa9dd637a6f60f78ddee",
      "7f30bc9ac8ebaa6d42ab1fbb235b77a2f1d2f80db5842940c4060000",
    ],
    [
      "ETag",
      "21xtk8x+JwIWs1tKt0/Ayw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfc97282300000d07fc9591d16b1d09b14064187c5802c1726d2b08880ac49e8f4dfebf4fdc1fb0128cbf038a65357e3167c0286046597edce9dacb2227f2aa7253456bb41b246ac5265828dc38454411d476a56f7feb7028bf2e63cdb6d4c424a04989c99a42b50d43eb8d0f30c0e267cb13c605158d4abda84d939eaa9c87b690e910bdd5976b662d9ca3e35af93563a55741df2ceb4cdec215183dbc7fb3a3e39c7d9d485201a426491fbfd401aff02a3b59f9bb909f8831b274b283257f767e77893e4afbe592fac001b80e9ab1af09856ef992829ca06fc37d389bdf0fbaa6234e001fcfe013017354a05010000",
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
      "Fri, 08 May 2020 16:43:39 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-85-1588956132723",
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
      "ef",
      "6f",
      "a2",
      "4010fdee5f41b88f577fa2159b98ab516c4d14ef10dbbb5c2e645906ba3d6029bbd898c6fffd760115cea6e9379879efcd9bd9d97d6b288afa97c49e7aa3a82e095e3248f75f9ea9ab5ec90c7014c84c64eeeebe1a7bd4cd663f6363763fbf9bea9dd7f1b840919ccd509484d064344b31b09beda615a4344b504a69530836f541b33bd0f5d1e0baabf5863dade03208fd2589ff4a8527ce1376d36e1f7db4024a83105042580bd3e8146fef7aed24a5cf80396bd7cbb64525d6feb8f0b79062c4098dc7db4d612263903a1021124a1b67b6e7ded6e55b0445ad40a0770403c298663197d60a194c639f04599a8b0ba5371114e1dcf3e9b7125037c6d298da0aa66116c54e8c22b8523cc491c3f70928736bbd5216e67c6dad26f6626d3a9be9bdb19ab4a6ebe576656e94c77bc332148edc1072ae32566ef33f53fce48ef26a1e304ee2dc932db31527225bce71f1ce119e24a48870c5a08439c3ce35eaea9d91ebbb43ecebdac0f53be0baba3b1c20cdede0511ffa9e0ba8aa903b2bf828a671471f60ec0d34a703bae7f47b1a382e1e5e3b43e4fbfd2eb89a0623b5641f4ebde014108719610965a49cb23ab58c896d388bb9631ac6cc989d5b7f4dc905fad15a08b06d6dcda96055c7e4a32ce4b3a2d1fa906add7331cf6a631f4df0a28124255498ca4f7f61da863599da8b878a0db18a4b0810de6f5ee432fa28647066a3541c2d8774453d798eaa395955fbcd17ebfb11c404e2f7c9e7b91d0194eb92f772b12ef53ab6d8c3da288aa32ca2eac6b616e69d5a491ede97794061f68eceae0cab8998d6939830ab6935fefffad3a8d450c5d52eeda93fb686f54b72f39ccc58",
      "e0430a313e57fdc4a64b6291fec4cb25e0c7774432c45372aacfb8088b4b87d9b97abeb9f20a9262f2a560af3beae9a3a3a020a6fc12d1ef9e10176f89ac0511c4fc388be24d290679a859ca2a76729a848b7b60968778681c1aff005638253510060000",
    ],
    [
      "ETag",
      "mNvG+Eya1uDXnEDHFGC80w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1588956132723"
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
      "0002ffc554514fc230107edfaf20f5151241c069e203080ac94484111e0c2165bb8de1b69b6d2712c37fb7ed86ec05b344125fd6de7ddff5cb5dfbedcba854c85b10bbe4b6425681ff9e02db5df8205ed466023c0d05974b82310752556c10d457ecedbc677efa980e3683d53d9fd9ce7a6e252f7777198b3b6b88a8e47dc948c65e00a1cb65fcaae34a9ed7584c2350273a18a651bcd461f5088b5da2e1a93d198e1e8b4884ae464633cbea74ad3ec9a17df5b4884b055dea23ff26a1d785918b910dae26e00183d88163d709c30d3862a8c7cb69948450e3983207782ea20a33d86798269421d664aa66b66af59669deb4daf5abc675e3ea400fd1a122c05855cca6e4475fa0a0e104b76ac4a49ddd01cbc26ce2875110af7009c50949e84315072ef9c9edabbf108723bbdd2c70f3ddc2285496569593f2821096ffa42eaf644de50b2fa79d3f933389d308d35894947eb09e3b676c5cbaa16cd3bd8edd3f972c17d20b2575ede1537f6a779ec627c5e5777134417727808f194a8f71d0ceaa5f36cdd675fb921c9c7a8fca89421955b01474daa1f28f350884cc7934e460ec8d6f9eba794f1d050000",
    ],
    [
      "ETag",
      "wWD8xgouHjHbCsUTchWLpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ?",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1588956132723",
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
      "c5",
      "54",
      "dd",
      "6f",
      "a2",
      "40",
      "10",
      "7f",
      "f7",
      "af20dccb5d523f10506cd2f48cd296c4628bd8dee572d10506bb2db074177a318dfffbed022a46afe9dbbdc1ccfc3e667677de1b9224bfe02490cf25d9c3abd71ce8facb33f1e43391810cad4486a9c94d7877aff4a6ce707d9f3bf18f6bc486171765152ed00cc569044d4672ea033b9fcf5a2b4af21451429a9cb069f49a8a6e1803bda7a8dd7e572db10ca270829317c1f09465293b6fb7b73e5a2b425611a014b3964fe25dbcfdd66da7943c839fb1f6a16c9b2bb1f6c7c29711f151864972319f95267206740131c291b0b14707def743fa1646716bc5abdfb00fc8f7499e64c25a49e39324c4ab9c16e49ce99d0779b8f0bcfbad05e499393147ae349ace6df7eb12c5826ef94d424c5a2c28b03ccaa42b677a2b2d53aefe8418b0a5f478633a268f5012e2081638584a17d2a534b4c792b4acfe0a3b8554002cc34961c8455e04351b3c5b0dd13a717e3b0a418232ae5d952dfa9d1e528ccec00bbdbe1f1aaaee851df03cc3ebeb48f53afe40032df000d51932a15de2514212435560a005d0411d458720d0b51e685db5abaa5e4fd3c040034ff3f4b02f570c9b5d3f3e0594c118b394305c8d591e39e6d03517d6d5c236cdb139deb7ff87e2a3ea47c7e2c5ae33b7471c551f5588f8c4c765b387833a9840c6675a6feea3291e3590524cb8a9e2f82ddb359de1c8b51e6a36f85d9cc00af9ebd9abb88d218a18ecd188a21832a0b724106729df4d67966b4dede164cf505cafbb6d25e365bf7666f73dd5d9dc757a7833ca432ba3c2664f936bb9cdd94996",
      "0714e52768deaab0ac1c70344eb0fd5777fa3fec555fbf1b357299ef95ca967c3f379d9f025be444c681102824fe5eee132f4d00cbf427d6262fdf2e3181e07b6ca7cf321ee68fde677bf5e2d5881580e3aad782b0db553b8ab625e4409a1d5728da4ef26891092d8821c9b6b328175a39c8cd81a5bc66a7808972fe066dcbbe2ecc37368dbf021366058d060000",
    ],
    [
      "ETag",
      "s3nHfPQ16ORAyQuRmXGasA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1588956132723"
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
      "4d51d16e8230147de72b48f73a92a151d9121fe642269390c9f46931a6e28581c0656dd9c20cffbeb680fad2f69c736f6fcfe9d9304d724acb237932c9214dbe6b60cd5d0262ad0e21f03a175c6e15961cc8bdaa064113551dacec3f6f56d96ff1b609579b53e664cb6c3d9f77553cfa8282cabab34412c729e4472ef1a7c666cf6bada405a81bf77ba607ea1b7a4d3495d6bc60e3bebae1ad54e0514bc1d6f79f17be4b7aa9d5fb4eaead7e4a86871062605046707d50c530834878da39a7459583c5b16611f07e886aece484615d51866849ca72a6963d719cc7c9d41e8f66a3f1509e6344458aa5ead87e90cb7c8182e621fe2af7c4eee2611decc218a220f14d3eb70949e9a76bbe506d7fda1903da5d872d1a01fc9da1f4c2413b782043142fa8ac0a95846035683aa2f2b796a9e839a335fe01ad81513918020000",
    ],
    [
      "ETag",
      "NK1zI7p1JfUyRKTkj8jHjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb646d1c2ba435dd8950302a1f1df96d32344612a840435ac04eef5ea7ef06ef07148cf1bea7baad79035ec1542cf19ccd77edca9a4a964223cb7bdfab0233f1a5b82035ae4be937aa463be2c431244258e99ed407d621ea56c8cf06447328d2e9961e9d4a5ae953161f93771ab5c6b084f6aa59abf3750878a9bd76d41cba9491c8b04d912fded847c223186aac6b4a02cdc33382f9980dbeb3df361eb945dfb2b3bf0e976767f3f229eeae086fab613b6d428531e1d7857bc52775b14fa123f2d20433c0c74e2ade53f9981908e319f86f523d75fc71b578a1b802bf7f190f833805010000",
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
      "Fri, 08 May 2020 16:43:43 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-87-1588956132723",
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
      "5d",
      "6f",
      "a2",
      "40",
      "147df75710f6b57ea2a24dccd6285d4915bb886d379b0d1986814e0b0c9d19da358dff7d670015d6a6e99372ef3de79e7be6cebc3714457dc689af5e2aaa87c3970cd1ddb727e2a9173283380865265eae778b9bdbe7fee2e6250ae8df87076b74379d4c8a2a9ca31988d3083519c92844ec72bb6985946429a08434056173a437bb83d1683c1876b59eded30a2c4351b0c4c9b36478e43c6597edf641472b24248c1048316b41121fe3edd75e3ba5e40941cedaf5b66dd189b53f6ffc3d2210704c92c9765388c818a22e8a018ea48c13daf7aeeaf42d0ce25628aa5f3144004292255c4a2b682049021c663427174cef2228c2b9e6e36725a06e8ca531731448a22c4edc04c4e842f101072edfa548b9b6d72bc5b4aed7f66aea986bcbddcc16c66ada9aad97db95b551ee17866d281c7811cab1ca44b9cabf2cf1912bcabbf988719ce49a1c99ad2811d9d247f383233c524812a18aa1b2ccd53b43d01d75c65ee0e9301869032fe820cf1b79fa00685e078efba8ef7b0854197265051e242401da78a86b3e74bb7dcd77fb5d6de08e51cf73356de8fb7ad0173f402dd1fbe32c9022c0d11cb394305cbaacce6c63ea18ae79ed5a863137e6a7d1df283eabbeb74d51ecd85b6b2650559b0290457c5e0c5a37a9363d177e5607fbccc1b301528a8910959fbe6939863d9d39e65d458658c5250a01dc6d5ee432062062e88406541c2d4774457c798eaa355d55e7cd17ebf650c444c5efa3ced338a250ae4b3ecbd9bad4fb38620f6b5614475944d58d639bd60fb592dc7f4c7307a2ec039ed732aca6c2ad47e130ab7135fefff7a751e9a18aab5dca537f6e0dfb97c4e6",
      "3999b15180284ae0a9eb17365d028bf4175e2e517e784724423c25c7fe8c8bb0b874909dbae79b2baf202e9c2f097b3d6da80f0e840248f979853eee1f2acede12d90bc528e1072f8a37a530725f939455e4e430592eee81551ee2beb16ffc03b080630f10060000",
    ],
    [
      "ETag",
      "mLOyHKPk4HKqlfrxXXN8VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1588956132723"
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7ddfaf20f5514840e443131e86a22e41d03135c61052b7bb39dc7667dba9c4f0df6dbb017bd12c91c497b5f79e737b726f7bf665d46ae4354c3c725a23cf61f096015b1d04206ed5c6069e4582cb25c58403a92b36081a28b67d8f8fa6d9b1ce960f9f876fcde17b7b3abb0c06839cc5dd1788a9e47dc948c67e0891c765fca4e35a91d75842635027ba186571b2d0617d078b55aae199635b93cb3212a3a791c9dd786c0ec7235240ebfacf221e1574a18ffc9b845ee746214696f86c830f0c1217765da70c97e00a4b8f97d3388da0c131632ef0424415e670c0304b29436cc854a3df6bb43afdfe49a7db6a1ff58eda1b7a842e152126aae26e46b6fa02058d6cfc502326ddfc0e581ee613df8c82f8a54b284f4842efaa38f4c836b7aeff42b4264ef7b8c42d7673a3545959554eca0f2358fc93babc92172a5f7835ede299ec499cc69825a2a2f4c5786aeeb171e986aa4d9f9bce685fb25c482f54d475acebd1cc31af6f7e1497dff9ce04c395007ec3507a8c837656ab79dceff4ba4db271ea192a270a6554c132d06997ca3fd6552864cea71107636d7c03062465201d050000",
    ],
    [
      "ETag",
      "RVoYAA5ICjWx+q0Bv3OSGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1588956132723",
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
      "ad",
      "54ef6fda3010fdce5f11655f36ad4008bf2ba10e41ba46a2a10ba1d5364de0844bea368953dbe95455fcefb3934082605535ed0b0a77efbd7b77b6efb5a628ea238e37eab9a2ba38784a81be7c7820ae7a2633c05120332dfef981b517b8ab5d51ebf38f28eab79338188d7214ced80c454908754652ea013b5f2e1a0125698228217521581f0ceaadee6030ecf65a6dbdafb7732e83d09fe1f8512adc739eb0f36673e7a3111012848012cc1a1e89f6f1e6b3de4c2879008fb3e661d9a6a8c49a6f17be0889873826f168b9c84da40ce80a22844369a3646fdc2f87f20d8ca24620d0cfd803e479248db9b496cb7824f67190d24c5c28bd8aa008679ef77f2b017561cc8c89a34ce64bcbf9b84691945b7f521053562b0a2c0db97269cfaf957522aadf23066caddc5d19b6212294f8388415deac959172a18cada952e2b258662a2bb801c6719cd972901b42c58cc816a3344f9ce25e428a202e940bd8aaaff5506ba00d5ddfed7bfea0dd757d0d5c77e0f6bba8ed6adeb0039d8d0ba8aac065ed9c8f62120320ad9dfde8bd4d47d0b421b85acfed76bafa60e80ef561a7e7795d500b85edbe1f8f02e230c52c210c17c35627b631768c9579b9b20c636a4ccbf67f537c84beb34d0176eca53511aceaa87c24e63ecd9b3d1cd4c104b89869b5b9b7a678d440423111a6b24b605a8e618f278e795bb1216ee40c02e4bd2c9ee49df451c8a064238a22e040afc9469ea57a335f988e39b7c6b35221bb64373b2413b09f7bb3654f5535e72539bc19f9a1e55169b3d7512bb9edd949955b14a627649e8bb0da3ad0a89d50fb17770bc736adafffc1de381107f7178bc5d7af5a455f151ba6b0a67e5b1af677c9cd723263830f1462afacf88ed7268979fa1d0b54c077eb4c32c446dbd7675c84c5c3f758593d7b39720de0283f",
      "8d5c50d7c59bebed040591f263444f1fee10472b4dd6820862be9b45bedaf2416e0f2ca5153b194dc2c53bb48a03dcd6b6b53fafb77e1e97060000",
    ],
    [
      "ETag",
      "1t+js3Si50HrN+Zmm73png==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1588956132723"
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
      "4d",
      "51",
      "d1",
      "4e",
      "8330147de72b487d954458d8d0640fce105dc4e9d0e98359968e5d90095c6ccb16b6f0efb605b6bdb43de7dcdbdb737a344c93fca6c586dc99649d267f15b0fa2a01315787107895092eb7120b0ee45a5583a089aa66a13b7a99f3c3f07916f85ffbecf573e7c4c978dc56f1e807722aeb8e12491ca7906db8c4df1a9b1dafb582e6a06e5cad981ea86fe83451975a9bce3efc473fbc9472dc6869b60882fb49e0934e6af4be946ba39fb2c5750831302822383fa864b885484cb5734ef332038b63c522e0dd10d5d8ca09c3aaa40cd19294e57996ed7adead3bb407cec819f4e5194654a458a88ec53b39cd17286816e25eb927761b0f6b611b461f05892ff2b94c484a3bd5ec9013d574a7a5d1a3e579d8a416c0df184a2f1cb4831bd247f180caaa5049085681a6232a7feb29151d6734c63fe89922d718020000",
    ],
    [
      "ETag",
      "rR57MQsz6KNLEWwlOVv2fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcfdb6e82300000d07fe9b398d88e217b13106150080184f8d2905aee0ab6dc97fdfbccce1f9c1f9051ca842043d7b027f8026b06d53ddd3bdd515b0b8a2de267a3516d06f59409e505b1e36be3a6732ef9a52d8ee2c4751fd7b5bfc9afe8fec0a38bb1ce5fb40f5d87e8b3e954d205b76172e04374ee26948cad12a510691f8f4e55eea916e7a7c4f666b219f9d057f0ea46d2e617eb2d2cc565f1c2f6b9c06c446d1e8a20406d256e3490cb296a1c28af9f3c8369d8231c4f967956a6ef65b052a11c4cecd4b9d1801d604b5f712648f59e21595577e0bf4986b567efabc632ce38f8fd03e915387e05010000",
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
      "Fri, 08 May 2020 16:43:45 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-89-1588956132723",
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
      "6e",
      "a3",
      "30",
      "107dcf5720f6b5b98784548ab65142b7480969096955ad56c83686ba259862d36e5be5dfd73624814d5555e201cfcc3973e6627f34344d7f2249a09f6b3a24d1738eb3b71f8f14ea67d2833988a4676899378679dd7d2763d47932dcf7fbd5dff4753229a2884233b04d63dc6434cf1066e79b752bca689e828cd2a6206c9ae366d730cdb131ecf67ba35ebfc0321c870b923c498607ce5376de6eef75b4224aa3188394b016a2db83bdfdd26ba7197dc488b3763d6d5b6462edaf13ff8c29029cd064b25917227286331f6f0189a58c233a801775fa1601db5624a25f08c200219a275c4a2b68104d4212e59922174c1fc228cc4af3e15831e86b6b61cd3c0dd138df267e02b6f84c0b00073e7f4bb176e9ae969aed5caedce5d4b3578ebf9e5d59cb696bb65a6c96ce5abbbbb25c4be300c65861b58976a14e8e3828452a5b80192789d2e4496f4589f0967db43f19e181429208550c9761fea833045db33386211ca1d0ec1b30ec60084d3832401f76d078800701c4a0caa094157890d0c414d38010021f7547863f18875d7f0c8d916f0481f886380c47402fd1bb432d28c380e339612965a4ecb23e73ada967f9f6a5ef58d6dc9a1f4b7fcdc849f49d6b8b60cfdd383381aab6290479cce745a1f526d5aae7a29fd5c2beeae049016946a810a5a66f3b9ee54e679e7d5b91215671812380ded6cf72194310337c44834c8c96e36c49033947dd992eabf5aac5bade073111f1fba0f3588e0894eba26a3959977a1e4fec61ad15c5280babbef65cdbf9a5579cbbcf696e419c7fc2f3529af55474eb417498d5b81afffffd695472e8e26a97f2f49b8de5de4bacf2498f",
      "8b439ce1041db37e63d325b0707fe3e512e1fb774422c45372c8cfb8308b4b87d831bbda5c790549d1f992b0d733fa83ce9e5000337e1a31181c529ebc253217dee284ef7b51bc29452377354979458e82c970710f9c7288bbc6aef10f37f75c4c10060000",
    ],
    [
      "ETag",
      "6E8Q58P1zi9c0k5RzYOxpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1588956132723"
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
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "7d",
      "efaf90ec55617eebc087bab94df06bb5c26088c4f6b6d6a54d97a41b4efcef4bd2aa7d711426eca5c9bde7dc1cee4d4ef746a984de83c8457725b40efc8f04d8eec607f1a23616f084082e9798461c5059b141605fb161fada208be67764f539e67eec6e167ddbeff5521677361062c9dbcb48c65e00c4e5327ed37129cb6b2cc221a8131d4a92305ae9b07c86c52ed6f0dcb68693a73c1252572393c56864f64703944187f26511170bbcd247fe4d42af4b2313435bbab6c003069103e7ae6346b7e088a11e2fc7614ca0c269c21ce099882a4c619fd124c68cd28a4c553add4ab5d9e9749bad6abdd6aed58f74421d2c021aa98ac51c9df405159858f44b8d18b5d23b6069984efc380ae4e52e213f21097daae2c045a7dca1fc0b7138b15b8d1c37db2d8d5c65615539292f20b0fa277579251b2c5f7831edec995c491c8734894441e9c7d1d4bc62e3d20d459b7e30edc1b564b9905e28a86b0fc783b96d8e6717c5e5777936417f2780cf18951ee3a09d55bd6d749aedd62d3a3af59e2a270a6554c112d06907cb3fd6732064cec3848371307e004d2825f31d050000",
    ],
    [
      "ETag",
      "eOX4lU5znRBsasgpdhUBTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1588956132723",
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
      "ad",
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7df75720fad24ab1f11d3b9295a63669911c9c629ca8aa2a7b5906b20966c92eb8b222ff7b77011b2cbb5154f50d66ce9c3973d979ad298afa4c224fbd545497042f29b0ed8727eaaa17d203090aa42732e6639d195ba0da862e7a69f8853bb36034ca51248be6681d8750e7346518f8e562de08184d63c428ad0bc2fab0596ff5068361afdfeab4f576278fe510fa53123d4b86c72489f9a5a6ed7534024a8310504c7803d3f5c1ae6dda5acce813e0846bc7693591896b6f27be0a294609a1d16831cf45a41cd812d68884524619edb99f8fe91b04ad1b81406f080684314da3444acb69308d7c12a42c23174cafc228cc99e6c36fc5a0ce8da9317694f16c61391f57682de9569f14c495e592014fc344b9b167b7ca2a16d91f1107be521ebe19b6212c8cfa248425f156ca48b952aead8952e2325b262a4be8014f4894c972901b42458cf016ad34cf4cf14021495022980bd8526ff6516bd01cbabeab637fd0e9b97e135c77e0ea3dd4719b78d885aee702aa322432771e8f22d12b042decea6e0ff9fd561bfb3af2602066d4197a7e77d81c36bdbeeb0b32b560d81deac10c500213c263ca49d16c756c1bd78eb1346f9696614c8c4959fe6f464ed00fb629c08ebdb0c622aada2a1f89be4ff2628f1b75d48144f4b45adc5b5d3c292066840a51d912989663d8d763c7bcafc8101b398500e1edfc45eea48f420e653462680d09b05beac959aa77b3b9e99833eb7a5a32644b76b7477201fb79105bd6546573b6f1f166e443cbad5266bfab567cbb8bb32cf7284ccfd06c0ab3da3ae2a89d61fb177573c736adafff411e8ac5",
      "e0fe22b1f8fa55abf0abe2c214d2d4ef0bc3fe2163339ff4d8e00383089719dff1da6460ee7ec70115f0fd399311e2a21df2f34498c5c3c7bccc9ebd1c7906c83a9f464ed86ef73bedee9e5004b2e414d1ede87bc4c94993b9600d51b2ef457edaf246ee8e24a515395998848b77681503dcd576b53f619cb5cf97060000",
    ],
    [
      "ETag",
      "nESC7rEyeo/voU5ulBsTOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1588956132723"
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
      "4d",
      "51",
      "5d6f8230147de75790ee75242a71ea121fa6616a4274434d962cc654b83014b8ac2d1a66f8ef6b0ba82f6dcfc7eded3dbd1aa6494e71169057931ce2e8b700563e45203ed5c1035e2482cb2dc78c0379566e1034526e7b3a2b2f7ff3a0b3f93a1f06ef119c56ab75341ed72eeeff404aa5ef2a91c4610c49c025fed6d86c78ad65340575e37ecf74437d43a38932d7da62b971668ef728a5186869b975ddb789eb9046aaf4be936ba59f72c483072130c87cb83f286778045f2cf4e49ca6790216c782f9c09b26aab0962386454e19a225296bd4b1bafde170d47fe9dabd41cf6eed09fa54c498a98aed9adcfa0b1434f1f0a2a627dd3a1e56c33a8c360a123ee4f3989094ceaab8436e54d59c76468b76f766935200ff602867e110d4956d145354a30a9584600568daa7f2b7e6b16838a332fe018b3b388418020000",
    ],
    [
      "ETag",
      "3CGywzHd0TXvb7FgekOOSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "4e",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "7fe9f3ba00a30bf836c40e264c2e7683a70669b986152818c0f8ef2e9e3f383f20cb732e259d44cb1fe005ac9966eef3fdbb30acb5e4471269bec36b78b195ab12340fec5567928c70300a680892ba2ef2d522106c08459566d5521ba519a1bb557fc41d8f952da52c412c63e8ee6c9898b8b049fb6ab764a0e98db467a8556ab2795b23c9f0f52d3dd1852ca67ee95eac22b367dab348b8b0838d95432c66a99fae6ca6f351ce89a84e45e0e8b7f8a0b25a79c3c12775bc6251b11e22694f3ed801bef4f5c825ad9fb30332cd1df86fd269edf9f36af16ce423f8fd031127456905010000",
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
      "Fri, 08 May 2020 16:43:46 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-91-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d545d6f9b30147dcfaf40ecb5f9221f2495a2354b68c794900d48bb769a90ed18ea96608a4da7aeca7f9f6d48024b55f50deebde7dc738faffddad034fd91241bfd5cd321899e729cbd7c7aa0503f9319cc412433cbabbf77c32f836f3fbd39bdbbf5e1bc6724fd683229aa884233b04d63dc6434cf1066e76baf1565344f414669531036c7dd6677301a8d07c36ecf308d5e8165380e172479940cf79ca7ecbcdddeeb68459446310629612d44b78778fbd968a7197dc088b376bd6d5b7462edf71b7f8e29029cd064b2f60a1139c35980b780c452c611bd811775fa1601db5624aa9f09c200219a275c4a2b68104d4212e59922174caf2228c24af3e1b712d03d6b61cd7c0dd138df264102b6f84cdb000e02fe9262edd25d2d35dbb95cb9cba96faf9cc09b7db596d3d66cb5582f1d4fbbf96ab996c6018cb1c26a13ed42fd39e2472952dd36987192284dbecc5694886ce9a3fdc6111e28248950c5705916989d21e88e3a6318421385a3de00861d0ce1089a03d0831d34eee3fe0662506550ca0a3c486862867864c2c138c0a08f823e1ec1600c200886fd8d31083b1d13829e5ea2778759508601c773c252ca48e9b23e73ada96f05f665e058d6dc9a1f47ff939193ea1bd716c5bebb76660255b5290479cce7c5a075936ad373e16775b0f71c3c1920cd0815a2d4e9db8e6fb9d3996f5f576488555ce008a017ef492e630862868f689089a3e5385bd28d3c47dd992eabf3aac5fabe2f62a2e2d741e7711c5128d745cd72b22ef53ebed8c39a15c5511651ddf35ddbb9d22bc9dddb34d720cedfe0792ec37a2adcba170eb31a57e3ffafdf8d4a0f5d5ced529efe636db9b712ab7232e3e210673841c7ae1fd874092cd21f78b944f9fe1d9108f1941cfa332ec2e2d22176ecae36575e4152385f121a86b84bc69e5000337e5ad135cd7dc5c95b227be12d4ef8de8be24d298cdcd524e515390a26cbc53d70ca43dc35768d7f7d6d0a1710060000",
    ],
    [
      "ETag",
      "MGzZ6B5JXSDoZYTbD32n4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5545d6bc230147defaf90ec55c1fa5175e0835fdb043f6b85c11089edad56dba64bd20d11fffb92b46a5f1c85097b6972ef3937877b93d3935628a083173ae8b98036def633067a7cda029fcb8d092cf639134b444206a828d9c0f156b275a7ccc6b8f60e6c6ad8875ed0a241bf3e6fb71316b3771060c13b8948c4ae07bec344fca1e2429a575888039027dac48f8370adc2e20de6c748c10bcb1c4e5eb348401c854c96a351a73b1aa0143a17ef8b3898e3b53af26f126a5d69a918da938d092e50086db8751d51b2079b0fd578190e221f4a8cc4d406968ac8c204de52124798125212a9524b2fe9f566b35537f46aa551a95ee83eb131f748282b960b74d5e78463df24df72c4c848ee80266132f1cb28909bb984ec8404f4258b3d075d73e7e22fc4e1c4326a196eba5b6999cadcaa6252aee7c3fa9fd4c595ecb078e1f9b4d367f220711c9038e439a55f46d3ce031b176ec8db74bf630d1e25cbb8f0424e5d6b381e2cacce7876575c7c573713748f1cd88c12e13106ca597ab9d6ac378c32ba38b547a413b9342aa731a8b48dc51febcde322e7629f8176d67e001b3e4ce61d050000",
    ],
    [
      "ETag",
      "1d0sMa4XesO6ckCm9rmD5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ?",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1588956132723",
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
      "ffa5545d6f9b30147dcfaf40ec659396f0911048a5aa8b12baa1a5a42524d5364d890143dd02a6b6e9d455f9efb3211f44c9aa6a7b837bcf3de7dc6bfbbeb424497e4079249f49728092c71292e777f738903f8a0c64201119aca09bafbfefbe2f2c5626c0583cf823271d9e9fd7285455539015296c535c9210d2b3f9ac93105c168060dce684ed81ded60ccb1a187dadab9b7ab7aea5308d27287f100c778c15f44c51b63e3a09c6490a41816827c4d92eae3ce94a41f03d0c19550e6515ae4495d7852f521c0286707e3e9fd5264a0ac9126600a5c2c6be3a0a3e1dd27710c83a09473fa1108230c465ce84b59a26c4798c929254e49ce9850779b8f2bcfb6d04e4993db147be349ace5dfffd0a64826ef54102545a2e09a465caa44b6f7a25ad0aae7e0728a42be9f68bedd93c42708c52b844d14a3a972ea4a13b96a4550418acfe2b4395580429437965c907410a1b4678763346e7c409ee280409605c7d035b9a6a1f68963a08e2c00c63ab6b04b10a83c00a4c037403351cf4602f0a20683230a15dd7831ce720ee597160a8aa11441046966904a6d6eb76fb5dababf3940a2373a09b9abc6158effa0909e44d8e112d30459b41cb23cf1efaf6d2b95cbab63db6c7fbf67f117484bef51c0ef6bdb93be255cd51c580cf7c5c377b38a88309303ed36673af4df1a8818220cc4d5517c0717ddb1b8e7c67d1b0c16fe30426207c9e3d8afb188394c27d352020830c922b1c89b394afa733c777a6ee70b267a82ed8f5164939ecc7ceecbea7269bff5c1cde8cfad0eaa8b0d9efc98ddcfae349960548cb13344f9bb0ac1d70b44eb0fd8bbbb138c4ff37a7abbada56c5aef88bcbcdd7cf564344e60b66e34ebe99dbde37515be544c6833124300ff7b26f7870a2b04ebf617f72f8769b890abed076fa94f1307ffb21ddab578f476c0294d5075213eabaa56aea96901712768cd07a832de268a3092d",
      "98c19c6d67516fb67a90eb034b65c34e5526e0fc29ba8efbb932df5ab7fe00df0de06596060000",
    ],
    [
      "ETag",
      "o/iQKzhZV8tuga5VkTCIlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1588956132723"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7de72b48f73a32d1e074890f73631b093393cd2c6631a6e295a1c0c5b6cc10c3bfaf2da0bcb43de7dcdbdb737a364c931ce26c4b1e4cb289a36301acbc8940ccd521005e2482cb2dc78c03b955d52068a4aad9f1f93b5d2e0fc3f764eebfcc63af77e7b8a7c9a4aee2e12fa454d69d2592781743b2e512ff686c36bcd6329a82ba71bd667aa0bea1d144996bcd9b7db9af6ed09552dc6a69b6f0fdc7a9ef9246aaf4be926ba59fb2c74d003b609085707d50ce700fa1f0b4734ed33c018b63c142e0cd10d558cb11c322a70cd1929435ee5bb6331a8d9da13de8dff7076d798221153166aa63f1492ef3050a9a047852ee895dc7c36a5887d14641769d7cba0949e9af6ebe5055735a192d5a5d874d4b01fc83a1f4c2413be891368a275456854a42b002341d52f95b6fb16838a332fe01b706c51518020000",
    ],
    [
      "ETag",
      "rqDWmYYk6MlQLFQiI0/5Ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcf4b7282300000d0bb64ed38505a4aba938fca27481941ec8681180a440d24a9109ddebd4edf0dde03541813214ac928b9820fa0aa17b8c4cb9059b6fa6e282a02ad4a2c5f7a557c179ad146d11ee6f9d9bdf4c2b3937147cad8a486ec3517e9a29bfac260ef97c334eb996266f39972666ea17dc65ee1f036d5dbeaeb90ae4e035a8fb5eff73894bcf176704cf6d3ece91b7117b97bad95416b8adcda17c7352a07bf5028c6b5c534448f63271d23dcdc3c55501ce4c9eba931a31b832eff711299e9ab60eeb3ed6061b000641e3a4e44d93d67c61b840bf0df2ca51ac8f36a938a130e7eff00df7e9f5005010000",
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
      "Fri, 08 May 2020 16:43:48 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-93-1588956132723",
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
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "57",
      "20fa1adfc0f812c96a5c87b4a8366e314e1a55155ad603d90458c22e69a2c8ffde5dc036d45194379839e7cc99d9d97d6d298afa4092ad7aaea83e091f73c85e3edd535f3d9319e02894995f966e27dffdc1e64bf0cc6fe3587fbe8555389d962852b0198ad308da8ce6190676be5977c28ce629ca286d0bc1f6446ff78df178620cfbba36d2f492cb200a162479900a779ca7ecbcdbddfbe884948611a094b00ea6f121de7dd2ba6946ef0173d66d96ed8a4aacfb7ee1cf11c588139a4c37ebd244ce20f320462492368eecad7fd194ef10147742817e221810c6344fb8b456ca609a0424ccb3425c28bd8aa008179e0fbfb580ba3617e6dc55308df238f11214c399b2451c79fc2505e5ca592d15cbbe5a39cb996bad6c6f3dff662e679df96ab159da6be5e69be9980a477e040557992a17c59f2d7e0a4745b52d304e92c2932bb33527225bcdd17ae3080f125244b86250c1bc516f88fae3dec40ffc110ec6bae1073df0fdb13f3290eef7f0640083ad0fa8ae50382bf928a1c9000c3c3206430ff7fbd81be838f090e10f3d0321a38fb52018f9a056ecdda1179c01e27049584a19a9a6acce1d73e69a9e75e5d9a679695e1e5bff9b9113f48d6309b0eb6cecb960d5c714a03ce29765a3cd2135bae7629ef5c6de9be049036946a830559cbe65bba6339bbbd675cd8658c5058408bfac1fe5320628627064a34c1c2d876c49b7f21c557bb6acf75b2cd68f3d8809c4ef83cf633b0228d7a5e8e5645d9a755cb1878d51944759",
      "46d5b5eb58f657b596dcbd2d738da2fc0d9da72aaca6625a7762c2aca1d5faffeb4fab56431557bbb2a7fedc98ceade41639997120800c127cacfa814d97c432fd81974bc0f7ef886488a7e4509f711116970eb363f56273e51524e5e42b414d1b0f756d2f2888193f458cb4c11e71f296c85a1043c2f7b328df947290bb86a5bc66a7a049b8b807767588bbd6aef50f1a175f3b10060000",
    ],
    [
      "ETag",
      "XI3NnKb4UBfxtYmm3xYeOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1588956132723"
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
      "cb6ec23010bce72b907b0589f7a31287d0521a895208a11c2a844cb2814012a7b6538410ff5edb09900b55a422f5127b77663ddab52747ad50403b2f74d06301adbcf5570cf4f0b0063e911b1358ec73269688840c5051b281e3b564ef573b73c65b8356bdd2fff0f4f1dc29cf8d49b79bb098bd81000bde514422763df01d26e24f1517d2bcc2421c803cd1267e1c844b1516af303f440a9e5aa6311a649180380a19cd8643bd37eca3143a156f8b3898e3a53af26f126a5d68a918da9295092e50086db8761d51b2059b1b6abc0c07910f2546626a034b45646102af2989234c09298954a9532b551aed76a7d1acd4aaad6aed4cf7898db9474259319ba28b3e271cfb26d9cb11a3667207340993899f4781dccc25642724a06f59ec39e8923b157f211a23ab59cf70d3dd42cb54e6561593723d1f96ffa42eae6483c50bcfa79d3e933b89e380c421cf29fd327cd7efd8b87043dea69f75ab7f2f59c6851772ea5ac65b7f6ae96fe39be2e2bbb89aa077e0c0c694088f3150ceaa94ebed46ab594667a73e11e9442e8dca690c2a6d63f1c77af5b8c8b9d867a09db41fb8851db11d050000",
    ],
    [
      "ETag",
      "wbkRUt7G741EViAPWd0WIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ?",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1588956132723",
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
      "ad",
      "54",
      "6d",
      "8f",
      "9a",
      "40",
      "10feeeaf20f44b9b540544051373b5cab5248a9ee25ddaa6d16559b8bd03966317dbcbc5ffde5df005a3bd5c9a7e8399795e6676775e6a92243fe2c4977b92ece1f02947d9f3bb07e2c91f450631108a4c3b79182e8c74b6b13fc3f8560fcddf831b7cd3ef9755b8405310a711aa53926710d1de72d1083392a72023a4ce09eba65e57db8661b63b6a4beb6aad124b51148c71f22818ee194b69afd9dcfb68848484110229a60d48e243bcb9d19a69461e1064b4792adbe44ab4f9baf0554420609824fde5a234915394ad500c70246c1cd1bef7e994be8141dc0879f5064304202479c284b592069224c0619e15e49ce9850779b8f07cf8ad04e48535b686ae349c2e1df7fd1ac4826efd4102545aad3244f38849d7f3e9445aa75cfd1e5044d7d2dd576b6ef14846021ca115f6d7525fba9206ce4892d69471bb45a07054a8f988329c149e5ce045a8e284677773b42f1ce181429000c6e57765abaed201aaa1985ee0756160b4da5ea020cf33bc6e1bb43c059a3ad27d0f812a0313da251e2424e10761e84069fb9ad9d17cb31378868e4cc5083c13f901ea7681e1e9100079c7b03df4033304181a619a128a77939687736be05a2bfb7ae558d6c81a1ddbff95e1b3eabbb9cd8bddf9d2197254755401e0431f95cd9e0eea64028ccfb4dadc6b533c6b20cd30e1a68a1b603bae351f0c5dfbb662835fc7310a017c5e3c890b198088a2231a6420460c6513e28bb39467d385edda5367303e3214376cb6afa4bcecc7c1ecb1a72a9bfb9c9ede8cf2d0caa8b0d9d1e54a6efbf122cb2d88f20b349b5d58564f386a17d8fec59d6b4fac853b98ccfe83434dd194ba",
      "a2f18de1aa5a4f6df554bda128caf7bf18df7dfdac552465be747686e59ba535ff26b0454e64e62840194ae0d1c41bdea00096e937ec545ebedf7002c197dc419fef0786f93a80f4a85ebc27b11c705c9e5149a8b514456def09393063e7156aeb2079b6e584168a51c2f6b328b75d39c8ed89a5bc62a7808972fe3a1ddbf95298af6d6b7f001ef8034caa060000",
    ],
    [
      "ETag",
      "5njCS8pPvIBcmV4g9xAQiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1588956132723"
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
      "4d",
      "51",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7ddfaf58eaab8b0e44c184073144490891c1fc8821a48cbb39dc76677b2712b2ff6edb6db097b6e79c7b7b7b4e8f966db3ef38dbb27b9b6de2e8a70071b88880e6fae0812c12926acb3193c02e7535108f74f51cdec51b2e171fe95fc8e935bcea2cfcd17c38acaa64f0052957754785140e6348b652e14f83ed9a375ac653d037aed7c20c3437d41a1d72a34d66cbf1d3d86b4b296e8d34f3a7d387d174cc6aa934fb4aada579ca0e371e8420200be0fca05ce00e029a18e792a779028ec4420420eb21bab192238145ce05a2a3286770e3b8bd7e7fd0bb75bb9dbb4eb7294f30e01463a63bfc053bcd27249e78b8d7ee995bc5232a5885d144c1c2563eed8494f45b359fa8b23eadac06adcec3460702f922507991601c5cb3268a47d456492741a20043075cfdd6734c356795d63fe9af48aa18020000",
    ],
    [
      "ETag",
      "QeXrWoTSYmxfatVf/2SUBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4b7282300000d0bb642d4e45a9d09d441af908b1552c6c1848820358822122a1d3bbd7e9bbc1fb013921acef33c91bd68237a072dd9a93b9cf4d5b5d58c0d3b4955d0157f0c6764145cf211da1e77f87fea9e00e76c457f8916e950749a4e128c16e582f30cc979dd05d1ff95434a44031dd690b9d90d27d34d5fe16c944eb45bfc19be1d0aa04be4ef7388ad77cc2b0644a1ac388da7d39b513436ef112c06bbccaa37793e8b5b52d8f35ef2e4672182ad58c5761ea68683ed99ec8f878a727a49d3d6951b8b6910366808d5d25589f55cfd9d2b0ac19f86f665275ec79b5592e9800bf7fb4b46bab05010000",
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
      "Fri, 08 May 2020 16:43:50 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-95-1588956132723",
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
      "6e",
      "a3",
      "30107dcf5720f6719b1b692e548ab65142b64809690969f7a215b28da16e09a6d8645555f9f7b50d496053557d839973ce9c198ffdd6d034fd9924817ea5e990442f39ce5ebf3c51a85fc80ce6209219f66bbed93d0537bdc160b2fbea3ed3bbdbcd8f683c2e5044b119d8a6316e329a6708b3abcdba1565344f414669530836cd7eb3db1f8dccfea0db338646afe0321c870b923c4b8547ce5376d56e1f7cb4224aa3188394b016a2db63bcbd33da69469f30e2ac5d2fdb169558fbe3c2df628a002734196fd685899ce1ccc75b406269e3c40ee0755dbe45c0b61509f48e200c10a279c2a5b54206d12424519e2971a1f4268222ac3c1f7f2b017d6d2daca9a7211ae7dbc44fc0165f6801e0c0e7af29d6e6ee6aa9d9ce7ce52e279ebd72fcf5f4c65a4e5ad3d562b374d6dac38de55a1a0730c68aab8db56bf5e7881fe548550b30e324519e3c99ad3811d9728ef63b4778949022c215c325cc1f7606a03bea98308443148e7a7d187630842338ec831eec20f3125f061083aa827256f041429320304c3044816f740de85f0608f800c29e7f6908d12ee89b7d13e8257b7fec056518703c232ca58c9453d6a7ae35f12cdf9efb8e65cdacd9a9f5bf1939433fb8b6007beec6990a56754c21c8633e2b1aad0fa9d63d17f3ac36f6d104cf1a483342852975fab6e359ee64ead9f7151b6215173802e875fd2297310431c32736c8c4d1729c2d6920cf517726cb6abf6ab16e0f202610bf8f3e4fed08a05c17d5cbd9bad4eb78620f6ba3288eb288ea6bcfb59def7a25b97f5fe61ec4f93b3abb32aca7625a8f62c2aca6d5f8ffeb4fa352431757bbb4a7df6d2cf7a7e4aa9cccb838c4194e",
      "d0a9ea27365d128bf4275e2e013fbc2392219e92637dc645585c3ac44ed5d5e6ca2b488ac9978246af33e89a074141ccf8396278429cbd25b216dee2841f6651bc29c520f7354b79c58ea249b8b8074e7988fbc6bef10fb79f5ad610060000",
    ],
    [
      "ETag",
      "sZFUvjdH366Av+RkoQPUXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1588956132723"
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
      "ffc5545d4fc230147ddfaf20f515a2a00c34f101149504271f33c41842ca7637a7ddee6c3b0d31fc77db6ec85e304b24f165edbde7dc9edcdb9e7d59b51a798b129f5cd4c82a0adf33e0eba310e4446fa6203226855a524c0490ba6683a4a1663f4de68e13c7ab6c753c9f75b035b799134e2e2f7396f05e20a68af7a522150711305fa8f8d9c4b5226fb084c6a04ff4906571b234617d07cb756ae0993b1d3ab7652446df20cee368d4eb8f06a48036f5fd223e9574698efc9b8459175621465e7135850038241eecba4e39be82278766bc82c6298386c08c7b200a115d98c321c72ca51cb1a1528df376a3d9ee76cfdb76f3b4d5699d6ee90c3d2a234c74c5e38cfce84b94944df1538f98d8f91df03ccc27be1d05094a97509e90823e7471e4939fdca6fe0b71e8b8f659895bec1656a9b2b2aa9a54103158fe93baba9217aa5e7835ede2991c489cc69825b2a2f4cde8a177c0c6951baa367ddd73078792155279a1a2ae3bbc1fccdcdefd78afb8fa2e7626e8af25883147e53101c659cd93b36ebb639f90ad53af503b516aa34a9e81497b54fdb1ee22a972016502ac8df50de66708f51d050000",
    ],
    [
      "ETag",
      "YQWNNmmbub/WS7o2W6lNgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ?",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1588956132723",
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
      "ad",
      "54",
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "7ecfaf40ec65939a101248a052d44509dd9852d21192eea22931c6507780a90ddda22aff7d36e44294acaaa6bdc139e7bb9c63fb3c372449fe89d340be94641f478f05a2eb370fc4972f4406e52012996fc922bbfe3d795c4c8d621d44f713e58bfa291a0caa2a5ca21948b2183519292844ec723e6b45941419a084343961d3ec3555dd304cbda7763bfd4eb7c2321487139cfe140cf7799eb14b45d9f968458444310219662d48927d5c79ea2819250f08e64c399655b812535e16be8a09043926e9603eab4c140cd1254a008e858d033af0df1fd3b730485a11af7ec21001084991e6c25a4503491ae2a8a02539677ae6411e2e3def7f6b0179664dac91278da673c77bbb0289a05bbd930093964b8a5811e7d2b53bbd91561957bf070cb19574f7d1722d1ea124c4315ae260250da42b69e88c2569472122a5a5522e402cc76969ca037e8c6a5678763b48fbcc19ee290409c8b9feb66cd96ff7806ab44d3ff4fb3034baba1fb691ef1b7e5f075dbf0d4d0d69818f409d2117da151ea424ed077ac7e884411868a0636a660834a8996dd0d1118206f4839e1e9a66a0ca5b86cdbe1f4811c8d118b38c30bc1db53c72ada1672dedeba56359636b7c68ff17c527d577aecd8b3d77ee8c38aa3eaa10f0a98fab668f077534819ccfb4dedc4b533c6920a3987053e515b01dcf728723cf5ed46cf0fb38411180ebd9a3b8912188193aa0010509ca11bd2181384bf9763ab33d7bea0c270786f28addee2a192ffbbe377be8a9cee6adb3e39b511d5a1515367b9a5ccb6d2eceb22c405c9ca179da8665f588a37186ed5f",
      "dc5d4fa6c3ffe4afa56b7fb1b8fdfad1a8d1cb7cbf6cadc99fe796fb5560cb9cc8b8284414a5f020f88ad7268055fa15eb9397ef969940f07db6d767390ff3870fd941bd7c39620de0a4eab622ec7455cddc137220cd4f2b7aaab1ab385968420b2528cd77b3a8165b35c8cd91a5a266a7848972fe0e1ddbf9509a6f6c1a7f00d2ff45ea95060000",
    ],
    [
      "ETag",
      "ZmVpFxLqVO8uydghL/X1Jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1588956132723"
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
      "0000000002ff4d51d16e8230147de72b48f73a9281d1c9121fc642a609331b9b7b598ca97841147ab12d33c6f0efb605d497b6e79c7b7b7b4ecf966d937dce36e4c526eb3c3bd4c04f0f19c82f7d8841d485146aab9009208fba1a24cd74b57f980f7e832d0b7c77cfb663eed368fa719c4cda2a916ca1a4aaeeac90c2690ec54628fc67b0ddf14663b4047de36ac5cd407343a7c95365b4d9fc277c0fe37ba9c48d91e68b287a0da290745263f6a55a1bf3941dae634881034be0f6a08ae30e123933ce052dab021c81354f40744374632b671ceb8a724447518e3f72dce178ec0f47eec07bf6067d798109953932ddb1f826d7f912252d623c6af7c46de3e12d6cc3e8a320e95d3ef70929e95f377be44a35dd6969f568791b169c24884f8eca8b00e3e089f451bca1b62a751292d760e884aadf9ae6b2e3acc6ba007fbf837018020000",
    ],
    [
      "ETag",
      "9qN3VBhnB91knh8r9aLHMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "72",
      "43",
      "400000d07fd9e7c81084ed232d1197c452d1be1897a52458eb129b4cffbd999e3f384f90e6391ec764eaafb8036f80a53bb8cdb776af6aac2ac2837973bc28354aab283fdaf253b47e3cd1448d25f90d41c9fb5efbae5c95efd5d470249504015202d185105d683f644270f20adfb0b238bda399733a4fcf857d7fbe8a7721a646275032a373bbe4b11428f33845d47cc041b7e528a25f79122dae429827c48b760b4d3fb66b6e3734ca05f27a7f5c918ae0a3e2e17a20727c62ced19f4d96055c62b6e5c442096c005e494df198d4af992843b801ffcd646204bfae1a4e29a6e0f70f4f570ad305010000",
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
      "Fri, 08 May 2020 16:43:52 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-97-1588956132723",
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
      "02ff8d54616f9b3010fd9e5f81d8d726241042a814ad514257a4847484b4eaa6091963a85bc0149b4e5595ff3e1b48024b55f51bdcbdf7eeddf9ecf79e24c9cf380be54b490e70fc52a2e2eddb1309e40b91410cc42263a51b2bbad5cbc7d5d3c8536e9597ec17788867b31a852b3605699ea03e25650111bddc6d077141ca1c1484f4b960df34fa237d3a35f5c948530d55abb91425d10a67cf42e191b19c5e2acac1c72026244e10c8311d40921ee3caabaae40579429051a55b56e195a8f279e1ef0981806192cd76dbda444951e1a314e044d838b1c3e0aa2b3fc0201dc41cfd8a210210923263c25a2d034916e1b82c2a71aef4ce833c5c793efeb602f2d65a590b4f822429d3cccf408a2ea41030e0b3b71c49d7ee662dd9cef5c65dcf3d7be3f8dbc58db59e0f169bd56eed6ca5fb1bcbb524068204555c69265d557f0effa91c55d5424419ce2a4f9ec8b69cf06c3347fb83233c4a0811ee8aa206e61bc309184d87661005068ca69a1e44431404d3c0d081160ca13946e33040a0ad5039abf9202399aa4781aa4ec73ed0a6a13f3647ba6f0686e64f86660886e644d335556ed8fb632fb04080a125a639a1b899b2bc70adb967f9f6b5ef58d6d25a9e5aff5be033f4bd6b73b0e7ee9c0567b5c714813261cbbad1ee903add333ecf76639f4df0ac81bcc0849baa4edf763ccb9d2f3cfbae6583afe20ac500be6d5fc4324620a1e8c406053f5a868a3509c539cace7cddeeb75aacdb038872c4efa3cf533b1c28d6a5eae56c5dba753cbe879d51d4475947e5ade7dace0fb995dc7f2c730792f2039dd7262ce77c5a8f7cc2b4a3d5fbffeb4faf5543e657bbb127ffdc59ee83e05639917151840a94c153d52f6cba20d6e92fbc5c1c7e784704833f25c7fa94f130bf74909eaa579b2bae20ae27df08aa9a3a32cc83202716ec1ca10d4707c4d95b226aa11465ec308bfa4da907b9ef582a5b762a9a80f37be03487b8efed7bff",
      "0058c1d87410060000",
    ],
    [
      "ETag",
      "EmOEfP5uhLj1T/P/qnZaYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1588956132723"
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
      "000002ffc5545d4fc230147ddfaf20f5151241f9d0c487a1a8c4893ac69321a46e7763daedceb613d1f0df6dbb217bd12c91c497b5f79e737b726f7bf669351ae4254e0372da204f71f49a035f1f44201ff4c605913329d492612a8034351b248d345b2ccfaf5c86ec237c1fde446b473c24ab17fbecac60097f090955bc4f15a9388c810542c58f266e947983a534017da28f2c4fd285099b3b58ae33034f3d773cb9aa2209060699cc1cc71e3a2352429be6cf22019574618efc9b8459e75629469ef1c9851038a43eecbace383e832fc766bc8226198396c09cfb204a115d58c011c73ca31cb1a552ad937eabdd1d0c4ebabdf651a7df39dad219fa54c698ea8ad9947ceb4b9494b9b8d22326bde20e78111613df8e8284954ba84e48416fba380ec8776ed3fc85389e78bde30ab7dccdad4a656d5535a93066b0f8277575254baa5e783dedf299ec499c2698a7b2a6f4a57367efb171e586ba4d5fd8de685fb2422a2fd4d4f5c6b7a3a967dfdeff28aebef39d09866b09e29ea3f29800e3acf6e1f1a0dbef1d92ad53cf513b516aa34a9e8349fb54fdb1ae63a972216502ac8df505e77ee5581d050000",
    ],
    [
      "ETag",
      "shCGRlolzfxBKgyLsQmwkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` > ?",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc554d16ea240147df72b08fbb29bac0aa8804d9aae51ba4b62b1456cd3ec6e746618e8b4c05006da358dffbe33808ad16dfab64fcabde79c7bee9d99fbd69224f98924be7c26c99084cf05ced69f1e2994bf8a0cce412832aa31195dfd818bf5abfb3abe7f9cc0e486b1d1f9798522259b81388d709bd12243989d2de69d30a3450a324adb5cb03d34dbeac03487035ded6986d6abb80c47c194244f42e121cf5376d6ed6e7d74424ac3088394b00ea2f12ede7dd1ba69461f31ca59f7b06c975762ddf70b5f4414819cd0e47c31af4c140c674b1c0312091b7bb60fbf1dca7708883b2147bf10840142b4487261ad92413409485864a538577ae3411e2e3def3e1b01796e4dadb1278d670bc7fbbc02b1905b7d91009396cb0cb322caa54b777625ad525efd0130cc56d2dd0fcbb57824a30189f092f82be95cba9046ce449256e2eb57a1283d2c5d949eca7a3e6639494a571e80116e78e1d97a92f68943dc490811907303356c69283a504d65080368a0c0ec0d60a060084d680c400f2a68d8c77d1f62d054c845ed8a0f129a284a5f87034d053a328da1df33a10f74ac6ba601029f67f8afaa6a4324d70a9b5d3f28c320c713c252ca483d6b79ec5a23cf5ada974bc7b226d664dffe6b468ed077aecdc19ebb70c69cd51c5500f8d82755b387833a9840ce67da6ceebd291e359066847253e51db01dcf724763cfbe6dd8e017728a4380d6f3677125031031bc67830cc438c7d915f5c559cad7b3b9edd9336734dd2b9477ec7a8b641cf6736776df5353cd5ba78737a33ab42a2a6cea7db991db7c3da9720ba2e284cc4b1d96d5038dd609b5ffea6ef00f7bf5bfdfad86b8cc974b6d4bbe5958eebde0963991717180339ca07db90fbc3441acd21fd89d1cbedd6482c197d9ae3ecb79983f7ac4f6d5cb5723560089eb5e4b41ada79b9ab115e4c42c3f460cfbea1671b4cd442d1ce324dfcea2da6ad5203707968a869d9226e0fc0d3ab6f3bd34dfdab4fe02681272d292060000",
    ],
    [
      "ETag",
      "17DAMxbUywRwCYjDbnQssA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1588956132723"
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
      "00000002ff4d51d16e8230147de72b48f73a928173ea121f86339b192113e70b0b3115af88032e6b8b8b31fcfbda02ca4bdb73cebdbd3da717c334c94f5aecc8b349b669f25b013bdf252096ea1000af32c1e55662c181dcab6a103451d523d73ff0579a84c5871f4e1ec3d36cb00a97d36953c5e303e454d65d2492789f42b6e3127f6b6cb6bcd60a9a83ba71b3617aa0bea1d5c4b9d4dac2ff9abfcd83be94e34e4bfedaf35e5c6f4e5aa9d67b24d75a3fe588db00f6c0a088e1f6a092e11162b1d0ce39cdcb0c2c8e158b81b743546323270cab9232444b52d6646cd9c3f178327cb207cec81974e519c654a458a88ef58a5ce70b14340bf04fb92776130f6b6013461705d9f7f2e92724a5936a76c895aadb53647428ba0d73cf02f82743e9858376f040ba2866a8ac0a95846015683aa6f2b7de53d172466dfc03018c8e9918020000",
    ],
    [
      "ETag",
      "7BNhsDagZnKNZ94ZvC3SZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "6e",
      "83",
      "20",
      "00",
      "00d07fe1b936c1eaa67bd3a8b3d345a9696b78310cd03a2f58a55158f6ef6b76fee0fc0042295f964a8a8e8fe00d2862ba7bba4f84e3ab867edff186b0715c0eb9bd294f48b38953b2a0cdafed32637a7d39d22442891845d4df4361c8348c59220afcaa4debc37aefdd0cb7242e1d3d141dd2ad2a4c34f638a987b03b5da32c8295cdce2bad9b180ff0c12ab2c2ea6617c8c3934f2e8fee20fcd24c99e2ddd658e93aa221b806b9c728bc40b49c025ba73d8c72aff48dfccb896a74d6f2367cc652801de0dbd4ce7ca9dae7ec60bbee0efc372ba926febcfa9ccc7c06bf7f15d4c02c05010000",
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
      "Fri, 08 May 2020 16:43:57 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-99-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54616fa24010fdeeaf20dcc7ab4a55149b98ab517aa551bc43b477b95cc8eeb2d06d81a5ecd2a66dfcefb70ba870364de3179999f7e6cddbd97d6b298afa40125fbd505448c2c71c672f5fee2954cf64067310caccd7587f7ee0dbd7adfeab1f07afe0c68a8d3c9c4cca2a52a01988d308b719cd3384d9c566dd09339aa720a3b42d08dbe371fb5c378cb13e3ceff746bd7e8965380a162479900c779ca7eca2dbddebe8849486110629611d44e343bcfbd4eba619bdc788b36eb36d577462dd8f1b7f8b28029cd064b25997227286330fc7804452c611edc3cb267d8780b8138aea2782304088e60997d24a1a449380847956900ba6371114e142f3e1b31650d7e6c29cb90aa2511e275e02627ca6f880038fbfa458b972564bc5b2af56ce72ea5a2bdb5bcfaecde5b4335b2d364b7baddc5e9b8ea97000235c60958972597cd9e2a3505474f331e3242934b9325b5322b2958fd63b4778a090244215c3559937d286e0dcd0c630802314187d1d061a86d080231df4a186c6033cf02106758642598907094da01ef47a100ebde15003de60849167e8c0f07c5fd3c79af88dfa50add0bbc32c28c380e339612965a472599d39e6d4353debcab34d736ece8fa33f67e4a4fad6b144b1eb6cec9940d56d0a401ef1793968d3a4c6f45cf8591fec23074f0648334285a8e2f42ddb359de9ccb5b635196215173804e865fd2897310011c34734c8c4d1729c2da92fcf51b5a7cbfabcc562fdd8173151f1e7a0f3388e2894eb52cc72b22ecd3eaed8c38615e551965175ed3a96fd5dad2577efd36c4194bfc3f35485d554b875271c660daed6fffffeb66a3d5471b52b79eacf8de9fc96d82227330e0e70861374ecfa894d97c032fd89974b94efdf1189104fc9a13fe3222c2e1d62c7eec5e6ca2b484ae72bc25e7f34d07a7b4201ccf869857e6c79f296c85e38c609df7b51be29a591bb86a4bc26a780c972710fecea1077ad5deb1f700c02ff10060000",
    ],
    [
      "ETag",
      "+m5wktVzV5X3mfzaJIm8ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:43:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5545d4fc230147ddfaf20f515221f82cc8487a1a824883ac6031a42ca7637a7dd3adb4e2484ff6edb0dd80b668924beacbdf79cdb937bdbb38d51a9a08f30f6d055052dc3e03305b63e0b403cab8d0d3c2582cb25a1310754556c103850ec99751ef4d7119e36bf5f6cf39b3467e2bebdeaf5321677df20c292b791918cfd1088c765fcaae34a9ed7588c235027ba94a451bcd061f5008b75a2e189630fc7774524a29e46c6d3d1c8ea8f062887b6d5e3221e1678a18ffc9b845ee7462e86dee9d2061f18c42e1cba4e187d07570cf578398e1202354e53e602cf45546106078ca6096694d664aa669ab546bbdb35db9d46ab79d96cede884ba5884345615d309daeb0b2a30b1e94a8d1875b23b6059984d7c370ae4172ea13821097da9e2d043fbdcb6fa0b7138763a17056ebe9b1b85cad2aa72527e4860f14feaf24adeb07ce1e5b4f3677222711cd1341625a56f478fd6091b976e28dbf48de50c4e25cb85f442495d67f8309838d6c3d35171f99d1f4cd05f0be04f8c4a8f71d0ce6ad42fbaedcb4e1ded9c7a4d95138532aa6029e8b48be51feb3e1432e763c2c1d81a3f1d0a6f3d1d050000",
    ],
    [
      "ETag",
      "YA/gBymaU2xZR9xl2YtH5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1588956132723",
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
      "ffad54db6e9b40107df75720fad2aab5015fb01dc94a2d9bb454364e314ed49bec653d906d304b58481445fef7ee023620a76d54f50d66ce9c3973d9796a48927c4bc2ad7c26c92ef1ef52881f5ffda4aefc4e782041bef04457d676f9d64548d15791ffe9ebbc3399b387d12847912c9aa15d144093d134c6c0ce56cb961fd3344231a54d4ed8d454b5a9f50683614fd73aed7ebb93073308bc19096f05c54d9244ec4c510e425a3ea57e002822ac85e9ee6857eedb4a14d39f8013a6d4f32a3c1553fe92f93ca018258486a3d53257913288d7b04324103acaf0adfbbecedf2268d7f239fa9e604018d3344c84b69c06d3d0237e1a67e49ce9891bb939137dfcad18e4a53133268e3459ac2ce7f506ed04dde68d8498b45ec7c0d220912eecc55cda443cfb0d62c036d2f547c336b825a61e09604db61b69249d4b636b2a95b88df43d55d50e48e799b22ceb165842c24c9b83dc002a8ab8b768a8f9cc308f148204259cbe80adfbaa8eb4813a743db78fbd41a7e77a2ab8eec0edf750c755f1b00bddad0ba8ca9088dc793c0a69a8e9dddea08ddcaeea62b5efb535157b5d5df75c6d883c0fa0ad0e010fb5ae5c30ec8ff5e018500253c222ca48d17179621b63c7589b176bcb30a6c6b42cff212627e86bdbe460c75e59131e556d958778f3a779b1f546d53a90f09e568bfb53174f0a886242b9a86c134ccb31ecf1c431af2a32f85acec047f871792716d3430183321ac5680709c473ba15b3942f174bd33117d6785632649b767940320efb76145bd65465731ea3fa66e443cbad42a67e1c45ad9a3acb150ad26768ee0bb3acd5381acfb0fd8bbaa5639bd687ff206f1cf1c1fd4662f1f5a351e197f99d29a4c99f5786fd45c4663ee1b1c18318425c667cc16b1381b9fb257794e30f474d84f0bb7614c0126ee62f1fb3327df674c41d20bb7c1c3961bbabf63aea819007c6c92942ef6907c4",
      "c96113b96007617268467ee0f24eee6b92d28a9c2c4cc0f943b48a09ee1bfbc62f051c9e109f060000",
    ],
    [
      "ETag",
      "pVNdS+baa/6UpgJZM3CMsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1588956132723"
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
      "4d51d14ec240107cef5734e7ab8d948aa2090f621a253444aa844443c851965a68bbe56eab12d27ff7eeda022fbd9b99dddb9de9d1b26db64bf2357bb4d92a89f72588c3550c34d59710649992544781b90476adab8178acab3fe7528ebd1bf0777fc53e99d33428c7deef605057c9e81b32aeea8e0a29bc49205d4b85bf0cb61bde6839cf40bfb85c0a33d0bcd06874288c369a7cf82f7e782965b836d26416044fc3c0678d549973a1be9559658bab103620208fe0bc5021700b118d8c73c9b322054762292290cd10dd58cbb1c0b2e002d15194e3763a8edbebf71f7a77aed7bdef7a6d7d8a11a70473dd327b67a7050889a721fe6afbccadf31135acd368b3609b8b802e2352d28f6ebe6527aa6a6e0bab458bf3b0e18140be09546624180b1dd666f18cda2be928489460e888abdff59a50c35995f50f43818ac919020000",
    ],
    [
      "ETag",
      "ZWssK3/eEkxpqiWtQLuK3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcf4b7282300000d0bb646d1d24c04077a1288c2d952a0461934920fc62f94341a777afd37783f7003449f83090b111bc06af60a5b2b14db6ef8d6eae79c2bdb3de84b71ce6e5ec0907755189ec6b67b3932750ddce2f94595c8222d15d15123f957c458d302656aa477c67d9eda5f1ce6b2058e014da347c2a1347957cec318c1de964b211b3b74c140bbedddd032b3a572fb57df84d439fa584c5e161166b3aa259e606cdaa5853fdfa63fe69a72ac3fb1d838b3731eb1a55470d254409e245ba0734b211f96a2e0ad800beb465cf07523e6750358c0df86f92716df9f36a72daf31efcfe01b90f633705010000",
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
      "Fri, 08 May 2020 16:44:01 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-101-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "40",
      "ecb54920847c548ad628a15baa84ac405aadd3846c63a85b8229369db22aff7d369004966aeb1bdc7bceb9e75e5ffbada528ea334902f5525121895e729ced3e3d51a85ec80ce62092999be40edef41f9c7c679a37eecb6095fcee3ddc4e26258a146c06b6698cdb8ce619c2ec72e376a28ce629c8286d0bc1b6aee96ddd1c8dc6e640377ac39e5192198ec325499ea5c423e729bbec760f463a11a5518c414a5807d1ed31de7ded75d38c3e61c459b759b72b4ab1ee7f2a7f8e29029cd064b2714b1739c3998fb780c4d2c7891ec0aba67e87806d2712e85782304088e60997de4a19449390447956880ba5371114e1c2f4f1b716505d6b69cd3c05d138df267e02b6f8420900073edfa558b976d62b65615faf9dd5d45bac6ddf9d7db556d3ce6cbddcac6c57b9ff6a3996c2018c71c15526ca55f1678b9fc251512dc08c93a4f0e4c96ccd89c856835cbc7388470929225c315cc1fca13600fa481bc3100e5138324c186a18c2111c9ac0801a1af7713f8018d4150a67251f2434e98f7553c363c3471ad4fd3ed2a10fa0a6f96130082000633330a05ab1f7c75e508601c773c252ca48356575e65853cff217d7be6d59736b7e6afd5746ced0f7ce42803d6763cf04ab3ea610e4319f978d3687d4e89e8b79d61bfbd704cf1a48334285a9e2f417b66739d399b7b8abd910abb8c411403bf7452e630862864f6c9089a3e5385bd1409ea36a4f57f57e8bc5fa76003181f871f4796a4700e5ba14bd9c",
      "ad4bb38e27f6b0318af228cba8ea7acec2fea2d692fbf765ee409cbfa3f35a85d5544ceb514c9835b45a7f7ffd6cd56aa8e26e57f6d4db8de57c97dc2227330e0e71861374aafa814d97c432fd91b74be00f0f89a488b7e46880711116b70eb153f96275e51d24e5e82bc15e5fd787fd83a02066fc1c6118fa0171f698c85a788b137e1846f9a89493dc372ce5353b054dc2c545b0ab53dcb7f6ad3fb78089a413060000",
    ],
    [
      "ETag",
      "JnVbJ4ZRuy55JSq6Mnz2ZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1588956132723"
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7ddfaf20f51522930fd18487a1082413156662348494ed0e86dbee6c3b0d1afebb6d37602f9a2592f8b2f6de736ecf7adbd32fa35221af41ec91cb0a5904cbb714d8e66409e2414d26c0d35070392418732055c50641978a3da89f0e3ccb0e56b8697c3e8be1d3853574ad6e37637177051195bc2f19c9d80f20f4b88c5f745cc9f31a8b69046a4517c3348ae73aac1e60b149343c7526a3f1a08844e86964fc68db56cfee931cda567f16f1a8a073bde4df24f438337231b2c6c5047c6010bb70d875c2700dae18e9f6721a2521d438a6cc059e8ba8c20c5e324c13ca106b325533eb66cd6c753a17adb6d9383b3f6becf821ba540418ab92c729d9ff804041c3097ea81e937676082c0bb396ef7a41fcc229145b24a177551c78649fdb567f218ec64ebb59e0e6b39951a82cad2a5be50721ccff495d9ec98aca2b5e4e3bbf274712a711a6b128297d63df5947dcb8b443d94d5f5b4eff58b25c483394d47546b7fda963dddeff282ebfb383097a1b01fc9ea13419076d2db3deecb4cedb75b2b3ea152a2b0ae554c152d06997ca276b180899f369c8c1d81adf2dab53701e050000",
    ],
    [
      "ETag",
      "G0/GdALihoy3zZtHX9AHcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1588956132723",
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
      "ad",
      "54",
      "db6e9b40107df75720fad24af1056cb01dc94a5d9b24a88e9d609ca86a2b7b773d904d80252c248a22ff7b77c1172cbb6d54f50d66ce9c3973d979ab288afa48a3a57aaaa898fa4f1924af1f1e18564fa40752e44b8ffde5e60ed75ff8d7f0e5a61b8626c1fee585dfeb15289a477314c6015439cb1202fc7436adf909cb62943056158455ada15735a3d3e91aa6d6d4db7ab308e61078231a3d4a8afb348df969bdbe1152f319f3034031e535c2c2adbdfeacd7e3843d0049797d3f6f5da4e2f5bf643e0b18412965516f362d54641c923984880652c72e7c893feff3d7280a6bbe403f530288109645a9d456d0101679d4cf929c5c30bd09a330e7a2b7bf25833ab546d6c0550693d9d8fdb840a1a45b7c521057e6f3047816a4cab933b95216b1c87e8f38f0857277693996b024cca301cce972a1f49433a53f1e2a3bdc42f991351a4d50ce726579d625f09446b93617e1004a8a8477dd50fbc830b7149204a5827e0d9bb71b26d23a8d2ef6709b789da681bd0660dcc16d03357183745bd05a6240658654e62ee251c4226492966798a64e00a3a66e18dd56a7895107f4b686b58ed135350dcc76575d33acb6f59004500a43ca63c6e9bae3eac0b1faae35b7cfe763cb1a5ac35df92f093d40df39b600bbce6c3c1051e5567948347f5814bbdfa8bd0ea4a2a7e5e2fed4c58302e28432212adf047bec5a4e7fe0dab72519622d47e023f23a7d928be9a180c32e1a25288414922bb694b354af2753dbb527e3fe68c7906fdaf506c905ecfb56ecaea6329bfb1aef6f4631b4c22a659a2db5e45b9d1c65b945417684e6796d56b53d8eca11b67f5137751d7b7cf11fe4a1580cee3712d75f3f2b257e55dc99b534f5666639df646cee931e073c482022bb8cef786d32b070bfe78e0a",
      "fce6a8c91071d7b602782acce2e513be4b9f3f1d790768588ca320d45b7a433736842230490f115a739bf2e0b0c95c1042946e9a511cb8a293ab3d4959494e1e26e1e2218ed7135c5556955f7220c6e19f060000",
    ],
    [
      "ETag",
      "IBQWb/wsKmwQ9mm6cbgHGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1588956132723"
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
      "4d",
      "51",
      "df4f8330107ee7af20f55592b165739aecc1197433cbe25034d190a5830341e0585b346ce17fb72db0ed85f6fb71bdbb8fa3619ae42729427267925d12ef2b60f5550c62a32e2ef02a135c1e25161cc8b57283a0b172ef378f9e5de3e49d7f2ebc8f3a759e8bec10cf66ad8b07df9053e93b4a24719440167289bf34363b5e6b05cd41bdb8dd32dd50bfd069a22eb5b65cbf394f8e7b29e5186a69edad56f7f395433aa9d1a72fbf8d1e25c59d0b11302802380f54324c21104bbd39a7799981c5b16201f0ae892a6ce598615552866849cab20743cb1e4fa7b7e3893d1ade0c47bd3fc3808a040b55e2bd92d3000205cd5cfc53eb13bbcd87b5b04da3cf824417015d4624a55f553c2027aae96ebed123ffdc6c5e0be02f0ce5321cc2b6b2cfe201d5ae42452158059a0ea8fc5d8b44749cd118ffdb224c0f19020000",
    ],
    [
      "ETag",
      "qQFU1yo6VsZHUWyjEJnlzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfcb5283301400d07fc9bae91468a1b80381c6e1558a8aba6130bdbc25014281e9f8ef763c7f70ee28a314c63115ac810e3da13593f52dddbaec68ae051cc28f04e3f0ea804c663c355c603ffac2bdd9ae4a5d486ed2960309a2480d3570e056253dbcf04b48b2a2b57ca2a93bd59cea83f12ad249c9cd52bfda4bd029551d1f9b69aa24c2e872e63f84abd18dc85a81d935f6637aa2df52dbab498aa7f6fc7ec9fd93361bc2d532bb9c9fe53e610e659e2f0ade5b5ded5963658b5bde7681f5c9207edb31cfa0fb788f3608165e0d30a6d563a61c747d83fe9ba958393cae2664030ce8f70f0bab3f1705010000",
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
      "Fri, 08 May 2020 16:44:02 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-103-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54db6e9b40107df75720fa1adbf86e22598d65e31629c62dc6492faad0b20c6413cc127649e446fef7ee02b6a1b6dabcc1cc3967ceccceee5b4351d42712fbeab5a27a247cce20dd7d78a49e7a2533c05128333e851fbf875b33b5bfbdbe826eee360b664c27930245723643db248226a3598a815d6fd6ad30a55982524a9b42b0d9d17acdce603cd607c34eaf3beaf60a328328b825f1939478e03c61d7edf6c1482ba4348c002584b530dd1ee3ed976e3b49e92360cedaf5ba6d518ab5ff53f9634431e284c693cdba709131485dd82212491f27baefddd4f55b046d5ba140bf100c08639ac55c7a2b64308d031266692e2e94de44508473d3c7df4a405d1bb7c6cc51308db26decc6680b578a8f3872f92e016561af968a692d56f672ea982bcb5dcf3e1bcb696bb6badd2cadb572ffd9b00d85232f829cab4c949bfccf123fb9a3bc9a0f8c9338f7e4c86cc589c89683342f1ce251428a08570c4a983bd286a833d6742ff0463818f7065ea081e78dbdd100f53c0deb7de8fb1ea0aa42eeace0a398c6dd7e1705fd81e77a58efb97ddcd55d6fd0d7dcbe361c687e001a0a74b564ef8fbde014108739610965a49cb23ab38da963b8e6c2b50c636ecc4fadbfa6e40c7d6f9b02ecd81b6b2658d53105288bf8bc68b43ea45af75cccb3dad8bf2678d64092122a4ce5a76f5a8e614f678e7957b12156f116428477eb67b98c018a189cd8281547cb215d525f9ea36a4d97d57ef3c5fa72003181f879f4796a4700e5bae4bd9cad4bbd8e23f6b0368ae2288ba8ba766cd3faa45692fbcb327728ca2ee8bc94613511d37a10136635adc6df5fbf1a951aaab8dba53df5ebc6b0bf4b6e9e93191b024821c6a7aaefd874492cd2ef79bb04fef090488a784b8e0618176171eb303b95cf5757de41528cbe1414f760a8750e828298f20b085d3f20ce1e13590bb610f3c3308a47a598e4be6629abd8c969122e2e82559ee2beb16ffc01ee9c3cbc13060000",
    ],
    [
      "ETag",
      "doeZz6mIrRXwwe9IyUFsEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1588956132723"
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
      "5d",
      "6f",
      "82",
      "30147de75790ee5513f17b4b7c40e79c893aa7b82c598ca970411c50d6961963fcef6b0b2a2f2e2433d90bedbde7dc1e7adbd383a6ebe8d38f1cf4a0a3b5ef7d2540f7771ef0573999014b02cec4109388012a493670ec49b6e787836df836767b8cf65ddc33df7706f53a9d94c5ec0d8458f00e2212b1eb43e030117fa858cff20a8b700872459b044918ad5458bac07c1f2b786ecd8693411e0989a390c9623432bba33ecaa063e9ba8883395ea925ff26a1c6a59689a12d59cfc0050a910d975dc7946cc1e643d55e86c33880322309b5816522b230853d4a92185342ca2255362ab5b2d168b7ef1b4da3566d556b277e406ccc7d12c992c51c9d7f80138e8319d9c91ea3667a08340dd3969f7a81dcdc29e45b24a06f59ec3be89c3b967e210e2756b39ee366b3a596ab2cac2a5ae5fa01acfe495d9cc9068b2b5e4c3bbb273712c72149225e50fa69f462de70e3c20e4537fd685afd5bc9322ecc5050d71a8efb73cb1c4faf8a8beff26282ee9e039b52224cc64059cba8d4db8d56b3824e56ed1169452e9dca69022a6d63f1643dfb5ce45c1c30d08eda0f8811589d1e050000",
    ],
    [
      "ETag",
      "gimGjmVMfCsrEfaCAXw1rg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` > ?",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1588956132723",
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
      "a5",
      "54db6e9b40107df75720fad2aab5cdd5974856ead8a44575708271a2aaadec0516b209b06477711545f9f7ee822f20a76dd4bec1cc9c33672e3b4f2d4992ef5116ca2792eca3f8a180e4f1cd1df6e50fc203198885e70cb12f9756fe5e63fad54c9f5b1bb2d0cfc6a35115854a3405699ec036c50509203d592e3a31c1450e08c66d4ed85615a3ad9a83c1d0eca9bad6d7f40a4c6112cd50762f286e19cbe949b7bb13d289318e130872443b014ef7f6ee46ebe604dfc180d16e336f97a7a2ddbf643e4d700018c2d968b9a854141492154c014a848e033cf43f36f93b08a49d98476f50004110e02263425b4513e02c4271414a72cef4c48ddc5c8adeffd60cf2c29a59134f9acc978ef7760d5241b77e27012aad5604d22261d2b93bbf90d639cf7e0b28a46be9e6b3e55adc42708412b842e15a1a49a7d2d8994ad23a040caea5ef85a2e8503a2d559519434819ca4a5d1ef0135853c3bddb66da2f0c724f214800e312b661abbed203ea4019fa91df0fa2816efa91027d7fe0f74da0fb4a3034a011fa10d41998c85de14186b3b0df5355cde473f17d63d8eb433804a6194460a0478ac23fa3816944c090b70ccffb7a020279a55344734cd1b6dbf2c4b5c69eb5b2cf578e654dade9a1fc9f041d45dfb8360ff6dca533e1a87aab22c01b3fad8a6d36aad101c67b5a2fee4f5d3c2a2027087351e516d88e67b9e389675fd764f0959cc118048f8b07b1941148283ca001012964905ce050cc52be9c2f6ccf9e3be3d981a1dcb2cb5d24e561dff6620f35d5d9bcc7bcb919d5d02aab90d9db8fa2514d93e51a24c50b349bad59561b1cad17d8fe45dd540cf1ffc5698aa6b4158d1f8cdfa8dc7efd68d592c8fccc6cd5c9574bcbfd2ab0a54f785c184102b3e090f6150f4e002bf76bce288fdfdd3401e1676d2f",
      "80326ee68f3fa087f4e5eb11a700a5d5442a42cdd00d75b823e440c28e234c53db451cdd35910ba63063bb6654f7adeae4734352519353c244387f8b8eed7c2ac5b79e5bbf003fcc3dab9e060000",
    ],
    [
      "ETag",
      "BitKPEp+2t3QL3OEvrS3BA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1588956132723"
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
      "4d",
      "51",
      "c1",
      "6e",
      "82",
      "40",
      "10",
      "bd",
      "f315647b6c49446b6b9b78a80db5126295d643d310b3e2885860e8ee52430dffdedd05940bbbefbd999d798f93619ae43bceb6e4d1249b38fa298095571188a5baf8c08b447079e498712037aa1a048d54f51b73bdbf4f97ee37e5b588a7ee92be388be3785c57f1700f299575278924dec5906cb9c45f1a9b0dafb58ca6a05e5caf991ea85f683451e65a9bcd3f9ca9e377a514b75a9aaf3cef69e239a4912a7d06f25be9550eb8f161070cb2102e0be50c0f108a9976ce699a2760712c5808bc19a21a6b396258e494215a92b2ecdead650f47a387e19d3de8dff7076d7d8221153166aa65f54ece0b081434f1f1a8ec13bbce87d5b04ea3cd82ec3a01752392d2af6aee93335535b7c068517019362905f00543698683b6d0236d16cfa8bc0a15856005683aa4f277bdc6a2e18ccaf807b22f088919020000",
    ],
    [
      "ETag",
      "OrJLzYJahby+tiGJQaFEPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb64ad0e1fa9d29d0856934ae3175831210609c4a02620e8f4ee75fa6ef05e8050ca944a755d31093e414f2c774447a89e7afd398f69ddf8cdf8b1aef2dcfe1edb74def77e58ed5b675a9fd26c93d58689e187eec259749671199b4311e64b212213af9c0341a72546c772fd1304578539d6fb61a1ca8949a3b9efb78b68484464ed1227ae75c12b75905b39e7cfaf1ba4d08abb9b40c965766c43861f19d486b145ab62e18b9c6401f285dcb550364f520593f506726f9f204fe94b97dc888b6102068075577e672ae5ef99edb8ee00fc3753dd5fd9fbea31726777f0fb0711d5d9ba05010000",
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
      "Fri, 08 May 2020 16:44:03 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-105-1588956132723",
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
      "02ff8d545d6f9b30147dcfaf40ec714d4202f9a052b446095d5113d211d2aa9a266483a16e0926d874aaaafcf7d98624b0545bdfe0de73ce3df7fadaef2d45515f701aaa978a0a71bc2b50fef6e59940f542641003b1c8ecaccd78b7086ff5c7af2100b7ce9c829bbbe96452a2b06453b0cd12d4a6a4c803442f37eb4e9c93220339216d2ed8ee6983766f301e9b83614fef8ffa7a49a6288916387d11124f8c65f4b2db3d18e9c484c4090219a69d806c8ff1ee6bbf9be5e419058c769b75bbbc14edfea7f2b784048061924e36ebd2454151eea32dc089f071a287f0aaa9dfc160db8939fa1507080401295226bc95320149231c17b914e74aef3cc8c3d2f4f1b71650d7d6c29a794a4092629bfa29d8a20b25040cf8ec2d43cab5bb5a2ab673bd729753cf5e39fe7a76632da79dd96ab1593a6be5e1c6722d85019820c95526ca95fc73f88f7424ab8588329c4a4f9ec8d69cf06c3548fb83433c4a0811ee8aa20ae68fb421e88d351346701444637d00230d413886a301d0a1169806324288405d413a2bf92025291868a10e8cbedf374cdd3786d0f0a13932fd70a819c3b03f823ddd542bf6fed84b9023c0d01cd38c505c4d599db9d6d4b37cfbda772c6b6ecd4fadffcef119fac1b539d87337ce8cb3ea638a4091b079d96873488dee199f67bdb17f4df0ac812cc7849b92a76f3b9ee54e679e7d5fb3c15771816210bcad7762192390507462839c1f2d43f99284e21c5567baacf72b17ebee00a21cf1f3e8f3d40e078a7591bd9cad4bb38ec7f7b0318af228cba8baf65cdbf9aed692fb8f65ee41527ca0f35a85d58c4feb894f9836b45a7f7ffd6ad56aa8fc6e57f6d41f1bcb7d145c991319174528476970aafa894d17c432fd99b78be30f0f89a0f0b7e46880321ee6b72ea0a7f27275c51dc4e5e82bc1be6168867610e4c49c9d237a8679409c3d26a216daa2941d86513e2ae524f70d4b45cd8ea40938bf",
      "084e758afbd6bef50741c0c41c13060000",
    ],
    [
      "ETag",
      "qEU8qLdK3Y+daaKNDsaHPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1588956132723"
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
      "0002ffc554d14ec230147ddf5790fa2824206ea0890f5351972022cc274348d9ee60daedceb69310c2bfdb7643f6a25922892f6bef3de7f6acb73ddd5a8d06798fd3905c36c8225e7ee4c037274b90cf7a3201913329d490612a8034351b245d6af6c6b3dd11f62eb275d4bb390596796d67e15e5d152c11ac20a18ab755918aa318582854fc6ae2469937584a13d02b06c8f2249d9bb07980e52633f0d49f78a3fb2a92606890d1cb70e85e0f07a48476cd9f45422ae9dc2cf9370933ceac528cbce162021170480338ec3ae3f80681f44c7b054d32062d81390f409422bab080971cf38c72c4964ab53a6dbbd5b1fbfd0bdbe974cf7a67dd3d9f6140658ca92e799992ef1f9028299be05af79838c521f0222c5abeef05892aa7506d91823e75711c92efdcaef90bd11bf9ce79855bce6656a5b2b6aa6a55143398ff93ba3a93155557bc9e76794f8e244e13cc535953fa6ef8e41e71e3ca0e75377debfa8363c90aa9cc5053d7f71e0753df7d1cff28aebeb38309ae3712c498a332990063ad4efbbc6ff79c36d95bf506b515a576aae439987440d593f5104b958b281360edac2fc45e3ef51e050000",
    ],
    [
      "ETag",
      "yI5ANo79pwf7C+elpI06bA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` > ?",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1588956132723",
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
      "ad",
      "94",
      "5b",
      "6f",
      "da",
      "30",
      "14",
      "c7",
      "df",
      "f9",
      "1451f6b2690572e12ea18e41ba4582d085d0aadd26708c43dd26716a3b45a8e2bbcf4eb804c1b66ada13e15cfee7778eedf35a5214f509c70bb5a3a83e5e3ea788aedf3d125fbd901ec4c1527abcbb3bcdd4b8bb6a19f7e9eae367a8af2777ab6e378fc25936035112a2322329858875a693ca929234019490b2102ceb5aa3acd75bad76bda19b46d330f36486c26088e32729f1c079c23ad5ea0ea4b2246419229060568124dadbab2f4635a1e41141ceaac775aba214abfea5f2654820e098c4dde924a74819a23314011c4a8e43fac2ff74ac5fc120aa2c45f40b86084048d2984bb65c069238c0cb9466e242e95518853983deff2d18d48935b4fa9ed21f4f1deffd1c44526efe41014c99cd286269c8952b773c52e689a8fe00186273e5f6abe55ac24249804334c38bb9d2552e959e33509439e30277aefc4835cd44ca658695955c20c6719c8179c00f51014778b7d3b4cf9ce45e428a002e18b661b3a6d6007a4b6bfb81df8441cbacfb81867cbfe537ebc0f435d8aea1dac247a0a8c065ed3c1fc424869aa6e920f061addd4286595fd4c50f3050d080eda619e84d6806d004beba55d8ecfb8114018e06982584e1edb8d5be6bf53c6b665fcd1ccb1a588343fb2b8a4fa26f5d5b047beed4e98bace2a80220263fc89b3d1ed4d104b89869b1b93f4df1a481846222a0b26b603b9ee5f6fa9e7d53c0107772889600ae27cff256062064e8900d28881047744416f22cd5ebf1c4f6ecb1d31b1e14b26b76",
      "bd8b6422ecfb1ef6d05351cd5b27c737233fb4dc2a311b35b5e0db5c9c55b901617a46e6656b56f5238dd219b57fa1f3ec9135f17aa3ebff4068688656d60cb1363cdde8e86647af55c455bdff0df8f6eb67a9505215ab670bac7e9b5aee9dcccd7cd2e3a2005114c303c41bdea04cccdd6f59ad227eb7e7648a58757b00b1253816fb00b243f9ec41c9ed80a3fc907241a3566b9b7b419148f949445d6f34771127bb4ed642118af96e18f9cecb27b939424a0b38599a0c17cfd3b19d2f197c6953fa058dcf430fb2060000",
    ],
    [
      "ETag",
      "TYY030tRw82Zuw+Bc1ySYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d51d16e8230147de72b48f73a12c1e8d8121fe642260931caf4658b31b55e190a5cd6168d33fcbb6d01f585f69c736fef3d878b65dbe490165bf266934d9afc55c0cf4f09c8b9bec420aa4c0a7594580820cfba1a244d74351d3398f989608bc9f7ff9c1ec2b9cf8ea7d1a8a912ec1772aaea2e0a29bc4b21db0a857f0cb65bde6805cd41bfb85e7333d0bcd06af25c1a2d9c2e82cf207e9472dc1a69ba8ca2f771149056aacdb952dfdaacb2c74d0c3be05030b82f5472dc0393a1712e685e66e008ac3803d10ed18d8d9c70ac4aca111d45396e6fe8b803df7f1d0cddbef7e2f5bbfa0c19952916ba65f9456e0b4894348bf1a4ed13b7c98737b049a3cb82ec1e027a8c484947ddec911b55b7b795d5a1d57dd8f82c41cc382a33028c851ee9b2f840ed55ea2824afc0d08caadf354965cb59b5750523614a8a19020000",
    ],
    [
      "ETag",
      "aBceP8gscTHZzQakIQ8cvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcf516e82300000d0bbf45b8ca220eccf22e040b242ca60fc908e1604c50a855134bbfbccde0dde1390a26042e403bfb01b78033351cd65b1f4b901e7aa980e65377d1f5bf291449852115257b63418ac087a1bcb92ef09120fd6ccdc8d68a6ef74455199ba6bd759a99c5987d3e3d59b7c76d2512cb4ae46794cb855173fc3f818519599d2a37ba7dfaf6c9e0eae8cc75006b013a980b4704e8d81379f89ae7dd1954c1bca0781b5b9b75c14f5b0b57d278aafb67a4e8c036eb6a8846b11207c539aed85942c24a2020bc0e4bdee99c8ebd76ca399e602fc37f361beb3d71532d2b31efcfe013fcd009f05010000",
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
      "Fri, 08 May 2020 16:44:05 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-107-1588956132723",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d54ef6fda3010fdce5f11651fd7f29b122aa19541d82241d892d06a9ba6c83197d46d8853db69852afef7d9498064545bbf207277efddbbe7b35f1b9aa63f9264a35f6b7a40a2a70cd8eec3030df40b9501812295f9e87cb632b49b592e9b939f4febdd159b7b2fe3715145723447db34864b4e3386815fafdd66c468962246e9a524bcecb487979d81618c06579d5e77d8ed15600e71b820c9a3a2b81722e5d7add6414833a2348a01a5843731dd1ee3ade76e2b65f401b0e0ad7adf966cc55bffe9fc29a618094293f1da2d54641c980f5b4462a5e304df043775fe2641db6624ab9f09068431cd12a1b41534982621893296934ba6571994e15cf4f1b312d05d73614e3d0dd338db267e82b670a16d9040bed8a5a0cd9dd552b3ecf9ca594e3c6b65fbeef4abb99c34a7abc57a69bbdadd57d3313581821872ac36d66ef22f5b7ee48af26e1be08224b9264f652b4a64b634d27ae3108f148a44aae25096f9c3f615ea18ed511006431c1abd4110b621088c603840bda08d477de86f024055865c59814789340adabd100dc1c7608cfcfe60887d23943fa34ddfc04617773b41a097e8fd7116cc000998119e524e4a97f5a9634e3cd3b7e6be6d9a3373761afd8591b3ea3bc792c59eb3b6a71255b52944592c66c5a075936ad30be96775b07f39783640ca0895a2f2d3b76ccf742653cfbaadc890abb88008e19dfba49631443187131a3179b402d8926ed439eaf664599d375fac6f87222e2b7e1d759ec691856a5df259ced6a5dec7937b58b3a238ca22aabb9e63d95ff44a72ff36cd2d8ab337789ecbb09e4ab7eea5c3bcc6d5f8fbdfef46a5872eef76294fffbe369d1f0a9be754c681101824f8d4f51d9bae8045fa3d6f97ac3f3c240a22df92a3002e6458de3acc4fedf3d555779014d697845db9fa46e74028814c9c578c3afd43c5d963a27ac116127130a378540a27f7354959454e0e53e5f222d8e529ee1bfbc61f23bfa3e113060000",
    ],
    [
      "ETag",
      "+RBIuayDISrFiZqUy6rFTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1588956132723"
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
      "0002ffc5545d4fc230147ddfaf20f515123e04a6890f4351301315467c3084d4ed0eabdbee6c3b0d1afebb6d37642f982592f8b2f6de736ecf7adbd32fab5623af2c09c8698d3cb1d55b067c7db40279af2753105924851a524c0490ba6683a42bcd16e85e3fb0d9a8f3b9b613efea95d9a33e3a6767394bf8cf1053c5fb52918a4306512054fc68e25a9137584263d02bfa186571b234617d07cb756ae099371d4faeca488c81412673d77506ee9014d0a6be5f24a0922ecd927f9330e3c22ac4c80b3e4d21040e890fbb5da71c5fc09763d35e41e3348286c08cfb200a115d98c32b8e594a396243a51aad66bfd1eadaf649b7d7eab4fbedce961fa14f25c34497cc67e4e707244a1a4df143f798f4f243e07998b77cdb0b12964ea1dc2205bdeb6216909fdca6fe0b713cf17ac7256e315b58a5cacaaaaa55218b60f94feaea4c9ea9bae2d5b48b7b7220711a6396c88ad297eead73c08d2b3b54ddf485e30d0f252ba43243455d6f7c339c79cecddd5e71f55dec4c30584b10771c95c904186bb59ac776b7df6b92ad55cf515b516aa74a9e8149fb543d592326552ea491006b637d03185ab9621e050000",
    ],
    [
      "ETag",
      "soLJWiSH3zy8nTGki8H7oA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` > ?",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1588956132723",
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
      "ad",
      "54",
      "5d",
      "6f",
      "da",
      "30",
      "14",
      "7d",
      "e7",
      "5758d9cb260d123e02a112ea1084351284368476d336819338a9db244e6da75355f1df67277c04c1b66ada0352b8f79c73cfbdb6ef6b0d00e511a7817201140f474f39a22fef1e88a77c9419c461243313ef0a47ceecfe66b998a9f1e2d6ccb32f0f37834189c2059bc1248b519d919cfa885d2c178d88923c839490ba10ac3735a3ded40da3af779bed56afd52ec90cc5e114a78f52e29ef38c5da8eace482322248a11cc306bf824d9c7d5e7969a51f2807cced4e3baaa28c5d4bf54be8c890f3926e960b9285de40cd1154a208ea58f033df03e1deb37304c1a91403f631f41df2779caa5b752c6276988a39c16e242e9550445b830bdff5b09280b736a8e5c309a2f6df7fd1a26526efd014006562b8a581e733071e633b0ce44f57bc8105b83bb2bd33145849210c76885833518804b30b4c700ec24c0f75cd3da085c16be8a9a01621ca78533177a31aaf811d9ed38ad3347b9979022900b135bd8aaa77561d3d0fa5ee8f5fcd068eb5ea821cf33bc9e0edb9ee6f73ba81378085615b8ac5df2614ad21ef27a4133d08c50d7db3ad40cc1f35a7ecbd36133d47a5a1feae2a719ca5661b3efc7a7087234c62c230c6fe7ad8c1c73e89a2b6bb2b24d736c8e0fedffa4f8047de75802ec3a4b7b2458d55185508c7e5c367b3ca8a3097031d36a737f9ae2490319c544982aee8165bba6331cb9d66dc586b894531441ff65f124af650863860e6c48618238a23312c8b354aee70bcbb5e6f6707a5028eed9f50ec904ecdbdeeca1a7aa9afb921ddf8cf2d0caa8",
      "b4d9ed2895dce6e359955b18e767649eb761a579a4513ba3f62fee26d3f9f03ff96be89ddf58dc7efda855e415b165b6d6949ba5e97c95dc2227330e0a1145a97f28f886d7268965fa2d5b54e0772b4d52c456db1b605c84c5cbf7d9a17cf174e41ec049d96e29d8ea748d767f272888949f22fa6d638738596bb2164a50ca77c328d75b39c9cd91a5bc62a7a049b87888b6657f2eccd736b55f0768b9579d060000",
    ],
    [
      "ETag",
      "FbHigRMhQUSM/lSVEupXjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1588956132723"
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
      "4d",
      "51",
      "df",
      "6f",
      "82",
      "30",
      "10",
      "7ee7af20ddebc804e3864b7c98864c336326eab26431a69693a1c0b1b66c2186ff7d6d01f585f6fb71bdbb8fb365dbe494e41179b6c93e897f4ae0d55d0c72a92f21883295421d05e602c8bd7683a4b176bb9fd349da1f867e154c8ad386ad1fc4dbc772346a5c827d434695efac90c28704d24828fc65b0ddf246cb6906fac5dd8e9b86e68556935561b4d9621dbc06e1ad946164a4c5663e7f19cf03d24ab539b7ea5b9b518eb80fe1001c7206d7810a8e476072663617342b527004969c81689be8c2468e399605e5888ea21cb7e73beec0f7878347b7ef3d79fdce9f22a332c15c976c56e432804449d310ff8489adc98737b049a3cb821c6e02ba8d4849bfbad82317aa6e6f5bab43db6bb3712541bc7354cb08302bf44897c504f5ae5247217909866654fdae69225bceaaad7fb6d6e0ee19020000",
    ],
    [
      "ETag",
      "1XHCl39R8yECpkUcT/sKVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b7282300000d0bb64ad8e09964f770d14a60da64511a99b0c4240fe81a42a747af73a7d37783f2049532e25537dcd3bf00ca60459ab74457a134f45bee1cb63216d6cb6d4a512be1ec620083af49d87461def27dd7fcbe29eda39860c862706bb266d662f4bdad3512f759a34fef53a283c8775a00a511061c0b8f2f6cebb9629e22ec3afc1db2233ff7470c4cf8a851d54e4e53ecb48ff58fa1e32499ffbe7acf568655b3bbb20fe8c2e1bbc636a68935643728d2b9b079973d9eaf416052eef1c65f08310625a8305e077518e5cb2f231d39e2c6b01fe9b4c4d823fae9827231fc1ef1f473cc83e05010000",
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
      "Fri, 08 May 2020 16:44:07 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-109-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "40ec714d0249c847a568cd12b23205b20169374d13b21d43dd124cb1e9d455f9efb38124b0545bdfe0de73ce3df7fada2f2d45511f48b2552f151592e831c7d9f3bb7b0ad50b99c11c4432a34f966e6c7fd6bffdcef87b0d2e75ed63cf8ea6d312450a3603bb34c66d46f30c6176b9f13a5146f3146494b685605bd7266ddd188f27c650eff746bd7e4966380e5724799012779ca7ecb2db3d18e9449446310629611d4477c778f7a9d74d337a8f1167dd66ddae28c5baffa9fc21a608704293e9c62b5de40c6701de01124b1f27fa165e35f53b04ec3a91403f11840142344fb8f456ca209a8424cab3425c28bd88a00817a68fbfb580ea992b73ee2b88c6f92e0912b0c317ca167010f0e7142b4b776d2b96b35cbbf6ccb7d64ee0cdaf4d7bd699af571bdbf194db6bd335150e608c0bae3255ae8a3f47fc148e8a6a5bcc38490a4fbeccd69c886c3548eb95433c4a4811e18ae10a168cb421d0c7da04867084c271df80a186211cc39101fa504393011e6c21067585c259c907094dfac61886465f0bd0004e828166e80184681c18bd30c446384483fe56add8fb632f28c380e305612965a49ab23a77cd996f06d632704c73612e4eadffcac819fad6b504d87737ce5cb0ea630a411ef345d96873488deeb99867bdb17f4df0ac81342354982a4edf727cd39dcd7deba66643ace20a47003d7b8f72194310337c62834c1c2dc7994db7f21c556766d7fb2d16ebcb01c404e2c7d1e7a91d0194eb52f472b62ecd",
      "3abed8c3c628caa32ca3aae7bb96f349ad25f7afcbdc80387f45e7a90aaba998d69d98306b68b5fefefad9aad550c5ddaeeca95f37a6fb5d728b9cccb838c4194ed0a9ea1b365d12cbf45bde2e813f3c249222de92a301c64558dc3ac44ee58bd595779094a3af047b8391a10f0e828298f173c4b0a71f10678f89ac857738e18761948f4a39c97dc3525eb353d0245c5c04a73ac57d6bdffa039362c12713060000",
    ],
    [
      "ETag",
      "19FRlMJ1Xzrt+0bF10B2Mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554cb6ec23010bce72b907b05897742250ed0428b04944710870a21936c20d48953db698510ff5edb09900b55a422f5127b77663df1dae3a35128a00f3f74d163016dfced670cecf0b00531559319f098082e8788861c5051b141e0ad6287cbe5d27ee99b82d89ba86646d67454ed4edbed84c59d1d0458f28e3292b1e70371b98cdf755c48f31a0b71006a4587923808d73a2c5e617188343cb76783f14b1609a8ab91f16238ec74873d9442a7e26d11170bbcd64bfe4d428f2b2315437bba9981070c4207aebb8e18dd832306babd1c07118112a7317380a722aa3081b78cc61166949664aa5429b74a958665b51acd4aad6a566b673ea10e163e0d55c9628e2e3f20a8c06446bf558f51333904968449cbcfbd405ee614b22d92d0972af65d74c99d8abf100763bb59cf70d3d9cac854e65695adf27c02eb7f529767b2c3f28ae7d34eefc99dc47140e350e494ee0fdf3a77dcb8b443de4d3f77ecdebd64b99066c8a96b0f46bdb9dd194d6e8acbefea6a82ee41009f302a4dc6415bab52ae5b0db3594667ab3e516545a19c2a580c3aed60f964bdfa42e63c4c381827e307d69851771e050000",
    ],
    [
      "ETag",
      "nWWWTGF7tlTbp37p8QM2BQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` < ?",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1588956132723",
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
      "c554db6eda40107de72b2cf7a55503f802d844422905b7b14a4c624ca2aaad606dc6ce26c6eb78d78950c4bf77d7e662046df3d627f0cc3967cecceece6b4d92e4479c2ce47349f671f49443b67af7407cf94c6480a148642c8bb1807dbe09572f97e8e3b776f7e5ae9ff67bbd12850b3645cb34863a257916003d9f4e1a5146f2146584d4b9605d5595bada36cd6ebba3ea9aa1e92599421c8e70f22824ee194be979b3b935d2880889624029a68d802c77f1e6b3d64c33f20001a3cdc3ba4d5e8a36ff51f9222601629824bde9a4749153c866b04438163ef6f485ffe950bf81d1b21171f4330e000501c91326bc95320149421ce55921ce955e7990870bd3bbcf4a409e58236be04983f1d4f1decfd152c8cd3f48884ab35906348f99f4c51d5f49f39457bf4714e85cbabbb45c8b473212e218667831977ad285d477869234175f3f7345d103e9a2f054d45b006538295c79c88fa1e2856737a3b44f1ce34e428820c60d6c603343e920d554ba7ee81b4168ea6d3f54c0f74ddf6823dd57826e0b5a0b1f50558189da251f2524317da423bda5e8c80c7de8189aaa22cd5014fed352c1505a1a18e0c342de28ac77fd04192006434c5342f166d6f2c0b5fa9e35b3bfcc1ccb1a5ac37dfb2f193e42dfb936077beed4197056755421e2631f96cd1e0eea60028ccfb4dadcdfa678d4409a61c24d1577c0763ccbed0f3cfbb662835fc8114428584d9ec4950c514c61cf46195a0283ec8a2cc459cad7e389edd963a73fda2b1477ec7a8ba41cf6636776df5355cd5ba58737a33cb4322a6c765a7225b73e3ba9728be2fc84ccf3262cab071ab5136affd55dfb0ff636ff7ed52ae232df2e1b5bf2cdd472bf0b6e9113191742c82009f6e5def0d204b14cbf657b72fc7695090adf663b0394f1307ff501dd972f9e8dd80178b969b610d45a6647d3b6829c98b16384",
      "d1ee6e1147eb4cd48225246c3b8c72ad95935c1f58ca2b760a9a80f347e8d8ced7c27c6d5dfb0dc51451d995060000",
    ],
    [
      "ETag",
      "EEttctBQfywHa+K59wWApA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1588956132723"
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
      "000002ff4d51d14e8340107ce72bc8f9a8c4d2da5a4dfa60b5d546d22ada44634873a55b0481c5bb43421afeddbb035a5eb89b99dddb9de1609826f909d31db935c9360c7e7360e55900e2555d5ce0792cb83c324c39900b550d8206aa9a8d9e8bf987933f44979fce2a28607e7eb52a2693ba8afbdf905059779048e27d08f18e4bfca5b1d9f05a4b6902eac5cd86e981fa85461365a6b5c5f27df63873bb52823b2d2dd78e73377566a4912a7d7af25be95522dcbab00706a90fa785328611f862a19d739a6431581c73e6036f86a8c65a0e18e619658896a42cdbee59f6703cbe198eec41ffba3f68eb63f4a90831552deb37725c40a0a0b18b85b24fec3a1f56c33a8d360bb2ef04d48d484a7faa79408e54d5dc3ca345de69d8b414c05f184a331cb4851e69b3b847e555a82804cb41d33e95bfeb29140d6754c63fdc28302919020000",
    ],
    [
      "ETag",
      "r6KwFXLuDj/YLOgweF+4Ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "41",
      "7282300000c0bfe42c8e1029d09b68b50a632934c6706130a4104c090144c0e9dfeb747fb00f9052cada36e9e49555e0158ca9e1cce9dc93b63be66ca7b0b2563c3beb96897f90381d26d8919120eb23dce85c0dd171dbb9befe5dfa5d74283e8955232389b64e82efc1fa466379b2cb3edef771af154b9dda5e4c3632225385209df22b0d30236f410607b5e6b77c62ab2f29a85e44d2bb2c77501f346389b4f29df2b8a9b5dac9f677ab557ca8cea6908b178cab45e0d38b26c2fc180a24b0b4b331eaa1a7700e66800d356f589bf0e70c9a8e3303ffcda41b6bf6bcba2c6d58037eff004247359505010000",
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
      "Fri, 08 May 2020 16:44:09 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-111-1588956132723",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7dcfaf40ec71cdf707a452b446095d9112b212d2aa9a26643b86ba054cb1699555f9efb30d4960a9b6bec1bdf79c7beef1b5df1b9aa63f9364ab5f6a3a24e14b8eb3dd97270af50b99c11c8432f3e01af876f5328fbdaf3be8985130ffcd76d3c9a4a8220acd409c46b8c9689e21cc2e37eb5698d13c0519a54d41d8ec76bbcdeed034c7c351b7df337afd02cc70142c48f22c291e394fd965bb7d10d20a290d230c52c25a88c6c778fbb5d74e33fa841167ed7adfb668c5daffe9fc2da208704293c9665da8c819ce7c1c0312491d27f8165ed5f95b04c4ad5054bf12840142344fb8d456d0209a0424cc33452e98de45508495e8e36f25a0afad8535f33444a33c4efc04c4f842db020e7cbe4bb176edae969aed5cafdce5d4b3578ebf9edd58cb696bb65a6c96ce5abbbfb15c4be300465861b58976a5fe1cf1a314a96e5bcc384994264f662b4a44b634d2fee0108f149244a862b82cf38dce0874cdce1806d04081d91fc2a0832134a131047dd841e3011e6c21065506a5acc0834418d5019dc1d880fe188e4c7f1080c0874334f2475b63000682be8f867a89de1f674119061ccf094b2923a5cbfaccb5a69ee5dbd7be6359736b7e1afd2d2367d5f7ae2d8a3d77e3cc04aa6a5300f288cf8b41eb26d5a6e7c2cfea60ff72f06c803423548852a76f3b9ee54e679e7d579121567181438076eb17b98c0188183ea141268e96e36c49b7f21c7567baacceab16ebc7a188898a9f479da77144a15c1735cbd9bad4fb78620f6b5614475944f5b5e7dace77bd92dc7f4c7307a2fc039ed732aca7c2ad47e130ab71",
      "35fefefad5a8f4d0c5dd2ee5e9b71bcb7d9058959319170738c3093a75fdc4a64b6091feccdb25ea0f0f898488b7e42880711116b70eb1537bb5baf20e92c2fa92b03718f78cf1815000337e5ed1378d43c5d963227be11827fc6046f1a8144eee6b92f28a1c0593e5e22238e529ee1bfbc61f7f2ac3b613060000",
    ],
    [
      "ETag",
      "YR7eQOqDmT+ybN8lfDzsyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1588956132723"
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
      "02ffc554d14ec230147ddf5790faca120632c08487a9884b001186313184d4ed6e0eb675b69d4a0cff6edb0dd80b668924beacbdf79cdbb3def6f45babd5d0264c3c745543af61f09e01dd5e04c01fe564062c8b3813434a1206a82ed9c07120d95fad61c37e1abedf6f1a5ffec4327acde79e13f4fb398bb96f1063c1fb169188fd10228f89f845c5b522afb004c72057744994c5c94a85f523ccb7a982e7cecc9e0ccb484c3c854c16a391753d1aa002dad54f8b7898e3955af26f126a5c6a85185a93d719f8402171e1b8eb949235b8dc56ed65384e23d019c9a80bac109185391c5092a59812a28b946e18866eb4bbdd5edb345acd4eb3b5e747c4c53c24892c59ccd1e10738e1389a914fd96364e68740f3306ff9be17c82f9d42b94502fa90c5a1870eb95dfd17a23d71cccb12b7982db552656555d12a3f8c60f54feae24cdeb0b8e2d5b48b7b7226711c932ce115a5ef460fd619372eec5075d3b7963338972ce3c20c15751d7b3c983bd6787a525c7c9747135c6f39b02925c2640c94b58cc665b7dd311b686fd51b22adc8a55339cd40a55d2c9eacfb908b9c8f2306da4efb01873e50851e050000",
    ],
    [
      "ETag",
      "x3G0IVGqHk0xfNA192X9Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1588956132723",
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
      "ad",
      "54",
      "61",
      "6f",
      "da",
      "30",
      "10fdceaf88b22f9b3420010249a5aa43906e91686843a09ab6091ce3a46e439cda0e5355f1df67278104c1b66adab7e4eebd77efcef6bd3614457dc2c95abd50d40047cf19a22fef1e49a07e9419c4412433e1a243e724e5e6d69e2dbafa135b3c07e9dde56581c2399b814d1aa326231985885dcc67ad88922c059490a6106cea7aa7a91ba669197dbddb1974ba0599a1389ce0e4494a3c709eb28b767b6fa4151112c508a498b520d91ce2ed6da79d52f2882067ede3ba6d518ab5ff52f92a2610704c92cbf9ac70913144976803702c7d54f475f0e958bf85c1a61509f4164304202459c2a5b742069224c451467371a1f42a82229c9b3efcd602eacc9ed8235f194de7aeff7e0536526ef541014c592e296259cc956b6f7aa3ac5251fd0130c456cafd17dbb345849210c76889d72be552b95286ee58a9702be57ba6695da85ce5cef2aa6bc4384e726f3e0862547324b2e5409d338779909022800bf912b61c687da09b9a1584c1008666d708420d0581190c0cd00d3468f5506f1d205057e0b276c107094980d50f7568f6adaed113d89e25f046cf40411f9ae140f091a51956b0564b85dda11f4811e0688c594a182e27ae8e3c7be8db4be77ae9daf6d81e57edffa4f8047def3902ec7b73772458f55185400c7f5c347b3ca8a3097031d37a737f9ae2490329c54498ca6f82e3fab6371cf9cea266435ccb098a007c993dcb8b198298a18a0d28d8208ee80d59cbb3546fa733c777a6ee705229e437ed768f6402f6ed60b6eaa9aee6bfa4c737a338b4222a6df67b6a2db7fb78566501e2ec8cccb60cabfa9146e38cdabfb89bf99ee37e",
      "fe0ff686a938b8df582cbf7e346afaaad833a535f56e6e7b5f2537cfc98c8742445102ab8a6f786d9258a4dfb247057ebfd42445ecb58301c64558bc7cc8aaf2f9d3917b006f8ae328043b86d6d3f4bda020527e8ae877b43de264b1c95a688312be1f46b1e08a49ee8e2c65353b394dc2c54374cb13dc35768d5fe164e88b9f060000",
    ],
    [
      "ETag",
      "fV2rUopt8vESV31ksVqbpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1588956132723"
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
      "4d",
      "51",
      "df",
      "6f",
      "82",
      "30",
      "10",
      "7e",
      "e7",
      "af20ddeb4844e2a64b7c189b7126c44cd4a7c5980a07e20ac7dab2e90cffbb6d01f585f6fb71bdbb8fb365dbe43b2b62f262935d96fe54c04f0f29c885be84202a26853a4a2c049047ed064953ed5ecf8eabe3e81ff753e6bdb32a58fadebcb7188f1b9788f69053e53b2ba47092018b85c25f06db2d6fb482e6a05fdc6eb969685e6835792a8d369baf26d349782fe5181b69be0e82573f989056aacdb951dfda8c72c05d0809702822b80d54723c402467667341f3928123b0e21188b6892e6ce4946355528ee828ca71ddbee30e86c3d1e0c9f5facf7daff3338ca8ccb030e92cc975008992b210fff4fac46df2e10d6cd2e8b220c95d40f71129e95717f7c895aadbdbc6ead0e6d6cc3f49109f1cd53202e2a6b2cbe20df5ae5247217905868ea8fa5d1f996c39abb62e6caf96ae19020000",
    ],
    [
      "ETag",
      "UIxTx9zohGl3DluLSB3N0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "dd",
      "72",
      "43",
      "40",
      "18",
      "00",
      "d0",
      "77",
      "d9ebc8d81545ef98d088df4628bd311bbe604c2c564c369dbe7b333d6f707e10ad2ae0bc5c580f037a478212635b6d3da65ba2a919fde0bc6091de63ef8449ac61dbcf3b76232e9fe5494f26b9e3bd29e41389fc04eaf381f837f9123af35304d965c162976903dd6b7e456bfb7aef2270e3af9dd306fcf3ee5ca5a488cac11c55dd539beee8e4ae3c8cbe3436d5a1607b3b4b8ffd8ad73750bdec4c037391520b8a1170b378123126a5a07da8e671e836d5b326cad086ada225e96ac8fef723451b048fb19b8197dd6ba6a886b141ffcd721123bcae16d01966f4fb0712fc0cc005010000",
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
      "Fri, 08 May 2020 16:44:11 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-113-1588956132723",
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
      "6e",
      "a3",
      "30",
      "10",
      "7d",
      "cf5720f6b5b910722195a26d94d01629212d21bd68b542c618ea96608a4ddaaacabfaf6d48029b6ab76f3073ce9933e3b13f1b8aa2bee02450cf15d5c7d16b8eb28f1fcfc457cf4406311089ccf5dbf6eafef6c17d303496f5df5f8387eecde3ed785ca0b06453b04963d4a424cf20a2e7eb552bca489e828c9026176c6a9aded4fa8631ea0f34bd3becea0599a2389ce3e445483c3196d2f3767b6fa4151112c508a498b620d91ce2ed6db79d66e4194146dbf5ba6d5e8ab6ff53f9674c20609824e3f5aa70915394796803702c7c1ce9817f51d76f61b069451cbdc5100108499e30e1ad90812409719467529c2b7df2200f4bd387df4a405d997373ea2a90c4f926f112b041674a0018f0d8478a944b67b9502cfb72e92c26aeb5b4bdd5f4da5c4c5ad3e57cbdb057cafdb5e9980a037e8c2457192b17f2cfe63fd291ac1620ca70223db9225b71c2b3e520ad2f0ef1202144b82b8a4a9837ec0c806674467ee80f6168e87d3fec20df37fc611fe87e078e7aa817f8085415a4b3820f1292f446a37e6730d2bd4e0f185eaf07469e01b4d01b1afa70e043a30b03a096ecdda1179821c0d00cd394505c4e599d3ae6c4353debd2b34d7366ce8eadbf65f8047def581cec3a6b7bca59d53185208fd9ac68b43ea45af78ccfb3dad8bf2678d2409a61c24dc9d3b76cd7742653d7baabd8e0ab384711801fab57b18c2188293ab241c68f96a16c4102718eaa3d5954fb958b75b307518ef875f0796c8703c5bac85e4ed6a55ec7e57b581b45719445545db98e655fa995e4ee6b993b",
      "10e75fe86ccbb09af2693df109d39a56e3efafdf8d4a0d95dfedd29e7abb369d47c19539917150883294c063d56f6cba2016e9efbc5d1cbf7f480485bf25070394f130bf75901ecbcbd515771017a32f05bb7d4deb0df7829c98b15384ded5f68893c744d4421b94b0fd308a47a598e4ae6629afd8913401e717c12e4f71d7d835fe00480d6f0f13060000",
    ],
    [
      "ETag",
      "HwvGWQXTX81tr5xqdX2PYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1588956132723"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5545d4fc230147ddfaf20f51512c6b7263c0c445d8288304c8c21a46e7730dd7667db6108e1bfdb7643f6a25922892f6bef3de7f6acb73ddd1b950a790f628f5c55c86bb0fe4881ed2ed6201ed564063c0d05974382310752556c1074add8cde9ad3d7c7fc6796332e25bc1d8f5533bb6fafd8cc5dd0d4454f2f63292b11f40e87119bfe8b892e73516d308d48a2e866914af74583dc162976878eeccecc96d1189d0d3c864311e5b83f188e4d0a1fab38847055de925ff26a1c7a5918b91377c9d810f0c62174ebb4e18be812b6cdd5e4ea324841ac794b9c073115598c16b86694219624da66aa6d9ac99ed5eefb2dd319b8d6ea379e487e8521160ac4a1673f2fd0302050d67f8a97a4c3ad921b02ccc5a7eec05f10ba7506c9184b6aa38f0c877ee50fd85684f9c4eabc0cd674ba350595a55b6ca0f4258fd93ba3c930d9557bc9c767e4fce244e234c635152fa66fc609d71e3d20e65377d6d39a373c97221cd5052d7b1ef4773c7ba9ffe282ebfcb9309063b017cca509a8c83b696596ff5dadd4e9d1cad3a446545a19c2a580a3aed52f964dd0542e67c1a72300ec617791e32e91e050000",
    ],
    [
      "ETag",
      "3PGICkYoS2NEsvtrrDV5nA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ?",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1588956132723",
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
      "ad",
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "107df75720fad24ab10d066c1cc94a539bb4488e9d629ca86a2b7b5906b209b08405b751e47fef2ef88265b78daabec1cc9933672e3b2f0d49921f49e2cbe792ec91f0a980ecf9cd03f5e433e1811c85c2f3f8933cf9aa33f2e3f9d8f860133365ab713818542852463314a71134192d320cec7c3e6b85192d529451dae4844d55d59baa619a7da3ab6a9d5e47ab821944c198248f82e23ecf5376de6e6f85b4424ac308504a580bd378676faf3aed34a30f8073d63eccdbe6a958fb2f992f228a514e683298cf2a1505836c01312291d0b10ff7bdf787fc2d82e256c8d12b8201614c8b2417da2a1a4c93808445569273a6176ee4e652f4eeb7669067d6d81abad2703a9fb86f97281674cb771262d26291012ba25cba72a6d7d232e5d9ef1103b694ee3e598ec52d190d48040be22fa58174215d4e46d21eb794be158aa261e9a2545666f581e52429b5b9c88ba0a6887b370db54f0c7347214850cee937b0454fe922d554fa5ee0f570606a861728e079a6d73390e629b8af83ee7b80ea0cb9c85dc5a384265d8c0d2550fb1dc081074ac75770d0f34dadd355b0ae635303e033eb05f28661bdab076780721811965246361d97878e75e95a0bfb6a31b1ac9135da97ff232347e83bc7e660d7994f863caadeaa00f1e68faa620f1b75d0819cf7b45edc9fba7854409a11ca45959b604f5ccbb91cbaf66d4d065fcb3184083fcf9ec462062862b08f46198a2187ec9afa6296f2cd7466bbf6747239de33949b76b345320efbba13bbafa9cee63ea7879b510dadb20a995d5daef9d66727596e51549ca0596dccb27ac0d138c1f62fea66ae634f3efe077928e583fb",
      "8dc4cdd7f7468d5fe67766234dfe3cb79c2f22b6f4098f03016490e07dc657bc361158b95f7347397e7bd44408bf6b3b012ce766fef231dba72f9f8eb80324aec65111760c4d33ba5b421e98e5c7085dd7b788a3c32672410c49be6d4675e0aa4eae0f24153539659880f38738d94c70dd58377e010afd96ca9f060000",
    ],
    [
      "ETag",
      "kxiqd1RDdmUL5BIi8psvLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1588956132723"
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
      "4d514d4fc24010bdf75734ebd5261604c18483908a248852e56408d9b6435d6c3b753f3040fadfddddb6c0a5bbefbd999d79af27c775c90f2b12f2e89288a5bf0af8e12605b934971084caa4d047898500726baa41d2d4544fd5f3be73643c7c1b1e8fea35e0fb098bd2d1a8ae12f137e454d79d34d278cb204b84c65f16bb0d6fb582e6605edc6cb81d685f68347928ad365b7c06d320bc96724cacb458cde74fe379401aa9b2e75a7f2bbbca0ea310b6c0a188e1b250c97107b19c59e782e665069e40c56310cd10d358cb294755528ee869caf3fd7bcfef0d06c35edfef761e3addb63ec3984a868569597d90f3021225cd42fc33f6895fe7c36b58a7d16641b657015d47a4a5bd69ee93335535b7b5d3a2f565d8f82041bc73d46604580b77a4cd6282c6ab345148aec0d231d5bfeb85c986732ae71f9beb66ef19020000",
    ],
    [
      "ETag",
      "GuFv2zirRO9zzuMErvCibg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfdb6e82300000d07fe9b318c62581bd41c0a9e5a2c802f242b0546eae94968bd4ecdf6776fee0bc408110e63c1ffb0e13f009d64231b7680b7bc35e2b14cf44ebce5609c9ea2e082a6e24ca1a431ef631a5a93f59e172647b61bbd7c3b34c636a0c92d44f4e766f0871eb930291737a088f39617759e46b0bb3d9a7e3a0657024de61367e6a16d31a176d1096bc69857c4c9afdaebae451c2f46fa1de12644ed41a03be93e62252d560f2537f30ed68c98475a61f9ebdb6b65ade102ff5afc750695896ee95db1802810dc04fda30ccf3e63d5375d3dc80ff663eae14bfaf362e1866e0f70f3fb38f3e05010000",
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
      "Fri, 08 May 2020 16:44:13 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-115-1588956132723",
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
      "00000002ff8d545d6f9b30147dcfaf40ecb5f9208486548ad628a12b5a423620eda66942c631c41dc1149b565d95ff3edb10024bb5f50dee3de7dc73afaffdda5114f5174eb7ea95a286387e2c50fef2e18184ea85c820066291f11f57cfbf0dfdf3e4dbad55643b7c37f492dd6c3a2d5158b229d86709ea5252e410d1ab8dd78b7352642027a4cb05bb9a667435c33427c6a5a60fc743bd245394444b9cfe12123bc6327ad5ef1f8df46242e204810cd31e24fb3ade7f1af6b39c3c20c868bf5db7cf4bd1fe7f2a7f4c08040c9374baf14a1705457980f60027c2c789be0dafdbfa3d0cf6bd98a39f3044004252a44c782b652049231c17b914e74aaf3cc8c3d274fddb08a89eb5b4e6be024952ecd320057b74a16c0103017bc99072e3ae578aeddcacddd5ccb7d74ee0cd6fadd5ac375f2f372bc753ee6f2dd75218081324b9ca54b9967f0eff918e64b52da20ca7d2932fb20d273c5b0dd27ee3106b0921c25d5154c182f1e01268e6601246e11846a66e84d10085a1198e0da087033819a1d13644a0a9209d957c9092d4884c2d9a44e340372f41300aa36d00a2310cc6104ce06038314360a815fb50f7027304185a609a118aab29ab73d79af95660df048e652dacc5a9f5e71c9fa1ef5d9b837d77e3cc39ab39a60814095b948db687d4ea9ef179361bfbd704cf1ac8724cb82979fab6e35bee6ceedb770d1b7c15972806f0c57b14cb188184a2131be4fc6819ca57642bce517566ab66bf72b1be1c4194237ed43e4fed70a05817d9cbd9bab4ebf87c0f5ba3288fb28caa9eefdace27b5913cbc2d730792e20d9da72aac667c5a3b3e61dad2eafcfdf5b3d3a8a1f2bb5dd953bf6e2cf7bbe0ca9cc8b82842394ae1a9ea3b365d10cbf47bde2e8e3f3e2482c2df92da00653ccc6f1da4a7f27275c51dc4e5e82bc1a1a19b662dc889393b438c068676449c3d26a216daa3941d87513e2ae5240f2d4b45c38ea40938bf084e758a87cea1f30716a1100713060000",
    ],
    [
      "ETag",
      "TqMwz53K9XHEuphiV2SlhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1588956132723"
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
      "000002ffc5545d4fc230147ddfaf20f55148181f134d7c0045c5e004367dc01052b63b186ceb6c3b0821fc77db6ec05e304b24f165edbde7dc9ef5b6a73bad54422b3f72d15d09cdfcf97702747b35073e949311b024e04c0c318918a0b26403c773c94e1a63d36a5c5bfad85898afebcfd506fcc5f0fe3e653167012116bc9d8844ecf910b84cc45f2a2e657985453804b9a24382248ca62a2c9f60be8d156cd9a39ef99c4742e22ac4fce8f7db9d7e1765d0be7c5ec4c51c4fd5927f9350e344cbc4d092cc46e00185c881d3ae634a96e0f09e6a2fc3611c408591843ac032115998c2734a921853422a2255d1f566456fb65ab74d43afd76e6af5033f200ee63e8964c987858e3fc009c7c1886c648f91911e024dc3b4e5875e202f770af91609682d8b7d171d73fbf22fc49e691b8d1c379b4db45c656155d12acf0f60fa4feae24c16585cf162dad93db990380e4912f182d24ffdf7f605372eec5074d38f6dbb7b2959c685190aeadabdb7ae65b7df0667c5c57772324167cb810d28112663a0aca5571bade68d514507ab3e1069452e9dca69022aed60f164bdf85ce43c1c30d0f6da0ff9fb4c731e050000",
    ],
    [
      "ETag",
      "u4ZNS4+S1Z6hNJvVkweihQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` < ?",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1588956132723",
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
      "00000002ffa554db6eda40107de72b2cf7a55503d80673898452044e628998144cd2aaad60773d7636315ec76b534511ffde5d9b8b11b48dda377be69c33676677e7b5a228ea138d3cf55c51310d9e33485ede3d32ac9ec90ca42890998fceaabdfa728d75efea99dd813ebbb107cda0d72b50346773b48c43a872962504f8f96c5a0b1296c52861ac2a04abbadeaaea66a7d3355b7ac3681b8d82cc21f447347a92120f691af3f37a7d6ba4163016848062ca6b842d77f1facaa8c7097b0492f2fa61ddba28c5eb7fa97c11328252caa2de6c5ab8c838247358221a4a1f7bba873f1dead7285ad602815e510288109645a9f456c81016f934c8925c5c28bd8aa008e7a677bfa5803ab546d6c05506e399e3be5fa0a5945b7c501057e6f3047816a6cae5647ca32c6251fd0171e00be5feda9a582292309f8630a7de42e929174adf192acac243292c94ef99a635887291bbca2b7ac0531ae5be5c844328b911d9cd30ed1307b993902228151636b0795b6b21bda375b18fdbc4ef344cec6b807107b74dd4c01ae936a1e96140658554d62ef8286211365a2d309b1a74fd3660d4e91818705bc384745a9880a7b7c16c60df57370aeb5d3f2401d1e990f29871ba99b63a98587dd79adb9773c7b286d670dffecf841ea1ef27b600bb93993310acf2a87c24063f2c9a3d1cd4c1045231d372737f9ae251037142993095df02db71ad497fe0da77251be24a8e2040e465fa2c2fa58f420e7b364ad01252486e9827cf52bd1d4f6dd71e3bfdd15e21bf65b75b2417b06f3bb3fb9eca6aee4b7c78338a432ba2d266aba99672ebb3932a7728cc4ec8ac3661553fd0a89c50fb1777437988ff6fced00cadaa196261fcc6e5e6eb47a55444156b66e34efd3cb3265f2537cfc9cc047c482022fbb26f78709258a4dfb246057ebbd32445acb59d019e8ab078fc84efcbe7af47ae02ba2c4ea410344cb365ea5b41414cd2638478f15bc4d15e93b5600951ba1d46b1df8a49ae0f2c65253b394dc2c55b746ce72a375f59577e01013b9ba99e",
      "060000",
    ],
    [
      "ETag",
      "+Nv7vXHb1dGqoVe1UMIC4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1588956132723"
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
      "00000002ff4d51d16e8240107ce72bc8f5b52445a3d5263ed4c6b6a6465b2c699ac69813564481a5774bd518febd7707a82fdccdcceeedce70b26c9bede22c640f365bc5d16f01e27813017de88b07b24848aa23c74c02bbd5d5403cd2d5ddf0fb6b333ff4c7183def3ab315cdfcb7743f18545532d840ca55dd492185d73124a154f8c760bbe68d96f114f48bcba53003cd0bb546c7dc68e3e9e7e865e45d4b2986469afa93c9e3703262b5549a73a1bea559658b2b0fd620200be0b2502e700b018d8d73c9d33c014762210290f510dd58c991c022e702d15194e3ba5dc7edf47afd4ed76db7ee5beda63ec180538c996ef1e7ecbc0021f1c4c3bdb6cfdc2a1f51c12a8d260bb6be0ae83a2225fde9e6363b53657d5b580d5a5c860d8f04f25da03223c158b8634d164fa8bd928e824401860eb8fa5daf31d59c555aff2ea8e08819020000",
    ],
    [
      "ETag",
      "6dYWhSx9IogFk5ObtOUKmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "646d1d62444977cd8028dfda168a6c180229ca9f042aa1d3bbd7e9bbc1fb016996312192b1ab580b9e814c37789daded4e23b2c8d17d1f919c91006df2fa25d7428ae59057aa0e4b951b843f3550c94a352887ce760b992977e192778bd325b8d4d6393c6e7d3aed3f7713cb6be9204399eca19048b5b1311c2eb5f1e598d018a352c6156c85574973f69b9db5d5bbbe3d793e2ccb2bf6aed3ac93d80a9741c389e83fa01b56947f173449df94d039bf52ff68d24936c172e891caa2d8cfe849801560737fe34c24b7c70ca918afc07f331965cf1e57c252ce38f8fd03045a200005010000",
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
      "Fri, 08 May 2020 16:44:16 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-117-1588956132723",
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
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "57",
      "20fa1adbf8822f91acc6b57163c9c609e0445155a16519c8269825ec92348afcefdd056c431db57d839973ce9c999ddd8f86a2a8cf24f6d54b45f548f89241fafee5897aea85cc0047a1cce84fde78f58d05e4976fdc6a8bb71bdbf11fa693498122399ba15d124193d12cc5c02eb7762b4c6996a094d2a6106c763ac366471f8dc6faa0d3eb0ebbbd82cc200a56247e96128f9c27ecb2dd3e186985948611a084b016a6bb63bcfdda6d27297d02cc59bb5eb72d4ab1f63f2a7f8d28469cd078b2b50b171983d4851d2291f471a2fbde555dbf45d0ae150af42bc18030a659cca5b74206d338206196e6e242e943044538377dfcad0454db58193347c134ca76b11ba31d5c283ee2c8e5ef09280b6bb35696e66263ada7ce7263baf6ecda584f5bb3cd6abb366de5fedab00c85232f829cab4c94abfccf143fb9a3bc9a0f8c9338f7e4c86cc589c896835c7e7288470929225c312861ee501ba0ce481b7b8137c4c1a8a77b81069e37f2863aea791a1ef7a1ef7b80aa0ab9b3828f621ae38e86465da4b9bd01686e3f400377147435770ce0233408f4a0a7ab257b7fec05a78038cc094b2823e594d599654c1dc35d2e5cd330e6c6fcd4fa5b4aced0f7d652801d6b6bce04ab3aa60065119f178dd68754eb9e8b79561bfbdb04cf1a48524285a9fcf497a66358d399b3bcabd810abb88210e177fb452e6380220627364ac5d17248d7d497e7a89ad375b5df7cb16e0e2026103f8e3e4fed08a05c97bc97b375a9d771c4",
      "1ed646511c6511556dc75a9adfd54a72ffb9cc1d8ab24f745ecbb09a88693d8a09b39a56e3cfaf9f8d4a0d55dcedd29e7abb35ac07c9cd733263410029c4f854f53f365d128bf4ffbc5d027f78482445bc2547038c8bb0b875989dcae7ab2bef2029465f0a76f541bfab1f040531e5e708bd373e20ce1e13590b7610f3c3308a47a598e4be6629abd8c969122e2e82599ee2beb16ffc064dd2a64813060000",
    ],
    [
      "ETag",
      "5jb9LBsfixdEQ0FwPSTdYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1588956132723"
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "af58ea2b248e6f4d78980842445418f86008a9dbdd1876eb6c3b0931fc77db6ec05e344b24f165edbde7dc9ef5b6a75f8669a2f730f6d0b589dec2e02305b6bb08403cabc914784a04974342630ea8a2d82070a0d82ff626f187bd9db35d2cbcf9e49ddc0f6ee3a0dbcd58dc5d438425ef4b4632f643201e97f1ab8ecd3cafb11847a056742949a378a5c3ca0916bb44c333673a9adc1591887a1a99ccc763fb66dc4739b4affc2ce26181577ac9bf49e87169e4626843dfa6e00383d885d3ae134637e08a916e2fc75142a0ca69ca5ce0b9882acce080d134c18cd2aa4c552dab5db59a9dce55b365d56bed5afdc027d4c522a4b12a99cfd0f1070415984ce956f518b5b243605998b5fcd00be4174ea1d822097daae2d043c7dcbef20b7134715a8d02379f2d8d42656955d92a3f24b0fa277579266b2caf7839edfc9e9c491c47348d4549e9c1f8d13ee3c6a51dca6efad676fae792e5429aa1a4ae337ae8cf1cfbe1e94771f95d9e4c70b313c09f189526e3a0ad655d363acd76eb121dacdaa3ca8a423955b01474dac5f2c91a8642e67c4c38187be31b04928ceb1e050000",
    ],
    [
      "ETag",
      "WAjpfHCyTwVVdUNklKFDng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` < ?",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1588956132723",
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
      "ad",
      "94",
      "5b",
      "6f",
      "da",
      "30",
      "14",
      "c7",
      "dff91451f6b2490392002120a18e41da6582404368b59bc0711cea36c4a9ed74aaaa7ef7d9099744745b35ed2d3997fff99d63fb3cd51445bdc349a8f61535c09bfb0cd1c737b72450df4b0fe260233d3d3472037e433bb793f35be3e38537ff7cb7b81c0c8a289c6733b04d63546724a310b1fe72d1d85092a58012521782755db7ea7ac7b27a1d536f195da35524331447139cdc49891bce53d66f36f7208d0d219b188114b30624db83bdf96034534a6e11e4ac59addb14a558f32f95cf620201c724192c170545c6105da12dc0b1e438a687c187aa7e03836d6323a21f3044004292255cb21532902411de643417174a4fc228cc39f4e1b7645017f6c41ef9ca68b674fdb76bb09572eb770a60ca6a4511cb62ae9c7bb3a9b24e45f51bc0105b2bd79f6ccf16164a221ca3150ed7ca40395386ee5851d68c0bdcb5f23dd3b41654ce72acbc648818c7490ee6832046251ce1dd4dd379e1240f12520470c1b00b5b753513e896d60ba2a00b23abd509220d058115743ba01568b0d746ed3040a0acc065ed221f2424318d96d533f5b6156ad00206b42c1db451000dd3d2cdd0841a3042cd0cdbea4ee1f9d00fa4087034c62c250cefc6ad8e3c7be8db2be77ce5daf6d81e1fdbff49f149f4b5e78860df5bba2391551e5504c4e4c745b3d5415526c0c54ccbcdfd698a270da4141301955f03c7f56d6f38f29dab1286b89313b401f071712f6f650462868ed980822de2884e4928cf529dcf168eefccdce1e4a8905fb3f93e9289b06f07d8634f6535ff31adde8ce2d00aabc4340f4751e9a6aa7205e2ec",
      "0599879d59d52b1ab517d4fe85ce77a6f6c21f4ee7ff81d0d00cadae19626df8bad1d75b7dbdddd034edeb6fc0775f3f6aa592aa583d3b60f572697b5f646eee931e0f4588a2041e215ef1066562e17ecd6a15f1fb3d2753c4aa3b00882dc1b1d807901dcbe70f4a6e07bc2d0ea910343a5da3ddde0b8a44ca4f235abd43c9935d276ba12d4af87e18c5ce2b26f95c41ca4a38799a0c17cfd375dc8b1cbef65cfb05bd5c5fefb2060000",
    ],
    [
      "ETag",
      "9eCNbthr5jLFj2BGRPJkSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1588956132723"
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
      "02ff4d51c14e834010bdf315643d2a8914abad490fd634b58610a5b617d3345b98221518dc1d34a4e1dfdd5da0ed85ddf7decccebcc7d1b26df69d16317bb4d92e4d7e2a10f55502f4ae2f21c82a23a98e120b09ec465703f1445717af78bdf4eeb0266fb51eafe7818f71f03e99b45532fa829cabbaa3420aef53c862a9f0a7c176c71bade039e817b75b61069a173a8dead2688be063369f8597528eb1918295ef3f4dfd19eba4c69c1bf56dcc2a07dc85b007014504e7854a81078868619c4b9e971938122b1181ec86e8c6564e04562517888ea21cd71d39ee70341a0fef5d6ff030f0fafa0c234e2916ba65b564a70508896721fe69fbcc6df3112d6cd3e8b360fb8b802e2352d2af6ef6d8896abadbc6ead1e63c6c5a13c83781ca8c0463e196f5593ca3f64a3a0a1215183ae2ea77bda4d4715663fd0347a1559c19020000",
    ],
    [
      "ETag",
      "nJo+S34oyt3UV9VGNLodNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfdb7243400000d07fd9e7c844d0d0b72831eea688f0b283ae5be252bb7457a6ffde4ccf1f9c27c8cb12610cc978470378072c3f2afb726f8fb2caea2f738c351372596730136fc52a463a7ac41c27d54df29d40811fb64666c2792efa89e6b58e74e56250394b36d5428eb3847054a756bcacaa33b0760c229c8b7d746d3ce5eea6d65c7a9590b58194b907da9d0ff064af954066cf7f90a90a3ffdae8b0db508712461fd4a2c7b718f16a44bfb83b6db1adc3e68a7095ecdf3a79ef45a9d34298d4814bc057eba782ed80144a7764618b6af992029ca0efc372161137a5d5594cf6806bf7fc7f9eefc05010000",
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
      "Fri, 08 May 2020 16:44:17 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-119-1588956132723",
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
      "02ff8d545d6f9b30147dcfaf40ecb549c8d70295a2354be94a97900d48ab759a90ed18ea96608a4dabaeca7f9f6d48024bb5f50dee3de7dc73afaffddad234fd81a46bfd54d321891f0b9cbf7cb8a7503f9119cc412c330cdd2eaf026880dbdfcf575797d79fddd5573f9e4c4a14516c06365982db8c1639c2ec74e577e29c1619c8296d0bc176af67b57b23d3b4461f7b83feb83f28c90c27d19ca40f52e28ef38c9d76bb3b239d98d238c12023ac83e8661fef3ef5bb594eef31e2acdbacdb15a558f73f953f2514014e683a59f9a58b82e13cc41b4012e9e3405fc3b3a67e87804d2716e82782304088162997de4a1944d388c445aec485d2ab088ab032bdffad0574df9edbb340433429366998820d3ed1d6808390bf6458bbf0960bcd712f96de621a384b37f46797f662da992de7ab85eb6b3797b6676b1cc0042bae36d1ced49f2b7e9423556d8d1927a9f214c86ccd89c8568374de38c4bd841411ae18ae60e1d8f8087aa661c1088e51640e4630323084261c8fc0001ac81ae2e11a62505750ce4a3e48693a42a631c4e6204406ea87c3211c8456df02611fe0f5c8803d604663bd626ff7bda01c038ecf09cb2823d594f599674f033b742e42d7b6cfedf343ebcf393942df788e0007deca9d09567d4c1128127e5e36da1c52a37b2ee6596fec5f133c6a20cb0915a6d4e93b6e607bd359e05cd76c88559ce318a017ff512e630412860f6c908ba3e5385fd0b53c47dd9d2eeafdaac5fab6033181f8b9f779684700e5baa85e8ed6a55927107bd8184579946554f703cf71bfe8b5e4f66d996b90146fe83c55613d13d3ba1313660dadd6df5fbf5ab51abab8db953dfdfbcaf67e48aecac98c87239ce3141daabe63d325b14cbfe7ed12f8dd432229e22dd91b605c84c5ad43ec505eadaebc83a41c7d25d81f8d2dcbd8090a62ce8f10e2a68d7788a3c744d6c21b9cf2dd30ca47a59ce4b661a9a8d95134091717c1ad4e",
      "71dbdab6fe0093fdcad413060000",
    ],
    [
      "ETag",
      "scZOJTb0aZzwJJHVBNUKSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1588956132723"
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
      "02ffc5545d6f8230147de75798ee5593e107ea121fc0a93373ce29ee618b31152eca0694b565c618fffbda82ca8b0bc94cf6427bef39b787def674af954ae8d38f5c7457422b7ffd9500ddddac81bfc8c914581270268698440c5059b281e3b5645bd6b6fbf858c5c620d90cdeccd766bfd66c6d3b9d94c59c0d8458f0f62212b1e743e03211bfabb894e51516e110e48a0e0992305aaab07c86f92e56f0cc9e0ec7833c12125721e3f968645aa31ecaa043f9b2888b395eaa25ff26a1c6859689a10fb29a8207142207cebb8e29f900870f557b190ee3002a8c24d4019689c8c2145e5392c498125211a98aaeb72b7aa3d56a370cbd566d566b477e401ccc7d12c992f90c9d7e80138e8329d9ca1e23233d049a8669cb8fbd405eee14f22d12d0b72cf65d74ca1dcabf108763dba8e7b8d96ca1e52a0bab8a56797e00cb7f521767b2c1e28a17d3ceeec995c4714892881794ee8f9ecd2b6e5cd8a1e8a6ef4dbb772d59c685190aeadac3a7decc369f2617c5c577713681b5e3c0269408933150d6d26febad46d3b84547ab7689b422974ee534019576b078b21e7c2e721e0e186807ed0791bd8e7d1e050000",
    ],
    [
      "ETag",
      "BBwCKK2a6GuhGZAV7F378w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` < ?",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1588956132723",
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
      "ad",
      "54",
      "6b",
      "6fda3014fdceaf88b22f9b5420e40554aa3a04e9160d421742abee21b01d277597c4699c30a18aff3e3be11104dbaa699f08f79e73eeb9d7f67d694892fc8324be7c29c99084cf05ced66f9e28942f4406e72014198456ae3731bea40f6317ac1f3f4d268c8e065757158a946c06e234c24d468b0c6176399fb5c28c1629c8286d72c16647559a1da3d7eb1b664753bbaa5691198e8231497e0889c73c4fd965bbbd33d20a290d230c52c25a88c6fb787ba5b6d38c3e6194b3f671dd362fc5da7fa97c1d5104724293abf9ac7251309c2d700c48247c1ce83e7c7facdf22206e851cbd220803846891e4c25b2583681290b0c84a71aef4c2833c5c9adeffad05e49935b6869e349cce1defed12c4426ef94e024c5a2c32cc8a28976edce9445aa6bcfa2360982da5fb8f966bf148460312e105f197d295742d0d9c9124ed24a46f85a26848ba2e7d95357dcc729294ce3c00235cf3c3b3db71da678e722f214440ce4d6c618bae62824e4fe9c3007651d0d30c182818c21eec1a40830aeaeb58f7210675855cd4aef820a189aec38ed905c8f475156b810e4d1f2a7a07a91a8481ce154c43d34d5f93b70a9b7d3f28c320c723c252cac876def2d0b5069eb5b06f168e658dacd1a1fd9f193941dfbb36077beedc1972567d5401e0a31f55cd1e0fea6802399f69bdb93f4df1a4813423949b2aef81ed78963b187af65dcd06bf94631c02b49e3d8b6b198088e1031b6420c639ce26d4176729df4e67b6674f9dc1f8a050deb3db1d9271d8d7bdd9434f75356f9d1edf8cead0aaa8b069ea722db7b938ab7207a2e28ccc6a1b963b471a8d336affe2ee663c1dfc277f2d43ff8dc5edd7f7464d5ee65b666b4dfe3cb7dc07c12d7322e3e2006738418782af786d8258a55fb34539",
      "7eb7d204856fb5bd0196f3307ff9881dca974f47ec011257ed56822aff518d9d202766f929a26fec11276b4dd4c2314ef2dd30aaf5564d727364a9a8d9296902ce1fa2633b1f4af38d4de3170af31d569d060000",
    ],
    [
      "ETag",
      "ccvRTM5ZpYLRayhKMMsoDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1588956132723"
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
      "0002ff4d515d6f8230147de75790ee752482f3634b7cd0c5288b331b1bd9c3624cad57862b5c6ccb1663f8efb605d417da73cebdbdf71c4e8eeb92df34df9227976cd2e4508238de25a0decd2502597225f551602e81dc9b6a503431d55ff3597ff6ca1f5e4276602cdccc0771c4c7a3515d25d90f6454d79d34d2789702df4a8dbf2d761bde6a39cdc0bcb85e0b3bd0bed068ea58582d5c7e4e67d3e856ca706ba565bc588c278b2969a4ca9e2bfdadec2a7bdc44b003013983eb4285c03d30155ae7926605074f622918c8668869ace54460595081e869caf3838ee7f786c3c75edfef0683a0dbd6736454a5989b96f8835c1650a8288ff0dfd8277e9d8fa8619d469b05d9dd04741b9196fe4c73402e54d5dc564e8b56d76193a302f926509b91602d74489bc5331aafca44a14409966654ffae79aa1acea99c334840791c19020000",
    ],
    [
      "ETag",
      "WHG6GMl4JIcqccIbH7URlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:44:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
