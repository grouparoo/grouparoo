import { Op } from "sequelize";
import {
  Table,
  Column,
  AllowNull,
  Default,
  ForeignKey,
  BelongsTo,
  BeforeSave,
  DataType,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Profile } from "./Profile";
import { Property } from "./Property";
import { ProfilePropertyOps } from "../modules/ops/profileProperty";
import { StateMachine } from "./../modules/stateMachine";
import { APIData } from "../modules/apiData";

const STATES = ["draft", "pending", "ready"] as const;

const STATE_TRANSITIONS = [
  { from: "draft", to: "ready", checks: [] },
  { from: "draft", to: "pending", checks: [] },
  { from: "pending", to: "ready", checks: [] },
  { from: "ready", to: "pending", checks: [] },
];

@Table({ tableName: "profileProperties", paranoid: false })
export class ProfileProperty extends LoggedModel<ProfileProperty> {
  idPrefix() {
    return "prp";
  }

  @AllowNull(false)
  @ForeignKey(() => Profile)
  @Column
  profileId: string;

  @AllowNull(false)
  @ForeignKey(() => Property)
  @Column
  propertyId: string;

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

  @AllowNull(false)
  @Default(false)
  @Column
  unique: boolean;

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

  @AllowNull(true)
  @Column
  startedAt: Date;

  @BelongsTo(() => Profile)
  profile: Profile;

  @BelongsTo(() => Property)
  property: Property;

  async apiData() {
    const property = await Property.findOneWithCache(this.propertyId);

    return {
      profileId: this.profileId,
      property: this.property,
      state: this.state,
      valueChangedAt: APIData.formatDate(this.valueChangedAt),
      stateChangedAt: APIData.formatDate(this.stateChangedAt),
      confirmedAt: APIData.formatDate(this.confirmedAt),
      startedAt: APIData.formatDate(this.startedAt),
      position: this.position,
      unique: this.unique,
      key: property.key,
      value: await this.getValue(),
    };
  }

  async getValue() {
    const property = await this.ensureProperty();
    return ProfilePropertyOps.getValue(this.rawValue, property.type);
  }

  async setValue(value: any) {
    const property = await this.ensureProperty();
    this.rawValue = await ProfilePropertyOps.buildRawValue(
      value,
      property.type
    );
  }

  async ensureProperty() {
    const property = await Property.findOneWithCache(this.propertyId);
    if (!property) {
      throw new Error(`property not found for propertyId ${this.propertyId}`);
    }
    return property;
  }

  async logMessage(verb: "create" | "update" | "destroy") {
    let message = "";
    const property = await this.ensureProperty();

    switch (verb) {
      case "create":
        message = `profileProperty "${property.key}" created`;
        break;
      case "update":
        const changedValueStrings = [];
        const changedKeys = this.changed() as Array<string>;
        changedKeys.forEach((k) => {
          changedValueStrings.push(`${k} -> ${this[k]}`);
        });

        message = `profileProperty "${
          property.key
        }" updated: ${changedValueStrings.join(", ")}`;
        break;
      case "destroy":
        message = `profileProperty "${property.key}" destroyed`;
        break;
    }

    return message;
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async updateState(instance: ProfileProperty) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }
}
