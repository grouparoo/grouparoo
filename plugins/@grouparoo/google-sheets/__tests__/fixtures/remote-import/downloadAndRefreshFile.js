const nock = require("nock");
process.env.GOOGLE_SHEETS_JEST_TIMESTAMP = "1643140272035";

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
      "0000000002ffedd44b7282300000d0bb642d0e04a9a43ba9288ca88848c40d13f24190010c1605a777afd36dafe03bc47b0242296fdbe4565f78053e414f201ad371aace8e9d3a849b795508c592fe15fb05b4e0c0f2cdb5532461ec9093dc583aaebbd7828c41d6c6a951a40bff509610e27e852677870cbc15b12ecea6bd58ae7097a953475fdf31adad46f6661d94f444b07214d0db253c55abcd43a651dcd0f9c73ac3435d3a28dcb1552f693cf1175da4d8171621cd316b93de6ab6b4697bba7a2298765eb04dba66cfcaef46abdc2dfe0a0b7c26a208f423d4902b3dabca02129d15a12bae6ecdc66f6f6fff8011e08f2697bc4df2d707ba81d008fce590dcfa86bf86b038915c829f5f42ce9ac13b040000",
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
      "Tue, 25 Jan 2022 19:51:12 GMT",
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
      "Tue, 25 Jan 2022 19:51:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27profiles-10.csv%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "'profiles-10.csv'!A1:Z1",
      majorDimension: "ROWS",
      values: [
        [
          "id",
          "first_name",
          "last_name",
          "email",
          "gender",
          "ip_address",
          "ios_app",
          "android_app",
          "vip",
          "ltv",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 25 Jan 2022 19:51:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27profiles-10.csv%27!A2:J10001"
  )
  .once()
  .reply(
    200,
    {
      range: "'profiles-10.csv'!A2:J1000",
      majorDimension: "ROWS",
      values: [
        [
          "1",
          "Erie",
          "Jervois",
          "ejervois0@example.com",
          "Male",
          "15.247.38.72",
          "TRUE",
          "FALSE",
          "TRUE",
          "259.12",
        ],
        [
          "2",
          "Cacilie",
          "Eate",
          "ceate1@example.com",
          "Female",
          "253.146.41.201",
          "FALSE",
          "TRUE",
          "FALSE",
          "94.36",
        ],
        [
          "3",
          "Gretel",
          "Groucock",
          "ggroucock2@example.com",
          "Female",
          "211.89.110.134",
          "TRUE",
          "FALSE",
          "TRUE",
          "668.3",
        ],
        [
          "4",
          "Amata",
          "Cotesford",
          "acotesford3@example.com",
          "Female",
          "193.9.240.246",
          "TRUE",
          "TRUE",
          "TRUE",
          "489",
        ],
        [
          "5",
          "Lira",
          "Johnston",
          "ljohnston4@example.com",
          "Female",
          "53.161.58.99",
          "FALSE",
          "TRUE",
          "FALSE",
          "823.16",
        ],
        [
          "6",
          "Deni",
          "Scalia",
          "dscalia5@example.com",
          "Female",
          "138.131.148.74",
          "TRUE",
          "FALSE",
          "TRUE",
          "273.98",
        ],
        [
          "7",
          "Helga",
          "Kleis",
          "hkleis6@example.com",
          "Female",
          "85.248.8.158",
          "TRUE",
          "TRUE",
          "TRUE",
          "407.05",
        ],
        [
          "8",
          "Gertie",
          "Cubitt",
          "gcubitt7@example.com",
          "Female",
          "123.255.130.24",
          "FALSE",
          "FALSE",
          "TRUE",
          "841.45",
        ],
        [
          "9",
          "Lurleen",
          "Browell",
          "lbrowell8@example.com",
          "Female",
          "231.159.55.43",
          "TRUE",
          "FALSE",
          "FALSE",
          "623.34",
        ],
        [
          "10",
          "Dorthy",
          "Iston",
          "diston9@example.com",
          "Female",
          "45.241.64.163",
          "FALSE",
          "TRUE",
          "FALSE",
          "290.53",
        ],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 25 Jan 2022 19:51:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
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
      "000002ffedd44d7282300040e1bb64ad0e0d154b77a0f88b8a8040dc301002022a8480093abd7b9d6e7b05bf03bce57b820863c258d85625b9816fd047501de1512c69c15d7ab87b96db53da3ba77e7a641592673e4ecae44a6bb428c4a63c2a676e50b2f13986b290a077479633be9a6a4149ea1a393a64fcd19df8767e2890a94866c63fb97d86ca6d893ce4a7b72143cb7adbf264aab734b2667ea6f14e326c8bd05d954646609510772987d6d98f99a2ad324d2cf549237d343be7222617fd08afab2fef128b473017af5a15ccccac488c8559bb7b2fa3853b5ceb6b3b397842ee421a278eb6c2211ebdbdbdfd030680883a6f080bf3d70fe4b1aa0ec0df1cc2b6afc9eb103a891ad2809f5f9b058fe43b040000",
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
      "Tue, 25 Jan 2022 19:51:13 GMT",
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
      "Tue, 25 Jan 2022 19:51:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27food.csv%27!A1:Z1"
  )
  .once()
  .reply(
    200,
    {
      range: "food.csv!A1:Z1",
      majorDimension: "ROWS",
      values: [["id", "fruit", "vegetable"]],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 25 Jan 2022 19:51:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://sheets.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/v4/spreadsheets/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/values/%27food.csv%27!A2:C10001"
  )
  .once()
  .reply(
    200,
    {
      range: "food.csv!A2:C991",
      majorDimension: "ROWS",
      values: [
        ["1", "apple", "cucumber"],
        ["2", "tomato", "tomato"],
        ["3", "pear", "brussel sprouts"],
        ["4", "apple", "squash"],
        ["5", "tomato", "cucumber"],
        ["6", "pear", "tomato"],
        ["7", "apple", "brussel sprouts"],
        ["8", "tomato", "squash"],
        ["9", "pear", "cucumber"],
        ["10", "apple", "tomato"],
      ],
    },
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Date",
      "Tue, 25 Jan 2022 19:51:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Accept-Ranges",
      "none",
      "Vary",
      "Origin,Accept-Encoding",
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
