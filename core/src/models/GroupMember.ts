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
import { Op, Transaction } from "sequelize";
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

  async apiData(transaction?: Transaction) {
    return {
      profileGuid: this.profileGuid,
      groupGuid: this.groupGuid,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
      removedAt: this.removedAt ? this.removedAt.getTime() : null,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string, transaction?: Transaction) {
    const instance = await this.scope(null).findOne({
      where: { guid },
      transaction,
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeSave
  static async ensureOneProfilePerGroup(
    instance: GroupMember,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    const existing = await GroupMember.scope(null).findOne({
      where: {
        guid: { [Op.ne]: instance.guid },
        profileGuid: instance.profileGuid,
        groupGuid: instance.groupGuid,
      },
      transaction,
    });
    if (existing) {
      throw new Error(
        `There is already a GroupMember for ${instance.profileGuid} and ${instance.groupGuid}`
      );
    }
  }

  @AfterCreate
  static async logCreate(instance: GroupMember, { transaction }) {
    const group = await instance.$get("group", { transaction });

    await Log.create(
      {
        topic: "groupMember",
        verb: "create",
        data: await instance.apiData(),
        ownerGuid: instance.profileGuid,
        message: `added to group ${group ? group.name : ""} (${
          instance.groupGuid
        })`,
      },
      { transaction }
    );
  }

  @AfterDestroy
  static async logDestroy(instance: GroupMember, { transaction }) {
    const group = await instance.$get("group", { transaction });

    await Log.create(
      {
        topic: "groupMember",
        verb: "destroy",
        data: await instance.apiData(),
        ownerGuid: instance.profileGuid,
        message: `removed from group ${group ? group.name : ""} (${
          instance.groupGuid
        })`,
      },
      { transaction }
    );
  }
}
