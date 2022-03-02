import { helper } from "@grouparoo/spec-helper";

import { exportRecord } from "../../src/lib/export/exportRecord";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexContacts } from "../utils/shared";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const appId = "app_7815696ecbf1c96e6894b779456d330e";

let apiClient: any;
let user: any;
const phoneNumber = "+5583999999999";
const phoneNumberTwo = "+5583999999998";
const otherPhoneNumber = "+5583999999997";
const userId = "testuser123";
const alternativeUserId = "testuser345";
const email = "caio.silveira@mailinator.com";
const secondEmail = "sebastian@mailinator.com";
const secondName = "sebastian";
const secondUserID = "sebastian3039";
const secondPhoneNumber = "+5583999999939";
const alternativeEmail = "lucas.nogueira@mailinator.com";
const otherEmail = "sandro.arturo@mailinator.com";
const name = "Caio";
const alternativeName = "Evan";
const otherName = "Lucas";
const emailTwo = "carlos.solimoes@mailinator.com";
const nameTwo = "Carlos";
const userIdTwo = "testuser456";
const street1 = "Alice Luna";
const street2 = "Emilio de Araujo";
const city = "Campina Grande";
const flatNumber = 405;
const flatFloor = 4;
const country = "BR";
const number1 = 10;
const number2 = 20;
const zipcode = "555555555";
const exampleDate = new Date(1597870204 * 1000);
const listOne = "List One";
const listTwo = "List Two";
const listThree = "List Three";
const listFour = "List Four";
const customField = "testCustomField";
const emailThree = "jake.jill@mailinator.com";
const userIdThree = "jake.jill";
const nameThree = "Jake";
const nonexistentEmail = "pilo.paz@mailinator.com";

const invalidEmail = "000";
const invalidDate = "GGG";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

async function getUser(email): Promise<any> {
  const userResponse = await apiClient.users.get({ email });
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
  for (const emailToDelete of [
    email,
    alternativeEmail,
    otherEmail,
    emailTwo,
    emailThree,
    secondEmail,
  ]) {
    try {
      await apiClient.users.delete(emailToDelete);
    } catch (err) {
      if (!suppressErrors) {
        throw err;
      }
    }
  }
}

async function deleteLists(suppressErrors) {
  for (const groupToDelete of [listOne, listTwo, listThree, listFour]) {
    const listId = await getListId(groupToDelete);
    if (listId) {
      try {
        await apiClient.lists.delete({ listId });
      } catch (err) {
        if (!suppressErrors) {
          throw err;
        }
      }
    }
  }
}

