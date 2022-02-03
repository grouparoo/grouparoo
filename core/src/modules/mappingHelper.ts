import { Op } from "sequelize";
import { Mapping } from "../models/Mapping";
import { Property } from "../models/Property";
import { Source } from "./../models/Source";
import { Destination } from "./../models/Destination";
import { LockableHelper } from "./lockableHelper";
import { modelName } from "./modelName";

export namespace MappingHelper {
  export type Mappings = Record<string, string>;

  export async function getMapping(
    instance: Source | Destination,
    propertyColumn?: "key" | "id"
  ) {
    const mappingObject: Mappings = {};
    const mappings =
      instance.mappings ??
      (await Mapping.findAll({
        where: {
          ownerId: instance.id,
          ownerType: modelName<Source | Destination>(instance),
        },
      }));

    if (!instance.mappings) instance.mappings = mappings;

    for (const i in mappings) {
      const mapping = mappings[i];
      const property = await Property.findOneWithCache(
        mapping.propertyId,
        instance.modelId
      );

      if (!property) {
        throw new Error(
          `cannot find property or this source/destination not ready (remoteKey: ${mapping.remoteKey}, propertyId: ${mapping.propertyId})`
        );
      }
      mappingObject[mapping.remoteKey] = property[propertyColumn || "key"];
    }

    return mappingObject;
  }

  export async function getConfigMapping(instance: Source | Destination) {
    const mappingObject: Mappings = {};

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
      mappingObject[mapping.remoteKey] = property.getConfigId();
    }

    return mappingObject;
  }

  export async function setMapping(
    instance: (Source | Destination) & { afterSetMapping?: Function },
    mappings: Mappings
  ) {
    delete instance.mappings;
    await LockableHelper.beforeUpdateOptions(instance);

    await Mapping.destroy({
      where: {
        ownerId: instance.id,
        ownerType: modelName<Source | Destination>(instance),
      },
    });

    const otherSourcePrimaryKey =
      instance instanceof Source
        ? await Property.findOne({
            include: {
              model: Source,
              required: true,
              where: {
                modelId: instance.modelId,
              },
            },
            where: {
              isPrimaryKey: true,
              sourceId: {
                [Op.ne]: instance.id,
              },
            },
          })
        : undefined;

    let newMappings: Mapping[] = [];
    const keys = Object.keys(mappings);
    for (const i in keys) {
      const remoteKey = keys[i];
      const key = mappings[remoteKey];
      const property = await Property.scope(null).findOne({
        where: { key },
      });

      if (!property) throw new Error(`cannot find property ${key}`);
      if (instance instanceof Source && property.isArray) {
        throw new Error(
          `Sources cannot map to an array Property ${property.key} (${property.id})`
        );
      }

      const source = await property.$get("source", { scope: null });
      if (source.modelId !== instance.modelId) {
        throw new Error(
          `cannot map a ${instance.modelId} model to a ${source.modelId} property (${source.name})`
        );
      }

      if (otherSourcePrimaryKey && property.sourceId === instance.id) {
        throw new Error(
          `'${instance.name}' cannot map '${remoteKey}' to own Property '${key}'.
          '${otherSourcePrimaryKey.source.name}' is the primary Source for Model
          ${instance.modelId} and '${instance.name}' requires a mapping back to '${otherSourcePrimaryKey.source.name}.'`
        );
      }

      const mapping = await Mapping.create({
        ownerId: instance.id,
        ownerType: modelName<Source | Destination>(instance),
        propertyId: property.id,
        remoteKey,
      });
      newMappings.push(mapping);
    }

    instance.mappings = newMappings;
    await instance.touch();

    // if there's an afterSetMapping hook and we want to commit our changes
    if (typeof instance["afterSetMapping"] === "function") {
      await instance["afterSetMapping"]();
    }
  }
}
