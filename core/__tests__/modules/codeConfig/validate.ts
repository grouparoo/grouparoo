import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { api } from "actionhero";
import {
  loadConfigObjects,
  processConfigObjects,
} from "../../../src/modules/configLoaders";

import {
  Property,
  App,
  Source,
  Schedule,
  Group,
  GroupRule,
  Destination,
  ApiKey,
  Team,
  TeamMember,
  Setting,
  Option,
  Mapping,
} from "../../../src";

function ensureNoSavedModels() {
  return test("there should be no models created", async () => {
    expect(await App.count()).toBe(0);
    expect(await Source.count()).toBe(0);
    expect(await Schedule.count()).toBe(0);
    expect(await Destination.count()).toBe(0);
    expect(await Group.count()).toBe(0);
    expect(await GroupRule.count()).toBe(0);
    expect(await Property.count()).toBe(0);
    expect(await ApiKey.count()).toBe(0);
    expect(await Team.count()).toBe(0);
    expect(await TeamMember.count()).toBe(0);
    expect(await Option.count()).toBe(0);
    expect(await Mapping.count()).toBe(0);
  });
}

describe("modules/codeConfig", () => {
  afterAll(async () => await Setting.truncate());

  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });

  describe("validate command", () => {
    beforeAll(async () => {
      api.codeConfig.allowLockedModelChanges = true;
    });

    test("a directory can be validated", async () => {
      const dir = path.join(
        __dirname,
        "..",
        "..",
        "fixtures",
        "codeConfig",
        "initial"
      );

      const { configObjects } = await loadConfigObjects(dir);

      await expect(
        api.sequelize.transaction(async () => {
          const { errors, seenIds } = await processConfigObjects(
            configObjects,
            true,
            null,
            true
          );

          expect(errors).toEqual([]);
          expect(seenIds).toEqual({
            model: ["mod_profiles"],
            apikey: ["website_key"],
            app: expect.arrayContaining(["data_warehouse"]),
            destination: ["test_destination"],
            group: ["email_group", "high_value"],
            property: expect.arrayContaining([
              "user_id",
              "last_name",
              "first_name",
              "email",
            ]),
            schedule: ["users_table_schedule"],
            source: ["users_table"],
            team: ["admin_team"],
            teammember: ["demo"],
            record: [],
          });

          throw new Error("test-rollback");
        })
      ).rejects.toThrow(/test-rollback/);
    });

    ensureNoSavedModels();

    test("errors will be reported", async () => {
      const dir = path.join(
        __dirname,
        "..",
        "..",
        "fixtures",
        "codeConfig",
        "error-group"
      );

      const { configObjects } = await loadConfigObjects(dir);

      await expect(
        api.sequelize.transaction(async () => {
          const { errors } = await processConfigObjects(
            configObjects,
            true,
            null,
            true
          );

          expect(errors.length).toBe(1);
          expect(errors[0]).toMatch(
            /Could not find object with ID: missing_record_property/
          );

          throw new Error("test-rollback");
        })
      ).rejects.toThrow(/test-rollback/);
    });

    ensureNoSavedModels();

    test("validation can be skipped", async () => {
      const dir = path.join(
        __dirname,
        "..",
        "..",
        "fixtures",
        "codeConfig",
        "error-group"
      );

      const { configObjects } = await loadConfigObjects(dir);

      await expect(
        api.sequelize.transaction(async () => {
          const { errors } = await processConfigObjects(
            configObjects,
            false, // <-- here
            null,
            true
          );

          expect(errors.length).toBe(1);
          expect(errors[0]).toMatch(
            /Could not find object with ID: missing_record_property/
          );

          throw new Error("test-rollback");
        })
      ).rejects.toThrow(/test-rollback/);
    });

    ensureNoSavedModels();

    test("external validation is enabled by default", async () => {
      const dir = path.join(
        __dirname,
        "..",
        "..",
        "fixtures",
        "codeConfig",
        "error-app-remote"
      );

      const { configObjects } = await loadConfigObjects(dir);

      await expect(
        api.sequelize.transaction(async () => {
          const { errors } = await processConfigObjects(
            configObjects,
            true,
            null,
            true
          );

          expect(errors.length).toBe(2);
          expect(errors[0]).toMatch(
            /\(other_data_warehouse\) - Remote validation failed/
          );
          expect(errors[1]).toMatch(
            /\(some_other_data_warehouse\) - Remote validation failed/
          );

          throw new Error("test-rollback");
        })
      ).rejects.toThrow(/test-rollback/);
    });

    ensureNoSavedModels();

    test("external validation can be entirely turned off", async () => {
      const dir = path.join(
        __dirname,
        "..",
        "..",
        "fixtures",
        "codeConfig",
        "error-app-remote"
      );

      const { configObjects } = await loadConfigObjects(dir);

      await expect(
        api.sequelize.transaction(async () => {
          const { errors } = await processConfigObjects(
            configObjects,
            false, // <- is not validating externally
            null,
            true
          );

          expect(errors.length).toBe(0);

          throw new Error("test-rollback");
        })
      ).rejects.toThrow(/test-rollback/);
    });

    ensureNoSavedModels();

    test("external validation can be selectively turned off", async () => {
      const dir = path.join(
        __dirname,
        "..",
        "..",
        "fixtures",
        "codeConfig",
        "error-app-remote"
      );

      const { configObjects } = await loadConfigObjects(dir);

      await expect(
        api.sequelize.transaction(async () => {
          const { errors } = await processConfigObjects(
            configObjects,
            true, // <- is validating externally
            new Set(["other_data_warehouse"]), // <- is ignoring this id
            true
          );

          expect(errors.length).toBe(1);
          expect(errors[0]).toMatch(
            /\(some_other_data_warehouse\) - Remote validation failed/
          );

          throw new Error("test-rollback");
        })
      ).rejects.toThrow(/test-rollback/);
    });

    ensureNoSavedModels();

    test("external validation is skipped if it has been disabled for a prerequisite", async () => {
      const dir = path.join(
        __dirname,
        "..",
        "..",
        "fixtures",
        "codeConfig",
        "error-app-destination-remote"
      );

      const { configObjects } = await loadConfigObjects(dir);

      await expect(
        api.sequelize.transaction(async () => {
          const { errors } = await processConfigObjects(
            configObjects,
            true, // <- is validating externally
            new Set(["data_warehouse"]), // <- is ignoring this id
            true
          );

          expect(errors.length).toBe(0);

          throw new Error("test-rollback");
        })
      ).rejects.toThrow(/test-rollback/);
    });

    ensureNoSavedModels();
  });
});
