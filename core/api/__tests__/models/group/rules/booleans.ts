import { SharedGroupTests } from "../../../utils/prepareSharedGroupTest";
import { Group } from "../../../../src/models/Group";
import { config } from "actionhero";

describe("model/group", () => {
  let group: Group;

  beforeAll(async () => {
    const response = await SharedGroupTests.beforeAll();
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
    describe("booleans", () => {
      test("exact matches", async () => {
        await group.setRules([
          { key: "isVIP", match: true, operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("multiple rules with same key", async () => {
        await group.setRules([
          { key: "isVIP", match: true, operation: { op: "eq" } },
          { key: "isVIP", match: false, operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("multiple matches (ALL)", async () => {
        await group.setRules([
          { key: "isVIP", match: true, operation: { op: "eq" } },
          { key: "lastName", match: "mario", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("multiple matches (ANY)", async () => {
        await group.update({ matchType: "any" });
        await group.setRules([
          { key: "isVIP", match: true, operation: { op: "eq" } },
          { key: "lastName", match: "mario", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("null match", async () => {
        await group.setRules([
          { key: "isVIP", match: "null", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      test("not null match", async () => {
        await group.setRules([
          { key: "isVIP", match: "null", operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("exists", async () => {
        await group.setRules([{ key: "isVIP", operation: { op: "exists" } }]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("notExists", async () => {
        await group.setRules([
          { key: "isVIP", operation: { op: "notExists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });
    });
  });
});
