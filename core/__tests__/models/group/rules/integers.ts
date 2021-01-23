import { SharedGroupTests } from "../../../utils/prepareSharedGroupTest";
import { Group } from "../../../../src/models/Group";
import { helper } from "@grouparoo/spec-helper";

describe("model/group", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let group: Group;

  beforeAll(async () => {
    const response = await SharedGroupTests.beforeAll();
  }, helper.setupTime);

  beforeEach(async () => {
    const response = await SharedGroupTests.beforeEach();
    group = response.group;
  });

  afterEach(async () => {
    await SharedGroupTests.afterEach();
  });

  describe("rules", () => {
    describe("integers", () => {
      test("exact matches", async () => {
        await group.setRules([
          { key: "userId", match: 1, operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("comparison matches", async () => {
        await group.setRules([
          { key: "userId", match: 1, operation: { op: "gt" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("multiple rules with same key", async () => {
        await group.setRules([
          { key: "userId", match: 1, operation: { op: "gt" } },
          { key: "userId", match: 99, operation: { op: "lt" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("multiple matches (ALL)", async () => {
        await group.setRules([
          { key: "userId", match: 1, operation: { op: "eq" } },
          { key: "lastName", match: "Mario", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("multiple matches (ANY)", async () => {
        await group.update({ matchType: "any" });
        await group.setRules([
          { key: "userId", match: 1, operation: { op: "eq" } },
          { key: "lastName", match: "Mario", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("null match", async () => {
        await group.setRules([
          { key: "userId", match: "null", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      test("not null match", async () => {
        await group.setRules([
          { key: "userId", match: "null", operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("exists", async () => {
        await group.setRules([{ key: "userId", operation: { op: "exists" } }]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("notExists", async () => {
        await group.setRules([
          { key: "userId", operation: { op: "notExists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });
    });
  });
});
