import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexUsers } from "../utils/shared";
import { PipedriveClient } from "../../src/lib/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { getKnownFieldMap } from "../../src/lib/common/destinationMappingOptions";
import { exportPersonRecord } from "../../src/lib/export-persons/exportRecord";

let client: PipedriveClient;
let fieldMap: { [fieldName: string]: string };

let personId = null;
let personId2 = null;
let personId3 = null;
const email1 = "grouparoo@demo.com";
const email2 = "othergrouparoo@demo.com";
const email3 = "notgrouparoo@demo.com";
const email4 = "maybegrouparoo@demo.com";
const nonexistentEmail = "fakegrouparoo@demo.com";
const groupOne = "TEST High Value";
const groupTwo = "TEST Spanish Speaking";
const groupThree = "TEST Recently Added";
const groupOneField = `In Group: ${groupOne}`;
const groupTwoField = `In Group: ${groupTwo}`;
const groupThreeField = `In Group: ${groupThree}`;
let groupOneKey = null;
let groupTwoKey = null;

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

async function findFilter(name: string) {
  let filters = await client.persons.filters.getAll();
  filters = filters.filter((f) => f.name === name);

  if (filters.length === 0) return null;
  return filters[0];
}

async function cleanUp() {
  // Clear created people
  for (let email of [email1, email2, email3, email4, nonexistentEmail]) {
    const id = await client.findPersonIdByEmail(email);
    if (id) {
      await client.persons.delete(id);
    }
  }

  // Clear created group fields
  const fields = await client.persons.fields.getAll();
  const testGroupFieldIds = fields
    .filter((f) =>
      [groupOneField, groupTwoField, groupThreeField].includes(f.name)
    )
    .map((f) => f.id);

  if (testGroupFieldIds.length > 0) {
    await client.persons.fields.bulkDelete(testGroupFieldIds);
  }

  // Clear created filters
  const filters = await client.persons.filters.getAll();
  const testFilterIds = filters
    .filter((f) =>
      [groupOneField, groupTwoField, groupThreeField].includes(f.name)
    )
    .map((f) => f.id);

  if (testFilterIds.length > 0) {
    await client.persons.filters.bulkDelete(testFilterIds);
  }
}

