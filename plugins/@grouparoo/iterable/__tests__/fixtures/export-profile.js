const nock = require("nock");

nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:45:13 GMT",
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
  .delete("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:45:13 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "81",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:45:13 GMT",
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
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:45:13 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "39",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:45:13 GMT",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
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
      "Mon, 29 Mar 2021 19:45:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "734",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
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
      "Mon, 29 Mar 2021 19:45:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "734",
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
      "Mon, 29 Mar 2021 19:45:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "734",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
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
      "Mon, 29 Mar 2021 19:45:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "734",
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
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:45:44 GMT",
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
    "Mon, 29 Mar 2021 19:45:44 GMT",
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
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { name: "Caio" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:45:44 GMT",
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
          signupDate: "2021-03-29 19:45:44 +00:00",
          profileUpdatedAt: "2021-03-29 19:45:44 +00:00",
          signupSource: "API",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:45:44 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
          },
        },
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:46:14 GMT",
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
          email: "caio.silveira@mailinator.com",
          signupDate: "2021-03-29 19:45:44 +00:00",
          profileUpdatedAt: "2021-03-29 19:45:44 +00:00",
          signupSource: "API",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:45:44 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
          },
        },
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:46:14 GMT",
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
      "iterable-ingress aaa7",
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
    "Mon, 29 Mar 2021 19:46:14 GMT",
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
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          profileUpdatedAt: "2021-03-29 19:46:14 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:46:15 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:46:44 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "501",
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
          profileUpdatedAt: "2021-03-29 19:46:14 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:46:15 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:46:45 GMT",
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
    "Mon, 29 Mar 2021 19:46:45 GMT",
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
          profileUpdatedAt: "2021-03-29 19:46:45 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:46:45 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:47:15 GMT",
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
          name: "Evan",
          phoneNumber: "+5583999999998",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          profileUpdatedAt: "2021-03-29 19:46:45 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:46:45 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:47:15 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "459",
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
    "Mon, 29 Mar 2021 19:47:15 GMT",
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
          profileUpdatedAt: "2021-03-29 19:47:15 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:47:16 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:47:45 GMT",
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
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          profileUpdatedAt: "2021-03-29 19:47:15 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:47:16 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:47:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "414",
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
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:47:45 GMT",
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
      "Mon, 29 Mar 2021 19:47:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "734",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "10",
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
      "Mon, 29 Mar 2021 19:47:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "734",
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
  .post("/api/lists", { name: "List One" })
  .once()
  .reply(200, { listId: 937227 }, [
    "Date",
    "Mon, 29 Mar 2021 19:47:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "17",
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
  .post("/api/lists/subscribe", {
    listId: 937227,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 29 Mar 2021 19:47:46 GMT",
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
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:47:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "814",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:47:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "814",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Two" })
  .once()
  .reply(200, { listId: 937228 }, [
    "Date",
    "Mon, 29 Mar 2021 19:47:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "17",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "12",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 937228,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 29 Mar 2021 19:47:46 GMT",
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
          emailListIds: [937227, 937228],
          profileUpdatedAt: "2021-03-29 19:47:46 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:47:46 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
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
      "Mon, 29 Mar 2021 19:48:16 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "535",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "5",
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
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:48:16 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "894",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "12",
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
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:48:16 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "894",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "35",
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
          emailListIds: [937227, 937228],
          profileUpdatedAt: "2021-03-29 19:47:46 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:47:46 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
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
      "Mon, 29 Mar 2021 19:48:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "535",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1",
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
    "Mon, 29 Mar 2021 19:48:17 GMT",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:48:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "894",
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
  .post("/api/lists/subscribe", {
    listId: 937227,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 29 Mar 2021 19:48:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:48:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "894",
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
  .post("/api/lists/unsubscribe", {
    listId: 937228,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 29 Mar 2021 19:48:17 GMT",
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
          emailListIds: [937227],
          profileUpdatedAt: "2021-03-29 19:48:17 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:48:17 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
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
      "Mon, 29 Mar 2021 19:48:47 GMT",
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
          emailListIds: [937227],
          profileUpdatedAt: "2021-03-29 19:48:17 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:48:17 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
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
      "Mon, 29 Mar 2021 19:48:47 GMT",
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
    "Mon, 29 Mar 2021 19:48:47 GMT",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:48:47 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "894",
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
    listId: 937228,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 29 Mar 2021 19:48:47 GMT",
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
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:48:48 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "894",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:48:48 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "894",
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
  .post("/api/lists", { name: "List Three" })
  .once()
  .reply(200, { listId: 937232 }, [
    "Date",
    "Mon, 29 Mar 2021 19:48:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "17",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "8",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/subscribe", {
    listId: 937232,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 29 Mar 2021 19:48:48 GMT",
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
          emailListIds: [937227, 937228, 937232],
          profileUpdatedAt: "2021-03-29 19:48:48 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:48:48 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
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
      "Mon, 29 Mar 2021 19:49:18 GMT",
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
          id: 937232,
          name: "List Three",
          createdAt: 1617047328226,
          listType: "Standard",
        },
        {
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:49:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "976",
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
          emailListIds: [937227, 937228, 937232],
          profileUpdatedAt: "2021-03-29 19:48:48 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:48:48 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
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
      "Mon, 29 Mar 2021 19:49:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "8",
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
    "Mon, 29 Mar 2021 19:49:18 GMT",
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
          id: 937232,
          name: "List Three",
          createdAt: 1617047328226,
          listType: "Standard",
        },
        {
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:49:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "976",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 937232,
          name: "List Three",
          createdAt: 1617047328226,
          listType: "Standard",
        },
        {
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:49:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "976",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Four" })
  .once()
  .reply(200, { listId: 937234 }, [
    "Date",
    "Mon, 29 Mar 2021 19:49:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "17",
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
  .post("/api/lists/unsubscribe", {
    listId: 937234,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 29 Mar 2021 19:49:19 GMT",
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
          emailListIds: [937227, 937228, 937232],
          profileUpdatedAt: "2021-03-29 19:49:19 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:49:19 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
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
      "Mon, 29 Mar 2021 19:49:49 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "542",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 937234,
          name: "List Four",
          createdAt: 1617047358989,
          listType: "Standard",
        },
        {
          id: 937232,
          name: "List Three",
          createdAt: 1617047328226,
          listType: "Standard",
        },
        {
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:49:49 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1057",
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
    "Mon, 29 Mar 2021 19:49:49 GMT",
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
          customField: "testCustomField",
          subscribedMessageTypeIds: [],
          emailListIds: [937227, 937228, 937232],
          profileUpdatedAt: "2021-03-29 19:49:19 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:49:19 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:45:44 +00:00",
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
      "Mon, 29 Mar 2021 19:49:49 GMT",
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
      "iterable-ingress b48a",
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
    "Mon, 29 Mar 2021 19:49:49 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "141",
    "Server",
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "lucas.nogueira@mailinator.com",
    dataFields: { userId: "testuser123" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:49:49 GMT",
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
    "iterable-ingress b48a",
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
          emailListIds: [937227, 937228, 937232],
          signupDate: "2021-03-29 19:49:50 +00:00",
          profileUpdatedAt: "2021-03-29 19:49:49 +00:00",
          userId: "testuser123",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:49:50 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:49:50 +00:00",
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
      "Mon, 29 Mar 2021 19:50:19 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "568",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "7",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:50:20 GMT",
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
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:50:20 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
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
          emailListIds: [937227, 937228, 937232],
          signupDate: "2021-03-29 19:49:50 +00:00",
          profileUpdatedAt: "2021-03-29 19:49:49 +00:00",
          userId: "testuser123",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:49:50 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:49:50 +00:00",
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
      "Mon, 29 Mar 2021 19:50:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "568",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1",
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
    "Mon, 29 Mar 2021 19:50:20 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "156",
    "Server",
    "iterable-ingress aaa7",
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
    "Mon, 29 Mar 2021 19:50:20 GMT",
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
    "iterable-ingress aaf8",
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
          emailListIds: [937227, 937228, 937232],
          signupDate: "2021-03-29 19:49:50 +00:00",
          profileUpdatedAt: "2021-03-29 19:50:20 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:50:20 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:50:20 +00:00",
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
      "Mon, 29 Mar 2021 19:50:50 GMT",
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
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:50:50 GMT",
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
          emailListIds: [937227, 937228, 937232],
          signupDate: "2021-03-29 19:49:50 +00:00",
          profileUpdatedAt: "2021-03-29 19:50:20 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:50:20 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:50:20 +00:00",
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
      "Mon, 29 Mar 2021 19:50:51 GMT",
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
      "iterable-ingress b886",
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
    "Mon, 29 Mar 2021 19:50:51 GMT",
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
          emailListIds: [937227, 937228, 937232],
          signupDate: "2021-03-29 19:49:50 +00:00",
          profileUpdatedAt: "2021-03-29 19:50:51 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:50:51 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:50:20 +00:00",
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
      "Mon, 29 Mar 2021 19:51:21 GMT",
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
          emailListIds: [937227, 937228, 937232],
          signupDate: "2021-03-29 19:49:50 +00:00",
          profileUpdatedAt: "2021-03-29 19:50:51 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-03-29 19:50:51 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:50:20 +00:00",
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
      "Mon, 29 Mar 2021 19:51:21 GMT",
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
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:51:21 GMT",
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
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:51:51 GMT",
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
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:51:51 GMT",
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
    "Mon, 29 Mar 2021 19:51:52 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "12",
    "Server",
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:52:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "81",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:52:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "12",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:52:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "16",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "carlos.solimoes@mailinator.com",
    dataFields: { userId: "testuser456", name: "Carlos" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:52:22 GMT",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 937234,
          name: "List Four",
          createdAt: 1617047358989,
          listType: "Standard",
        },
        {
          id: 937232,
          name: "List Three",
          createdAt: 1617047328226,
          listType: "Standard",
        },
        {
          id: 937228,
          name: "List Two",
          createdAt: 1617047266524,
          listType: "Standard",
        },
        {
          id: 937227,
          name: "List One",
          createdAt: 1617047266226,
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
      "Mon, 29 Mar 2021 19:52:22 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1057",
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
    listId: 937234,
    subscribers: [{ email: "carlos.solimoes@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Mon, 29 Mar 2021 19:52:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
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
          emailListIds: [937234],
          signupDate: "2021-03-29 19:52:23 +00:00",
          profileUpdatedAt: "2021-03-29 19:52:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:52:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:52:23 +00:00",
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
      "Mon, 29 Mar 2021 19:52:53 GMT",
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
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:52:53 GMT",
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
  .get("/api/users/pilo.paz@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:52:53 GMT",
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
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:52:53 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "3",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/pilo.paz@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:52:53 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "53",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "jake.jill@mailinator.com",
    dataFields: { userId: "jake.jill", name: "Jake" },
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:52:53 GMT",
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
    "iterable-ingress 6d38",
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
          signupDate: "2021-03-29 19:52:54 +00:00",
          profileUpdatedAt: "2021-03-29 19:52:53 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:52:54 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:52:54 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:53:24 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "408",
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
          signupDate: "2021-03-29 19:52:54 +00:00",
          profileUpdatedAt: "2021-03-29 19:52:53 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:52:54 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:52:54 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:53:24 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "408",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "35",
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
          emailListIds: [937234],
          signupDate: "2021-03-29 19:52:23 +00:00",
          profileUpdatedAt: "2021-03-29 19:52:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:52:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:52:23 +00:00",
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
      "Mon, 29 Mar 2021 19:53:24 GMT",
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
      "iterable-ingress b48a",
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
    "Mon, 29 Mar 2021 19:53:24 GMT",
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
          emailListIds: [937234],
          signupDate: "2021-03-29 19:52:23 +00:00",
          profileUpdatedAt: "2021-03-29 19:52:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:52:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:52:23 +00:00",
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
      "Mon, 29 Mar 2021 19:53:54 GMT",
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
          signupDate: "2021-03-29 19:52:54 +00:00",
          profileUpdatedAt: "2021-03-29 19:53:24 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:53:25 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:52:54 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:53:54 GMT",
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
      "iterable-ingress aaf8",
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
          signupDate: "2021-03-29 19:52:54 +00:00",
          profileUpdatedAt: "2021-03-29 19:53:24 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:53:25 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:52:54 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:53:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "409",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1",
      "Server",
      "iterable-ingress aaf8",
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
          emailListIds: [937234],
          signupDate: "2021-03-29 19:52:23 +00:00",
          profileUpdatedAt: "2021-03-29 19:52:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:52:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:52:23 +00:00",
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
      "Mon, 29 Mar 2021 19:53:55 GMT",
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
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:53:55 GMT",
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
  .reply(
    200,
    {
      user: {
        email: "carlos.solimoes@mailinator.com",
        dataFields: {
          name: "Carlos",
          subscribedMessageTypeIds: [],
          emailListIds: [937234],
          signupDate: "2021-03-29 19:52:23 +00:00",
          profileUpdatedAt: "2021-03-29 19:52:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:52:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:52:23 +00:00",
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
      "Mon, 29 Mar 2021 19:54:25 GMT",
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
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Mon, 29 Mar 2021 19:54:25 GMT",
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
      "Mon, 29 Mar 2021 19:54:25 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "76",
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
          emailListIds: [937234],
          signupDate: "2021-03-29 19:52:23 +00:00",
          profileUpdatedAt: "2021-03-29 19:52:23 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-03-29 19:52:23 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-03-29 19:52:23 +00:00",
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
      "Mon, 29 Mar 2021 19:54:25 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "540",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
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
      "Mon, 29 Mar 2021 19:54:25 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "447",
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
  .delete("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:54:26 GMT",
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
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:54:26 GMT",
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
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:54:26 GMT",
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
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:54:26 GMT",
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
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Mon, 29 Mar 2021 19:54:26 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "2",
    "Server",
    "iterable-ingress b48a",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/937227")
  .once()
  .reply(
    200,
    {
      msg: "List 937227 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:54:27 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1139",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/937228")
  .once()
  .reply(
    200,
    {
      msg: "List 937228 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:54:28 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1084",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/937232")
  .once()
  .reply(
    200,
    {
      msg: "List 937232 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:54:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "907",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/937234")
  .once()
  .reply(
    200,
    {
      msg: "List 937234 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Mon, 29 Mar 2021 19:54:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "95",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1004",
      "Server",
      "iterable-ingress b48a",
    ]
  );
