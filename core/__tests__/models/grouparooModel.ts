import { helper } from "@grouparoo/spec-helper";
import { GrouparooModel, Log } from "../../src";
import { ModelOps } from "../../src/modules/ops/model";

describe("models/grouparooModel", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await GrouparooModel.truncate());

  test("a model can be created", async () => {
    const model = new GrouparooModel({ name: "test model", type: "profile" });
    await model.save();

    expect(model.id.length).toBe(40);
    expect(model.createdAt).toBeTruthy();
    expect(model.updatedAt).toBeTruthy();
  });

  test("creating a model creates a log entry", async () => {
    const latestLog = await Log.findOne({
      where: { verb: "create", topic: "grouparooModel" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  test("destroying a model creates a log entry", async () => {
    await GrouparooModel.create({ name: "test model", type: "profile" });

    const model = await GrouparooModel.findOne();
    await model.destroy();

    const latestLog = await Log.findOne({
      where: { verb: "destroy", topic: "grouparooModel" },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    expect(latestLog).toBeTruthy();
  });

  test("the default model is not locked and can be edited", async () => {
    await ModelOps.prepare();
    expect(await GrouparooModel.count()).toBe(1);
    const model = await GrouparooModel.findOne();
    expect(model.locked).toBe(null);
  });

  describe("validations", () => {
    test("model names are unique", async () => {
      await GrouparooModel.create({ name: "test model", type: "profile" });
      const model = new GrouparooModel({ name: "test model", type: "profile" });
      await expect(model.save()).rejects.toThrow(/Validation error/);
    });

    test("model types need to be valid", async () => {
      const model = new GrouparooModel({ name: "test", type: "foo" });
      await expect(model.save()).rejects.toThrow(
        /foo is not a valid model type/
      );
    });
  });
});
