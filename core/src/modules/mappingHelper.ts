import { Mapping } from "../models/Mapping";
import { Property } from "../models/Property";
import { Source } from "./../models/Source";
import { Destination } from "./../models/Destination";
import { LockableHelper } from "./lockableHelper";

export namespace MappingHelper {
  export interface Mappings {
    [remoteKey: string]: any;
  }

  export async function getMapping(
    instance: Source | Destination,
    propertyColumn?: "key" | "id"
  ) {
    const MappingObject: Mappings = {};
    const mappings = await Mapping.findAll({
      where: { ownerId: instance.id },
    });

    for (const i in mappings) {
      const mapping = mappings[i];
      const property = await mapping.$get("property", {
        scope: null,
      });
      if (!property) {
        throw new Error(
          `cannot find property or this source/destination not ready (remoteKey: ${mapping.remoteKey})`
        );
      }
      MappingObject[mapping.remoteKey] = property[propertyColumn || "key"];
    }

    return MappingObject;
  }

  export async function setMapping(
    instance: Source | Destination,
    mappings: Mappings
  ) {
    await LockableHelper.beforeUpdateOptions(instance);

    await Mapping.destroy({
      where: { ownerId: instance.id },
    });

    const keys = Object.keys(mappings);
    for (const i in keys) {
      const remoteKey = keys[i];
      const key = mappings[remoteKey];
      const property = await Property.scope(null).findOne({
        where: { key },
      });

      if (!property) {
        throw new Error(`cannot find property ${key}`);
      }

      await Mapping.create({
        ownerId: instance.id,
        ownerType: instance.constructor.name.toLowerCase(),
        propertyId: property.id,
        remoteKey,
      });
    }

    //@ts-ignore
    instance.changed("updatedAt", true);
    await instance.save();

    // if there's an afterSetMapping hook and we want to commit our changes
    if (typeof instance["afterSetMapping"] === "function") {
      await instance["afterSetMapping"]();
    }
  }
}
