import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/pipedrive": { path: path.join(__dirname, "..", "..") },
});
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexUsers } from "../utils/shared";
import { getKnownPersonFieldMap } from "../../src/lib/export/destinationMappingOptions";
import { PipedriveClient } from "../../src/lib/client";

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

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

async function findFilter(name: string) {
  let filters = await client.getAllPersonFilters();
  filters = filters.filter((f) => f.name === name);

  if (filters.length === 0) return null;
  return filters[0];
}

async function cleanUp() {
  // Clear created people
  const ids = [];
  for (let email of [email1, email2, email3, email4, nonexistentEmail]) {
    const id = await client.findPersonIdByEmail(email);
    if (id) {
      await client.deletePerson(id);
    }
  }

  // Clear created group fields
  const fields = await client.getAllPersonFields();
  const testGroupFieldIds = fields
    .filter((f) =>
      [groupOneField, groupTwoField, groupThreeField].includes(f.name)
    )
    .map((f) => f.id);

  if (testGroupFieldIds.length > 0) {
    await client.bulkDeletePersonFields(testGroupFieldIds);
  }

  // Clear created filters
  const filters = await client.getAllPersonFilters();
  const testFilterIds = filters
    .filter((f) =>
      [groupOneField, groupTwoField, groupThreeField].includes(f.name)
    )
    .map((f) => f.id);

  if (testFilterIds.length > 0) {
    await client.bulkDeleteFilters(testFilterIds);
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
    appId,
    connection: null,
    app: null,
    destination: null,
    destinationId: null,
    destinationOptions: null,
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

describe("pipedrive/exportProfile", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    fieldMap = await getKnownPersonFieldMap(
      client,
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
      oldProfileProperties: {},
      newProfileProperties: { Name: "John Doe", Email: email1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const newPersonId = await client.findPersonIdByEmail(email1);
    expect(newPersonId).toBeTruthy();

    personId = newPersonId;
    const data = await client.getPerson(personId);
    expect(data.name).toBe("John Doe");
    expect(data.email[0].value).toBe(email1);
  });

  test("can not create a Person without an email", async () => {
    await expect(
      runExport({
        oldProfileProperties: {},
        newProfileProperties: { Name: "Bill" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Email/);
  });

  test("can not create a Person without a name", async () => {
    await expect(
      runExport({
        oldProfileProperties: {},
        newProfileProperties: { Email: "bill@demo.com" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Name/);
  });

  test("can set Person fields", async () => {
    await runExport({
      oldProfileProperties: { Name: "John Doe", Email: email1 },
      newProfileProperties: {
        Name: "John Doe",
        Email: email1,
        Phone: "1234567890",
        text_field: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const data = await client.getPerson(personId);
    expect(data.name).toBe("John Doe");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email1);
    expect(data.phone).toHaveLength(1);
    expect(data.phone[0].value).toBe("1234567890");
    expect(data[fieldMap.text_field]).toBe("Some text");
  });

  test("can change Person fields and add new ones", async () => {
    await runExport({
      oldProfileProperties: {
        Email: email1,
        Name: "John Doe",
        Phone: "1234567890",
        text_field: "Some text",
      },
      newProfileProperties: {
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

    const data = await client.getPerson(personId);
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
      oldProfileProperties: {
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
      newProfileProperties: { Email: email1, Name: "Johnny Doe" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const data = await client.getPerson(personId);
    expect(data.name).toBe("Johnny Doe");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email1);

    // cleared
    expect(data.phone).toHaveLength(1);
    expect(data.phone[0].value).toBe("");
    expect(data[fieldMap.text_field]).toBe(null);
    expect(data[fieldMap.large_text_field]).toBe(null);
    expect(data[fieldMap.autocomplete_field]).toBe(null);
    expect(data[fieldMap.phone_field]).toBe(null);
    expect(data[fieldMap.numerical_field]).toBe(null);
    expect(data[fieldMap.monetary_field]).toBe(null);
    expect(data[fieldMap.date_field]).toBe(null);
    expect(data[fieldMap.date_range_field]).toBe(null);
  });

  test("can add groups as fields", async () => {
    await runExport({
      oldProfileProperties: { Email: email1, Name: "Johnny Doe" },
      newProfileProperties: { Email: email1, Name: "Johnny Doe" },
      oldGroups: [],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });

    fieldMap = await getKnownPersonFieldMap(
      client,
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

    const data = await client.getPerson(personId);
    expect(data[groupOneKey]).toBeTruthy();
    expect(data[groupTwoKey]).toBeTruthy();
  });

  test("can remove group membership", async () => {
    await runExport({
      oldProfileProperties: { Email: email1, Name: "Johnny Doe" },
      newProfileProperties: { Email: email1, Name: "Johnny Doe" },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne],
      toDelete: false,
    });

    const data = await client.getPerson(personId);
    expect(data[groupOneKey]).toBeTruthy();
    expect(data[groupTwoKey]).toBeFalsy();
  });

  test("can change email", async () => {
    await runExport({
      oldProfileProperties: { Email: email1, Name: "Johnny Doe" },
      newProfileProperties: { Email: email2, Name: "Johnny Doe" },
      oldGroups: [groupOne],
      newGroups: [groupOne],
      toDelete: false,
    });

    const data = await client.getPerson(personId);
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email2);
  });

  test("can remove person from group without creating it", async () => {
    await runExport({
      oldProfileProperties: { Email: email2, Name: "Johnny Doe" },
      newProfileProperties: { Email: email2, Name: "Johnny Doe" },
      oldGroups: [groupOne, groupThree],
      newGroups: [groupOne],
      toDelete: false,
    });

    await indexUsers(newNock);

    fieldMap = await getKnownPersonFieldMap(
      client,
      { appId, appOptions },
      true
    );

    // we shouldn't create the field/filter if we're just deleting
    const groupThreeKey = fieldMap[groupThreeField];
    expect(groupThreeKey).toBeUndefined();

    const groupFilter = await findFilter(groupThreeField);
    expect(groupFilter).toBeNull();
  });

  test("can delete a Person", async () => {
    await runExport({
      oldProfileProperties: {
        Email: email2,
        Name: "Johnny Doe",
      },
      newProfileProperties: {
        Email: email2,
        Name: "Johnny Doe",
      },
      oldGroups: [groupOne],
      newGroups: [groupOne],
      toDelete: true,
    });

    const data = await client.getPerson(personId);
    expect(data.active_flag).toBe(false);
  });

  test("can add a Person passing a nonexistent email on the oldProfileProperties", async () => {
    await runExport({
      oldProfileProperties: { Email: nonexistentEmail, Name: "Bobby" },
      newProfileProperties: { Email: email3, Name: "Bobby" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    personId2 = await client.findPersonIdByEmail(email3);
    expect(personId2).toBeTruthy();

    const data = await client.getPerson(personId2);
    expect(data.name).toBe("Bobby");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email3);
  });

  test("can delete a Person when syncing for the first time", async () => {
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { Email: email3, Name: "Bobby" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const data = await client.getPerson(personId2);
    expect(data.active_flag).toBe(false);
  });

  test("can add a Person with a new group at the same time", async () => {
    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { Email: email4, Name: "Jill" },
      oldGroups: [],
      newGroups: [groupThree],
      toDelete: false,
    });

    await indexUsers(newNock);

    fieldMap = await getKnownPersonFieldMap(
      client,
      { appId, appOptions },
      true
    );

    const groupThreeKey = fieldMap[groupThreeField];
    expect(groupThreeKey).toBeTruthy();

    const groupFilter = await findFilter(groupThreeField);
    expect(groupFilter).toBeTruthy();

    personId3 = await client.findPersonIdByEmail(email4);
    expect(personId3).toBeTruthy();

    const data = await client.getPerson(personId3);
    expect(data.name).toBe("Jill");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email4);
    expect(data[groupThreeKey]).toBeTruthy();
  });

  test("can delete a Person when changing email at the same time", async () => {
    await runExport({
      oldProfileProperties: { Email: email4, Name: "Jill" },
      newProfileProperties: { Email: nonexistentEmail, Name: "Jill" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const data = await client.getPerson(personId3);
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email4); // does not get updated
    expect(data.active_flag).toBe(false);
  });

  test("can delete a nonexistent Person", async () => {
    await runExport({
      oldProfileProperties: { Email: nonexistentEmail, Name: "Nobody" },
      newProfileProperties: { Email: nonexistentEmail, Name: "Nobody" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexUsers(newNock);

    const personId = await client.findPersonIdByEmail(nonexistentEmail);
    expect(personId).toBeNull();
  });
});
