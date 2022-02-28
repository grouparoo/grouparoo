import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { exportContactRecord } from "../../src/lib/export-contacts/exportRecord";
import { FreshdeskClient } from "../../src/lib/client";
import { waitForDeletion, waitForIndexingCompany } from "../utils/shared";

let client: FreshdeskClient;

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

async function runExport({
  syncOperations = DestinationSyncModeData.sync.operations,
  oldRecordProperties,
  newRecordProperties,
  oldGroups,
  newGroups,
  toDelete,
  primaryKey,
}) {
  return exportContactRecord({
    appOptions,
    appId,
    connection: client,
    app: null,
    destination: null,
    destinationId: null,
    destinationOptions: {
      primaryKey,
    },
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

const testContacts = [];

for (let i = 100; i < 200; i++) {
  const longIndex = i.toString().padStart(4, "0");
  testContacts.push({
    name: `Contact ${i}`,
    email: `contact.${i}@grouparoo.com`,
    mobile: `77777${longIndex}`,
    phone: `88888${longIndex}`,
    externalId: `1${longIndex}`,
  });
}

const testCompanies = [];

for (let i = 0; i < 10; i++) {
  testCompanies.push(`Test Company ${i}`);
}

async function cleanUpContacts() {
  const foundContacts = await client.getAllContacts();
  const deleteIds = new Set<number>();

  for (const contact of testContacts) {
    const byEmail = foundContacts.find((c) => c.email === contact.email);
    if (byEmail) {
      deleteIds.add(byEmail.id);
    }

    const byMobile = foundContacts.find((c) => c.mobile === contact.mobile);
    if (byMobile) {
      deleteIds.add(byMobile.id);
    }

    const byPhone = foundContacts.find((c) => c.phone === contact.phone);
    if (byPhone) {
      deleteIds.add(byPhone.id);
    }

    const byExternalId = foundContacts.find(
      (c) => c.unique_external_id === contact.externalId
    );
    if (byExternalId) {
      deleteIds.add(byExternalId.id);
    }
  }

  for (const deleteId of deleteIds.values()) {
    try {
      await client.forceDeleteContact(deleteId);
    } catch (e) {
      // Maybe already deleted from somewhere else.
    }
  }
}

async function cleanUpCompanies() {
  const foundCompanies = await client.getAllCompanies();
  const deleteIds = new Set<number>();

  for (const companyName of testCompanies) {
    const found = foundCompanies.find((c) => c.name === companyName);
    if (found) {
      deleteIds.add(found.id);
    }
  }

  for (const deleteId of deleteIds.values()) {
    try {
      await client.deleteCompany(deleteId);
    } catch (e) {
      // Maybe already deleted from somewhere else.
    }
  }
}

async function cleanUp() {
  await cleanUpContacts();
  await cleanUpCompanies();
}

beforeAll(async () => {
  console.time("All tests");
  client = await connect({ appOptions } as any);
  await cleanUp();
  await waitForDeletion(newNock);
}, helper.setupTime);

afterAll(async () => {
  await cleanUp();
  console.timeEnd("All tests");
}, helper.setupTime);

beforeEach(() => {
  console.log("Start:", expect.getState().currentTestName);
  console.time(expect.getState().currentTestName);
});

afterEach(async () => {
  console.timeEnd(expect.getState().currentTestName);
});

describe("Freshdesk / Contacts / Export Record / Basic functionality", () => {
  // Uses contacts 1 & 2

  test("Can create a record on Freshdesk", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testContacts[1].name,
        Email: testContacts[1].email,
        Mobile: testContacts[1].mobile,
        Phone: testContacts[1].phone,
        "External ID": testContacts[1].externalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    const contact = await client.getContactBy("email", testContacts[1].email);
    expect(contact).toBeTruthy();
    expect(contact.name).toBe(testContacts[1].name);
    expect(contact.email).toBe(testContacts[1].email);
    expect(contact.mobile).toBe(testContacts[1].mobile);
    expect(contact.phone).toBe(testContacts[1].phone);
    expect(contact.unique_external_id).toBe(testContacts[1].externalId);
  });

  test("Can't create a record without name", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: {
          Email: testContacts[1].email,
          Mobile: testContacts[1].mobile,
          Phone: testContacts[1].phone,
          "External ID": testContacts[1].externalId,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "Email",
      })
    ).rejects.toThrow(/Name/);
  });

  test("Can't update a record without name", async () => {
    await expect(
      runExport({
        oldRecordProperties: {
          Name: testContacts[1].name,
          Email: testContacts[1].email,
          Mobile: testContacts[1].mobile,
          Phone: testContacts[1].phone,
          "External ID": testContacts[1].externalId,
        },
        newRecordProperties: {
          Email: testContacts[2].email,
          Mobile: testContacts[2].mobile,
          Phone: testContacts[2].phone,
          "External ID": testContacts[2].externalId,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "Email",
      })
    ).rejects.toThrow(/Name/);
  });

  test("Can update a record on Freshdesk", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[1].name,
        Email: testContacts[1].email,
        Mobile: testContacts[1].mobile,
        Phone: testContacts[1].phone,
        "External ID": testContacts[1].externalId,
      },
      newRecordProperties: {
        Name: testContacts[2].name,
        Email: testContacts[2].email,
        Mobile: testContacts[2].mobile,
        Phone: testContacts[2].phone,
        "External ID": testContacts[2].externalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      // Contact 1 should not be exists
      const contact = await client.getContactBy("email", testContacts[1].email);
      expect(contact).toBeFalsy();
    }

    {
      // Contact 2 should be existed
      const contact = await client.getContactBy("email", testContacts[2].email);
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[2].name);
      expect(contact.email).toBe(testContacts[2].email);
      expect(contact.mobile).toBe(testContacts[2].mobile);
      expect(contact.phone).toBe(testContacts[2].phone);
      expect(contact.unique_external_id).toBe(testContacts[2].externalId);
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Primary Key Basics / email", () => {
  // Uses contacts 3 & 4

  test("Can't create a record without email", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: {
          Name: testContacts[3].name,
          Mobile: testContacts[3].mobile,
          Phone: testContacts[3].phone,
          "External ID": testContacts[3].externalId,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "Email",
      })
    ).rejects.toThrow(/Email/);
  });

  test("Can create a record with only name and email", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testContacts[3].name,
        Email: testContacts[3].email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    const contact = await client.getContactBy("email", testContacts[3].email);
    expect(contact).toBeTruthy();
    expect(contact.name).toBe(testContacts[3].name);
    expect(contact.email).toBe(testContacts[3].email);
  });

  test("Can't update a record without email", async () => {
    await expect(
      runExport({
        oldRecordProperties: {
          Name: testContacts[3].name,
          Email: testContacts[3].email,
          Mobile: testContacts[3].mobile,
          Phone: testContacts[3].phone,
          "External ID": testContacts[3].externalId,
        },
        newRecordProperties: {
          Name: testContacts[4].name,
          Mobile: testContacts[4].mobile,
          Phone: testContacts[4].phone,
          "External ID": testContacts[4].externalId,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "Email",
      })
    ).rejects.toThrow(/Email/);
  });

  test("Can update a record by email", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[3].name,
        Email: testContacts[3].email,
      },
      newRecordProperties: {
        Name: "Another Name",
        Email: testContacts[3].email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    const contact = await client.getContactBy("email", testContacts[3].email);
    expect(contact).toBeTruthy();
    expect(contact.email).toBe(testContacts[3].email);
    expect(contact.name).toBe("Another Name");
  });

  test("Can update a record and change email", async () => {
    await runExport({
      oldRecordProperties: {
        Name: "Another Name",
        Email: testContacts[3].email,
      },
      newRecordProperties: {
        Name: testContacts[4].name,
        Email: testContacts[4].email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      const contact = await client.getContactBy("email", testContacts[3].email);
      expect(contact).toBeFalsy();
    }

    {
      const contact = await client.getContactBy("email", testContacts[4].email);
      expect(contact).toBeTruthy();
      expect(contact.email).toBe(testContacts[4].email);
      expect(contact.name).toBe(testContacts[4].name);
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Primary Key Basics / mobile", () => {
  // Uses contacts 5 & 6

  test("Can't create a record without mobile", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: {
          Name: testContacts[5].name,
          Email: testContacts[5].email,
          Phone: testContacts[5].phone,
          "External ID": testContacts[5].externalId,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "Mobile",
      })
    ).rejects.toThrow(/Mobile/);
  });

  test("Can create a record with only name and mobile", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testContacts[5].name,
        Mobile: testContacts[5].mobile,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Mobile",
    });

    const contact = await client.getContactBy("mobile", testContacts[5].mobile);
    expect(contact).toBeTruthy();
    expect(contact.name).toBe(testContacts[5].name);
    expect(contact.mobile).toBe(testContacts[5].mobile);
  });

  test("Can't update a record without mobile", async () => {
    await expect(
      runExport({
        oldRecordProperties: {
          Name: testContacts[5].name,
          Email: testContacts[5].email,
          Mobile: testContacts[5].mobile,
          Phone: testContacts[5].phone,
          "External ID": testContacts[5].externalId,
        },
        newRecordProperties: {
          Name: testContacts[6].name,
          Email: testContacts[6].email,
          Phone: testContacts[6].phone,
          "External ID": testContacts[6].externalId,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "Mobile",
      })
    ).rejects.toThrow(/Mobile/);
  });

  test("Can update a record by mobile", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[5].name,
        Mobile: testContacts[5].mobile,
      },
      newRecordProperties: {
        Name: "Another Name",
        Mobile: testContacts[5].mobile,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Mobile",
    });

    const contact = await client.getContactBy("mobile", testContacts[5].mobile);
    expect(contact).toBeTruthy();
    expect(contact.mobile).toBe(testContacts[5].mobile);
    expect(contact.name).toBe("Another Name");
  });

  test("Can update a record and change mobile", async () => {
    await runExport({
      oldRecordProperties: {
        Name: "Another Name",
        Mobile: testContacts[5].mobile,
      },
      newRecordProperties: {
        Name: testContacts[6].name,
        Mobile: testContacts[6].mobile,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Mobile",
    });

    {
      const contact = await client.getContactBy(
        "mobile",
        testContacts[5].mobile
      );
      expect(contact).toBeFalsy();
    }

    {
      const contact = await client.getContactBy(
        "mobile",
        testContacts[6].mobile
      );
      expect(contact).toBeTruthy();
      expect(contact.mobile).toBe(testContacts[6].mobile);
      expect(contact.name).toBe(testContacts[6].name);
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Primary Key Basics / phone", () => {
  // Uses contacts 7 & 8

  test("Can't create a record without phone", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: {
          Name: testContacts[7].name,
          Email: testContacts[7].email,
          Mobile: testContacts[7].mobile,
          "External ID": testContacts[7].externalId,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "Phone",
      })
    ).rejects.toThrow(/Phone/);
  });

  test("Can create a record with only name and phone", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testContacts[7].name,
        Phone: testContacts[7].phone,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Phone",
    });

    const contact = await client.getContactBy("phone", testContacts[7].phone);
    expect(contact).toBeTruthy();
    expect(contact.name).toBe(testContacts[7].name);
    expect(contact.phone).toBe(testContacts[7].phone);
  });

  test("Can't update a record without phone", async () => {
    await expect(
      runExport({
        oldRecordProperties: {
          Name: testContacts[7].name,
          Email: testContacts[7].email,
          Mobile: testContacts[7].mobile,
          Phone: testContacts[7].phone,
          "External ID": testContacts[7].externalId,
        },
        newRecordProperties: {
          Name: testContacts[8].name,
          Email: testContacts[8].email,
          Mobile: testContacts[8].mobile,
          "External ID": testContacts[8].externalId,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "Phone",
      })
    ).rejects.toThrow(/Phone/);
  });

  test("Can update a record by phone", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[7].name,
        Phone: testContacts[7].phone,
      },
      newRecordProperties: {
        Name: "Another Name",
        Phone: testContacts[7].phone,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Phone",
    });

    const contact = await client.getContactBy("phone", testContacts[7].phone);
    expect(contact).toBeTruthy();
    expect(contact.phone).toBe(testContacts[7].phone);
    expect(contact.name).toBe("Another Name");
  });

  test("Can update a record and change phone", async () => {
    await runExport({
      oldRecordProperties: {
        Name: "Another Name",
        Phone: testContacts[7].phone,
      },
      newRecordProperties: {
        Name: testContacts[8].name,
        Phone: testContacts[8].phone,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Phone",
    });

    {
      const contact = await client.getContactBy("phone", testContacts[7].phone);
      expect(contact).toBeFalsy();
    }

    {
      const contact = await client.getContactBy("phone", testContacts[8].phone);
      expect(contact).toBeTruthy();
      expect(contact.phone).toBe(testContacts[8].phone);
      expect(contact.name).toBe(testContacts[8].name);
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Primary Key Basics / external id", () => {
  // Uses contacts 9 & 10

  test("Can't create a record without external id", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: {
          Name: testContacts[9].name,
          Email: testContacts[9].email,
          Mobile: testContacts[9].mobile,
          Phone: testContacts[9].phone,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "External ID",
      })
    ).rejects.toThrow(/External ID/);
  });

  test("Can create a record with only name and external id", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testContacts[9].name,
        "External ID": testContacts[9].externalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "External ID",
    });

    const contact = await client.getContactBy(
      "unique_external_id",
      testContacts[9].externalId
    );
    expect(contact).toBeTruthy();
    expect(contact.name).toBe(testContacts[9].name);
    expect(contact.unique_external_id).toBe(testContacts[9].externalId);
  });

  test("Can't create a record without external id", async () => {
    await expect(
      runExport({
        oldRecordProperties: {
          Name: testContacts[9].name,
          Email: testContacts[9].email,
          Mobile: testContacts[9].mobile,
          Phone: testContacts[9].phone,
          "External ID": testContacts[9].externalId,
        },
        newRecordProperties: {
          Name: testContacts[10].name,
          Email: testContacts[10].email,
          Mobile: testContacts[10].mobile,
          Phone: testContacts[10].phone,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "External ID",
      })
    ).rejects.toThrow(/External ID/);
  });

  test("Can update a record by external id", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[9].name,
        "External ID": testContacts[9].externalId,
      },
      newRecordProperties: {
        Name: "Another Name",
        "External ID": testContacts[9].externalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "External ID",
    });

    const contact = await client.getContactBy(
      "unique_external_id",
      testContacts[9].externalId
    );
    expect(contact).toBeTruthy();
    expect(contact.unique_external_id).toBe(testContacts[9].externalId);
    expect(contact.name).toBe("Another Name");
  });

  test("Can update a record and change external id", async () => {
    await runExport({
      oldRecordProperties: {
        Name: "Another Name",
        "External ID": testContacts[9].externalId,
      },
      newRecordProperties: {
        Name: testContacts[10].name,
        "External ID": testContacts[10].externalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "External ID",
    });

    {
      const contact = await client.getContactBy(
        "unique_external_id",
        testContacts[9].externalId
      );
      expect(contact).toBeFalsy();
    }

    {
      const contact = await client.getContactBy(
        "unique_external_id",
        testContacts[10].externalId
      );
      expect(contact).toBeTruthy();
      expect(contact.unique_external_id).toBe(testContacts[10].externalId);
      expect(contact.name).toBe(testContacts[10].name);
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Primary Key Conflict / email", () => {
  // Uses contacts 11, 12

  test("Can create a record by passing nonexistent value to email", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[99].name,
        Email: testContacts[99].email,
      },
      newRecordProperties: {
        Name: testContacts[11].name,
        Email: testContacts[11].email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[99].email
      );
      expect(contact).toBeFalsy();
    }

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[11].email
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[11].name);
      expect(contact.email).toBe(testContacts[11].email);
    }
  });

  test("Can update the correct record if both emails are exists", async () => {
    await client.createContact({
      name: testContacts[12].name,
      email: testContacts[12].email,
    });

    await runExport({
      oldRecordProperties: {
        Name: testContacts[11].name,
        Email: testContacts[11].email,
      },
      newRecordProperties: {
        Name: testContacts[12].name,
        Email: testContacts[12].email,
        Description: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[11].email
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[11].name);
      expect(contact.email).toBe(testContacts[11].email);
      expect(contact.description).toBe(null);
    }

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[12].email
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[12].name);
      expect(contact.email).toBe(testContacts[12].email);
      expect(contact.description).toBe("Some text");
    }
  });

  test("Can delete the correct record if both emails are exists", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[11].name,
        Email: testContacts[11].email,
      },
      newRecordProperties: {
        Name: testContacts[12].name,
        Email: testContacts[12].email,
        Description: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
      primaryKey: "Email",
    });

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[11].email
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[11].name);
      expect(contact.email).toBe(testContacts[11].email);
      expect(contact.description).toBe(null);
    }

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[12].email
      );
      expect(contact).toBeFalsy();
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Primary Key Conflict / mobile", () => {
  // Uses contacts 13, 14

  test("Can create a record by passing nonexistent value to mobile", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[99].name,
        Mobile: testContacts[99].mobile,
      },
      newRecordProperties: {
        Name: testContacts[13].name,
        Mobile: testContacts[13].mobile,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Mobile",
    });

    {
      const contact = await client.getContactBy(
        "mobile",
        testContacts[99].mobile
      );
      expect(contact).toBeFalsy();
    }

    {
      const contact = await client.getContactBy(
        "mobile",
        testContacts[13].mobile
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[13].name);
      expect(contact.mobile).toBe(testContacts[13].mobile);
    }
  });

  test("Can update the correct record if both mobiles are exists", async () => {
    await client.createContact({
      name: testContacts[14].name,
      mobile: testContacts[14].mobile,
    });

    await runExport({
      oldRecordProperties: {
        Name: testContacts[13].name,
        Mobile: testContacts[13].mobile,
      },
      newRecordProperties: {
        Name: testContacts[14].name,
        Mobile: testContacts[14].mobile,
        Description: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Mobile",
    });

    {
      const contact = await client.getContactBy(
        "mobile",
        testContacts[13].mobile
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[13].name);
      expect(contact.mobile).toBe(testContacts[13].mobile);
      expect(contact.description).toBe(null);
    }

    {
      const contact = await client.getContactBy(
        "mobile",
        testContacts[14].mobile
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[14].name);
      expect(contact.mobile).toBe(testContacts[14].mobile);
      expect(contact.description).toBe("Some text");
    }
  });

  test("Can delete the correct record if both mobiles are exists", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[13].name,
        Mobile: testContacts[13].mobile,
      },
      newRecordProperties: {
        Name: testContacts[14].name,
        Mobile: testContacts[14].mobile,
        Description: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
      primaryKey: "Mobile",
    });

    {
      const contact = await client.getContactBy(
        "mobile",
        testContacts[13].mobile
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[13].name);
      expect(contact.mobile).toBe(testContacts[13].mobile);
      expect(contact.description).toBe(null);
    }

    {
      const contact = await client.getContactBy(
        "mobile",
        testContacts[14].mobile
      );
      expect(contact).toBeFalsy();
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Primary Key Conflict / phone", () => {
  // Uses contacts 15, 16

  test("Can create a record by passing nonexistent value to phone", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[99].name,
        Phone: testContacts[99].phone,
      },
      newRecordProperties: {
        Name: testContacts[15].name,
        Phone: testContacts[15].phone,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Phone",
    });

    {
      const contact = await client.getContactBy(
        "phone",
        testContacts[99].phone
      );
      expect(contact).toBeFalsy();
    }

    {
      const contact = await client.getContactBy(
        "phone",
        testContacts[15].phone
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[15].name);
      expect(contact.phone).toBe(testContacts[15].phone);
    }
  });

  test("Can update the correct record if both phones are exists", async () => {
    await client.createContact({
      name: testContacts[16].name,
      phone: testContacts[16].phone,
    });

    await runExport({
      oldRecordProperties: {
        Name: testContacts[15].name,
        Phone: testContacts[15].phone,
      },
      newRecordProperties: {
        Name: testContacts[16].name,
        Phone: testContacts[16].phone,
        Description: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Phone",
    });

    {
      const contact = await client.getContactBy(
        "phone",
        testContacts[15].phone
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[15].name);
      expect(contact.phone).toBe(testContacts[15].phone);
      expect(contact.description).toBe(null);
    }

    {
      const contact = await client.getContactBy(
        "phone",
        testContacts[16].phone
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[16].name);
      expect(contact.phone).toBe(testContacts[16].phone);
      expect(contact.description).toBe("Some text");
    }
  });

  test("Can delete the correct record if both phones are exists", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[15].name,
        Phone: testContacts[15].phone,
      },
      newRecordProperties: {
        Name: testContacts[16].name,
        Phone: testContacts[16].phone,
        Description: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
      primaryKey: "Phone",
    });

    {
      const contact = await client.getContactBy(
        "phone",
        testContacts[15].phone
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[15].name);
      expect(contact.phone).toBe(testContacts[15].phone);
      expect(contact.description).toBe(null);
    }

    {
      const contact = await client.getContactBy(
        "phone",
        testContacts[16].phone
      );
      expect(contact).toBeFalsy();
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Primary Key Conflict / external id", () => {
  // Uses contacts 17, 18

  test("Can create a record by passing nonexistent value to external id", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[99].name,
        "External ID": testContacts[99].externalId,
      },
      newRecordProperties: {
        Name: testContacts[17].name,
        "External ID": testContacts[17].externalId,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "External ID",
    });

    {
      const contact = await client.getContactBy(
        "unique_external_id",
        testContacts[99].externalId
      );
      expect(contact).toBeFalsy();
    }

    {
      const contact = await client.getContactBy(
        "unique_external_id",
        testContacts[17].externalId
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[17].name);
      expect(contact.unique_external_id).toBe(testContacts[17].externalId);
    }
  });

  test("Can update the correct record if both external ids are exists", async () => {
    await client.createContact({
      name: testContacts[18].name,
      unique_external_id: testContacts[18].externalId,
    });

    await runExport({
      oldRecordProperties: {
        Name: testContacts[17].name,
        "External ID": testContacts[17].externalId,
      },
      newRecordProperties: {
        Name: testContacts[18].name,
        "External ID": testContacts[18].externalId,
        Description: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "External ID",
    });

    {
      const contact = await client.getContactBy(
        "unique_external_id",
        testContacts[17].externalId
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[17].name);
      expect(contact.unique_external_id).toBe(testContacts[17].externalId);
      expect(contact.description).toBe(null);
    }

    {
      const contact = await client.getContactBy(
        "unique_external_id",
        testContacts[18].externalId
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[18].name);
      expect(contact.unique_external_id).toBe(testContacts[18].externalId);
      expect(contact.description).toBe("Some text");
    }
  });

  test("Can delete the correct record if both external ids are exists", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[17].name,
        "External ID": testContacts[17].externalId,
      },
      newRecordProperties: {
        Name: testContacts[18].name,
        "External ID": testContacts[18].externalId,
        Description: "Some text",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
      primaryKey: "External ID",
    });

    {
      const contact = await client.getContactBy(
        "unique_external_id",
        testContacts[17].externalId
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[17].name);
      expect(contact.unique_external_id).toBe(testContacts[17].externalId);
      expect(contact.description).toBe(null);
    }

    {
      const contact = await client.getContactBy(
        "unique_external_id",
        testContacts[18].externalId
      );
      expect(contact).toBeFalsy();
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Sync Modes", () => {
  // Uses contacts: 30, 31

  beforeAll(async () => {
    await client.createContact({
      name: testContacts[31].name,
      email: testContacts[31].email,
    });
  });

  test("Can't create a record if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: false,
          update: true,
          delete: true,
        },
        oldRecordProperties: {},
        newRecordProperties: {
          Name: testContacts[30].name,
          Email: testContacts[30].email,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "Email",
      })
    ).rejects.toThrow(/sync mode does not create/);
  });

  test("Can't update a record if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          update: false,
          delete: true,
        },
        oldRecordProperties: {
          Name: testContacts[31].name,
          Email: testContacts[31].email,
        },
        newRecordProperties: {
          Name: "Another Name",
          Email: "new.email@grouparoo.com",
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
        primaryKey: "Email",
      })
    ).rejects.toThrow(/sync mode does not update/);
  });

  test("Can't delete a record if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          update: true,
          delete: false,
        },
        oldRecordProperties: {
          Name: testContacts[31].name,
          Email: testContacts[31].email,
        },
        newRecordProperties: {
          Name: testContacts[31].name,
          Email: testContacts[31].email,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
        primaryKey: "Email",
      })
    ).rejects.toThrow(/sync mode does not delete/);
  });
});