async function runExport({
  syncOperations = DestinationSyncModeData.sync.operations,
  oldRecordProperties,
  newRecordProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportPersonRecord({
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

describe("pipedrive/exportRecord", () => {
  beforeAll(async () => {
    client = await connect(appId, appOptions);
    fieldMap = await getKnownFieldMap(
      client,
      "person",
      { appId, appOptions },
      true
    );
    await cleanUp();
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp();
  }, helper.setupTime);

  test("can create Person on pipedrive", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Name: "John Doe", Email: email1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const newPersonId = await client.findPersonIdByEmail(email1);
    expect(newPersonId).toBeTruthy();

    personId = newPersonId;
    const data = await client.persons.getById(personId);
    expect(data.name).toBe("John Doe");
    expect(data.email[0].value).toBe(email1);
  });

  test("can not create a Person without an email", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { Name: "Bill" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Email/);
  });

  test("can not create a Person without a name", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { Email: "bill@demo.com" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Name/);
  });

  test("can not create a Person if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.enrich.operations,
        oldRecordProperties: {},
        newRecordProperties: { Name: "Jimmy Doe", Email: email2 },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create/);
  });

  test("can set Person fields", async () => {
    await runExport({
      oldRecordProperties: { Name: "John Doe", Email: email1 },
      newRecordProperties: {
        Name: "John Doe",
        Email: email1,
        Phone: "1234567890",
        text_field: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const data = await client.persons.getById(personId);
    expect(data.name).toBe("John Doe");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email1);
    expect(data.phone).toHaveLength(1);
    expect(data.phone[0].value).toBe("1234567890");
    expect(data[fieldMap.text_field]).toBe("Some text");
  });

  test("can not update a Person if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: true,
          delete: true,
        },
        oldRecordProperties: {
          Name: "John Doe",
          Email: email1,
          Phone: "1234567890",
          text_field: "Some text",
        },
        newRecordProperties: {
          Name: "John Doe",
          Email: email1,
          Phone: "1234567890",
          text_field: "Some other text",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    const data = await client.persons.getById(personId);
    expect(data[fieldMap.text_field]).toBe("Some text"); // no change
  });

  test("can change Person fields and add new ones", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email1,
        Name: "John Doe",
        Phone: "1234567890",
        text_field: "Some text",
      },
      newRecordProperties: {
        Email: email1,
        Name: "Johnny Doe",
        Phone: "9876543210",
        text_field: "Some other text",
        large_text_field: "Lots of text",
        autocomplete_field: "Text that autocompletes",
        phone_field: "1234567890",
        numerical_field: 10.32,
        monetary_field: 1025.21,
        date_field: new Date(1598766588 * 1000),
        date_range_field: new Date(1598766588 * 1000),
        address_field: "Cupertino, California, United States",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const data = await client.persons.getById(personId);
    expect(data.name).toBe("Johnny Doe");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email1);

    // changed
    expect(data.phone).toHaveLength(1);
    expect(data.phone[0].value).toBe("9876543210");
    expect(data[fieldMap.text_field]).toBe("Some other text");

    // new
    expect(data[fieldMap.large_text_field]).toBe("Lots of text");
    expect(data[fieldMap.autocomplete_field]).toBe("Text that autocompletes");
    expect(data[fieldMap.phone_field]).toBe("1234567890");
    expect(data[fieldMap.numerical_field]).toBe(10.32);
    expect(data[fieldMap.monetary_field]).toBe(1025.21);
    expect(data[fieldMap.date_field]).toBe("2020-08-30");
    expect(data[fieldMap.date_range_field]).toBe("2020-08-30");
    expect(data[fieldMap.address_field]).toBe(
      "Cupertino, California, United States"
    );
  });

  test("can clear Person fields", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email1,
        Name: "Johnny Doe",
        Phone: "9876543210",
        text_field: "Some other text",
        large_text_field: "Lots of text",
        autocomplete_field: "Text that autocompletes",
        phone_field: "1234567890",
        numerical_field: 10.32,
        monetary_field: 1025.21,
        date_field: new Date(1598766588 * 1000),
        date_range_field: new Date(1598766588 * 1000),
        address_field: "Cupertino, California, United States",
      },
      newRecordProperties: { Email: email1, Name: "Johnny Doe" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const data = await client.persons.getById(personId);
    expect(data.name).toBe("Johnny Doe");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email1);

    // cleared
    expect(data.phone).toHaveLength(1);
    expect(data.phone[0].value).toBe("");
    expect(data[fieldMap.text_field]).toBe(""); // TODO: check why this is empty string not null
    expect(data[fieldMap.large_text_field]).toBe(null);
    expect(data[fieldMap.autocomplete_field]).toBe(""); // TODO: check why this is empty string not null
    expect(data[fieldMap.phone_field]).toBe(null);
    expect(data[fieldMap.numerical_field]).toBe(null);
    expect(data[fieldMap.monetary_field]).toBe(null);
    expect(data[fieldMap.date_field]).toBe(null);
    expect(data[fieldMap.date_range_field]).toBe(null);
  });

  test("can add groups as fields", async () => {
    await runExport({
      oldRecordProperties: { Email: email1, Name: "Johnny Doe" },
      newRecordProperties: { Email: email1, Name: "Johnny Doe" },
      oldGroups: [],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });

    fieldMap = await getKnownFieldMap(
      client,
      "person",
      { appId, appOptions },
      true
    );
    groupOneKey = fieldMap[groupOneField];
    expect(groupOneKey).toBeTruthy();

    const filterOne = await findFilter(groupOneField);
    expect(filterOne).toBeTruthy();

    groupTwoKey = fieldMap[groupTwoField];
    expect(groupTwoKey).toBeTruthy();

    const filterTwo = await findFilter(groupTwoField);
    expect(filterTwo).toBeTruthy();

    const data = await client.persons.getById(personId);
    expect(data[groupOneKey]).toBeTruthy();
    expect(data[groupTwoKey]).toBeTruthy();
  });

  test("can remove group membership", async () => {
    await runExport({
      oldRecordProperties: { Email: email1, Name: "Johnny Doe" },
      newRecordProperties: { Email: email1, Name: "Johnny Doe" },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne],
      toDelete: false,
    });

    const data = await client.persons.getById(personId);
    expect(data[groupOneKey]).toBeTruthy();
    expect(data[groupTwoKey]).toBeFalsy();
  });

  test("can change email", async () => {
    await runExport({
      oldRecordProperties: { Email: email1, Name: "Johnny Doe" },
      newRecordProperties: { Email: email2, Name: "Johnny Doe" },
      oldGroups: [groupOne],
      newGroups: [groupOne],
      toDelete: false,
    });

    await indexUsers(newNock);

    const data = await client.persons.getById(personId);
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email2);
  });

  test("can remove person from group without creating it", async () => {
    await runExport({
      oldRecordProperties: { Email: email2, Name: "Johnny Doe" },
      newRecordProperties: { Email: email2, Name: "Johnny Doe" },
      oldGroups: [groupOne, groupThree],
      newGroups: [groupOne],
      toDelete: false,
    });

    await indexUsers(newNock);

    fieldMap = await getKnownFieldMap(
      client,
      "person",
      { appId, appOptions },
      true
    );

    // we shouldn't create the field/filter if we're just deleting
    const groupThreeKey = fieldMap[groupThreeField];
    expect(groupThreeKey).toBeUndefined();

    const groupFilter = await findFilter(groupThreeField);
    expect(groupFilter).toBeNull();
  });

  test("can add a Person passing a nonexistent email on the oldRecordProperties", async () => {
    await runExport({
      oldRecordProperties: { Email: nonexistentEmail, Name: "Bobby" },
      newRecordProperties: { Email: email3, Name: "Bobby" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    personId2 = await client.findPersonIdByEmail(email3);
    expect(personId2).toBeTruthy();

    const data = await client.persons.getById(personId2);
    expect(data.name).toBe("Bobby");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email3);
  });

  test("can update the correct Person on email change if both emails exist", async () => {
    await runExport({
      oldRecordProperties: { Email: email3, Name: "Bobby" },
      newRecordProperties: { Email: email2, Name: "Bobby Jones" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    // Leave the old one untouched
    let data = await client.persons.getById(personId2);
    expect(data.name).toBe("Bobby");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email3);

    // Update the new one
    data = await client.persons.getById(personId);
    expect(data.name).toBe("Bobby Jones");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email2);
  });

  test("cannot delete a Person if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          delete: false,
          update: true,
        },
        oldRecordProperties: {
          Email: email2,
          Name: "Bobby Jones",
        },
        newRecordProperties: {
          Email: email2,
          Name: "Bobby Jones",
        },
        oldGroups: [groupOne],
        newGroups: [groupOne],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);

    // no effect
    const data = await client.persons.getById(personId);
    expect(data[groupOneKey]).toBeTruthy();
    expect(data.name).toBe("Bobby Jones");
  });

  test("can delete a Person", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email2,
        Name: "Bobby Jones",
      },
      newRecordProperties: {
        Email: email2,
        Name: "Bobby Jones",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const data = await client.persons.getById(personId);
    expect(data.active_flag).toBe(false);
  });

  test("can delete a Person when syncing for the first time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Email: email3, Name: "Bobby" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const data = await client.persons.getById(personId2);
    expect(data.active_flag).toBe(false);
  });

  test("can add a Person with a new group at the same time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Email: email4, Name: "Jill" },
      oldGroups: [],
      newGroups: [groupThree],
      toDelete: false,
    });

    await indexUsers(newNock);

    fieldMap = await getKnownFieldMap(
      client,
      "person",
      { appId, appOptions },
      true
    );

    const groupThreeKey = fieldMap[groupThreeField];
    expect(groupThreeKey).toBeTruthy();

    const groupFilter = await findFilter(groupThreeField);
    expect(groupFilter).toBeTruthy();

    personId3 = await client.findPersonIdByEmail(email4);
    expect(personId3).toBeTruthy();

    const data = await client.persons.getById(personId3);
    expect(data.name).toBe("Jill");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email4);
    expect(data[groupThreeKey]).toBeTruthy();
  });

  test("can delete the correct Person on email change if both emails exist", async () => {
    // create someone
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Name: "John Doe", Email: email1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const newPersonId = await client.findPersonIdByEmail(email1);
    expect(newPersonId).toBeTruthy();

    // delete them
    await runExport({
      oldRecordProperties: { Email: email4, Name: "Mike Doe" },
      newRecordProperties: { Email: email1, Name: "Mike Doe" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    // email1 is deleted
    let data = await client.persons.getById(newPersonId);
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email1);
    expect(data.active_flag).toBe(false);

    // email4 is untouched
    data = await client.persons.getById(personId3);
    expect(data.name).toBe("Jill");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email4);
  });

  test("can delete a Person when changing email at the same time", async () => {
    await runExport({
      oldRecordProperties: { Email: email4, Name: "Jill" },
      newRecordProperties: { Email: nonexistentEmail, Name: "Jill" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const data = await client.persons.getById(personId3);
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email4); // does not get updated
    expect(data.active_flag).toBe(false);
  });

  test("can delete a nonexistent Person", async () => {
    await runExport({
      oldRecordProperties: { Email: nonexistentEmail, Name: "Nobody" },
      newRecordProperties: { Email: nonexistentEmail, Name: "Nobody" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexUsers(newNock);

    const personId = await client.findPersonIdByEmail(nonexistentEmail);
    expect(personId).toBeNull();
  });
});
