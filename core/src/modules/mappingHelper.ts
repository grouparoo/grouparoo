import { Mapping } from "../models/Mapping";
import { Property } from "../models/Property";
import { Source } from "./../models/Source";
import { Destination } from "./../models/Destination";
import { LockableHelper } from "./lockableHelper";
import { LoggedModel } from "../classes/loggedModel";
import { modelName } from "./modelName";

export namespace MappingHelper {
  export interface Mappings {
    [remoteKey: string]: any;
  }

  export async function getMapping(
    instance: Source | Destination,
    propertyColumn?: "key" | "id"
  ) {
    const MappingObject: Mappings = {};
    const mappings =
      instance.mappings ??
      (await Mapping.findAll({
        where: { ownerId: instance.id, ownerType: modelName(instance) },
      }));

    if (!instance.mappings) instance.mappings = mappings;

    for (const i in mappings) {
      const mapping = mappings[i];
      const property = await Property.findOneWithCache(mapping.propertyId);
      if (!property) {
        throw new Error(
          `cannot find property or this source/destination not ready (remoteKey: ${mapping.remoteKey})`
        );
      }
      MappingObject[mapping.remoteKey] = property[propertyColumn || "key"];
    }

    return MappingObject;
  }

  export async function getConfigMapping(instance: Source | Destination) {
    const MappingObject: Mappings = {};

    const mappings = await Mapping.findAll({
      where: { ownerId: instance.id },
      include: [Property],
    });

    for (const mapping of mappings) {
      const property = await mapping.property;
      if (!property) {
        throw new Error(
          `cannot find property or this source/destination not ready (remoteKey: ${mapping.remoteKey})`
        );
      }
      MappingObject[mapping.remoteKey] = property.getConfigId();
    }

    return MappingObject;
  }

  export async function setMapping(
    instance: Source | Destination,
    mappings: Mappings
  ) {
    delete instance.mappings;
    await LockableHelper.beforeUpdateOptions(instance);

    await Mapping.destroy({
      where: { ownerId: instance.id, ownerType: modelName(instance) },
    });

    let newMappings: Mapping[] = [];
    const keys = Object.keys(mappings);
    for (const i in keys) {
      const remoteKey = keys[i];
      const key = mappings[remoteKey];
      const property = await Property.scope(null).findOne({
        where: { key },
      });

      if (!property) throw new Error(`cannot find property ${key}`);
      if (property.isArray) {
        throw new Error(`cannot map to an array property - ${key}`);
      }

      const mapping = await Mapping.create({
        ownerId: instance.id,
        ownerType: modelName(instance),
        propertyId: property.id,
        remoteKey,
      });
      newMappings.push(mapping);
    }

    instance.mappings = newMappings;
    await instance.touch();
    await LoggedModel.logUpdate(instance);

    // if there's an afterSetMapping hook and we want to commit our changes
    if (typeof instance["afterSetMapping"] === "function") {
      await instance["afterSetMapping"]();
    }
  }
}
