const nock = require("nock");

nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-101",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:12:53 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-102",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:12:53 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-103",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:12:54 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-104",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:12:55 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-not-found",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:12:55 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-101",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:12:56 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-101",
    data: { first_name: "John", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:12:57 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-101",
    data: { first_name: "Johnny", last_name: "Doe", phone: "9876543210" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:12:58 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-101",
    data: { first_name: "Johnny", last_name: "Doe", phone: null },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:12:59 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-101",
    data: { first_name: "Johnny", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:00 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/tags/edit", {
    id: "user-101",
    add: ["In Group: TEST High Value", "In Group: TEST Spanish Speaking"],
    remove: [],
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:01 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-101",
    data: { first_name: "Johnny", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Request already received." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:01 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "52",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/tags/edit", {
    id: "user-101",
    add: ["In Group: TEST High Value"],
    remove: ["In Group: TEST Spanish Speaking"],
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:02 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/reidentify", {
    id: "user-101",
    new_id: "user-102",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:02 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-102",
    data: { first_name: "Johnny", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:03 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/tags/edit", {
    id: "user-102",
    add: ["In Group: TEST High Value"],
    remove: [],
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:04 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-102",
    data: { first_name: "Johnny", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Request already received." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:04 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "52",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/tags/edit", {
    id: "user-102",
    add: ["In Group: TEST High Value"],
    remove: ["In Group: TEST Recently Added"],
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:06 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/reidentify", {
    id: "user-not-found",
    new_id: "user-103",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:07 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-103",
    data: { first_name: "Bobby" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:07 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/reidentify", {
    id: "user-103",
    new_id: "user-102",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:08 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-102",
    data: { first_name: "Bobby", last_name: "Jones" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:09 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-102",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:10 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-103",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:10 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user-104",
    data: { first_name: "Jill" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:11 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/tags/edit", {
    id: "user-104",
    add: ["In Group: TEST Recently Added"],
    remove: [],
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:11 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-not-found",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:12 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-101",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:13 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-102",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:14 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-103",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:16 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-104",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:17 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user-not-found",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Wed, 05 Jan 2022 16:13:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
