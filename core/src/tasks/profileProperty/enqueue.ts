import { CLSTask } from "../../classes/tasks/clsTask";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Property } from "../../models/Property";
import { plugin } from "../../modules/plugin";
import { CLS } from "../../modules/cls";

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

    const properties = await Property.findAll({
      where: { state: "ready" },
    });

    for (const i in properties) {
      const property = properties[i];
      const source = await property.$get("source", { scope: null });
      const { pluginConnection } = await source.getPlugin();

      if (source.state !== "ready") continue;

      const pendingProfileProperties = await ProfileProperty.findAll({
        where: {
          propertyId: property.id,
          state: "pending",
        },
        order: [["stateChangedAt", "ASC"]],
        limit,
      });

      const method = pluginConnection.methods.profileProperties
        ? "ProfileProperties"
        : "ProfileProperty";

      if (pendingProfileProperties.length > 0) {
        if (method === "ProfileProperties") {
          await CLS.enqueueTask(`profileProperty:import${method}`, {
            propertyId: property.id,
            profileIds: pendingProfileProperties.map((ppp) => ppp.profileId),
          });
        } else {
          await Promise.all(
            pendingProfileProperties.map((ppp) =>
              CLS.enqueueTask(`profileProperty:import${method}`, {
                propertyId: property.id,
                profileId: ppp.profileId,
              })
            )
          );
        }
      }

      count = count + pendingProfileProperties.length;
    }

    return count;
  }
}
