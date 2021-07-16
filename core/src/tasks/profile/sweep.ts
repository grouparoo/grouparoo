import { api } from "actionhero";
import { QueryTypes } from "sequelize";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Profile } from "../../models/Profile";
import { plugin } from "../../modules/plugin";

export class ProfileSweep extends CLSTask {
  constructor() {
    super();
    this.name = "profile:sweep";
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
    const profiles: { id: string }[] = await api.sequelize.query(
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
        type: QueryTypes.SELECT,
      }
    );

    // use "destroy" to clean up related models
    if (profiles.length > 0) {
      await Profile.destroy({
        where: {
          id: profiles.map((p) => p.id),
        },
      });
    }

    return profiles.length;
  }
}
