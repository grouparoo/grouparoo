import path from "path";
import "@grouparoo/spec-helper";
import { helper } from "@grouparoo/spec-helper";
import axios from "axios";

import { exportProfile } from "../../src/lib/export/exportProfile";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexCustomers } from "../utils/shared";

let cioClient: any;

const customerId = "grouparoo";
const otherCustomerId = "grouparoo-new";
const nonexistentCustomerId = "grouparoo-fake";
const email = "grouparoo@demo.com";
const newEmail = "notgrouparoo@demo.com";
const groupOne = "High Value";
const groupTwo = "Spanish Speaking";

const nockFile = path.join(__dirname, "../", "fixtures", "export-profile.js");

// these comments to use nock
const newNock = false;
require("./../fixtures/export-profile");
// or these to make it true
// const newNock = true;
// helper.recordNock(nockFile, updater);

const appOptions = loadAppOptions(newNock);

async function getCustomer(customerId: string): Promise<any> {
  try {
    const { data } = await axios.get(
      `https://beta-api.customer.io/v1/api/customers/${customerId}/attributes`,
      {
        headers: {
          Authorization: `Bearer ${appOptions.appApiKey}`,
        },
      }
    );

    return data.customer;
  } catch (error) {
    if (error?.response?.status === 404) {
      return null;
    }

    throw error;
  }
}

