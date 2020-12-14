import { SharedGroupTests } from "../../../utils/prepareSharedGroupTest";
import { Group } from "../../../../src/models/Group";
import { GroupRule } from "../../../../src/models/GroupRule";
import { Profile } from "../../../../src/models/Profile";
import { helper } from "@grouparoo/spec-helper";

describe("model/group", () => {
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
    describe("top level group rules", () => {
      test("groupRule can be saved without topLevel indicating they have a profileColumn", async () => {
        await group.setRules([
          {
            key: "guid",
            operation: { op: "exists" },
          },
        ]);

        const rules = await group.getRules();
        expect(rules.length).toBe(1);
        expect(rules[0]).toEqual({
          key: "guid",
          topLevel: true,
          type: "string",
          operation: { op: "ne", description: "exists with any value" },
          match: "null",
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          relativeMatchDirection: null,
        });

        const groupRule = await GroupRule.findOne({
          where: { groupGuid: group.guid },
        });
        expect(groupRule.profileColumn).toBe("guid");
        expect(groupRule.propertyGuid).toBe(null);

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

      test("GroupRules must have either a profilePropertyGuid or a profileColumn", async () => {
        await expect(
          GroupRule.create({
            position: 1,
            op: "eq",
            groupGuid: group.guid,
          })
        ).rejects.toThrow(
          /either propertyGuid or profileColumn is required for a GroupRule/
        );
      });

      test("testing group counts without saving woks when topLevel is provided", async () => {
        await group.setRules([]);

        // OK
        const count = await group.countPotentialMembers([
          {
            key: "guid",
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
              key: "guid",
              match: "pro%",
              operation: { op: "exists" },
            },
          ])
        ).rejects.toThrow(/cannot find type for Property gui/);
      });

      describe("guid", () => {
        test("exact matches", async () => {
          await group.setRules([
            {
              key: "guid",
              match: mario.guid,
              operation: { op: "eq" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(1);
        });

        test("partial matches", async () => {
          await group.setRules([
            { key: "guid", match: "pro%", operation: { op: "like" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("multiple rules with same key", async () => {
          await group.setRules([
            { key: "guid", match: "pro%", operation: { op: "like" } },
            { key: "guid", match: "pro_%", operation: { op: "like" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("null match", async () => {
          await group.setRules([
            { key: "guid", match: "null", operation: { op: "eq" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });

        test("not null match", async () => {
          await group.setRules([
            { key: "guid", match: "null", operation: { op: "ne" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("exists", async () => {
          await group.setRules([{ key: "guid", operation: { op: "exists" } }]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("notExists", async () => {
          await group.setRules([
            { key: "guid", operation: { op: "notExists" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });
      });

      describe("createdAt", () => {
        test("exact matches", async () => {
          await group.setRules([
            {
              key: "createdAt",
              match: new Date(0).getTime(),
              operation: { op: "eq" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });

        test("comparison matches", async () => {
          await group.setRules([
            {
              key: "createdAt",
              match: new Date(0).getTime(),
              operation: { op: "gt" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("null match", async () => {
          await group.setRules([
            { key: "createdAt", match: "null", operation: { op: "eq" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });

        test("not null match", async () => {
          await group.setRules([
            { key: "createdAt", match: "null", operation: { op: "ne" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("exists", async () => {
          await group.setRules([
            { key: "createdAt", operation: { op: "exists" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("notExists", async () => {
          await group.setRules([
            { key: "createdAt", operation: { op: "notExists" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });
      });

      describe("relative dates", () => {
        test("comparison matches (with matches)", async () => {
          await group.setRules([
            {
              key: "createdAt",
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
              key: "createdAt",
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
