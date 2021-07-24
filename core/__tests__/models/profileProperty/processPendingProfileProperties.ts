import { helper } from "@grouparoo/spec-helper";
import { specHelper, api } from "actionhero";
import { Source, Property, Profile, ProfileProperty } from "../../../src";
import { ProfilePropertyOps } from "../../../src/modules/ops/profileProperty";

describe("models/source/processPendingProfileProperties", () => {
  let profileA: Profile;
  let profileB: Profile;
  let source: Source;

  let userId: Property;
  let email: Property;
  let firstName: Property;
  let lastName: Property;
  let purchaseAmounts: Property;
  let purchases: Property;
  let ltv: Property;
  let isVIP: Property;
  let lastLoginAt: Property;

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeAll(async () => {
    source = await Source.findOne();
    profileA = await helper.factories.profile();
    profileB = await helper.factories.profile();

    userId = await Property.findOne({ where: { key: "userId" } });
    email = await Property.findOne({ where: { key: "email" } });
    firstName = await Property.findOne({ where: { key: "firstName" } });
    lastName = await Property.findOne({ where: { key: "lastName" } });
    purchaseAmounts = await Property.findOne({
      where: { key: "purchaseAmounts" },
    });
    purchases = await Property.findOne({ where: { key: "purchases" } });
    ltv = await Property.findOne({ where: { key: "ltv" } });
    isVIP = await Property.findOne({ where: { key: "isVIP" } });
    lastLoginAt = await Property.findOne({ where: { key: "lastLoginAt" } });
  });

  beforeEach(async () => {
    await api.resque.queue.connection.redis.flushdb();
    await ProfileProperty.update(
      { state: "pending", startedAt: null },
      { where: {} }
    );
  });

  test("there are 9 properties", async () => {
    expect(await Property.count()).toBe(9);
  });

  test("a blend of exact and non-exact properties from the same source will be properly grouped", async () => {
    await makeExact(["userId", "email", "firstName", "lastName"]); // 4 exact properties

    await ProfilePropertyOps.processPendingProfileProperties(source);
    const groupTasks = await specHelper.findEnqueuedTasks(
      "profileProperty:importProfileProperties"
    );
    const singleTasks = await specHelper.findEnqueuedTasks(
      "profileProperty:importProfileProperty"
    );

    expect(groupTasks.length).toBe(1);
    expect(singleTasks.length).toBe(5 * 2); // 5 non-grouped properties * 2 profiles

    expect(groupTasks[0].args[0].propertyIds.sort()).toEqual(
      [userId.id, email.id, firstName.id, lastName.id].sort()
    );
    expect(groupTasks[0].args[0].profileIds.sort()).toEqual(
      [...Array(4).fill(profileA.id), ...Array(4).fill(profileB.id)].sort()
    );
  });

  test("all exact properties, but some exclusions based on other types", async () => {
    await makeExact([
      "userId",
      "email",
      "firstName",
      "lastName",
      "purchaseAmounts",
      "purchases",
      "ltv",
      "isVIP",
      "lastLoginAt",
    ]); // 9 exact properties

    await ProfilePropertyOps.processPendingProfileProperties(source);
    const groupTasks = await specHelper.findEnqueuedTasks(
      "profileProperty:importProfileProperties"
    );
    const singleTasks = await specHelper.findEnqueuedTasks(
      "profileProperty:importProfileProperty"
    );

    expect(groupTasks.length).toBe(1);
    expect(singleTasks.length).toBe(2 * 2); // 2 non-grouped properties * 2 profiles

    expect(groupTasks[0].args[0].propertyIds.sort()).toEqual(
      [
        userId.id,
        email.id,
        firstName.id,
        lastName.id,
        ltv.id,
        isVIP.id,
        lastLoginAt.id,
        // purchaseAmounts.id, -- array property
        // purchases.id, -- array property
      ].sort()
    );
    expect(groupTasks[0].args[0].profileIds.sort()).toEqual(
      [...Array(7).fill(profileA.id), ...Array(7).fill(profileB.id)].sort()
    );
  });

  test("no exact properties", async () => {
    await makeExact([]); // 0 exact properties

    await ProfilePropertyOps.processPendingProfileProperties(source);
    const groupTasks = await specHelper.findEnqueuedTasks(
      "profileProperty:importProfileProperties"
    );
    const singleTasks = await specHelper.findEnqueuedTasks(
      "profileProperty:importProfileProperty"
    );

    expect(groupTasks.length).toBe(0);
    expect(singleTasks.length).toBe(9 * 2); // 9 non-grouped properties * 2 profiles
  });
});

async function makeExact(propertyKeys: string[]) {
  const properties = await Property.findAll();

  for (const property of properties) {
    const options = await property.getOptions();
    if (propertyKeys.includes(property.key)) {
      options.aggregationMethod = "exact";
    } else {
      options.aggregationMethod = "min";
    }
    await property.setOptions(options);
  }
}
