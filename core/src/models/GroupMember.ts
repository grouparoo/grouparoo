import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BeforeCreate,
  BeforeBulkCreate,
  BeforeSave,
  BelongsTo,
  ForeignKey,
  AfterCreate,
  AfterBulkCreate,
  AfterDestroy,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Op, WhereAttributeHash } from "sequelize";
import { Group } from "./Group";
import { Profile } from "./Profile";
import { Log } from "./Log";
import { APIData } from "../modules/apiData";

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
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
      removedAt: APIData.formatDate(this.removedAt),
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  static generateId(instance: GroupMember) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeBulkCreate
  static generateIds(instances: GroupMember[]) {
    instances.forEach((instance) => this.generateId(instance));
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

  @AfterBulkCreate
  static async logsCreate(instances: GroupMember[]) {
    const groupIds = [...new Set(instances.map((gm) => gm.groupId))];
    for (const groupId of groupIds) {
      const group = await Group.findById(groupId);
      const groupMembers = instances.filter((gm) => gm.groupId === group.id);
      await Log.bulkCreate(
        await Promise.all(
          groupMembers.map(async (instance) => {
            return {
              topic: "groupMember",
              verb: "create",
              data: await instance.apiData(),
              ownerId: instance.profileId,
              message: `added to group ${group ? group.name : ""} (${
                instance.groupId
              })`,
            };
          })
        )
      );
    }
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

  static async destroyWithLogs(q: { where: WhereAttributeHash }) {
    const instances = await GroupMember.findAll(q);

    const groupIds = [...new Set(instances.map((gm) => gm.groupId))];
    for (const groupId of groupIds) {
      const group = await Group.findById(groupId);
      const groupMembers = instances.filter((gm) => gm.groupId === group.id);
      await Log.bulkCreate(
        await Promise.all(
          groupMembers.map(async (instance) => {
            return {
              topic: "groupMember",
              verb: "destroy",
              data: await instance.apiData(),
              ownerId: instance.profileId,
              message: `removed from group ${group ? group.name : ""} (${
                instance.groupId
              })`,
            };
          })
        )
      );
    }

    await GroupMember.destroy(q);
  }
}
