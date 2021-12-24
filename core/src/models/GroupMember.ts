import {
  Table,
  Column,
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
import { Op, WhereAttributeHash } from "sequelize";
import { Group } from "./Group";
import { GrouparooRecord } from "./GrouparooRecord";
import { Log } from "./Log";
import { APIData } from "../modules/apiData";
import { CommonModel } from "../classes/commonModel";

@Table({ tableName: "groupMembers", paranoid: false })
export class GroupMember extends CommonModel<GroupMember> {
  idPrefix() {
    return "mem";
  }

  @AllowNull(false)
  @ForeignKey(() => GrouparooRecord)
  @Column
  recordId: string;

  @AllowNull(false)
  @ForeignKey(() => Group)
  @Column
  groupId: string;

  @Column
  removedAt: Date;

  @BelongsTo(() => Group)
  group: Group;

  @BelongsTo(() => GrouparooRecord)
  record: GrouparooRecord;

  async apiData() {
    return {
      recordId: this.recordId,
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

  @BeforeSave
  static async ensureOneRecordPerGroup(instance: GroupMember) {
    const existing = await GroupMember.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        recordId: instance.recordId,
        groupId: instance.groupId,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a GroupMember for ${instance.recordId} and ${instance.groupId}`
      );
    }
  }

  @BeforeCreate
  static async ensureModelMatch(instance: GroupMember) {
    const group = await instance.$get("group", { scope: null });
    const record = await instance.$get("record", { scope: null });
    if (record.modelId !== group.modelId) {
      throw new Error(
        `models ${group.modelId} and ${record.modelId} do not match`
      );
    }
  }

  @BeforeBulkCreate
  static async ensureModelsMatch(instances: GroupMember[]) {
    const groups = await Group.findAll({
      where: { id: instances.map((i) => i.groupId) },
    });
    const records = await GrouparooRecord.findAll({
      where: { id: instances.map((i) => i.recordId) },
    });

    for (const i of instances) {
      const group = groups.find((g) => g.id === i.groupId);
      const record = records.find((r) => r.id === i.recordId);
      if (record.modelId !== group.modelId) {
        throw new Error(
          `models ${group.modelId} and ${record.modelId} do not match`
        );
      }
    }
  }

  @AfterCreate
  static async logCreate(instance: GroupMember) {
    const group = await instance.$get("group");

    await Log.create({
      topic: "groupMember",
      verb: "create",
      data: await instance.apiData(),
      ownerId: instance.recordId,
      message: `added to group ${group ? group.name : ""} (${
        instance.groupId
      })`,
    });
  }

  @AfterBulkCreate
  static async logsCreate(instances: GroupMember[]) {
    const groupIds = instances
      .map((gm) => gm.groupId)
      .filter(uniqueArrayValues);

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
              ownerId: instance.recordId,
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
      ownerId: instance.recordId,
      message: `removed from group ${group ? group.name : ""} (${
        instance.groupId
      })`,
    });
  }

  static async destroyWithLogs(q: { where: WhereAttributeHash }) {
    const instances = await GroupMember.findAll(q);
    const groupIds = instances
      .map((gm) => gm.groupId)
      .filter(uniqueArrayValues);

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
              ownerId: instance.recordId,
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

function uniqueArrayValues(value: any, index: number, self: any[]) {
  return self.indexOf(value) === index;
}
