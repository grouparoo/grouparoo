import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import EloquaClient from "../../src/lib/client/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const appId = "app_789-po09-EOEP-HKp8-3039";

let client: EloquaClient;
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
// const newNock = false;
// require("./../fixtures/export-profile");
// or these to make it true
const newNock = true;
helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function deleteUsers(suppressErrors) {
  try {
    for (const emailToDelete of [
      email,
      alternativeEmail,
      otherEmail,
      newEmail,
      brandNewEmail,
    ]) {
      const user = await client.contacts.getByEmail(emailToDelete);
      if (user) {
        await client.contacts.delete(user["id"]);
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

describe("eloqua/exportProfile", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("cannot create contact on Eloqua if sync mode does not allow it", async () => {
    user = await client.contacts.getByEmail(email);
    expect(user).toBe(null);

    await expect(
      runExport({
        syncOperations: { create: false, update: true, delete: true },
        oldProfileProperties: {},
        newProfileProperties: { emailAddress: email, firstName },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create/);
  });

  // test("can create profile on Eloqua", async () => {
  //   user = await client.contacts.getByEmail(email);
  //   expect(user).toBe(null);
  //
  //   await runExport({
  //     oldProfileProperties: {},
  //     newProfileProperties: { emailAddress: email, firstName },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: false,
  //   });
  //   user = await client.contacts.getByEmail(email);
  //   expect(user).not.toBe(null);
  //   expect(user["emailAddress"]).toBe(email);
  //   expect(user["firstName"]).toBe(firstName);
  // });

  // test("can add user variables", async () => {
  //   await runExport({
  //     oldProfileProperties: { emailAddress: email, firstName },
  //     newProfileProperties: {
  //       emailAddress: email,
  //       firstName,
  //       lastName,
  //       mobilePhone: phoneNumber,
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: false,
  //   });
  //   const user = await client.contacts.getByEmail(email);
  //   expect(user).not.toBe(null);
  //   expect(user["emailAddress"]).toBe(email);
  //   expect(user["firstName"]).toBe(firstName);
  //   expect(user["lastName"]).toBe(lastName);
  //   expect(user["mobilePhone"]).toBe(phoneNumber);
  // });

  // test("cannot update existing profile if sync mode does not allow it", async () => {
  //   await expect(
  //     runExport({
  //       syncOperations: { create: true, update: false, delete: true },
  //       oldProfileProperties: {
  //         emailAddress: email,
  //         firstName,
  //         lastName,
  //         mobilePhone: phoneNumber,
  //       },
  //       newProfileProperties: {
  //         emailAddress: email,
  //         firstName: alternativeName,
  //         lastName: alternativeLastName,
  //         mobilePhone: newPhoneNumber,
  //       },
  //       oldGroups: [],
  //       newGroups: [],
  //       toDelete: false,
  //     })
  //   ).rejects.toThrow(/sync mode does not update/);
  //
  //   // no change
  //   const user = await client.contacts.getByEmail(email);
  //   expect(user).not.toBe(null);
  //   expect(user["emailAddress"]).toBe(email);
  //   expect(user["firstName"]).toBe(firstName);
  //   expect(user["lastName"]).toBe(lastName);
  //   expect(user["mobilePhone"]).toBe(phoneNumber);
  // });

  // test("can change user variables", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       emailAddress: email,
  //       firstName,
  //       lastName,
  //       mobilePhone: phoneNumber,
  //     },
  //     newProfileProperties: {
  //       emailAddress: email,
  //       firstName: alternativeName,
  //       lastName: alternativeLastName,
  //       mobilePhone: newPhoneNumber,
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: false,
  //   });
  //   const user = await client.contacts.getByEmail(email);
  //   console.log(user);
  //   expect(user).not.toBe(null);
  //   expect(user["emailAddress"]).toBe(email);
  //   expect(user["firstName"]).toBe(alternativeName);
  //   expect(user["lastName"]).toBe(alternativeLastName);
  //   expect(user["mobilePhone"]).toBe(newPhoneNumber);
  // });
  //
  // test("can try change user variables with invalid date type", async () => {
  //   await expect(
  //     runExport({
  //       oldProfileProperties: {
  //         email,
  //         closedate: dateField,
  //       },
  //       newProfileProperties: {
  //         email,
  //         closedate: invalidDate,
  //       },
  //       oldGroups: [],
  //       newGroups: [],
  //       toDelete: false,
  //     })
  //   ).rejects.toThrow(/Request failed/);
  // });
  //
  // test("can clear user variables", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //       firstname: alternativeName,
  //       lastname: alternativeLastName,
  //       mobilephone: phoneNumber,
  //       text_field: textField,
  //       date_field: dateField,
  //       number_field: numberField,
  //     },
  //     newProfileProperties: {
  //       email,
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: false,
  //   });
  //   const user = await client.getContactByEmail(email);
  //   expect(user["properties"]["email"]["value"]).toBe(email);
  //   expect(user["properties"]["firstname"]["value"]).toBe("");
  //   expect(user["properties"]["lastname"]["value"]).toBe("");
  //   expect(user["properties"]["text_field"]["value"]).toBe("");
  //   expect(user["properties"]["date_field"]["value"]).toBe("");
  //   expect(user["properties"]["number_field"]["value"]).toBe("");
  // });
  //
  // test("can add user to a list that doesn't exist yet", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //     },
  //     newProfileProperties: {
  //       email,
  //     },
  //     oldGroups: [],
  //     newGroups: [listOne, listTwo],
  //     toDelete: false,
  //   });
  //   const user = await client.getContactByEmail(email);
  //
  //   const listOneId = await getListId(listOne);
  //   const listTwoId = await getListId(listTwo);
  //
  //   expect(listOneId).not.toBe(null);
  //   expect(listTwoId).not.toBe(null);
  //   expect(user["list-memberships"].length).toBe(2);
  //   expect(user["list-memberships"]).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({ "internal-list-id": listOneId }),
  //       expect.objectContaining({ "internal-list-id": listTwoId }),
  //     ])
  //   );
  // });
  //
  // test("can remove a user from a list", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //     },
  //     newProfileProperties: {
  //       email,
  //     },
  //     oldGroups: [listOne, listTwo],
  //     newGroups: [listOne],
  //     toDelete: false,
  //   });
  //   const user = await client.getContactByEmail(email);
  //   const listOneId = await getListId(listOne);
  //   expect(user["list-memberships"].length).toBe(1);
  //   expect(user["list-memberships"]).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({ "internal-list-id": listOneId }),
  //     ])
  //   );
  // });
  //
  // test("it does not change already subscribed lists", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //     },
  //     newProfileProperties: {
  //       email,
  //     },
  //     oldGroups: [],
  //     newGroups: [listTwo, listThree],
  //     toDelete: false,
  //   });
  //   const user = await client.getContactByEmail(email);
  //
  //   const listOneId = await getListId(listOne);
  //   const listTwoId = await getListId(listTwo);
  //   const listThreeId = await getListId(listThree);
  //
  //   expect(listOneId).not.toBe(null);
  //   expect(listTwoId).not.toBe(null);
  //   expect(listThreeId).not.toBe(null);
  //
  //   expect(user["list-memberships"].length).toBe(3);
  //   expect(user["list-memberships"]).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({ "internal-list-id": listOneId }),
  //       expect.objectContaining({ "internal-list-id": listTwoId }),
  //       expect.objectContaining({ "internal-list-id": listThreeId }),
  //     ])
  //   );
  // });
  //
  // test("it tries to unsubscribe non subscribed list", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //     },
  //     newProfileProperties: {
  //       email,
  //     },
  //     oldGroups: [listFour],
  //     newGroups: [],
  //     toDelete: false,
  //   });
  //   const user = await client.getContactByEmail(email);
  //   const listFourId = await getListId(listFour);
  //   expect(listFourId).not.toBe(null);
  //   expect(user["list-memberships"]).toEqual(
  //     expect.arrayContaining([
  //       expect.not.objectContaining({ "internal-list-id": listFourId }),
  //     ])
  //   );
  // });
  //
  // test("it cannot change the email address if sync mode is only updating", async () => {
  //   // hubspot requires creating new user on FK change
  //   await expect(
  //     runExport({
  //       syncOperations: { create: false, update: true, delete: false },
  //       oldProfileProperties: {
  //         email,
  //       },
  //       newProfileProperties: {
  //         email: alternativeEmail,
  //       },
  //       oldGroups: [listOne, listTwo, listThree],
  //       newGroups: [listOne, listTwo, listThree],
  //       toDelete: false,
  //     })
  //   ).rejects.toThrow(/sync mode does not allow creating/);
  //
  //   const oldUser = await client.getContactByEmail(email);
  //   expect(oldUser).not.toBe(null);
  //   expect(oldUser["properties"]["email"]["value"]).toBe(email);
  //   expect(oldUser["list-memberships"]).toHaveLength(3);
  //
  //   const newUser = await client.getContactByEmail(alternativeEmail);
  //   expect(newUser).toBe(null);
  // });
  //
  // test("it can change the email address", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //     },
  //     newProfileProperties: {
  //       email: alternativeEmail,
  //     },
  //     oldGroups: [listOne, listTwo, listThree],
  //     newGroups: [listOne, listTwo, listThree],
  //     toDelete: false,
  //   });
  //
  //   const user = await client.getContactByEmail(email);
  //   expect(user).toBe(null);
  //
  //   const newUser = await client.getContactByEmail(alternativeEmail);
  //   expect(newUser).not.toBe(null);
  //   expect(newUser["properties"]["email"]["value"]).toBe(alternativeEmail);
  //
  //   const listOneId = await getListId(listOne);
  //   const listTwoId = await getListId(listTwo);
  //   const listThreeId = await getListId(listThree);
  //
  //   expect(listOneId).not.toBe(null);
  //   expect(listTwoId).not.toBe(null);
  //   expect(listThreeId).not.toBe(null);
  //
  //   expect(newUser["list-memberships"].length).toBe(3);
  //   expect(newUser["list-memberships"]).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({ "internal-list-id": listOneId }),
  //       expect.objectContaining({ "internal-list-id": listTwoId }),
  //       expect.objectContaining({ "internal-list-id": listThreeId }),
  //     ])
  //   );
  // });
  //
  // test("it can change the email address and orphan the old user if sync mode is not deleting", async () => {
  //   // hubspot requires deleting the old user on FK change
  //   await runExport({
  //     syncOperations: { create: true, update: true, delete: false },
  //     oldProfileProperties: {
  //       email: alternativeEmail,
  //     },
  //     newProfileProperties: {
  //       email,
  //     },
  //     oldGroups: [listOne, listTwo, listThree],
  //     newGroups: [listOne, listTwo, listThree],
  //     toDelete: false,
  //   });
  //
  //   // old user still there
  //   const oldUser = await client.getContactByEmail(alternativeEmail);
  //   expect(oldUser).not.toBe(null);
  //   expect(oldUser["properties"]["email"]["value"]).toBe(alternativeEmail);
  //   expect(oldUser["list-memberships"]).toHaveLength(0); // but has been removed from lists
  //
  //   // new user created
  //   const newUser = await client.getContactByEmail(email);
  //   expect(newUser).not.toBe(null);
  //   expect(newUser["properties"]["email"]["value"]).toBe(email);
  //   expect(newUser["list-memberships"]).toHaveLength(3);
  // });
  //
  // test("it can change the email address along other properties", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email,
  //       firstname: alternativeName,
  //       mobilephone: newPhoneNumber,
  //     },
  //     newProfileProperties: {
  //       email: otherEmail,
  //       firstname: otherName,
  //       mobilephone: otherPhoneNumber,
  //     },
  //     oldGroups: [],
  //     newGroups: [listOne],
  //     toDelete: false,
  //   });
  //   const user = await client.getContactByEmail(otherEmail);
  //   expect(user["properties"]["email"]["value"]).toBe(otherEmail);
  //   expect(user["properties"]["firstname"]["value"]).toBe(otherName);
  //   expect(user["properties"]["mobilephone"]["value"]).toBe(otherPhoneNumber);
  //
  //   const listOneId = await getListId(listOne);
  //
  //   expect(listOneId).not.toBe(null);
  //   expect(user["list-memberships"].length).toBe(1);
  //   expect(user["list-memberships"]).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({ "internal-list-id": listOneId }),
  //     ])
  //   );
  //
  //   const oldUser = await client.getContactByEmail(email);
  //   expect(oldUser).toBe(null);
  // });
  //
  // test("cannot delete a user if sync mode does not allow it", async () => {
  //   await expect(
  //     runExport({
  //       syncOperations: { create: true, update: true, delete: false },
  //       oldProfileProperties: {
  //         email: otherEmail,
  //       },
  //       newProfileProperties: {
  //         email: otherEmail,
  //       },
  //       oldGroups: [listOne],
  //       newGroups: [listOne],
  //       toDelete: true,
  //     })
  //   ).rejects.toThrow(/sync mode does not allow removing/);
  //
  //   // no changes to the profile
  //   const user = await client.getContactByEmail(otherEmail);
  //   expect(user["properties"]["email"]["value"]).toBe(otherEmail);
  //   expect(user["properties"]["firstname"]["value"]).toBe(otherName);
  //   expect(user["properties"]["mobilephone"]["value"]).toBe(otherPhoneNumber);
  //   expect(user["list-memberships"]).toHaveLength(1);
  // });
  //
  // test("can delete a user", async () => {
  //   await runExport({
  //     oldProfileProperties: {
  //       email: otherEmail,
  //     },
  //     newProfileProperties: {
  //       email: otherEmail,
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: true,
  //   });
  //   const user = await client.getContactByEmail(otherEmail);
  //   expect(user).toBe(null);
  // });
  //
  // test("can try to delete a user that does not exist.", async () => {
  //   let user = await client.getContactByEmail(otherEmail);
  //   expect(user).toBe(null);
  //
  //   await runExport({
  //     oldProfileProperties: {
  //       email: otherEmail,
  //     },
  //     newProfileProperties: {
  //       email: otherEmail,
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: true,
  //   });
  //
  //   user = await client.getContactByEmail(otherEmail);
  //   expect(user).toBe(null);
  // });
  //
  // test("can add a user and add this user to a list at the same time.", async () => {
  //   let user = await client.getContactByEmail(newEmail);
  //   expect(user).toBe(null);
  //
  //   await runExport({
  //     oldProfileProperties: {},
  //     newProfileProperties: {
  //       email: newEmail,
  //       firstname: newName,
  //     },
  //     oldGroups: [],
  //     newGroups: [listFour],
  //     toDelete: false,
  //   });
  //   user = await client.getContactByEmail(newEmail);
  //   expect(user["properties"]["email"]["value"]).toBe(newEmail);
  //   expect(user["properties"]["firstname"]["value"]).toBe(newName);
  //
  //   const listFourId = await getListId(listFour);
  //   expect(listFourId).not.toBe(null);
  //   expect(user["list-memberships"]).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({ "internal-list-id": listFourId }),
  //     ])
  //   );
  // });
  //
  // test("can add a user passing a nonexistent email on the oldProfileProperties", async () => {
  //   let brandNewUser = await client.getContactByEmail(brandNewEmail);
  //   expect(brandNewUser).toBe(null);
  //   const nonexistentUser = await client.getContactByEmail(nonexistentEmail);
  //   expect(nonexistentUser).toBe(null);
  //
  //   await runExport({
  //     oldProfileProperties: { email: nonexistentEmail },
  //     newProfileProperties: {
  //       email: brandNewEmail,
  //       firstname: brandNewName,
  //     },
  //     oldGroups: [],
  //     newGroups: [],
  //     toDelete: false,
  //   });
  //   brandNewUser = await client.getContactByEmail(brandNewEmail);
  //   expect(brandNewUser).not.toBe(null);
  //   expect(brandNewUser["properties"]["email"]["value"]).toBe(brandNewEmail);
  //   expect(brandNewUser["properties"]["firstname"]["value"]).toBe(brandNewName);
  // });
  //
  // test("can add a user passing a invalid email", async () => {
  //   await expect(
  //     runExport({
  //       oldProfileProperties: {},
  //       newProfileProperties: {
  //         email: invalidEmail,
  //       },
  //       oldGroups: [],
  //       newGroups: [],
  //       toDelete: false,
  //     })
  //   ).rejects.toThrow(/Request failed/);
  // });
});
