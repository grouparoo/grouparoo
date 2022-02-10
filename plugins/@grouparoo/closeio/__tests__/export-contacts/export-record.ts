import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { CloseioClient } from "../../src/lib/client";
import { DestinationSyncModeData } from "@grouparoo/core/src/models/Destination";
import { exportContactRecord } from "../../src/lib/export-contacts/exportRecord";
import { customFields, indexUsers } from "../utils/shared";
import { getAllFields } from "../../src/lib/common/destinationMappingOptions";
import { getCloseioCustomFieldKey } from "../../src/lib/common/destinationMappingOptions";

let client: CloseioClient;

const email1 = "test-contact1@grouparoo.com";
const email2 = "test-contact2@grouparoo.com";
const email3 = "test-contact3@grouparoo.com";
const emailX = "test-contactX@grouparoo.com";

const lead1 = "Test Contact Lead 1";
const lead2 = "Test Contact Lead 2";
const lead3 = "Test Contact Lead 3";

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
  for (const email of [email1, email2, email3, emailX]) {
    const id = await client.findContactIdByEmail(email);
    if (id) {
      await client.closeio.contact.delete(id);
    }
  }

  for (const leadName of [lead1, lead2, lead3]) {
    const id = await client.findLeadIdByName(leadName);
    if (id) {
      await client.closeio.lead.delete(id);
    }
  }

  const fields = await client.closeio._get(`/custom_field/contact/`);
  const fieldNames = [
    group1Field,
    group2Field,
    group3Field,
    groupXField,
    ...customFields.map((field) => field.name),
  ];
  for (const field of fields.data) {
    if (fieldNames.includes(field.name)) {
      await client.closeio._delete(`/custom_field/contact/${field.id}/`);
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
  return exportContactRecord({
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
      await client.closeio._post(`/custom_field/contact/`, customField);
    } catch (e) {}
  }
});

afterAll(async () => {
  await cleanUp();
});

