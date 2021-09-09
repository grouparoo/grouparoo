import { Model, Table, HasMany, Column } from "sequelize-typescript";
import { RecordProperty } from "./RecordProperty";

@Table({ tableName: "records", paranoid: false })
export class RecordMultipleAssociationShim extends Model {
  @Column({ primaryKey: true })
  id: string;

  @Column
  createdAt: Date;

  @Column
  state: string;

  // include multiple associations to RecordProperty for group membership searching
  @HasMany(() => RecordProperty, {
    as: "RecordProperties_1",
    foreignKey: "recordId",
  })
  @HasMany(() => RecordProperty, {
    as: "RecordProperties_2",
    foreignKey: "recordId",
  })
  @HasMany(() => RecordProperty, {
    as: "RecordProperties_3",
    foreignKey: "recordId",
  })
  @HasMany(() => RecordProperty, {
    as: "RecordProperties_4",
    foreignKey: "recordId",
  })
  @HasMany(() => RecordProperty, {
    as: "RecordProperties_5",
    foreignKey: "recordId",
  })
  @HasMany(() => RecordProperty, {
    as: "RecordProperties_6",
    foreignKey: "recordId",
  })
  @HasMany(() => RecordProperty, {
    as: "RecordProperties_7",
    foreignKey: "recordId",
  })
  @HasMany(() => RecordProperty, {
    as: "RecordProperties_8",
    foreignKey: "recordId",
  })
  @HasMany(() => RecordProperty, {
    as: "RecordProperties_9",
    foreignKey: "recordId",
  })
  @HasMany(() => RecordProperty, {
    as: "RecordProperties_10",
    foreignKey: "recordId",
  })
  @HasMany(() => RecordProperty, { foreignKey: "recordId" })
  recordProperties: RecordProperty[];
}
