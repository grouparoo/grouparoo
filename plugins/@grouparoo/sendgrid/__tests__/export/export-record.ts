import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportRecord } from "../../src/lib/export/exportRecord";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexContacts } from "../utils/shared";
import { SendgridClient } from "../../src/lib/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const appId = "app_78189023490-dfsjklfdsklj90-90-3k";

let apiClient: SendgridClient;
let user: any;
const phone_number = "+5583999999999";
const newPhoneNumber = "+5583999999998";
const otherPhoneNumber = "+5583999999997";
const email = "caio.silveira@mailinator.com";
const alternativeEmail = "lucas.nogueira@mailinator.com";
const otherEmail = "sandro.arturo@mailinator.com";
const first_name = "Caio";
const last_name = "Silveira";
const alternativeName = "Evan";
const otherName = "Lucas";
const newEmail = "carlos.solimoes@mailinator.com";
const newName = "Carlos";
const listOne = "List One";
const listTwo = "List Two";
const listThree = "List Three";
const listFour = "List Four";

const textField = "text";
const otherTextField = "text";
const numberField = 15.5;
const dateField = new Date("2021-02-11T23:03:03Z").toISOString();

const brandNewEmail = "jake.jill@mailinator.com";
const brandNewName = "Jake";
const nonexistentEmail = "pilo.paz@mailinator.com";

const invalidEmail = "000";
const invalidPhone = "000";
const invalidDate = "AAAAA";

let listIds = {};

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

async function getListId(listName): Promise<any> {
  if (listName in listIds) {
    return listIds[listName];
  }
  const allLists = await apiClient.getLists();
  const matchingList = allLists.filter((list) => list.name === listName)[0];
  if (matchingList) {
    listIds[listName] = matchingList.id;
    return matchingList.id;
  }
  return null;
}

