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
  helper.grouparooTestServer({
    truncate: true,
    enableTestPlugin: true,
    resetSettings: true,
  });
  afterAll(async () => await Setting.truncate());

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

      const configObjects = await loadConfigObjects(dir);

      await expect(
        api.sequelize.transaction(async () => {
          const { errors, seenIds } = await processConfigObjects(
            configObjects,
            true,
            true
          );

          expect(errors).toEqual([]);
          expect(seenIds).toEqual({
            apikey: ["website_key"],
            app: expect.arrayContaining(["data_warehouse", "events"]),
            destination: ["test_destination"],
            group: ["email_group"],
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

      const configObjects = await loadConfigObjects(dir);

      await expect(
        api.sequelize.transaction(async () => {
          const { errors } = await processConfigObjects(
            configObjects,
            true,
            true
          );

          expect(errors.length).toBe(1);
          expect(errors[0]).toMatch(
            /Error: cannot find Property missing_profile_property/
          );
          expect(errors[0]).toMatch(/error with Group/);

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

      const configObjects = await loadConfigObjects(dir);

      await expect(
        api.sequelize.transaction(async () => {
          const { errors } = await processConfigObjects(
            configObjects,
            false, // <-- here
            true
          );

          expect(errors.length).toBe(1);
          expect(errors[0]).toMatch(
            /Error: cannot find Property missing_profile_property/
          );

          throw new Error("test-rollback");
        })
      ).rejects.toThrow(/test-rollback/);
    });

    ensureNoSavedModels();
  });
});
