import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Op } from "sequelize";
import {
  Destination,
  Group,
  GrouparooModel,
  GrouparooPlugin,
  GrouparooRecord,
  PluginConnection,
  RecordProperty,
} from "../../../src";
import {
  RecordCreate,
  RecordExport,
  RecordImport,
  RecordsImport,
} from "../../../src/actions/records";
import { SessionCreate } from "../../../src/actions/session";

function simpleRecordValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleRecordProperties = {};
  keys.forEach((key) => {
    simpleRecordProperties[key] = complexProfileValues[key].values;
  });
  return simpleRecordProperties;
}

describe("actions/records", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let model: GrouparooModel;
  let id: string;

  let testPluginConnection: PluginConnection;
  beforeAll(async () => {
    ({ model } = await helper.factories.properties());

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    const testPlugin: GrouparooPlugin = api.plugins.plugins.find(
      (a) => a.name === "@grouparoo/test-plugin"
    );
    testPluginConnection = testPlugin.connections.find(
      (c) => c.name === "test-plugin-import"
    );
  });

  describe("writer signed in", () => {
    let connection;
    let csrfToken;
    let group: Group;
    let destination: Destination;

    beforeAll(async () => {
      group = await helper.factories.group();
      await group.setRules([
        { key: "firstName", match: "Mario", operation: { op: "eq" } },
      ]);
      await group.update({ state: "ready" });

      destination = await helper.factories.destination();
      await destination.updateTracking("group", group.id);
      await destination.update({ state: "ready" });
    });

    beforeAll(async () => {
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a writer can create a new record and properties", async () => {
      connection.params = {
        csrfToken,
        modelId: model.id,
        properties: { userId: 123 },
      };
      const { error, record } = await specHelper.runAction<RecordCreate>(
        "record:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(record.id).toBeTruthy();
      expect(record.state).toBe("ready");

      id = record.id;
    });

    test("a record can be imported", async () => {
      const luigi = await GrouparooRecord.findOne();
      await RecordProperty.destroy({
        where: { recordId: luigi.id, propertyId: { [Op.ne]: "userid" } },
      });

      connection.params = {
        csrfToken,
        id: luigi.id,
      };
      const { record, error, groups } =
        await specHelper.runAction<RecordImport>("record:import", connection);
      expect(error).toBeUndefined();
      expect(simpleRecordValues(record.properties)).toEqual({
        userId: [expect.any(Number)],
        email: [expect.stringMatching(`@example.com`)],
        firstName: ["Mario"],
        lastName: ["Mario"],
        isVIP: [true],
        lastLoginAt: [expect.any(Date)],
        ltv: [100],
        purchaseAmounts: [null],
        purchases: ["...mario"],
      });

      expect(groups.length).toBe(1);
      expect(groups[0].id).toEqual(group.id);

      id = record.properties.userId[0];
    });

    test("an invalid record can be imported, and can also be fixed", async () => {
      const luigi = await GrouparooRecord.findOne();
      connection.params = {
        csrfToken,
        id: luigi.id,
      };
      let { record, error } = await specHelper.runAction<RecordImport>(
        "record:import",
        connection
      );
      expect(error).toBeUndefined();
      expect(record.invalid).toBe(true);

      jest
        .spyOn(testPluginConnection.methods, "recordProperty")
        .mockImplementation(({ property, record }: any): any => {
          if (property.key !== "purchaseAmounts") {
            return helper.recordResponseData(record, property.key);
          }
          return 22;
        });

      ({ record, error } = await specHelper.runAction<RecordImport>(
        "record:import",
        connection
      ));
      expect(error).toBeUndefined();
      expect(record.invalid).toBe(false);
    });

    test("multiple records can be imported", async () => {
      const mario = await helper.factories.record();
      const peach = await helper.factories.record();
      const luigi = await GrouparooRecord.findOne();
      await RecordProperty.destroy({
        where: { recordId: luigi.id, propertyId: { [Op.ne]: "userid" } },
      });

      jest
        .spyOn(testPluginConnection.methods, "recordProperty")
        .mockImplementation(({ property, record }: any): any => {
          if (record.id === mario.id) throw new Error("oh no"); // mario will have invalid data
          if (property.key !== "purchaseAmounts") {
            return helper.recordResponseData(record, property.key);
          }
          return 22;
        });

      connection.params = {
        csrfToken,
        modelId: model.id,
      };
      let { responses, error } = await specHelper.runAction<RecordsImport>(
        "records:import",
        connection
      );
      expect(error).toBeUndefined();
      expect(responses.length).toEqual(3);
      expect(responses.find((r) => r.recordId === luigi.id)).toEqual({
        error: undefined,
        recordId: luigi.id,
        success: true,
      });
      expect(responses.find((r) => r.recordId === peach.id)).toEqual({
        error: undefined,
        recordId: peach.id,
        success: true,
      });
      expect(responses.find((r) => r.recordId === mario.id)).toEqual({
        error: "oh no",
        recordId: mario.id,
        success: false,
      });

      await mario.destroy();
      await peach.destroy();
    });

    test("a record can be exported", async () => {
      const luigi = await GrouparooRecord.findOne();

      connection.params = {
        csrfToken,
        id: luigi.id,
      };
      const { exports, error } = await specHelper.runAction<RecordExport>(
        "record:export",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(1);
      expect(exports[0].destination.id).toEqual(destination.id);
    });
  });
});
