import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { api } from "actionhero";
import {
  loadConfigObjects,
  processConfigObjects,
} from "../../../src/modules/configLoaders";
import { Transaction } from "sequelize";
import { sortConfigurationObject } from "../../../src/classes/codeConfig";

import { Property } from "../../../src/models/Property";
import { App } from "../../../src/models/App";
import { Source } from "../../../src/models/Source";
import { Schedule } from "../../../src/models/Schedule";
import { Group } from "../../../src/models/Group";
import { GroupRule } from "../../../src/models/GroupRule";
import { Destination } from "../../../src/models/Destination";
import { ApiKey } from "../../../src/models/ApiKey";
import { Team } from "../../../src/models/Team";
import { TeamMember } from "../../../src/models/TeamMember";
import { Setting } from "../../../src/models/Setting";
import { Option } from "../../../src/models/Option";
import { Mapping } from "../../../src/models/Mapping";

let actionhero;

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
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await Setting.truncate();
    await helper.shutdown(actionhero);
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
      const sortedConfigObjects = sortConfigurationObject(configObjects);
      const transaction: Transaction = await api.sequelize.transaction();
      const { errors, seenGuids } = await processConfigObjects(
        sortedConfigObjects,
        transaction
      );
      await transaction.rollback();

      expect(errors).toEqual([]);
      expect(seenGuids).toEqual({
        apikey: ["key_website_api_key"],
        app: ["app_data_warehouse", "app_events"],
        destination: ["dst_test_destination"],
        group: ["grp_email_group"],
        property: [
          "rul_user_id",
          "rul_last_name",
          "rul_first_name",
          "rul_email",
        ],
        schedule: ["sch_users_table_schedule"],
        source: ["src_users_table"],
        team: ["tea_admin_team"],
        teammember: ["tem_demo"],
      });
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
      const sortedConfigObjects = sortConfigurationObject(configObjects);
      const transaction: Transaction = await api.sequelize.transaction();
      const { errors } = await processConfigObjects(
        sortedConfigObjects,
        transaction
      );
      await transaction.rollback();

      expect(errors.length).toBe(1);
      expect(errors[0]).toMatch(
        /Error: cannot find Property rul_missing_profile_property/
      );
      expect(errors[0]).toMatch(/error with Group/);
    });

    ensureNoSavedModels();
  });
});
