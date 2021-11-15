const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475679452";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffedd34b7282300000d0bb64ad8c46c4d29d5268c2570545dc6430464105c2472438bd7b9d5ea3be3bbc27882965754d9ae2ca72f009440c55894a16ff58188fe4eac0a107916e8c573cb3f84e3c38eca848bc060e7b79a1f7eec131b20c1f4cadb5f41c235389a913a02f868ce159c96858c036ba47e9a872eeea4dacbbec98462142fd721b0b1c6cc3bd22acf3deae5b32b9fb05e7cbdcce0cb124fbf038c7686eb2f0241b9b75e85ef051ecce3e74a65a59963adfcc567a7115ad0b67a7d1772bf737454b7a6f9c44b15df801c30d81178a651240dfeda666545aba5c4b6f6fff171800d6f1b46235495fdb2753551d80bffaa4119cbdfe2f585cb10afcfc02518e769b19040000",
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
      "Tue, 09 Nov 2021 16:34:41 GMT",
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
      jobId: "grouparoo-job-1-1636475679452",
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
      "f7",
      "95be9bbea46a74258c4e6dbaa529af698a1ce726189238d84e1143fdefbb71280321c1a7d8bee7dc73ee234fe48ee71199909027f725c8c72fb722244704344df0359e45e797f6f5eefab2b8f9e6fe8d7ea4e955f6309d2282572c45b322858612a564a026db4d3391a22ca814a281891a9d4667d01bf487f66038eedb5da42948e325cfef907ca375a126add641ba990891a4400bae9a4c642fefad5db75548710b4cabd65bc5168aa8d6879a5f53c1a8e6229f6e37a85f2a90016494a7e8e03f310a8fdf666e729a351304ef3803ca9828735db9c2144ce4314f4a69b292c913312e5f1dc8c6593a73df62222db33cc86906475644350df46301d6a9b75e590bf774edad66fe62ed069bf999b39a35e7ebe576e56eac8b33c7732c4dc3140cd79a5ac7e6e6e205f523509ae746ddaf9e2be5e7fe2cde0fa522a0b4823a180cdb03da19b5c7611c0e593cead961dc86301c85439bf6c2361bf7a11f85409167440d8be622073a0e69d4a5c1d86651d0efd06e30ea47bd0090128fc76d3bea32b23f220f926b38e1aa108ad71d2217dec27702dfdbbaf399ef9812625aa6faa4365615f0daa3c60211f4414dfb2aca052a55ed5eb8bee3cde6fee2dca927bc8484b2c7cd3dce38a6a902445389cdd3205722c2861177b6724e106c26f6f3105464f2fb89543daf5cbc6af90bddc7015676b5f9928def2ddcefc6ce01714ed3d24076f58148604246e879ff0771b8a1750ef26beb7857a47ef220060939fb7c96083681cffeb3c3d62314f71e5594c63b2e0e53950693502f1037b51ed8a38eddee110396fa5d6cd0ee1f5a56e5a8324206b97e2ea8de",
      "7aacb3162bd50b0883387bd7b46aff0f30da86f173040000",
    ],
    [
      "ETag",
      "fAdVX5ZvZXphBNzdJllYmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475679452"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93616fd3301086ff8bf99a8aa54b5388b40f2d14a894b55b9b31a9688abcf812dc39be603b45a5ea7fe79c6d0531a4ec4b72777e4eb97bfde6c01ea4162c61f7b2fad182d9bfa9c05dfb6005b655ced2ab416d81050c1caf88dcfeda0c6fdf8ed53efcba8876b387cdf56638aa2e2e88b0c577a8394b0eac94a08465c9b703d3bc066a2b50b5b5cebb2c606edff8e23a5bcd179f29af51f87c7193a693693a63c7e0d428b8e379c7bfa2edee18b02ddeafa00403ba003f4b63700b859bfb352daf1b05038bad29c0b20eee0e2a836dc30de2802a837010c6e771341ec5e3f7d168489cc2823b899ad09b358dc71c3aae56f8939664e13911a68b69e1b27beea82e45b7880fe78b2c8ebaf9fe06785160ab5dde0b96d258f728de33f824c2bfa4e2af04e9a6a4ea832ad0024c1f259b9c0b61c0da5e126dce9be6844d97cbf4a52a5a1894a21fdcc91e40b9dd09f8942e27ff9396fcf547ab8f936cf682b08e5c7342b2f9e56c9d4d2eaf3c77f76484e9de81bd3248a6b2e0fd149e45ef46e3f8ecd1621fd0db8ebe9338d342c00a4e7fca17e958527265e1f81bae643c5c87030000",
    ],
    [
      "ETag",
      "jzZ2W/7ly1VN4vEkZQZ25g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        query: "SELECT COUNT (*) AS __count FROM `records` WHERE `stamp` > ?",
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
      jobId: "grouparoo-job-2-1636475679452",
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
      "6f",
      "9b",
      "30",
      "14",
      "ff2ac8fb67479310082189547551c636a41c6d4252758712db3c985bc0149b4e5d95efbe07343d54a94548587ebfe35ddc912b918564449888af4b286edf5d4a468e08681ae3edc4bac8fd2b7679bd093e39d368f62f8da2cdd9f1312244c55234cd13682959161cd468bd6ac7852c735a48d942a196d5eaf6ed7ecf75faeeb0e7584853904453915d21f98fd6b91a753a07eb762c659c00cd856a73993edc776eac4e5ec84be05a759e3b76d044755ef53c4924a75ac8ec78bd42ff5241b185948a0433782486ecf373e5b6a0693b46f08de040399765a6abac5082cb2c127159d4aa647447ea2c9f1cc8ca9b7a93c0982cd6f3c078fff183315e19db6dad617c5d2e66c6ae002e8b50ed8cf3efded233764aa3fbcef8559aa60dc609ba84a0b4c86a8f80b2042afdfb2ef82f5b5f11a8a60a9ae0d635fbb43b30872c622e8f06b6c32213181b30d7a13633f9b007bd9001459eaed46b16cd64d6630e1b5aa11d86b61301756d1a45a810f62dda0587320738b5dd3e25fb23f2b7101abe08954b259a5e90f3a51f78db60b99e4fc681579711d132d15f9ae4aa229ee6a9b14804bd52d7be8a0a894e5563fd79e02dc793c0df78cd2ca710537ebbbac66946345180685ad0143414331962d3c8e962e507fe623e9e22a31ed0e901a1c8e8e7dd2321b8cdeb2eebfa4b027fe6ad82f1ecb4cee100dad0a4ac5137cd817487aed932bbf806a639aadfb6699a3fc87eff1b89b8918d2e395b7bcb0bd25c2d21820232fef654115c07defaaf0e5b8e50dc7374c18dd2025788abca8317d0ac9248eba4efd9030b1f52830bfd22665bc343cf2a8d4a1152c8f47d41cd96639d8d59a91e4018c40d98fbf36f18fd0f1a7a881963040000",
    ],
    [
      "ETag",
      "C2YpIkbjqVT+5LfMzmffVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636475679452"
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
      "4f",
      "c2301486ffcbf19625800c84840bd14549089129f1c21052cad91c743db33dd3cc85ffeee9f0a61f6f9ff67dd216ce853dc20c0e45fe55a36b6e72e44d58a4e86bc35ea68aac47e801b2ca85fc4de2f7cdf46c8ccdddda148ff17479479bf95c08af3fb154306b212bd01c3dcc3e5ab0aa44b9b6df6baa2d0bc54d1582e5fa2d794a52094a3a8660bd5dadee17ab042ebb4b0f4e7448314387566378b1727442cdcb20eb5559198c3cd54ea3870eee0e724775a51c512449348c06e3dbf168128f27d3513c14ce90565c901574fb0ad2c2c4caa4f423aa3010c0754bb1cebaf13bc4fd20b4fb67170da37f7124bd1e4365ff5aff40418945955d8d3dd04afee2b9e0ebfef2078c1420b068010000",
    ],
    [
      "ETag",
      "zE5WQ9kllngrNliD59I8oQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-3-1636475679452",
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
      "0002ff85536b4fdb3014fd2b91f771f4014d9ba65235aa368c4a6dcad2940a4d53e43837c190c6c1766080fadf77e3500642824fb17dcfb9e7dc479ec92d2f12322231cfee2a908fdf6e444c8e08689ae16bff3b9bf1ad5d6eabbff6c07d7abaae2eaef8c3788c085eb314dd9539b494a8240335daacdb99145549a5102d4cd4eab58e07bd81edf4078e6bf74f90a6204f17bcb845f2b5d6a51a753a07e976264496032db96a33b17b7defdc9f744a296e8069d579afd84111d5f954f3472e18d55c14e3cd1af52b0532821de5393af84f4ce2d3f799db9ceeda1982ef3903ca98a80a5dbbc2144c1429cf2a69b292d133312edf1cc8da5b78d3d06222af764554d01d1c5909d534d28f255867c16a69cdfdb355b09c84f3951fada7e7de72d29eae169ba5bfb6b6e75ee0599ac63918ae35b64ecdcdc70bea27a0342f8c7a583fd7ca2ffd997f1c4a4d4069054d3072ba037a3cecba711a3b2c1df6fa71da85381ec64e9ff6e22e736db0931828f28ca861d1421414dc9edbedf6a3c110dcc84edd7ee42239b2619826f1710c038792fd1179905cc38cab5228de74886c8379e84561b0f1a793d03325a4b4caf5ac315617f0d6a3c60211f4494dfb3aca052ad5ed9efba1174ca6e1fcd26b26bc808cb2c7f51dce38a5b902445389cdd3209722c186117fb2f466083613bb38041519fd7e2675cf6b176f5afe4a0f7180b55d6dbe641d0673ffa7b173405cd2bc3290fbe64024302113f4bcff8338dcd02607f9b5f1822bd23c05908284827d3d4b049bc057ffd961eb118a7b8f2a4ae31d1787a95a83496816889b5a0fece189d3ed110396fa63ccb50f2dab73d4196107857e29a8d97aacb311abd42b0883387bdfb46aff0f68d1dadb73040000",
    ],
    [
      "ETag",
      "5+cDiW4pWux469zzhuPYiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636475679452"
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
      "8d93516fda3010c7bf8bfb1aa452206c91fa002b5b9112a0906a0f531599f892b9757ca9ed8010e2bbef9c766c6a2ba52fc9ddf977cadddfff1cd993d482456c2bcbe706cce1a20477e78335d846394baf1ab505163070bc24b2bf17faa74e84588dcbe7a7c1f62649f6d5fefa9a089bff868ab3e8c80a094a5816fd3a32cd2ba0b61c5553e9accd02e60eb52f6ed2f57cf183f20a85cf17f7713c99c633760ace8d823b9eb5fc27da1e4e017bc4ed1a0a30a073f0b3d4061f217773bfa6e555ada067b1313958d6c2ed4169b0a9b941ec51a537e8f5c341381c8fc2f1d7e1e88a388539771235a1f71b1a8f39745cad716fbd2403224c1bd3c245fbdc515d8a76111fce1769386ce7fb1fe0798e8d765927584863dd8b787fc15711de928a7f12a49b92aa0b2a410b305d94ac332e84016b3b49b419afeb33365d2ee3f7aa6861508a6e70273b00e57667e07bbc9c7c242df9eb9f56379374f68eb08e5c7346d27932dba49364e5b98757234c0f0eecca2099ca82f753ff72f865340e2f5f2cf60dbdede83b91330d042ce7f4a7dc4ac7a2822b0ba73fbe5905c987030000",
    ],
    [
      "ETag",
      "1wdnWnMddP7gqk3bDMMwmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT COUNT (*) AS __count FROM `records` WHERE `stamp` > ? AND  `id` > ? AND  `id` < ?",
        types: ["TIMESTAMP", "INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "1970-01-01T00:00:00.000Z" },
          },
          { parameterType: { type: "INT64" }, parameterValue: { value: 4 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: 7 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1636475679452",
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
      "a5",
      "54",
      "6b",
      "6f",
      "da",
      "30",
      "14",
      "fd2b91f7655b0b3825218054758ca65b34089484567b091cc7616e439cda4eabaee2bfef26813e54b5fd30c952a27bcf39f769dfa14b9ec5a88f22beba2a98bc7d772122b48f98262bb006fec9f47218e4dff6dab26dff353fef45f39bd3c34340f092a5c83a4f5943894252a6faf3a0b992a2c88914a201420dab6176da1dcbb13b4ecfb20f80a6589a8c787609e43f5ae7aadf6aed42375742ac524672ae9a54acefedadeb83562ec505a35ab59e466c4110d57a35e6512a28d15c6487f300e2178ac9055b139e42060fc438faf454b9c9c9bab902f035a78c502a8a4c975981041559c25785ac5451ff0e55593efa41813b7287a1319cccfdd078fff18331088cc5a2d2304e6693b1b1948c0a19aba571fed59db9c6526988be347e1518b79971640cfc63c358f2f86513358e20979829cdb32a939044292bb3d8f6ca7b3ea092403451ac762e1cdc216617f7a2247268d26ddb518259147523c726ed08d39ec5ac38620478ba54af582413599c587617da1b7728b5ad84f6c090f47072602726c1d88ced0eeb398e8336fbe84672cd8eb9ca85e275c7d0f9cc0bdd45389bfbc341e8566524a448f5719d5c59c4e33c351409a057eada945e2e2052d97ecf0fddd960187a676e3df1115b117a1b5cc1cc13922a066822c99a6926c72286a6a1e924f0426fe20f46c0a8c638dd2114eaffbc7b2084b779d5655d7d51e88ddd201c8ca7550e3bd019498b0a755dff20b3e7e00636e18418f7abd3c418ff409bcdfecbe25048c77a5dd8fa6f0518d2e63720e0eed464743a7767df516d9ab1844996d1b7370bc095e3ad1760771f010a3712a2c0ee6b0e6b4c5519834a56af335f578ddbb2bbededfba189d4cf7cb663eee6566a948a6ccd32bd2da8be8f65a72a57a1ee41e0",
      "842df43dff0b78ff0109000c800d050000",
    ],
    [
      "ETag",
      "SNFPkCSpK+3r35z1B+bUwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1636475679452"
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
      "4f",
      "c2",
      "30",
      "14",
      "86",
      "ff",
      "cbf15296088e1196702164510c129d929818424a773687dbce684f2548f8ef9c0e6ffaf1f669df273dc14fd96410c3b62cf60ecdf1a6407ef38b14adabd8cad45263117a80ac0a21f9ef16b7e1eae573e906e3e759b41fe5ede130990861f537d60ae213e425569985f8eb048daa51ae6d369a5cc342f1b1f5c17cf9913c26a90435653e58ae168b87e92281f3fadc831d6d53ccd160a3d1bfd81adaa1e6b997b5aa6e2b0c2c39a3d1420777078521d72a4314481284413fba8fc2d1301a8dc3e140b88ab4e2921a4157ef202d4cacaa940ea20a7d014cb714ebbc1b7f251e789ff53f3a3d32da5743526bd137de5ddb67e48d584cd938ec8156f2154f255ff7e70bd0a20efd67010000",
    ],
    [
      "ETag",
      "tz+eb4UMXNu29JC6q7fpww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "417282300000c0bfe46c9c290895de042482152d080817264022a85542682171faf73afd46dd3fec1de0b2249ce7fded4caee00d08ac18d372ba6ee7a633d49e82a3f4720efc97a223b51a698ddb7bde22f593424aa1879420abd9283383c39dc221b6d2b089394a7c55d8fa75dc5beb8fa8f0619ee00c9a7acd02b44ad97e41254ac7388ed9eac83394bea35b31568996af75d896cec0567922da8d7bf1a8757b951b590ef42c4ed7166ac1c1c9d4664b4e98615ab2d9b73528618d94ad5df5e36e3fa7aee7a9d15248b63d56cbf0d0d34e72177eda475dad0be76bfaf4f47f81092063db7484e7cd63bbaa19c604fcd5cf7bd192c77f93e08e74e0e717b9c6601519040000",
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
      "Tue, 09 Nov 2021 16:34:45 GMT",
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
      jobId: "grouparoo-job-5-1636475679452",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6fda3014fd2b91f7b80281122048684590766810b6105a4dd314d9ce4de636c4d4763aa18affbe1ba774ad2ab54fb17dcfb9e7dc8f3c923b51a6644c98c8ef2b50874fb79291330286e6f8caa3620e3d15c7716e7cef70f5f9dba137984e268810354bd3ddbe80969695e2a0c7db4d3b57b2da5325650b13b5bc5677703ee80fbdc1d0ef7b3da46928b2a528ef90fcc798bd1e773a27e9762e655e00dd0bdde672f7fcde79e875f64ade0237baf35ab18322baf3aee69742726a842c27db0dea571a54023b2a0a74f09f98b28bd799db82eeda39821f0407cab9ac4a53bbc2145c9699c82b65b392f123b12e5f1cc8265806b3d8e1b2a8766552d21d9c3929353431873d3897d17ae52cc2cb75b49ac68b75986c665f83d5b43d5b2fb7ab70e3dc7c0da2c031941560b9cec4b9b0b7102fa89f8236a2b4ea71fd5c2b3ff567f176283501a53534c164e80e6877e4fa2c63439e8dce3d96b9c0d8880d3d7ace5ceef7a19f32a0c8b3a296454b59fa2eed33c8dc24633e4dfaddd44f683703bcf6b374c07de6b929399e91bf4a18980bbd975a341d2237d1220e9238da86b3691cd812325a1566de18ab0b78e9d16081087aa7a6631d151295ea762fc23888a6b378711d34135e424ef961738f33ce68a101d15461f30ca8954cb161249cae823982edc4be9f829a8c7f3d92bae7b58b172d7fa6c738c0daaeb15fb289a3457865ed9c10d7b4a82ce4a13910055caa143d1f7f230e37b4c9417e6c83e827699e22c84041c93f9e25826de0a3ffecb4f508c5bd47156df08e8bc375adc115340b246cad27f6c81b8e06c4829579131b8ddc53cbea1c7546d841699e0a6ab61eeb6cc42afd0cc220ce3eb4ad3afe0316e408e273040000",
    ],
    [
      "ETag",
      "cRlDe2rTTTgt95yG+Ky26A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1636475679452"
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
      "8d93516fda3010c7bf8bf71a2458217491fa4056b6d2a540213c4d55e4da97d4c5c965b6434511dfbde7b463d33a297d49eecebf53eefefee7c0b6aa922c62f7aaf8d580d97f2ac0ddfa6005b6d1ced2abc6ca020b18385e1079390db7cdf3f9f566f9f463b0b4b18eb7fdebe2e282082b1ea0e42c3ab05c819696453f0face225509b40dd9455d6660173fbda17d7e96a36ff4e7989d2e7f34d924ce264ca8ec1a95172c7b396ff40dbdd31608f78bf821c0c5402fc2cb5c147106ee6d7b4bcac35f42c364680652ddc1e14069b9a1bc41e557aa3de203c0b87e35138fe321c7d264ea3e04e6145e8664de331878eeb153ed1926c70468469635a386f9f3baa2bd92ee2c3d93c0d87ed7c7f035c086c2a977582b932d6bd8af71b7c13e15f52f30f8274534a77410554124c17a5ea8c4b69c0da4e126dc6ebfa84c58b45f25e954a1a54b21bdca90e40bbdd09f8962c26ff9396fcf547abcb493a7d475847ae3921e9ec66ba4e27374bcfddbd1921de3bb04b83642a0bde4f83fef07c340efbaf16fb8ade76f49dc89906022638fd2957cab128e7dac2f10536e15c9887030000",
    ],
    [
      "ETag",
      "DE6kuz8JUPwK1PsBlBk0Jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        query: "SELECT COUNT (*) AS __count FROM `records`",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1636475679452",
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
      "5b",
      "4f",
      "db",
      "30",
      "14",
      "fe",
      "2b",
      "95",
      "f7",
      "b20b6d7ac9a5ad84b6aa0488545ad6a69bb697623b2799218953db017588ffbee3b4301012bc25fe6ee7764f6e449990316122dbd6a0761fae252347040ccdf075fb37bb1c9d5fb2587d494e4dc139ad7f9fdd1d1f23435895a64595435bcb5a71d0e3f5aa932959575449d946a3b6dfeef903df0d3c3f18b95e1f651af27426ca1b14ff31a6d263c7798cee64526639d04ae80e97c5d3bb73db772a25af811bedbc4c7430443b6f667ecd25a746c8f278bdc2fc5a83da4041458e15fc1726ecdb4be78ea0452743f2ade040399775696c5568c165998aac568d2b19df93a6ca671f6415cec269dc9a2ed6f3b8f5f1f3a7d664d5da6c1a8fd6e97271d1ba52c0a54af415da25a08d281bb398b21cacd1a1dde8f58cad801aaa610f6e82ae4f7bc3ee88a52ce0e970e0b1b40b8c0d59e0d101ebf2910b6ec280a2ce58f746454b5926ac170441e2813748933e8cdc2ef702b4f228a3bda09f70af3f62ace793872372a7848113a12ba9c5be69f27319c5e1265eaee7d3491c366da4b4cecdc9be38dbc4f33a0d3689a437fa7ab0a89098642718cde3703999c6d18f70bfb4196494ef565b5c5b4a730dc8a68a1660405dc80487462e17ab288e16f3c9cc7ae125c4bbcabe7f5f87cb5f87a725a4a0a0e4ef0f19c90df0de3d3f5e1752f1be30451bfcc78d726d33b882fd6645616b79540f83fe30200d59995798ebf9883d5d957584024a7368687f5de4e11056eb271282b89079343f43f41f37017ed5db030000",
    ],
    [
      "ETag",
      "qzgP9HPbTr+dFtmccauZGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1636475679452"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d905d6bc2301486ffcbd9ad059db66e821753ca148a6c75c23e1089f1b4abb63d5d726a71d2ffbe93ba9b7cbc7992f721573865e50126b0cfd29f1acde52e457e758b186d9db395a9a2d222f40059a5423e84e7f5e263eedbf7fdfa532d7ef9346c4c339d0a61f537160a26574832cc0f16265f57285581726db7d354972c145f2a172c576fe173184b50d0c105ab4d143dcda210da6ddb8323ed634cd060a9d1bd58193aa2e6a593b5aaa872f42cd546a3850eee0e524375a50c91278917788360188cc67e307e1cf9f7c2e5a41567540aba5983b430b1ca636a44150602986e29d649379e5ddc7742db7f767661b42f86a4d7a2abecdfeae7e4945854d9d4d803ade42f1619dff6ed1f106fda7a68010000",
    ],
    [
      "ETag",
      "8EvSHYC5sXbSZaHztk3wrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
