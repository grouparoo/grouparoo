import { SharedGroupTests } from "../../../utils/prepareSharedGroupTest";
import { Group } from "../../../../src/models/Group";

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
    describe("floats", () => {
      test("exact matches", async () => {
        await group.setRules([
          { key: "ltv", match: 100, operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("comparison matches", async () => {
        await group.setRules([
          { key: "ltv", match: 1, operation: { op: "gte" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("multiple rules with same key", async () => {
        await group.setRules([
          { key: "ltv", match: 1, operation: { op: "gte" } },
          { key: "ltv", match: 9999, operation: { op: "lt" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("multiple matches (ALL)", async () => {
        await group.setRules([
          { key: "ltv", match: 1, operation: { op: "gte" } },
          { key: "lastName", match: "mario", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("multiple matches (ANY)", async () => {
        await group.update({ matchType: "any" });
        await group.setRules([
          { key: "ltv", match: 1, operation: { op: "gte" } },
          { key: "lastName", match: "%toad%", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("null match", async () => {
        await group.setRules([
          { key: "ltv", match: "null", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      test("not null match", async () => {
        await group.setRules([
          { key: "ltv", match: "null", operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("exists", async () => {
        await group.setRules([{ key: "ltv", operation: { op: "exists" } }]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("notExists", async () => {
        await group.setRules([{ key: "ltv", operation: { op: "notExists" } }]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      test("array property exists", async () => {
        await group.setRules([
          { key: "purchaseAmounts", operation: { op: "exists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("array property does not exists", async () => {
        await group.setRules([
          { key: "purchaseAmounts", operation: { op: "notExists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("array property equals", async () => {
        await group.setRules([
          { key: "purchaseAmounts", match: 50, operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("array property not equals", async () => {
        await group.setRules([
          { key: "purchaseAmounts", match: 50, operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("array property comparisons gt", async () => {
        await group.setRules([
          { key: "purchaseAmounts", match: 50, operation: { op: "gt" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("array property comparisons lte", async () => {
        await group.setRules([
          { key: "purchaseAmounts", match: 50, operation: { op: "lte" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });
    });
  });
});
