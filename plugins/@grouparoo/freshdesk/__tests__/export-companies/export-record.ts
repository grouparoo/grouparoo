import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";
import { FreshdeskClient } from "../../src/lib/client";
import { exportCompanyRecord } from "../../src/lib/export-companies/exportRecord";
import { indexUsers, waitForIndexingCompany } from "../utils/shared";
import { findCompanyFromAll } from "../utils/companyUtils";

let client: FreshdeskClient;

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);
const appId = "app_a1bb05e8-0a4e-49c5-ad42-545f2e8762f9";

async function runExport({
  syncOperations = DestinationSyncModeData.sync.operations,
  oldRecordProperties,
  newRecordProperties,
  toDelete,
}) {
  return exportCompanyRecord({
    appOptions,
    appId,
    connection: client,
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
      oldGroups: [],
      newGroups: [],
      toDelete,
    },
  });
}

const testCompanies = [];

for (let i = 100; i < 200; i++) {
  testCompanies.push({
    name: `Test Company ${i}`,
    domain: `company${i}.com`,
  });
}

async function cleanUp() {
  const foundCompanies = await client.getAllCompanies();
  const deleteIds = new Set<number>();

  for (const company of testCompanies) {
    const found = foundCompanies.find((c) => c.name === company.name);
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

beforeAll(async () => {
  console.time("All tests");
  client = await connect({ appOptions } as any);
  await cleanUp();
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

describe("Freshdesk / Companies / Export Record / Basic functionality", () => {
  // Uses companies 1 & 2

  test("Can create a record on Freshdesk", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testCompanies[1].name,
      },
      toDelete: false,
    });

    await indexUsers(newNock);

    const company = await findCompanyFromAll(client, testCompanies[1].name);
    expect(company).toBeTruthy();
    expect(company.name).toBe(testCompanies[1].name);
  });

  test("Can't create a record without name", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { Domain: testCompanies[1].domain },
        toDelete: false,
      })
    ).rejects.toThrow(/Name/);
  });

  test("Can't update a record without name", async () => {
    await expect(
      runExport({
        oldRecordProperties: { Name: testCompanies[1].name },
        newRecordProperties: { Domain: testCompanies[1].domain },
        toDelete: false,
      })
    ).rejects.toThrow(/Name/);
  });

  test("Can update a record and change the name", async () => {
    await waitForIndexingCompany(newNock);

    await runExport({
      oldRecordProperties: {
        Name: testCompanies[1].name,
      },
      newRecordProperties: {
        Name: testCompanies[2].name,
        Domain: testCompanies[2].domain,
      },
      toDelete: false,
    });

    await indexUsers(newNock);

    {
      // Company 1 should not be exists
      const company = await findCompanyFromAll(client, testCompanies[1].name);
      expect(company).toBeFalsy();
    }

    {
      // Company 2 should be existed
      const company = await findCompanyFromAll(client, testCompanies[2].name);
      expect(company).toBeTruthy();
      expect(company.name).toBe(testCompanies[2].name);
      expect(company.domains?.length).toBe(1);
      expect(company.domains[0]).toBe(testCompanies[2].domain);
    }
  });
});

describe("Freshdesk / Companies / Export Record / Primary Key Conflict", () => {
  // Uses companies 11, 12

  test("Can create a record by passing nonexistent value to name", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testCompanies[99].name,
      },
      newRecordProperties: {
        Name: testCompanies[11].name,
      },
      toDelete: false,
    });

    {
      const company = await findCompanyFromAll(client, testCompanies[99].name);
      expect(company).toBeFalsy();
    }

    {
      const company = await findCompanyFromAll(client, testCompanies[11].name);
      expect(company).toBeTruthy();
      expect(company.name).toBe(testCompanies[11].name);
    }
  });

  test("Can update the correct record if both names are exists", async () => {
    await client.createCompany({
      name: testCompanies[12].name,
    });

    await waitForIndexingCompany(newNock);

    await runExport({
      oldRecordProperties: {
        Name: testCompanies[11].name,
      },
      newRecordProperties: {
        Name: testCompanies[12].name,
        Description: "Some text",
      },
      toDelete: false,
    });

    {
      const company = await findCompanyFromAll(client, testCompanies[11].name);
      expect(company).toBeTruthy();
      expect(company.name).toBe(testCompanies[11].name);
      expect(company.description).toBe(null);
    }

    {
      const company = await findCompanyFromAll(client, testCompanies[12].name);
      expect(company).toBeTruthy();
      expect(company.name).toBe(testCompanies[12].name);
      expect(company.description).toBe("Some text");
    }
  });

  test("Can delete the correct record if both names are exists", async () => {
    await waitForIndexingCompany(newNock);

    await runExport({
      oldRecordProperties: {
        Name: testCompanies[11].name,
      },
      newRecordProperties: {
        Name: testCompanies[12].name,
        Description: "Some text",
      },
      toDelete: true,
    });

    {
      const company = await findCompanyFromAll(client, testCompanies[11].name);
      expect(company).toBeTruthy();
      expect(company.name).toBe(testCompanies[11].name);
      expect(company.description).toBe(null);
    }

    {
      const company = await findCompanyFromAll(client, testCompanies[12].name);
      expect(company).toBeFalsy();
    }
  });
});

