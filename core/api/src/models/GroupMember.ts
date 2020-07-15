import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BeforeCreate,
  BelongsTo,
  ForeignKey,
  AfterCreate,
  AfterDestroy,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Group } from "./Group";
import { Profile } from "./Profile";
import { Log } from "./Log";

@Table({ tableName: "groupMembers", paranoid: false })
export class GroupMember extends Model<GroupMember> {
  guidPrefix() {
    return "mem";
  }

  @Column({ primaryKey: true })
  guid: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Profile)
  @Column
  profileGuid: string;

  @AllowNull(false)
  @ForeignKey(() => Group)
  @Column
  groupGuid: string;

  @Column
  removedAt: Date;

  @BelongsTo(() => Group)
  group: Group;

  @BelongsTo(() => Profile)
  profile: Profile;

  async apiData() {
    return {
      profileGuid: this.profileGuid,
      groupGuid: this.groupGuid,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
      removedAt: this.removedAt ? this.removedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }

  @AfterCreate
  static async logCreate(instance: GroupMember) {
    const group = await instance.$get("group");

    await Log.create({
      topic: "groupMember",
      verb: "create",
      data: await instance.apiData(),
      ownerGuid: instance.profileGuid,
      message: `added to group ${group ? group.name : ""} (${
        instance.groupGuid
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
      ownerGuid: instance.profileGuid,
      message: `removed from group ${group ? group.name : ""} (${
        instance.groupGuid
      })`,
    });
  }
}