describe("Close.io / Contacts / exportRecord / Regarding PK field and required fields", () => {
  test("Can create a record including all required fields", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Email: email1, Lead: lead1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const contact1 = await client.findContactByEmail(email1);
    expect(contact1).toBeTruthy();
  });

  test("Can't create a record without one of the required fields (Email)", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { Lead: lead1 },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Email/);
  });

  test("Can't create a record without one of the required fields (Lead)", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { Email: email1 },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Lead/);
  });

  test("Can't update a record without one of the required fields (Email)", async () => {
    await expect(
      runExport({
        oldRecordProperties: { Email: email1, Lead: lead1 },
        newRecordProperties: { Lead: lead1, Name: "Test contact" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Email/);
  });

  test("Can't update a record without one of the required fields (Lead)", async () => {
    await expect(
      runExport({
        oldRecordProperties: { Email: email1, Lead: lead1 },
        newRecordProperties: { Email: email1, Name: "Test contact" },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Lead/);
  });

  test("Can change the value of the PK field", async () => {
    await runExport({
      oldRecordProperties: { Email: email1, Lead: lead1 },
      newRecordProperties: { Email: email2, Lead: lead1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const contact1 = await client.findContactByEmail(email1);
    expect(contact1).toBeFalsy();

    const contact2 = await client.findContactByEmail(email2);
    expect(contact2).toBeTruthy();
  });

  test("[SPECIAL CASE] Can't change the value of lead field", async () => {
    await expect(
      runExport({
        oldRecordProperties: { Email: email2, Lead: lead1 },
        newRecordProperties: { Email: email2, Lead: lead2 },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/Can not change the lead/);
  });

  test("[SPECIAL CASE] Can create a contact for created lead without creating another one", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Email: email1, Lead: lead1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const contact1 = await client.findContactByEmail(email1);
    const contact2 = await client.findContactByEmail(email2);

    expect(contact1.lead_id).toBe(contact2.lead_id);
  });
});

describe("Close.io / Contacts / exportRecord / Sync modes", () => {
  test("Can't create a record if sync mode doesn't allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: false,
          update: true,
          delete: true,
        },
        oldRecordProperties: {},
        newRecordProperties: { Email: email3, Lead: lead3 },
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
        oldRecordProperties: { Email: email2, Lead: lead1 },
        newRecordProperties: { Email: email3, Lead: lead1 },
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
        oldRecordProperties: { Email: email2, Lead: lead2 },
        newRecordProperties: { Email: email2, Lead: lead2 },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);
  });
});

describe("Close.io / Contacts / exportRecord / PK conflicts handling", () => {
  test("Can create a record with passing nonexistent PK field value in the oldRecordProperties", async () => {
    await runExport({
      oldRecordProperties: { Name: emailX, Lead: lead3 },
      newRecordProperties: {
        Email: email3,
        Lead: lead3,
        Title: "Title form contact 3",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const contactX = await client.findContactByEmail(emailX);
    expect(contactX).toBeFalsy();

    const contact3 = await client.findContactByEmail(email3);
    expect(contact3).toBeTruthy();
    expect(contact3.title).toBe("Title form contact 3");

    const lead = await client.findLeadByName(lead3);
    expect(lead.id).toBe(contact3.lead_id);
  });

  test("Can update the correct record on PK field value change if both values exist", async () => {
    await runExport({
      oldRecordProperties: { Email: email3, Lead: lead3 },
      newRecordProperties: {
        Email: email2,
        Lead: lead1,
        Title: "Title form contact 2",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const contact3 = await client.findContactByEmail(email3);
    const contact2 = await client.findContactByEmail(email2);

    expect(contact3).toBeTruthy();
    expect(contact3.emails?.length).toBe(1);
    expect(contact3.emails[0].email).toBe(email3);
    expect(contact3.title).toBe("Title form contact 3");

    expect(contact2).toBeTruthy();
    expect(contact2.emails?.length).toBe(1);
    expect(contact2.emails[0].email).toBe(email2);
    expect(contact2.title).toBe("Title form contact 2");
  });

  test("Can delete the correct record if both PK field values exist", async () => {
    await runExport({
      oldRecordProperties: { Email: email2, Lead: lead1 },
      newRecordProperties: { Email: email3, Lead: lead3 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const contact2 = await client.findContactByEmail(email2);
    const contact3 = await client.findContactByEmail(email3);

    expect(contact2).toBeTruthy();
    expect(contact2.emails?.length).toBe(1);
    expect(contact2.emails[0].email).toBe(email2);
    expect(contact2.title).toBe("Title form contact 2");

    expect(contact3).toBeFalsy();
  });
});

describe("Close.io / Contacts / exportRecord / Field values", () => {
  test("Can update a record and change field values and set values for other non-required fields", async () => {
    await runExport({
      oldRecordProperties: { Name: email1, Lead: lead1 },
      newRecordProperties: {
        Email: email1,
        Lead: lead1,
        URL: "http://example.grouparoo.com/",
        Title: "Title Value",
        Name: "Name value",
        Phone: "+201234567891",

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

    await indexUsers(newNock);

    const contact1 = await client.findContactByEmail(email1);
    expect(contact1).toBeTruthy();

    expect(contact1.name).toBe("Name value");
    expect(contact1.title).toBe("Title Value");

    expect(contact1.emails?.length).toBe(1);
    expect(contact1.emails[0].email).toBe(email1);

    expect(contact1.urls?.length).toBe(1);
    expect(contact1.urls[0].url).toBe("http://example.grouparoo.com/");

    expect(contact1.phones?.length).toBe(1);
    expect(contact1.phones[0].phone).toBe("+201234567891");

    const fields = await getAllFields(
      client,
      "contact",
      { appId, appOptions },
      true
    );

    const test_text_key = getCloseioCustomFieldKey(fields, "test_text");
    expect(contact1[test_text_key]).toBe("Test Text Value");

    const test_hidden_key = getCloseioCustomFieldKey(fields, "test_hidden");
    expect(contact1[test_hidden_key]).toBe("Test Hidden Value");

    const test_numeric_key = getCloseioCustomFieldKey(fields, "test_numeric");
    expect(contact1[test_numeric_key]).toBe(12.456);

    const test_date_key = getCloseioCustomFieldKey(fields, "test_date");
    expect(contact1[test_date_key]).toBe("2009-02-13");

    const test_date_time_key = getCloseioCustomFieldKey(
      fields,
      "test_date_time"
    );
    expect(contact1[test_date_time_key]).toBe("2009-02-13T23:31:30+00:00");
  });

  test("Can update a record and reset/clear old values (which set on the previous test)", async () => {
    await runExport({
      oldRecordProperties: {
        Email: email1,
        Lead: lead1,
        URL: "http://example.grouparoo.com/",
        Title: "Title Value",
        Name: "Name value",
        Phone: "+201234567891",

        test_text: "Test Text Value",
        test_hidden: "Test Hidden Value",
        test_numeric: 12.456,
        test_date: new Date(1234567890000),
        test_date_time: new Date(1234567890000),
      },
      newRecordProperties: { Email: email1, Lead: lead1 },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexUsers(newNock);

    const contact1 = await client.findContactByEmail(email1);
    expect(contact1).toBeTruthy();

    expect(contact1.name).toBe("");
    expect(contact1.title).toBe("");

    expect(contact1.emails?.length).toBe(1);
    expect(contact1.emails[0].email).toBe(email1);

    expect(contact1.urls?.length).toBe(0);
    expect(contact1.phones?.length).toBe(0);

    const fields = await getAllFields(
      client,
      "contact",
      { appId, appOptions },
      true
    );

    const test_text_key = getCloseioCustomFieldKey(fields, "test_text");
    expect(contact1[test_text_key]).toBeUndefined();

    const test_hidden_key = getCloseioCustomFieldKey(fields, "test_hidden");
    expect(contact1[test_hidden_key]).toBeUndefined();

    const test_numeric_key = getCloseioCustomFieldKey(fields, "test_numeric");
    expect(contact1[test_numeric_key]).toBeUndefined();

    const test_date_key = getCloseioCustomFieldKey(fields, "test_date");
    expect(contact1[test_date_key]).toBeUndefined();

    const test_date_time_key = getCloseioCustomFieldKey(
      fields,
      "test_date_time"
    );
    expect(contact1[test_date_time_key]).toBeUndefined();
  });
});

describe("Close.io / Contacts / exportRecord / Group functionality", () => {
  test("Can assign a record to a group", async () => {
    await runExport({
      oldRecordProperties: { Email: email1, Lead: lead1 },
      newRecordProperties: { Email: email1, Lead: lead1 },
      oldGroups: [],
      newGroups: [group1, group2],
      toDelete: false,
    });

    await indexUsers(newNock);

    const contact1 = await client.findContactByEmail(email1);
    expect(contact1).toBeTruthy();

    const fields = await getAllFields(
      client,
      "contact",
      { appId, appOptions },
      true
    );

    const group1FieldKey = getCloseioCustomFieldKey(fields, group1Field);
    expect(group1FieldKey).toBeTruthy();
    expect(contact1[group1FieldKey]).toBe("true");

    const group2FieldKey = getCloseioCustomFieldKey(fields, group2Field);
    expect(group2FieldKey).toBeTruthy();
    expect(contact1[group2FieldKey]).toBe("true");
  });

  test("Can remove a group membership from a record and assign it to a new group on the same request", async () => {
    await runExport({
      oldRecordProperties: { Email: email1, Lead: lead1 },
      newRecordProperties: { Email: email1, Lead: lead1 },
      oldGroups: [group1, group2],
      newGroups: [group1, group3],
      toDelete: false,
    });

    await indexUsers(newNock);

    const contact1 = await client.findContactByEmail(email1);
    expect(contact1).toBeTruthy();

    const fields = await getAllFields(
      client,
      "contact",
      { appId, appOptions },
      true
    );

    const group1FieldKey = getCloseioCustomFieldKey(fields, group1Field);
    expect(group1FieldKey).toBeTruthy();
    expect(contact1[group1FieldKey]).toBe("true");

    const group2FieldKey = getCloseioCustomFieldKey(fields, group2Field);
    expect(group2FieldKey).toBeTruthy();
    expect(contact1[group2FieldKey]).toBeUndefined();

    const group3FieldKey = getCloseioCustomFieldKey(fields, group3Field);
    expect(group3FieldKey).toBeTruthy();
    expect(contact1[group3FieldKey]).toBe("true");
  });

  test("Can add a new record with a new group at the same time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { Email: email3, Lead: lead3 },
      oldGroups: [],
      newGroups: [group2, group3],
      toDelete: false,
    });

    await indexUsers(newNock);

    const contact3 = await client.findContactByEmail(email3);
    expect(contact3).toBeTruthy();

    const fields = await getAllFields(
      client,
      "contact",
      { appId, appOptions },
      true
    );

    const group2FieldKey = getCloseioCustomFieldKey(fields, group2Field);
    expect(group2FieldKey).toBeTruthy();
    expect(contact3[group2FieldKey]).toBe("true");

    const group3FieldKey = getCloseioCustomFieldKey(fields, group3Field);
    expect(group3FieldKey).toBeTruthy();
    expect(contact3[group3FieldKey]).toBe("true");
  });

  test("Can remove a record from a nonexistent group without creating it", async () => {
    await runExport({
      oldRecordProperties: { Email: email3, Lead: lead3 },
      newRecordProperties: { Email: email3, Lead: lead3 },
      oldGroups: [group2, groupX],
      newGroups: [group1, group2],
      toDelete: false,
    });

    await indexUsers(newNock);

    const contact3 = await client.findContactByEmail(email3);
    expect(contact3).toBeTruthy();

    const fields = await getAllFields(
      client,
      "contact",
      { appId, appOptions },
      true
    );

    const group1FieldKey = getCloseioCustomFieldKey(fields, group1Field);
    expect(group1FieldKey).toBeTruthy();
    expect(contact3[group1FieldKey]).toBe("true");

    const group2FieldKey = getCloseioCustomFieldKey(fields, group2Field);
    expect(group2FieldKey).toBeTruthy();
    expect(contact3[group2FieldKey]).toBe("true");

    const groupXFieldKey = getCloseioCustomFieldKey(fields, groupXField);
    expect(groupXFieldKey).toBeFalsy();
  });
});

describe("Close.io / Contacts / exportRecord / Deleting records", () => {
  test("Can delete a record", async () => {
    await runExport({
      oldRecordProperties: { Email: email1, Lead: lead1 },
      newRecordProperties: { Email: email1, Lead: lead1 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexUsers(newNock);

    const contact1 = await client.findContactByEmail(email1);
    expect(contact1).toBeFalsy();
  });

  test("Can delete a record while changing field values", async () => {
    await runExport({
      oldRecordProperties: { Email: email2, Lead: lead1 },
      newRecordProperties: {
        Email: email2,
        Lead: lead1,
        Title: "New Title",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexUsers(newNock);

    const contact2 = await client.findContactByEmail(email2);
    expect(contact2).toBeFalsy();
  });

  test("Can delete a record while changing PK field value", async () => {
    await runExport({
      oldRecordProperties: { Email: email3, Lead: lead3 },
      newRecordProperties: { Email: emailX, Lead: lead3 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexUsers(newNock);

    const contactX = await client.findContactByEmail(emailX);
    expect(contactX).toBeFalsy();
  });

  test("Can delete a nonexistent record", async () => {
    await runExport({
      oldRecordProperties: { Email: emailX, Lead: lead1 },
      newRecordProperties: { Email: emailX, Lead: lead1 },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexUsers(newNock);

    const contactX = await client.findContactByEmail(emailX);
    expect(contactX).toBeFalsy();
  });
});
