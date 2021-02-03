import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BeforeCreate,
  BeforeSave,
  BelongsTo,
  ForeignKey,
  AfterCreate,
  AfterDestroy,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Op } from "sequelize";
import { Group } from "./Group";
import { Profile } from "./Profile";
import { Log } from "./Log";

@Table({ tableName: "groupMembers", paranoid: false })
export class GroupMember extends Model {
  idPrefix() {
    return "mem";
  }

  @Column({ primaryKey: true })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Profile)
  @Column
  profileId: string;

  @AllowNull(false)
  @ForeignKey(() => Group)
  @Column
  groupId: string;

  @Column
  removedAt: Date;

  @BelongsTo(() => Group)
  group: Group;

  @BelongsTo(() => Profile)
  profile: Profile;

  async apiData() {
    return {
      profileId: this.profileId,
      groupId: this.groupId,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
      removedAt: this.removedAt ? this.removedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeSave
  static async ensureOneProfilePerGroup(instance: GroupMember) {
    const existing = await GroupMember.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        profileId: instance.profileId,
        groupId: instance.groupId,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a GroupMember for ${instance.profileId} and ${instance.groupId}`
      );
    }
  }

  @AfterCreate
  static async logCreate(instance: GroupMember) {
    const group = await instance.$get("group");

    await Log.create({
      topic: "groupMember",
      verb: "create",
      data: await instance.apiData(),
      ownerId: instance.profileId,
      message: `added to group ${group ? group.name : ""} (${
        instance.groupId
      })`,
    });
  }

  @AfterDestroy
  static async logDestroy(instance: GroupMember) {
    const group = await instance.$get("group");

    await Log.create({
      topic: "groupMember",
      verb: "destroy",
      data: await instance.apiData(),
      ownerId: instance.profileId,
      message: `removed from group ${group ? group.name : ""} (${
        instance.groupId
      })`,
    });
  }
}
