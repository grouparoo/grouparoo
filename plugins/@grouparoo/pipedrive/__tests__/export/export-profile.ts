import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/pipedrive": { path: path.join(__dirname, "..", "..") },
});
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { findPersonId } from "../../src/lib/utils";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { getKnownPersonFieldMap } from "../../src/lib/export/destinationMappingOptions";

let client: any;
let fieldMap: { [fieldName: string]: string };

let personId = null;
const email1 = "grouparoo@demo.com";
const email2 = "othergrouparoo@demo.com";
const email3 = "notgrouparoo@demo.com";
const nonexistentEmail = "fakegrouparoo@demo.com";
const groupOne = "TEST High Value";
const groupTwo = "TEST Spanish Speaking";
const groupOneField = `In Group: ${groupOne}`;
const groupTwoField = `In Group: ${groupTwo}`;
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
  let { data: filters } = await client.FiltersController.getAllFilters(
    "people"
  );
  filters = filters.filter((f) => f.name === name);

  if (filters.length === 0) return null;
  return filters[0];
}

async function cleanUp() {
  // Clear created people
  const ids = [];
  for (let email of [email1, email2, email3, nonexistentEmail]) {
    const id = await findPersonId(client, email);
    if (id) {
      ids.push(id);
    }
  }

  if (ids.length > 0) {
    await client.PersonsController.deleteMultiplePersonsInBulk(ids);
  }

  // Clear created group fields
  const {
    data: fields,
  } = await client.PersonFieldsController.getAllPersonFields();
  const testGroupFieldIds = fields
    .filter((f) => [groupOneField, groupTwoField].includes(f.name))
    .map((f) => f.id);

  if (testGroupFieldIds.length > 0) {
    await client.PersonFieldsController.deleteMultiplePersonFieldsInBulk(
      testGroupFieldIds
    );
  }

  // Clear created filters
  const { data: filters } = await client.FiltersController.getAllFilters(
    "people"
  );
  const testFilterIds = filters
    .filter((f) => [groupOneField, groupTwoField].includes(f.name))
    .map((f) => f.id);

  if (testFilterIds.length > 0) {
    await client.FiltersController.deleteMultipleFiltersInBulk(testFilterIds);
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

    const newPersonId = await findPersonId(client, email1);
    expect(newPersonId).toBeTruthy();

    personId = newPersonId;
    const { data } = await client.PersonsController.getDetailsOfAPerson(
      personId
    );
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

    const { data } = await client.PersonsController.getDetailsOfAPerson(
      personId
    );
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
        time_field: "01:30",
        time_range_field: "20:21",
        date_field: new Date(1598766588 * 1000),
        date_range_field: new Date(1598766588 * 1000),
        address_field: "Cupertino, California, United States",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const { data } = await client.PersonsController.getDetailsOfAPerson(
      personId
    );
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
    expect(data[fieldMap.time_field]).toBe("01:30:00");
    expect(data[fieldMap.time_range_field]).toBe("20:21:00");
    expect(data[fieldMap.date_field]).toBe("2020-08-30");
    expect(data[fieldMap.date_range_field]).toBe("2020-08-30");
    expect(data[fieldMap.address_field]).toBe(
      "Cupertino, California, United States"
    );
  });
  /* TODO
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
        time_field: "01:30",
        time_range_field: "20:21",
        date_field: new Date(1598766588 * 1000),
        date_range_field: new Date(1598766588 * 1000),
        address_field: "Cupertino, California, United States",
      },
      newProfileProperties: { Email: email1, Name: "Johnny Doe" },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const { data } = await client.PersonsController.getDetailsOfAPerson(
      personId
    );
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
    expect(data[fieldMap.time_field]).toBe(null);
    expect(data[fieldMap.time_range_field]).toBe(null);
    expect(data[fieldMap.date_field]).toBe(null);
    expect(data[fieldMap.date_range_field]).toBe(null);
  });*/

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

    const { data } = await client.PersonsController.getDetailsOfAPerson(
      personId
    );
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

    const { data } = await client.PersonsController.getDetailsOfAPerson(
      personId
    );
    expect(data[groupOneKey]).toBeTruthy();
    expect(data[groupTwoKey]).toBeFalsy();
  });

  test("can change email", async () => {
    await runExport({
      oldProfileProperties: { Email: email1, Name: "Johnny Doe" },
      newProfileProperties: {
        Email: email2,
        Name: "Johnny Doe",
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    const { data } = await client.PersonsController.getDetailsOfAPerson(
      personId
    );
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email2);
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
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    const { data } = await client.PersonsController.getDetailsOfAPerson(
      personId
    );
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

    const newPersonId = await findPersonId(client, email3);
    expect(newPersonId).toBeTruthy();

    const { data } = await client.PersonsController.getDetailsOfAPerson(
      newPersonId
    );
    expect(data.name).toBe("Bobby");
    expect(data.email).toHaveLength(1);
    expect(data.email[0].value).toBe(email3);
  });
});
