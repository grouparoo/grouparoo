import {
  Table,
  Column,
  AllowNull,
  BeforeCreate,
  BeforeBulkCreate,
  BeforeSave,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { Group } from "./Group";
import { GrouparooRecord } from "./GrouparooRecord";
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

  uniqueIdentifier = ["recordId", "groupId"];

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
}
