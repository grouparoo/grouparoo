import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";
import { Property } from "../../models/Property";
import { plugin } from "../../modules/plugin";
import { ProfilePropertyOps } from "../../modules/ops/profileProperty";

export class ProfilePropertiesEnqueue extends CLSTask {
  constructor() {
    super();
    this.name = "profileProperties:enqueue";
    this.description =
      "Enqueue a batch of Profiles who need a Profile Property";
    this.frequency = 1000 * 10;
    this.queue = "profileProperties";
    this.inputs = {};
  }

  async runWithinTransaction() {
    let count = 0;
    const limit = parseInt(
      (
        await plugin.readSetting(
          "core",
          "imports-profile-properties-batch-size"
        )
      ).value
    );

    const properties = await Property.findAllWithCache();

    for (const property of properties) {
      const pendingProfileProperties =
        await ProfilePropertyOps.processPendingProfileProperties(
          property,
          limit
        );

      count = count + pendingProfileProperties.length;
    }

    // re-enqueue if there is more to do
    if (count > 0) await CLS.enqueueTask(this.name, {});

    return count;
  }
}