describe("Freshdesk / Contacts / Export Record / Set & Reset Fields Values", () => {
  // Uses contacts 19, 20, 21
  // Uses companies 1, 2

  test("Can set field values while creating a record", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testContacts[19].name,
        Email: testContacts[19].email,
        Mobile: testContacts[19].mobile,
        Phone: testContacts[19].phone,
        "External ID": testContacts[19].externalId,
        "Company Name": testCompanies[1],
        Address: "Address value",
        Description: "Description value",
        "Job Title": "Job title value",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    const contact = await client.getContactBy("email", testContacts[19].email);
    expect(contact).toBeTruthy();
    expect(contact.name).toBe(testContacts[19].name);
    expect(contact.email).toBe(testContacts[19].email);
    expect(contact.mobile).toBe(testContacts[19].mobile);
    expect(contact.phone).toBe(testContacts[19].phone);
    expect(contact.unique_external_id).toBe(testContacts[19].externalId);
    expect(contact.address).toBe("Address value");
    expect(contact.description).toBe("Description value");
    expect(contact.job_title).toBe("Job title value");

    expect(contact.company_id).toBeTruthy();
    const company = await client.getCompanyById(contact.company_id);
    expect(company).toBeTruthy();
    expect(company.id).toBe(contact.company_id);
    expect(company.name).toBe(testCompanies[1]);
  });

  test("Can set field values while updating a record", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[19].name,
        Email: testContacts[19].email,
        Mobile: testContacts[19].mobile,
        Phone: testContacts[19].phone,
        "External ID": testContacts[19].externalId,
        "Company Name": testCompanies[1],
        Address: "Address value",
        Description: "Description value",
        "Job Title": "Job title value",
      },
      newRecordProperties: {
        Name: testContacts[20].name,
        Email: testContacts[20].email,
        Mobile: testContacts[20].mobile,
        Phone: testContacts[20].phone,
        "External ID": testContacts[20].externalId,
        "Company Name": testCompanies[2],
        Address: "Address another value",
        Description: "Description another value",
        "Job Title": "Job title another value",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[19].email
      );
      expect(contact).toBeFalsy();
    }

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[20].email
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[20].name);
      expect(contact.email).toBe(testContacts[20].email);
      expect(contact.mobile).toBe(testContacts[20].mobile);
      expect(contact.phone).toBe(testContacts[20].phone);
      expect(contact.unique_external_id).toBe(testContacts[20].externalId);
      expect(contact.address).toBe("Address another value");
      expect(contact.description).toBe("Description another value");
      expect(contact.job_title).toBe("Job title another value");
      expect(contact.company_id).toBeTruthy();
    }
  });

  test("Can reset field values while updating a record", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[20].name,
        Email: testContacts[20].email,
        Mobile: testContacts[20].mobile,
        Phone: testContacts[20].phone,
        "External ID": testContacts[20].externalId,
        "Company Name": testCompanies[2],
        Address: "Address another value",
        Description: "Description another value",
        "Job Title": "Job title another value",
      },
      newRecordProperties: {
        Name: testContacts[21].name,
        Email: testContacts[21].email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[20].email
      );
      expect(contact).toBeFalsy();
    }

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[21].email
      );
      expect(contact).toBeTruthy();
      expect(contact.name).toBe(testContacts[21].name);
      expect(contact.email).toBe(testContacts[21].email);
      expect(contact.mobile).toBe(null);
      expect(contact.phone).toBe(null);
      expect(contact.unique_external_id).toBe(null);
      expect(contact.address).toBe(null);
      expect(contact.description).toBe(null);
      expect(contact.job_title).toBe(null);
      expect(contact.company_id).toBe(null);
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Dealing With Companies", () => {
  // Uses contacts 22, 23
  // Uses companies 3, 4

  test("Can assign a contact record to a company and create a company on the fly", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testContacts[22].name,
        Email: testContacts[22].email,
        "Company Name": testCompanies[3],
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[22].email
      );
      expect(contact).toBeTruthy();
      expect(contact.company_id).toBeTruthy();
    }
  });

  test("Can change a company for a contact record and create a company on the fly", async () => {
    const oldContact = await client.getContactBy(
      "email",
      testContacts[22].email
    );

    await runExport({
      oldRecordProperties: {
        Name: testContacts[22].name,
        Email: testContacts[22].email,
        "Company Name": testCompanies[3],
      },
      newRecordProperties: {
        Name: testContacts[22].name,
        Email: testContacts[22].email,
        "Company Name": testCompanies[4],
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    const newContact = await client.getContactBy(
      "email",
      testContacts[22].email
    );
    expect(newContact).toBeTruthy();
    expect(newContact.company_id).toBeTruthy();
    expect(newContact.company_id).not.toBe(oldContact.company_id);
  });

  test("Can assign a contact to an already exists company without creating new one", async () => {
    await waitForIndexingCompany(newNock);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testContacts[23].name,
        Email: testContacts[23].email,
        "Company Name": testCompanies[4],
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
      primaryKey: "Email",
    });

    const contact22 = await client.getContactBy(
      "email",
      testContacts[22].email
    );

    const contact23 = await client.getContactBy(
      "email",
      testContacts[23].email
    );
    expect(contact23).toBeTruthy();
    expect(contact23.company_id).toBeTruthy();
    expect(contact23.company_id).toBe(contact22.company_id);
  });
});