async function cleanUp() {
  await cioClient.destroy(customerId);
  await cioClient.destroy(otherCustomerId);
  await cioClient.destroy(nonexistentCustomerId);
  await indexCustomers(newNock);
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
    appId: null,
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

describe("customer.io/exportProfile", () => {
  beforeAll(async () => {
    cioClient = await connect(appOptions);
    await cleanUp();
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp();
  }, helper.setupTime);

  test("can create customer on Customer.io", async () => {
    const existingCustomer = await getCustomer(customerId);
    expect(existingCustomer).toBe(null);

    await runExport({
      oldProfileProperties: {},
      newProfileProperties: { customer_id: customerId },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await getCustomer(customerId);
    expect(customer).toBeTruthy();
  });

  test("can not create a customer without a customer_id", async () => {
    await expect(
      runExport({
        oldProfileProperties: {},
        newProfileProperties: { email },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow();
  });

  test("can add user attributes", async () => {
    await runExport({
      oldProfileProperties: { customer_id: customerId },
      newProfileProperties: { customer_id: customerId, email },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await getCustomer(customerId);
    expect(customer.id).toBe(customerId);
    expect(customer.attributes.email).toBe(email);
  });

  test("can add date attribute as unix timestamp", async () => {
    const createDate = new Date("2021-02-22T23:03:03Z");
    const createDateUnix = "1614034983";

    await runExport({
      oldProfileProperties: { customer_id: customerId },
      newProfileProperties: {
        customer_id: customerId,
        created_at: createDate,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await getCustomer(customerId);
    expect(customer.id).toBe(customerId);
    expect(customer.attributes.created_at).toBe(createDateUnix);
  });

  test("can change user attributes", async () => {
    const oldCustomer = await getCustomer(customerId);
    expect(oldCustomer.attributes.email).toBe(email);

    await runExport({
      oldProfileProperties: { customer_id: customerId, email },
      newProfileProperties: { customer_id: customerId, email: newEmail },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await getCustomer(customerId);
    expect(customer.attributes.email).toBe(newEmail);
  });

  test("can clear user attributes", async () => {
    const oldCustomer = await getCustomer(customerId);
    expect(oldCustomer.attributes.email).toBeTruthy();

    await runExport({
      oldProfileProperties: { customer_id: customerId, email },
      newProfileProperties: { customer_id: customerId },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await getCustomer(customerId);
    expect(customer.attributes.email).toBeUndefined();
  });

  test("can add groups as attributes", async () => {
    const oldCustomer = await getCustomer(customerId);
    expect(oldCustomer.attributes[`In ${groupOne}`]).toBeFalsy();
    expect(oldCustomer.attributes[`In ${groupTwo}`]).toBeFalsy();

    await runExport({
      oldProfileProperties: { customer_id: customerId },
      newProfileProperties: { customer_id: customerId },
      oldGroups: [],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await getCustomer(customerId);
    expect(customer.attributes[`In ${groupOne}`]).toBeTruthy();
    expect(customer.attributes[`In ${groupTwo}`]).toBeTruthy();
  });

  test("can remove group attribute", async () => {
    const oldCustomer = await getCustomer(customerId);
    expect(oldCustomer.attributes[`In ${groupOne}`]).toBeTruthy();
    expect(oldCustomer.attributes[`In ${groupTwo}`]).toBeTruthy();

    await runExport({
      oldProfileProperties: { customer_id: customerId },
      newProfileProperties: { customer_id: customerId },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await getCustomer(customerId);
    expect(customer.attributes[`In ${groupOne}`]).toBeTruthy();
    expect(customer.attributes[`In ${groupTwo}`]).toBeFalsy();
  });

  test("can change customer_id", async () => {
    let oldCustomer = await getCustomer(customerId);
    expect(oldCustomer.id).toBe(customerId);

    let newCustomer = await getCustomer(otherCustomerId);
    expect(newCustomer).toBe(null);

    await runExport({
      oldProfileProperties: { customer_id: customerId, email },
      newProfileProperties: { customer_id: otherCustomerId, email },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    oldCustomer = await getCustomer(customerId);
    expect(oldCustomer).toBe(null);

    newCustomer = await getCustomer(otherCustomerId);
    expect(newCustomer.id).toBe(otherCustomerId);
    expect(newCustomer.attributes.email).toBe(email);
  });

  test("can change customer_id along with other properties", async () => {
    let oldCustomer = await getCustomer(otherCustomerId);
    expect(oldCustomer.id).toBe(otherCustomerId);

    let newCustomer = await getCustomer(customerId);
    expect(newCustomer).toBe(null);

    await runExport({
      oldProfileProperties: { customer_id: otherCustomerId, email },
      newProfileProperties: { customer_id: customerId, email: newEmail },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    oldCustomer = await getCustomer(otherCustomerId);
    expect(oldCustomer).toBe(null);

    newCustomer = await getCustomer(customerId);
    expect(newCustomer.id).toBe(customerId);
    expect(newCustomer.attributes.email).toBe(newEmail);
  });

  test("can delete a customer", async () => {
    const oldCustomer = await getCustomer(customerId);
    expect(oldCustomer).toBeTruthy();

    await runExport({
      oldProfileProperties: { customer_id: customerId },
      newProfileProperties: { customer_id: customerId },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexCustomers(newNock);

    const customer = await getCustomer(customerId);
    expect(customer).toBe(null);
  });

  test("can delete a nonexistent customer", async () => {
    const oldCustomer = await getCustomer(nonexistentCustomerId);
    expect(oldCustomer).toBe(null);

    await runExport({
      oldProfileProperties: { customer_id: nonexistentCustomerId },
      newProfileProperties: { customer_id: nonexistentCustomerId },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexCustomers(newNock);

    const customer = await getCustomer(nonexistentCustomerId);
    expect(customer).toBe(null);
  });

  test("can add a customer passing a nonexistent customer_id on the oldProfileProperties", async () => {
    let newCustomer = await getCustomer(customerId);
    expect(newCustomer).toBe(null);

    const nonexistentCustomer = await getCustomer(nonexistentCustomerId);
    expect(nonexistentCustomer).toBe(null);

    await runExport({
      oldProfileProperties: { customer_id: nonexistentCustomerId },
      newProfileProperties: { customer_id: customerId, email },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    newCustomer = await getCustomer(customerId);
    expect(newCustomer).toBeTruthy();
    expect(newCustomer.attributes.email).toBe(email);
  });
});
