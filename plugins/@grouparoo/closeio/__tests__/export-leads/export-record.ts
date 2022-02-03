import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { CloseioClient } from "../../src/lib/client";
import { DestinationSyncModeData } from "@grouparoo/core/src/models/Destination";
import { exportLeadRecord } from "../../src/lib/export-leads/exportRecord";
import { getAllFields } from "../../src/lib/common/destinationMappingOptions";
import { customFields } from "../utils/shared";

let client: CloseioClient;

const name1 = "Test Lead 1";
const name2 = "Test Lead 2";
const name3 = "Test Lead 3";
const nameX = "Test Lead X";

const group1 = "TEST High Value";
const group2 = "TEST Spanish";
const group3 = "TEST Recently Added";
const groupX = "TEST Should Never Exist";

const group1Field = `In Group: ${group1}`;
const group2Field = `In Group: ${group2}`;
const group3Field = `In Group: ${group3}`;
const groupXField = `In Group: ${groupX}`;

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

async function cleanUp() {
  for (const name in [name1, name2, name3, nameX]) {
    const id = await client.findLeadIdByName(name);
    if (id) {
      await client.closeio.lead.delete(id);
    }
  }

  const fields = await client.closeio._get(`/custom_field/lead/`);
  const fieldNames = [
    group1Field,
    group2Field,
    group3Field,
    groupXField,
    ...customFields.map((field) => field.name),
  ];
  for (const field of fields.data) {
    if (fieldNames.includes(field.name)) {
      await client.closeio._delete(`/custom_field/lead/${field.id}/`);
    }
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
  return exportLeadRecord({
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

beforeAll(async () => {
  client = await connect(appOptions);
  await cleanUp();

  for (const customField of customFields) {
    try {
      await client.closeio._post(`/custom_field/lead/`, customField);
    } catch (e) {}
  }
});

afterAll(async () => {
  await cleanUp();
});

describe("Close.io / Leads / exportRecord / Regarding PK field and required fields", () => {
  test("Can create a record including all required fields", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Name: name1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const lead = await client.findLeadByName(name1);
    expect(lead).toBeTruthy();
  });

  test("Can't create a record without one of the required fields", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { Description: "Some text for description" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Name/);
  });

  test("Can't update a record without one of the required fields", async () => {
    await expect(
      runExport({
        oldRecordProperties: { Name: name1 },
        newRecordProperties: { Description: "Some text for description" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Name/);
  });

  test("Can change the value of the PK field", async () => {
    await runExport({
      oldRecordProperties: { Name: name1 },
      newRecordProperties: { Name: name2 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const lead1 = await client.findLeadByName(name1);
    expect(lead1).toBeFalsy();

    const lead2 = await client.findLeadByName(name2);
    expect(lead2).toBeTruthy();
  });
});

describe("Close.io / Leads / exportRecord / Sync modes", () => {
  test("Can't create a record if sync mode doesn't allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: false,
          update: true,
          delete: true,
        },
        oldRecordProperties: {},
        newRecordProperties: { Name: name3 },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create/);
  });

  test("Can't update a record if sync mode doesn't allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          update: false,
          delete: true,
        },
        oldRecordProperties: { Name: name2 },
        newRecordProperties: { Name: name3 },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);
  });

  test("Can't delete a record if sync mode doesn't allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          update: true,
          delete: false,
        },
        oldRecordProperties: { Name: name2 },
        newRecordProperties: { Name: name2 },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);
  });
});