describe("Freshdesk / Contacts / Export Record / Deleting Records", () => {
  // Uses contacts 24, 25

  beforeAll(async () => {
    await client.createContact({
      name: testContacts[24].name,
      email: testContacts[24].email,
    });

    await client.createContact({
      name: testContacts[25].name,
      email: testContacts[25].email,
    });
  });

  test("Can delete a record", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[24].name,
        Email: testContacts[24].email,
      },
      newRecordProperties: {
        Name: testContacts[24].name,
        Email: testContacts[24].email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
      primaryKey: "Email",
    });

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[24].email
      );
      expect(contact).toBeFalsy();
    }
  });

  test("Can delete a record while changing field values", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[25].name,
        Email: testContacts[25].email,
      },
      newRecordProperties: {
        Name: testContacts[25].name,
        Email: testContacts[25].email,
        Mobile: testContacts[25].mobile,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
      primaryKey: "Email",
    });

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[25].email
      );
      expect(contact).toBeFalsy();
    }
  });

  test("Can delete a nonexistent record", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[99].name,
        Email: testContacts[99].email,
      },
      newRecordProperties: {
        Name: testContacts[99].name,
        Email: testContacts[99].email,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
      primaryKey: "Email",
    });

    {
      const contact = await client.getContactBy(
        "email",
        testContacts[99].email
      );
      expect(contact).toBeFalsy();
    }
  });
});

