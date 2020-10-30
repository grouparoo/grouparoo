import { api, Task, task } from "actionhero";
import { Profile } from "../../models/Profile";
import { plugin } from "../../modules/plugin";

export class ProfilesCheckReady extends Task {
  constructor() {
    super();
    this.name = "profiles:checkReady";
    this.description =
      "If all of a Profile's Properties are ready, mark the profile ready and complete the import";
    this.frequency = 1000 * 10;
    this.queue = "profiles";
    this.inputs = {};
  }

  async run() {
    const limit = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    const query = `
UPDATE "profiles"
SET "state" = 'ready'
WHERE guid IN (
  SELECT "profiles"."guid"
  FROM "profiles"
  WHERE
    "profiles"."state" = 'pending'
    AND "profiles"."guid" NOT IN (
      SELECT DISTINCT("profileGuid")
      FROM "profileProperties"
      WHERE "state" = 'pending'
    )
  ORDER BY "profiles"."guid" ASC
  LIMIT ${limit}
)
RETURNING *
;
      `;

    const profiles: Profile[] = await api.sequelize.query(query, {
      model: Profile,
      mapToModel: true,
    });

    for (const i in profiles) {
      await task.enqueue("profile:completeImport", {
        profileGuid: profiles[i].guid,
      });
    }
  }
}
