import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mailchimp": {
    path: path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "plugins",
      "@grouparoo",
      "mailchimp"
    ),
  },
  "@grouparoo/postgres": {
    path: path.join(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "plugins",
      "@grouparoo",
      "postgres"
    ),
  },
});

import { helper } from "@grouparoo/spec-helper";
import { Property } from "../../../src/models/Property";
import { App } from "../../../src/models/App";
import { Source } from "../../../src/models/Source";
import { Schedule } from "../../../src/models/Schedule";
import { Group } from "../../../src/models/Group";
import { Destination } from "../../../src/models/Destination";
import { api } from "actionhero";
import { loadConfigDirectory } from "../../../src/modules/configLoaders";

describe("modules/codeConfig/syncTable", () => {
  helper.grouparooTestServer({
    truncate: true,
    resetSettings: true,
  });

  describe("initial config", () => {
    beforeAll(async () => {
      await createSchema();
    });

    afterAll(async () => {
      await clearSchema();
    });

    test("runs the config", async () => {
      // manually run the initializer again after the server has started.
      api.codeConfig.allowLockedModelChanges = true;
      const { errors, seenIds, deletedIds } = await loadConfigDirectory(
        path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "sync-table",
          "initial"
        ),
        false // not testing external validation
      );
      expect(errors).toEqual([]);
      expect(seenIds).toEqual({
        apikey: [],
        app: expect.arrayContaining(["mailchimpapp", "data_warehouse"]),
        destination: ["magic_table_destination"],
        group: ["magic_table_group"],
        property: expect.arrayContaining([
          "magic_table_property_user_id", // bootstrapped
          "magic_table_property_fname",
          "magic_table_property_decimal_col",
          "magic_table_property_timestamp_col",
          "email_custom",
          "magic_table_membership",
        ]),
        schedule: ["magic_table_schedule"],
        source: ["magic_table_source"],
        team: [],
        teammember: [],
      });
      expect(deletedIds).toEqual({
        apikey: [],
        app: [],
        destination: [],
        group: [],
        property: [],
        schedule: [],
        source: [],
        team: [],
        teammember: [],
      });
    });

    test("apps are created", async () => {
      const apps = await App.findAll({
        order: [["type", "asc"]],
      });
      expect(apps.length).toBe(2);

      expect(apps[0].id).toBe("mailchimpapp");
      expect(apps[0].name).toBe("Mailchimp");
      expect(apps[0].state).toBe("ready");
      expect(apps[0].locked).toBe("config:code");
      expect(apps[0].type).toBe("mailchimp");

      let options = await apps[0].getOptions();
      expect(options.apiKey).toBeTruthy();
      expect(Object.keys(options).length).toBe(1);

      expect(apps[1].id).toBe("data_warehouse");
      expect(apps[1].name).toBe("Data Warehouse");
      expect(apps[1].state).toBe("ready");
      expect(apps[1].locked).toBe("config:code");
      expect(apps[1].type).toBe("postgres");

      options = await apps[1].getOptions();
      expect(options.database).toBeTruthy();
    });

    test("source is created", async () => {
      const sources = await Source.findAll();
      expect(sources.length).toBe(1);
      expect(sources[0].id).toBe("magic_table_source");
      expect(sources[0].appId).toBe("data_warehouse");
      expect(sources[0].name).toBe("Sync to Mailchimp Source");
      expect(sources[0].state).toBe("ready");
      expect(sources[0].locked).toBe("config:code");
      expect(sources[0].type).toBe("postgres-table-import");

      const options = await sources[0].getOptions();
      expect(options).toEqual({ table: "mapping_table" });

      const mapping = await sources[0].getMapping();
      expect(mapping).toEqual({ user_id: "magic_table_user_id" });
    });

    test("the bootstrapped property is created", async () => {
      const property = await Property.findOne({
        where: { directlyMapped: true },
      });
      expect(property.id).toBe("magic_table_property_user_id");
      expect(property.key).toBe("magic_table_user_id");
      expect(property.type).toBe("integer");
      expect(property.unique).toBe(true);
      expect(property.identifying).toBe(true);
      expect(property.state).toBe("ready");
      expect(property.locked).toBe("config:code");
    });

    test("schedules are created", async () => {
      const schedules = await Schedule.findAll();
      expect(schedules.length).toBe(1);
      expect(schedules[0].id).toBe("magic_table_schedule");
      expect(schedules[0].sourceId).toBe("magic_table_source");
      expect(schedules[0].name).toBe("Sync to Mailchimp Schedule");
      expect(schedules[0].state).toBe("ready");
      expect(schedules[0].recurring).toBe(true);
      expect(schedules[0].recurringFrequency).toBe(15 * 60 * 1000);
      expect(schedules[0].locked).toBe("config:code");

      const options = await schedules[0].getOptions();
      expect(options).toEqual({ column: "updated_at" });
    });

    test("properties are created", async () => {
      const properties = await Property.findAll();
      expect(properties.map((r) => r.key).sort()).toEqual([
        "email",
        "magic_table_decimal_col",
        "magic_table_fname",
        "magic_table_membership",
        "magic_table_timestamp_col",
        "magic_table_user_id",
      ]);
      expect(properties.length).toBe(6);

      expect(properties.map((r) => r.sourceId).sort()).toEqual([
        "magic_table_source",
        "magic_table_source",
        "magic_table_source",
        "magic_table_source",
        "magic_table_source",
        "magic_table_source",
      ]);
      expect(properties.map((r) => r.state).sort()).toEqual([
        "ready",
        "ready",
        "ready",
        "ready",
        "ready",
        "ready",
      ]);
      expect(properties.map((r) => r.locked).sort()).toEqual([
        "config:code",
        "config:code",
        "config:code",
        "config:code",
        "config:code",
        "config:code",
      ]);

      let property: Property;
      property = properties.find((r) => r.key === "email");
      expect(property.type).toBe("email");
      expect(property.id).toBe("email_custom");
      expect(property.unique).toBe(true);
      expect(property.identifying).toBe(false);

      property = properties.find((r) => r.key === "magic_table_user_id");
      expect(property.type).toBe("integer");
      expect(property.id).toBe("magic_table_property_user_id");
      expect(property.unique).toBe(true);
      expect(property.identifying).toBe(true);

      property = properties.find((r) => r.key === "magic_table_decimal_col");
      expect(property.type).toBe("float");
      expect(property.id).toBe("magic_table_property_decimal_col");
      expect(property.unique).toBe(false);
      expect(property.identifying).toBe(false);

      property = properties.find((r) => r.key === "magic_table_fname");
      expect(property.type).toBe("string");
      expect(property.id).toBe("magic_table_property_fname");
      expect(property.unique).toBe(false);
      expect(property.identifying).toBe(false);

      property = properties.find((r) => r.key === "magic_table_membership");
      expect(property.type).toBe("integer");
      expect(property.id).toBe("magic_table_membership");
      expect(property.unique).toBe(false);
      expect(property.identifying).toBe(false);

      property = properties.find((r) => r.key === "magic_table_timestamp_col");
      expect(property.type).toBe("date");
      expect(property.id).toBe("magic_table_property_timestamp_col");
      expect(property.unique).toBe(false);
      expect(property.identifying).toBe(false);
    });

    test("group is created", async () => {
      const groups = await Group.findAll();
      expect(groups.length).toBe(1);
      expect(groups[0].id).toBe("magic_table_group");
      expect(groups[0].name).toBe("Sync to Mailchimp");
      expect(groups[0].type).toBe("calculated");
      expect(groups[0].locked).toBe("config:code");

      const rules = await groups[0].getRules();
      expect(rules).toEqual([
        {
          key: "magic_table_membership",
          match: "0",
          operation: { description: "is greater than", op: "gt" },
          relativeMatchDirection: null,
          relativeMatchNumber: null,
          relativeMatchUnit: null,
          topLevel: false,
          type: "integer",
        },
      ]);
    });

    test("destination is created", async () => {
      const destinations = await Destination.findAll();
      expect(destinations.length).toBe(1);
      expect(destinations[0].id).toBe("magic_table_destination");
      expect(destinations[0].appId).toBe("mailchimpapp");
      expect(destinations[0].name).toBe("Sync to Mailchimp Destination");
      expect(destinations[0].state).toBe("ready");
      expect(destinations[0].locked).toBe("config:code");
      expect(destinations[0].type).toBe("mailchimp-export");

      let options = await destinations[0].getOptions();
      expect(options.listId).toBeTruthy();
      expect(Object.keys(options).length).toBe(1);
    });
  });
});

// make a schema to import from
async function createSchema() {
  await api.sequelize.query(`CREATE SCHEMA IF NOT EXISTS synctable;`);
  await api.sequelize.query(`DROP TABLE IF EXISTS synctable.mapping_table;`);
  await api.sequelize.query(
    `CREATE TABLE synctable.mapping_table (
      user_id INT NOT NULL PRIMARY KEY,
      email VARCHAR(191),
      FNAME VARCHAR(191),
      decimal_col DECIMAL,
      int_col INT,
      timestamp_col TIMESTAMP
    )`
  );
}

async function clearSchema() {
  await api.sequelize.query(`DROP TABLE IF EXISTS synctable.mapping_table;`);
  await api.sequelize.query(`DROP SCHEMA IF EXISTS synctable;`);
}
