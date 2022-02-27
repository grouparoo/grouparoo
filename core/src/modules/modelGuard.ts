import { GrouparooRecord } from "../models/GrouparooRecord";
import { Source } from "../models/Source";
import { Destination } from "../models/Destination";
import { Group } from "../models/Group";
import { ModelsCache } from "./caches/modelsCache";

export namespace ModelGuard {
  export async function check(
    instance: GrouparooRecord | Source | Destination | Group
  ) {
    if (instance.isNewRecord) {
      const model = await ModelsCache.findOneWithCache(instance.modelId);

      if (!model) {
        throw new Error(`cannot find model with id "${instance.modelId}"`);
      }

      if (instance.state !== "deleted" && model.state === "deleted") {
        throw new Error(
          `cannot find ready model with id "${instance.modelId}"`
        );
      }
    } else {
      // we are updating an existing instance
      const changes = instance.changed();
      if (!changes) return;
      if (changes.includes("modelId")) {
        throw new Error("cannot change models");
      }
    }
  }
}
