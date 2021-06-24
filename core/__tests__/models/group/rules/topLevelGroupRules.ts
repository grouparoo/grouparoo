import { SharedGroupTests } from "../../../utils/prepareSharedGroupTest";
import { Profile, Group, GroupRule } from "../../../../src";
import { helper } from "@grouparoo/spec-helper";

describe("model/group", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  let group: Group;
  let mario: Profile;
  let luigi: Profile;
  let peach: Profile;
  let toad: Profile;

  beforeAll(async () => {
    const response = await SharedGroupTests.beforeAll();
    mario = response.mario;
    luigi = response.luigi;
    peach = response.peach;
    toad = response.toad;
  }, helper.setupTime);

  beforeEach(async () => {
    const response = await SharedGroupTests.beforeEach();
    group = response.group;
  });

  afterEach(async () => {
    await SharedGroupTests.afterEach();
  });

  describe("rules", () => {
    describe("top level group rules", () => {
      test("groupRule can be saved without topLevel indicating they have a profileColumn", async () => {
        await group.setRules([
          {
            key: "grouparooId",
            operation: { op: "exists" },
          },
        ]);

        const rules = await group.getRules();
        expect(rules.length).toBe(1);
        expect(rules[0]).toEqual({
          key: "grouparooId",
          topLevel: true,
          type: "string",
          operation: { op: "ne", description: "exists with any value" },
          match: "null",
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          relativeMatchDirection: null,
        });

        const groupRule = await GroupRule.findOne({
          where: { groupId: group.id },
        });
        expect(groupRule.profileColumn).toBe("grouparooId");
        expect(groupRule.propertyId).toBe(null);

        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("groupRule cannot be saved with topLevel with an invalid profileColumn", async () => {
        await expect(
          group.setRules([
            {
              key: "koopa",
              operation: { op: "exists" },
            },
          ])
        ).rejects.toThrow(/cannot find property koopa/);
      });

      test("GroupRules must have either a profilePropertyId or a profileColumn", async () => {
        await expect(
          GroupRule.create({
            position: 1,
            op: "eq",
            groupId: group.id,
          })
        ).rejects.toThrow(
          /either propertyId or profileColumn is required for a GroupRule/
        );
      });

      test("testing group counts without saving woks when topLevel is provided", async () => {
        await group.setRules([]);

        // OK
        const count = await group.countPotentialMembers([
          {
            key: "grouparooId",
            match: "pro%",
            operation: { op: "like" },
            topLevel: true,
          },
        ]);
        expect(count).toBe(4);

        // not OK
        await expect(
          group.countPotentialMembers([
            {
              key: "id",
              match: "pro%",
              operation: { op: "exists" },
            },
          ])
        ).rejects.toThrow(/cannot find type for Property id/);
      });

      describe("grouparooId", () => {
        test("exact matches", async () => {
          await group.setRules([
            {
              key: "grouparooId",
              match: mario.id,
              operation: { op: "eq" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(1);
        });

        test("partial matches", async () => {
          await group.setRules([
            { key: "grouparooId", match: "pro%", operation: { op: "like" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("multiple rules with same key", async () => {
          await group.setRules([
            { key: "grouparooId", match: "pro%", operation: { op: "like" } },
            { key: "grouparooId", match: "pro_%", operation: { op: "like" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("null match", async () => {
          await group.setRules([
            { key: "grouparooId", match: "null", operation: { op: "eq" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });

        test("not null match", async () => {
          await group.setRules([
            { key: "grouparooId", match: "null", operation: { op: "ne" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("exists", async () => {
          await group.setRules([
            { key: "grouparooId", operation: { op: "exists" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("notExists", async () => {
          await group.setRules([
            { key: "grouparooId", operation: { op: "notExists" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });
      });

      describe("grouparooCreatedAt", () => {
        test("exact matches", async () => {
          await group.setRules([
            {
              key: "grouparooCreatedAt",
              match: new Date(0).getTime(),
              operation: { op: "eq" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });

        test("comparison matches", async () => {
          await group.setRules([
            {
              key: "grouparooCreatedAt",
              match: new Date(0).getTime(),
              operation: { op: "gt" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("null match", async () => {
          await group.setRules([
            {
              key: "grouparooCreatedAt",
              match: "null",
              operation: { op: "eq" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });

        test("not null match", async () => {
          await group.setRules([
            {
              key: "grouparooCreatedAt",
              match: "null",
              operation: { op: "ne" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("exists", async () => {
          await group.setRules([
            { key: "grouparooCreatedAt", operation: { op: "exists" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("notExists", async () => {
          await group.setRules([
            { key: "grouparooCreatedAt", operation: { op: "notExists" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });
      });

      describe("relative dates", () => {
        test("comparison matches (with matches)", async () => {
          await group.setRules([
            {
              key: "grouparooCreatedAt",
              relativeMatchNumber: 2,
              relativeMatchUnit: "days",
              relativeMatchDirection: "subtract",
              operation: { op: "gt" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("comparison matches (no matches)", async () => {
          await group.setRules([
            {
              key: "grouparooCreatedAt",
              relativeMatchNumber: 2,
              relativeMatchUnit: "days",
              relativeMatchDirection: "add",
              operation: { op: "gt" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });
      });
    });
  });
});
