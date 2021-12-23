import {
  Table,
  Column,
  DataType,
  AllowNull,
  ForeignKey,
  BelongsTo,
  BeforeSave,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { App } from "./App";
import { Source } from "./Source";
import { Destination } from "./Destination";
import { APIData } from "../modules/apiData";

export const OptionTypes = ["boolean", "string", "number"] as const;

@Table({ tableName: "options", paranoid: false })
export class Option extends LoggedModel<Option> {
  idPrefix() {
    return "opt";
  }

  @AllowNull(false)
  @ForeignKey(() => App)
  @Column
  ownerId: string;

  @AllowNull(false)
  @Column
  ownerType: string;

  @AllowNull(false)
  @Column
  key: string;

  @AllowNull(false)
  @Column
  value: string;

  @AllowNull(false)
  @Column(DataType.ENUM(...OptionTypes))
  type: typeof OptionTypes[number];

  @BelongsTo(() => App, "ownerId")
  app: App;

  @BelongsTo(() => Source, "ownerId")
  source: Source;

  @BelongsTo(() => Destination, "ownerId")
  destination: Destination;

  async apiData() {
    return {
      id: this.id,
      ownerId: this.ownerId,
      ownerType: this.ownerType,
      key: this.key,
      value: this.typedValue(),
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  typedValue() {
    if (this.type === "string") return this.value.toString();
    else if (this.type === "number") return parseFloat(this.value);
    else if (this.type === "boolean") {
      const stringValue = this.value.toString().toLowerCase().trim();
      return stringValue === "true" || stringValue === "1";
    }
    throw new Error(`cannot format option type ${this.type}`);
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async ensureOneOwnerIdPerKey(instance: Option) {
    const existing = await Option.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        ownerId: instance.ownerId,
        ownerType: instance.ownerType,
        key: instance.key,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a Option for ${instance.ownerId} (${instance.ownerType}) and ${instance.key}`
      );
    }
  }

  @BeforeSave
  static async validateType(instance: Option) {
    if (!OptionTypes.includes(instance.type)) {
      throw new Error(
        `${
          instance.type
        } is not a valid type for an Option (only ${OptionTypes.join(
          ", "
        )} allowed)`
      );
    }
  }
}
