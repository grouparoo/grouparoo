import { helper } from "@grouparoo/spec-helper";
import { exportRecord } from "../../src/lib/export/exportRecord";
import { connect } from "../../src/lib/connect";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { indexCustomers } from "../utils/shared";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

let cioClient: any;

const customerId = "grouparoo";
const otherCustomerId = "grouparoo-new";
const anotherCustomerId = "grouparoo-another";
const nonexistentCustomerId = "grouparoo-fake";
const anotherNonexistentCustomerId = "grouparoo-ultra-fake";
const email = "grouparoo@demo.com";
const otherEmail = "notgrouparoo@demo.com";
const name = "Grouparoo Kangaroo";
const age = 30;
const groupOne = "High Value";
const groupTwo = "Spanish Speaking";

const { newNock } = helper.useNock(__filename, updater);
const appOptions = loadAppOptions(newNock);

async function cleanUp() {
  await cioClient.destroy(customerId);
  await cioClient.destroy(otherCustomerId);
  await cioClient.destroy(nonexistentCustomerId);
  await indexCustomers(newNock);
}

async function runExport({
  syncOperations = DestinationSyncModeData.sync.operations,
  oldRecordProperties,
  newRecordProperties,
  oldGroups,
  newGroups,
  toDelete,
}) {
  return exportRecord({
    appOptions,
    appId: null,
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

describe("customer.io/exportRecord", () => {
  beforeAll(async () => {
    cioClient = await connect(appOptions);
    await cleanUp();
  }, helper.setupTime);

  afterAll(async () => {
    await cleanUp();
  }, helper.setupTime);

  test("can not create a customer if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: DestinationSyncModeData.update.operations,
        oldRecordProperties: {},
        newRecordProperties: { customer_id: customerId },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not create/);
  });

  test("can create customer on Customer.io", async () => {
    const existingCustomer = await cioClient.getCustomer(customerId);
    expect(existingCustomer).toBe(null);

    await runExport({
      oldRecordProperties: {},
      newRecordProperties: { customer_id: customerId },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await cioClient.getCustomer(customerId);
    expect(customer).toBeTruthy();
  });

  test("can not create a customer without a customer_id", async () => {
    await expect(
      runExport({
        oldRecordProperties: {},
        newRecordProperties: { email },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow();
  });

  test("can add user attributes", async () => {
    await runExport({
      oldRecordProperties: { customer_id: customerId },
      newRecordProperties: { customer_id: customerId, email, name, age },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await cioClient.getCustomer(customerId);
    expect(customer.id).toBe(customerId);
    expect(customer.attributes.email).toBe(email);
    expect(customer.attributes.name).toBe(name);
    expect(customer.attributes.age).toBe(age.toString());
  });

  test("can add date attribute as unix timestamp", async () => {
    const createDate = new Date("2021-02-22T23:03:03Z");
    const createDateUnix = "1614034983";

    await runExport({
      oldRecordProperties: { customer_id: customerId },
      newRecordProperties: {
        customer_id: customerId,
        created_at: createDate,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await cioClient.getCustomer(customerId);
    expect(customer.id).toBe(customerId);
    expect(customer.attributes.created_at).toBe(createDateUnix);
  });

  test("can not update a customer if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          update: false,
          create: true,
          delete: true,
        },
        oldRecordProperties: { customer_id: customerId, email, name },
        newRecordProperties: {
          customer_id: customerId,
          email: otherEmail,
          name,
        },
        oldGroups: [],
        newGroups: [],
        toDelete: false,
      })
    ).rejects.toThrow(/sync mode does not update/);

    // no changes
    const customer = await cioClient.getCustomer(customerId);
    expect(customer.id).toBe(customerId);
    expect(customer.attributes.email).toBe(email);
    expect(customer.attributes.name).toBe(name);
    expect(customer.attributes.age).toBe(age.toString());
  });

  test("can change user attributes", async () => {
    const oldCustomer = await cioClient.getCustomer(customerId);
    expect(oldCustomer.attributes.email).toBe(email);

    await runExport({
      oldRecordProperties: { customer_id: customerId, email, name },
      newRecordProperties: {
        customer_id: customerId,
        email: otherEmail,
        name,
      },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await cioClient.getCustomer(customerId);
    expect(customer.attributes.email).toBe(otherEmail);
    expect(customer.attributes.name).toBe(name);
  });

  test("can clear user attributes", async () => {
    const oldCustomer = await cioClient.getCustomer(customerId);
    expect(oldCustomer.attributes.email).toBeTruthy();
    expect(oldCustomer.attributes.name).toBeTruthy();
    expect(oldCustomer.attributes.age).toBeTruthy();

    await runExport({
      oldRecordProperties: { customer_id: customerId, email, name, age },
      newRecordProperties: { customer_id: customerId, name },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await cioClient.getCustomer(customerId);
    expect(customer.attributes.email).toBeUndefined();
    expect(customer.attributes.age).toBeUndefined();
    expect(customer.attributes.name).toBeTruthy();
  });

  test("can add groups as attributes", async () => {
    const oldCustomer = await cioClient.getCustomer(customerId);
    expect(oldCustomer.attributes[`In ${groupOne}`]).toBeFalsy();
    expect(oldCustomer.attributes[`In ${groupTwo}`]).toBeFalsy();

    await runExport({
      oldRecordProperties: { customer_id: customerId },
      newRecordProperties: { customer_id: customerId },
      oldGroups: [],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await cioClient.getCustomer(customerId);
    expect(customer.attributes[`In ${groupOne}`]).toBeTruthy();
    expect(customer.attributes[`In ${groupTwo}`]).toBeTruthy();
  });

  test("can remove group attribute", async () => {
    const oldCustomer = await cioClient.getCustomer(customerId);
    expect(oldCustomer.attributes[`In ${groupOne}`]).toBeTruthy();
    expect(oldCustomer.attributes[`In ${groupTwo}`]).toBeTruthy();

    await runExport({
      oldRecordProperties: { customer_id: customerId },
      newRecordProperties: { customer_id: customerId },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne],
      toDelete: false,
    });

    await indexCustomers(newNock);

    const customer = await cioClient.getCustomer(customerId);
    expect(customer.attributes[`In ${groupOne}`]).toBeTruthy();
    expect(customer.attributes[`In ${groupTwo}`]).toBeFalsy();
  });

  test("can change customer_id", async () => {
    let oldCustomer = await cioClient.getCustomer(customerId);
    expect(oldCustomer.id).toBe(customerId);

    let newCustomer = await cioClient.getCustomer(otherCustomerId);
    expect(newCustomer).toBe(null);

    await runExport({
      oldRecordProperties: { customer_id: customerId, email },
      newRecordProperties: { customer_id: otherCustomerId, email },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    oldCustomer = await cioClient.getCustomer(customerId);
    expect(oldCustomer).toBe(null);

    newCustomer = await cioClient.getCustomer(otherCustomerId);
    expect(newCustomer.id).toBe(otherCustomerId);
    expect(newCustomer.attributes.email).toBe(email);
  });

  test("it can change the email address and orphan the old user if sync mode is not deleting", async () => {
    // customer.io requires deleting the old customer on FK change
    await runExport({
      syncOperations: { create: true, update: true, delete: false },
      oldRecordProperties: { customer_id: otherCustomerId, email },
      newRecordProperties: { customer_id: anotherCustomerId, email },
      oldGroups: [groupOne, groupTwo],
      newGroups: [groupOne, groupTwo],
      toDelete: false,
    });

    await indexCustomers(newNock);

    // old user still there
    const oldCustomer = await cioClient.getCustomer(otherCustomerId);
    expect(oldCustomer.id).toBe(otherCustomerId);
    expect(oldCustomer.attributes.email).toBe(email);

    // new user created
    const newCustomer = await cioClient.getCustomer(anotherCustomerId);
    expect(newCustomer).not.toBe(null);
    expect(newCustomer.id).toBe(anotherCustomerId);
    expect(newCustomer.attributes.email).toBe(email);
    expect(newCustomer.attributes[`In ${groupOne}`]).toBeTruthy();
    expect(newCustomer.attributes[`In ${groupTwo}`]).toBeTruthy();
  });

  test("can change customer_id along with other properties", async () => {
    let oldCustomer = await cioClient.getCustomer(otherCustomerId);
    expect(oldCustomer.id).toBe(otherCustomerId);
    expect(oldCustomer.attributes.email).toBe(email);

    let newCustomer = await cioClient.getCustomer(customerId);
    expect(newCustomer).toBe(null);

    await runExport({
      oldRecordProperties: { customer_id: otherCustomerId, email },
      newRecordProperties: { customer_id: customerId, email: otherEmail },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    oldCustomer = await cioClient.getCustomer(otherCustomerId);
    expect(oldCustomer).toBe(null);

    newCustomer = await cioClient.getCustomer(customerId);
    expect(newCustomer.id).toBe(customerId);
    expect(newCustomer.attributes.email).toBe(otherEmail);
  });

  test("cannot delete a customer if sync mode does not allow it", async () => {
    await expect(
      runExport({
        syncOperations: {
          create: true,
          delete: false,
          update: true,
        },
        oldRecordProperties: { customer_id: customerId },
        newRecordProperties: { customer_id: customerId },
        oldGroups: [],
        newGroups: [],
        toDelete: true,
      })
    ).rejects.toThrow(/sync mode does not delete/);

    // no effect
    const customer = await cioClient.getCustomer(customerId);
    expect(customer.id).toBe(customerId);
    expect(customer.attributes.email).toBe(otherEmail);
  });

  test("can delete a customer passing an existing customer on oldRecord", async () => {
    let oldCustomer = await cioClient.getCustomer(anotherCustomerId);
    expect(oldCustomer).not.toBe(null);

    let newCustomer = await cioClient.getCustomer(customerId);
    expect(newCustomer).not.toBe(null);

    await runExport({
      oldRecordProperties: { customer_id: anotherCustomerId },
      newRecordProperties: { customer_id: customerId },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexCustomers(newNock);

    oldCustomer = await cioClient.getCustomer(anotherCustomerId);
    expect(oldCustomer).not.toBe(null);

    newCustomer = await cioClient.getCustomer(customerId);
    expect(newCustomer).toBe(null);
  });

  test("can delete a customer", async () => {
    let customer = await cioClient.getCustomer(anotherCustomerId);
    expect(customer).not.toBe(null);

    await runExport({
      oldRecordProperties: { customer_id: anotherCustomerId },
      newRecordProperties: { customer_id: anotherCustomerId },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexCustomers(newNock);
    customer = await cioClient.getCustomer(customerId);
    expect(customer).toBe(null);
  });

  test("can delete a nonexistent customer", async () => {
    const oldCustomer = await cioClient.getCustomer(nonexistentCustomerId);
    expect(oldCustomer).toBe(null);

    await runExport({
      oldRecordProperties: { customer_id: anotherNonexistentCustomerId },
      newRecordProperties: { customer_id: nonexistentCustomerId },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexCustomers(newNock);

    const customer = await cioClient.getCustomer(nonexistentCustomerId);
    expect(customer).toBe(null);
  });

  test("can add a customer passing a nonexistent customer_id on the oldRecordProperties", async () => {
    let newCustomer = await cioClient.getCustomer(customerId);
    expect(newCustomer).toBe(null);

    const nonexistentCustomer = await cioClient.getCustomer(
      nonexistentCustomerId
    );
    expect(nonexistentCustomer).toBe(null);

    await runExport({
      oldRecordProperties: { customer_id: nonexistentCustomerId },
      newRecordProperties: { customer_id: customerId, email },
      oldGroups: [],
      newGroups: [],
      toDelete: false,
    });

    await indexCustomers(newNock);

    newCustomer = await cioClient.getCustomer(customerId);
    expect(newCustomer).toBeTruthy();
    expect(newCustomer.attributes.email).toBe(email);
  });

  test("can delete an existing customer if the new customer is nonexistent", async () => {
    let oldCustomer = await cioClient.getCustomer(customerId);
    expect(oldCustomer).not.toBe(email);
    let newCustomer = await cioClient.getCustomer(nonexistentCustomerId);
    expect(newCustomer).toBe(null);

    await runExport({
      oldRecordProperties: { customer_id: customerId },
      newRecordProperties: { customer_id: nonexistentCustomerId },
      oldGroups: [],
      newGroups: [],
      toDelete: true,
    });

    await indexCustomers(newNock);

    newCustomer = await cioClient.getCustomer(nonexistentCustomerId);
    expect(newCustomer).toBe(null);

    oldCustomer = await cioClient.getCustomer(customerId);
    expect(oldCustomer).toBe(null);
  });
});
