const nock = require("nock");
process.env.GOOGLE_SHEETS_JEST_TIMESTAMP = "1644346002601";

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
      "642d8e808cd01da020d842501464938134f2b1fc43103abd7b9d6e7b05df21de378831267d8f687d27157803532c284bbc4c566ac856b30f0d21df29816d0663ca027a88acd231ec7d56e7722432cccdbce719fb48c8d26bf96e8debfbbae934449870ca36ae240ff6d06ee412caa9de253e754aa61caf93ba86c74cc1dbc6e56fbcaafaf0e49d93b2d9f53346d670c6669b1adc038a442dce7e659aaa94d0361f79bfb60fda6cf7bbd0c1038cb3c24338c2331ce84ddf725fa8b074b74d8bb68a2e92c6879fe8221753c63b546049e2891bac89a369fa1f3ad3c7e5cbcbcb3f6001c8a3c93bd2a3fcf9812829ca02fce580e8d490e7101a893bd2819f5f103aef213b040000",
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
      "Tue, 08 Feb 2022 18:46:45 GMT",
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
      "Tue, 08 Feb 2022 18:46:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Tue, 08 Feb 2022 18:46:48 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "Tue, 08 Feb 2022 18:46:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Tue, 08 Feb 2022 18:46:49 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "02",
      "ff",
      "ed",
      "d4",
      "4b",
      "7282300000d0bb642d4e00a9d01d82a42021f2b1a29b4c881151b14244d14eef5ea7db5ec17788f70d18e7424a7af93a8813780777a659433e2ca09d5fe123c35cbf1afb553a771541ea86de8c3a6f566130653a3419dc16f11296045bb36e8512ef8179217194aedd2adab921d53ec8c28da65acad2b5e38746a07596531efcd8d624aacc84c8cabf144eafc493726976769b0761eb3c1036fb3a49c677186d32a5de63b43faa61f5397f2b7c8f6c2089bd51303aba8dba163841bb5e1eeaac5551d611d82a3d6e2acec73aa39292a3735b20bfa1ea0c7a4a513adbfcb430b768e60f5f5e5efe010320fa73d50a49abe707ba615903f09703bddccfe239c444b056b4e0e717754250a73b040000",
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
      "Tue, 08 Feb 2022 18:46:49 GMT",
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
      "Tue, 08 Feb 2022 18:46:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Tue, 08 Feb 2022 18:46:51 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "Tue, 08 Feb 2022 18:46:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Tue, 08 Feb 2022 18:46:52 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "Tue, 08 Feb 2022 18:46:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Tue, 08 Feb 2022 18:46:53 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "08000000000002ffedd44b7282300000d0bb64ad4e02a24d7768943f8ae8086c3210a2502a7f53b0d3bbd7e9b657f01de27d839831de75b4af0a5e827730c6129eb15902d540c0c771df68365d05834da03568f2dcf5c3f901efeed2bd2e77fa74ede41bc751dc505ce54eafca31f294e8f891e29d9d157e6fa00bc4b41c1a1e764b33acc88219fa61b9cd3c420bbf6549653b249250af9e4d0913a844238a03d79d1f1def81cc5e65622b4c44d15e0f0a2b17befa35350754f652522cae162346f62634b959a7574fbe287c03ebc662b7d13d9d3298a4b7404d2f5197ad787d323f2be74c35711e89457dc998bdbcbcfc0326800f75def28ee6cf0f6405e309f8cb81f663cd9f43ac78dcf216fcfc02760243333b040000",
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
      "Tue, 08 Feb 2022 18:46:53 GMT",
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
      "Tue, 08 Feb 2022 18:46:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
    "Tue, 08 Feb 2022 18:46:55 GMT",
    "Server",
    "ESF",
    "Cache-Control",
    "private",
    "X-XSS-Protection",
    "0",
    "X-Frame-Options",
    "SAMEORIGIN",
    "X-Content-Type-Options",
    "nosniff",
    "Alt-Svc",
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
      "Tue, 08 Feb 2022 18:46:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "02ffedd4c97282300000d07fc9591c1237e88dc5b055850144bc6458220225228b029dfe7b9d5efb0bbe8f78df204a12dab6a4bb9594810f3046489c27f398974e0f7ef27679a53ed8ee26c2a744d0c4d2943fd2a583ee7b2bc55a2688be185ec3248b1ae3bcecf5eaf0e99b811854c7a97057f1f85558f9b0deba568824dc2d84d31557e8ec34c205db4aeaad4b2224c156b6b967cfb5a3e12276d26f86b2a7d952d8423bc013dcf87a51baf01e1a72534f3dc30acb5cadb517d7bada9bb0eb9dcad4728f0b198ccb4295d15a39589b81c5582381fa40a604753f1cf834a80b835c3c4e75cb62e3cfdfdedefe013340873a6f684bf2d7078b9528cec05f0ea41b6bfa1a42a651431bf0f30b8c581f0f3b040000",
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
      "Tue, 08 Feb 2022 18:46:58 GMT",
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
      "Tue, 08 Feb 2022 18:46:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:46:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "8b08000000000002ffedd44b7282300000d0bb64ad0e6090d01d28825ab5563e0d9b4c84e09f041201edf4ee75baed157c8778df8066199392287e66257803776ad8836cb0d39caf467b841fce9268dd84ce67c530b66efa7a18057eea4fbb956bdf284655abf1681126d15c3345759cef655c204b84ae97ba86abcc7ea7d3b3ddbaf29afb170e83bda15f52d127136f5923545a18ee964ce5775fe0ebd569c69e5ec2741306529c1ee472e65b788081b19812c2150a6b56ad9bd6caf259d05764142198ad36188da1e5f180c72535a7326527942cda6d57cf3e0b8ab7059e3c52a319ddde2b23f1f2b253581da433787979f907f400ebc4b166921c9f1f0c4ddbee81bf1c88ba0bf61cc265b46635f8f905f948e0be3b040000",
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
      "Tue, 08 Feb 2022 18:47:02 GMT",
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
      "Tue, 08 Feb 2022 18:47:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "0000000002ffedd4417282300000c0bfe42c0e488aa6376251095244142817066260102c9808053afd7b9d5efb05f611fb0d124a9910f1a32ed927780543b240733a4f653dece4f1646b233d73472750b1d310b215a74b33f0f6c946bdf6216f5198d16d25ef0272b6c3f76edddaabb0bc5bcb4111d19123ef92b89ae15b1becd5d6e023737c93852784614538c58db5919a4caae27b5ac4529d0f7eee43f55696d2a25d446b686241c8c53b1ea8ba8ef3ba6d0d55dc953a730e63572ab88c745d324fc9d70db5ae43a0263f1a545cb5dd9e8ca20ffcda35ab80e6fbca74ba8fd516c30b6ac82973e12d77e17c3299fc036680f54dc199888be707ea0b4233f09743fc181af61c02b384330e7e7e01063ebcaa3b040000",
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
      "Tue, 08 Feb 2022 18:47:09 GMT",
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
      "Tue, 08 Feb 2022 18:47:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "0000000002ffedd44b7282300000d0bb64ad0e6210e84e20682d0a6aaac2268318fe450912089ddebd4eb7bd82ef10ef1b8451449b863c6e05adc01b10a1ac4fa2c9455a9cb93460af9be3641ff89eb7cb8381ee45baad2f3469ae7126ec531cb47ead6f5792ad27ce7022978e9baed6efeaa598934f3865b787afc8faa06adb682d897539cedfad00cdd23c865f575e79e78d66f6866899852a6765c1bcbc4d4b83141f2bd9abbb438e1c06aff6e24ce1a12d0fa455551363b66147778cfc521967ae95ce8e585dc82a57123bcf8623579dd8a3fd3439dde7034a63b9e2aed22d13bcd10a84fda6476101399cbcbcbcfc034680f6f78cd18664cf0f668aae8fc05f0ee421eef4398441434619f8f90524a299e83b040000",
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
      "Tue, 08 Feb 2022 18:47:13 GMT",
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
      "Tue, 08 Feb 2022 18:47:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "08000000000002ffedd44b7282300000d0bb642d4efca0d01d8a50c1d860c4881b0669443e123e1144a777afd36dafc03bc47b81200c595dfb82a72c071fa00bc6ea301c9ea1766ce0738f0ef7bb718825270ee5a44d7dd5dbe4dd8dbba56019d6f504b6d969bf5df96b095b0e7cea8a6d3d3e6d9346e5489945269a8b92865f68e2ae67119f9aeb53d55c185e7481e5e472bb735734b376b4c0186bc49028197d47818bcab8dae0d6a06dd474262fcb46e7a8de2ab2401227490b9793a9a28cae2424c9f1619231d5881017a9c9e04dc3de05790e778c689e8fb3d45e4ad6f6ac2ade55b79757728f79b2876e9a0e7bbdde3f6000d8a3882b56fbf1fb8389acaa03f097832fba82bd8758b0a06215f8f905b512f0d93b040000",
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
      "Tue, 08 Feb 2022 18:47:18 GMT",
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
      "Tue, 08 Feb 2022 18:47:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:47:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
              quota_metric: "sheets.googleapis.com/read_requests",
              consumer: "projects/172856096362",
              service: "sheets.googleapis.com",
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
      "Tue, 08 Feb 2022 18:48:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "00d0bb646d1c012b4977e2a7a01850c401364c8cb1028a340124747af73addf60abe43bc6f4019e352a6f5bde02578078aea78c886c7d1346a47fd9e78d9b21af7782b1b6a09bfab7bd6b2e8a06d324aa03575ab247043f7763fec32fd448f244f589cc8786e130861b85ab3f652f8788bed2da950328994af1a63332dcf6d34f7747a8e0bcb74d1e9ac2dbeecd8a19bf22eda83353b967ba7d1cd8f7c8d17c8e8ba95b21f4ab05990579e566aca97c4201375891a999e5237cc027485eb3a982402dd56e62c1e43c2ae65bdf4439ef8f2b3489ddc43cb1e22ecc5b5993b8fe1cbcbcb3f600078576582cb347b7e60bc613c007f39a4b5aaf873088b53c105f8f905b00fd40c3b040000",
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
      "Tue, 08 Feb 2022 18:48:32 GMT",
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
      "Tue, 08 Feb 2022 18:48:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "0000d0bb64ad0e10aca43b15b0f213040a64c340264602050af801a777afd36dafe03bc47b808c10daf7e9d094b406ef60cc24b4208b5c58c757610a6c9a3316ee6955c43b3637be571771ef2ff570f0c97ac9b5c880551206458beaac150fca59285d26086fa74d7ec4872a568eea7e67f816ff8c4d090f26c37c94a62d54600809944ac7d46caa6f5556c9dee6d25be69d689ec2f1d5b965b530c195c2ed7c204873e493e3cd2ddd4391dca8ddd82536bf69b9766abecafee3eae2336edd5a359ca4d1b1c27b18d5a2b94376541c3b36056916f9372b9d2ec15825ae884679f1f2f2f20f98017a6f8b8ef669f1fc002e119a81bf1cd2616ce973880dcd3ada819f5fafba0c133b040000",
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
      "Tue, 08 Feb 2022 18:48:39 GMT",
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
      "Tue, 08 Feb 2022 18:48:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "08000000000002ffedd4497282400000c0bfcc592c1621901ba02c8ac86a20176b66189102051956adfc3d56aef982fd887e028831a1f4d4d525b9814f30435e59e22562d564601f919b9122c789591a66da98a12b5b683d32b1b1d7adad70618f6305138931a8da0adf566e6ff68f34d8fadce8700ff62e473ce5042fcaa555d267432466a347f201b76bffd8a120ecf48f337456b3e7f68342783b46eb490a6ea3aa94c645da858c84fac88d4d115a5e7db5b55d86a62ce8cbcdfec060245e7b35138c8323de39bf0a6b4c833c64e93cc79526c32e6ec328ada584a4f6562f8cf238f15f67cd6250a56bcd7d5cbebdbdfd0316804c4dd1127a2a5e1f08a2a22cc05f0ea76e6ec86b088dc096b4e0e717d84983593b040000",
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
      "Tue, 08 Feb 2022 18:48:50 GMT",
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
      "Tue, 08 Feb 2022 18:48:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "8b08000000000002ffedd44b7282300000d0bb646d1d3e02d29d880a95140443d50d13421450229f80c64eef5ea7db5ec17788f70d3021b4eb127e3d5306de81c08a3926e3549aed06e9b1f52f0da4429eb5418e3fcb3810dc2e24de14ba58d8e93d192049ad22c407df5135d7d250c556c3c922b19a61176a6ac3648910dd0b3ce61be6465eb8871edaf6d79a1f4456b6da2dd3cf1786c248586fa92268df1f7193d85a5cf32d74f6cbae7243e46dd6489fc8d3bb486f95612e07c5c805a47db4ac3e784af46cb750a6a11b6d57bd7c43e595cdebee38b0f979923b751ce706d295109dbcda59edfd2c88a36319c3f1cbcbcb3f6004e8bd2e5ada25c5f3035533cd11f8cb21e1a2a6cf212c8a5bda829f5f805cd9743b040000",
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
      "Tue, 08 Feb 2022 18:48:54 GMT",
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
      "Tue, 08 Feb 2022 18:48:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:48:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "300000d0bbb0560682c5da1db106f18352f9994d26842829f20ba8d04eef5ea7db5ec17788f7ad50c678db92aeca79a9bc2903053395a98966c537edcbdf6646380f1c7dbc31ed266dc586928106ccb1dd355ec1239672724d50b9481cf3756a892deefc94e4d5d8639b769735dbdef874ae859fcdb110ccb82c09c7a77acd7886c070a06239e6dac90f2e254b22377261b5bba23b016b669e7364a5200c8fd0f430ac066a4751b0f79613bd8b832cc2fdeda32cf669d214f1e9703fa70b68d58d16201dbd8752ba698f655d480143b0cab3524736d8adb8ed4d1731709228d4d4a7a7a77f9491c2fb5a48de12f1f8c07899cd46ca5f0ea41b6afe1802722ab9547e7e01bac90e8a3b040000",
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
      "Tue, 08 Feb 2022 18:49:05 GMT",
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
      "Tue, 08 Feb 2022 18:49:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "00d0bb642d4c84c46a77d26ab0621181886c3210426450be7e00a777afd36dafe03bc47b808873d1b6ec52e6a200efa08fb499cad518ce831b1c3cfb4eb1c72362f887b4c777a64b6474097529a3e19848621681ecd18a6899753b14f03e45d7732d4396c4be43bb6d0913349447cc43ed3486fac66c96d8722776c7ad985e77c83f98ed225d5551ec7021d1a6f6faf62cfb5419cf71e96bc77c90df13a6a17dbde63b3f2a73a22cd7533298ae22277a513067b749a0f749c2cbdef95a2225c0c35be59a0bc3a49e5de67c6b69f6cd8f85527fe4697c6a8abac9f4ebbc82eacbcbcb3f60044457658d6859f6fc40c7b3d908fce5c02e7d259e4318226a44037e7e015020d6333b040000",
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
      "Tue, 08 Feb 2022 18:49:10 GMT",
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
      "Tue, 08 Feb 2022 18:49:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "0000000002ffedd44b6e82400000d0bbcc5ac8201f4b771884919fe00c14d918840101958f4880a677afe9b657e01de27d833849e8f379eeeb8a3ec02798e2b5cc26ec052ae1006762e30ea266b39babe4b53132de4a053f90bdc0512d289023cef1dab83638e288e8a99356252ad2730a6f76df9eaa5410983df2abd88bd56190f4d9d94729b4773883325590c3ec4281bfeb85a472f617838f56c068729b25278ee429d50f37b4390d46c92ba6382a77e8ea9c9d7b8a44ae927bf04d43352e963ef5d9284e23b6d00b4b526bb925e9b5e0ba26612b468596177c19e0b486f8f1e1d44833a30ebbdbc7ab66178bc53f6005e8d8141d7d9e8bf707bc28cb2bf097c3b99f1afa1e624be38e76e0e71705e18ab53b040000",
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
      "Tue, 08 Feb 2022 18:49:17 GMT",
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
      "Tue, 08 Feb 2022 18:49:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:49:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
              quota_metric: "sheets.googleapis.com/read_requests",
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
      "Tue, 08 Feb 2022 18:49:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
              consumer: "projects/172856096362",
              quota_limit: "ReadRequestsPerMinutePerUser",
              quota_metric: "sheets.googleapis.com/read_requests",
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
      "Tue, 08 Feb 2022 18:49:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "642d0e869821dd19a4166b506ca8b862f804f9584020f2e9f4ee75baed157c8778df208822d1b67e5715a2042f600c209947f3505d797775e2ec0ee587347738d1d98d1879a5f48c408ae9eafe8a1da71cf3091eb56c2b0a7e324a75af04eefbd05e11bf8496e1e616e383a96d298f8b34b3d40ee1d8d3353749a0f136b8e6315c4fc85184a55322ecd54e4ef1d7b932f7791dd8b722d628eb8385ac8f67945e98ad0ccec16d44b1ebe029ddfad783ec464936d66ded2f520ced7eb1dc6f7ae4a31225d341344b1c4b8ad4c4e39f88a4d790356b92eadc19bc0857f3a7a7a77fc00c88a1ce1ad1fad9e3036d49c80cfce5e077632d1e43501134a2013fbfc29fa7c53b040000",
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
      "Tue, 08 Feb 2022 18:50:05 GMT",
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
      "Tue, 08 Feb 2022 18:50:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:50:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
              quota_metric: "sheets.googleapis.com/read_requests",
              consumer: "projects/172856096362",
              service: "sheets.googleapis.com",
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
      "Tue, 08 Feb 2022 18:50:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
              quota_metric: "sheets.googleapis.com/read_requests",
              consumer: "projects/172856096362",
              service: "sheets.googleapis.com",
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
      "Tue, 08 Feb 2022 18:50:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:51:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
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
      "Tue, 08 Feb 2022 18:52:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
