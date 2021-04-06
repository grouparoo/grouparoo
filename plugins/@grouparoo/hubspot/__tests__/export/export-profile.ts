import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { HubspotClient } from "../../src/lib/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const appId = "app_ds789a789gdf789jh.m678rt90-90-3k";

let apiClient: HubspotClient;
let user: any;
const phoneNumber = "+5583999999999";
const newPhoneNumber = "+5583999999998";
const otherPhoneNumber = "+5583999999997";
const email = "caio.silveira@mailinator.com";
const alternativeEmail = "lucas.nogueira@mailinator.com";
const otherEmail = "sandro.arturo@mailinator.com";
const firstName = "Caio";
const lastName = "Silveira";
const alternativeName = "Evan";
const alternativeLastName = "Podolsky";
const otherName = "Lucas";
const newEmail = "carlos.solimoes@mailinator.com";
const newName = "Carlos";
const listOne = "List One";
const listTwo = "List Two";
const listThree = "List Three";
const listFour = "List Four";
const dateField = new Date("2021-02-11T23:03:03Z");

const ltv = 3039;

const brandNewEmail = "jake.jill@mailinator.com";
const brandNewName = "Jake";
const nonexistentEmail = "pilo.paz@mailinator.com";
const message =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor\n" +
  "in, accumsan non quam.";

const invalidEmail = "000";
const invalidDate = "asd000";

const textField = "text_field";
const numberField = 30.39;

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function getListId(listName): Promise<any> {
  const allLists = await apiClient.getLists();
  const matchingList = allLists.filter((list) => list.name === listName)[0];
  if (matchingList) {
    return matchingList["listId"];
  }
  return null;
}

