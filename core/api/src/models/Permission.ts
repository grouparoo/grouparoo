import {
  Table,
  Column,
  AllowNull,
  Default,
  BelongsTo,
  BeforeSave,
  ForeignKey,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Team } from "./Team";
import { ApiKey } from "./ApiKey";

export const topics = [
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
  "profilePropertyRule",
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

  @AllowNull(false)
  @Default(false)
  @Column
  locked: boolean;

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
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeSave
  static async checkLocked(instance: Permission) {
    if (
      instance.locked &&
      instance["_previousDataValues"].locked &&
      (instance.changed("read") || instance.changed("write"))
    ) {
      throw new Error("permission is locked");
    }
  }

  static async authorizeAction(
    ownerGuid: string,
    topic: string,
    mode: "read" | "write"
  ) {
    Permission.validateTopic(topic);

    if (topic === "*") {
      return true;
    }

    const permission = await Permission.findOne({
      where: { ownerGuid: ownerGuid, topic: topic },
    });

    if (!permission) {
      throw new Error(`cannot find permission set for ${ownerGuid} - ${topic}`);
    }

    return permission[mode];
  }

  static topics() {
    return topics;
  }

  static validateTopic(topic) {
    if (topic === "*") return;

    if (!Permission.topics().includes(topic)) {
      throw new Error(`cannot determine permission topic for ${topic}`);
    }
  }
}
