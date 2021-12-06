import {
  Table,
  Column,
  AllowNull,
  Default,
  BelongsTo,
  BeforeSave,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { Team } from "./Team";
import { ApiKey } from "./ApiKey";
import { LockableHelper } from "../modules/lockableHelper";

export const PermissionTopics = [
  "apiKey",
  "app",
  "destination",
  "export",
  "export",
  "file",
  "group",
  "import",
  "log",
  "model",
  "notification",
  "record",
  "property",
  "resque",
  "run",
  "setupStep",
  "source",
  "system",
  "team",
] as const;

export type ActionPermissionTopic = typeof PermissionTopics[number] | "*";
export type ActionPermissionMode = "read" | "write";

@Table({ tableName: "permissions", paranoid: false })
export class Permission extends LoggedModel<Permission> {
  idPrefix() {
    return "prm";
  }

  @AllowNull(false)
  @ForeignKey(() => Team)
  @ForeignKey(() => ApiKey)
  @Column
  ownerId: string;

  @AllowNull(false)
  @Column
  ownerType: string;

  @AllowNull(false)
  @Column(DataType.ENUM(...PermissionTopics))
  topic: typeof PermissionTopics[number];

  @AllowNull(false)
  @Default(false)
  @Column
  read: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  write: boolean;

  @Column
  locked: string;

  @BelongsTo(() => Team)
  team: Team;

  @BelongsTo(() => ApiKey)
  apiKey: ApiKey;

  async apiData() {
    return {
      id: this.id,
      topic: this.topic,
      read: this.read,
      write: this.write,
      locked: this.locked,
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance);
  }

  @BeforeSave
  static async ensureOneOwnerIdPerTopic(instance: Permission) {
    const existing = await Permission.scope(null).findOne({
      where: {
        id: { [Op.ne]: instance.id },
        ownerId: instance.ownerId,
        topic: instance.topic,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a Permission for ${instance.ownerId} and ${instance.topic}`
      );
    }
  }

  static async authorizeAction(
    topic: ActionPermissionTopic,
    mode: ActionPermissionMode,
    instance: Team | ApiKey
  ) {
    Permission.validateTopic(topic);

    if (topic === "*") return true;

    let permission: Permission;
    if (instance.permissions) {
      permission = instance.permissions.find(
        (p) => p.ownerId === instance.id && p.topic === topic
      );
    } else {
      permission = await Permission.findOne({
        where: { ownerId: instance.id, topic: topic },
      });
    }

    if (!permission) {
      throw new Error(
        `cannot find permission set for ${instance.id} - ${topic}`
      );
    }

    return permission[mode];
  }

  static validateTopic(topic) {
    if (topic === "*") return;

    if (!PermissionTopics.includes(topic)) {
      throw new Error(`cannot determine permission topic for ${topic}`);
    }
  }
}
