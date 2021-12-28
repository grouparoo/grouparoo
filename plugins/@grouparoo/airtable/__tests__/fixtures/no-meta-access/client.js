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
    "brw=brw0WTeobY6UyOwKj; path=/; expires=Wed, 28 Dec 2022 04:53:52 GMT; domain=.airtable.com; samesite=none; secure",
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
  .reply(
    401,
    {
      error: {
        type: "AUTHENTICATION_REQUIRED",
        message: "Authentication required",
      },
    },
    [
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
      'W/"50-8xYAvLBWleFLl/buYhG+M42uVZo"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRc6Ax4WiLPxNvf; path=/; expires=Wed, 28 Dec 2022 04:53:53 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "80",
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
    "Tue, 28 Dec 2021 04:53:53 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brw4pAuLlLeDttPT8; path=/; expires=Wed, 28 Dec 2022 04:53:53 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/meta/bases/appA1Qak1T4cGoiP7/tables")
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
    "brw=brwXx8CWnLjB4nlOF; path=/; expires=Wed, 28 Dec 2022 04:53:54 GMT; domain=.airtable.com; samesite=none; secure",
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
    "brw=brw81ujEfxF8NGQ6z; path=/; expires=Wed, 28 Dec 2022 04:53:54 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Unknown%20Table")
  .query({})
  .once()
  .reply(
    404,
    {
      error: {
        type: "TABLE_NOT_FOUND",
        message:
          "Could not find table Unknown Table in application appA1Qak1T4cGoiP7",
      },
    },
    [
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
      'W/"74-lTufgLG4igfzHVtzDN4LfSHZmIA"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwkMBZrSaYvsdtvr; path=/; expires=Wed, 28 Dec 2022 04:53:54 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "116",
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
    "Tue, 28 Dec 2021 04:53:55 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwXBIJpexNXeVCEe; path=/; expires=Wed, 28 Dec 2022 04:53:55 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Tue, 28 Dec 2021 04:53:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwNlh2aTxhSwTBI1; path=/; expires=Wed, 28 Dec 2022 04:53:55 GMT; domain=.airtable.com; samesite=none; secure",
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
    "Tue, 28 Dec 2021 04:53:56 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwShfl543Kj4cmkd; path=/; expires=Wed, 28 Dec 2022 04:53:55 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tblsdYOTFAzBLHXTr")
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
      "Tue, 28 Dec 2021 04:53:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLmhoyJit3WCI2d; path=/; expires=Wed, 28 Dec 2022 04:53:56 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tblsdYOTFAzBLHXTr")
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
      "Tue, 28 Dec 2021 04:53:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8tDZYjXqQI5TYs; path=/; expires=Wed, 28 Dec 2022 04:53:56 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tblsdYOTFAzBLHXTr")
  .query({
    filterByFormula:
      "OR%28%7BCampaign%7D%3D%22Branded%20keywords%22%2C%7BCampaign%7D%3D%22Lookalikes%22%29",
    maxRecords: "2",
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000000039591dd4edb3018866fc5b276c0a404254e5ba61e20858c32d860fd61ea7ec48189bfa45e1d3bb39dd2aceaf98ee1027623bb282e01a7ade82a75123bb55f3fdfebef59600da9d2cce0eeb705e60c779b03539edcfdfc9144c5d4543ac71ece388826b3c0092d4aca73e982279a4a060c4da1be5b213cfcf8fbfe0f8a1932601b62c3aaae6ecd3c1b8ffb83765d17f8c6c3234bb5458c5a70101290d00fda3e0957cf1f7ea121984a58830e32ad0ab47364e9ad80d71b709c5e8edf45e5a78bdee9391d6ec0b67273f15b9881506501d23a6aaf9212043296e6cdc44449c319686ab992eefa54b29d32215997395354342ccd6780aca659c653641532dc8287927e828e5f9143d276d12b985bc787726f6bb26aecc65a2e2b688af605b599d2c5737abbb5bffe78a6542e5c7ee9e154836bc8ae79b1ae1976fc30f049eb9a44dde04d97048741107cc54b6feb703efc3c185c7c6fc5c3f3de7bfe2f871f949a52c1a7d0d8db23c6cde9fcaf1845faf5e597918de2796750ef88f928d14409b657ca0cb4d96fc4b520475b23ebac45e2b93b52199af07ce2cfa8a80095954e27d4385ee329769ea2975a1a5955be64e3adf666e337cb27fe933dda43030000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "835",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Tue, 28 Dec 2021 04:53:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1SyVV5v3ezq1l7; path=/; expires=Wed, 28 Dec 2022 04:53:57 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "456",
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
    "Tue, 28 Dec 2021 04:53:57 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brw8QTcGWupjhmNiW; path=/; expires=Wed, 28 Dec 2022 04:53:57 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/%F0%9F%93%88%20Results")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b08000000000000039dd5dd72da461407f0576134bd686714cd9e73f64b5c740618db811ac7e00f9c7472a188b52d031291049878fc147d805ee405f3085d29367210696bf6421aedaed0eab77f8e1e9cd484493ace9ce69f0f4e34769a45472bec8fded2fca27778d00d868eeb5c47665acc79704e8299b193da69108fcdb83131eb5579bbeb9c98fbbc91e5666ee7399d24cea378616c7f77364f4d9645496c0704111784aed39946e1c476a040ed3adffefeeb6ba313cce6417413678d5fafd364d6d8eacc834f53f39b5d67b1c26cde5e7df9dca1d9245ba437ce47b778e2d2a44f8f41cd5de76c6e62fb429a31e63a4749302d1776da69fcfe0b7a28ecd2ec85d3240f241742fa12190ab217c540df6982c77d5f4af40553023468550cb48a5fb7b7f80c38d3dc8e31ce1f5d274c4d909bf17954fa2003f906d81be4e7884d82268067d7f1c179742be6a30fb93c1c7d995d0657eddefd2ee6b7c9cc3432132ed2285f6f1b9f068bac06cc510be4ba029682efe17b3fef2d6faf93fe60753c390a6bbe54f102d679c113ec99173c4d5c4b246df71d80c1932ef3d0ee0c312e1501d79cf4932e090f7d0ea024574c688df2e7bae29c8926a726d375dd6132ea1da4fd2b0ae168c876e90e4d1ea437c606f566dbb61507d3751665dbbc4080a20cd4b32fed09eca7c778a5c5a5bc3b48ef6ac01ca81266e247e25641bcc92f7a5a9190165793cfb44de346f8991485c791146a0d24844f88fb05f6427787edf7ed143b9f2f46d12ed213b36adcdad026abd8becbffad0a40a449bca80afe5ea69fe6a331452174bb83c353550fadae48f58fa2fd32b45cbc08ad96ca476eab1331d0dffffa654d20ce7d5276d3a554760c9f88b9f2486a8e76b3501208fddfa105ac0b874c2c97b160ef547fe18f7e56125ea78b4c936d952e4061fd6adef4f236591cf7a2596646cb698d170037beb823b1f822b1a018907e6efe06d7d612dbc02fcfc43605173d1befa2b4a9ef47da2fbf099eaefbefcf726addcbc17a97ee71924c8269343135ddb33c99d78aadafa4ef57b0454c5e5f0986578341ef8eb786ddc33fa21aabdca0928de3362a559f3165cba6d68209c515a02ce696aad21305a760926c94a9282c25aae0b64050d5fee523564becc7c77f00447b412d39080000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "2105",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Tue, 28 Dec 2021 04:53:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwdAH9F5zQRFyzoa; path=/; expires=Wed, 28 Dec 2022 04:53:57 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "837",
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
    "Tue, 28 Dec 2021 04:53:58 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwERo26FY6G9qtBW; path=/; expires=Wed, 28 Dec 2022 04:53:58 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tblFPDCwyMJU8ok0w")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b08000000000000039dd5dd72da461407f0576134bd686714cd9e73f64b5c740618db811ac7e00f9c7472a188b52d031291049878fc147d805ee405f3085d29367210696bf6421aedaed0eab77f8e1e9cd484493ace9ce69f0f4e34769a45472bec8fded2fca27778d00d868eeb5c47665acc79704e8299b193da69108fcdb83131eb5579bbeb9c98fbbc91e5666ee7399d24cea378616c7f77364f4d9645496c0704111784aed39946e1c476a040ed3adffefeeb6ba313cce6417413678d5fafd364d6d8eacc834f53f39b5d67b1c26cde5e7df9dca1d9245ba437ce47b778e2d2a44f8f41cd5de76c6e62fb429a31e63a4749302d1776da69fcfe0b7a28ecd2ec85d3240f241742fa12190ab217c540df6982c77d5f4af40553023468550cb48a5fb7b7f80c38d3dc8e31ce1f5d274c4d909bf17954fa2003f906d81be4e7884d82268067d7f1c179742be6a30fb93c1c7d995d0657eddefd2ee6b7c9cc3432132ed2285f6f1b9f068bac06cc510be4ba029682efe17b3fef2d6faf93fe60753c390a6bbe54f102d679c113ec99173c4d5c4b246df71d80c1932ef3d0ee0c312e1501d79cf4932e090f7d0ea024574c688df2e7bae29c8926a726d375dd6132ea1da4fd2b0ae168c876e90e4d1ea437c606f566dbb61507d3751665dbbc4080a20cd4b32fed09eca7c778a5c5a5bc3b48ef6ac01ca81266e247e25641bcc92f7a5a9190165793cfb44de346f8991485c791146a0d24844f88fb05f6427787edf7ed143b9f2f46d12ed213b36adcdad026abd8becbffad0a40a449bca80afe5ea69fe6a331452174bb83c353550fadae48f58fa2fd32b45cbc08ad96ca476eab1331d0dffffa654d20ce7d5276d3a554760c9f88b9f2486a8e76b3501208fddfa105ac0b874c2c97b160ef547fe18f7e56125ea78b4c936d952e4061fd6adef4f236591cf7a2596646cb698d170037beb823b1f822b1a018907e6efe06d7d612dbc02fcfc43605173d1befa2b4a9ef47da2fbf099eaefbefcf726addcbc17a97ee71924c8269343135ddb33c99d78aadafa4ef57b0454c5e5f0986578341ef8eb786ddc33fa21aabdca0928de3362a559f3165cba6d68209c515a02ce696aad21305a760926c94a9282c25aae0b64050d5fee523564becc7c77f00447b412d39080000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "2105",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Tue, 28 Dec 2021 04:53:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwducQ5k23p3vtYZ; path=/; expires=Wed, 28 Dec 2022 04:53:59 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "837",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tblFPDCwyMJU8ok0w")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b08000000000000039dd5dd72da461407f0576134bd686714cd9e73f64b5c740618db811ac7e00f9c7472a188b52d031291049878fc147d805ee405f3085d29367210696bf6421aedaed0eab77f8e1e9cd484493ace9ce69f0f4e34769a45472bec8fded2fca27778d00d868eeb5c47665acc79704e8299b193da69108fcdb83131eb5579bbeb9c98fbbc91e5666ee7399d24cea378616c7f77364f4d9645496c0704111784aed39946e1c476a040ed3adffefeeb6ba313cce6417413678d5fafd364d6d8eacc834f53f39b5d67b1c26cde5e7df9dca1d9245ba437ce47b778e2d2a44f8f41cd5de76c6e62fb429a31e63a4749302d1776da69fcfe0b7a28ecd2ec85d3240f241742fa12190ab217c540df6982c77d5f4af40553023468550cb48a5fb7b7f80c38d3dc8e31ce1f5d274c4d909bf17954fa2003f906d81be4e7884d82268067d7f1c179742be6a30fb93c1c7d995d0657eddefd2ee6b7c9cc3432132ed2285f6f1b9f068bac06cc510be4ba029682efe17b3fef2d6faf93fe60753c390a6bbe54f102d679c113ec99173c4d5c4b246df71d80c1932ef3d0ee0c312e1501d79cf4932e090f7d0ea024574c688df2e7bae29c8926a726d375dd6132ea1da4fd2b0ae168c876e90e4d1ea437c606f566dbb61507d3751665dbbc4080a20cd4b32fed09eca7c778a5c5a5bc3b48ef6ac01ca81266e247e25641bcc92f7a5a9190165793cfb44de346f8991485c791146a0d24844f88fb05f6427787edf7ed143b9f2f46d12ed213b36adcdad026abd8becbffad0a40a449bca80afe5ea69fe6a331452174bb83c353550fadae48f58fa2fd32b45cbc08ad96ca476eab1331d0dffffa654d20ce7d5276d3a554760c9f88b9f2486a8e76b3501208fddfa105ac0b874c2c97b160ef547fe18f7e56125ea78b4c936d952e4061fd6adef4f236591cf7a2596646cb698d170037beb823b1f822b1a018907e6efe06d7d612dbc02fcfc43605173d1befa2b4a9ef47da2fbf099eaefbefcf726addcbc17a97ee71924c8269343135ddb33c99d78aadafa4ef57b0454c5e5f0986578341ef8eb786ddc33fa21aabdca0928de3362a559f3165cba6d68209c515a02ce696aad21305a760926c94a9282c25aae0b64050d5fee523564becc7c77f00447b412d39080000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "2105",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Tue, 28 Dec 2021 04:53:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYH2pUKPtd5RCBr; path=/; expires=Wed, 28 Dec 2022 04:53:59 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "837",
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
    "Tue, 28 Dec 2021 04:54:00 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brw0dsXktMOxoOJw7; path=/; expires=Wed, 28 Dec 2022 04:54:00 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Tue, 28 Dec 2021 04:54:00 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwF4RGihvtvyjq4E; path=/; expires=Wed, 28 Dec 2022 04:54:00 GMT; domain=.airtable.com; samesite=none; secure",
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
    "Tue, 28 Dec 2021 04:54:01 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brw5xhwxw6OHjNrOR; path=/; expires=Wed, 28 Dec 2022 04:54:00 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Tue, 28 Dec 2021 04:54:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwFAfUKIG6DG42fP; path=/; expires=Wed, 28 Dec 2022 04:54:01 GMT; domain=.airtable.com; samesite=none; secure",
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
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Tue, 28 Dec 2021 04:54:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwg1IliwkCmvmPzS; path=/; expires=Wed, 28 Dec 2022 04:54:01 GMT; domain=.airtable.com; samesite=none; secure",
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
