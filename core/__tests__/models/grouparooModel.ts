import { helper } from "@grouparoo/spec-helper";
import { GrouparooModel } from "../../src";

describe("models/grouparooModel", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(async () => await GrouparooModel.truncate());

  test("a model can be created", async () => {
    const model = new GrouparooModel({
      name: "test model",
      type: "profile",
    });
    await model.save();

    expect(model.id.length).toBe(40);
    expect(model.createdAt).toBeTruthy();
    expect(model.updatedAt).toBeTruthy();
  });

  test("models default to the ready state", async () => {
    const model = new GrouparooModel({
      name: "test model",
      type: "profile",
    });
    await model.save();

    expect(model.state).toBe("ready");
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
