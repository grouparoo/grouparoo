import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Property, RecordProperty, GrouparooRecord } from "../../../src";

describe("tasks/recordProperties:sweep", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeEach(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let emailProperty: Property;
  let mario: GrouparooRecord;

  beforeAll(async () => {
    emailProperty = await Property.findOne({ where: { key: "email" } });
    mario = await helper.factories.record();
    await mario.addOrUpdateProperties({
      firstName: ["Mario"],
      lastName: ["Mario"],
      email: ["mario@example.com"],
    });
  });

  test("a record property with a missing record", async () => {
    const recordProperty = await RecordProperty.create({
      recordId: "missing",
      propertyId: emailProperty.id,
      rawValue: "person@example.com",
      position: 0,
    });

    await specHelper.runTask("recordProperties:sweep", {});

    await expect(recordProperty.reload()).rejects.toThrow(
      /does not exist anymore/
    );

    // other records' properties are OK
    const marioProperties = await mario.getProperties();
    expect(marioProperties["email"].values).toEqual(["mario@example.com"]);
  });

  test("a record property with a missing property", async () => {
    const luigi: GrouparooRecord = await helper.factories.record();
    await luigi.addOrUpdateProperties({
      firstName: ["Luigi"],
      lastName: ["Mario"],
      email: ["luigi@example.com"],
    });

    const recordProperty = await RecordProperty.create(
      {
        id: "rule_missing",
        recordId: luigi.id,
        propertyId: "missing",
        rawValue: "green-hat",
        position: 0,
      },
      //@ts-ignore
      { hooks: false } // we need to skip validations
    );

    await specHelper.runTask("recordProperties:sweep", {});

    await expect(recordProperty.reload()).rejects.toThrow(
      /does not exist anymore/
    );

    // Luigi's other properties are OK
    const luigiProperties = await luigi.getProperties();
    expect(luigiProperties["email"].values).toEqual(["luigi@example.com"]);
  });
});