async function deleteUsers(suppressErrors) {
  try {
    for (const emailToDelete of [
      email,
      alternativeEmail,
      otherEmail,
      newEmail,
      brandNewEmail,
    ]) {
      const user = await apiClient.getContactByEmail(emailToDelete);
      if (user) {
        await apiClient.deleteContact(user.vid);
      }
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function deleteLists(suppressErrors) {
  try {
    for (const groupToDelete of [listOne, listTwo, listThree, listFour]) {
      const listId = await getListId(groupToDelete);
      if (listId) {
        await apiClient.deleteList(listId);
      }
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function cleanUp(suppressErrors) {
  await deleteUsers(suppressErrors);
  await deleteLists(suppressErrors);
}

async function runExport({
  syncOperations = DestinationSyncModeData.sync.operations,
  oldProfileProperties,
  newProfileProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportProfile({
    appOptions,
    appId,
    connection: null,
    app: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
    syncOperations,
    export: {
      profile: null,
      profileId: null,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      toDelete,
    },
  });
}

describe("hubspot/exportProfile", () => {
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("cannot create profile on Hubspot if sync mode does not allow it", async () => {
    user = await apiClient.getContactByEmail(email);
    expect(user).toBe(null);

    await expect(
      runExport({
        syncOperations: { create: false, update: true, delete: true },
        oldProfileProperties: {},
        newProfileProperties: { email, firstname: firstName },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow creating/);
  });

  test("can create profile on Hubspot", async () => {
    user = await apiClient.getContactByEmail(email);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { email, firstname: firstName },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    user = await apiClient.getContactByEmail(email);
    expect(user).not.toBe(null);
    expect(user["properties"]["email"]["value"]).toBe(email);
    expect(user["properties"]["firstname"]["value"]).toBe(firstName);
  });

  test("can add user variables", async () => {
    await runExport({
      oldProfileProperties: { email, firstname: firstName },
      newProfileProperties: {
        email,
        firstname: firstName,
        lastname: lastName,
        mobilephone: phoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    expect(user["properties"]["email"]["value"]).toBe(email);
    expect(user["properties"]["firstname"]["value"]).toBe(firstName);
    expect(user["properties"]["lastname"]["value"]).toBe(lastName);
    expect(user["properties"]["mobilephone"]["value"]).toBe(phoneNumber);
  });

  test("cannot update existing profile if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: false, delete: true },
        oldProfileProperties: {
          email,
          firstname: firstName,
          lastname: lastName,
          mobilephone: phoneNumber,
        },
        newProfileProperties: {
          email,
          firstname: alternativeName,
          lastname: alternativeLastName,
          mobilephone: newPhoneNumber,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow updating/);

    // no change
    const user = await apiClient.getContactByEmail(email);
    expect(user["properties"]["email"]["value"]).toBe(email);
    expect(user["properties"]["firstname"]["value"]).toBe(firstName);
    expect(user["properties"]["lastname"]["value"]).toBe(lastName);
    expect(user["properties"]["mobilephone"]["value"]).toBe(phoneNumber);
  });

  test("can change user variables", async () => {
    // Phone must be valid.
    await runExport({
      oldProfileProperties: {
        email,
        firstname: firstName,
        lastname: lastName,
        mobilephone: phoneNumber,
      },
      newProfileProperties: {
        email,
        firstname: alternativeName,
        lastname: alternativeLastName,
        mobilephone: newPhoneNumber,
        message,
        lifetime_value__custom_: ltv,
        closedate: dateField,
        text_field: textField,
        date_field: dateField, //must be midnight: 00:00
        number_field: numberField,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    expect(user["properties"]["email"]["value"]).toBe(email);
    expect(user["properties"]["firstname"]["value"]).toBe(alternativeName);
    expect(user["properties"]["lastname"]["value"]).toBe(alternativeLastName);
    expect(user["properties"]["mobilephone"]["value"]).toBe(newPhoneNumber);
    expect(user["properties"]["message"]["value"]).toBe(message);
    expect(user["properties"]["closedate"]["value"]).toBe(
      dateField.getTime().toString()
    );
    expect(user["properties"]["lifetime_value__custom_"]["value"]).toBe(
      ltv.toString()
    );
    expect(user["properties"]["text_field"]["value"]).toBe(textField);
    expect(user["properties"]["date_field"]["value"]).toBe(
      dateField.getTime().toString()
    );
    expect(user["properties"]["number_field"]["value"]).toBe(
      numberField.toString()
    );
  });

  test("can try change user variables with invalid date type", async () => {
    await expect(
      runExport({
        oldProfileProperties: {
          email,
          closedate: dateField,
        },
        newProfileProperties: {
          email,
          closedate: invalidDate,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Request failed/);
  });

  test("can clear user variables", async () => {
    await runExport({
      oldProfileProperties: {
        email,
        firstname: alternativeName,
        lastname: alternativeLastName,
        mobilephone: phoneNumber,
        text_field: textField,
        date_field: dateField,
        number_field: numberField,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    expect(user["properties"]["email"]["value"]).toBe(email);
    expect(user["properties"]["firstname"]["value"]).toBe("");
    expect(user["properties"]["lastname"]["value"]).toBe("");
    expect(user["properties"]["text_field"]["value"]).toBe("");
    expect(user["properties"]["date_field"]["value"]).toBe("");
    expect(user["properties"]["number_field"]["value"]).toBe("");
  });

  test("can add user to a list that doesn't exist yet", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [listOne, listTwo],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);

    const listOneId = await getListId(listOne);
    const listTwoId = await getListId(listTwo);

    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);
    expect(user["list-memberships"].length).toBe(2);
    expect(user["list-memberships"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ "internal-list-id": listOneId }),
        expect.objectContaining({ "internal-list-id": listTwoId }),
      ])
    );
  });

  test("can remove a user from a list", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [listOne, listTwo],
      newGroups: [listOne],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    const listOneId = await getListId(listOne);
    expect(user["list-memberships"].length).toBe(1);
    expect(user["list-memberships"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ "internal-list-id": listOneId }),
      ])
    );
  });

  test("it does not change already subscribed lists", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [listTwo, listThree],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);

    const listOneId = await getListId(listOne);
    const listTwoId = await getListId(listTwo);
    const listThreeId = await getListId(listThree);

    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);
    expect(listThreeId).not.toBe(null);

    expect(user["list-memberships"].length).toBe(3);
    expect(user["list-memberships"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ "internal-list-id": listOneId }),
        expect.objectContaining({ "internal-list-id": listTwoId }),
        expect.objectContaining({ "internal-list-id": listThreeId }),
      ])
    );
  });

  test("it tries to unsubscribe non subscribed list", async () => {
    await runExport({
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [listFour],
      newGroups: [],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    const listFourId = await getListId(listFour);
    expect(listFourId).not.toBe(null);
    expect(user["list-memberships"]).toEqual(
      expect.arrayContaining([
        expect.not.objectContaining({ "internal-list-id": listFourId }),
      ])
    );
  });

  test("it cannot change the email address if sync mode is only updating", async () => {
    // hubspot requires creating new user on FK change
    await expect(
      runExport({
        syncOperations: { create: false, update: true, delete: false },
        oldProfileProperties: {
          email,
        },
        newProfileProperties: {
          email: alternativeEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow creating/);

    const oldUser = await apiClient.getContactByEmail(email);
    expect(oldUser).not.toBe(null);
    expect(oldUser["properties"]["email"]["value"]).toBe(email);

    const newUser = await apiClient.getContactByEmail(alternativeEmail);
    expect(newUser).toBe(null);
  });

  test("it can change the email address", async () => {
    await runExport({
      oldProfileProperties: {
        email: alternativeEmail,
      },
      newProfileProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const user = await apiClient.getContactByEmail(alternativeEmail);
    expect(user).toBe(null);

    const newUser = await apiClient.getContactByEmail(email);
    expect(newUser).not.toBe(null);
    expect(newUser["properties"]["email"]["value"]).toBe(email);
  });

  test("it can change the email address and orphan the old user if sync mode is not deleting", async () => {
    // hubspot requires deleting the old user on FK change
    await runExport({
      syncOperations: { create: true, update: true, delete: false },
      oldProfileProperties: {
        email,
      },
      newProfileProperties: {
        email: alternativeEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const oldUser = await apiClient.getContactByEmail(email);
    expect(oldUser).not.toBe(null);
    expect(oldUser["properties"]["email"]["value"]).toBe(email);

    const newUser = await apiClient.getContactByEmail(alternativeEmail);
    expect(newUser).not.toBe(null);
    expect(newUser["properties"]["email"]["value"]).toBe(alternativeEmail);
  });

  test("it can change the email address along other properties", async () => {
    await runExport({
      oldProfileProperties: {
        email: alternativeEmail,
        firstname: alternativeName,
        mobilephone: newPhoneNumber,
      },
      newProfileProperties: {
        email: otherEmail,
        firstname: otherName,
        mobilephone: otherPhoneNumber,
      },
      oldGroups: [],
      newGroups: [listOne],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(otherEmail);
    expect(user["properties"]["email"]["value"]).toBe(otherEmail);
    expect(user["properties"]["firstname"]["value"]).toBe(otherName);
    expect(user["properties"]["mobilephone"]["value"]).toBe(otherPhoneNumber);

    const listOneId = await getListId(listOne);

    expect(listOneId).not.toBe(null);
    expect(user["list-memberships"].length).toBe(1);
    expect(user["list-memberships"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ "internal-list-id": listOneId }),
      ])
    );

    const oldUser = await apiClient.getContactByEmail(alternativeEmail);
    expect(oldUser).toBe(null);
  });

  test("can not delete a user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: false, delete: false },
        oldProfileProperties: {
          email: otherEmail,
        },
        newProfileProperties: {
          email: otherEmail,
        },
        oldGroups: [listOne],
        newGroups: [listOne],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not allow removing/);

    // no changes to the user and properties
    const user = await apiClient.getContactByEmail(otherEmail);
    expect(user["properties"]["email"]["value"]).toBe(otherEmail);
    expect(user["properties"]["firstname"]["value"]).toBe(otherName);
    expect(user["properties"]["mobilephone"]["value"]).toBe(otherPhoneNumber);

    // groups can't be removed because syncOperations.update: false
    expect(user["list-memberships"]).toHaveLength(1);
  });

  test("can not delete a user if sync mode does not allow it, but will remove them from groups", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: true, delete: false },
        oldProfileProperties: {
          email: otherEmail,
        },
        newProfileProperties: {
          email: otherEmail,
        },
        oldGroups: [listOne],
        newGroups: [listOne],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not allow removing/);

    // no changes to the user and properties
    const user = await apiClient.getContactByEmail(otherEmail);
    expect(user["properties"]["email"]["value"]).toBe(otherEmail);
    expect(user["properties"]["firstname"]["value"]).toBe(otherName);
    expect(user["properties"]["mobilephone"]["value"]).toBe(otherPhoneNumber);

    // but it should be removed from groups
    expect(user["list-memberships"]).toHaveLength(0);
  });

  test("can delete a user", async () => {
    await runExport({
      oldProfileProperties: {
        email: otherEmail,
      },
      newProfileProperties: {
        email: otherEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    const user = await apiClient.getContactByEmail(otherEmail);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    let user = await apiClient.getContactByEmail(otherEmail);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {
        email: otherEmail,
      },
      newProfileProperties: {
        email: otherEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    user = await apiClient.getContactByEmail(otherEmail);
    expect(user).toBe(null);
  });

  test("can add a user and add this user to a list at the same time.", async () => {
    let user = await apiClient.getContactByEmail(newEmail);
    expect(user).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: {
        email: newEmail,
        firstname: newName,
      },
      oldGroups: [],
      newGroups: [listFour],
      toDelete: false,
    });
    user = await apiClient.getContactByEmail(newEmail);
    expect(user["properties"]["email"]["value"]).toBe(newEmail);
    expect(user["properties"]["firstname"]["value"]).toBe(newName);

    const listFourId = await getListId(listFour);
    expect(listFourId).not.toBe(null);
    expect(user["list-memberships"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ "internal-list-id": listFourId }),
      ])
    );
  });

  test("can add a user passing a nonexistent email on the oldProfileProperties", async () => {
    let brandNewUser = await apiClient.getContactByEmail(brandNewEmail);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await apiClient.getContactByEmail(nonexistentEmail);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldProfileProperties: { email: nonexistentEmail },
      newProfileProperties: {
        email: brandNewEmail,
        firstname: brandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    brandNewUser = await apiClient.getContactByEmail(brandNewEmail);
    expect(brandNewUser).not.toBe(null);
    expect(brandNewUser["properties"]["email"]["value"]).toBe(brandNewEmail);
    expect(brandNewUser["properties"]["firstname"]["value"]).toBe(brandNewName);
  });

  test("can add a user passing a invalid email", async () => {
    await expect(
      runExport({
        oldProfileProperties: {},
        newProfileProperties: {
          email: invalidEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Request failed/);
  });
});
