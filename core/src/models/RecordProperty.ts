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
import { Op } from "sequelize";
import { GrouparooRecord } from "./GrouparooRecord";
import { Property } from "./Property";
import { RecordPropertyOps } from "../modules/ops/recordProperty";
import { StateMachine } from "../modules/stateMachine";
import { APIData } from "../modules/apiData";
import { CommonModel } from "../classes/commonModel";
import { config } from "actionhero";

const STATES = ["draft", "pending", "ready"] as const;

const STATE_TRANSITIONS: StateMachine.StateTransition[] = [
  { from: "draft", to: "ready", checks: [] },
  { from: "draft", to: "pending", checks: [] },
  { from: "pending", to: "ready", checks: [] },
  { from: "ready", to: "pending", checks: [] },
];

export enum InvalidReasons {
  Duplicate = "Duplicate Value",
}

@Table({ tableName: "recordProperties", paranoid: false })
export class RecordProperty extends CommonModel<RecordProperty> {
  idPrefix() {
    return "rpr";
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

  @Column
  invalidValue: string;

  @Column
  invalidReason: string;

  @AllowNull(false)
  @Default(0)
  @Column
  position: number;

  @AllowNull(false)
  @Default(false)
  @Column
  unique: boolean;

  @Column
  valueChangedAt: Date;

  @AllowNull(false)
  @Default(new Date())
  @Column
  stateChangedAt: Date;

  @Column
  confirmedAt: Date;

  @Column
  startedAt: Date;

  @BelongsTo(() => GrouparooRecord)
  record: GrouparooRecord;

  @BelongsTo(() => Property)
  property: Property;

  async apiData() {
    const property = await this.ensureProperty();

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
      invalidValue: this.invalidValue,
      invalidReason: this.invalidReason,
    };
  }

  async getValue() {
    const property = await this.ensureProperty();
    return RecordPropertyOps.getValue(this.rawValue, property.type);
  }

  async setValue(value: any) {
    const property = await this.ensureProperty();
    const { rawValue, invalidValue, invalidReason } =
      await RecordPropertyOps.buildRawValue(value, property.type, this);

    this.rawValue = rawValue;
    this.invalidValue = invalidValue;
    this.invalidReason = invalidReason;
  }

  async ensureProperty() {
    const property = await Property.findOneWithCache(this.propertyId);
    if (!property) {
      throw new Error(`property not found for propertyId ${this.propertyId}`);
    }
    return property;
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  // TODO: I want to figure out the types to move these to CommonModel
  static async updateAllinBatches(
    instances: RecordProperty[],
    values: { [key: string]: any }
  ) {
    const ids = instances.map((i) => i.id);
    return this.updateAllinBatchesById(ids, values);
  }

  static async updateAllinBatchesById(
    ids: string[],
    values: { [key: string]: any }
  ) {
    const max = config.batchSize.internalWrite;
    const queue: string[] = Array.from(ids);
    while (queue.length > 0) {
      await RecordProperty.update(values, {
        where: {
          id: { [Op.in]: queue.splice(0, max) },
        },
      });
    }
  }

  @BeforeSave
  static async updateState(instance: RecordProperty) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }
}
