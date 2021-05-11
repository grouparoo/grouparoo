import { helper } from "@grouparoo/spec-helper";
import { Property, Source, App, Destination, Group } from "../../../src";
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
  });
});
