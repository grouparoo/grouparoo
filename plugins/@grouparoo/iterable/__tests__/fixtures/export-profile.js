const nock = require("nock");

nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:05:21 GMT",
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
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:05:22 GMT",
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
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:05:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "6",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:05:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "25",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:05:22 GMT",
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
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:05:22 GMT",
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
      "Fri, 30 Apr 2021 03:05:22 GMT",
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
      "Fri, 30 Apr 2021 03:05:22 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1183",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
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
      "Fri, 30 Apr 2021 03:05:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1183",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "9",
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
      "Fri, 30 Apr 2021 03:05:23 GMT",
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
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:06:03 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "5",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:06:04 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "5",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:06:04 GMT",
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
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { name: "Caio" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:06:04 GMT",
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
          signupDate: "2021-04-30 03:06:05 +00:00",
          profileUpdatedAt: "2021-04-30 03:06:04 +00:00",
          signupSource: "API",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:06:05 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
          },
        },
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:06:34 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "374",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "4",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:06:35 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "14",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:06:35 GMT",
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
    "Fri, 30 Apr 2021 03:06:35 GMT",
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
    "iterable-ingress aaa7",
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
          signupDate: "2021-04-30 03:06:35 +00:00",
          profileUpdatedAt: "2021-04-30 03:06:35 +00:00",
          signupSource: "API",
          userId: "sebastian3039",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:06:35 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:35 +00:00",
          },
        },
        userId: "sebastian3039",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:07:05 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "470",
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
          name: "Caio",
          email: "caio.silveira@mailinator.com",
          signupDate: "2021-04-30 03:06:05 +00:00",
          profileUpdatedAt: "2021-04-30 03:06:04 +00:00",
          signupSource: "API",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:06:05 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
          },
        },
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:07:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "374",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress b48a",
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
    "Fri, 30 Apr 2021 03:07:06 GMT",
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
    "iterable-ingress aaf8",
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
          profileUpdatedAt: "2021-04-30 03:07:06 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:07:06 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:07:36 GMT",
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
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          profileUpdatedAt: "2021-04-30 03:07:06 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:07:06 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:07:37 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "501",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "4",
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
          profileUpdatedAt: "2021-04-30 03:07:06 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:07:06 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:07:37 GMT",
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
          profileUpdatedAt: "2021-04-30 03:07:06 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:07:06 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:07:37 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "501",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress b48a",
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
    "Fri, 30 Apr 2021 03:07:38 GMT",
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
          profileUpdatedAt: "2021-04-30 03:07:38 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:07:40 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:08:08 GMT",
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
          name: "Evan",
          phoneNumber: "+5583999999998",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          profileUpdatedAt: "2021-04-30 03:07:38 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:07:40 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:08:08 GMT",
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
      "iterable-ingress b886",
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
    "Fri, 30 Apr 2021 03:08:09 GMT",
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
          profileUpdatedAt: "2021-04-30 03:08:08 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:08:10 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:08:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "414",
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
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          profileUpdatedAt: "2021-04-30 03:08:08 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:08:10 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:08:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "414",
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
    "Fri, 30 Apr 2021 03:08:39 GMT",
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
      "Fri, 30 Apr 2021 03:08:39 GMT",
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
      "Fri, 30 Apr 2021 03:08:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1183",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "45",
      "Server",
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List One" })
  .once()
  .reply(200, { listId: 977929 }, [
    "Date",
    "Fri, 30 Apr 2021 03:08:40 GMT",
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
    listId: 977929,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Fri, 30 Apr 2021 03:08:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "20",
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
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:08:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1263",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
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
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:08:40 GMT",
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
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Two" })
  .once()
  .reply(200, { listId: 977930 }, [
    "Date",
    "Fri, 30 Apr 2021 03:08:40 GMT",
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
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 977930,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Fri, 30 Apr 2021 03:08:40 GMT",
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
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [977929, 977930],
          profileUpdatedAt: "2021-04-30 03:08:40 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:08:42 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
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
      "Fri, 30 Apr 2021 03:09:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "535",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "4",
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
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:09:11 GMT",
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
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:09:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "9",
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
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [977929, 977930],
          profileUpdatedAt: "2021-04-30 03:08:40 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:08:42 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
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
      "Fri, 30 Apr 2021 03:09:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "535",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress aaa7",
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
    "Fri, 30 Apr 2021 03:09:12 GMT",
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
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:09:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 977929,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Fri, 30 Apr 2021 03:09:12 GMT",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:09:12 GMT",
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
  .post("/api/lists/unsubscribe", {
    listId: 977930,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Fri, 30 Apr 2021 03:09:12 GMT",
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
      "iterable-ingress aaf8",
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
          emailListIds: [977929],
          profileUpdatedAt: "2021-04-30 03:09:12 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:09:14 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
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
      "Fri, 30 Apr 2021 03:09:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "528",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "4",
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
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [977929],
          profileUpdatedAt: "2021-04-30 03:09:12 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:09:14 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
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
      "Fri, 30 Apr 2021 03:09:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "528",
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
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:09:43 GMT",
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
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:09:43 GMT",
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
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 977930,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Fri, 30 Apr 2021 03:09:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
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
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:09:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "14",
      "Server",
      "iterable-ingress b48a",
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
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:09:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1343",
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
  .post("/api/lists", { name: "List Three" })
  .once()
  .reply(200, { listId: 977931 }, [
    "Date",
    "Fri, 30 Apr 2021 03:09:44 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "17",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "13",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 977931,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Fri, 30 Apr 2021 03:09:44 GMT",
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
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [977929, 977930, 977931],
          profileUpdatedAt: "2021-04-30 03:09:44 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:09:44 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
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
      "Fri, 30 Apr 2021 03:10:14 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "2",
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
          id: 977931,
          name: "List Three",
          createdAt: 1619752184044,
          listType: "Standard",
        },
        {
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:10:14 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1425",
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
          emailListIds: [977929, 977930, 977931],
          profileUpdatedAt: "2021-04-30 03:09:44 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:09:44 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
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
      "Fri, 30 Apr 2021 03:10:15 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
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
    "Fri, 30 Apr 2021 03:10:15 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "6",
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
          id: 977931,
          name: "List Three",
          createdAt: 1619752184044,
          listType: "Standard",
        },
        {
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:10:15 GMT",
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
          id: 977931,
          name: "List Three",
          createdAt: 1619752184044,
          listType: "Standard",
        },
        {
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:10:15 GMT",
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
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Four" })
  .once()
  .reply(200, { listId: 977932 }, [
    "Date",
    "Fri, 30 Apr 2021 03:10:15 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "17",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "39",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/unsubscribe", {
    listId: 977932,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Fri, 30 Apr 2021 03:10:15 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "4",
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
          emailListIds: [977929, 977930, 977931],
          profileUpdatedAt: "2021-04-30 03:10:15 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:10:16 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
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
      "Fri, 30 Apr 2021 03:10:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 977932,
          name: "List Four",
          createdAt: 1619752215594,
          listType: "Standard",
        },
        {
          id: 977931,
          name: "List Three",
          createdAt: 1619752184044,
          listType: "Standard",
        },
        {
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:10:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1506",
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
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:10:46 GMT",
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
          emailListIds: [977929, 977930, 977931],
          profileUpdatedAt: "2021-04-30 03:10:15 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:10:16 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:06:05 +00:00",
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
      "Fri, 30 Apr 2021 03:10:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "6",
      "Server",
      "iterable-ingress aaf8",
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
    "Fri, 30 Apr 2021 03:10:47 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "216",
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
    "Fri, 30 Apr 2021 03:10:47 GMT",
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
          emailListIds: [977929, 977930, 977931],
          signupDate: "2021-04-30 03:10:47 +00:00",
          profileUpdatedAt: "2021-04-30 03:10:47 +00:00",
          userId: "testuser123",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:10:47 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:10:47 +00:00",
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
      "Fri, 30 Apr 2021 03:11:17 GMT",
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
    "Fri, 30 Apr 2021 03:11:17 GMT",
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
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:11:17 GMT",
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
          emailListIds: [977929, 977930, 977931],
          signupDate: "2021-04-30 03:10:47 +00:00",
          profileUpdatedAt: "2021-04-30 03:10:47 +00:00",
          userId: "testuser123",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:10:47 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:10:47 +00:00",
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
      "Fri, 30 Apr 2021 03:11:18 GMT",
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
      "iterable-ingress b48a",
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
    "Fri, 30 Apr 2021 03:11:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "155",
    "Server",
    "iterable-ingress b48a",
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
    "Fri, 30 Apr 2021 03:11:18 GMT",
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
          emailListIds: [977929, 977930, 977931],
          signupDate: "2021-04-30 03:10:47 +00:00",
          profileUpdatedAt: "2021-04-30 03:11:18 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:11:18 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:11:18 +00:00",
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
      "Fri, 30 Apr 2021 03:11:48 GMT",
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
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:11:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "20",
    "Server",
    "iterable-ingress b48a",
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
          emailListIds: [977929, 977930, 977931],
          signupDate: "2021-04-30 03:10:47 +00:00",
          profileUpdatedAt: "2021-04-30 03:11:18 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:11:18 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:11:18 +00:00",
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
      "Fri, 30 Apr 2021 03:11:49 GMT",
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
      "iterable-ingress b48a",
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
    "Fri, 30 Apr 2021 03:11:49 GMT",
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
          emailListIds: [977929, 977930, 977931],
          signupDate: "2021-04-30 03:10:47 +00:00",
          profileUpdatedAt: "2021-04-30 03:11:49 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:11:49 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:11:18 +00:00",
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
      "Fri, 30 Apr 2021 03:12:19 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "630",
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
          emailListIds: [977929, 977930, 977931],
          signupDate: "2021-04-30 03:10:47 +00:00",
          profileUpdatedAt: "2021-04-30 03:11:49 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:11:49 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:11:18 +00:00",
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
      "Fri, 30 Apr 2021 03:12:20 GMT",
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
          emailListIds: [977929, 977930, 977931],
          signupDate: "2021-04-30 03:10:47 +00:00",
          profileUpdatedAt: "2021-04-30 03:11:49 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:11:49 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:11:18 +00:00",
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
      "Fri, 30 Apr 2021 03:12:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "630",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "64",
      "Server",
      "iterable-ingress 8e97",
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
          emailListIds: [977929, 977930, 977931],
          signupDate: "2021-04-30 03:10:47 +00:00",
          profileUpdatedAt: "2021-04-30 03:11:49 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-04-30 03:11:49 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:11:18 +00:00",
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
      "Fri, 30 Apr 2021 03:12:21 GMT",
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
      "iterable-ingress 6d38",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:12:21 GMT",
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
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:12:51 GMT",
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
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:12:51 GMT",
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
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:12:52 GMT",
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
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:13:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "5",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:13:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "66",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:13:23 GMT",
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
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "carlos.solimoes@mailinator.com",
    dataFields: { userId: "testuser456", name: "Carlos" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:13:23 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "17",
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
          id: 977932,
          name: "List Four",
          createdAt: 1619752215594,
          listType: "Standard",
        },
        {
          id: 977931,
          name: "List Three",
          createdAt: 1619752184044,
          listType: "Standard",
        },
        {
          id: 977930,
          name: "List Two",
          createdAt: 1619752120838,
          listType: "Standard",
        },
        {
          id: 977929,
          name: "List One",
          createdAt: 1619752120264,
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
      "Fri, 30 Apr 2021 03:13:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1506",
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
  .post("/api/lists/subscribe", {
    listId: 977932,
    subscribers: [{ email: "carlos.solimoes@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Fri, 30 Apr 2021 03:13:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "8",
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
          emailListIds: [977932],
          signupDate: "2021-04-30 03:13:23 +00:00",
          profileUpdatedAt: "2021-04-30 03:13:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:13:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:13:23 +00:00",
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
      "Fri, 30 Apr 2021 03:13:53 GMT",
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
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:13:53 GMT",
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
  .get("/api/users/pilo.paz@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:13:53 GMT",
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
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:13:54 GMT",
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
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/pilo.paz@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:13:54 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "20",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "jake.jill@mailinator.com",
    dataFields: { userId: "jake.jill", name: "Jake" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:13:54 GMT",
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
          signupDate: "2021-04-30 03:13:54 +00:00",
          profileUpdatedAt: "2021-04-30 03:13:54 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:13:54 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:13:54 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:14:24 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "408",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "0",
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
          signupDate: "2021-04-30 03:13:54 +00:00",
          profileUpdatedAt: "2021-04-30 03:13:54 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:13:54 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:13:54 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:14:25 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "408",
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
          emailListIds: [977932],
          signupDate: "2021-04-30 03:13:23 +00:00",
          profileUpdatedAt: "2021-04-30 03:13:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:13:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:13:23 +00:00",
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
      "Fri, 30 Apr 2021 03:14:25 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "4",
      "Server",
      "iterable-ingress aaa7",
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
    "Fri, 30 Apr 2021 03:14:25 GMT",
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
          emailListIds: [977932],
          signupDate: "2021-04-30 03:13:23 +00:00",
          profileUpdatedAt: "2021-04-30 03:13:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:13:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:13:23 +00:00",
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
      "Fri, 30 Apr 2021 03:14:55 GMT",
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
          signupDate: "2021-04-30 03:13:54 +00:00",
          profileUpdatedAt: "2021-04-30 03:14:25 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:14:26 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:13:54 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:14:55 GMT",
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
      "iterable-ingress b48a",
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
          signupDate: "2021-04-30 03:13:54 +00:00",
          profileUpdatedAt: "2021-04-30 03:14:25 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:14:26 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:13:54 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:14:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "409",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "2",
      "Server",
      "iterable-ingress 8e97",
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
          emailListIds: [977932],
          signupDate: "2021-04-30 03:13:23 +00:00",
          profileUpdatedAt: "2021-04-30 03:13:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:13:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:13:23 +00:00",
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
      "Fri, 30 Apr 2021 03:14:56 GMT",
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
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:14:56 GMT",
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
          emailListIds: [977932],
          signupDate: "2021-04-30 03:13:23 +00:00",
          profileUpdatedAt: "2021-04-30 03:13:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:13:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:13:23 +00:00",
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
      "Fri, 30 Apr 2021 03:15:26 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
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
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:15:26 GMT",
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
          emailListIds: [977932],
          signupDate: "2021-04-30 03:13:23 +00:00",
          profileUpdatedAt: "2021-04-30 03:13:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-04-30 03:13:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-04-30 03:13:23 +00:00",
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
      "Fri, 30 Apr 2021 03:15:27 GMT",
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
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:15:27 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "21",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:15:57 GMT",
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
    "iterable-ingress b886",
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
      "Fri, 30 Apr 2021 03:15:58 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "76",
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
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Fri, 30 Apr 2021 03:15:58 GMT",
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
    "iterable-ingress aaf8",
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
      msg:
        "Project 10216: The request does not have the same data types as the data previously submitted. Field 'signupDate' already exists for type 'user' and has a data type of 'date' but possible types 'string, keyword' in the request.",
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
      "Fri, 30 Apr 2021 03:15:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "447",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "2",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:15:59 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "6",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:15:59 GMT",
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
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:15:59 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "1",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:15:59 GMT",
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
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:15:59 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "5",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Fri, 30 Apr 2021 03:15:59 GMT",
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
  .delete("/api/lists/977929")
  .once()
  .reply(
    200,
    {
      msg: "List 977929 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:16:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1024",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/977930")
  .once()
  .reply(
    200,
    {
      msg: "List 977930 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:16:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "944",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/977931")
  .once()
  .reply(
    200,
    {
      msg: "List 977931 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:16:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "894",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/977932")
  .once()
  .reply(
    200,
    {
      msg: "List 977932 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Fri, 30 Apr 2021 03:16:04 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "860",
      "Server",
      "iterable-ingress b48a",
    ]
  );
