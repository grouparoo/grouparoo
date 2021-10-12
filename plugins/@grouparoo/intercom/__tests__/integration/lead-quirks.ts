import { helper } from "@grouparoo/spec-helper";

import { getRandomNumbers, loadAppOptions, updater } from "../utils/nockHelper";
import { setup } from "../utils/shared";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

let userId = null;
let userId2 = null;
let userId3 = null;
let userId4 = null;
let userId5 = null;
let userId6 = null;

const rand = getRandomNumbers(5); // has to be after requiring nock

const email = `testuser1.${rand[1]}@demo.com`;

const externalId2 = `testuser2.${rand[2]}`;
const email2 = `testuser2.${rand[2]}@demo.com`;

const externalId3 = `testuser3.${rand[3]}`;
const email3 = `testuser3.${rand[3]}@demo.com`;

const email4 = `testuser4.${rand[4]}@demo.com`;

const externalId5 = `testuser3.${rand[5]}`;
const email5 = `testuser3.${rand[5]}@demo.com`;

const email6 = `testuser4.${rand[6]}@demo.com`;

describe("intercom has weird things with leads - verify the behavior", () => {
  const { getUser, idRegex, getClient } = setup(appOptions, {}, newNock);

  test("can create lead with email", async () => {
    const { body } = await getClient().contacts.create({
      role: "lead",
      email: email,
    });
    userId = body.id;
    expect(userId).toBeTruthy();

    const user = await getUser(userId);
    expect(user.email).toBe(email);
    expect(user.external_id).toMatch(idRegex);
    expect(user.role).toBe("lead");
  });

  test("can create lead with external_id but it won't listen", async () => {
    const { body } = await getClient().contacts.create({
      role: "lead",
      email: email2,
      external_id: externalId2,
    });
    userId2 = body.id;
    expect(userId2).toBeTruthy();

    const user = await getUser(userId2);
    expect(user.external_id).not.toBe(externalId2);
    expect(user.external_id).toMatch(idRegex);
    expect(user.email).toBe(email2);
    expect(user.role).toBe("lead");
  });

  test("can change an external_id while switching role to user", async () => {
    await getClient().contacts.update(userId2, {
      role: "user",
      email: email2,
      external_id: externalId2,
    });

    const user = await getUser(userId2);
    expect(user.external_id).toBe(externalId2);
    expect(user.email).toBe(email2);
    expect(user.role).toBe("user");
  });

  test("it can't go back to being a lead", async () => {
    let error = null;
    try {
      await getClient().contacts.update(userId2, {
        role: "lead",
        email: email2,
        external_id: externalId2,
      });
    } catch (err) {
      error = err;
    }

    expect(error).toBeTruthy();
    expect(error.message).toMatch(/user role can't be converted to a lead/);

    // same
    const user = await getUser(userId2);
    expect(user.external_id).toBe(externalId2);
    expect(user.email).toBe(email2);
    expect(user.role).toBe("user");
  });

  test("you can't make a contact the same as an archived user", async () => {
    const client = getClient();
    const { body: createResponse } = await client.contacts.create({
      role: "user",
      email: email3,
      external_id: externalId3,
    });
    userId3 = createResponse.id;

    let user = await getUser(userId3);
    expect(user.external_id).toBe(externalId3);
    expect(user.email).toBe(email3);
    expect(user.role).toBe("user");

    const { body: archiveResponse } = await client.contacts.archive(userId3);
    expect(archiveResponse.archived).toEqual(true);

    await expect(getUser(userId3)).rejects.toThrow(/User Not Found/);

    let error = null;
    try {
      await client.contacts.create({
        role: "user",
        email: email3,
        external_id: externalId3,
      });
    } catch (err) {
      error = err;
    }

    expect(error).toBeTruthy();
    expect(error.message).toMatch(
      /archived contact matching those details already exists/
    );

    const { body: unarchiveResponse } = await client.contacts.unarchive(
      userId3
    );

    expect(unarchiveResponse.id).toEqual(userId3);

    user = await getUser(userId3);
    expect(user.external_id).toBe(externalId3);
    expect(user.email).toBe(email3);
    expect(user.role).toBe("user");
  });

  test("you can make a contact the same as an archived lead bc of different external_id", async () => {
    const client = getClient();
    const { body: createReponse } = await client.contacts.create({
      role: "lead",
      email: email4,
    });
    userId4 = createReponse.id;

    let user = await getUser(userId4);
    expect(user.email).toBe(email4);
    expect(user.role).toBe("lead");

    const { body: archiveResponse } = await client.contacts.archive(userId4);
    expect(archiveResponse.archived).toEqual(true);

    await expect(getUser(userId4)).rejects.toThrow(/User Not Found/);

    const { body: leadResponse } = await client.contacts.create({
      role: "lead",
      email: email4,
    });

    const test = leadResponse.id;
    expect(test).not.toEqual(userId4);

    user = await getUser(test);
    expect(user.email).toBe(email4);
    expect(user.role).toBe("lead");

    const { body: unarchiveResponse } = await client.contacts.unarchive(
      userId4
    );

    expect(unarchiveResponse.id).toEqual(userId4);

    user = await getUser(userId4);
    expect(user.email).toBe(email4);
    expect(user.role).toBe("lead");
  });

  test("you can't make a contact the same as an permanently deleted user", async () => {
    const client = getClient();
    const { body: createResponse } = await client.contacts.create({
      role: "user",
      email: email5,
      external_id: externalId5,
    });
    userId5 = createResponse.id;

    let user = await getUser(userId5);
    expect(user.external_id).toBe(externalId5);
    expect(user.email).toBe(email5);
    expect(user.role).toBe("user");

    const { body: archiveResponse } = await client.contacts.delete(userId5);
    expect(archiveResponse.deleted).toEqual(true);

    await expect(getUser(userId5)).rejects.toThrow(/User Not Found/);

    let error = null;
    try {
      await client.contacts.create({
        role: "user",
        email: email5,
        external_id: externalId5,
      });
    } catch (err) {
      error = err;
    }

    expect(error).toBeTruthy();
    expect(error.message).toMatch(
      /archived contact matching those details already exists/
    );

    try {
      await client.contacts.unarchive(userId5);
    } catch (err) {
      error = err;
    }

    expect(error).toBeTruthy();
    expect(error.message).toMatch(/Server Error/);

    await expect(getUser(userId5)).rejects.toThrow(/User Not Found/);
  });

  test("you can make a contact the same as an deleted lead bc of different external_id", async () => {
    const client = getClient();
    const { body: createReponse } = await client.contacts.create({
      role: "lead",
      email: email6,
    });
    userId6 = createReponse.id;

    let user = await getUser(userId6);
    expect(user.email).toBe(email6);
    expect(user.role).toBe("lead");

    const { body: archiveResponse } = await client.contacts.delete(userId6);
    expect(archiveResponse.deleted).toEqual(true);

    await expect(getUser(userId6)).rejects.toThrow(/User Not Found/);

    const { body: leadResponse } = await client.contacts.create({
      role: "lead",
      email: email6,
    });

    const test = leadResponse.id;
    expect(test).not.toEqual(userId6);

    user = await getUser(test);
    expect(user.email).toBe(email6);
    expect(user.role).toBe("lead");

    let error = null;
    try {
      await client.contacts.unarchive(userId6);
    } catch (err) {
      error = err;
    }

    expect(error).toBeTruthy();
    expect(error.message).toMatch(/Server Error/);

    await expect(getUser(userId6)).rejects.toThrow(/User Not Found/);
  });
});
