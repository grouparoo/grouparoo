import { helper } from "@grouparoo/spec-helper";
import { Import, Run } from "../../src";
import { ImportOps } from "../../src/modules/ops/import";

describe("models/import", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await helper.factories.properties());
  beforeEach(async () => await Import.truncate());

  test("the record can be associated", async () => {
    const record = await helper.factories.record();
    await record.addOrUpdateProperties({ email: ["mario@example.com"] });

    const _import = await Import.create({
      data: { email: "mario@example.com" },
      creatorType: "test",
      creatorId: "",
    });
    expect(_import.recordId).toBeFalsy();
    expect(_import.state).toBe("associating");

    await ImportOps.processPendingImportsForAssociation();

    await _import.reload();
    expect(_import.state).toBe("importing");
    expect(_import.recordId).toBe(record.id);
  });

  test("an error can be set", async () => {
    const _import = await helper.factories.import();
    expect(_import.state).toBe("associating");

    await _import.setError(new Error("oh no"), "associate");
    await _import.reload();

    expect(_import.state).toBe("failed");
    expect(_import.errorMessage).toMatch("oh no");
    expect(_import.errorMetadata).toMatch("oh no");
  });

  test("setting an error will update complete runs", async () => {
    const run: Run = await helper.factories.run();
    await run.afterBatch("complete");
    expect(run.error).toBeFalsy();

    const _import = await helper.factories.import(run);
    await _import.setError(new Error("oh no"), "associate");

    await run.reload();
    expect(run.error).toEqual("Error on step associate: oh no (x1)");
  });

  test("old entries can be swept away", async () => {
    const oldImport = await Import.create({
      data: {},
      creatorType: "test",
      creatorId: "",
    });

    oldImport.set({ createdAt: new Date(0) }, { raw: true });
    oldImport.changed("createdAt", true);
    await oldImport.save({
      silent: true,
      fields: ["createdAt"],
    });

    let count = await Import.count();
    expect(count).toBe(1);

    await Import.sweep(999);

    const remaining = await Import.findAll();
    expect(remaining.length).toBe(0);
  });

  test("apiData works without a Record", async () => {
    const _import = await Import.create({
      data: { email: "mario@example.com" },
      creatorType: "test",
      creatorId: "",
    });

    const apiData = await _import.apiData();
    expect(apiData.id).toEqual(_import.id);
    expect(apiData.modelId).toBeFalsy();
  });

  test("apiData works with a Record", async () => {
    const record = await helper.factories.record();

    const _import = await Import.create({
      data: { email: "mario@example.com" },
      creatorType: "test",
      creatorId: "",
      recordId: record.id,
    });

    const apiData = await _import.apiData();
    expect(apiData.id).toEqual(_import.id);
    expect(apiData.modelId).toBe(record.modelId);
  });
});