describe("Close.io / Leads / exportRecord / PK conflicts handling", () => {
  test("Can create a record with passing nonexistent PK field value in the oldRecordProperties", async () => {
    await runExport({
      oldRecordProperties: { Name: nameX },
      newRecordProperties: {
        Name: name1,
        Description: "Some description for lead 1",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const leadX = await client.findLeadByName(nameX);
    expect(leadX).toBeFalsy();

    const lead1 = await client.findLeadByName(name1);
    expect(lead1).toBeTruthy();
    expect(lead1.description).toBe("Some description for lead 1");
  });

  test("Can update the correct record on PK field value change if both values exist", async () => {
    await runExport({
      oldRecordProperties: { Name: name1 },
      newRecordProperties: {
        Name: name2,
        Description: "Some description for lead 2",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const lead1 = await client.findLeadByName(name1);
    const lead2 = await client.findLeadByName(name2);

    expect(lead1).toBeTruthy();
    expect(lead1.name).toBe(name1);
    expect(lead1.description).toBe("Some description for lead 1");

    expect(lead2).toBeTruthy();
    expect(lead2.name).toBe(name2);
    expect(lead2.description).toBe("Some description for lead 2");
  });

  test("Can delete the correct record if both PK field values exist", async () => {
    await runExport({
      oldRecordProperties: { Name: name1 },
      newRecordProperties: { Name: name2 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const lead1 = await client.findLeadByName(name1);
    const lead2 = await client.findLeadByName(name2);

    expect(lead1).toBeTruthy();
    expect(lead1.name).toBe(name1);
    expect(lead1.description).toBe("Some description for lead 1");

    expect(lead2).toBeFalsy();
  });
});

describe("Close.io / Leads / exportRecord / Field values", () => {
  test("Can update a record and change field values and set values for other non-required fields", async () => {
    await runExport({
      oldRecordProperties: { Name: name1 },
      newRecordProperties: {
        Name: name1,
        URL: "http://example.grouparoo.com/",
        Description: "Description Value",

        "Address Label": "business",
        "Address Line 1": "747 Howard St",
        "Address Line 2": "Room 3",
        City: "San Francisco",
        State: "CA",
        "Zip Code": "94103",
        Country: "US",

        test_text: "Test Text Value",
        test_hidden: "Test Hidden Value",
        test_numeric: 12.456,
        test_date: new Date(1234567890000),
        test_date_time: new Date(1234567890000),
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const lead1 = await client.findLeadByName(name1);
    expect(lead1).toBeTruthy();

    expect(lead1.name).toBe(name1);
    expect(lead1.url).toBe("http://example.grouparoo.com/");
    expect(lead1.description).toBe("Description Value");

    expect(lead1.addresses?.length).toBe(1);
    expect(lead1.addresses[0].label).toBe("business");
    expect(lead1.addresses[0].address_1).toBe("747 Howard St");
    expect(lead1.addresses[0].address_2).toBe("Room 3");
    expect(lead1.addresses[0].city).toBe("San Francisco");
    expect(lead1.addresses[0].state).toBe("CA");
    expect(lead1.addresses[0].zipcode).toBe("94103");
    expect(lead1.addresses[0].country).toBe("US");

    expect(lead1.custom?.test_text).toBe("Test Text Value");
    expect(lead1.custom?.test_hidden).toBe("Test Hidden Value");
    expect(lead1.custom?.test_numeric).toBe(12.456);
    expect(lead1.custom?.test_date).toBe("2009-02-13");
    expect(lead1.custom?.test_date_time).toBe("2009-02-13T23:31:30+00:00");
  });

  test("Can update a record and reset/clear old values (which set on the previous test)", async () => {
    await runExport({
      oldRecordProperties: {
        Name: name1,
        URL: "http://example.grouparoo.com/",
        Description: "Description Value",

        "Address Label": "business",
        "Address Line 1": "747 Howard St",
        "Address Line 2": "Room 3",
        City: "San Francisco",
        State: "CA",
        "Zip Code": "94103",
        Country: "US",

        test_text: "Test Text Value",
        test_hidden: "Test Hidden Value",
        test_numeric: 12.456,
        test_date: new Date(1234567890000),
        test_date_time: new Date(1234567890000),
      },
      newRecordProperties: { Name: name1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const lead1 = await client.findLeadByName(name1);
    expect(lead1).toBeTruthy();

    expect(lead1.name).toBe(name1);
    expect(lead1.url).toBeNull();
    expect(lead1.description).toBe("");

    expect(lead1.addresses?.length).toBe(0);

    expect(lead1.custom?.test_text).toBeUndefined();
    expect(lead1.custom?.test_hidden).toBeUndefined();
    expect(lead1.custom?.test_numeric).toBeUndefined();
    expect(lead1.custom?.test_date).toBeUndefined();
    expect(lead1.custom?.test_date_time).toBeUndefined();
  });
});

describe("Close.io / Leads / exportRecord / Group functionality", () => {
  test("Can assign a record to a group", async () => {
    await runExport({
      oldRecordProperties: { Name: name1 },
      newRecordProperties: { Name: name1 },
      oldGroups: [],
      newGroups: [group1, group2],
      toDelete: false,
    });

    const lead1 = await client.findLeadByName(name1);
    expect(lead1).toBeTruthy();

    expect(lead1.custom).toBeTruthy();
    expect(lead1.custom[group1Field]).toBe("true");
    expect(lead1.custom[group2Field]).toBe("true");
  });

  test("Can remove a group membership from a record and assign it to a new group on the same request", async () => {
    await runExport({
      oldRecordProperties: { Name: name1 },
      newRecordProperties: { Name: name1 },
      oldGroups: [group1, group2],
      newGroups: [group1, group3],
      toDelete: false,
    });

    const lead1 = await client.findLeadByName(name1);
    expect(lead1).toBeTruthy();

    expect(lead1.custom).toBeTruthy();
    expect(lead1.custom[group1Field]).toBe("true");
    expect(lead1.custom[group2Field]).toBeUndefined();
    expect(lead1.custom[group3Field]).toBe("true");
  });

  test("Can add a new record with a new group at the same time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Name: name2 },
      oldGroups: [],
      newGroups: [group2, group3],
      toDelete: false,
    });

    const lead2 = await client.findLeadByName(name2);
    expect(lead2).toBeTruthy();

    expect(lead2.custom).toBeTruthy();
    expect(lead2.custom[group2Field]).toBe("true");
    expect(lead2.custom[group3Field]).toBe("true");
  });

  test("Can remove a record from a nonexistent group without creating it", async () => {
    await runExport({
      oldRecordProperties: { Name: name3 },
      newRecordProperties: { Name: name3 },
      oldGroups: [group2, groupX],
      newGroups: [group1, group2],
      toDelete: false,
    });

    const lead3 = await client.findLeadByName(name3);
    expect(lead3).toBeTruthy();

    expect(lead3.custom).toBeTruthy();
    expect(lead3.custom[group1Field]).toBe("true");
    expect(lead3.custom[group2Field]).toBe("true");

    const fields = await getAllFields(
      client,
      "lead",
      { appId, appOptions },
      false
    );

    const groupXItem = fields.find((field) => field.key === groupXField);
    expect(groupXItem).toBeFalsy();
  });
});

describe("Close.io / Leads / exportRecord / Deleting records", () => {
  test("Can delete a record", async () => {
    await runExport({
      oldRecordProperties: { Name: name1 },
      newRecordProperties: { Name: name1 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const lead1 = await client.findLeadByName(name1);
    expect(lead1).toBeFalsy();
  });

  test("Can delete a record while changing field values", async () => {
    await runExport({
      oldRecordProperties: { Name: name2 },
      newRecordProperties: { Name: name2, Description: "New Description" },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const lead2 = await client.findLeadByName(name2);
    expect(lead2).toBeFalsy();
  });

  test("Can delete a record while changing PK field value", async () => {
    await runExport({
      oldRecordProperties: { Name: name3 },
      newRecordProperties: { Name: nameX },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const leadX = await client.findLeadByName(nameX);
    expect(leadX).toBeFalsy();
  });

  test("Can delete a nonexistent record", async () => {
    await runExport({
      oldRecordProperties: { Name: nameX },
      newRecordProperties: { Name: nameX },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const leadX = await client.findLeadByName(nameX);
    expect(leadX).toBeFalsy();
  });
});
