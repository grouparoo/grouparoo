const nock = require("nock");

nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(
    200,
    {
      bases: [
        {
          id: "appA1Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwkvtx3pYuBUFd70; path=/; expires=Sun, 08 Jan 2023 00:09:50 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
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
    "Sat, 08 Jan 2022 00:09:50 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brw6aaWc0rCiHCkuq; path=/; expires=Sun, 08 Jan 2023 00:09:50 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:50 GMT",
      "ETag",
      'W/"50-8xYAvLBWleFLl/buYhG+M42uVZo"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwuGvcmuTuRAeBHe; path=/; expires=Sun, 08 Jan 2023 00:09:50 GMT; domain=.airtable.com; samesite=none; secure",
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
  .reply(
    200,
    {
      bases: [
        {
          id: "appA1Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQLuG4mVeKZarCt; path=/; expires=Sun, 08 Jan 2023 00:09:51 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
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
    "Sat, 08 Jan 2022 00:09:51 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwyq7ySJ4YaTP1Pm; path=/; expires=Sun, 08 Jan 2023 00:09:51 GMT; domain=.airtable.com; samesite=none; secure",
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
    "Sat, 08 Jan 2022 00:09:51 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brw0eWj9Dvjt1qZAe; path=/; expires=Sun, 08 Jan 2023 00:09:51 GMT; domain=.airtable.com; samesite=none; secure",
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
    200,
    {
      bases: [
        {
          id: "appA1Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brws5OK8ja9hQgfQe; path=/; expires=Sun, 08 Jan 2023 00:09:52 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
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
    "Sat, 08 Jan 2022 00:09:52 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwCdYeZAYiqgIdaU; path=/; expires=Sun, 08 Jan 2023 00:09:52 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:52 GMT",
      "ETag",
      'W/"74-lTufgLG4igfzHVtzDN4LfSHZmIA"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3mSj1NZHjlLFFH; path=/; expires=Sun, 08 Jan 2023 00:09:52 GMT; domain=.airtable.com; samesite=none; secure",
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
  .reply(
    200,
    {
      bases: [
        {
          id: "appA1Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTcIuh1TtVPhjEj; path=/; expires=Sun, 08 Jan 2023 00:09:53 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
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
    "Sat, 08 Jan 2022 00:09:53 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwmfvIuX80FBFURD; path=/; expires=Sun, 08 Jan 2023 00:09:53 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/All")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003e5565b4fe34614fe2b96fbd24aac331e7b3c761eaa4dd8b2121b2e0becd252101adbc7d88b2fd9c93821a0fcf79eb1037142da52d4957a4179603c73eee73bdf79302544958c2766ffd707338bcdbefeb0bf977f980ef820f5df059f6ecd1d33c920d76f1ecce4baa873958d73386904475979ab851b3df4787ef0cba9720677dec7b979b5631e8a0250e55066a2d46aaecbba08419a7d975ab63e8fd3aa84c3e547f37b8f911f0cc6d81b9b3a6e23d058cbb312cee04ee193142418d9c410c66559c2ccd057cd43295456dea0667d08858caa18b4c3aa951ba042e67173a1afa314a2dbb0ba33fb4ad6a0bf4c503687d1ca4eb5540b85c8723c873a84b770270a0cdd8aaaa2b915b5aa1ebd6fe28985d20153426d8ce10db19b67512d2594d1dcec7b4dd0202328d10a691ccfa27469f43b23051183bc2cc7428a1b29c6e9659b37adf72c2bd674d3333be83ba44f884508b968de85b55255a9e3ce4508daf1a33194c6a793115ed7527f48951a4ffabdde6c36b36e6455a3a9aa6a226a7323016dc5c3b956d234443d91c7e508ee2f0e539f0eeff77751d55a5aac1caa52c8f8edbaba1db3ec94df18b58fd6ac6c84447d1d12217de6ad424a2a894d201ef5b419cdc5441d5471868df9ad5ded9a7aee2fb5fbc4ebd38ebfb2caf37a6cf6994b2cdf59fdb93b1df08caaeab61e7f16790d1a3d6ec0bd20b86a3253d5ba356cb4fdc2242d7656c8fd509c291ab1690819899c35e42eb1f8d374038ac4625dfcb0edf8197acc75a8dda6e4195ad4ac323432db5eadb52edd856ee0932e8860ba05438f2939851c22d5cc9221a6c5bcda04185d996edf6ab7f4cbae968152224a0b845767a409a50e69914f8ff9ede8cbd7bd42176a96c52a451739aa4d21bb49519debd34d94c4b92532a944d87adcb3c4ca402f4e1296243c8988f04184b117bab60d0138819b047618f46cdff14448edde29d612cad3b452ab320a65dbd70ebd76bcc18135c6dceb6ae5b0ecc456c2d022c64ac610ca7894329ec426d93d8a709f11ac9e9a8fb57c56881be8b5f72ac514965883a6112685c873fdcf8b233d7b92ef791e71292784269c0482800b6140398d5c3f0c6de606bdd0735c97db7c956287ad32ec78d840b99037f05a0782c0e58e60b11d318af572135bb81ef1398f88eb73417b0ee3310903f1fb35d63d5cbf3e05228ed1a0c33c1cd509053f49f0978848f0d8172c097bcc6310f8c03a2940a0769280a7c56271b5410d2d0e9fc8c1b6a8d3edec5d9c2b22ac105b95ecf4f6df3df2aeb6d28dade986303d76fe3774a32725fd27b28d439eb30dc27a0c5126f2865350ea501c2e636f0985bc8e504e8ee17c7ef045f2b43e7ab7ffe25530226c3a2d1939e20775708e62f8edfd85f2f6ceef8bcfe2e7e1fe5d673d1c94f1dcdcb60ddabcdd06039f7b5bb7c11c69d4c0c6ab6697e565f9c4407fd6795dbea3dbf96e1797453f202fde17558ae37a83fe1cc75ba33f8171be84fe4e20c6abf77afe3f6741670b0bb602cfb64f4accf575d322f6c6c6f9a3f1b5ae145c966f8c10472228032bd03921b12f37d0d66477087d531cfca7278b6e78e7df3259a86ff98473eed824a0aee305fe1f2cb294342bef8e4b7d4dcfdd8d96fe850174b5f80d8531b954990e0000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "3737",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwczyUJsoblFfGOu; path=/; expires=Sun, 08 Jan 2023 00:09:53 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1189",
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
      "1f8b0800000000000003e5565b4fe34614fe2b96fbd24aac331e7b3c761eaa4dd8b2121b2e0becd252101adbc7d88b2fd9c93821a0fcf79eb1037142da52d4957a4179603c73eee73bdf79302544958c2766ffd707338bcdbefeb0bf977f980ef820f5df059f6ecd1d33c920d76f1ecce4baa873958d73386904475979ab851b3df4787ef0cba9720677dec7b979b5631e8a0250e55066a2d46aaecbba08419a7d975ab63e8fd3aa84c3e547f37b8f911f0cc6d81b9b3a6e23d058cbb312cee04ee193142418d9c410c66559c2ccd057cd43295456dea0667d08858caa18b4c3aa951ba042e67173a1afa314a2dbb0ba33fb4ad6a0bf4c503687d1ca4eb5540b85c8723c873a84b770270a0cdd8aaaa2b915b5aa1ebd6fe28985d20153426d8ce10db19b67512d2594d1dcec7b4dd0202328d10a691ccfa27469f43b23051183bc2cc7428a1b29c6e9659b37adf72c2bd674d3333be83ba44f884508b968de85b55255a9e3ce4508daf1a33194c6a793115ed7527f48951a4ffabdde6c36b36e6455a3a9aa6a226a7323016dc5c3b956d234443d91c7e508ee2f0e539f0eeff77751d55a5aac1caa52c8f8edbaba1db3ec94df18b58fd6ac6c84447d1d12217de6ad424a2a894d201ef5b419cdc5441d5471868df9ad5ded9a7aee2fb5fbc4ebd38ebfb2caf37a6cf6994b2cdf59fdb93b1df08caaeab61e7f16790d1a3d6ec0bd20b86a3253d5ba356cb4fdc2242d7656c8fd509c291ab1690819899c35e42eb1f8d374038ac4625dfcb0edf8197acc75a8dda6e4195ad4ac323432db5eadb52edd856ee0932e8860ba05438f2939851c22d5cc9221a6c5bcda04185d996edf6ab7f4cbae968152224a0b845767a409a50e69914f8ff9ede8cbd7bd42176a96c52a451739aa4d21bb49519debd34d94c4b92532a944d87adcb3c4ca402f4e1296243c8988f04184b117bab60d0138819b047618f46cdff14448edde29d612cad3b452ab320a65dbd70ebd76bcc18135c6dceb6ae5b0ecc456c2d022c64ac610ca7894329ec426d93d8a709f11ac9e9a8fb57c56881be8b5f72ac514965883a6112685c873fdcf8b233d7b92ef791e71292784269c0482800b6140398d5c3f0c6de606bdd0735c97db7c956287ad32ec78d840b99037f05a0782c0e58e60b11d318af572135bb81ef1398f88eb73417b0ee3310903f1fb35d63d5cbf3e05228ed1a0c33c1cd509053f49f0978848f0d8172c097bcc6310f8c03a2940a0769280a7c56271b5410d2d0e9fc8c1b6a8d3edec5d9c2b22ac105b95ecf4f6df3df2aeb6d28dade986303d76fe3774a32725fd27b28d439eb30dc27a0c5126f2865350ea501c2e636f0985bc8e504e8ee17c7ef045f2b43e7ab7ffe25530226c3a2d1939e20775708e62f8edfd85f2f6ceef8bcfe2e7e1fe5d673d1c94f1dcdcb60ddabcdd06039f7b5bb7c11c69d4c0c6ab6697e565f9c4407fd6795dbea3dbf96e1797453f202fde17558ae37a83fe1cc75ba33f8171be84fe4e20c6abf77afe3f6741670b0bb602cfb64f4accf575d322f6c6c6f9a3f1b5ae145c966f8c10472228032bd03921b12f37d0d66477087d531cfca7278b6e78e7df3259a86ff98473eed824a0aee305fe1f2cb294342bef8e4b7d4dcfdd8d96fe850174b5f80d8531b954990e0000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "3737",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwkLvvlFq0vxQay8; path=/; expires=Sun, 08 Jan 2023 00:09:54 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1189",
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
      "1f8b0800000000000003e5565b4fe34614fe2b96fbd24aac331e7b3c761eaa4dd8b2121b2e0becd252101adbc7d88b2fd9c93821a0fcf79eb1037142da52d4957a4179603c73eee73bdf79302544958c2766ffd707338bcdbefeb0bf977f980ef820f5df059f6ecd1d33c920d76f1ecce4baa873958d73386904475979ab851b3df4787ef0cba9720677dec7b979b5631e8a0250e55066a2d46aaecbba08419a7d975ab63e8fd3aa84c3e547f37b8f911f0cc6d81b9b3a6e23d058cbb312cee04ee193142418d9c410c66559c2ccd057cd43295456dea0667d08858caa18b4c3aa951ba042e67173a1afa314a2dbb0ba33fb4ad6a0bf4c503687d1ca4eb5540b85c8723c873a84b770270a0cdd8aaaa2b915b5aa1ebd6fe28985d20153426d8ce10db19b67512d2594d1dcec7b4dd0202328d10a691ccfa27469f43b23051183bc2cc7428a1b29c6e9659b37adf72c2bd674d3333be83ba44f884508b968de85b55255a9e3ce4508daf1a33194c6a793115ed7527f48951a4ffabdde6c36b36e6455a3a9aa6a226a7323016dc5c3b956d234443d91c7e508ee2f0e539f0eeff77751d55a5aac1caa52c8f8edbaba1db3ec94df18b58fd6ac6c84447d1d12217de6ad424a2a894d201ef5b419cdc5441d5471868df9ad5ded9a7aee2fb5fbc4ebd38ebfb2caf37a6cf6994b2cdf59fdb93b1df08caaeab61e7f16790d1a3d6ec0bd20b86a3253d5ba356cb4fdc2242d7656c8fd509c291ab1690819899c35e42eb1f8d374038ac4625dfcb0edf8197acc75a8dda6e4195ad4ac323432db5eadb52edd856ee0932e8860ba05438f2939851c22d5cc9221a6c5bcda04185d996edf6ab7f4cbae968152224a0b845767a409a50e69914f8ff9ede8cbd7bd42176a96c52a451739aa4d21bb49519debd34d94c4b92532a944d87adcb3c4ca402f4e1296243c8988f04184b117bab60d0138819b047618f46cdff14448edde29d612cad3b452ab320a65dbd70ebd76bcc18135c6dceb6ae5b0ecc456c2d022c64ac610ca7894329ec426d93d8a709f11ac9e9a8fb57c56881be8b5f72ac514965883a6112685c873fdcf8b233d7b92ef791e71292784269c0482800b6140398d5c3f0c6de606bdd0735c97db7c956287ad32ec78d840b99037f05a0782c0e58e60b11d318af572135bb81ef1398f88eb73417b0ee3310903f1fb35d63d5cbf3e05228ed1a0c33c1cd509053f49f0978848f0d8172c097bcc6310f8c03a2940a0769280a7c56271b5410d2d0e9fc8c1b6a8d3edec5d9c2b22ac105b95ecf4f6df3df2aeb6d28dade986303d76fe3774a32725fd27b28d439eb30dc27a0c5126f2865350ea501c2e636f0985bc8e504e8ee17c7ef045f2b43e7ab7ffe25530226c3a2d1939e20775708e62f8edfd85f2f6ceef8bcfe2e7e1fe5d673d1c94f1dcdcb60ddabcdd06039f7b5bb7c11c69d4c0c6ab6697e565f9c4407fd6795dbea3dbf96e1797453f202fde17558ae37a83fe1cc75ba33f8171be84fe4e20c6abf77afe3f6741670b0bb602cfb64f4accf575d322f6c6c6f9a3f1b5ae145c966f8c10472228032bd03921b12f37d0d66477087d531cfca7278b6e78e7df3259a86ff98473eed824a0aee305fe1f2cb294342bef8e4b7d4dcfdd8d96fe850174b5f80d8531b954990e0000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "3737",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwqmxXzAAtdzbD8z; path=/; expires=Sun, 08 Jan 2023 00:09:54 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1189",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tblsdYOTFAzBLHXTr")
  .query({ filterByFormula: "%7BName%7D%3D%22Evan%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5544d8fdb3610fd2b86ce5d89a4be754a1cb487d47183ae93c316c162288e2ca594a8d2d43abb0bfff70c2527765a14080204d04124e7cdbc997933cf81c5da587508aabf9e834e0595bff8bddf3951a70f123b56c7c12f41d3a1f636cfc1167a24a35f1f60f0f7f7c3d44bb441c5c2d41f2db86ed807d57c90606ba3d0c31c7e72045b6769120b1e9cfcf3812c356eba0177cbab3b9a558b1667c76af2becc10544959307f833d749acc9062bfc04fd08f1ac3daf4b3793f69d7d1c52d6aac9d4f2758eb09830ffe112667b667a2e2127ab1f5b4bce5b59797ce41ddf638b8abc280735bd1eb87b7f9df9b8ffffcd6df11e4d829d712c59cdcb6d8ed5b7297147498aca7da3a371eaa28523a84ce3a900be328844b8048354dda347953332810a4ca64c2399618974953725946bc8833908247b7b5451c6e5be30413fc868b1b5180e3fc3e16f771f6f24d3852ed7db7340e4b9f16c4ca435617cc0adcea0b6af51576e89e08921729a3eeb9c7d1e3bb1ef6182defaea5120ed4835908871eb4f63fdf9de9ee2b3eca3296889c31d1e4ac048609ca52e4a24e0a29799a9491cce224c9797e29719c5e2a1c6724200d768f3f4aa02c933c8654f13a15d4afa4e19064acc8f39a25450e228ad35c3159c2fff7d86b78faf112805214304e3350d8082c9a86be066ac855016923a3344bb12c30bd2a0163ecaa08743a9d4eb3c0ebc95a1ceac7a0ca96391cd1d6142fa87828e26b65bf325a8334345bc65e697b3ad8b7c3069feeb66d21d64faf5f51d42ff3266d0743a8d10c60d58bbd35d308d698f3e89d85b6f646abcd62142cac1438dc75f3f3a23d7ec3c48ea51563f485c4ff6e9e3a3939e707fd997a2ad187fc6324d1befb7313fc7b908ec763f82d83799590ca29965a3f7a273f25a1ab28dfa4e4c769c74b9f529a5d526a8ca58ac379538af94ec3c1bd31aaa365fab3995e87fa2f5dc12b96917e2e742da9621ae7b11eb1ee40bf07bf122b5af7db73ee66f2726274f8ce329c3e9c3e0385f5e1545e060000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1630",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwuld3Hg9r4XovBL; path=/; expires=Sun, 08 Jan 2023 00:09:54 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "750",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tblsdYOTFAzBLHXTr")
  .query({ filterByFormula: "%7BName%7D%3D%22junkId%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:09:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw5UqOtHUbWwggmf; path=/; expires=Sun, 08 Jan 2023 00:09:54 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9jOIdsU2Do5lrw; path=/; expires=Sun, 08 Jan 2023 00:09:55 GMT; domain=.airtable.com; samesite=none; secure",
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
  .reply(
    200,
    {
      bases: [
        {
          id: "appA1Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Sat, 08 Jan 2022 00:09:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwk3iCEG9QcLmSXP; path=/; expires=Sun, 08 Jan 2023 00:09:55 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
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
    "Sat, 08 Jan 2022 00:09:55 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwAXau8fgp9Zb5rf; path=/; expires=Sun, 08 Jan 2023 00:09:55 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw7PvOMaT6fiLBLC; path=/; expires=Sun, 08 Jan 2023 00:09:56 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6bbFYu0iR30hdI; path=/; expires=Sun, 08 Jan 2023 00:09:56 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwCjWp8hpHfRo4Xe; path=/; expires=Sun, 08 Jan 2023 00:09:56 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22junkId%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:09:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwaBta9WQFYbo5XC; path=/; expires=Sun, 08 Jan 2023 00:09:56 GMT; domain=.airtable.com; samesite=none; secure",
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
