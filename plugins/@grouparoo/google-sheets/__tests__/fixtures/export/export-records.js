const nock = require("nock");
process.env.GOOGLE_SHEETS_JEST_TIMESTAMP = "1644343669430";

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
      "d0bb64ad0e0a2a74a785523f507e6ac22613688cc8f00b12244eef5ea7db5ec17788f700244d69dbe25b95d312bc8181cc8c493a499415148a8c5c1cf8ee7488f79879ab1bf36d044b4dd7e5744f24bed463925e036f36186b9326be73292ab84d147172e628fcf4ce280b9707e7dc998db530b0b45cd61f728dd85b0155931fb1164a59b85b8662e9d67d98a1be65ed22d52e577d1cc6dc4ba71d0e9a7bb73cba6a72b276828b41c172c89c08a277b45988ab197f884d5f91a52c1a7f97ef59e01490f5d0ce03db8c15a65695ce3bc78bcaafec9b451097ed79dc3034797979f9078c00bdd719a72dce9e1fa873c31881bf1cf06da8e9738835259c72f0f30bdfb2b3de3b040000",
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
      "Tue, 08 Feb 2022 18:07:52 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:07:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:07:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:07:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Tue, 08 Feb 2022 18:07:54 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
    'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
    "Accept-Ranges",
    "none",
    "Vary",
    "Origin,Accept-Encoding",
    "Connection",
    "close",
    "Transfer-Encoding",
    "chunked",
  ]);
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:07:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Tue, 08 Feb 2022 18:07:55 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
    'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
    "Accept-Ranges",
    "none",
    "Vary",
    "Origin,Accept-Encoding",
    "Connection",
    "close",
    "Transfer-Encoding",
    "chunked",
  ]);
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffedd44b7282300000d0bb642d0e920925dd154c41e56b41d10d03183f0409054c814eef5ea7db5e817788f70dd23ca76d9b749cd10abc822155f03c9f67f25b2ce431f4737bf358b1f7d0ab563a560af572343d5eae597497a5ba5cef6f526cf0fb8a5519f1594878df506debcae98e459c6a0a3f20836e9766a0d2bc8eaf09d1129145faa60ff3112e3e9c52644be8943b9459a753bd2f74392cd9153d9a54d8467fd6851613e20d3c78c14e58417f6b2ed17ee15bd0745bed134afae642865e2d084f548d58871472c70ebeb2918d0c9d05eb82ce8d9cb390b1e80bb3eb8e68a016ae98339f4c26ff8019a07d7d6b689bdc9e1f4084f10cfce59074434d9f43e8346d68037e7e01c5e58a2e3b040000",
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
      "Tue, 08 Feb 2022 18:07:55 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:07:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:07:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:07:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Tue, 08 Feb 2022 18:07:57 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
    'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
    "Accept-Ranges",
    "none",
    "Vary",
    "Origin,Accept-Encoding",
    "Connection",
    "close",
    "Transfer-Encoding",
    "chunked",
  ]);
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:07:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Tue, 08 Feb 2022 18:07:58 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
    'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
    "Accept-Ranges",
    "none",
    "Vary",
    "Origin,Accept-Encoding",
    "Connection",
    "close",
    "Transfer-Encoding",
    "chunked",
  ]);
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:07:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Tue, 08 Feb 2022 18:08:00 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
    'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
    "Accept-Ranges",
    "none",
    "Vary",
    "Origin,Accept-Encoding",
    "Connection",
    "close",
    "Transfer-Encoding",
    "chunked",
  ]);
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
      "02ffedd4417282301400d0bb642d4e1410d21d16948a1118020a9b0cd20f8a8a94a0029ddebd4eb7bd82ef10ef1ba5590642f0f67a820abda13e9d927136de636377c703f3ca094f06f716c953a5fad8e7c27512a8ecf586c3a124d1aa3d9fb6baa49b9e76ead578255451c8d21adb85198733d67acccf5b4533b997afb14c13ab2b1632afacb27589afd044e64cd2638b2ef3ab83ddf3e50ef4f68ea941c99c7dce1fda61272445db4f2eb3831b88a44e8f45630794c22cb5bb0c0f815ef8d657cca2c9d0d5447bec42cfc1c69dfb4509a61a4a8b45c7fda5813b657bc351bf618951850c9cfa3a7e7979f9078d1074f5b101c18fcf0f64959011facb81b77d0dcf21e69036d0a09f5f8d4cfe523b040000",
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
      "Tue, 08 Feb 2022 18:08:00 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(200, { range: "'export-records'!A2:F1000", majorDimension: "ROWS" }, [
    "Content-Type",
    "application/json; charset=UTF-8",
    "Vary",
    "X-Origin",
    "Vary",
    "Referer",
    "Date",
    "Tue, 08 Feb 2022 18:08:02 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
    'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
    "Accept-Ranges",
    "none",
    "Vary",
    "Origin,Accept-Encoding",
    "Connection",
    "close",
    "Transfer-Encoding",
    "chunked",
  ]);
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:append",
    { values: [["1", "John", "", null, null, null]] }
  )
  .query({
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    includeValuesInResponse: "true",
  })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      tableRange: "'export-records'!A1:F1",
      updates: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        updatedRange: "'export-records'!A2:C2",
        updatedRows: 1,
        updatedColumns: 3,
        updatedCells: 3,
        updatedData: {
          range: "'export-records'!A2:C2",
          majorDimension: "ROWS",
          values: [["1", "John"]],
        },
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "00000002ffedd44b7282300000d0bb646d1d3002d29dc2f0272245e2b0618006f944a00428e8f4ee75baed157c87780f906419612c1eda9a34e01d2cc9465e67eb94db5f26ee1e786306c5fafbadd09b2a5f248e9e8492a278821f8e12f06ea40ed8a26581e83421225d4fa1ab8d95eaea3882aef4e99ffbf65e1c52cfaa27f7a8a844bdeeeff8c6edf02637a4e1dcd441d269c1ae35957a4b7d0d393684d53e156b0f47b67d9d6793b891c32b73a9e2c1b3243b45bcbeed8c4bdf87486315952d75d047c9891b9478b78937c35c66e618fa8a911f83991bb56513f94522c28360b40c332daebe287576eb9797977fc00a90b92b7bc2e2f2f90114647905fe728887a523cf210e24e9490f7e7e01c7d64f133b040000",
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
      "Tue, 08 Feb 2022 18:08:04 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "0002ffedd44b7282300000d0bb642d8e7ce4d31d51a9fc8541a16e984803624023e1abd3bbd7e9b657f01de23d01ca32cc58dade08be820f3021419b67f3d3424ffac52372ef64ebca553244bc54748c1c16a454bed5032486e10aad3bd505a415c949157d35e9d14ce3a180a706f987bbc42153d941c8d4a51a1a752bd6477474bba936793a21f37e65b2d549f2c688bd7d98a8dbb0968430ca2829829397533d28eddc49202c15214fe3ac0ad9c311d7b5554857cb0ab4c0ca969b15cf694961cbbb81e8ae7cf6c54b192bcecdea299f5343c79e3e9cc974f1ecb5693ba3f41972826f8be3aadfcfdfdedefe013380475a3698a5e5eb0371a96933f09743da4e14bf86801835b8013fbf51764b143b040000",
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
      "Tue, 08 Feb 2022 18:08:09 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "", "Doe"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:D2",
      updatedRows: 1,
      updatedColumns: 4,
      updatedCells: 4,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John", "", "Doe"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:append",
    { values: [["2", "Pete", "", null, null, null]] }
  )
  .query({
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    includeValuesInResponse: "true",
  })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      tableRange: "'export-records'!A1:F2",
      updates: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        updatedRange: "'export-records'!A3:C3",
        updatedRows: 1,
        updatedColumns: 3,
        updatedCells: 3,
        updatedData: {
          range: "'export-records'!A3:C3",
          majorDimension: "ROWS",
          values: [["2", "Pete"]],
        },
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "", "Doe"],
        ["2", "Pete"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "", "Doe"],
        ["2", "Pete"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "8b08000000000002ffedd44b7282300000d0bb642d4e20154d7788e00745b102c50d13350a44c3278801a777afd36dafe03bc47b02723c5221e23a6794834fd0120df78ffd0334be1bd8ed368fb53597b369a727d1928bdd3d254e11cbad79f6d5a0f6712ec8b9a32de2b03bf95499d4a8f149b695363d4d0c2a16ed1eab4b33738489e1e6a625d14667b3269030d81a9db123ecabc4a32b6598a27ce5a21c225999ea580992b2789899751996a8e48ee001bf0ef6fac816e8a6a4d27095ab3bbeb08765ea5d6b6bc3b53f0c2b9cdc7d8dd5d6a1829e3e08a3f0ee967cb5081b472edd289b279e9b69535b65deeca3fff6f6f60fe8012a8bb4a2224e5f1fa001c63df097435cb7057d0d31a6a4a215f8f905f6f4a6d73b040000",
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
      "Tue, 08 Feb 2022 18:08:16 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "", "Doe"],
        ["2", "Pete"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "", "Doe"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "", ""]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:D2",
      updatedRows: 1,
      updatedColumns: 4,
      updatedCells: 4,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John"],
        ["2", "Pete"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "0000d0bb646d198320a5bbf0d3a130a880801b2640a4347ce41bc1e9ddeb74db2bf80ef11e00a729e9fb786828a9c10798312f732997ac5138ad17cf2693e29251d89e9c51c6d962279e3d547be8172cb06ea89c77448fb0632a69e342c84fa671e6e3abfb55857c62d76fc256f2b0c70e4136a4b56f8ff9e8c3ea9c98c78ab2fc7246681b221489ef87ef83bb54aa43f4f5289393240e156f5cfad261a7582fd5e602b5c1da8d5a1904e2675d16fe466a6b41c5658e283cf68a6474ad06613859fbbbca5fe339973b33639bb6a0a62f44cda4ee5a96d35cd06b6a51e4478c7b7979f907ac00b9df8a8ef471f1fc6023caf20afce5100ff38d3c875008ee48077e7e010bc2a5903b040000",
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
      "Tue, 08 Feb 2022 18:08:20 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John"],
        ["2", "Pete"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) High Value"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:C2",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John", "(test) High Value"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:08:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    429,
    {
      error: {
        code: 429,
        message:
          "Quota exceeded for quota metric 'Read requests' and limit 'Read requests per minute per user' of service 'sheets.googleapis.com' for consumer 'project_number:172856096362'.",
        status: "RESOURCE_EXHAUSTED",
        details: [
          {
            "@type": "type.googleapis.com/google.rpc.ErrorInfo",
            reason: "RATE_LIMIT_EXCEEDED",
            domain: "googleapis.com",
            metadata: {
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
              quota_metric: "sheets.googleapis.com/read_requests",
              service: "sheets.googleapis.com",
            },
          },
        ],
      },
    },
    [
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Tue, 08 Feb 2022 18:08:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    429,
    {
      error: {
        code: 429,
        message:
          "Quota exceeded for quota metric 'Read requests' and limit 'Read requests per minute per user' of service 'sheets.googleapis.com' for consumer 'project_number:172856096362'.",
        status: "RESOURCE_EXHAUSTED",
        details: [
          {
            "@type": "type.googleapis.com/google.rpc.ErrorInfo",
            reason: "RATE_LIMIT_EXCEEDED",
            domain: "googleapis.com",
            metadata: {
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
              quota_metric: "sheets.googleapis.com/read_requests",
              service: "sheets.googleapis.com",
            },
          },
        ],
      },
    },
    [
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Tue, 08 Feb 2022 18:08:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Pete"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "000000000002ffedd4cb7643400000d07f9975388a7874e71595908e12c166ce941984849068e8e9bf37a7dbfe82fb11f71be02c23c3806e6d4d2ee0154c9857d98cfde4b478e4e6d0931891e10e4a44f524ac44e376e6ed3e3418ab3ded48a40859e32ab9c7d3adeec84110dbbd7b3c616e03b93ead13a12dca62fcc8e317d1b19adc94e07bfb15decdbc4acaa3c4279dff160e863f9a94e63cb2ea47b2c5092430dd4d751946f69cd2f3bed46226bdce22dacaf72170e7585135bcee324ca161f029c292b4b71b1bc2c073328a7caff06367575ceeaa4e3c176d86d456c62b4191bc9f70218fcac1e9dc8663178bc53f6005c8a3ab7a32a0eaf981b056d515f8cb01dda68e3c87d009ee490f7e7e012627fe993b040000",
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
      "Tue, 08 Feb 2022 18:09:06 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Pete"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) High Value"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) Churned,(test) High Value"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:C2",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John", "(test) Churned,(test) High Value"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3:F3"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Pete"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3%3AF3",
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Sally", "(test) High Value"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A3:C3",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A3:F3",
        majorDimension: "ROWS",
        values: [["2", "Sally", "(test) High Value"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) Churned,(test) High Value"],
        ["2", "Sally", "(test) High Value"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) Churned,(test) High Value"],
        ["2", "Sally", "(test) High Value"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "d0bb642d4ca402a63b18101d2ca1d0099f4d266000c54f8c8840a777afd36dafe03bc4fb06ac2cf9ed46bb4bcbcfe01d8c4c436aa916d04a7b387de1ba5f58633d584ec2793666eb2a0a7277b5c9f1dd1c6ce561f986828d430e17e148fd408b038fe5c448e3a1baba3b78bd8bdd7de1d048a7f62a273589fa221a5b9436de56eb742af069e9553eacaada146413e2984de17461c94ac879423593d47ee2548ae60ee7b9b33da7a7a6f990b2d896812ef647f699f792500bd518369641e17187a89f69ed118e0f5c27c589ac5918c6811bdaca24fb2e13dea145e666d9aa2f2f2fff8019e083d84b7ea3fbe7076f3a4233f09703ed46c19f43d89c492ec1cf2fbceda83b3b040000",
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
      "Tue, 08 Feb 2022 18:09:14 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) Churned,(test) High Value"],
        ["2", "Sally", "(test) High Value"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) Churned,(test) High Value"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) High Value"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:C2",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John", "(test) High Value"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3:F3"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Sally", "(test) High Value"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3%3AF3",
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Sally", "(test) High Value"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A3:C3",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A3:F3",
        majorDimension: "ROWS",
        values: [["2", "Sally", "(test) High Value"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Sally", "(test) High Value"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Sally", "(test) High Value"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "642d0e5f2ddd11ac1d51741414e826c327d448f92560483abd7b9d6e7b05df21de3748f31c338686b6c20d780522d5ed793ecf5427beab32f48b6609bd425d6f5f042ead937bb2ca6415f9f61d6b5d2c5bace9b77e113a92affb77cb1d563adca2ba7213e5aec8b32409ebcb0319e1656152e3934c62772e8e390bd42f2ee1b1e7d4a93f5a5d5786eb58981589acec8c83c434ca5d4097a64dab94b48e20be8cc74aec57a546d3260b848c32ef50b2b70da1893b7ad77013709747e8e82971ef5e0c25853b8ed4c3d0355ca30ede4ba3d62764df6e236d19821e9f3f3d3dfd0366004f1da19821f2f8c0b06c7b06fe724083e8f0630888538a29f8f905465063c13b040000",
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
      "Tue, 08 Feb 2022 18:09:21 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Sally", "(test) High Value"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Sally", "(test) High Value"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value"],
        ["2", "Sally", "(test) High Value"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["-", "-", "-", "-", "-", "-"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:F2",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["-", "-", "-", "-", "-", "-"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["-", "-", "-", "-", "-", "-"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
      ],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:F2",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [
          ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3:F3"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Sally", "(test) High Value"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3%3AF3",
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Evan", ""]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A3:C3",
      updatedRows: 1,
      updatedColumns: 3,
      updatedCells: 3,
      updatedData: {
        range: "'export-records'!A3:F3",
        majorDimension: "ROWS",
        values: [["2", "Evan"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "18",
      "00e0bb642d0e1509a43b628b0f44647c50dc6422fed6080a268212a777afd36dafe07788ef8178968152ec5ae67046efa8e53dd2cdba5bd3fb6a4cbd9c5b78968d34f7a3be56cef765582e9c1af6f22807a590fc381988f233d277e5f8a3eccd1d4acf680b98d0657ca07ba319bbd2a999c3e3f52e186f36d8a4c208e9fc6398548a862b363d1d0a73974ef3c1cc323015ea3c0518bb202d3bc0f3959711eba62f4a9324304271b56963631109655ab1af146cdb581b759e78fbde28c8fb51b4764dd210c1539ceae816dcb04c8a0d4999ddf7d3e2104e2a9fa58b935bbb5ef7e5e5e51fd44170af8404c5c4f303cb26a483fe7260d7b682e71014b804897e7e01ab3ddb3c3b040000",
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
      "Tue, 08 Feb 2022 18:09:32 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "82300000d0bb64ad4e44284d7760d54c058382ca64c3440c121508e123d0e9ddeb74db2bf80ef1be018b635e55515ddc780e3e40cf343489272768852d1c022f30ce7bab2f5c8b5c1ed3e0ba1ae6ebe2e46ff099c57d7048fde24b3ad918e5ebce35e12a94a9e06d86f9a2f3533391764642e11e936bd36c1be88ddb5bdd5586bacbc4f3a4e1e2939db0b2c89bc7548acc9896fb83a277afa4a8479a5d517c6190ce76f0d31ad01b199776142a53607fbe24f47c18dc106b3e5fcd1cd6b57915e1882c1a48865d98e72ce85baa5fe09638a232e9a375d2e546434745eb77add4757df2f2f2f20f1801de49a1781589e7073303a111f8cb21aa7bc99f43d89c29aec0cf2ff5ed92f83b040000",
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
      "Tue, 08 Feb 2022 18:09:35 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["2", "Evan"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3:F3"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["2", "Evan"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A3%3AF3",
    {
      range: "'export-records'!A3:F3",
      majorDimension: "ROWS",
      values: [["-", "-", "-", "-", "-", "-"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A3:F3",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A3:F3",
        majorDimension: "ROWS",
        values: [["-", "-", "-", "-", "-", "-"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["30", "John", "(test) Churned,(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["-", "-", "-", "-", "-", "-"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:F2",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["-", "-", "-", "-", "-", "-"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["-", "-", "-", "-", "-", "-"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) High Value", "Test", "-", "-"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:F2",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "John", "(test) High Value", "Test", "-", "-"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "edd4497282400000c0bfcc59a86113c80d70dc102261132f149a114784610f90cadf63e59a2fd08fe86f905cafb869e29666b8006f604c7895bdb217a89d7a3879762dae986ada892257f45347975b393a395d37a087fd144362dd4b9a7951ed18ab9469c6e7beaa20c3579593e5837bf25c0d7d42ebc1332146135a4667eb3d45fa810fab8cde4cd330bfb85521b4fdd196302f757eb4ee79e2d5615716fa86bbcb91b44d51dfaddbc08871922367bc35b78da8ae8f531a444e324063bb13cee4288df4e3b04fe4bda940e2b8bea6663ad114b87bc89cde3765692bf4ac0405f53d21bfdc2f293b9bcdfe010b808792d4b889c9eb034152d505f8cb216ec712bf86d07152e31afcfc02ec04c4223b040000",
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
      "Tue, 08 Feb 2022 18:09:47 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:append",
    { values: [["2", "Evan", "", null, "text is also here", 5]] }
  )
  .query({
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    includeValuesInResponse: "true",
  })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      tableRange: "'export-records'!A1:F3",
      updates: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        updatedRange: "'export-records'!A4:F4",
        updatedRows: 1,
        updatedColumns: 5,
        updatedCells: 5,
        updatedData: {
          range: "'export-records'!A4:F4",
          majorDimension: "ROWS",
          values: [["2", "Evan", "", "", "text is also here", "5"]],
        },
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Evan", "", "", "text is also here", "5"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Evan", "", "", "text is also here", "5"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "0002ffedd44b7282300000d0bb642d4e80da4a77814a014544c04837991082a5203001e4d3e9ddeb74db2bf80ef1be01658cb72de9ea8257e0154c54d1966c994074bec139744d1894ea8b8747bb514950079b6b13cf53931f5c871ad6c55949e700b59efdbe95762748cceea41fb221b6686b843bcbdf1a991c4c53f825e42294c6f8984a489521dc86f11aef37ecd2bbc5ba6076aafaa2cf755c32b9f7e6636c9704a99157c8c9e760a67177d323e26368be41dc928f32ebc9cac3824d7a353c53737650a225fdbee29ee4c03acdaae38632a5af0f034ec493d82957db4522abaaba409665dc227ff9f0f0f00f58003e36b9e02dc9ef1fa82b4d5b80bf1c483735fc3e84cea9e002fcfc028dff86083b040000",
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
      "Tue, 08 Feb 2022 18:09:52 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Evan", "", "", "text is also here", "5"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A4:F4"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A4:F4",
      majorDimension: "ROWS",
      values: [["2", "Evan", "", "", "text is also here", "5"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A4%3AF4",
    {
      range: "'export-records'!A4:F4",
      majorDimension: "ROWS",
      values: [["2", "Maria", "", "", "", ""]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A4:F4",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A4:F4",
        majorDimension: "ROWS",
        values: [["2", "Maria"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:09:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "00000002ffedd44b7282300000d0bb64ad0e8520d29d10a8a2451081840d03314ca1f289201f9ddebd4eb7bd82ef10ef01124a59dbc65dfdcd2af00ea644541774910a6bdc0bf793a38f21c1181667cad067e978ba614b5bbc1fa2e0ee84f5a5080bdb50f80e894654a8dcba4b063453eb80e05456597bbef8bcf297dd92343b8bcbb665f7f526236d348f6b9526fd311b146c9aaae7da8624fa23249c9ed203ee06e223e4785f99542aa1b015e653877494612fd17d27deafcabe4c8fc1cddc88dac608e8d02863fbe6c27c6791627563474d387c306bbeae8441e1cb60cd2f72e0f231d572cd27238670f1f2f2f20f98013636f995b571fefc4092557506fe7288bba961cf2134965cd915fcfc024298668b3b040000",
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
      "Tue, 08 Feb 2022 18:09:59 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "John", "(test) High Value", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F2"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "John", "(test) High Value", "Test", "-", "-"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .put(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2%3AF2",
    {
      range: "'export-records'!A2:F2",
      majorDimension: "ROWS",
      values: [["1", "Sam", "", "Test", "-", "-"]],
    }
  )
  .query({ valueInputOption: "USER_ENTERED", includeValuesInResponse: "true" })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      updatedRange: "'export-records'!A2:F2",
      updatedRows: 1,
      updatedColumns: 6,
      updatedCells: 6,
      updatedData: {
        range: "'export-records'!A2:F2",
        majorDimension: "ROWS",
        values: [["1", "Sam", "", "Test", "-", "-"]],
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:append",
    { values: [["3", "Liz", "", null, "some text", null]] }
  )
  .query({
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    includeValuesInResponse: "true",
  })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      tableRange: "'export-records'!A1:F4",
      updates: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        updatedRange: "'export-records'!A5:E5",
        updatedRows: 1,
        updatedColumns: 4,
        updatedCells: 4,
        updatedData: {
          range: "'export-records'!A5:E5",
          majorDimension: "ROWS",
          values: [["3", "Liz", "", "", "some text"]],
        },
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    429,
    {
      error: {
        code: 429,
        message:
          "Quota exceeded for quota metric 'Read requests' and limit 'Read requests per minute per user' of service 'sheets.googleapis.com' for consumer 'project_number:172856096362'.",
        status: "RESOURCE_EXHAUSTED",
        details: [
          {
            "@type": "type.googleapis.com/google.rpc.ErrorInfo",
            reason: "RATE_LIMIT_EXCEEDED",
            domain: "googleapis.com",
            metadata: {
              service: "sheets.googleapis.com",
              quota_limit: "ReadRequestsPerMinutePerUser",
              quota_metric: "sheets.googleapis.com/read_requests",
              consumer: "projects/172856096362",
            },
          },
        ],
      },
    },
    [
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Tue, 08 Feb 2022 18:10:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    429,
    {
      error: {
        code: 429,
        message:
          "Quota exceeded for quota metric 'Read requests' and limit 'Read requests per minute per user' of service 'sheets.googleapis.com' for consumer 'project_number:172856096362'.",
        status: "RESOURCE_EXHAUSTED",
        details: [
          {
            "@type": "type.googleapis.com/google.rpc.ErrorInfo",
            reason: "RATE_LIMIT_EXCEEDED",
            domain: "googleapis.com",
            metadata: {
              service: "sheets.googleapis.com",
              quota_limit: "ReadRequestsPerMinutePerUser",
              quota_metric: "sheets.googleapis.com/read_requests",
              consumer: "projects/172856096362",
            },
          },
        ],
      },
    },
    [
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Tue, 08 Feb 2022 18:10:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
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
      "18",
      "00",
      "e0bb642d0e0a85a13b412a2f914128c44d26d0df8a0262c0f0707af73addf60a7e87f81e88e639b42de9ae17a8d13b1ae9529be7f34c5ca55c9ca240f6a732cd285327794bae8390a54e02ba8ea583c413d783e56aa39490f31a079f923744615bdceef7cae9436cc45ed36da49de7c376580b874ade2725f33de34aca85ce699dd493d3b05e8e30c944230a4465319cfd0dbedcdda35a38d83d5e8455ef7dc9b1f0416fb66f6fcfa579664d5652e0d5aefebe850e332dd125090e47729262a5e24a5cac6da02edb479d69ab96369e6c174c6b61043c8db231e795e5aafdfce5e5e51f3443303405839614cf0fa4374d9ba1bf1c483736f01c4207ca80a19f5f7cb2e83c3b040000",
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
      "Tue, 08 Feb 2022 18:10:48 GMT",
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
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get("/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/")
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      properties: {
        title: "Test Suite google-sheets",
        locale: "en_US",
        autoRecalc: "ON_CHANGE",
        timeZone: "America/Los_Angeles",
        defaultFormat: {
          backgroundColor: { red: 1, green: 1, blue: 1 },
          padding: { top: 2, right: 3, bottom: 2, left: 3 },
          verticalAlignment: "BOTTOM",
          wrapStrategy: "OVERFLOW_CELL",
          textFormat: {
            foregroundColor: {},
            fontFamily: "arial,sans,sans-serif",
            fontSize: 10,
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            foregroundColorStyle: { rgbColor: {} },
          },
          backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
        },
        spreadsheetTheme: {
          primaryFontFamily: "Arial",
          themeColors: [
            { colorType: "TEXT", color: { rgbColor: {} } },
            {
              colorType: "BACKGROUND",
              color: { rgbColor: { red: 1, green: 1, blue: 1 } },
            },
            {
              colorType: "ACCENT1",
              color: {
                rgbColor: {
                  red: 0.25882354,
                  green: 0.52156866,
                  blue: 0.95686275,
                },
              },
            },
            {
              colorType: "ACCENT2",
              color: {
                rgbColor: {
                  red: 0.91764706,
                  green: 0.2627451,
                  blue: 0.20784314,
                },
              },
            },
            {
              colorType: "ACCENT3",
              color: {
                rgbColor: {
                  red: 0.9843137,
                  green: 0.7372549,
                  blue: 0.015686275,
                },
              },
            },
            {
              colorType: "ACCENT4",
              color: {
                rgbColor: {
                  red: 0.20392157,
                  green: 0.65882355,
                  blue: 0.3254902,
                },
              },
            },
            {
              colorType: "ACCENT5",
              color: {
                rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
              },
            },
            {
              colorType: "ACCENT6",
              color: {
                rgbColor: {
                  red: 0.27450982,
                  green: 0.7411765,
                  blue: 0.7764706,
                },
              },
            },
            {
              colorType: "LINK",
              color: {
                rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
              },
            },
          ],
        },
      },
      sheets: [
        {
          properties: {
            sheetId: 0,
            title: "profiles-10.csv",
            index: 0,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1019017811,
            title: "food.csv",
            index: 1,
            sheetType: "GRID",
            gridProperties: { rowCount: 991, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 199360783,
            title: "purchases",
            index: 2,
            sheetType: "GRID",
            gridProperties: { rowCount: 1999, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 1502334165,
            title: "profiles-10-destination.csv",
            index: 3,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
        {
          properties: {
            sheetId: 107110394,
            title: "export-records",
            index: 4,
            sheetType: "GRID",
            gridProperties: { rowCount: 1000, columnCount: 26 },
          },
        },
      ],
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:append",
    {
      values: [
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0", null, null],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1", null, null],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2", null, null],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3", null, null],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4", null, null],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5", null, null],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6", null, null],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7", null, null],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8", null, null],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9", null, null],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10", null, null],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11", null, null],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12", null, null],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13", null, null],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14", null, null],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15", null, null],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16", null, null],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17", null, null],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18", null, null],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19", null, null],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20", null, null],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21", null, null],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22", null, null],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23", null, null],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24", null, null],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25", null, null],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26", null, null],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27", null, null],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28", null, null],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29", null, null],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30", null, null],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31", null, null],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32", null, null],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33", null, null],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34", null, null],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35", null, null],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36", null, null],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37", null, null],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38", null, null],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39", null, null],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40", null, null],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41", null, null],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42", null, null],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43", null, null],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44", null, null],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45", null, null],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46", null, null],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47", null, null],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48", null, null],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49", null, null],
      ],
    }
  )
  .query({
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    includeValuesInResponse: "true",
  })
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      tableRange: "'export-records'!A1:F5",
      updates: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        updatedRange: "'export-records'!A6:D55",
        updatedRows: 50,
        updatedColumns: 4,
        updatedCells: 200,
        updatedData: {
          range: "'export-records'!A6:D55",
          majorDimension: "ROWS",
          values: [
            ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
            ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
            ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
            ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
            ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
            ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
            ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
            ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
            ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
            ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
            ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
            ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
            ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
            ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
            ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
            ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
            ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
            ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
            ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
            ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
            ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
            ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
            ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
            ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
            ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
            ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
            ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
            ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
            ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
            ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
            ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
            ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
            ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
            ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
            ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
            ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
            ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
            ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
            ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
            ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
            ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
            ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
            ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
            ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
            ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
            ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
            ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
            ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
            ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
            ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
          ],
        },
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:10:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    429,
    {
      error: {
        code: 429,
        message:
          "Quota exceeded for quota metric 'Read requests' and limit 'Read requests per minute per user' of service 'sheets.googleapis.com' for consumer 'project_number:172856096362'.",
        status: "RESOURCE_EXHAUSTED",
        details: [
          {
            "@type": "type.googleapis.com/google.rpc.ErrorInfo",
            reason: "RATE_LIMIT_EXCEEDED",
            domain: "googleapis.com",
            metadata: {
              service: "sheets.googleapis.com",
              quota_metric: "sheets.googleapis.com/read_requests",
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
            },
          },
        ],
      },
    },
    [
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Tue, 08 Feb 2022 18:11:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    429,
    {
      error: {
        code: 429,
        message:
          "Quota exceeded for quota metric 'Read requests' and limit 'Read requests per minute per user' of service 'sheets.googleapis.com' for consumer 'project_number:172856096362'.",
        status: "RESOURCE_EXHAUSTED",
        details: [
          {
            "@type": "type.googleapis.com/google.rpc.ErrorInfo",
            reason: "RATE_LIMIT_EXCEEDED",
            domain: "googleapis.com",
            metadata: {
              service: "sheets.googleapis.com",
              quota_metric: "sheets.googleapis.com/read_requests",
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
            },
          },
        ],
      },
    },
    [
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Date",
      "Tue, 08 Feb 2022 18:11:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "groups",
          "last_name",
          "grouparoo_custom_text",
          "grouparoo_custom_number",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27export-records%27!A2:F10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'export-records'!A2:F1000",
      majorDimension: "ROWS",
      values: [
        ["1", "Sam", "", "Test", "-", "-"],
        ["-", "-", "-", "-", "-", "-"],
        ["2", "Maria"],
        ["3", "Liz", "", "", "some text"],
        ["user0@demo.com", "Fist Name 0", "", "Last Name 0"],
        ["user1@demo.com", "Fist Name 1", "", "Last Name 1"],
        ["user2@demo.com", "Fist Name 2", "", "Last Name 2"],
        ["user3@demo.com", "Fist Name 3", "", "Last Name 3"],
        ["user4@demo.com", "Fist Name 4", "", "Last Name 4"],
        ["user5@demo.com", "Fist Name 5", "", "Last Name 5"],
        ["user6@demo.com", "Fist Name 6", "", "Last Name 6"],
        ["user7@demo.com", "Fist Name 7", "", "Last Name 7"],
        ["user8@demo.com", "Fist Name 8", "", "Last Name 8"],
        ["user9@demo.com", "Fist Name 9", "", "Last Name 9"],
        ["user10@demo.com", "Fist Name 10", "", "Last Name 10"],
        ["user11@demo.com", "Fist Name 11", "", "Last Name 11"],
        ["user12@demo.com", "Fist Name 12", "", "Last Name 12"],
        ["user13@demo.com", "Fist Name 13", "", "Last Name 13"],
        ["user14@demo.com", "Fist Name 14", "", "Last Name 14"],
        ["user15@demo.com", "Fist Name 15", "", "Last Name 15"],
        ["user16@demo.com", "Fist Name 16", "", "Last Name 16"],
        ["user17@demo.com", "Fist Name 17", "", "Last Name 17"],
        ["user18@demo.com", "Fist Name 18", "", "Last Name 18"],
        ["user19@demo.com", "Fist Name 19", "", "Last Name 19"],
        ["user20@demo.com", "Fist Name 20", "", "Last Name 20"],
        ["user21@demo.com", "Fist Name 21", "", "Last Name 21"],
        ["user22@demo.com", "Fist Name 22", "", "Last Name 22"],
        ["user23@demo.com", "Fist Name 23", "", "Last Name 23"],
        ["user24@demo.com", "Fist Name 24", "", "Last Name 24"],
        ["user25@demo.com", "Fist Name 25", "", "Last Name 25"],
        ["user26@demo.com", "Fist Name 26", "", "Last Name 26"],
        ["user27@demo.com", "Fist Name 27", "", "Last Name 27"],
        ["user28@demo.com", "Fist Name 28", "", "Last Name 28"],
        ["user29@demo.com", "Fist Name 29", "", "Last Name 29"],
        ["user30@demo.com", "Fist Name 30", "", "Last Name 30"],
        ["user31@demo.com", "Fist Name 31", "", "Last Name 31"],
        ["user32@demo.com", "Fist Name 32", "", "Last Name 32"],
        ["user33@demo.com", "Fist Name 33", "", "Last Name 33"],
        ["user34@demo.com", "Fist Name 34", "", "Last Name 34"],
        ["user35@demo.com", "Fist Name 35", "", "Last Name 35"],
        ["user36@demo.com", "Fist Name 36", "", "Last Name 36"],
        ["user37@demo.com", "Fist Name 37", "", "Last Name 37"],
        ["user38@demo.com", "Fist Name 38", "", "Last Name 38"],
        ["user39@demo.com", "Fist Name 39", "", "Last Name 39"],
        ["user40@demo.com", "Fist Name 40", "", "Last Name 40"],
        ["user41@demo.com", "Fist Name 41", "", "Last Name 41"],
        ["user42@demo.com", "Fist Name 42", "", "Last Name 42"],
        ["user43@demo.com", "Fist Name 43", "", "Last Name 43"],
        ["user44@demo.com", "Fist Name 44", "", "Last Name 44"],
        ["user45@demo.com", "Fist Name 45", "", "Last Name 45"],
        ["user46@demo.com", "Fist Name 46", "", "Last Name 46"],
        ["user47@demo.com", "Fist Name 47", "", "Last Name 47"],
        ["user48@demo.com", "Fist Name 48", "", "Last Name 48"],
        ["user49@demo.com", "Fist Name 49", "", "Last Name 49"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 54, endRowIndex: 55 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 53, endRowIndex: 54 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 52, endRowIndex: 53 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 51, endRowIndex: 52 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 50, endRowIndex: 51 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 49, endRowIndex: 50 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 48, endRowIndex: 49 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 47, endRowIndex: 48 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 46, endRowIndex: 47 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 45, endRowIndex: 46 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 44, endRowIndex: 45 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 43, endRowIndex: 44 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 42, endRowIndex: 43 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 41, endRowIndex: 42 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 40, endRowIndex: 41 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 39, endRowIndex: 40 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 38, endRowIndex: 39 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 37, endRowIndex: 38 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 36, endRowIndex: 37 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 35, endRowIndex: 36 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 34, endRowIndex: 35 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 33, endRowIndex: 34 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 32, endRowIndex: 33 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 31, endRowIndex: 32 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 30, endRowIndex: 31 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 29, endRowIndex: 30 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 28, endRowIndex: 29 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 27, endRowIndex: 28 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 26, endRowIndex: 27 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 25, endRowIndex: 26 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 24, endRowIndex: 25 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 23, endRowIndex: 24 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 22, endRowIndex: 23 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 21, endRowIndex: 22 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 20, endRowIndex: 21 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 19, endRowIndex: 20 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 18, endRowIndex: 19 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 17, endRowIndex: 18 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 16, endRowIndex: 17 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 15, endRowIndex: 16 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 14, endRowIndex: 15 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 13, endRowIndex: 14 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 12, endRowIndex: 13 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 11, endRowIndex: 12 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 10, endRowIndex: 11 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 9, endRowIndex: 10 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 8, endRowIndex: 9 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 7, endRowIndex: 8 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 6, endRowIndex: 7 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 5, endRowIndex: 6 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 4, endRowIndex: 5 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 3, endRowIndex: 4 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 2, endRowIndex: 3 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .post(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/:batchUpdate",
    {
      requests: [
        {
          deleteRange: {
            range: { sheetId: 107110394, startRowIndex: 1, endRowIndex: 2 },
            shiftDimension: "ROWS",
          },
        },
      ],
      includeSpreadsheetInResponse: true,
    }
  )
  .once()
  .reply(
    200,
    {
      spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
      replies: [{}],
      updatedSpreadsheet: {
        spreadsheetId: "11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk",
        properties: {
          title: "Test Suite google-sheets",
          locale: "en_US",
          autoRecalc: "ON_CHANGE",
          timeZone: "America/Los_Angeles",
          defaultFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            padding: { top: 2, right: 3, bottom: 2, left: 3 },
            verticalAlignment: "BOTTOM",
            wrapStrategy: "OVERFLOW_CELL",
            textFormat: {
              foregroundColor: {},
              fontFamily: "arial,sans,sans-serif",
              fontSize: 10,
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              foregroundColorStyle: { rgbColor: {} },
            },
            backgroundColorStyle: { rgbColor: { red: 1, green: 1, blue: 1 } },
          },
          spreadsheetTheme: {
            primaryFontFamily: "Arial",
            themeColors: [
              { colorType: "TEXT", color: { rgbColor: {} } },
              {
                colorType: "BACKGROUND",
                color: { rgbColor: { red: 1, green: 1, blue: 1 } },
              },
              {
                colorType: "ACCENT1",
                color: {
                  rgbColor: {
                    red: 0.25882354,
                    green: 0.52156866,
                    blue: 0.95686275,
                  },
                },
              },
              {
                colorType: "ACCENT2",
                color: {
                  rgbColor: {
                    red: 0.91764706,
                    green: 0.2627451,
                    blue: 0.20784314,
                  },
                },
              },
              {
                colorType: "ACCENT3",
                color: {
                  rgbColor: {
                    red: 0.9843137,
                    green: 0.7372549,
                    blue: 0.015686275,
                  },
                },
              },
              {
                colorType: "ACCENT4",
                color: {
                  rgbColor: {
                    red: 0.20392157,
                    green: 0.65882355,
                    blue: 0.3254902,
                  },
                },
              },
              {
                colorType: "ACCENT5",
                color: {
                  rgbColor: { red: 1, green: 0.42745098, blue: 0.003921569 },
                },
              },
              {
                colorType: "ACCENT6",
                color: {
                  rgbColor: {
                    red: 0.27450982,
                    green: 0.7411765,
                    blue: 0.7764706,
                  },
                },
              },
              {
                colorType: "LINK",
                color: {
                  rgbColor: { red: 0.06666667, green: 0.33333334, blue: 0.8 },
                },
              },
            ],
          },
        },
        sheets: [
          {
            properties: {
              sheetId: 0,
              title: "profiles-10.csv",
              index: 0,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1019017811,
              title: "food.csv",
              index: 1,
              sheetType: "GRID",
              gridProperties: { rowCount: 991, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 199360783,
              title: "purchases",
              index: 2,
              sheetType: "GRID",
              gridProperties: { rowCount: 1999, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 1502334165,
              title: "profiles-10-destination.csv",
              index: 3,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
          {
            properties: {
              sheetId: 107110394,
              title: "export-records",
              index: 4,
              sheetType: "GRID",
              gridProperties: { rowCount: 1000, columnCount: 26 },
            },
          },
        ],
        spreadsheetUrl:
          "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit",
      },
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 08 Feb 2022 18:12:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
