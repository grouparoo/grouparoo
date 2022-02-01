process.env.GROUPAROO_IMPORTS_BATCH_SIZE = "100";

import { helper, ImportWorkflow } from "@grouparoo/spec-helper";
import { api, specHelper, task } from "actionhero";
import {
  Import,
  GrouparooRecord,
  Run,
  GrouparooModel,
  Destination,
  RecordProperty,
} from "../../../src";

describe("tasks/grouparooModel:run", () => {
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  describe("grouparooModel:run", () => {
    let model: GrouparooModel;
    let mario: GrouparooRecord;
    let luigi: GrouparooRecord;
    let peach: GrouparooRecord;
    let bowser: GrouparooRecord;

    beforeEach(async () => {
      await api.resque.queue.connection.redis.flushdb();
      await Import.truncate();
      await Run.truncate();
      await RecordProperty.update({ startedAt: 0 }, { where: {} });
    });

    beforeAll(async () => {
      await helper.factories.properties();
      helper.disableTestPluginImport();
      await GrouparooRecord.truncate();

      model = await GrouparooModel.findOne();

      mario = await GrouparooRecord.create({ modelId: "mod_profiles" });
      luigi = await GrouparooRecord.create({ modelId: "mod_profiles" });
      peach = await GrouparooRecord.create({ modelId: "mod_profiles" });

      const otherModel = await helper.factories.model({
        id: "other_model",
        name: "Other Model",
      });
      bowser = await GrouparooRecord.create({ modelId: otherModel.id });

      await mario.addOrUpdateProperties({
        userId: [1],
        firstName: ["Mario"],
        lastName: ["Mario"],
        email: ["mario@example.com"],
      });

      await luigi.addOrUpdateProperties({
        userId: [2],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        email: ["luigi@example.com"],
      });

      await peach.addOrUpdateProperties({
        userId: [3],
        firstName: ["Peach"],
        lastName: ["Toadstool"],
        email: ["peach@example.com"],
      });

      await RecordProperty.update({ state: "ready" }, { where: {} });
      await GrouparooRecord.update({ state: "ready" }, { where: {} });
    });

    test("can be enqueued", async () => {
      await task.enqueue("grouparooModel:run", { runId: "abc123" }); // does not throw
    });

    test("does not throw if the run cannot be found", async () => {
      await specHelper.runTask("grouparooModel:run", {
        runId: "missing",
      });
    });

    it("can create imports for records which should be considered", async () => {
      let imports = [];
      await model.run();

      const run = await Run.findOne({
        where: { state: "running", creatorId: model.id },
      });
      expect(run.state).toBe("running");

      await specHelper.runTask("grouparooModel:run", { runId: run.id });
      await run.reload();
      expect(run.state).toBe("running");
      expect(run.memberLimit).toBe(100);
      expect(run.memberOffset).toBe(3);

      imports = await Import.findAll();
      expect(imports.length).toBe(3);
      expect(imports.map((e) => e.recordId).sort()).toEqual(
        [mario, luigi, peach].map((p) => p.id).sort()
      );

      // complete pending imports
      await ImportWorkflow();
      await specHelper.runTask("grouparooModel:run", { runId: run.id }); // run is complete now

      await run.reload();
      expect(run.state).toBe("complete");
    });

    it("the model run will not complete until all imports are complete", async () => {
      await model.run();

      const run = await Run.findOne({
        where: { state: "running", creatorId: model.id },
      });

      await specHelper.runTask("grouparooModel:run", { runId: run.id });
      await run.reload();
      expect(run.state).toBe("running");

      await specHelper.runTask("grouparooModel:run", { runId: run.id });
      await specHelper.runTask("grouparooModel:run", { runId: run.id });
      await specHelper.runTask("grouparooModel:run", { runId: run.id });

      await run.reload();
      expect(run.state).toBe("running");

      // complete pending imports
      await ImportWorkflow();
      await specHelper.runTask("grouparooModel:run", { runId: run.id });

      await run.reload();
      expect(run.state).toBe("complete");
    });

    describe("with destination", () => {
      let destination: Destination;

      beforeAll(async () => {
        destination = await helper.factories.destination();
      });

      it("will record destinationId on the import if run from a destination", async () => {
        let imports = [];
        await model.run(destination.id);

        const run = await Run.findOne({
          where: { state: "running", creatorId: model.id },
        });
        expect(run.state).toBe("running");

        await specHelper.runTask("grouparooModel:run", { runId: run.id });
        await run.reload();
        expect(run.state).toBe("running");
        expect(run.memberLimit).toBe(100);
        expect(run.memberOffset).toBe(3);

        imports = await Import.findAll();
        expect(imports.length).toBe(3);
      });
    });
  });
});
