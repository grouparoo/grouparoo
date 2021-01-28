import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexContacts } from "../utils/shared";

const appGuid = "app_7815696ecbf1c96e6894b779456d330e";

let apiClient: any;
let user: any;
const phoneNumber = "+5583999999999";
const userId = "testuser123";
const alternativeUserId = "testuser345";
const email = "caio.silveira@mailinator.com";
const alternativeEmail = "lucas.nogueira@mailinator.com";
const name = "Caio";
const exampleDate = new Date(1597870204 * 1000);

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function getUser(userEmail): Promise<any> {
  const userResponse = await apiClient.users.get({ email: userEmail });
  if ("user" in userResponse) {
    return userResponse.user;
  }
  return null;
}

async function getListId(listName): Promise<any> {
  const listsResponse = await apiClient.lists.get();
  const allLists = listsResponse.lists || [];
  const matchingList = allLists.filter((list) => list.name === listName)[0];
  if (matchingList) {
    return matchingList.id;
  }
  return null;
}

async function deleteUsers(suppressErrors) {
  try {
    for (const emailToDelete of [email, alternativeEmail]) {
      await apiClient.users.delete(emailToDelete);
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function deleteLists(suppressErrors) {
  try {
    for (const groupToDelete in ["List One", "List Two", "List Three"]) {
      const listId = await getListId(groupToDelete);
      if (listId) {
        await apiClient.users.delete(listId);
      }
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function runExport({
  oldProfileProperties,
  newProfileProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportProfile({
    appOptions,
    appGuid,
    connection: null,
    app: null,
    destination: null,
    destinationGuid: null,
    destinationOptions: null,
    export: {
      profile: null,
      profileGuid: null,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    },
  });
}

describe("iterable/exportProfile", () => {
  beforeAll(() => {
    jest.setTimeout(helper.longTime);
  });
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await deleteUsers(false);
    await deleteLists(false);
    await indexContacts(newNock);
  }, helper.setupTime);

  afterAll(async () => {
    await deleteUsers(true);
    await deleteLists(true);
    await indexContacts(newNock);
  }, helper.setupTime);

  test("can create profile on Iterable", async () => {
    user = await getUser(email);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email, name },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);
    user = await getUser(email);

    expect(user).not.toBe(null);
    expect(user.email).toBe(email);
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: { email, name },
      newProfileProperties: {
        email,
        name,
        userId,
        phoneNumber,
        signupDate: exampleDate,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);
    expect(user.userId).toBe(userId);
    expect(user.dataFields.name).toBe(name);
    expect(user.dataFields.phoneNumber).toBe(phoneNumber);
    expect(user.dataFields.signupDate).toBe("2020-08-19 20:50:04 +00:00");
  });

  test("can change user variables", async () => {
    const newName = "Evan";
    // Phone must be valid.
    const newPhoneNumber = "+5583999999998";

    await runExport({
      oldProfileProperties: {
        email,
        userId,
        name,
        phoneNumber,
        signupDate: exampleDate,
      },
      newProfileProperties: {
        email,
        userId,
        name: newName,
        phoneNumber: newPhoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);

    expect(user.userId).toBe(userId);
    expect(user.dataFields.name).toBe(newName);
    expect(user.dataFields.phoneNumber).toBe(newPhoneNumber);
    expect(user.dataFields.signupDate).toBe(undefined);
    expect(user.dataFields.unknown_junk).toBeUndefined();
  });

  test("can clear user variables", async () => {
    const newPhoneNumber = "+5583999999998";
    await runExport({
      oldProfileProperties: {
        email,
        userId,
        name: "Evan",
        phoneNumber: newPhoneNumber,
        signupDate: exampleDate,
      },
      newProfileProperties: {
        email,
        userId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);
    expect(user.userId).toBe(userId);
    expect(user.dataFields.name).toBe(undefined);
    expect(user.dataFields.phoneNumber).toBe(undefined);
    expect(user.dataFields.signupDate).toBe(undefined);
  });

  test("can add user to a list that doesn't exist yet", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        userId,
      },
      newProfileProperties: {
        email,
        userId,
      },
      oldGroups: [],
      newGroups: ["List One", "List Two"],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);
    expect(user.dataFields.emailListIds.length).toBe(2);

    const listOneId = await getListId("List One");
    const listTwoId = await getListId("List Two");

    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);

    expect(user.dataFields.emailListIds).toContain(listOneId);
    expect(user.dataFields.emailListIds).toContain(listTwoId);
  });

  test("can remove a user from a list", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        userId,
      },
      newProfileProperties: {
        email,
        userId,
      },
      oldGroups: ["List One", "List Two"],
      newGroups: ["List One"],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);
    expect(user.dataFields.emailListIds.length).toBe(1);

    const listOneId = await getListId("List One");
    expect(listOneId).not.toBe(null);
    expect(user.dataFields.emailListIds).toContain(listOneId);
  });

  test("it does not change already subscribed lists", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        userId,
      },
      newProfileProperties: {
        email,
        userId,
      },
      oldGroups: [],
      newGroups: ["List Two", "List Three"],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);

    const listTwoId = await getListId("List Two");
    const listOneThree = await getListId("List Three");

    expect(listTwoId).not.toBe(null);
    expect(listOneThree).not.toBe(null);

    expect(user.dataFields.emailListIds).toContain(listTwoId);
    expect(user.dataFields.emailListIds).toContain(listOneThree);
  });

  test("it can change the email address", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        userId,
      },
      newProfileProperties: {
        email: alternativeEmail,
        userId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(alternativeEmail);
    expect(user.email).toBe(alternativeEmail);
  });

  test("it can change the user id", async () => {
    await runExport({
      oldProfileProperties: {
        email: alternativeEmail,
        userId,
      },
      newProfileProperties: {
        email: alternativeEmail,
        userId: alternativeUserId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(alternativeEmail);
    expect(user.userId).toBe(alternativeUserId);
  });

  test("can delete a user", async () => {
    await runExport({
      oldProfileProperties: {
        email: alternativeEmail,
        userId,
      },
      newProfileProperties: {
        email: alternativeEmail,
        userId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    await indexContacts(newNock);

    const user = await getUser(alternativeEmail);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    let user = await getUser(alternativeEmail);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {
        email: alternativeEmail,
        userId,
      },
      newProfileProperties: {
        email: alternativeEmail,
        userId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    await indexContacts(newNock);

    user = await getUser(alternativeEmail);
    expect(user).toBe(null);
  });
});
