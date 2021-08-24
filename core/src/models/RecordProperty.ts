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
import { GrouparooRecord } from "./Record";
import { Property } from "./Property";
import { RecordPropertyOps } from "../modules/ops/recordProperty";
import { StateMachine } from "../modules/stateMachine";
import { APIData } from "../modules/apiData";

const STATES = ["draft", "pending", "ready"] as const;

const STATE_TRANSITIONS = [
  { from: "draft", to: "ready", checks: [] },
  { from: "draft", to: "pending", checks: [] },
  { from: "pending", to: "ready", checks: [] },
  { from: "ready", to: "pending", checks: [] },
];

@Table({ tableName: "recordProperties", paranoid: false })
export class RecordProperty extends LoggedModel<RecordProperty> {
  idPrefix() {
    return "prp";
  }

  @AllowNull(false)
  @ForeignKey(() => GrouparooRecord)
  @Column
  recordId: string;

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

  @BelongsTo(() => GrouparooRecord)
  record: GrouparooRecord;

  @BelongsTo(() => Property)
  property: Property;

  async apiData() {
    const property = await Property.findOneWithCache(this.propertyId);

    return {
      recordId: this.recordId,
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
    return RecordPropertyOps.getValue(this.rawValue, property.type);
  }

  async setValue(value: any) {
    const property = await this.ensureProperty();
    this.rawValue = await RecordPropertyOps.buildRawValue(value, property.type);
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
        message = `recordProperty "${property.key}" created`;
        break;
      case "update":
        const changedValueStrings = [];
        const changedKeys = this.changed() as Array<string>;
        changedKeys.forEach((k) => {
          changedValueStrings.push(`${k} -> ${this[k]}`);
        });

        message = `recordProperty "${
          property.key
        }" updated: ${changedValueStrings.join(", ")}`;
        break;
      case "destroy":
        message = `recordProperty "${property.key}" destroyed`;
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
  static async updateState(instance: RecordProperty) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }
}
