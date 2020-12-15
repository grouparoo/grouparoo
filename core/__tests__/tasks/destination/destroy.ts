import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, specHelper, utils } from "actionhero";
import { Group } from "./../../../src/models/Group";
import { Destination } from "./../../../src/models/Destination";
import { Export } from "./../../../src/models/Export";
import { Profile } from "./../../../src/models/Profile";
import { Run } from "./../../../src/models/Run";

let actionhero;

describe("tasks/destination:destroy", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await api.resque.queue.connection.redis.flushdb();
    await Export.truncate();
  });

  describe("without tracked group", () => {
    let destination: Destination;

    beforeAll(async () => {
      destination = await helper.factories.destination();
    });

    afterAll(async () => {
      await destination.destroy();
    });

    test("deleting a destination with no group tracked works", async () => {
      await destination.update({ state: "deleted" });
      await specHelper.runTask("destination:destroy", {
        destinationGuid: destination.guid,
      });

      await expect(Destination.findByGuid(destination.guid)).rejects.toThrow(
        /cannot find Destination/
      );
    });
  });

  describe("with tracked group", () => {
    let group: Group;
    let destination: Destination;
    let mario: Profile;
    let luigi: Profile;
    let run: Run;

    beforeAll(async () => {
      destination = await helper.factories.destination();
      group = await helper.factories.group();
      mario = await helper.factories.profile();
      luigi = await helper.factories.profile();
      await group.addProfile(mario);
      await group.addProfile(luigi);
      await destination.trackGroup(group);

      await api.resque.queue.connection.redis.flushdb();
      await Run.truncate();
    });

    test("a destination tracking a group cannot be deleted", async () => {
      await expect(destination.destroy()).rejects.toThrow(
        "cannot delete a destination that is tracking a group"
      );
    });

    test("the task can be enqueued and create a run for the group", async () => {
      await destination.update({ state: "deleted" });
      await specHelper.runTask("destination:destroy", {
        destinationGuid: destination.guid,
      });

      run = await Run.findOne({ where: { creatorGuid: group.guid } });

      const foundTasks = await specHelper.findEnqueuedTasks(
        "destination:destroy"
      );
      expect(foundTasks.length).toBe(1);
      expect(foundTasks[0].args[0]).toEqual({
        destinationGuid: destination.guid,
        runGuid: run.guid,
      });

      destination = await Destination.findByGuid(destination.guid);
      expect(destination.state).toBe("deleted");
      expect(destination.groupGuid).toBeNull();
    });

    test("the destination will not be deleted yet (running run)", async () => {
      await utils.sleep(1000);
      await specHelper.runTask("destination:destroy", {
        destinationGuid: destination.guid,
        runGuid: run.guid,
      });

      destination = await Destination.findByGuid(destination.guid);
      expect(destination.state).toBe("deleted");
    });

    test("the group run can be completed and create exports", async () => {
      // add
      let foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await specHelper.deleteEnqueuedTasks("group:run", foundTasks[0].args[0]);
      await specHelper.runTask("group:run", foundTasks[0].args[0]);
      // remove
      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await specHelper.deleteEnqueuedTasks("group:run", foundTasks[0].args[0]);
      await specHelper.runTask("group:run", foundTasks[0].args[0]);
      // removeOld
      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await specHelper.deleteEnqueuedTasks("group:run", foundTasks[0].args[0]);
      await specHelper.runTask("group:run", foundTasks[0].args[0]);

      await ImportWorkflow();

      // complete
      foundTasks = await specHelper.findEnqueuedTasks("group:run");
      await specHelper.deleteEnqueuedTasks("group:run", foundTasks[0].args[0]);
      await specHelper.runTask("group:run", foundTasks[0].args[0]);

      run = await Run.findByGuid(run.guid);
      group = await Group.findByGuid(group.guid);
      expect(group.state).toBe("ready");
      expect(run.state).toBe("complete");

      // create exports
      const exportTasks = await specHelper.findEnqueuedTasks("profile:export");
      await Promise.all(
        exportTasks.map((t) => specHelper.runTask("profile:export", t.args[0]))
      );
    });

    test("the destination will not be deleted yet (pending exports)", async () => {
      await utils.sleep(1000);
      await specHelper.runTask("destination:destroy", {
        destinationGuid: destination.guid,
        runGuid: run.guid,
      });

      destination = await Destination.findByGuid(destination.guid);
      expect(destination.state).toBe("deleted");
    });

    test("the exports can be exported", async () => {
      await specHelper.runTask("export:enqueue", {});
      const foundExportSendTasks = await specHelper.findEnqueuedTasks(
        "export:send"
      );
      await Promise.all(
        foundExportSendTasks.map((t) =>
          specHelper.runTask("export:send", t.args[0])
        )
      );
    });

    test("now the destination can be deleted", async () => {
      await specHelper.runTask("destination:destroy", {
        destinationGuid: destination.guid,
        runGuid: run.guid,
      });

      await expect(Destination.findByGuid(destination.guid)).rejects.toThrow(
        /cannot find Destination/
      );
    });
  });
});
