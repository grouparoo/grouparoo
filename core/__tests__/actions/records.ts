import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { AsyncReturnType } from "type-fest";
import {
  GrouparooRecord,
  Group,
  Team,
  TeamMember,
  Property,
  Run,
} from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  RecordAutocompleteRecordProperty,
  RecordCreate,
  RecordDestroy,
  RecordEdit,
  RecordsImportAndUpdate,
  RecordsList,
  RecordView,
} from "../../src/actions/records";
import { GroupAddRecord, GroupRemoveRecord } from "../../src/actions/groups";
import { ConfigWriter } from "../../src/modules/configWriter";

function simpleProfileValues(complexProfileValues): { [key: string]: any } {
  const keys = Object.keys(complexProfileValues);
  const simpleProfileProperties = {};
  keys.forEach((key) => {
    simpleProfileProperties[key] = complexProfileValues[key].values;
  });
  return simpleProfileProperties;
}

describe("actions/records", () => {
  const mockedConfigWriterRun = jest.fn();

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let id: string;

  beforeAll(async () => {
    await helper.factories.properties();
    helper.disableTestPluginImport();

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });

    ConfigWriter.run = mockedConfigWriterRun;
  });

  describe("writer signed in", () => {
    let connection;
    let csrfToken;

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
        properties: {
          userId: 123,
          email: "luigi@example.com",
          firstName: "Luigi",
          lastName: "Mario",
        },
      };
      const { error, record } = await specHelper.runAction<RecordCreate>(
        "record:create",
        connection
      );
      expect(error).toBeUndefined();
      expect(record.id).toBeTruthy();
      expect(record.state).toBe("pending");
      expect(simpleProfileValues(record.properties)).toEqual({
        userId: [123],
        email: ["luigi@example.com"],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        isVIP: [null],
        lastLoginAt: [null],
        ltv: [null],
        purchaseAmounts: [null],
        purchases: [null],
      });

      expect(record.properties["userId"].state).toBe("ready");
      expect(record.properties["email"].state).toBe("ready");
      expect(record.properties["purchases"].state).toBe("pending");

      id = record.id;
    });

    test("when a record is created, config writers will be run", async () => {
      mockedConfigWriterRun.mockReset();

      connection.params = {
        csrfToken,
        properties: {
          userId: 12,
          email: "wario@example.com",
          firstName: "Wario",
          lastName: "Waluigio",
        },
      };

      const { record: recordData } = await specHelper.runAction<RecordCreate>(
        "record:create",
        connection
      );

      expect(mockedConfigWriterRun).toHaveBeenCalledTimes(1);

      const record = await GrouparooRecord.findOne({
        where: { id: recordData.id },
      });
      await record.destroy();
    });

    test("a writer can edit a property of a record", async () => {
      connection.params = {
        csrfToken,
        id,
        properties: { userId: 999 },
      };
      const { error, record } = await specHelper.runAction<RecordEdit>(
        "record:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(simpleProfileValues(record.properties).userId).toEqual([999]);
    });

    test("a writer can add a new property to a record", async () => {
      connection.params = {
        csrfToken,
        id,
        properties: {
          ltv: 123.45,
        },
      };
      const { error, record } = await specHelper.runAction<RecordEdit>(
        "record:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(record.id).toBeTruthy();
      expect(record.state).toBe("ready");
      expect(simpleProfileValues(record.properties)).toEqual({
        userId: [999],
        email: ["luigi@example.com"],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        ltv: [123.45],
        isVIP: [null],
        lastLoginAt: [null],
        purchaseAmounts: [null],
        purchases: [null],
      });
    });

    test("a writer can remove a new property from a record", async () => {
      connection.params = {
        csrfToken,
        id,
        removedProperties: ["ltv"],
      };
      const { error, record } = await specHelper.runAction<RecordEdit>(
        "record:edit",
        connection
      );
      expect(error).toBeUndefined();
      expect(record.id).toBeTruthy();
      expect(record.state).toBe("ready");
      expect(simpleProfileValues(record.properties)).toEqual({
        userId: [999],
        email: ["luigi@example.com"],
        firstName: ["Luigi"],
        lastName: ["Mario"],
        isVIP: [null],
        ltv: [null],
        lastLoginAt: [null],
        purchaseAmounts: [null],
        purchases: [null],
      });
    });

    test("a writer can list all the records", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, records, total } = await specHelper.runAction<RecordsList>(
        "records:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(records.length).toBe(1);
      expect(simpleProfileValues(records[0].properties).userId).toEqual([999]);
      expect(total).toBe(1);
    });

    test("a writer can list all the records with a certain state", async () => {
      connection.params = {
        csrfToken,
        state: "pending",
      };
      const { records: pendingProfiles, total: pendingTotal } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(pendingProfiles.length).toBe(0);
      expect(pendingTotal).toBe(0);

      connection.params = {
        csrfToken,
        state: "ready",
      };
      const { records: readyProfiles, total: readyTotal } =
        await specHelper.runAction<RecordsList>("records:list", connection);
      expect(readyProfiles.length).toBe(1);
      expect(readyTotal).toBe(1);
    });

    test("a writer can get autocomplete results from properties", async () => {
      const emailProperty = await Property.findOne({
        where: { key: "email" },
      });

      connection.params = {
        csrfToken,
        propertyId: emailProperty.id,
        match: "@example.com",
      };
      const { error, recordProperties } =
        await specHelper.runAction<RecordAutocompleteRecordProperty>(
          "records:autocompleteRecordProperty",
          connection
        );

      expect(error).toBeUndefined();
      expect(recordProperties).toEqual(["luigi@example.com"]);
    });

    test("an administrator can import and update all records", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, run } = await specHelper.runAction<RecordsImportAndUpdate>(
        "records:importAndUpdate",
        connection
      );
      expect(error).toBeUndefined();
      expect(run.id).toBeTruthy();

      const runningRuns = await Run.findAll({
        where: { state: "running", creatorType: "teamMember" },
      });
      expect(runningRuns.length).toBe(1);
    });

    test("a writer can destroy a record", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, success } = await specHelper.runAction<RecordDestroy>(
        "record:destroy",
        connection
      );
      expect(error).toBeUndefined();
      expect(success).toBe(true);
    });

    test("when a record is destroyed, config writers will be run", async () => {
      mockedConfigWriterRun.mockReset();
      const record = await helper.factories.record();

      connection.params = {
        csrfToken,
        id: record.id,
      };

      const { success } = await specHelper.runAction<RecordDestroy>(
        "record:destroy",
        connection
      );
      expect(success).toBe(true);
      expect(mockedConfigWriterRun).toHaveBeenCalledTimes(1);
    });

    describe("groups", () => {
      let group;
      let record;

      beforeAll(async () => {
        group = new Group({
          name: "new group",
          type: "manual",
        });
        await group.save();
        await group.update({ state: "ready" });
      });

      beforeAll(async () => {
        record = new GrouparooRecord();
        await record.save();
      });

      afterAll(async () => {
        await group.destroy();
        await record.destroy();
      });

      test("a writer can add a record to a manual group", async () => {
        connection.params = {
          csrfToken,
          id: group.id,
          recordId: record.id,
        };
        const { error, success } = await specHelper.runAction<GroupAddRecord>(
          "group:addRecord",
          connection
        );
        expect(error).toBeUndefined();
        expect(success).toBeTruthy();
      });

      test("a writer cannot add a record to a calculated group", async () => {
        const calculatedGroup = new Group({
          name: "robot group",
          type: "calculated",
        });
        await calculatedGroup.save();

        connection.params = {
          csrfToken,
          id: calculatedGroup.id,
          recordId: record.id,
        };
        const { error } = await specHelper.runAction<GroupAddRecord>(
          "group:addRecord",
          connection
        );
        expect(error.message).toMatch(
          /only manual groups can have membership manipulated by this action/
        );
        await calculatedGroup.destroy();
      });

      test("the record lists group memberships", async () => {
        connection.params = {
          csrfToken,
          id: record.id,
        };
        const { error, groups } = await specHelper.runAction<RecordView>(
          "record:view",
          connection
        );
        expect(error).toBeUndefined();
        expect(groups.length).toBe(1);
        expect(groups[0].id).toBeTruthy();
        expect(groups[0].name).toBe("new group");
      });

      test("the records in the group can be listed", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);

        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(total).toBe(1);
      });

      test("a writer can remove a record from a manual group", async () => {
        connection.params = {
          csrfToken,
          id: group.id,
          recordId: record.id,
        };
        const { error, success } =
          await specHelper.runAction<GroupRemoveRecord>(
            "group:removeRecord",
            connection
          );
        expect(error).toBeUndefined();
        expect(success).toBeTruthy();

        connection.params = {
          csrfToken,
          id: record.id,
        };
        const { error: removeError, groups } =
          await specHelper.runAction<RecordView>("record:view", connection);
        expect(removeError).toBeUndefined();
        expect(groups.length).toBe(0);
      });
    });

    describe("search", () => {
      let mario: AsyncReturnType<GrouparooRecord["apiData"]>;
      let luigi: AsyncReturnType<GrouparooRecord["apiData"]>;
      let peach: AsyncReturnType<GrouparooRecord["apiData"]>;
      let toad: AsyncReturnType<GrouparooRecord["apiData"]>;
      let group: Group;

      beforeAll(async () => {
        group = new Group({
          name: "VIP people",
          type: "manual",
        });
        await group.save();
      });

      beforeAll(async () => {
        // sleeping after each create so that we can sort by createdAt

        connection.params = {
          csrfToken,
          properties: { email: "mario@example.com", userId: 1 },
        };
        let response = await specHelper.runAction<RecordCreate>(
          "record:create",
          connection
        );
        mario = response.record;

        connection.params = {
          csrfToken,
          properties: { email: "luigi@example.com", userId: 2 },
        };
        response = await specHelper.runAction<RecordCreate>(
          "record:create",
          connection
        );
        luigi = response.record;

        connection.params = {
          csrfToken,
          properties: { email: "toad@mushroom-kingdom.gov", userId: 3 },
        };
        response = await specHelper.runAction<RecordCreate>(
          "record:create",
          connection
        );
        toad = response.record;

        connection.params = {
          csrfToken,
          properties: { email: "peach@mushroom-kingdom.gov", userId: 4 },
        };
        response = await specHelper.runAction<RecordCreate>(
          "record:create",
          connection
        );
        peach = response.record;

        connection.params = {
          csrfToken,
          id: group.id,
          recordId: mario.id,
        };
        await specHelper.runAction("group:addProfile", connection);

        connection.params = {
          csrfToken,
          id: group.id,
          recordId: peach.id,
        };
        await specHelper.runAction("group:addProfile", connection);
      }, 10 * 1000);

      afterAll(async () => {
        const records = [mario, luigi, toad, peach];
        for (const i in records) {
          connection.params = {
            csrfToken,
            id: records[i].id,
          };
          await specHelper.runAction("record:destroy", connection);
        }
      });

      afterAll(async () => {
        await group.destroy();
      });

      test("returns all records and counts when there is no search (all), returning all properties", async () => {
        connection.params = {
          csrfToken,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(4);
        expect(simpleProfileValues(records[0].properties).email).toEqual([
          "mario@example.com",
        ]);
        expect(simpleProfileValues(records[0].properties).userId).toEqual([1]);
        expect(simpleProfileValues(records[1].properties).email).toEqual([
          "luigi@example.com",
        ]);
        expect(simpleProfileValues(records[1].properties).userId).toEqual([2]);
        expect(simpleProfileValues(records[2].properties).email).toEqual([
          "toad@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(records[2].properties).userId).toEqual([3]);
        expect(simpleProfileValues(records[3].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(records[3].properties).userId).toEqual([4]);
        expect(total).toBe(4);
      });

      test("returns all records and counts when there is no search (group), returning all properties", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(2);
        expect(simpleProfileValues(records[0].properties).email).toEqual([
          "mario@example.com",
        ]);
        expect(simpleProfileValues(records[0].properties).userId).toEqual([1]);
        expect(simpleProfileValues(records[1].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(records[1].properties).userId).toEqual([4]);
        expect(total).toBe(2);
      });

      test("returns exact matches when there is a search (all), returning all properties", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "peach@mushroom-kingdom.gov",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(simpleProfileValues(records[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(records[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);
      });

      test("returns case-insensitive matches when there is a search (all), returning all properties", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "PEACH@MushRoom-kingdom.gov",
          caseSensitive: false,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(simpleProfileValues(records[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(records[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);

        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "PEACH@MushRoom-kingdom.gov",
          caseSensitive: true,
        };
        const { total: caseSensitiveTotal } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(caseSensitiveTotal).toBe(0);
      });

      test("returns exact matches when there is a search (group), returning all properties", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
          searchKey: "email",
          searchValue: "peach@mushroom-kingdom.gov",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(simpleProfileValues(records[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(records[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);
      });

      test("returns case-insensitive matches when there is a search (group), returning all properties", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
          searchKey: "email",
          searchValue: "PEACH@MUSHroom-kingdom.gov",
          caseSensitive: false,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(simpleProfileValues(records[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(records[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);

        connection.params = {
          csrfToken,
          groupId: group.id,
          searchKey: "email",
          searchValue: "PEACH@MushRoom-kingdom.gov",
          caseSensitive: true,
        };
        const { total: caseSensitiveTotal } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(caseSensitiveTotal).toBe(0);
      });

      test("returns fuzzy matching records and counts when there is a search (all), returning all properties", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "%@mushroom-kingdom.gov",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(2);
        expect(total).toBe(2);
      });

      test("returns fuzzy matching records and counts when there is a search (all) ignoring case, returning all properties", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "%@MuShRoom-kingdom.GOV",
          caseSensitive: false,
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(2);
        expect(total).toBe(2);
      });

      test("returns fuzzy matching records and counts when there is no search (group), returning all properties", async () => {
        connection.params = {
          csrfToken,
          groupId: group.id,
          searchKey: "email",
          searchValue: "%@mushroom-kingdom.gov",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(1);
        expect(simpleProfileValues(records[0].properties).email).toEqual([
          "peach@mushroom-kingdom.gov",
        ]);
        expect(simpleProfileValues(records[0].properties).userId).toEqual([4]);
        expect(total).toBe(1);
      });

      test("without a search, records without properties are returned", async () => {
        const record = await helper.factories.record();

        connection.params = { csrfToken };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(5);
        expect(total).toBe(5);

        await record.destroy();
      });

      test("returns matching records when null is the searchValue", async () => {
        connection.params = {
          csrfToken,
          searchKey: "ltv",
          searchValue: "null",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(4);
        expect(total).toBe(4);
      });

      test("returns all matching records when * is the searchValue (results)", async () => {
        connection.params = {
          csrfToken,
          searchKey: "email",
          searchValue: "*",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(0);
        expect(total).toBe(0);
      });

      test("returns all matching records when * is the searchValue (no results)", async () => {
        connection.params = {
          csrfToken,
          searchKey: "ltv",
          searchValue: "*",
        };
        const { error, records, total } =
          await specHelper.runAction<RecordsList>("records:list", connection);
        expect(error).toBeUndefined();
        expect(records.length).toBe(0);
        expect(total).toBe(0);
      });
    });
  });

  describe("reader signed in", () => {
    let connection;
    let teamId;
    let csrfToken;

    beforeAll(async () => {
      const record = new GrouparooRecord();
      await record.save();
      await record.addOrUpdateProperties({
        firstName: ["Toad"],
        email: ["toad@example.com"],
      });
      id = record.id;

      const readOnlyTeam = new Team({
        name: "read only team",
      });
      await readOnlyTeam.save();
      teamId = readOnlyTeam.id;

      const luigi = new TeamMember({
        teamId,
        firstName: "Luigi",
        lastName: "Mario",
        email: "luigi@example.com",
      });
      await luigi.save();
      await luigi.updatePassword("P@ssw0rd!");

      connection = await specHelper.buildConnection();
      connection.params = { email: "luigi@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader cannot create a new record", async () => {
      connection.params = {
        csrfToken,
      };
      const { error } = await specHelper.runAction("record:create", connection);
      expect(error.code).toBe("AUTHORIZATION_ERROR");
    });

    test("a reader can list all the records", async () => {
      connection.params = {
        csrfToken,
      };
      const { error, records } = await specHelper.runAction<RecordsList>(
        "records:list",
        connection
      );
      expect(error).toBeUndefined();
      expect(records.length).toBe(1);
    });

    test("a reader cannot edit a group", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error } = await specHelper.runAction<RecordEdit>(
        "record:edit",
        connection
      );
      expect(error.code).toBe("AUTHORIZATION_ERROR");
    });

    test("a reader can view a record", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const { error, record } = await specHelper.runAction<RecordView>(
        "record:view",
        connection
      );
      expect(error).toBeUndefined();
      expect(record.id).toBeTruthy();
      expect(simpleProfileValues(record.properties)).toEqual({
        firstName: ["Toad"],
        email: ["toad@example.com"],
        isVIP: [null],
        lastLoginAt: [null],
        lastName: [null],
        ltv: [null],
        purchaseAmounts: [null],
        purchases: [null],
        userId: [null],
      });
    });

    test("a reader cannot destroy a record", async () => {
      connection.params = {
        csrfToken,
        id,
      };
      const destroyResponse = await specHelper.runAction(
        "record:destroy",
        connection
      );

      expect(destroyResponse.error.code).toBe("AUTHORIZATION_ERROR");
    });
  });
});
