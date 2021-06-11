import { Model, Table, HasMany, Column } from "sequelize-typescript";
import { ProfileProperty } from "./ProfileProperty";

@Table({ tableName: "profiles", paranoid: false })
export class ProfileMultipleAssociationShim extends Model {
  @Column({ primaryKey: true })
  id: string;

  @Column
  createdAt: Date;

  @Column
  state: string;

  // include multiple associations to ProfileProperty for group membership searching
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_1",
    foreignKey: "profileId",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_2",
    foreignKey: "profileId",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_3",
    foreignKey: "profileId",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_4",
    foreignKey: "profileId",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_5",
    foreignKey: "profileId",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_6",
    foreignKey: "profileId",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_7",
    foreignKey: "profileId",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_8",
    foreignKey: "profileId",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_9",
    foreignKey: "profileId",
  })
  @HasMany(() => ProfileProperty, {
    as: "ProfileProperties_10",
    foreignKey: "profileId",
  })
  @HasMany(() => ProfileProperty, { foreignKey: "profileId" })
  profileProperties: ProfileProperty[];
}
