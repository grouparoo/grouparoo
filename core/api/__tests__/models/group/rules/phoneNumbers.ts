import { Group } from "../../../../src/models/Group";
import { Profile } from "../../../../src/models/Profile";
import { ProfilePropertyRule } from "../../../../src/models/ProfilePropertyRule";
import { SharedGroupTests } from "../../../utils/prepareSharedGroupTest";

describe("model/group", () => {
  let group: Group;
  let mario: Profile;
  let luigi: Profile;
  let peach: Profile;
  let toad: Profile;
  let phoneNumberRule: ProfilePropertyRule;

  beforeAll(async () => {
    const response = await SharedGroupTests.beforeAll();
    mario = response.mario;
    luigi = response.luigi;
    peach = response.peach;
    toad = response.toad;

    const emailRule = await ProfilePropertyRule.findOne({
      where: { key: "email" },
    });

    phoneNumberRule = await ProfilePropertyRule.create({
      isArray: true,
      unique: false,
      key: "phoneNumber",
      type: "phoneNumber",
      sourceGuid: emailRule.sourceGuid,
    });
    await phoneNumberRule.setOptions({ column: "phoneNumber" });
    await phoneNumberRule.update({ state: "ready" });

    await mario.addOrUpdateProperties({ phoneNumber: ["412 888 0001"] });
    await luigi.addOrUpdateProperties({ phoneNumber: ["412 888 0002"] });
    await peach.addOrUpdateProperties({
      phoneNumber: ["412 888 0003", "555 001 0001"],
    });
    await toad.buildNullProperties();
  }, 1000 * 30);

  afterAll(async () => {
    await SharedGroupTests.afterAll();
  });

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
          { key: "phoneNumber", match: "+1 412%", operation: { op: "iLike" } },
          { key: "phoneNumber", match: "%000%", operation: { op: "iLike" } },
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