async function deleteUsers(suppressErrors) {
  try {
    const usersIdsToDelete = [];
    for (const emailToDelete of [
      email,
      alternativeEmail,
      otherEmail,
      newEmail,
      brandNewEmail,
    ]) {
      const user = await apiClient.getUser(emailToDelete);
      if (user) {
        usersIdsToDelete.push(user["id"]);
      }
    }
    if (usersIdsToDelete.length > 0) {
      await apiClient.deleteUsers(usersIdsToDelete);
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
  await indexContacts(newNock, 30 * 1000);
}

async function runExport({
  syncOperations = DestinationSyncModeData.sync.operations,
  oldRecordProperties,
  newRecordProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportRecord({
    appOptions,
    appId,
    connection: null,
    app: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
    syncOperations,
    export: {
      record: null,
      recordId: null,
      oldRecordProperties,
      newRecordProperties,
      oldGroups,
      newGroups,
      toDelete,
    },
  });
}

describe("sendgrid/exportRecord", () => {
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("can not create a record if sync mode does not allow it", async () => {
    user = await apiClient.getUser(email);
    expect(user).toBe(null);
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.update.operations,
        oldRecordProperties: {},
        newRecordProperties: { email, first_name },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create/);
    user = await apiClient.getUser(email);
    expect(user).toBe(null); // not created.
  });

  test("can create record on Sendgrid", async () => {
    user = await apiClient.getUser(email);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { email, first_name },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    user = await apiClient.getUser(email);

    expect(user).not.toBe(null);
    expect(user["email"]).toBe(email);
    expect(user["first_name"]).toBe(first_name);
  });

  test("can add user variables", async () => {
    await runExport({
      oldRecordProperties: { email, first_name },
      newRecordProperties: {
        email,
        first_name,
        last_name,
        phone_number,
        //read only
        created_at: dateField,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await apiClient.getUser(email);
    expect(user.first_name).toBe(first_name);
    expect(user.last_name).toBe(last_name);
    expect(user.created_at).not.toBe("2021-02-11T23:03:03Z");
    expect(user.phone_number).toBe(phone_number);
  });

  test("can not update a record if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: true,
          delete: true,
        },
        oldRecordProperties: {
          email,
          first_name,
          phone_number,
        },
        newRecordProperties: {
          email,
          first_name: alternativeName,
          phone_number: newPhoneNumber,
          text_field: textField,
          number_field: numberField,
          date_field: dateField,
          created_at: dateField,
          other_text_field: otherTextField,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    // no changes
    const user = await apiClient.getUser(email);
    expect(user.first_name).toBe(first_name);
    expect(user.last_name).toBe(last_name);
    expect(user.created_at).not.toBe("2021-02-11T23:03:03Z");
    expect(user.phone_number).toBe(phone_number);
  });

  test("can change user variables", async () => {
    // Phone must be valid.
    await runExport({
      oldRecordProperties: {
        email,
        first_name,
        phone_number,
      },
      newRecordProperties: {
        email,
        first_name: alternativeName,
        phone_number: newPhoneNumber,
        text_field: textField,
        number_field: numberField,
        date_field: dateField,
        created_at: dateField,
        other_text_field: otherTextField,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);
    const user = await apiClient.getUser(email);

    expect(user.first_name).toBe(alternativeName);
    expect(user.phone_number).toBe(newPhoneNumber);
    expect(user.custom_fields.text_field).toBe(textField);
    expect(user.custom_fields.number_field).toBe(numberField);
    expect(user.custom_fields.date_field).toBe("2021-02-11T23:03:03Z");
    expect(user.created_at).not.toBe("2021-02-11T23:03:03Z");
    expect(user.custom_fields.other_text_field).toBeUndefined();
    expect(user.unknown_junk).toBeUndefined();
  });

  test("can try to change user variables using invalid data", async () => {
    // Phone must be valid.
    await runExport({
      oldRecordProperties: {
        email,
        first_name: alternativeName,
        phone_number: newPhoneNumber,
        text_field: textField,
        number_field: numberField,
        date_field: dateField,
      },
      newRecordProperties: {
        email,
        first_name: alternativeName,
        phone_number: invalidPhone,
        text_field: textField,
        number_field: numberField,
        date_field: invalidDate,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);
    const user = await apiClient.getUser(email);
    expect(user.first_name).toBe(alternativeName);
    expect(user.phone_number).toBe(newPhoneNumber);
    expect(user.custom_fields.text_field).toBe(textField);
    expect(user.custom_fields.number_field).toBe(numberField);
    expect(user.custom_fields.date_field).toBe("2021-02-11T23:03:03Z");
  });

  test("can clear user variables", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        first_name: alternativeName,
        phone_number: newPhoneNumber,
      },
      newRecordProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);
    const user = await apiClient.getUser(email);
    expect(user.first_name).toBe("");
    expect(user.phone_number).toBe("");
  });

  test("can add user to a list that doesn't exist yet", async () => {
    await runExport({
      oldRecordProperties: {
        email,
      },
      newRecordProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [listOne, listTwo],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await apiClient.getUser(email);
    expect(user["list_ids"].length).toBe(2);

    const listOneId = await getListId(listOne);
    const listTwoId = await getListId(listTwo);

    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);

    expect(user["list_ids"]).toContain(listOneId);
    expect(user["list_ids"]).toContain(listTwoId);
  });

  test("can remove a user from a list", async () => {
    await runExport({
      oldRecordProperties: {
        email,
      },
      newRecordProperties: {
        email,
      },
      oldGroups: [listOne, listTwo],
      newGroups: [listOne],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await apiClient.getUser(email);
    expect(user["list_ids"].length).toBe(1);
    const listOneId = await getListId(listOne);
    expect(listOneId).not.toBe(null);
    expect(user["list_ids"]).toContain(listOneId);
  });

  test("it does not change already subscribed lists", async () => {
    await runExport({
      oldRecordProperties: {
        email,
      },
      newRecordProperties: {
        email,
      },
      oldGroups: [],
      newGroups: [listTwo, listThree],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await apiClient.getUser(email);

    const listTwoId = await getListId(listTwo);
    const listThreeId = await getListId(listThree);

    expect(listTwoId).not.toBe(null);
    expect(listThreeId).not.toBe(null);

    expect(user["list_ids"]).toContain(listTwoId);
    expect(user["list_ids"]).toContain(listThreeId);
  });

  test("it tries to unsubscribe non subscribed list", async () => {
    await runExport({
      oldRecordProperties: {
        email,
      },
      newRecordProperties: {
        email,
      },
      oldGroups: [listFour],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await apiClient.getUser(email);
    const listFourId = await getListId(listFour);
    expect(listFourId).not.toBe(null);
    expect(user["list_ids"]).not.toContain(listFourId);
  });

  test("it can change the email address", async () => {
    await runExport({
      oldRecordProperties: {
        email,
      },
      newRecordProperties: {
        email: alternativeEmail,
      },
      oldGroups: [],
      newGroups: [listOne, listTwo],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await apiClient.getUser(alternativeEmail);
    expect(user).not.toBe(null);
    expect(user.email).toBe(alternativeEmail);
    expect(user["list_ids"]).toHaveLength(2);

    const oldUser = await apiClient.getUser(email);
    expect(oldUser).toBe(null);
  });

  test("it can change the email address and orphan the old user if sync mode is not deleting", async () => {
    // sendgrid requires deleting the old user on FK change
    await runExport({
      syncOperations: { create: true, update: true, delete: false },
      oldRecordProperties: {
        email: alternativeEmail,
      },
      newRecordProperties: {
        email,
      },
      oldGroups: [listOne, listTwo, listThree],
      newGroups: [listOne, listTwo, listThree],
      toDelete: false,
    });

    await indexContacts(newNock);

    // old user still there
    const oldUser = await apiClient.getUser(alternativeEmail);
    expect(oldUser).not.toBe(null);
    expect(oldUser.email).toBe(alternativeEmail);
    expect(oldUser["list_ids"]).toHaveLength(0); // but has been removed from lists

    // new user created
    const newUser = await apiClient.getUser(email);
    expect(newUser).not.toBe(null);
    expect(newUser.email).toBe(email);
    expect(newUser["list_ids"]).toHaveLength(3);
  });

  test("it can change the email address along other properties", async () => {
    await runExport({
      oldRecordProperties: {
        email: alternativeEmail,
        first_name: alternativeName,
        phone_number: newPhoneNumber,
      },
      newRecordProperties: {
        email: otherEmail,
        first_name: otherName,
        phone_number: otherPhoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await apiClient.getUser(otherEmail);
    expect(user.email).toBe(otherEmail);
    expect(user.first_name).toBe(otherName);
    expect(user.phone_number).toBe(otherPhoneNumber);

    const oldUser = await apiClient.getUser(alternativeEmail);
    expect(oldUser).toBe(null);
  });

  test("cannot delete an user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          delete: false,
          update: true,
        },
        oldRecordProperties: {
          email: otherEmail,
        },
        newRecordProperties: {
          email: otherEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);

    // no effect
    const user = await apiClient.getUser(otherEmail);
    expect(user.email).toBe(otherEmail);
    expect(user.first_name).toBe(otherName);
    expect(user.phone_number).toBe(otherPhoneNumber);
  });

  test("can delete a user", async () => {
    await runExport({
      oldRecordProperties: {
        email: otherEmail,
      },
      newRecordProperties: {
        email: otherEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    await indexContacts(newNock);

    const user = await apiClient.getUser(otherEmail);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    let user = await apiClient.getUser(otherEmail);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {
        email: otherEmail,
      },
      newRecordProperties: {
        email: otherEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    user = await apiClient.getUser(otherEmail);
    expect(user).toBe(null);
  });

  test("can add a user and add this user to a list at the same time.", async () => {
    let user = await apiClient.getUser(newEmail);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: newEmail,
        first_name: newName,
      },
      oldGroups: [],
      newGroups: [listFour],
      toDelete: false,
    });
    await indexContacts(newNock);

    user = await apiClient.getUser(newEmail);
    expect(user).not.toBe(null);
    expect(user.first_name).toBe(newName);

    const listFourId = await getListId(listFour);
    expect(listFourId).not.toBe(null);
    expect(user["list_ids"]).toContain(listFourId);
  });

  test("can add a user passing a nonexistent email on the oldRecordProperties", async () => {
    let brandNewUser = await apiClient.getUser(brandNewEmail);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await apiClient.getUser(nonexistentEmail);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldRecordProperties: { email: nonexistentEmail },
      newRecordProperties: {
        email: brandNewEmail,
        first_name: brandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    brandNewUser = await apiClient.getUser(brandNewEmail);
    expect(brandNewUser).not.toBe(null);
    expect(brandNewUser.first_name).toBe(brandNewName);
  });

  test("can add a user passing a invalid email", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: {
          email: invalidEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow();
  });
});