async function cleanUp(suppressErrors) {
  await deleteUsers(suppressErrors);
  await deleteLists(suppressErrors);
  await indexContacts(newNock, 40 * 1000);
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

describe("iterable/exportRecord", () => {
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("can not create a Person if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.update.operations,
        oldRecordProperties: {},
        newRecordProperties: { email, name },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create/);
  });

  test("can create record on Iterable", async () => {
    user = await getUser(email);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email,
        name,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);
    user = await getUser(email);

    expect(user).not.toBe(null);
    expect(user.email).toBe(email);
    expect(user.dataFields.name).toBe(name);
  });

  test("can create record on Iterable along with properties", async () => {
    let user = await getUser(secondEmail);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: secondEmail,
        name: secondName,
        userId: secondUserID,
        phoneNumber: secondPhoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);
    user = await getUser(secondEmail);
    expect(user).not.toBe(null);
    expect(user.email).toBe(secondEmail);
    expect(user.userId).toBe(secondUserID);
    expect(user.dataFields.name).toBe(secondName);
    expect(user.dataFields.phoneNumber).toBe(secondPhoneNumber);
  });

  test("can add user variables including nested objects", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        name,
      },
      newRecordProperties: {
        email,
        name,
        userId,
        phoneNumber,
        signupDate: exampleDate,
        customField,
        "defaultAddress.street": street1,
        "defaultAddress.number": number1,
        "defaultAddress.zipcode": zipcode,
        "defaultAddress.city": city,
        "defaultAddress.flat.number": flatNumber, // depth 3
        "defaultAddress.flat.floor": flatFloor, // depth 3
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
    expect(user.dataFields.customField).toBe(customField);
    expect(user.dataFields.signupDate).toBe("2020-08-19 20:50:04 +00:00");
    expect(user.dataFields.defaultAddress.street).toBe(street1);
    expect(user.dataFields.defaultAddress.number).toBe(number1);
    expect(user.dataFields.defaultAddress.zipcode).toBe(zipcode);
    expect(user.dataFields.defaultAddress.city).toBe(city);
    expect(user.dataFields.defaultAddress.flat.number).toBe(flatNumber);
    expect(user.dataFields.defaultAddress.flat.floor).toBe(flatFloor);
  });

  test("can update user variables using dot notation to existing object data fields and leaving untracked nested properties untouched.", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        name,
        userId,
        phoneNumber,
        signupDate: exampleDate,
        customField,
        "defaultAddress.street": street1,
        "defaultAddress.number": number1,
        "defaultAddress.zipcode": zipcode,
      },
      newRecordProperties: {
        email,
        name,
        userId,
        phoneNumber,
        signupDate: exampleDate,
        customField,
        "defaultAddress.street": street2,
        "defaultAddress.number": number1,
        "defaultAddress.zipcode": zipcode,
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
    expect(user.dataFields.customField).toBe(customField);
    expect(user.dataFields.signupDate).toBe("2020-08-19 20:50:04 +00:00");
    expect(user.dataFields.defaultAddress.street).toBe(street2);
    expect(user.dataFields.defaultAddress.number).toBe(number1);
    expect(user.dataFields.defaultAddress.zipcode).toBe(zipcode);
    expect(user.dataFields.defaultAddress.city).toBe(city); // untouched
  });

  test("can add user variables using dot notation to existing object data fields.", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        name,
        userId,
        phoneNumber,
        signupDate: exampleDate,
        customField,
        "defaultAddress.street": street2,
        "defaultAddress.number": number1,
        "defaultAddress.zipcode": zipcode,
        "defaultAddress.city": city,
      },
      newRecordProperties: {
        email,
        name,
        userId,
        phoneNumber,
        signupDate: exampleDate,
        customField,
        "defaultAddress.street": street2,
        "defaultAddress.number": number2,
        "defaultAddress.zipcode": zipcode,
        "defaultAddress.city": city,
        "defaultAddress.country": country,
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
    expect(user.dataFields.customField).toBe(customField);
    expect(user.dataFields.signupDate).toBe("2020-08-19 20:50:04 +00:00");
    expect(user.dataFields.defaultAddress.street).toBe(street2);
    expect(user.dataFields.defaultAddress.number).toBe(number2);
    expect(user.dataFields.defaultAddress.zipcode).toBe(zipcode);
    expect(user.dataFields.defaultAddress.city).toBe(city);
    expect(user.dataFields.defaultAddress.country).toBe(country);
  });

  test("can not update a Person if sync mode does not allow it", async () => {
    const newPhoneNumber = "+5583999999998";
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: true,
          delete: true,
        },
        oldRecordProperties: {
          email,
          userId,
          name,
          phoneNumber,
          signupDate: exampleDate,
        },
        newRecordProperties: {
          email,
          userId,
          name: alternativeName,
          phoneNumber: newPhoneNumber,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    // no changes
    const user = await getUser(email);
    expect(user.userId).toBe(userId);
    expect(user.dataFields.name).toBe(name);
    expect(user.dataFields.phoneNumber).toBe(phoneNumber);
    expect(user.dataFields.customField).toBe(customField);
    expect(user.dataFields.signupDate).toBe("2020-08-19 20:50:04 +00:00");
  });

  test("can change user variables (New FK exists in destination)", async () => {
    // Phone must be valid.
    const newPhoneNumber = "+5583999999998";

    await runExport({
      oldRecordProperties: {
        email,
        userId,
        name,
        phoneNumber,
        signupDate: exampleDate,
      },
      newRecordProperties: {
        email,
        userId,
        name: alternativeName,
        phoneNumber: newPhoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);

    expect(user.userId).toBe(userId);
    expect(user.dataFields.name).toBe(alternativeName);
    expect(user.dataFields.phoneNumber).toBe(newPhoneNumber);
    expect(user.dataFields.signupDate).toBe(undefined);
    expect(user.dataFields.unknown_junk).toBeUndefined();
  });

  test("can clear user variables", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        name,
        userId,
        phoneNumber,
        signupDate: exampleDate,
        customField,
        "defaultAddress.number": number2,
        "defaultAddress.street": street2,
        "defaultAddress.zipcode": zipcode,
        "defaultAddress.city": city,
        "defaultAddress.country": country,
      },
      newRecordProperties: {
        email,
        userId,
        "defaultAddress.city": city,
        "defaultAddress.country": country,
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
    expect(user.dataFields.customField).toBe(undefined);
    expect(user.dataFields.defaultAddress.street).toBe(undefined);
    expect(user.dataFields.defaultAddress.number).toBe(undefined);
    expect(user.dataFields.defaultAddress.zipcode).toBe(undefined);
    expect(user.dataFields.defaultAddress.city).toBe(city);
    expect(user.dataFields.defaultAddress.country).toBe(country);
  });

  test("can add user to a list that doesn't exist yet", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        userId,
      },
      newRecordProperties: {
        email,
        userId,
      },
      oldGroups: [],
      newGroups: [listOne, listTwo],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);
    expect(user.dataFields.emailListIds.length).toBe(2);

    const listOneId = await getListId(listOne);
    const listTwoId = await getListId(listTwo);

    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);

    expect(user.dataFields.emailListIds).toContain(listOneId);
    expect(user.dataFields.emailListIds).toContain(listTwoId);
  });

  test("can remove a user from a list", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        userId,
      },
      newRecordProperties: {
        email,
        userId,
      },
      oldGroups: [listOne, listTwo],
      newGroups: [listOne],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);
    expect(user.dataFields.emailListIds.length).toBe(1);

    const listOneId = await getListId(listOne);
    expect(listOneId).not.toBe(null);
    expect(user.dataFields.emailListIds).toContain(listOneId);
  });

  test("it does not change already subscribed lists", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        userId,
      },
      newRecordProperties: {
        email,
        userId,
      },
      oldGroups: [],
      newGroups: [listTwo, listThree],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);

    const listTwoId = await getListId(listTwo);
    const listThreeId = await getListId(listThree);

    expect(listTwoId).not.toBe(null);
    expect(listThreeId).not.toBe(null);

    expect(user.dataFields.emailListIds).toContain(listTwoId);
    expect(user.dataFields.emailListIds).toContain(listThreeId);
  });

  test("it tries to unsubscribe non subscribed list", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        userId,
      },
      newRecordProperties: {
        email,
        userId,
      },
      oldGroups: [listFour],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(email);

    const listFourId = await getListId(listFour);

    expect(listFourId).not.toBe(null);

    expect(user.dataFields.emailListIds).not.toContain(listFourId);
  });

  test("cannot change the email address if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: true,
          delete: true,
        },
        oldRecordProperties: {
          email,
          userId,
        },
        newRecordProperties: {
          email: alternativeEmail,
          userId,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    // no change.
    const user = await getUser(alternativeEmail);
    expect(user).toBe(null);

    const oldUser = await getUser(email);
    expect(oldUser).not.toBe(null);
  });

  test("it can change the email address (Old FK exists in destination)", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        userId,
      },
      newRecordProperties: {
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

    const oldUser = await getUser(email);
    expect(oldUser).toBe(null);
  });

  test("it can change the email address along other properties", async () => {
    await runExport({
      oldRecordProperties: {
        email: alternativeEmail,
        userId,
        name: alternativeName,
        phoneNumber: phoneNumberTwo,
      },
      newRecordProperties: {
        email: otherEmail,
        userId,
        name: otherName,
        phoneNumber: otherPhoneNumber,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(otherEmail);
    expect(user).not.toBe(null);
    expect(user.email).toBe(otherEmail);
    expect(user.dataFields.name).toBe(otherName);
    expect(user.dataFields.phoneNumber).toBe(otherPhoneNumber);

    const oldUser = await getUser(alternativeEmail);
    expect(oldUser).toBe(null);
  });

  test("it can change the user id", async () => {
    await runExport({
      oldRecordProperties: {
        email: otherEmail,
        userId,
      },
      newRecordProperties: {
        email: otherEmail,
        userId: alternativeUserId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    const user = await getUser(otherEmail);
    expect(user.userId).toBe(alternativeUserId);
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
          userId,
        },
        newRecordProperties: {
          email: otherEmail,
          userId,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);

    // no effect
    const user = await getUser(otherEmail);
    expect(user).not.toBe(null);
    expect(user.userId).toBe(alternativeUserId);
    expect(user.dataFields.name).toBe(otherName);
    expect(user.dataFields.phoneNumber).toBe(otherPhoneNumber);
  });

  test("can delete a user", async () => {
    await runExport({
      oldRecordProperties: {
        email: otherEmail,
        userId,
      },
      newRecordProperties: {
        email: otherEmail,
        userId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    await indexContacts(newNock);

    const user = await getUser(otherEmail);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    let user = await getUser(otherEmail);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {
        email: otherEmail,
        userId,
      },
      newRecordProperties: {
        email: otherEmail,
        userId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    await indexContacts(newNock);

    user = await getUser(otherEmail);
    expect(user).toBe(null);
  });

  test("can add a user and add this user to a list at the same time.", async () => {
    let user = await getUser(emailTwo);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: emailTwo,
        userId: userIdTwo,
        name: nameTwo,
      },
      oldGroups: [],
      newGroups: [listFour],
      toDelete: false,
    });
    await indexContacts(newNock);

    user = await getUser(emailTwo);
    expect(user).not.toBe(null);
    expect(user.userId).toBe(userIdTwo);
    expect(user.dataFields.name).toBe(nameTwo);

    const listFourId = await getListId(listFour);
    expect(listFourId).not.toBe(null);
    expect(user.dataFields.emailListIds).toContain(listFourId);
  });

  test("can add a user passing a nonexistent email on the oldRecordProperties (Neither FK exist in destination)", async () => {
    let brandNewUser = await getUser(emailThree);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await getUser(nonexistentEmail);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldRecordProperties: { email: nonexistentEmail },
      newRecordProperties: {
        email: emailThree,
        userId: userIdThree,
        name: nameThree,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    await indexContacts(newNock);

    // a new user with the new email is created.
    brandNewUser = await getUser(emailThree);
    expect(brandNewUser).not.toBe(null);
    expect(brandNewUser.userId).toBe(userIdThree);
    expect(brandNewUser.dataFields.name).toBe(nameThree);
  });

  test("can update the new user on email change if both emails exist (Old AND new FK exist in destination)", async () => {
    await runExport({
      oldRecordProperties: {
        email: emailTwo,
        userId: userIdTwo,
        name: nameTwo,
      },
      newRecordProperties: {
        email: emailThree,
        userId: userIdThree,
        name: otherName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexContacts(newNock);

    // Leave the old one untouched
    let user = await getUser(emailTwo);
    expect(user.dataFields.name).toBe(nameTwo);
    expect(user.userId).toBe(userIdTwo);

    // update the new one
    user = await getUser(emailThree);
    expect(user.dataFields.name).toBe(otherName);
    expect(user.userId).toBe(userIdThree);
  });

  test("can delete the new user on email change if both emails exist", async () => {
    await runExport({
      oldRecordProperties: {
        email: emailTwo,
        userId: userIdTwo,
        name: nameTwo,
      },
      newRecordProperties: {
        email: emailThree,
        userId: userIdThree,
        name: otherName,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexContacts(newNock);

    // Leave the old one untouched
    let user = await getUser(emailTwo);
    expect(user.dataFields.name).toBe(nameTwo);
    expect(user.userId).toBe(userIdTwo);

    // Update the new one
    user = await getUser(emailThree);
    expect(user).toBe(null);
  });

  test("can delete an user when syncing for the first time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email: emailTwo,
        userId: userIdTwo,
        name: nameTwo,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });
    await indexContacts(newNock);
    user = await getUser(emailTwo);
    expect(user).toBe(null);
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
    ).rejects.toThrow("Request failed with status code 400");
  });

  test("can update a user passing a invalid properties", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: {
          email: emailTwo,
          signupDate: invalidDate,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow("Request failed with status code 400");
  });
});
