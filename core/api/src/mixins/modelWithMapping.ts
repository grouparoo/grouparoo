import { api } from "actionhero";
import { Model, HasMany, AfterDestroy } from "sequelize-typescript";
import { LoggedModel } from "./../classes/loggedModel";
import { Mapping } from "../models/Mapping";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";

export interface Mappings {
  [key: string]: any;
}
export abstract class ModelWithMappings<T> extends LoggedModel<T> {
  @HasMany(() => Mapping)
  mappings: Mapping[];

  @AfterDestroy
  static async destroyDestinationMappings(instance) {
    return Mapping.destroy({
      where: { ownerGuid: instance.guid },
    });
  }

  async getMapping() {
    const MappingObject: Mappings = {};
    const mappings = await Mapping.findAll({ where: { ownerGuid: this.guid } });

    for (const i in mappings) {
      const mapping = mappings[i];
      const rule = await mapping.$get("profilePropertyRule");
      MappingObject[mapping.remoteKey] = rule.key;
    }

    return MappingObject;
  }

  async setMapping(mappings: Mappings) {
    const transaction = await api.sequelize.transaction();

    try {
      await Mapping.destroy({
        where: { ownerGuid: this.guid },
        transaction,
      });

      const keys = Object.keys(mappings);
      for (const i in keys) {
        const remoteKey = keys[i];
        const key = mappings[remoteKey];
        const profilePropertyRule = await ProfilePropertyRule.findOne({
          where: { key },
        });

        if (!profilePropertyRule) {
          throw new Error(`cannot find profile property rule ${key}`);
        }

        await Mapping.create(
          {
            ownerGuid: this.guid,
            ownerType: "destination",
            profilePropertyRuleGuid: profilePropertyRule.guid,
            remoteKey,
          },
          { transaction }
        );
      }

      this.changed("updatedAt", true);
      await this.save({ transaction });

      await transaction.commit();

      // if there's an afterSetMapping hook
      if (typeof this.afterSetMapping === "function") {
        await this.afterSetMapping();
      }
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  abstract afterSetMapping?: () => Promise<any>;
}
