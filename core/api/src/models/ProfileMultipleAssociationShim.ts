import { Model, Table, HasMany, Column } from "sequelize-typescript";
import { ProfileProperty } from "./ProfileProperty";

@Table({ tableName: "profiles", paranoid: false })
export class ProfileMultipleAssociationShim extends Model {
  @Column({ primaryKey: true })
  guid: string;

  @Column
  createdAt: Date;

  // include multiple associations to ProfileProperty for group membership searching
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_1",
    foreignKey: "profileGuid",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_2",
    foreignKey: "profileGuid",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_3",
    foreignKey: "profileGuid",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_4",
    foreignKey: "profileGuid",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_5",
    foreignKey: "profileGuid",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_6",
    foreignKey: "profileGuid",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_7",
    foreignKey: "profileGuid",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_8",
    foreignKey: "profileGuid",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_9",
    foreignKey: "profileGuid",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_10",
    foreignKey: "profileGuid",
  })
  @HasMany(() => ProfileProperty, { foreignKey: "profileGuid" })
  profileProperties: ProfileProperty[];
}
