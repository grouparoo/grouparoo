import { Group } from "../../../../src/models/Group";
import { Profile } from "../../../../src/models/Profile";
import { ProfilePropertyRule } from "../../../../src/models/ProfilePropertyRule";
import { SharedGroupTests } from "../../../utils/prepareSharedGroupTest";

describe("model/group", () => {
  let group: Group;
  let luigi: Profile;
  let emailRule: ProfilePropertyRule;

  beforeAll(async () => {
    const response = await SharedGroupTests.beforeAll();
    luigi = response.luigi;

    emailRule = await ProfilePropertyRule.findOne({
      where: { key: "email" },
    });
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
    describe("emails", () => {
      test("exact matches", async () => {
        await group.setRules([
          { key: "email", match: "mario@example.com", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("partial matches", async () => {
        await group.setRules([
          { key: "email", match: "%@example.com", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("multiple rules with same key", async () => {
        await group.setRules([
          { key: "email", match: "mario%", operation: { op: "iLike" } },
          { key: "email", match: "%@example.com", operation: { op: "iLike" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("null match", async () => {
        await group.setRules([
          { key: "email", match: "null", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      test("not null match", async () => {
        await group.setRules([
          { key: "email", match: "null", operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("exists", async () => {
        await group.setRules([{ key: "email", operation: { op: "exists" } }]);
        expect(await group.countPotentialMembers()).toBe(4);
      });

      test("notExists", async () => {
        await group.setRules([
          { key: "email", operation: { op: "notExists" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(0);
      });

      describe("with arrays", () => {
        beforeAll(async () => {
          await emailRule.update({ isArray: true, unique: false });
          await luigi.addOrUpdateProperties({
            email: ["luigi@example.com", "ghostbuster@example.com"],
          });
        });

        test("array property exists", async () => {
          await group.setRules([{ key: "email", operation: { op: "exists" } }]);
          expect(await group.countPotentialMembers()).toBe(4);
        });

        test("array property does not exists", async () => {
          await group.setRules([
            { key: "email", operation: { op: "notExists" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(0);
        });

        test("array property equals", async () => {
          await group.setRules([
            {
              key: "email",
              match: "luigi@example.com",
              operation: { op: "eq" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(1);
        });

        test("array property not equals", async () => {
          await group.setRules([
            {
              key: "email",
              match: "luigi@example.com",
              operation: { op: "ne" },
            },
          ]);
          expect(await group.countPotentialMembers()).toBe(3);
        });

        test("array property like", async () => {
          await group.setRules([
            { key: "email", match: "%ghost%", operation: { op: "like" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(1);
        });

        test("array property not like", async () => {
          await group.setRules([
            { key: "email", match: "%ghost%", operation: { op: "notLike" } },
          ]);
          expect(await group.countPotentialMembers()).toBe(3);
        });
      });
    });
  });
});
