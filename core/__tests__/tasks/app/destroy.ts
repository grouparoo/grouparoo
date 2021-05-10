import { helper } from "@grouparoo/spec-helper";
import { api, task, specHelper } from "actionhero";
import { App, Destination, Source } from "./../../../src";

describe("tasks/app:destroy", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  describe("app:destroy", () => {
    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
    });

    test("can be enqueued", async () => {
      await task.enqueue("app:destroy", { appId: "abc123" });
      const found = await specHelper.findEnqueuedTasks("app:destroy");
      expect(found.length).toEqual(1);
      expect(found[0].args[0].appId).toBe("abc123");
    });

    test("will delete app immediately if it's not being used", async () => {
      const app: App = await helper.factories.app();

      await task.enqueue("app:destroy", { appId: app.id });
      const foundTasks = await specHelper.findEnqueuedTasks("app:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("app:destroy", foundTasks[0].args[0]);

      await expect(App.findById(app.id)).rejects.toThrow(/cannot find App/);
    });

    test("will wait for destination to be deleted if it uses the app", async () => {
      const app: App = await helper.factories.app();
      const destination: Destination = await helper.factories.destination(app);

      await task.enqueue("app:destroy", { appId: app.id });

      const foundTasks = await specHelper.findEnqueuedTasks("app:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("app:destroy", foundTasks[0].args[0]);

      const reloadedApp = await App.findById(app.id);
      expect(reloadedApp.state).toBe("deleted");

      // remove destination
      await destination.destroy();

      // run it again
      await specHelper.runTask("app:destroy", foundTasks[0].args[0]);
      await expect(app.reload()).rejects.toThrow(/does not exist anymore/);
    });

    test("will wait for source to be deleted if it uses the app", async () => {
      const app: App = await helper.factories.app();
      const source: Source = await helper.factories.source(app);

      await task.enqueue("app:destroy", { appId: app.id });

      const foundTasks = await specHelper.findEnqueuedTasks("app:destroy");
      expect(foundTasks.length).toBe(1);
      await specHelper.runTask("app:destroy", foundTasks[0].args[0]);

      const reloadedApp = await App.findById(app.id);
      expect(reloadedApp.state).toBe("deleted");

      // remove source
      await source.destroy();

      // run it again
      await specHelper.runTask("app:destroy", foundTasks[0].args[0]);
      await expect(app.reload()).rejects.toThrow(/does not exist anymore/);
    });
  });
});
