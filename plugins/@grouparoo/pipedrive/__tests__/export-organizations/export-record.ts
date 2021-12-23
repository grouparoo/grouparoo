import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexUsers } from "../utils/shared";
import { PipedriveClient } from "../../src/lib/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { getKnownFieldMap } from "../../src/lib/common/destinationMappingOptions";
import { exportOrganizationRecord } from "../../src/lib/export-organizations/exportRecord";

let client: PipedriveClient;
let fieldMap: { [fieldName: string]: string };

let orgId = null;
let orgId2 = null;
let orgId3 = null;
const name1 = "Organization 1";
const name2 = "Organization 2";
const name3 = "Organization 3";
const name4 = "Organization 4";
const nonexistentName = "Organization X";
const groupOne = "TEST High Value";
const groupTwo = "TEST Spanish";
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
  let filters = await client.organizations.filters.getAll();
  filters = filters.filter((f) => f.name === name);

  if (filters.length === 0) return null;
  return filters[0];
}

async function cleanUp() {
  // Clear created people
  for (let name of [name1, name2, name3, name4, nonexistentName]) {
    const id = await client.findOrganizationIdByName(name);
    if (id) {
      await client.organizations.delete(id);
    }
  }

  // Clear created group fields
  const fields = await client.organizations.fields.getAll();
  const testGroupFieldIds = fields
    .filter((f) =>
      [groupOneField, groupTwoField, groupThreeField].includes(f.name)
    )
    .map((f) => f.id);

  if (testGroupFieldIds.length > 0) {
    await client.organizations.fields.bulkDelete(testGroupFieldIds);
  }

  // Clear created filters
  const filters = await client.organizations.filters.getAll();
  const testFilterIds = filters
    .filter((f) =>
      [groupOneField, groupTwoField, groupThreeField].includes(f.name)
    )
    .map((f) => f.id);

  if (testFilterIds.length > 0) {
    await client.organizations.filters.bulkDelete(testFilterIds);
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
  return exportOrganizationRecord({
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
      "organization",
      { appId, appOptions },
      true
    );
    await cleanUp();
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp();
  }, helper.setupTime);

  test("can create Organization on pipedrive", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Name: name1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const newOrganizationId = await client.findOrganizationIdByName(name1);
    expect(newOrganizationId).toBeTruthy();

    orgId = newOrganizationId;
    const data = await client.organizations.getById(orgId);
    expect(data.name).toBe(name1);
  });

  test("can not create a Organization without an name", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { Address: "anywhere" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Name/);
  });

  test("can not create a Organization if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.enrich.operations,
        oldRecordProperties: {},
        newRecordProperties: { Name: name2 },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create/);
  });

  test("can set Organization fields", async () => {
    await runExport({
      oldRecordProperties: { Name: name1 },
      newRecordProperties: {
        Name: name1,
        text_field: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const data = await client.organizations.getById(orgId);
    expect(data.name).toBe(name1);
    expect(data[fieldMap.text_field]).toBe("Some text");
  });

  test("can not update a Organization if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: true,
          delete: true,
        },
        oldRecordProperties: {
          Name: name1,
          text_field: "Some text",
        },
        newRecordProperties: {
          Name: name1,
          text_field: "Some other text",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    const data = await client.organizations.getById(orgId);
    expect(data[fieldMap.text_field]).toBe("Some text"); // no change
  });

  test("can change Organization fields and add new ones", async () => {
    await runExport({
      oldRecordProperties: {
        Name: name1,
        text_field: "Some text",
      },
      newRecordProperties: {
        Name: name1,
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

    const data = await client.organizations.getById(orgId);
    expect(data.name).toBe(name1);

    // changed
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

  test("can clear Organization fields", async () => {
    await runExport({
      oldRecordProperties: {
        Name: name1,
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
      newRecordProperties: { Name: name1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const data = await client.organizations.getById(orgId);
    expect(data.name).toBe(name1);

    // cleared
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
      oldRecordProperties: { Name: name1 },
      newRecordProperties: { Name: name1 },
      oldGroups: [],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });

    fieldMap = await getKnownFieldMap(
      client,
      "organization",
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

    const data = await client.organizations.getById(orgId);
    expect(data[groupOneKey]).toBeTruthy();
    expect(data[groupTwoKey]).toBeTruthy();
  });

  test("can remove group membership", async () => {
    await runExport({
      oldRecordProperties: { Name: name1 },
      newRecordProperties: { Name: name1 },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne],
      toDelete: false,
    });

    const data = await client.organizations.getById(orgId);
    expect(data[groupOneKey]).toBeTruthy();
    expect(data[groupTwoKey]).toBeFalsy();
  });

  test("can change name", async () => {
    await runExport({
      oldRecordProperties: { Name: name1 },
      newRecordProperties: { Name: name2 },
      oldGroups: [groupOne],
      newGroups: [groupOne],
      toDelete: false,
    });

    await indexUsers(newNock);

    const data = await client.organizations.getById(orgId);
    expect(data.name).toBe(name2);
  });

  test("can remove organization from group without creating it", async () => {
    await runExport({
      oldRecordProperties: { Name: name2 },
      newRecordProperties: { Name: name2 },
      oldGroups: [groupOne, groupThree],
      newGroups: [groupOne],
      toDelete: false,
    });

    await indexUsers(newNock);

    fieldMap = await getKnownFieldMap(
      client,
      "organization",
      { appId, appOptions },
      true
    );

    // we shouldn't create the field/filter if we're just deleting
    const groupThreeKey = fieldMap[groupThreeField];
    expect(groupThreeKey).toBeUndefined();

    const groupFilter = await findFilter(groupThreeField);
    expect(groupFilter).toBeNull();
  });

  test("can add an Organization passing a nonexistent name on the oldRecordProperties", async () => {
    await runExport({
      oldRecordProperties: { Name: nonexistentName },
      newRecordProperties: { Name: name3 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    orgId2 = await client.findOrganizationIdByName(name3);
    expect(orgId2).toBeTruthy();

    const data = await client.organizations.getById(orgId2);
    expect(data.name).toBe(name3);
  });

  test("can update the correct Organization on name change if both names exist", async () => {
    await runExport({
      oldRecordProperties: { Name: name3 },
      newRecordProperties: { Name: name2 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    // Leave the old one untouched
    let data = await client.organizations.getById(orgId2);
    expect(data.name).toBe(name3);

    // Update the new one
    data = await client.organizations.getById(orgId);
    expect(data.name).toBe(name2);
  });

  test("cannot delete an Organization if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          delete: false,
          update: true,
        },
        oldRecordProperties: {
          Name: name2,
        },
        newRecordProperties: {
          Name: name2,
        },
        oldGroups: [groupOne],
        newGroups: [groupOne],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);

    // no effect
    const data = await client.organizations.getById(orgId);
    expect(data[groupOneKey]).toBeTruthy();
    expect(data.name).toBe(name2);
  });

  test("can delete an Organization", async () => {
    await runExport({
      oldRecordProperties: {
        Name: name2,
      },
      newRecordProperties: {
        Name: name2,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const data = await client.organizations.getById(orgId);
    expect(data.active_flag).toBe(false);
  });

  test("can delete an Organization when syncing for the address", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Name: name3, Address: "Address 3" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const data = await client.organizations.getById(orgId2);
    expect(data.active_flag).toBe(false);
  });

  test("can add an Organization with a new group at the same time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Name: name4 },
      oldGroups: [],
      newGroups: [groupThree],
      toDelete: false,
    });

    await indexUsers(newNock);

    fieldMap = await getKnownFieldMap(
      client,
      "organization",
      { appId, appOptions },
      true
    );

    const groupThreeKey = fieldMap[groupThreeField];
    expect(groupThreeKey).toBeTruthy();

    const groupFilter = await findFilter(groupThreeField);
    expect(groupFilter).toBeTruthy();

    orgId3 = await client.findOrganizationIdByName(name4);
    expect(orgId3).toBeTruthy();

    const data = await client.organizations.getById(orgId3);
    expect(data.name).toBe(name4);
    expect(data[groupThreeKey]).toBeTruthy();
  });

  test("can delete the correct Organization on name change if both names exist", async () => {
    // create someone
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Name: name1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const newOrgId = await client.findOrganizationIdByName(name1);
    expect(newOrgId).toBeTruthy();

    // delete them
    await runExport({
      oldRecordProperties: { Name: name4 },
      newRecordProperties: { Name: name1 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    // email1 is deleted
    let data = await client.organizations.getById(newOrgId);
    expect(data.name).toBe(name1);
    expect(data.active_flag).toBe(false);

    // email4 is untouched
    data = await client.organizations.getById(orgId3);
    expect(data.name).toBe(name4);
  });

  test("can delete an Organization when changing name at the same time", async () => {
    await runExport({
      oldRecordProperties: { Name: name4 },
      newRecordProperties: { Name: nonexistentName },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const data = await client.organizations.getById(orgId3);
    expect(data.name).toBe(name4); // does not get updated
    expect(data.active_flag).toBe(false);
  });

  test("can delete a nonexistent Organization", async () => {
    await runExport({
      oldRecordProperties: { Name: nonexistentName },
      newRecordProperties: { Name: nonexistentName },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexUsers(newNock);

    const orgId = await client.findOrganizationIdByName(nonexistentName);
    expect(orgId).toBeNull();
  });
});
