const nock = require("nock");

nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 17:59:49 GMT",
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
  .delete("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 17:59:49 GMT",
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
    "Thu, 01 Jul 2021 17:59:50 GMT",
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
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 17:59:50 GMT",
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
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 17:59:50 GMT",
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
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 17:59:50 GMT",
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
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 17:59:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "20",
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
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 17:59:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 17:59:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
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
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 17:59:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
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
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:00:31 GMT",
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
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:00:31 GMT",
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
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:00:31 GMT",
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
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { name: "Caio" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:00:32 GMT",
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
          signupDate: "2021-07-01 18:00:44 +00:00",
          profileUpdatedAt: "2021-07-01 18:00:32 +00:00",
          signupSource: "API",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:00:44 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:01:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "374",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "3",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:01:12 GMT",
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
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:01:12 GMT",
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
    email: "sebastian@mailinator.com",
    dataFields: {
      name: "sebastian",
      userId: "sebastian3039",
      phoneNumber: "+5583999999939",
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:01:12 GMT",
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
    "iterable-ingress b48a",
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
          signupDate: "2021-07-01 18:01:15 +00:00",
          profileUpdatedAt: "2021-07-01 18:01:12 +00:00",
          signupSource: "API",
          userId: "sebastian3039",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:01:15 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:01:15 +00:00",
          },
        },
        userId: "sebastian3039",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:01:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "470",
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
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          name: "Caio",
          email: "caio.silveira@mailinator.com",
          signupDate: "2021-07-01 18:00:44 +00:00",
          profileUpdatedAt: "2021-07-01 18:00:32 +00:00",
          signupSource: "API",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:00:44 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:01:53 GMT",
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
      defaultAddress: {
        street: "Alice Luna",
        number: 10,
        zipcode: "555555555",
        city: "Campina Grande",
        flat: { number: 405, floor: 4 },
      },
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:01:53 GMT",
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
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            number: 10,
            flat: { number: 405, floor: 4 },
            street: "Alice Luna",
            city: "Campina Grande",
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-07-01 18:01:53 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:01:55 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:02:33 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "632",
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
          defaultAddress: {
            number: 10,
            flat: { number: 405, floor: 4 },
            street: "Alice Luna",
            city: "Campina Grande",
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-07-01 18:01:53 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:01:55 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:02:34 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "632",
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
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: {
      name: "Caio",
      userId: "testuser123",
      phoneNumber: "+5583999999999",
      signupDate: "2020-08-19T20:50:04.000Z",
      customField: "testCustomField",
      defaultAddress: {
        street: "Emilio de Araujo",
        number: 10,
        zipcode: "555555555",
      },
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:02:34 GMT",
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
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            number: 10,
            flat: { number: 405, floor: 4 },
            street: "Emilio de Araujo",
            city: "Campina Grande",
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-07-01 18:02:34 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:02:37 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:03:14 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "638",
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
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            number: 10,
            flat: { number: 405, floor: 4 },
            street: "Emilio de Araujo",
            city: "Campina Grande",
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-07-01 18:02:34 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:02:37 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:03:15 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "638",
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
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: {
      name: "Caio",
      userId: "testuser123",
      phoneNumber: "+5583999999999",
      signupDate: "2020-08-19T20:50:04.000Z",
      customField: "testCustomField",
      defaultAddress: {
        street: "Emilio de Araujo",
        number: 20,
        zipcode: "555555555",
        city: "Campina Grande",
        country: "BR",
      },
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:03:15 GMT",
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
          name: "Caio",
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            number: 20,
            flat: { number: 405, floor: 4 },
            country: "BR",
            street: "Emilio de Araujo",
            city: "Campina Grande",
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-07-01 18:03:15 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:03:17 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:03:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "653",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "3",
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
          phoneNumber: "+5583999999999",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          signupDate: "2020-08-19 20:50:04 +00:00",
          defaultAddress: {
            number: 20,
            flat: { number: 405, floor: 4 },
            country: "BR",
            street: "Emilio de Araujo",
            city: "Campina Grande",
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-07-01 18:03:15 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:03:17 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:03:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "653",
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
          defaultAddress: {
            number: 20,
            flat: { number: 405, floor: 4 },
            country: "BR",
            street: "Emilio de Araujo",
            city: "Campina Grande",
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-07-01 18:03:15 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:03:17 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:03:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "653",
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
          defaultAddress: {
            number: 20,
            flat: { number: 405, floor: 4 },
            country: "BR",
            street: "Emilio de Araujo",
            city: "Campina Grande",
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-07-01 18:03:15 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:03:17 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:03:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "653",
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
      signupDate: null,
      userId: "testuser123",
      name: "Evan",
      phoneNumber: "+5583999999998",
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:03:56 GMT",
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
          name: "Evan",
          phoneNumber: "+5583999999998",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          defaultAddress: {
            number: 20,
            flat: { number: 405, floor: 4 },
            country: "BR",
            street: "Emilio de Araujo",
            city: "Campina Grande",
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-07-01 18:03:56 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:03:59 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:04:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "611",
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
          name: "Evan",
          phoneNumber: "+5583999999998",
          email: "caio.silveira@mailinator.com",
          customField: "testCustomField",
          defaultAddress: {
            number: 20,
            flat: { number: 405, floor: 4 },
            country: "BR",
            street: "Emilio de Araujo",
            city: "Campina Grande",
            zipcode: "555555555",
          },
          profileUpdatedAt: "2021-07-01 18:03:56 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:03:59 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:04:37 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "611",
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
    dataFields: {
      name: null,
      phoneNumber: null,
      signupDate: null,
      customField: null,
      userId: "testuser123",
      defaultAddress: {
        number: null,
        street: null,
        zipcode: null,
        city: "Campina Grande",
        country: "BR",
      },
    },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:04:37 GMT",
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
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:04:37 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:04:39 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "472",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "81",
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
          email: "caio.silveira@mailinator.com",
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:04:37 +00:00",
          signupSource: "API",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:04:39 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
          },
        },
        userId: "testuser123",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "472",
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
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:05:17 GMT",
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
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
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
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1261",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "18",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List One" })
  .once()
  .reply(200, { listId: 1068682 }, [
    "Date",
    "Thu, 01 Jul 2021 18:05:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "18",
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
    listId: 1068682,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:18 GMT",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1342",
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
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1342",
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
  .post("/api/lists", { name: "List Two" })
  .once()
  .reply(200, { listId: 1068683 }, [
    "Date",
    "Thu, 01 Jul 2021 18:05:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "18",
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
  .post("/api/lists/subscribe", {
    listId: 1068683,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:18 GMT",
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
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683],
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:05:18 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:05:22 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
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
      "Thu, 01 Jul 2021 18:05:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "595",
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
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
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
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683],
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:05:18 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:05:22 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
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
      "Thu, 01 Jul 2021 18:05:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "595",
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
    dataFields: { userId: "testuser123" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:05:59 GMT",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:05:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
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
  .post("/api/lists/subscribe", {
    listId: 1068682,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Thu, 01 Jul 2021 18:06:00 GMT",
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
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:06:00 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "19",
      "Server",
      "iterable-ingress aaf8",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists/unsubscribe", {
    listId: 1068683,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Thu, 01 Jul 2021 18:06:00 GMT",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682],
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:06:00 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:06:02 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
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
      "Thu, 01 Jul 2021 18:06:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "587",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:06:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "26",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682],
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:06:00 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:06:02 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
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
      "Thu, 01 Jul 2021 18:06:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "587",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "3",
      "Server",
      "iterable-ingress b48a",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "caio.silveira@mailinator.com",
    dataFields: { userId: "testuser123" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:06:41 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "31",
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
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:06:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
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
    listId: 1068683,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Thu, 01 Jul 2021 18:06:41 GMT",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:06:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
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
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:06:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1423",
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
  .post("/api/lists", { name: "List Three" })
  .once()
  .reply(200, { listId: 1068687 }, [
    "Date",
    "Thu, 01 Jul 2021 18:06:41 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "18",
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
  .post("/api/lists/subscribe", {
    listId: 1068687,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Thu, 01 Jul 2021 18:06:41 GMT",
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
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:06:41 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:06:46 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
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
      "Thu, 01 Jul 2021 18:07:22 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "603",
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
          id: 1068687,
          name: "List Three",
          createdAt: 1625162801754,
          listType: "Standard",
        },
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:07:22 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1506",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1068687,
          name: "List Three",
          createdAt: 1625162801754,
          listType: "Standard",
        },
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:07:22 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1506",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "21",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:06:41 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:06:46 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
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
      "Thu, 01 Jul 2021 18:07:22 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "603",
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
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:07:22 GMT",
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
          id: 1068687,
          name: "List Three",
          createdAt: 1625162801754,
          listType: "Standard",
        },
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:07:23 GMT",
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
          id: 1068687,
          name: "List Three",
          createdAt: 1625162801754,
          listType: "Standard",
        },
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:07:23 GMT",
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
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/lists", { name: "List Four" })
  .once()
  .reply(200, { listId: 1068689 }, [
    "Date",
    "Thu, 01 Jul 2021 18:07:23 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "18",
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
  .post("/api/lists/unsubscribe", {
    listId: 1068689,
    subscribers: [{ email: "caio.silveira@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Thu, 01 Jul 2021 18:07:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "21",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:07:23 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:07:26 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
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
      "Thu, 01 Jul 2021 18:08:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "603",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1068689,
          name: "List Four",
          createdAt: 1625162843262,
          listType: "Standard",
        },
        {
          id: 1068687,
          name: "List Three",
          createdAt: 1625162801754,
          listType: "Standard",
        },
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:08:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1588",
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
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:08:04 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "27",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:07:23 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:07:26 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
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
      "Thu, 01 Jul 2021 18:08:04 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "603",
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
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:08:04 GMT",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:07:23 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:07:26 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
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
      "Thu, 01 Jul 2021 18:08:04 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "603",
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
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:08:04 GMT",
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
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "caio.silveira@mailinator.com",
        dataFields: {
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:07:23 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:07:26 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:00:44 +00:00",
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
      "Thu, 01 Jul 2021 18:08:05 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "603",
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
  .post("/api/users/updateEmail", {
    currentEmail: "caio.silveira@mailinator.com",
    currentUserId: "testuser123",
    newEmail: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:08:05 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "72",
    "Server",
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "lucas.nogueira@mailinator.com",
    dataFields: { userId: "testuser123" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:08:05 GMT",
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
    "iterable-ingress aaf8",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          signupDate: "2021-07-01 18:08:09 +00:00",
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:08:05 +00:00",
          userId: "testuser123",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:08:09 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:08:09 +00:00",
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
      "Thu, 01 Jul 2021 18:08:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "629",
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
  .get("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:08:45 GMT",
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
    "Thu, 01 Jul 2021 18:08:46 GMT",
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
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      user: {
        email: "lucas.nogueira@mailinator.com",
        dataFields: {
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          signupDate: "2021-07-01 18:08:09 +00:00",
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:08:05 +00:00",
          userId: "testuser123",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:08:09 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:08:09 +00:00",
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
      "Thu, 01 Jul 2021 18:08:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "629",
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
  .post("/api/users/updateEmail", {
    currentEmail: "lucas.nogueira@mailinator.com",
    currentUserId: "testuser123",
    newEmail: "sandro.arturo@mailinator.com",
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:08:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "48",
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
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:08:46 GMT",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          signupDate: "2021-07-01 18:08:09 +00:00",
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:08:46 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:08:50 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:08:50 +00:00",
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
      "Thu, 01 Jul 2021 18:09:26 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "691",
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
  .get("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:09:26 GMT",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          signupDate: "2021-07-01 18:08:09 +00:00",
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:08:46 +00:00",
          userId: "testuser123",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:08:50 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:08:50 +00:00",
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
      "Thu, 01 Jul 2021 18:09:27 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "691",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "3",
      "Server",
      "iterable-ingress aaa7",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "sandro.arturo@mailinator.com",
    dataFields: { userId: "testuser345" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:09:27 GMT",
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
  .reply(
    200,
    {
      user: {
        email: "sandro.arturo@mailinator.com",
        dataFields: {
          name: "Lucas",
          phoneNumber: "+5583999999997",
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          signupDate: "2021-07-01 18:08:09 +00:00",
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:09:27 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:09:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:08:50 +00:00",
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
      "Thu, 01 Jul 2021 18:10:07 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "691",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "36",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          signupDate: "2021-07-01 18:08:09 +00:00",
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:09:27 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:09:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:08:50 +00:00",
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
      "Thu, 01 Jul 2021 18:10:07 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "691",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          signupDate: "2021-07-01 18:08:09 +00:00",
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:09:27 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:09:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:08:50 +00:00",
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
      "Thu, 01 Jul 2021 18:10:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "691",
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
          subscribedMessageTypeIds: [],
          emailListIds: [1068682, 1068683, 1068687],
          signupDate: "2021-07-01 18:08:09 +00:00",
          defaultAddress: {
            city: "Campina Grande",
            flat: { number: 405, floor: 4 },
            country: "BR",
          },
          profileUpdatedAt: "2021-07-01 18:09:27 +00:00",
          userId: "testuser345",
          itblInternal: {
            regionCode: "BR",
            documentUpdatedAt: "2021-07-01 18:09:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:08:50 +00:00",
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
      "Thu, 01 Jul 2021 18:10:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "691",
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
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:10:08 GMT",
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
    "iterable-ingress aaf8",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:10:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "2",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "57",
    "Server",
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:10:48 GMT",
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
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:10:49 GMT",
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
    "Thu, 01 Jul 2021 18:11:29 GMT",
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
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:11:29 GMT",
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
  .get("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:11:30 GMT",
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
    "iterable-ingress 8e97",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "carlos.solimoes@mailinator.com",
    dataFields: { userId: "testuser456", name: "Carlos" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:11:30 GMT",
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
          id: 1068689,
          name: "List Four",
          createdAt: 1625162843262,
          listType: "Standard",
        },
        {
          id: 1068687,
          name: "List Three",
          createdAt: 1625162801754,
          listType: "Standard",
        },
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:11:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1588",
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
    listId: 1068689,
    subscribers: [{ email: "carlos.solimoes@mailinator.com" }],
  })
  .once()
  .reply(
    200,
    { successCount: 1, failCount: 0, invalidEmails: [], invalidUserIds: [] },
    [
      "Date",
      "Thu, 01 Jul 2021 18:11:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "71",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "17",
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
          emailListIds: [1068689],
          signupDate: "2021-07-01 18:11:33 +00:00",
          profileUpdatedAt: "2021-07-01 18:11:30 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:11:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:11:33 +00:00",
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
      "Thu, 01 Jul 2021 18:12:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
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
  .get("/api/lists")
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: 1068689,
          name: "List Four",
          createdAt: 1625162843262,
          listType: "Standard",
        },
        {
          id: 1068687,
          name: "List Three",
          createdAt: 1625162801754,
          listType: "Standard",
        },
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:12:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1588",
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
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:12:11 GMT",
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
    "iterable-ingress aaa7",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .get("/api/users/pilo.paz@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:12:11 GMT",
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
  .get("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:12:11 GMT",
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
  .get("/api/users/pilo.paz@mailinator.com")
  .once()
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:12:11 GMT",
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
  .post("/api/users/update", {
    email: "jake.jill@mailinator.com",
    dataFields: { userId: "jake.jill", name: "Jake" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:12:11 GMT",
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
    "iterable-ingress aaa7",
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
          signupDate: "2021-07-01 18:12:14 +00:00",
          profileUpdatedAt: "2021-07-01 18:12:11 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:12:14 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:12:14 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:12:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "408",
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
  .reply(
    200,
    {
      user: {
        email: "jake.jill@mailinator.com",
        dataFields: {
          name: "Jake",
          email: "jake.jill@mailinator.com",
          signupDate: "2021-07-01 18:12:14 +00:00",
          profileUpdatedAt: "2021-07-01 18:12:11 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:12:14 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:12:14 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:12:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "408",
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
          emailListIds: [1068689],
          signupDate: "2021-07-01 18:11:33 +00:00",
          profileUpdatedAt: "2021-07-01 18:11:30 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:11:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:11:33 +00:00",
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
      "Thu, 01 Jul 2021 18:12:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "2",
      "Server",
      "iterable-ingress b886",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .post("/api/users/update", {
    email: "jake.jill@mailinator.com",
    dataFields: { userId: "jake.jill", name: "Lucas" },
    mergeNestedObjects: true,
  })
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:12:52 GMT",
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
          emailListIds: [1068689],
          signupDate: "2021-07-01 18:11:33 +00:00",
          profileUpdatedAt: "2021-07-01 18:11:30 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:11:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:11:33 +00:00",
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
      "Thu, 01 Jul 2021 18:13:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
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
          signupDate: "2021-07-01 18:12:14 +00:00",
          profileUpdatedAt: "2021-07-01 18:12:52 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:12:56 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:12:14 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:13:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "409",
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
          signupDate: "2021-07-01 18:12:14 +00:00",
          profileUpdatedAt: "2021-07-01 18:12:52 +00:00",
          signupSource: "API",
          userId: "jake.jill",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:12:56 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:12:14 +00:00",
          },
        },
        userId: "jake.jill",
      },
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:13:33 GMT",
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
          emailListIds: [1068689],
          signupDate: "2021-07-01 18:11:33 +00:00",
          profileUpdatedAt: "2021-07-01 18:11:30 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:11:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:11:33 +00:00",
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
      "Thu, 01 Jul 2021 18:13:33 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
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
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:13:33 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "114",
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
          emailListIds: [1068689],
          signupDate: "2021-07-01 18:11:33 +00:00",
          profileUpdatedAt: "2021-07-01 18:11:30 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:11:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:11:33 +00:00",
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
      "Thu, 01 Jul 2021 18:14:13 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
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
  .reply(200, {}, [
    "Date",
    "Thu, 01 Jul 2021 18:14:13 GMT",
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
          emailListIds: [1068689],
          signupDate: "2021-07-01 18:11:33 +00:00",
          profileUpdatedAt: "2021-07-01 18:11:30 +00:00",
          userId: "testuser456",
          itblInternal: {
            documentUpdatedAt: "2021-07-01 18:11:33 +00:00",
            emailDomain: "mailinator.com",
            documentCreatedAt: "2021-07-01 18:11:33 +00:00",
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
      "Thu, 01 Jul 2021 18:14:14 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "541",
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
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:14:14 GMT",
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
    "Thu, 01 Jul 2021 18:14:54 GMT",
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
      "Thu, 01 Jul 2021 18:14:55 GMT",
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
    "Thu, 01 Jul 2021 18:14:55 GMT",
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
  .post("/api/users/update", {
    email: "carlos.solimoes@mailinator.com",
    dataFields: { signupDate: "GGG" },
    mergeNestedObjects: true,
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
      "Thu, 01 Jul 2021 18:14:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "447",
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
  .delete("/api/users/caio.silveira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:14:55 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "41",
    "Connection",
    "keep-alive",
    "Vary",
    "Origin",
    "Request-Time",
    "82",
    "Server",
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/lucas.nogueira@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:14:55 GMT",
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
  .delete("/api/users/sandro.arturo@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:14:56 GMT",
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
    "iterable-ingress b886",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/carlos.solimoes@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:14:56 GMT",
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
    "iterable-ingress 6d38",
  ]);
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/users/jake.jill@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:14:56 GMT",
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
  .delete("/api/users/sebastian@mailinator.com")
  .once()
  .reply(200, { msg: "", code: "Success", params: null }, [
    "Date",
    "Thu, 01 Jul 2021 18:14:56 GMT",
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
          id: 1068689,
          name: "List Four",
          createdAt: 1625162843262,
          listType: "Standard",
        },
        {
          id: 1068687,
          name: "List Three",
          createdAt: 1625162801754,
          listType: "Standard",
        },
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1068682,
          name: "List One",
          createdAt: 1625162718344,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:14:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1588",
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
  .delete("/api/lists/1068682")
  .once()
  .reply(
    200,
    {
      msg: "List 1068682 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:14:57 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "96",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1198",
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
          id: 1068689,
          name: "List Four",
          createdAt: 1625162843262,
          listType: "Standard",
        },
        {
          id: 1068687,
          name: "List Three",
          createdAt: 1625162801754,
          listType: "Standard",
        },
        {
          id: 1068683,
          name: "List Two",
          createdAt: 1625162718804,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:14:58 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1507",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "61",
      "Server",
      "iterable-ingress 8e97",
    ]
  );
nock("https://api.iterable.com:443", { encodedQueryParams: true })
  .delete("/api/lists/1068683")
  .once()
  .reply(
    200,
    {
      msg: "List 1068683 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:14:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "96",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1248",
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
          id: 1068689,
          name: "List Four",
          createdAt: 1625162843262,
          listType: "Standard",
        },
        {
          id: 1068687,
          name: "List Three",
          createdAt: 1625162801754,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:14:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1426",
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
  .delete("/api/lists/1068687")
  .once()
  .reply(
    200,
    {
      msg: "List 1068687 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:15:00 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "96",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "973",
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
          id: 1068689,
          name: "List Four",
          createdAt: 1625162843262,
          listType: "Standard",
        },
        {
          id: 1056557,
          name: "5 people",
          createdAt: 1624575876355,
          listType: "Standard",
        },
        {
          id: 982908,
          name: "Even Higher Value",
          createdAt: 1620166177114,
          listType: "Standard",
        },
        {
          id: 982904,
          name: "High Value",
          createdAt: 1620166058724,
          listType: "Standard",
        },
        {
          id: 982903,
          name: "All Emails",
          createdAt: 1620166058474,
          listType: "Standard",
        },
        {
          id: 982885,
          name: "maybe all users?",
          createdAt: 1620165503370,
          listType: "Dynamic",
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
      ],
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:15:00 GMT",
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
  .delete("/api/lists/1068689")
  .once()
  .reply(
    200,
    {
      msg: "List 1068689 in Project 10216 was successfully deleted.",
      code: "Success",
      params: null,
    },
    [
      "Date",
      "Thu, 01 Jul 2021 18:15:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "96",
      "Connection",
      "keep-alive",
      "Vary",
      "Origin",
      "Request-Time",
      "1166",
      "Server",
      "iterable-ingress b48a",
    ]
  );
