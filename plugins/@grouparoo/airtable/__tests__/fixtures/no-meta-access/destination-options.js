const nock = require("nock");

nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(404, { error: { type: "NOT_FOUND" } }, [
    "access-control-allow-headers",
    "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
    "access-control-allow-methods",
    "DELETE,GET,OPTIONS,PATCH,POST,PUT",
    "access-control-allow-origin",
    "*",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Tue, 28 Dec 2021 04:53:53 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwIzPGwjYRjvbQCv; path=/; expires=Wed, 28 Dec 2022 04:53:52 GMT; domain=.airtable.com; samesite=none; secure",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "X-Content-Type-Options",
    "nosniff",
    "X-Frame-Options",
    "DENY",
    "Content-Length",
    "30",
    "Connection",
    "Close",
  ]);
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(404, { error: { type: "NOT_FOUND" } }, [
    "access-control-allow-headers",
    "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
    "access-control-allow-methods",
    "DELETE,GET,OPTIONS,PATCH,POST,PUT",
    "access-control-allow-origin",
    "*",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Tue, 28 Dec 2021 04:53:53 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwSsu3FNW27cbMUh; path=/; expires=Wed, 28 Dec 2022 04:53:53 GMT; domain=.airtable.com; samesite=none; secure",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "X-Content-Type-Options",
    "nosniff",
    "X-Frame-Options",
    "DENY",
    "Content-Length",
    "30",
    "Connection",
    "Close",
  ]);
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(404, { error: { type: "NOT_FOUND" } }, [
    "access-control-allow-headers",
    "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
    "access-control-allow-methods",
    "DELETE,GET,OPTIONS,PATCH,POST,PUT",
    "access-control-allow-origin",
    "*",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Tue, 28 Dec 2021 04:53:54 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwwz1fI4oVhNM2dI; path=/; expires=Wed, 28 Dec 2022 04:53:53 GMT; domain=.airtable.com; samesite=none; secure",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "X-Content-Type-Options",
    "nosniff",
    "X-Frame-Options",
    "DENY",
    "Content-Length",
    "30",
    "Connection",
    "Close",
  ]);
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/%F0%9F%93%A3%20Campaigns")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b595df72e23614c65f45e3e9c5760632b2c184cd45670c812c2e24c6f963924e2e842d1b055b7224d9986472bfd7ed03ec8bf4a1fa089521bb2c0db466b77be7918f8e3e9d9fbe739e358e7dc603a19dfcf6ac91403b2917a6a9173488af0f06e3be73acd5b490e0b88c79d6ba28491189a80a3cc70b306309660b8ab950517f7dfafd4f6005406059e62b33f5f276e60e676eecdb162bb4fb9a76291197204012ab140634f43a34ebb0b5dafec747e06291c5528077216709d85a92681ae39f5f135fb7076ee7b6c38deee3b5475e13cb4c9dabb9382778510aea6794e2180889a2f2346b8138a65894bf7a34d812a12b1d6db57ec650acd64e39c931409f3700c900ddba6e0d749d11f8e527fda869aa6de7b890ea1c9cee546eac547719958466b814ebc448868c275fa23795fbea9e035a4ae728d1ee5f6a9acfb1121c5c9164ad5a6fd57558379a5746e304b64f9ae61184f04e7ba96d40f29b19cb86364904f6f2781fc80fff01f1e9f4317244f31117d6759aab98aa605b75c33c14ac0fcd3ca726bc381e65efbd2db04e368d8998e1e02d5a55db5ce9278cee66db801bb6eb58f90f98968269fc38947de4e32963f3950c16c5587d7c375e9176164f8fdd463217198ff6e1ed7044031c80395e2e5656df09393b9f8a22f43c676c2e97c95ea71afaa1402d7fe47d68a4d776bf3740ee16d0539ce398a509a67227524102cc91dc43d5588bd972ace4280c895ffa5510894bb0dd12ecd10f44fbcab3024303be6558bce74363d2366f5a0f3dfeb08fa18b158c082b65d16e7cfaf9957d87ec6cd9cc5904d71eb5c5281cb8b78374763129c41ea4c775d83c14a9cb3cbbc7479386af9fb9f07ff1286cd78df65b8f6642ed008402be290048198b3f5b56afcad5a2285e0a22aa73bd5a1029312f2fb231afc3c9eab15e6412b070d543bed5bd853b198fed87a6e50efabf927de487ea5c1493392e7dbbb3c7ea070f4f6638cbd1eda56c58456bbcdce27741d59de283e9a94e7ffc965efc45fbaa56249ad573146718a419f767487cd57a1b55395e4a967e73c5533b9f856c345e0ce767febf8d43f516fc8c13b9ac3411f74d3f7870b33cbb93adbef794dca049c72eb69d15234ad7fe3fb0532a8f1bb062a7d48f4c58918483943bbf670256a1d87ca578fff23732794996ab0a0000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "2731",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Tue, 28 Dec 2021 04:53:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwCE3XbD3to7Mb7X; path=/; expires=Wed, 28 Dec 2022 04:53:54 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "855",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(404, { error: { type: "NOT_FOUND" } }, [
    "access-control-allow-headers",
    "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
    "access-control-allow-methods",
    "DELETE,GET,OPTIONS,PATCH,POST,PUT",
    "access-control-allow-origin",
    "*",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Tue, 28 Dec 2021 04:53:54 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwpSXiVUKGOzh1kO; path=/; expires=Wed, 28 Dec 2022 04:53:54 GMT; domain=.airtable.com; samesite=none; secure",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "X-Content-Type-Options",
    "nosniff",
    "X-Frame-Options",
    "DENY",
    "Content-Length",
    "30",
    "Connection",
    "Close",
  ]);
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(404, { error: { type: "NOT_FOUND" } }, [
    "access-control-allow-headers",
    "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
    "access-control-allow-methods",
    "DELETE,GET,OPTIONS,PATCH,POST,PUT",
    "access-control-allow-origin",
    "*",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Tue, 28 Dec 2021 04:53:55 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwASN42SHFgIOLKn; path=/; expires=Wed, 28 Dec 2022 04:53:55 GMT; domain=.airtable.com; samesite=none; secure",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "X-Content-Type-Options",
    "nosniff",
    "X-Frame-Options",
    "DENY",
    "Content-Length",
    "30",
    "Connection",
    "Close",
  ]);
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({})
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Tue, 28 Dec 2021 04:53:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwxExZSd6fUmSU9a; path=/; expires=Wed, 28 Dec 2022 04:53:55 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
