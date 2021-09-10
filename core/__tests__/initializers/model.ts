import { helper } from "@grouparoo/spec-helper";
import { GrouparooModel } from "../../src";

describe("initializers/models", () => {
  helper.grouparooTestServer({ truncate: true });

  test("it will create a default model in an empty database", async () => {
    const models = await GrouparooModel.findAll();
    expect(models.length).toEqual(1);
    expect(models[0].id).toEqual("mod_profiles");
    expect(models[0].type).toEqual("profile");
    expect(models[0].name).toEqual("Profiles");
  });
});
