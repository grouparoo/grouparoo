import { api } from "actionhero";
import { Mapping } from "../models/Mapping";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import { Source } from "./../models/Source";
import { Destination } from "./../models/Destination";
import { Transaction } from "sequelize";
import { LockableHelper } from "./lockableHelper";

export namespace MappingHelper {
  export interface Mappings {
    [remoteKey: string]: any;
  }

  export async function getMapping(instance: Source | Destination) {
    const MappingObject: Mappings = {};
    const mappings = await Mapping.findAll({
      where: { ownerGuid: instance.guid },
    });

    for (const i in mappings) {
      const mapping = mappings[i];
      const rule = await mapping.$get("profilePropertyRule", { scope: null });
      if (!rule) {
        throw new Error(
          `cannot find profile property rule or this source/destination not ready (remoteKey: ${mapping.remoteKey})`
        );
      }
      MappingObject[mapping.remoteKey] = rule.key;
    }

    return MappingObject;
  }

  export async function setMapping(
    instance: Source | Destination,
    mappings: Mappings
  ) {
    const transaction = await api.sequelize.transaction({
      lock: Transaction.LOCK.UPDATE,
    });

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
        const profilePropertyRule = await ProfilePropertyRule.scope(
          null
        ).findOne({
          where: { key },
        });

        if (!profilePropertyRule) {
          throw new Error(`cannot find profile property rule ${key}`);
        }

        await Mapping.create(
          {
            ownerGuid: instance.guid,
            ownerType: instance.constructor.name.toLowerCase(),
            profilePropertyRuleGuid: profilePropertyRule.guid,
            remoteKey,
          },
          { transaction }
        );
      }

      //@ts-ignore
      instance.changed("updatedAt", true);
      await instance.save({ transaction });

      await transaction.commit();

      // if there's an afterSetMapping hook
      if (typeof instance["afterSetMapping"] === "function") {
        await instance["afterSetMapping"]();
      }
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}
