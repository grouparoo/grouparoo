import { GrouparooModel } from "../models/GrouparooModel";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { Source } from "../models/Source";
import { Destination } from "../models/Destination";
import { Group } from "../models/Group";

export namespace ModelGuard {
  export async function check(
    instance: GrouparooRecord | Source | Destination | Group
  ) {
    if (instance.isNewRecord) {
      // we are creating a new instance
      const model = await GrouparooModel.scope(null).findOne({
        where: { id: instance.modelId },
      });

      if (!model) {
        throw new Error(`cannot find model with id "${instance.modelId}"`);
      }

      if (instance.state !== "deleted" && model.state === "deleted") {
        throw new Error(
          `cannot find ready model with id "${instance.modelId}"`
        );
      }
    } else {
      // we are updating an existing record
      const changes = instance.changed();
      if (!changes) return;
      if (changes.includes("modelId")) {
        throw new Error("cannot change models");
      }
    }
  }
}
