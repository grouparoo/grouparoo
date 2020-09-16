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
    describe("strings", () => {
      test("exact matches", async () => {
        await group.setRules([
          { key: "lastName", match: "Mario", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("partial matches", async () => {
        await group.setRules([
          { key: "lastName", match: "%toad%", operation: { op: "iLike" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("multiple rules with same key", async () => {
        await group.setRules([
          { key: "lastName", match: "Mario", operation: { op: "eq" } },
          { key: "lastName", match: "%a%", operation: { op: "iLike" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("multiple matches (ALL)", async () => {
        await group.setRules([
          { key: "lastName", match: "%toad%", operation: { op: "iLike" } },
          { key: "firstName", match: "Peach", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("multiple matches (ANY)", async () => {
        await group.update({ matchType: "any" });
        await group.setRules([
          { key: "lastName", match: "%toad%", operation: { op: "iLike" } },
          { key: "firstName", match: "Peach", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("null match", async () => {
        await group.setRules([
          { key: "lastName", match: "null", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      test("not null match", async () => {
        await group.setRules([
          { key: "lastName", match: "null", operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("exists", async () => {
        await group.setRules([
          { key: "lastName", operation: { op: "exists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("notExists", async () => {
        await group.setRules([
          { key: "lastName", operation: { op: "notExists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      test("array property exists", async () => {
        await group.setRules([
          { key: "purchases", operation: { op: "exists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("array property does not exists", async () => {
        await group.setRules([
          { key: "purchases", operation: { op: "notExists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("array property equals", async () => {
        await group.setRules([
          { key: "purchases", match: "mushroom", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("array property not equals", async () => {
        await group.setRules([
          { key: "purchases", match: "mushroom", operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("array property like", async () => {
        await group.setRules([
          { key: "purchases", match: "mush%", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("array property not like", async () => {
        await group.setRules([
          { key: "purchases", match: "sta%", operation: { op: "notLike" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("array property iLike", async () => {
        await group.setRules([
          { key: "purchases", match: "MUSH%", operation: { op: "iLike" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("array property not iLike", async () => {
        await group.setRules([
          { key: "purchases", match: "STA%", operation: { op: "notILike" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });
    });
  });
});
