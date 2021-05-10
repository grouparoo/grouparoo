const nock = require("nock");

nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:38:17 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:38:17 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:38:17 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "40",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:38:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:38:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:38:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "4",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:38:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1183",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:38:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1183",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:38:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1183",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "14",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:38:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1183",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:38:59 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:38:59 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "25",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:39:00 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { name: "Caio" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:39:00 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "12",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          email: "caio.silveira@mailinator.com",
          signupDate: "2021-05-03 13:39:00 +00:00",
          profileUpdatedAt: "2021-05-03 13:39:00 +00:00",
          signupSource: "API",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:39:00 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
        },
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:39:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "374",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:39:30 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "11",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:39:31 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "sebastian@mailinator.com",
    dataFields: {
      name: "sebastian",
      userId: "sebastian3039",
      phoneNumber: "+5583999999939",
    },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:39:31 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sebastian@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sebastian@mailinator.com",
        dataFields: {
          name: "sebastian",
          phoneNumber: "+5583999999939",
          email: "sebastian@mailinator.com",
          signupDate: "2021-05-03 13:39:31 +00:00",
          profileUpdatedAt: "2021-05-03 13:39:31 +00:00",
          signupSource: "API",
          userId: "sebastian3039",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:39:31 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:31 +00:00",
          },
        },
        userId: "sebastian3039",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:40:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "470",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          email: "caio.silveira@mailinator.com",
          signupDate: "2021-05-03 13:39:00 +00:00",
          profileUpdatedAt: "2021-05-03 13:39:00 +00:00",
          signupSource: "API",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:39:00 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
        },
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:40:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "374",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: {
      name: "Caio",
      userId: "testuser123",
      phoneNumber: "+5583999999999",
      signupDate: "2020-08-19T20:50:04.000Z",
      customField: "testCustomField",
    },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:40:02 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "11",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          profileUpdatedAt: "2021-05-03 13:40:02 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:40:02 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:40:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "501",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          profileUpdatedAt: "2021-05-03 13:40:02 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:40:02 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:40:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "501",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          profileUpdatedAt: "2021-05-03 13:40:02 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:40:02 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:40:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "501",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          profileUpdatedAt: "2021-05-03 13:40:02 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:40:02 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:40:33 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "501",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: {
      signupDate: null,
      userId: "testuser123",
      name: "Evan",
      phoneNumber: "+5583999999998",
    },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:40:33 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Evan",
          phoneNumber: "+5583999999998",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          profileUpdatedAt: "2021-05-03 13:40:33 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:40:34 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:41:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "459",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Evan",
          phoneNumber: "+5583999999998",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          profileUpdatedAt: "2021-05-03 13:40:33 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:40:34 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:41:04 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "459",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: {
      name: null,
      phoneNumber: null,
      signupDate: null,
      userId: "testuser123",
    },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:41:04 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          profileUpdatedAt: "2021-05-03 13:41:04 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:41:04 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:41:34 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "414",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          profileUpdatedAt: "2021-05-03 13:41:04 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:41:04 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:41:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "414",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "4",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:41:35 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:41:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1183",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "13",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:41:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1183",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List One" })
  .once()
  .reply(200, { listId: 980091 }, [
    "Date",
    "Mon, 03 May 2021 13:41:35 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "17",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "15",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 980091,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 03 May 2021 13:41:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "13",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:41:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1263",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:41:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1263",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Two" })
  .once()
  .reply(200, { listId: 980092 }, [
    "Date",
    "Mon, 03 May 2021 13:41:36 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "17",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "21",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 980092,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 03 May 2021 13:41:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "15",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092],
          profileUpdatedAt: "2021-05-03 13:41:36 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:41:37 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "535",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "8",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092],
          profileUpdatedAt: "2021-05-03 13:41:36 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:41:37 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:07 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "535",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:42:07 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "13",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:07 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "13",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 980091,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 03 May 2021 13:42:07 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "14",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/unsubscribe", {
    listId: 980092,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 03 May 2021 13:42:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "13",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091],
          profileUpdatedAt: "2021-05-03 13:42:08 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:42:08 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:38 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "528",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091],
          profileUpdatedAt: "2021-05-03 13:42:08 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:42:08 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:38 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "528",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:42:39 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "15",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 980092,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 03 May 2021 13:42:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "13",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:42:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Three" })
  .once()
  .reply(200, { listId: 980093 }, [
    "Date",
    "Mon, 03 May 2021 13:42:39 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "17",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 980093,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 03 May 2021 13:42:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          profileUpdatedAt: "2021-05-03 13:42:39 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:42:40 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:43:09 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "3",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980093,
          name: "List Three",
          createdAt: 1620049359674,
          listType: "Standard",
        },
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:43:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1425",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "9",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          profileUpdatedAt: "2021-05-03 13:42:39 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:42:40 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:43:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:43:10 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980093,
          name: "List Three",
          createdAt: 1620049359674,
          listType: "Standard",
        },
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:43:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1425",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "116",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980093,
          name: "List Three",
          createdAt: 1620049359674,
          listType: "Standard",
        },
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:43:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1425",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Four" })
  .once()
  .reply(200, { listId: 980094 }, [
    "Date",
    "Mon, 03 May 2021 13:43:11 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "17",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/unsubscribe", {
    listId: 980094,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 03 May 2021 13:43:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "11",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          profileUpdatedAt: "2021-05-03 13:43:11 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:43:12 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:43:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980094,
          name: "List Four",
          createdAt: 1620049391280,
          listType: "Standard",
        },
        {
          id: 980093,
          name: "List Three",
          createdAt: 1620049359674,
          listType: "Standard",
        },
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:43:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1506",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:43:42 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          profileUpdatedAt: "2021-05-03 13:43:11 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:43:12 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:43:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "3",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:43:42 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          profileUpdatedAt: "2021-05-03 13:43:11 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:43:12 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:43:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:43:43 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          profileUpdatedAt: "2021-05-03 13:43:11 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:43:12 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:39:00 +00:00",
          },
          email: "caio.silveira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:43:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "0",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/updateEmail", {
    currentEmail: "caio.silveira@mailinator.com",
    currentUserId: "testuser123",
    newEmail: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:43:43 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "28",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "lucas.nogueira@mailinator.com",
    dataFields: { userId: "testuser123" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:43:43 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "lucas.nogueira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          signupDate: "2021-05-03 13:43:43 +00:00",
          profileUpdatedAt: "2021-05-03 13:43:43 +00:00",
          userId: "testuser123",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:43:44 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:43:43 +00:00",
          },
          email: "lucas.nogueira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:44:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "568",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:44:13 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:44:14 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "lucas.nogueira@mailinator.com",
        dataFields: {
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          signupDate: "2021-05-03 13:43:43 +00:00",
          profileUpdatedAt: "2021-05-03 13:43:43 +00:00",
          userId: "testuser123",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:43:44 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:43:43 +00:00",
          },
          email: "lucas.nogueira@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:44:14 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "568",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "9",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/updateEmail", {
    currentEmail: "lucas.nogueira@mailinator.com",
    currentUserId: "testuser123",
    newEmail: "sandro.arturo@mailinator.com",
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:44:15 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "1028",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "sandro.arturo@mailinator.com",
    dataFields: {
      userId: "testuser123",
      name: "Lucas",
      phoneNumber: "+5583999999997",
    },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:44:15 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "3",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          signupDate: "2021-05-03 13:43:43 +00:00",
          profileUpdatedAt: "2021-05-03 13:44:15 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:44:17 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:44:16 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:44:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "630",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:44:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          signupDate: "2021-05-03 13:43:43 +00:00",
          profileUpdatedAt: "2021-05-03 13:44:15 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:44:17 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:44:16 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:44:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "630",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "sandro.arturo@mailinator.com",
    dataFields: { userId: "testuser345" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:44:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "12",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          signupDate: "2021-05-03 13:43:43 +00:00",
          profileUpdatedAt: "2021-05-03 13:44:46 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:44:47 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:44:16 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser345",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:45:16 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "630",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "8",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          signupDate: "2021-05-03 13:43:43 +00:00",
          profileUpdatedAt: "2021-05-03 13:44:46 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:44:47 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:44:16 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser345",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:45:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "630",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          signupDate: "2021-05-03 13:43:43 +00:00",
          profileUpdatedAt: "2021-05-03 13:44:46 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:44:47 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:44:16 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser345",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:45:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "630",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [980091, 980092, 980093],
          signupDate: "2021-05-03 13:43:43 +00:00",
          profileUpdatedAt: "2021-05-03 13:44:46 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-05-03 13:44:47 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:44:16 +00:00",
          },
          email: "sandro.arturo@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser345",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:45:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "630",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "4",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:45:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:45:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "29",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:45:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "21",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:45:49 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "6",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:46:19 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:46:19 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:46:20 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "carlos.solimoes@mailinator.com",
    dataFields: { userId: "testuser456", name: "Carlos" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:46:20 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "14",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 980094,
          name: "List Four",
          createdAt: 1620049391280,
          listType: "Standard",
        },
        {
          id: 980093,
          name: "List Three",
          createdAt: 1620049359674,
          listType: "Standard",
        },
        {
          id: 980092,
          name: "List Two",
          createdAt: 1620049296325,
          listType: "Standard",
        },
        {
          id: 980091,
          name: "List One",
          createdAt: 1620049295722,
          listType: "Standard",
        },
        {
          id: 954281,
          name: "People without emails",
          createdAt: 1618248887848,
          listType: "Standard",
        },
        {
          id: 954280,
          name: "Everyone with an email",
          createdAt: 1618248887703,
          listType: "Standard",
        },
        {
          id: 952927,
          name: "One Person",
          createdAt: 1618074314757,
          listType: "Standard",
        },
        {
          id: 952753,
          name: "Mix of email and no email",
          createdAt: 1618012591060,
          listType: "Standard",
        },
        {
          id: 952743,
          name: "small group",
          createdAt: 1618011863427,
          listType: "Standard",
        },
        {
          id: 881919,
          name: "High LTV Spanish speakers",
          createdAt: 1614982084143,
          listType: "Standard",
        },
        {
          id: 861897,
          name: "People who bought red shells",
          createdAt: 1613625317732,
          listType: "Standard",
        },
        {
          id: 856682,
          name: "All Emails",
          createdAt: 1613157191050,
          listType: "Standard",
        },
        {
          id: 847675,
          name: "People",
          createdAt: 1612484718408,
          listType: "Standard",
        },
        {
          id: 847669,
          name: "One person",
          createdAt: 1612484024629,
          listType: "Standard",
        },
        {
          id: 845307,
          name: "Spanish Speakers",
          createdAt: 1612375373495,
          listType: "Standard",
        },
        {
          id: 845306,
          name: "High Value with Recent Automotive Purchase",
          createdAt: 1612375372851,
          listType: "Standard",
        },
        {
          id: 845305,
          name: "High Value",
          createdAt: 1612375372540,
          listType: "Standard",
        },
      ],
    },
    [
      "Date",
      "Mon, 03 May 2021 13:46:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1506",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 980094,
    subscribers: [{ email: "carlos.solimoes@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 03 May 2021 13:46:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [980094],
          signupDate: "2021-05-03 13:46:20 +00:00",
          profileUpdatedAt: "2021-05-03 13:46:20 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:46:20 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:46:20 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:46:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:46:50 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/pilo.paz@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:46:50 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "13",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:46:51 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "11",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/pilo.paz@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:46:51 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "18",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "jake.jill@mailinator.com",
    dataFields: { userId: "jake.jill", name: "Jake" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:46:51 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "jake.jill@mailinator.com",
        dataFields: {
          name: "Jake",
          email: "jake.jill@mailinator.com",
          signupDate: "2021-05-03 13:46:52 +00:00",
          profileUpdatedAt: "2021-05-03 13:46:51 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:46:52 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:46:52 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:47:21 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "408",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "jake.jill@mailinator.com",
        dataFields: {
          name: "Jake",
          email: "jake.jill@mailinator.com",
          signupDate: "2021-05-03 13:46:52 +00:00",
          profileUpdatedAt: "2021-05-03 13:46:51 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:46:52 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:46:52 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:47:22 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "408",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [980094],
          signupDate: "2021-05-03 13:46:20 +00:00",
          profileUpdatedAt: "2021-05-03 13:46:20 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:46:20 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:46:20 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:47:22 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "jake.jill@mailinator.com",
    dataFields: { userId: "jake.jill", name: "Lucas" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:47:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "14",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [980094],
          signupDate: "2021-05-03 13:46:20 +00:00",
          profileUpdatedAt: "2021-05-03 13:46:20 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:46:20 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:46:20 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:47:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "jake.jill@mailinator.com",
        dataFields: {
          name: "Lucas",
          email: "jake.jill@mailinator.com",
          signupDate: "2021-05-03 13:46:52 +00:00",
          profileUpdatedAt: "2021-05-03 13:47:22 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:47:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:46:52 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:47:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "409",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "jake.jill@mailinator.com",
        dataFields: {
          name: "Lucas",
          email: "jake.jill@mailinator.com",
          signupDate: "2021-05-03 13:46:52 +00:00",
          profileUpdatedAt: "2021-05-03 13:47:22 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:47:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:46:52 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:47:53 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "409",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [980094],
          signupDate: "2021-05-03 13:46:20 +00:00",
          profileUpdatedAt: "2021-05-03 13:46:20 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:46:20 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:46:20 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:47:53 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "13",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:47:53 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [980094],
          signupDate: "2021-05-03 13:46:20 +00:00",
          profileUpdatedAt: "2021-05-03 13:46:20 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:46:20 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:46:20 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:48:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:48:24 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "6",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [980094],
          signupDate: "2021-05-03 13:46:20 +00:00",
          profileUpdatedAt: "2021-05-03 13:46:20 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-05-03 13:46:20 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-05-03 13:46:20 +00:00",
          },
          email: "carlos.solimoes@mailinator.com",
          unsubscribedChannelIds: [],
          signupSource: "API",
          unsubscribedMessageTypeIds: [],
        },
        userId: "testuser456",
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:48:24 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:48:24 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:48:54 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/000")
  .once()
  .reply(
    400,
    {
      msg: "Invalid email: 000",
      code: "InvalidEmailAddressError",
      params: null,
    },
    [
      "Date",
      "Mon, 03 May 2021 13:48:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "76",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "0",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 03 May 2021 13:48:56 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "44",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "carlos.solimoes@mailinator.com",
    dataFields: { signupDate: "GGG" },
  })
  .once()
  .reply(
    400,
    {
      msg: "Project 10216: The request does not have the same data types as the data previously submitted. Field 'signupDate' already exists for type 'user' and has a data type of 'date' but possible types 'string, keyword' in the request.",
      code: "RequestFieldsTypesMismatched",
      params: {
        validationErrors: {
          signupDate: {
            incomingTypes: ["string", "keyword"],
            expectedType: "date",
            _type: "UnexpectedType",
            offendingValue: "GGG",
            category: "user",
          },
        },
      },
    },
    [
      "Date",
      "Mon, 03 May 2021 13:48:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "447",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:48:56 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "7",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:48:56 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "9",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:48:58 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "1992",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:48:58 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "16",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:48:58 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "10",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 03 May 2021 13:48:59 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/980091")
  .once()
  .reply(
    200,
    {
      msg: "List 980091 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Mon, 03 May 2021 13:49:00 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1454",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/980092")
  .once()
  .reply(
    200,
    {
      msg: "List 980092 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Mon, 03 May 2021 13:49:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "867",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/980093")
  .once()
  .reply(
    200,
    {
      msg: "List 980093 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Mon, 03 May 2021 13:49:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "914",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/980094")
  .once()
  .reply(
    200,
    {
      msg: "List 980094 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Mon, 03 May 2021 13:49:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1076",
      "Server",
      "iterable-ingress b48a",
    ]
  );
