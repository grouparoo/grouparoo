import { helper } from "@grouparoo/spec-helper";

import { exportRecord } from "../../src/lib/export/exportRecord";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { MailjetClient } from "../../src/lib/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const appId = "anw890-5vn34c9-a802n8905v-3cw4";

let apiClient: MailjetClient;
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

const brandNewEmail = "jake.jill@mailinator.com";
const brandNewName = "Jake";
const nonexistentEmail = "pilo.paz@mailinator.com";

const invalidEmail = "000";
const invalidDate = "asd000";
const numberField = 3039;
const floatField = 30.39;

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

async function getListId(listName): Promise<any> {
  const list = await apiClient.getListByName(listName);
  if (list) {
    return list.ID;
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
        await apiClient.deleteContact(user.ID);
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

function getUserProp(userProps: any[], prop: string) {
  const props = userProps.filter((p) => p.Name === prop);
  return props.length > 0 ? props[0]["Value"] : null;
}

async function cleanUp(suppressErrors) {
  await deleteUsers(suppressErrors);
  await deleteLists(suppressErrors);
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

describe("mailjet/exportRecord", () => {
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("cannot create record on Mailjet if sync mode does not allow it", async () => {
    user = await apiClient.getContactByEmail(email);
    expect(user).toBe(null);

    await expect(
      runExport({
        syncOperations: { create: false, update: true, delete: true },
        oldRecordProperties: {},
        newRecordProperties: { Email: email, firstname: firstName },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow creating/);
  });

  test("can create record on Mailjet", async () => {
    user = await apiClient.getContactByEmail(email);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Email: email, firstname: firstName },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    user = await apiClient.getContactByEmail(email);
    const userProps = await apiClient.getContactProperties(user.ID);
    expect(user).not.toBe(null);
    expect(user["Email"]).toBe(email);
    expect(getUserProp(userProps, "firstname")).toBe(firstName);
  });

  test("can add user variables", async () => {
    await runExport({
      oldRecordProperties: { Email: email, firstname: firstName },
      newRecordProperties: {
        Email: email,
        firstname: firstName,
        lastname: lastName,
        phone: phoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    expect(user["Email"]).toBe(email);
    const userProps = await apiClient.getContactProperties(user.ID);
    expect(getUserProp(userProps, "firstname")).toBe(firstName);
    expect(getUserProp(userProps, "lastname")).toBe(lastName);
    expect(getUserProp(userProps, "phone")).toBe(phoneNumber);
  });

  test("cannot update existing record if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: false, delete: true },
        oldRecordProperties: {
          Email: email,
          firstname: firstName,
          lastname: lastName,
          phone: phoneNumber,
        },
        newRecordProperties: {
          Email: email,
          firstname: alternativeName,
          lastname: alternativeLastName,
          phone: newPhoneNumber,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow updating/);

    // no change
    const user = await apiClient.getContactByEmail(email);
    expect(user["Email"]).toBe(email);
    const userProps = await apiClient.getContactProperties(user.ID);
    expect(getUserProp(userProps, "firstname")).toBe(firstName);
    expect(getUserProp(userProps, "lastname")).toBe(lastName);
    expect(getUserProp(userProps, "phone")).toBe(phoneNumber);
  });

  test("can change user variables", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email,
        firstname: firstName,
        lastname: lastName,
        phone: phoneNumber,
      },
      newRecordProperties: {
        Email: email,
        firstname: alternativeName,
        lastname: alternativeLastName,
        phone: newPhoneNumber,
        date_field: dateField, //must be midnight: 00:00
        number_field: numberField,
        float_field: floatField,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    expect(user["Email"]).toBe(email);
    const userProps = await apiClient.getContactProperties(user.ID);
    expect(getUserProp(userProps, "firstname")).toBe(alternativeName);
    expect(getUserProp(userProps, "lastname")).toBe(alternativeLastName);
    expect(getUserProp(userProps, "date_field")).toBe("2021-02-11T23:03:03Z");
    expect(getUserProp(userProps, "number_field")).toBe(numberField.toString());
    expect(getUserProp(userProps, "float_field")).toBe(floatField.toString());
  });

  test("can try change user variables with invalid date type", async () => {
    await expect(
      runExport({
        oldRecordProperties: {
          Email: email,
          date_field: dateField,
        },
        newRecordProperties: {
          Email: email,
          date_field: invalidDate,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/is not a valid datetime value/);
  });

  test("can clear user variables", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email,
        firstname: alternativeName,
        lastname: alternativeLastName,
        phone: phoneNumber,
        date_field: dateField,
        number_field: numberField,
        float_field: floatField,
      },
      newRecordProperties: {
        Email: email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    expect(user["Email"]).toBe(email);
    const userProps = await apiClient.getContactProperties(user.ID);
    expect(getUserProp(userProps, "firstname")).toBe(null);
    expect(getUserProp(userProps, "lastname")).toBe(null);
    expect(getUserProp(userProps, "phone")).toBe(null);
    expect(getUserProp(userProps, "date_field")).toBe(null);
    expect(getUserProp(userProps, "number_field")).toBe(null);
    expect(getUserProp(userProps, "float_field")).toBe(null);
  });

  test("can add user to a list that doesn't exist yet", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email,
      },
      newRecordProperties: {
        Email: email,
      },
      oldGroups: [],
      newGroups: [listOne, listTwo],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    expect(user["Email"]).toBe(email);

    const listOneId = await getListId(listOne);
    const listTwoId = await getListId(listTwo);
    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);

    const listMemberships = await apiClient.getContactListsByEmail(email);
    expect(listMemberships.length).toBe(2);
    expect(listMemberships).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ ListID: listOneId }),
        expect.objectContaining({ ListID: listTwoId }),
      ])
    );
  });

  test("can remove a user from a list", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email,
      },
      newRecordProperties: {
        Email: email,
      },
      oldGroups: [listOne, listTwo],
      newGroups: [listOne],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    expect(user["Email"]).toBe(email);

    const listOneId = await getListId(listOne);
    expect(listOneId).not.toBe(null);

    const listMemberships = await apiClient.getContactListsByEmail(email);
    expect(listMemberships.length).toBe(1);
    expect(listMemberships).toEqual(
      expect.arrayContaining([expect.objectContaining({ ListID: listOneId })])
    );
  });

  test("it does not change already subscribed lists", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email,
      },
      newRecordProperties: {
        Email: email,
      },
      oldGroups: [],
      newGroups: [listTwo, listThree],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    expect(user["Email"]).toBe(email);

    const listOneId = await getListId(listOne);
    const listTwoId = await getListId(listTwo);
    const listThreeId = await getListId(listThree);

    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);
    expect(listThreeId).not.toBe(null);

    const listMemberships = await apiClient.getContactListsByEmail(email);
    expect(listMemberships.length).toBe(3);
    expect(listMemberships).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ ListID: listOneId }),
        expect.objectContaining({ ListID: listTwoId }),
        expect.objectContaining({ ListID: listThreeId }),
      ])
    );
  });

  test("it tries to unsubscribe non subscribed list", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email,
      },
      newRecordProperties: {
        Email: email,
      },
      oldGroups: [listFour],
      newGroups: [],
      toDelete: false,
    });
    const user = await apiClient.getContactByEmail(email);
    expect(user["Email"]).toBe(email);
    const listFourId = await getListId(listFour);
    expect(listFourId).not.toBe(null);

    const listMemberships = await apiClient.getContactListsByEmail(email);
    expect(listMemberships.length).toBe(3);
    expect(listMemberships).toEqual(
      expect.arrayContaining([
        expect.not.objectContaining({ ListID: listFourId }),
      ])
    );
  });

  test("change email when only old exists (ENRICH mode)", async () => {
    // mailjet requires creating new user on FK change
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.enrich.operations,
        oldRecordProperties: {
          Email: email,
        },
        newRecordProperties: {
          Email: alternativeEmail,
        },
        oldGroups: [listOne, listTwo, listThree],
        newGroups: [listOne, listTwo, listThree],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow creating/);

    // no changes
    const oldUser = await apiClient.getContactByEmail(email);
    expect(oldUser).not.toBe(null);
    expect(oldUser["Email"]).toBe(email);

    const listMemberships = await apiClient.getContactListsByEmail(email);
    expect(listMemberships.length).toBe(3);

    // not created
    const newUser = await apiClient.getContactByEmail(alternativeEmail);
    expect(newUser).toBe(null);
  });

  test("change email when only old exists (ADDITIVE mode)", async () => {
    await runExport({
      syncOperations: DestinationSyncModeData.additive.operations,
      oldRecordProperties: {
        Email: email,
      },
      newRecordProperties: {
        Email: alternativeEmail,
      },
      oldGroups: [listOne, listTwo, listThree],
      newGroups: [listOne, listTwo, listThree],
      toDelete: false,
    });

    const oldUser = await apiClient.getContactByEmail(email);
    expect(oldUser).not.toBe(null);
    const oldListMemberships = await apiClient.getContactListsByEmail(email);
    expect(oldListMemberships.length).toBe(0);

    const newUser = await apiClient.getContactByEmail(alternativeEmail);
    expect(newUser).not.toBe(null);
    expect(newUser["Email"]).toBe(alternativeEmail);

    const listOneId = await getListId(listOne);
    const listTwoId = await getListId(listTwo);
    const listThreeId = await getListId(listThree);

    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);
    expect(listThreeId).not.toBe(null);

    const listMemberships = await apiClient.getContactListsByEmail(
      alternativeEmail
    );
    expect(listMemberships.length).toBe(3);
    expect(listMemberships).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ ListID: listOneId }),
        expect.objectContaining({ ListID: listTwoId }),
        expect.objectContaining({ ListID: listThreeId }),
      ])
    );
  });

  test("change email when both exist (ADDITIVE mode)", async () => {
    // mailjet requires deleting the old user on FK change
    await runExport({
      syncOperations: DestinationSyncModeData.additive.operations,
      oldRecordProperties: {
        Email: alternativeEmail,
      },
      newRecordProperties: {
        Email: email,
      },
      oldGroups: [listOne, listTwo, listThree],
      newGroups: [listOne, listTwo, listThree],
      toDelete: false,
    });

    // old user still there
    const oldUser = await apiClient.getContactByEmail(alternativeEmail);
    expect(oldUser).not.toBe(null);
    expect(oldUser["Email"]).toBe(alternativeEmail);
    const oldListMemberships = await apiClient.getContactListsByEmail(
      alternativeEmail
    );
    expect(oldListMemberships).toHaveLength(0); // but has been removed from lists

    // new user created
    const newUser = await apiClient.getContactByEmail(email);
    expect(newUser).not.toBe(null);
    expect(newUser["Email"]).toBe(email);
    const listMemberships = await apiClient.getContactListsByEmail(email);
    expect(listMemberships).toHaveLength(3);
  });

  test("change email when both exist (SYNC mode)", async () => {
    // mailjet requires deleting the old user on FK change
    await runExport({
      syncOperations: DestinationSyncModeData.sync.operations,
      oldRecordProperties: {
        Email: alternativeEmail,
      },
      newRecordProperties: {
        Email: email,
        phone: otherPhoneNumber,
      },
      oldGroups: [listOne, listTwo, listThree],
      newGroups: [listOne, listTwo, listThree],
      toDelete: false,
    });

    // old user is deleted
    const oldUser = await apiClient.getContactByEmail(alternativeEmail);
    expect(oldUser).toBe(null);

    // new user is updated
    const newUser = await apiClient.getContactByEmail(email);
    expect(newUser).not.toBe(null);
    expect(newUser["Email"]).toBe(email);
    const userProps = await apiClient.getContactProperties(newUser.ID);
    expect(getUserProp(userProps, "phone")).toBe(otherPhoneNumber);
    const listMemberships = await apiClient.getContactListsByEmail(email);
    expect(listMemberships).toHaveLength(3);
  });

  test("change email when only new exists", async () => {
    await runExport({
      oldRecordProperties: {
        Email: nonexistentEmail,
      },
      newRecordProperties: {
        Email: email,
        firstname: firstName,
      },
      oldGroups: [listOne, listTwo, listThree],
      newGroups: [listOne, listTwo, listThree],
      toDelete: false,
    });

    // old is null
    const oldUser = await apiClient.getContactByEmail(nonexistentEmail);
    expect(oldUser).toBe(null);

    // new user is updated
    const newUser = await apiClient.getContactByEmail(email);
    expect(newUser).not.toBe(null);
    expect(newUser["Email"]).toBe(email);
    const userProps = await apiClient.getContactProperties(newUser.ID);
    expect(getUserProp(userProps, "firstname")).toBe(firstName);
    const listMemberships = await apiClient.getContactListsByEmail(email);
    expect(listMemberships).toHaveLength(3);
  });

  test("it can change the email address along other properties", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email,
        firstname: alternativeName,
        phone: newPhoneNumber,
      },
      newRecordProperties: {
        Email: otherEmail,
        firstname: otherName,
        phone: otherPhoneNumber,
      },
      oldGroups: [],
      newGroups: [listOne],
      toDelete: false,
    });

    const newUser = await apiClient.getContactByEmail(otherEmail);
    expect(newUser).not.toBe(null);
    expect(newUser["Email"]).toBe(otherEmail);

    const userProps = await apiClient.getContactProperties(newUser.ID);
    expect(getUserProp(userProps, "firstname")).toBe(otherName);
    expect(getUserProp(userProps, "phone")).toBe(otherPhoneNumber);

    const listOneId = await getListId(listOne);
    expect(listOneId).not.toBe(null);

    const listMemberships = await apiClient.getContactListsByEmail(otherEmail);
    expect(listMemberships.length).toBe(1);
    expect(listMemberships).toEqual(
      expect.arrayContaining([expect.objectContaining({ ListID: listOneId })])
    );

    const oldUser = await apiClient.getContactByEmail(email);
    expect(oldUser).toBe(null);
  });

  test("cannot delete a user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: true, delete: false },
        oldRecordProperties: {
          Email: otherEmail,
        },
        newRecordProperties: {
          Email: otherEmail,
        },
        oldGroups: [listOne],
        newGroups: [listOne],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not allow removing/);

    // no changes to the record
    const user = await apiClient.getContactByEmail(otherEmail);
    expect(user).not.toBe(null);
    expect(user["Email"]).toBe(otherEmail);

    const userProps = await apiClient.getContactProperties(user.ID);
    expect(getUserProp(userProps, "firstname")).toBe(otherName);
    expect(getUserProp(userProps, "phone")).toBe(otherPhoneNumber);

    const listMemberships = await apiClient.getContactListsByEmail(otherEmail);
    expect(listMemberships.length).toBe(1);
  });

  test("can delete a user", async () => {
    let user = await apiClient.getContactByEmail(otherEmail);
    expect(user).not.toBe(null);
    await runExport({
      oldRecordProperties: {
        Email: otherEmail,
      },
      newRecordProperties: {
        Email: otherEmail,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    user = await apiClient.getContactByEmail(otherEmail);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    let user = await apiClient.getContactByEmail(otherEmail);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {
        Email: otherEmail,
      },
      newRecordProperties: {
        Email: otherEmail,
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
      oldRecordProperties: {},
      newRecordProperties: {
        Email: newEmail,
        firstname: newName,
      },
      oldGroups: [],
      newGroups: [listFour],
      toDelete: false,
    });
    user = await apiClient.getContactByEmail(newEmail);
    expect(user).not.toBe(null);
    expect(user["Email"]).toBe(newEmail);

    const userProps = await apiClient.getContactProperties(user.ID);
    expect(getUserProp(userProps, "firstname")).toBe(newName);

    const listFourId = await getListId(listFour);
    expect(listFourId).not.toBe(null);

    const listMemberships = await apiClient.getContactListsByEmail(newEmail);
    expect(listMemberships.length).toBe(1);
    expect(listMemberships).toEqual(
      expect.arrayContaining([expect.objectContaining({ ListID: listFourId })])
    );
  });

  test("can add a user passing a nonexistent email on the oldRecordProperties", async () => {
    let brandNewUser = await apiClient.getContactByEmail(brandNewEmail);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await apiClient.getContactByEmail(nonexistentEmail);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldRecordProperties: { Email: nonexistentEmail },
      newRecordProperties: {
        Email: brandNewEmail,
        firstname: brandNewName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    brandNewUser = await apiClient.getContactByEmail(brandNewEmail);
    expect(brandNewUser).not.toBe(null);
    expect(brandNewUser["Email"]).toBe(brandNewEmail);

    const userProps = await apiClient.getContactProperties(brandNewUser.ID);
    expect(getUserProp(userProps, "firstname")).toBe(brandNewName);
  });

  test("can add a user passing a invalid email", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: {
          Email: invalidEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Invalid email address/);
  });
});
