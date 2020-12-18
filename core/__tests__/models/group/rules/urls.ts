import { SharedGroupTests } from "../../../utils/prepareSharedGroupTest";
import { Group } from "../../../../src/models/Group";
import { Profile } from "../../../../src/models/Profile";
import { Property } from "../../../../src/models/Property";
import { helper } from "@grouparoo/spec-helper";

describe("model/group", () => {
  let group: Group;
  let mario: Profile;
  let luigi: Profile;
  let peach: Profile;
  let toad: Profile;
  let urlRule: Property;

  beforeAll(async () => {
    const response = await SharedGroupTests.beforeAll();
    mario = response.mario;
    luigi = response.luigi;
    peach = response.peach;
    toad = response.toad;

    const emailRule = await Property.findOne({
      where: { key: "email" },
    });

    urlRule = await Property.create({
      isArray: true,
      unique: false,
      key: "url",
      type: "url",
      sourceGuid: emailRule.sourceGuid,
    });
    await urlRule.setOptions({ column: "url" });
    await urlRule.update({ state: "ready" });

    await mario.addOrUpdateProperties({ url: ["https://nintendo.com"] });
    await luigi.addOrUpdateProperties({ url: ["https://nintendo.com"] });
    await peach.addOrUpdateProperties({
      url: ["https://nintendo.com", "http://mushroom-kingdom.gov"],
    });
    await toad.buildNullProperties();
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
    describe("URLs", () => {
      test("exact matches", async () => {
        await group.setRules([
          {
            key: "url",
            match: "https://nintendo.com",
            operation: { op: "eq" },
          },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("partial matches", async () => {
        await group.setRules([
          { key: "url", match: "%.com", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("multiple rules with same key", async () => {
        await group.setRules([
          { key: "url", match: "https%", operation: { op: "like" } },
          { key: "url", match: "%.com", operation: { op: "like" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("null match", async () => {
        await group.setRules([
          { key: "url", match: "null", operation: { op: "eq" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(1);
      });

      test("not null match", async () => {
        await group.setRules([
          { key: "url", match: "null", operation: { op: "ne" } },
        ]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("exists", async () => {
        await group.setRules([{ key: "url", operation: { op: "exists" } }]);
        expect(await group.countPotentialMembers()).toBe(3);
      });

      test("notExists", async () => {
        await group.setRules([{ key: "url", operation: { op: "notExists" } }]);
        expect(await group.countPotentialMembers()).toBe(1);
      });
    });
  });
});
