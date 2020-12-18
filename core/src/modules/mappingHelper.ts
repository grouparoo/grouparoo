import { api } from "actionhero";
import { Mapping } from "../models/Mapping";
import { Property } from "../models/Property";
import { Source } from "./../models/Source";
import { Destination } from "./../models/Destination";
import { Transaction } from "sequelize";
import { LockableHelper } from "./lockableHelper";

export namespace MappingHelper {
  export interface Mappings {
    [remoteKey: string]: any;
  }

  export async function getMapping(
    instance: Source | Destination,
    transaction?: Transaction
  ) {
    const MappingObject: Mappings = {};
    const mappings = await Mapping.findAll({
      where: { ownerGuid: instance.guid },
      transaction,
    });

    for (const i in mappings) {
      const mapping = mappings[i];
      const property = await mapping.$get("property", {
        scope: null,
        transaction,
      });
      if (!property) {
        throw new Error(
          `cannot find property or this source/destination not ready (remoteKey: ${mapping.remoteKey})`
        );
      }
      MappingObject[mapping.remoteKey] = property.key;
    }

    return MappingObject;
  }

  export async function setMapping(
    instance: Source | Destination,
    mappings: Mappings,
    transaction?: Transaction
  ) {
    let toCommit = false;
    if (!transaction) {
      transaction = await api.sequelize.transaction({
        lock: Transaction.LOCK.UPDATE,
      });
      toCommit = true;
    }

    try {
      await LockableHelper.beforeUpdateOptions(instance);

      await Mapping.destroy({
        where: { ownerGuid: instance.guid },
        transaction,
      });

      const keys = Object.keys(mappings);
      for (const i in keys) {
        const remoteKey = keys[i];
        const key = mappings[remoteKey];
        const property = await Property.scope(null).findOne({
          where: { key },
          transaction,
        });

        if (!property) {
          throw new Error(`cannot find property ${key}`);
        }

        await Mapping.create(
          {
            ownerGuid: instance.guid,
            ownerType: instance.constructor.name.toLowerCase(),
            propertyGuid: property.guid,
            remoteKey,
          },
          { transaction }
        );
      }

      //@ts-ignore
      instance.changed("updatedAt", true);
      await instance.save({ transaction });

      if (toCommit) await transaction.commit();

      // if there's an afterSetMapping hook and we want to commit our changes
      if (toCommit && typeof instance["afterSetMapping"] === "function") {
        await instance["afterSetMapping"]();
      }
    } catch (error) {
      if (toCommit) await transaction.rollback();
      throw error;
    }
  }
}
