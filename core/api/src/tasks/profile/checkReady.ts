import { api, task } from "actionhero";
import { RetryableTask } from "../../classes/retryableTask";
import { Profile } from "../../models/Profile";
import { plugin } from "../../modules/plugin";

export class ProfilesCheckReady extends RetryableTask {
  constructor() {
    super();
    this.name = "profiles:checkReady";
    this.description =
      "If all of a Profile's Properties are ready, mark the profile ready and complete the import";
    this.frequency = 1000 * 30;
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
AND "state" = 'pending'
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
