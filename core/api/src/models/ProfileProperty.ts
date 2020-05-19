import { Op } from "sequelize";
import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  AfterSave,
  AfterDestroy,
  BelongsTo,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Profile } from "./Profile";
import { ProfilePropertyRule } from "./ProfilePropertyRule";

@Table({ tableName: "profileProperties", paranoid: false })
export class ProfileProperty extends LoggedModel<ProfileProperty> {
  guidPrefix() {
    return "prp";
  }

  @AllowNull(false)
  @ForeignKey(() => Profile)
  @Column
  profileGuid: string;

  @AllowNull(false)
  @ForeignKey(() => ProfilePropertyRule)
  @Column
  profilePropertyRuleGuid: string;

  @Column
  rawValue: string;

  @BelongsTo(() => Profile)
  profile: Profile;

  @BelongsTo(() => ProfilePropertyRule)
  profilePropertyRule: ProfilePropertyRule;

  @AfterSave
  static async updateProfileAfterSave(instance: ProfileProperty) {
    const changed = instance.changed();
    if (!changed) {
      return;
    }

    const profile = await instance.$get("profile");
    if (profile && changed.indexOf("rawValue") >= 0) {
      profile.updatedAt = new Date();
      profile.changed("updatedAt", true);
      await profile.save();
    }
  }

  @AfterDestroy
  static async updateProfileAfterDestroy(instance: ProfileProperty) {
    const profile = await instance.$get("profile");
    if (profile) {
      profile.updatedAt = new Date();
      profile.changed("updatedAt", true);
      await profile.save();
    }
  }

  async apiData() {
    const rule = await this.cachedProfilePropertyRule();

    return {
      profileGuid: this.profileGuid,
      profilePropertyRule: this.profilePropertyRule,
      key: rule.key,
      value: await this.getValue(),
    };
  }

  async cachedProfilePropertyRule() {
    const profilePropertyRules = await ProfilePropertyRule.cached();
    for (const i in profilePropertyRules) {
      const rule = profilePropertyRules[i];
      if (rule.guid === this.profilePropertyRuleGuid) {
        return rule;
      }
    }

    throw new Error(
      `cached profile property rule not found for this profilePropertyRuleGuid ${this.profilePropertyRuleGuid}`
    );
  }

  async setValue(value: any) {
    this.rawValue = await this.buildRawValue(value);
    await this.validateValue();
  }

  async buildRawValue(value: any) {
    const rule = await this.cachedProfilePropertyRule();

    if (value === null || value === undefined || value === "") {
      return null;
    }

    switch (rule.type) {
      case "float":
        return value.toString();
      case "integer":
        return value.toString();
      case "date":
        if (value instanceof Date) {
          return value.getTime().toString();
        } else {
          return new Date(value).getTime().toString();
        }
      case "string":
        return value.toString();
      case "email":
        return value.toString().toLowerCase();
      case "boolean":
        if (![true, false, 0, 1, "true", "false"].includes(value)) {
          throw new Error(
            `${value} is not a valid boolean value for ${rule.key}`
          );
        }
        if ([true, 1, "true"].includes(value)) {
          return "true";
        } else {
          return "false";
        }
      default:
        throw new Error(`cannot coerce profileProperty type ${rule.type}`);
    }
  }

  async getValue() {
    const rule = await this.cachedProfilePropertyRule();

    if (this.rawValue === null || this.rawValue === undefined) {
      return null;
    }

    switch (rule.type) {
      case "float":
        return parseFloat(this.rawValue);
      case "integer":
        return parseInt(this.rawValue);
      case "date":
        return new Date(parseInt(this.rawValue));
      case "string":
        return this.rawValue;
      case "email":
        return this.rawValue.toLowerCase();
      case "boolean":
        if ([true, 1, "true"].includes(this.rawValue)) {
          return true;
        } else {
          return false;
        }
      default:
        throw new Error(`cannot coerce profileProperty type ${rule.type}`);
    }
  }

  async logMessage(verb: "create" | "update" | "destroy") {
    let rule;
    let message = "";
    const rules = await ProfilePropertyRule.cached();
    for (let i in rules) {
      if (rules[i].guid === this.profilePropertyRuleGuid) {
        rule = rules[i];
      }
    }

    switch (verb) {
      case "create":
        message = `profileProperty "${rule.key}" created`;
        break;
      case "update":
        const changedValueStrings = [];
        const changedKeys = this.changed() as Array<string>;
        changedKeys.forEach((k) => {
          changedValueStrings.push(`${k} -> ${this[k]}`);
        });

        message = `profileProperty "${
          rule.key
        }" updated: ${changedValueStrings.join(", ")}`;
        break;
      case "destroy":
        message = `profileProperty "${rule.key}" destroyed`;
        break;
    }

    return message;
  }

  async validateValue() {
    const rule = await this.cachedProfilePropertyRule();

    if (!rule) {
      throw new Error(
        `(validation) profile property rule is not defined for key`
      );
    }

    // null values are always "unique", even for unique profile properties
    if (this.rawValue === null || this.rawValue === undefined) {
      return;
    }

    if (rule.unique) {
      const count = await ProfileProperty.count({
        where: {
          profilePropertyRuleGuid: rule.guid,
          rawValue: this.rawValue,
          profileGuid: { [Op.notIn]: [this.profileGuid] },
        },
      });

      if (count > 0) {
        throw new Error(
          `another profile already has the value ${this.rawValue} for property ${rule.key}`
        );
      }
    }
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }
}
