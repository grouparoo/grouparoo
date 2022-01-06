const nock = require("nock");

nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user101",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:09 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user102",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:10 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user103",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:11 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user104",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:12 GMT",
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
    "Thu, 06 Jan 2022 16:37:13 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user101",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:14 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user101",
    data: { first_name: "John", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Request already received." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:15 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "52",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user101",
    data: { first_name: "Johnny", last_name: "Doe", phone: "9876543210" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:15 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user101",
    data: { first_name: "Johnny", last_name: "Doe", phone: null },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:16 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user101",
    data: { first_name: "Johnny", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:17 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/tags/edit", {
    id: "user101",
    add: ["TEST High Value", "TEST Spanish Speaking"],
    remove: [],
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user101",
    data: { first_name: "Johnny", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Request already received." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:19 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "52",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/tags/edit", {
    id: "user101",
    add: ["TEST High Value"],
    remove: ["TEST Spanish Speaking"],
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:20 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/reidentify", {
    id: "user101",
    new_id: "user102",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:21 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user102",
    data: { first_name: "Johnny", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/tags/edit", {
    id: "user102",
    add: ["TEST High Value"],
    remove: [],
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user102",
    data: { first_name: "Johnny", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Request already received." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:23 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "52",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/tags/edit", {
    id: "user102",
    add: ["TEST High Value"],
    remove: ["TEST Recently Added"],
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:24 GMT",
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
    new_id: "user103",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:24 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user103",
    data: { first_name: "Bobby" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:25 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/reidentify", {
    id: "user103",
    new_id: "user102",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:26 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user102",
    data: { first_name: "Bobby", last_name: "Jones" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:26 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user102",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:27 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user103",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:28 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user104",
    data: { first_name: "Jill" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Request already received." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:29 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "52",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .put("/api/v2/users/tags/edit", {
    id: "user104",
    add: ["TEST Recently Added"],
    remove: [],
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:30 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/track", {
    id: "user101",
    data: { first_name: "John", last_name: "Doe" },
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Request already received." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:31 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "52",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user104",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:31 GMT",
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
    "Thu, 06 Jan 2022 16:37:32 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user101",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:33 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user102",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:34 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user103",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:34 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
nock("https://api.getvero.com:443", { encodedQueryParams: true })
  .post("/api/v2/users/delete", {
    id: "user104",
    auth_token:
      "jEYTM2MwAEMEjjDjJ2Y4GzmMMMWQc2k305TUFwGMZNZZRG4MFMMkY4FjWQ1WJDY3ixEZDmYh4yidyRNkzokZDMNMMYDNZZZY22YhDZhTj5Oh",
  })
  .once()
  .reply(200, { status: 200, message: "Success." }, [
    "Date",
    "Thu, 06 Jan 2022 16:37:35 GMT",
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
    "Thu, 06 Jan 2022 16:37:36 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "35",
    "Connection",
    "close",
  ]);
