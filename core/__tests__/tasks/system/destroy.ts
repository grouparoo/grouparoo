import { helper } from "@grouparoo/spec-helper";
import {
  Property,
  Source,
  App,
  Destination,
  Group,
  Profile,
  ProfileProperty,
  Export,
} from "../../../src";
import { api, task, specHelper } from "actionhero";

describe("tasks/destroy", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("destroy", () => {
    beforeAll(async () => {
      await helper.factories.properties();
    });

    beforeEach(async () => await api.resque.queue.connection.redis.flushdb());

    test("it can be enqueued", async () => {
      await task.enqueue("destroy", {});
      const found = await specHelper.findEnqueuedTasks("destroy");
      expect(found.length).toEqual(1);
    });

    test("it will enqueue destroy tasks for deleted properties", async () => {
      const source: Source = await helper.factories.source();
      await source.setOptions({ table: "some_table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      const property: Property = await helper.factories.property(
        source,
        {},
        { column: "col" }
      );
      await property.update({ state: "deleted" });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("property:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].propertyId).toBe(property.id);
    });

    test("it will enqueue destroy tasks for deleted groups", async () => {
      const group: Group = await helper.factories.group();
      await group.update({ state: "deleted" });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("group:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].groupId).toBe(group.id);
    });

    test("it will enqueue destroy tasks for deleted sources", async () => {
      const source = await helper.factories.source(undefined, {
        state: "deleted",
      });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("source:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].sourceId).toBe(source.id);
    });

    test("it will enqueue destroy tasks for deleted destinations", async () => {
      const destination: Destination = await helper.factories.destination();
      await destination.update({ state: "deleted" });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("destination:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].destinationId).toBe(destination.id);
    });

    test("it will enqueue destroy tasks for deleted apps", async () => {
      const app: App = await helper.factories.app();
      await app.update({ state: "deleted" });

      await specHelper.runTask("destroy", {});

      const found = await specHelper.findEnqueuedTasks("app:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].appId).toBe(app.id);
    });

    describe("profiles", () => {
      let userIdProperty: Property;
      beforeAll(async () => {
        userIdProperty = await Property.findOne({ where: { key: "userId" } });
        expect(userIdProperty.directlyMapped).toBe(true);
      });

      test("it will enqueue destroy task for profiles with a directlyMapped property set to null", async () => {
        const profile: Profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({
          userId: [null],
          isVIP: [true],
          ltv: [213],
        });

        await ProfileProperty.update(
          { state: "ready" },
          { where: { profileId: profile.id } }
        );
        await profile.update({ state: "ready" });

        await specHelper.runTask("destroy", {});

        const found = await specHelper.findEnqueuedTasks("profile:destroy");
        expect(found.length).toEqual(1);
        expect(found[0].args[0].profileId).toBe(profile.id);

        await profile.destroy();
      });

      test("does not enqueue destroy task for profiles that aren't done importing", async () => {
        const profile: Profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({
          userId: [null],
          isVIP: [true],
          ltv: [213],
        });

        await ProfileProperty.update(
          { state: "pending" },
          { where: { profileId: profile.id } }
        );
        await profile.update({ state: "pending" });

        await specHelper.runTask("destroy", {});

        const found = await specHelper.findEnqueuedTasks("profile:destroy");
        expect(found.length).toEqual(0);

        await profile.destroy();
      });

      // this test should be last
      test("it will enqueue destroy task for profiles when there is no directlyMapped property", async () => {
        const profile: Profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({
          userId: [1000],
          isVIP: [true],
          ltv: [213],
        });

        await ProfileProperty.update(
          { state: "ready" },
          { where: { profileId: profile.id } }
        );
        await profile.update({ state: "ready" });

        await specHelper.runTask("destroy", {});

        let found = await specHelper.findEnqueuedTasks("profile:destroy");
        expect(found.length).toEqual(0);

        // now remove the directly mapped property
        // @ts-ignore
        await userIdProperty.destroy({ hooks: false });

        await specHelper.runTask("destroy", {});

        found = await specHelper.findEnqueuedTasks("profile:destroy");
        expect(found.length).toEqual(1);
        expect(found[0].args[0].profileId).toBe(profile.id);

        await profile.destroy();
      });
    });
  });
});
