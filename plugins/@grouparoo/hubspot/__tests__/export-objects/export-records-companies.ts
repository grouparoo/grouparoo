import { helper } from "@grouparoo/spec-helper";
import { exportBatch } from "../../src/lib/export-objects/exportRecords";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { connect } from "../../src/lib/connect";
import { HubspotClient } from "../../src/lib/client/client";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const destinationOptions = {
  schemaId: "COMPANY",
  primaryKey: "domain",
};
const hugeTime = helper.longTime * 6;

let client: HubspotClient;

const domain1 = "grouparoo.demo.com";
const id1 = "pro1";
const newDomain1 = "notgrouparoo.demo.com";
let user1 = null;

const domain2 = "grouparoo2.demo.com";
const id2 = "pro2";
let user2 = null;

const domain3 = "grouparoo3.demo.com";
const id3 = "pro3";
let user3 = null;

const properties = [
  "name",
  "website",
  "twitterhandle",
  "facebookfans",
  "date_field",
];

async function deleteCompanies(domains: string[], suppressErrors) {
  const { schemaId } = destinationOptions;
  const records = await getRecordsByForeignKeys(domains);
  try {
    const batches: string[][] = [];
    let i = 0;
    const ids = records.map((record) => record.id);
    while (i < ids.length) {
      batches.push(ids.slice(i, (i += 10)));
    }
    for (const batch of batches) {
      await client.objects.delete(schemaId, batch);
    }
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}

function generateLongRecords(count: number): Record<string, any>[] {
  const records = [];
  for (let i = 0; i < count; i++) {
    records.push({
      domain: `user${i}.demo.com`,
      name: `Fist Name ${i}`,
      website: `www.${i}.com`,
    });
  }

  return records;
}

function makeExports(records: Record<string, any>[]) {
  return records.map((record, i) => ({
    recordId: `pro${i}`,
    oldRecordProperties: {},
    newRecordProperties: record,
    toDelete: false,
    record: null,
  }));
}

async function cleanUp(suppressErrors: boolean) {
  const emails = [domain1, domain2, domain3, newDomain1];
  await deleteCompanies(emails, suppressErrors);
  await helper.waitUntil(newNock, async function () {
    const { schemaId, primaryKey } = destinationOptions;
    const records = await client.objects.searchObjects(
      schemaId as string,
      primaryKey,
      emails
    );
    return records.length === 0;
  });
}

function getRecord(records: any[], foreignKeyValue: string) {
  const { primaryKey } = destinationOptions;
  const filtered = records.filter(
    (record) => record["properties"][primaryKey] === foreignKeyValue
  );
  return filtered.length > 0 ? filtered[0] : null;
}

async function getRecordByForeignKey(key) {
  const { schemaId, primaryKey } = destinationOptions;
  const records = await client.objects.searchObjects(
    schemaId as string,
    primaryKey as string,
    [key],
    properties
  );

  if (records.length > 0 && records[0].properties[primaryKey] === key) {
    return records[0];
  }
  return null;
}

async function getRecordsByForeignKeys(keys) {
  const { schemaId, primaryKey } = destinationOptions;
  const groups: string[][] = [];
  let i = 0;
  while (i < keys.length) {
    groups.push(keys.slice(i, (i += 5)));
  }
  const records = [];
  for (const group of groups) {
    records.push(
      ...(await client.objects.searchObjects(
        schemaId as string,
        primaryKey as string,
        group,
        properties
      ))
    );
  }
  return records;
}

describe("hubspot/exportRecords", () => {
  beforeAll(async () => {
    client = await connect(appOptions);
    await cleanUp(false);
  }, hugeTime);

  afterAll(async () => {
    await cleanUp(true);
  }, hugeTime);

  test("will not create record if sync mode does not allow it", async () => {
    user1 = await getRecordByForeignKey(domain1);
    expect(user1).toBe(null);

    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: DestinationSyncModeData.enrich.operations,
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {},
          newRecordProperties: {
            domain: domain1,
            name: "John",
          },
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not creating");
    expect(error.errorLevel).toEqual("info");

    user1 = await getRecordByForeignKey(domain1);
    expect(user1).toBe(null);
  });

  test(
    "can create record",
    async () => {
      user1 = await getRecordByForeignKey(domain1);
      expect(user1).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {},
            newRecordProperties: {
              domain: domain1,
              name: "John",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user1 = await getRecordByForeignKey(domain1);
        return user1 !== null;
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      user1 = await getRecordByForeignKey(domain1);
      expect(user1).not.toBe(null);
      expect(user1["properties"]["domain"]).toBe(domain1);
      expect(user1["properties"]["name"]).toBe("John");
    },
    hugeTime
  );

  test("will not change user variables if sync mode does not allow it", async () => {
    const { success, errors } = await exportBatch({
      appOptions,
      destinationOptions,
      syncOperations: { create: true, update: false, delete: true },
      exports: [
        {
          recordId: id1,
          oldRecordProperties: {
            domain: domain1,
            name: "John",
          },
          newRecordProperties: {
            domain: domain1,
            name: "Brian", // updated!
            website: "www.doe.com", // added!
          },
          toDelete: false,
          record: null,
        },
      ],
    });

    expect(errors).not.toBeNull();
    expect(success).toBe(false);
    expect(errors.length).toEqual(1);
    const error = errors[0];
    expect(error.recordId).toEqual(id1);
    expect(error.message).toContain("not updating");
    expect(error.errorLevel).toEqual("info");

    user1 = await getRecordByForeignKey(domain1);
    expect(user1).not.toBeNull();
    expect(user1["properties"]["domain"]).toBe(domain1);
    expect(user1["properties"]["name"]).toBe("John"); // not updated!
    expect(user1["properties"]["website"]).toBe(domain1); // not updated! This is automatically changed to the domain.
  });

  test(
    "can add/edit user variables and do multiple users",
    async () => {
      user2 = await getRecordByForeignKey(domain2);
      expect(user2).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              domain: domain1,
              name: "John",
            },
            newRecordProperties: {
              domain: domain1,
              name: "John",
              website: "www.doe.com",
              facebookfans: "3039",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {},
            newRecordProperties: {
              domain: domain2,
              name: "Pete",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const users = await getRecordsByForeignKeys([domain1, domain2]);
        user1 = getRecord(users, domain1);
        user2 = getRecord(users, domain2);
        return (
          user1 &&
          user1["properties"]["website"] === "www.doe.com" &&
          user2 &&
          user2["properties"]["name"] === "Pete"
        );
      });

      user1 = await getRecordByForeignKey(domain1);
      expect(user1).not.toBe(null);
      expect(user1["properties"]["domain"]).toBe(domain1);
      expect(user1["properties"]["name"]).toBe("John");
      expect(user1["properties"]["website"]).toBe("www.doe.com");
      expect(user1["properties"]["facebookfans"]).toBe("3039");

      user2 = await getRecordByForeignKey(domain2);
      expect(user2).not.toBe(null);
      expect(user2["properties"]["domain"]).toBe(domain2);
      expect(user2["properties"]["name"]).toBe("Pete");
    },
    hugeTime
  );

  test(
    "can clear user variables",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              domain: domain1,
              name: "John",
              website: "www.doe.com",
              facebookfans: "3039",
            },
            newRecordProperties: {
              domain: domain1,
              name: "John",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        user1 = await getRecordByForeignKey(domain1);

        return user1["properties"]["website"] === "";
      });

      user1 = await getRecordByForeignKey(domain1);
      expect(user1["properties"]["domain"]).toBe(domain1);
      expect(user1["properties"]["name"]).toBe("John");
      expect(user1["properties"]["website"]).toBe("");
      expect(user1["properties"]["facebookfans"]).toBe("");
    },
    hugeTime
  );

  test(
    "can change the email address",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              domain: domain1,
              name: "John",
            },
            newRecordProperties: {
              domain: newDomain1,
              name: "John",
              website: "www.test.com",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              domain: domain2,
              name: "Sally",
            },
            newRecordProperties: {
              domain: domain2,
              name: "Evan",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const oldUser = await getRecordByForeignKey(domain1);
        user1 = await getRecordByForeignKey(newDomain1);
        user2 = await getRecordByForeignKey(domain2);

        return (
          user1 &&
          user1["properties"]["website"] === "www.test.com" &&
          user2 &&
          user2["properties"]["name"] === "Evan" &&
          oldUser === null
        );
      });

      const users = await getRecordsByForeignKeys([
        newDomain1,
        domain1,
        domain2,
      ]);
      const oldUser = getRecord(users, domain1);
      expect(oldUser).toBeNull();

      user1 = getRecord(users, newDomain1);
      expect(user1).not.toBeNull();
      expect(user1["properties"]["domain"]).toBe(newDomain1);
      expect(user1["properties"]["name"]).toBe("John");
      expect(user1["properties"]["website"]).toBe("www.test.com");

      user2 = getRecord(users, domain2);
      expect(user2).not.toBeNull();
      expect(user2["properties"]["domain"]).toBe(domain2);
      expect(user2["properties"]["name"]).toBe("Evan");
    },
    hugeTime
  );

  test(
    "will not delete users if sync mode does not allow it, but will remove groups",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.additive.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              domain: newDomain1,
              name: "John",
              website: "www.test.com",
            },
            newRecordProperties: {
              domain: newDomain1,
              name: "John",
              website: "www.test2.com", // changed here
            },
            toDelete: true,
            record: null,
          },
        ],
      });

      expect(errors).not.toBeNull();
      expect(success).toBe(false);

      expect(errors.length).toEqual(1);
      const error = errors[0];
      expect(error.recordId).toEqual(id1);
      expect(error.message).toContain("not deleting");
      expect(error.errorLevel).toEqual("info");

      user1 = await getRecordByForeignKey(newDomain1);
      expect(user1["properties"]["domain"]).toBe(newDomain1);
      expect(user1["properties"]["name"]).toBe("John");
      expect(user1["properties"]["website"]).toBe("www.test.com"); // no changes
    },
    hugeTime
  );

  test(
    "can delete a user",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              domain: newDomain1,
              name: "John",
              website: "www.test.com",
            },
            newRecordProperties: {
              domain: domain1,
              name: "John",
              website: "www.test.com",
              twitterhandle: "back",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              domain: domain2,
              name: "Evan",
            },
            newRecordProperties: {
              domain: domain2,
              name: "Evan",
            },
            toDelete: true,
            record: null,
          },
        ],
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      await helper.waitUntil(newNock, async function () {
        const oldUser = await getRecordByForeignKey(newDomain1);
        user1 = user1 = await getRecordByForeignKey(domain1);
        user2 = await getRecordByForeignKey(domain2);
        return (
          user1 &&
          user1["properties"]["twitterhandle"] === "back" &&
          user2 === null &&
          oldUser === null
        );
      });

      const oldUser = await getRecordByForeignKey(newDomain1);
      expect(oldUser).toBeNull();

      user1 = await getRecordByForeignKey(domain1);
      expect(user1["properties"]["domain"]).toBe(domain1);
      expect(user1["properties"]["name"]).toBe("John");
      expect(user1["properties"]["website"]).toBe("www.test.com");
      expect(user1["properties"]["twitterhandle"]).toBe("back");

      user2 = await getRecordByForeignKey(domain2);
      expect(user2).toBeNull();
    },
    hugeTime
  );

  test(
    "can add back a user and many types",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {},
            newRecordProperties: {
              domain: domain2,
              name: "Evan",
              twitterhandle: "text is also here",
              facebookfans: "5",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user2 = await getRecordByForeignKey(domain2);
        return user2 !== null;
      });

      user2 = await getRecordByForeignKey(domain2);
      expect(user2["properties"]["domain"]).toBe(domain2);
      expect(user2["properties"]["name"]).toBe("Evan");
      expect(user2["properties"]["twitterhandle"]).toBe("text is also here");
      expect(user2["properties"]["facebookfans"]).toBe("5");
    },
    hugeTime
  );

  test(
    "can set all those fields to empty string",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {
              domain: domain2,
              name: "Evan",
              twitterhandle: "text is also here",
              facebookfans: "5",
            },
            newRecordProperties: {
              domain: domain2,
              name: "Maria",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      await helper.waitUntil(newNock, async function () {
        user2 = await getRecordByForeignKey(domain2);
        return user2 && user2["properties"]["name"] === "Maria";
      });

      user2 = await getRecordByForeignKey(domain2);
      expect(user2["properties"]["domain"]).toBe(domain2);
      expect(user2["properties"]["name"]).toBe("Maria");
      expect(user2["properties"]["twitterhandle"]).toBe("");
      expect(user2["properties"]["facebookfans"]).toBe("");
    },
    hugeTime
  );

  test(
    "can handle required field error (email)",
    async () => {
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id2,
            oldRecordProperties: {
              domain: domain2,
              name: "Maria",
            },
            newRecordProperties: {
              name: "Maria",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: "newId",
            oldRecordProperties: {},
            newRecordProperties: {
              name: "Ron",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(false);
      expect(errors).not.toBeNull();
      expect(errors.length).toEqual(2);

      const error = errors[0];
      expect(error.recordId).toEqual(id2);
      expect(error.message).toContain("required");

      const error2 = errors[1];
      expect(error2.recordId).toEqual("newId");
      expect(error2.message).toContain("required");

      user2 = await getRecordByForeignKey(domain2);
      expect(user2["properties"]["domain"]).toBe(domain2);
      expect(user2["properties"]["name"]).toBe("Maria");
      expect(user2["properties"]["twitterhandle"]).toBe("");
      expect(user2["properties"]["facebookfans"]).toBe("");
    },
    hugeTime
  );

  test(
    "can handle some of them working, but not others",
    async () => {
      user3 = await getRecordByForeignKey(domain3);
      expect(user3).toBe(null);

      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports: [
          {
            recordId: id1,
            oldRecordProperties: {
              domain: domain1,
              name: "John",
              website: "www.test.com",
            },
            newRecordProperties: {
              domain: domain1,
              name: "Sam",
              website: "www.test.com",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: id2,
            oldRecordProperties: {
              domain: domain2,
              name: "Maria",
            },
            newRecordProperties: {
              name: "William",
            },
            toDelete: false,
            record: null,
          },
          {
            recordId: id3,
            oldRecordProperties: {},
            newRecordProperties: {
              domain: domain3,
              name: "Liz",
              twitterhandle: "some text",
            },
            toDelete: false,
            record: null,
          },
        ],
      });

      expect(success).toBe(false);
      expect(errors).not.toBeNull();
      expect(errors.length).toEqual(1);
      const error = errors[0];
      expect(error.recordId).toEqual(id2);
      expect(error.message).toContain("required");

      await helper.waitUntil(newNock, async function () {
        user1 = await getRecordByForeignKey(domain1);
        user2 = await getRecordByForeignKey(domain2);
        user3 = await getRecordByForeignKey(domain3);
        return (
          user1 &&
          user1["properties"]["name"] === "Sam" &&
          user2 &&
          user2["properties"]["name"] === "Maria" &&
          user3 &&
          user3["properties"]["name"] === "Liz"
        );
      });

      user1 = await getRecordByForeignKey(domain1);
      expect(user1["properties"]["domain"]).toBe(domain1);
      expect(user1["properties"]["name"]).toBe("Sam"); // updated
      expect(user1["properties"]["website"]).toEqual("www.test.com");

      user2 = await getRecordByForeignKey(domain2);
      expect(user2["properties"]["domain"]).toBe(domain2);
      expect(user2["properties"]["name"]).toBe("Maria"); // not updated

      user3 = await getRecordByForeignKey(domain3);
      expect(user3["properties"]["domain"]).toBe(domain3);
      expect(user3["properties"]["name"]).toBe("Liz");
      expect(user3["properties"]["twitterhandle"]).toEqual("some text");
    },
    hugeTime
  );

  test(
    "can handle batches with lots of records",
    async () => {
      // generate records
      const records = generateLongRecords(50);

      // run batch export
      const exports = makeExports(records);
      const { success, errors } = await exportBatch({
        appOptions,
        destinationOptions,
        syncOperations: DestinationSyncModeData.sync.operations,
        exports,
      });

      expect(success).toBe(true);
      expect(errors).toBeNull();

      const distinctIds = records.map((p) => p["domain"]);

      let exportedRecords = [];
      await helper.waitUntil(newNock, async function () {
        exportedRecords = await getRecordsByForeignKeys(distinctIds);
        return exportedRecords.length === distinctIds.length;
      });

      // verify all were created properly
      for (const record of records) {
        const user = getRecord(exportedRecords, record["domain"]);
        expect(user["properties"]["domain"]).toBe(record["domain"]);
        expect(user["properties"]["name"]).toBe(record["name"]);
        expect(user["properties"]["website"]).toBe(record["website"]);
      }

      // cleanup
      await deleteCompanies(distinctIds, false);
    },
    hugeTime
  );
});
