import { helper } from "@grouparoo/spec-helper";
import {
  Source,
  App,
  Property,
  Mapping,
  GrouparooRecord,
  GrouparooModel,
} from "../../../src";
import { SourceOps } from "../../../src/modules/ops/source";

describe("models/source/sortByDependencies", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let model: GrouparooModel;
  let app: App;
  let usersTable: Source;
  let purchasesTable: Source;
  let productsTable: Source;

  let emailProperty: Property;
  let purchaseProductIdProperty: Property;
  let purchasedProductNameProperty: Property;

  beforeAll(async () => {
    model = await helper.factories.model();
    app = await helper.factories.app();

    usersTable = await Source.create({
      type: "test-plugin-import",
      name: "users table",
      appId: app.id,
      modelId: model.id,
    });
    await usersTable.setOptions({ table: "users" });
    await usersTable.bootstrapUniqueProperty({
      key: "userId",
      type: "integer",
      mappedColumn: "id",
    });
    await usersTable.setMapping({ id: "userId" });
    await usersTable.update({ state: "ready" });

    emailProperty = await helper.factories.property(
      usersTable,
      { key: "email", type: "email" },
      { column: "email" }
    );

    purchasesTable = await Source.create({
      type: "test-plugin-import",
      name: "purchases table",
      appId: app.id,
      modelId: model.id,
    });
    await purchasesTable.setOptions({ table: "purchases" });
    await purchasesTable.setMapping({ user_id: "userId" });
    await purchasesTable.update({ state: "ready" });

    purchaseProductIdProperty = await helper.factories.property(
      purchasesTable,
      { key: "product_id", type: "integer" },
      { column: "id" }
    );

    productsTable = await Source.create({
      type: "test-plugin-import",
      name: "products table",
      appId: app.id,
      modelId: model.id,
    });
    await productsTable.setOptions({ table: "products" });
    await productsTable.setMapping({ id: "product_id" });
    await productsTable.update({ state: "ready" });

    purchasedProductNameProperty = await helper.factories.property(
      productsTable,
      { key: "product_name", type: "string" },
      { column: "name" }
    );
  });

  beforeEach(async () => {
    usersTable = await usersTable.reload({ include: [Mapping, Property] });
    purchasesTable = await purchasesTable.reload({
      include: [Mapping, Property],
    });
    productsTable = await productsTable.reload({
      include: [Mapping, Property],
    });
  });

  test("it sorts when sources provided in order", async () => {
    const sortedSources = SourceOps.sortByDependencies([
      usersTable,
      purchasesTable,
      productsTable,
    ]);

    expect(sortedSources.map((s) => s.id)).toEqual([
      usersTable.id,
      purchasesTable.id,
      productsTable.id,
    ]);
  });

  test("it sorts when sources provided out of order", async () => {
    const sortedSources = SourceOps.sortByDependencies([
      productsTable,
      usersTable,
      purchasesTable,
    ]);

    expect(sortedSources.map((s) => s.id)).toEqual([
      usersTable.id,
      purchasesTable.id,
      productsTable.id,
    ]);
  });

  test("a GrouparooRecord can be imported with chained sources", async () => {
    const record: GrouparooRecord = await helper.factories.record();
    await record.import();
    const properties = await record.getProperties();
    expect(properties.product_name.values[0]).toBeTruthy();
  });
});