describe("Freshdesk / Contacts / Export Record / Group functionality", () => {
  // Uses contacts 26, 27, 28

  beforeAll(async () => {
    await client.createContact({
      name: testContacts[26].name,
      email: testContacts[26].email,
    });
  });

  test("Can assign a record to a group", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[26].name,
        Email: testContacts[26].email,
      },
      newRecordProperties: {
        Name: testContacts[26].name,
        Email: testContacts[26].email,
      },
      oldGroups: [],
      newGroups: ["Group 1", "Group 2"],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      const _contact = await client.getContactBy(
        "email",
        testContacts[26].email
      );
      const contact = await client.getContactById(_contact.id);
      expect(contact).toBeTruthy();
      expect(contact.tags).toContain("Group 1");
      expect(contact.tags).toContain("Group 2");
    }
  });

  test("Can remove a group membership from a record and assign it to a new group on the same request", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testContacts[26].name,
        Email: testContacts[26].email,
      },
      newRecordProperties: {
        Name: testContacts[26].name,
        Email: testContacts[26].email,
      },
      oldGroups: ["Group 1", "Group 2"],
      newGroups: ["Group 1", "Group 3"],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      const _contact = await client.getContactBy(
        "email",
        testContacts[26].email
      );
      const contact = await client.getContactById(_contact.id);
      expect(contact).toBeTruthy();
      expect(contact.tags).toContain("Group 1");
      expect(contact.tags).toContain("Group 3");
      expect(contact.tags).not.toContain("Group 2");
    }
  });

  test("Can add a new record with a new group at the same time", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testContacts[27].name,
        Email: testContacts[27].email,
      },
      oldGroups: [],
      newGroups: ["Group 1", "Group 2"],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      const _contact = await client.getContactBy(
        "email",
        testContacts[27].email
      );
      const contact = await client.getContactById(_contact.id);
      expect(contact).toBeTruthy();
      expect(contact.tags).toContain("Group 1");
      expect(contact.tags).toContain("Group 2");
    }
  });

  test("Can remove a record from a nonexistent group without creating it", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testContacts[28].name,
        Email: testContacts[28].email,
      },
      oldGroups: ["Group 1", "Group 2", "Group X"],
      newGroups: ["Group 1", "Group 2"],
      toDelete: false,
      primaryKey: "Email",
    });

    {
      const _contact = await client.getContactBy(
        "email",
        testContacts[28].email
      );
      const contact = await client.getContactById(_contact.id);
      expect(contact).toBeTruthy();
      expect(contact.tags).toContain("Group 1");
      expect(contact.tags).toContain("Group 2");
      expect(contact.tags).not.toContain("Group X");
    }
  });
});
