const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1620694024143";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2MjYsImlhdCI6MTYyMDY5NDAyNn0.IethSShsWIX5lKO2v9w5J-PLypVhXPi8zWSUuS5_DDWqYoiXwS0TceyXclnF_zknYr0UHXx6NKL-a3sIJKbxtdZtEW2_l3mL9oSMFxdxLjzah5vkw5Yeb2Kk0gwTXFJi9mD0e7eSbKbOrGmVb6fYJxa2vqfXO_uZ8KBXjJtDMjzgfd2VCC_f9VJFJq0QTJC6GmWoSkV-am4bvn92TI4Zd6msacfOjOSs7rjBWeW6YEFJJzWFc21osdmQRnjH85K_COh8Ul0hwK5MqjwT7QZ-hapFEyGsTUfy-K5bGPZ5NigB_nMDKlCLg5F6MIdWX5BJoq6icrSmrP-McxVdd9RYFw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff1dd04b7282300000d0bb64ad8ea215e92e844a633011b0fe364c1a23a432fc824a707af73a3dc27b4fc085905a276d7995057807865bce488c48b570935444d8e9b295ba7797924d0baecc2d8d6029fc1e3264dd969b714ef7c7bdf93940bc32be4fd9c64d5dbf22dfa174c9ee4297324a6ee3353b5576b00ebd5a9c8b21fe48f2606c9b03fff290f5c827b63a6948e167bd8884721199899ae1acdea16bac8d6af236a672def0fd91f014d36e46ec567916bb132fc6ce64583cce6a86574cc220d7fa44689fcdc373b60d7dc57cb450b169b78deee94141078101905da51aa913f5e24edf1c6700feed496b2af90a70256f64037eff0075c02dfd1a010000",
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
      "Tue, 11 May 2021 00:47:06 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1620694024143",
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
      "2bc8fb5a2040c24b422ba3e9ca04614d42ab699a22dbb9c9dc8698c64ea7aae2bfefda29ac55a5f5536cdf73ee39f79167722fca944c0913f9430dd5d3a73bc9c819014d737c1dd75be50457ebe89a79f9375e3f94f065339fcd10210c4bd1ddbe80b69275c5414db75127af64bda795946d4cd4eeb57bc3be339cb84edfedb903a42928b29528ef91fc5bebbd9a76bb47e94e2e655e00dd0bd5e172777aef3ef6bbfb4ade01d7aafb56b18b22aafb5fcdcf85e4540b59ceb611ead70aaa04765414e8e01f3165e76f337704dd7572043f0a0e94735997dab8c2145c9699c8ebca6625d367625dbe3a90c85ff98bb8c56551efcaa4a43b386ba554d3443feda175196ed6ad6570b909d7f378b909926871e5afe79dc566b55d0751ebf6ca0ffd96a6ac00cb6dcd5ae7f616e005f553505a94563d36cf46f9a53fcbf74331049456d004939133a4bdb13361191bf16c3cf058e600636336f2e880397ce2829b32a0c8b3a296454b59b21e62468341c29d09246e7fe8250c529a3077948d7b3c9d78a301399c913f95d07021d45e2ad17488dc86cbd84fe2701b2ce6b16f4bc8685de88bc69829e0b5478d0522e83f351d4c54485432ed5e06b11fce17f1f2c66f26bc829cf2a7e801679cd14201a26985cdd350ad658a0d23c17ced5f20d84eecfb31a8c8f4e733313d372e5eb5fc448f7180c6aeb65f12c5e132f86aed1c1137b4a82de4b1399832325118d3875f08c4156d9290ebad1ffe20cd5308195450f28f8789601bf8e8473bae3d4271f1514569bce3e67065347805cd06095bec893d74077d62c1957e17f33cefd83393c364841d94faa5a066edb1ce46ac5627100671f881edd5e12f65c507af74040000",
    ],
    [
      "ETag",
      "8uUs0NHMSQb5gJcuqneBOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1620694024143"
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
      "616fd3301086ff8bf9b8546a4a2825d23ea4b440216b4b9b49083445ae7d09ee9c5cb09da2aaea7fe79c8d821852f625b93b3fa7dcbd7e7362f7aa962c663b55fe68c11c5f94e03efb6003b6d5ced2abc1da020b18385e12f9659d4dee3f4d927d26671faf7657f3f4eb68965c5f1361c577a8388b4fac50a0a565f1b713ab7905d42650b7559d7759c0dcb1f1c56db6592cdf535ea1f4f9f2364d93693a67e7e0d228b9e379c73fa3edee1cb03dee365080815a809fa531b807e1167e4dcbab46c3c0626b0458d6c1dd4169b06db8411c5065100ec2f168387e130d475118bd244ea3e04e614de8ed96c6630e1dd71bfc494bb2d013a68b69e1a27b1ea8ae64b7880f17cb6c1c75f3fd0d7021b0ad5dde0b16ca58f720de6ff051847f49cd9f09d24d29dd0795504b307d946a722ea5016b7b49b4396f9a0b365dadd2a7aad4d2a092fde041f500da1d2ec0bb7495fc4f5af2d71fad6649367f425847aeb920d9e266becd929bb5e7ee1e8d303d3ab06b83642a0bde4fe1309abc7a3d1e3e58ec2d7adbd17762675a0898e0f4a77c508ec505d716cebf0067c8db6587030000",
    ],
    [
      "ETag",
      "XPT8kK8AjTdDJ+b+ELZ2DA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1620694024143",
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
      "eb",
      "6e",
      "da",
      "30",
      "147e95c8fbb3491402242420551d6bb32e120d5d08edaa6902c79c646e439cda0e1dad78f79d24a5974d6a25a4607f9773f37920373c5f911189797a5b82dc7eb816316911d034c5dbed9f01989b33f3fe9ee55ecfce7e5096a7778787c8e0954ad17591c18112a564a046f3593b95a22ca814e2008d0e7a07dd41cf1c0c2db36775ad3eca1464c984e73728fead75a1469dce3e743b1522cd80165cb599583fdd7736bd4e21c53530ad3aaf23763088eabc19f328138c6a2ef2c3f90ce3970ae402d6946798c1b370157f7eeddce674dd4e91bce10c2863a2cc7595155a3091273c2d65ed4a460fa4cef2c51f32f326de71642c132e955ee4740d4b832a63b190a0ca4cb78c255f3dde1437c6d7707a662cb1c28467a096c6e5372ff48c86e307c63c08bc59647c3cfa649c86d3f9b9f1e5aac65aaffc31af1528cdf33aab88c61954193df6cdff7f5895806aaaa001178e39a05dd71cc649ecb0c4eddb7162421cbbb163d37e6cb2a105d62a068a3a5db9d72a9a8bdc759d61dcb56c9752d3316dc7eef71c17ba2b3b1e809d001dd88c4162b964d72277926b38e1aa108a37dd2397a11f798b289c07c7e3c8abcb482836e9a449ae2ae2659e1a8b44d21b75ed2a940b8c548dc20f222f1c1f47fe85d74c7f022965dbd92dce3fa199026453891dd420cfc40a9b46cea7333ff2a7c178828a7aa4e77b8622a39f0fcf82685bd45dd6f5978cc3707c851a2a25ddfe83611e038bec762fc25dd0acac2935bf3e35fe9b06205dace5f9d423bb5f3bfcb508bef2c69d7c9f7be11569ae42484042cede9f3b926be0bd5ddd6f0e527177308ad278c647c654158349681e1b5fd7d9eed54ecfae375d53a9ffc32ccbde77b5f2a81c610db97e2ca8d99cba4f1554aa271282f846023f3845f42f",
      "74c1e45cb7040000",
    ],
    [
      "ETag",
      "yx6e0vM0zzcnE25lXacngw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d90d16bc23010c6ff97db6b0bb6eb0a2bf830a538999359953d0c1931bdd668dad4247588f8bfef920de6c35e92bbcbef3bbe2f173888b6840cb6a23ef6a8cf7735da852b0a34bdb486ae4eb5062100b4ac26321d9ddaf2a5498fc7e4f05e2c5e07bbbc4f17c3211186efb061905da012284b03d9c7055ad620c93e3fb5df48983d776eb25c15d3f984fa4695ae9faf67b3a7d12c876b70a3ea0e7f8ae97c954ff2e23fc9e61ac05e6d0bac5063cbd199e8b4da23b75397cfb0a693181ad56b8e063cec1f6aadfa8e69a5429a847118a5f1207d4c06711225f7c449c59915aa2574bd246b609565b2505f940e6202b42f2968e5cf138d732dd0a7704de4cddd3e8f1917f286881db1f9dd3c3a5b346f5a914b83ce60f490fcd81d2b17c15234ab7b0c8033faee676121ab983478fd06d5ffac31cc010000",
    ],
    [
      "ETag",
      "6BvndKm6qq4kWRQM0hEu6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2MjgsImlhdCI6MTYyMDY5NDAyOH0.fbmO0UVSnmAaBBVk0lYUmQgoJWhW2vhJY-VIISWwsO3srg76mRNmemcAEfEIIMNhevOCSiq1DTstSWbbs6kejqspsdccb269n3MkyU9uxphLKbrCsRT8JdLAtYP7rVEhZpuZGyM5UV4A7j-Vjw43f0RUonCY2SGFWO0UuX4AY4ECWBbOjrNlvg1_z7BB0mGwctNshTZiY2WYGP9l91T1VvmA7mrgkciVy-oNJCetH-MGQJpduUt-jnBi8PeKR72C-DJeZBtCGQGnfL_kRaAtRX2lmYhHh60v4K2aQvFw6ArvZomnFliOyWFTepITkspbYYD1GJWbyL9n5yC7tWR93Q"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "1dd04b7282300000d0bb64ad0e23014277800203080a52da6e32883106905f100d4eef5ea74778ef05f2a2209ce3b1ad48033e80c8d7faaa58f91d32313dc761a4faadb8b3d38e538b07232699110a77eda481891232d929b297fd617271205da09c3d8a1bddc3781bc756cdfb59eb7e980e275f5270f2b9bd2263b699a7a83455c224d6ef650821dd30648fd5da97754c4b056f95c023f5b92ea4aaae1ccf7958bd83aed53caba528e9f1f43c5c964d134db5540994df697d636a90df44a2e16fb77fb4c6318b04dc6decab7609fc366c3aee41c93a2ef763ee7d810520cf8e0d8463f6e6ca8aae2fc0bf1d8fa223ef0093e40319c0ef1f0592a1201a010000",
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
      "Tue, 11 May 2021 00:47:08 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1620694024143",
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
      "ff85536b6fda3014fd2b91f7710502094f09ad08d2958d842e8476d334458eb9c9dc8698c60e5555f1df77ed14d6aa52fb29b6ef39f79cfbc813b9e3c5868c48c2b3fb0acac74fb72221670414cdf0f566f6cda3ce55a7f2279ffdefeb9f53e64dd9c3788c08ae59926e773934a4a84a0672b45e35b352543b5a0ad1c0440da7d1ee75ecded0b53b6edb759026214f17bcb843f25fa57672d46a1da59b9910590e74c7659389ede9bdb5efb476a5b805a664ebb5620b4564eb5dcd2fb9605471518cd72bd4af2494316c29cfd1c17fe226397f9db9c9e9b6992178cf1950c6445528ed0a533051a43cab4a93958c9e8871f9e24056dec29b46161379b52de2826ee1ccda504563f5b803eb225cfad63cb85886fe249a2f837835bdf4fc4973ba5cacfd6065dd5c7aa167299ae460b8d6d83a37b7002fa8bf01a97861d423fdac959ffb337f3b144d4069097530eedb3dda1ed8c3244dfa2c1d38dd24b521490649bf4b9dc4664317dc4d02147946d4b068218a5e0f114397c63dda19c46ebb37889376d28e996d0f80761dd7e9b6c9e18c3c945cc18ccb9d90bcee10b909e7911747e13a984e22cf9490d22a57b3da982ee0a547850522e89d9a0e3aca052ae976cf83c80b27d3687eedd5135e4046d9e3ea1e679cd25c02a26989cd5350fa62830d23c1c4f766083613bb3a062519fd7e22bae7dac58b969fe8110e50db55e64b5651380fbe1a3b47c435cd2b03d9d7075d46ca736dfaf00781b8a27512f263ed85bf48fd14420a2514ece36122d8043efad18e6b8f505c7c54910aefb8394c6a0d5642bd41dc147b620fba9d3e31e052bd89f59deeb1673a87ce085b28d47341f5da639db558254f200ce2f003d3abc33f4208c65274040000",
    ],
    [
      "ETag",
      "WDJEa3P2uMA+MKUXCcECcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1620694024143"
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
      "3010c7bf8b795c2ab590151a898776ebb64aa12d4da00f138a8c7d09a64e2eb39da2aaea77df39b08260527849eecebf53eefefe67cf36aa922c62f7aaf8d380d99d14e0ae7db002db6867e955636581050c1c2f8884f5976532ba45bed9acd7c979a3c3c5e8e2e9f292082b1ea0e42cdab35c81969645bff7ace225509b40dd9455d6660173bbda179374359bffa4bc44e9f3f94d1c8f27f1941d8263a3e48e672dff89b6bb43c01ef17e053918a804f8596a838f20dcccaf6979596be8596c8c00cb5ab83d280c363537883daaf4ce7a83e1697f380afba7e1203c234ea3e04e6145e84d42e331878eeb153ed1926ce009d3c6b470de3eb75457b25dc487b3793a0cdbf9de025c086c2a977582b932d63d8bf70f7c11e13da9f92741ba29a5bba0022a09a68b5275c6a534606d278936e3757dc4268b45fc51954a1a54b21bdcaa0e40bbed11f8112fc6ff9396fcf5aad5f7713afd405847ae3922e9ec6a9aa4e3aba5e7ee5e8c30d939b04b83642a0bde4f837e78f1f57cd87fb6d837f4b6a3ef44ce341030c1e94ff9a51c8b72ae2d1cfe0269c620e387030000",
    ],
    [
      "ETag",
      "eW+PS9VoakkWWS7ul4O98w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1620694024143",
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
      "eb",
      "4e",
      "db",
      "30",
      "14",
      "7e",
      "95",
      "c8",
      "fb",
      "b349bd2425346d25c43ac85850494b9a82d034b58e739219d238d84ea70ef5dd7792502e4302a9526a7f97f39d63fb81dcf13c262312f1f4be04b9fd742b22d222a0698abbc22d4c13cecbbf97526fc7b36cbb394fcfd2a32364f04aa5e8bac8a0ad442919a8d162de49a5280b2a8568a351db6e5bfd9ed91fda66cfb6ec039429c89209cfef50fc5beb428dbadd7de94e2a449a012db8ea30b17edaef6e7add428a5b605a755f57ec6211d57db7e6712618d55ce4478b39d62f15c825ac29cf30c1b3308ebebe76ee70baeea448de7006943151e6ba4a85164ce4094f4b59bb92d103a953bef843e6eec43d098d55a6372b832a63b994a0ca4cb78c158f1f778a3be37b30bd3056d85ac233502be3fa871bb846c3f17c63e1fbee3c343e1f7f31ce82e962667cbba9b156638c4962509ae7758e90461954191e27e5bd3d9e4a403555d0804bc7ec536b600ea32472583238388c1213a268103987f42032d9d0063b8e80a24e57eeb58ae6228fc0b2868ee3f49965daccb207566c597068468943c1ee59c01812684c762df247720da75c1542f1665ee43af0427719060bff641cba751b09c5e99c36e1aa265ee6d4d82492dee96b57a15c60a56af89e1fbac1f824f4aedce6bc279052b69ddfe389273453806c2ae91a34c80b11e3d0c86c3af7426fea8f27a8a80f71b6672832faf9f02c08b7453d655d7fc93808c637a8a152d2ed7f18e6e8db64b77b51ee8a66654da9f9f5aaf1df3400b1b097e7558fec7eedf0d72278af1b7772b970831bd26c059080849c7d7cee48ae818f5ee7fead20155f0b56511ad778c998aa6a3009cd65e3",
      "eb3aed5e3d744c8bd464a9df60c3beb39f6ae55139c21a72fdd850f356ea395550a99e4808e21df13dff0cd17ffd8df7e4a9040000",
    ],
    [
      "ETag",
      "oEp00eJuzQrtyAPlyvJgGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1620694024143"
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
      "000002ff6d90d14fc23010c6ff97f3754336e60c4b78008342b2804c78404348e96e73b0adb3ed2484f0bf7bad4679f0a5edddfdbecbf7f50c87a24e21825d917fb4284f3739ea857924a8da522bba1a512b040750b39cc8e361ffca97f793e17a7e2b77eb452fd1e9fc381810a1f83b560ca233640596a982e8ed0c35ab9064dbadb41b09d3a7c6741ee3f9704965255253ce56713c1cc563b83857a2e6f02798ce96e3a771f29f647371602f76096628b1e6683c3452ec91eba989a758d594e82ad14a8e0a2c6c07b9146dc3a4102e75dcc0f542bf1bf683ae1f78418fb85270a60b5113ba7a216ba0856665228e140e7c02a47d52cecc9e9fa67dd7ef78becd614acfdabb06fa41a717fece7d33dffc6c1e9d34aa6729c8a54263d00bbbdf761f8489a0299a962d3ac019fdf6a4d01065ac5478f90250269c4acb010000",
    ],
    [
      "ETag",
      "wkjZcT7HAYO/rbYQ3RtdOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2MzEsImlhdCI6MTYyMDY5NDAzMX0.gIZ7IDqbNPJ82M1aGJQxoy_3S4BY11EVaLeKmFD6vJEmxFsbLQaQ5tLLObb9ksBODvboWlMw04ccku6C6y1SG0WlAkDo6BVE_gsGBk3I3CfI7VPaljqgr-dvGqYFoiITCsr-QikrOuSQUDJ18n9D9BrfszdtILmEP9H_axPrCan3VtgSLjN1bbY7E6ZM2NAxms_JDI679zGp34z0tf4-chi_uWod-bs3NYQhRTinBdq1SZKrx52-0cSJ2HFMrr8kMKiUVGraMTL7vLi0an5X-rb1iMk4VEA7Cd0S8mW4hOLglnpA8lcOW92cdiMgIRMDQPLxMcEQoGFLn5eeINT_kQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82300000d0bb646d1da2904a7750a07694424051d83031064cf9988118239ddebd4e8ff0de0f2094b2712ce5b5613d78030fb2b0e774be112bb7ac59be8f153c174db77577ad0991b4226ee501937eea19e6e143607f94767ac6ce6d9717cb4c37f450fb1e1a9d579a781d99fcd345e1629d460733aba23aee57886c778af81b69dcb81141c5e370ea8301f5ea4aebd639778b20483045fba47543c3495833d96be9423d7de24c7b50e40b0c2be2b6d57b985fa0778247c43b5a9509ba0b6c6bb3cd8ecaf88eeffd5e8b501775ac3812cb64eb7f59f205cc00d3820f6c2cf993bbb46c7b06feeda57c08f60c701919d8007eff00250ba18c1a010000",
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
      "Tue, 11 May 2021 00:47:11 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1620694024143",
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
      "536b6f9b3014fd2bc8fbda249010f290a2354b689b29212b9056eb3421db31cc1d608a4da7aeca7fdfb569ba5695da4fd8bee7dc73ee8347f49b977b34458467770dab1f3edd0a824e10533883d76befebcd9760717ee9fecd6fc7b6b8595e84f3cbd90c105cb3242eaa9c75a4686acae4741775b35a3415ae85e840a2ceb0e3787ddb9bb876df75dc01d024cbd3352f7f03f99752959cf67a47e96e264496335c71d9a5a2787eefddf77b552d6e1955b2f75ab10722b2f7aee6e75c50acb82867bb08f41bc9ea841598e7e0e03f714f4e5f67ee725c743300df73ca30a5a22995760529a828539e35b5c98aa68fc8b87c714091bff617b14545de146552e2829d587bac70a21e2a669d85db8db50aceb6e1661eafb641122d2efccdbcbbd8ae779b20b2ae2ffcd0b7142639335c6b669d9a5b0017d0df33a97869d463fdac959ffab37a3b144d0069c9da6032b23dec8ced0949c988a6e3c190a43623644c46433c20369db8ccdd13868167440d0b97a2f46c4c1c07db89371a92c4c5139a4c1c679ceced3e238391374cb1830e27e84fcd155b725909c9db0ea1eb7015fb491cee82c53cf64d09296e72b56c8de9025e7a54502080dea9e9a0a35c80926ef72a88fd70be8857577e3be135cb307d88ee60c629ce250334aea1798ad51bb18786a160bef197003613fb760c4a34fdf18874cfb58b172d7fa6c730406d57992f8ae270159c1b3b47c415ce1b03b96f0fba8c94e7daf4e127006145db24e872e787df51fb14b294d5aca41f0f13c026f0d18f765c7b80c2e2838a547087cda1526bd09ab51bc44db147f6c071470e32e05abd897903f7d8339d436764052bd55341edda439dad58239f411084e107a657877ffd5dc82074040000",
    ],
    [
      "ETag",
      "W6JZBNCGQ4zlj80oZDHRAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1620694024143"
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
      "8bf73822858e642b521f4897b69168d210aa3d4c1572ed83b9351cb34da62cca77df997669b54ea22f7077fe9db8fbfbcf9e3daa46b298ddabea670766f7a102b7f64106b6d3ced2abc5c6020b18385e1199af7f9b6c5d7fe3938f8f57a19c9d5e24e797d5d9191156fc809ab378cf4a055a5a167fdfb386d7406d02755737459f05cced5a5fdce4d9627949798dd2e7cbdb344d66e99c1d8263a3e48e173dff8eb6bb43c01ef03e83120c3402fc2cadc107106ee1d7b4bc6e358c2c764680653ddc1f5406bb961bc41155469351383d194f4fa3f14914469f88d328b853d8107abba1f19843c77586bf6849167ac2f4312d5cf6cf2dd595ec17f1e162994fa37ebed7001702bbc6158360a98c754fe2fd059f45f897d4fc9d20dd94d24350058d043344a9b6e0521ab07690445bf0b63d62b3d52a7dab4a230d2a390c6ed500a0ddf6085ca4abe47fd292bf5eb4fa9ae4f3378475e49a23922faee79b3cb9bef1dcddb311663b07f6c62099ca82f753388ebe4c3e4fc74f163b476f3bfa4eec4c0701139cfe942be5585c726de1f0071857f9e187030000",
    ],
    [
      "ETag",
      "TQzrRQmWa5+kH1dB9FACGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1620694024143",
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
      "537d4fda4018ff2acded9f2d41a0d09642621cc3ce35c1e24ad1b96581ebf55a4f4bafde5d35c4f0ddf7f40aa233d184a4dcf37b79deee9ed01d2b12344231cbee2b2a369f6e798c5a882a9c41d43d7b64f2f4f7cde65788071336db58de64333e3e0606ab5512afcb9c1e495e0942e568316f67825725169c1f81d19173643abdae33b4ba3dcbb4fa2093344fa7acb803f18d52a51c753afbd4ed8cf32ca7b864b24df8fa39de79e8754ac16f2951b2f33a630792c8cebb394f724eb062bc385ecc217f25a958d235663954701026f1d7d7ce6d86d7ed0cc80f8c504c08af0a55570516841729cb2aa15dd1e809e92a5ffc41736fea4d2263c5b85ce2b25c19581acba5a0b2ca550bc2c92e52de19dfc3d9b9b182f6529653b932ae7e78a167341c3f301641e0cd23e3f3c917e32c9c2d2e8c6fd71a6b1dcca1a2844ac50a5d4f84e39cd6b5ec26e6bf5d532dc00a4bda80cb41d7c1a6db1dc6693c20a9dbb7e3b44be3d88d0736eec75d32b4a895c414834ed5ee5a850b5ed8ae65bba4969889e35a6488075dd2b7b1eda603c7e927c9d034716af6d1b6851e0553f494c9924bd6cc0d5d857ee42da370114cc691a7db48314ce8b429ae6ee2659d0a9a04d23b7d6d6b9471c8542fc10f222f1c4f22ffd26bf63ea519269bf93d6c3ec5b9a4c0c602afa9a2e29c27303474319bfb913f0bc65350e8655eec19128dfe3c1d04d1a6d45356fa8bc66138be060d16026ffec3a00ec742dbed8b749738af3445f3f5a9f17f680064422f87530f6dff6ee1d74270bf1b77f473e185d7a8098534a58216e4e3bd0359031fbdd2fd9b012abc1ac822159ce1921159e7208236978dad75b53b75bfe7d843a4c942bdc106437b3fd5daa376a46b5aa85d43cd9bd173aaa14a3e9300843b12f8c119a0ff00599fdf42b1040000",
    ],
    [
      "ETag",
      "8GwisDZhyXRa7CiOy4ECyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1620694024143"
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
      "d16ac24010fc97ed6b0226da80011f8ca4ad34d536ad502c2267dca4d1241bef2e2d22fe7bf7ae057de8cbdddeeccc307327d897cd1642d894c5a14379bc2950bf982145d5555af1d552a3101c402d0a66de7acbf9537e586493e541056297f71fdfefc6a3113354f689b580f0047989d55641f8718246d4c8b2f55a5a47a6e9636b90683e4fe2f18c819ab606982d92641c25319c9d2b59bbbf48a6b3b7f83e4eff93acce0eec6893628e129b0c4d8a56d20e333d350595a8db0a5d459dcc508125db4521a96b852472197103d70bfc5e301cf4fc8137e833afa24ce8921aa62e5e391a68d2a24ae99beb81cf0469476e9adbf38b612d3bb42dccc3b3e1aed7b9a8d465ef9bfdeacf373a6a54cf9238a342136fd8fbcd3a21935f732f63ee4026f8b31f4a0da1753bff001bd3fe77ca010000",
    ],
    [
      "ETag",
      "51ZOMfqUcCZqs6ajf3KXFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2MzMsImlhdCI6MTYyMDY5NDAzM30.XxLNJ1-w40yaR9nHG50xPmaawD3EJtL2v01FcOzvLJrVYZh833rj7Q1xz8E0OHWF28H0muU8nM2-KrW-o6V1HOrI1m8uSplvoQ5mkluZdEbn1MMeDXiV-5L_fAt9CNKNPggKp1hoi0xBDYE2ZF36lbNTi2m6cz1KeTz4s08rbjdZx-86z9JRAwXquw8sM93Ux0xP_DPl6s7zWhZUKgo9sFJK7tlMrqUjXUf-cFXAs5f0teXL6ScOPeNTxzoeIXPTl9fo0cUp8IGgQijGqsuDI41P8dZqAMu8wVZ3nRR8V3CMCPIvd4v6RfAnqTnZCZSddDXzxF8I5bR5sUciatcCvA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb642d0e9f11a4bbf05350048ca3c50d4321420a26e10f767af73a3dc27b3f20cd32dc7549cf2a4cc1075852595f67eb03df1a4991b37b274ac3c6fe6eb2231c763d228e47f585b3d86fb5f2061f039686237d5456f4a9cd775fcb9dc0e81f9db1d5fa257648dd9c835046cd3452721e05642eb1e05d04fe720bbf9adc1752717b51722f37551e30b1f622e43fb16592301ccb53b4bbed0f05cd4f10f7cc1562692f13c184c53049437e8d5f7b0fd1f95e42ab496f5f750411bf2a0a8317bf65ae6563517c527e4de760a47559cfaa0dd50cac009e39697197903757d9e8fa0afcdb937ee1f81d60e0b4c52df8fd03f6b61f691a010000",
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
      "Tue, 11 May 2021 00:47:13 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553ef4fdb3010fd5722ef2b6dd336f497548d52028bd6a65b9ac2d03445b673c90c695c62078450fff79d1dca4048f029b6efbd7b77ef2e4fe4569429991026f2bb1aaac72f37929123029ae6f8faf02b77e945957fbf2a4e6faef5b9a0a7cbf1c3748a0861588a6e7705b494ac2b0e6ab259b7f34ad63b5a49d9c244ad61ab3be8b983b1e7f6bcaed7479a82225b88f216c97fb5dea949a773906ee752e605d09d506d2eb72fef9dfb5e6757c91be05a75de2a765044753ed4fc5a484eb590e574b346fd5a4195c0968a022bf84f4cd9c9dbcc6d41b7ed1cc1f78203e55cd6a53655610a2ecb4ce47565b392c913b155be3a90b5bff0e7b1c365516fcba4a45b387252aa69a21f77e09c47aba51384e7ab68398b835598ace7dffce5ac3d5f2d36cb70ed5c7df323dfd1941560b9ced439b1b7102fa89f82d2a2b4eab17936cacffe04ef87620828ada00926437740bb2377cc3236e4d9a87fcc3217181bb1e131ed33978f3df05206147956d4b268294b0e239e0e875ed2e394255e96b1844197269c51d71b1f7747830123fb23f250090d6742eda4128d43e42a0a623f89a34d389fc5be6d21a375a1cf9ac24c03af6bd4d820823ee8696fa242a292b13b08633f9acde3e0d26f26bc809cf2c7f51dce38a3850244d30acdd3502d658a869170b6f4cf106c27f6e3105464f2fb8918cf4d15af2c7fa1c7384053aeb65fb28ea320bcb0e51c1097b4a82de4be399836325198a2f77f10882bda24213f377e744d9aa70832a8003dfe749808b681cf7eb4c3da2314171f5594c63b6e0e57468357d06c90b0cd1ed8fdfe70607f534d2bfd2e361a770f9e991c26236ca1d4cf0d356b8f7d3662b57a016110871f5aaff6ff004bbe850c74040000",
    ],
    [
      "ETag",
      "wXg0aGrgKWlBjYtFiaBM9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1620694024143"
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
      "ff8d93516fda3010c7bf8bf71a24e832ba45ea036c8cb1a55020150f5315b9f625b8737c99edd022c477df396de9b44e4a5f92bbf3ef94bbbfff39b05fca4896b05b55fe6ec0eedf95e0972158816bb477f4aad138601103cf4b2297cd032cbe2f374ee266ea37d9f6c7743bbfbfb820c2892d549c25075628d0d2b1e4e781195e01b509d44d65f2368b98dfd7a1b8ce56b3f994f20a65c8e7d7693a1aa713768c4e8d927b9eb7fc1bda6e8e11bbc3db151460c10808b3d416ef40f85958d3f1aad6d073d858018eb5707b505a6c6a6e117b54e99df706c3b3fef053dc3f8b07f17be2340aee151a42afd7341ef3e8b95ee13d2dc90681b06d4c0b17ed73477525db4542389b67c3b89def6f800b818df179275828ebfca378cfe09308ff929abf11a49b52ba0b2ac148b05d94aa732ea505e73a497439afeb13365e2cd2d7aa186951c96e70a73a00ed7727e06bba18fd4f5af2d78b565f46d9e415e13cb9e68464b3cbc93a1b5d5e05eee6c908e3bd077765914ce520f869d08f3f7e381ff61f2df61983ede83b89b70d444c70fa53be29cf92826b07c73f126100d987030000",
    ],
    [
      "ETag",
      "QuxeOJQWsdoWGtWThKGhNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1620694024143",
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
      "eb",
      "6e",
      "da",
      "30",
      "14",
      "7e",
      "95",
      "c8",
      "fbb34940ae1040aa3ad6665b261aba105ab16902c77132b7214e6da72bab78f79d24d0cb2ab51252b0bfcbf9ceb17d8fae5991a0318a59765351b17d77c563d44154e10c768b1ffeddb7657f7e958fdcea6fb4d44fa7d1dde4e80818ac5649bc2973da95bc1284caf162decb04af4a2c38ef825177d835079631183986e5988e0d3249f374ca8a6b10ff56aa94635d3f94ee659c6739c525933dc2370ffbfaada597825f51a2a4febca20e45a4fe6acde39c13ac182f8e1673a85f492a567483590e091e8549fcf1b9738fe14d2f03f22d231413c2ab42d5a9c082f0226559251a5734be474dca277fd0dc9b7a2791b64eb0a26b0d4b6db5125456b9ea686b96ec77ca6bed73383bd3d6d05bca722ad7dae5572ff4b496e307da2208bc79a4bd3ffea07d09678b73edd3b2c13a7b67c89250a958d12489709cd33ac57e56fecb03aa055861495b70e51a036c0e8d519cc62e4987763f4e0d1ac7c3d8ed633b36c8c8a14e12530c3a55bb372a5cf0c2b64c776439d831fa2e19592e354c3c8847980c709a5843dbea9b761ad314ed3ae88f608a9e325972c9da89a1cbd08fbc55142e829349e4356da418c673da86ab9b789a534193407aa5af5d8d320e95eaf1fb41e4859393c8bff0da139fd20c93edfc06ce3cc5b9a4c0c6026fa8a2e28c273034743e9bfb913f0b26535034c7787e604834fe79ff2888b6653365d57cd1240c274bd06021f0f63f0c720c1cb4db3d297781f3aaa134fc66d5fadfb60032a197c7958576bf76f0eb20b8d9ad3bfabef0c2256ab7429a52410bf2f6b903b901de7a9f87d70254782f50452a58c32523b2ae41046d2f",
      "1bdb3469f76adb710d133564a15e60c3817d986aed513bd20d2dd4bea1f6b53473aaa14a3e9000843b12f8c11740ff01c57f9591ab040000",
    ],
    [
      "ETag",
      "nZIxJY5Sjl97uzTY/DLTxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1620694024143"
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
      "905f4fc23014c5bfcbf5754bba49165dc2c3d0a92484e8005f0c2165bb1b836d1dfd8322e1bb7b5b8dfac04b7befe9efb6e7f404bbba2b2086755ded0dcae35585fac516192ad368455b2f3a85e0016a5e11f991ec178c1bf6397b35e9e621490f382b92e19008956fb0e5109fa0acb12914c46f27e8788b34b65a49772361fad85be53e99a7d4b5a2b0dd74319924a3490a67efdf4cbffbe3c7d379fa9866974696670fb6629d618912bb1cad855e8a2de67a6cd329def60dfa4a1899a30207bb834a0ad37329844f8a7fe30751c8a2db010b07c1e09ab846e45cd7a2237431236ba085e64d26de291b8404485752ccd2ad072bb390f92cf459e0b2582970162f42e12f145a68f9f3c4e8a8513d4b4176155aa741c4be7ddf099b4553462d0d7a9073faf5a75a435cf246e1f90b339540f7d3010000",
    ],
    [
      "ETag",
      "xAqU0au0zSVuEhFAEveSdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2MzUsImlhdCI6MTYyMDY5NDAzNX0.SM-zDHtlDOlh17kfKhOCxLuPL_aEl1kxdi18TZh8sZKpJnCJ6Ottg2vGe1jEletMwDEojBi9Atw002NFD6XsW8fL-GePIvr-tA090woR1AG1HrFrUuZ_sBnS9NMl0b2CTGqNGN0oF7XV4II5EO19cdV7ImfRL7TJGYa9j-FeD6vvkMpVfZ-gFHdExl6dp7nrhm_gJoF2uOp5bFbbLMca-hyCAFfjS6kJGWceFasKqb5IRUxuLVssA1bJm0AJWefCvtOJ7d9sfpgumhUFLqVAXVWWxRUjqE9XCpd1Za2oI4zXi776YNkTy3fkEiO32Prfxd646-1OlHwAet3aQetnuA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "d9",
      "72",
      "82301400d07fc9b33ac5b248df841226225a0d28f0c2b05cd9239380543afdf73afd84737e50926520443cdc1b60e8033d93b5beca564ebf31e20234768f587a0432587b7b770a15b164a93a1465743b3857c3316dab4c2d65e610b414c2e379341b5f93264e66799d983568177ae85c3e034897499f7143a631cd6a7a8eeed53991a0c5ede855b42c474e55c3b9ca79e51348b64bfa2826bf90dceb69b9c94dcc4421b09dfb9adc675d1704f8e181fbb50d6f935a1068c8d1fb54b84731dbd1b7b66b555bdad8871858bc1ff27a5d356603811b12861608befb8a8388ab17f75dd1f505fab7c7c3b38757800109078e7eff003c1640121a010000",
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
      "Tue, 11 May 2021 00:47:15 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1620694024143",
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
      "2b91f771b44ddba42fa91a551b46519b429a82d834458e73931992b8c40e1343fcf75d3b948190e0536cdf73ee39f7914772cbcb844c48ccb3bb1aaa872f372226470414cdf0d5df0d7e2cce447d9dfbe7c9e6ebf02cf85b6417d32922b866495aec73684951570ce464b76d6795a8f7b412a285895ae35677d0b30763c7ee395da78f340979bae2e52d927f2bb597934ee720ddce84c872a07b2edb4c142fef9dfb5e675f891b604a76de2a765044763ed4fc960b461517e574b745fd5a42154141798e0efe1393f8f86de636a7453b43f03d6740191375a9b42b4cc14499f2acae4c56327924c6e5ab03d97a2b6f1e5a4ce4755146252de0c84aa8a2917ad88375126cd6d6d23fd904eb59b8dcf8d1767eeaad67edf966b55bfb5bebead40b3c4bd13807c3b5a6d6b1b9f97841fd04a4e2a5510ff5b3567eeecff2fd503401a52534c168680f6877648fe3341eb274d477e3d486381ec54397f6639b8d1d70921828f28ca861d1529443da4bdc1eb891e3da4ee4a42e44b1db85c8a51446098d870963e4e988fca9b88205977b2179d32172152c432f0a839d3f9f859e2921a575ae168d315dc06b8f0a0b44d007353de92817a8a4dbbdf4432f98cdc3e5a5d74c780519650fdb3b9c714a730988a615364f41b51609e8c59eadbd0582cdc4ce0f4149263f1f89eeb976f1aae52ff41007a8ed2af325db3058fadf8d9d03e292e6b581dc37075d46ca736dfae9170271459b24e462e705d7a4790a20850a4af6f930116c029ffd6887b547282e3eaa488577dc1c26b506aba0d9206e8a3db0fbee70601303aed4bbd8d8ed1e7aa673e88c5040a99e0b6ad61eeb6cc46af902c2200edf37bd7afa076e94bfe974040000",
    ],
    [
      "ETag",
      "NU6ZDJouYlNPdO+7JRzmgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1620694024143"
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
      "4fdb3010c7bf8b794da5b60bdd88c443cb0a740b6d698378402832f6259839b9cc76da6555bffbce01ba09268597e4eefc3be5eeef7f76ec872a258bd883ca7fd6609aa31cdcb50f56606bed2cbd2a2c2db08081e33991dfb7c3c78b5fbf9be66cfe6d09e7c7dbfadadd6e4f4f89b0e2110acea21dcb1468695974b763252f80da04eaba28d3360b986b2a5f5c27abd9fc82f202a5cfe737713c9ec453b60f0e8d923b9eb6fc07daeef7017bc287156460a014e067a90c3e817033bfa6e545a5a167b136022c6be1f620375857dc20f6a8d23be90d46c3fee824ec0fc341f889388d823b8525a1376b1a8f39745caf704b4bb281274c1bd3c259fbdc505dc976111fcee6c9286ce7fb17e042605dbab413cc94b1ee59bc57f04584b7a4e61f04e9a694ee82722825982e4a552997d280b59d24da9457d5019b2c16f17b554a6950c96e70a33a00ed3607e03c5e8cff272df9ebaf565fc7c9f41d611db9e68024b3abe93a195f2d3d77ff628449e3c02e0d92a92c783f0dfae197e3cfa3feb3c5ced0db8ebe13395343c004a73fe5523916655c5bd8ff01d488eb7187030000",
    ],
    [
      "ETag",
      "Kw2hGxzyyCNJPeF5wuQtWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1620694024143",
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
      "40",
      "10",
      "fc2be8faa555fd0063836d294add84a6280eb6314e1455957d1c8b730d70843b525991ff7b1788f3aa944848c0edccecece31ec82dcf22322621dfde9550ec3efd1121691150748ba72c3d9ddbfac562e17fa5e73797f6d92808ce17474788e0154bd2344fa02d45593090e3d5b2b32d4499d34288360ab50dbd6d583ddd1af5f55edfe89bc89390c4539edd22fb46a95c8ebbdd43eece56886d0234e7b2c344fa74debdef75f342fc01a664f775ca2e6691ddf7931e278251c54576b45aa2815242b18694f2042d3c33a3f0db6be90ea769678be07bce803226ca4c55b65082892ce6dbb2a855c9f881d4365f7c90a533754e026d23156a6e342ab5f5ba005926aaa56d78f47892df6a3ffcd985b6c1ea629e80dc68573f1ddfd11a8ceb692bcf739681f6f9f88b76e6cf5673edfb751d6b1da4d14d0452f1acf612d03081cac763bbdcff875411a8a2129ae0dad62d6a0cf5511887368b87e6208c7508c361680fa819ea6cd4877e1402459eaad46b16cd44c6a8a9c3c8b24cc3a0a661f6862658161b80318a6c8822cb1ac4100e8d3ed9b7c8df822b38e5321792373d2357be1b38ebc05f792793c0a9cb8829f6e7b4315715f1d2a7c22211f44e5dfb2aca0566aa06e07a81e34f4e02f7d269663e852d65bbe51d4e3da6890444d382a6a0a0b81011368dcc674b377067de648a8c7a90f3034292f1af876742b0cbeb2eabfa4d26be3fb9460e2d0aba7b13431f16b660ff22dd254dca1a52e3ebbf46ffbe0910036b79feeb91fdef3d3e2d82cbdda893c5caf1af4973e4430c0564ece3b923b80e7c78470f1706b17865300dee9ae2b8654c56495801cdb6f1b4b6fbc836ada1dd2735b8506f63b63e300e6dad342a454821538f153517a66e54152ae5130883b8249eeb9d",
      "61f41f8aba52d4b0040000",
    ],
    [
      "ETag",
      "cmDP70MQQR+aKhV7G9TTKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1620694024143"
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
      "5f",
      "4f",
      "83",
      "30",
      "14",
      "c5",
      "bf",
      "4b",
      "7d05e5bf42b287cd10c56c8b32f6a066593a764136a0ac2d2a59f6ddbdad262ed197f6e6f477da73d223d957ed9644645395871ef87051827c52430aa2afa5c0ad63ad00621090b444f2b9ac3eaba17839b89399eb5fb9194dae1fcad1080991bf41434974244505f55690e8f5485ada00dad66bae6f444c0e9d52b264162fb2f1ec11a5866d95345f4ea7e3c9342627e3ccd8ed7f4dc93c8befe2f43fcbea64901ddba4500087360795a3e36c07b94c5445419bae0653b09ee7208886f541c959df51ce98898a695ba61d3856107a96e3d99e8b60cd722a2bd622bb5c60362299a475ca3eb0217110e07ac4b2855edf51b62ffd1bcbf7433bf4e250f7d1aa8ef9870b3c24cf394771ab9f87268304f1c819a616a002db81f51dff96a94a12ab4ade8341728a3f705f491215b41670fa0217c3f0b3df010000",
    ],
    [
      "ETag",
      "YgixiyfZq3BM35/3TaI7Jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2MzcsImlhdCI6MTYyMDY5NDAzN30.a4rToQ_M4b2BXpNrvOPhDUtPgh7vsCdC5II1CJhcaaBbu0saURcW9U6HbTfoz4lBgkPY2CXEKupVP3wOVWDDgNWHpFRKrEkBQnffp06VEdD-pV9psfV7PsqIC_8g-nLAKyyoZcgblG24_RQS2QIct1OPPRDXVHM9uRC8iD5Soavb4L00wMCBdnMD5_ywrV9bieiVy3a8G4wHTD11d9cH3ik0Q7f2qPlumqwnorPDY_p6yYoYQGCvX2d9Xx9vg_ycSXGfMAVRQyaSkVcpxsqH7VZRhjuAx60b7ym1oz8fD0QWnr8C33m15hFXjDOqDEKrBoiYRn7HBKb1sz1E_XzbNQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "646d1c0454d225229fd222e2077093811040111223c8a7d3bbd7e911defb010921f4f9c42dab68033ec098c8684ee62ed7745cd0056155ef6a6b6804ab2369fb93bac29b3c353603845e1d6c15591ef3981b6a15dfe4d8269a5ff43059974ccf0e96afec4d5b3c42681551ea4966ba0b32caef32bb2f7923da75963c98aad5fe3e2f6defea7cb1da905e8d7290214dab5cbfb827545bde1d99243b627328a6291e83727bc397780a2f6193c2e8fce068c7a7d72bdc51d58ea4f1b088be45eac4bc3d8f3d2575e7dadd278f32b34d90d3d51e98013af0aba04f7c7d7395254233f06fc7edc8e93b40a789a002fcfe01395fce7e1a010000",
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
      "Tue, 11 May 2021 00:47:17 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1620694024143",
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
      "3014fd2b91f75a2040020109ad08d2351a842d8456d534458eb9c9dc8698c60e5557f1df77ed94ae55a5f629b6ef39f79cfb912772c7cb2d199394e7f735548f5f6e454ace08289ae3ebf7bb87c0b7dd9bd5b4985f05452fcffcbf693e9920826b96a4bb7d012d29ea8a811c6fd6edbc12f59e5642b43051abdb6d75073d7b3072ec9ed375fac89350640b5ede21fb8f527b39ee744edaed5c88bc00bae7b2cdc4eee5bd73e875f695b805a664e7ad64075564e763d1af85605471514e366b34504ba812d8515ea085ffcc6d7afe36759bd35d3b47f08133a08c89ba54da16a660a2cc785e57262b193f1163f3d581acfd853f8b2d268a7a572625ddc199b5a58a26ea710fd645b45a5a4178b18a96d3385885c97a76e92fa7edd96ab159866bebfad28f7c4bd1b400c3b526d6b9b9857841fd2d48c54ba31eeb67adfcdca0e0fd583401a52534c164680f68d7b34769960e59e6f5dd34b3214dbd74e8d27e6ab39103ce36058a3c236a58b414658f0d47cc73b364cb06c3c4c95c37493dda4bc01e8efa8e47a9ebb8e478461e2aae60cee55e48de74885c4741ec2771b40967d3d8372564b42ed4bc31a60b78ed51618108faa0a6a38e72814abadd4118fbd1741607577e33e105e4943daeef71c6192d24209a56d83c05d5526cb161249c2efd3982cdc47e9c82928c7f3d11dd73ede255cb5fe8310e50db55e64bd6711484df8c9d13e28a16b5811c9a832e23e385367dfc8d40dcd12609f9b9f1a31bd23c4590410525fb7c980836814f7fb5d3de2316371f65a4c23bae0e935a8455d0ac1037d59ed8fda1d71f1003aed4bbd8c8199c9aa673e88cb083523d57d4ec3d16da88d5f20584419c7e689a75fc0705ceed3677040000",
    ],
    [
      "ETag",
      "KkwIE05YOAlDVIl2gfEzbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1620694024143"
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
      "516f9b3010c7bf8bf7582241cbb20ea90fa44bba48346913f23455c8b50feacc70cc36a9a228df7d67da65d35a89bec0ddf977e2eeef3f07f653359225ec5155bf3a30fb4f15b87b1facc076da597ab5d858600103c72b222ff2389d9d859bedf3f2ece652eee2997c8ad2ab2b22ac78829ab3e4c04a055a5a96fc38b086d7406d02755737459f05cced5b5f5ce7abf9e286f21aa5cf179b2c4b27d9941d8353a3e48e173dff81b68763c0b6f8b882120c3402fc2cadc12d0837f76b5a5eb71a46163b23c0b21eee0f2a835dcb0de2882aa3281a45e3f370fc350ecfe328be2050a3e04e6143ec664df331878eeb153ed3962cf284e963dab8ec9f3baa2bd96fe2c3f9221fc7fd80ff025c08ec1a570c82a532d6bda8f7077c55e17f52f30f8274554a0f41153412cc10a5da824b69c0da41126dc1dbf6844d96cbecad2a8d34a8e430b853038076bb1330cb96e97bd292c1fe6af52dcda76f08ebc83627249fdf4ed7797a7be7b98757234cf60eec9d417295056fa8288c2f3f7f19872f1ebb46ef3bfa4ee24c0701139c7e95efcab1a4e4dac2f137a7a6fdaa88030000",
    ],
    [
      "ETag",
      "3T4AF+0UjwO+G8dv4Fdh1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1620694024143",
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
      "fd",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "57",
      "22ef974dea47d22fda4a084ac9b648fd60690a62d3d43ace2533a471b01db60ef57fdfc5a14087044aa5347eefddbd3bdf3d905b9e456448429edc1520b71f6e44486a04344df0b4d39a0cbeb769ef6c1a65e3687b99ffbd1b4d93e36364f052a5e8264fa1ae442119a8e172d148a428722a85a863a0bad3aa3bbd96dd1b74ec56c7e9b451a7208d273cbb45f52fad73356c36f7b91b8910490a34e7aac1c4e6e9bc79df6ae652dc00d3aa7998b2895954f3eda427a9605473911d2f1768a0502057b0a13c450bcfca283c3d0cdde074d348907ccf1950c64491e9d2168660228b79524813950c1f88b1f9e20f59b813771c58eb984ba55719ddc0daa2ca5aad24a822d5356b6d1c3c1ee6b7d6677f3eb5d65865cc53506bebeaabebbbd613cd9b59cbd9cc5d04d6c7934fd6177fbebcb0ceaef770ed20111a8c40699e197b010d5328ad3d76d07b7d6fa5806aaaa0025747768f3a7d7b10c6e1118bfbed6e18db1086fdf0a84bdba1cd061de8442150d4e932ba51d14c64dd1eedf5dbcca11d3b44669b464e18b5faddbecde29eed0c9813c5cce9c6645723bf25d770ce552e14afda48ae7c2f705781bf9c8d47816bca882976ebbc325716f1d2a7c62291f4465dbb12e502339577e2cd02d71f8d03efd2adc660020965dbc51d0e424c5305c8a6123ba8414e45844d2317f3851778f3d968820a73b7177b8622c31f0fcf82609b9b2e6bf32623df1f5da3864a49b7ff618bc0f7665fc86ef722df254d0bc33102f35525b8af0002373888822bfb14fe9822cd28ee6acf0c1c520dce21fc7387bf1ac1ada83c906f4bd7bf26d5910f3148c8d8fbd3816403bcbbdcfb4d432eee1aa6511abf71",
      "16992a933009d54cf24d6966afc667d025862cf52bacd769ed9b5fc62823c20632fd5851b569a69b2554a8271282384ab3aad7ff00fd485145e9040000",
    ],
    [
      "ETag",
      "42L9Z3a6BMdnCdyVpzqAMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1620694024143"
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
      "ff8d91514fc2301485ffcbf575336c4e0c4b48144294841019f28221a494bb59d87667dba148f8efde561f884fbeb4bdb7df69cf694fb057f51652d8a8e2bd457dbc2ad0cedc2243d396d6f0d4506d1002402b0a260f5844b7cbe5dd57b627316d92196e7436ebf79930f20d2b01e9097285e5d640fa7a825a54c8b2f55afb1319b3c7c675e62fd978fac875455b574f1793c9c36032827370a16af6ff51acce01ec6893618e1a6b89ce43a36987d28e5d3c23aaa6c4d050ab251af0b0df2834b58dd0442177c2280ea36edce9f6924e9c44c90d8325496115d5cc2ee66c0d2c595166f4c1e9206640fb2507cdfd78e0f6482bf4295c813bd40752a6738f9fdec5b5a4ca3bbe940c8554e5854aa2b018fd95ac7eaf1f1c2d9a674d9cc5a08b11f77a3fa186e478cb0f60758b0148c17ff2a42ca4b9280d9ebf0189bb6d06f1010000",
    ],
    [
      "ETag",
      "veg15ZZ7zRkoaNp4QebrRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NDEsImlhdCI6MTYyMDY5NDA0MX0.WyUWYr3FjXcRWmZzTqUPdYvEdn7i8mp-_cM4iFlWltZBGM1U5UZYwdS_wkwz3-X74WiRbOQlEyS1-DP5UrxbJifIH04yUfpjZoiS85ZyBtFsPyhwKq07d0Rh8Qthzza9aQ1mf0ZblQ94QQBlUQJmT_R86tApdeFP2rvuQtnnX654bvBznSE-X2u7qXQQoK_7S5FVAT85dKTS662pLmJ0zyD8_b3jSPQVWuzesThFDHbZAfs_SOrp9XIc4SE6CAZojlqM1GNIqx0xJE7bwz-B_aST3cHO3lRvimbbmRcih-luUgcL41HADljTR5tk2laW-KvV9vxJtX-MHcyK300Gig"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb642d4e916fba2b02e1a396224ab3ca44120454e4ab844eef5ea74778ef07d02ce37d4f86fb85d7e01d08ba82cb6c1936a645ce4c64edc7ad1d366c4e10db3232493caa22cbb48cf369f7ecca2fa9ab3cbaf2efbcfdbe50c32b8a43a125030eca2659a706c2e1e36d6b06969ceab896f570c273e4633da73d146acb02026ff38179aecc9fd2271ec3512d1d01999604bcd8ad55b956765a30dd1fab7cdeb8783c42d4531c0ba374dbe376b4b593533be4b0cfedbd53b94857907bf5999e7333667123a6db5aaa2e491ac12b3aaa518c6c0216804f4dd9f19e942faea241b800ff76328886bf022c4e3bde81df3f656e66fd1a010000",
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
      "Tue, 11 May 2021 00:47:21 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-13-1620694024143",
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
      "14",
      "fd",
      "2b",
      "91f75a2081000509ad8ca62b13843509a0759a22c7dca4a621a6b1d3aeaaf8efbb764ad7aa52fb14dbf79c7bcefdc813b9e5c5860c49c2b3bb0acac72f5b919013028a66f87abdddaeae07f426fa7605ebc972f077bdfaf1908d4688e09a25e96e9f43438aaa642087cbb09995a2dad3528806266a389d86d36bdbbd816bb75dc7ed204f429ece78718bec1ba5f672d86a1db59b9910590e74cf659389ddcb7bebbeddda97620b4cc9d65bc916aac8d6c7a25f73c1a8e2a2182d433450492863d8519ea385ffcc4d72f6367593d35d3343f03d6740191355a1b42d4cc14491f2ac2a4d56327c22c6e6ab0309bd9937892c26f26a57c405ddc189b5a18ac6ea710fd645b0985b53ff6211ccc7d174e1c7e1e4d29b8f9b93c56c39f7436b7de9059ea5689283e15a23ebccdc7cbca0fe06a4e285518ff4b3567e6ed0f4fd583401a525d4c1b86ff7a8736a0f9234e9b3f4b4d34d521b92e434e9776927b1d9c005779300459e11352c5a88c2ee33b7633bfd78b0719cd875db2ca6acdb8f1387756dbbdba73db0c9e1843c945cc139977b2179dd21b20ea6911747c1d29f8c23cf9490d22a57e7b5315dc06b8f0a0b44d007351d74940b54d2ed9efa91178c27d174e5d5139e4146d9637887334e692e01d1b4c4e62928e762830d23fe78ee9d23d84cece73128c9f0f713d13dd72e5eb5fc851ee100b55d65be248c82a9ffddd839225634af0ce4be3ee832529e6bd3873f08c41dad9390aba517fc22f55300299450b0cf87896013f8f4573bee3d6271f351462abce3ea30a9455809f50a7153ed91edb6ed6e8f1870a9dec5da4eefd8349d4367841d14eab9a27aefb1d05aac922f200c",
      "e2f47dd3acc33f356f81b777040000",
    ],
    [
      "ETag",
      "ZjjVZ9ahTBQeWCU9xWVJwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1620694024143"
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
      "000002ff8d93616fd3301086ff8bf9482a355bdab148fbd08e0295d2764d3340a029f2ec4bf0e6e432dbe954aafe77ced9288821655f92bbf373caddeb377b76af6ac96276abca8716ccee4d096eed83146cab9da55783b505163070bc24b2fa72363afff96d3bfabaf8fc16d7f7e9c3e56eb1beb820c28a1f507116ef59a1404bcbe2ef7b56f30aa84da06eab3aefb280b95de38b9b2c9d2f3f525ea1f4f9f23a4926d364c60ec1b15172c7f38e7f45dbcd216077789b4201066a017e96c6e01d0837f76b5a5e351a06165b23c0b20eee0e4a836dc30de2802a83f074108e4f86e3f368781285d129811a05770a6b62af37341f73e8b84ef191b664a1274c17d3c645f7dc525dc96e131fce97d938ea06fc1be042605bbbbc172c94b1ee49bddfe0b30aff929abf12a4ab52ba0f2aa19660fa28d5e45c4a03d6f6926873de34476cba5a252f55a9a54125fbc1adea01b4db1e810fc96af23f69c9607fb47a3fc9662f08ebc83647249b2f669b6cb2b8f2dccdb311a63b07f6ca20b9ca823754388cde8dcec6c3278f5da2f71d7d2776a68580094ebfca27e5585c706de1f00b54f5af1a88030000",
    ],
    [
      "ETag",
      "mW759zZv5XMV+oQkRqCyMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1620694024143",
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
      "53fd6fa24010fd57c8de2f77891f8854c5a469ade57a24162d629be672d105066e2db2945df44ce3ff7ec352fb714dae0909b0f3debc37b3334fe4816511199280258f2514fb2f6b1e90060149133cdd7171311debc6ec66924dd69bd92e8efbe3dde9292258c5127493a7d014bc2c4210c3c5bc9514bccc69c1791313353b66b3d333f49e65ea86d931bbc81390c613963d20fbb794b918b6db47ed56c2799202cd9968857cf372dede1aedbce06b08a568bf976ca38a68ff5ff42ce521958c67a78b391a2805144bd85096a2855766149cbf4fdd6274d34a10bc6521d030e465262b5b9822e459cc92b25059c9f089289b6f3ec8dc9ed8635f5ba572bbd2a8d096cb024499ca86b652d2cf87f983f6dd9b5e6b2b2c2f6629889576f7c3f66ced05e6b8dac275edb9af7d3dfba65d79d3c54cbbb83f861bb5025a8a40489629433e0d52a8cc3cf7ccf9785315814a2aa00e2efb7a8f7606ba15c4413f8c07dd9320d621080641ff8476033db44c30a30028f264955db168c6b37ed78a835e27d0a11f598119473a503062a37bd2b38c1e5841d8d1bb9105e4d020bb8249b86422e782d58d23779ee3db4bdf5bb8e3916fab32628a6dbaaccd5545bcf529b14804fda7ae4315651c95aa5b705cdff64663dfb9b5eb8b9f4042c3fdfc11af3ea6a90044d3826e404271cd236c1a994de78eef4cddd10419ea3667478420c39f4faf047f9fab2e4bf52623cf1bdd23871605ddff139bfb9ee35e91c3e18dde2d4d4b855104f5570b6ceb0081358e1e67423f873faa48357c87c62b02c75242e77df8d7019f06c13da83d909b85eddd93fac883180ac8c2cfa703c12af0e93a1f770bb1b85d282324fee32c86a212090ba867926d2a3347b6d935748b2870213fc44c63706c7e95a3ca081bc8e47345f56ea96e56a152bc803088a3e4d6bdfe0b2727c981db040000",
    ],
    [
      "ETag",
      "wosBOC02PQLnLjmPwff7Cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1620694024143"
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
      "6d916d4fc2301485ff4bfde886db1804969028c617cc441da031869052eee65eef6c3b7421fc77db6a9418bfb4bdb7cf69cf6977244fab0d09c83a4dde1ae0ed5102f2412f22104d21859a6aac04108b80a48922a17abec1b47dca1ef3e3dee064703be72c4f46234508f60a2525c18ec429141b4182971da968094ab65a7173a2c2645bebce657877365765891b5d4e176178360e2fc8de3a10d5f9af60368f26d3abff14cbbd45325c471003878a81b65073cc80c9894e27685917600b6c3803410c6c36128e4d4d39a2ad3ab6ebdb6edf73fa43dff17cd7ef2ab04046658a95621733658d4894b488f05d85239e02b859aa9cb119b7badd1b765ccfe4d02564c0b7980ae7143e8c8f0ec3d2783e140dfd4eb7ffa3614025b87f05cbefebc7ad0471cf516511a063749dde57a873d4bc540f2079031661547dc9752a4910d342c0fe131e39d771f0010000",
    ],
    [
      "ETag",
      "enYJoiyWjVk+58/8MTrckg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NDQsImlhdCI6MTYyMDY5NDA0NH0.Jqy4PaP-fJ-sFe_RpquZldk1j6NePoLiMdZmeLFClug_TEimWHRdQg263CI4pU9SJsDCMx8wQNlOQPyPQ_Pl9DEpTktDQkWfAMR6Pwxs519gZ0ziwIa2tEy3xT0kAG3-KcRUcPq9VCaJw76WZQ7Xm8l7UNSg8tEtjE5fzGLd5TBPXlfQtariaPmDs9Hv8bMQyfDztrcpqtqyDHqCs_v0W2wdW2-fK-joEALE1789jHxhc9fVTBlm4AMnAFEYWjgy2_ZCJfhtSv5ApaTLgFUKF0MCUiQH1MQvX_xTouL7PytSG0T-1I8CwJBfcOZ21fNsWVhCx21rp4k1Ymkz_EF2wg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff1dd0417282301400d0bb642d8e8241d35d03024a10ac434ad93011be8a4645922ad8e9ddebf408effd205196a054a1af27b8a037d40b930ccb61d8cc68b12f9fdd39c1c782f5dbb541b669b2bc8efa22596ce82a179a651751c96904ab38c089f771320d999afb7b7a489b6e7c702c8657391bdb89ac77c1f9c675e8e7aeba29cc279b29b884808c149d6691d2b30a78e9cb72b4c0ad761ccf58df97f32363bd888935b13d2783f3ce90efbb3e6cdcdc7d86263d06df7c927b0f8b30bf035350de02978f7930c3cde35a05be88abfbbee3b14db5a7c0acd5a7fd15a10182aea95b5045fde25a989001fab717ba6fe0154041b4d0a2df3fa31693a41a010000",
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
      "Tue, 11 May 2021 00:47:24 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-15-1620694024143",
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
      "a3",
      "40",
      "14",
      "fd",
      "2b",
      "64f6a3b68516fa4accdaadb84bd28202d598cd860c706147295399c15d63fadff7ce605d8d897e6266ee39f79cfbe089dcb13a277392b2f2be85e6f1cb2d4fc93101494b7c5d7e8b722f980641707bd16efe1e4d8647f6cde5c90922986209badd55d013bc6d3210f34dd42f1bdeee68c3790f13f52ca7678d87e678669b43dbb247c81350152b56df21fbb7943b311f0c0edafd92f3b202ba63a29ff1edcbfbe06138d835fc163229066f2507a822061f8b7ead784625e3f5c9264203ad8026812d65155af8cfccd3d3b7a9fb8c6efb25821f580634cb785b4b650b5364bc2e58d9363a2b993f116df3d58144eeca5dc646c6ab765b2735ddc2b191534913f9b803e33c0cd686e79f07e17a117b819f44cb1fee7ad15f06abcdda8f8ceb1f6ee81a92a61568ae71629cea9b8f17d4cf4148566bf5583d2be5e70679efc7a208282da00b2613734cada9394b8b749215d391931626a4e9349d3874949ad9cc063b4f81224f8b6a16ad793dca9dd4990024855538890dce3099a5e63871ac34372d7b32815946f6c7e44fc3249c31b1e382751d22d7a117bb491c6efce522767509056d2b79d6195305bcf628b140047d50d35e45194725d56ecf8fdd70b18cbd2bb79bf00a4a9a3d46f738e3825602104d1b6c9e8466cd736c18f1176bf70cc17a621787a020f39f4f44f55cb978d5f2177a8c035476a5fe92280e3dffbbb673405cd1aad59087eea0ca2858a54cef7f211077b44b422e376e7843baa7100a68a0ce3e1f268275e0d35fedb0f788c5cd471921f18eab9309259235d0ad10d3d51ed8360ed2221adcc877b1d9d83a344de55019610bb57caea8db7b2cb4136bc50b0883387d5f376bff0fca",
      "2d0c1977040000",
    ],
    [
      "ETag",
      "CBSdIO8OOOjPuUx+72+4YQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1620694024143"
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
      "8d93616f9b301086ff8bf79548d052b622f503d9b236124db2844ad3a60a39f641dd1a1fb30d6d14e5bfd7a65d36ad93e817b83b3f27ee5ebfecc983509ca4642bea5f1de8dd871aec371facc174d21af76a51192001014b6b4756e7773fb2a7fed2aea621ccb6fd2269be578f17178e30ec0e1a4ad23da904486e48fa734f146dc0b531945da3ca210b88ddb5beb829d6f3c5a5cb1be43e5fdce47936cd67e4101c1b39b5b41cf877b4dd1e02728fdb3554a04131f0b3b41aef81d9b95fd3d0a6953031d86906860cf070506bec5aaa1127ae3289ce2651721226e771781247f1a90325326a052ac7de6cdc7cc4a2a5728d8f6e4b1279420fb1dbb81a9ebdab0b3e6ce2c3f9a248e261c0bf01ca1876ca96a36025b4b12feafd065f55f89794f49da0bb2a21c7a01a14073d4689b6a49c6b3066944453d2b63d62d3e5327fab8ae21a051f077b310248db1f81aff932fb9fb4ce607fb4fa9215b33784b1ce3647a4985fcf364576bdf2dcedab11a63b0b66a5d1b9ca80375414c69fce3e26e18bc73ea3f79dfb4e6a75070161d4fd2a57c292b4a2d2c0e119b258730488030000",
    ],
    [
      "ETag",
      "f9hZAxvGtPB0eEbvN6mXfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1620694024143",
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
      "4fa34010fd2b64efcb5d525b6881d22646ab7277c4da7a946acce5d22edb815ba52cb28b778de97fbf61b156cf44131260e7bd796f66671ec91dcf576448629ede57506e3edd8a98b408289ae2a9dbf5549e64275d35f3cef38c9d47ca84f4f01011bc6649ba2e323890a22a19c8e17cd64e4b5115b414e200131d582e3e5dd31dd866d7b6ec1ef22464c998e777c8fead5421879dce4ebb9d0a9166400b2edb4cac9fcf3b0fdd4e518a5b604a765e4b76504576de173dca04a38a8bfc703e4303958472016bca33b4b067aee2e3d7a9db9caedb29821f3803ca98a87255dbc2144ce4094fab526725c347a26dbef820337fec9f46c6920bb9a045b134a834168b126495a996b1d4f24f87c59df1359c5e184b2c31e119c8a571fddd0f7de319164c8cf964e2cf22e3f3d117e35b389d5f1a2737bb706baf82d6562015cfb5b188c619d4a69e7a17bcbdb19a401595d004177dd3a596670ee224eeb3c4eb397162421c7b71dfa1bdd864031bec550c1479aaceae5934c77630cf05cb74626f95b8b1635aab9e1b9b367556cec0f11cdbb52cdb66038f6c5be44fc9159c715908c99b0692eb3088fc4514ce27a7a3c8d76524145b75d698ab8b78e9536191087aa7ae6d1de50295eadb0826911f8e4ea3e0ca6f06600c29659bd93d8e4042330988a6255d8382f242acb069e4723a0ba2603a198d91a16ff572879064f8f3714f883685eeb2d26f320ac3d10d726859d2cd7fb1591406936f64bb7da17745b34a633441ff35020f4d80c02d8ea0e0d23c86bfba483d84dbd61e81e3a9c07a1dfeb5c5a745701f1a0fe4c7dc0f6f487314420225e4ece3e940b00e7cb8d6bb1d432c6e19ca4885ff388b4cd622ac846626f9ba36b363db8ed3f7880697ea4dac6f39bbe6d739ea8cb0865c3d55d4ec98ee661daae4330883384a93a6d7ff00b96c8f2fe3040000",
    ],
    [
      "ETag",
      "628tnflB2tS8KnlcKTt0eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1620694024143"
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
      "6b",
      "c2",
      "30",
      "14",
      "85",
      "ff",
      "cb",
      "dd",
      "6b1d5a9db082302b659375756de71e3686c4785bab6dd325a94ec4ffbe9b6ca08c41686f4fbf939c438eb02dea1578b02cf2cf16e5e12a471d9b2141d5965ad1ab11b542700035cb89dc07a9bbaed3f5ebd3238be27822f1cd0fe2d18808c5d75831f08e901558ae1478ef47a85985645b2ca4dd91307d688ce2cf6661308e48a8c4ca08d13c0cc77e18c0c9b9b035dbb3257d49a6d1fd7f8e8f93031bb14c304389354713a29162835c4f4d3fc5aaa6c48e12ade4a8c0c2f6472e45db30294487944e6f48cbed0e6f075d77d01bf4092c0567ba1035b1f394a281169a9589d8533d70099076a4a6997dee48d6b245dbc27ce006e54e14aa7b875f36c53517954d7c69c958a9ce1e8e4c63efafe1e3f770ffa0513d4b414d149a126effe6a7d244185e537d13c101cee84a1e0a0d9eddfff40d3583bd42f0010000",
    ],
    [
      "ETag",
      "wES2hnShVMKaNQQCreZBEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NDYsImlhdCI6MTYyMDY5NDA0Nn0.LXSHxSk5bRoN6Y06eGkGr1A1e4eUs4Ov01JnLQOEWksSrYCOf87QjqQG9QIRBRFXItGX7CmEJudDcaVlCBEAi_T9s67Xki7SfxcNOt2RrTVY3rMtIV_9Rf_ExgrWU1TzHYhxQPwSa6YHGZtHPJR5nkrZUM0hp5F2sY1SFwigMmQSAlWeGMH_eMHIfpXl5FfE7e35L4JGmuFZuw4BD7zhsnzknIAH5X-VWBmLTwwj3Uk6II5R_2RBkOK38twUpZFgHGC_s9hd2U2RXwmXQNpzDbJewUPhFbEw9GKvcmzMU6kOOokoauOgu7XyFjNt41KXAgV0ANGR3YEAiDz_rjGUaQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "642d0e25fcd29d9194f2511474226e18483318a01a8322d8e9ddebf408effd809231def7c5edd2f23378075369a0399b47d2c545cd624bb7fd7a3ab2a00986c0afc32549bae15aafb4ceaae8e984608ad434c4b06e94a12c45b6db1c1fd29563b8e29e0c287e837e1e31dec21c7e2edcaaab525bc79b3b210b6996f8dbb9103fe86e0ab77158585a93b546cf946953f2b196ea7c589eb338dc3fbbaf4d70b2b55ecb8f85c83cce247950d610185dbb46ecd9834add08f3ddda8bbcd135778e6e26713f7a5940056a77d436339f5ad8113598013e4aa1785f8817175a08cdc0bfbdb84d92bf02302f1557e0f70fc7d1c8de1a010000",
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
      "Tue, 11 May 2021 00:47:26 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-17-1620694024143",
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
      "6fda3014fd2b91f771851048c343422ba2e9ca06610da155354d91636e32971087d8e9842afefbae9dd2b59bb47e8aed7bce3de73ef244b6bcd890114978b6afa13a7c7810093923a06886affdfdfd215ade2cb65f3e0eb7f7eed7eede2bd8cd788c08ae5992eeca1c5a52d41503395aafda5925ea925642b43051cbe9b71cafdbf1866ea7eb3a6e0f7912f274ce8b2db27f2a55ca916d9fb4db9910590eb4e4b2cdc4eee5dd7eecda65251e802969bf95b45145daff17fd940b461517c578bd4203b5842a861de5395af8c3dc24176f53b739ddb533043f7206943151174adbc2144c1429cfeaca6425a327626cbe3a90953ff7a791c5445eef8ab8a03b38b33654d1581d4ab0aec2e5c29a0557cb70318966cb205e4daffdc5a43d5dced78b6065dd5dfba16f299ae460b8d6d8ba30b7002fa8bf01a97861d423fdac959f1b34fb772c9a80d2129a60dcef78d4197486499af4593ae89d276907926490f4cf692fe9b0a10bee26018a3c236a58b41085b7715217bc24761dda8ddd2124311d3288bd6e8ff506d485011b92e319f9557105975c9642f2a643e42e9c457e1c85eb603a897c53424aeb5c5d36c67401af3d2a2c1041ffa9e9a8a35ca0926ef72c88fc70328d66b77e33e13964941d567b9c714a730988a615364f41b5101b6c1809260bff12c16662df4e414946df9f88eeb976f1aae52ff40807a8ed2af325ab289c059f8d9d13e296e6b5813c36075d46ca736dfaf80381b8a34d1272b3f6c37bd23c85904205057b7f98083681777fb5d3de2316371f65a4c23bae0e935a8455d0ac1037d59ed8ae37e8bac4802bf577acdf71dc53d3740e9d117650a8e78a9abdc7421bb15abe803088d30f4cb38ebf0111de965877040000",
    ],
    [
      "ETag",
      "7qYyTOQMkJ+9kY4K2q6ncQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1620694024143"
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
      "ff8d93614fdb301086ff8bf735951a16028bc48774942d5368691b84c48422d7be642e8e2fd84ea7aaea7f9f1d58416352f892dc9d9f53ee5ebfd99347a13849c85ad44f1de8dda71aecc2074b309db4c6bd5a54064840c0d2da91517cbfa04ff566fde32e7b34ddf4fc72c18af4e2c21186fd828692644f2a01921b92fcdc13451b706d0c65d7a8b2cf026277ad2fae8a6536fbe6f206b9cf67b7799e4ef2293904c7464e2d2d7bfe036d0f87806c70bd840a3428067e9656e30698cdfc9a8636ad8491c14e3330a487fb835a63d7528d3872955178360ae39371fc251a9f4461f4d9811219b50295636f576e3e62d152b9c4df6e4b127a42f7b1dbb8ea9f5b5717bcdfc487d9ac88a37ec0b700650c3b65cb41b012dad867f5fe822f2afc4b4afa41d05d959043500d8a831ea2445b52ce35183348a22969db1eb1c97c9ebf5745718d820f835b310048bb3d0257f93cfd9fb4ce60af5a5da6c5f41d61acb3cd1129b2ebe9aa48af6f3cf7f06284c9ce82b9d1e85c65c01b2a1c47e7a767f1f8d9635fd1fbce7d27b1ba838030ea7e95efc292a4a2d2c0e10f3ef84c9b88030000",
    ],
    [
      "ETag",
      "46ZQaqgjbJWIksuE8DQcTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1620694024143",
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
      "10fd5722ef974deb471a4a132a21e8208c482565690a62d3d43ace257349e3103b8c0af57fdfc569f9181248919af8debbf7ee7cd74772cbf3980c49c4d3bb0acaf5a7a588488b80a2299efeb427c199692d2ff8f2767c1e8fcf1ffcafe9e8f01011bc6649ba2a32684b51950ce47036eda4a5a80a5a0ad1c644ed9ed3ee0d2c7370d037ad7eafbf873c095932e6f92db2ff2855c861b7bbd3eea442a419d082cb0e13aba7f3eebdd52d4ab104a664f7b564175564f77dd1a34c30aab8c80f675334504928e7b0a23c430bcfcc383a7e9dbac3e9aa9322f89e33a08c892a57b52d4cc1449ef0b42a7556327c24dae68b173275c7ee49682c62aa60615069cce725c82a532d63a1b5b787c5ad71164c2e8c05d697f00ce4c2b83e7703d7788279be31f37d771a1a9f8fbe18df83c9ecd2f876b30bb7b612682a06a978ae2d8534caa0b6b3ed9af7f6ae6a02555442139cdbe680f61cf3204a229b25cede7e949810454e64efd3bdc864077de8c71150e4a93abb66d15ce46039cc4e6c8b5a8c4162c6c9a047699f3227b19d7830a0114d06fbb6e3904d8bfc2db982532e0b2179d33a721d78a13b0f83997f320a5d5d4642b14fa78db9ba88973e151689a077eadad4512e50a9be07cf0fdd6074127a576e73f56348295b4feff0f2139a4940342de90a14941722c6a691cbc9d40bbd893f1a2343dfe7e50e21c9f0d7e333215c17bacb4aff9251108c6e9043cb92aeff8b4dc3c0f3bf93cde685de15cd2a8dd104fdd508dc3701024b1c3ec1a5790c0fba483d7e9bd63302075341ef75f8f7069f16c14d683c901f3337b821cd5100099490b38fa703c13af0e142efb60bb1b85f2823157ee32c32598bb0129a99e4abdacc8edd772c4bff1d285aaa3731ccbe6b7e9da3ce082bc8d5b6a266bb74",
      "37eb50259f4018c451f29b5eff039f8a0055dd040000",
    ],
    [
      "ETag",
      "Z7ORF02jMijkLHdLHxN+gA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1620694024143"
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
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "bf",
      "4b",
      "7ddd4c3790e81212f9ab444270c083318494723737b6ddd976e8247c776fa751637869efbdfd9de69cf6c8f649b16301db26f16b05aabe88c13cda22045d6546d35662a181390c8c88898ce787e1436725074f69bdf818e76fe5b8805eb74b84962f900b161c599440b6d32c783eb242e440b2cd4635371266ead24e86bde588ba1c77b69bada6d35e7f3a6227e78fa6dcfff28b653899dd9d53ac4f0e4b711b42040a0a09d641a930056926369c16799981abb15212346be0e6205658954221ba3471bd6bd7ebf8bc73d3e67edb6bb708cc500a936041ec6a41d6984123b210df281bf309504d4931a3663dd831f7b9cb7d977b4d163b8214d40113cd6fe1bdf17229316f7c9f15fa3f4209c280f75fb5fef6d1af0de8b9420aa5c1e669f1abaf7403b4bca19730aa028749415f739f18164422d370fa0499ce2bbbf8010000",
    ],
    [
      "ETag",
      "gPvDK6UcCYjySzFmwpFneA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NDgsImlhdCI6MTYyMDY5NDA0OH0.QlftEEa4idyYNvcmz7eksgBTANHMr3p_QqGMJFtTFAYB9Ge1EvtYEGFIDA0CjrEXX3XRfBqX1_S9siYrhe1nz84F8ZYpwhotXH1InHeMr_4lWExz2QbxjwpACga-JHhk57zKmk0r-6qBN93h2TqV-JmVkiUtnGqSIGGbS0hX0OXQGFI8rLob6fjbIL8Mg2qm7Vfa_P2fN78yiAfGNJ8i5zQ2h21eY4wWtTsHWvEdh41FF4Mlh4cZGk4ZCa5-QQ_HDKr-3h_9n3Og6GGGqKOuMJ2T-6YJUP84P4WBDHP8UG4UiLSRg7fhodL5z33YS4VlJ7hiB1bc5PGKtyPWh8EaYw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dd04b7282300000d0bb642d0e0542a1bbe2c8d7064531e8264321d00ce1537e013bbd7b9d1ee1bd1f9066191d0632b6156dc01b5853c5dc66dba0332c5266e83804d1e5d3adb0383996a8f3bbdc0f16be7126b1a3f8924332e9e7b979d4eea9482c21b1c9c155d9d15c310d538d0dee21ee5d1424d8493f87be9ef07b2b2097969c87177ba9073b5b6a84f2033e882452ba26a96cd97d27adbc2f385a6f733f292a0a5ca105b0d0e7c4ff6843754f1c752511de57714f5ea098ad585edd512d95efabd841e212ef7ccc58e1c7d706cf709671f9d05e775a708026d800ba74aca703614fae0a4d7303feed645c3bfa0cb068dad31efcfe0174a829e01a010000",
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
      "Tue, 11 May 2021 00:47:29 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-19-1620694024143",
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
      "00000002ff85536b6f9b3014fd2bc8fbdabcc98348d1ca12ba444ac806a4d5344dc8980b7543708a4da7aaca7fdfb569ba5695da4fd8bee7dc73ee8327b2e7654aa624e1f97d0dd5e3973b91900b028ae6f8baafe42e086ff7237739cabee5b7ac58b8cb7c364304d72c490fc7025a52d4150339dd85edbc12f5915642b43051abe7b47aa37e77e4d8ddbeddb307c89350646b5eee917dabd4514e3b9db3763b17222f801eb96c33717879ef3cf43bc74adc0153b2f356b2832ab2f3b1e8d74230aab82867bb100dd412aa180e941768e13f334d2edfa66e737a68e7087ee00c2863a22e95b685299828339ed795c94aa64fc4d87c7520a1b7f6e691c544511fcab8a407b8b052aa68ac1e8f605d05db8db5f2afb6c1c68d565b3f0ee74b6fe3b6e7dbf56ee387d6cdd20b3c4bd1a400c3b566d6a5b9f97841fd14a4e2a5518ff4b3567e6ed0eafd583401a52534c178dc1dd1dea4eb24593266d964304cb22e24c924190fe920e932c7063b4d8022cf881a162d4509943a34b559dccf288dedd41ec74ee274e33124837432a1f670d027a70bf2b7e20a165c1e85e44d87c84db08abc380a76fedc8d3c534246eb422d1a63ba80d71e151688a00f6a3ae92817a8a4dbbdf2232f70e7d1eada6b26bc869cb2c7f01e679cd14202a26985cd53506d448a0d23bebbf116083613fb710e4a32fdfd4474cfb58b572d7fa14738406d57992f09a360e57f3776ce886b5ad406f2d01c7419192fb4e9d31f04e28e3649c8cf9d17fc22cd5300195450b2cf87896013f8f4573bef3d6271f351462abce3ea30a9455805cd0a7153ed996d3b3d67480cb852ef628349efdc349d4367840394eab9a266efb1d046ac962f200ce2f47dd3acd33f94212c5977040000",
    ],
    [
      "ETag",
      "krsURShk6AH6fBghclDAHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1620694024143"
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
      "3010c7bf8bf74a34e858da20f5816c6c43a24997d0a7a942ae7d30678663b6c91645f9ee3bd32e9bd649f405eecebf13777fff39b26faa932c610faaf93e8039bc6ac07df6c106eca09da5578f9d05163070bc2112b3c5e54f25c22bfd5a2f6299f1dcece2f4fa9a082bbe42cb597264b5022d2d4bbe1c59c75ba036817a68bb6acc02e60ebd2f6ecb4dbefa48798bd2e7abbba2489745c64ec1b95172c7ab917f41dbfd29603b7cd8400d063a017e96dee00e84cbfd9a96b7bd8699c5c108b06c84c783c6e0d0738338a3ca2c5acca2f945385fc4e1451cc56f08d428b853d8117bb7a5f99843c7f5067fd0962cf2841963dab81e9f7baa2b396ee2c37c55cee371c0bf012e040e9dab26c15a19eb1ed5fb0d3ea9f02fa9f90b41ba2aa5a7a0063a09668a527dc5a53460ed2489b6e27d7fc696eb75f15c954e1a54721adcab0940bbfd19f850acd3ff494b06fba3d5fbb4cc9e11d6916dce4899df64db32bdb9f5dcfd9311960707f6d620b9ca82375414c6576f2fe7e1a3c7dea1f71d7d2771668080094ebfca27e55852736de1f40b772241d288030000",
    ],
    [
      "ETag",
      "oE97xic08l/l94dEaIrj4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1620694024143",
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
      "02ff85536b6fda3014fd2b91f765d37824bc41aa5a4ab32e12051a42bb6a9ac03637d46d88a9ed746315ff7d374ee96b522b2101bee7dc73eeeb81dc8a74497a8489d55d066afbe94632522260e80a5fffde0ed2faf91d6b4d069d1f99ba3ebf9e1e7fed1f1c2042e42c4dd79b04ca5a668a83eecda6959592d9862a29cb98a85c73cb5eabe6b6ba0db7d6f01a75e46948e2a1486f917d6dcc46f7aad5bd766525e52a01ba11bac2e5fae9bd7a5fab6e94bc016e74f5b564155574f57dd1c344726a844c0f66533490695073585391a08567e6921dbd4e5d11745d5921f85e70a09ccb2c35b92d4cc1651a8b55a66c56d27b20d6e68b1f64ea0ffd41e42cb4c19c0b876a673e57a0b3c4949c85157f7cdcdc3adfc2f199b3c0026391805e3897dffdd0779e60c1c8998d46fe34723e1f7e714ec3f16ce21c5fedc3a5bd06da5a823622b5a622ca12c80d3df62df87f5a39811aaaa108cedb6e8b7a1db7cb62d6e671a7de64b10b8c7558bb49ebcce5dd0634960c28f24c9eddb2688aad70196bf2a6e779b576b7e6b1ae5babc7bc5e03afdeed02f33aad25a70c1a645722bf95307022f4466a51348f5c8641e4cfa370361af423df9611536cd449612e2fe2a54f834522e89dba7679544854ca27118c223fec0fa2e0c22f863f8415e5dbe91d8e3fa68906445345d760409dc925368d4cc6d3200ac6a3fe101976a2933d4293decf876742b4ddd82e1bfb4dfa61d8bf420e558a6edfc4a651188c4ec96ef742ef822699c55882fd5708dc17010237b87e5268f708fed822ed02ee4acf085c4d03deebf0af1d7e4a046fa1f040ce677e78458aa710625090f28fb703c136f0e149efef0bb1786128831b6904ee22d7b9085750eca458e766f6eca6db693788052bf336e6d5dbed7df3f31c794658436a1e2b2aeecb76330f65fa0984415ca551d1eb7fde7b5411df040000",
    ],
    [
      "ETag",
      "zkCn3Qqb6PC8XurhQhSB+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1620694024143"
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
      "6d915f6f823014c5bf4bf70a0610cc2031991ab291a971a84f8b592a5c18f2e7b2b6b819e377dfa55b32b3eda5bd393dbfe69cf6cccaa24959c0f645fed68138dde4a09efa2106d9554ad2d6622381190c14cfc9196d73e14779a156b314d2f0b12b7989f9784c0e99bc42cd5970665901552a59f07c660daf81b09717a16f249b3ab5bdb28916e17a3359ac48aa31eda5e5763e9f4ce721bb1857605bfe40eb4d1c2defff237617831d701f4306029a04fa18adc003242aea1b4a5eb71598123b918064daac0f72815dcb05a2498ae958a63d72ac91ef5a8e6bbb4332569870556043deed9aa231858a5731be5341e69041e891ba667a3d926c0fbc5bcbf37cdb77435fd7e9553880386221ad3bf8d0710609d63afa1f76e4127dcd26c015d8bfc1dd779ae949815c09a46a12fa5643cbfbea38c3deafe83d94e8c06009a75f7a28140b325e49b87c02eb8af45003020000",
    ],
    [
      "ETag",
      "IUgr9IgitPCdedEKukakog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NTIsImlhdCI6MTYyMDY5NDA1Mn0.NyUUszNBhtvwn4TiYXRJZo2Hgz2GEje0swTN9eZTQCnSG4626TeFQiXaq5dbiQ8I8VngKwfaQ36aBjhLJUC9bqvdEuQ9eDLpXFb0ybT1TTdGAuOg1HJzKNLfyD6qU6q_My4JlCRSTyZeCjHi6MzkOLHSaXkwQQ4ROZZb5F1tz01_1AxQg_P222mAFpTuB95_Hd89Jby5FjhBSf615KyqoAHRL48RY1i8_89huscT6sLV_EXKbbWmQH1rH_WolKZ9aLH3kGCjYGPcl-y6RcEwUfhExJOQAS6lKKowzmv7bIapBiY19WDIH8aDvMSTuZmMUaK_DIJiq0hpJXR8HtQFWw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d04b7282300000d0bb642d4e0181d09d28a5804ef92ab2c9d010c0467e899640a777afd323bcf7030a8c09e7e8de53d2815730178ab9c66b7f8016aa4b3c72621cbfacbd08744eadcec9d04d7b3856c3d8fbd2e59bbdf6c8926c186298601a6710bb735b7e38931b2961cc5125e368aa4342d4a56edf6c49668d88672c0a455cec1b9f931e563be891933a55fdd961106f3d470ac7bc81416a9f3f35ad3316436ffc2699b6df555d51cf28fc546fa96de144a7535cd2f184622a423757c6971d0f64efe2c85452753bdae48b0f4dd1a5817688c68389f2f008568088e1ca0847d72757d54c7305feede83e0fe41960918211067eff00f209e8bf1a010000",
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
      "Tue, 11 May 2021 00:47:32 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-21-1620694024143",
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
      "536b6f9b3014fd2bc8fbda0442212f295aa394b648095981b49ba609d9c650b78019365dbb2aff7d17d374ad2ab59fb07dcfb9e7dc074fe88e57299a23c2f3df2d6b1ebfdc0a828e10533887d7efeb73d1e43b7b355dfd950f6b71196ff043be580082772c89cbba600329da863239df45c3bc116d8d1b21069068608f06a3b16d8d678e653b23e718789215d99a5777c0be51aa9673d33c680f7321f282e19acb2115e5cbbb796f9b75236e1955d27c2b69828a343f16fd5a088a1517d56217818156b2266125e60558f8cf4cc9c9dbd4438ecb610ee07b4e19a654b495ea6c410a2aaa8ce76da3b3a2f913d2365f1d50e4adbd556c5051b4659554b86447468a154ed463cd8cb370bb31fce06c1b6e96b1bf0d926875e16d96c3d576bddb0491717de1859ea1302998e61a0be344df02b8807ecaa4e295568fbbe74ef9b941fefbb174049096ac0f26136b8c47536b463232a1d9f4d82599c5089992898b8f8945670e7352c230f0b4a866e14a5438a574825d92d896e3268e359a26c42556924dd2913dc6b331765db43f427f1aaed82997b590bcef10ba0efdd84be27017ac96b1a74bc8705ba8d3de5857c06b8f0a0a04d00735edbb2817a0d4b5db0f622f5cae62ffcaeb27bc6639a68fd16f9871860bc9008d1b689e62cd46a4d030142c37de2980f5c4be1d8212cd7f3ea1aee79d8b572d7fa1c730c0ceaed25f14c5a11f9c6b3b07c4152e5a0db9ef0fa806cb37501bb8deff02242c699f055deebcf007ea9f4296b18655f4f3690258073efdd70e8b0f58587d90910aeeb03b547622b461fd0e715dee81eddaeecc421adca877b1c96476e85a97a3cbc84a56a9e78afac587427bb156be802008e30f74b7f6ff00c1ef206c78040000",
    ],
    [
      "ETag",
      "XLGorgU2C8CzsxLoQTMaxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1620694024143"
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
      "00000002ff8d92614f82501486ffcbe92b2e302263f30396a91b5a22aeade6dc150e8a0197eebde89cf3bf772e99b56aab2f70cee13997f77d610f2f6911830b8b74f95aa1d89d2d518d7511a0ac3225e956f2422218808a2d895c6f93addfd99c5b8fad7e77e39bbdd1130bc6ed3611325a61cec0dd439262164b709ff750b01c692de2599517f3ba3340ed4a3d9c84c160d4a33ee7b1ee4753dff73a7e170ec66931668acd6bfe1f6bb383016bbe0830418145845a4b29f81a2335d03625cbcb0c1b9257224209355c3f580a5e954c70dea049a369352ca7693ad7b6d9b42dfb82c08c474ca5bc20763a217da0b86259c0b7e4121c02445d92e1a4be6e689cc6b5115d0e46a163d7fabe02242d49339cff0d92de15a3cff0811d23f8ceb19c57853a5177febdf7db7194e9e751b75ed8fd414845499d907030ec4e426ff8a0b9d9d17b67a7503e084e414ad4195aa6ddbabc72ccf7586fb88e9adee32a51a10111a3bfa39f2a701396493cbc01874304247b020000",
    ],
    [
      "ETag",
      "jwfwLBv/1W8HEvL0GNZaRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1620694024143",
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
      "000000000002ff8553eb4edb30147e95c8fb03522f697aaf8458563288545296a674d534b58e73520c491c62a7a8437df79d2414e890865429b5bfcbf9ceb1fd4c1e78129011f1f9e631876cf7e55ef8a44640d10deefe5c2c2cf833de2661cf7da44be3e2e9ca5a986767c8e0854ad2388da02e459e3190a3f9acb1c9449ed24c883a1ad50da3deea197a6fd8d18d4eabd3469d84289cf0e401d5774aa572d46c1e6a3736426c22a029970d26e2d7fde6d668a699b807a664f3b86413abc8e6ff8b9e478251c54572369f61805c42b68298f20823bc2903ffebb17583d3b8b141f29633a08c893c51452cb4602209f926cf4a57327a2665cc777fc8cc9a58634f1b4fcd89351b5b27e6ede5c99ac685c7fab4a6e9a71a95da6a9581cc2355d3d6d85ec82358f1605d21e983f6dd9d5e238261eea804b9d61657966b69c764dbd1e68e63cd3cede4fc54bb74a7f31beddbf288838103908a27655c8ffa1114515f266a7f3cc7424015d6acc0555fefd1d6401ffaa1df67e1a0ddf5431d7c7fe0f7bbb4edeb6cd8814ee003459d2adc4b154d44d2a3be4f43d635c22080565fa7c3768bb6073e1d42180cfb06b04e0f2d18d9d7c853c6155c70990ac9abb192856b7bd6ca73e7ced8f4acb28d90e2bc2eaa704513ef732a6c1249ffe96b5fa05c60a5e28c6cc7b35c73ecd9b756752d26b0a16c377bc48b11d24802b269466350905d8b0087466ea633dbb3a78e39414579d637078624a35fcf6f026f97965356e59798ae6b2e5143b38ceefec13047af43f6fb77e56e69949794925fae2aff6d059016f6f2b632c8fef71e7f3582f7bf72273fe696bb24d5960b216490b0cfcf1dc925f0e9333ebc29e4e2abc23252e11a6f19934511964175db785cc67d5177db7da3454a72a63e6043a373186be15138420c897ae9a87a53e5a00a2897af2404f19238b67389e85f4120060ed3040000",
    ],
    [
      "ETag",
      "XWWEezCvnf6RqaY2DwHEWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1620694024143"
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
      "90",
      "dd",
      "4e",
      "c2",
      "40",
      "10",
      "85",
      "df65bc6d4d5b4851122e0051491a940a26c610b294a116da4edddda20de1dd9d5d4cc0c4bde8cecf77da737a805d56aea10bab2cfdac51365729eaa929625475ae155f15950ac101d42265723628bf953f6cc258eeb3379a56e59d7a4d7b3d2654f2818580ee013619e66b05ddf70394a240962d97d2be9131dd5466721f3df567dc16b436ed641e45fd413482a37321aa7667c178321b3d8ce2ff248ba3035b5ac5b841896582c64325698b891e9b784a14558eaea25a26a8c0c276914aaa2b21895c9eb841e0fa61e085b76d2f68fbed16833925426754323b7f616fa0498b3ca62f4e070103d2961c74639f7b1efbd7379dd0bb382d1b6a6f15c6eb5fb8735efb66bdf8fdc8a0d1a89e25b16385c6ac77323e24134673482d6b742011fcdf1f337dea8f3f56b1cfa7d4010000",
    ],
    [
      "ETag",
      "TBnxs1Cy6RrviYoQpnDsVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NTQsImlhdCI6MTYyMDY5NDA1NH0.IAVTSnBsfcXr5BMH70XFTbTL8b21Oa9Q_CE8pIz639wSfUZ_oFamNu3P8o3_7xfGyY5LxQmvdfjKRQO-e4i70hjeH8LU5H0iOxu6KW3JnvRNwTG6K0hQSC4NSj-vl38-ckNJgYUAtrIfTTGAofH6BmqX0qcccAcbFWUQlo2OIQBo6rQubAaugw3Vn3F6mhlEh_57J2mXNJ7EbbktKgEf_VZJkrU2F_kx4oIPkQYSHWpvqhr7YWaWWABWVkVmA0-yJQ4J88NRyAyVGHZG6GiZiMDhXAzL06Po9JzoPu03Of2CLyXiN_0IYjI3RZ_Cv0fHyrWbGhSLcQmrxpmjp4r04A"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb642d4e01c1d21dcaa7a0540928c226033160d429318968e8f4ee757a84f77e408d311102c9fe42bec10750b5e14cf174c5de17a83b36376be6aaf296e37e47fd7d2657210f84a9156dd1427b1d6fe8a9c94879d2938a5177730edfc6f93238788a28fc583c9ec1fc6a23d49e87cb4e0b64be4c42dc86e7a86aa0d8ca5c2549233a1430d666dbd2bf8e9ec914b9c343178d1cdd3f5dddb0d68f7a0d49cae295d7f9920c7d358c472e06bd469062fe25677d6a3c079938bba5976b4dac3b963652a8a5068e6241adedbcaccaac0e10b4f7450926803c19e54420fae29a96e34cc0bf1d49c5c82b60416a4e38f8fd03935f5ec01a010000",
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
      "Tue, 11 May 2021 00:47:34 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-23-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f771b44ddbf4914ad5286d806e6d3a9214364d53e43837c190c62176d810ea7fdf8d431908093ec5f63de79e731f7924b73c8fc984443cbdaba07cf8742322724440d1145fdd1f27a3c5eaecefb76d1c9f16f4f6ebe7db13ff623a4504af5992ee8a0c5a5254250339d9faedb41455414b215a98a8d5ebb7bac39e39b42db36775ad3ef22464c98ae7b7c8be56aa90934ee7a0dd4e854833a005976d2676cfef9dfb5ea728c50d30253baf253ba8223bef8b7ec904a38a8b7cbaf5d14025a10c6147798616fe33e3e8f875ea36a7bb768ae07bce803226aa5cd5b630051379c2d3aad459c9e491689b2f0ec47756ce3c3098c8aa5d1ee6740747464c150dd54301c6a9b7591b4bf774e3ad67c172e386fefcdc59cfdaf3cd6abb767de3eadcf11c43d12803cd35a6c6b1beb97841fd18a4e2b9560feae75af9a941cbb763a909282da10986237348bb63d38e9268c492717f10252644d1381a0d683f32996d8115474091a745358be65873b737c49ed2d08e1984d670c4426a0f47619cd0c4b64d3319da23b23f227f4aae60c16521246f3a44aebc65e08481b775e7b3c0d12524b4cad4a2315617f0d2a3c20211f44e4dfb3aca052ad5ed5eba81e3cde6c1f2d26926bc8294b207ff0e679cd04c02a26989cd5350ae450cf56acfd6ce02c17a62df0f414926bf1e49ddf3dac58b963fd3031c606d57e92ff1036fe99e693b07c425cd2a0db96f0ea440cbd7581bbadeff46242e6993855c6c1def27699e3c48a0849c7d3c4d04ebc087ffda61f1118bab8f3252e11d7787c95a8495d0ec10d7e51ed803cb32c744834bf52636e8750f5dab73d4196107b97aaaa8597c2cb411abe4330883387e57776bff0fa9f36e3378040000",
    ],
    [
      "ETag",
      "NXB7DLGxKUddFpakJ+kBSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1620694024143"
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
      "85",
      "df",
      "65",
      "bc",
      "9426a545b424bd68b5dac6fe83c6c434cd0a03a5855ddc5d6c9aa6efee2c6a356aa23730337cb39c73600f9b9447e0c1539a3c9728772709ea9929e6a8ca4c2bba15822b040b50b384489b6f93cdc86fdd870ffcfed4b955f6a4d59fb5db44a8708539036f0f718a59a4c07bdc036739d25a28b232e7cbaab340ef0a33f483f9607c437d2e22d38fef86c34e77d88383755c8c9866cb8affc7dae260c15a3ccd3146893c44a3a590628da11e189b8ae5458635254a19a2820aae1e245294059342d468526b346bb6dba8bb2da7de706ca749602642a653c189bdf3491f68a15936175b72092e01b22ac9705c5d5f689c469511530ec681eb54fabe02242d4e335cfe0d92de15a3cff081bd47f09d63b928b93e52d7c349e7b7e328d3cfa3ae3a41ef07a13425754482c1a8e7079dd1d4708b77efdd9d4635958282546832b4ebcec5d9b95b7f8bf55298a8e93d9e96255a1032fa3bfaa9062f6699c2c32b835467277b020000",
    ],
    [
      "ETag",
      "1nwgkMS9VcXnV+4Ks1O9HQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8553fd4fdb3010fd5722ef1790fa9126e9a7845829198b5652962654d534b54e6a07431207db8175a8fffb2e09053a24902aa5f67befeeddf9ee09ddb16c83462864f17d41c4f6cb2d0f5103118563b8fd9bffc9f547efc74def6cd175f832588ce7f6f8e40418ac54499ce609694a5e8888c851306fc5821739169c372150d3b09a9d9ea1f786966e581dcb049d24099db2ec0ed4374ae572d46eef73b762cee384e09cc956c4d397fbf683d1ce05bf259192edc3946dc822db1f273d4d788415e3d9493007038524624552cc12b0f0aadc845f0f43b7184e5b31901f58447014f12253a52d0811f18cb2b8105554347a4295cd377fd0dc9eda135f9bcc02d73f5ae3b414af8f352cb5d54a105924aaa1ada126ca12b2629b758de477da376f76090838b8c192c8b5b6f86e7bb67648765c2d705d7bee6b47a7c7da85370baeb4b3e501075c6e88542cab3cfa384c48e9efb98dcefbc72b055841ce1a5cf5f51eee0cf46148c37e44076637a43a09c341d8ef6233d4a3a145ac4d4830e85419bd52e18c67864ea91eea26c61635bba4d3332d0bf73bba35343a94e228a4e6c0a0300bbb067a144c917326732e59dd4bb4f01cdf5ef95ee04ec6be5d954131f4ebbc365716f1d6a7822281f4415dbb12651c32950fe3b8beed8d27be736dd7b33025318eb6f37b98068a1349808d054e8922e2926fa069e86a36777c67e68ea7a0a81ef86acf9068f4ebe955e06ff3aacbaafaa2b1e78d97a0c142e0ed7f18f8e85968b77b93ee1a274545a9f8d5a98eff5003a803b5bc9e0cb4fbbd835f03c1d0d7d1d1cfc0f696a8bef208258264d1e7ef0ee40af87477f78b045c58254823159c61ca2259268904a9a78da595dd6775b7db370d5491857a870d0d7ddfd632461991a42453cf15d58b5435aa840af942021086c475dc0b40ff01fd6e39b5c8040000",
    ],
    [
      "ETag",
      "zpxp0wRKh6BW5IoYUWASEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1620694024143"
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
      "0002ff8d90416bc2401085ffcbf49a80a66968050f5ad2462aa2698542115993499a9864e2ee462be27f77762dc5632fbbb36fbe19dedb136c8b2685016c8a7cd7a13cdee5a817a688517595567cb5d4280407508b9cc950beccf79fe9441ce63f6f8bf27117c559341a0e9950c937d6020627c80aac520583af1334a2461e5bafa5ddc8983eb64699cc3ec2d73066a1a6d408b3e5743a1a4f43383b3763edf65f23abb303256d62cc506293a071d14a2a31d113135089baadd055d4c9041558d83672495d2b2491cb8aebf96e3ff07ac193dff3fcbe7fcf604589d00535cc2edfd91b68d2a28ae9c0f9c06340da92a366f6dcb3fc6033ec2d60acddf682bf5edff456bf0bc7478d6a2e89dd2934c67a5793cf648c6b0ea465870e24827f392af4f57dbe00ecc8da50c2010000",
    ],
    [
      "ETag",
      "ErFPvXdIawPxKQj8qHRfHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NTYsImlhdCI6MTYyMDY5NDA1Nn0.N2jlKyn43WRz40tOSA2GixyTrYQ1u-BYX8Y5pFF465daYmBpZy4QkmUMuCjFnYBWRj--4xDytTnJ7oCIIdLPmt3XexsqokhJtCcTOY-lxcYdKBRj9t74SzZbR1NKgwRgoUZgXYcMnoiKsJw7QLu-3yKOHYIm9kNvo6CwRLRDy8vZl5gQBUyxue1aSln0JB1RXPukD3JJs1HDuNk7OSC052_nOFqmDVeT8vk1_SmEvO7pz3GlfuDCSs_rcB2UxcVTeDfLEjjg05skRMF2peFUx-CrsC22yyPcF33bf07an96wk6BWdW1P4Cut78vygpQoZmCaZrR8daF96brrByzbtg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dd0db6e82300000d07fe9b31a2983c0dee42ae01c08a8f4852054282c88b48512b37f9fd9279cf3024559624a73f6e8700f3ec152407d536e824133f2fa1ef2ecccbdaaba5ae3b3ed7f6c9c3ea9d28a7b43e06c21e6cfd0232cf59b63455218c5975ebb68e721b7e8c094caeb446886c5e26abbf86b2d48373b645c16375a10d999b729e28f339595ab81b861a609f1e553102793f09ac882ebdc538c748f23c16e071e4e2dade0649d8ebb2d5743a9cef4f280a27872a40f71dd772833d21065eaf71d39b554d981904dbb66830b655828ad9ec8ea3e73bd7e0b56008b818c98e6e4cd95155d5f817f7bce9601bf030c5c8c7804bf7f4f61be9f1a010000",
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
      "Tue, 11 May 2021 00:47:36 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-25-1620694024143",
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
      "ff85536b4fdb3014fd2b91f795367da44fa91a5509ac5a9b6e690a42d314d9ce4d302471881d5041fdefbb71280321c1a7d8bee7dc73ee23cfe44ee41199122692fb0acafdb75bc9c809014d137cbdff797d7b5dc5a3ece94e3cd974ef5d3f5ef8f3d90c11a266299a1529b494ac4a0e6abadbb6935256052da56c61a2566fd0ea0e7b9de1c4e9f49caed3479e82345e89fc0ed9375a176a6adb47ed76226592022d846a7399bdbedb0f3dbb28e52d70adecf79236aa28fb73d1efa9e4540b99cf765b3450292843c8a848d1c27f66c44edfa76e0b9ab513043f080e947359e5bab68529b8cc639154a5c94aa6cfc4d87c73205b77e52e028bcbb4caf230a7199c5811d534d4fb02ac737fb3b696def9c65fcf83e5c60bb78b1fee7ade5e6c56bbb5b7b5ae7eb8be6b69ca52305c6b669d9a9b8717d48f4069911bf5a07eae955f1ab4fc38969a80d20a9a6038ea0c6977dc99b0988d783cee0f58dc01c6c66c34a07dd6e113079c8801459e11352c9acb9c0dfb3476e8208cbaa36ee88c9c6138896216f268dc77208ae2311b92c309792c858633a10aa944d32172e52f03370cfc9db79807ae2921a655aacf1a6375016f3d6a2c10419fd474a8a342a252ddeea517b8fe7c112c2fdd66c22b4828df6fef71c6314d15209a96d83c0de55a46d830e2cdd7ee1982cdc47e1d838a4cff3c93bae7b58b372d7fa50738c0daae365fb20dfca57761ec1c119734ad0ce4a13990022ddf606de8faf01791b8a44d16f27be7fad7a479f221861272fef534116c025ffe6bc7c5472cae3eca288d77dc1dae6a115e42b343c2947b640f860367400cb8d41f62183c76adce5167840c72fd5251b3f858682356a957100671fc9ee9d6e11f76a6b19178040000",
    ],
    [
      "ETag",
      "qKYjYuf7mzkiz/ayNYwGRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92614f82501486ffcbe963b0909092cd0f6a562e3353dcda9a73573820065cbcf7a233e77fef5c326bd5565fe09cc3732eeffbc20e5e923c040fe649bc2a516c4f62548fba18a12c5325e956f05c2218808ac544da41c3671d366477f66974f61a3d59eb55be69368990c1023306de0ea204d35082f7bc839c65486b014fcb2c9f559d016a5be8e1d81ff50637d4673cd4fd60d2efb7dafd2eec8de362c8149b55fc3fd6a67b03967c3ec20805e6016a2d85e04b0c544fdb942c2b5234252f4580122ab87a100b5e164c706ed2c4b4eb66cdb52db7e158b65373ce094c79c054c273622763d2078a2b968ef8865c824b80a84a321c55d7358d93b032a2cbdec0779d4adf5780a445498ab3bf41d2bb60f4193eb04304df3996f1325747eabaffd0faed38caf4f3a8ab96dffd414845491d11bf77df1dfbadfba1e6a607efedad4239149c8294a833ac59ce65fdc2b5de63ed701d35bdc753a2440302467fc76da2c08b582a71ff062b43870f7b020000",
    ],
    [
      "ETag",
      "2c9TaCaPaK2+f/zfX0vqnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1620694024143",
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
      "0000000002ff8553eb6e9b30147e15e4fd69a5342184908b547559ca3aa49474407ad93425c61ca85b8229369da22aefbe03346db34aad1489d8dfe57ce7d87e22f73c8bc898843c7928a1d87cb9132169115034c1dde9add07f05d99999b000b2b27bcda26b6b727c8c0c5ea9245de7291c4951160ce478e1b7934294392d843842a323c33aea5a866e8d4cdd30bb660f7512d278c6b37b54df2a95cb71a7b3abdd4e844852a039976d26d62ffb9d47a39317e20e98929dfd921dac223b1f173d4905a38a8bec78e163805242b18435e52946785546e1d77deb36a7eb7682e447ce803226ca4c55b1d082892ce64959d4ae64fc44ea986ffe10df9ed9d3409bce2733db9fda07fee2fc6045d795c7eab0a5e9871a95da7259802c53d5d256d85ecc5358f268d520f9bdf6dd9b9f2382616ea904b9d2ae7ed89eaded931d575bb8aeed07dac1c9a176e6cd1717dab79b3d0e068e402a9ed571031aa650457d9ea8f3fe1c2b015558b3019703dda2dda13e0ae370c0e261af1fc63a84e1301cf4692fd4d9c804330a81a24e55eeb58a6622b3ac6138a4b4cf46b46bd0c16864b001f4877a2fec9a318ccc3084c84023b26d91bf055770ca652e246fc64aae3c27b09781b770a793c0aedb8829ceebb4095735f136a7c22691f4415fdb0ae5022b5567e4b881ed4da681736937d7620609651bff012f464c5309c8a6055d8382e25c4438347231f79dc099bb93192aeab3bed8312419ff7e7a15049bbc9eb2aabf64e279931bd4d0a2a09bff30cc619964bb7d53ee92a6654da9f9f5aaf17f6c00d2c55e5e5706d9fed9e2af45f0fe37eee4e7c2f66e48b3e5410c0564ecf37347720d7cfa8c776f0ab9f8aab08c54b8c65bc664558415d0dc36beaee33eabfb03ab6f919a5ca877d8b0afefc65a79548eb0864c3d77d4bca97a501554ca17128278495cc73d43f41fd8f66556d3040000",
    ],
    [
      "ETag",
      "Cho0ZTnG4gcTenu1XcdX6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d904b6f82401485ffcbed5230808f561317dad0d684f8404d178d31235c280acc3833d818c37fef1d6c5a179d05731fdf8173b8c2312b6318c23e4b4f15cacb438a7a698a1055956b4597e0a542b000354b893cb59cdeb227fcd67b22a3699c2f9cf16a9e8e4644a8e8130b06c32b2419e6b182e1c7154a5620c9763bd9bc91307d1166f212ccc76b6a0b1e9b76b60982f124f0a1b6ee44e2f82798ced6feab1ffe27d9d6161cf83ec4042596111a0f42f203467a6ae22956881c6dc52b19a182066e16a9e4956092739b26b6d7b7ddbee7f4075dc7ebbadd0e81398f98ce7849ec6645de4073cdf2907f513af008904d494193e679a6f1a0dd791cdc9f26d3b91118abf7acebb43b4fbf7bd7ecb73f1f995c34aa85e4e458a131ebdc8c3f73134653482d2bb42062f4dfdf327debeb6fcfe92f62d4010000",
    ],
    [
      "ETag",
      "q+05Q5pE+WfrcIdlP0ASOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NTgsImlhdCI6MTYyMDY5NDA1OH0.cTY_GmK60_43PxWZZ8mq4uJvp-SDc6eOQsW8YC968MvjmNj0Eh-Y2hCWIwOPwX5--lTqpzgn8QKaDvnZgvtlNGosb5ul4mz8cOzVJnbxPkRfJSikfwDfRvyMy_m41I6HcVwFI3_5XsmNgAsvjidxReRgeEM1q8Qrdjqq6cRj9LzF0oRTPCfMgzOW1FqUWkClxV9sAqyQtXRVzTTspJUa71E9waZYW12h0SQ1x0lAf0yPdhINInpNlGAJGiH0-bz5QzyqaVDY8KFKMDBhgSXyxKunQ873_idCKbIbMABck_0C6XE_euUgzf_sDoDB6BJ4N_TljzynAJWEnUdv_j51IQ"
  )
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dd04d7282301800d0bb642dce8050a0bb224e202ad26a03b261207e46c46a48e44fa777afd323bcf7440563a0547ebfd57045ef682c0c77caa64be1783987e462a61bada50ec9dbf03b58f01ab233dec48cd2082ebeb776af6f87bcdc0b8be2cc3175e326a535b3357bd1eaed35d819cb1ee6c219cae1d49759e80de1fae3b8a23a3483b54d2f492c0e5f3aa53cb323658a9d084fb59f766a3dd6ad7eee7c2ccac2df53bf49790446173f124361ae88c6f9e9981429c36547521956e33c0930260f12335235568bdd80245bb67a64ee8fa915f3a8ffd4337ba9b668826010950495572feecc72dd09fab7e7f751c02bc083428244bf7f940523e51a010000",
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
      "Tue, 11 May 2021 00:47:38 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-27-1620694024143",
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
      "c8",
      "fbd82681bc4822456b94d21529211b9056d33421632ed40dc1149b765d95ffbe8b69ba5695da4fd8bee7dc73ee8327b2e345426624e6d95d0dd5e3975b119353028a66f8ba3cb1ff9c2c6eec7a672dd4ceb5fee689bd7c98cf11c11b96a4fb32878e1475c540ceb64137ab445dd24a880e26eaf4ed8e35ee9be3e9d0ec0fade1007912f274c58b1db26f942ae5acd73b6a773321b21c68c9659789fdcb7befbedf2b2b710b4cc9de5bc91eaac8dec7a25f73c1a8e2a2986f0334504ba822d8539ea385ffcc243e7b9bbacbe9be9b21f89e33a08c89ba508d2d4cc14491f2acae7456327b22dae6ab03099c95b30c0d26f27a5f4405ddc3a991504523f5588271e16fd686eb5d6cfcf52274375e142c2f9df5a2bbdcacb66b2f30ae2f1ddf31148d73d05c636e9ce99b8717d44f402a5e68f5b0796e949f1be4be1f4b434069096d30b2cd31b526e6344e639ba593c1284e4d88e3496c8fe82036d97408c324068a3c2daa59b41045dc37a709582c62436a45c3fec88e62cb4ca3813548470336a6661fc8e1943c545cc13997a590bced10b9f6ddd089427feb2d17a1a34b48699dabf3d65853c06b8f0a0b44d007351d9a2817a8d4b4dbf542c75f2c43f7ca6927bc828cb2c7e00e679cd25c02a26985cd5350ad45820d23de62ed9c23584fecfb3128c9ecd713697adeb878d5f2177a88036cec2afd2541e8bbde376de788b8a279ad21f7ed819468f9066b43d787df88c4256db3901f5bc7ff49da271f52a8a0609f4f13c13af0e9bf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b947f66832988e890657ea5d6c34b18f5d6b72341961",
      "0f857aaea85d7c2cb415abe50b0883387e4f77ebf00fe412a68d78040000",
    ],
    [
      "ETag",
      "C+7x+Ah7uk1AtkI1zld7Cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1620694024143"
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
      "5b",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ffcbf85a122eb548131e8a724b4a45282f1a4296760ac56db7ee6e3548f8efce5644a326fad2ce4cbfd99e73da033ca6790c2eacd3cd5389727fb1417d678a19aa926b45b742e40ac102d46c4364366a85d375f0bae86db9f6f643bf33b80f5eba5d2254b4c58c817b8024451e2b701f0e90b30c692d12bcccf255d559a0f78519cec3d93818529f89d8f4c1c2f7bd9edf87a3755e8c9966ab8affc7daf268c14eac6798a0c43c42a3a5906287911e1b9b8a6505c79a12a58c504105570f365294059342d468526bb66b0da759773a76bd6937ec16815c444ca722277631277da085667c265ec8253804c8aa24c349757da6711a57464c390e42c7aef47d05485a92725cfd0d92de2da3cff0819d22f8ceb14c94b93e5303ffd6fbed38caf4f3a81b2fecff2094a6a4ce48389ef4e7a137991a6e79f2dedb6b54532928488526c346ddbeba6c3bf5f758af85899adee36a59a20511a3bf63946a7013c6151edf00a05667887b020000",
    ],
    [
      "ETag",
      "mH3TPbNzUBhltAyGL9FZNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85537f6f9b3014fc2ac8fba795f283101242a4aacb5ad62125a423a455354d893186b8014c6dd329abf2ddf780a66d56a9952211fbeededd7bb69fd096e5111aa390250f2515bb2ff73c442d44154e6077646fc29965cfef36e27e916dd3bf3d25bbc9d9193058a592382b52da96bc1484caf172d149042f0b2c386f43a1b6316af786863eb44ddd307b661f7492a6f194e55b506f942ae4b8db3d787712ce9394e282c90ee1d9cb7ef7d1e81682df5302eec7965d7081441f9a9ea79c60c5787eb65c40805252b1a219662944785546e1d7e3d21d86b34e02e4474628268497b9aa624109c2f39825a5a8aba2f113aa63bef98316ced4b908b499eb9dac715649d7a71a96da6a25a82c53d5d2d6d051cc52ba62d1ba418aadf6dd9fcf0001ff0d9654aeb5db1f8eef68c764d7d3969ee72c02ede4fc54bbf2e7cb6beddbdd11073246542a96d709031ca6b44af73c44f7fdd15502acc0b30157963ec4bd916e8771689178d41f84b14ec370145a03dc0f75629bd48c428a41a7aaeab50ae73c378c5144f5388aecd0a0fdc150b7464668f6818c63d28b8650d3229669a37d0bfd114cd14b260b2e59334974ebbb81b30afca57731099cba8d18c3bc2e9b7055136f732a6812481ff4b5af50c6c1a93a16d70b1c7f7211b8374e7313a634c164b77880bb10e3545260638133aaa898f1088686aee70b3770e7de640a8afa78af0f0c89c6bf9e5e05c1aea8a7acea2f9af8fee40e345808bcfb0f831c4313edf76fec6e705ad6949a5faf9afa8f0d807ad0cbebca40fbdf7bf8b5105cf9a63afab974fc3bd46cf934a682e6e4f37307720d7cfa720fcf08b8f090c0462a58c32d23b232218236b78d6575dc67f5c036ed11aac942bdc32cdd3e8cb5aa5155a419cdd57347cd33aa075541a57c21010897c473bd2b40ff013c7240abc6040000",
    ],
    [
      "ETag",
      "89hbM79OYhrjSmklz1ts/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1620694024143"
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
      "90cd6ec2301084df657b6c829210d1148903200a4811695338550899b049437e1c6c872a42bc7bd7a66a39f4627b77bf59cdf802455e1f6008fb3c3bb528ba870cd59b7ec428db5249ba1a5e4b040b50b18cc8259f0651bd28bcf414f5a322983f66ddf378342242269f5831185e20cdb13c48187e5ca06615926cb713662361aa6b74e7258cc66b2a2b7ed0e56a1386e3493883ab75276a8a3fc172b59ecd67f17f92edd58223dfc798a2c03a41eda111fc88895aea7892554d89b6e4ad48508281cd2013bc6d98e0dca68eed05b63bf09cc1b3ef78beebf7092c79c254ce6b6237efe40d1457ac8cf917a5038f00619e143435e799da4eef293031ce86d1eeeec76ecff77ec7ae1e6f7fd64e3a85f25570f22851db736e56a75cdb57144b89162d4818fdf42257b7fafa0da6ca9cf3c6010000",
    ],
    [
      "ETag",
      "IoC8OnHk2fqO3Ok8G+gy9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NTksImlhdCI6MTYyMDY5NDA1OX0.B0OHwZM3CYNnF7In08JGvimPI2wX-1nDXasQqOK5dbI7RZFV4wiGe7h5ybDG96iIvJXH3wUPdHF367X0e5Q2ROMTcm2VLTD6zIJTVtx20J4wPD538C7BISLi4k0P-fE8TVKxQlnaURT1PEHbA0lPUyYiuosIkBhJVM52l2mT6GXzdKx2d659HXUWiJsjbOUYV0p_OkOcEQroMAFYOSv1CL67V8tb0LoguW4n6ixywANS4K9ffBV_2WjQMqlhCi-vH7Y1JJI2bbfJkhVnIAobzxV1c9F9AdOaShM-uZhtYPP09AHX_PirAGpMe0Tp_hzMlZw2FsQ0VCUReh9C6KCidg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dd04b7282300000d0bb646d1dca377447b413ac148c1f3e6e321002a320a404d4e8f4ee757a84f79e20678c4b49c7bee11df8002ad7dd399baf0544b4aec23b5ef67ca11d421477985e0bcf27e34da60656ce0f59851ab626e290bd99488a5b048fb082c7057f345f853629d47f173e0b275809c5d99ea0878d549adb3a8f7638bb7593d1e132ab2d338ae5545aea5199e7880575d726bc74f46de30c37794d615407faaa4129dce0434aedb2c46fc2b3dc731bbf8fe625c70e5d05cb8de74b927926f3f66b33b12ffd715b202d1a97e1e7eec07c24046d36773003fc2e4e0397f4f4e21a96ebcec0bf9d8e4af05700e2f9c007f0fb071a6be1191a010000",
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
      "Tue, 11 May 2021 00:47:40 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-29-1620694024143",
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
      "0002ff85536b6f9b3014fd2bc8fbda2424214f295aa384b69912b20269354d1332e642dd02a6d8648aa2fcf75d4cd3b5aad47ec2f63de79e731f1cc913cf233225214f9e2b280fdf1e45482e08289ae0abffe81deca76b3bf3f7b9b9ff613ed365747d3b9b2182d72c49b32285961455c9404e775e3b294555d0528816266af526adeeb0670e2796d9b3ba561f7912d278cdf327643f2855c869a773d66e27422429d082cb3613d9eb7b67dfeb14a57804a664e7bd64075564e773d1efa960547191cf761e1aa82494016494a768e13f330a2fdfa76e739ab51304ef3903ca98a87255dbc2144ce4314faa526725d323d136df1c8867afed856f309156591ee434830b23a28a06ea508071e56e37c6cab9daba9bb9bfda3a81b7b8b137f3f662bbde6d1ccfb8bfb15ddb50344c41738d9971a96f0e5e503f02a978aed5fdfab9567e69d0eae3586a024a4b6882c1c81cd2eed89c84713862f1b83f086313c2701c8e06b41f9a6c628115854091a745358be6228fc2494ca13f0c4c361c049615450135210a46318b07dd61349e4426395d90bf2557b0e4b21092371d22f7eecab703dfdd398bb96feb12625aa56ad918ab0b78eb51618108faa4a6531de50295ea76af1cdf76e70b7f756737135e4342d9c17bc619c7349580685a62f314941b1161c38833dfd84b04eb89fd3c072599fe3e92bae7b58b372d7fa5fb38c0daaed25fe2f9eecab9d676ce883b9a561ab26f0ea440cb0f581bba3efd41242e699385dcee6cf717699e5c88a1849c7d3d4d04ebc097ffda79f1118bab8f3252e11d7787c95a8495d0ec10d7e59ed943b3d7b3880697ea43cc1a4cce5dab73d41921835cbd54d42c3e16da8855f21584411cbfa3bb75fa07b53560d578040000",
    ],
    [
      "ETag",
      "TjSyEkGEmTvn0vJ0qaDdGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1620694024143"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85ffcbf48a095a8a4ae241ab6d49d45ac41e6c8c5961401458dc5d6a8cf1bf77965adbb44dda0bcc0cdf2cef3d38c236c943706095c4bb12c5e12a46f5a40b0f65992a49b782e712c100542c26d20d736f376fcdcdc67cdf7f6e465b7b375171a743840cd69831708e10259886129c9723e42c435a0b785a66f9b2ea0c5087420fa7bee78eefa9cf78a8fbf16c38ecf68603381997c59029b6acf87fac2d4e066cf8cac30805e6016a2d85e01b0c94ab6d4a961529d6242f4580122ab87a100b5e164c705ea349add1aed5ed8669b72db361d5ad6b02531e3095f09cd8d994f481e28aa51edf934bb00910554986a3eafa4ae324ac8ce8d21dfbb655e9fb0a90b4284971f937487ad78c3ec307768ee03bc7325ee6ea42dd0d1fbbbf1d47997e1ed5effa831f845494d405f1ddd160ea774713cd2dcede7b0785722238052951675837add64dd336df63bde53a6a7a8fa3448906048cfe8e87448113b154e2e90d05b38dbf7b020000",
    ],
    [
      "ETag",
      "IdnRqZ8Z02ZwDV7fk6qPtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1620694024143",
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
      "fd",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "5722ef17d0fa91b469fa2121d6956ccbd4a62c4d61304dade338c190c4c1768a2ad4ff7d9784021d12489552fbbd77f7ee7cf788ee5816a2110a587c5f50b1fd74cb03d44054e1186ecdeca67b793d91d7be6e2fae673f3f6f52db7e383901062b5512a779429b92178250395a2e5ab1e0458e05e74d08d4ecea4dc3eae8d6d0d43ba66176412769124d597607ea1ba572396ab7f7b95b31e7714271ce648bf0f4f9bebde9b473c16f2951b27d98b20d5964fbfda4a7092758319e9d2c1760a09054ac688a5902165e9461f0e530748be1b4150379c308c584f02253a52d08417816b1b8105554347a4495cd577fd0c29eda135f9b8d7f1fad715a4ad7c71a96da6a25a82c12d5d0d65051c412ba62e1ba46f23bed9b379f0102f96fb0a472ad5dfeb03d5b3b243baeb6745d7be16b47a7c7da776fbe3cd7be5e1d70c06348a56259e5d0c741424b774f4d74de3e5d29c00a72d6e0aaaf5bd818e8c3200afa241a747b41a4d3201804fd1eee063a199ad40c038a41a7cae8950a673c0bfb6164f675c31c90a04749d80b43bd1fe85d6c1153ef59162698583d4cd0ae811e0453f48cc99c4b5677125d7a8e6faf7c6fe94ec6be5d951161e8d7596dae2ce2b54f054502e99dba7625ca38642a9fc5717ddb1b4f7ce7c2ae27614a634cb68b7b9885082792021b0b9c5245c58c87d034743e5f38be3377c7535054cf7bbe674834faf3f822f0b779d565557dd1d8f3c657a0c142e0ed7f18f8b04cb4dbbd4a778193a2a254fcea54c7dfd40032a096975307edfeeee0d74030f27574f46b697b57a8bef2684405cdc8c7ef0ee40af87073f76b045c58244823159c61ca882c931041eb69636965f7496d191dc3401559a837587730dcb7b58c51",
      "46a429cdd45345f51a558d2aa1423e93008421711df73ba0ff007fec3a66c6040000",
    ],
    [
      "ETag",
      "4nh3WZCsZT0ESZMJ+vmEEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff6d904f4f023110c5bfcb787497ecbf9040c2011495b84158c18b21a494615dd8dd96b68b12c277775a8c72f0d276667e6ff25e4fb02bea35746155e4fb06d5f1264733b58f0c75531a4d9714b546f0000dcb897c5693f9bddeb73bbc0aa7f276322ebf566f79af4784e61f5831e89e605360b9d6d07d3f41cd2a24d972a9dc46c2cc51dace43fad29f515989b52dc7f334ed0fd2219cbd2b91dcfd0946e3d9f07198fd27599c3dd88a55861b545873b41ea4125be46664e36956c9127d2d1ac5518383dd2057a2914c09e153c78f033f6c4741bb93045112263181a5e0cc14a22676fe4adec008c3ca4c7c523a880850ee494137ee3c503b6e85898b71708c75773d8e5a51fc3b0eed78f1b3767034a8274a90478dd65e70b17a27ac7d43b18c6ad003cee8a79f0a73a9cfdfdcff9129c6010000",
    ],
    [
      "ETag",
      "KrPUDsq69cm1Qp+PNlxbVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NjEsImlhdCI6MTYyMDY5NDA2MX0.bUgBk8r3E4KgDbCfh6Xc0dSBioQDNPx3OBLMmuvVxmrcevCaTzqdBot9gWHrFNT9XMjECqzVekjRrtD1eaQAVaLCxS_f8qdvupZ0vWAyefFGGBC2rAkeeNVL--ktwukB8qJYqq4TkQaAAl_UEu85GV6ZSoIUGPc1mExtfLCRszZgII928BF6UVXWrW5gq61zZpq9H67Xp6iwyIi0nrp-3OIIyS5Q7YbRocCKJGZkFnXnbGMjwsNMpjzz-93fZKqC8SObnqnE-y6nJmmiv40HYD7J7HlFqysbexSuCLprh0R_NGrUkDFCxNVO9zAMYH3HWBOhKlvoY4X5-2B1bjYa0g"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "300000d0bb646d1d0181d01df13bf1179432c226c3272018620cb4189ddebd4e8ff0de0ba479ceba8ef6b72b13e013e8d4f4c6f9782321a255d1af920a3bb3e00949f67d76f8520ef3c93d20d12c44187a95113ee9def187769761c1c53a87948933a94bf776da91e1c86d677b2f151ea6bad8fd20a2214da259b2770373cf5d03a570e309dea9527e4d60cdb0df4e6388ea45546ce2b6993e4d336ab604b5d03686c5aaa4fddc8d94fdf09689b5cd6dbc8c9bfa7031af8125dc532b0fc4d64df621337df115d68ba2b3d2e3210ed73c34b07faff8458011600f592bd6d1facdb56ccf1b817f3bedb564ef00c452c514f8fd03c3f9ab4d1a010000",
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
      "Tue, 11 May 2021 00:47:41 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-31-1620694024143",
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
      "f711daa64ddf5235aa1246a53665490adaa629b29d9b6048e3103b4508f5bfefc6a10c36093ec5f63de79e731f7926f7228fc99430913e54503e7db9938c9c12d034c5d787ebdb9fec44ed579b20adf68f4e9ef093ede36c860851b314dd1519b494ac4a0e6aba0dda6929ab829652b63051cbe9b6bac39e3d9cf4ed5ebfdb7790a7204b5622bf47f6add6859a763a47ed762a659a012d846a73b97b7defec7b9da29477c0b5eabc97eca08aea7c2cfa35939c6a21f3d9364003958232821d15195af8cb8cd9d9fbd46d4177ed14c17bc181722eab5cd7b63005977922d2aa3459c9f499189b6f0e247057ee22b4b8ccaa5d1ee57407a7564c358df45301d685bf595b4bef62e3afe7e172e345c1e2d25dcfdb8bcd6abbf602ebe6d2f55d4b539681e15a33ebccdc3cbca07e0c4a8bdca887f573adfcd2a0e5ff63a90928ada00946237b48bb637bc21236e2c9d819b0c406c6c66c34a00eb3f9a40ffd9801459e11352c9acbbccb2843ae13b11806519ff678446dee44e3241e4cc6ce64dc4b18399c92c752683817aa904a341d2237fe3274a3d0df7a8b79e89a12125a65fabc315617f0d6a3c60211f4414d873a2a242ad5ed5e7aa1ebcf17e1f2da6d26bc8294f2a7e001679cd04c01a26989cdd350ae658c0d23de7ced9e23d84cecea185464faeb99d43daf5dbc69f92b3dc401d676b5f99220f497de3763e788b8a6596520fbe6400ab47c8bb5a1ebc36f44e2923659c8f7adebff20cd930f099490f3cfa7896013f8f45f3b2e3e6271f5514669bce3ee70558bf0129a1d12a6dc237bd89d0c7bc4804bfd6facd7b547c7aed539ea8cb0835cbf54d4",
      "2c3e16da8855ea1584411cbf67ba75f8030001decc78040000",
    ],
    [
      "ETag",
      "qVhZb+svLOSguvw3nfc+Uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1620694024143"
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
      "bc2d098552b10917a0284d0af253bcc010b2b453286ebb7577ab21847777b6221a35d19b7666facdf69cd31ee029cd63f0609d6e9e4b94fb8b0dea8929a6a84aae15dd0a912b040b50b30d917c9e2e50dbebeca6d57ed8fa8b2268e360d2e910a1a22d660cbc032429f25881f778809c65486b91e06596afaace02bd2fcc70164efdd11df599884d3f9a0741b717f4e1689d1763a6d9aae2ffb1b63c5ab013eb292628318fd06829a4d861a47d6353b1ace05853a294112aa8e0eac1468ab26052881a4d6a4dbb66bb8dba7be5d41b8eed3409e422623a1539b1f319e9032d34e353f14a2ec125405625194eaaeb0b8dd3b832624a7f14ba4ea5ef2b40d29294e3ea6f90f46e197d860fec14c1778e65a2ccf599ba0deebbbf1d47997e1e75d30dfb3f08a529a93312fac3fe2cec0ec7865b9ebcf7f61ad5580a0a52a1c9d0ae3bedd6a55b7f8ff55a98a8e93d9e96255a1031fa3b06a9062f615ce1f10ddbfee52d7b020000",
    ],
    [
      "ETag",
      "lUiZet1bmD58VhIZpL8eHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1620694024143",
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
      "000000000002ff85537f6f9b3010fd2ac8fba795924008f929555d96b20e29251d21eda2694a6c38a85b822936a9a22adf7d07346db34a9d8464ecf7deddbbf3f9993cf0342423c278fc5840befb722f1869105034c6d38c3e78fe53da7d0c165b75af67cb5f89b57b3a3b43062f55926eb2049a5214790072b498b7e25c1419cd856862a066c76cb67ba6d11b5a8669b5ad0eea2424d194a70fa8be532a93235d3fe46ec542c409d08ccb562036afe7fad6d4b35cdc43a0a47e9c52c72c52ff3ce9792202aab848cf1673345048c857b0a13c410b6fca907d3d0edde274d38a91bce501d0201045aa4a5b18221069c4e322afa292d133a96cbefb21737b6a4f7c6d325bb8fec93aa40ad6a71a95da6a95832c12d5d0d65851c41358f1705d23d983f6dd9b5d2182f9efa804b9d66e7fd89ead1d931d575bb8ae3df7b593f353edd29b2daeb56fcb230e7a0c412a9e560e7dca1228ddbd34d1f97875a5802acc5983abbed1a3ed81316411eb07d1a0d36591018c0d58bf4b3bcc0886165821038a3a5546af5434156977d007d33258df0829b04ed8639611954b6032daa3080ddb0c2c8bec1be429e70a2eb8cc84e47527c9ade7f8f6caf716ee64ecdb551911c57e5dd4e6ca22defb545824923ea96b5fa25c60a6f25a1cd7b7bdf1c4776eec7a12a610d360377fc45988682201d934a71b50905f89109b46ae6773c77766ee788a8aea7aaf0f0c4946bf9fdf04fe2eabbaacaa958c3d6fbc440dcd73bafb07431f3d6cc1fe5dba1b9a1415a5e257bb3afeb606481b6b79db9964ff678f5f83e0c8d7d1c9cf85ed2d497de4410439a4c1ffef1dc915f0df977b7846c8c5878469a4c23d4e5920cb24410ef5b4f14d65f745ddebb48d2ea9c8b9fa8099edeea1ad658c32226c20552f15d5cfa86a540915f29584200e89ebb89788fe053f9ea603c6040000",
    ],
    [
      "ETag",
      "pakRTwn5qcUvtj/pYXl4yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1620694024143"
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
      "6b",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f49a80893650c1432dc10a566c5428149135196334c9a4bb1b631afcef9d5d4bf1d8cbeeec9b6f86f7b68353562630845d967ed528db8714f5bb29225475ae155f15950ac101d42235e46a424bfc0ebc8ff3e1d2cff06db1bc34cd68c4848a0f58081876b0cf304f140c3f3b2845813cb6dd4abb9131dd564699ce57e1248c58282831c27c3d9b3d8f67215c9dbbb1eaf4af91cdd58123ed22dca3c43246e3a29274c4584f4d40258a2a4757512d63546061db4825d59590442e2b6edf77bdc0ef054f839e3ff0067d06738a85cea86476bd646fa0498b3ca286f381cf80b42547dddbf3ccf2a3cd70b680b176df0bfe7a9ee96d7e178e5b8d6a2189dd2934c67a37932f648c6b0ea4658d0ec4827ff935d3b7f7f5077f7bb030c2010000",
    ],
    [
      "ETag",
      "bTGoSez61Xvhx3ieMPSxww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NjMsImlhdCI6MTYyMDY5NDA2M30.XUkRiMNWy7ZFVz0S4J1pHOmrFfd6tek13NP3kSKCNKz-LDevO2nhGzvRhf2nTR3QhfT8lH9vvjSfyWYvTyShQrcpjMlHJ8ih8zIGOqkW-KKhsBa1snmG6FiTJbrGne5rmqfMXmJAYZqrqJDCBeOIna-iSIUxYLjfpNPJjq15k0CO1CaGwGH5GgWQHuW30AaulTWWmIHFc-lWknBuZcqyq-AS6cp3slGhIPDIAGyF6m_xN4DTs1ZAGqsDWf2hZCPansXWmmP_1ioDDNs15I-i84ynnIxm_AQ0KEi6sBtlNxmxmVh40ZbbBkvzn7c2RVk04-b3cQfAyzWo29B3NmN2Ig"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d04b7282300000d0bb646d9c22504877fc3f05a10323ea86c110207e224d00854eef5ea74778ef0754181321cae17e210c7c80b9daa0355e7ff6ba59b60ded6f5bc63367eae263609592bbc3f2e1fcae844b6905d1c360171a1b8cd4badc8d345fea22ab2317eecfdffb5a358ef009756ddaf4da41f77cac9c775c04fb2133a6d18cda2ecc9dc8470241bd1f25a4150186968085708624cb9362a41bd976e6fb5c67cb85cd5ecab6b6fa2687f7c66e1ef1c95d2c6ffe4a24e994ea8a7fbb26944e48c5699c33efa8a95c2b607e75db2a6d17fec02e0fa86d79c8012b409e3de54494f4c595558456e0df5e0e734f5e0126a938e1e0f70fffc5605c1a010000",
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
      "Tue, 11 May 2021 00:47:43 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-33-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fa34014fd2b64f6ab2d541e7d24cddab4b876d35217a8c66c3664985e7094322c33688ce97fdfcb605d8d897e6266ee39f79cfbe099dcf372472624e5f9df06eaa76f772225270414cdf17563ba11f776ccffe956d58adf2ccc6876f9389d2282b72c49f755013d299a9a819c6ca37e5e8ba6a2b5103d4cd4b3eddec03bb5bcb1639d3a03c7469e84225bf1f21ed9b74a5572629a47ed7e2e445e00adb8ec33b17f7d371f4ecdaa1677c09434df4b9aa822cdcf45bf178251c54539dd4668a0915027b0a7bc400bff99bbf4ec7dea3ea7fb7e8ee007ce8032269a52b5b630051365c6f3a6d659c9e499689b6f0e24f257fe3c3698289a7d9994740f27c68e2a9aa8a70a8cf370b33696c1f9265ccfe2e52648a2f985bf9ef5e79bd5761d44c6f5851ffa86a269019a6b4c8d337d0bf082fa3b908a975a3d6e9f5be597062d3f8ea525a0b4842e980c2d8f0e46d638cdd221cb46b69b6616a4e9281dbad44e2d3676c0d9a54091a745358b96a2b46d2b65e9c84e46e30c12c71b8f93d1d03a4dc01b0c60e0b88e9b39e470421e6bae60c1652524ef3a44aec365ec2771b80de6b3d8d72564b429d4a233d616f0d6a3c20211f4494d8736ca052ab5ed5e06b11fcee6f1f2caef26bc829cb2a7e82fce38a3850444d31a9ba7a05e8b1d368c04b3b5bf40b09ed8e53128c9e4f733697bdeba78d3f2577a8c036ced2afd25511c2e831fdace1171458b46431eba03a9d0f22dd686ae0f7f10894bda6521bfb67e7843baa71032a8a1645f4f13c13af0e5bf765c7cc4e2eaa38c5478c7dd61b2156135743bc475b947b6670f5d8f6870ad3ec4c603f7d8b536479b11f650aa978abac5c7423bb146be823088e30f74b70eff00422a3c1e78040000",
    ],
    [
      "ETag",
      "O/5Si6dcEJ5ppLiYD/SAPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1620694024143"
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
      "92dd4e83401085df65bca5b12d4895a4176dad4ad21f6da93131a65961402a30b8bbd8344ddfdd59acd5a889dec0ccf0cd72ce812d3ca745041e3ca6c94b85727394a0be31c50c559569c5b7920a8560016a913059aea676aceefcdbb67fbcb0d7c71d4d8371d2ed32a1c227cc05785b8853cc2205defd160a9123af85945579b1ac3b0bf4a634c37930f32797dce714997eb2188d7afdd11076d66131125a2c6bfe1f6b0f3b0b56f438c3182516211a2da5a41586da373695c8cb0c1b8a2a19a2821aae1f2492aa5248a2064f1ab6dd68b9eda67be634db4ecbb119cc28143aa582d9c59cf581262db219add925b80cc8ba64c3717d7de5711ad5464ce94f02d7a9f57d05585a9c66b8fc1b64bd4f823fc307b68fe03b2772aa0a7da02e46d3de6fc771a69f479df782e10f42694eea8004fe78380f7ae36bc33decbdf7371ad5b5240e52a1c9b0d5744e4f3a6ef33dd60199a8f93d9e96155a100afe3bae520d5e2c3285bb37041836937b020000",
    ],
    [
      "ETag",
      "pjO3fsXIV2I/U3w/7toCMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1620694024143",
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
      "fd",
      "4f",
      "db",
      "30",
      "10fd5722ef1790fa91a46dfa2121d641c63295b44b53109aa6d6769c609ac6c1761815eaffbe4b42810e09a44aa9fddebb7b77be7b426b9e456884084fee0b26b75fee04410dc4344ee0762dc830f1e8fa717df718d8c51aff9c6c67c9c9093078a9527893a7aca944212953a3c5bc954851e4580ad18440cd4eb76939b6e90cbba6ddb5ba1dd02996c6139ead417dab75ae46edf63e772b11224919ceb96a51b179b96f3fd8ed5c8a3b46b56a1fa66c4316d5fe38e9692a28d65c64278b39182814934bb6c13c050bafca887c3d0cdde278d34a80fcc029c3948a22d3a52d08414516f3a4905554347a4295cd377fd0dc9db867a171e9f947ab086bb63a36b032964bc95491ea86b1827a629eb2258f563592af8defc1f41210c87e8b15532be3fa871bb8c621d9f38d85efbbf3d0383a3d362e82e962667cbb39e080c38829cdb3ca5f8849ca4a6fcf2df4de3f5c29c01a72d6e0b26f3ad81a984312933e8d079d1e894d46c880f47bb8434c3aecb26e4418069d2ea3572a9c89cc8ca37e3f8e2d8a87d88aad5ec726fd8e63f6cc1833bb47ec3e71c8c0c43db46ba0bf926b76ce552e14affb88ae032f749761b0f0cfc6a15b951163e8d7796dae2ce2ad4f0d4502e983ba7625ca05642a1fc5f34337189f85de955bcfc18425986ee7f73009314e1503369678c33493972282a6a1d974ee85ded41f4f40513dee6ccf5068f4fbe955106ef3aacbbafaa271108c6f4083a5c4dbff30f0e174d16ef726dd154e8b8a52f1ab531dffa1069005b5bc9e6cb4fbb3835f03c1c0d7d1d1af851bdca0fa2a6031932ca39fbf3b902be0d3bddd2f1170618d208dd2708629a3aa4c4225aba78d6f2abbcf6aa73bb02d5491a57e870d1d73dfd6324619916d58a69f2baa97a86a540915ea8504200c89eff9",
      "1780fe03cd39e65ec4040000",
    ],
    [
      "ETag",
      "kob9gIckxkjxR2ukaJLyPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1620694024143"
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
      "90",
      "51",
      "4f",
      "c2",
      "30",
      "14",
      "85",
      "ffcbf5d12dd9c6244ac203c8022404758e274348299731d87667db6916c27ff7b618f5c1a4697b4fbfdb9ed3339c8a7a0703d816f97b8baabbc9d1bcd84d8aba2d8de6a5a15a23788046e44caa2e8a9793e04967d99dbc9dde1f8e98cc46c321135a1eb0123038c3bec072a761f076865a54c86d9b8d72373266bac62a9351967055d1ce56cbd562311a2f12b8787f7a9ad32f3f5f66c93449ff6b595f3c38d236c53d2aac255a0b8da2234a33b7e9b4a89a127d4dad92a8c1c1ee2057d4364211f9acf8bdd80ffb51d07f8883280ee31e832549610aaa995dbdb23730644499d22787838801e5b69c73efe60f2b0751e007110f17c649cee3bf50f80385165a7f3f31ee0cea6745ec57a3b51a5c6d3f928d6238a2512d7a20057ffaac30d7faf205fb991d61d1010000",
    ],
    [
      "ETag",
      "ry24ND0OsTT5c+G8hjeEHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NjUsImlhdCI6MTYyMDY5NDA2NX0.Y6AR84unemmMsqfJBGMcEJEFb0cBABYu9iKb5ihOhq852yulYCB8uthGNLN3HvAaiPZ0OS8lfjJ1Uyd1TI47A_pYlv4WwqmQhsypn3Q-U5LIp0ny3tze5nigYSqNgGmsDEUlrHuYSAmaBs6EKqLvyVdDB53xqqiMd6g_GXBdNms77LgB_YZcckHs-IRAWlVJF2KcnwqZ7lFZ50IkcUtdEKWhuToXUmYkQAPCZb41nAyj4QZIdO3zfpCNgXw0PlesNpYzR0VUkjmHB5GoETddXJwGCtr_kk1GTtZL6J6GpE1ZJwJ0GDrGk7tqNLmyNgPzbWqkd44oYfNJOXAwaUEF8A"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dd0db6e82300000d07fe9b318a15cf72696d50be01405c34b43593b1a153aca22c5ecdf67f609e73c4155d74c29327457d68237a02b2b98d7f39df443f2c561ba6f0c6191cf0373ee31b28cd5c6bc2f32a2a2fdd2c3aad9acefbaa7764761f11039da2f34c762f0f1357c48bf2ba9b13ef2958de43a777383f1c835e9540af7d208c7310b3ffac66e9b4bace8f56406e75bbf23db2ce4a37fba785953a728813d2747f712fc0ca65d98284943948c5ebdb1f4fbc11585073fb20e416b4ab6138db84e601ed3349e06de2c1fa99870503ab7a3c239aac6b23eb712cc001ba5e89922e2c5854e10ccc0bf9d0c5ab25740c8aa9ef5e0f70f425856ae1a010000",
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
      "Tue, 11 May 2021 00:47:45 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-35-1620694024143",
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
      "ff85536b4fa34014fd2b64f6ab2db4a50f9a346bb7a292b45481ea6e361b324c2f384a1964866e8ce97fdfcb605d8d897e6266ee39f79cfbe0993cf0624ba624e1d9630dd5d3b77b919013028a66f89a9af9c6a3174fe1a3075ef8e3aa50d6e5cfebd90c11bc6149ba2b73e84851570ce4741376b34ad425ad84e860a2ce60d8e98dfad6c8b1adbeddb307c89390a74b5e3c20fb4ea9524e4df3a8ddcd84c872a025975d2676afefe6be6f9695b807a6a4f95ed24415697e2efa3d178c2a2e8ad9264403b5842a861de5395af8cfdc26a7ef537739dd753304ef3903ca98a80bd5d8c2144c1429cfea4a6725d367a26dbe3990d05dba8bc86022af77455cd01d9c185baa68ac9e4a30ce83f5caf0fcf375b09a47deda8fc3c5a5bb9a7717ebe566e587c6eda51bb886a2490e9a6bcc8c537df3f182fa5b908a175a3d6a9e1be59706791fc7d210505a421b8cc7d688f6269693a4c998a593c130492d489249321ed2416231c7067b9b00459e16d52c5a882261b4ef388351dc1b4e20b6fb0031ed394e6c4f4616008c1cc74ac9e184fcadb882332e4b2179db21721b78911b47c1c65fcc23579790d23a5767adb1a680b71e151688a04f6a3a34512e50a969b7e7476e305f44de8ddb4e78091965b8b638e394e612104d2b6c9e826a25b6d830e2cf57ee1982f5c4ae8e4149a6bf9f49d3f3c6c59b96bfd2231c606357e92f09a3c0f32fb49d23e286e6b586ecdb0329d1f21dd686ae0f7f10894bda6621d71b37f845daa70052a8a0605f4f13c13af0e5bf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b947f66868f7c744832bf521361cf68e5d6b7234196107857aa9a85d7c2cb415abe52b0883387e5f77ebf00f7b08fb8478040000",
    ],
    [
      "ETag",
      "f/lUIaGySqIeISBPnt0HXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1620694024143"
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
      "0002ff8d925b4fc2401085ffcbf85a122ea54a131e8a964b04c4525e34842ced140a6db7ee6e4524fc77672ba251137d6967a6df6ccf39ed01b67116820dcb78f554a0d85fac50ddebc24359244ad22de799443000155b11f9f0ba596efbc2654e377437ad1ebedc16f9aedd2642066b4c19d80788624c4209f6e301329622ad053c29d26c517606a87dae8753df1b8c7bd4a73cd4fd78361c3a9da10b47e3bc1832c51625ff8fb5f9d1800d5f7a18a1c02c40ad25177c83811a689b92a5798215c90b11a084122e1fac042f722638afd0a4d268566a56bd6ab5cc6addac990d02131e3015f38cd8d994f481e28a251edf914bb00810654986a3f2fa4ce3382c8de87230f62db3d4f7152069519ce0e26f90f4ae197d860fec14c1778ea5bcc8d499ea0eef9cdf8ea34c3f8fba717cf7072115257546fcc1c89dface68a2b9f9c97b67af504e04a72025ea0c6b55f3aa796955df63bde63a6a7a8fad448106048cfe8e7eacc08e5822f1f8063ffa97057b020000",
    ],
    [
      "ETag",
      "ZzjbkHrEaAFdEj9GexKupw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1620694024143",
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
      "00000002ff8553614fdb3010fd2b91f705b4b649d390b49510eb20834825edd214564d53eb384e30a471b01d5885fadf774928d021815429b5df7b77efce774fe88ee5311aa288a5f725159b2fb73c422d44154ee1d6d5077e594e17e7b1ebfebd4fbf4e27ddd1f8f1f81818ac5249bc2e32da96bc1484cae17cd649052f0b2c386f43a076cf6e776dd3b00796615a5dab073a49b364ccf23b50df2855c8a1aeef727752ced38ce282c90ee1eb977bfdc1d40bc16f295152df4fa94316a97f9cf424e3042bc6f3e3f90c0c94928a255d6396818557651c7ddb0fdd6178dd4981fcc008c584f03257952d0841789eb0b4147554347c42b5cd377fd0cc1dbba7a17639fa75b08ab1a2ab430d4b6db9145496996a692ba82761195db278d520c59df623985c0202d96fb0a472a55d5fb881abed933d5f9bfbbe3b0bb5839343ed3c98cca7daf7c51e071cc6542a96d7fe421c65b4f2f6dc42effdc35502ac2067032e1dc3c6ddbe318892c82149bf771425068da27ee41ce15e64908145ad38a21874aa8a5eab70cef3d8b1ac6e9224b119c54e6299a6d97730ed3aa61d39466c447d625b964d0cb46da147c1143d63b2e092357d44d78117bacb3098fba7a3d0adcb4830f4ebac315715f1d6a7822281f4415ddb0a651c32558fe2f9a11b8c4e43efca6de6604c534c36b37b9884046792021b0bbca68a8a4b1e43d3d07432f3426fe28fc6a0a81f77ba634834fcfdf42a083745dd65557fd12808460bd06021f0e63f0c7cd816da6edfa4bbc25959536a7e7d6ae23f3400ea422daf27136dff6ce1d74230f04d74f473ee060bd45c0534a182e6e4f37707720d7cbab7bb25022eac11a4910ace306544564988a0cdb4b1756df7596ddba665a19a2cd43bac671fedda5ac5a822d235cdd57345cd12d58daaa052be90008421f13dff1cd07ff8d85616c4040000",
    ],
    [
      "ETag",
      "E/9NuuPYGdEExqg+PO1ALw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1620694024143"
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
      "90",
      "d1",
      "4f",
      "c2",
      "3010c6ff97f3754bba423090f000ba2009824e161f0c21651c73b0ed66db6908e17ff75a8cfac04b7bf7f577edf7f50487a2dec2003645fed1a23edee4689f5d91a0694b6b786ba8360801a0553993493a7d5ccace2412b8a1f2367b3572b1c88743264cf68e9582c1097605965b0383b713d4aa421e5bafb5bf91317b6c9c723f5ac6dc55b475dd3c9dcd46e3590ce7e0df4c73f8e3a7f3653c89936b23ab73007bda24b8438d7586ce42a3698f999dba7446554d89a1a1566768c0c3fe20d7d4364a1385ac849d5e18f5a4e8f5bb4276a36e87c19232650baa994d5fd81b58b2aa4ce88bc3816440fb9273eefcfae9642145286418f57d182f798fd720297ea1c841ab9f27c6478be64913fb35e8ac8a8bed3b72512c47b4bac50032c59ffe50d84b7ffe06e90f98f8d1010000",
    ],
    [
      "ETag",
      "RUIMT23G10ebol7cWs2OOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NjYsImlhdCI6MTYyMDY5NDA2Nn0.c3A8PULH9_wEm_Q83U9EnR62o4VPRmAmF0MODWJHK6wW5RGiUFV_f5ny0gB3SQtOlxdEWpIBWkYOHboMLZ_BpKJBuxftJ6aNgSIa2qVZ1na-H4tBSmgEt59O5hwo0_09duS86upK4y7wHzlZ75AxC4ypdCWiA0XGiql1_aD3jmLn_xJiYI4106zaSmBfgW2YiYFALRsxLHzCZXvNf6_fPwQo8O2a7gZf088KiAaGDYF1jlD-hp4c_ZeRUTfoxbC9VxPtNMShmhEEatbcPlpgai1JSIhPSRODKbUSExzvNuNRw2mDhvkofLJOqA2deQyh_ZiEwHyL0w5vBFqlStNGvg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "c9",
      "72",
      "82",
      "300000d07fc9591da4acbd89c654651164dc2e990861110d81209bd37fafd34f78ef0d4814512170531694816f3010d99c45b31d372c9cd2a7907701176cd0360bfac3151f21b5d39f5bd43c344f0a655117eb3ec90d9c1a89fdb82b97bdb276ec7d857d5b34b074a1038972868705ebb959cc851b70adc551b519376a7cc8625f6f74228e4b7e1a2529bbc51972a2b017924d6b397855e6947add791a560341fc760a4a68eb72d8beee8a7740fafc165a7950a6195b65dababe4ee1b895562cf69d04b58c5e87c162731f1ea17729965d64b8854ac004d09ee7351538ff70bf54d39c807f3b6e064e3f01162535adc1ef1f9dd1ea721a010000",
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
      "Tue, 11 May 2021 00:47:46 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-37-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fe24014fd2bcdecab4081022d095909566503652d4563369b663abdada3a5533b530c1afefbde4ec5d598e85367e69e73cfb91f7d210f3c8fc998443c7daca0dcffb817113921a0688aaffbabbb8bfbfd736ff3fc105d4e6f17a9f3ebc67f9a4c10c16b96a4db2283961455c9408e37eb765a8aaaa0a5102d4cd4ea8f5add61cf1c3a96d9b3ba561f7912b264c1f30764df2955c871a773d46ea742a419d082cb3613dbb7f7ceaed7294a710f4cc9ce47c90eaac8ced7a23f33c1a8e2229f6cd668a0925086b0a53c430bff997174fa31759bd36d3b45f08e33a08c892a57b52d4cc1449ef0b42a7556327e21dae6bb0359bb0b7716184c64d5360f73ba851323a68a866a5f8071eeaf96c6dc3b5ff9cb69305f79e17a76e92ea7edd96ab1597a6be3e6d2f55d43d12803cd3526c6a9be797841fd18a4e2b9560feae75af9b541f3cf63a909282da10986237348bbb6e94449346289dd1f448909516447a301ed4726732cb0e20828f2b4a866d15ce4bdd866769c2461df1c8d426b689ba16d59341c0d7ae0b081d3edc1801c4ec853c9159c715908c99b0e911b7f1eb861e06fbcd93470750909ad3275d618ab0b78ef51618108faa2a6431de50295ea76cfbdc0f5a7b3607eed36135e404ad97efd88334e682601d1b4c4e629289722c686116fba74cf10ac27f6fb189464fce785d43daf5dbc6bf91b3dc001d67695fe9275e0cfbd0b6de788b8a659a521bbe6400ab47c87b5a1ebc35f44e2923659c8d5c6f56f49f3e4430225e4ecfb69225807befdd78e8b8f585c7d94910aefb83b4cd622ac846687b82ef7c81e0eedbe4334b8549f62ced03c76adce5167842de4eab5a266f1b1d046ac926f200ce2f83dddadc33f7231ef3f78040000",
    ],
    [
      "ETag",
      "yQhGjyz2UzkbHAYLg9JWRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1620694024143"
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
      "92dd6e82401085df657a0b893f142a8917d8dad646ad22deb431668141b1c0e2ee62638cefde596a6dd336696f6066f86639e7c0015ed2220617c274b5ad50ec2f56a8a6baf051569992742b7921110c40c556443e6c3a63ab35dd555239811f3e8d42679b7bdd2e11325a63cec03d409262164b709f0f50b01c692de2599517cbba3340ed4b3d9c05fe607c477dce63dd8fe7c3a1d71bf6e1689c1763a6d8b2e6ffb1b6381ab0e1a18f090a2c22d45a4ac13718a981b629595e66684a5e890825d470fd6025785532c1b94913b3ed984dbbd5b03b56a36535ad3681198f984a7941ec7c46fa4071c5329fbf924bb0091075498693fabaa3711ad74674391807b655ebfb0a90b424cd70f937487ad78c3ec307768ae03bc7725e15ea4cdd0e1fbddf8ea34c3f8fbaf182fe0f422a4aea8c0483517f1678a389e61627efbdbd4239119c8294a8336c36acab4bc76ebcc77acd75d4f41e57890a0d8818fd1df7a902376199c4e31b4e0a8f427b020000",
    ],
    [
      "ETag",
      "Jj9N42Qvust7TRbZMb7qmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1620694024143",
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
      "a2",
      "40",
      "10",
      "fd",
      "2a",
      "64",
      "ef",
      "9f365141c59f89e97996eb9158b48836e672d10506ba2db2767769e3357ef71ba0b6f5aed72624b03befcd7b333bcb13b9636948fac467f17d0662f7e596fba44240d11877af5af271bab02ef4f1f2b7e08bc96491dd44f160800896b324dd6c13a84a9e8900647f3eabc582675b2a38af62a26ab35badb71b46bb671a0db36e3691272189c62cbd43f68d525bd9d7f583762de63c4e806e99ac057cf3b2af3f34f4ade0b71028a91f4beaa822f58f45cf121e50c5783a98cfd0402641ac60435982165e99a1fff538758dd14d2d46f0030b800601cf5295dbc214014f231667a2c84afa4fa4b0f9e683ccacb135f2b4d164ee78276bbac9c9eb538d4a6db51220b34455b435d614b104562c5c9791ed9df6dd9d5c62041ddc500972ad5dffb05c4bd3d63968a09d6943e75c3ba6da8e36771c6be6692767a7da853b994fb56fcb230c7a0e412a96168e3dea2790bb7d6eaafdef51e604aad041195c758c36ad778d9e1ff99d20ea365b7e6480ef77fd4e8b367d23e89960863e50e4a93c7bc1a2294fdb4069db6fd6a151ef98b417367aa61f42ab57af07d06902edd228340c13c8be421e055370cee4964b5676965cbbb667ad3c77ee8c869e55941151ecde79692e2fe2ad4f854522e883baf679947154ca8fc9763ccb1d8e3c7b61959331869806bbd93dce4644130988a6826e4081b8e421368d4c2733dbb327ce708c8ce2b8a7078424fd9f4faf046fb72dbaac8a77aed5360bfd03604193ac403c941fa4de22fb7de5ff2986ae3b5ca22c1582eede4fff6efe025fac4a8b2f7a24573bac1a64ff6b8f4f85e02d2a",
      "b393abb9e52e49b9e5420402d2e0f3d1417011f8f46770b89988c5bb893252e11a073590b94820a01c58b629ec3eb3db9d6ebb410ab0507fc770483b8793c973e4196103a97aaea8bc9945a3f250265f4018c439736ce702a37f007b51bd0719050000",
    ],
    [
      "ETag",
      "Q5swPVEG/LYzroVOOVuhfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1620694024143"
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
      "0000000002ff8d905f6f823014c5bfcbdd2b242ae836131f7433eac2ccc666b23f31a6e085a1c0ad6dd94208df7db7e8c31ef7426f0fbfd39ed3068e59b9873144597aaa50d557299a673b84a8abdc685e24951ac1013422657231c48ff7fbd94324bdd36341433f7abb5e4e27132674fc85858071034986f95ec3f8b3815214c8b6dd4e752732666a6995d5fa75be98872c14b4b7c27a1304d3593087d6f96393c77f59b6ad03078a424c506119a34d21151d30362b5b508b42e6e86aaa548c1a3ab8fb912aaaa450442e2bae77e3f64783dee8d6ef0dfcbeef3198532c4c4625b39b17ce06868cc843fae17ed067407523574dbaef7727db0e9769db6e2fa6596d503f29e2041aede5bd73903bb2e10c8736aa420762c12fb9cccc79dffe0229e2a5baa6010000",
    ],
    [
      "ETag",
      "G5eZYDBJbp3qMmo54bX7HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NjgsImlhdCI6MTYyMDY5NDA2OH0.hNnT6w1T8uDEHptJ81jmnmZcWjjRgzdadu0pz1YmLyVo5ayEWgzqt-4zcTjCIEHYJOxCzTGhIyiSGLYHRyV0Q1XciI7FvzS0t1r13kaXeTCB0-1CpNlyumHOhGKLvFrC069z0IDZtLPFZ8pN5Ghal8DLxqBMqvVQkHpC39JcF6y9Wq4W9GKjFvAjdErh3s-uxsNB1NRQFZC1BDkEv5Y7zXpTqNpvmiUHFaoiIt6RYHcd3VTBbRPiY70vNhMCa3KMSJYRborPzl0PZHD8DKcgcf_B4Osri1i7lPhr1Pqo4cVzC7AvohIc3SFwWMcpCHtMcxCvQauGDvBoJF40XPYgIQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff1dd0db7243401800e077d9ebc81034f42e682ac9228da836373bc8ef6cb18843a7efde4c1fe1fb7e501045d075a4af0ba0e815cdc1465d47eb53a3682489b9f38e73847698ca0e4ba7e4f0e1e9451e31ff3857826551835e259163c1fbe2f36d667593abdf0f95f49d9a3593deb894e5e481b5a6f70b08d33dd567b0d5c8c0f67d30c64d99421c0ebbd081639a8041a6462c53a6514177b7a62fd30b05cfc4f3ac072fd35923f646c25b28a968e55e9b38d5a75ef0d2588e8eef8a0e0478bae245ac2b5b094df7322af297c06961480720b76af0626f69f8dbbe432b04539331e848f6e48ab2aaaed0bf9df47303cf000d02060cfdfe01dbfdfd221a010000",
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
      "Tue, 11 May 2021 00:47:48 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-39-1620694024143",
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
      "ff85536b6f9b3014fd2bc8fbb826e44108448ad628a14da4405620ada66942c65ca85b8219369dba2aff7d1768ba5695da4fd8bee7dc73ee832772cf8b84cc48ccb3df35548f5fee444cce08289ae1ebd5da157fddab9549bf86f781b45c737da967f3392278c392f450e6d093a2ae18c8d93ee86795a84b5a09d1c344bdb1dd1b9aa381691b83913134c6c89390a75b5edc23fb56a952ce74fda4ddcf84c872a025977d260e2feffac3482f2b71074c49fdada48e2a52ff58f45b2e18555c14f37d80066a09550407ca73b4f09f99c4e76f53f7393df433043f700694315117aab185299828529ed5559b95cc9e486bf3d58104ced659861a13797d28a2821ee04c4ba8a2917a2c41bbf077aeb6f12e76bebb08373b2f0a966bc75df497bbeddef502ed66edf88ea6689c43cbd5e6da797bf3f082fa0948c58b563d6c9e1be5e7066dde8fa521a0b4842e184d07261d5a033b4ee3294badf1244e0710c7563c9dd0713c60b601461203455e2bdab268210a8021d0c9d08812db82c8b08649446d1baf13cb9cb278948e4723723c237f2aae60c5652924ef3a446efc4de844a1bff7968bd0694b48699dab5567ac29e0b547850522e8839a8e4d940b546adabdf142c75f2cc3cdb5d34d780b19658fc16f9c714a730988a615364f41e58a041b46bc85ebac10dc4eecfb2928c9ece713697adeb878d5f2177a88036cecaaf64b82d0df7897ad9d13e29ae6750b79e80ea444cbb7581bba3efe42242e6997855ced1dff07e99e7c48a182827d3e4d04b7814fffb5d3e22316571f65a4c23bee0e938d08aba0db21de967b629bd6c434480baed4bb9869dba7ae35399a8c7080423d57d42d3e16da89d5f20584411cbfd776ebf80f396d269678040000",
    ],
    [
      "ETag",
      "QHMozMQD6a+TkSs8M6HG/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1620694024143"
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
      "d1",
      "53",
      "82",
      "4010c6ff97ed319c41254a667cd032633252c187a6719c1316c480a3bba3461dfff7f6c8aca966ea057697df1edff7c10e9ed22202079669f25ca1d89c24a826ba98a2ac3225e956f2422218808a25449ee69e6b2acf1f26e9f8e176659adbce369c74bb44c8708539036707718a5924c179dc41c172a4b59067555e2ceace00b529f5d00fa6ae37a43ee791eebdd968d4eb8f06b0378e8b11536c51f3ff589bef0d58f3e51463145884a8b59482af3154aeb629595e66d890bc12214aa8e1fa4122785532c17983268d76a7d1b45ba6ddb1cc96d5b4da04663c642ae505b1339ff481e28a6553fe4a2ec12640d425198eebeb0b8dd3a836a24bd70b6cabd6f7152069719ae1e26f90f4ae187d860fec10c1778ee5bc2ad491ba1eddf77e3b8e32fd3ceaaa170c7e10525152472470ef067ed0bb1b6b6e7ef0dedf289463c12948893ac3a6695d9c9ddbe67bac975c474def7194a8d08090d1df71932a70629649dcbf0133411d9a7b020000",
    ],
    [
      "ETag",
      "+mNI0tNSGgiPYKh00z9zcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1620694024143",
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
      "000002ff85547f6f9b3010fd2ac8fba7d5f283004948a4a8cb52da21a5a425d02a9da6c41043dd02a6d8648aaa7cf71da6699b756b2524b0efbd7befce679ed003cdd66888021a3f96a4d87eb967016a2022700cbbfaf5e6364a1ce3ab916d173d73737be68bc1d56804085ab1384ef38434392b8b90f0a13f6fc5052b735c30d684444d436d767a9ada1b18aa66740c1d789c24d194660fc0be1322e7c3767bafdd8a198b138273ca5b214b5ff6db1bad9d17ec9e8482b70f25dba0c2db1f8b9e242cc482b26ce4cfc140c949b12429a609587865ae836f87a95b14a7ad18c01b1a121c86accc44650b52842c8b685c16322b1a3e2169f3cd079a5b536be2299399ef78472b9c56e4d5b182b9b25c1684978968282ba829a20959d2f5aa8ee40fca993bbb800838b8c39cf09572f3c3722de5756ba58c941365ec9c2a87096c47f11dc79a7bcad1c9b172eecefc4be5fbe20003ced7840b9a49df1e0e1252797e6eadfdfe402b0216205a07977db5873ba63a08a2a01f46a6de0d2295048119f4bb580fd4706010631d100c3c5165972c9cb14cd57495e87d78ba9a61848686fb03e0e966a49baa190d5453237db3d343bb06fa5d50414e29cf19a7757fd18d6b7bd6d2737d6732f62c594684a187a7b5b9aa88b73e051409a00feada5551ca40a93a2cdbf12c773cf1ec6bab9e8f298971b89d3fc2844438e104d0b8c02911a4b8606b681aba9ccd6dcf9e39e32930e4a15fee111c0d7f3ebd12bc6d2ebb2ce41bcd3dd776cea5813de21a27a5846cea0f34cec12bdaed1aff4f3376ddf102a47151e0ed5f3128a76754f47f4848bc5cd536f7921d54a9ed571adafddac1d340709feaece8cab7dc05aab75c12918264e1e7e3036019f8f4b7b0bfa380855b0a325cc01a8635e4954858907a68692aed3eb37b83aea921092ec4bb58bfa3ef4fa7ca51652429c9c47345f51d958daa42257f01411066cd9107b5fb03eb4d43ea23050000",
    ],
    [
      "ETag",
      "3VvZflN4+4nyY68vZFUt9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1620694024143"
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
      "ff8d90416bc2401085ffcbf49a408c41aae0c1145b2da96da39642115993318d26997477a304f1bf3bbb96e2b197ddd937df0cefed09f67995c2003679f6d3a06cef32d4efa688513585567cd554290407508b8cc9fbd7974977d23f7e3eb6e1e2237a0e67f17e3e1a0e9950c93796020627d8e658a40a065f27a844893cb65e4bbb9131ddd64699ce16e3a771cc4249a91166cb281a85d118cececd58bdffd7c8eaecc08e36316e516295a071514bda61a2a726a012655da0aba891092ab0b06d64929a5a4822971537f0dc4ecff77afdc0f3834ed065b0a044e89c2a669773f6069ab428623a723ef01990b6e4a85b7b1e58eeda0c070b186bb73dffafd731bdd5efc2b0d5a8de24b13b85c6987735f940c6b8e6405a36e84022f89727b9bebecf17ad69aa7dc2010000",
    ],
    [
      "ETag",
      "8OMH3H9wXFyBTVLJBNRkSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NjksImlhdCI6MTYyMDY5NDA2OX0.GJBvRSHSU1gNWRpK4wBuG5__i71JgaQ_m_7xCw8QPyqBweGzHMWMSeefVdO_AEVSQzoVvpK3dIuoNf8WxLtKj7fSrJ5xZSiPrmGCTo2uv1QiDXwJ7t-iz-wnGkHTndStdfJXPuuTObVMpuUWXNfrs03nUvR28Imx0mE_whry695mVoyoHPujSs5LcMI-iw0hWB7f6a9HuMeCpHxH9l8F3fq3bZWXMhLAeE57iLOiDbn71JTfS4QtBhO5cgEJ79xS0sNuJHF0Sl6D8VEIDvoG-xGIKhvcdwWkQD4ZEhDrEZ1aK9ZbceG8WuTV51eSSmcHWwiEz_brDDw5m5_OSNctYQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dd0417282301400d0bb646d1d3108d29dd15614da000a563619841f8b18c8043068a777afd323bcf783b23c87b6655d53418d5ed13d9b3ae37cecc9396167c046780d8a8d4bee3c2e8f4b6dd5ef11ee6219e8ee632f0ea14dafa9d87aee64d51c703250613d2cbf08770f58a6c6440c8476f2fc6d565159c9ebd43e157136f59374259a321a3c1a7ecdcdf6d3ad3bcc87e39b79c3a9210e6a0155cfb12cb47ff11ac667243489dbc30a64c24f854893a53644ae6b115c32dfc36ee0ac77b6eab9fbb25d18219b03e5741f59b3f85630d62b9bae89e36db47234bea1118241960a5a563eb978e63823f46f67dd5dc2338040a640a1df3f227564641a010000",
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
      "Tue, 11 May 2021 00:47:50 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-41-1620694024143",
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
      "02ff85536b6f9b3014fd2bc8fbb8e6097910295aa384ae9102e980b49aa6091973a16e09a6d8f4a12aff7d17d374ad2ab59fb07dcfb9e7dc07cfe4961709999198677735544fdf6e444c4e08289ae1ebc5c3633d75ad60b9325902a3d1d9aef8becde67344f08625e9becca123455d3190b35dd0cd2a5197b412a283893ad6a033180ffb63dbea0fad8165224f429e6e78718bec6ba54a39ebf58edadd4c882c075a72d96562fffadebb1ff6ca4adc0053b2f75eb2872ab2f7b9e88f5c30aab828e6bb000dd412aa08f694e768e13f33894fdfa7ee72baef6608bee70c2863a22e54630b533051a43cab2b9d95cc9e89b6f9e6400267e32c438389bcde175141f770622454d1483d95609cf95bd7587b675bdf5d84ebad1705cb73c75d7497dbcdcef502e3eadcf11d43d13807cd35e6c6a9be797841fd04a4e285560f9be746f9a541eb8f636908282da10d4693fe980ea67d3b4ee3094ba7e6284efb10c7d37832a266dc67b605561203459e16d52c5a8862cc6c662793248aed811d59a3691ad1899d46939139b2a7e6d81c9a037238210f1557b0e2b21492b71d2257fe3a74a2d0df79cb45e8e812525ae76ad51a6b0a78eb51618108faa4a64313e502959a76afbdd0f117cb707de9b413de4046d9537087334e692e01d1b4c2e629a85c9160c388b7709d1582f5c42e8e4149667f9e49d3f3c6c59b96bfd2431c606357e92f09427fedfdd4768e884b9ad71a72df1e488996afb136747df88b485cd2360bf9b573fcdfa47df221850a0af6f53411ac035ffe6bc7c5472cae3eca488577dc1d261b115641bb435c977b644ffa83e9906870a53ec4cce1f0d8b526479311f650a8978adac5c7425bb15abe823088e3f774b70eff00ed29471378040000",
    ],
    [
      "ETag",
      "Pwxu8M4SCD3cde55FUn+Og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1620694024143"
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
      "000002ff8d925f53825010c5bfcbf68a336048c68c0f9a7fa25133c55e1ac7b9c2821870e9de4b668edfbdbd64d65433f502bbcb6f2fe71cd8c3639287e0c22a899f4a14bbb318d59d2ea628cb5449ba153c970806a06231912ff7cdae6935fa8df0c67b2d06e16a144eb671ab45840cd6983170f71025988612dc873de42c435a0b785a66f9b2ea0c50bb420f67fed41b0fa8cf78a8fbf17c386c77863d3818a7c59029b6acf87fac2d0e066cf86a8a110acc03d45a0ac13718284fdb942c2b52ac495e8a00255470f52016bc2c98e0bc46939a6dd52ca76e3a97b659b72dfb9cc094074c253c27763e237da0b862e9946fc925380488aa24c351757da67112564674e98d7dc7aef47d05485a94a4b8fc1b24bd6b469fe1033b46f09d63192f7375a2fac3dbf66fc751a69f4775db7eef0721152575427c6fd49bf9edd144738ba3f7ce4ea19c084e414ad4195aa6dd6c5c38e67bac575c474def719528d18080d1df719d287023964a3cbc01e82fdda47b020000",
    ],
    [
      "ETag",
      "xV8D015F5dJIzpGdbMdPwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1620694024143",
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
      "ff85546b6f9b3014fd2bc8fbd24a79007990448aba2c651d52425a02adaa694a0c31d42d606a9b4e5195ffbe8b699aa6db5a2952c0f79c7bce7d9867f440f30d1aa190268f25e1db2ff72c440d44244ee0f42e2ee6c155fadd15cec5cd55329f657ce04dc66340d08a257056a4a42958c9232246c1b2957056169833d68444cdaed934faa6de1f7675b36b743bc013248d67347fa8b24b598851bbbdd76e258c2529c10515ad8865afe7ed27b35d70764f2229dac7926d5011ed8f45cf52166149593e0e9660a01484af4886690a160ecc4df8f538758be2ac9500f889460447112b7359d9821411cb639a945c6545a367a46cbe79404b7b664f7d6dba085cff648db38abc3ed5b0d0562b4e4499ca86b6869a629a9215ddaceb48f1a07df716738880833b2c88586b373f6ccfd60e476b6dac9d6913f75c3b4ee0b85ae0baf6d2d74ece4eb50b6f115c6adf6e8f30e07c4384a4b9f2ede3302595e797d63a7f0fb4226009a2757065e97d6c0cf461188756140f3abd30d649180e42ab873ba11e0dbba4bb0909069eacb22b16ce590e0153c798746273605aa6d183b118fd8dd1b3cc7ec70ae348b7069da867a05d03fde65492732a0a2668dd5f74e339bebdf2bdc09d4e7c5b951163e8e1796dae2ae2ad4f094502e883ba7655943250aa86e5b8beed4da6be736dd7fb3123098eb6cb47d89018a782001a739c1149f89c6da069e872b1747c67e14e66c05043bfdc23041afd7c3e10fc6da1ba2cd53f5afa9ee35e28037bc4354e4b0579aa1f102ec02bdaed1aff4f33f1bcc92d4863cef1f65d0ccae9772bfa3f24145ebdd536f79255e70f6f26dafddac1af81e03ed5d9d155607bb7a83ef2484c38c9a3cfd707c02af0e967617f47010bb7146484847758d64854221127f5d2d24cd97d615bfab0d3430acce5fb98a10f06fbe95439aa8c2423b97ca9a8bea3aa5155a814af2008c2aeb96a50bb3f96a9fb6f23050000",
    ],
    [
      "ETag",
      "hfpMUQlFNsIGWQgMLmr8RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1620694024143"
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
      "401085ffcb7814128a5895a4076bd036a14da1f6608c69b630c56d81c1dd218634fdef0ed883474fbbf3e69bb76ff604475de710c24e175f2d9aeeaa404efa4b8ab62dd9cad1506d111c4056859077fafe79c5eb76b4b84e82d96da2a3c5db2a994c84b0d927560ac213ec3596b985f0fd04b5aa50c6b65b33380ac65dd32bf3e56bf412a5225494f7c27213c78fd33882b3f367ac39fe6be4e3ecc0817629eed1609d619fa23174c08ce7fd8256554d89aea5d664686180874661a86d942172457103df1d8d7d6ffc10787e300a6e042c2953aca91676b3966cc0c4aa4ce95bf6030f2ef5b463b42b43626e31bf74c4f189fa7759f2b069d1814cc927cd34ffd6e71f59fd03d081010000",
    ],
    [
      "ETag",
      "7i8FPtSu1M+Q4H5QiEMYPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NzEsImlhdCI6MTYyMDY5NDA3MX0.EUlnDHKQTha5It9360pbgl03Xzapf38-okBf9h6v1egSyM4e-V0YP8TocfiWk2a5ZFvFnVipmtgdFNoze_ZQYYCkIs5m70z6wCcTqakPUReX_mPw7-zRDu9GYj0BVxx72INYKFXpMkZSG-9r9VaslQcSruPrwrXiWCGz6WrtAvo5xRQ9nT2YlQRd5pDVmqO_PGUAzGE0aFEm795Jn7FnxSMle-7EzPdwOnoxBIuHF3isNOKbar8yJN0W1XqtFuxyYGEBiVI6mBYzjzx-q5cOJbNzbRkq7iyLEpbHQMrACpompadvs7B_CEJ3Tdxiedw0bLxyGidWmFTthfzQHN7eYg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff1dd0d97282301400d07fc9b375588a257d0b48b046290c2eb52f190c61d129e00db404a7ff5ea79f70ce1d654248a578df5e65835e91ce2c3c1773d6b91e2fa55d43ff4e36e7628fedd2c9bbf6584f83cfcec0b4118632bce47a23d6f869736a14899ee9e0c6d1c1c3c5d7894f2f26243be6d4d2dfd14056e1db40a78652953bf83358fe7469527f28e3686fe38b2fc71892ad99463eac79454c2bb2f4c2a2e1be2a553910b688307106af3127b1af60d409f15ac140a559b0ba2c8af67a2bc311fadba104ac63e5a646f14d9749b58a57ee969202528789feca059a2139763548c5eb07d776309ea17f3bef75271f019ecc4002fafd0314c1c0811a010000",
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
      "Tue, 11 May 2021 00:47:51 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-43-1620694024143",
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
      "c8",
      "fbda242490a714ad514257b4405a20adba6942b631d41d608a4dabaaca7fdfc5345dab4aed276cdf73ee39f7c133facbcb042d10e1d97dc3eaa76f7782a013c414cee075e23dd20d65d66318fcfa196e2fc88d5d5c5c2e9780e02d4be2a2ca594f8aa6a64c2ef6613fab4553e15a881e24ead9566f38199993b96d8eeca16d014fb23cddf2f22fb06f95aae46230386af73321b29ce18acb3e15c5ebfbe06134a86a71c7a89283f79203509183cf45bfe78262c545b9dc8760a091ac8e5981790e16fe331372fa3e759fe3a29f01f881538629154da95a5b90828a32e55953ebac68f18cb4cd3707143a5b671d1954e44d51c6252ed88991608563f55431e32cd87986eb9fed026f15b93b3f0ed7e78eb7eaaf77dbbde787c6f5b9133886c224679a6b2c8d537df3e102fa09938a975a3d6a9f5be59706b91fc7d212405ab22e184fcd091ececc3949c994a6336b4c5293113223d331b68849e736b313c230f0b4a866e15294649c0c2d9be238190f67b19d6012cf26e63cb6b1698d683a998d12820e27e8b1e68a6db8ac84e45d87d075e0464e1c057b7fbd8a1c5d428a9b5c6d3a636d016f3d2a2810409fd47468a35c8052db6ed78f9c60b58edc2ba79bf09665983e85f730e314e792011ad7d03cc56a4f24d030e4af3c6703603db18b6350a2c5ef67d4f6bc75f1a6e5aff40806d8da55fa8bc22870fd1fdace117185f346431eba03aac0f22dd406ae0f7f00094bda6541977b27b841dd53c05256b3927e3d4d00ebc097ffda71f1010bab0f3252c11d7687ca5684d6acdb21aecb3db2a743d810a4c1b5fa109b9bf6b16b6d8e36232b58a95e2aea161f0aedc4",
      "1af90a82208cdfd7dd3afc03d1adaf8378040000",
    ],
    [
      "ETag",
      "6MwcDce3wSRZKSLPbY4mPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1620694024143"
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
      "85df65bc2d093fa54a132e4041d182588a3131842cedb414da6edddd8a487877672ba25113bd6967a6df6ccf39ed0ed67116800d8b387a2a506c4f225477ba705116899274cb7926110c40c522225f829bfbe66a5af3af5ba1d37fa8afb7d16b7fd36e1321fd25a60cec1d8431268104fb7107194b91d67c9e1469362f3b03d436d7c389e70e4697d4a73cd0fd68ea389daed383bd715c0c9862f392ffc7da6c6fc08a2f5c0c5160e6a3d6920bbe425f0db44dc9d23cc18ae485f0514209970f22c18b9c09ce2b34a9988d4acdaa57ad9659ad9b35b34160c27da6629e113b9d903e505cb1c4e51b72091601a22cc970585e9f691c07a5115d0e469e6596fabe02242d8c139cff0d92de25a3cff0811d22f8ceb19417993a527de7b6f3db7194e9e751171daff783908a923a22de60d89b789de15873b383f7ee56a11c0b4e414ad419d6aae659f3d4aabec77ace75d4f41e5b89020df019fd1d57b1023b6489c4fd1b197e4f1e7b020000",
    ],
    [
      "ETag",
      "xdKV5jU1cJ9fLFX2kygzFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85546b4fdb3014fd2b91f705a43ef26afa902ad6b5618b54524853109ba6d6719c6048e2123b4505f5bfef26a140c70652a4c4bee7dc73eef5759ed01dcb423440018bef0b9a6fbfdcf20035109538865dd57e1cfddc92d3cd54f432fdf1227ab402f9301c0282952c81d375429b821739a162b098b7e29c176b9c73de84444dd36c6a96ae5a7d53d54dcd34802768124d597607ec1b29d762d06eefb55b31e77142f19a8916e1e9cb7e7ba3b7d739bfa5448af6a1641b5444fb63d19384132c19cf868b39182804cd9734c52c010bafcc30f87a98bac570da8a01bc618462427891c9d216a4203c8b585ce4555634784295cd371f686e4fedb1af8c670bd73f5ae1b424af8e152c94e532a7a248644359414d114be89285ab3ab2be534ebdd91944c0c10d1654ac94ab1fb6672bca2ac492ae94a172a28cdc897248765c65e1baf6dc578e4e8e95efde6c71ae7cbb3ec080eb900ac9b2cab38f8384967e9fdbeabc3fcc92802578a883cbae6a61ada7f68328e892a867748248a541d00bba1d6c042ae99bd40c038a8127cbec150b673ceb69916104964168cf308865d09ed527a4d30dba61a863cd30cdc88c3afd10ed1ae82167924e985873c1eadea22bcff1eda5ef2ddcf1c8b7ab32220cfd9bd4e6ca22defa945024803ea86b57461907a5f2a01cd7b7bdd1d8772eed7a36a634c6643bbf87e988702228a0718e532a697ec643681a3a9fcd1ddf99b9a32930aa033fdf23041afc7a7a25f8db75d56559bdd1a42c60f726e1254e8a0ab0a93f90aeea6a53d59b5a07ed768dff671a79dee81ad4719ee3ed5f31a8c8324bfa3f742a7cb5aa9dee753554aabdb840bbdf3b781a08ae539d1d5d2c6cef1ad55b1e8d684e33f2f90401b80a7cfa57d85f51c0c225051921610df34a442942725acf2d4b2bbbcfecaede3135548173f92ed6eda8fb032a739419694a33f95c517d45ab4695a142bc802008e3e63aee7788fe0187d1cd5f22050000",
    ],
    [
      "ETag",
      "0EzAZycFvLs8n2zQfz6btw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1620694024143"
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
      "10",
      "85",
      "ff",
      "cb",
      "f4",
      "0a092835d5c48356db9a186369499a36c4ac38501418dc1dda18c37f77163df4d80b3bfbf8deee7b7b86435eed6004db3c3b36a84f7719f2ab1d42344dc146969a2a83e000b2ca843ccea268d8f3ef9ff6d147ff50f06c7d7cf89c8cc74298e41b4b05a333a439163b03a3af3354aa44b16d36ba3b51303ed55659acdee7cff350849276565845cbe564ba9c43ebfcb1d5877f59e2d6813d6d434c516395a04d516bda63c20b5bd0a8b22ed035d4e8040d7470f723d3d4d44a13b9a2b841e0fa839e3718065e2ff083be8005258a73aa848dde241b30b12a42fa957ee00ba0bb51aaa6ddf7a7936d87db14b7f1cd343d319ab5264960d05eee5d833c920dc7129a75830e244a5ef225e7ebbebd00d50c2242a6010000",
    ],
    [
      "ETag",
      "qDUU9215FjUX3kltDPq8ZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NzMsImlhdCI6MTYyMDY5NDA3M30.kgNSdUe8aXMYQhD6yd_6fTyOEP_T4GhXOcy48oJeZ1aQFn-Mt95RcyKPP3rH5I0sE04HEcYd3CJpPBc2v17D9Wz6cr2Skdd4CRo6sJVGoZhn-8zL8UvS5w3TZuF8DlWEsUnYtwoLFyCx-MkW7nxUXTot2i8RjaMJNrk6l5xnnL6pxDaiTJ3wJdFGrPIp-lm-Hd3LfvSbAQL7_4VTPpc34dGCy-T5cl4ofZ3jinEzX5VFCO3efTYO5eGzMoxJ9_eS5LvOhny9Xn1vARkivdwMqrBmQF7iTB2l4FpVUJ1DvXhpERxYt1z_SEzmeboV9-3RigckmC_bqj4wjyDs5jqQOQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff1dd0c95283300000d07fc9b976100a186f6ca5806c4509e6924921b25428126473fc773b7ec27b3f80e639e39c8cb72bebc03358a908f7f9deeb9f74527e886569a5e1ec7dde848939306cb034913c76947e3c200d6722f2511b71fa60c774933151dba2519c956ee783a2a352d0c49c58172171132bcc04279908ffd61d3b97df4e413a76851ad4d5a5f35df18a483642fb8096199a1b36e58df945a43738320a78a4a654f0edbde27e1f55daf235213e1859e087be3e9f664f56e1a32427438b1b43115e63d7b2baac115fb4540df0cc9d73ab0c4743aa9959801d604b5f0f8c93face95640877e0df4ec6b567f7009dd1810de0f70f5014e7ba1a010000",
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
      "Tue, 11 May 2021 00:47:53 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-45-1620694024143",
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
      "7b5c1368200122456b94d02e5b425620edaa6942c618ea1630c5a65357e5bfef629aae55a5f609dbf79c7bcefde011ddb22a455394b0fcaea5cdc3a71b9ea0234425cee1b50cf4b1931a7fbf7d3ffbbcfc798e6f33d7b8ca673340b08e25705917742078db102aa6bb709837bcad71c3f900120dacf1e078323226ae658cac63cb049ea045b666d52db0afa5acc554d70fdac39cf3bca0b866624878f9fcaedf8ff4bae1379448a1bf96d44145e8ef8b7e2938c192f16ab60bc1402b6813d312b3022cfc67a6c9c9ebd44386cb610ee07b46282684b795ec6c410ac2ab8ce56da3b2a2e92352365f1c50e8adbd45a4115eb4651557b8a4475a8a258ee5434db5d360bbd156fee936d8cca3d5d68fc3c5576f331f2eb6ebddc60fb5cbaf5ee069122705555c6da69da89b0f17d04fa990ac52ea51f7dc293f3568f5762c1d01a405ed83b16d4cf0b163b84996d82473cc71921934499cc41e633331886b512b4d28069e12552c5cf10a3b9374822d12270675620b1b24c6a6e5c6b6e3ba7632728064a0fd11fad33049974cd45cb0be43e83258455e1c053b7f318f3c554286db422e7b635d012f3d4a281040efd4b4efa28c8352d7ee951f79c17c11ad2ebc7ec26b9a63f210dec18c335c080a68dc40f3246d363c8586217fbef196005613fb71080a34fdf588ba9e772e5eb4fc991ec1003bbb527d5118052bff4cd939202e70d12ac87d7f403558be86dac0f5fe37206149fb2ce87ce70557a87f0a68461b5a918fa7096015f8f05f3b2c3e6061f5414648b8c3ee10d1899086f63bc454b907b66d8e4c1b297023dfc4cc897be85a97a3cb484b5ac9a78a",
      "fac587427bb1563c832008e3f755b7f6ff004ffedadd78040000",
    ],
    [
      "ETag",
      "mR/58d0zJKG+DXQakf90Yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1620694024143"
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
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ffcb7885482b4525f1d0daaa8d585b4a4fa669b630b42830b8bba84dd3ffee2c6a356aa2179819be59de7bb08587ac4cc08765b67aac516e0e56a827a60851d5b9567caba8540816a0162b26c34a1f9f7874d80b968fe1647d9d782ffdf6e4ec8c0915afb110e06f21cd304f14f8775b284581bc16535e17e5a2e92cd09bca0ca751381c5d725f5062fad12c08babd60003b6bbf98082d160dff8fb5f9ce827b5a8698a2c43246a3a592748fb11e1a9b4a14558eb6a25ac6a8a0819b072b4975252491cd13dbedd82dafed78a7aed3765bee118339c5426754323b9bb23ed0a4451ed233bb048f01d9946c386dae4f3cce92c6882987a3c8731b7d5f01969666392efe0659ef5af067f8c0de23f8ce8982ea52efa98be0b6fbdb719ce9e751fd6e34f84128cd49ed916878339846dd9bb1e1e6efde7b1b8d6a2c89835468326c39ee49e7d873de623d271335bfc7d7b2460b62c17fc755a6c14f45ae70f70a857996897b020000",
    ],
    [
      "ETag",
      "Rpt786o/BLbqRQhKd6xD2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1620694024143",
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
      "85546b6f9b4010fc2be8fa2591fc38307ec452943a094d516c9c629c28ad2afbc00bb90438c21daedcc8ffbd0bc479346d2221816f667667f776fd40ee78ba2243e2f3e8be807cf3e956f8a44140b1084f93dfb6be89a83c4f07fdebe3f9edda3e2ecea3c34364f052255992c5d094a2c80390c3f9ac15e5a2c8582e44130335cd5e53ef19b4776052c3d4cd0eea24c4e198a777a8be512a93c3767b97bb150911c5c0322e5b81489ecedb6ba39de5e2160225dbaf53b6318b6cbf9ff4281601535ca487f3191a2824e40b48188fd1c2b372e57f7e1dbac559d28a90bce601b0201045aa4a5b18221069c8a322afa292e103a96cbef820336b6c9d78dac974ee787b4b9694e2e5bec6a4b658e4208b5835b425d614f218167cb5ac91ec4efbe24e2788a0831b26412eb5abaf966b69da522a74b7d40eb5236de49c6aafd5b6a3cd1dc79a79daded1be76e64ee717daf1f52b0eda5e81543cad4c7bcc8fa134fcd857fbed6d9602a6d0440d2efab4c7f4013df043bf1f84834ed70f29f8fec0ef7759c7a7c18109e6ca07863a5546af542c15693fe80f80f6bbbd9e093e84c6ca645d1da8de0d3b7ed0e9e9c600c2ce80adc8b6417ee55cc129979990bc6e2eb9726dcf5a78eedc391979565546c8b081a7b5b9b288973e151689a477eada96281798a9bc29dbf12c7774e2d997563d1c638858b099dde378842c96806c96b30414e413b1c2a6918be9ccf6eca9331aa3a2baf18b1d4392e18f876781b7c9aa2eabea4d3c7b8277349a5c541e76a44b1617156b5d7f10831ab4498da6def57463a87786bad9a2947e27db6de3ffc147ae3bba46432ccfd9e62f0c8bec99a5fc1f592b7ef5ab36bf73a19332db9327b2fdb9c5a74170c5eae8e4dbdc72af497de4420839a4c1c74385e40af8f09f62b7b6c8c5c5c534b8028ae30807b24c12e4508f324f2abb8feabe49a9492a72aede607ab7bbbbb3324619111248d56345f5da568d2aa1423e9110c409746ce70cd13fb735d80a36050000",
    ],
    [
      "ETag",
      "mzI1yg0sKn87YBUjvIBuKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1620694024143"
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
      "02ff8d90516f82301485ffcbdd2b24a2c46c243ee866361763269b717121a6c295a1c0ad6dd111c27fdf2dfab0c7bdd0dbc377da73dac0312b13086097a5a70a557d97a259da21445de546f322a9d4080ea0112993e3cdfd2c97fe66f9b42ed69f78fe494eaf83cb68c4848ebfb1101034b0cf304f34045f0d94a240b66db7aa3b9131534babcc161fd3e769c84241891516abf97c3c994fa175fed8e4f15f96a875e040bb10f7a8b08cd1a6908a0e189b992da84521737435552a460d1ddcfd4815555228229715d71fbadeb0df1b3ef8bdbeeff90306738a85c9a86476f5ced9c09011794817ee071e03aa1bb9eabefb9e3bd976b84d511bdd4c93daa07e53c40934dacb7bd7208f64c3190e6d54850ec4825ff22533d77dfb0b1919793ca6010000",
    ],
    [
      "ETag",
      "AZ8Ilp4ZQDWmWXevxdqJ3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NzQsImlhdCI6MTYyMDY5NDA3NH0.NDLE3H17Wy9ZC-fquXdfl10Blew5mJISGg_FZoGXdUEiyfvWKF8Bbt71fxUY-3WJvSLIWCIjf2HT4pzjP0u-gkiBf1Mbfm8rHIQxARwPSBxTO44kw93jDxofulx-HAw905qozge7bfOZyMP-I94pwgn65AjWGOk9UwayneKf5n_LllpQYOTWFiy1tR7K0c0-GLm03qplg9t_4aaIk58bH2zbPva-Ofs2RDbkHC2rn6mvLZyUmASNKlydgan6HEFXZ5BZKo8uFwnVXI3Yo9Kru-_MKh-lf-i31UFALo5uLZD0AqPF6fyKnTZ9hoMjK4sq4T1JuBhGgJYfRzjidd0MLg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "e9",
      "b318946bf7086c6c801a045178690a2db5d0a129482ccbfe7d669f70ce0fc04d43c7114db79e0ee00d28bc85eb661ddf5d0fb1b69b2ed27c772b58137ba894493fe3947cb43b19565fb8382fe6b720b2f2344d271eec43364d7165a81334aecfd6ade3bc153c2391eeb685340a1104bd639de684b8b66d7633eb826bd0846a6fa93e4137a7db2ee7cd488f73a41ff5fdeed863bac507ff00c55c0a6ed695e73f8a8c24cc89436d627d8d19b65411e9563e8bdde591f92a4649ce13be3c6b34e07483f2a5dc73ad2b6f8a18234c7d03ac007ddeb9a423e22fae6141b802ff7634a93b7d0578144b2ac1ef1faa0eafc51a010000",
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
      "Tue, 11 May 2021 00:47:54 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-47-1620694024143",
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
      "14fd2b91f771b44953d397548daa04a8d4a65b9282c634458ee304431287d80121d4ffbe6b873210127c8aed7bce3de73ef28cee7895a2194a787edfb2e6e9dbad48d011628ae4f0fa3d48cfb7f2aa7ebcce0b41edc5ed755187f97c0e08ae59929475c17a52b40d6572b60bfb7923da9a3442f420510f8f7b8391eb8ca6d871f1000f81275991ad797507ec1ba56a39b3ed83763f17222f18a9b9ec5351bebedb0fae5d37e2965125edf79236a848fb73d11f609d282eaaf92e0403ad644dcc4ac20bb0f09f992627ef53f73929fb39801f38658452d1564adb8214545419cfdbc66445b367646cbe39a0d05b7bcbc8a2a268cb2aae48c98eac942812aba79a5967c17663adfcb36db05944abad1f87cb0b6fb3e82fb7ebddc60fadab0b2ff02c45928219ae35b74ecccd870be8a74c2a5e19f5483f6be59706ad3e8e4513405ab22e188f9d11194c9c699225639a4d86c749e6b0249924e363324c1c3ac50ca70923c033a286452a51d121c1294e8ee3143b8318bb431c133270e2d1106397ba5342a723b43f428f0d57ec94cb5a48de75085d05abc88ba360e72f1791674ac8485ba8d3ce982ee0ad47050502e8939af63aca0528e976affcc80b16cb6875e975135eb39cd0a7f01e669c9142324093069aa758b31129340cf98b8d770a6033b19f87a044b33fcf48f75cbb78d3f2577a0403d47695f9a2300a56feb9b173405c92a2359087ee806ab07c03b581ebfd5f40c2927659d0af9d17fc46dd53c032d6b08a7e3d4d009bc097ffda61f1010bab0f3252c11d76874a2d421bd6ed1037e51ed8633c9eb8c8801bf52136c58343d7740e9d9195ac522f15758b0f857662ad7c054110c6ef9b6eedff0173fb08f678040000",
    ],
    [
      "ETag",
      "+RdGOsWpwZgloc/AjZlpSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1620694024143"
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
      "5b",
      "4f",
      "c2",
      "40",
      "10",
      "85ffcbf8681b6eb568131e008b6200b99418630859da6929b6ddbabb9510c27f77b6221a35d1977666facdf69cd3eee139ce02706015472f058add59846aa28b29ca2251926e39cf248201a85844e4b98cba819b4d64a5f158e9e6bd3bebe1dcdeb65a44487f8d2903670f618c4920c179da43c652a4359f27459a2dcbce00b5cbf570e64dfba31bea531ee87e341f0cda9d810b07e3b41830c59625ff8fb5c5c1800d5f4d314481998f5a4b2ef8067dd5d736254bf3044dc90be1a384122e1f44821739139c9b3431ada659b3eb55fbcaaad6ad9ad52030e13e5331cf889dcf481f28ae5832e55b72093601a22cc970585e5f691c07a5115df6479e6d95fabe02242d8c135cfe0d92de35a3cff0811d23f8ceb19417993a51bdc17dfbb7e328d3cfa3aedb9efb83908a923a215e7fe8cebcf670acb9c5d17b67a7508e05a72025ea0c6b55ebf2a26957df63ed721d35bdc751a240037c467fc76dacc0095922f1f0068dd38d907b020000",
    ],
    [
      "ETag",
      "+sgCdEnQs/3Y/CpFJ4W+6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1620694024143",
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
      "ff85547f6f9b3010fd2ac8fba795920009e49714752ca51d534a5202adaa694a0c18ea96608a4daba8ca77df619ab659b7554202fbdebbf7ee7ce619ddd33c466314d2f4a122e5f6cb1d0b510b118153d8b59fd41ff9a5a362fd6ce10517e9dc3cd7356b320104ad591c6f8a8cb439abca88f071b0eca425ab0a5c32d686446d63d8d6fb5dad3f32b4aea11b3de0719225339adf03fb5688828f5575afdd49194b33820bca3b11dbbceeab8f5db528d91d8904570f255550e1eaff454f32166141593e099660a0e2a45c910da619587863c6e1d7c3d41d8a379d14c08f3422388a58958bda16a488589ed0b42a6556347e46d2e6bb0fb4b467f6d457a6f3c0f58fd6785393d7c70ae6ca6a55125e65a2a5aca1a684666445e3751329ee95336f7e011170708b39e16be5fabbedd98ab2cfa14c9413c5724f9543bae32a81ebda4b5f393a3956cebd79b050bedd1c60c0774cb8a0b974ede33023b5e397c63a1f8fb32660012e9ae06aa0f5b13ed44661120ea264d833c3442361380c0726ee855a343288118704034fd4d9250be72c1ff68c1136bb6664eabaa9c7234d8b7423ece35e6f60987137199011d1437388762df45452414e292f18a74d77d1b5e7f8f6caf702776af9b62c23c1d0c1d3c65c5dc47b9f028a04d07feadad551ca40a93e2ac7f56dcf9aface95dd4cc78ca438da2e1f603e129c7102685ce20d11a4bc6031340d2de64bc777e6ae3503863cf2c51ec1d1f8e7f31bc1df16b2cb42bed1d96c6ef97d433ad843ae705649cc63f381f48e09885debdf692ccfb36e401a9725defe118372fa92fe17058997abc6e6ab22aad5f6ab2edafddac1d342709b9aece832b0bd1bd46c79242125c9a3cfc707c032f0e94f617f43010b771464b880350c6bc46b91a824cdd0d28db4fbc21e987d638424b8141f6243b3bb3f9d3a479d916c482e5e2a6a6ea86c541daaf82b0882306baee39e43f43740cda73e21050000",
    ],
    [
      "ETag",
      "Ew/JnQI/a1FPRUMgO5G10A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1620694024143"
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
      "00000002ff8d50db6ac24010fd97e96b02260669051f9a125a21951a2f2f22b226631a73997577d322e2bf77762dc5c7beecce9ecb70ce5ea0aeba02c6b0afca538feafc50a299db2143dd3746f325a9d3081ea011252beb381e46ebf753a5dbd57a219759514e4ff3c984153affc456c0f802870a9b42c37873814eb4c8b6dd4eb98d2c33676991e96c99bc2619032d151698add2f4394e13b87a773659ffcbb2bd7a70a47d860754d8e56853484547cccdd416d4a2950dfa9a7a95a306277644a9a8974211f98cf8d1a31f8cc2c1e8291a8451100d59d8502e4c451d6b570bce06868c6832fae67e10b240b991ab1edcf9e560dbc14e818b76cf057f5c68b9edefc2f86c507f28e2741a6db0c12de40bd9e0860b19d5a307b9e05f7eabcced7dfd01730e7f63c2010000",
    ],
    [
      "ETag",
      "kBB34VMqismUVSpTRdgIqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NzYsImlhdCI6MTYyMDY5NDA3Nn0.AIU8C47ZneiE87oKbZTjLpjLjjFoNOnAIzFhQ-_wy_X-RcAxyKm7Bf31HyaZ4R45GDbQw0zZsJgrjSeBSccQZT95qrHZ7xVexLPKbWKbBv6zyfihkcgUZGySdzfnIYicJLVbtwoWGNd7a9UJefRuMFmidPWJEU7Sp6xCcobuknjPd2VSIq-BVYnIzRsCsbyeL3NcTDkMlzBE3LHVed5K26bx9tO48reEynDPHF-90qa6zYLMzgBpINBdL8NCydJ5Q-fbjodN1DVMMwclUWWxvnn0YCfGW1VRAnZZG5aX3TAOHQEEK6qoyiRLq71Ixpo1WjrIBANNnm8WeNCG9vqCVg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "cb",
      "72",
      "82",
      "30",
      "18",
      "40",
      "e1",
      "77c95a9d0eb74a77424540ee82036c1826fc5a088d31442576faee75fa0067f19d1fd4620cd3d4880b018a3e906c157385577bb6b69a33140121297d14341f07e67eaa330908de6c95ed2ed7dbb22a03f3829fa74ef1fde9aed9c288bed51e0bec68b2313437eaca0066657d48b70ef09996bbd19673d23b62fda518c7250c769eddf35a8c34503dd7a9e2a17a88f89455707e6e22f76d8cad7d9b75766894c52b52e4de3b9c63bf2bf3a51f8e97fa961c8dccbaf3daee1885671aa6ccf7defb88a952072bc1d2e3d774e01d3ddc8805c63520688160663d87a9e95f5c5537cd05fab7374232780db0a0e5c0d1ef1f0aa4e6721a010000",
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
      "Tue, 11 May 2021 00:47:56 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-49-1620694024143",
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
      "a3",
      "40",
      "14",
      "fd",
      "2b",
      "64f6e3da079496b649b33615b5494b5da01ab3d990617ac151609019ba6b4cfffb5e06eb6a4cf4133373cfb9e7dc07cfe481173b3225314f1f6ba89ebedd8b989c105034c5d7fd55c086b7df63799f279b8bf55febfcae9ecf673344f08625695e66d091a2ae18c8e936e8a695a84b5a09d1c1441d7bd23147567f34b1fb966dda03e449c892152f1e907da75429a7bdde51bb9b0a9166404b2ebb4ce4afefbdbdd52b2b710f4cc9de7bc91eaac8dee7a23f32c1a8e2a2986d0334504ba822c829cfd0c27fe62e3e7d9fbacb69de4d11bce70c2863a22e54630b533051243cad2b9d954c9f89b6f9e6400277e52e428389acce8ba8a0399c183baa68a49e4a30cefdcdda587ae71b7f3d0f971b2f0a1697ee7ade5d6c56dbb517183797aeef1a8ac61968ae31334ef5cdc30beaef402a5e68f5b0796e945f1ab4fc38968680d212da60e4f447d41cf72771123b2c190f8671d287381ec7ce900ee23e9bd860ef62a0c8d3a29a450b519874ec58966946b6c59cc84efa49446330236732b21d30eddd281991c309f9537105675c9642f2b643e4c65f866e14fa5b6f310f5d5d4242eb4c9db5c69a02de7a545820823ea9e9d044b940a5a6dd4b2f74fdf9225c5ebbed84579052f6143ce28c139a494034adb0790aaab5d861c388375fbb6708d613bb3a062599fe7a264dcf1b176f5afe4a0f71808d5da5bf2408fda577a1ed1c11d734ab3564df1e488996efb036747df88d485cd2360bf9b975fd5bd23ef990400505fb7a9a08d6812fffb5e3e22316571f65a4c23bee0e938d08aba0dd21aecb3db29dd1c01a120daed487986d4f8e5d6b723419218742bd54d42e3e16da8ad5f21584411cbfa7",
      "bb75f8079a60aa2478040000",
    ],
    [
      "ETag",
      "vPSc5Y+bsjmfOGMx2FhuAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1620694024143"
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
      "000002ff8d92d14e83401045ff657c9426b42255923e50adb509adb5d098689a6681815281c5dd456d9afebbb358ab51137d8199e1cc72ef852d3c66650c0e8459fa54a3d81ca5a86e75314359e74ad2ade2a5443000154b895cdd8777f6aaedfb56f87adc2d2c7b38acb3b4d72342462b2c18385b4832cc6309cec3164a5620ad453caf8b72d97406a84da5877e301b4d86d4173cd6fd64ee796edf1bc0ce382cc64cb165c3ff636db13360cdc3192628b08c506ba9045f63a446daa6644595634bf25a4428a1819b07a9e075c504e72d9ab4acf356dbee98f6b96576acb6754260ce23a6325e123bf7491f28ae583ee32fe4126c02445392e1a4b93ed3388b1b23ba1c4d02db6af47d05485a92e5b8fc1b24bd2b469fe103db47f09d6305af4b75a0aebc1bf7b7e328d3cfa32edd60f083908a923a20c1683cf003773cd5dc62efbdbf5128a78253901275866dd33a3beddae67bac175c474def7194a8d18088d1df719d297012964bdcbd0189b467687b020000",
    ],
    [
      "ETag",
      "hZbW6h1SS4bx+7m46GGuig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1620694024143",
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
      "616f9b3010fd2bccfbd26a4980044288147559ca3aa4947484b4aaa6293160a85b82a96d524555fefb0e68da46ed5a0909ec7befdebbf399477447f3180d5148d3fb92f0edd75b16a2162212a7b0fb70ff8d6d7ad2985ee1c4156a60abf32d4e472340d08a25f0bac8485bb09247440c17f34eca595960ce581b12b54dadadf7bb5adf36b4aea11b3de0099225539adf01fb46ca420c5575afdd49194b33820b2a3a115b3fefab9bae5a70764b2229d44349155484fab1e849c6222c29cb478b39182805e14bb2c634030b2fcc38fc7e98ba43f1ba930278432382a38895b9ac6c418a88e5094d4b5e6745c34754db7cf581e6ced49904ca64b6f082a3155e57e4d5b18285b25c7222ca4cb69415d494d08c2c69bc6a22c59df2d39f9d43041cdc6041c44ab9fae5f88ea2ac2ad0979172a28cbd53e590eb7acac2f39c79a01c9d1c2b67fe6c71a1fcb83ec080e9980849f3da7280c38c54769fbaeabe3dcb8a80255868824b4beb637da0d961125a5132e89961a291301c8496897ba116d90631e29060e0c92a7bcdc239cb07f1c0ea5a3136adc4360d5beb1b03c3d62d4b1f746dcbb0741beb3631ed18ed5ae88153494ea92898a04d6bd195ef06ce32f017de641c3875190986f69d36e6aa225efb945024803ea86b57452903a5ea9c5c2f70fcf124702f9d6634a624c5d1767e0fc391e04c1040638ed744127ece62681aba98cdddc09d79e32930eaf3bed823041afe797c2104dba2eeb2acdf9556dfa8f5f7804b9c953562d37c20dd44bb5debff29c6be3fbe0659cc39debe9ffeddfc35be5e35169ff550a5b65f75d1eeef0e9e16826bd46447bf178e7f8d9a2d9f2484933cfa7c74005c073efd1becaf2660e172828c90b086418d44251271d20c2c5dd7769fd896d5d32d5483b97c1333357d7f32558e2a2359935c3e55d45ccdba5155a814cf2008c29c79ae7706d17fe4c07a5e1a050000",
    ],
    [
      "ETag",
      "wq+ov3t4LWafIs/T9/Syag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1620694024143"
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
      "4fc2401085ffcb78b44d5a6c4924e1208628b11229722086906d3bd442db5977b71024fc7766170f1e3c78d99d7df3cde4bd3dc1ae6a0b184056955f1daae34d8966668b1475571bcd97a45623788046944c26e1325bc6b7c5773d1387ea90beca97603e1b0e99d0f92736020627d85458171a061f276845833cb65e2bb79131739456994cdfc74fe39485860a2b4c1749f2304ac670f67e8dc9ddbf4656670fb694a5b841856d8ed68554b4c5dc4c6c402d1a59a3afa953396a70b06b948a3a291491cf8a1f077ed8ef05fdfb28e8456174c7604db93015b5cc2ee6ec0d0c1951a774e07cd06340b992a36edcb967397619f60eb0d6feee85b6b7fa59383a1ad46f8ad89d466b2cb89a7c246bdc7020a33af42017fccbcf95b9becf17b85fac0ec2010000",
    ],
    [
      "ETag",
      "L1YbY5+dzlQawiwRMpK0SQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NzcsImlhdCI6MTYyMDY5NDA3N30.N6olKpnfLPJ8R1mPuO8ilgMMpZK4ktEHqo8sWJ41L9zef5SpeY_wVufDkzOLeImQvIXbBG2WVDfpfGJTQFxmPVHudHtgh0vHI8kQGok8XH1oapdk0XrGKo10hOxqpHuqqtgJvKXBKgUQNiapAGT-diD3xDLnr4y3bjiDERziHo1-lIdFTykLngJiFmorOCSRL7EtaoMe4N4GsMH39I6oJRoVMqDU6RoYlpvSonOkaCTT3ZeZBLuhDB-dUWrzA9pHLI7z2ZCs2EigDJSYMep7ML3v9JkdDtaEtWP8rq7vsWZqUyboDuYDnd8YnhXXx5XhRQtwFLV0j7nz552T-Ghxhg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "49",
      "72",
      "82",
      "40",
      "14",
      "00",
      "d0",
      "bbf45a2d012de9ec1803896114036e286c3f4313a0a141a4acdc3d568ef0de13658400e7e9d8d5d0a237b46422de90cd2793d5b48002862d09a3835f5ad4b71377a155aea53badd7974e337a8ab7a3ecd5b7924fa4eeded97c37f745d2e8f5832eeee91c33391be749d8b7e5faf2533667d56979b89c12a33d696efc4dd5d282103b424f783c7b897fb4fa23f584ee6a9a8a3736b9ac5a6298c7c548c0958629621fd9570bb24f446377091d1b2a87f6e5591425f5aaebc181cf52a7148312ae2b82e70304f62c494d7cbf4d58882c064d8056081eac1a80a7d58b2bed315ea17f7b3a2e0c5e012a64030ce8f70fabe2e0371a010000",
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
      "Tue, 11 May 2021 00:47:57 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-51-1620694024143",
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
      "14fd2b91f771cd8b9092448ad628a54bb484ac84b49aa609d9e642dd02a6d8b4caaafcf75d4cd3b59bd47ec2f63de79e731f3c913b914764429848ee2b28f79f6e25232704344df0d575f5ef62b478fc56ee3eefd2ecfa72ef2de2cbe91411a266299a1529b495ac4a0e6ab2db76925256052da56c63a2f6b0dfee9f5abdd3b1ddb3ecbe3d409e82345e89fc0ed9375a176ad2ed1eb53b8994490ab410aac365f6f2de7db0ba45296f816bd57d2bd94515d57d5ff44b2a39d542e6d3dd160d540aca10322a52b4f09719b1b3b7a93b82669d04c10f8203e55c56b9ae6d610a2ef358245569b292c91331365f1dc8d65db9f3a0c5655a657998d30c4e5a11d534d4fb025a17fe66dd5a7a171b7f3d0b961b2fdcce17ee7ad6996f56bbb5b76d5d2f5cdf6d69ca5230dcd6b475666e1e5e503f02a5456ed483fab9567e6ed0f2ffb1d4049456d00443a7774afba3de98c5cce1f1683064710f181b31674807acc7c736d811038a3c236a5834973938dc1adb91158e2d06a1ed5876381a44fd70c80600368ffacc61e470421e4ba1e15ca8422ad174885cfbcbc00d037fe7cd67816b4a886995eaf3c6585dc06b8f1a0b44d03b351deaa890a854b77be905ae3f9b07cb2bb799f00a12caf7db7b9c714c530588a625364f43b99611368c78b3b57b8e6033b1efc7a022939f4fa4ee79ede255cb5fe8010eb0b6abcd976c037fe97d35768e882b9a5606f2d01c4881966fb036747df885485cd2260bb9dcb9fe0fd23cf910430939ff789a0836810fffb5e3e22316571f6594c63bee0e57b5082fa1d92161ca3db21d676c8d880197fadfd8a837708e5dab73d41921835c3f57d42c3e16da8855ea0584411cbf67ba75f8034470b3e478040000",
    ],
    [
      "ETag",
      "EEtzp8HwKrU+UlmWQyNHfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1620694024143"
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
      "000002ff8d925b4fc2401085ffcbf85a229752a5090fa0a024dc290fc610b2b4d352dc76cbee5644c27f77b6221a35d1977666facdf69cd31ee0294e0370611547db1ce5fe22423d31c51455ceb5a25b26528560016a1611399a6c8693eeeb4b2359efa25a955f6eab0fe9a4d92442f96b4c18b8070863e48102f7f100294b90d67cc1f3245d169d057a9f99e1cc9bf68677d4272230fd70deefb7dafd0e1cadf362c0345b16fc3fd616470b366235c51025a63e1a2d99141bf475cfd8542cc9389694c8a58f0a0ab878104991674c0a51a249a95e29559c6ad969d8e5aa5db16b0472e1331d8b94d8f98cf481169af1a9d8914b700890454986c3e2fa4ce338288c98b237f41cbbd0f715206961cc71f937487ad78c3ec307768ae03bc71291a7fa4c75fba3d66fc751a69f47ddb6bcce0f42694aea8c78bd4167e6b50663c32d4ededb7b8d6a2c0505a9d0645829dbd7f52ba7fc1eeb8d3051d37b5c2d73b4c067f477dcc71adc907185c737b9832c297b020000",
    ],
    [
      "ETag",
      "OQjNQFzx9mhwg32l/q2YnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1620694024143",
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
      "9b",
      "3010fd2accfba7959240c84f22451d6bd98a94928e40ab6e9a12634cea1630c5a65356e5bbef304ddb745b2b21817defdd7b773ef3806e591ea3098ad8faaea2e5e6e30d8f500b5189d7b03bbbee7fb74c69d803cc75ff34fcedf34bdf9e4e01c16a96c05991d2b6e05549a898848bcebae455814bcedb90a83d30dbdda1690cadbe61f6bbfd1ef0044d9319cb6f817d2d652126babed3eeac395fa714174c7408cf9ef6f57b532f4a7e438914fabea40e2a427f5bf428e5044bc6f369b8000395a0e5926698a560e19919479ff6537718ce3a6b00df33423121bcca656d0b52109e276c5d952a2b9a3c2065f3c5075a3833e738d08ee7a1171cac70569357871a16da72595251a5b2a5ada0a684a574c9e25513296eb52ffefc0c22e0e01a0b2a56dae5a9e33bdaf3d64afb30d58e34db3bd1f633b89e167a9eb308b483a343edab3f0fcfb5cf577b18b01e532159ae8c07384a696dfab1b7eedf275a13b004d526b81c1943dc1d1b56944423928c7b83283168148da3d100f72283587dda8f238a8127ebec8a85739e47511c63ab1759e3d81a10a3374e06713c8c7b31a6a318c72635098d8865a16d0bfd2a99a4274c145cb0a6c1e8d277036719f8a1776c078e2a23c1d0c493c65c5dc44b9f128a04d01b756deb28e3a0549f96eb058e6f1f07ee85d30cc88cae31d92cee6044129c0a0a685ce28c4a5a9ef1189a86cee70b3770e79e3d03863af5f31d42a0c98f876742b0295497a57aa345e0bbde57656087b8c069a520f7cd07b20bf08ab6dbd6ffd3d8be6f5f81342e4bbc7915837286fd9afe0f098557abc6e64eb28b6ab5ddca44db9f5b785a082e54931d7d0b1dff0a355b3e4d684973f2fef8005805defd2fec2e2960e19a828c90b0866125a21621256d869665caee237b34b60c132970295fc72c6338de9d",
      "4e9da3ce48339acbc78a9a4baa1a55872af1048220cc9aa70e6afb07f5d5aa8a24050000",
    ],
    [
      "ETag",
      "Lh4Z92t0A5ao/RHUzRoWRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1620694024143"
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
      "8d50cb4ec33010fc97e59a484d089588d40385082a4a05819e505539e926cd7383ed0021eabf77ed22d423177b3d8fd58c47a88a7607212445fed1a31c2e72d42f668851f5b5567c75d42a0407508b9c9514552a4b9eeebed1db3fe6e550ab7df093cf66ac50e91e1b01e1085981f54e41f83e422b1a64db762bed4696e9a133c862f516dd4731030ded0cb05a2f9737f3650407e7ccd655ffb26c0e0e9494c498a1c4364593a2935462aa17a6a0124d57a3aba897292ab0624be492fa4e48229711f7ca77bda93f995e07133ff0824b16d6940a5d50cbdaf52b67034d5ad4317d713ff05920edc855337b7e321cd80e66f26cb473ceffe37cc36d7e17ce078dea5912a75368824d4e216fc904d75c48cb1e1d4805fff243a14fefc3118ca4ac32c2010000",
    ],
    [
      "ETag",
      "oEksfbMDxe1hKgjylsh4zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2NzksImlhdCI6MTYyMDY5NDA3OX0.BpK68vU4kv6KFL7s45y8dLbn6s60rZrhnMP-JP9wdzunbAdrftJudCqn8DH2MGM_dp0pJ1C1f8XMyJZ1pCJr-WrMyvQ9MXL-8oagccmKySjlXz8jrf1yE96-NJ1o9mBf1ZDgZlGgLzRHLODGwyOnWD2JcsCjhWA5DWHBsRdV2hzrXDfFO2QsSVc9DNAUvOPUJPO30dYRv60ts9esk_MC-gk-cLKYihqW0gA4iCOm3Pb8zPjcm169At0biHH5eek2gZEI3TVQxIfekURmZ6mkspDX8uGLXbjDomEXIxRHMQYVI9Sc_EbZBgCk57kDqvM0XnvOcX4jjTGIiCLhi8vhhQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb64ad8e0682d29d40ac0695412abf0d1320f2138981f2b1d3bbd7e911defb01344958db465d53b107f8001385ea2259987ca345594a145811f1888edf50b97cd95da35f3352c33e7f05a2ae6c2f9c1488762ac72bab84c3cd534c47d63b27b8afe7acac09c65a9a69833f9e180a494f68ac5bcbdb75a0685d0687aa3be3002abe5366c4d5fd0437a87a5039e5fe661f644c5a9e8b3b760ef9b437d072e596bd8cb04735659f9b0973f5f8597c3e4de6709d6b560bc3a6907627df8cb7788ef25a6ac6e0e8a6b9b8909dd51bb611ca5b381230036ce485606d54bcb91252d519f8b747ddc4d93b40635430017eff00c5fabb781a010000",
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
      "Tue, 11 May 2021 00:47:59 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-53-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda842410f290a2354be91229211b21eda66942c65ca85bc0149b545595ffbe8b69ba5695da4fd8bee7dc73ee832772c78b984c49c4d3fb1aaac72fb722226704144df1d5fdb6b49757ea30b87c709c5fea0066b63f3ccc6688e00d4bd2bccca023455d3190d3fdae9b56a22e6925440713758656a7ef0c7acec4ee0decbe6d214f4296ac797187ec1ba54a3935cd9376371522cd80965c7699c85fdecdc3c02c2b710b4c49f3ada4892ad2fc58f46b2618555c14b3fd0e0dd412aa1072ca33b4f09f1947e76f537739cdbb29820f9c01654cd4856a6c610a268a84a775a5b392e913d1365f1dc8ce5dbb8bc06022abf3222c680e67464c150dd56309c6a5bfdd182bef72eb6fe6c16aeb85bbc5d2ddccbb8bed7abff176c6f5d2f55d43d12803cd3566c6b9be797841fd18a4e285560f9ae746f9b941abf7636908282da10d86a39e43fbe3de244aa2114bc6d6304a7a1045e36834a456d463131bec38028a3c2daa59b4100524931846ce201cf6981dda6348c2f1b83f0ad9c066c3c8b2fa2c1e92e31979a8b8820b2e4b2179db2172edaf02370cfcbdb79807ae2e21a175a62e5a634d01af3d2a2c10411fd4746ca25ca052d3ee9517b8fe7c11acaedc76c26b48297bdcdde38c139a494034adb0790aaa8d88b161c49b6fdc0b04eb89fd38052599fe79224dcf1b17af5afe420f70808d5da5bf6417f82befbbb673425cd1acd690437b20255abec1dad0f5f12f227149db2ce4e7def57f93f6c987042a28d8e7d344b00e7cfaaf9d161fb1b8fa282315de7177986c445805ed0e715dee893d9a0c2dfda72a5aa97731c7999cbad6e46832420e857aaea85d7c2cb415abe50b0883387e4f77ebf80fcbccee5878040000",
    ],
    [
      "ETag",
      "EBH4HVtv2Fw66Xtve/lUvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:47:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1620694024143"
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
      "0002ff8d92615382401086ffcbf6156650918c193f685a616aa6384d358d73c2a218707477e4a8e37f6f8fcc9a6aa6bec0eef2ecf1be2fece039ce4270611e2f5e0a149b9305aa5b5d8c5116899274cb7926110c40c516444efd22ec8cb60f77ddfbeb5e751b7ac3466fb36e368990c1125306ee0ea218935082fbb8838ca5486b014f8a349b959d016a93ebe1c41f7bc34bea531eea7e38edf75bed7e17f6c67131648acd4afe1f6b4f7b03567c3ec6080566016a2db9e02b0c94a76d4a96e6099a9217224009255c3e58085ee44c706ed2c4acd7cc8a53b59c33dbaada15bb4660c203a6629ee90426a40f14572c19f335b9048700519664382aafaf348ec3d2882ebda1efd8a5beaf00498be204677f83a477c9e8337c608708be732ce545a68ed445ffa6f5db7194e9e7519d96dffd414845491d11df1b74277e6b30d2dcd3c17b7ba3508e04a72025ea0c2b96dda89f3ad67bace75c474def719528d08080d1df71152b70239648dcbf017367cf467b020000",
    ],
    [
      "ETag",
      "UTudDPzZWEYKJ2zdIN8Jyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1620694024143",
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
      "000002ff8554ff4fda4014ff57badb2f9af0a54029858438865549b068293ab32c702daf78daf66aefca8286ff7daf5751999b2624b4f73edfdebbbb3e917b962c498ff86cf59043b6f97ac77d522120e90a57cd1fd7f4313fb3e0fce471ddbebb73dd40b0cb7e1f11ac60091aa7115405cfb300446f36adad329ea734e3bc8a42d5b6516d984dddec1a7ad368182de40988c2314bee917d2b652a7af5facebbb6e27c15014d99a8053c7e59afaf9bf534e377104851dfb7aca38ba87f6c7a14f1804ac693fe6c8a017201d91c62ca228cf0ca5cfadff6a56b8cc6b51582d72c001a043c4f64110b25029e846c95674a95f49e888af9e6814cedb13df4b4e164e678070b1a17e4c5a14685369f6720f24856b405f614b208e66cb9282be9bd76e24eceb182096ea900b1d0aecf6cd7d65e9716da97be76a40d9c636d5f61e46833c7b1a79e767074a89dba93d985f6fd660f83d19720244b54708ffa1114a19f673b7abfa305814a742d8bf38e6ed286a577fdd0ef04a1d56afba10ebe6ff99d366df97ad035c058fa4091270b75c5a2094f5a0046c7b0a86f859da68e024b53ef5254b34cdfb2cca66f3528588149b615f23b63128e9948b960e580c9b53bf2ecb9e7ce9ce1c0b3551b21c5211e97e18a26dee694d824823ee86b5b541947a762b7468e67bb83a137bab2cb033286150d36d3073c22218d04209a66340609d9395fe2d0c8c5643af2461367304686daf58b1d4290decfa75782b749d594a5fa2753cf1d39a72ac00e7145a35c41d6e503a1296625db6de5ff3203d71ddca035cd32baf9ab86ed984641ff8785c2abb732e6ceb2410ab7dd5b936c7f6df1572178a14a757239b3dd1b522eb910420649f0f9f141b02a7cfa5dd85d52c4e235451b21f11d0f6b200a932083f2d0b258c57d665bbad9691205cee4bb5ac76aed76a7d028142186443e77545e5235a8a2948b171016f1ac396aa3b67f00627ffc9a24050000",
    ],
    [
      "ETag",
      "6XWazuH8eMFzv5jjRRcsiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90d16bc23010c6ff97db6b0bd55561820f7396291459bbe9604324b667176d7b5d92ba15f17fdf258ee1e35e92cb77bf3bbe2f2738c83a87116c65f1d9a2ea6e0a34892d52d46d69345f0dd51ac10334a2603251f94a4ebbe92c5dbd469344aae9f79b4cc6632674f6819580d1097612cb5cc3e8fd04b5a890c7361be5363266bac62af3c54bf418a52c54945b61b18ce3fb491cc1d9bb1a6b0eff1a599f3dd8d336c51d2aac33b42e1a457bccccdc06d4a26a4af435b52a430d0e768d4251db0845e4b3e20f42bf37ec07c3bb30e887bdf096c192326124d5cc2e9fd91b1832a24ce98bf3419f01e54a8eba73e791e581cb707480b576dd1bfef57ab6b7fe5d38e90cea2745ec4ea335165c4c3e90356e3890512d7a9009fee5993497f7f907baa9eb7ec2010000",
    ],
    [
      "ETag",
      "QrdViDyDHRVWEBQirDxZiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2ODEsImlhdCI6MTYyMDY5NDA4MX0.V2VWYa3_Kcdq7eheQbUejQ0MhsI-kGXjxUHoeEo7TlcK4UHCeY4MZT8N2DZPxQw790BKWGdgPFSD11H1ESlcJFy5_Qaw-QVXH5-bK_zKoR5qjUGUfokvcsyQ5r3RmuhWZVVLsYDjjY_CmdWw8Q7bwSieWpoq_jYjOis4YaiFJj_A-7XD9LBUyYY6tUKfwe9LNzGhc84n3VQPX533wOTLvQjQ5k1XVwaRl4J-lhWRp6m2nBAF_dhryJBfsa4E8rUcwDRPpyeZBnYcDnIDXIP4ptDhsG_9fse0Zy_NZiGYqykkfbxUr7-gkbIK5x3MPGeSX2hbjrYuwOgijAyYcoLKMQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "41",
      "72",
      "82",
      "30",
      "00",
      "00",
      "c0bfe46c1d0111e82d88a2080a1a1473c9440891690d1050899dfebd4e9fb0fb03689eb3ae237dfdc504f8048aeace381f6f1adb25bc4863b3f374f580dce27754644f5107bb0b44c8ff40d7e4bbf557f1d38276197b77991482e241f7b8b5c866f5d99d42a1cff7d985f99cee9641a58a019ad80877b92d5abb7c3d4e9b5c94937e79b3c2d2d02607b428a19c395e2a99d0dab5300e1887ad0a4feb1bdd449aebe6244e9b2dbe70cb3c4a553c2a2dc0597b0fcc237256e79aa0e9935d2167f345aff62b3f49a30989186eec060b43386de46fc108b0a1a924eb48f5e61aa6e38cc0bf9df4aa61ef009751c924f8fd0373dffbd71a010000",
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
      "Tue, 11 May 2021 00:48:01 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-55-1620694024143",
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
      "a3",
      "40",
      "14",
      "fd2b64f6ab7dd002d226cdda545c9b6de94aa9ee231b320c171ca50c32434d63fadff732585763a29f98997bce3de73e7822f7bc48c898c43c7ba8a1da7fb913313921a06886afe9cfc77ee00df67c05b3efbff3f22a1cedbce9648208deb024dd963974a4a82b0672bc5977b34ad425ad84e860a28e6d774c67d07746567f6099d6107912f274c18b7b64df2a55ca71af77d4ee66426439d092cb2e13db97f7de6ed02b2b71074cc9de5bc91eaac8dec7a25f73c1a8e2a2986cd668a0965045b0a53c470bff99497cf6367597d36d3743f08e33a08c89ba508d2d4cc14491f2acae7456327e22dae6ab03597b0b6f161a4ce4f5b6880aba851323a18a466a5f827111ac96c6dcbf5805cb69385ff9d17a76e92da7ddd96ab159fa6be3e6d20b3c43d13807cd3526c699bef97841fd04a4e285560f9be746f9b941f3f7636908282da10d46a77d879a6e7f14a7f1294bdda11da77d8863373eb5e930eeb39105561203459e16d52c5a88c231dd513274ed88ba761259664ca33861666425566a8e1ce4bb0e399c90c78a2b38e7b21492b71d2237c13cf4a230d8f8b369e8e912525ae7eabc35d614f0daa3c20211f4414d8726ca052a35ed9efba1174c67e1fcda6b27bc808cb2fdfa01679cd25c02a26985cd53502d45820d23fe74e99d23584fecc73128c9f8cf13697adeb878d5f2177a88036cec2afd25eb3098fbdfb49d23e29ae6b586ecda0329d1f22dd686ae0f7f11894bda6621571b2ff845daa70052a8a0609f4f13c13af0e9bf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b947b66b0e6cfda72a5aa97731cb728e5d6b723419610b857aaea85d7c2cb415abe50b0883387e5f77ebf00f25f7db9b78040000",
    ],
    [
      "ETag",
      "fXw0RE2yiOeCKZlpQT9vEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1620694024143"
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
      "d1",
      "4e",
      "c2401045ff657c2d0968a9d0840740500c2042910443c8d24e4b61db2dbb5b0d21fcbbb315d1a889beb433d333db7b6f7b806d9c06e0c22a8e7639cafd4584fad114635439d78a6e9948158205a85944e46eefd49e66bc5dbfd7dbf9b09ba7a370368f1a0d2294bfc684817b8030461e28709f0f90b20469cd173c4fd265d159a0f799194ebc716f784b7d2202d30fa7fd7eb3d5efc0d13a2f064cb365c1ff636d71b4602356630c5162eaa3d19249b1415ff78c4dc5928c6349895cfaa8a0808b07911479c6a410259a94aad552c5b92c3b75bb7c6957ec2b02b9f0998e454aec7442fa400bcdf858bc924b700890454986c3e2fa42e338288c98b237f41cbbd0f715206961cc71f937487ad78c3ec307768ae03bc71291a7fa4c75fb0fcddf8ea34c3f8fba697a9d1f84d294d419f17a83cec46b0e46865b9cbcb7f61ad5480a0a52a1c9b052b66bd56ba7fc1e6b5b98a8e93dae96395ae033fa3bee620d6ec8b8c2e31b52d7dadf7b020000",
    ],
    [
      "ETag",
      "qy68VWlC9JtkZNFunPfWZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1620694024143",
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
      "000000000002ff85546b6f9b4010fc2bf4fa2591fce061fc92acd4b5698be4e014e3445655d9072cce259823dce1c88afcdfbb409cd84d9b484870b733b3b37b7b3c917b9684a44f7cb67ec821db7dbee33ea91190748dbbc6f4f661dcb57a9df1689126633bd93a77f9e360800856b004dda431d405cfb300447f3e6bac339ea734e3bc8e4275b35dd7dabadaeeb554bda5b50ce40988a3094bee917d2b652afacde6217763cdf93a069a32d108f8e665bfb9d59b69c6ef2090a2799ab2895944f3fda417310fa8643c19cc67682017902d6143598c165e99a1ffe554bac1e8a6b146f09605408380e7892c6ca144c09388adf3ac5425fd2752da3cfa20336b628d3c65349d3bded98a6e0af2ea5ca142592e3310792c6bca0a6b8a580c4b16aeaa487aaf7c73a797184107b754805829373f2cd75294554825ac944f03e542193a63e5946d3bcadc71ac99a79c5d9c2bdfdde9fc4af9ba38c1a0ed1084644969daa37e0c85e1e7beda6f4fb320508926aae0b2a3b6a9d6557b7ee47782a86b987ea482ef77fd8e490d5f0d7a2d68853e50e4c942bd64d184277ad734c3c8343a3d0855030ccdf035d357c34e1042ab15684604ba4a4d8dec6be4316312c64ca45cb0aab9e4c6b53d6be9b9736734f4acb28c886203c795b9a288639f128b44d03b75ed8b28e398a93829dbf12c7738f2ec6bab1a8e09ac69b09b3de07844341680689ad10d48c82e79884d2357d399edd9536738414679e257078420fd5f4faf046f97965d96e59b8c8b02f64782d734ce4bc0b6fa20baaaab7555af6b26d9ef6bff571abaee7081d96996d1dd5f31aca8dd2ae8ffc853e2cb55e5f490b768fe910bb2ffbdc7a746f03e55eae4e7dc7217a4da7221820c92e0e309427019f8f0b770b8a388c55b8a6984c435ce6b208a244106d5dcb24d69f799ddd535ec5409cee49b986ef60e075468148ab081443e5754ddd1b2514528172f200ce2b839b6f31da37f008a5ab34523050000",
    ],
    [
      "ETag",
      "3OhqD8E97DCYpnDInvNjuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1620694024143"
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
      "6b",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f4",
      "9a8049a3a0e041255469909a1a5a5a44d638a6894966bbbbb188f8df3bbbf6d0430fbdeccebef966786f2f702cdb3d8c6057169f1daaf35d8166658b1475571bcd97a45623788046144cbe166f61b57a7c0932990d91a2e13a9ecf26e331133affc046c0e8028712ebbd86d1fb055ad1208f6db7ca6d64cc9ca55516cb75fc10a72c34b4b7c2324b92c93489e1eafd1a93c77f8d6cae1e54b44bf1800adb1cad0ba9a8c2dc2c6c402d1a59a3afa953396a70b06b148a3a291491cf8adf1ff8c120ec0d86512f8c82e89ec19a72614a6a99cd9ed91b1832a24ee98bf341c8807225473db8f3c472df653839c05afbbb17d8dee667e1f46c503f2962771aadb1decde48cac71c3818cead0835cf02fcf4b737b5fbf016929f303c2010000",
    ],
    [
      "ETag",
      "XgZ2jQKW1UpU9eo49TEHCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2ODIsImlhdCI6MTYyMDY5NDA4Mn0.PHXUBFyyHgUmKUIl5dqYBsNDRIqPDEzPz1jqMdx3s_dpCeVdxx1aO9N0sjk3iAOgKl9iQRmj2ebG8mahQOpcDPIyIqj3xxrgTeZ8r55lakKKurZrg7ERHb2GUapqTLpuzvQ_6NPEx-jJ_ZNeTnDjgtkNyJu2XjmgvowNO_NI4FMZS7gytTFDzL1OXdp9e5a-W0O96LKDxZFkg3JqKw0vAJ7V1SpV1eZfvl58nJ80cd0GHRfejK0brYgqgrrIn0YytWiMt1b3uU_Rf5RcrCj53vEbfcOxuvOlBVQYamdO_mWq2ENqnYinMbzElK0_eSlr7JgsEP0mooO831JO6hb6hA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb64ad4e1584d29d8144101904147095e1137e95f00922d0e9ddebf408effd80284928e76468be29035f608e76ca26d998ed2724397d8585fecaec4c46133aa32ed1f7be92a3a5bec50c0fe3536898c4baf18679cb3f5007a9ab0f96a1246c3e26e8499aab744258ab5b651b54160d8ce25252cac302be8ca26ab8acf2c0b947fec93e54911b3b689b8da6cbd354cda3ce1bc535bc7a3333a4e0d194fae22fa1c8ca1ea6041f2d777c18969c85be210b627996c5dec24bde06b6e33835bbaf2f32e61dd4764c3367ec9220f60a75c2e40056804e6dd9534eca3757d82bca0afcdbc930b7f41d0069d4d31efcfe01bbedfcc71a010000",
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
      "Tue, 11 May 2021 00:48:02 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-57-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda2490d0bca4688d52ba664ac84a48ab699a906d2ed42dc1149b546995ffbe8b69ba7693da2f807dcfb9e7dc07cfe45ee431191326d2870acafd973bc9c809014d53bc7d7cea6e96fbbbef8bd1556ff5e42ef2c229665793092244cd52745b64d052b22a39a8f166dd4e4b5915b494b285895aa78396d3efdafd916b775dc7ed214f41962c447e8fec5bad0b35ee748edaed54ca34035a08d5e672fb7adfd9753b4529ef806bd5792fd94115d5f958f46b2639d542e693cd1a0d540aca08b6546468e12f336667ef53b705ddb65304ef0407cab9ac725ddbc2145ce68948abd26425e367626cbef9206b6fe1cd428bcbacdae6514eb77062c554d348ef0bb02e82d5d29afb17ab60390de72b3f5acf2ebde5b43d5b2d364b7f6ddd5c7a816769ca32305c6b629d99938f07d48f4169911bf5b0beae955f1a34ff7f2c3501a51534c16860f7a933b4472c61039e0c7ba72cb181b1211b9cd21eb3f9c8053766409167440d8be632e74ed761719f4594b983c81db0381a013e9c9e3b72fa36c59c5d7238218fa5d0702e542195683a446e8279e84561b0f167d3d0332524b4caf47963ac2ee0ad478d0522e8839a0e75544854aadb3df7432f98cec2f9b5d74c780129e5fbf503ce38a1990244d3129ba7a15cca181b46fce9d23b47b099d88f635091f1af6752f7bc76f1a6e5aff4100758dbd5e64dd66130f7bf193b47c435cd2a03d9351fa440cbb7581bba3efc46242e6993855c6dbce02769ae0248a0849c7f3e4d049bc0a7ffda71f1118bab8f324ae3197787ab5a8497d0ec9030e51ed9c3eec01d11032ef5bfb19eddb78f5dab73d419610bb97ea9a8597c2cb411abd42b0883387edf74ebf0076620302378040000",
    ],
    [
      "ETag",
      "wz2UMyjJL9Q3Oz4Lnp1pCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1620694024143"
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
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85ffcb78b42480b568130e4551318058cac1184296765a8bdbddbabbc510c27f77b6221a35d14b3b33fd66fbde6bb7f09c8b047c58e6d94b856a7394a1b9b74588bae246d3ad94422338808665444e45fbb8b3e2f12813bdc9a55adfdc3e8441d6ed12a1e3272c18f85b4873e48906ff710b8215486bb1e455211675e780d99476388dc2c1f89afa4226b61fcf86c3a037ecc3ce392c26ccb045cdff636dbe7360259721a6a850c468b5944aae3036036b53b3a2e4d8d0b252316aa8e1fa41a6645532256583268dd34ea3e5b59bdeb9db6cbb2df784402e63667229889d4d491f1869180fe52bb9048f0055976438adaf6b1ae7496dc4968371e4b9b5beaf00494b738e8bbf41d2fbc4e8337c60fb08be73ac90953007ea6a7817fc761c65fa79d46510f57f10da505207241a8cfad328184d2c37df7bef6d0cea899214a4469b61abe99e9d76bce67bac17d2464deff18daad08198d1df71931bf053c635eede00a3c9f7447b020000",
    ],
    [
      "ETag",
      "Sn2+7jlcMgnBPDrvHJYRAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1620694024143",
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
      "02ff85547f4fa34010fd2adcde3f9af40714686993c643e54e9296564a35dee5d2eec282ab94adec52d3987ef71bc0aaf5ee342181ee7b6fe6cdec4c9fd03dcb22344084250f05cdb75fef38410d44254ee074766a8b045f5ed8813fe10f9bdef585b5091f874360b05225f06a9dd2a6e0451e523198cf5a49ce8b35ce396f42a0a66935b56e47edf60db56368860e3a41d378c4b27b50df4ab91683767b9fbb95709ea414af9968857cf572dede74daeb9cdfd1508af661ca366411ed8f939ea43cc492f16c389f818142d07c415798a560e15519916f87a15b0caf5a0990372ca4380c7991c9d21684087916b3a4c8aba868f0842a9b6f3ed0cc193967817236997bc1d112af4af1f258c142592c722a8a54369425d414b3942e58b4ac91f5bdf2dd9f8c010107b75850b154ae2f1cdf5194a590e06ea97c192a278aed9d2b8772d753e69ee7cc02e5e8e458f9e14fe653e5f4e68003be232a24cb2ad70126292d1d3f37d6fdfb3a4b0196e0a206173db58b354bed9398f4c2d8d24d12ab94108bf44cac1335ec1bd48808c5a09365f44a85339e4591a199bd7e4fc37dc38ab0a577495f23866a5aa66e119d74228df46213a35d033de64cd27326d65cb0babbe8da77036711f873efcc0e9caa8c184307cf6b7365116f7d4a2812481fd4b52b51c621537955ae1738be7d16b8574e3d1d239ae0703b7b80f988712a28b0718e5754d27ccc23681a9a4e666ee04e3c7b048aeacaa77b8640835f4faf8260bbaeba2cab370adc31dc913d9e561ef6a42b9c16156b537fa08eda519b6aa7a99981d61968fa40335aaaaafe44bb5de3ffc16ddfb76fc010ce73bc7d8741915da394ff236bc5af7ed5e6f72e3454667bf18476bf77f03410ec581d1d5dce1dff06d5473e8d694eb3f0f3a10272057cfa57b1df5be0c2e6421ad801c9608443512609735a8f325b55769fd596d1d30d549173f91e33d5aebebfb332461991ae68269f2baaf7b66a540915e28504204ca0e77a3f00fd03849ea76537050000",
    ],
    [
      "ETag",
      "SBAsgaQHATROoqv7WH8vcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1620694024143"
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
      "8d904d4fc2401086ffcb786d138a4080840368a3984ab4881743c852a6b5f463d6dd6d0d92fe7767170f1e3c78d98f779e99bcef9ca1c8eb034c619f671f0daad35586e6d93e62d44d69345f926a8de0011a9131d95f07114d72f955bc36e3dbd1fa71f550b7f3d98c099dbc6325607a8634c7f2a061fa76865a54c86dbb9d72131933276995e5ea25bc0b63162a3a5861b589a2f9220aa1f37eb5c9e25f2ddbce8323ed634c51619da07521151d31314b1b508b4a96e86b6a54821a1cec0a99a2460a45e4b3e20fc77e30eaf7469341af3f0806d70c9694089353cdec66cddec09011654c9fda6e8301e59e1c357567cbf2d065681d60adfd5d0b6c6dfb33707132a89f14b13b8dd658ef62f286ac71c3818c6ad08344f096ef7373f977df2c56234cc2010000",
    ],
    [
      "ETag",
      "2S1Lo9ipzkVu8D6SMNJnvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2ODUsImlhdCI6MTYyMDY5NDA4NX0.YQKTZxYpZqeN3Ww9YMJdKmT062JVG7e1UkuvdxbHQccWB6PFHJtz4C3kjLF2lokaS3fpUA4Q_dxnEJ2pa1M6vj2fC0-ltxjnquvYEIcIoeqj7-lcy68ibOtPUQ9FFHbqs6QeIBI0fmdq2lOCrhHYNgltXVZp-RaciuvStHyCFCz96Qh2UUhduzvSv1-o96z4M9GPK-4PVzOM4TyREMbrumqKsr5v21JHVn2xNQ1BlE6EPfXkyh6DSWbstKQpQLmEYgPbj2SLO5VKTnRCjTGNyLufoCUFXx_nbBlLBrjIgtALEqaKDXL4MjWCeyexqO88PNGd3IFWv5rBZNJvccmFWQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dd04b7282300000d0bb642dce5015a53b417e0d74e41344360c9f8020222402099ddebd4e8ff0de0f48f31c539abc9e77dc814fc0d30f799daf617f5092aa9c26dbab4cd69fb2c1ea34478181ed0c2e9ea5bb5a8d5a637fef4671d6b5c7e46dc4e32c1b2815595fb2ca633ce27caf90ad801e3235af930449a89db3362bdcafa7d03069dc3751ba7910bc648b7ebcf6b57a26866d474e21f9974ee181013d71a968a04e88583c43d09d8a32086fb0b89475692ec949eb241d8543081d777bd0667ae37e2e72445b3ec492c05a1ec6e352e9968f9aac31cb3a8a13b00298f535c134a9dfdccd4e9657e0df9ebc788fdf010a4e0926e0f70fef87e6d01a010000",
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
      "Tue, 11 May 2021 00:48:05 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-59-1620694024143",
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
      "a2",
      "4014fd2b64f66b552aa26062b646e96aa2d845d47d644386f142a7450699a19ba6f1bfef65a8dd364dda4fcccc3de79e731f3c917b9eefc990c43c3d56503e7eb91331b920a0688aaff2b8db8e537b7b7b7d379beda6bf8a9bf447998e4688e0354bd24391414b8aaa6420879b753b2d4555d0528816266ad96eebb2df35fb6ecfecf62e7b16f22464c982e7f7c8be55aa90c34ee7acdd4e854833a005976d260e2fef9d876ea728c51d30253b6f253ba8223b1f8b7ecd04a38a8b7cb459a3814a4219c181f20c2dfc67eee3abb7a9db9c1eda29821f3803ca98a87255dbc2144ce4094fab526725c327a26dbe3a90b5b7f026a1c144561df228a707b830f654d1483d16605c07aba531f7af57c1721cce577eb49eccbce5b83d592d364b7f6dec665ee0198ac61968ae3132aef4cdc70beaef412a9e6bf5b07eae959f1b347f3f969a80d2129a603430fbf4d231dd3889072c712c3b4e4c8863271ed8d48a4de6f6a0b78f81224f8b6a16cd456e99966d77077664f6074ed4ebda4e14bb2e44dd1806b4ef587b8b9ae47441fe965cc194cb4248de7488ec8279e84561b0f127e3d0d32524b4cad4b4315617f0daa3c20211f4414da73aca052ad5ed9efba1178c27e17ceb35135e404ad9e3fa88334e682601d1b4c4e6292897628f0d23fe78e94d11ac2776730e4a32fcfd44ea9ed72e5eb5fc851ee2006bbb4a7fc93a0ce6fe376de78cd8d2acd29087e6400ab47c8bb5a1ebd31f44e2923659c8f78d17fc24cd5300099490b3cfa789601df8f45f3b2f3e6271f551462abce3ee30598bb0129a1de2badc33dbb16dcb211a5caa77b1be6b9dbb56e7a833c20172f55c51b3f858682356c917100671fcbeeed6e91fcad1896578040000",
    ],
    [
      "ETag",
      "sqWVAg5VhFjHHWDZpPgXrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1620694024143"
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
      "b42480a54a132eca8fda04104b89178690a59d4271db2dbb5b0921bcbbb315d1a889deb433d36fb6e79cf6002f691e830bcb74b52d51ee2f56a81f4d11a02ab956742b44ae102c40cd5644ceecad1fe64f3d995cf2cb6d7f14a8ed26de753a44a8688d1903f700498a3c56e03e1f206719d25a247899e58baab340ef0b339c86813fbea33e13b1e9c7b3e1d0eb0e0770b4ce8b31d36c51f1ff589b1f2dd8886580094acc23345a0a29361869dfd8542c2b38d6942865840a2ab87ab092a22c9814a246935aab5d6b38cdbad3b6eb4dbb615f11c845c4742a7293c094f481169af140ecc8253804c8aa24c349757da5711a57464ce98f43c7aef47d05485a92725cfc0d92de35a3cff0819d22f8ceb14c94b93e53b7c307efb7e328d3cfa3fa5e38f841284d499d91d01f0da6a1379a186e7ef2dedd6b54132928488526c346ddbe695d3bf5f7587bc2444def71b52cd18288d1df719f6a7013c6151edf0069a53b3c7b020000",
    ],
    [
      "ETag",
      "U4qITnWCrf+l+qDMRsqjdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554fd4fdb3010fd5732ef17d0fa919624fd902a56dac0a295b44b53109ba6d6492ec590c625764015eaffbe8b43818e0da448897defdd7b773ee791dcb234225d12b0e55d0ed9e6f30d0f488580a44bdc7d38f9397106167c9f985fcc74f8707433354efbbd1e2258c11274b54ea02a789e8520bab3696d99f17c4d33ceab98a86ae9d586d5d4ad8ea1378d8671843c01493c62e92db2afa55c8b6ebdbed3ae2d395f2640d74cd442be7adeafdf37ebeb8cdf4028457d5fb28e2aa2febee871c2432a194f7bb3291ac8056473585196a0851766147cdd4f5d6374555b22f89e8540c390e7a92c6c618a90a7315be699ca4aba8f44d97cf541a6f6c81ef8da603c73fd83055d15e4c5a14685369f6720f24456b405d614b304e62c5a9491f5ad76ea8dcf31820eaea900b1d02ebfd99ead69bb1cdaa79e76acf5dda1b6cf775c6de6baf6d4d70e8e0fb5336f3c9b6827577b18341e81902c55b67d1a2450587eeaacf3f63c0b029568a30cce5bba451b6dbd13c4412b8cdb476610eb1004eda065d2a3400f3b061851001479b2c8ae5834e5a90596a5b73b2da3d9d09bb109964969188556bb41dbd068401005662732da645b210f1993306462cd052bdb4b2e3dc7b7e7be3773077ddf5665c4145b382ccd1545bcf629b14804bd53d7b688328e4ac55939ae6f7bfd81ef5cd8e5788c6049c3cdf40e0724a6890044d38cae404276ce236c1a998ca78eef8cddfe0819eacc273b8420dd5f8f2f047fb3565d96ea4d4e47e3be6f19cac10e7241935c61eecb0fd2a89988d856fe9fa6ef79fd2b94a65946377fc5b01c4bd1ffa1a0f06a55da7c562485da6ed524dbdf5b7c2a04af53999dfc98d9de1529b73c88218334fc787c10ac021ffe15765714b178495146485ce3b086a2100933288796ad94dd2776db322df54f9134936f622dc3dc9d4e91a3c8082b48e55345e515558d2a42b97806611067cd75dc338cfe01a0b7754722050000",
    ],
    [
      "ETag",
      "wBZPIC6eKP5+5nDw3jS4FA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1620694024143"
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
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "78",
      "b44d5aac44493800a98869885431318690653bad85b65377b72821fc7767170f1e3c78d99d7df3cde4bd3dc2ae6c3218c0a62c3e3a54878b02cdc21629eaae329aaf961a8de0011a5130594fbe2e13114e5eb7d753f972f3a0e2c5dd66341c32a1e53bd6020647c84bac320d83b72334a2461e5baf95dbc89839b45699cd9fe3699cb250536685f9324946e3248693f76bacddfd6b6475f2604b9b147354d848b42e5a455b946666036a51b715fa9a3a255183835da350d4b54211f9acf8fdc00ffbbda07f1b05bd288cae18ac480a5352c3ecf289bd812123aa943e391ff41850aee4a8b93bf72c472ec3de01d6dadfbdd0f6563f0bc70783fa5111bbd3688d05679313b2c60d0732aa430fa4e05fbe2fcdf97dfa0604d9e494c2010000",
    ],
    [
      "ETag",
      "mCx+La1CYj5GcV8JrEQFbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2ODYsImlhdCI6MTYyMDY5NDA4Nn0.I5XLSy6Bazyu2HgFfYr8x_iJSqFlc7dxEXz5POn6RE6xH-_5pfvDm42ofmCzEmmV8kT8TriOE-2JNkSEolAl97Z1Yt5VzzqEOBWd-qyf6UB6_ZWnKVMujSzaYICQZv3GqU6dgkuANNY1WwnzE-FnhP-yvhRuofmc7JLQDJGEeS2qsr5DrlegD-Tv4G-qO9Gh_zws6HzWU4dyvJARmaq3Y1dW9ZEZHJeY5RS6vU1k6W5YVWJzw6k29Zu9w2hVQhq_hW8QLyUBIaQ8OPLH04FcQe7aTSNHHaDP41cclH9bVKfhCbkUHzh0kaDsfxy0C46sK33AKfb2WoZ4Nc1SMR_Mug"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "1dd0dd9642400000e07799ebea20c4dee577c36192617333476392554c48a33dfbeedbd947f8be1f50104287018f5d435bf001e642d25764e533cdc015fd54a058a463545fc93dd4489ee347b50ee4d151afb63caa89e41be67e17bef469f6cbfeeb6ed1e6a4b9d09bcefb2c5a3f83d64e5c9456c8659c75bc5b42186ce0c5b48e557faa2449e9d2fbed8c5db5b5f15943aa624c91891ca1cc0564929b986cb671c7ed440c9a28858ea74aaccf8639da5b59767884dfcf7629f80a1cf20237af496e9557bb245e4ce985054e89a04c9af8b19b458b1f6d5c6ef9118105a09cd53d1d70fde6ae155d5f807f3b1e6746df01062d7ada83df3f42cb30671a010000",
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
      "Tue, 11 May 2021 00:48:07 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-61-1620694024143",
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
      "00000002ff85535d6fda3014fd2b91f7b80201020424b4229aae4810b6105a6dd31439e626759bc4c176a8aa8affbe1ba774ad2ab54fb17dcfb9e7dc8f3c917b5eecc884c43cdd57201fbfdc89989c11d034c557e67e4dcadf97e12187bd0ab73d5bcaebf0613a4504af598ae665062d252ac9404db69b762a45555229440b13b586dd5677d8b38763c7ee395da78f3c0559b2e4c53db26fb52ed5a4d33969b75321d20c68c9559b89fce5bd73e8754a29ee8069d5792bd94115d5f958f45b2618d55c14d3ed060d540a640439e5195af8cfdcc5e76f53b739cddb29820f9c01654c5485ae6d610a268a84a7953459c9e489189baf0e64e32dbd79683191557911153487336b47358df46309d665b05e590bff721dac66e162ed479bf995b79ab5e7ebe576e56fac9b2b2ff02c4de30c0cd79a5ae7e6e6e305f577a0342f8c7a583fd7cacf0d5abc1f4b4d4069054d301ad943da75ed719cc42396b8fd419cd810c76e3c1ad07e6cb3b103ce2e068a3c236a58b41045d74d80824da331401239497f10513ad845cea8e73af610d30e29399e9107c9355c70550ac59b0e919b60117a51186cfdf92cf44c0909ad327dd118ab0b78ed51638108faa0a6631de50295ea762ffcd00b66f37071ed35135e424ad9e3668f334e68a600d15462f334c895d861c3883f5b7917083613fb710a2a32f9f344ea9ed72e5eb5fc851ee2006bbbda7cc9260c16fe7763e784b8a659652087e6404ab47c8bb5a1ebe35f44e2923659c8cfad17fc22cd5300094828d8e7d344b0097cfaaf9d161fb1b8fa28a334de717798aa4598846687b829f7c476475d774c0c58ea77b181e39eba56e7a833420e857eaea8597c2cb411abd40b0883387edf74ebf80fe5e71ba878040000",
    ],
    [
      "ETag",
      "c8+fpZFTvmeqsTU20rrVTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1620694024143"
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
      "30",
      "10",
      "86",
      "ff",
      "cbf9d19100cea94bf83014810410c688268690b2dd60d8adb3ed2493f0dfbd4e44a326fa65bdbb3ed7defb763b784ab2085c5826abe7026579b2423d31818faae05ad1928b4c2158809aad881c9dcafbb237d94c259fbd3e7469bf99a7db568b0815ae3165e0ee204e90470adcc71d642c456a0b052fd26c516516e83237c569e0f7475dca5311997c341b0cbcf6a0037bebd81831cd1615ff8fb6f9de828d58fa18a3c42c44334b2ec50643dd3732154b738e35250a19a2820aae36565214399342d4a852731ab586d3ac3b5776bd6937ec3302b908994e4446ec6c4af381169a715f6c49253804c82a24c171f57da1721255424cd81f058e5dcdf715a0d1e284e3e26f90e65d337a860fec60c1778ea5a2c8f491ba1ddc79bf1d479e7e1e75e3059d1f84d2e4d41109fac3ce34f08663c3cd0fdadba5463596828c54683c6cd4edcbf30ba7fe6eebb53056d33dae96055a1032fa3b7a890637665ce1fe0d3af737b07b020000",
    ],
    [
      "ETag",
      "N+rWyHQjSrlUzXGesp2pmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1620694024143",
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
      "54614fdb3010fd2b962704686dd376a5834a8875908d8892766902ea26d4b8891b0c491c6c07ad43fdef3b3b0456c1d8c74991e2f3bd7beff9cec903be65798c0778c192bb928ad5bb1bbec00d4c154960f7d741774f04b67adfeede7c57c5f5cfb3ac7d3a3c3c0404d3559264454a9b929722a272104c5b89e0654104e74d206af6bbcd4ebfdbee1ff4dadd5ea7f701ea244d972396df42f5b552851c5856addd4a384f524a0a265b11cf9ef6adfbae55087e432325ad4d490b54a4f5b6e851ca23a218cf0f832918282515739a11968285e7ca78f16993bac548d64a007ccf224aa28897b9d2b68022e2f99225a530ac78f0808dcd3f16786a8fec631f1d8f03d7df0949a68bc35d44249acf059565aa1a2884332d594ae72c0eab4c718bbe78e373c880836b22a90cd1e5a9edd9088dc697b6b7130274178d9c331b1da1a17b8236491c1705ae6b4f7db473b48bbe7ae360823ecf3630e03ea64b02064e880205a55dc7d5d2d12355542a003df6db793965bcd659c60553faa48eebdbdef0d8772eecaab9239a906835bd83f62e492a29a089201955549cf39842c9643c757c67ec0e4750613a36a911120f7e3c3c17f8ab826a83cabcb556bf67f46bc005494b83b8af1678abb3b785d7ebc6df49869e379c81301182ac5e177855c1e04d5499ac153b58abd55117afafd6f034305cc58a1d7f0b6c6f86ab2d8f2ea9a0796428df68b2019bc43fbfa8fa7a03162e38c84805b1542c925a2412d4a47d9619bb8fd5fbfbbd5e1f1bb0502f737b1ff55f208f5fcd3c6a94869f0ac18567eeb40e414d1a2f2c879ec05fa281332a2549344d90c34924258b94223378f4d467148688e5480f0285fe6c62cfcd30c206fa4c62c8a87e0f99260f909e71bdded6c1b676647c54a3f94f1eaeaab6689193b16bc33dfa0dfe24fbdb5f050000",
    ],
    [
      "ETag",
      "z925rUEt+02jZtphxKm0HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2ODgsImlhdCI6MTYyMDY5NDA4OH0.BuIeqVHVf9v4fKbNU5mcbFB-e_bQ1uKLgNOhZllBw-cDIIs87O9usW-uVE8uVGQIWSMP32564TvnO4R27lMGMC4oRKiLfos9calEP7sCz9W2F5gy-sUCgQC6TKGbbCQ6oxXboA5yLnEN36g63DSji8pJekKoPMguyFlH5Weri3eEgjzsrVdCz_C6meq1WlsQstyUkSqR8RKus-yu6U939qrM9uwJIuwqzcbnrbSRy7CJfVFfXlzkaCZnu8QfB1QW_vyamqQPYU13Sf90hiA1LKRI8sp88lSKAPokmDtkrIFXJb6zkPMxFjMLm-r1T-jJ6lR98X9xp1iXEWGcdHKndQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dd04b7282300000d0bb642d0efe2874470208885a5040dc64420814946f50814eef5ea74778ef07104a19e7b8af6fac029f60244b654ee7bb468638a36a77786cd5ef7229d7a292c6db67e5b7574be4fbe87189a1a1d581b0393a838c8a6417210db6e7fcf50a6a37a62e562333b997111a8551f673960ee3949df28fb0d6898a022bd5a5da73a0e109f0465bbb700d2bb4bfc44696a753625f4b8e53276847e4a977a60dc6daf032a17c84bcaab8bb127c9e2b49af63b86fb01b13221d9cd5b12b0f0912e9a2ed89b9bf4c777c16d1ba28fd9724f60b7398bcde0633c08626ef18c7f99bbbda28ca0cfcdb713f36ec1d0019e958077eff0066b4c5b71a010000",
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
      "Tue, 11 May 2021 00:48:08 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-63-1620694024143",
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
      "14",
      "fd2b91f75a20408080845644d3950dc29684a26d9a22dbdca4ee429cc60e5555f1df77e394ae55a5f629b6ef39f79cfb9147f257e43b32214ca47715940f9f6e25236704344df1b53bf6b6ebcdfdd7c0f7d35f5b75e7a8cb6f87d9748a0851b314dd1719b494ac4a0e6ab209db6929ab829652b630516bd86f75873d7b3876ec9ed375fac85390254b91ff45f68dd6859a743a27ed762a659a012d846a73b97f7eef1c7a9da294b7c0b5eabc96eca08aeabc2ffa39939c6a21f3e9264403958232863d15195af8cfdcb1f3d7a9db82eedb29820f8203e55c56b9ae6d610a2ef344a45569b292c92331365f1c48e82dbd7964719955fb3ccee91eceac1dd534d60f055897c17a652dfccb75b09a458bb51f87f32b6f356bcfd7cbcdca0faded95177896a62c03c3b5a6d6b9b9f97841fd1d282d72a31ed5cfb5f25383166fc75213505a41138c47f690765d7bcc1236e289db1fb0c406c65c361ad03eb3f9d80167c78022cf881a16cd65ce5dd71d74a11b8fd8d8899d61d28dc783be1bdbee8031c70587f77be47846ee4ba1e142a8422ad174886c8345e4c551b0f1e7b3c8332524b4caf44563ac2ee0a5478d0522e89d9a8e75544854aadbbdf0232f98cda3c5b5d74c780929e50fe11dce38a1990244d3129ba7a15cc91d368cf8b39577816033b1efa7a02293df8fa4ee79ede245cb9fe9110eb0b6abcd978451b0f0bf183b27c435cd2a0339340752a0e51bac0d5d1fff201297b4c9427e6cbce027699e0248a0849c7f3c4d049bc087ffda69f1118bab8f324ae31d7787ab5a8497d0ec9030e59ed8ae3b727ac4804bfd26e68e47a7aed539ea8cb0875c3f55d42c3e16da8855ea1984411cbf6fba75fc071b7ebf8078040000",
    ],
    [
      "ETag",
      "19EWOUwJRNNgZWsq4sFKvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92414f83401085ffcb78a591b6884ad203d5aa35b5d616e3c198660b03a52e0cee2e9aa6e97f7716b51a35d10bcc0cdf2cef3dd8c0635e2610c022cf9e6a54ebbd0ccd8d2da6a86b6934df2a2a3582036844c6e4a9abf7ef288a325f5e7a1758de5117c3acd76342c74b2c04041b4873948986e07e03a52890d762927551ce9bce01b3aeec70164d87e373ee0b4a6c3fbe1d8dc2fe68005b67b7980823e60dff8fb587ad032b5a4c314585658c564ba56885b1195a9b5a1495c496a65ac5a8a1819b0799a2ba128aa8c59396df6db5fd8eeb1f7b6ec76b7b5d0625c5c2e454327b3b637d60c80839a51776093e03aa29d970da5c9f799c278d115b0ec791ef35fabe022c2dcd25ceff0659ef52f067f8c0de23f8ce8982ead2eca8b3d175f8db719ce9e751a76134f84168c349ed906878359845e1d5c4720fefdefb6b837aa28883d468336cbbded1c1a1efbec57a42366a7e4f60548d0ec482ff8e8bdc40900aa971fb0afddf96b27b020000",
    ],
    [
      "ETag",
      "D0s/WoTTg6lJ4HenWo3eAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1620694024143",
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
      "0b",
      "4f",
      "db",
      "3010fe2b912724d0fa4c1f692a21d6b58145b46949d3b26e9a5ac7758a218943ec3055a8ff7d1787021d1b489112fbbec7ddf99c4774c7e235ea229f6dee339a6e3fdd721f9510957803bbe7d1e7d1f7f9d5e5c4b8b4eb83f9825efc180dae4e4f01c17296c05112d2b2e0594aa8e8cea6954dcab304a79c9741a8dc6e96eb6dbdd6369b35bd596f36802768180c597c07ec1b2913d1ad56f7de950de79b90e284890ae1d1f37ef541af2629bfa5448aeaa165155c44f57dd3b390132c198f4f6753482013345dd208b310527861aefd2f87d21586a3ca06c00f8c504c08cf6299a7051284c701db64a95245dd47a4d27cf581a6d6d0ea7b5a7f3c73bce3158e72f2ea44c3425b2e532ab25096b415d414b0902ed97a5544923beddc1d8f200219dc6041c54abbfe66b996a60dc7d7967bfc1c00ada17d6969675acf19688752b6a3cd1cc79a7adaf1d98976e18e6713edebe2000335aca9902c561578d80f699efd5393edb7479b13b004e322b8346a6d5cefd44c3ff00d12741a2d3fa851dfeff8460b37fc1a319bb4b9f629069eccd5150bc73c365aeb8034f586696062ae7d3da89b1d5fa7351d9b9418edb6d9680501266db42ba1df299374c044c2052b3a8dae5ddbb3969e3b73fa3dcf52650418ba392892cb8b789da7842201f44e5dbb3cca3838e5c7663b9ee5f6fa9e3db78a4919d20d26dbe93dcc4a804341018d531c5149d3115f43d3d0643cb53d7becf486c050c73fd92304eafe7c7c2178db447559aa379a7aaeed5ca804f688390e330579283ed0114e9223b4db95fe2fd373ddde02ac719ae2ed5f3128a7ddcce9ffb05078b52ad2dc5bd651eeb65fe968f76b074f09c1cd2ad4d1d5cc7217a8d8726940531a938fc707c02af0e10f627f5b010bf7156c8484350c2b11b909496931b42c52e93e",
      "b13b66cb349002a7f24dccd08dfde9e41ab9228d682c9f2a2a6eab6a541ecac4330882306b8e3aa8dd1f567826982d050000",
    ],
    [
      "ETag",
      "Fm+MXVQKP7KI1DVYeGZMDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1620694024143"
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
      "c2",
      "40",
      "10",
      "85",
      "ffcb786d93521a12493888a98a21a8552e1842b6655a0b6da7ec4e3140f8efce2ec670f4b23bfbe69bc97b7b826dd9ac61086959ec3ad4879b02f9cd16099aae6223574b8d41f0005915422e386f8e9360f7f2a0d5736ae2d97131df15a3911026fbc25ac1f0047989d5dac0f0f3048daa51c6562bed360ac687d62a93d947fc182722d4b4b6c26c3e9dde8da7319cbdabb176fbaf91e5d9830da509e6a8b1c9d0ba68356d30e3890d6854dd56e81bea7486061cec1a85a6ae559ac817c51f447e6f100683db2808a35ed417b0a24c71498db0f377f1064cacaa84be251f840268574ad4dc9d7b91fb2ec3de01d6da752ffcebf56c6ff9bb707c6034af9ac49d416b2cb898bc276b9c2510eb0e3dc894fcf253c997f7f9076fe903a3c2010000",
    ],
    [
      "ETag",
      "ZtfnzI0qOFraJbsENzZUqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2ODksImlhdCI6MTYyMDY5NDA4OX0.cMYh4Mb2IQbPfM2-eflD3M6DIsZxW_QTIstvJ4CmMVbs_eaMhp_wcYG_A4RjxiHCC9a8vBOD2fm_WlAL3Fxul7mtcodKStVSVTBBS4A-GC1KTnraWziH5EIf8abFFQbWg3_00cD6vRcSwRbSwhQXkEGJztjtepCnPRHLNXZ7Y7DmNDfnsAYwLPxYfxLDC2CmFCm1o3n8aZCsMn5oc7GzQr-cDyKgPnZaIvP41wsoPkv4yE75uy1MD-d4xlzeTjlDJOaTWlO2n3kCqFGyDpFvGPTeuxkTgVhGjLdc9dRFtmFIeM6R8QLph7KyEP_3UKFHg3QOwKsb8idKvjq_jpVsfA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "cb",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "7f",
      "c9",
      "5a1c798add19c507a94a00adbac940bcd5a0983460013bfdf73afd84737e50c6395415abe515eee80d759935eaf33e513e66e7933781a96273e6d57ae71aa756de41faaea51b6fcfa4afc201d9caf72dde0c27cd4cc7345dc452ad685a9449375cabf6facc9be01cee92006797715738745279746d280884f8a6aefdb0c71c0e4e34b54ea1fca813962f3111d163bed0fa32303e21b78bf9e666ee9f8744183732f3c903ec8dbb32167ec7ad6378e5976d4e23aba982d681542ab3a94ad24447517cb1da9fe1655c124a63bc3c0b9eef4dd443d02aa1a162e2c5b5ddd1a887feedacee14bc0230641a34fafd03f9db42191a010000",
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
      "Tue, 11 May 2021 00:48:10 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-65-1620694024143",
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
      "00000002ff85535d6fa24014fd2b64f6b52a2a5835315bd7d296447117b1cd66b321c370a1d3024399c1c618fffb5e86da6dd3a47d6266ee39f79cfbc1813cf222265312f1f4a9866affed4144e48c80a229bee66ee5aaf172b7ef97cf377775f923db3f5ccf673344f08625695e66d091a2ae18c8e976d34d2b5197b412a283893a23bbd31f0dccd1c4320756df1a224f42962c79f188ec7ba54a39edf54edadd548834035a72d965227f7defed06bdb2120fc094ecbd97eca18aec7d2efa3d138c2a2e8ad97683066a09550839e5195af8cf8ca38bf7a9bb9ce6dd14c13bce803226ea4235b630051345c2d3bad259c9f440b4cd3707b27196ce223098c8eabc080b9ac39911534543b52fc1b8f2d72bc3f5aed6fe6a1eb86b2fdc2c6e9cd5bcbb582fb72b6f63dcdd38be63281a65a0b9c6ccb8d0370f2fa81f8354bcd0ea41f3dc28bf34c8fd38968680d212da60786e8e687f6c4ea2243a67c9786847890951348ece6d3a8c4c36b1c08a23a0c8d3a29a450b519863dbecd36418da2c86d08a4d2ba4769c84a3018c983db4631a51723c23cf155770c96529246f3b44ee7c3770c2c0df7a8b79e0e812125a67eab235d614f0d6a3c20211f4494dc726ca052a35ed76bdc0f1e78bc0bd75da092f21a56cbf79c21927349380685a61f314542b1163c388375f399708d613fb790a4a32fd73204dcf1b176f5afe4a0f70808d5da5bf6413f8ae77aded9c10b734ab3564d71e488996efb136747dfc8b485cd2360bf9b575fcdfa47df221810a0af6f53411ac035ffe6ba7c5472cae3eca488577dc1d261b115641bb435c977b624fccfec4221a5ca90fb1e1687cea5a93a3c9083914eaa5a276f1b1d056ac96af200ce2f83dddade33f51f6bd3278040000",
    ],
    [
      "ETag",
      "mIrIt8Lvy1pwHWupBlyjGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1620694024143"
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
      "000002ff8d92614fc2301086ffcbf9754b868e294bf830742811106124268690b2ddc6705b47db8184f0dfbd4e44a326fa65bdbb3ed7bef7767b78498b085c58a4c9ba42b13b4b503dea608cb2ca94a4a5e485443000154b882cacaa50ebd79658f95bc77a1aadef9bdd8dd76e1321c325e60cdc3dc429669104f7790f05cb91da429e557931af3303d4aed4c54930ee0d6f29cf79a4f3e1b4dff73a7d1f0ec6a931628acd6bfe1f6db383012bbe18638c028b10b59652f01586aaa7c7942c2f333425af4488126ab8de4804af4a263837a9623a4db3e19c5b4ecbb6ceed867d4160c643a6525e103b9d903e505cb16cccb734253804883aa481e3fabba1721ad583e8b0370c1cbbd6f7152069719ae1fc6f90f42e193dc30776b4e03bc7724eaf73a2bafd07efb7e3c8d3cfa36ebcc0ff4148454e9d90a037f027813718696e769cbdb353284782939112b5870dcbbe6a5e3ad6bbadd75c5b4df7b84a546840c8e8efb84b15b831cb241ede00e5cce57d7b020000",
    ],
    [
      "ETag",
      "n0untqx9rjEw60XPqK5FvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1620694024143",
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
      "8d",
      "4f",
      "a3",
      "30",
      "14",
      "ff",
      "57",
      "48",
      "2f269a6c63631b1b4b8cb79ba8e426db31a6672e97ad948255a0488b6631fbdfef519c1fe79d2624d0bedfc77bafaf3ca25b968568840216df95b4d87cb9e1016a202a710cbb7d439e7a2792cdc5ec2e39f3a54eba0f3fe3c34340b08a25709a27b4297859102a46cb452b2e7899e382f32608354db3d9318db669f5da46afd3eb024fd0249ab2ec16d8d752e662a4eb3bef56cc799c509c33d1223c7dded7ef0d3d2ff80d2552e86f2d757011fac7a647092758329e1d2e1790402968b1a2296609a4f0c20c83af6fa55b0ca7ad18c0f78c504c082f3359a505128467118bcb42a9a2d1235269befa400b7b6a4f7c6d325bbafefe1aa715797da061a1ad56051565221bda1a6a8a5842572c5cd791fc563bf166e710810caeb1a062ad5d9ed99ead69d3d9a5eded3f07406bea7cb7b5236dec1e6b6fa51c575bbaaebdf0b5fda303edd49b2de7dab7ab3718a821a442b24c55e0e320a155f64f4d76de1f6d45c0128cebe06ad0367167d8b68228189068d8ed07519b06c13018f471376813ab477b614031f064a5ae5838e3d9a01f46a46774ad012656181851c71a06066d1bd8a264609a56b71f45989868db400f0593f498899c0b56771a5d7a8e6faf7c6fe94ec6beadca883074f3b84eae2ae2759e128a04d007756dab28e3e0541d9be3fab6379ef8ce855d4fca94c6986c1677302b114e0405342e704a252dce79084d43f3d9c2f19d993b9e02431dff7c871068f4ebf185e06f72d565a9de68e17b8e7baa12d8212e70522ac87dfd81f6709eefa1edb6f17f99b1e78dafc01a1705defc158372cc5e45ff8785c2ab559de6ceb2832ab7ddca40dbdf",
      "5b781a086e56ad8e7e2c6def0ad55b1e8d684133f2f9f80058053efd41ec6e2b60e1be828d90b0866125a2322105ad8796a52add27b6d531fa2652e042be8bf5badddde9541a95224d69269f2aaa6fab6a54152ac5330882306bae3aa8ed1fbbc06a422d050000",
    ],
    [
      "ETag",
      "52tGRFtiPsOqlHTt/c3wXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90d16bc23010c6ff97dbe35aa6b5eb58c18729659389cc3a076388c47ad66adbcb92d451c4ffdd4b1cc3c7bd2497ef7e777c5f8eb02fea35c4b02af2ef06557b93a399da2245dd9446f325a9d6081ea0113993dbb0987d6c5f1f3eebbb24bf9d0defd33694d37e9f099d6db112101f615360b9d6107f1da11615f2d872a9dc46c64c2bad329abc27cf49ca42456b2b4ce6e3f1d3609cc0c9bb1a93fb7f8d2c4e1eec6895e20615d6195a1752d10e3333b201b5a86489bea64665a8c1c1ae912b6aa450443e2b7e14f9dd28e8448f612708bb618fc19232610aaa999dcfd81b1832a24ce987f341c080722547ddb8f3c072cf653838c05abbee057fbdaeed2d7e170e5a83fa4d11bbd3688d752e2687648d1b0e6454831e64827ff9a53097f7e90cb892d785c2010000",
    ],
    [
      "ETag",
      "h4iSVhK7Yn/Eg+SC5Ry4pQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2OTEsImlhdCI6MTYyMDY5NDA5MX0.O3fKmPhT3n7WbKD065jWYTukDs8FTcA1dHWLOC5ukrALr10OcyjCtmH7pZCJAQd4ik5jgwxCj2G5GoON3ESFHly8uP7IxZ3HP_SNflDiCNiHtteNv_xzzbYJCZLH2QkCoqEkasig95x606R0eKyOJGPwD2Q5CBzwDkZqAZr3q2F--y0UZ5ELPgSOHYZGjRZ2-G9sn3qQmIYwgl1rJL2z5xsYQHbKuPA5rYMyrK1TcAU-pu20Rq39w_-PeEMxEw9N1C0Mt64LmesZPv-URH4TJQEEmdm9eEucpMY2d649IarFHjdx3RjkKRykc3iRzFv9aejc38NEqVI7S0ZeRNHgSA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b7282300000d0bb64ad4e02caa7bb502883d0141050d864524805b5900262c4e9ddebf408ef3d002b4b3e0c74eccebc052fe0ce147355ae7c6158f458110f12a8f73f5f51dc1c8ca4766e1ef99605b42d52e94ccbecbc2132dc8a0e2f2534f2f86a5cd343eb956a7479c5015a7ececbed4ed90748bd9231c9d68d90c7b0d51c7dc2ccef483cbd5d44e23ae243166dc736761aeb357e2f0aa69c1245e435656ebadfa977594dc8efb3354ceb84dfeca3d152b18fe009cfd20d8a10cf67d8a471c5905d233193da1c50a4c5d6659a7516fa30082476462513022c0097a2e9f9409b2757dd98e602fcdbe97817fc196071d6f31efcfe0127b8a1571a010000",
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
      "Tue, 11 May 2021 00:48:11 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-67-1620694024143",
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
      "0000000002ff85536b6fda3014fd2bc8fb5a20e11108125a294d5724085b08ada6698a6ce726751be23476a850c57fdf8d53ba7693da4fb17dcfb9e7dc479ec983c86332214ca48f1594872ff7929133029aa6f8fa70115ee7fdbd7550c3a71be941b6bfb0e3743a4584a8598aee8a0cda4a56250735d96e3a6929ab829652b63151db19b56da76739eec0ea0dec411f790ab26429f20764df695da849b77bd2eea452a619d042a80e97bbd7f7eebed72d4a790f5cabee7bc92eaaa8eec7a25f33c9a916329f6e3768a0525046b0a322430b7f99313b7f9fba23e8ae9322782f3850ce6595ebda16a6e0324f445a95262b993c1363f3cd816cbca5370f5b5c66d52e8f72ba83b3564c358df4a180d655b05eb516fed53a58cdc2c5da8f36f36b6f35ebccd7cbedcadfb46eafbdc06b69ca3230dcd6b4756e6e3e5e503f06a5456ed4c3fab9567e69d0e2ffb1d4049456d004a391e5507b6cb92c61239e8cfb439658c0d8988d86b4cf2cee0e601033a0c833a286457399538e7d755c37726c96440387c711a3fd5ed4c32b736030647d8b1ccfc85329345c0a5548259a0e91db60117a51186cfdf92cf44c0909ad327dd918ab0b78eb51638108faa0a6631d151295ea762ffcd00b66f37071e335135e424af961f388334e68a600d1b4c4e669285732c686117fb6f22e116c26f6fd145464f2eb99d43daf5dbc69f92b3dc401d676b5f9924d182cfc6fc6ce097143b3ca40f6cd811468f90e6b43d7c7df88c4256db2901f5b2ff8499aa700122821e79f4f13c126f0e9bf765a7cc4e2eaa38cd278c7dde1aa16e125343b244cb927b66bbbb64d0cb8d4ffc67a963b3e75adce5167841de4faa5a266f1b1d046ac52af200ce2f87dd3ade31f909bdb1978040000",
    ],
    [
      "ETag",
      "kBTHn3v0ys5wVoEelvB1dg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1620694024143"
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
      "ff8d92dd4ec2401085df65bc2d11b0166dc245115012407e4a62620859da69596cbb65778b6908efee6c45346aa237edccf49bed39a73dc00bcf427061cde35d81b2bc88514f4d314355245ad12d179942b000358b89ec84dd88ef9bbaccfa97c1ce76bca7984fbd769b08156c3065e01e20e298840adce703642c455a0b4452a4d9aaea2cd0656e86737f3618df539f8ad0f4e3c570e875863d385ae7c59069b6aaf87fac2d8f166cc57a86114acc02345a7229b618e881b1a9589a275853a290012aa8e0ea412c45913329448d2635a7556b38cdba736bd79b76c3be22301101d35c64c42ee6a40fb4d02c99895772090e01b22ac970545df734e66165c49483b1efd895beaf00498b7882abbf41d2bb61f4193eb05304df39968a22d367aa3f7cf47e3b8e32fd3caaebf9bd1f84d294d419f107a3dedcf74613c32d4fde3ba546359182825468326cd4ed9beb96537f8ff54e98a8e93dae96055a1030fa3b1eb806376289c2e31b950a615b7b020000",
    ],
    [
      "ETag",
      "BdDfiv2tynF/cq46AXgiQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1620694024143",
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
      "6b",
      "4f",
      "db3014fd2b96f705b43e685795d209b102d98896262549611542ad49dcd490c4c1764015ea7fdfb5d3d2756cecf3a44a8d7dcf39f7dc875ff003cb63dcc7772c792ca9587eb8e777b886a92209dcfe489ce2b9bd7082e1477ed193cc63a4387a3e3e0604d32c49b222a575c94b1151d91f078d44f0b22082f33a08d5bbbd7aabdb3ee81e750eda9d56e713f0244de70ecb1f80bd50aa90fd667393bb91709ea494144c36229ebdde379fdacd42f07b1a29d9dc4dd9842cb2f97ed293944744319e1f8f0330504a2aa634232c050b5b667cf76557bac148d64800fcc4224aa28897b9d2b64022e2f99c25a530aab8ff828dcd5f3e706039d65988cebcb11beecd48a6c9b37d44249a4e059565aa6a680635cd594aa72c9e5591e2017df5bd2144c0c182482a67e8fac2f22d841cefdaf2f7665281471072ecef163a4103f71cedead82e1abbae158468ef641f7df3bdf1089d4e763050404ce7043c9c13054994361e579fb69eaaa2520168dd72fbeda0f14a4719174ce9626d37b4fcc159685f59557f1d9a9068193c4287e7249514d044908c2a2a863ca6401979811dda9e3b7080619a36da2024eedfbc6c09e1b2a0daa032ff38b48750dc6038c2ab55edefb081ef0f26204d8420cbdf6260b7dbd1f42dfb8aa4a58118bc3955369eaa006e619d6d736ae3d5ed0a7e350cfb56a9e3cbb1e54f7075e5d33915348f8ce43b6d346013f8e7b3d9ec3060618b210d6c826252b148ea2491a0261cb2ccd85db38fda870787d880857a13ebb57afaa9e7f11f23eb1ca5d1a74270e19bc5d547c8268d1796434f587c69d67ec7e5e3fa2aa3529244cbbb1c6544450b962748b224076d41d19c0b342ff348d3aa2d3757442465467385f4d0641fbdcebd8182b228b85034deaa00a07a2041e8dbeeb7fdcfebe3e924b40278760addb4fabdf6ad2eca94524df7ff2de3b61a8ef673ee",
      "b9166cf34fc9e6af3dca050000",
    ],
    [
      "ETag",
      "XgLpw2hLSM+oH8siOiap9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2OTIsImlhdCI6MTYyMDY5NDA5Mn0.dvzpNO0dSQUSs6efAHwmLGHPICZQEFRRf3-mnyvCw3KckwvnnrQVvP2gC7nsmh2NDxtYzuHcn9xFu_H1SdWV2tjmc7YsQbQqSUpHxzZofeRi2c2zbqWk3aAPZs9JZ-GMYBJoOgNrijrv5jVD9UMAQkkqZuGQ3HQ-g9sgymLIeR-HBn5b0LuAvr0trwRvtGRI9vEReiaTZd_3hlJ9Xhhu9h6VheCRfBnSoYCVSEyWw56XYas6j3LXlYrfVAg4CBud3wrzPnV1yHuNF1g7DEkvlpQuZGcb_vipfp8tc5FVx9pWmZHjNSNrxLrvCKg-qOwV23niA4QQd-OqyEBWdmGZYQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "cb",
      "72",
      "82",
      "30",
      "1400d07fc95a1c0111e82e54b156461101850d43e2e51924bc14e9f4dfebf413cef94131a5d075515f9770471fe8154bfa9ccef75c33a214843621249c2c710b6c1d5981b7f5f3ac8ef9a85e98b90bc753e6657ac5e4bbbef6c5a5a351e2e5ac101ef2275705bedbd83009943c6c67dc0cabf8de38a6713c39de583455a359f5adceae643184cf9cd89c376a702662ac0ceb864fc694296e8a9f4cda17925bd82b7cb08aafa914f7eea9572fe1002285b23ada4a62d283fab0f0d5b1d9b25ea61d0e2add3534194435c12cb849056076fe5ee0d617d00cc1c8f316ba287f736545d767e8df1ef52f0eef0003e2165af4fb074289dbc71a010000",
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
      "Tue, 11 May 2021 00:48:13 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-69-1620694024143",
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
      "2b64f6d5965228b54d9ab5a9a8cdb674a554b3bbd99061b8e0b8c02033b81ad3ffbe97c1ba1a137d6266ee39f79cfbc113f9c3cb844c49ccb3bb06eac72fb72226470414cdf0d52cf8cf9b517c21374ef850f90ff2ee5b767e399b2182b72c498b2a879e144dcd404e77db7e568ba6a2b5103d4cd473273dcb1d0edc8933183a9663234f429eae78f907d9374a55726a9a07ed7e26449603adb8ec3351bcbc9bf743b3aac52d3025cdb79226aa48f363d1afb960547151ce765b34d048a8232828cfd1c27f66129fbc4ddde7b4e86708bee70c2863a229556b0b533051a63c6b6a9d954c9f88b6f9ea40b6deca5b84061379539451490b383212aa68a41e2b30ce82cdda58fa679b603d0f971b3fda2e2ebcf5bcbfd8ac766b7f6b5c5f788167281ae7a0b9c6cc38d1371f2fa89f8054bcd4ea61fbdc2a3f3768f97e2c2d01a52574c1683c70a9753c98c4693c66e9b13d8ad301c4f1713c1e513b1eb089034e1203459e16d52c5a62cdee78384cd3344a98ed444ee25a11b56812b111b8d68439230a09d91f91bf355770ca652524ef3a44ae8365e84561b0f317f3d0d325a4b4c9d56967ac2de0b547850522e8839af66d940b546adbbdf4432f982fc2e595d74d780519658fdb3b9c714a730988a635364f41bd1609368cf8f3b5778a603db1ef87a024d35f4fa4ed79ebe255cb5fe8210eb0b5abf4976cc360e99f6b3b07c415cd1b0db9ef0ea442cb37581bbadeff46242e6997855ceebce007e99e0248a186927d3e4d04ebc0a7ffda61f1118bab8f3252e11d7787c95684d5d0ed10d7e51ed813db1ab844836bf52e36b4ed43d7da1c6d4628a054cf15758b8f8576628d7c016110c7efeb6eedff01a3cdd62678",
      "040000",
    ],
    [
      "ETag",
      "/miZh5bHsO4TxpNxsqKgGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1620694024143"
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
      "92416f82401085ffcbf48a09564a2b8907acb63551ab88a7c69815065c051677971a63fcef9da5d6366d93f60233c337cb7b0f8eb0e5450c1eac78baab501eae52d4535304a8aa4c2bba95a2500816a066a921a7f948f1c33edc33de0b5adb5db2537dbfd32142456bcc197847483866b102efe50805cb91d622915579b1ac3b0bf4a134c359180cc68fd4e72236fd783e1cfadd611f4ed66531669a2d6bfe1f6b8b93051bb10a3041894584464b29c506233d303615cbcb0c1b4a54324205355c3f48a5a84a268568d0a4e1b61b4df7da76db8e7ded349d1681998898e6a220763e237da085665920f6e4125c02645d92e1a4bebed298c7b511530ec6a1ebd4fabe02242de1192eff0649ef9ad167f8c0ce117ce7582eaa425fa887e1b3ffdb7194e9e7513d3fecff2094a6a42e483818f567a13f9a186e71f6de3d6854132928488526c3a6eddcdddcbaf67bacf7c2444deff1b4acd08288d1dff1c4357809cb149ede009d6e90c87b020000",
    ],
    [
      "ETag",
      "bQmMsiywTwaiDR3kqfqsEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1620694024143",
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
      "ffd5536b6fda3014fd2b96f7a595781486da8ea9ead236eda241429350c6aa0a4c62528f240eb6538955fcf75d3b50c6ba759f274502fb9e73eeb90f3fe305cb63dcc533962c4b2a56efbef319ae61aa4802b74bfbeb9db5b0bcbe7fedfd18cd46b93ffed6b4cece00c1344b92ac48695df25244547687412311bc2c88e0bc0e42f593a37aebb87d74fca173d4eeb43aef8127693aefb17c01ec47a50ad96d36b7b91b09e7494a49c16423e2d9cb7df3a9dd2c04ff4e23259bfb299b904536df4e7a9ef28828c6f3b36100064a49c5846684a56061c78c679ff6a51b8c648d04c04f2ca2248a78992b6d0b24229ecf59520aa38abbcfd8d8fce50f0eec9e7d19a24b6fe88607539269f2f41011892613416599aa1a9a424d7396d2098ba755a458a06bdfeb43041c3c1249e5148d3edbbe8d50cf1bd9fec1542af008423de78b8dce91e55ea17d1dc74543d7b583101d9c1fa21bdf1b0ed0c5780f0305c4744ec0c31551904469e371f5d7d15355542a006d5aeebc1e345eeb28e382295dace386b66f5d86ce9d5df5b7471312ad822574784e5249014d04c9a8a2a2cf630a94811738a1e3b9560f18a669832d42e2eefdf38e10ae0aaa0d2af38b43a70fc559fd015eaf6b7f8759be6f8d419a084156bfc5c0ee7147d377ec3b92960662f0e654d978aa02b88575b6eda98dd70f6bf86a18f6ad52c7b743db1fe3eacaa7732a681e19c937da68c026f0cf67b3dd61c0c216431ad804c5a46291d44922414d386499b1bb61c3776a1e9d2242bd8ab5db27faa9e7f11f239b1ca5d1a74270e19bc5d547c8268d1796434f587c6bd67ecfe5727395512949a2e55d8e32a2a247962748b224076d41d19c0b342ff348d3aa2d3757442465467385f4d06417bdccbd8182b228b85034dea900a07a2041e83beecde1c7cdf1621cda013c3b85ee5bddd3f6832eca94524df7ff2de3a11a8ef673e5b9366cf34f63212410ca050000",
    ],
    [
      "ETag",
      "qEXVAkAOMRFOzWbWnRYZ/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2OTQsImlhdCI6MTYyMDY5NDA5NH0.HJY5YT_MTY9_c7c7PUbOvmOXVd01GWIQHYeuX9Bgp-MO0UpO_v-4NYiO6VMP6d5YZvKP23SzU3MxPvUV5ZKYomeANAaP2pQorGqpxY_w0ILgFz_SyCTc-jM4hEVlhV2VJiHjoqKFLfgRfOlMkMw_YlEEkwV9qpLncmpC84CnnJfY4jZf57WIflBd5jgAuV2OFksTDsS6DL-MNK7SdXE78wvjFRqHw_QTsZpE_SJMdf0LzQ9yNVP9QuF6a9DDR40WnXjGRTgKlsRCvpzCFaq3WQfe-X9zZZvcCzGNHoi008V9urmuTaxPpbtZkkAPGLQ1qotpxqB7Ee3WUbgqLMDvYw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff1dd0c97282300000d07fc9591c34d892de08e2b8859d16b8640204cabeb9c54effbd4e3fe1bd1fc0d294cf33bdf435efc007106c8d96e9f234a89816b9348402a2684c0a51a04ad9645f6a591a9ab53ae5d07ff6f7ecac19dbc6346cdb84ee9ca581b3892f3775afa17571e8db63b43f464de84bf1e71931c3ca25c8dcc481834c9fc99b8e778febc3927b522bbcac829170a64fc4c6aaf7ddb57de6a9ef3b929a5d770ef2a9719ec6e05b85195add8d63bacdd05e6eefc4566617497682702a9ca2a5a13252bd14d75a78316b0e4c49a2961cabd11ea1baca64b000fc3194139f69f9e2c20d420bf06fa71731f05700e66ce213f8fd03a702847e1a010000",
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
      "Tue, 11 May 2021 00:48:14 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-71-1620694024143",
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
      "9b3014fd2bc8fbda24e41d22456b94d2355a201b903e344dc8980b714a30c5265555e5bfef629aae55a5f613b6ef39f79cfbe099dcf33c265312f1f4a182f2e9db4e44e48c80a269fdbacd1eb7773fe9ad1d47ce755cdcfa87dd6e3e9b2182d72c49f745062d29aa92819c6efc765a8aaaa0a5102d4cd41a775bdd51cf1c5903b337e80efac89390252b9edf237bab5421a79dce49bb9d0a9166400b2edb4cec5fdf3b875ea728c50e98929df7921d54919dcf45bf678251c5453edbf868a0925086b0a73c430bff997174fe3e759bd37d3b45f08133a08c892a57b52d4cc1449ef0b42a7556327d26dae69b03f1ed95bd080c26b26a9f8739ddc39911534543f5548071e9ad1d63e95eae3d671e2cd76ee82fae6c67de5eac571bc7f58d9b2bdbb30d45a30c34d79819e7fae6e205f563908ae75a3da89f6be597062d3f8ea526a0b48426188ecd11ed4e4c2b4aa2314b26fd619498104593683ca4fdc864d60006710414795a54b3682e72b0c6099863165a430bc2417f42436ab15e980ca969c510f5fb4320c733f2587205175c1642f2a643e4c65b067618781b77310f6c5d4242ab4c5d34c6ea02de7a545820823ea9e95847b940a5badd4b37b0bdf922585edbcd84579052f6e43fe08c139a4940342db1790a4a47c4d830e2ce1dfb02c17a62bf4e4149a67f9e49ddf3dac59b96bfd2031c606d57e92ff1036fe9fed0764e886b9a551a72680ea440cb5bac0d5d1fff221297b4c9427e6f6cef8e344f1e245042cebe9e268275e0cb7fedb4f888c5d54719a9f08ebbc3642dc24a687688eb724f6c6b30ec77890697ea436c341e9eba56e7a833c21e72f55251b3f858682356c957100671fcaeeed6f11f3e3c6b7378040000",
    ],
    [
      "ETag",
      "bhlwhYKaXEdbMVdpXSvjjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1620694024143"
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
      "1085df65bca50928a54ad20baab5c5f44f4a1313d3345b185a5a607177d1d4a6efee2cd66ad4446f6066f86639e7c01eb66911830bcb74f554a1d89dad50ddeb224059654ad2ade485443000155b11b9ab1ed2b5df9cf6a4285fb7e37e5ede994bafdd2642466bcc19b87b4852cc6209eee31e0a9623ad453cabf262517706a85da987d330f0473dea731eeb7e341b0cbccea00b07e3b41833c51635ff8fb5f9c1800d5f0698a0c02242ada5147c8391f2b54dc9f232c386e4958850420dd70f56825725139c3768d268590dcb39379d2bdb3cb72dfb82c08c474ca5bc207636257da0b86259c05fc825380488ba24c3497d7da6711ad74674e98f42c7aef57d05485a9266b8f81b24bd6b469fe1033b46f09d6339af0a75a26e0763efb7e328d3cfa36ebcb0fb83908a923a21a13fec4e436f38d1dcfce8bdb353282782539012758696695f365b8ef91eeb35d751d37b5c252a342062f477f453056ec2328987379313701e7b020000",
    ],
    [
      "ETag",
      "yuXihI5SGsrpzkOHmpJ0bA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1620694024143",
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
      "7f",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2a",
      "96270448fdbd164425c40a0416569292a665d5841a377183691217dba9d6a17ef79d9d16e860eccf4991e2f3bd7beff9cec9139eb12cc26d3c61f1634ec5f2d3039fe012a68ac4b0bbac5d3567d98df57d31f479fe737639fc75757b737c0c08a6ab2449e7092d4b9e8b90caf6a05f8905cfe744705e06a2f261a35c3f68d40e8e9ab546b3defc0c759226d32ecb66507dafd45cb6abd58d7625e63c4e289933590979fabc5f5d34aa73c11f68a864755bb20a2ab2fab1e849c243a218cf8e077d30904b2ac634252c010b2f95d1e4cb36758591b4120378c1424ac290e799d2b68022e4d994c5b930acb8fd848dcd570bdcb7bad6998fcedc81e3ef0524d5c5c13e22128dc782ca3c512514c099a62ca163160545663e43179e7b0d1970704f249501bafd6a7916425df7d6f25e3175ed6f163a411de71c6d13d90e1a388ed5f7d1dec93ebaf4dc410f9d8eb6307082884e099838270a5494761e154b5b8f5551a900b4eeb9fd76d278a5b38c0ba6f4696dc7b7bcce996f0fada2c15d1a9370d97f84164f492229a089202955545cf3884249cfeddbbeed3a9d2e5498aef5360889db3f9e5e0afce59c6a83cabcf145d7edf8074de36003199224379845b1c03bf54aabb98357abd2df893a9ed719813811822cffc8c181b4c4bb1a066fa2c2e846b38eb5da266ae0d5dd0a9e12862b59b0e39b81e58d70b1e5d12915340b0de5078d366093f8e797b5b9e680858b0e3252412c150ba516090535699fa5c6eebafaa8d56a1c620316ea6dae59d37f832c7a37b3d6c80d3f15820bcfdc6d1d829a345e58063d81bf4509a7544a126b9a41062791944c128accf0d1739f51102096213d0814f8a3",
      "9e355e4f3c28a15312a188e7bacaf4b98d8a416fa2dd22dcd5c68c9d6242ffd7ca5dd124ad75ee3a16dcaadf386de4a175050000",
    ],
    [
      "ETag",
      "y0J4knQEXvVTouxkGVzJWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2OTUsImlhdCI6MTYyMDY5NDA5NX0.dI1m3udf-jhGbrw1kKdUJZ45Ce0a5zI3ixCgmI0SBA6lyW1X1gM-uR2FBJA7FKVYeafydnx77lpASBbwoAFTXRrkWTMb-OKczETtb8uy-JNlss5JjNZ0V5SsLsteUmlbNBrDNNYXfdGxFun6IPebCiNKLVc9HoZkrT1gX2bJvsrZ8OqS6UI83-DSdobcodvfkXOlSVdmfmUuMY5XQfIvkHxXNt3yWtxZCsNGYHSrUlpcbX4wdklghMdE5ad0fq7JhuolsmCHF-eC9E9m5siEztK1tntHP3Q1-m2lC_XGWx-0CDu1pUVGigYv6lH9TNE1VCOGRX2LEq9kbyWG5La6PA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "dd",
      "5682300000e077d9b57a0c1a3fdd3118c9ac8e689879b343b8d998c01808934eef9ea747f8be1f901705eb3ada3792d5e009dc72cb5f148bb5f2103db3de1932d1a0259c92b0c6217cc325bf24abb9d9e00774b0110faacf93fd825cb36a9d5dee4eb16fefafc4e769dc49ed46c62163ac09476a844beb155b6e25213af3027eaf3979d428f186e736fb480f5101f1314d59db6489e0ca25e5996bcf9957fe985eb13296c4ea4abfec7d0bbd5d66de69a7e574d452b49b61a2bb12d5e1a919447038196c182b6a19e0de0a454eb8f4f281f6112e2f5b066680192534eba8b8736de8fb33f06fa7fd4db17b0062b9661afcfe017bc2edc21a010000",
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
      "Tue, 11 May 2021 00:48:15 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-73-1620694024143",
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
      "85536b6f9b3014fd2bc8fbdabc090991a2354ae81a29211d9056d33421db5ca85b8219369dba2aff7d17d374ad2ab59fb07dcfb9e7dc074fe45e1409991126b2df35548f5fee2423670434cdf0d5168efbd7cb9c95bbb22faea7e2aa607696cde788100d4bd143994347c9bae2a066fbb09b55b22e69256507137526a3cec019f61dd7ee0fed813d429e823cdd88e21ed9b75a976ad6eb9db4bb9994590eb414aacbe5e1e5bdf730ec9595bc03ae55efad640f5554ef63d1afb9e4540b59ccf7211aa81554311ca8c8d1c27f66c2cedfa6ee0a7ae866087e101c28e7b22e74630b537059a422ab2b9395cc9e88b1f9ea40426fe32d238bcbbc3e1471410f70662554d3583f96605d04bbadb5f62f76c17611ad777e1c2e2fbdeda2bbdc6df65b3fb46e2ebdc0b334653918ae35b7cecdcdc70bea27a0b4288c7ad43c37cacf0d5abf1f4b434069056d309ef41d3a98f65d96b2094fa7a3314bfbc0d8944dc674c4fadcb5c14e1850e41951c3a205d60cce8452368e1d3b81d8b6872c9eba8913f79d211bc290dae968428e67e44f2534ac842aa5126d87c84db08ebc380af6fe721179a68494d6b95eb5c69a025e7bd45820823ea8e9d8448544a5a6dd6b3ff282c5325a5f7bed84379051fe18fec619a7345780685a61f334545b9960c388bfd87a2b049b895d9d828acc7e3e91a6e78d8b572d7fa14738c0c6ae365f1246c1daff66ec9c10d734af0de4a13d90122ddf626de8faf80b91b8a46d16f27def053f48fb14400a1514fcf36922d8043efdd74e8b8f585c7d94511aefb83b5c3522bc8276878429f7c476c793a9430cb8d2ef62eec03e75adc9d164840314fab9a276f1b1d056ac562f200ce2f87dd3ade33fbdb7ea8778040000",
    ],
    [
      "ETag",
      "4i69zEg6D9D4FV8iPnb4gg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1620694024143"
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
      "000002ff8d92515382501085ffcbf68a339844c54c0f5a96346aa9d44be3385758900216efbd64e6f8dfdb4b664d35532fb0bb7c7b39e7c0069ed222020fe669b2ac50ae0f12d423538c515599567c2ba9500816a0160993cd169d8ffcf9f2b267fbaff7d71d95ac5ef4eaec8c09152e3017e06d204e318b14780f1b28448ebc165256e5c5acee2cd0ebd20c27c1d81f5e719f5364fae15dbfdfeef4bbb0b5f68b91d06256f3ff589b6e2d78a4f9186394588468b494921e31d4beb1a9445e66d85054c91015d470fd2091549542123578d2386e359aeea1ed9e3af6a1d3745a0c66140a9d52c1ecdd84f581262db231add825b80cc8ba64c3717d7de6711ad5464ce90f03d7a9f57d05585a9c6638fb1b64bd0bc19fe103db45f09d13395585de5397fd9bf66fc771a69f475db483ee0f42694e6a8f04fea03b09da835bc34d77de3b6b8dea561207a9d064d8b49d93a363d77e8ff59c4cd4fc1e4fcb0a2d0805ff1dbd5483178b4ce1f60db7739d817b020000",
    ],
    [
      "ETag",
      "13oCQIbqFH0IzVJBsgwxtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1620694024143",
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
      "4fdb3010fd2b962704486d434bd68d4a88159a41b69294340575136adcc40da6495c6ca75a85fadf777628ac82b18f9322c5e77bf7def39d93473c6745823b78cad287928ad5877b3ec5354c154961977fb6d99227bfbecdf8e1c58fb27959f6eee757c7c78060ba4a927c91d1bae4a588a9ec8c868d54f0724104e77520aa7fb2ebcd76eba07d641fb4eca67d08759266b33e2be6507da7d442762c6ba3dd48394f334a164c36629e3fef5bcb96b510fc9ec64a5adb9216a848eb7dd1938cc744315e1c8f8660a094544c684e5806165e2a93e9976dea0623792305f092c594c4312f0ba56d0145cc8b194b4b615871e7111b9b7f2cf0d0e93b67213af3475eb817915c1747fb88483499082acb4cd55004679ab18c4e58125599c51c7d0dfc4bc880833b22a98cd0cd85133808f5fd1b27d88b00ba8f3c3f447df7bb834e50d7eba16d22d74323cf738621da3bd947e7813f1aa0d3f116064e90d01901133da2404569e749b574f55815950a404f3d775f4f1aaf759671c1943eadeb854ed03d0bdd6ba76a709fa6245e0d1fa0c53392490a6822484e1515973ca15032f0876ee8fa5eb70f15a66b830d42e2cecfc7978270b5a0daa0326fadd5b68dfe06704db2d22096d502ef343feee0f5baf677926e1074c7204c8420abb705de543078135526378a4dacd536510baf6fd7f0d4305cc78a1d5f8d9c608cabad80cea8a0456c28df69b2019bc43fbfaacd15072c5c7290910a62a9582cb5482ca849872c37769faa8fdaedc3263660a15ee7ec23fd27289237334f1aa5e1a7427011987bad435093c60b2ba027f0a7a8e19c4a49524d332ae0249292694691193c7aee338a22c40aa40781a2703c70266618510d9d920432aa6d23d3e40ed233deac7775b0ab1d191fd568fe9387dbaa2d5aa4e77b0edca3df8b408f5b63050000",
    ],
    [
      "ETag",
      "o84ivodxJfo3HZu1MuDjkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2OTYsImlhdCI6MTYyMDY5NDA5Nn0.hpofYXpRlGCKM34daaAh--_c9MLi94wCQW18vaa1N3MUmq8QvDNqoVH4f6sA442gLU5KT-VpsUHtRJAWOxBIFk5Tl3LAUQk1M4_mQVsztZqlyyqy9MEeb63FJw5ffJgzqESjdMQpw1C2JYxmlwBkFaJ5eq71iIPN91Q3HLlTcPUM1mRtQWfxUQ9v5h2RazHyyZ8V3iPfcsapL5RAc29LrQCAnKUgYVst473opimuGbPKQ2Lj7YVC96kD7txEXvX2dToHyLMMFqGBH5pUWgnl8RI0GpSMAaAhaWCflmu0Ptog7CA-_50PwWXQ57Sv6CYj5x6CaY_6lT3-2ncpaopU7Q"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dd0516e82300000d0bbf45b8c2862bb3f886800610e44a43f4dc12a5819d00202cbee3eb323bcf70368963129495b71f60d3ec04897689ecddd1a9ae49e29e399aac6e384f7227c394c3ad842dbc7fdca5c51e6f8c8cea66a7922241af4289ffac9d7323fd907a3ad5d89de598789ea2b2555b077b3e52af8ca217eae87a1b271b443a7a4682fc1e75872d7e997a196d066508f7c8aca8a2f0e9974c82bd7364db76b1e168f8d7c81e324e851c1971b09c5366ec69a28fad3868dde052857375d699a322daa9716df3abf0dee97e8020d3cc02eb55aeea053eaf66006d85017824952bcb9ab354233f06f27ed58b37780c9a86002fcfe017f8c3e9a1a010000",
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
      "Tue, 11 May 2021 00:48:16 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-75-1620694024143",
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
      "2bc87b5c9310484212295a5942db4c09590969354d1332e642dd124cb1e95655f9efbb98a66b37a97bc2f63de79e733f782277bc48c894c43cbbafa17afc702b62724240d10c5f17e71f9d20f89cdf8d16175f6e5df7ea973fb12e673344f08625e9becca123455d3190d3ddb69b55a22e6925440713759c61a73fb2ccd164605a83fec0469e843c5df1e20ed9374a9572daeb1db5bb9910590eb4e4b2cbc4fee5bdf760f5ca4adc0253b2f756b2872ab2f7bee8a75c30aab82866bb2d1aa8255411ec29cfd1c21f66129fbe4ddde574dfcd10fcc01950c6445da8c616a660a2487956573a2b993e116df3d5816cbd95370f0d26f27a5f4405ddc38991504523f5588271166cd6c6d23fdb046b375c6efc683bbff0d66e77be59edd6fed6b8bef002cf5034ce41738d9971aa6f3e5e503f01a978a1d5c3e6b9517e6ed0f2dfb134049496d00623c71cd1fed89cc469ecb0746c0fe3d484381ec7ce90dab1c9260318243150e46951cda28528c019586632b222dbb287d1208d59148f6cbcf66d1bd9098c694a0e27e467c5152cb82c85e46d87c875b00cbd280c76fedc0d3d5d424aeb5c2d5a634d01af3d2a2c1041efd47468a25ca052d3eea51f7a813b0f97575e3be11564943d6eef71c629cd25209a56d83c05d55a24d830e2bb6b6f81603db1afc7a024d3ef4fa4e979e3e255cb5fe8210eb0b1abf4976cc360e99f6b3b47c415cd6b0d79680fa444cb37581bba3efc40242e699b855ceebce01b699f0248a18282fd7f9a08d681fffe6bc7c5472cae3eca488577dc1d261b115641bb435c977b644f4693f1986870a5fe8e397db37fec5a93a3c9087b28d47345ede263a1ad582d5f4018c4f1fbba5b87dfc24f273d7804",
      "0000",
    ],
    [
      "ETag",
      "DG+7RRBlk6DHJjAAVxN92Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1620694024143"
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
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb782db16029da844351d0268808251c0c214b3b2d0b6db7ee6e3584f0df9dad88464df4d2ce4cbfd9bef7da3d6c791183072b9e3e5728776729ea47534c50559956742b45a1102c40cd5222c776a9e778ceed2defcf47fe2e506ce0a4dd2e112a5a63cec0db43c2318b15784f7b28588eb41689acca8b65dd59a077a5194ec34930baa53e17b1e947b3e1d0ef0dfb70b04e8b31d36c59f3ff585b1c2cd888d5041394584468b494526c30d281b1a9585e66d850a292112aa8e1fa412a455532294483268d4ebbd1745bb67be5d82da7e95c10988988692e0a626753d2075a68964dc42bb904970059976438a9af2f34e6716dc494c128749d5adf5780a4253cc3e5df20e95d33fa0c1fd83182ef1ccb4555e81335183ef8bf1d47997e1e75e387fd1f84d294d4090983fbfe34f4efc7865b1cbdf7761ad5580a0a52a1c9b0693b97ed8e6bbfc77a2d4cd4f41e4fcb0a2d8818fd1d775c8397b04ce1e10d1a8077bf7b020000",
    ],
    [
      "ETag",
      "P0ptWe/i0kiEWNAyIsaF4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1620694024143",
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
      "0b",
      "4f",
      "db",
      "3010fe2b91272490fa48df4d25c4ba36836825853405a1696a6dd7695d92b8d80e5385fadf777128d0b1811429b1ef7bdc9dcf7942f73c5da01e227cf99031b9fdb216049510d37809bb526a3d5cb7fd4b875faf566b4a9d8b87c1f5e9292078ce5238d9c4acac44262953bde9a4b29422db6029441984ca9d76b9d6aedb6da769d79bb56603788ac5d188a7f7c05e69bd51bd6a75ef5d590ab18c19de7055a12279d9af3ed6ab1b29d68c6a553db4ac828baa7e6c7a160b8a3517e9e9740209648ac9194b308f218557e6827c3d94ae709c5496007ee494614a4596ea3c2d90a0228df832934615f59e9049f3cd079ab82377105a83f1d40f8fe738c9c9f3130b2b6b36934c65b12e5973a829e2319bf1c5bc886ceeadefc1f8122290c10a2ba6e6d6ed851bb896351adfbac1f14b00b4fc71688dbc1fae7566f5fda17528e7f9d6d4f7dd49681d9f9d58e7c1787a657dbb3bc0401d0ba6344f4d15212631cb2b786eb4f7fe787302d6605e04671dbb8d6b5ddb2111e9d0a8db6891c866847449a7851bc4a64e9335178461e0e95cddb0702a52a7e5601a45dd7a8b36ec7a44ec4e2b5ad8754628218d5add2104371a7613a35d09fd965cb321571ba178d16d741b78a13b0b83a93fe887ae2923c2d0d161915c5ec4db3c351409a00feadae5512ec0293f3acf0fdda03f08bd1bb79896115b62ba9d3cc0bc4438560cd058e28469262fc5029a86aec6132ff4c67e7f040c3302577b8442bd9f4faf8470bb315dd6e68d2661e0f9e726813de206c799813c161fe848489c1ea1ddaef47f9d7e10f4efc01b4b89b77fc5a09e7633a7ffc3c3e0cdaac873ef5943b9db7e5547bb5f3b784a08ae57a18eaea76e70878aad80454cb2947e3e3f0036814fff12fb2b0b58b8b460a334ac615aa9ca4da864c5d4f2c4a4fbcc76bac0",
      "47062cf5bb58d3aeed8f27d7c81559c252fd5c5171654da3f250a65e40108461f3cd49edfe00cfe1866732050000",
    ],
    [
      "ETag",
      "rrttDj6NM9iQhhjcc9HqCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1620694024143"
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
      "dd4ec2401085df65bc6d93164b8d4db810254a4288567e120c214b99d685b65377b72812deddd9c5182ebdd99d3df3cde49c3dc24ed61b48602d8b8f16d5e1aa40f3628b14755b1acd5743b546f0008d2898d4df8b5caa87afd976311fce76b594a23b297a3d2674f68e9580e408b9c472a321793b422d2ae4b1d54ab98d8c99436395e17832781ca42c54b4b1c2783a1addf5470338791763cdee5f23cb93075b5aa798a3c23a43eba251b4c5cc0c6d402daaa6445f53ab32d4e060d72814b58d50443e2bfe4dec877127886fa3a01385d135832565c248aa999dbeb23730644499d227e7830e03ca951c3577e79ee5aecbb07780b576d98bfe7aa1ed2d7f17f60f06f5b32276a7d11a0bce26efc91a371cc8a8163dc804fff29334e7f7e9078b15481ac2010000",
    ],
    [
      "ETag",
      "szZfirDxVjZWIVkniia5Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc2OTgsImlhdCI6MTYyMDY5NDA5OH0.F9Sps_tK1enux7TdlizlyC-jnpRdWwn0fpRivspd9iAydOWJIvr0PEN35WgPwKCxEZteb4aZb6p6DIfl4umdJzgKlCaPdjQaO7D-xBptpvIOmhnOHWotk2Jse-xAV15zxMQsMf168rg42K6SrG9l8CF-arBi0SklSywi-Vu1O-yiQRDn_Wj_9-34ryHbxA4WVBVivQON5Y-vdqivdWGgFx0bFwjtXDZT_PG65rM7ZONGrYGSCLjqGHn3nsiIYSG0XdW4nAWAm6LVlUHsvPEKG1RCD9c9LXX5JbOOIte_wsflQWXFNuvbZUw4uYVg4fyW2p4dIoxKfkEZKT7IP2-k_w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "7282300000d0bb646d1c905fd29d60d509fd80b445dd644208888840f818747af73a3dc27b0fc038175d47fbba1457f00226b6c0733ef71be4d23cdd861ace1c748d56cc8e4fd3670a3373b4133d09fbc85cfad1f7bedb86b7e340fc14e616713d6b4da1fe853c771814ad219f4a5586e41eb717d5c5c148ee6a8f9d73da65b452ab4dcc45e1ec6bef5dd796f476f06fbd4e223bb061eb9044556f87aaf130368da940a8cdb70b1936bb4a9a30a783b90e6266c1e30871e2fcd46d4e322eddddc799708948c2b412551b23bce897573618c135a0faa89d463003423585141d2d9e5cc3c27806feedb49f1af10c7005934282df3f13c5e6b91a010000",
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
      "Tue, 11 May 2021 00:48:18 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-77-1620694024143",
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
      "85535d6f9b3014fd2bc87b6d1208348148d11a25748d14c84a48bb699a90712ed42dc1149b4c5595ffbe8b69ba7693ba276cdf73ee39f78367f2c0cb1d999094e78f0dd44f9fee454ace08289ae3ebed6af1ad72dd800d6920af1fc6d9eab01e5d4fa788e02d4bd27d55404f8aa6662027db4d3faf4553d15a881e26ea8dc73d6b3434479e630e1dcbb19127a1c856bc7c40f69d52959c0c0627ed7e2e445e00adb8ec33b17f7d1f1c8683aa16f7c0941cbc971ca08a1c7c2cfab9108c2a2ecae97683061a0975027bca0bb4f087b94b2fdea7ee73baefe7083e70069431d194aab585299828339e37b5ce4a26cf44db7c73201b7fe5cf638389a2d9974949f77066eca8a2897aaac0b88cd681b10c2fd751308b97eb30d9ccaffc60d69faf57db20dc18b7577ee41b8aa60568ae31352ef42dc40beaef402a5e6af5b87d6e955f1ab4fc772c2d01a52574c1646c8ea8e59a5e9aa56396b9f6799a9990a66e3a3ea7766a32cf01679702459e16d52c5a8ad2725cd865233bf12cdb4e9cd43113ead890589e630d6ddbb287e639399e915f3557b0e0b21292771d22b7d132f69338da86f359eceb1232da146ad1196b0b78eb51618108faa0a6631be50295da762fc3d88f66f37879e377135e414ed9d3e611679cd14202a2698dcd53500762870d23e12cf01708d613fb7a0a4a32f9f14cda9eb72edeb4fc951ee3005bbb4a7fc9268e96e1176de784b8a145a32187ee402ab47c87b5a1ebe34f44e2927659c8f5d68fbe93ee29820c6a28d9ffa789601df8efbf765a7cc4e2eaa38c5478c7dd61b2156135743bc475b927b6e77af6886870adfe8e79d6d83975adcdd166843d94eaa5a26ef1b1d04eac91af200ce2f843ddade36f630c8ee778040000",
    ],
    [
      "ETag",
      "WLDXp88Mc2aMsQk7fLvO6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1620694024143"
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
      "000002ff8d92414fc2401085ffcb78b424056bc1261e1050318008e5a2316469a750dc76eaee564308ffddd98a68d4442fedccf49bed7bafddc2539ac710c0225d3e97a836474b3477b698a02ea5d17c2b28d7080ea0114b26afe958666ee33e1bdeb48e4f3b978d4eb76cdd9d9f33a1a3156602822d2429ca5843f0b0855c64c86b11c932cbe755e780d91476380d27fdd115f719c5b61fcd0683f6c5a0073be7b0180b23e615ff8fb5c79d036b5a4c3041857984564ba1688d91e95b9b5a6485c49aa65245a8a182ab074b45652114518d27b566b356f71bae7fe6b90dafee9d3028291226a59cd9d994f5812123e4845ed925f80ca8aa64c349757de1711a57466cd91f85be57e9fb0ab0b4249538ff1b64bd2bc19fe103db47f09d131995b939509783dbf66fc771a69f4775db61ef07a10d277540c2feb0370ddbc3b1e51ef7de2f3606f5581107a9d1665877bdd669d377df63ed908d9adf131855a20391e0bfe33a351024426adcbd0143ec9de17b020000",
    ],
    [
      "ETag",
      "Ho+lm02ZmMJ8+5CF2CDu8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1620694024143",
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
      "0000000002ff85540b4fdb3010fe2b912724d0fa48d3672a21564a06d14a0a690aaaa6a9b55da718d2b8d80ea342fdefbb3814e8d8408a94d8f73deecee73ca13b9ece511711beb8cf985c7fb915049510d37801bb677d3e990caff8f8f6f8d8ae3d92c7c786f7f5f2f010103c6729bc5c25acac44262953ddf1a8b290225b6129441984caed4eb9d672ec96dbb09d46ad51079e62493ce0e91db06fb45ea96eb5baf5ae2c8458240cafb8aa50b17cd9af3e38d59514b78c6a55ddb5ac828baa7e6c7a94088a3517e9e1780409648ac9295b629e400aafcc39f9b62b5de178595900f8815386291559aaf3b440828a34e68b4c1a55d47d4226cd371f68e40dbc7e64f587e320da9fe1654e9e1d585859d3a9642a4b74c99a414d314fd894cf67456475677d0f87e710810c6eb0626a665d9f79a1675983e1b517eebf04402b1846d6c0ffe15947562f38b176e5fcc01a0781378aacfda303eb341c8e2face3c90e06ea9833a5796aaa883049585ec173a3fdf7c79b13b006f322386ddb2d5cebd82e89499bc69d7a93c43623a443da4d5c2736751bac31270c034fe7ea86855391ba4d17d338ee384d5ab79d98d8ed663cb71d462821f59ae31282eb75bb81d1a6847e4baed909572ba178d16d741dfa91378dc271d0ef459e2923c6d0d19322b9bc88b7796a2812401fd4b5c9a35c80537e747e107961af1ff9575e312d03b6c0743dba87798971a218a0b1c44ba6993c1773681aba188efcc81f06bd0130cc085c6c110a757f3ebd12a2f5ca74599b371a45a11f9c9a04b6882b9c6406f2507ca03d2171ba87369bd2ff757a61d89b80379612afff8a413dad464eff8787c19b5591e7d6b38672b7edca419b5f1b784a08ae57a18e2ec75e3841c556c86226594a3f9f1f009bc0a77f89ed95052c5c5ab0511ad630ad54e52654b2626af9d2a4fbcc76dd76a7860c58ea7731b7ee6c8f27d7c815d992a5fab9a2e2ca9a46e5a14cbd802008c3169893dafc018ede1d7832050000",
    ],
    [
      "ETag",
      "HCiYYOViUjBB01xbxx4E+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1620694024143"
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
      "c2300c85ff8b776d25da756c43e230101a68086ddd7a9a100aa92985b6ce92145421fefb9c80268ebb24cef367ebbd9c605f36390c605d163f2deaeeae40fbe18a144d5b59c397a2c620048056144cca2c8df3e3f690abb7fd221aeb5c4ebbe2381c3261e4166b0183136c4aac720383ef1334a2461e5badb4dfc898ed9453668bafc9eb2465a1a6dc098b6c3e7f19cd27700e6ec6d4fe5f23cb73003b5aa7b8418d8d44e74269daa1b43317d0885a55181a6ab544031ef68d4253ab84260a59091f9fc2a81ff7facf492f4ea2e49ec18aa4b02535cc669fec0d2c5951a574e47c1033a07dc95137fe3cb0fce0331c3ce0acddf692bf5ee47acbebc25167d1bc6b6277069db1dec5e4989c71cb81ac6e310029f897a7a5bdbccfbfd356fdf4c2010000",
    ],
    [
      "ETag",
      "cUR2dwhvdpKkN1CrdcHygw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MDAsImlhdCI6MTYyMDY5NDEwMH0.T1l3hI7IKEJJzDlO2esGW91nkGoupIK1v5TE1RHVbLbCvpmlt9bxMB3vS54DePb9w8nNM47NxAgsLpd87DhmeULdrWk7vtx32MN2fB2L4zU_zjaZhD3ejctmF1QGMocTYxN6xSPLckCmjh5LLzDEP3-E1tFsCbELbqYnhqoCXH4-OQ6WKQJzOEKx822X5U9ODq7Bl891NiUgsJWtr3AZCEuT7aYcDLTQeXGq6GIj-4utnNqQw73BoRa5Iyeta3snmn2a-3vlGkGkEzeW-How1EL1Hk7o_bmk12GEaAu54yzThSZc4HSsewUtGvaImSlVKXcAmYkp4wSbGe4dIeOvWA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "ad8efc43778a221040b1fc3799048330c8c78056dae9ddebf408effd0052146c1cf1d437ac031f6026a2be2a5668805b7c2d4907c3508df75308ad215d0e545637dc2adc9ca5733619f1577db8eb788a72f925e6f740706153d35c154ad93184f9b04419ecf3d24e0b4a3113ab4ae449e554287f4e9ed0785c7aa4fe3ada9c3d420bf378f21fd2289040f96e12b5b965fe9526a6a2f6971ecadacb085233d12ec442eba7ab58b8776caa6bc75dd79a97b6e2ed76ffb9399b686d7b430861b3e3c20e7537578ea3f1f4c8a87c6e2b14766001d86ba8391b71fde64a8aae2fc0bf1d4ff3c0de015b4638e3e0f70fe46d35201a010000",
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
      "Tue, 11 May 2021 00:48:20 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-79-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fa34014fd2b64f6716d4b5ba4a589599b8a4ab6d09552ddcd664386e182a394a1cce0c698fef7bd0cd6d598e8133373cfb9e7dc0f9ec83d2f53322309cf770dd48f5fee44428e08289ae3ab6dfbbb9f5e7ef1fdabef3b97de62372cceaff2931344f09625e9b62aa02745533390b3cdba9fd7a2a9682d440f13f5264e6f688f4cdbb1cc9135b4c6c89350644b5ede23fb56a94ace068383763f17222f80565cf699d8bebc0f1e4683aa1677c0941cbc951ca08a1c7c2cfaad108c2a2eca93cd1a0d3412ea18b6941768e13f334d4edfa6ee73baede7087ee00c2863a229556b0b533051663c6f6a9d95cc9e88b6f9ea40d6eed25d44061345b32de3926ee1c848a9a2b17aacc0380f57bee105e7abd09f47de2a88d78b4bd79ff717abe5c60fd6c6cda51bba86a249019a6b9c18a7fa16e005f553908a975a3d6a9f5be5e70679efc7d212505a42178c27a64d8753d349b264c2b2e9f838c94c4892693239a6e3c4648e05569a00459e16d52c5a8ad2321ddb866912637c145b9039314d93344eadd41e43ea24f825fb23f2b7e60aceb8ac84e45d87c84de8456e1c859b60318f5c5d42469b429d75c6da025e7b545820823ea869df46b940a5b6dd5e10b9e17c1179d76e37e125e4943dae7738e38c1612104d6b6c9e82da1729368c0473df3d43b09ed88f435092d9ef27d2f6bc75f1aae52ff40807d8da55fa4bd651e80517dace01714d8b46431eba03a9d0f22dd686aef77f10894bda6521571b37fc45baa71032a8a1649f4f13c13af0e9bf76587cc4e2eaa38c5478c7dd61b2156135743bc475b9cfeca1695ac753a2c1b57a17b3a7e343d7da1c6d46d842a99e2bea161f0bedc41af902c2208e3fd0dddaff030717cfd278040000",
    ],
    [
      "ETag",
      "66MqXIgGK+MM9HICq1lFQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92614f82501486ffcbe963b8a111269b1fb42cd9d00cb1ad35e7ae70400cb874ef2573ceffdeb964d6aaadbec03987e75cdef7851d3ca545040e2cd3e4b942b13d4950dde9c24759654ad2ade485443000154b889c341f4c739d8fd56bd1c17bb119faa7699074bb44c8708539036707718a5924c179dc41c172a4b59067555e2ceace00b52df5701af8eef886fa9c47ba1fcf3cafd7f706b0378e8b11536c51f3ff589bef0d58f3a58f310a2c42d45a4ac1d7182a57db942c2f336c485e891025d470fd2011bc2a99e0bc419346bbd368da2dd3ee5866cb6a5a6704663c642ae505b1b329e903c515cb7cbe2197601320ea920cc7f5f585c669541bd1a53b0e6cabd6f7152069719ae1e26f90f4ae187d860fec10c1778ee5bc2ad491baf66e7bbf1d47997e1e75d50b063f08a928a92312b8a3c134e88d269a9b1fbcf7b70ae544700a52a2ceb0695a17e76ddb7c8ff592eba8e93d8e12151a1032fa3b86a902276699c4fd1baeb753c07b020000",
    ],
    [
      "ETag",
      "P1Y00jmNtxn9eVrwHR+iTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffd5536d4fdb3010fe2b96f705246849c73ad609b100198b28092429a842889ae4120c491c6c87ad43fdef3b3b30d6b1b1cf932a35e7bbe7b9e7de1ee82daf333aa257bcb86b41cedfdc882bba4641b3025fdd5da799aad0770fbf7be97b8f7d0548be9d6c6f63043728c5aaa68475255a99821a4de25e2145db3029c43a12ad6f6dac3bc3c1c6f0c3e6c660d3d97c8b3805653ee6f52da2afb56ed4a8df7fcadd2b84284a600d57bd54543fdffbf7837e23c50da45af59753f6318beabf9e74a71429d35cd4db931805b40ae425548c9728e119995d7d5aa6ee7156f50a0cbee729b034156dad8d2ca448459df3a29596958e1ea895f9cb078dbdb1b79790bd7012242b335619f06c9530452e2f25a8b6d46b648635e5bc844b9ecd3a4f734b3e47e1117a50c13553a066e4ec8b1779848cc3332f5a99654c03f2046142c6fea14776881bec93652a3f209320f0e284acecac9283289c1c93dde9520cd69041ce50c63ed398471bed59f7e99bc16a501a831ebbeebf9c355d182f17926b53af1f245ee4ee25fea9d7b5780c054be7f11d363967a5028c669255a0411e890c10721cc67ee287813b4684eddbf15384a2a3f3876740326fc008d4f69feebb8947178bb5bf47b851e44e919549c9e6bff950e970d3c09fd1a7ac6c6d888db756a7e0be7350879a6c4fd6802e2e16f85ba3b86d1d3b3d9978d194764f11e420a14e2de52b1db4c1d6f1cfa379da608cc51dc6344aa3ad344f9549924ab0ee8457566e8776369c778e3d39cda47ee91b6e9943afb33f7a1e73b4961fa41432b26b6b4ccca6ac165e634f787662977e49e5dde353054ab1c2d00782544ca7d7bc2e88e2458ddc12482e24c9db3a35b06ec7ed1393455b41ad89199a1a1133f21e89dba6115243f64c80beee32e224f28383d58f8fe6ee34f162bc374dce9dd1d6e0c2d463abe806fb5f5670d18dc49e40189813f801c067a93dbe050000",
    ],
    [
      "ETag",
      "AB1pYsOIAKzEc7EaweeTxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MDEsImlhdCI6MTYyMDY5NDEwMX0.dEKoPx06e57JiWiqjscu5mhfMUQvz0rQ_6kBbSOyrJYyRGBl2wm_6KZj5QtZ4uocBlfB0mLIqVefqKFRP2uAoFABjqXFOvzhDCzbqmWnfa_Vx4haEXAFc6gyrrZPrQvsYdU3yp6uRW4wSOHYE5_85-oQal2CQZ0cEbfdCmCam-tfuOdjP-ENJwHMk6lAi-cp_2CoIVUlCJPMqTB9-jzUw0AQeafPFo3NTKYhIKkdKmoemHIG8QhzIKeF5JH3f1qLBHDqhCNqKuuOclJ9o4FMPnBaVrBd55OePK9xfQb1Cm8N07vm5smUAjGvtt4Rh1mNLy01saD8jzal9kelvlpzwg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dd04b7282300000d0bb64ad4e63404977457e8a28844f8b9b4c023150a8fcac889ddebd4e8ff0de0f60592686815e9b4a5cc02b98d8122fb285db6a3a955905833d8aab375ecbb4946237cf118bf354198ff81e6efc00af92c231eccbf6a0456c3a9cccf511757b3b6a3bc3dd08c2e0e449efab27d937af6e0f6879eb22107034ade5636786f4ec61ecae105548c7ab283c65bebf1d1e90e6bae96feb77cd556ef1d0ac7495d49f90587be3c5f9803b75e406db70384f9cbb90d492b15997bc1064ad2ed322aec756438933705d6b48933b2184348d4bc31ecf5d036640dcdbb217032d9f5ca4623c03ff767a9d5af10cd005eb450f7eff002dc35a4b1a010000",
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
      "Tue, 11 May 2021 00:48:21 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-81-1620694024143",
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
      "02ff85536b4fdb3014fd2b91f7953649dfad548dae0da35a9bb234054dd314d9ce4d30a471881d1842fdefbb7128834d824fb17dcfb9e7dc479ec8adc86332214ca47715948f9f6e24232704344df1f5e122bdd2b3f5221c752ebf2c2eaecfbffdb6219d4e11216a96a2fb2283969255c9414d76db765acaaaa0a5942d4cd41ab92d77d07106e39ed3e9b9bd2ef21464c94ae4b7c8bed6ba5013db3e6ab75329d30c6821549bcbfdcbbb7ddfb18b52de00d7ca7e2b69a38ab2df17fd9c494eb590f974b74503958232823d15195af8cb8cd9e9dbd46d41f7ed14c1f78203e55c56b9ae6d610a2ef344a45569b292c91331365f1dc8d65b79f3d0e232abf67994d33d9c5831d534d28f055867c1666d2dfdb34db09e85cb8d1f6de7e7de7ad69e6f56bbb5bfb5aecebdc0b334651918ae35b54ecdcdc70beac7a0b4c88d7a583fd7cacf0d5afe3f969a80d20a9a60347406d41d396396b0214f46dd3e4b1c606cc4867dda650e1ff7a01733a0c833a28645739933eef63b741047bc0fbda8d767c388b95d16c52c8ec7d419f1e18091c3097928858685508554a2e910b90a96a11785c1ce9fcf42cf9490d02ad38bc6585dc06b8f1a0b44d03b351deaa890a854b77be9875e309b87cb4baf99f00a52ca1fb77738e384660a104d4b6c9e86722d636c18f1676b6f816033b18b635091c9cf2752f7bc76f1aae52ff4100758dbd5e64bb661b0f4bf1a3b47c425cd2a03b96f0ea440cbd7581bba3efc42242e6993857cdf79c10fd23c0590400939ff789a0836810fffb5e3e22316571f6594c63bee0e57b5082fa1d92161ca7d66bb8e3bea9a3f55d352ff1beb38eee0d8b53a479d11f690ebe78a9ac5c7421bb14abd803088e3f74db70e7f00426cba6278040000",
    ],
    [
      "ETag",
      "wPgWtAMDT82VBDPhHKx/eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1620694024143"
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
      "d1",
      "4e",
      "83",
      "40",
      "10",
      "45",
      "ff",
      "65",
      "7c",
      "94c6561195c407aa559bd4aa2d4d4c8c69b6ec50d1650777174dd3f4df9dc55a8d9ae80bcc0c67967b2f2ce1a9d012629815f3e71acd626b8eeec61723b4b572966f15698b10003a3167521663bd2d65ae6e864f9ae44e7792df7693e363266cf680a580780979814a5a88ef96a04589bc9691aa4b3d6dba00dca2f2c3713aea0fcfb92f49fa7e38190c92eea007ab60b3288513d386ffc7dafd2a80479a8d3047833a43afa532f48899eb7b9b569495c296a5da6468a1819b07734375250c518b27adc34eab13edb6a3a3b0bd1b76c23d061565c215a4999d8c591f3872428de8955d42c480694a369c37d7171e17b231e2cbfe308dc246df5780a5e585c2e9df20eb7d10fc193eb07504df395152addd863a1b5c25bf1dc7997e1e759aa4bd1f84759cd40649fb97bd719a5c5e7bee7eedbdbb7068af0d7190167d869d7678b87f10b5df633d211f35bf2776a6c60032c17fc745e120ce85b2b87a0394babeb87b020000",
    ],
    [
      "ETag",
      "diSn+ddflQNknod/BUfXBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1620694024143",
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
      "5d",
      "4f",
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "96",
      "f702526968e9a0eb8458816ccbd6262549411d42ad499cd490c4c176d82ad4ffbe6ba7a5ebd8d8f3a44a8d7dcf39f7dc0f3fe17b56c4b8876f59fa5051b17873c76f7103534552b8fdf1653e0ebfb7ae2cabdfc9d3d1b783b7f1c04a8f8f01c1344b92bccce89ee49588a8ec8d83662a785512c1f91e08ed75db7badc3f6fee1bbce7ebbd3ea1c004fd22c19b0e21ed873a54ad9b3ac75ee66ca799a515232d98c78fe7c6f3db6ad52f03b1a29696da7b4208bb45e4f7a92f18828c68be37100062a49c594e684656061c38c6f3f6c4b3719c99b29801f59444914f1aa50da164844bc48585a09a38a7b4fd8d8fce50307f6c03e0bd1993776c39d19c93579b68b8844d3a9a0b2ca5403cda0a6846574cae2591d29efd147df1b42041ccc89a47286ae3edbbe8dd0c0bbb2fd9d9954e011845c2f4403e7ab8d4e50df3d47db5a8e8bc6ae6b0721da39d9459f7c6f3c42a7932d0c1411d384808f73a22091d2e6e3fad3d19355542a00addaeebc1c365eea28e382295db0e386b6df3f0b9d4bbbeef180a6245a040fd0e5846492029a08925345c590c71428232f7042c773fb036098c68dd608897bd74f1b42b828a936a8cc3f0e9d2114d71f8ef072d9f83baceffbfd09481321c8e2b718d83dec68fa867d49b2ca400cde9c6a1b8f7500b7b0ceb63eb5f1f26609bf06869dabd5f1c5d8f627b8bef26942052d2223f94a1b0dd804fef974d67b0c58d8644803dba098542c923a4924a809872c37766b766bbf7dd43ac2062cd4cb58b7ab9f7b11ff31b2ca51197d2a0417be595e7d846cd2786105f484c51766f5b75c3eacae722a2549b5bccb514e54346745",
      "8a244b0bd01614255ca0a42a224dab37dd5c119156392d14d243933df43cf7260aaab2e442d178a30280fa9104a1efb89f76dfaf8ea793d00ee0e92974ddea75db37ba28534a3dddffb78c9b7a38dacfb9e7dab0cd3f01282b197fce050000",
    ],
    [
      "ETag",
      "xJhUTw1W//A4mgPZ35dL/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MDIsImlhdCI6MTYyMDY5NDEwMn0.dLQWZjR7g7lU6uFFIFewa_9kWJTl5lA3_CK4ePT_qQX-jIXhTv6AQTsthPNfjLB3cusnDbXV0imZA6T2QDmdNL0MZE9u1imkWOpLlcDCsDod8yDScTe4pZZIPv8FrUBBWUGnJcG0xOTP_Gm8ssc6hOulVj6EzS4hivRsUfldFq83--qQSaNAdMHvp5043RNjcYMHys847qBASb9Pr0RWsUeRR4oNR47kqu9aP4mjWT7zy50P8PZ75xC6uF1IcLuDIAQ6aWSnbEbqHjKQrF5Q9xzXYfF_U6nesuPoUDMmq64D94nvlfbePyGiRHz1UiDQgtPOTv6NJAL2t1nWgZBvDA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "7282300000d0bb642d0e0511e90e19d0aa807cace026134288a8e11bbe9ddebd4e8ff0de0f401893b685bc7c92027c820949da122f8fd5660b29b9a8f6950919cd56077def6454abc5b83ec728eb6c999a909a02726d529595173e93b598d6e53c748959205dea6a2e1717abe99d6673438aa3cc6c1acd979acb7da106c2a8f1c4d9c3cedaae036f659852fd78f46c5decc6a361726ee01046be7b50be87c16668de53f7f4119f614eb0c84e922be25a4f3d4777ddf98926e50b5faa681abcd3fd91f96a176468534e4c4f5ff49e87fe6d1739578be71831b00064acf286b4307f736545d316e0df0ef9549177c096a08634e0f70fc3c786bd1a010000",
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
      "Tue, 11 May 2021 00:48:22 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-83-1620694024143",
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
      "0000000002ff8553ef4fab3014fd5748df57b731c06d2c599ecb4425d9d89331cdcbcb0b694bc12aa3d8961963f6bfbf4b713e8d897ea2ed3de79e737ff0821e7895a12922bc786c987cfe712f083a414ce3025ea53fd93bce53ed5fd70b79f9405676b828e7b3192078cb52785797aca744232953d3eda65f48d1d4580ad18344bd89db1b8e1c7be47bb6e30d3d17788a95f992570fc0bed3ba56d3c1e0a8dd2f84284a866baefa54ecdede077b67504b71cfa856838f9203505183af457f968262cd4535db6ec040a3984cd90ef3122cfc6766e4ec63ea3ec7bb7e01e03da70c532a9a4ab7b620051555ce8b469aac68fa828ccd7707b40996c122b1a8289b5d955678c74eac0c6b9ceae79a5917f17a6585d1c53a5ecd93701da59bc555b09af717ebe576156dacdbab200e2c8d49c90cd79a5967e616c105f433a634af8c7ad23eb7caaf0d0a3f8fa52580b4625d301ddb233c9cd83ec9c998e613f794e436236442c6a7d82536f53de6658461e01951c3c295a83c3c229e774ad2091c528f1027c58ee3a6eed0cfbc7c94656432468713f424b966e75cd542f1ae43e8360e93204de26db49827812921c74da9cf3b636d01ef3d6a2810405fd47468a35c8052dbee304a8278be48c29ba09bf09215983e6f1e61c6392e15033496d03ccde44a64d03014cd57c13980cdc47e1d830a4dffbca0b6e7ad8b772d7fa32730c0d6ae365fb449e230ba34768e881b5c3606b2ef0ea806cb77501bb83efc05242c6997055d6f83f837ea9e629633c92afafd34016c02dffe6bc7c5072cac3ec8280d77d81daa5a112a59b743dc94fbca1edaaeed7bc880a5fe147346ceb16b6d8e3623dbb14abf56d42d3e14da8935ea0d0441187f64ba75f8077c98ae3278040000",
    ],
    [
      "ETag",
      "r98v22wp9QpCrGkbM0IClA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1620694024143"
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
      "0002ff8d925b4fc2401085ffcbf85ac2ad566dc203086a232097128d8690a59d4261dbadbb5b0c12febbb315d1a889beb433d36fb6e79c7607eb380dc18579bc78ce516e4f16a887a618a1cab95674cb44aa102c40cd164426b7debaaa378e7aa8f1fbf6b2fc3a2e3f96878d06112a5862c2c0dd4114230f15b84f3b485982b416089e27e9ace82cd0dbcc0cc7fec8eb5f539f88d0f4fd49b7db6c753bb0b78e8b21d36c56f0ff589bee2d5889f9082394980668b46452ac30d09eb1a95892712c2991cb00151470f16021459e3129448926a5f37aa9ead42ace855da9d955bb4e201701d3b148899d8c491f68a1191f891772090e01b228c970545c37348ec3c28829bdbeefd885beaf00498b628eb3bf41d2bb64f4193eb04304df3996883cd547eaaa7bd7fced38caf4f3a876d3effc2094a6a48e88eff53a63bfd91b186e7af0deda6a54032928488526c36ac53e3f3d732aefb15e0a1335bdc7d532470b02467fc74dacc18d1857b87f03d6fc9b267b020000",
    ],
    [
      "ETag",
      "mKIk1tv6sX2lWDh/zS/Z/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1620694024143",
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
      "7f",
      "4f",
      "db3010fd2a962704d3fa9395b25642ac40808c90746902ea26d4b8891b0c495c6c07a943fdee3b3b14e860eccf4991e2f3bd7beff9cec903be654582fb78cad2bb928ac5871b3ec5354c15496177b0fb63a7f7293c69fd3abb3c4df2d41e779d6fe9de1e2098ae92249f67b42e7929622afbe1a8910a5ece89e0bc0e44f52f9d7abbbbddeaf63aaded4ebbf319ea24cd660e2b6ea1fa5aa9b9ec379b2bed46ca799a513267b211f3fc69bf79bfdd9c0b7e4363259beb924d5091cdf745f7331e13c578b1178ec04029a998d09cb00c2c3c5726d3afebd40d46f2460ae07b165312c7bc2c94b60514312f662c2d8561c5fd076c6cbe58e091e55887013af44237d88a48ae8ba38f88483499082acb4cd55004679ab18c4e58125599f92d3af6bd73c880836b22a98cd0e5a9e55b0839dea5e5bf6072bd0039f69985f6d1c03d42eb64b68b42d7b54601dadaff884e7c2f1ca283f11a064e91d019012347448192d2ee936a69ebd12a2a15801efb6ebf9e365eea2ce382297d62db0d2c7f7018d81756d56487a6245e8ceea0cd3392490a6822484e1515e73ca15032f44676607beec0810ad3b9e10a2171ffe7c37341b098536d5099373e76bc41d0ed18072bc805c94a83b9af1678a3ddd8e96ce0e5b2f677a281ef0fc6204e84208b3f7270202df1a686c19ba832bad26c63adb68ab6f1f26a094f0dc3b5acd8f1f7d0f2c7b8daf2e98c0a5ac486f29d461bb049fcf3eb5a5d75c0c2650719a920968ac5528bc4829a74c07263b7aa6eb73aeddd1e3660a15ee77abbfa8f50246f661e354ac34f85e0c237f75b87a0268d1756404fe08f51c3399592a49a262ce0249292694691193e7aea338a22c40aa40781a2603cb4268f138f6ae8802428e1a5ae327deea36ad0ab68b30a37b53163a79ad0ffb5725535496b1d79ae05b7ea3787ac539b79050000",
    ],
    [
      "ETag",
      "A7Z59+UG0zKWHdmgIY6LJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MDQsImlhdCI6MTYyMDY5NDEwNH0.JwufbbVXQYRKB0Eg_JGZ9hTliWZ6TXclTuHzY5DrhcrqyAvI0kyK8Bu8AHykqw4LXTiOcMo0izGNeVhpxDDn-sSAalzJaj4uzv5XX3yWvbdqZq3u39XeZFd_rxKaP1MQmSyOpitjXwmRLoOuUCYRxnn2Gm4VMCC4vYPzxXkNBJeUD3l5527P2_zvjmyp5RopTIAYWb6iaZz3x9dReHIUQ9ABPfFWEC_2gPsOfOeWa5gGQhoukvFPnr1atGd1digtwdNgaKoYb-QgfSAkkGiNOkNRlOTOhUNigjv1disM8VAjMjitNrolz-OAEItXJXL5nmOFCX37moUZYdcY1L0ZgQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff1dd04b7282300000d0bb64ad0e957f77805081111071503799082104e49ba8a0d3bbd7e911de7b0394659831c8bb1ab7e01bcc68adafb295df6b2624c52457861e5bb6428c474d1e2273a95b6ce5be74d447d785dbc60c6bf56a0f73618c27cf5245d79c6a63775842fb991e13c4d416126d9f7f1d07f6e4692237d4dff9b80cab2a0a0a37ba49488a6d5574ae7d7529351f2a246e5eae758e2472af53c13d9f37da8f458fed2d13762ddbd3f8c578dd20d4ce797728b867a2e07e29d7270bdd94492c9e8a94bd926613c841b4590e86ed0927876be90c93bc21b8020b80a79e8e9841fae18ab2ae2fc0bf1df2b9c79f0013a3118fe0f70ffe8ccb601a010000",
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
      "Tue, 11 May 2021 00:48:24 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-85-1620694024143",
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
      "6f9b3014fd2bc8fbda24e44d22456b96d2255a201d21ed1e9a906d2ed42dc1149b565595ffbe8b69ba5695d64fd8bee7dc73ee8327722bf2984c0913e95d05e5e3a71bc9c809014d537cfdf28bd93f961c1ed6aef36dbd9c0b165e78f3d90c11a26629ba2f32682959951cd474b76da7a5ac0a5a4ad9c2442d67d8ea8e7af66832b07b83eea08f3c0559b216f92db2afb52ed4b4d3396ab75329d30c6821549bcbfdcb7be7bed7294a79035cabce5bc90eaaa8ceff453f6792532d643edb6dd140a5a08c604f458616fe316376fa36755bd07d3b45f0bde040399755ae6b5b9882cb3c1169559aac64fa448ccd5707b275d7ee22b4b8ccaa7d1ee5740f27564c358df46301d679b0f1ac957fbe09bc79b8daf8d176b174bd797bb159ef3c7f6b5d2dddc0b534651918ae35b34ecdcdc70beac7a0b4c88d7a583fd7cacf0d5abd1f4b4d4069054d301adb23da75ec094bd898274e7fc8121b1873d87848fbcce693010c6206147946d4b0682ef3de84328726bd68cc39448338b623c7ee4134e90f6dcec75de00e90c3097928858633a10aa944d3217215ac42370a839dbf9887ae2921a155a6cf1a637501af3d6a2c1041ffa9e950478544a5badd2b3f7483f9225c5dbacd84d79052feb8bdc31927345380685a62f334949e8cb161c49f7bee1982cdc42e8e4145a6bf9f48ddf3dac5ab96bfd0431c606d579b2fd986c1caff6aec1c119734ab0ce4be3990022d5f636de8faf00791b8a44d16f27de7063f49f314400225e4fce36922d8043efcd78e8b8f585c7d94511aefb83b5cd522bc8466878429f799ddb50743dbfca99a96fa5d6cd4b58f5dab73d419610fb97eaea8597c2cb411abd40b0883387edf74ebf017bb7ebffa78040000",
    ],
    [
      "ETag",
      "BZb0XHcewLE8KLHAibTPMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1620694024143"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f4",
      "8a092a5225f180d6b624682de2a58d312b0c8a0596ee2e1a63fcef9da5d6366d93f60233c337cb7b0f8ef092163138b04ad7af158ac3d51ad5a32e029455a624dd4a5e48040350b13591ed6e80f97e78d8b57691d59b3e7513a126fb7e9f08196d3067e01c2149318b2538cf4728588eb416f1acca8b65dd19a00ea51ecec2c09bdc519ff358f793b9efbb037f0427e3b21833c59635ff8fb5c5c9802d5f0598a0c02242ada5147c8b91f2b44dc9f232c386e4958850420dd70fd6825725139c3768d2e8761a4dbb65da3dcb6c594dab4d60c623a6525e103b9f913e505cb12ce07b72093601a22ec970525f77344ee3da882ebd49685bb5beaf00494bd20c977f83a477c3e8337c60e708be732ce755a12ed4adffe0fe761c65fa79d48d1b8e7e105251521724f4c6a359e88ea79a5b9cbd0f0e0ae554700a52a2ceb0695addceb56dbec73ae43a6a7a8fa3448506448cfe8efb548193b04ce2e90d9d8a9eba7b020000",
    ],
    [
      "ETag",
      "38RemwCyv2vc49PZ8frtNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1620694024143",
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
      "6f",
      "9b",
      "30",
      "10fd5790f74babe50312423ea4a84b13b62125a423a455354d898183ba054cb1e91455f9df7740d3366ad74a4860df7bf7de9dcf3c923b960664443c16dd1790efbedc728f3408481ae1eea03373ce17fad7cbd99d9f88a1b158648babc9788c0856b2044db2189a8217b90f62b45eb5a29c1719cd396f62a2e6c0686a46473586badad135bd8b3c01713867e91db26fa4ccc4a8dd3e68b722cea31868c644cbe7c9f37efba1d3ce727e0bbe14ed63c936aa88f6c7a26731f7a9643c1daf5768a010906f20a12c460b2fccc0fb769cbac568d28a10fcc07ca0becf8b5496b63085cfd39045455e6525a34752d97cf54156e6dc9cbaca74b9b6dd932d4d4af2f654a142d96c7210452c1bca166b0a590c1b166ceb4876a77c77960b8ca0831b2a406c95ab9fa6632acab6048d95336562cf9463aa652b6bdb3657ae727276aafc7096eb0be5fcfa08839e031092a59563977a31946e9f9a6abd3dca9240253aa8839bbe6a506da00ebdd0ebfbe1a0dbf342153c6fe0f57bb4eba9fe50073df080224f96d92b164d796a00a586d7d5a0a3f5753a0c3a43dd0ba037d4341ffa5da0031a06aaaa03d937c8df9c4998319171c1eace922bc772cd8debacede9c435ab32428add9bd5e6ca225efb945824823ea86b5f461947a5f2982cdb359dc9d4b52ecd7a32e610517fb7bac7d908692c00d134a70948c8173cc0a6918be5ca72ada53d9923a33aee8b034290d1efc71782bbcbaa2ecbea5d6a197aa57f005cd2b8a8100ff507d17a64bf6ffc3fc5c47126d7284bf39ceede4fff6efe0a5fad6a8bcf7aa4543bac3a64ff678f4f83e02daab3935f6bd3b926f5960321e490fa9f8f0e82abc0a73f83c3cd442cde4d941112d738a8be2845fc1cea81654965b7666b2abefba402e7f24dacdbd70e2753e6",
      "28334202a97caaa8be9955a3ca50219e4118c439b32dfb0746ff014d7bf33d19050000",
    ],
    [
      "ETag",
      "82DRBM4+VDkcms96MMpMWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1620694024143"
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
      "ff8d90416f82401085ffcbf40a89285a6ae2a136a4b521b6d2d21e1a635618290acc7677b13184ffee2c7ae8b11776f6f1bdddf7b68543516730856d91ff34a84e37399a951d62d44d69342f926a8de0001a9133a902fcf80c5ec6a321ddae9e97f53189c6f37c366342a7df580998b6b02bb0cc344cbf5aa845856cdb6c547f2263e624adb258be878f61cc42459915964914ddcfa3103ae78f4d1efe6559770eec691be30e15d629da1452d11e53b3b005b5a86489aea646a5a8a187fb1fb9a2460a45e4b2e20613d79b0c07933b7f30f43d7fc46049a93005d5cc266f9c0d0c1951c6f4cbfdc06340f52357ddf5df632fdb0ed769ddadafa6f9c9a07e55c40934dacb0797200f64c3190e6d54830ea4825ff2a930977d77062744200ba6010000",
    ],
    [
      "ETag",
      "r8eVW8O532o7QJNnvUL5Bg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MDYsImlhdCI6MTYyMDY5NDEwNn0.Ld_c0n86Tpowgh7D9Q4jQVPsRL2wza4TJfISxx6X06qiQaKtuuqlTeZTUhCFV50TOEubs7Z4ladJsyvq6c7yNDGuOySBpAU9RY3j19DwGXK5W6Z9l5YgmuyJIMn5obKl7Hs4VDOdzqCdsWHCYW5Ve-gQfBVKFxhf0QrbAgF-3CCeAvYrgQ3kA0SmSA82ZTiXKBAHQKZY-giTpgogJPg0qyDpVVn7AxWDxg2FwUzvTB4bGl2IRJHuGbbaqTCWMlW74eMYbEPEeWSLeA0NezBVa7A6aguIEQbUMXbyXOc2AEN-rBkKnIR4v0QqZL5cZJ_YzBlpXiUoBg_LEEqo4k0czg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dd0d97282301400d07fc9b3382cb2f54d222882a38256cb4b86e52a064dd8a4c14effbd4e3fe19c1f94e639741de979050c7da03155ed693e0d6acb21d77cb73203de68b858ba6799e25379649da118028743e5ec87721bbf66c9a2f21e756e2c5921a9d6962af6779f145f79c338dc526e3afbb93cc464d3e88753c6576b691483a5041c7f2e7c380c5878d0a9c5d1f7a84bc3a7536de885cc5d5a42199dddc76c91f902fb7b4caf921bbd4cab97335177d271c785d15f4a7d8b21b3349331023bd293d15623256486e498cfe1ba36e0fe64cd3d8e352f3013e6a1090251df5ae8c8edcdd574db9ea07f3be9c71ade010ea42db4e8f70f307597a71a010000",
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
      "Tue, 11 May 2021 00:48:26 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-87-1620694024143",
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
      "02ff85536b4fdb3014fd2b91f795b6491bfa92aa51953032b5e996a620344d91eddc04431a87d82942a8ff7d370e652024f814dbf79c7bce7de499dc8b222153c244f65043f5f4ed4e32724240d30c5f85c7723ef7e84fc789569cf3dc5137a78fb3192244c3527457e6d051b2ae38a8e976d3cd2a5997b492b283893ae351c719f6ede1c4b5fbaee30e90a7204f97a2b847f6add6a59af67a47ed6e266596032d85ea72b97b7defedfbbdb29277c0b5eabd97eca18aea7d2efa3d979c6a218bd97683066a05550c3b2a72b4f09f99b0b3f7a9bb82eeba1982f78203e55cd6856e6c610a2e8b54647565b292e9333136df1cc8c65b7a8bc8e232af77455cd01d9c5809d534d64f255817e17a65f9c1c53a5ccd237f1dc49bc5a5b79a7717ebe576156caceb4b2ff42c4d590e866bcdac33730bf082fa09282d0aa31e35cf8df24b83fc8f63690828ada00dc6237b489db13d61291bf1743c3865a90d8c8dd9e8940e98cd272eb809038a3c236a58b490c5284d12db061a274e9fc7ae9db098dac3416cdb133719b17e0ad4268713f258090de742955289b643e43af4232f8ec26db098479e2921a575aecf5b634d016f3d6a2c10419fd47468a242a252d36e3f88bc70be88fc2baf9df01232ca9f360f38e394e60a104d2b6c9e866a25136c1809e62bef1cc16662bf8e4145a67f9e49d3f3c6c59b96bfd2231c6063579b2fd944a11ffc30768e882b9ad706b26f0fa444cbb7581bba3efc45242e699b85fcde7ae10d699f4248a182827f3d4d049bc097ffda71f1118bab8f324ae31d7787ab468457d0ee9030e5beb01d7b381e9a3f55d34a7f884dc6fd63d79a1c4d46d841a15f2a6a171f0b6dc56af50ac2208e3f30dd3afc03af6d8a7378040000",
    ],
    [
      "ETag",
      "iEblcAEaJ11TMcccl1sY5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1620694024143"
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
      "8d92d14ec2401045ff657c2db168a9d8840750540c20941a358690a59d42b5edd4ddad4a08ffee6c45346aa22fedccf4ccf6dedbaee131c923f0609e2c9e4a94abbd05eab1297c5465aa15df0aca158205a8c582c94b9adf346ef6fd579d75ec27bc3b2c6eafca71abc5840a979809f0d6102798460abcfb35e422435e0b292db37c567516e855618693c0ef0dcfb9cf2832fdf0badf6f77fa5dd858bbc5486831abf87fac4d37163cd0dcc71825e6211a2d85a4070c75cfd854222b52ac292a65880a2ab87ab09054164212d578526b1ed5eaee81ed1e3bf68153770e194c29143aa19cd9eb09eb034d5aa43ebdb04b70199055c986e3eafacce324aa8c98b2370c5ca7d2f71560697192e2ec6f90f52e057f860f6c1bc1774e6454e67a479df5afdabf1dc7997e1e75da0eba3f08a539a91d12f406dd49d01e8c0c37dd7aefac34aa91240e52a1c9b06e3bcdc6916bbfc77a42266a7e8fa76589168482ff8e8b4483178b54e1e60ddf79aa137b020000",
    ],
    [
      "ETag",
      "JobW5W/RxtmB0qeY3pXOuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1620694024143",
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
      "547f4fa34010fd2a64ef1f4dfa83522cb449e3f52aa75c2a550a1a73b9b40b1dea2a65915dbc34a6dffd86c5aa3def342181dd796fde9bd9599ec83dcb96644022b67a28a1d87cb9e3116910907485bbcbb077d60fdd1fd0d327ba158bbb082e8dcbe11011ac6209bace53680a5e16318841386bad0a5ee6b4e0bc89899ab6ddecf40cbdd73775c3ec985de409489309cbee917d2b652e06edf64ebbb5e27c9502cd9968c57cfdb2df7e34da79c1ef2096a2bd2fd94615d1fe58f438e531958c67c37086064a01c51cd694a568e195b98cbeeea76e31ba6ead10fcc862a071cccb4c56b63045ccb384adca4265258327a26cbef9203367e28c036d3c0dbde06041d7157971a851a1cde7058832950d6d8135252c85395b2eea487eaf7df7a7e7184107b754805868d7678eef68af5b0b6da81d6b23ef44db4fe07a5ae879ce2cd00e8e0fb5537f1a5e68df6ef630e87c0942b24cf90e689442e5f9b9b5eefb03ad0854a2681d9c5b7a8f766cbd1f2591152776f7284a7488223bb28e6837d2e3be09e632028a3c5965572c9af14c37ba3a742d7c8e0cd38c4d835a7de475eda46beb76d2d76d032cbbd323db06f95d3009274ce45cb0babfe4da7703671ef8a1371e058e2a23a1d8c393da5c55c45b9f128b44d007756dab28e3a8541d96eb058e3f1a07ee9553cfc7045634decc1e7042129a0a40342de81a2414e77c894d2317d3991bb8536f3441863af48b1d4290c1cfa75742b0c95597a57a9359e0bbdea932b0435cd1b45490c7fa838c72f44ab6dbc6ffd38c7c7f7483d2b428e8e6af1896d3332bfa3f24145ead6a9b3bc90ea9d4762b836c7f6df16910bc4f757672193afe0da9b77c48a0802cfe7c7c10ac029ffe16767714b1784b5146485ce3b0c6a212890ba88796ad95dd9addd1ad9ead7e2a9216f25dccee7476a753e5a832c21a32f95c517d4755a3aa50295e4018c459f3d4416dff001501e63223050000",
    ],
    [
      "ETag",
      "dU6H9UIJe60L07csjbeQ2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1620694024143"
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
      "8d90416f82401085ffcbf40a09203196c48336a6b531d6a25e6c8c5961441418babb6808f1bf77766d1a8fbdeccebef966f2de7670ceab1422d8e7d97783b27dca507f9a2246d5145af15553a5101c402d32269b45bb3c7d6cde37b812fba97ff4cad1b2bc0e874ca8e488a580a883438e45aa20faeaa01225f2d86e27ed46c6745b1b653a5f4d5e27310b25a54698af67b3d17836819bf330569fff35b2bd3970a27d8c07945825685cd4924e98e8a909a8445917e82a6a64820a2c6c1b99a4a61692c865c51d0c5cbf1f78fde7d00b423fec31585022744e15b3eb257b034d5a14315d391f040c485b72d4833d2f2cf76c868b058cb5c75ef0d7f34d6ffbbb70dc6a540b49ec4ea131e6dd4dbe9031ae3990960d3a9008fee5b75cdfdfb71f68ce8ee1c2010000",
    ],
    [
      "ETag",
      "uPySjOZJZeTabI1h0mASmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MDgsImlhdCI6MTYyMDY5NDEwOH0.WVJ9tRWEa17VoPtRr2mykRm4RsfwNJgUSF3qzbQ-qnMnMOMaNzvq7_IHdHg9ev198Lpcrrhuf4Fke0bPMVr2dTt81imQZ3VNVIqd-RbPeuOEDUDVRvSECe1OKcSpxA-wdCQapkG-yMpq0uIN3j3LI_hCRxxsURjS5UtXKHFChl0eeQDxIhRPUXOl76myqso5CUeU0uQib7_R41XVQTSHdTEewmjV_9TioVtPnPjo1yKCXOj83eOCqXFLha0Ndsflp8TdDiGCJHEwqRdPubUlTp3J_dd9WfsA3zG-fhZDvkgFr2a-LgeXa9s1MK9vIQHJXGO-WT9CQzuqSGqXP3lTkQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dd04b7282300000d0bb642d8ea250e8cef053401b4104dc30814682884512c0e8f4ee757a84f75e001705612ce33f35b9814f20b0ac4f8ba9d76a302bc972b4d7750f57a70d8387b6bad4bdd8cc93cc34fa799a3f554666df3c3e47f9d1c842d8cebdf099b8b9632436c643cf11667eb37aaa3cd7c9d9e666ce3e2471381550762a492efde58e8e2839f3d93dcccd987b16dcbac8a79183cb324883d8a29e217884355568cbed3148c7d1a4fbea9e1af08aeaad29154d33a4a8b4c4adb928057d04d8a63aba5f8d75ac50be277cc7be76126c5cc51a1ed18278159800f268ab8eb0ac7a73178aae4fc0bf3de3a225ef004870473af0fb07c8590a951a010000",
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
      "Tue, 11 May 2021 00:48:28 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-89-1620694024143",
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
      "0002ff85535d6f9b3014fd2bc87b6d1212688048d11aa574454ac806a4d5364dc83817ea96608a4dabaaca7fdfc5345dab4add13b6ef39f79cfbc133b9e3d58ecc48c68bfb169aa72fb722232704142df0f5571378ee855b3d4e125bae69eed9f476b998cf11c13b96a4fbba8481146dc340ceb6f1b068445bd3468801261ab8de603c9d9853cf3627f6d8b69027a1cc57bcba43f68d52b59c8d4647ed6121445102adb91c32b17f7d1f3d4c4675236e8129397a2f39421539fa5cf46b2918555c54f36d8c065a094d0a7bca4bb4f08fb9cbcedea71e72ba1f16087ee00c2863a2ad54670b533051e5bc681b9d95cc9e89b6f9e640627fe52f138389b2dd576945f77062eca8a2a97aaac1b888366b23082f36d17a91049b308d9797fe7a315c6e56db75181bd7977ee41b8a662568ae3137cef42dc40beaef402a5e69f5a47bee945f1a147c1c4b474069097d3075cc291dbba697e599c372d73acd7213b2cccd9c536a6526f36cb0771950e46951cda295a89ca93bb632c74aeddc7452db7558ea5990a5966d7bced864538b5ae470421e1baee09ccb5a48de77885c4741e2a749b40d978bc4d725e4b42dd5796fac2be0ad47850522e8939a0e5d940b54eada1d84891f2d964970e5f7135e4141d9537c8f33ce692901d1b4c1e62968d662870d23e162ed9f23584fecfb3128c9ecf733e97adeb978d3f2577a8203ecec2afd25711205e1376de788b8a265ab210ffd81d468f9066b43d7873f88c425edb3901f5b3ffa49faa7087268a062ff9f268275e0bfffda71f1118bab8f3252e11d7787c94e8435d0ef10d7e5beb0c7a66b8d6da2c18dfa10b34fad63d7ba1c5d46d843a55e2aea171f0bedc55af90ac2208e3fd4dd3afc0535cd631678040000",
    ],
    [
      "ETag",
      "ZrI98F8nw2T4sMaf94ajCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1620694024143"
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
      "41",
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f4",
      "8a09284525f1a0d65612b456f1d034c6ac30281658babb68acf1bf77965adbb44dda0bcc0cdf2cef3d38c2739247e0c22a59bf94280e576b540fba98a22c5325e956f05c2218808aad896cb6eaf586ec0fc528589987d7c7d86a5bbb7da743840c379831708f1027984612dca723e42c435a0b795a66f9b2ea0c5087420f67c1d41bdf519ff148f7e3b9ef777bfe004ec66531628a2d2bfe1f6b8b93015bbe9a628c02f310b59642f02d86cad33625cb8a146b9297224409155c3d580b5e164c705ea349add5ae594edd74dab659b72dbb4160ca43a6129e133b9f913e505cb174caf7e4121c02445592e1b8baee689c4495115d7ae3c0b12b7d5f01921627292eff0649ef86d167f8c0ce117ce758c6cb5c5da85bffbefbdb7194e9e75137dd60f083908a92ba2081371acc82ee68a2b9c5d97befa0504e04a72025ea0c2dd36e5d371df33dd63ed751d37b5c254a342064f4770c13056ecc5289a737e6de240b7b020000",
    ],
    [
      "ETag",
      "78223sCHrMTb0yzYf191vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85546b4fa34014fd2b64f68b26b505dad247d2b8b5b22e49a54a4163369b76980e380a0c3283da98fef7bd0cd6da7557932685b9e7dc73ee637841f72c5ba1210a59fc50d262fded8e87a881a8c4319c762e63cba24f277ef21c58467612bbe783e778340204ab5802a779428f042f0b42c5309837e38297392e383f82444703fdc8b04cdd1a7474b36374dac0133489a62cbb07f6ad94b918b65a5bed66cc799c509c33d1243c7d3b6f3d9aadbce0779448d1da976c818a687d2e7a9c708225e3d92898838152d0624153cc12b0b063aec2effba99b0ca7cd18c08f8c504c082f3359d982148467118bcb426545c317a46cbe7b40737b6a4f7c6d320b5cff6089d38abc3cd4b0d0168b828a32910d6d0935452ca10bb65ad691fc5efbe1cdce21020e6eb1a062a95dffb43d5bdb1d2db59176ac8ddd536d3f81e36a81ebda735f3b383ed4cebc5970a19ddcec61c0f98a0ac932e5dbc761422bcfafad753e0eb4226009a27570d1d32d6cf4f54118853d12f5dbdd30d26918f6c35e17b7439d0c3ab4b30a29069eacb22b16ce78060153c798b623b36ff64ca30b6331ac95d1ed9956bb174644eff5dba46ba04d033d154cd25326722e58dd5f74ed39bebdf0bdc09d8c7d5b951161e8e1696dae2ae2bd4f094502e893ba3655947150aa86e5b8beed8d27be7365d7fb31a53126ebf9036c48841341018d0b9c52498b73be82a6a18bd9dcf19d993b9e02430dfd628b1068f8eb6547f0d7b9eab254ff68ee7b8e7ba60c6c1157382915e4b17e403807af68b369fc3fcdd8f3c637208d8b02afff8a413956a7a2ff4342e1d55b6d732b59757ef766a2cdef0dfc1a08ee539d1d5d06b67783ea238f46b4a019f97a7d00ac025f7e16b67714b0704b41464878876525a2122105ad9796a5ca6ecd36f401ac1052e0427e88b575733b9d2a479591a63493af15d5775435aa0a95e20d0441d835570d6af307965762b323050000",
    ],
    [
      "ETag",
      "4Qg66ewBTlxU61nBgNM9xg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1620694024143"
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
      "000002ff8d904f6fc2300cc5bf8b776da5d21524903800435b2784b66e5c98261452d395fe7149dca10af5bbcf611c76dc29f1f3cf2fcfb94091d7294c609f67a7164d779721bfba4b82b62dd9cad1506d113c405699908be176b01ef1776c670fe1693b0c33fb5c9ca75321acfec24ac1e402871ccbd4c2e4e302b5aa50c6763b7375148cbbc629f1fa7df9b84c44a82875c27ab35acde6ab25f4de9fb1a6f8d7c867efc191f6091ed060add1a5680c1d5173ec16b4aa6a4af42db546a3852b7c6d6486da4619225f147f1cf88351188cc651104683e85ec092b4e29c6a61376f920d985895099d653f08e056cf3b46fb6248cc2da6b78e382ec8bdcb92874d8b1e68259ff494f36fddff0090075cff81010000",
    ],
    [
      "ETag",
      "C5Z1N6tvIsAD2qZ52gsJkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MDksImlhdCI6MTYyMDY5NDEwOX0.aS-8yYlqvcArTlJeyrRtuvadCPzOurXzFVeZcSgKDSlmdQFJOeW1jmi4wpouQshboqtpN4NsfFU-P4XpKps1y5OvW9DmiNWUvDYvpbIGQPAGu4Ph47936DWEEm5MXq4pyWCf04ELmmAPqleeisgrWldpxzkupD7FuQ2JeSOfFNa7RI2YYr9ocRSnoa4-6vb7VkxM_62OaAeE5FMtffoYvWVSBwcqsN7Ah_PUe4tVgHY8DPfanuTSK_iHhOCETQcJjYQA4jp05k5_GIfi6my5I9B81LPnfuL-TI3vy5FC7wiMahPflWUspvsrhFv5Tgm3Eiwwj_ZqHmAGi94l8pKRnQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00d07fe9b31a2274d8bd490904051ce332e0a581525941a5405170d9bfcfec13cef90105a56c1c89ec5a7603ef6029b668433747b13348cdbc5bc73d1cf769d914a3ab5d07e7e071d5d250bfc3c6ac739a4c7dd0e65bfcd69ab5389cc753fe8d0989d207c3556726fcd028e7ac7c3e3d638ae0dea6715f9866ab3c5231af1bd2c273edda8e96c948c47ab7772d7e2f8c7bef4d707f41d05a3ea990148d9d69abfa5ca5feda0fd5cbe2aab1c26466de9deaab0d021a7ec8095739f265562e90360f3fb4d23e39b2c80ff129f0436782d69c3b3abe821560b3e0031b097f715588d00afcdb895c047b0518ac18d8007eff008a4608e51a010000",
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
      "Tue, 11 May 2021 00:48:29 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-91-1620694024143",
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
      "536b4fdb3014fd2b91f795b679d197548daa84d189a65b9a82a6698a1ce72618d238c40e5385fadf77ed50069b049f62fb9e73cfb98f3c917b5e65644a525e3cb4d0ec3fdd89949c1050b4d0af372a76b773605f79b3e7e0fb81777a59cc6688e09a25e9ae2ea12745db3090d3eda65f34a2ad6923440f13f5264ecf19baf670e2dbaeeff81ef22494f915afee917dab542da783c151bb5f085194406b2efb4cec5ede078feea06ec41d3025076f2507a82207ef8b7e2e05a38a8b6ab6dda081564293c08ef2122dfc6566e9d9dbd47d4e77fd02c18f9c01654cb495d2b630051355ce8bb63159c9f489189baf0e64135c058bd862a26c775552d11d9c5819553451fb1aac8b68bdb296e1c53a5acde3e53a4c368bcb6035ef2fd657db55b8b16e2e8328b0144d4b305c6b669d995b8817d4cf402a5e19f5583f6be5e7062dff1f8b26a0b4842e988cec2175c6f624cdd311cbc7de699adb90a6e374744abdd466131ffc2c058a3c236a58b4129507a3ccf3c67ee266b99bf87e6a27a93bb4936ce433701cdfcedd8c1c4ec8ef862b38e7b21692771d2237d1320e9238da868b791c981272da96eabc33a60b78ed516181087aa7a6838e72814abaddcb300ea2f9225e5e07dd84afa0a06cbf79c019e7b4948068da60f314342b9161c348385f05e7083613fb760c4a32fdf94474cfb58b572d7fa1c738406d57992fd9c4d132fc62ec1c11d7b46c0de4b13b901a2ddf626de8faf00b91b8a45d16f27d1b443f48f714410e0d54ece36922d8043efcd78e8b8f585c7d94910aefb83b4c6a11d640b743dc94fbcc76ecc978382106dca87f628e6d7bfeb16b3a87ce083ba8d47345dde263a19d582b5f4018c4f187a65b873f32ad531b78040000",
    ],
    [
      "ETag",
      "bWtT2UAecJiryie44E35Hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1620694024143"
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
      "000002ff8d925b4fc2401085ffcbf8684928d6024d78288a4a2cc8a53c1843c8d24ea1d876eb5e3448f8efce5644a326fad2ce4cbfd99e73da1d3ca6450c1e2cd3d59346b13d59a11a9b628252674ad2ade48544b000155b11296f67b1be6ff546fe6bd0089ba7ba6de7cd71a743848cd69833f07690a498c512bc871d142c475a8b78a6f362517516a86d6986d370d21f5e539ff3d8f4c35910f8dda0077bebb81833c51615ff8fb5f9de820d5f4e3041814584464b29f80623d5373625cbcb0c6b926b11a1840aae1eac04d725139cd768526bdb35db6dd4ddb6536f38b6734660c623a6525e103b9b923e505cb16cc25fc825b80488aa24c349757da6711a57464cd91f86ae53e9fb0a90b424cd70f137487ad78c3ec3077688e03bc772ae0b75a4ae823bffb7e328d3cfa32efdb0f783908a923a22617fd09b86fe6064b8f9c17b77ab508e04a720259a0cedbad33a6fbaf5f7582fb8899adee329a1d18288d1df71932af0129649dcbf01b314aba77b020000",
    ],
    [
      "ETag",
      "sKUduY8EPAzL2T7+u91m7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1620694024143",
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
      "54fd6f9b3010fd5790f74b2be50302f994aa2e6be98694928e9056d53425c61ca95b822936a9a22afffbced0f46b5b2b2101bef7eebd3b9ffd48ee7816931189f8eabe8462fbe55644a44140d115aecedd9e00fee0fa9bae7571e66439b4e5c3f8e808115cb3245de72934a5280b0672349fb5568528735a08d1c444cd61a769f53a666fe8981dc7726ce449489309cfee907da3542e47edf65ebbb512629502cdb96c31b17e5e6f6f3aedbc10b7c0946cbf956ca38a6c7f2c7a9c0a461517d9d17c86064a09c502d694a768e18519475fdfa66e71ba6ead10bce10c2863a2cc94b6852998c812be2a8b2a2b193d92cae6ab0f327327ee49689c4ce77e78b0a46b4d5e1e1a541a8b4501b24c55c358624d094f61c1e3651dc9ef8cb3607a8e1174704325c8a571f5c30d5cc358c654c1d238328e8db17f6abc257bbe31f77d77161a07c787c6f7603abf30be5dbfc1a0eb18a4e259e539a4510adaef535bbdbf375313a8420f7570d1377bd41a98c32889fa2c19d8dd2831218a0651bf4bedc86443079c38028a3ca5b3572c9a896c6025b61df56c0603db663d1b06bd2163dd7ed48fe30eb56cc7499ca43b8cc9ae411e0aaee094cb5c485ef7965c055ee82ec260ee9f8c43b72a23a1d8bfd3da9c2ee2b54f854522e883ba763aca052ae98df2fcd00dc627a177e9d6b331811565dbd93d4e4742530988a6055d8382e25cc4d83472319d79a137f5c71364541b7eb1474832faf5f84208b779d56555bdc9a92e60f72ae1254dcb0ab0a93f48c7ec984d13e7b74b76bbc6ff338d83607c8deab428e8f65d0c2bea399afe0f9d0a5ffdd54ef7ba16d16acf2ec8eef70e9f06c1e35467273fe76e704deaa500122820639f4f1082abc0a7b7c2fe88ea3b67a665a4c27f9c5726b5082ba09e5bbeaeecd66ccb3287c32ea9c0857a1fb32cdbdc6f90cea133c21a32f554517d44ab46e950299f4118c471f33dff3b46ff00983067d422050000",
    ],
    [
      "ETag",
      "UE6oeiwENv51PF4npe/swA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1620694024143"
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
      "000002ff8d90416b83401085ffcbf4aaa056021172685a690549aa6d28b484b0d1d19aa86376d70609fef7ce9a1c7aecc59d7d7e6ff7bdbdc0b16a7308605f95a71ee57057a24ecc90a2ea6bad78e9a8550816a0162593a7e5a7b72ed6d1d0c6e775929749f2f1344b160b2654f68d8d80e002458575ae20f8ba402b1a64db6e27a71319d343679468f51e3e87290b0de546586de2f8611987305a7f6cddf15f96ed68c181f6291628b1cdd0a4e8241d30d39129a844d3d5682bea65860a2678fa514aea3b21896c56ecb967bb33cf99cd7dc7f35dff9ec19a32a12b6a99ddbc7136d0a4459dd299fb81cb809c46ae5a4cdf9f49361d6ed376dcde4ccb41a37a95c409149acb9d6b904732e13487d6b2470b32c12ff952e9eb7efc05c3f12092a6010000",
    ],
    [
      "ETag",
      "qBZ2OfOIynLwOQdgQQWD6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MTEsImlhdCI6MTYyMDY5NDExMX0.iNCYlJV6ij_0e-pq_ws3HILAy2hZiaeGAbJ9GLcBvXCzBNgBuCuGSPrIerD65q5m4FhWnytwHnSCcDnNoMhCtx5fW5d_EBSjEKXSGQZ_L5yGt86KcDJlIIgoS8gzzXZ3QFAhEfQu--PGm2jMjZpsOZfOjmG4byRkHZ7MP39K9SBNM0ofWTZEeGz0DyiE3xVZx9o2HNQ6Ui-imq3j6MLM4fFBhwdTgQDvGpe94rbYqyX0Go_hIfFV8Yz-LnDOQhdtgvz0l8qJfeyeInlSxr1si72BoGZzKmQCzM8z1__Y0u2Boy7sEICUo5N9ENbaN7LVE9FGfMK5-TvLbysLiyeKcA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d04b7282300000d0bb642d0ec84fba6b70280d6905111436193ec15194444850e8f4ee757a84f77e405155741888602dedc01b988a95b3ac96015f4372aacd246d34c5b349eb53230af4f294eaf822ccedbb90f2812d3b1b3dc1258db5fd8c30fcd8e5f8981f8ee157796b4b6aa97e8dfc0e57f1dc44151aa22dc36e0af9530fa4086cc587e39c9015ad99b44223c7b2dc2956ec68f14545ebc91d4dc993fb4155e60d1aaf09bbdbe684ea76d060710bfdc61486a130746ed474584fa2630466a9b7b9b16b9fa2cfce815045dfd1fe916cef07e3e2bb9287d91e2c007df2734f07727e7175d37116e0df4ec4c4e92b00d2a2a73df8fd03cacb419b1a010000",
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
      "Tue, 11 May 2021 00:48:31 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-93-1620694024143",
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
      "000002ff8553ef6faa3014fd5748dfd729280cc5c4bc19c7de4c14df10b76c2f2fa4ad857543ca68f1c52cfeefefb64cb365c9f689b6f79c7bcefdc12b7ae6e5068d10e1f94bc3eafd8f2741d019620ae7f09a3f167df97cffb07b0a6fa39bd2960f0fbeba198f01c1354be26d55b08e144d4d991cad57ddbc164d856b213a90a813b89d9edf77fcc073fa5ecf7381275991cd79f90cec47a52a39b2eda3763717222f18aeb8ec52b13dbddbbbbe5dd5e2895125ed8f9236a848fb6bd19f85a05871518ed72b30d04856a76c8b79a10b3c3137e4e263ea2ec7db6e0ee01da70c532a9a52695b90828a32e379539bac68f48a8ccd7707b40ae7e134b1a8289a6d999678cbceac0d563855fb8a5957f17261cda2ab65bc9824b36594aea6d7e162d29d2ee7eb45b4b2eeaec338b4142605335c6b6c5d985b0417d0df30a97869d413fdac95df1a34fb3c164d0069c9da603a707cdc1b3a01c9c8806643f79c640e23644806e7d8250e0d3ce66d08c3c033a286854b5112ea9dfb74c8527748b2d4cb064e4afa7e90d28debbb4e3080a0870e67e85fcd15bbe4b21292b71d4277f12c09d3245e47d349129a1232dc14eab235a60b78ef51418100faa2a6838e72014abaddb32809e3c93499dd86ed84e72cc774bf7a811967b8900cd0b886e629562fc4061a86a2c922bc04b099d8ef6350a2d19f57a47bae5dbc6bf9899ec000b55d65be6895c4b3e897b17344dce2a231905d7b4015587e84dac0f5e12f206149db2ce8661dc6f7a87d8a59c66a56d2efa7096013f8f65f3b2e3e6061f541462ab8c3ee50a94568cdda1de2a6dc3776afd7f303f3a72a5cab4fb1e1c03d764de7d019d99695eaada276f1a1d056ac9127100461fc91e9d6e13fcc7f9a3978040000",
    ],
    [
      "ETag",
      "ghl2skYZvjEVNQn/sZZ6tQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1620694024143"
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
      "8d92dd4e83401085df65bc9426fd4154925e50ad8aa1b5521a634cd36c61a05460e9eea26d9abebbb358ab5113bd8199e19be59c035b784e8b086c98a7c9aa42b1394a50ddebc24759654ad2ade485443000154b88ac3cb64e82d12878301f87cbf56deeac5ac749b74b840c179833b0b710a7984512eca72d142c475a0b7956e5c5acee0c509b520fc781ef0eafa9cf79a4fbe1c4f39c9ed7879d71588c9862b39affc7da7467c092cf7d8c516011a2d6520abec450b9daa66479996143f24a8428a186eb0789e055c904e70d9a34ce3b8d96d56e5ae766b36db6cc0e81190f994a7941ec644cfa4071c5329fbf924bb00810754986e3fafa42e334aa8de8d21d069659ebfb0a90b438cd70f637487a178c3ec307b68fe03bc7725e15ea405d7977ce6fc751a69f475d3a41ff0721152575400277d01f07ce60a4b9e9de7b6fa3508e04a72025ea0c5b4df3ece4d46abec77ac175d4f41e5b890a0d0819fd1d37a9023b6699c4dd1b4da286af7b020000",
    ],
    [
      "ETag",
      "uLaxgTPPTW4YNjxJmAq1+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1620694024143",
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
      "a3",
      "40",
      "10",
      "fd",
      "57",
      "c8de2f9aeb07504a3f92c6eb55f4485adaa354a3974bbb6c87ba4a5964178d31fddf6f00ebc779a7090974df7b336f6667fa486e78b2267d12f2cd6d0ed9c3976b11921a014537787a32eaa4c6dd758f05de57118c9dc9e56933bc1f0c90c10b95a4db3486ba1479c640f617f3c62613794a3321ea18a8deb3ea866dea76cfd24dcbb05aa8931047639edca0fa4aa954f69bcd7deec646884d0c34e5b2c1c4f6f9bc796736d34c5c0353b2f9366513b3c8e6c7498f62c1a8e222192ce6682097902d614b798c165e94ebf0dbdbd00d4eb78d0d92ef3803ca98c81355d8c2104c2411dfe4591995f41f4969f3d507993b63671468a3e9c20b0e56745b8857871a95da729981cc6355d3565853c46358f2f5aa42d21bedc49f4e1041075754825c69e73f1cdfd1b49554e86ea50db4236de81d6b6fd5aea72d3ccf9907dac1d1a176ea4f1733edfbc51b0eda5e83543c294d07348ca130fcd457f7fd6d1602aad044052e3bba4d8daede0ba3b0c3a26eab1d463a846137ecb4692bd459cf026b1d02459d2aa2972a9a88a4c33a5dd03b6ddbb62084c85c5bb46d806eb4a356c85ab66176216a75e99aec6ae43ee30a8eb94c85e45573c9b9ef06ce32f017de681838651911c5061e57e68a225efb545824923ea86b57a05c60a6e2a65c2f70fce12870cf9c6a38c6b0a1ec617e8be311d15802b26946b7a0209b8835368dcca6733770a7de708c8af2c6677b8624fd5f8f2f82e0212dbbacca3709dc09ded170322b3dec496734ce4bd65df5414cddd4ebba5937da8161f68d56dfb01abaae5f92ddaef6ffe043df1f5ea0219a65f4e12f0c8bb4ad42fe8fac25bffc5599dfbb304891edd913d9fdde",
      "e15323b8625574f273e1f817a43af221820c12f6f95021b9043efda7d8af2d727171310dae80e238c24c16495806d528f36d69b7521b86d9363aa42467ea1d66dbddfd9d15318a88b085443d5554ad6dd9a802cae53309419c40cff54e11fd0324e2a49a36050000",
    ],
    [
      "ETag",
      "FC7p1vj9cTN+oTLEMZG/bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1620694024143"
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
      "51",
      "4f",
      "83301485ffcbf515e29864c948f6b029d1454236e662a259960e2e08036e6d8b662efc776fd91e7cf485de1ebed39ed3331ccb3683000e65f1d9a13add1468d676485077b5d1bc486a3582036844c164d86dde7ebce2361fcffdca7b58e9f8553daf67332674fa818d80e00c798975a621783f432b1a64db7eaf8613193327699565fc123e86090b0d655688b751345f4421f4ce1f9b3cfecbb2eb1da8e890608e0adb146d0aa9a8c2d42c6d412d1a59a3aba953296a18e0e147a1a8934211b9acb853dff526e3d164ea8fc6bee7df3158532a4c492db3db0d67034346d4097d733ff01850c3c855f3e1fb35c8b6c375daf5bbab697132a8578a3881467bf9e812e49e6c38c3a18dead08154f04b3e95e6b2ef7f01a7e4bc38a6010000",
    ],
    [
      "ETag",
      "EuSZz1g/f2A4j1DPsNWrKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MTIsImlhdCI6MTYyMDY5NDExMn0.HNrX63IRm5ZlPTuIpel4jOUP6Ub7E924VPmqIh0hq_7MIS5psGiVF0gKYEO6AxVUhrjCrPsVkhg2WRAajVnvld2Q0RijcBHwv-c2VM2Xk_FSivWRFR0aeH1whLSkufdqkJeEE7WMUZWCv0YnbqeB7qMJWLiFmwLyQ5LvANCqdxuw2_eiWWQH46I1hWoAynEEiUoldH5C8uK2-nicWU4_MY7ExqUnyDGHEY1apDEYBemHqmmQZvJ2x_zOX38gRfbSs2URq-JH8Y8q9-UwkMPUJ69SWA8nQUjyIrkJlKDZnDEpByudbRqOaJz2j6Uci_BBuenACL0fU1nAKlkwCR0s0g"
  )
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dd0db7243400000d07fd9e7c808d6a58fa4c4bd62259217c35a12192c4b1a3afdf766fa09e7fc801c63c25836f50fd2810fb0e482b6c55b97aa7a56977b265d84a1cf527abb9af265168e73c976a62997d1b45b74542bcfd2e0c248ca09d7541e89045b3c6638647de185cf53d217087ac5881cd8363b7b3dbb50e7acf0683b7cec58c599e59c87a63da5c12af0279e7e9e8b257810ecc7a9515528749c838f23df4006ef420255b7556883dc38a172cc2b435f12b7e9d2552bc3f99b0ef0cad6008b625e77b70392ac475d8b63dc7ed58199289265a898f3c1069017bd8f8465f73757849ab601fff66c5a287907e8241fc9087eff0035ccc3da1a010000",
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
      "Tue, 11 May 2021 00:48:33 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-95-1620694024143",
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
      "9b3014fd2bc8fbda249084bca4688d52ba664ac84a48bb699a906d2ed42dc1149b4c5595ffbe8b69ba5495da4fd8bee7dc73ee8367f220f2984c0813e96305e5d3977bc9c819014d537c1dc677b63fa7fe7e30fa29becff65790cadbebe91411a26629ba2b32682959951cd464bb69a7a5ac0a5a4ad9c244adb1db72065d7b30eedbddbed3ef214f41962c45fe80ec3bad0b35e9748edaed54ca34035a08d5e672f7faded9773b4529ef816bd5792bd94115d5f958f46b2639d542e6d3ed060d540aca0876546468e13f3366e76f53b705ddb55304ef0507cab9ac725ddbc2145ce68948abd264259367626c9e1cc8c65b7af3d0e232ab767994d31d9c5931d534d24f055897c17a652dfccb75b09a858bb51f6de657de6ad69eaf97db95bfb16eafbcc0b334651918ae35b5cecdcdc70beac7a0b4c88d7a583fd7ca2f0d5abc1f4b4d4069054d301ada03ea8cec314bd89027a39ecb121b181bb1a14b7bcce6e33ef46306147946d4b0682ef351e2bace90d368d81d26511f804598c68d6ce6f02476066ccc5c7238237f4ba1e142a8422ad17488dc068bd08bc260ebcf67a1674a486895e98bc6585dc0a9478d0522e8839a0e75544854aadbbdf0432f98cdc3c58dd74c780929e54f9b479c7142330588a625364f43b99231368cf8b39577816033b11fc7a02293dfcfa4ee79ede2a4e5aff4100758dbd5e64b3661b0f0bf193b47c40dcd2a03d9370752a0e53bac0d5d1ffe201297b4c942aeb75ef08b344f01245042ce3f9f26824de0d37fedb8f888c5d54719a5f18ebbc3552dc24b68764898725fd88ed373dc0131e052bf8bf57aceb16b758e3a23ec20d72f15358b8f853662957a056110c7ef9b6e1dfe0171db4c9e78040000",
    ],
    [
      "ETag",
      "7dh0NCaNv68XiJAvHegoWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1620694024143"
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
      "92d153824010c6ff97ed1567449194191fb02c3535137ca8c6714e5814038eee8ecc71fcdfdb23b3a69aa917d85d7e7b7cdf077b788ab3101c58c6abe702c5ee6c85ea4e17539445a224dd729e49040350b11591f59b51fe30def406f7af59530c3cd3337d6bdb6e13218335a60c9c3d443126a104e7710f194b91d6029e1469b6283b03d42ed743cf9ff6c7d7d4a73cd4fd78361cba9d61170ec66931648a2d4afe1f6bf383011bbe9c628402b300b5965cf00d06aaaf6d4a96e60956242f4480124ab87cb012bcc899e0bc42934aab5131ed5ad56e59d59a655a7502131e3015f38cd89947fa4071c59229df924bb00910654986a3f2fa42e3382c8de8b23ff66dabd4f7152069519ce0e26f90f4ae197d860fec18c1778ea5bcc8d489ba1adebabf1d47997e1e75e9fadd1f845494d409f1fba3aee7bba389e6e647ef9d9d4239119c8294a83334ab56b3716e57df63bde03a6a7a8fa3448106048cfe8e5eacc0895822f1f0065b4ab3a17b020000",
    ],
    [
      "ETag",
      "3KMpZNjHJYxn8rJS1S1T4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1620694024143",
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
      "000000000002ff85547f6f9b3010fd2ac8fba7d5f203124842a4a863096d23a52423a455354d89710c754330c5a65354e5bbef304ddbac5b2b21817defdd7b773ef384362c5da33e0a59fc50d07cf7e59e87a886a8c431ece28dd31a5969bcf8baf177b3fb38bcb49dae33180082952c81b75942eb821739a1a2bf9837e29c1719ce39af43a2badda91b9d96deb14dbd651a661b788226d184a51b60df4999897eb379d06ec49cc709c519130dc2b72ffbcdc75633cbf93d2552348f259ba0229a1f8b9e259c60c9783a58ccc1402168bea45bcc12b0f0ca5c87df8e533718de3662003f32423121bc4865690b52109e462c2e729515f59f90b2f9e603cddd893b0cb4e174e105272bbc2dc9ab530d0b6db9cca9281259d3565053c412ba64eb5515c936dab93fbd820838b8c3828a957673e9faaea61d726803ed4c73bc91764c1f7bdac2f3dc79a09d9c9d6a17fe7431d3bedf1e61c0f79a0ac952e53ac061424bc7cf8d1dbf3fce928025b8a882cbaedec1464fb7c328ec92a8d7b6c248a761d80bbb166e873ab14d6aae438a8127cbec8a85539ef6daa68dad96452cc3b08cb5adebc430c30e6eb7bba6b56e455d6a5323b47a685f43bf7326e988898c0b567517ddf8e3c05d06fec21b3a81abca8830747054992b8b78eb53429100faa0ae7d19651c94caa31a7b81eb3bc3607ced56d331a13126bbf903cc47841341018d73bca592e6577c0d4d43b3e97c1c8ca79e3301863af2d9012150ffe7d32b21d865aacb52bdd1f964ea041d53393840ae715228cc63f5818c8605887dedff691cdf776e411ae739defd1583723a8afe0f058557abcae68b222ad50eab16daffdac35343709baaece8c7c2f56f51b5e5d388e634259f8f0f8055e0d39fc2e1860216ee28c808096b1856224a1192d36a68d956d9add88661ea8689143897ef6246cf389c4e99a3cc48b73495cf1555375435aa0c15e205044198356fec5d40f40fff636a8821050000",
    ],
    [
      "ETag",
      "akA2D5ngU+kRyPjgbH9A7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1620694024143"
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
      "0000000002ff8d504d6bc24010fd2fd36b02491a030a1eaa156b9150d37a691159e3641b4d32e9eec612c4ffded9b5148fbdeccebe8fe1bd3dc3b16cf630825d29bf3a54fd9d44b3b24386baab8ce6aba5462378804648564e87abd3fc3d7d7e4ce23e4d4b2d0703d9c9f198153affc45ac0e80c4589d55ec3e8e30c8da8916ddbad721b5966fad6228bf46d369f650cd4b4b740ba5e2e1f26cb195cbc1b5b7bfc976573f1e040bb0c0b54d8e46853b48a0e989b852da845dd56e86bea548e1a9cd8115251d70a45e433e20f133f4ca22019c6411487f13d0b2bca8529a961edfa95b3812123aa8cbeb91f442c506ee4aa853b4f0eb61dec14ba68b75cf8c74596dbfc2e9cf406f58b224ea7d1060bae21a764831b2e6454871ee4827ff9a934d7f7e5073fe827eec2010000",
    ],
    [
      "ETag",
      "C9QvGZNJD64yNNisg55gug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MTQsImlhdCI6MTYyMDY5NDExNH0.PSlMRt7cSuH2DD2xXzRKf2gLP5UwXzAA_J_E0D-L1LgQPrUvZZBsf2Otg5H3rybuSgimAT1YLWMA09NbNvnM5-NFe3YG2RzkeUaO3hBuc-v6VP6uYV-N6_HvAySgK7f38IkE-ublRCC7m3ClxcH_s9Rf-CkOnDxIhDSRuPBeQDHxikJ1ljQYEsHsEjGwUWznp-Jnj-5Moxo0eSXqk2_LZjFyCPa9-l2qXNLXwSBjc4rI4tHzGAowg1xmGwCMrNBcJTyr6Cs-w-FXQYjPVxSnTp0KOvxXsqp6ArE1gMngfcSF0ayRwd0u6_DIt_h0FQjROs2l0f7rY1RoI5coOXUWuQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad0ef291d89d0a121b8d1a40c00d13202263154c328038bd7b9d1ee1bd376079cea54c557de30ff0055e4c9f4ff2096ee0322d0bb8d2c2b6e5307bee7e8235ee5a3fdcf1a94b9c31d9f821ddb25683cbb3bedfd644e64365254ec1f0b3a9dcae385817b3e565179a5e92991ba86a0ea9d0dc6f76f4f9957953ff4c0d45ecdb02e1556c0dd1e14502ef8aa29c5ec9a9d7ed6103dd534e0d0ced1ddaabe8ae50b790b3f1b324d951501964fb2a1e4af9b865b8565a82d1417fd8c7d85c77565f385b2d23e39968a0848bc047175bde4d618011e07d53092ed3eac335acf97c04feeda97a35fc13b0e44c70017eff00e10d9d7b1a010000",
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
      "Tue, 11 May 2021 00:48:34 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-97-1620694024143",
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
      "000000000002ff85536b4fdb3014fd2b91f795bed3a7548dae8451d1a690a420344d91eddc04431287d8e98450fffb6e1cca4048ec536cdf73ee39f79117f228f288cc0813c95305e5f3b707c9c809014d137cbdbc1c66512606feddd599fbe33aed0e370ffbebf91c11a266299a1529b494ac4a0e6ab6f3db4929ab829652b630516b3a6ef546fdee686a77fb76cf1e204f411aaf45fe88ec7bad0b35eb748edaed44ca24055a08d5e6327b7befecfb9da2940fc0b5ea7c94eca08aea7c2dfa3d959c6a21f3f9ce4703958232848c8a142dfc6346ecf463eab6a0593b41f05e70a09ccb2ad7b52d4cc1651e8ba42a4d56327b21c6e6bb03f19db5b30c2c2ed32acbc39c6670624554d3503f17609d7bdb8db572cfb7de6611acb66ee82f2f9ccda2bddcae771bd7b76e2f1ccfb134652918ae35b74ecdcdc50bea47a0b4c88d7a503fd7caaf0d5a7d1e4b4d4069054d301c7747b437e94e59ccc63c9e0c862cee026313361ed201ebf2a90d76c48022cf881a16cd653e1c31bbcf0651688f8610dab6cd430a761c628ffb2cb627f6880dc8e184fc29858633a10aa944d32172ebad02270cbc9dbb5c048e2921a655aacf1a637501ef3d6a2c10415fd474a8a342a252ddee951b38de6219ac6e9c66c26b48287ff69f70c6314d15209a96d83c0de54646d830e22e36ce1982cdc4ae8e414566bf5e48ddf3dac5bb96bfd1031c606d579b2ff1036fe5fe34768e881b9a5606b26f0ea440cbf7581bba3efc46242e6993855cef1cef8e344f1ec45042ceff3f4d049bc07fffb5e3e22316571f6594c63bee0e57b5082fa1d92161ca7d65f77af6703a25065cea4fb1f17870ec5a9da3ce0819e4fab5a266f1b1d046ac526f200ce2f85dd3adc35fd022789378040000",
    ],
    [
      "ETag",
      "KK5mdmi3SYPDNBQl05MjvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1620694024143"
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
      "0002ff8d92dd4e83401085df65bca5096d29b624bd40adda046b7fa85e98a6d9c280d485c5dda55a9bbebbb3a8d5a889dec0ccf0cd72ce811d3c64450c1eacb2f4b142b93d4a514f4c31455571ade8568a422158809aa544ae376911f0e7ad7bb1debcdce49deea61dde4efa7d2254748f39036f0749863c56e0ddeda06039d25a24789517cbbab3406f4b339c85d3e1e882fa5cc4a61fcd83c03f0906b0b70e8b31d36c59f3ff585bec2d588bd5141394584468b49452ac31d2436353b1bce4d850a292112aa8e1fa412a455532294483268dde71a3e9b66cb7e7d82da7e9b409e422623a1305b1f319e9032d34e353f1442ec12540d625194eeaeb86c6595c1b31e57014ba4eadef2b40d2928ce3f26f90f4de33fa0c1fd87b04df39968baad007ea3cb8f67f3b8e32fd3ceacc0f073f08a529a903120eaf06b3d0bf1a1b6ef1eefd64ab518da5a020159a0c9bb6d3ed1cbbf65baca7c2444deff1b4acd08288d1df719969f012c615ee5f017486f7cd7b020000",
    ],
    [
      "ETag",
      "jvgnLlxy6GjvzVm58v3TWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1620694024143",
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
      "000000000002ff8554fd6f9b3010fd5790f74b2b2501c2473ea4aacb52da21a52423a455b44d890143dd124cb1c91455f9df7798a66db66e9590c0bef7eebd3b9f79420f348fd11085347dac48b9fb74cf42d44244e01476d569e64f765930d12eede5d6b18b741678a3b33340d09ac5f1a6c8489bb3aa8c081f2ee69db46455814bc6da90a83de8b775bbabd90353eb9aba69008f932c99d0fc01d87742147ca8aa07ed4eca589a115c50de89d8e6655fdd76d5a264f724125c3d96544185abff173dcf58840565f9d9620e062a4eca15d9609a818557661c7e3e4edda178d34901bca511c151c4aa5cd4b62045c4f284a65529b3a2e1139236df7ca0b93371c681329e2ebce0648d3735797daa60aeac5625e155265aca1a6a4a684656345e3791e241b9f4a7d7100107779813be566ebf3abea328eb1af4a3d2348328e7cac8bb508ef9aea72c3ccf9907cac9f9a972e54f1733e5cbf20803c663c205cda5ed008719a92d3f77d6fdfb3c6b021660a309ae7a9a8df5be360893b017257dc30a138d84613fec59d808b5686012330e09069ea8b34b16ce596e102bb1fbb11686da6060e991650cbaa669613b21b16960cdecdb46d4eb1968df42bf4a2ac805e505e3b4692fbaf5ddc05905fec21b8f024796916068e14563ae2ee2ad4f014502e83f75edeb2865a0549f95eb058e3f1a07ee8dd38cc784a438dacd1f6140129c7102685ce20d11a4bc6631340dcda6733770a7de68020c79e6b30382a3e1f7a75742b02b6497857cd75ab629f50f801b9c5512b16d3e906ea1fdbef5ef1423df1f2d41169725debd9ffeddfc122f578dc5173d54ab1d565db4ffb987a785e02a35d9d1b785e32f51b3e5938494248f3e1e1d00cbc0877f84c3f5042c5c5090e102d630a811af45a29234034b37d26ec3d675cbd62c24c1a5f83366eb9a7d38993a479d916c482e9e2b6aaea76c541daaf80b088230679eeb5d41f43742343ab81e050000",
    ],
    [
      "ETag",
      "/OlRLylTL0F6YvE6pgPTNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1620694024143"
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
      "50c16e824014fc97d72ba4a2c4aa8987da106b624cc17ab13166c1274581b7ee2e3694f0ef7d8b1e7ae8a197ddd979332f33dbc0392b0f3081384b2f15aafa2145135a10a1ae72a3f992546a0407d0889495036feecd063a97a17edc3ed1fa1a5f46dfe174ca0a9d7c622160d2c031c3fca061f2d140290a64db7eafba8d2c33b5b4cc62f51ecc838889820e96586d96cbe7d93280d6f96593e77f5976ad03278a233ca2c232419b422a3a616216b6a01685ccd1d554a9043574e26e902aaaa450442e33ee78e47ac37e6f38f67b7ddff3072ccc291126a392b59b3567034346e4117d713fe8b3407590ab1ebbf3dad1b6c31ded2cfe6be6d9d9eebe70561bd46f8a389d461bac770bf94236b8e1424655e84022f8975f33737bb73f1fa7844fc2010000",
    ],
    [
      "ETag",
      "31G1B3slpQs/Z7oSvbq8zQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MTYsImlhdCI6MTYyMDY5NDExNn0.hPoPwEngisINbbvWIoA7LUjIJrM2nxDU6dPTlaYnRrFQTYtw94FllC5MnNUnWwnUOTTxXNwRHOJUbab-cLiW_fO1yuV5Y5kEozgRpvQPFkgqeUm4yaYZLs2TL0HaoNxOgtJcR_q9NbenZvNYSgy39Onjrypz6jzSdjHXbbxAK7JFLQz6ET9Tzxthyqpw0W4vR0WV5CpfQPIWyvjqz0b-VCkA_JoIWVzD1BeqX0aURqZUKTIYwn7_Av_5TTYWmPNKg9TEcKH1oXRHKTsEom-Xwi55NLM2JKTfLDsdLb7WzUivnKN-x8ItLG95YD1xJ-nv-yF8MttphtPWvscnpuaZjQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad8e94b140770607a4a0f2d100dd640246c347830920e0f4ee757a84f75e80e4399512b7bca277f00546f2612cf285dbe8105fe99d27a484689486d69f3bc287eba12ea59dfa7aaf49dc69266413da79c8512c1c257e99aebbe6b80f1edecd51cdca96735c259f6c7714fe7cfdb4e0654bdb7235386e068b736c5a4a8ed515533c9d6005ad451d1cf73c35e2658432b6699caed9b229ced08d9d958b40d12e96825b849a5dea4d49b8b1827b36d51577a7004683ab8d3dfef9e6a7be0d79c29faa15f4ae61db9e199ac5f5c1f26571388119a04353082a71f1e6aa2bc398817f3b6ec786be032025820af0fb07ba3526411a010000",
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
      "Tue, 11 May 2021 00:48:36 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-99-1620694024143",
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
      "53db4ee33010fd95c8fb4aef6dda54aa96aa0488d4a690a64568b58a1c67120c691c62078450ff7dc70e654148f014db73ce9c3397bc92075e24644a629e3dd650bdfcba17313921a06886affed56d59aaad7fb51bede8ead9bb5894e9ee7a364304d72c49f7650e2d29ea8a819c6e37edac1275492b215a98a8e538ad9eddefdaceb0db1ff68603e449c8d3252f1e907da75429a79dce51bb9d0991e5404b2edb4cecdfdf3b4ffd4e59897b604a763e4b76504576be17fd9d0b461517c56cbb4103b5842a823de5395af8cf4ce2d3cfa9db9ceedb19829f3803ca98a80ba56d610a268a94677565b292e92b31363f1cc8c65dba8bd06222aff74554d03d9c58095534522f2558e7c17a6579fef93a58cd436fed479bc5a5bb9ab717ebe576e56fac9b4b37702d45e31c0cd79a59a7e6e6e305f513908a17463dd4cf5af9ad41ded7b168024a4b6882d1b86bd3dea4ebc4693c66e964308ad32ec4f1241e8fe820ee326708c324068a3c236a58b410c5c8a6e9a03776223a19d0683819d9d124e9f723183170ba8e9df67b09399c90e78a2b38e3b21492371d22378117ba51186cfdc53c744d0929ad7375d618d3057cf4a8b040047d53d34147b94025dd6ecf0fdd60be08bd9ddb4c780919652f9b479c714a730988a615364f41b51209e8d59eafdc33049b895d1d83924cffbc12dd73ede243cbdfe9210e50db55e64b3661e0f917c6ce11b1a3796d204fcd819468f90e6b43d787bf88c4256db290ebad1bdc92e62980142a28d8cfd344b009fcf8af1d171fb1b8fa282315de717798d422ac826687b829f78dddebd9a381430cb8525f62f6787cec9acea133c21e0af55651b3f858682356cb77100671fcbee9d6e11f272aba6578040000",
    ],
    [
      "ETag",
      "NPYpptUNPV5VaMwIGCpfVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1620694024143"
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
      "00000002ff8d92d14e83401045ff657ca509558a96a40f55ab36c1aa942626a669b63020ba30b8bbb4699afebbb3a8d5a889bec0cc7066b9f7c2169e8b2a85009645fed2a0da1ce468ee6c11a16ea4d17caba9d2080ea011399369b4be9f2d7bcfb35452eeae56cdc9ba08d78301133a79c45240b085ac40996a081eb6508912792d21d994d5a2ed1c309bda0ea771349e5c725f526afbc92c0c87a7e10876ce7e3115462c5afe1f6bf39d034fb48c3043855582564bade8091333b636b5286b891d4d8d4a50430bb70f72454d2d145187279d7ebfd3f50f5dbfefb9875ed73b625052224c4115b3b329eb034346c888d6ec127c06545bb2e1acbdae785ca4ad115b8e27b1efb5fabe022c2d2b242efe0659efa3e0cff081bd47f09d13253595d95317e1cdf0b7e338d3cfa3ce87f1e807a10d27b547e2f1f5681a0faf6f2d377ff77eba31a86f1571901a6d865dd73be91dfbee5bac6764a3e6f7044635e84022f8efb82a0c0499901a77afab312a1f7b020000",
    ],
    [
      "ETag",
      "dRwXUb5kUdlog0vvu8wiLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1620694024143",
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
      "00000002ff85546b6f9b3014fd2bc8fbd24a7940429e52d5a509ed9052d211d2ae7b283160a853c0d436ada22aff7d17d334cdbaad1212d8f79c7bcebdbee619ddd32c4443e4d3f8a1207cf369cd7c544344e21876cdb5e97f9b5993f659914e5bdfe9f9da88274f272780a0254be0344f485db08207440c17f346cc599163ce581d12d50d5daf1bdd96de1d987acb34cc36100549a229cdee817e27652e86cde64ebc1133162704e754340296beee371f5bcd9cb33509a4681e6a364146343f503d4d58802565d9c9620e0e0a41f892a49826e0614f0dfdcf87b91b14a78d18c08f342038085891c9d217a4085816d1b8e02a2b1a3e23e5f3cd079a5b536bec69e3d9c2f18e56382dc9ab630d0b6db9e4441489ac692b282aa20959d2705545f27beddc9d5d42041cdc6141c44abbf962b996b6df5a693f0b5d6f13ed541b3913ed308bed680bc7b1e69e76747aac5db8b3c59576767b8001fb21119266cabc87fd8494c65f1a6cbf3fd79280252857c1654fef62a3af0ffcc8ef0551bfddf1239df87edfef7570dbd7838149ccd0271878b2ccae583863590feb5d236c8177236c13dd374c0c8dedf70651d031f57e18768da8d7ed9a685b434f9c4a32a1226782564d4637aeed594bcf5d38e39167a932220c8d9c54e6ca22defa94502480fe53d7b68c52064ae589d98e67b9a3b1675f5bd5904c498c83cdfc01c624c2892080c61ca744127ec942681aba9acd6dcf9e39a32930d4c95fed10020d7f3cef09de26575d96ea8de69e6b3b17cac00e718d9342411eab0f34cac12bda6e6bff4e3372ddd12d4863cef1e68f18945376f2af120aaf5695cd9da4814ab5ddaa85b6bfb6f0d410dcaa2a3bfabab0dc5b546db924229c64c1c7e3036015f8f8efb0bba90086bb0a3a42c21aa63510a54ac04935b534557e2bb661f43aad0e52602edfc5ca89aaed6f689991a424932f2555375575aa0c15e21504411836479dd4f637e304b3832b050000",
    ],
    [
      "ETag",
      "4j4bXOED3BumL2ZiFj1gDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1620694024143"
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
      "504d6b834010fd2fd36315d4da40851c9a224d40426b9b430921ac66624dd4b1bb6bc406ff7b6737a5e4d8cbeeecfb18dedb331ccb6607116465f1d5a11c6e0ad4af6648517595567cb5d4280407508b8295f1249e1fface931f7d797bff9d9cfc2cf4fbe994152affc45a4074867d89d54e41b43e43236a64db762bed4696e9a135c862f91e3fc7290335ed0cb05c25c9e32c896174ae6cedf15f96cde8c081b214f728b1c9d1a468251d30d70b535089baadd055d4c91c1558b1250a495d2b2491cb88eb7b9eeb4f026ff2107a41e88777acac2817baa486c5ab370e079ab4a852eab920042c9076e4ae7b7b9e180e6d0933f936db3517fc7181e136bf0b678346f52289e32934c9bc4bca2732c93537d2b2430772c1df3c2ff5e53dfe0017a0861fc3010000",
    ],
    [
      "ETag",
      "E6EHjwu0rYwi+5zLv1b41w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MTcsImlhdCI6MTYyMDY5NDExN30.iiQd_KSA88XMciLkRbIRxy1n_ne6SiGJHQlBCbOwY8xrzTf2U6cXa00sRIRzUfGAccSv06xe0W_L30uzKh7vhLkDQ1goQsvLMYw6xf7pfZTsEuTAi2klEKlbZJ1MWsWnEdBjy-x81Kazyhb9P0Wva3-vG0f0d5SVZqGNXFZ59q18436dpOsZfCOS7fMjwNwIxe9mp7YlB2Vgzkbr7SWquouMnwGQif7otMRenjkysA0khZVS1-OG39ZJN24RtRErH2TvZ6vHLSj6kLnrRB9QOZjTwAUYhUt7IxtDhoOln3y4WxF6mZexalRIjreO7RZOCBwhbw0TSCkudJcGLkq5Tw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0db6e82300000d07fe9b39a5540616f72972220868abe34400a745e20056ad9b27f9fd9279cf3038aaaa2c340c6ee469fe013ccc5da58552bd4eb26696805e1f11c9b2e5d7a03adad4d2c55acd7738e647d95968a0fae158966830731e8d07703455e9da654b73db5b347c84b22520fb3d0bb23b23de9593ed9898cd6a7efc07048901115569ebf1c53d6390d56c29825f295f741cb5d6f861de12fc3153c99ca58704b403c6bd62ef59362daedb54bcf0b2dfa6819fac2e8d9ee7d97cd249bea1a796d511e0f7789d29a078f085e2039ef1a334f6e8e9d8205a0b2679c0e84bdb98a66180bf06f27e3dcd37780490b4e39f8fd03b24641b21a010000",
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
      "Tue, 11 May 2021 00:48:38 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-101-1620694024143",
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
      "6b4fa34014fd2b64f6ab6da1a50f9b346b53519b14aa406d76371b320c171ca50c32836e63fadff732585763b27e6266ee39f79cfbe0853cf022215312f3ecb1866affed5ec4e48480a219be2eb6eecd36d8fcbc35ff3cdafb627c698f5cf13c9b2182372c4977650e1d29ea8a819c6e826e5689baa495101d4cd4b14cab638dfae6e8d436fbb6650f9028214f57bc7840fa9d52a59cf67a47f16e264496032db9ec32b17b7bef3df57b6525ee8129d9fba8d94319d9fb42f57b2e18555c14b34d800e6a0955043bca73f4f08f9ac4671f737739dd7533043f710694315117aaf185299828529ed595ce4aa62f44fb7c772081b37216a1c1445eef8aa8a03b383112aa68a4f6251817feda3596dec5da77e7e172ed45c1e2ca71e7ddc57ab571bdc0d85e39be63281ae7a0b9c6cc38d3370f2fa89f8054bcd0ea61f3dc28bf7668f979300d01a525b4c1686c8ea835314fe3341eb3743218c6a909713c89c7433a884d766a839dc44091a745358b16a2a0c349620f691c8135b023bb9f26513c1a0c22482776ca5248fbcc228713f25c7105e75c9642f2b64364eb2f43270afd8db798878e2e21a575aece5b634d01ef3d2a2c1041ffa9e9d044b940a5a6dd4b2f74fcf9225cde3aed84579051b60f1e71c629cd25209a56d83c05952b126c18f1e6ae738e603db1eb635092e9af17d2f4bc71f1aee56ff41007d8d855fa4b82d05f7a97dace11714bf35a439eda0329d1f21dd686ae0fbf11895bda6621371bc7ff41da271f52a8a0605f4f13c13af0f5df76dc7c04e3eea38e5478c7e561b2516115b44bc475bdaf6ccb9a5803fdaf2a5aa94fb1fe707c6c5b93a3c9083b28d46b49ede663a5ad582ddf4018c4f97bba5d87bf3fd9a7b77b040000",
    ],
    [
      "ETag",
      "CWMQWSUZV0xq4yn7G46Mow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1620694024143"
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
      "8d92dd6e82401085df657a8b09b49456122fb05a3551eb0f469bc6981506c5028bbb4b8d35be7b67a9b54ddba4bd8199e19be59c0307788eb3105c58c6ab6d81627fb14235d4c50865912849b79c6712c100546ca5c9aa7c7d6cb4a7bd5d104f67fbaddf9a8d875ead46840cd69832700f10c5988412dca703642c455a0b7852a4d9a2ec0c50fb5c0fc7fea8d36f519ff250f7fd49b7ebd5bb4d381ae7c59029b628f97faccd8f066cf87284110acc02d45a72c13718a88eb629599a275891bc10014a28e1f2c14af0226782f30a4d2a9669552ce7d274aab679695bf61591090f988a7946f0644c024171c59211df914d70081065498ea3f2fa42e3382c9de8b2d3f71dbb14f815206d519ce0e26f9004af197d870fec94c1778ea5bcc8d499baef3e78bf1d47a17e1ed5f0fce60f422a8aea8cf89d5e73ec7bbd81e6e627eff5bd4239109c9294a843b44cfbf6fac631df73bde33a6b7a8fab448106048c7e8f76acc08d5822f1f80676ccdd9e7c020000",
    ],
    [
      "ETag",
      "b9szYDHWMwciWXyqTGXSQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1620694024143",
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
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "57",
      "90",
      "f7",
      "4b2be503124a3ea4aacb52b6a1a52423a455b54d892147ea96606a9b545195ff7d8769da66dd560909ec7befdebbf3994772c7b225e99388adee0b10db0fb73c2235028aae70776a3d7c732ebd899b8f926450241bd1b29d87d35344b09225e93a4fa12e79216290fdd9b4b112bcc8a9e0bc8e89ea96d9aa5b4ecb747ab6d9b22dbb8d4409693262d91dd26f94ca65bfd9dc8b37569caf52a039938d98af9ff79b9b563317fc1662259b879a4d9491cd7754cf521e53c578763a9ba283428298c39ab2143dbc5097d1c7c3dc0d46d78d1582372c061ac7bcc854e90b53c43c4bd8aa103a2be93f12edf3d50799ba2377181ac3f1cc0f8f16745d9217c70695c67c2e4016a9aa190b2c2a6129ccd9725145f23be37330bec0083ab8a112e4c2b8faea06aef1b2b5307e16a6d906e3cc18f8e7c66116cf3766beef4e43e3e8ecd8f8128c6713e3d3f50106ed2f412a9669f3218d52288d3f35d87b7bae25812a54ae82f38ee950ab6bf6a224eac449b77d122526445137ea9cd07664c63d1bec65041479aaccae5934e3996576687c62456039406d1a395d6b09dd7644a1edf422b0a1d54bcc561bc8ae461e045370ce64ce25ab9a4cae022f74e76130f38783d0d56524141b795e992b8b78ed53619108fa4f5dbb32ca382a9527e6f9a11b0c86a177e956433282158db7d37b1c9384a612104d055d830271c197d83432194fbdd01bfb831132f4c94ff60849fa3f1e5f08e136d75d56fa4da661e0f95fb4813de292a685866caa0f4273f44a76bbdabfd30c8260708dd25408bafd2386e5387649ff8b84c6eb5565732f6991526d",
      "bf6a91ddaf1d3e3582b7aaca4ebecfdce09a545b012420208bdf1f1f04ebc0fb7f87fd4d4530de55d4910ad738adb12c556201d5d4b2b5f65bb12dabdb751ca2c142bd89f5babdfdf19439ca8cb0864c3d9554dd54dda93254c867100671d87c7d52bbdf8571b3bb2b050000",
    ],
    [
      "ETag",
      "S1wK6VIPEpLffAufvr246w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d904f4f834010c5bfcb788508489a48d2436b886d208d527b32a6d9c214a1c0e0fe5109e1bb3b8b3d78f4b43b6f7ef3f6cd8e70a9ba02223855e5874139dc94a89fed2543651aadf8e8a953080ea016259375bb12dffe709b99a45259f2b969fd645f2e974ca8fc1d5b01d108e70a9b4241f43a42275ae4b1e351ce8e8ce9a1b7ca76f7123fc6190b2d1556d81dd274b54e63989c3f63fde55f236f9303359d323ca3c42e479ba2975463aeb7764125dabe41579191392a98e1b9514a32bd90442e2baeef05aebf08bcc57de805a11fde31d9502e74451dc3873d87034d5a34197df182e0c1b55e0f1ad593247657585c3b6cf940f661cd81b434e8402ef8973695feada71f2b9018c882010000",
    ],
    [
      "ETag",
      "jmAax1y/RuKisRKvHm1KSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MTksImlhdCI6MTYyMDY5NDExOX0.VSlrCenVgkW0llLOeqZjuRYkuOBdBjWGU5wU7g4vMWTf4POXaszy8TaTc_vzWikjO6ATe4Pitv-R_cBCMnPs7H0zhl787gQHtiXXYLznjjO54AHedHqcYQWgdGTtFpY0lNVFLW_SijjbSxVnmdijVlml8Jd8PVkWFnQnRM9Lqmdq4C10GyhTR4X_YPokxhRF2TeYfnnfq6WAM6TgdSHwvfdliaSx-zbLwZ48traaxtGaGEY6QQoDYQVZxYijrE0ToHDfCjQw2hOVROzfTOrSMJpcD5cAftioT8epyIGCA6ERxbsjv902ro7xjagOw-5zJUuvHgfHshSZyC1QeMKw2w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dd04b7282300000d0bb64ad0e8622d21d3f45b012918ec02613307c4a0921501becf4ee757a84f77e00290a3a8e78ea5bcac02b98093456c52ae05b0b57372df0ea47c7321f9dcdd3b26e9563b4cddcd6461174a602a619cb61e7b6fed1be9493260e2d96220cafd0b8f328ccc9d5e1b9d2a814ddfa34899ce2a054fa7e28c7e1bedc9c5c7e98fcf205c9cb75ddc58da3792c76fdcd09616d3dc7da7bb9ef4dc90792da82250e1653ab127c9b3babfeec499a6463625659e549bb943dd261bfab5902e1ae0e2cc3d4f5f3b792cf6957c9c47d7b945f1fcc536998eec00250c91b4147dc3cb9aa66180bf06fc7d3cce933c0a24450017eff00c6e761131a010000",
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
      "Tue, 11 May 2021 00:48:39 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-103-1620694024143",
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
      "0000000002ff85535d6f9b3014fd2bc87b5c9340429310295ad384ae4c81ac84a49aa609d98e4ddd124cb1e9d455f9efbb98a66b55697dc2f63de79e733f784277a2d8a1092222bbaf59f5f8e95612748298c619bc2e83cf41c5ff90c5b7cbaf8babf3edf63cccafb2e91410a26129bc2f73d651b2ae285393cdba9b55b22e7125650712751c7bd071867d7be8b976df75dc011015cbf952147740bfd1ba54935eef28decda4cc72864ba1ba54ee5fde7b0ffd5e59c95b46b5eabdd5ec818cea7da0fa2597146b218be9660d0e6ac5aa94edb1c8c1c33fea8e9cbdcddd1578dfcd00fc2028c394cabad08d2f484165c1455657262b9a3c21e3f3d501adfda53f4f2c2af37a5fa405deb3136b87354ef563c9ac8b78155a4174b18ac35912aca2743dbff4c35977be5a6ec2686d5d5ffab16f694c7266b8d6d43a33b7082ea0bf634a8bc2a827cd73a3fcdca1e0fd601a02482bd606d3913dc4ced8f6082723cac78353c26d46c8988c4ef180d8d47399bb230c03cf881a162e64e10c20783a2629e7c361ea7a439e8efb239e7a8ee75287f4f9c8f5d0e104fdae84660ba14aa944db21741d07899f26f1269acf12df94c0719deb456bac29e0b5470d0502e83f351d9aa890a0d4b43b88123f9ecd9360ebb7135eb20cd3c7f53dcc98e35c3140e30a9aa75915ca1d340c45b3d05f00d84cecfb31a8d0e4e7136a7adeb878d5f2177a02036cec6af345eb240ea2afc6ce11b1c5796d200fed019560f9066a03d7875f80842d6db3a0ab8d1fff40ed53cc38ab58413f9e26804de0e3bfedb8f90086dd071da5e10ecb4355a3422bd62e9130f53eb31d18a7d747065ce977b1e1c039b6adc9d164647b56e8e792dacd874a5bb15abd802008f38f4cbb0e7f01d55222367b040000",
    ],
    [
      "ETag",
      "LI+IrfzbDJHGDQBVVBMlQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1620694024143"
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
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb782db140adda844311d01a402ce5600c214b3b85eab65b77b71242f8efce5644a3267a6967a6df6cdf7bed0e9eb322010f96d9eaa542b93d59a1be374588aae25ad1ad148542b000355b11a94e27135eb65fb5df5bde866531b80d1e924da743848ad79833f0769066c81305dee30e0a9623adc5825779b1a83b0bf4b634c3691406e36bea7391987e3c1b0efdeeb00f7bebb89830cd1635ff8fb5f9de8227b10c314589458c464b29c513c63a303615cb4b8e0d252a19a3821aae1faca4a84a268568d0a4d1b4db8da6dbb2dd4bc76e394da74d241731d39928089e4d492068a1190fc5866c824b80ac4b729cd6d7571a6749edc494c138729d5ae05780b4a519c7c5df20095e33fa0e1fd82183ef1ccb4555e8233518def9bf1d47a17e1ed5f3a3fe0f42698aea8844c1a83f8dfcd1c470f383f7ee56a39a4841492a3421366de7e2ecdcb5df73bd12266b7a8fa7658516c48c7e8f9b4c839732ae70ff06b5ecaa977c020000",
    ],
    [
      "ETag",
      "s/PPlp3vtADbJRpnFJIYdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1620694024143",
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
      "00000002ff85547b4fdb3010ff2a91f70f686df368d2978458d766500d5296a620b44dade35c8a21894bec803ad4efbe4b42798c6d48959af87eaf3bdb7920373c8bc880847c755b40bef9702d42d220a0e80a5763dd09d38fd9d71bc71eebeef1e9af3e1c79f7070788e0254bd2749d40538a22672007f3596b958b624d73219a28d4340dbb69762ca3d3b70dcb36ed36122524f109cf6e907ea5d45a0e747d67de5a09b14a80aeb96c31913eadeb7796becec5353025f5d79e3ada48fd1dd7c34430aab8c80ee6334c5048c81790529e6086676a147e7aaddde2346dad107cc71950c64491a932174a3091c57c55e4952a193c902ae78b0732734fdc51a08da6732fd85bd2b4242ff7352ab5c522075924aaa12db1a99827b0e0d1b2aeac6fb42ffef4142b98e08a4a904bede2d8f55d4d5b4654c152fb5118461bb4436de88db5d70a134f9b7b9e3b0bb4bdc37dedc89fcecfb4cf97af30183d02a97856050f68984019fa71b893b77b5a12a8c2207571d1353ad4ec19fd300ebb2ceeb59d3036200c7b61d7a1edd0607d1bec28048a3c55aa572c9a89ccb6cd5edb8cdaa6d5a14ed761edd88a2d30fb86c1ba6dc389a2a8ef988c4564db20f7395730e6722d24af074c2efc49e02e027fee8d86815bb511531ce2b80e5736f132a7c22611f49fbeb665950b742a776be205ae3f1c059373b73e2027b0a26c33bbc52312d34402a2694e5350909f8a088746cea6b34930997ac3136454bb7eb6434832f8fef04c0836eb6acaaafa27e3b281ed0bc1739a1415e0ae7e209661194dc36a9a0ed96e1bff561afafef012dd699ed3cd1f35eca86397f4bff854f8eaad4ebaf33549e9f694826c7f6ef1d72078a96a75f26deefa97a45ef221861c32f6fe0942705578ffe3b0bba808c6ab8a3e52e13b1e58264b1796437d70795ae5add9a665764c8354e05cbda975edde6e874a8d521152c8d4634bf545ad2655960af904c2229e376fe21d61f537a78f6c072a050000",
    ],
    [
      "ETag",
      "f/5bm+nKk54D/EHMz9eGNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1620694024143"
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
      "c24014fc2fafd704121b840a1efc085508b6c60a8522b2262f6934c95b77379654f2dffb367ae8a1875e7667e7cd3c66f60aa7a24e610487223f37a8da871ccdda821875531acd97a45a23388046e4ac7cf1cfdfebf9ec2237f3773159a43a5a0c311f8f59a1934fac048cae901558a61a461f57a845856cdbef55bf9165a6959659aedec2e73066a2a2d412ab6d144da651089df3cb264fffb2ec3a078e7488314385758236855474c4c42c6d412d2a59a2aba951096ae8c5fd2057d448a1885c665cdf0b5c7f38f0864f813708fce091952525c21454b378bbe17060c88832a62f2e080316a81e72d7ac3f2f3d6d4bdcd1cee2bf66be9dedee0ba7ad41fdaa88e369b4c9bc5bca19d9e4861b19d5a00389e06f5e14e6f6ee7e00a4373064c3010000",
    ],
    [
      "ETag",
      "O1qzQDCvpSDXaAHdsLH6eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MjEsImlhdCI6MTYyMDY5NDEyMX0.CsjTo6AnQiJy1oX9eGlAth-k5LJDBU-H9KIJ8fisVI83F4xI0opF1oPANt5_PByJFPCZqCRl5rKfjJtsV2SspBLAaaptNSVAeiS7acI1rpL2XhCSMWJK3tWTHE7wGUvXDjxvKGAeByre6HHKaTX2enT9uQPVZ8NiZ1gA_q1n9BOiNtc_8YQekebB__uNZKpeS7FFxfyLKRrXXv2IYFy_VQVbXXu6N8jSLFzVot6QgVlo-QZismz8xK2fG-jZVv66s1NXl3JlDn74UUv3A08qr-8m0qjDp6NFSnvLnxlpb4taK_9O9G3NEsw6DA_XXpAmfGituok2Vhyz01S0HMQy-w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb642d0e4a8ca43b3e52156d950e086e322104f9d89001c140a777afd323bcf7032863bcebc8a3a9b9006f60a44b3c67735f9a36b931b1281c2d80520bb2c959684b98a2a890febbb1f988ebb2aa8264af8559da9fcfcec462141eb07d73a78b963a63ee6f731aa2d3252fbfbff69b06510a6b43d44924c4ee14602b71f1c076d0eb2f30cc71a98ec8711273e54e681aa052315407d63deec282bdee51d4eb6624ef8159d85b4cfae8132fed2119aee98e0fd913631dbacdea5eefaf4f2b1e8957546b01b140a8e9e829389a5325d737d5656006b89265cb3b52beb8c60ae319f8b793c728f92bc0e6b4e52df8fd03f9e3eae71a010000",
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
      "Tue, 11 May 2021 00:48:42 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-105-1620694024143",
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
      "0002ff85535d6fda3014fd2b91f7b80209045290d0ca68ba3141684328daa629b2cd4dea36c469ec505515ff7d374ee95a555a9f62fb9e73cfb91f79227722df92116122bdafa07cfc742b193921a0698aaff35f9f61ffb5c7affc9b4d78b9b94c7e388bfb87f11811a26629ba2b32682959951cd468bd6aa7a5ac0a5a4ad9c2442dc7eeb79c41d71e0c5dbbeb3a6e0f890ab2642ef23ba4df685da851a773146fa752a619d042a83697bb97f7cebedb294a790b5cabce5bcd0ecaa8ce07aa5f32c9a916321faf57e8a05250c6b0a322430fffa85b76f636775bd05d3b45f05e70a09ccb2ad7b52f4cc1659e88b42a4d56327a22c6e7ab0359f9737f1a595c66d52e8f73ba83136b4b358df56301d645b85c58b3e062192e26d16c19c4abe9777f31694f97f3f52258599bef7ee85b9ab20c0cd71a5b67e616e005f5b7a0b4c88d7a543fd7cacf1d9abd1f4c4d4069054d30f6ec01754eed214b98c793d35e9f25363076cabc3eed319b0f5d70b70c28f28ca861d15ce62e657dc77168ec74bd24766de6c40cbb1d7b5be60d6c0e89374cc8e1843c9442c3b9508554a2e910d984b3c88fa3701d4c27916f4a486895e9f3c6585dc06b8f1a0b44d07f6a3ad4512151a96ef72c88fc70328d66d77e33e139a4943faeee71c609cd14209a96d83c0de5426eb16124982cfc73049b895d1e838a8c7e3f91bae7b58b572d7fa14738c0daae365fb28ac259f0cdd83922ae695619c8be3990022ddf606de8faf00791b8a54d1672b5f6c39fa4790a21811272fef134116c021fff6dc7cd4730ee3eea288d775c1eae6a155e42b344c2d4fbcc76ba5d67e810032ef5bb58cfed1fdb56e7a833c20e72fd5c52b3f958692356a917100671fe8169d7e12f9430aa937b040000",
    ],
    [
      "ETag",
      "LZ+evB3cQEhWRPWPfJ1Mqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1620694024143"
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
      "4f82501486ffcbe92b2e30c462f3839a954bcd00e75673ee0a07c5804bf75e72e6fcef9d4b66addaea0b9c7378cee57d5fd8c1539247e0c222593e9728b6274b54f7baf05096a992742b782e110c40c596448e4db69ede8e7dcf7ae85ab2d99bfaa7e1eba6d52242862bcc18b83b88134c2309eee30e729621ad853c2db37c5e7506a86da1877ee0f547d7d4673cd2fd683218b43b831eec8de362c4149b57fc3fd6667b03d67ce1618c02f310b59642f03586aaaf6d4a961529d6242f4588122ab87ab014bc2c98e0bc46939a65366a9653379d0bdbacdb967d4664ca43a6129e133cf1492028ae58eaf10dd90487005195e438aeae2f344ea2ca892efba3c0b12b815f01d2162729ceff0649f08ad177f8c00e197ce758c6cb5c1da9abc15dfbb7e328d4cfa32edb41ef07211545754482feb0e707ede15873b383f7ce56a11c0b4e494ad4215aa67dde683ae67bae5daeb3a6f7b84a946840c8e8f7b84914b8314b25eedf00b2a0b1737c020000",
    ],
    [
      "ETag",
      "P0ajWKPSR1ZC1s7EWS/czw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1620694024143",
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
      "6f",
      "9b",
      "48",
      "10",
      "fd",
      "57",
      "d0",
      "de2fade48f050cfe90a2d4e7901e52827318d24bdb93bde0816e82597777c9c98afcbfdfb0d46973bdbb4848e09df7debc999df11379e0f596cc48c6cbaf0dc8c32ff722233d029a9578ead4b76ae15697c1214d2fef2f93f28fe142cecfce10c15b9662bb7d057d251a99839aa5ab412945b36752883e0af56deaf76ddfa1fe74449d913d7291a8a02aae78fd80f42f5aefd56c383c251f94429415b03d57835cec9ecf878fce702fc53de45a0d5fe61c621a357c25eb792572a6b9a8cfd2153a6814c835ec18afd0c377ea367bf7527bc0d96e5022f891e7c0f25c34b56e7da1442eea82978d34aa64f6448ccf1f3ec82ab80a1689b558a651f266c3762d79f3d662ca5aaf25a8a6d23d6b834515bc8235df6ebac8fec1ba8c97d71841075f9802b5b13efc16c481656d9446771beb7343a90bd6b9358f2eac97126164a55114ac12ebcdf95beb7dbc4c6fac5fef5e60d0fb1694e6b5719eb0ac82d6f5b7ee863f5f6a4b601a9d74c1f598facc9ed0695664e3bc98b85e5650c8b24936f6989bd17c3a82d13603863cddaa1b16ab453d2e3cdf63639b6ef16a3c70c1a5fe78bab51ddf2bfc4951e4508c983f9d90638ffc25b9860baef642f1aec3e4431c26c13a89d368314f025346c1b08b179db9b6881f7d6a2c1241ff53d7b18d728199daeb0aa32488e78b24bc0dba09b98292e587d5579c9182550a10cd24db8106792db6d83472b35c8549b88ce657c830d77e73422832fbf4f49d901cf6a6cbdabc49125ee31dcdaf6f8c8713e896558d413d761fc4a10eed53a76f7b89edcc6c77668f0694d28fe478ecfdb7f83c8ee777688849c90eff886191fea8a5ff4b56",
      "8337bf3af327173669b33d7b22c73f8ff8f4082e5aa74e7e4f83f88e7447311420a1ce5f1f2a049bc0eb7f18a7e54530ae2fe6c145d01c6738576d965c4237cb7c67fc766cdb715d6f420c58ea9f629e517e5eda56117650eb6f2575cb6b3ad5861af50cc2208e601446ef31fa374e6bc1723e050000",
    ],
    [
      "ETag",
      "2nVsC3lFEyUUFjFTgX/CrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1620694024143"
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
      "ff8d50c16a834014fc97d7ab82a662492087a6482b58494c430325848d3ead467d76776d90907fef5b93430f3df4b23b3b6fe631b36738966d06333894c5578f72b82b50af0c4850f5b5567c75d42a040b508b8295ebe9905541bcccb6efafcb8770552427cf5dcde7ac50e92736026667c84bac3305b38f33b4a241b6edf772dcc8323d748609e3b7e039489868283344bc89a2c74514c0c5fa65eb8effb2ec2e165474483047896d8a264527a9c25487a6a0124d57a3ada897292a18c5e3a090d4774212d9ccd8aee3dbae3f71fca9e74c3cd7bb67654da9d025b52cdeac391c68d2a24ee8c40561c2023942ee9a8fe7f7489b1237b433f8af996b66bbdbc2c5a0512d25713c852699734df94426b9e6465af668412af89b5f4a7d7d5f7e00716bdf66c3010000",
    ],
    [
      "ETag",
      "S9ydjENPdXWMP7IQgRw41Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MjMsImlhdCI6MTYyMDY5NDEyM30.bU06lHwgXUbyJTbe7Jy2CKZYMsBluvh56P9miq-1amsvapuQRtwve2IeQUQNo7VzzpoAAYVXabD_twgQ5Y4JeOzquCKf5n1xsAmZqrN0dRESveUlw3OUeke7qrdJC9fK17bxF4FLVXXt-be52io8wK8dqe7KQ5lt9yHKSGbhvFGcZGX67vP1r90_7Be5I8CGH78_TJ8z7iGLNziFY8oNXqLBvxOL7-n1ck--Ku8Jt2CslFq775DtXdtX-iI26NL4U-zK2SZAtten6EYifXWdrPv7poQbSdDqH_y4p0vvZ8GFARvHDG1zs_4Y_jfF_8FjBbiX3rWs4U0IePTXleo2yA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b7282300000d0bb642d0ef235dd9982a5c858cacf814d0642244141208068a777afd323bcf7037242a81078bc5d680bdec02357e09aac0fdd16e1aabc868a74c47c73b5ddc7a72a58ed5687c5228ae3d7c6685a816744d3d48fb2988c40a0ba309defe73e8b2c77d6d4f7b258781a97369a4de80bc2e5e6697c85cbae879aae67d1b96871ec28f779775313a669386d50b28bfbdc2b2a165612e3d2e5360579a20d4ad25e376787f66339dacda981567ae7fe7046f347e4b1be3e260bddd3bb5ca2ee7472d8d6ab5d02b328b6bb90497e65cbc3a413b3dd3f4bb00274e9f84005e62faeaa43b802ff763c3e3afa0a40341fe8007eff00f1c9ccf81a010000",
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
      "Tue, 11 May 2021 00:48:43 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-107-1620694024143",
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
      "c87b6c1320a109448ad628a56ba48474405a4dd3846c63a853c0149b565595ffbe8b69ba7693d6276cdf73ee39f7831774cfab14cd10e1f943cb9ae72f7b41d029620ae7f0aaa8b30ff711ad3d93f8bbe88487f589f7349f0382772c89cbba600329da863239db45c3bc116d8d1b21069068605bd3813d195913cfb1468eed8c81285991ad79750ff43ba56a3933cda3f83017222f18aeb91c5251bebd9b8f23b36ec49e5125cd8f9a26c848f313d5af85a0587151cd77113868256b1256625e80873fd4949c7fcc3de4b81ce6007ee494614a455ba9ce17a4a0a2ca78de363a2b9abd20edf3dd0145feda5fc60615455b5649854b766aa458e1443dd7ccb80cb71b63155c6ec3cd225e6d83245a5ef99bc570b95def364164dc5ef9a16f284c0aa6b9c6dc38d7b7002ea09f32a978a5d5e3eeb9537eedd0eadfc174049096ac0f26536b826dd7f24846a63473c76724b318212e999ee131b1a8e73027250c034f8b6a16ae44352164ea12374dc6a947126742b3044fec2c998e5c6ca7b6eb58cc458753f4d470c52eb8ac85e47d87d06db88afd240e77c17211fbba840cb785bae88d7505bcf7a8a04000fda7a64317e50294ba76af82d80f17cb7875e3f7135eb31cd3e7e801669ce1423240e3069aa758b31129340c058b8d7f01603db1eb6350a2d9cf17d4f5bc73f1aee56ff41806d8d955fa8ba2385c05dfb49d23e20617ad863cf6075483e53ba80d5c1f7e0112b6b4cf82beeffcf007ea9f4296b18655f4f3690258073effdb8e9b0f60d87dd0910aeeb03c54762ab461fd12715def2bdb1e8d3dcf451adca8bf638e3db18f6deb72741959c92af55a52bff950692fd6ca3710",
      "0461fe816ed7e137fc9be6a07b040000",
    ],
    [
      "ETag",
      "tc4jRjScp9/bEUS+iRp+9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1620694024143"
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
      "30",
      "10",
      "c6",
      "bf",
      "4b",
      "7dbb251b8ea14b78018a3a05e4cf78650829db6d0cbb76b49d0409dfddeb44346aa26fbabbdbef6ecf3deb9e3ce73c210159e6d9a602b93bcb408f4d30015531adf0510aae80580434cd90f4f96b5379e1ca9d32beedde6f7c96c3c3b8dd4642c52b282809f624cd81258a044f7bc26901d8160b56157c516716d1bbd214a7d1241cde625e88c4e4c359bfdfe9f67be4609d1a13aae9a2e6ffd1363f58642d96134841028fc16829a55843ac43b3a6a245c9c056a292312852c3f58b4c8aaaa452081b2bb6ebb46cd76f38fea5e7343cd73b47928998ea5c708467531448b4d0944dc4561953109075881ba7f5f982e53ca9373161388c7caf16f815406d69ce60f13788825714ffc30776f4e03b470b51717da26efa8f9ddfc6a1a99fa3ae3b51ef07a1345a7542a270d09b469dc1c870f3e3eedd9d063592029d54604c741defa2d9f29d775faf84f11abf1368598145628ad7e32ed724482953707803ccb076477c020000",
    ],
    [
      "ETag",
      "6nz5s4Ih1SlnwBJq6lieKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85546b4fdb3014fd2b91f705a43ed2f4955642ac6b03cb565296a640f7506b3b4e312471891d5085fadf77e350a0631b52a4c4bee79c7beef5751ed12d4f43d44784afee72966d3edc08822a8829bc82ddf6f7c4990f475fe5e995233b0ff5a07785bf0c8e8e00c10b96c4c93a665529f28c32d99f4d6bab4ce46b9c095105a16ac3b4ab8d8e65767a2dd36a355a4d204a1647639ede02fd5aa9b5ecd7ebbbe4b59510ab98e13597352a92e7fdfabd555f67e2865125ebfb39eb9046d6dfc97a1c0b8a1517e9d16c0a0e72c9b2054b308fc1c30b35241ff7b56b1c27b51580ef3965985291a7aaf0051254a4115fe5995645fd47a47dbefa405367ec0c0363389979c1c112270579796860692c16199379ac2ac6128a8a78cc163c5c9691f5ad71e24fce20020eaeb16472695c7e767cc730761ac6cfdc349bcc383606dec8d8d7703d63e679ce34300e8e0f8d537f323b373ecdf730603e6452f1545b0f30895961fba9bdeedb532d0858819532b8e89a1ddcb0cd1e8948974676b34d22931162936e1b3789497b2dd60a09c3c05385ba66e154a4d4b29ba44d6c665b61272261db24dda8d1b38819da366d52d6ea74cd6e2344db0a7ac8b862232ed742f2b2c5e8d277036711f8336f38081c5d4684a18da3d25c51c46b9f0a8a04d07feada16512e2053715eae1738fe6018b8174e392263b6c27433bd832189702c19a0718613a658762642681a3a9f4cddc09d78833130f4b99fef1012f57f3cbe1082cd5a7759e9373a194f0641a7a51dec201738ce35e6befc408d5a1b10dbcabf6506be3f98436a9c6578f3470ccae968fa5f3268bc5e95369f33a222db6e65a1edaf2d3c150477aa5447df668e3f47e596cf2296b194be3f3e00d681f7ff0dbb7b0a60b8a990472a58c3b4525964a1192ba79627da6fc96e582dbb69210dced49b58af67ee8ea7d0281459c252f55452794f75a78a502e9f41108461f35cef14a2bf01e58eb01d29050000",
    ],
    [
      "ETag",
      "5ZmEYCDKsGXEs6w/T9XaJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1620694024143"
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
      "41",
      "6e",
      "c2",
      "30",
      "10fccbf69a480945a845e2500a6a912244d3a21e1042c62c69c0c9067b03a2117fef3a70e8a1875eecf1eccc6ac60decf372037d58e7d9a1467bbecb90df3c48d1d5869d5c15950e21006495891247a51df1ec733f3a1aa7bfe7099a437d1a0c44e1f417160afa0d6c73341b07fd4503a52a506cab956d378a8ccf956726d38ff1cb3815a2a08d27a6f324791a2663b804bf6cd5fe5f96e525801dad53dca2c552a34f5159daa1e6892fe85451190c1dd556a38356dc0e324b75a52c51284c18470f61dceb44bdc76ed4e9c6dd7b511ad28a732a453c7f9770c0c4caa4749282d011816da174ddb6e7b1a57d891b5a7afcd72cf6b3e56de1f0cce86696249e439f2cbaa67c269f9ca511db1a03d04abef935e7ebfbf20351487258c3010000",
    ],
    [
      "ETag",
      "eDnrDtPWkDvlsczULelquw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MjUsImlhdCI6MTYyMDY5NDEyNX0.enwdsqZSFTlzlbki4MfAinLt-cQEmwzvE5bDKBpSt2mIcU0L1HBnOzYzTor9M3dS_STtQ0M9-rrv2xT-8IZFUnCQrnp7QtTV_rFuEc9L4SSFJtOV8ZIEQMalGNcJxowV0iVq3uTY81AHoINLAuFGLjiHrObszrSlOgZR0fgK0BSCiCNxSTC_Qmhwrz2gE1ZRdjGXo7dxoDHy9lvR5R-nwmAkBo_Ib79cBce2AH1j9JkbS7gU3eqQ4SCpOR9KYgV8fMuoBT3YCI95C06quAMSYkstyESwZREhoGFFaj5dmTX34Z1e5ULbnx_Yr0GEDrtdOXonb3j-sw6h0Pna3qRy6w"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7fc9591c362bf4666419a088a0b4c085014c58943510433bfdf73afd84f77e405614889074eeefa803ef60cd44755b6c9d4181698975f19b63cb2d8036ab2d9b2597ce380b4417cc76203931288af2c72484f8535925f59a89e3c1e73a39607e856ed8919e17d16fb53ccec7c6092bafda47c50813211134f77e3c9ab5fe0535649d89d3f7d40a69669581529a754297838d3d2b2d0bd39aa487c4b7cca6b38e9a1de76135f575889fd70b94178f6a1fa57b3290db1c4ff918f3783cb078885a9fc84ec09a9c7fbbf3c90c17da2972134a7bb001880df584485abfb8d24e5537e0df9eceeb805e011065139ac0ef1fc582a3261a010000",
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
      "Tue, 11 May 2021 00:48:45 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-109-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d6f9b3014fd2bc87b6d1292100291a2354ae8ca94908d9056dd3421e35ca83bc0149b4e5595ffbe8b69ba5695d6276cdf73ee39f78327f29b9707322309cfee1ba81f3fdd89849c115034c3d7d5884defd2d18df9151a2597c342feb8de2fe67344f096256951e5d093a2a919c8d97ed7cf6ad154b416a287897a43d3ed0ded9169bb9639b286d6188912f274cdcbdf48bf55aa92b3c1e024decf84c872a015977d268a97f7c1c36850d5e20e989283b79a039491830f543fe78251c54539dfefd04123a18ea1a03c470fffa887e4fc6dee3ea7453f43f003674019134da95a5f98828932e55953ebac64f644b4cf5707b2f3d6de323298c89ba28c4b5ac09971a08ac6eab102e322dc6e0c3fb8d8869b45e46f8378b7bcf4368bfe72bbde6f829d717de9859ea1689283e61a73e35cdf02bca0fe01a4e2a5568fdae756f9b943fefbc1b4049496d005e3a969d3a163ba499a4c59ea8c27496a429238c97442c789c95c0bac430214795a54b368893533979ac9d08d6162d9b1e5303776529bc68e0bcc998cdd71ea58e47846fed45cc18acb4a48de75885c877ee4c551b80f968bc8d325a4b4c9d5aa33d616f0daa3c20211f49f9a8e6d940b546adbed0791172e96917fe575135e4346d9e3ee1e679cd25c02a2698dcd53506fc4011b4682c5c65b21584fecdb2928c9ece713697bdeba78d5f2177a84036ced2afd25bb28f4832fdace097145f346431eba03a9d0f22dd686ae8fbf10895bda6521dff75e7843baa71052a8a1641f4f13c13af0f1df76da7c04e3eea38e5478c7e561b2556135744bc475bdcfece168623953a2c1b57a17b36df3d4b636479b110a28d57349dde663a59d58235f4018c4f907ba5dc7bf50a805e57b040000",
    ],
    [
      "ETag",
      "D2c7jf2Y0JeutsC1msZWUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1620694024143"
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
      "d1",
      "4e",
      "83",
      "40",
      "1045ff657ca509554425e903d556ab6dad14138d31cd16064a050677174d6dfaefcea256a326fa0233c399e5de0b6b78c8ca183c9867e9638d72b593a2be324580aaceb5e25b45a542b000b548993ca1f8a6ff32b9f52bddcdce1717ddd19282b4d36142450b2c04786b4832cc6305dedd1a4a5120af4594d745396b3a0bf4aa32c369180cc6a7dc17149b7e7c3d1cfadd610f36d67631165acc1afe1f6bf71b0b96340f3041896584464b256989911e189b4a14558e2d45b58c504103370f5249752524518b27adb67dd46abbbbb67be4d8bb4edbd96332a748e88c4a86afa72c1034699107f4cc36c1654036253b4e9aeb138fb3b87162cac138749d46e05780b525598eb3bf4116bc10fc1d3eb0f70cbe73a2a0bad45baa3fbcf47f3b8e43fd3ceac40f7b3f08a539aa2d120e46bd69e88f2686bb7ff7de5d695413499ca4421362db760ef70f5cfb2dd7633259f37b3c2d6bb42012fc7b9c651abc44e40a37af5f64c1b37c020000",
    ],
    [
      "ETag",
      "DodXFzPYAptBiJhKBMjoRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1620694024143",
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
      "0000000002ff8554fd4fdb3010fd5722ef17d0fa91f4234d2b21d641c63a9514d21484b6a9759c4b31a471b01d5087fabfef9250a0820d296a62df7bf7de9dcf7d24b73c8dc880847c7997835c7fba1121a911d07489bbe7b1f9d99ba4bdf33f3f44ff2166810c5c78383840042f588aaeb204ea4ae492811acca68da5147946a510754c54b72cb36ed92dd3ee77cc56c7eab491a82089c73cbd45fab5d6991a349b5bf1c65288650234e3aac1c4ea79bf79df6a6652dc00d3aab9abd94419d5fc40f530118c6a2ed283d9141de40ae41c569427e8e1851a855f767337385d359608bee70c2863224f75e10b533091c67c99cb322b193c92d2e7ab0f3275c7ee51601c4d665eb0b7a0ab82bcd837a832e673092a4f74cd586051314f60cea34515c96e8d6ffee41423e8e09a2a500be3f2bbebbb86b12840bf72d36c33e3d0187ac7c62e7fe41933cf73a781b177b86f9cf893d999f1f56a0783c623509aa7a5ed80860914969f5a3b7a7ba205816ab45105e73dd3a69663f6c338ecb1d86977c3d8843074c25e97b64393f53bd08942a0c8d345f692455391864eec98511b6c2b72c08adb0e05d6b76dc7896d843b3d3b664ebb076db2a99107c9351c739509c5abf6924b7f14b8f3c09f7947c3c02dcb8829b6f0b8325714f1daa7c62211f49fba3645940b542ace6ae405ae3f3c0a46176e351e635852b69edee180c4345180682ae90a34c8531161d3c8d9643a0a46136f38464679e6675b8422839f8f2f84609d955dd6e5bbd0b23ba5fe16704193bc44dc571fc4ea92cda6f6ef1443df1f5ea12c9592aedf4fff6efe125fae2a8bcf7aa450dbae5a64f37b834f8de05daab293f399eb5f916acb871824a4ece3d1417019f8f83f617b3f118c37147594c6354e2a53850a93504d2c5f957e2bb6d5b2bb769f9460a9dfc4f0777b34458e2223ac20d54f2555f7b3ec5411cad53308833868dec83bc1e85f45de511d21050000",
    ],
    [
      "ETag",
      "Qf0+NOn7QzJo9wfcTrTEew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90416bc2401085ffcbf49a40124568c08386d08a226d1aa15044d638a6d124b3dddd5882e4bf7776f5d0430fbdeccebef966786faf70aeda03c4b0afcaaf0e55ff50a279b54586baab8de64b52ab113c40234a26937c89ea3da56a2397f9bc5f64229944b3e994095d7c622320bec2b1c2faa021feb8422b1ae4b1dd4eb98d8c995e5a65b1ced3a73463a1a18315d69bd56a365fa53078bfc6e4f95f23dbc18313ed333ca2c2b640eb422a3a61611636a0168dacd1d7d4a9023538d8354a459d148ac867c50fc3c00f275130791c07d1381c8f98aca910a6a296e1cd1b9b034346d4197d7340881850aee4ac47775e581eb9101707586f7ff742dbdbde17ce7b83fa4511dbd3689d0537970959e7861319d5a10785e06f7eaecced3dfc0043e9a974c3010000",
    ],
    [
      "ETag",
      "CTKerXEoiUpKTByIRaC62A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MjYsImlhdCI6MTYyMDY5NDEyNn0.Zn4Go6FRU7BfnKWFVgnJmAob1pEKd631PYy0z5JtTRRudxxSSCM5urMcxCsfnZWgk5ZmeYEXi0_YyH3bytvDJp05ZNK75fP2oOmV3y-IU-EjFdlgklGFAH-Odu6WhjUgcdH7yDi4pcZJePGZ3h7GexslGOoas5-S-eS8_UQnfhItYeT-_tCQMaCAzK-fgBdkx4FYUrCw7tuM7KZcRq_rl5bXXlW_Xj8LQOiilLBA5HcA7sGd9PKxVpD3TrCQNrlJAz-vssVHJuSmhSjgccN2jt8gEVfkWzXJ92v5jEdZ2qiaLyaBtBfYjNOFJIipmQfulFhC2_hVFAuGdkqj-CEfnw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "41",
      "72",
      "82300000c0bfe4ac8e3688d25b4314118720425bbc6430266001b1215142a77fafd327ecfe809c31de7554b515bf825760f21767c226c16d8968c1506f74547d25d82bc5497b9007653d2dc703e67211b94195889517954bba144e1ca616ea4a53af1ff0dce8dee9df562449cd5484b64f6aab1061637512ed3a5579d4cf94bd694ef30c8dcf8bc36cf3591ea195d9096624895bfc3dd70b4c8a99e409b9aeb65be721c6b96560edbbdb70c6e0fea8dae163676b6d363bb85f0b3514dc76e5a5a1d3fb1a15317cc7d950f841aa6d37c6325584b4eace223002bcbf5d24efe8e5c98573c719817f3b55e6c69f0188e7924bf0fb078bd8c20b1a010000",
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
      "Tue, 11 May 2021 00:48:47 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-111-1620694024143",
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
      "64f6d5b640292d4d9ab5a9a8cdb674a554d76c3664661870141864068d9afef7bd0cd6d598ac4fcccc3de79e733f784177bc4cd014119edd37ac7efa762b083a424ce10c5e0bf362622bb578fe71ed8afb5fee8feaf9eeec713603046f59121755ce7a5234356572badbf6b35a3415ae85e841a29e65593dcbb54dd7734cdbb19c211025cbd3152fef807ea35425a783c141bc9f0991e50c575cf6a928dede070ff6a0aac52da34a0e3e6a0e40460ebe50fd9e0b8a1517e56cb705078d6475cc0acc73f0f08f9a90e38fb9fb1c17fd0cc00f9c324ca9684ad5fa8214549429cf9a5a6745d317a47dbe3ba0adbff217914145de14655ce2821d19095638564f15334ec3cdda5806a79b703d8f969b20de2ecefdf5bcbfd8ac76eb606b5c9dfba16f284c72a6b9c6cc38d6b7002ea09f30a978a9d5a3f6b9557eedd0f2f3605a02484bd605e3b1e9626b627a2425639a4e8623929a8c9009198ff09098d4739893108681a745350b97a224b6631277348c4713d3899d6464c784ba493cf25c3bf12643e2b90eda1fa1c79a2b76c2652524ef3a84aec265e4c751b80b16f3c8d725a4b8c9d54967ac2de0bd47050502e83f35eddb2817a0d4b67b19447e385f44cb4bbf9bf08a65983e6def61c629ce250334aea1798ad56b9140c350305ffb2700d613fb79084a34fdfd82da9eb72edeb5fc8d1ec1005bbb4a7fd1360a97c199b673405ce2bcd19087ee802ab07c03b581ebfd1f40c2967659d0c5ce0faf51f714b294d5aca45f4f13c03af0f5df76d87c00c3ee838e547087e5a1b255a135eb9688eb7a5fd9963db63c0b6970ad3ec59ce1e8d0b636479b9115ac54af25759b0f9576628d7c",
      "034110e61fe876edff024823e04e7b040000",
    ],
    [
      "ETag",
      "m0Q82ttCzKY6oqX6KpzkGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1620694024143"
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
      "dd4e83401085df65bca50928524bd20bd4aa8d5895527f624cb3c2d0a2c0e0ee62d3347d776751ab5113bd8199e19be59c032b78caab147c78c867cf0dcae5d60cf5a52922544da115df6aaa148205a8c58cc928cc52fb3a78eadd48ea9ef77ae2f40a6f17fd3e132a996329c05f419663912af0ef56508912792da1a229ab69db59a097b5198ee368383ae6bea4d4f4a3491806fbe100d6d66631155a4c5bfe1f6bf76b0b1ee921c20c2556091a2db5a4474cf4d0d854a2ac0bec286a64820a5ab87d3093d4d442127578d2711ca7e378dbb6d773ed6dd77177982c28113aa78ae1c9980582262d8a88166c133c06645bb2e3acbdbef0384f5b27a61c8e62cf6d057e05585b961738fd1b64c173c1dfe1037bcfe03b274a6a2abda18ec2f3e0b7e338d4cfa30e8378f083509aa3da20f1f06c308e83b30bc3ddbf7bdf5f6a5417923849852644c776f776bb9efd96eb0199acf93dbe960d5a9008fe3d4e720d7e260a85eb57ca945a5d7c020000",
    ],
    [
      "ETag",
      "RLfd0WAk9Xro7O99aKVeYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1620694024143",
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
      "000002ff8554eb4edb30147e95c8fb035269d334b46925c4ba12ba4e90422ea06a9b5ac7718a471287d86162a8efbe6387021ddb902a35f1f96ec73ece23ba654582462866ebbb9a560f1f7ef018b51095780dabd1afe0e2cbf4de3c4d18766f83a9e3b3c1e2f2e808104cb104cecb8c1e085e57848a5114b4d715af4b5c717e004207ddae75d0ed5b667f689b96ddb57b4014344bcf58710bf41b294b31ea74b6e6ed35e7eb8ce2928936e1f9f37ae7deea9415ff4189149d5dcf0ed888ce3baec7192758325e1c450124a805ad9634c72c830c2fd424feb8abdd66386faf017ccf08c584f0ba902a1748105ea46c5d575a158d1e91cef9ea0105ee993b098dc93cf2c2bd15ce1579b56f60612c97151575265bc60a9a4a5946972c593595f2d638f5e7e7508104375850b132ae3fbbbe6bbc2cad8c6fb569f688716c8cbd13635765e61991e7b94168ec1def1b537f1e5d189f163b18889f502159a1c38738cea80afeb4c1b3b7e7aa08588273535c0ecc3eee3ae6304ee301499dde619c9a348e9d7870887bb1498636b5939862e049a5ae59b8e0c5c08a93840c30b11227e99364680e0e2dd3eae39480a663dba0d68fbb8768d3423f2b26e909132517acd96474edcf427719fa91371987ae6e23c5b091274d38d5c4eb9c129a04d07ffadaa82ae3e0a44e6ce685ae3f9e84b32bb7199233bac6e421b8833149712628a07185732a6975ce13d83474310f66e16cee8dcf80a14ffe628b1068f4f5f185103e947a97a5fe4741e8cfbca90eb0455ce1acd690fbe6018d4bc88a369bd6bf65c6be3f5e8035ae2afcf0470ddae9db8afe170b8dd76f4dccad651729b7ed9b8536df37f06b21b8558d3aba8c5c7f819a259fa6b4a205797f7c00ac0bef7f1db637557d7c02e52324bcc3b412a15c48459ba965b9cedbb0bb96d3732ca4c1957c53b387cef678948652a4392de4534bcd4dd53ba54ab57806411186cdd327b5f90d0b3f70812b050000",
    ],
    [
      "ETag",
      "UzSPJGv0FdiaEkSG8Ri7YQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1620694024143"
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
      "4f",
      "4f",
      "83",
      "40",
      "10",
      "c5",
      "bf",
      "cb",
      "78",
      "8504101b4bd28335441b492368f5604cb3c014297f66bbbba412c27777c01e3c7ada9d37bf79fb6607a8ca368700d2b23875a8faab024d3c5d12d45d6d341f925a8d60011a513059c7a7d4abfcf7b6c2b7f3938897f1cdf76db15a31a1b32f6c0404031c4aac730dc1c700ad6890c7f67b353b32667a39299bed6bf810262c34944fc276174577eb2884d1fa3326ab7f8d7c8e161c294df0800adb0ca71452d11133b39916d4a29135da9a3a95a186199e1b85a24e0a4564b362bbae67bb0bcf592c7dc7f35dff9ac99a32614a6a19debd70383064449dd0991704072ef5ba37a89f15b1bbc6fcd261cb7b9a1e361cc8a80e2dc804ffd263697eebf10763890aac82010000",
    ],
    [
      "ETag",
      "lQqb2k4WnkeVwKaQ9Q5x8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MjgsImlhdCI6MTYyMDY5NDEyOH0.gP1mYSVI7stCNKN8D2heoX-qejqRng_avxW2Qrrv6f-CtCH95W26yu_x6RkcyfiJyjrgNU1Q6h4I6gXDmxZDIldFI29B4bPtRUdr8u_iafhKa_pj4y0J8232jU8GJi3dHGPikHEOcklOsyT1_6wRI8aRqqmZ-ZT8o_tKofWj-cWacLwec2085rW2F8EsseRbsIIOKzpsRw21ZDkYBRU948INEsBuEoZyFRngDOYDPUYQgXBSDB_fUk2E-JZH3r1Yrjqn0_HZvUFmlHdQFPRSnHG2JKSWEUWHRW5bMkVDtNTCA4rSDH4iLQuU7BRPw_Cnfw9SkS8RpecKRhGM_0J-kQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dd0db7243400080e177d9ebc88c534bef1c4a9449a40e8b9b1d368b248b75488a4cdfbda66ff07fff0be4189371445377272df8004b2ea87bbc7799a2a30a0b159e6285de0f5ecda69617e265eafb2982a58dd582f1816bea616a45a7eccac2399f4f44d296cfee8d720f156a99705b0727b53da4283f869dafd5b33bb86711121aad46993a7926cf12e3ea24599bde6b5033c38798445ae17a0663ee37a5cabb9728d85b82ca62ad1ffa2d3c5702de52fb668d29279af1dd7ff20ee42fce570a915a26bc94b2c42884ee76e96aed489fa329c930b08a1897c741043b4066761dc888ae1b5794557507feed685a18d906e8241fc8007eff000b2188421a010000",
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
      "Tue, 11 May 2021 00:48:48 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-113-1620694024143",
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
      "9b3014fd2bc8fbda24bcf22052b446095d9912b20169354d1332c650b7802936a9a22aff7d17d374ed26ad9fb07dcfb9e7dc07cfe88155299aa384e58f2d6d8e9fee79822e10953887572bf4786398775f8ffee32db6d7473f35aca7c50210ac63095cd6051d08de36848af93e1ce60d6f6bdc703e804403c3b006c6c4d4278ead9bb6615b4014b4c836ac7a00fa9d94b5988f4667f161ce795e505c333124bc7c7d1f1dcc51ddf07b4aa418bdd71c818c187da0fab9e0044bc6abc53e0407ada04d4c4bcc0af0f0879a2697ef730f192e8739800f8c504c086f2bd9f98214845719cbdb466545f367a47cbe39a0d0ddb8ab4823bc68cb2aae70492fb4144b1ccb634db5ab60b7d53cff6a176c9791b7f3e37075ed6e97c3d56eb3dffaa1767bed06ae26715250c5d516daa5baf97001fd940ac92aa51e75cf9df24b87bc7f07d311405ad03e184ff5093666ba9364c99464336b9c643a4d9259321d632bd18963533b4d28069e12552c5cf1ca34c6333d9d4e63334bc6b16da769ec385616dba63599d8994d327d824e17e8a96192ae99a8b9607d87d06de0456e1c057b7fb58c5c554286db42ae7b635d016f3d4a281040ffa9e9d4451907a5aedd9e1fb9c1721579376e3fe10dcd3139868f30e30c1782021a37d03c499b2d4fa161c85f6edd3580d5c4be9d8302cd7f3ea3aee79d8b372d7fa54730c0ceae545f144681e77f5176ce881b5cb40a72e80fa806cb77501bb83efd02246c699f057ddfbbc10fd43f0534a30dadc8c7d304b00a7cfcb79d371fc0b0fba02324dc617988e8544843fb2562aade17b661ce9cf118297023ff8e39fa74766e5b97a3cb484b5ac99792facd874a7bb156bc822008f3f755bb4ebf014d0c9abd7b040000",
    ],
    [
      "ETag",
      "3SIor12hJyNqWa4DyNd13w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92414f83401085ffcb78a509588a4ad203d5aa35b5da422f9aa65961401418dc5dd4a6e97f77166b356aa2179819be59de7bb086c7bc4ac087bb3c7b6a50aef632d45353cc503585567caba9520816a01619934d45f39bc1eb857316f4627a3c0cbddc0ea7fd3e132abec75280bf8634c72251e0dfaea11225f25a4c455356cbb6b340af6a330ca3d96872c67d4989e927f3f138188c87b0b1768b89d062d9f2ff585b6c2c78a0bb19a628b18ad168a9253d60ac47c6a612655d604751236354d0c2ed834c52530b49d4e149c771ba1dc7dbb7bd23d7de771db7cb6441b1d039550ccf4316089ab42866f4c236c16340b6253b4edbeb338ff3a47562cad124f2dc56e05780b5a57981cbbf41167c2ff83b7c60db0cbe73a2a4a6d23bea747c15fc761c87fa79d449100d7f104a73543b241a5d0ec328b8bc36dc62eb7db0d2a8ae2571920a4d888eed1ef60e3cfb3dd7633259f37b7c2d1bb42016fc7b9ce71afc54140a376fc943840a7c020000",
    ],
    [
      "ETag",
      "unoUZBxJ1GA5cok8S6i0SQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1620694024143",
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
      "0000000002ff85547f4fdb3010fd2a91f70f686d93a6e98f5442ac2b19ab5452485310daa6d6769c6248e2103ba00af5bbefe250a0631b52a4c4bef7eebd3b9ff384ee7816a121227c7d5fb262f3e95610d4404ce135ecdea42c7a4ccd0e1977c8fdf5c5e3e7dc33d5e8e80810bc62499ce6096b4a511694c9e162de5a17a2cc712144131235db6da7d9eed956cf752cdb693b1d204a96c4539edd55e995cae5d03477e2adb510eb84e19ccb1615e9cbbef9609b79216e1955d2dcd73441469a1fa81e278262c54576b498838352b262c952cc13f0f04a8dc897fddc2d8ed3d61ac00f9c324ca9283355f982145464315f9785ce8a864f48fb7cf381e6ded41b87c678b6f0c383154e2bf2ead0c0d2582e0b26cb44358c151415f3842d79b4aa23f99df12d989d41041cdc60c9e4cab8faee059ef1bab5327e9696d5a1c6b131f24f8cfd2c13df58f8be370f8d83e343e334982dce8dafd77b18b01f31a978a6cd879824ac32fedce0c9fb73ad085881721d5cf6ad1e6e0f2c97c4a44fe341a74b628b113220fd2eee108bba0e7322c230f054955db37026329760abdb8f188d00d58d1c6a3b4ecf2536715cbb837bddbedd1fb4639ba16d033d165cb1132e732179dd6474154c426f19060b7f3c0a3d5d468ca19127b5b9aa88b73e151409a0ffd4b5ada25c80527562133ff482d1389c5c7af5904cd91ad3cdfc1ec624c6896480c6054e9962c59988a069e87c369f8493993f9a02439ffcf90e21d1f0c7d32b21dce4bacb4abfd13c0c26fea936b0435ce2a4d49087fa03e11cbca2edb6f1ef34a320185d83342e0abcf92306e5f49c8afe17098dd7abdae64eb28d2ab5ddca46db5f5b781a086e559d1d5d2cbce01ad55b018b59c132faf1f80058073efe3bec6e2a80e1ae828e54b08669a5b252a105aba796a7da6fcd6edb6edf1d200d2ed4bb983b7077c753e5a832b29465eab9a4faa6ea4e55a152be802008c3e6eb93dafe0651ccfb162b050000",
    ],
    [
      "ETag",
      "hmedwm/3bC3bqYQw+pE/tA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1620694024143"
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
      "00000002ff8d90414fc2401085ffcb786d135a6a1349385843040304abc483216459a6b5a5edd4dd2d0649ffbbb38b311cbdeccebef966f2de9ee150347b18c1aec83f3b54a79b1ccdb32d52d45d65345f2d351ac10334226732994e631c66e1a27c4ad6df8bd570f756c97c3c6642cb0fac058cce901558ed358cdecfd0881a796cbb556e2363e6d45a65b67c9d3c4e52166ada5b61b99ecfef93f9047aef6aac3dfc6b64d37b50d22ec50c153612ad8b565189d2cc6c402deab6425f53a7246a70b06be48aba5628229f153f08223f88c3417c170dc22888864c56248529a86178fdc2e6c09011554a5f1c104206942b396be6ce23cbb72ec4d101d6db752ffeeb05b6b7f95d989c0cea9522b6a7d13a1b5c5c3e90756e3891511d7a20057ff3b4309777ff03dbe276dec3010000",
    ],
    [
      "ETag",
      "BHH6e3f2MjJBUzMP3bWlcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MzAsImlhdCI6MTYyMDY5NDEzMH0.W--89Oih84NP2w32WLa_SgfifrAaaV_Zddb9xILXE9lyizgB9zcBcmCVoSo1j65dA1P-7ZWYrW96f9c5iZMW-5kXB6U2p0iOa3BiEV_a73F3vTZvd3OL5ag76dukPajmfxKxz-_6HmR2z4VzVfgAGLNfF4Q7uvPeZ94RAytI9DfIZ_h5p2-2gDsUbil0TxTIbyubSSqPG63Xpbmx5oQueFasDGWfTFYahkHAM0Shw2v5jDKiy2LC187QyofmHgbg0Ekhb26gOw6f1UvAt7u_m8dw1-DafdKdaD61eSfyPvdqYvXljh8gTOxhRFuJzxpmeDTh52-0hVhKqUMqTrXlsQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff1dd0cb7282301400d07fc95a1c0141d39d82280a581e02c38609e4623542c353a1d37fafd34f38e707913c87b64dbb6f0615fa402391f03c9f9ff87a9b5e4129a3883c5cb1ac76dec6d6835537f13be1445a5b7a5ba9916042b1bd88d4f6f68fb1eff481fa570d8ebdf3b00c9c5986a90660602a94c2697c46c6e05ffc665197ea6010536ab05cd4a63b9dad559057716666b55f1c527a64939790f1ec2f96112d44782a77a7f5f6939c1249f0080bbf0e4b9769b1ef2da6983a7453867c19ac456930192394476415c6bb566fe8a76e6b5dd24322e3a77abc6b1a4333042f7e6ba04d6f6faeac603c43fff6b41b39bc03b6401a68d0ef1f8279f5431a010000",
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
      "Tue, 11 May 2021 00:48:50 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-115-1620694024143",
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
      "000000000002ff85536b6f9b3014fd2bc8fbda24903791a2354be81a29211d9076d33421db31d42d60629bae5995ffbe8b69ba5695d64fd8bee7dc73ee832774cf8b1d9a20c2d37dc5e4e1d39d20e80c318d53784dfee4d7fc8b2bf7a3abd5e3e3412e88f33d9c4da780e0354be1bccc584b894a52a626dbb09d4a5195580ad182442dc719b49c61d71eba7dbbdb77fa3d202a96252b5edc03fd56eb524d3a9d93783b1522cd182eb96a5391bfbc771eba9d528a3b46b5eabcd5ec808cea7ca0fa3913146b2e8ae93604079562326639e61978f847dd91f3b7b9db1ce7ed14c00f9c324ca9a80a5dfb82145414094f2b69b2a2c913323e5f1d50e8adbc7964519155791117386767d60e6b1ceb43c9ac8b60b3b696fec52658cfa2e5c68fc3f9a5b79eb5e79bd576ed87d6cda5177896c62463866b4dad7373f3e102fa3ba6342f8c7a543fd7cacf1d5abe1f4c4d0069c59a603cb287d819db2e49c88826e3de80243623644c4603dc233675fbacbf230c03cf881a162e44e1f4dc5d978c9338497a49dc1f912476896bc7ae4dba23b7cbc60ec1e878867e4baed982ab5228de7408dd04cbc88ba360ebcf6791674a487095e94563ac2ee0b5470d0502e83f351deb2817a054b77be9475e309b47cb6baf99f08aa5981ec23dcc38c1996280c6129aa7995c8b1d340cf9b3b5b700b099d8d529a8d0e4e713aa7b5ebb78d5f2177a0403aced6af34561142cfdafc6ce09718db3ca401e9a032ac1f22dd406ae8fbf00095bda6441dfb65ef003354f014b986405fd789a0036818fffb6d3e60318761f7494863b2c0f55b50a95ac59226eea7d663b3d7bd01d200396fa5d6c341c9fda56e7a833b29c15fab9a466f3a1d246ac522f2008c2fc7dd3aee35f4eb998a97b040000",
    ],
    [
      "ETag",
      "fzmViB9rq7PLxxyrDb1XSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1620694024143"
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
      "df65bcb4448aa568132eaa2012f9a74483216469a7506cbb65778b21847777b6221a35d19b7666facdf69cd3eee1254a037060112d37398addd912d55017239479ac24dd329e4a040350b125911795752339df8a60e3e7adcdb4ff34ad3d3c0eeb7522a4bfc28481b38730c23890e03cef216509d29acfe33c49e7456780da657a38f646ed5e8bfa8407baef4d3a1df7a6d38483715a0c9862f382ffc7daec60c09a2f4618a2c0d447ad25137c8dbe6a6b9b9225598c25c973e1a384022e1e2c05cf3326382fd1a4649ad5926957caf6b555ae58a6754964cc7da6229e123c199340505cb178c45fc926d80488a224c76171ddd2380a0a27ba6cf73cdb2a047e05485b18c538ff1b24c12b46dfe1033b66f09d6309cf5375a2ee3a7df7b7e328d4cfa31aaed7fc414845519d10afdd6d8e3db73bd0dcece8fd66a7500e04a72425ea10cdb27555add9e5f75c6fb9ce9adee32891a3013ea3dfe33e52e0842c967878036166c6377c020000",
    ],
    [
      "ETag",
      "/2jDm+vrdqcuGqZOXZ7KWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1620694024143",
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
      "7b",
      "6f",
      "9b",
      "30",
      "10",
      "ff",
      "2a",
      "c8fba795f200420989547559ca3ab4967484b4aab62931ce41dd124cb1491755f9ee3ba0e963dd562952c0f77bddd9e681dcf26c498624e2c95d09c5e6c38d88488b80a209aec2d7f1cddd749cffb2eda9e5adc14cac2be7fef01011bc6249baca53684b51160ce47036ed248528735a08d146a1b661d86dc336757b60e9a665583d244a48e3539edd22fd5aa95c0ebbdd9d792711224981e65c7698583dad77d766372fc40d3025bbaf3dbb6823bbefb81ea58251c54576389b62825242318715e5296678a62ea38fafb53b9cae3a0982d79c01654c9499aa72a1041359cc93b2a855c9f081d4395f3c90a97bea8e436d3c99f9e1de82ae2af2625fa3529bcf0b9065aa5ada029b8a790a73be5c3495fc56fb1c4cceb08209aea904b9d02ebfb881ab698b2555b0d07e94bade63da9136f28fb5d70a9eafcd7cdf9d86daded1be76124c66e7daa7ab57188cbe04a97856070f69944215fa71b8dedb3dad08546190a638efeb36351c7d10c5519fc54eef208a75882227ea1fd05ea4b38105d632028a3c55a9d72c9a898cd9c600f4011bf422e60cc0894c07ec5e64f52dcbc055879a2863188c6c5be4bee00a8eb9cc85e4cd80c965e085ee3c0c66fe7814ba751b31c5211e37e1aa265ee654d82482fed3d7b6aa72814ed56e797ee806a371e85db8cd01398584b2cdf40e8f484c530988a6055d8182e24c2c7168e47c32f5426fe28f4e9151effaf90e21c9f0fbc33321dce4f59455fd4f8eab06b62f042f685ad68075f3404cddd4dbbad9360ec876dbfab7d228084657e84e8b826efea86147b655d1ffe253e3ebb726e9ced72095db530ab2fdb9c55f8be0a56ad4c9b7991b5c9166",
      "2980180ac8d8fb2708c175e1fd8fc3eea22218af2afa4885ef786099ac5c5801cdc1e5ab3a6fc3367a46af3f2035b8506f6a07bab3dba14aa352841564eab1a5e6a2d693aa4aa57c026111cf9beff92758fd0d487740152a050000",
    ],
    [
      "ETag",
      "eKCjqSCpx66S4Ive2g4Y8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1620694024143"
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
      "c2",
      "401085ffcb78b44d5a6830927010838821a81538600859ca500b6da7ee4e1142fadf9d5d3c78f0e06577f6cd3793f7f60cfbacdc4017d659fa59a33e5da5c8afb688d1d4391bb92a2a0d8207c82a15f2617ebd183e4d6e8ec770f8ccd174b4d8cd83b4d713c2241f5828e89e619b61be31d07d3f43a90a94b1d54abb8d82f1a9b2ca68321d0c07b108056dac30998dc777fdf1001aefd758b5ffd7c8b2f16047eb18b7a8b14cd0baa834ed30e1910d685451e5e81baa7582061cec1aa9a6ba529ac817c50fc38e1f765a41e7360a5a5118b585cc29519c5129f0ec4dcc0113ab3ca62f09082d01b42b25ebd69d0791db2ec4c101d6dbdfbdd0f6963f0bfb2746f3a249ec19b4ce828bcb7bb2ce5912b1aed18344c9373f667c7937df60d6afccc3010000",
    ],
    [
      "ETag",
      "FV+ZGJN7xx1GOt4TIZjV0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MzEsImlhdCI6MTYyMDY5NDEzMX0.CudEFggr_UxP4rW_Suatqjalk4eogiUkGWBOqTxQlYGePz-naHBYLSvMRirbx4DPKoLEhKPsFJ6BuqJCsJWUxVSsCLPzKw6lYQ27eirR1gRk_FCKTBJ8yHEtHgO2i7404lnGl9BQeqc_pobCsZI-mA0g5CLR8Qrs5aA4yN7PXKpYlZ7nM44KRKDCvuFapMXcoeaMFcWKGDirbJb9b5WaaMJ_0POQ5-J6jhfhECVbiCkglEry7Np3qhvuJxZhfyOb0tNnU-D_w1gBjOSuwBDhVAolIBnCiEcGXCEHpnwW9WB0Edmgq_WOfW9kQoO4BRztpdaAiqOofWyHUQStSxo6tw"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "c9599d00b598de64a96c428514c40bc34058644c5802029dfe7b9d7ec27b3f20cd32320c09670da1e0032ca98876d9ce6e0f4a5212a13abb64abe60e0ea270ae60ef045bbf8fe270cc78851cc6e7a8d8c6f03eab75691f4ea8a18eafe2065ef12a38d8d5ba5352f493281e079bb3582fce4ccbf9b7abea267715accbfe0d652c5cb0c8ab1bc5e67e629d91a3e11a78013129d42753f01c585bb9462fa3f6c52ce96120c15a1fe6fd688cfe05e68ad94d56395b5812bdc99629cb63fad6e227ae9f72f6aea3d5ed54d2889f420a691b60b001646eeb9e0c49fde24a7b8436e0df9ef0a525af0085a43de9c1ef1f2f07fb201a010000",
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
      "Tue, 11 May 2021 00:48:51 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-117-1620694024143",
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
      "fd2bc87b5c9340421312295aa394b64881ac84b49aa6091973a16e09a6d8748baafcf75d4cd3b59bb43e61fb9e73cfb91f3c93075ea66446129e3f3650ef3fdd8b849c105034c7d75ffbc21f39759a5e5e3f7cb6afedfdd453b098cf11c15b96a4bbaa809e144dcd40ceb69b7e5e8ba6a2b5103d4cd4b3ac49cf1a0fcdf1d43687b6658f9028a1c856bc7c40fa9d52959c0d0647f17e2e445e00adb8ec33b17b7d1f3c0d07552dee81293978af39401939f840f54b2118555c94f3ed061d3412ea18769417e8e10f354dcedee7ee73baebe7087ee20c2863a22955eb0b533051663c6f6a9d95cc9e89f6f9e64036eeca5d46061345b32be392eee0c448a9a2b1da57605c846bdff0828b75e82f226f1dc49be595eb2ffacbf56aeb071be3f6ca0d5d43d1a400cd35e6c699be057841fd14a4e2a5568fdae756f9a543debf836909282da10bc613734c2dc79c2659326199333a4d321392c44926a77494986c6a839d264091a745358b96a2b4472975cc84c574629ec6b633ca62c7b4ccd849e8c44e1d1b2c9391c309f9597305e75c5642f2ae43e436f422378ec26db05c44ae2e21a34da1ce3b636d016f3d2a2c1041ffa9e9d046b940a5b6dd5e10b9e1621979376e37e115e494ed378f38e38c1612104d6b6c9e82da1729368c040bdf3d47b09ed8d7635092d9f767d2f6bc75f1a6e5aff40807d8da55fa4b3651e80597dace1171438b46439eba03a9d0f21dd686ae0f3f10895bda6521d75b37fc46baa71032a8a1641f4f13c13af0f1df76dc7c04e3eea38e5478c7e561b2556135744bc475bd2f6c6b644dc7fa5f55b4567fc78696651edbd6e66833c20e4af55252b7f9586927d6c857100671fe816ed7e137d703cc607b040000",
    ],
    [
      "ETag",
      "xylM38rddGQk+4Q4y9IteA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1620694024143"
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
      "41",
      "4f",
      "83",
      "401085ffcb78942650912a490f54abadc1da527a324db385a1a52e2cee2e9aa6e97f77166b356aa2179819be59de7bb083a7bc4cc18765be7aae516e4f56a827a68850d55c2bba55a2540816a0662b22cb65300b9c69685777d23d1d735967033ee9768950c91a0b06fe0eb21c79aac07fdc41c90aa4b544f0ba28174d6781de5666388da3e1e896fa42a4a61fcdc230e8857dd85bc7c59469b668f87faccdf7166cc432c20c2596091a2d95141b4cf4d0d854aca838b694a865820a1ab879b092a2ae9814a2459396e3745a8ed7b6bd4bd76ebb8e7b46241709d3b928099e4d492068a1198fc42bd9048f00d994e4386bae2f34ced3c6892987a3d8731b815f01d296e51c177f832478cde83b7c60870cbe73ac1075a98fd44df810fc761c85fa79d47510f77f104a535447241edef7a771703f36dcfce0bdb7d5a8c65250920a4d888eed5e9c773cfb3dd72b61b2a6f7f85ad66841c2e8f718e41afc8c7185fb377fbe4be37c020000",
    ],
    [
      "ETag",
      "nbAUA1SL0pJr4+PlrufHlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1620694024143",
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
      "69",
      "4f",
      "db",
      "40",
      "10",
      "fd",
      "2b",
      "d6",
      "f60b4839d68e733812a229b8d42a38e038ade8a16476bd0e5b1c6ff0aea928ca7fefd826147a2159b2b3f3de9b37b333b927d7324fc89830b9ba294571f7ea9b62a4458481159ece988e13b8108686ecfd15f47ff8d781991c1c2042562c0deb4d26da5a9505177a3c9f7556852a375028d546a1b66d8fdaf6c0a103cfa58e6bbb3d246a91a5a732bf46fa95311b3dee7677c93b2ba55699808dd41daed68fe7dd5ba7bb29d437c18dee3ecfd9c534bafb42d6c34c713052e507f3193a28b52816620d32430fbfa8097bfd5cbb2361dd5921f85672019cab3237952f94e02a4fe5aa2c6a5532be27b5cf271f64e69ffa47b175349d87f1de12d61579b96f81b6168b42e832332d6b8945a532130b992c9bc8e6da7a1b4dcf30820eae400bbdb43ebef323dfb296daa0bba5f5a5a4b4c7ad436b121e5bcf2582d09a87a13f8badbdc37deb249acecfad3797cf30e83d11dac8bc761e03cb44e5faa1bbc19f975a11c0a09326b818d201d823eab1940d793aeaf5594a05632336ec438f51eeb9c24d9800e4994abd6641ae7270281d0d465cd03e030acc1d2540471c0643cf4d12061eb5078967bb64db22df0b69c4b1d41ba565d361f2310a627f1147f3f06812fb75192960178f1b7355114f7d1a2c1241ffa96b5b45a5c24cd5750561ec4793a338f8e03713722a56c0ef6637382329645a201a0a580b238a339560d3c8f97416c4c1349c9c22a3bef6f31d4293f1e7fb5f84f86e5377d9d46f120767784793b3f3dac30ef401b2b246dd361fc4a10e6d53a76df763db19dbbdb1ed7628a59fc876dbfab7f8248a269768088a02ee7e8b619103b7a2ff25",
      "6b8daf7f35e6772e6c52657bf444b65fb7f8b4082e5aa34e2ee67e74499aa348a4a210397f79a8105c075efec3d82d2f82717d310f2e829138c35c575978219a5996ebda6fc3b67bceb03f2035b8307fc43ccfdb5d5aa551298ab5c8cd4349cdf2d69daa42a57e04611047300cc2138cfe04ae9618603e050000",
    ],
    [
      "ETag",
      "SbsTdaQet0NbKha5zEkItA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90416fc2300c85ff8b776d255a10da90388ca9022684b63276604228b46e5748eb90a43084f8ef73c20e3becb04be23c7fb6decb05f65593c300b6557968519fef4ab4afae48d1b4d21abe1435062100b4a264f259c9241e2ff2f27df1258bd56122dbe9f6341c3261b24fac050c2e5054287303838f0b34a2461edb6cb4dfc8983d2ba74ce76fc9384959a82977c27c399b3d8e66095c835f636affaf91f535801d6d532c506393a173a134ed30b35317d0885a490c0db53a43031ef68d5253ab84260a5909a3e83e8cfa71a7ffd0ebc4bda8d7655252266c450dc3cb059b034b56c8944e1c106206b42f396be1cf23cb5d1fe2e801e7edef5ee47aeb9f85a3b345f3a289ed1974ce3a37974fe49c5b4e64758b016482bf7952d9dbfbfa0d2269e346c3010000",
    ],
    [
      "ETag",
      "JplE2GSdgVSxlfZqHluIbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MzMsImlhdCI6MTYyMDY5NDEzM30.AlP6otnJC3DMCQF1V_Z0Vps23yUj9Uf21gCuuGk3cgFomHPwd3jqPRiH1ncdBEB5Pe9B9O3-yxqs8hfXJO7cZpTjsZtZnbNeF8cvdGdldisd0afINMH9_Xebm7tXrGZMPWnPc-YyzVbxhg1UpLbkQNGBwj5_a3L8hSNYVyxx4E07lJZ16vJYS4jdDY4UguiA-YEKTHjcIcKnL3CmfArI-9LzDxMlhSHPWfoz1RiBQQo_eGNUV_tT2UOmjNn59xA_7oim1ynb0SQWk6S6lRMPdHh4OeAOhuDYR4cvK8kQnBsGTtqJqTzIWoDEI7iey2z0ES2DOAtufHM-6JFEaH880Q"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4d",
      "72",
      "82",
      "30",
      "18",
      "00",
      "d0",
      "bb",
      "64",
      "2d0e4511e80e945012cb4f2cb6b261027c0d18ab28d809747af73a3dc27b3f885715f47d315c249cd1331ab9e1ccab39ed6caf10e018e36b4c5986232388699a35eba55b8678e5e5fdaedfefb68c96a2aef170c5c47d4b5bcc34f39cb7a65b760c02796a636b80d4de8abc29aaf04004b816ff520955d178f4385d304cbc77b226ea1afb567261e55ddbdbc2d79368fa907e0d9786c44cfac292ba11f06913a86f739dcb813c91566b7196ae5c2fd7d5cb5d4da111371a3f34c9497e867a4056765673bca4a76893e5477040d46662a31902d5b537e88bf6c15d988e3343fff662183b780478c06f7043bf7f1a51c8dd1a010000",
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
      "Tue, 11 May 2021 00:48:53 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-119-1620694024143",
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
      "6f9b3014fd2bc8fbda2410c8538ad62c255da6846c405a4dd3848cb950b704536cfa5895ffbe8b69ba5695d64fd8bee7dc73ee832772c38b844c49ccb3db1aaac74fd72226270414cdf0f5c10e96cef9b787a5987f5966fe208c4bfee77e3643046f5892eecb1c3a52d4150339dd05ddac1275492b213a98a86359938e35ec9bc38963f61dcbb19128214fd7bcb841fa9552a59cf67a47f16e264496032db9ec32b17f79efddf57b6525ae8129d97babd94319d9fb40f5732e18555c14b35d800e6a0955047bca73f4f08f9ac4a76f737739dd773304df710694315117aaf185299828529ed595ce4aa64f44fb7c752081bb7617a1c1445eef8ba8a07b383112aa68a41e4b3096fe7663acbce5d6dfccc3d5d68b82c5577733ef2eb6ebddc60b8ccbafaeef1a8ac63968ae31334ef5cdc30bea2720152fb47ad83c37cacf1d5abd1f4c434069096d301a99436a8dcd499cc623968eed419c9a10c7e37834a0766cb289034e1203459e16d52c5a60cda919c328ed471624347260dc8f6832184413cb1ea41396d8fd09258713725f7105675c9642f2b643e4d25f856e14fa3b6f310f5d5d424aeb5c9db5c69a025e7b54582082fe53d3a18972814a4dbb575ee8faf345b8ba70db09af21a3ec31b8c519a7349780685a61f314541b9160c38837dfb86708d613fb7e0c4a32fdf5449a9e372e5eb5fc851ee2001bbb4a7f4910fa2bef5cdb39222e685e6bc85d7b20255abec2dad0f5e13722714bdb2ce4c7cef57f92f6c987142a28d8c7d344b00e7cfcb71d371fc1b8fba82315de7179986c545805ed12715def33dbb26d67dc271a5ca977b1e170746c5b93a3c9087b28d47349ede663a5ad582d5f4018c4f97bba5d87bf4c9c5df97b040000",
    ],
    [
      "ETag",
      "x3SF4GJxFoABFgR5Tbpizw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1620694024143"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92d14ec2401045ff657c2d09c55aa4090f20a82405118a3131842cedb414b7ddb2bbd534847f77b6221a35d19776667a667bef6df7f09ce61178b04e935d89b23a4b50df9b6286aae45ad1ad10b942b000354b88f4757ba7aa4416817cd80cf8388c83ed63d2ed12a1c20d660cbc3dc429f24881f7b4879c65486ba1e06596afeace025d1566380f66a3c90df599884c3f59f87eafef0fe1609d1623a6d9aae6ffb1b63c58b015eb19c628310fd16829a4d862a847c6a66259c1b1a14429435450c3f583448ab2605288064d1ab6dd69d86eabe9769c66cbb19d7322b908994e454ef0624e02410bcdf84cbc924d70099075498ee3fafa42e334aa9d987234095ca716f815206d71ca71f5374882378cbec30776cce03bc73251e6fa445dfb77bddf8ea3503f8f1af482e10f42698aea8404a3f1701ef4c653c32d8fdefb954635958292546842b49bcee545db6dbee77a254cd6f41e4fcb122d0819fd1eb7a9062f665ce1e10d291100367c020000",
    ],
    [
      "ETag",
      "Lt7qsygrpTrVhDlMcfTjXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1620694024143",
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
      "6b4fdb3014fd2b91f705b43ed2267da412625d09ac5249214d61eca1d64e9c6048e3603b4c05f5bfefc6a140c736a448897dcf39f7dcebeb3ca25b96456880084bee0a2ad61f6e38413544154e60f7414d9d8f0fe2d29e08e7fa1ccfdd6f5ff387f3830340b09225f12a4f695df24284540ee6b34622789163c1791d84eaadb6596f75db66d7b1cdb6ddb22d204a9ac61396dd02fd5aa95c0e9acd6df246c27992529c33d908f9ea79bf79df6ee682dfd050c9e66ece26a491cd77b21ea63cc48af1ec603e030785a462415798a5e0e1851a914fbbda0d86578d04c0f72ca4380c7991a9d21748843c8b595208ad8a068f48fb7cf58166eec41d05c6683af782bd255e95e4e5be81a5b158082a8b54d58c251415b3942e58b4ac22f9ad71ec4f4f21020eaeb1a472695c7e717dd730b61ac68fc234add0383486de91b1ab31f68cb9e7b9b3c0d83bdc374efce9fcccf87cb58301f311958a65da7a80494a4bdb4fed1dbf3dd592801558a9828b9ed9c5adbee99098f4c2b86f75486c5242faa4d7c1163143c7a6764428069e2ad5350b673c732048a2a8e598b41313dbecf623d26af7706cc57d62391d3b0efb91d5eea04d0dfd124cd12326732e59d56274e98f037711f8736f340c5c5d468ca18d4795b9b288d73e151409a0ffd4b529a38c43a6f2bcc65ee0fac35130be70ab1199d00487ebd91d0c498c5349018d055e5145c5298fa069e86c3a1b07e3a9379c00439ffbd91621d1e0fbe30b2158e7bacb4abfd1f1643a0cbab676b0855ce0b4d098fbea03b51a1d406c6aff9619fafef00a526321f0fa8f1894d3d5f4bf64d078bdaa6c3e674465b6edaa8d363f37f0d410dca94a1d9dcf5dff0a555b3e8da9a059f8fef8005807deff376cef2980e1a6421ea9600dd31aca324b286835b56ca5fd56ec9665774c1b69b0506f625ddbd91e4fa9512ad215cdd45349d53dd59d2a43857c06411086cd1b7b2710fd0d6dd8",
      "8fca29050000",
    ],
    [
      "ETag",
      "ztO9+zrW4Lr9hQaUEZXpzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1620694024143"
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
      "4f",
      "4f",
      "c3",
      "30",
      "0c",
      "c5",
      "bf",
      "8bb9b6a22dd504957660a81a13fb03dd7642d394755ee9d6d6214981aada77c7c93870e0c025719e9faddf4b0fa7b2d94302bbb2786f517557059a175b64a8dbca68be24351ac10334a260e772362e67f1e2299441dc8ac5f55756dc0e8ae1901d3a7fc35a40d2c3a1c46aaf2179eda11135f2d876abdc46b6994e5a65325fa5e33463a1a6bd15e6ebe9f47e344de1ecfd1a93a77f8d6cce1e1c6997e1011536395a0aa9e888b999d8805ad4b2425f53ab72d4e0ccae51286aa550443e2b7e18057e388882c15d1c447118dfb0b3a25c98921a36af970c07868ca832fae48010b141b992b31edcf9e1641bc256a163fbbb17d9dee667e1a833a89f15319e464b165c281fc8921b4e64548b1ee482bff9b13497f7f91b3a88fe94c3010000",
    ],
    [
      "ETag",
      "SMGiM4OK1p04uaO/xRg86g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MzUsImlhdCI6MTYyMDY5NDEzNX0.OTzIkEBv_-sdzPDAXSpMAwBZ6ML8yExLYnHSIa3Bl0310aj-em8OXJiYWM0aMcmySsdUOVMZVinc81_b0EemldaHrQ_aKv2CbFJqsqLfSLTbh3Gtx7DSdKz8NySScmhMkL9U0lKO1kqFuT09Oh48DIwj2NHZClISRwn51lctn7vFpH5lA-byggtiR40nor2DJREaexfPkfpWmGjaA18rYHJT374tLxCKoWU9D3oLjeYr8z4a_CKGb_jIH_zEkdP3CjSNExWm4UY-3dwyQLLDVaQtzUaIuDcTm-EjlmwgaXEWpb8-9XG3e0R9CXdra5TIKUICDvujkk6DHQMtiQ3cqA"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4d7282300040e1bb642d8e12b1d21d010b0211442ac8261320fc754a19024a707af732bdc1fbde0bd02c639c93e1e78bb5e01d082aabeb6ced740744caac89e71b0b785f850846c109d6e959c43438064584b68de242ebd678770f9b9cd41f6e59b1fbe434df6959c5304913b7fc6c51340a8d74b06c7cbd326d82430e653ab6d59c8bf394ef914ff63cd0a57cd36d6953d8cc98ca0b3c5fd1e1e9e0479ea8f12e9193996a6f835054e352789a151659e50a81fd6dc15acb79489b7427b3c7f5199f36777d1ef1104a86aa99b6e2db929dd67c8a1c0543611f13b0026ceaea9e2dc10b172aaaba02ff7632888e2d0310a33debc1ef1fb731a6f71a010000",
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
      "Tue, 11 May 2021 00:48:55 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-121-1620694024143",
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
      "9b3014fd2bc8fbb8268140922652b44629dd9012b20169f7d0848cb930b704536c327555fefb2e26e95a555a3f61fb9e73cfb90f1ec91d2f53322309cfef1ba81fdedd8a849c115034c7d72bdfcebe4eccebefef87b4d91769b3fa53df2fe67344f09625e9ae2aa02745533390b36dd8cf6bd154b416a287897ad6d0ea59e3a1399e3ae6d0b11c1b89128a6cc5cb3ba4ff52aa92b3c1e024decf85c80ba015977d26764fef83fd7050d5e216989283979a0394918337543f148251c54539df86e8a09150c7b0a3bc400fffa86972f132779fd35d3f47f09e33a08c89a654ad2f4cc14499f1bca97556327b24dae7b30309dd95bb8c0c268a6657c625ddc19991524563f5508171156cd686e75f6d82f522f2367e1c2e3fb9eb457fb9596dd77e68dc7c7203d750342940738db971a16f3e5e503f05a978a9d5a3f6b9553e76c87b3d989680d212ba603c31c7d43a37a749964c58766e8f92cc8424394f26236a27269b3ae0a40950e46951cda2a52813182714ac2c066b92c64e3a3563caa81d5b191b3960dac3cc1a93c319f95d7305975c5642f2ae43e426f022378e82adbf5c44ae2e21a34da12e3b636d01cf3d2a2c1041ffa9e9d046b940a5b6dd9e1fb9c1621979d76e37e115e4943d84f738e38c1612104d6b6c9e827a2d526c18f1176bf712c17a629f4f4149663f1e49dbf3d6c5b3963fd1231c606b57e92f09a3c0f33f6a3b27c4352d1a0dd97707725c1e347df889405cd22e09f9b275836fa47b0a20831a4af6f63011ac036fff6ca7c54730ae3eea488577dc1d265b155643b7435c977b645bf6c8b64ca2c1b57a151b8dac53d7da1c6d46d841a98e25758b8f9576628d7c026110c7efeb6e1dfe023d0e2d257a040000",
    ],
    [
      "ETag",
      "FN3fX70VZ+2auvlduLzrqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1620694024143"
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
      "02ff8d91514f833010c7bfcbf90a094c4447b207678cce9039d9a60f6659ba7220b370d8169765e1bbdbd6698cf1c1177a77fc2ef9ffda03bc564d0e096caaf2ad43b93f29513fd82243d509adccd152a3103c40cd4a43de71b64b87c5e2be9d3d0d8358d7f1563d96a39121147fc19a417280a242912b489e0fd0b01acd1a27d1d5cdda751ee87d6b87f3453699de98bea6dcf6d3659a5e8ed36be8bdefc59c69b676fc3fd656bd075bda6458a0c486a3cdd24ada22d713aba958dd0af4157592a30207bb1fa5a4ae6592c837133f1c847e180f8278180583288c4e0d2988335d5163e0e5dc04044d9a898c7646132c205d698c0bf77d37e32a7726b69c4c1771e402fe049ce31772d4facdb482357f30ab6382f15ea39a49323e0aad4a18441767e771f0697745d6589b9bd0b2430f38338f745b69480a2614f61f08ea0ed402020000",
    ],
    [
      "ETag",
      "JcawL9fTOpPW906tm6jsVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MzYsImlhdCI6MTYyMDY5NDEzNn0.QBdQ8mIzuoEVn1_OGlcl_oNCBFREXyaPgcR1XtMjraWP7KXX2SP074d39R1SQ8q5gD0QcEylJfKwyYcXZwJqL3I7AcIjA5iv_D1OK2OwnUWFGXDI6tb61E1XMSAT5E4naHViDJVyXgKtx6OaJwbzBU91jsrIj0DLviHdCkNYWN_dEqAuI_wbdPKkdscfwc5qXlXayjGYbzeHIIqrb42L205lNdlpZihnV0IZCldgKxOkF1YcRzPGLqL2iqKzx6ykbcQ7A-jS2krFyuzHrUPG5WnF_UZwNUMkAYsgh4Z8AmFifeXizo97RumgnSli2RiufwxB2tqHCEdnFn6gRxOlzg"
  )
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff1dd04b7282300000d0bb642d0e5f0ddd219036050aa2fcba6120461035468228767af73a3dc27b3fa022840a510e972365e00d4c956acec9dce3705536341363aa10052fb326a91d1dc3b39bb7d2996b689d8d92954d2ddc096389bc70ba294230390a4ef02bd1752770fcc56878629bde0ef95360e9a38d5237eef3cdc034e35321965fa55810be36faddb5c31a44c616598d6cc7275631bfa8711e2dd86384854ed584efd4cdadf6c3fd12513b23774683d0feceda5aeb5214abb6e8eed46c9a48b6616e5dd6c9d54ade3d5eb8c5be3cf650c52bb3436e0e2f6006e8831f7a2acac38bab19a63903fff67298387d05ac68d5d31efcfe0106819f4b1a010000",
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
      "Tue, 11 May 2021 00:48:56 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-122-1620694024143",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbb83681843ca5688d52b2a105d211d26a9a2664cc853a25986293a9aaf2df773149d7aad2fa09dbf79c7bce7df04c1e789190298979f65843f5f4692762724140d10c5f27bbe56776e3ed9607b74c12e1dde7def7dd7c3643046f5892eecb1c2ea5a82b0672badd74b24ad425ad84b8c4449756af77690d7be670629b3ddbb2fb489490a72b5e3c20fd5ea9524ebbddb378271322cb81965c7698d8bfbc770fbd6e59891d3025bb6f35bb2823bb1fa87ec905a38a8b62b6dda0835a4215c19ef21c3dfca326f1d5dbdc1d4ef79d0cc107ce803226ea4235be30051345cab3bad259c9f499689faf0e64e3ac9c45683091d7fb222ae81e2e8c842a1aa9a7128c65b0f60cd75fae036f1eba6b3fda2cbe39debcb358afb69ebf31eebe398163281ae7a0b9c6ccb8d2371f2fa89f8054bcd0ea61f3dc289f3ae4be1f4c434069096d301a99436a8dcd499cc623968efb833835218ec7f16840fbb1c92636d8490c14795a54b368218a64d8b77a697f1c59b11547368c93683218b16860c7d44a590acc1a92e305f9537105d75c9642f2b643e42e7043270a83adbf98878e2e21a575aeae5b634d01af3d2a2c1041ffa9e9d844b940a5a6ddae1f3ac17c11bab74e3be11564943d6d1e71c629cd25209a56d83c059527126c18f1e79e738d603db19b735092e9af67d2f4bc71f1aae52ff41007d8d855fa4b3661e0fa5fb59d33e296e6b5861cda03392d0f9a3efe46202e699b84fcd83ac14fd23e0590420505fb789808d6818f7fb6f3e22318571f75a4c23bee0e938d0aaba0dd21aecb3db1adfeb06f9b44832bf52e363027e7ae35399a8cb087429d4a6a171f2b6dc56af902c2208edfd7dd3afe05be5d090b7a040000",
    ],
    [
      "ETag",
      "9jF+cPMjFvIpddoMhlMKjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1620694024143"
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
      "02ff8d914d4f83401086ffcb78850428624bd28335469b348dfdf0649a660b03d22e0cee2ed6daf4bf3bbb56638c072fecccf04cf23ebb47d8554d0e296caaf2a54375b828d1cc6c3147dd49a3f968a9d1081ea0112593fbc1327adba12e7a79198970b449faeffdd970c884ce9eb116901ea1a850e61ad2a72334a2465ecb487675b3769d07e6d0dae162391f4fefb8af29b7fdf47132b91e4d6ee1e47d2fe6c288b5e3ffb1b63a79b0a5cd1c0b54d86468b3b48ab69899b1d5d4a26e25fa9a3a95a10607bb1fa5a2ae158ac8e7891f46911f2651900ce2208ac3b8c7a4a44c988a1a861f171c100c1921e7b4674db08072251b17eefbcae32a7726b61c4f9749ec02fe049ce31772d6facdb452347f30ab7382d1c1a07e50c43e1aad4a18c4fdcbab24f8b4bb216b6cf8268cead0834cf023dd5706d242488da70ff59db19b02020000",
    ],
    [
      "ETag",
      "w9T2xkesf3dg2a1Bb68z8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `name` as __result, `id` as __pk FROM `accounts` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `name`",
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
      jobId: "grouparoo-job-123-1620694024143",
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
      "eb",
      "6e",
      "9b",
      "30",
      "14",
      "7e15e4fdd9b45cb8252491aa2e6dd98a94928e9056d53425c618e696606a9b56519577dfc124bdacd22a2101fe2ee73bc7f613ba63658a262861f97d4dc5f6d32d4f5007518573584defefdcc1f84c24e7de57eb243d1f4eb7a5fd7874040cd6a824de5405ed4a5e0b42e564b9e8e582d715169c77c1a86bd94ed71adae670ec9ab66bb90e08252db2192bef40fe47a94a4efafd43f15ece795e505c31d9237cf3bcde7fb0fb95e0b79428d97f5bb30f6564ff83aac7052758315e1e2d1790a09654ace806b30232bc48d3e4db5bef1ec39b5e0ee40746282684d7a56a728105e165c6f25a68573479423ae7ab0fb4f067fe696cac4bbca16b034b63b51254d685ea186b96ee57aa3be37b34bf30d67b77b936aecffdc8375a4e101acb30f417b1f1f9f88bf1239a2f2f8d931b8d75f6ce9025a552b15227897152d026c57e5ac1fb4d6a045861495b70e599436c8dcc7192251ec946ce20c94c9a24a3c41b602731c9d8a56e9a500c3ad5b86b152e7969616a113bb3ac34c1c4b1ccc160e065a63b1ada29ced231ce4c93785eeaa05d073d0aa6e819931597ac9d18ba8e82d85fc5d1323c9dc6be6e23c3309eb3365cd3c4eb9c0a9a04d27ffada3528e350a9197f10c67e343d8d832bbfddf119cd31d92eee61cf335c480a6c2c60828a8a0b9ec2d0d0e57c11c4c13c9cce40a1b7f1f2c09068f2ebe945106f2b3d65a5df681a45d31bd06021f0f61f0c720c5db4dbbd2a77858b5a53345fffb5fe0f2d802cb4fbbd83a783e034b77ee8e7d28f6e50bb14d18c0a5a928f771ac81af8f8561e6e0890e18e401da9e01f0e16914d1522687bc0d846276cd596e3d9e60869b250ef3067303a4cb2f1681ce986966adf527b43f46c1aa896cf2400e15c8441f803d0bf2d",
      "877ef0a3040000",
    ],
    [
      "ETag",
      "dqk459DrbH7+1BdH6Ayn2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1620694024143"
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
      "6d90cd6ec2301084df657b4d2442105591383415a248084180535545c659d2409235fea1a28877efda546a0fbdd8def537eb195fe15877258c6057572787faf250a15df9438ec635d6f0a6a8330811a01515935f22a55467a7d2264bcabadd6355bbd56a3c66c2c80f6c058caeb0afb1290d8cdeaed089165956143a4c64cc5e94efac37f96c31e5baa5d2d78bed7cfe9ccd27708bfea8d4f157315b6c26d349fe9fe4fd16c1817639ee516327d19b509a0e28edcce733a2550dc6869c966820c0e1a2d2e494d0443177e2a49fc6c9b0df1b3e0d7afd413248996c480a5b53c7f076cde6c092154d4e9f9c0f1206743872d47d58cffe39a750172d56a290a45588740e383b7dff19915d2c9aa5263664d07be9dd7dbd90f76a3983d50e239082fff5b5b6f7faf60d19d94bcab4010000",
    ],
    [
      "ETag",
      "za3o3rBqdt1PoBnb7giuQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MzcsImlhdCI6MTYyMDY5NDEzN30.dRV0BJnw_zQZ8mnpH9DuO8goBO0MHBytIb5uruYM34REW68g20mezth2zhgW9bwtdRRHO1lag1P7I7sAAYg39weVbbzEcpTO7f0Jcz9WOPfisEoJB5IVc27wTESPdSonP17wVlXB6wfrcjkBmColC_5G9aLSF62Sftfz_HMBDfu-Q4IzR4JM8ZZ3YeeAGqg-LtWNbD_o4Yf8t-m68TB7r3Qcmka4DXB48R75Fk1TdaOEJMASshty6R78fj0MMtLGgTDVjWbAKCjVBq3FcD8-xv9nPpycyBsdOlrRGsFLV4t4CTJRPOoHWlHapC9vHqBLdWfrqXZzsidb1SIgjSBo5g"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "dd",
      "76",
      "43",
      "30",
      "00",
      "00",
      "e0",
      "77c975db33312bbb635814d556fdedc6318d288626712a7af6eeebd9237cdf0314658919cbf9d0e21ebc0351406d536edc51357252cd1835662b2326a40f6f868dd3cdf07378bd35b90ef721b5547b2b2dc4be2bdf1631950e51113b525f4789c3d6118bcf3e829e65c75b997f45a556090da5817784d3eee89aee7e8c42d6cd5b67f4fc25d915cea133521aa396327fe0aedc3435226a834e6b9fc0de70cf5dc82ea71f31ad459f12fd3ea06b72ab63c449e52ff225789192c89bca6c799bf35dd62a936dab5ce78a986ec1986907672903b002781eaf14b3fcfae4ca8aa6adc0bf3de762c4cf0003171453f0fb0733f8bdc51a010000",
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
      "Tue, 11 May 2021 00:48:57 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-124-1620694024143",
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
      "6b6f9b3014fd2bc8fbda0408e441a468cd52ba464ac84a48ab6a9a906d0c730b38c3a65b54e5bfefda345dbb49eb276cdf73ee39f7c1137ae07586a688f0e247cb9ac3877b41d019620a17f0eacdefe4e157b56acbb0f2ef3eb5ae1de6d9f56c0608ae591257fb92f5a4681bcae474b7ed178d68f7b811a207897aeec0efb9a381330a7c67e0bbbe0744c9ca7cc5eb07a07f576a2fa7b67d12ef17421425c37b2efb54542feff6e3c0de37e29e5125edb79a36c848fb1dd58fa5a0587151cf765b70d04ad6a4acc2bc040f7fa819397f9bbbcf71d52f00fcc829c3948ab656da17a4a0a2ce79d136262b9a3e21e3f3d5016dc355b8482c2acab6aad31a57eccccab0c2a93aec9975196fd6d632badcc4eb79b2dc44e9767115aee7fdc566b55b475bebf62a8c434b615232c3b566d6b9b9457001fd8c49c56ba39ee867adfcdca1e5bf83d1049096ac0ba6636784dd8913909c8c693ef1862477182113321e628f3834f0999f11868167440d0bd7a21e05d8253860e9201f90d47786794ac6384b29ce3d2ff027ccc3013a9ea19f0d57ec82cbbd90bceb10ba8d97499826f12e5acc93d09490e3b654179d315dc06b8f0a0a04d07f6a3aea2817a0a4dbbd8c92309e2f92e54dd84d78c50a4c0fdb1f30e31c9792011a37d03cc59ab5c8a061289aafc30b009b897d3905259a7e7d42bae7dac5ab96bfd01318a0b6abcc176d9378197d36764e881b5cb606f2d81d7419392fb5e9e33700c2927649d0f52e8cef50f714b39c35aca6ef0f13c026f0fecf765a7c00c3ea838e547087dda152abd086753bc44db9cf6cd71b078ef955156ed4dfb1893b189ebaa673e88cac62b57a2ea95b7ca8b4136be50b088230fec874ebf81b1073158b7a040000",
    ],
    [
      "ETag",
      "3AYsyxmLulEm4YBu1/EfdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1620694024143"
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
      "8bfb4a544818cb90fa90b4599789260da14f53855cfba06e8d8fd9265314e5bbd7a65d36ad93e80bdc9d7f27eefefe7320cf427192920751ffec40efcf6ab01b1fe4603a698d7bb5a80c908080a5b523a7f9e47cc3b2423e4f93c96311c6d7df2bb6b9b87084618fd050921e4825407243d21f07a26803ae8da1ec1a55f65940ecbef5c56d912f57d72e6f90fb7c759765b379b620c7e0d4c8a9a565cf7fa0edfe1890277cc8a1020d8a819fa5d5f804cc2efd9a8636ad8491c14e3330a487fb835a63d7528d38729551348e4751320e932f71388ea378e248898c5a81cac1775b3720b168a9ccf1975b93449ed07dec56aefae7ced505ef57f1e1725524713fe1df00650c3b65cb41b012dad857f97e836f32fc4b4afa41d0dd959043500d8a831ea2445b52ce35183348a22969db9eb0f97a9dbd5745718d820f833b310048bb3b015fb3f5ec7fd23a87fdd1ea6a562cde11c63adf9c906279b3d816b39b5bcfddbf1961beb7606e353a5b19f08e8ac278fae97312be9aec12bdf1dc7752ab3b0808a3ee5ff9262c492b2a0d1c5f002fd7d78e89030000",
    ],
    [
      "ETag",
      "8R3/QcLTlk863hT04GJfcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/oauth2/v4/token",
    "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJncm91cGFyb28tZGJAc2FtcGxlLXNvdXJjZXMuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzY29wZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvYmlncXVlcnkiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJleHAiOjE2MjA2OTc3MzgsImlhdCI6MTYyMDY5NDEzOH0.Sa_xQapmMvo_TGsRYvtCFjML-MY7kAVQQoj3BJZ_FS69NBERWvBQCzrsGDoKmB-lUZWL3C4wm7u-DMzzkoTDBZQGo4qxF05GLHYgO6KMKtp0cVYAxklMhSwazS4ERHilbJ71fqRaYF5O4ljj1obhoiMUL7MvASWl1SEziM3pGNLR-CdOiS0kD35bRh8OefGhZs9ZkBTaAkC88gKwhOEser22I1AjZ9E_lYFtdqKfyuxjy8wCZh9XIlf4TrJdF5TPRrWsvksMlVysqVEdDlcqGfbbgpQ4GSXsBfNVIBncYUeEBDMLsSIReMPd_uait-QCnxaURzO5nVIHkGhMVsF3rQ"
  )
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d0",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb642d8e4611e88e8f29a4ca20d2206c980091f251317c26e0f4ee757a84f75e806619ebbaa47fd4ec0e3ec044a1b6cc965fad6a24c575b4764488e6be3f6932f78c538cf7ab55585cbdd6be39524394507633bd97d220d9d195ad67f2332a305c77141d7084b0c9f05c1b504f95ae65565343316c05c7d2317166eaac09527deb9c7be738ac6cbc9e3314b1a71450cfcf7d3a62bdffaecaad1b0f5039dadcc24331578f538352482e51ef3aa62bb9de8ec218e1cffc36e993297c84caa636673522170e1ffc27343c7280c146285a3c9632580026da92b32e29dfdc8dac690bf06f4ffaa965ef008351ce38f8fd03df71e4bd1a010000",
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
      "Tue, 11 May 2021 00:48:58 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-125-1620694024143",
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
      "fd2bc8fbda84f04a48a4688d52ba454ac806a4d1344dc8760c734b30c5a65355e5bfefda345dab4aeb276cdf73ee39f7c113bae3f501cd10e1e57dc7dac74fb782a00bc4142ee155968cb8e3fdbef1f693bb72ea3bf78404e57c0e08ae59121f9b8a0da4e85acae46c970ecb56740d6e851840a281e3060367ec8ec6537fe4fa8eef0151b2aa58f3fa0ee8bf956ae4ccb6cfe2c35288b262b8e17248c5f1e5dd7e70eda615b78c2a69bfd5b44146da1fa87eae04c58a8b7abe4bc14127599bb323e61578f8473d90cbb7b9871c1f8725801f38659852d1d54afb821454d4052fbbd66445b327647cbe3aa0345a47cbcca2a2ea8e755ee323bbb00e58e15c3d36ccba4eb61b6b155f6f93cd225b6de33c5d7e8d368be172bbde6de2d4da7f8d92c8529854cc70adb975696e315c40ffc0a4e2b551cff4b3567eeed0eafd603401a425eb83f96434c64e389a92824c68117a0129468c90904c02ec91119dfacc3f10868167440d0bd7a2760a0ff0d8cd433774729f06611e16819fe3c9d4a18e174c9d0945a70bf4a7e58a5d71d908c9fb0ea17db2caa23c4b76f1729145a684027795baea8de9025e7b54502080fe53d34947b90025ddee559c45c96299ad6ea27ec26b5662fa98dec38c0b5c490668dc42f3146b37e2000d43f162135d01d84cecdb3928d1ece713d23dd72e5eb5fc859ec100b55d65be28cd9255fcc5d839236e70d519c8437fd06514bcd2a64fbf00084bda2741df7751f203f54f092b58cb6afaf130016c021fff6ce7c50730ac3ee8480577d81d2ab50a6d59bf43dc94fbcc76bc30f40364c0ad7a179b06deb96b3a87cec88eac56cf25f58b0f95f6629d7c014110c61f9b6e9dfe025808ddd87a040000",
    ],
    [
      "ETag",
      "sgeb26WWp3W7kg941qbb5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1620694024143"
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
      "ff8d93dd4ee3301085dfc57b9b4a49487f88c445bb5bb695420b6db8d9158a8c3dc91a1c3bd84e5155f5dd1907b6a065a57093cc8cbf51668e4f0ee451284e52722faaa716ccfe5b05eec6071bb0ad74165f8d56164840c0d10ac9787c69c66a1d3ed3c9af453e9c2ce2c7f1d9cdc5051296fd819a92f4404a01925b92fe3e10456bc036a6655baba2cb02e2f68d2f6ef3cd72f513f35a739faf6eb36c3acbe6e4189c1a3975b4e8f82fb4dd1d03f2a0ef37508201c5c0cfd218fd00cc2dfd9a96d68d8481d5ad61604907770795d16d438dd603ac0ca27838884671383a4fc23889923324a566d409ad10bedde280c46947e5463fe39a24f284e9625cb9ec9e3bac0bdeade2c3e52a1f25dd841f01ca986e952b7ac15218eb5ee5fb0bbec9f02f29e91741bc2b21fba00a1407d34789a6a09c1bb0b697d4b6a04d73c266eb75f65915c58d16bc1fdc891e40badd09b8ccd6d3ff498b0e7bd7eac7349f7f22ac43df9c907c7935dfe6d3ab6bcfddbd1961b67760af8d465b59f08e8ac264321c8fc257937dd7de78f89dd4991602c228fe2b0be1485a5269e1f8023ab421d389030000",
    ],
    [
      "ETag",
      "27Fr7nO0wa8ZHT58H2k73Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 11 May 2021 00:48:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
