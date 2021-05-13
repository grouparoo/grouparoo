import { helper } from "@grouparoo/spec-helper";
import {
  plugin,
  Profile,
  ProfileProperty,
  Property,
  Group,
  GroupMember,
  App,
  Source,
  Log,
} from "../../../src";
import { ProfileOps } from "../../../src/modules/ops/profile";
import { api, specHelper } from "actionhero";

function simpleProfileValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleProfileProperties = {};
  keys.forEach((key) => {
    simpleProfileProperties[key] = complexProfileValues[key].values;
  });
  return simpleProfileProperties;
}

describe("models/profile", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  test("a profile can be created", async () => {
    const profile = new Profile();

    await profile.save();

    expect(profile.id.length).toBe(40);
    expect(profile.createdAt).toBeTruthy();
    expect(profile.updatedAt).toBeTruthy();
  });

  it("profiles can retrieve related log messages with custom messages", async () => {
    const profile = await Profile.findOne();
    const logs = await profile.$get("logs");
    expect(logs.length).toBe(1);
    expect(logs[0].topic).toBe("profile");
    expect(logs[0].verb).toBe("create");
    expect(logs[0].message).toBe("profile created");
  });

  it("deleting a profile creates a custom log messages", async () => {
    const profile = await Profile.create();
    await profile.destroy();
    const logs = await profile.$get("logs", { order: [["createdAt", "asc"]] });
    expect(logs.length).toBe(2);
    expect(logs[1].topic).toBe("profile");
    expect(logs[1].verb).toBe("destroy");
    expect(logs[1].message).toBe("profile destroyed");
  });

  describe("findOrCreateByUniqueProfileProperties", () => {
    let source: Source;
    let toad: Profile;
    let emailProperty: Property;
    let userIdProperty: Property;
    let colorProperty: Property;
    let houseProperty: Property;

    beforeAll(async () => {
      await Profile.truncate();

      source = await helper.factories.source();
      await source.setOptions({ table: "test table" });
      await source.bootstrapUniqueProperty("userId", "integer", "id");
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      userIdProperty = await Property.findOne({
        where: { key: "userId" },
      });

      emailProperty = await Property.create({
        sourceId: source.id,
        key: "email",
        type: "email",
        unique: true,
      });
      await emailProperty.setOptions({ column: "email" });
      await emailProperty.update({ state: "ready" });

      colorProperty = await Property.create({
        sourceId: source.id,
        key: "color",
        type: "string",
        unique: false,
      });
      await colorProperty.setOptions({ column: "color" });
      await colorProperty.update({ state: "ready" });

      houseProperty = await Property.create({
        sourceId: source.id,
        key: "house",
        type: "string",
        unique: false,
      });
      await houseProperty.setOptions({ column: "house" });
      await houseProperty.update({ state: "ready" });

      const profile = await Profile.create();
      await profile.addOrUpdateProperties({
        email: ["toad@example.com"],
        color: ["orange"],
      });

      toad = profile;
    });

    afterAll(async () => {
      await source.setMapping({});
      await toad.destroy();
      await userIdProperty.destroy();
      await emailProperty.destroy();
      await colorProperty.destroy();
      await houseProperty.destroy();
      await source.destroy();
    });

    test("it can find the profile via email", async () => {
      const { profile, isNew } =
        await ProfileOps.findOrCreateByUniqueProfileProperties({
          email: ["toad@example.com"],
          color: ["orange"],
        });

      expect(isNew).toBe(false);
      expect(profile.id).toBe(toad.id);
    });

    test("it cannot find the profile by color and will create a new one", async () => {
      const { profile, isNew } =
        await ProfileOps.findOrCreateByUniqueProfileProperties({
          email: ["luigi@example.com"],
          color: ["green"],
        });

      expect(isNew).toBe(true);
      expect(profile.id).not.toBe(toad.id);
    });

    test("it will throw an error if no unique profile properties are included", async () => {
      await expect(
        ProfileOps.findOrCreateByUniqueProfileProperties({
          color: ["orange"],
        })
      ).rejects.toThrow(
        'there are no unique profile properties provided in {"color":["orange"]}'
      );
    });

    test("it will lock when creating new profiles so duplicate profiles are not created", async () => {
      const responseA = await ProfileOps.findOrCreateByUniqueProfileProperties({
        email: ["bowser@example.com"],
        color: ["green"],
      });

      const responseB = await ProfileOps.findOrCreateByUniqueProfileProperties({
        email: ["bowser@example.com"],
        house: ["castle"],
      });

      expect(responseA.profile.id).toEqual(responseB.profile.id);
      expect(responseA.isNew).toBe(true);
      expect(responseB.isNew).toBe(false);
    });

    test("it will merge overlapping unique properties and not store non-unique properties", async () => {
      const responseA = await ProfileOps.findOrCreateByUniqueProfileProperties({
        email: ["koopa@example.com"],
        userId: [99],
      });

      const responseB = await ProfileOps.findOrCreateByUniqueProfileProperties({
        userId: [99],
        house: ["castle"],
      });

      expect(responseA.profile.id).toEqual(responseB.profile.id);
      expect(responseA.isNew).toBe(true);
      expect(responseB.isNew).toBe(false);

      const profile = responseB.profile;
      const properties = await profile.properties();
      expect(properties.email.values).toEqual(["koopa@example.com"]);
      expect(properties.userId.values).toEqual([99]);
      expect(properties.house.values).toEqual([null]);
      expect(properties.house.values).toEqual([null]);
    });

    test("properties will include the value, type, unique, and timestamps", async () => {
      const properties = await toad.properties();
      expect(properties.email.type).toBe("email");
      expect(properties.email.unique).toBe(true);
      expect(properties.email.values[0]).toBe("toad@example.com");
      expect(properties.email.createdAt).toBeTruthy();
      expect(properties.email.updatedAt).toBeTruthy();
    });
  });

  describe("profile property helpers", () => {
    let profile: Profile;
    beforeAll(async () => {
      await Profile.truncate();
    });

    test("it cannot add a profile property that is not defined", async () => {
      profile = new Profile();
      await profile.save();
      await expect(
        profile.addOrUpdateProperties({ email: ["luigi@example.com"] })
      ).rejects.toThrow("cannot find a property for id or key `email`");
      await profile.destroy();
    });

    describe("with properties", () => {
      let source: Source;

      beforeAll(async () => {
        source = await helper.factories.source();
        await source.setOptions({ table: "test table" });
        await source.bootstrapUniqueProperty("userId", "integer", "id");
        await source.setMapping({ id: "userId" });
        await source.update({ state: "ready" });

        const emailProperty = await Property.create({
          sourceId: source.id,
          key: "email",
          type: "string",
        });
        await emailProperty.setOptions({ column: "email" });
        await emailProperty.update({ state: "ready" });

        const firstNameProperty = await Property.create({
          sourceId: source.id,
          key: "firstName",
          type: "string",
        });
        await firstNameProperty.setOptions({ column: "firstName" });
        await firstNameProperty.update({ state: "ready" });

        const lastNameProperty = await Property.create({
          sourceId: source.id,
          key: "lastName",
          type: "string",
        });
        await lastNameProperty.setOptions({ column: "lastName" });
        await lastNameProperty.update({ state: "ready" });

        const colorProperty = await Property.create({
          sourceId: source.id,
          key: "color",
          type: "string",
        });
        await colorProperty.setOptions({ column: "color" });
        await colorProperty.update({ state: "ready" });
      });

      beforeAll(async () => {
        profile = new Profile();
        await profile.save();
      });

      afterAll(async () => {
        await source.setMapping({});
        await Property.truncate();
        await source.destroy();
      });

      test("creating a profile creates null profile properties", async () => {
        const newProfile = await Profile.create();
        const properties = await newProfile.properties();
        expect(Object.keys(properties).length).toBe(5);
        for (const k in properties) {
          expect(properties[k].values).toEqual([null]);
        }
      });

      test("a profile can be marked as pending and it's properties will be marked as pending as well", async () => {
        const newProfile = await Profile.create();
        await newProfile.update({ state: "ready" });
        await ProfileProperty.update(
          { state: "ready" },
          { where: { profileId: newProfile.id } }
        );

        await newProfile.markPending();
        await newProfile.reload();

        expect(newProfile.state).toBe("pending");
        const properties = await newProfile.properties();
        for (const k in properties) {
          if (k === "userId") {
            expect(properties[k].state).toEqual("ready");
          } else {
            expect(properties[k].state).toEqual("pending");
            expect(properties[k].startedAt).toBeNull();
          }
        }
      });

      test("it can add a new profile property when the schema is prepared", async () => {
        await profile.addOrUpdateProperties({ email: ["luigi@example.com"] });
        const properties = await profile.properties();
        expect(simpleProfileValues(properties)).toEqual({
          email: ["luigi@example.com"],
          firstName: [null],
          lastName: [null],
          userId: [null],
          color: [null],
        });
      });

      test("adding values to profile properties moves them to the ready state", async () => {
        await ProfileProperty.update(
          { state: "pending" },
          { where: { profileId: profile.id } }
        );

        await profile.addOrUpdateProperties({ email: ["luigi@example.com"] });
        const properties = await profile.properties();
        expect(properties.email.state).toBe("ready");
        expect(properties.firstName.state).toBe("pending");
      });

      test("profile cannot transition to ready state until all properties are ready", async () => {
        await ProfileProperty.update(
          { state: "pending" },
          { where: { profileId: profile.id } }
        );

        await expect(profile.update({ state: "ready" })).rejects.toThrow(
          /cannot transition profile .* to ready state as not all properties are ready/
        );
      });

      test("profile can transition to ready state if all properties are ready", async () => {
        await ProfileProperty.update(
          { state: "ready" },
          { where: { profileId: profile.id } }
        );

        await profile.update({ state: "ready" }); // does not throw
      });

      describe("profile property timestamps (non-array)", () => {
        test("changing a value sets valueChangedAt and confirmedAt", async () => {
          const start = new Date().getTime();

          await profile.addOrUpdateProperties({
            email: ["new-email@example.com"],
          });
          const properties = await profile.properties();
          expect(properties.email.valueChangedAt.getTime()).toBeGreaterThan(
            start
          );
          expect(properties.email.confirmedAt.getTime()).toBeGreaterThan(start);
        });

        test("updating with the same value only sets confirmedAt", async () => {
          const start = new Date().getTime();

          await profile.addOrUpdateProperties({
            email: ["new-email@example.com"],
          });
          const properties = await profile.properties();
          expect(properties.email.valueChangedAt.getTime()).toBeLessThan(start);
          expect(properties.email.confirmedAt.getTime()).toBeGreaterThan(start);
        });

        test("changing state sets stateChangedAt", async () => {
          await ProfileProperty.update(
            { state: "pending" },
            { where: { profileId: profile.id } }
          );
          const start = new Date().getTime();

          await profile.addOrUpdateProperties({
            email: ["new-email@example.com"],
          });
          const properties = await profile.properties();
          expect(properties.email.stateChangedAt.getTime()).toBeGreaterThan(
            start
          );
        });
      });

      describe("profile property timestamps (array)", () => {
        let purchasesProperty: Property;

        beforeAll(async () => {
          purchasesProperty = await Property.create({
            sourceId: source.id,
            key: "purchases",
            type: "string",
            isArray: true,
          });
          await purchasesProperty.setOptions({ column: "purchases" });
          await purchasesProperty.update({ state: "ready" });
        });

        afterAll(async () => {
          await purchasesProperty.destroy();
        });

        test("changing a value sets valueChangedAt and confirmedAt", async () => {
          const start = new Date().getTime();

          await profile.addOrUpdateProperties({
            purchases: ["hat"],
          });
          let properties = await profile.properties();
          expect(properties.purchases.valueChangedAt.getTime()).toBeGreaterThan(
            start
          );
          const firstChangeAt = properties.purchases.valueChangedAt.getTime();
          expect(properties.purchases.confirmedAt.getTime()).toBeGreaterThan(
            start
          );

          await profile.addOrUpdateProperties({
            purchases: ["hat", "mushroom"],
          });
          properties = await profile.properties();
          expect(properties.purchases.valueChangedAt.getTime()).toBeGreaterThan(
            firstChangeAt
          );
        });

        test("updating with the same value only sets confirmedAt", async () => {
          const start = new Date().getTime();

          await profile.addOrUpdateProperties({
            purchases: ["hat", "mushroom"],
          });
          const properties = await profile.properties();
          expect(properties.purchases.valueChangedAt.getTime()).toBeLessThan(
            start
          );
          expect(properties.purchases.confirmedAt.getTime()).toBeGreaterThan(
            start
          );
        });

        test("changing state sets stateChangedAt", async () => {
          await ProfileProperty.update(
            { state: "pending" },
            { where: { profileId: profile.id } }
          );
          const start = new Date().getTime();

          await profile.addOrUpdateProperties({
            purchases: ["hat", "mushroom"],
          });
          const properties = await profile.properties();
          expect(properties.purchases.stateChangedAt.getTime()).toBeGreaterThan(
            start
          );
        });
      });

      test("it can add properties in bulk with proper timestamps", async () => {
        await profile.addOrUpdateProperties({
          email: ["luigi@example.com"],
          firstName: ["Luigi"],
          lastName: ["Mario"],
          color: ["green"],
          userId: [123],
        });

        const properties = await profile.properties();
        expect(simpleProfileValues(properties)).toEqual({
          email: ["luigi@example.com"],
          firstName: ["Luigi"],
          lastName: ["Mario"],
          color: ["green"],
          userId: [123],
        });

        expect(profile.createdAt.getTime()).toBeLessThan(
          properties.color.createdAt.getTime()
        );
        expect(profile.updatedAt.getTime()).toBeLessThan(
          properties.color.updatedAt.getTime()
        );
      });

      test("it can update an existing property", async () => {
        await profile.addOrUpdateProperties({
          email: ["luigi-again@example.com"],
        });
        const properties = await profile.properties();
        expect(simpleProfileValues(properties)).toEqual({
          email: ["luigi-again@example.com"],
          firstName: ["Luigi"],
          lastName: ["Mario"],
          color: ["green"],
          userId: [123],
        });
      });

      test("it will ignore the property _meta, as it is reserved", async () => {
        await profile.addOrUpdateProperties({ _meta: ["bla"] });
        const properties = await profile.properties();
        expect(simpleProfileValues(properties)._meta).toBeFalsy();
      });

      test("it can remove an existing property", async () => {
        await profile.removeProperty("email");
        const properties = await profile.properties();
        expect(simpleProfileValues(properties)).toEqual({
          firstName: ["Luigi"],
          lastName: ["Mario"],
          color: ["green"],
          userId: [123],
        });
      });

      test("no problems arise when re-adding a deleted property", async () => {
        let properties = await profile.properties();
        expect(properties.email).toBeUndefined();
        await profile.addOrUpdateProperties({ email: ["luigi@example.com"] });
        properties = await profile.properties();
        expect(properties.email.values).toEqual(["luigi@example.com"]);
      });

      test("it will not raise when trying to remove a non-existent property", async () => {
        await profile.removeProperty("funky");
        const properties = await profile.properties();
        expect(simpleProfileValues(properties)).toEqual({
          email: ["luigi@example.com"],
          firstName: ["Luigi"],
          lastName: ["Mario"],
          color: ["green"],
          userId: [123],
        });
      });

      test("profile properties can be addded by key", async () => {
        await profile.addOrUpdateProperties({ email: ["luigi@example.com"] });
        const properties = await profile.properties();
        expect(simpleProfileValues(properties).email).toEqual([
          "luigi@example.com",
        ]);
      });

      test("profile properties can be addded by id", async () => {
        const emailProperty = await Property.findOne({
          where: { key: "email" },
        });
        await profile.addOrUpdateProperties({
          [emailProperty.id]: ["luigi@example.com"],
        });

        const properties = await profile.properties();
        expect(simpleProfileValues(properties).email).toEqual([
          "luigi@example.com",
        ]);
      });

      test("orphan profile properties will be removed", async () => {
        await profile.reload();

        const profileProperty = await ProfileProperty.create(
          {
            id: "rule_missing",
            profileId: profile.id,
            propertyId: "missing",
            rawValue: "green-hat",
            position: 0,
          },
          //@ts-ignore
          { hooks: false } // we need to skip validations
        );

        const properties = await profile.properties(); // does not throw
        expect(Object.keys(properties).length).toBe(5);

        await expect(profileProperty.reload()).rejects.toThrow(
          /does not exist anymore/
        );
      });

      test("deleting the profile also deletes the properties", async () => {
        const beforeCount = await ProfileProperty.count({
          where: { profileId: profile.id },
        });
        expect(beforeCount).toBe(5);
        await profile.destroy();
        const afterCount = await ProfileProperty.count({
          where: { profileId: profile.id },
        });
        expect(afterCount).toBe(0);
      });

      describe("array properties", () => {
        let purchasesProperty: Property;

        beforeAll(async () => {
          const purchasesProperty = await Property.create({
            sourceId: source.id,
            key: "purchases",
            type: "string",
            isArray: true,
          });
          await purchasesProperty.setOptions({ column: "purchases" });
          await purchasesProperty.update({ state: "ready" });
        });

        afterAll(async () => {
          await purchasesProperty.destroy();
        });

        test("multiple values can be set for array properties and the order is maintained", async () => {
          await profile.addOrUpdateProperties({
            email: ["luigi@example.com"],
            firstName: ["Luigi"],
            lastName: ["Mario"],
            color: ["green"],
            userId: [123],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
          const properties = await profile.properties();
          expect(simpleProfileValues(properties)).toEqual({
            email: ["luigi@example.com"],
            firstName: ["Luigi"],
            lastName: ["Mario"],
            color: ["green"],
            userId: [123],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
        });

        test("when array properties are the same, they will have bumped timestamps", async () => {
          await profile.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
          const firstProperties = await profile.properties();
          const firstUpdate = firstProperties.purchases.updatedAt;

          await profile.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
          const secondProperties = await profile.properties();
          expect(
            secondProperties.purchases.updatedAt.getTime()
          ).toBeGreaterThanOrEqual(firstUpdate.getTime());
        });

        test("when any array property has changed, they will all be updated", async () => {
          await profile.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["star", "mushroom", "mushroom", "go kart"],
          });
          const firstProperties = await profile.properties();
          const firstUpdate = firstProperties.purchases.updatedAt;

          await profile.addOrUpdateProperties({
            email: ["luigi@example.com"],
            purchases: ["go kart"],
          });
          const secondProperties = await profile.properties();
          expect(
            secondProperties.purchases.updatedAt.getTime()
          ).toBeGreaterThan(firstUpdate.getTime());
        });

        test("other profile properties do not accept array values", async () => {
          await expect(
            profile.addOrUpdateProperties({
              firstName: ["Luigi"],
              lastName: ["Mario"],
              color: ["green", "blue", "red"],
              userId: [123],
            })
          ).rejects.toThrow(
            /cannot set multiple profile properties for a non-array property/
          );
        });
      });
    });
  });

  describe("with a manual group", () => {
    let profile: Profile;
    let group: Group;

    beforeAll(async () => {
      group = await Group.create({
        name: "test group",
        type: "manual",
        state: "ready",
      });

      profile = await Profile.create();
      await group.addProfile(profile);
    });

    test("the profile can return the groups it is a member of", async () => {
      const groups = await profile.$get("groups");
      expect(groups.length).toBe(1);
      expect(groups[0].name).toBe("test group");
    });

    test("calculating memberships will include the manual group", async () => {
      const groups = await profile.updateGroupMembership();
      expect(groups[group.id]).toEqual(true);
    });

    test("deleting the profile will also delete the groupMember", async () => {
      let count = await GroupMember.count({ where: { groupId: group.id } });
      expect(count).toBe(1);

      await profile.destroy();

      count = await GroupMember.count({ where: { groupId: group.id } });
      expect(count).toBe(0);
    });
  });

  describe("with a calculated group", () => {
    let group: Group;
    let profile: Profile;
    let app: App;
    let source: Source;
    let emailProperty: Property;

    beforeAll(async () => {
      await Profile.truncate();

      app = await App.create({
        name: "test app",
        type: "test-plugin-app",
      });
      await app.setOptions({ fileId: "abc123" });
      await app.update({ state: "ready" });

      source = await Source.create({
        appId: app.id,
        name: "test import source",
        type: "test-plugin-import",
      });
      await source.setOptions({ table: "test table" });
      await source.bootstrapUniqueProperty("userId", "integer", "id");
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      emailProperty = await Property.create({
        sourceId: source.id,
        key: "email",
        type: "string",
        unique: true,
      });
      await emailProperty.setOptions({ column: "email" });
      await emailProperty.update({ state: "ready" });

      group = await helper.factories.group({
        name: "calculated-group",
        type: "calculated",
      });

      profile = await Profile.create();
      await profile.addOrUpdateProperties({
        email: ["mario@example.com"],
      });
    });

    afterAll(async () => {
      const members = await group.$get("groupMembers");
      await Promise.all(members.map((m) => m.destroy()));
      await group.destroy();
      await source.setMapping({});
      await Property.truncate();
      await source.destroy();
      await app.destroy();
    });

    describe("#updateGroupMembership", () => {
      test("profiles can re-calculate their group memberships", async () => {
        let members = await group.$get("groupMembers");
        expect(members.length).toBe(0);

        await group.update({ matchType: "all" });
        await group.setRules([
          { key: "email", match: "%@example.com", operation: { op: "like" } },
        ]);

        const groupMemberships = await profile.updateGroupMembership();
        expect(groupMemberships[group.id]).toBe(true);

        members = await group.$get("groupMembers");
        expect(members.length).toBe(1);
        expect(members[0].profileId).toBe(profile.id);
      });
    });
  });

  describe("#import", () => {
    let emailProperty: Property;
    let colorProperty: Property;
    let app: App;
    let source: Source;

    beforeAll(async () => {
      await Profile.truncate();

      plugin.registerPlugin({
        name: "test-plugin",
        apps: [
          {
            name: "test-template-app",
            options: [],
            methods: {
              test: async () => {
                return { success: true };
              },
            },
          },
        ],
        connections: [
          {
            name: "import-from-test-template-app",
            description: "a test app connection",
            app: "test-template-app",
            direction: "import" as "import",
            options: [],
            methods: {
              profileProperty: async ({ property }) => {
                if (property.key === "color") {
                  return ["pink"];
                }
              },
            },
          },
        ],
      });

      app = await App.create({
        name: "test app",
        type: "test-template-app",
        options: {},
        state: "ready",
      });

      source = await Source.create({
        appId: app.id,
        name: "test import source",
        type: "import-from-test-template-app",
      });
      await source.bootstrapUniqueProperty("userId", "integer", "id");
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      emailProperty = await Property.create({
        sourceId: source.id,
        key: "email",
        type: "string",
        unique: true,
      });

      colorProperty = await Property.create({
        sourceId: source.id,
        key: "color",
        type: "string",
        unique: false,
      });

      await emailProperty.update({ state: "ready" });
      await colorProperty.update({ state: "ready" });
    });

    afterAll(async () => {
      await Property.truncate();
      await Source.truncate();
      await App.truncate();
    });

    test("it can pull profile properties in from all connected apps", async () => {
      const profile = await Profile.create();
      await profile.addOrUpdateProperties({ userId: [1001] });
      await profile.addOrUpdateProperties({ email: ["peach@example.com"] });
      let properties = await profile.properties();
      expect(simpleProfileValues(properties)).toEqual({
        userId: [1001],
        email: ["peach@example.com"],
        color: [null],
      });

      await profile.import();

      properties = await profile.properties();
      expect(simpleProfileValues(properties)).toEqual({
        userId: [1001],
        email: ["peach@example.com"],
        color: ["pink"],
      });
    });

    test("after importing, all missing properties will have created a null profile property", async () => {
      const profile = await Profile.create();
      await profile.addOrUpdateProperties({ userId: [1002] });
      let properties = await profile.properties();
      expect(Object.keys(properties).sort()).toEqual([
        "color",
        "email",
        "userId",
      ]);

      await profile.import();

      properties = await profile.properties();
      expect(simpleProfileValues(properties)).toEqual({
        userId: [1002],
        email: [null],
        color: ["pink"],
      });
    });
  });

  describe("events", () => {
    let profile: Profile;

    beforeAll(async () => {
      profile = await helper.factories.profile();
      await helper.factories.event({
        profileId: profile.id,
        type: "pageview",
        data: { page: "/" },
        occurredAt: new Date(1000),
      });

      helper.sleep(1001);
      await helper.factories.event({
        profileId: profile.id,
        type: "pageview",
        data: { page: "/about" },
        occurredAt: new Date(2000),
      });
      helper.sleep(1001);

      await helper.factories.event({
        profileId: profile.id,
        type: "purchase",
        data: { item: "red-shirt", value: 10 },
        occurredAt: new Date(3000),
      });
    });

    test("a profile can get events (all)", async () => {
      const events = await profile.$get("events", {
        order: [["occurredAt", "asc"]],
      });
      expect(events.length).toBe(3);
      expect(events.map((e) => e.type)).toEqual([
        "pageview",
        "pageview",
        "purchase",
      ]);
    });

    test("a profile can get events (type)", async () => {
      const events = await profile.$get("events", {
        where: { type: "purchase" },
      });
      expect(events.length).toBe(1);
      expect(events.map((e) => e.type)).toEqual(["purchase"]);
    });

    test("when a profile is deleted, it will enqueue a task to delete events", async () => {
      await api.resque.queue.connection.redis.flushdb();

      await profile.destroy();
      const foundTasks = await specHelper.findEnqueuedTasks(
        "profile:destroyEvents"
      );
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0].profileId).toBe(profile.id);
    });
  });

  describe("merging", () => {
    let profileA: Profile;
    let profileB: Profile;

    beforeAll(async () => {
      await Profile.truncate();
      await helper.factories.properties();

      // create the profiles and events
      profileA = await helper.factories.profile();
      await profileA.import();

      profileB = await helper.factories.profile();
      await profileB.import();
      await profileB.update({ anonymousId: "abc123" });

      await helper.factories.event({
        profileId: profileA.id,
        type: "pageview",
        data: { page: "/" },
      });
      await helper.factories.event({
        profileId: profileA.id,
        type: "pageview",
        data: { page: "/sign-in" },
      });
      await helper.factories.event({
        profileId: profileA.id,
        type: "pageview",
        data: { page: "/sign-purchase" },
      });

      await helper.factories.event({
        profileId: profileB.id,
        type: "pageview",
        data: { page: "/about" },
      });
      await helper.factories.event({
        profileId: profileB.id,
        type: "pageview",
        data: { page: "/item-1" },
      });

      // disable the test plugin import so we can explicitly set profile properties
      helper.disableTestPluginImport();
    });

    afterAll(async () => {
      await Property.truncate();
      await Source.truncate();
      await App.truncate();
    });

    test("the profiles both have properties and events", async () => {
      const propertiesA = await profileA.properties();
      const propertiesB = await profileB.properties();
      const eventsA = await profileA.$get("events");
      const eventsB = await profileB.$get("events");
      expect(Object.keys(propertiesA).length).toBe(9);
      expect(Object.keys(propertiesB).length).toBe(9);
      expect(eventsA.length).toBe(3);
      expect(eventsB.length).toBe(2);
    });

    test("only profile B has an anonymousId", async () => {
      expect(profileA.anonymousId).toBeFalsy();
      expect(profileB.anonymousId).toEqual("abc123");
    });

    test("profile A has newer email, profile B has newer userId, profile B has a newer ltv but it is null", async () => {
      await profileA.addOrUpdateProperties({ ltv: [123.45] });
      await profileB.addOrUpdateProperties({ userId: [100] });
      await profileB.addOrUpdateProperties({ firstName: ["fname"] });

      // bump the updatedAt time for the email profile property, even though they remain null
      await helper.sleep(1001);
      await profileA.addOrUpdateProperties({
        email: ["new-email@example.com"],
      });

      const propertiesA = await profileA.properties();
      const propertiesB = await profileB.properties();

      expect(propertiesA.email.values).toEqual(["new-email@example.com"]);
      expect(propertiesA.userId.values).toBeTruthy();
      expect(propertiesA.firstName.values).toEqual(["Mario"]);
      expect(propertiesA.ltv.values).toEqual([123.45]);

      expect(propertiesB.email.values).toBeTruthy();
      expect(propertiesB.userId.values).toEqual([100]);
      expect(propertiesB.firstName.values).toEqual(["fname"]);
      expect(propertiesB.ltv.values).toEqual([100]);

      expect(propertiesA.email.updatedAt.getTime()).toBeGreaterThan(
        propertiesB.email.updatedAt.getTime()
      );
    });

    test("profile A and B each have different purchases", async () => {
      await profileA.addOrUpdateProperties({ purchases: ["hat"] });
      await profileB.addOrUpdateProperties({ purchases: ["shoe"] });
    });

    test("merging profiles moved the events & properties", async () => {
      await ProfileOps.merge(profileA, profileB);

      const propertiesA = await profileA.properties();
      const propertiesB = await profileB.properties();
      const eventsA = await profileA.$get("events");
      const eventsB = await profileB.$get("events");
      expect(Object.keys(propertiesA).length).toBe(9);
      expect(Object.keys(propertiesB).length).toBe(0);
      expect(eventsA.length).toBe(5);
      expect(eventsB.length).toBe(0);
    });

    test("the merged profile kept the newer non-null properties", async () => {
      const properties = await profileA.properties();
      expect(properties.email.values).toEqual(["new-email@example.com"]);
      expect(properties.userId.values).toEqual([100]);
      expect(properties.firstName.values).toEqual(["fname"]);
      expect(properties.ltv.values).toEqual([123.45]);
    });

    test("the merged profiles should have only kept the array properties of the newest profile property", async () => {
      // we can't be sure of the array-order for the combined profiles.  A re-import should be deterministic too
      const propertiesA = await profileA.properties();
      expect(propertiesA.purchases.values).toEqual(["shoe"]);
    });

    test("the merged profile is pending", async () => {
      await profileA.reload();
      expect(profileA.state).toBe("pending");
      const properties = await profileA.properties();
      for (const k in properties) {
        k === "userId"
          ? expect(properties[k].state).toBe("ready")
          : expect(properties[k].state).toBe("pending");
      }
    });

    test("the merged profile has a log entry about the merge", async () => {
      const logs = await Log.findAll({
        where: { ownerId: profileA.id, verb: "merge" },
      });
      expect(logs.length).toEqual(1);
      expect(logs[0].message).toEqual(`merged with profile ${profileB.id}`);
    });

    test("merging profiles moved the anonymousId", async () => {
      await profileA.reload();
      expect(profileA.anonymousId).toEqual("abc123");
    });

    test("after merging the other profile is deleted", async () => {
      await expect(profileB.reload()).rejects.toThrow(/does not exist/);
      const profiles = await Profile.findAll();
      expect(profiles.length).toBe(1);
    });
  });
});