describe("Freshdesk / Companies / Export Record / Sync Modes", () => {
  // Uses companies: 30, 31

  beforeAll(async () => {
    await client.createCompany({
      name: testCompanies[31].name,
    });

    await waitForIndexingCompany(newNock);
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
          Name: testCompanies[30].name,
        },
        toDelete: false,
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
          Name: testCompanies[31].name,
        },
        newRecordProperties: {
          Name: "Another Name",
        },
        toDelete: false,
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
          Name: testCompanies[31].name,
        },
        newRecordProperties: {
          Name: testCompanies[31].name,
        },
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);
  });
});

describe("Freshdesk / Companies / Export Record / Set & Reset Fields Values", () => {
  // Uses companies 19, 20, 21

  test("Can set field values while creating a record", async () => {
    await runExport({
      oldRecordProperties: {},
      newRecordProperties: {
        Name: testCompanies[19].name,
        Domain: testCompanies[19].domain,
        Note: "Some note",
        Description: "Some description",
        "Health Score": "At risk",
        "Account Tier": "Basic",
        "Renewal Date": new Date(2020, 1, 2),
        Industry: "Automotive",
      },
      toDelete: false,
    });

    const company = await findCompanyFromAll(client, testCompanies[19].name);
    expect(company).toBeTruthy();
    expect(company.name).toBe(testCompanies[19].name);
    expect(company.domains?.length).toBe(1);
    expect(company.domains[0]).toBe(testCompanies[19].domain);
    expect(company.note).toBe("Some note");
    expect(company.description).toBe("Some description");
    expect(company.health_score).toBe("At risk");
    expect(company.account_tier).toBe("Basic");
    expect(company.renewal_date).toBe("2020-02-02T00:00:00Z");
    expect(company.industry).toBe("Automotive");
  });

  test("Can set field values while updating a record", async () => {
    await waitForIndexingCompany(newNock);

    await runExport({
      oldRecordProperties: {
        Name: testCompanies[19].name,
        Domain: testCompanies[19].domain,
        Note: "Some note",
        Description: "Some description",
        "Health Score": "At risk",
        "Account Tier": "Basic",
        "Renewal Date": new Date(2020, 1, 2),
        Industry: "Automotive",
      },
      newRecordProperties: {
        Name: testCompanies[20].name,
        Domain: testCompanies[20].domain,
        Note: "Another note",
        Description: "Another description",
        "Health Score": "Happy",
        "Account Tier": "Premium",
        "Renewal Date": new Date(2020, 5, 6),
        Industry: "Other",
      },
      toDelete: false,
    });

    {
      const company = await findCompanyFromAll(client, testCompanies[19].name);
      expect(company).toBeFalsy();
    }

    {
      const company = await findCompanyFromAll(client, testCompanies[20].name);
      expect(company).toBeTruthy();
      expect(company.name).toBe(testCompanies[20].name);
      expect(company.domains?.length).toBe(1);
      expect(company.domains[0]).toBe(testCompanies[20].domain);
      expect(company.note).toBe("Another note");
      expect(company.description).toBe("Another description");
      expect(company.health_score).toBe("Happy");
      expect(company.account_tier).toBe("Premium");
      expect(company.renewal_date).toBe("2020-06-06T00:00:00Z");
      expect(company.industry).toBe("Other");
    }
  });

  test("Can reset field values while updating a record", async () => {
    await waitForIndexingCompany(newNock);

    await runExport({
      oldRecordProperties: {
        Name: testCompanies[20].name,
        Domain: testCompanies[20].domain,
        Note: "Another note",
        Description: "Another description",
        "Health Score": "Happy",
        "Account Tier": "Premium",
        "Renewal Date": new Date(2020, 5, 6),
        Industry: "Other",
      },
      newRecordProperties: {
        Name: testCompanies[21].name,
      },
      toDelete: false,
    });

    {
      const company = await findCompanyFromAll(client, testCompanies[20].name);
      expect(company).toBeFalsy();
    }

    {
      const company = await findCompanyFromAll(client, testCompanies[21].name);
      expect(company).toBeTruthy();
      expect(company.name).toBe(testCompanies[21].name);
      expect(company.domains?.length).toBe(0);
      expect(company.note).toBe(null);
      expect(company.description).toBe(null);
      expect(company.health_score).toBe(null);
      expect(company.account_tier).toBe(null);
      expect(company.renewal_date).toBe(null);
      expect(company.industry).toBe(null);
    }
  });
});

describe("Freshdesk / Companies / Export Record / Deleting Records", () => {
  // Uses companies 24, 25

  beforeAll(async () => {
    await client.createCompany({
      name: testCompanies[24].name,
    });

    await client.createCompany({
      name: testCompanies[25].name,
    });

    await waitForIndexingCompany(newNock);
  });

  test("Can delete a record", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testCompanies[24].name,
      },
      newRecordProperties: {
        Name: testCompanies[24].name,
      },
      toDelete: true,
    });

    {
      const company = await findCompanyFromAll(client, testCompanies[24].name);
      expect(company).toBeFalsy();
    }
  });

  test("Can delete a record while changing field values", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testCompanies[25].name,
      },
      newRecordProperties: {
        Name: testCompanies[25].name,
        Domain: testCompanies[25].domain,
        Description: "Some description",
      },
      toDelete: true,
    });

    {
      const company = await findCompanyFromAll(client, testCompanies[25].name);
      expect(company).toBeFalsy();
    }
  });

  test("Can delete a nonexistent record", async () => {
    await runExport({
      oldRecordProperties: {
        Name: testCompanies[99].name,
      },
      newRecordProperties: {
        Name: testCompanies[99].name,
      },
      toDelete: true,
    });

    {
      const company = await findCompanyFromAll(client, testCompanies[99].name);
      expect(company).toBeFalsy();
    }
  });
});
