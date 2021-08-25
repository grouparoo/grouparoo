import { SharedGroupTests } from "../../../utils/prepareSharedGroupTest";
import { GrouparooRecord, Group } from "../../../../src";
import { helper } from "@grouparoo/spec-helper";

describe("model/group", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let group: Group;
  let luigi: GrouparooRecord;

  beforeAll(async () => {
    const response = await SharedGroupTests.beforeAll();
    luigi = response.luigi;
  }, helper.setupTime);

  beforeEach(async () => {
    const response = await SharedGroupTests.beforeEach();
    group = response.group;
  });

  afterEach(async () => {
    await SharedGroupTests.afterEach();
  });

  describe("rules", () => {
    describe("absolute dates", () => {
      test("exact matches", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            match: new Date(0).getTime(),
            operation: { op: "eq" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("comparison matches", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            match: new Date(0).getTime(),
            operation: { op: "gt" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("multiple rules with same key", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            match: new Date(0).getTime(),
            operation: { op: "gt" },
          },
          {
            key: "lastLoginAt",
            match: new Date().getTime(),
            operation: { op: "lte" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("multiple matches (ALL)", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            match: new Date(0).getTime(),
            operation: { op: "gt" },
          },
          { key: "lastName", match: "Mario", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("multiple matches (ANY)", async () => {
        await group.update({ matchType: "any" });
        await group.setRules([
          {
            key: "lastLoginAt",
            match: new Date(0).getTime(),
            operation: { op: "gt" },
          },
          { key: "lastName", match: "Mario", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("null match", async () => {
        await group.setRules([
          { key: "lastLoginAt", match: "null", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      test("not null match", async () => {
        await group.setRules([
          { key: "lastLoginAt", match: "null", operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("exists", async () => {
        await group.setRules([
          { key: "lastLoginAt", operation: { op: "exists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("notExists", async () => {
        await group.setRules([
          { key: "lastLoginAt", operation: { op: "notExists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });
    });

    describe("relative dates", () => {
      test("comparison matches (with matches)", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            relativeMatchNumber: 2,
            relativeMatchUnit: "days",
            relativeMatchDirection: "subtract",
            operation: { op: "gt" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("comparison matches (no matches)", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            relativeMatchNumber: 2,
            relativeMatchUnit: "days",
            relativeMatchDirection: "add",
            operation: { op: "gt" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      test("comparison matches (matches)", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            relativeMatchNumber: 2,
            relativeMatchUnit: "days",
            relativeMatchDirection: "subtract",
            operation: { op: "gt" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("multiple rules with same key", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            relativeMatchNumber: 2,
            relativeMatchUnit: "days",
            relativeMatchDirection: "subtract",
            operation: { op: "gt" },
          },
          {
            key: "lastLoginAt",
            relativeMatchNumber: 3,
            relativeMatchUnit: "days",
            relativeMatchDirection: "subtract",
            operation: { op: "gt" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(2);
      });

      test("multiple matches (ALL)", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            relativeMatchNumber: 2,
            relativeMatchUnit: "days",
            relativeMatchDirection: "subtract",
            operation: { op: "gt" },
          },
          { key: "lastName", match: "Mario", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("multiple matches (ANY)", async () => {
        await group.update({ matchType: "any" });
        await group.setRules([
          {
            key: "lastLoginAt",
            relativeMatchNumber: 2,
            relativeMatchUnit: "days",
            relativeMatchDirection: "subtract",
            operation: { op: "gt" },
          },
          { key: "lastName", match: "Mario", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("relative date matchers in the future do not include the past", async () => {
        await group.setRules([
          {
            key: "lastLoginAt",
            relativeMatchNumber: 2,
            relativeMatchUnit: "days",
            relativeMatchDirection: "add",
            operation: { op: "lt" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      test("relative date matchers in the past do not include the future", async () => {
        const now = new Date().getTime();
        await luigi.addOrUpdateProperties({
          lastLoginAt: [new Date(now + 1000 * 5)],
        });

        await group.setRules([
          {
            key: "lastLoginAt",
            relativeMatchNumber: 2,
            relativeMatchUnit: "days",
            relativeMatchDirection: "add",
            operation: { op: "lt" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });
    });
  });
});
