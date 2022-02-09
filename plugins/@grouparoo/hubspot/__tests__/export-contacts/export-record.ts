import { helper } from "@grouparoo/spec-helper";
import { exportRecord } from "../../src/lib/export-contacts/exportRecord";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { HubspotClient } from "../../src/lib/client/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const appId = "app_ds789a789gdf789jh.m678rt90-90-3k";

let apiClient: HubspotClient;
let user: any;
const companyKey = "domain";
const company1 = { name: "bossa", domain: "bossa.grouparoo.com" };
const company2 = { name: "samba", domain: "samba.grouparoo.com" };
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

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

async function getListId(listName): Promise<any> {
  const allLists = await apiClient.getLists();
  const matchingList = allLists.filter((list) => list.name === listName)[0];
  if (matchingList) {
    return matchingList["listId"];
  }
  return null;
}

async function deleteUsers(suppressErrors: boolean) {
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

async function createCompanies() {
  const payload = [{ properties: company1 }, { properties: company2 }];
  await apiClient.objects.create("COMPANY", payload);
}

async function deleteCompanies(suppressErrors: boolean) {
  try {
    const payload = [company1.domain, company2.domain];
    const companies = await apiClient.objects.searchObjects(
      "COMPANY",
      "domain",
      payload
    );
    if (companies.length > 0) {
      await apiClient.objects.delete(
        "COMPANY",
        companies.map((company) => company.id.toString())
      );
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

async function deleteLists(suppressErrors: boolean) {
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

async function cleanUp(suppressErrors: boolean) {
  await deleteUsers(suppressErrors);
  await deleteLists(suppressErrors);
  await deleteCompanies(suppressErrors);
}

async function runExport({
  syncOperations = DestinationSyncModeData.sync.operations,
  destinationOptions = null,
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
    destinationOptions,
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

describe("hubspot/exportRecord", () => {
  beforeAll(async () => {
    apiClient = await connect(appOptions);
    await cleanUp(false);
    await createCompanies();
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp(true);
  }, helper.setupTime);

  test("cannot create record on Hubspot if sync mode does not allow it", async () => {
    user = await apiClient.getContactByEmail(email);
    expect(user).toBe(null);

    await expect(
      runExport({
        syncOperations: { create: false, update: true, delete: true },
        oldRecordProperties: {},
        newRecordProperties: { email, firstname: firstName },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow creating/);
  });

  test("can create record on Hubspot", async () => {
    user = await apiClient.getContactByEmail(email);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        email,
        firstname: firstName,
      },
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
      oldRecordProperties: { email, firstname: firstName },
      newRecordProperties: {
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

  test("can associate a user to a company", async () => {
    user = await apiClient.getContactByEmail(email);
    let association = await apiClient.objects.getAssociation(user.vid);
    expect(association.map((id) => id.toString())).toEqual([]); //7319167530

    await runExport({
      destinationOptions: { companyKey },
      oldRecordProperties: {
        email,
        firstname: firstName,
        lastname: lastName,
        mobilephone: phoneNumber,
      },
      newRecordProperties: {
        email,
        firstname: firstName,
        lastname: lastName,
        mobilephone: phoneNumber,
        "Company.domain": company1.domain,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    user = await apiClient.getContactByEmail(email);
    expect(user["properties"]["email"]["value"]).toBe(email);
    expect(user["properties"]["firstname"]["value"]).toBe(firstName);
    expect(user["properties"]["lastname"]["value"]).toBe(lastName);
    expect(user["properties"]["mobilephone"]["value"]).toBe(phoneNumber);

    const company = (
      await apiClient.objects.searchObjects("COMPANY", companyKey, [
        company1.domain,
      ])
    )[0];
    expect(company["properties"]["domain"]).toBe(company1.domain);
    association = await apiClient.objects.getAssociation(user.vid);
    expect(association.map((id) => id.toString())).toEqual(
      expect.arrayContaining([company.id])
    ); //7319167530
  });

  test("can change associated company", async () => {
    user = await apiClient.getContactByEmail(email);
    let company = (
      await apiClient.objects.searchObjects("COMPANY", companyKey, [
        company1.domain,
      ])
    )[0];
    expect(company["properties"]["domain"]).toBe(company1.domain);
    let association = await apiClient.objects.getAssociation(user.vid);
    expect(association.length).toBe(1);
    expect(association.map((id) => id.toString())).toEqual(
      expect.arrayContaining([company.id])
    );

    await runExport({
      destinationOptions: { companyKey },
      oldRecordProperties: {
        email,
        firstname: firstName,
        lastname: lastName,
        mobilephone: phoneNumber,
        "Company.domain": company1.domain,
      },
      newRecordProperties: {
        email,
        firstname: firstName,
        lastname: lastName,
        mobilephone: phoneNumber,
        "Company.domain": company2.domain,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });
    user = await apiClient.getContactByEmail(email);
    expect(user["properties"]["email"]["value"]).toBe(email);
    expect(user["properties"]["firstname"]["value"]).toBe(firstName);
    expect(user["properties"]["lastname"]["value"]).toBe(lastName);
    expect(user["properties"]["mobilephone"]["value"]).toBe(phoneNumber);

    company = (
      await apiClient.objects.searchObjects("COMPANY", companyKey, [
        company2.domain,
      ])
    )[0];
    expect(company["properties"]["domain"]).toBe(company2.domain);
    association = await apiClient.objects.getAssociation(user.vid);
    expect(association.length).toBe(1);
    expect(association.map((id) => id.toString())).toEqual(
      expect.arrayContaining([company.id])
    );
  });

  test("cannot update existing record if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: false, delete: true },
        oldRecordProperties: {
          email,
          firstname: firstName,
          lastname: lastName,
          mobilephone: phoneNumber,
        },
        newRecordProperties: {
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
      oldRecordProperties: {
        email,
        firstname: firstName,
        lastname: lastName,
        mobilephone: phoneNumber,
      },
      newRecordProperties: {
        email,
        firstname: alternativeName,
        lastname: alternativeLastName,
        mobilephone: newPhoneNumber,
        message,
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
        oldRecordProperties: {
          email,
          closedate: dateField,
        },
        newRecordProperties: {
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
      oldRecordProperties: {
        email,
        firstname: alternativeName,
        lastname: alternativeLastName,
        mobilephone: phoneNumber,
        text_field: textField,
        date_field: dateField,
        number_field: numberField,
      },
      newRecordProperties: {
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
        oldRecordProperties: {
          email,
        },
        newRecordProperties: {
          email: alternativeEmail,
        },
        oldGroups: [listOne, listTwo, listThree],
        newGroups: [listOne, listTwo, listThree],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not allow creating/);

    const oldUser = await apiClient.getContactByEmail(email);
    expect(oldUser).not.toBe(null);
    expect(oldUser["properties"]["email"]["value"]).toBe(email);
    expect(oldUser["list-memberships"]).toHaveLength(3);

    const newUser = await apiClient.getContactByEmail(alternativeEmail);
    expect(newUser).toBe(null);
  });

  test("it can change the email address", async () => {
    await runExport({
      oldRecordProperties: {
        email,
      },
      newRecordProperties: {
        email: alternativeEmail,
      },
      oldGroups: [listOne, listTwo, listThree],
      newGroups: [listOne, listTwo, listThree],
      toDelete: false,
    });

    const user = await apiClient.getContactByEmail(email);
    expect(user).toBe(null);

    const newUser = await apiClient.getContactByEmail(alternativeEmail);
    expect(newUser).not.toBe(null);
    expect(newUser["properties"]["email"]["value"]).toBe(alternativeEmail);

    const listOneId = await getListId(listOne);
    const listTwoId = await getListId(listTwo);
    const listThreeId = await getListId(listThree);

    expect(listOneId).not.toBe(null);
    expect(listTwoId).not.toBe(null);
    expect(listThreeId).not.toBe(null);

    expect(newUser["list-memberships"].length).toBe(3);
    expect(newUser["list-memberships"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ "internal-list-id": listOneId }),
        expect.objectContaining({ "internal-list-id": listTwoId }),
        expect.objectContaining({ "internal-list-id": listThreeId }),
      ])
    );
  });

  test("it can change the email address and orphan the old user if sync mode is not deleting", async () => {
    // hubspot requires deleting the old user on FK change
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

    // old user still there
    const oldUser = await apiClient.getContactByEmail(alternativeEmail);
    expect(oldUser).not.toBe(null);
    expect(oldUser["properties"]["email"]["value"]).toBe(alternativeEmail);
    expect(oldUser["list-memberships"]).toHaveLength(0); // but has been removed from lists

    // new user created
    const newUser = await apiClient.getContactByEmail(email);
    expect(newUser).not.toBe(null);
    expect(newUser["properties"]["email"]["value"]).toBe(email);
    expect(newUser["list-memberships"]).toHaveLength(3);
  });

  test("it can change the email address along other properties", async () => {
    await runExport({
      oldRecordProperties: {
        email,
        firstname: alternativeName,
        mobilephone: newPhoneNumber,
      },
      newRecordProperties: {
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

    const oldUser = await apiClient.getContactByEmail(email);
    expect(oldUser).toBe(null);
  });

  test("cannot delete a user if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: { create: true, update: true, delete: false },
        oldRecordProperties: {
          email: otherEmail,
        },
        newRecordProperties: {
          email: otherEmail,
        },
        oldGroups: [listOne],
        newGroups: [listOne],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not allow removing/);

    // no changes to the record
    const user = await apiClient.getContactByEmail(otherEmail);
    expect(user["properties"]["email"]["value"]).toBe(otherEmail);
    expect(user["properties"]["firstname"]["value"]).toBe(otherName);
    expect(user["properties"]["mobilephone"]["value"]).toBe(otherPhoneNumber);
    expect(user["list-memberships"]).toHaveLength(1);
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
    const user = await apiClient.getContactByEmail(otherEmail);
    expect(user).toBe(null);
  });

  test("can try to delete a user that does not exist.", async () => {
    let user = await apiClient.getContactByEmail(otherEmail);
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

    user = await apiClient.getContactByEmail(otherEmail);
    expect(user).toBe(null);
  });

  test("can add a user and add this user to a list at the same time.", async () => {
    let user = await apiClient.getContactByEmail(newEmail);
    expect(user).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
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

  test("can add a user passing a nonexistent email on the oldRecordProperties", async () => {
    let brandNewUser = await apiClient.getContactByEmail(brandNewEmail);
    expect(brandNewUser).toBe(null);
    const nonexistentUser = await apiClient.getContactByEmail(nonexistentEmail);
    expect(nonexistentUser).toBe(null);

    await runExport({
      oldRecordProperties: { email: nonexistentEmail },
      newRecordProperties: {
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
        oldRecordProperties: {},
        newRecordProperties: {
          email: invalidEmail,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Request failed/);
  });
});
