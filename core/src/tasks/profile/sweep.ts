import { api } from "actionhero";
import { QueryTypes } from "sequelize";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Export } from "../../models/Export";
import { Import } from "../../models/Import";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { plugin } from "../../modules/plugin";

export class ProfileSweep extends CLSTask {
  constructor() {
    super();
    this.name = "profiles:sweep";
    this.description =
      "Remove profiles that no longer have any directly mapped properties";
    this.frequency = 1000 * 60 * 30; // every half hour
    this.queue = "profiles";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const limit = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    // Get profiles that don't have directlyMapped properties and whose exports have settled
    const profiles: Profile[] = await api.sequelize.query(
      `
      SELECT "id" FROM "profiles" WHERE "state"='ready' 
        AND 0 = (
          SELECT count("exports"."id") FROM "exports" 
            WHERE "exports"."profileId"="profiles"."id" 
            AND "exports"."state" IN ('pending', 'processing')
        ) AND "id" NOT IN (
          SELECT DISTINCT("profileId") FROM "profileProperties" 
          JOIN properties ON "properties"."id"="profileProperties"."propertyId" 
          WHERE "properties"."directlyMapped"=true AND "rawValue" IS NOT NULL
        ) LIMIT ${limit};
      `,
      {
        model: Profile,
      }
    );

    // use "destroy" to clean up related models
    for (const profile of profiles) {
      await profile.destroy();
    }

    return profiles.length;
  }
}
