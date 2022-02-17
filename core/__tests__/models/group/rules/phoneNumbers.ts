import { SharedGroupTests } from "../../../utils/prepareSharedGroupTest";
import { GrouparooRecord, Group, Property } from "../../../../src";
import { helper } from "@grouparoo/spec-helper";

describe("model/group", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let group: Group;
  let mario: GrouparooRecord;
  let luigi: GrouparooRecord;
  let peach: GrouparooRecord;
  let toad: GrouparooRecord;
  let phoneNumberProperty: Property;

  beforeAll(async () => {
    const response = await SharedGroupTests.beforeAll();
    mario = response.mario;
    luigi = response.luigi;
    peach = response.peach;
    toad = response.toad;

    const emailProperty = await Property.findOne({
      where: { key: "email" },
    });

    phoneNumberProperty = await Property.create({
      isArray: true,
      unique: false,
      key: "phoneNumber",
      type: "phoneNumber",
      sourceId: emailProperty.sourceId,
    });
    await phoneNumberProperty.setOptions({ column: "phoneNumber" });
    await phoneNumberProperty.update({ state: "ready" });

    await mario.addOrUpdateProperties({ phoneNumber: ["412 888 0001"] });
    await luigi.addOrUpdateProperties({ phoneNumber: ["412 888 0002"] });
    await peach.addOrUpdateProperties({
      phoneNumber: ["412 888 0003", "415 644 0001"],
    });
    await toad.buildNullProperties();
  }, helper.setupTime);

  beforeEach(async () => {
    const response = await SharedGroupTests.beforeEach();
    group = response.group;
  });

  afterEach(async () => {
    await SharedGroupTests.afterEach();
  });

  describe("rules", () => {
    describe("phoneNumbers", () => {
      test("exact matches", async () => {
        await group.setRules([
          {
            key: "phoneNumber",
            match: "+1 412 888 0001",
            operation: { op: "eq" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("partial matches", async () => {
        await group.setRules([
          { key: "phoneNumber", match: "+1 412%", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("multiple rules with same key", async () => {
        await group.setRules([
          { key: "phoneNumber", match: "+1 412%", operation: { op: "like" } },
          { key: "phoneNumber", match: "%000%", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("null match", async () => {
        await group.setRules([
          { key: "phoneNumber", match: "null", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("not null match", async () => {
        await group.setRules([
          { key: "phoneNumber", match: "null", operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("exists", async () => {
        await group.setRules([
          { key: "phoneNumber", operation: { op: "exists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("notExists", async () => {
        await group.setRules([
          { key: "phoneNumber", operation: { op: "notExists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });
    });
  });
});
