const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1645646000712";

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
      "d4",
      "4b",
      "72",
      "82300000d0bb642d0c2abf748720f2b11d9416309b0c60ea0f4cf809c4e9ddeb74db2bf00ef19e20cd73d234b8a53772076f604c1750ccc54c329287c43f834375ed14280f5f4eef50851af03ce77de1847797d6c86fdf356a66a1e7e7dd5a3e5848e0c662b18e31f77cf58336d74d1abaf1a8a986ea09812e632d834354165ba48e96e67a377347b854a326dce84c1078b68cae0f9d754d75188216b58a3bec24eb848947837d9df1889b55b1e5c74428f11e5d94b32cd3ddb1f24cd821cd8673665589b1ae5c9b943e36626765666a6723b68ddbfbc95ed1827fbb6a2a3cf6ac172793c93f6006c8c02e3569f0e5f5c152817006fe72c0edc8c86b8815496b52839f5f4c246a243b040000",
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
      "Wed, 23 Feb 2022 19:53:23 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "02ffb592414bc3301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "b5",
      "92",
      "41",
      "4b",
      "c3",
      "301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        query: "SELECT * FROM `records` LIMIT 10",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1645646000712",
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
      "6f9b3014fe2b91f7363501020488146d55ca2aa4345b09e9b4bda4b639664e09a6d874aaaafef71da0cd5a556adfc0dfeddc1ec88dac7232274c16b72d34f79ff68a9113028616f8badc3b574a6f7f3be946d4fa723d8bcf7f98cbc50219b253697aa84b186bd5361cf47cbb99148d6a6bda283546a3b13376669e3ff366b66d07ce14651a4ab192d50d8aff1853ebb9653d474f0aa58a12682df584abc3f1ddba9b5a75a3f6c08db65e275a18a2ad7733bf948a532355b5d86e30bfd5d0ece040658915fc17e6eceb6be789a4874981e43bc98172aedaca7455a10557959045dbf4ae64fe40fa2a5f7c904dbc8a97d9e8f3e85bfafd6274dd00574daeaf47abe422c9468e8d26396823abde22a3ac844efed464f276b29d801aaa610077813da34e68474cb0808bd0f599b081b190053e7599cd230fbc9c01459de9dc7b15ad541505ae7045ee7a91001ad290857ee8099f8a9c071e8f443e0d22df0da6e4f184fc6da48133a96ba5e5d02af9992659bccbd2ed7a799ac57d1b82b6a5391b8aeb9a7859a7c12677b6ed20f19dde1e3b542a4ceb6697acb3383d5d66c9553cac6b0505e5f79b5b5c98a0a506a4e39ab3fb1a67462eb771fa8b0c4f290868a0e21fcf12c93df0d1b13e9f0e52f17830451bfcc7c571dd65f0068605ca4357cb51ed4da72ee9c98d7983b97e84d8f1643a473840659e1a1a4e873c3e85b5fa484210e7be4ed6e788fe03c05dfc58b8030000",
    ],
    [
      "ETag",
      "Cj1VosUZ1RSfpsQN6EGPtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1645646000712"
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
      "97",
      "db",
      "6e",
      "db",
      "38",
      "10",
      "86df457b1b13a4a8a38102eb24aaebd639d476af8a2250245a66228b5e924ed71be4dd77a8243ac0aa2bf5c6e68c669cf9f4cf8c9467eb9117a935b6ee79f6cf9ec9c35f19d35fcd61c1d43ed70abe76a250cc3ab3988e3388dceda26d315d2c33f968df64e2cb46dd1efefbfae10344a864c3b6b1357eb6d69ce5a9b2c6df9fad22de3248e32904e8c3ce9c67d7ab681a2dc0b115a9715c7f9bcf27e7f3c87a39ab12e22411fb42df0d4e5c73a9f45d695489cbd562763d3d9d97c77f9406c43c1f9692b1226572580edfddc5692a995203f384ba8b77bb3ae9fce6661e4dae7f73f38b540a9efe41e6131f9a91eba73ae3e3fc66b23a1d9fc6ba21d1e564159d8e573ade366a5acdaea2e56a7275db95f5e3e5cc7a10f70bb66692150933bdbc93e281257a66c644c14fe56ca4c45e26cc2801c1e5854c8afd2e96428cc0332223e239aee77818639fd810978b24d65c1410fa6d09d5595ae8385f889f302416c11021cb330cccbafc7c027f506298935d9da64c6ace2af3627fcfb5aecc2c296dff6ff66f59294ac4b6baf8115a35af53894d91edba88508c6ca772afe35cb15f585aee6b23700872dcba446ce311b647b8ae9a203720c4a361e8446179739b74a48eab4e916cb07d66f2497055d9ece1d5813be9ae5a6c2e20f98806c8b7bbab3f0166bb2122f63118698161d70d492718ed009b4aa659de30c53e11c9632d5cf6e6b1fb486713820228926050cf190ce87901a2c77cb4cde75302c2b99edf81e87574e6252b78652c9338e77165a6aab4dd5e7d09aa114a107140bde170b64f51181cd3796dba3024ddea851d68f3bdcc192b2afb1c8695e5b59cf9fdab23e8259e6183",
      "1683d173681fbcb6e5c1d83634aff8c2161fb15d4c3bf96aaaba3b2fe284e78dc98bcc8a7d37120616e945e65250cd43b018ecc6b49c10ab7d297410f58ec9ecb672b0595de8cb0e34b74b3a2eeb36fc2c3685d2a216327f78f3387df80c9e676a4061389c2eb04dfa319edbc60bb1e3976317845d4b1357d175ef5c0aa93787ca9cb510536eccb00f9f63b626419e0375d2e1807688917bbc571a25979d49a9e7777666ddd475ef4cb6b1aef5bb109aa9b59069e589937717edb55b42580e00699e785e37d3af0d07562e3ed6cf69eb179080beead781e87774e827966735e2979c351e799b47637a7dd002235e806077bac16032ec23dcf128f7dbca61df77df95fbf1f60a737e80fb7f2b05bc0e2996961d0a5bad7c31ba10a666d82463f3c7ceac2486ff0f3e716d8dcbbe79f91fd02f162e7d0c0000",
    ],
    [
      "ETag",
      "ppEmnGRSgrk2OgoKhsPyzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "b5",
      "92",
      "41",
      "4b",
      "c3301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "000002ffb592414bc3301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-2-1645646000712",
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
      "7b6d0249092191a2354ae91a29211b21edaa6942c65c985b8233db74edaafcf75d4c93b5aad43e61fb9e73cfb91f3c913b5e65644c525efcae413e7eba15293921a06981af3c7a08bde95f6ddf540ff943fdfdd659ddf58ac90411bc6129badd95d051a2960cd478b3ee1652d43b2a85e860a24ebfd3f3dc81e77a8ee30c7b7da42928f305afee90fc4beb9d1adbf641ba5b08519440775c7599d81edfedfbbebd93e2169856f66b451b4594fdaee6e75230aab9a8269b35ead70a64025bca4b74f09f98a567af337739dd760b04df730694315157ba71852998a8725ed4d26425e327625cbe389075b00866b1c544596faba4a25b38b132aa69a21f77605d44aba5350f2f56d1721acf5761b29e5d06cb6977b65a6c96e1dababe0ca2c0d2342dc170ad8975666e215e503f03a57965d4e3e6b9517eeecffced501a024a2b6883c9d0f168cf7746699e0e59ee9f0ed2dc8134f5d3e1809ea60e1bb9e0662950e41951c3a295a8fc3ed0418f0e13d7f50689ebb934f11d18253e383ef3b2c1e9087cb23f217f24d770ced54e28de76885c47f33848e26813cea671604ac8695deaf3d65853c04b8f1a0b4c1ca787c077eada37512e50ad69f93c8c83683a8be757413be50514943dae7fe39c735a2a403495d8400d7229326c1a09a7cbe01cc1666a5f0f4145c63f9e48d3f7c6c98bb61fe9310eb1b1accd97ace3681e7e31760e882b5ad60672df1e88042664869ef73f11875bdae620df36417443daa708729050b18fe7896013f8e85f3b6c3e4271f7514569bce3f230d5683009ed127153eb913d",
      "18fa2e3160a9dfc446662cc78d6f32c2162afd5c50bbf958672b56ab23088338ffd0b46aff0f349664da77040000",
    ],
    [
      "ETag",
      "iRxN6Azt/YnxfxuXj0Ok1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1645646000712"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93516f9b3010c7bf8bfb4a249251ba21f58174599785245d429fa60ab9f641dd19dbb54da628ca77df9976d9b456a22f7077fe9db8fbfbcf81fc148a938cdc8be6a903bb3f6bc07f0fc1065c27bdc397d1ca01890878da20d9c8c5f661619e26cb7a917eab5d517eea92fcf21209c71ea0a5243b905a80e48e643f0e44d116b08d69d9b5aaeab388f8bd09c56db999afae316f350ff9eab628f2693123c7e8d4c8a9a755cfbfa3edee1891477dbf811a2c2806611663f523303f0f6b3ada1a0923a73bcbc0911eee0f1aab3b43add623ac8c26a3719a9ca7491ac7f1c578829cd48c7aa115a2b75b1c8f78eda9dce85fb824197f40c2f6312e5cf7cf1dd605ef1709e17c55a6493fdfbf00654c77ca5783602dacf3cfe2fd015f44f89f94f49d20de94904350038a831da284a928e7169c1b24b5aba831276cba5e17af5551dc6ac187c19d1800a4df9d802fc53a7f4b5af4d75fad3ee7e5ec15e13cbae68494f3e56c5be6cb9bc0ddbd1861baf7e06eac465339087e1ac7c9c7f38b347eb6d8950eb6c3ef64de76101146f14ff92a3cc96a2a1d1c7f03413dad1b87030000",
    ],
    [
      "ETag",
      "glKShKpq2MfK6JfsLT9u4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        query: "SELECT * FROM `records` LIMIT 10",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1645646000712",
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
      "000002ff85525b6f9b3014fe2b91f7363581040810a9daa2964d4869a6256497a7d436c7cc29c1d436adb2aaff7d0748b35695da37f0773bb7077223ab9ccc0893c56d03faf061a7183923606981afeb324ed7d9dfea4ad05fdc487f579b7a373f3f47866c5586eeeb128646359a83996dd6a342aba6a65aa9211a0dbde178ea07537feaba6e389ea0cc402916b2ba41f11f6b6b33739ca7e851a1545102ada51971b53fbd3b7713a7d66a07dc1ae765a28321c67933f353a938b55255e79b35e63706f416f6549658c17f61ce3ebf741e49ba1f1548be931c28e7aaa96c5b155a7055095934ba7325b307d255f9ec83ac934572910d3e0ebeacbe5d0dae3570a573733d58a457693618bb689283b1b2ea2c32ca4a68e5c726d3d7936d05d452033db80ddd291d476ecc040bb988bc800917188b5818508fb93cf6c1cf1950d4d9d6bd53d14a5571e8094fe49e1f0ba0118d581444be08a8c879e8f358e493300ebc70421ecfc8bd96162ea5a995917dabe4e72acd926db6da2c2fe659d2b5216853dacbbeb8b689e7755a6c72ebba6324bed1db638b4a8569edecd26596ace61759fa23e9d7b58082f2c3fa161726686900e9b8e6ec50e3ccc8f74db2fa4dfaa71508d050f1f76789e40e78ef589f4e07a9783c98622cfee3e2b86933b8867e8172dfd672524f432f241d59db57581404889d4ea675843d54f6d8507f3ae4f118d6981309419cfb325d7e45f41f1d5e2b2cb8030000",
    ],
    [
      "ETag",
      "Sl9ISTznMfaXcsi4jpspjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1645646000712"
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
      "0000000002ff9d976d6fe23810c7bf4bee6db1ec384faeb4d241cbf6e128ed01bbd26ab5aa4262a8a98939c7705b55fdee370e6d1e449623fb063c93193abffc6726e9abf32cb2d43977e662f9cf96eb973f96dcfc6d0f139e6fa5c9e16ba3b29c3b670e37f112229fef77036fac7e62efdb576fca1ee65faf6f57cb4f9f20224f9ef83a76ce5f9d85e032cd9df3efaf4e16af39a4891402cccbc69e6fc6b3e1d570028eb54aad63fc6534ea0f4643e7edac4c8893446d33f3d8397121746e1e0ba34c9cce2637e3abe37932fead342016b25bca926729d7dd72c4e6314e53cdf3bc639eca1fe3cda64a1adcdf8f86fdf1ffdcfc2cd54aa4bf91b9135d33a4d955199f47f7fdd9f1f8343635892efbb3e1f1f8dcc4eb5a4db39bbbe174d6bf7b68cbfaf176e6acd47cc2175cf32ce1b697375aad78626eec98e4f05392f772b5d509b74a40707161a9d576136ba57ae0e9d11e093c3ff0028c71485c88932a898d5019847e9942758e51269613f52f0c89433044e8e20c03b3283e77e08f0a0c7b72cbd315d746f0d2bcd8ce8531a5b94c0a3bfc93ff2c2a45895a97173f43abca2a95b814b9be8f08c5c8f54af7229639ff8565f4b632228f20cfaf4ac42eee61b787abaa09f2234202ca983764c5cdadd3912aae3c0d758ded96eb9d127969f3d5de815be9ee1a6c3e208588462874dbab3f02e6fa0c11f7108c34c0b0ef33d20a465bc0ae34375cd64cb54d54f25c09b77cf7b8a748e712822228926050cfeb0c180411a2877cb4c9175202c2f941d88218b474e625cf44694c93588ab834d3bcb0fd93fa1254239420e2817adde1dc9022161dd2054d3ac648bb7aac056db4d592f3acb40730ac5c5672caf9de119d249e65831683d1f3e829784d2b80b1ad695ef2b1061f717d4c5bf92aaaaa3b2fe244c8dae40ded8afd30120e163989cca7a05a806031b8b569392256f312f3100d0ec9dca672b0597de8cb1634bf4d3aa1ab36bc554f596e5425a45cbd7bbc53f82c5e606b408c75a78b5c9b7e88e737f118f6c262ec22d6b63471195df5cea5d2e6e9a5346f1a88a9b0263b85cfb35b93a0c0833a6977409761e41fee955a",
      "c94567521a84ad9d593575d53bfd756c2afd2e94e1f942e9b4f4c4c9878b9eb45b182c0780b44fbca09de9d786072b171feae735f58b4844f7fab520862d1d7acde5b242fc4bf2da23efe9d99ac1296891152f42b03bfda833190e116e7994874de57018fa1fcafd787f8519bcc0fd7fd00a5e87726edf84f0feade842d982618d9cdbbf74e62431fc73702dccde7efb0f2bea0791790c0000",
    ],
    [
      "ETag",
      "kOvB4Nox04YV4S9PbVHJjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "b5",
      "92414bc3301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-4-1645646000712",
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
      "000000000002ff85535d4fdb3014fd2b91f738daa490266da56a74258c4e6d0a690a9aa629729c9b6048e3623b4c08f5bfefc6a11d08099e62fb9e73cfb91f7926f7bccac888a4bc78a8413e7db913293922a06981af3fa759effafb57dab32ff9f0ee22a4d33b7a7b351e2382372c4537db123a4ad492811aad57dd428a7a4ba5101d4cd4713b3dcfed7baee7388edf3b469a82329ff3ea1ec9b75a6fd5c8b6f7d2dd4288a204bae5aacbc4e6f06e3f1edb5b29ee806965bf55b45144d91f6a7e2b05a39a8b6abc5ea17ead4026b0a1bc4407ff89597afa367397d34db740f0236740191375a51b579882892ae7452d4d56327a26c6e5ab035905f3601a5b4c94f5a64a2aba81232ba39a26fa690bd679b45c58b3f07c192d26f16c1926abe945b09874a7cbf97a11aeac9b8b200a2c4dd3120cd71a5ba7e616e205f533509a57463d6e9e1be597feccde0fa521a0b4823698f88e477b036798e6a9cff2c1493fcd1d48d341eaf7e949eab0a10b6e9602459e11352c5a89ca3b39ee53184092fb999bb8a9479361df6109cbc175f2dcf7304a7647e4afe41aceb8da0ac5db0e919b681607491cadc3e9240e4c0939ad4b7dd61a6b0a78ed51638189e3f410f8415dbb26ca05aa352d9f8571104da6f1ec3a68a73c8782b2a7d503ce39a7a5024453890dd4201722c3a69170b208ce106ca676b90f2a32fafd4c9abe374e5eb5fd408f71888d656dbe641547b3f087b1b3475cd3b23690c7f64024302133f4bcfb8338dcd23607b95a07d12fd23e459083848a7d3e4f049bc067ffda7ef3118abb8f2a4ae31d9787a94683496897889b5a0f6cbfeff689014bfd2ee679febe654d8e26236ca0d22f05b59b8f75b662b53a803088f30f4dab76ff0068f95ad877040000",
    ],
    [
      "ETag",
      "JCd1VB+a1/Pi9jHNaCjahQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1645646000712"
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
      "ff8bf73595d22d8429121f52c8a05268599b6ad22614b9f6253373ec603b1d6dd5ffce39b00e0152f892dc9d9f53ee5ebfd9933f42719290b5a8ef3b30db4f35b8ef3e5880eda4b3f86ab5b24002028ed6483e9cefdcfce78f2e1357ddea729dc1c3ee7e979e9d2161d96f682849f6a41220b925c9af3d51b4016c635a768d2afb2c206edbfae2b2584c679798379afb7cb6caf3749267e4101c1b3975b4ecf90fb4dd1e0272a7d70ba8c08062e067698dbe03e6a67e4d4b9b56c2c8eace30b0a487fb83dae8aea546eb115646d1681c472771148761783afe8c9cd48c3aa115a2ab258e479c76542ef45f5c928cbf2061fa1817aefae706eb82f78bf8703a2be2a89fef254019d39d72e520580963dd9378ffc067115e93927e10c49b127208aa4171304394684bcab9016b07496d4bdab6476c329fe76f5551dc68c187c18d1800a4db1c816ff93c7d4f5af4d77fad2ed2227b435887ae3922c5f43a5b16e9f58de76e9f8d30d93ab03746a3a92c783f8dc3e8ebc9691c3e59ec5c7bdbe17712673a0808a3f8a75c0947928a4a0b87476672b28587030000",
    ],
    [
      "ETag",
      "xCztOZWuEiHuUGbEexzqzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        query: "SELECT * FROM `records` LIMIT 10",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1645646000712",
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
      "000000000002ff85526d4fdb3010fe2b95f76da34dda264d5aa9da188429a814ad4d99f8546ce71c5cd238d84e5187f8efbb24d08190e05be27b5eeeb9bb4772278b944c0893d97d057aff65a3183922606986afa3abf3e3ecdbfd72b739736fafff3e5cba3f559a4da7889035cbd06d9943d7a84a733093d5b297695595542bd545a1aedfed8f3c7fe48d5cd70dfa03a419c8c54c167748beb5b63413c779b1ee654a6539d0529a1e57dbc3bbb31b38a5561be0d6386f1d1d3431ce879edf73c5a995aa98ae96e85f19d06bd852996307ff8929fbf156b927e9b6972178273950ce5555d8ba2b94e0aa1032ab74a34a268fa4e9f2d5075946b3e824e97ced9c2d2e2f3a371ab8d2a9b9e9cce28b38e9f45d1449c158593412096539d4f4e790f1fbc9d6046aa981b6b80edc11ed87ee98091670110e7d265c602c64814f87cce5630fbc9401459eadd51b162d54310e866228d2a1371640431ab2d00f3de15391f2c0e363910e82b13f0c06e4e9883c6869e1549a5219d946257f167112ad93c56a7e729c444d0c41abdc9eb6cdd5215ef76931e4da75fb08fc20db535d950addead9c5f3245a1c9f24f155d4ae6b0619e5fbe53d2e4cd0dc00c271cdc9bec49991dfab68714ddaa70508d050f0cf6789e0a6f0d9b1be9c0e42f178d0c558fcc7c571537b700ded02e5b6eee5c00ebd914f1ab0b6ef6a7e50afff7032b5226ca1b0cf81dad3214fcf66953980b088739fc7f35f58fd079f67cb88b8030000",
    ],
    [
      "ETag",
      "6VJAg+qSvjF0hYzwO0Bodg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1645646000712"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff9d976d53db3810c7bf8bef2dd14996e507663ad3045c4a2f401bc28b9b9b0e236c2518142b95147a0cc377bf95037e98b8b9b86f12ed7a37eccfffddb579f11e8b32f78ebdbb62f96323f4f31f4b61bfb9c34c988db406bed6aa34c23bf284e54b880cff0e5362d49f4aa67af2e391a4376c41971f3e4084c9eec58a7bc72fdea2103237def13f2f5ec95702d28a1c02ecf3da9dcf2fe7e9593a03c74ae5ce7179339d8e27d3d47b3daa137896a94d696f07272e0a6dec6d65d489d7f3d9f9e5d9fe3cc97f2b0d880b392c6529ca5ce86139c5fa96e7b916c60ccc53e696afd74dd2e4ea6a9a8e2fffe7e697b95645fe1b994fc5d00c699f9a8c4fd3abf17c7f7cce6d4ba2d3f13cdd1f6f2c5fb56a9a9f5fa4d7f3f1c5d7beacefaf47de83ba9b8985d0a2cc84ebe5b5560f22b3e76e4c0cfc941423a3363a134e0908ae2e2cb5daacb9566a049e111b9130606110628c23e2439c5419b7852a21f4e61aaaf3acb25cced44f18128f6088d0d5190666517d3e813fae30dcc9af4f6742db42d4e6c9e6aeb0b636975965471fc5bf55a52853abfae2276855d9a4129f229f314428467e50bb175c1af10bcbea4d63c40141016b4ac43e1e617f849baa09623121214d92204daa9bdba6234d5c7d4a758bed8bd04faa30b52d1eb60edc4b77d161638014211aa3c8efaf7e0f98cf1244fc5d30d201c38c25a4178cf6809d6961856c996a93a9ecb1116ef9e6f10f91ce2704c55024c1a05e3018300c634477f968972fa204846361d48318f674e6a9288bdab8ceb82c786de6a6b2d9417d09aa114a100940bde1707e445112efd2855dba2421fdea253d68d38d964294b53d816115b29153de6d1df141e23936683118bd801e82d7b54218db96e6355fd2e1233ec3b497afa16abaf38467856c4d5eea56ecbb9109b0c841648c826a2182c5e0b7a6658f58dd4b498068b84be6779583cdcaa02f7bd0589f74856edaf08bba2f8d558d90f2e1cd131cc2e7f04257034a92e174b1efd277f158172fc141548d5d9cf42d4d5c4737bd73aab4bd7faecdf30e625e383339842f705b93a030803ae970403fc188edee9556c95567521a46bd9dd93475d33be315b78d7e27ca0ab3503aaf3d3c7b77d183",
      "764b02cb0120dd132fec67fab511c0cac5bbfa055dfd6212d3ad7e3d88514f877e1672d920fe2545eb9177ffe8ccf010b4d8891723d89d2c1e4c8623847b1ee55157391c45ec5db9ef6faf309367b8ff5fb582d72123dc9b10debe159d285730ac9163f7978ebc8cc33f079f0bbbb55fff037e2202b0790c0000",
    ],
    [
      "ETag",
      "6Y6E1so/olErBqk1EU5f3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d4",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64ed38095fe94e10858af211076193811828e5638414844eef5ea7db5ec17788f70d524268df637eab680bdec0940ada922c33b8be0c700e0ff3a034309025d9a9dd04224b6463ba5a497ec630552f5f45d0dac6347ffa92e0f1623dd1960b7a7f14d7891b3adc344296074c197a39cb0e2487cac67dc4cc3e8e9613c62aae698dcef39e1744f34d6610518efdc9a83c31caf2ed70afb47073de1dd02d4d826ca322d743a76807c7c6164ca1826ea38f39367d721ddccb1d358ed26a76dd45c816c771b525e5febdb81a27eb03936354459e9f27fb7ce25caa1a4b5abebcbcfc0316803e58d9d11e97cf0f4459d316e02f07cc27469f43e834ed68077e7e01ae2b06403b040000",
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
      "Wed, 23 Feb 2022 19:53:29 GMT",
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
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-6-1645646000712",
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
      "30",
      "14fd2b91f75a20102080845644d3351a842e8456d33445b673c3dc8698da4eb7aae2bfefc629ac55a5f529b6ef39f79cfb9167722fca8c4c0813db870ad4d3a73bc9c8190143b7f87afd67b3f8faa0a2fbbb0df7bcde250f437a359b4e11216a96a6bb7d012d2d2bc5414f36ebf656c96a4f95942d4cd41ab6bac3fe60d81fbaaeeb777b48d350e40b51de23f997317b3de9748ed2edad94db02e85ee83697bbd37be7b1d7d92b7907dce8ce5bc50e8ae8ce7f353f179253236439ddac51bfd2a052d85151a0837fc48c9dbfcddc1674d7de22f85170a09ccbaa34b52b4cc165998b6da56c56327926d6e5ab0359078b609e385c16d5ae4c4bba833327a386a6e6690fce65bc5a3a6174b98a97b3245c45e97a7e152c67edf96ab159466be7f62a8803c7505680e53a53e7dcde22bca07e06da88d2aa27f573adfcd29ff0fd506a024a6b6882a9ef0e6977e48e59ce7c9e8fbc01cb5d606cc4fc01f598cbc77de8670c28f2aca865d1126b867c4c59374f99ef0fd33ea5bd74e477bd9401cfc0f7bdee9051723823bf95307021f45e6ad17488dcc66112a449bc89e6b324b025e4b42acc4563ac2ee0b5478305a6aedb45e07fea3ad4512151ad6e791825413c9b27e14dd04c79015bca9fd60f38e79c161a104d1536d0805aca0c9b46a2d932b840b09ddaf531a8c9e4c733a9fb5e3b79d5f6133dc121d6968dfd92751287d1176be788b8a14565218fcd8128e05265e8f9f01371b8a54d0ef26d13c4df49f314430e0a4afef13c116c031ffd6bc7cd4728ee3eaa6883775c1eae6b0daea05922616b3db1c7bdbe472c589977316fe01e5b56e7a833c20e4af35250b3f958672356e913088338ffc8b6eaf01766775c2077040000",
    ],
    [
      "ETag",
      "PxULKqrNkjUc332FcIIaHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1645646000712"
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
      "02ff8d936f4fdb3010c6bf8b79d9544aa1842d122fd2ad1bd1d23f6bc3249850e4da97ccccb133db29aaaa7ef79d032b08268537c9ddf977cadde3277bf25b284e62b211d59f16cceea402f7dd072bb0ad74165f8d56164840c0d10ac9e5b76a33fd713b483fdeb0abaa1cd0d3b3c12cb9bc44c2b25f505312ef492940724be29f7ba2680dd8c6b46c6b55745940dcaef1c575be4ae75f31af35f7f9fc3acb9249362587e0d8c8a9a345c7bfa3edee10907bbd5941090614033f4b63f43d3097fa352dad1b0943ab5bc3c0920eee0e2aa3db861aad87581946c351343e8fc651188617a353e4a466d409ad10bd5ee378c46947e54a3fe09264748684e9625cb8ec9e5bac0bde2de2c3749e47e36ebe9700654cb7ca15bd60298c758fe2fd039f44784d4afa4e106f4ac83ea802c5c1f451a22928e706aced25b52d68d31cb1c96291bd554571a305ef07b7a207906e7b04be648be47fd2a2bf9eb5fa9ce4d3378475e89a2392a7b3e93a4f664bcfdd3d1961b273609746a3a92c783f8dc2f187f38b287cb4d827ed6d87df899d6921208ce29f72251c894b2a2d1cfe020ac0afa287030000",
    ],
    [
      "ETag",
      "PKgbEVZ+I9YcHgf+a23+MA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-7-1645646000712",
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
      "8553eb6eda30147e95c8fbb34d059c160820551da3691b0d4207a1d56e02db39c90c494c63a75355f1ee3b494a2faad44a9662f97c9773cb3dd9c82c2403c2657c53407ef761ad38392060588caf5efbebfafc6c33da6cfc4deaaaf5888dbef9c3e36344c892a559ba4da0a155910bd083c5bc19e7aad8b25ca9060a359c86dd6d77baed2ea5d4b10f91a62189c632db20f9af315b3d68b5f6d6cd58a93801b695ba2954faf8deba3d6c6d73b5066174eba5630b4d74eb4dcf93440966a4ca8e1773f42f34e44b48994c30832762c8bfbc546e4a96366304df4a014c085564a6cc0a2584ca22191779a54a06f7a4caf2d985ccddb13b0aacd174e107d6c7cf9face1dc5a2e2b0deb6c369d58ab1c84ca43bdb2ae2fdc996badb441f795f5bba0f408ac137409411b99551e01e30994fa0f5df05eb7be2430c334d4c1a543bbcceed13e8fb823a2de5187471438ef71a7c38e3815fd36b4430e0c79a654af582c5359dfee020d454708ce981d420fe1a8d3eb824379047d47849c753823bb03f22f97064ea5de2a2deb5e90eb9917b8cb60b6f047c3c0adca88589198d33ab9b288e7791a2c7249a98dc0376adb9551a9d0ad6caee707ee6c380abc2bb79ee7186226eee63738d188251a10cd729682817ca2426c1cb99ccebdc09bfac33132aa215dee119a0c7edd3f1182bb6dd569537d49e04ddc79309c5c5639ec41572c292ad46d7d2176dfa10d6ae309281d54a789dbf793ec767f90885b59eb92ef0b77f683d44f338820874cbc3f59045781f7feadfda62314771d5d70ab8cc43512baf41039d4eb24d32ae907b64d7b9d3ea9c0b97915c3c9ef7b566a948a9042661e0aaa371debaccd0afd08c2206e81eff9e718fd0f3041b8ae67040000",
    ],
    [
      "ETag",
      "I4BjGFkCkkNkmEojCaCKNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1645646000712"
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
      "02ff2d905d6bc2301486ffcbd9ad8576b83a0a5ecc212a94b275933187488ca75d5d9a53f3a1a8f8df77d2ed2639bc7992f72157f869f40e32d836f5c1a339dfd5e85ec350a2f5ca59de3ad2166100e844cda43e34657199aba5bf749f477d4af38fd9aa1e8f99b0f21b5b01d915aa06d5ce42f675052d5ae46b9b8d24af1d53eedc856051bc4f67d39283967621289679fe34c9a7705bdf06b0a76d89151ad412c38b9da13d4ab708b256b49dc2c89237122df4707f501bf29d30441127d1284ad2e1433a4ce3381e25f7cc2992c235a4195dbe01b738724295746255481830fdc8d655bf1e431c07a1f53f3b393bb42f86b8d762a87c8cfffa9f2938397675c6e300a4e0cf98370eb24a288bb75f7f6e995d6a010000",
    ],
    [
      "ETag",
      "nqiRNzHlUuzpYvnw6LWGZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-8-1645646000712",
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
      "0000000002ff8553616f9b3010fd2bc8fbda2424a590448ad62ca15ba4847484b49da609d9e6606e09a6d874caaafcf71da6e95a556a3f61fbdebb77f7ee782477a248c8983091ddd750ed3fdd4a464e08689ae1ab7d197e59cf57b5f397d5a59bdc2899dcecb3c90411a26129ba2b73e82859571cd478bbe96695ac4b5a49d9c1449d61a7ef3a67aee3dab6edf507485390a74b51dc21f9b7d6a51af77a47e96e266596032d85ea72b97b7eef3d0c7a65256f816bd57badd84311d57b57f3732e39d5421693ed06f56b05550c3b2a72ace03f3161e7af337705dd7533043f080e94735917baa90a537059a422ab2b93958c1f89a9f2c5816cfca53f8b2c2ef37a57c405ddc18995504d63bd2fc1ba08d72b6b115cacc3d5345aac837833fbe6afa6ddd97ab95d051bebfa9b1ffa96a62c07c3b526d6b9b9057841fd04941685518f9ae746f9c99fc5dba134049456d00663cf76697f688f58ca3c9e0e4fcf586a036343e69dd15366f391034ec28022cf881a162d64e1b8a374c4fa2cb6078cc58e036e4c5d36883dee79e9e8d476c1eb93c309f953090d73a14aa944eb10b90e17911f47e136984d23dfb490d23ad7f3b6b0a68197356a6c30b6ed3e02dfe9ebd0448544b5c6f24510f9e174162daefc76ca4bc828df6fee71ce29cd15209a5668a0866a2513348d04d3953f47b099dae531a8c8f8e723697c6f2a7961fb333dc22136256bf3259b285c045f4d3947c415cd6b0379680fa4022eab046b3efc421c6e699b837cdffae10fd23e8590420505ff789e0836818ffeb5e3e62314771f5594c63b2e0f578d06afa05d22617a3db2fb78307faaa6957e13f38683a3654d8e2623eca0d04f0db59b8f7db662b57a066110e71f18ab0eff005a61ea8f77040000",
    ],
    [
      "ETag",
      "0PRBODMu4zbup6dXsodXyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1645646000712"
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
      "0000000002ff8d93516f9b3010c7bf8bf74a345829ad90fa10ba74cb46928ed03e6caa908b0fe6cc70cc3699a228df7d67daa6d35a89bec0ddf977e2eeef3f7bf64bb682c5ec5ed6bf7bd0bb7735d86f2ec8c0f4ca1a7a75d81a601e03cb6b22932fcd7bbbd924016ebfee6eb3ec7ba8ae16f5c50511a6fc090d67f19e551294302cfeb1672d6f80da4a547dd31643e631bbeb5c719d67f3e527ca1b142e5fdea4e9344967ece01d1b05b7bc18f837b4dd1d3cb6c1fb0c2ad0d096e066e9346ea0b473b7a6e14da76062b0d7251836c0c341adb1efb8469c5065723e09a2f0340a23dff7cf820fc4292cb995d8127ab3a6f19845cb55867f6849169c10a1879816ae86e796ea520c8bb870becca37098ef5f809725f6ad2d46c14a6a631fc47b021f45f89f54fc8d20dd945463500dad003d46c9aee042683066944453f0ae3b62c96a95be54a5151aa51807b7720450767b04aed2d5f43569c95fcf5a7d9ce6b31784b1e49a2392cf17b3753e5d5c3beeeed108c9ce82b9d648a632e0fc14f8e1f9e959e43f58ec129dede83bb1d53d78ace4f4a77c9696c51557060e7f01211678ae87030000",
    ],
    [
      "ETag",
      "BJm/tjjB1ovKyVRRZ4lFMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-9-1645646000712",
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
      "ffa5545b6f9b3014fe2bc87bd9a6263109048854752c611b5542b284b4bb2a31c630b704a7d864aaaafcf71da0e94555db874948209fef726ee6065df23c460314f1f4aa64c5f59b0b11a123c41449e174f73df8e6cc7aa762949c96571fddd333ddbd4c8f8f01c12b96249b6dc65a5294056572b05cb4d342945b5208d102a196d3d2fb86d937fa18634bef024db22c19f3fc12c87f94daca41a773b06ea742a419235b2edb546ceece3bbb6e675b880b4695ec3c76ec8089ecbce87992094a1417f9f17201fea564c58a6d08cf20837b621c7d78acdce664d34e01bce394114a4599ab2a2b90a0224f785a16b52a1adca03acb071f68e18dbd61a80da7cb20d4debe7fa7b90b6db5aa35b44ff3e9445b178c8a22966bedfc8b37f7b4b554e0bed67e9518f79876a2b9c148d3d63c7efe886a27904bcca4e2799d4948a28c5559dcf6ca7f3aa08a401491ac09ae2cdc27ba8d9d28892c9ad83d334a308b223bb24cd28b30750c66c41123c053957acd22b9c8cd7e643bdd6ed74eec049b91d14b1c93e9b6199944d77b26ee12cbb6624cd1fe08fd2db862232eb742f2a663e87cee87de2a9c2f83a11b7a7519092933356a92ab8a7898a782225718eb007ca1b67d15e502dcaa11f841e8cddd61e89f79cdd4c72c25f47a7105734f482619a04941364cb1622262681c9a4d177ee84f03770c8c7a94b30342a2c1cf9b7b4278bdad3badea370afd89b708ddc9accee1003a235959a376cd07d21d0bb7b00e4f88f1a07edab0a33fd07e7ff4bc3814d2375e1636fe5bc10285df8080fbd390d1d7a537ff8e9aa3394b58c172fafa7601b80ebcf61738dc4980c2ad0417d87fc56195a9ac3c68c19a95e69bba71b76cbd6b5806aac1857a12331dfd30b74aa352641b96abdb829a3b5975aa0e95f20e0441d8c4c00f3e43f41f2606d60911050000",
    ],
    [
      "ETag",
      "vYNX9P3JoDfJuqBAJV1Akg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1645646000712"
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
      "d1",
      "4e",
      "c2",
      "30",
      "1486dfe578cbc28638e2122ec42c4a824427c40b434857cee670eb99ed996412deddd3e94d7bf2f76bff2f3dc367650e90405e955f1ddafeaa447ef14386aeabd9c9d6927108234056a59063159b7593dba7ea7ad3976fb3341fbb9fd37c2e84d31fd82848ce5054581f1c24ef6730aa41b9b6df6bea0c0bc57deb83e57a933ea499040d1d7cb0deae56778b550a97dd650447ca332cd0a2d1e85f6c2d1d51f3d2cb3ad5b435068e3aabd1c1000f07a5a5ae5596289024b80da2787a134fe3300c67d144b89ab4e28a8ca0db5790162656754627518548003b8c625d0cebb7c413efb3fb47173da37bb624b50e7d6314877ffdf7e49d585cd9763802ade4331e2b86a450b5c3cb2f096454e66a010000",
    ],
    [
      "ETag",
      "/a6nNmbrMi3TygW7Eb/szw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-10-1645646000712",
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
      "0000000002ff85535d4fa34014fd2b64f6d51628b5ad4d9ab5a9b876d3d215a8c66c3664182eec28307566d018d3ffbe77c0ba1a137d6266ee39f79cfbc133b9e37546a624e5c57d03f2e9dbad48c911014d0b7c8d2e0acf762fcbeaa69cfc2cd22ad6dbea6a3e9b21821b96a2d5ae849e128d64a0a6dba85f48d1eca814a287897aaed37347c3e3d170e438ced81d204f4199af787d87ecbf5aefd4d4b60fdafd4288a204bae3aacf44f5fa6e3f0cec9d14b7c0b4b2df4bdaa8a2eccf45bf978251cd453ddb4668a0512013a8282fd1c27f66969ebe4fdde7b4ea17087ee00c2863a2a9b5b1852998a8735e34b2cd4aa6cfa4b5f9e640227fe52f628b89b2a9eaa4a6151c5919d534d14f3bb0cec3cdda5a06e79b703d8f979b20891617fe7ade5f6c56db751059d7177ee85b9aa625b45c6b669db6b7002fa89f81d2bc6ed563f36c945f1ab4fc3816434069055d30193b23ea4e9c93344fc72c9f78c769ee409a4ed2f131f552879d0c6198a54091d78ab62c5a8b7a40e9983a8e9b0c47274e329c302fc1348364e0b92ccd20f7c6cc21fb23f228b98633ae7642f1ae43e43a5cc67e1287db60318ffdb6849c36a53eeb8c9902de7ad45860824a08fca4aebd8972816aa6e5cb20f6c3f9225e5ef9dd94575050f614dde39c735a2a403495d8400d722d326c1a09e66bff0cc1edd47e1d828a4c7f3f13d377e3e44ddb5fe9310ed158d6ed974471b80c7eb4760e882b5a362de4a13b10094cc80c3defff200ed7b4cb412eb77e7843baa710729050b3afe789e036f0e5df76587dc4e2f2a38cd278c7ed61ca883009dd16f1b6d803dbf5bcb1e93d82a5fe101b4e26879e991c26235450eb978abad5c7423bb146bd8230880b10b4bddaff035bca142a7a040000",
    ],
    [
      "ETag",
      "SHg3/1QlmYl8JgbmTtUmVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1645646000712"
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
      "0000000002ff8d93516f9b3010c7bf8bf74a34d8525a21f581acd98644928ed0a7a942ae7d50b7c6e7d9265316e5bbd7a65d36ad93e80bdc9d7f27eefefe73208f427192913bd1fd18c0ecdf75e0be85a0023b4867fd4ba3b24022028e76812c7eddafa07dbc10d0965297d5fbabadc92f2f3d61d93df4946407d20a90dc92ecfb8128da836f6328875e35631611b7d7a1b8adab62fdc5e73df290af6fca325f944b728c4e8d9c3ada8cfc1bda6e8f1179c0bb0a5a30a0188459b4c10760ae086b5ada6b09338b836160c9088f079dc141538338f3955912cf92747e96ced3388ecf930f1e94c8a813a83c7bb3f5f311878eca0a7ffa2d49f2d113668cfdc6edf8dcf9bae0e326212cd6753a1f07fc1ba08ce1a05c3309b6c258f7acde6ff045857f4949df08faab12720aea4071305394d00de5dc80b59324da866a7dc2169b4df95a15c50d0a3e0deec40420ddee047c2e37f9ffa4f506fba3d5555e2f5f11d679db9c90ba582db775beba0edced8b11167b07f6daa077958560a8249e5f9c9da7f1b3c73e61f09dff4ee6cc001161d4ff2a5f8523594ba585e313f549b2c188030000",
    ],
    [
      "ETag",
      "bIzhMefk8iefLlpLR/DSrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-11-1645646000712",
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
      "6f",
      "da3014fe2bc87bd9a64212080920a10dd174ca44612361d3fa426de724739bc4a9ed50a1aaff7d2781b25695dab7c4e7bb9dcb03b9156542268489ecae06b5ff7023193923606886afb3c539ada3fde0feeaea6ab7bb88aaf8bba366d3292244c3d2b4a872e86a592b0e7ab2897a9992754595945d14ea3a4ed7f1dca1e77ab66dfb4e1f791af27421ca5b64ff35a6d213cb7af2ee65526639d04ae81e97c5e9dddaf5ad4ac91be0465b2f2d2d74d1d6dba65f72c9a911b29c6e220c506b505b28a8c831c27f66c2bebe94ee095af43204ef0407cab9ac4bd3c442092ecb5464b56a55c9e481b4319f7d90285804f3b8335f6d9671e7e3e74f9d59d4d96e5b8dcec57a75d9b956c0a54af435ca25a08d285bb198b21c1aa163bfe1eb2937046aa8864371ebdb1e7546f698a5cce7e9683064a90d8c8d983fa40366f3b10b6ec28022cf34ea2d8b96b2ec3b43f0123a1a3ba3c4f5694abd913b486030b6191b800bbecf181f82431ecfc8bd1206ce85aea41687a6c9ef751807db78bd59ce6771d0b691d23a37e787704d13cf731a6c726bdb0e02dfe8edb1a90a896ecd14c3651cac67f338fc151c16b7808cf27d7487ab4b69ae01d154d1020ca84b99e0e0c88f5514c6e16a395b345a780ef1be6ade7f6e82f59fe3d31a525050f2f7078de0b6f0ee553f9d1862f1c8d0461bfcc7b572dd98700587f58aa209f3c4765cc71b9216acccab5adff7b1763aad46110a28cdb1a3c38991c7a359ad4f202ce25696e1f21b56ff011b0f503ee2030000",
    ],
    [
      "ETag",
      "ALDauSy3wZZZvvFSpTJ1rA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1645646000712"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90d16ac2301486dfe5ec7216d3a11d14bca85336418aabf36a88c4785aab6d4f979c3a447cf79dd4dd24873f5ff27fe406e7b239400cfbb2f8e9d05e9f0ae44f3f64e8ba8a9d6c2d350e6100c8ba107216aa4b3d3c26cfabd9709c4c2febec9ce6c96422843347ac35c437c84bac0e0ee2ef1b34ba46b9b6db19ea1a168aafad0f16e9d7fc7d9e4950d3c107e966b94ca6cb39dcb7f7019c689f618e161b83fec5d6d2090d2fbcacd3755b61e0a8b3061df4707f5058ea5a6d89024982300cc268348e469152ea357c11b022a3b9a446d8cd1aa486897595d1afb8422880ed47d1cefbf5e263e58db6ffecf4cae85696a4d8a1ef548ffe37f24e2cae6c3b1c80d1f2191f25439cebcae1fd0f42da15f66a010000",
    ],
    [
      "ETag",
      "D10vm/hA+PD/5ABvSRkNfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-12-1645646000712",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6f9b3014fd2bc87b6d1392404222456b94d2952d212b9076d33421632ecc1de0149b4e5995ffbe8b69ba5695da276cdf73ee39f78307f29b5729999184e7770dd4fb0fb72221270414cdf155fc8dcad5e4b373eb7be168f4656a5fefad6f57f3392278cb92b4dc15702a45533390b36dd8cb6bd1ec682dc429263a1d0c4f0763cb1e5b63d334278321f22414d98a57bf91fd4ba99d9cf5fb47ed5e2e445e00dd71d963a27c7aefdf0ffbbb5adc0253b2ff52b28f2ab2ffb6e8c74230aab8a8e6db100d3412ea184aca0bb4f09f9926672f53f7382d7b3982ef3903ca98682ad5dac2144c5419cf9b5a6725b307a26d3e3b90d05db9cbc860a268ca2aae680927464a158dd57e07c645b0591b9e7fb109d68bc8dbf871b8bc74d78bde72b3daaefdd0b8b97403d750342940738db971a66f3e5e503f05a978a5d5a3f6b9557e6c90f77a2c2d01a52574c178628ee9c031a749964c58e68cec243321499c6462d35162b2a905569a00459e16d52c5a896ac8cca96d8ed3988d1c27b6ac491a3b93348d27c0c09e3270c6f6981c4ec89f9a2b38e7722724ef3a446e022f72e328d8facb45e4ea1232da14eabc33d616f0dca3c20263d31c20f08dba0e6d940b546b5beef9911b2c969177ed76535e414ed93ebcc33967b49080685a630315d46b9162d388bf58bbe708d653fb7a0c4a32fbf140dabeb74e9eb5fd891ee1105bcb4a7f4918059eff49db3922ae69d168c87d7720353051a7e8f9f01371b8a65d0e72b57583efa47b0a20831a2af6fe3c11ac03effe6dc7d5472c2e3fca488577dc1e265b115643b7455c177b640f6c7338221a5cab57b181353cf6accdd16684122af55851b7fa586827d6c827100671017cddabc33fcdc13b637a040000",
    ],
    [
      "ETag",
      "ozTmL7J8jNIS33K95Vy4XQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1645646000712"
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
      "0000000002ff8d93514fdb3010c7bf8bf79a6a09941445e2a11d85550b2da4610f4c2832f6259839becc768aaaaadf7d97c03a34268597e4eefc3be5eeef7f76eca7329225ec4155bf5ab0db4f15f89b2ec8c0b5da3b7a35681cb08081e71591c7df4fadcdbeadc4cdfaaecace63fdf9514eaab333229c78849ab364c74a055a3a96fcd831c36ba03681baad4dd16701f3dba62baef36cb1bca4bc46d9e5cbdb349dced239db078746c93d2f7afe036df7fb803de1430625583002ba591a8b4f20fca25bd3f1bad13072d85a018ef5707f50596c1b6e114754194547a3281e9fc4e3380cc3497444a046c1bd4243eced9ae6631e3dd7193ed3962c3a26c2f6316d5cf6cf0dd595ec37e9c2c5328fc7fd806f012e04b6c6178360a9acf32feafd015f55f897d4fc83205d95d243500546821da2545370292d383748a22b78d31cb0d96a95be57c5488b4a0e831b350068bf390017e96afa3f69c9607fb53a9fe6f37784f3649b03922faee6eb7c7a75dd71f7af46986d3db86b8be42a079da1a2707c7a3289c3178f7dc1ce77f49dc4db16022638fd2a5f956749c9b583fd6fd619ae3388030000",
    ],
    [
      "ETag",
      "3V8rrRKOcQSZgRD6l/hd7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-13-1645646000712",
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
      "525b4fdb3014fe2b95f7b24d6b93d05cda4a68ab4a362295149a9489a7623b27994b1217db815588ffbe93b430d824784b7cbedbb93c901b5167644298286e1b50bb0f1bc9c817028616f81a5789529bdfd6e52666a7e770755fecfcd38be363448896a569b52da1af65a338e8c92a19144a365baaa4eca350df19f61ddff57cd7b76d3b708e90a7a1cce7a2be41f62f63b67a62594fde8342caa204ba157ac065f5fc6edd1d595b2537c08db65e5b5ae8a2adb74dbf96925323647dbc4a3040a341ada1a2a2c4087f9919fbf65a7a20683528107c273850ce65539b36164a7059e7a26854a74a260fa48bf9e28324e13c9ca5bdd96215a7bd8f9f3ff5a6496fbdee347adf978bb3deb5022e55a6af512e036d44dd89a59495d00a1dfa8dfe9f724ba0866ad817d781ed5367648f59ce029e8f861ecb6d606cc4028f0e99cdc72eb819038a3cd3aa772c5acbfac8f1c0cfe868ec8c3237a039f547ee3083e1d8666c082e040163dc03873c7e21f74a1838117a2bb5d8374d7e2ea3345ca7cb553c9ba661d7464e9bd29cecc3b54dbccc69b0c9b56d3b087ca3b7c7b62a24bab5538ce2345c4e67697419ee17378782f25d728babcb69a901d154d10a0ca83399e1e0c8f92289d268114fe7ad169e43badbb6ef17ab707975785a420e0a6afefea011dc15debdeaa713432c1e19da6883ffb856ae5b13ae60bf5e51b5619ed88e37f63dd28195f9b7e63b8e8bb5e7d36a15a182da1c3ada9f18793c9835fa198445dc4a1cc53fb0fa0730418af8e2030000",
    ],
    [
      "ETag",
      "NmSrrjx/VjNbHPeYwgy6HQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1645646000712"
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
      "0000000002ff2d905d6f82301486ffcbd92d24b039cc4cbcd0858889611b6a76b11853eb81e180c3dac31635fcf79de26efaf1f669df27bdc257d91c610287b2f8eed09cef0ae437b7c8d076155b995a6a2c8207c8aa1032199b94cd4bbace2ed1d3f87db109920bcea65321acfec45ac1e40a7989d5d1c2e4e30a8daa51aeedf79aba8685e273eb8265ba89177126414d4717a4dbd56a365fc5d0ef7a0f4e74c83047838d46f7626be8849a974ed6aabaadd0b7d4198d16067838280c75ad3244be247ef8e087d1e8311a4541108cc37b012bd28a4b6a84ddae416a98585519fd8a2b8402986129daf930feb8387046bb7f767e66b4af86a4d8a2eb0c6efdcfe49c585cd974e88156f21949c9b77dff07e063b28269010000",
    ],
    [
      "ETag",
      "H7rNtrONSRz697WGT0HzeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 23 Feb 2022 19:53:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
