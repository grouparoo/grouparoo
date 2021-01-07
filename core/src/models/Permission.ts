import {
  Table,
  Column,
  AllowNull,
  Default,
  BelongsTo,
  BeforeSave,
  ForeignKey,
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
  "event",
  "export",
  "export",
  "file",
  "group",
  "import",
  "log",
  "notification",
  "profile",
  "property",
  "resque",
  "run",
  "setupStep",
  "source",
  "system",
  "team",
] as const;

@Table({ tableName: "permissions", paranoid: false })
export class Permission extends LoggedModel<Permission> {
  guidPrefix() {
    return "prm";
  }

  @AllowNull(false)
  @ForeignKey(() => Team)
  @ForeignKey(() => ApiKey)
  @Column
  ownerGuid: string;

  @AllowNull(false)
  @Column
  ownerType: string;

  @AllowNull(false)
  @Column
  topic: string;

  @AllowNull(false)
  @Default(false)
  @Column
  read: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  write: boolean;

  @AllowNull(true)
  @Column
  locked: string;

  @BelongsTo(() => Team)
  team: Team;

  @BelongsTo(() => ApiKey)
  apiKey: ApiKey;

  async apiData() {
    return {
      guid: this.guid,
      topic: this.topic,
      read: this.read,
      write: this.write,
      locked: this.locked,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({
      where: { guid },
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance);
  }

  @BeforeSave
  static async ensureOneOwnerGuidPerTopic(instance: Permission) {
    const existing = await Permission.scope(null).findOne({
      where: {
        guid: { [Op.ne]: instance.guid },
        ownerGuid: instance.ownerGuid,
        topic: instance.topic,
      },
    });
    if (existing) {
      throw new Error(
        `There is already a Permission for ${instance.ownerGuid} and ${instance.topic}`
      );
    }
  }

  static async authorizeAction(
    ownerGuid: string,
    topic: string,
    mode: "read" | "write"
  ) {
    Permission.validateTopic(topic);

    if (topic === "*") return true;

    const permission = await Permission.findOne({
      where: { ownerGuid: ownerGuid, topic: topic },
    });

    if (!permission) {
      throw new Error(`cannot find permission set for ${ownerGuid} - ${topic}`);
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
