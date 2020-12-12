import { Op, Transaction } from "sequelize";
import {
  Table,
  Column,
  AllowNull,
  Default,
  ForeignKey,
  AfterSave,
  AfterDestroy,
  BelongsTo,
  BeforeSave,
  DataType,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Profile } from "./Profile";
import { Property } from "./Property";
import { ProfilePropertyOps } from "../modules/ops/profileProperty";
import { StateMachine } from "./../modules/stateMachine";

const STATES = ["draft", "pending", "ready"] as const;

const STATE_TRANSITIONS = [
  { from: "draft", to: "ready", checks: [] },
  { from: "draft", to: "pending", checks: [] },
  { from: "pending", to: "ready", checks: [] },
  { from: "ready", to: "pending", checks: [] },
];

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
  @ForeignKey(() => Property)
  @Column
  propertyGuid: string;

  @AllowNull(false)
  @Default("pending")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @Column
  rawValue: string;

  @AllowNull(false)
  @Default(0)
  @Column
  position: number;

  @AllowNull(true)
  @Column
  valueChangedAt: Date;

  @AllowNull(false)
  @Default(new Date())
  @Column
  stateChangedAt: Date;

  @AllowNull(true)
  @Column
  confirmedAt: Date;

  @BelongsTo(() => Profile)
  profile: Profile;

  @BelongsTo(() => Property)
  property: Property;

  async apiData() {
    const rule = await this.$get("property");

    return {
      profileGuid: this.profileGuid,
      property: this.property,
      state: this.state,
      valueChangedAt: this.valueChangedAt
        ? this.valueChangedAt.getTime()
        : null,
      stateChangedAt: this.stateChangedAt
        ? this.stateChangedAt.getTime()
        : null,
      confirmedAt: this.confirmedAt ? this.confirmedAt.getTime() : null,
      position: this.position,
      key: rule.key,
      value: await this.getValue(),
    };
  }

  async getValue() {
    const rule = await this.ensureProperty();
    return ProfilePropertyOps.getValue(this.rawValue, rule.type);
  }

  async setValue(value: any) {
    const rule = await this.ensureProperty();
    this.rawValue = await ProfilePropertyOps.buildRawValue(value, rule.type);
    await this.validateValue();
  }

  async ensureProperty() {
    const rule = await this.$get("property");
    if (!rule) {
      throw new Error(
        `profile property rule not found for propertyGuid ${this.propertyGuid}`
      );
    }
    return rule;
  }

  async logMessage(verb: "create" | "update" | "destroy") {
    let message = "";
    const rule = await this.ensureProperty();

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
    const rule = await this.ensureProperty();

    // null values are always "unique", even for unique profile properties
    if (this.rawValue === null || this.rawValue === undefined) {
      return;
    }

    if (rule.unique) {
      const count = await ProfileProperty.count({
        where: {
          propertyGuid: rule.guid,
          rawValue: this.rawValue,
          profileGuid: { [Op.notIn]: [this.profileGuid] },
        },
      });

      if (count > 0) {
        throw new Error(
          `Another profile already has the value ${this.rawValue} for property ${rule.key}`
        );
      }
    }
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeSave
  static async updateState(instance: ProfileProperty) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeSave
  static async ensureOneProfilePropertyPerProfileProeprtyRule(
    instance: ProfileProperty,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    const existing = await ProfileProperty.scope(null).findOne({
      where: {
        guid: { [Op.ne]: instance.guid },
        profileGuid: instance.profileGuid,
        propertyGuid: instance.propertyGuid,
        position: instance.position,
      },
      transaction,
    });
    if (existing) {
      throw new Error(
        `There is already a ProfileProperty for ${instance.profileGuid} and ${instance.propertyGuid} at position ${instance.position}`
      );
    }
  }

  @AfterSave
  static async updateProfileAfterSave(
    instance: ProfileProperty,
    { transaction }
  ) {
    const changed = instance.changed();
    if (!changed) return;

    const profile = await instance.$get("profile", { transaction });
    if (profile && changed.indexOf("rawValue") >= 0) {
      profile.updatedAt = new Date();
      profile.changed("updatedAt", true);
      await profile.save({ transaction });
    }
  }

  @AfterDestroy
  static async updateProfileAfterDestroy(
    instance: ProfileProperty,
    { transaction }
  ) {
    const profile = await instance.$get("profile", { transaction });
    if (profile) {
      profile.updatedAt = new Date();
      profile.changed("updatedAt", true);
      await profile.save({ transaction });
    }
  }
}
