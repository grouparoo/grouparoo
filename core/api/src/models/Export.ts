import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BelongsTo,
  BeforeCreate,
  ForeignKey,
  DataType,
  Default,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Destination } from "./Destination";
import { Profile } from "./Profile";
import { plugin } from "../modules/plugin";
import Moment from "moment";
import { Op } from "sequelize";
import { ExportOps } from "../modules/ops/export";

/**
 * The Profile Properties in their normal data types (string, boolean, date, etc)
 */
export interface ExportProfileProperties {
  [key: string]: any | any[];
}

/**
 * The Profile Properties as stringified rawValues + types
 */
export interface ExportProfilePropertiesWithType {
  [key: string]: { type: string; rawValue: string | string[] };
}

@Table({ tableName: "exports", paranoid: false })
export class Export extends Model<Export> {
  guidPrefix() {
    return "exp";
  }

  @Column({ primaryKey: true })
  guid: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Destination)
  @Column
  destinationGuid: string;

  @AllowNull(false)
  @ForeignKey(() => Profile)
  @Column
  profileGuid: string;

  @AllowNull(false)
  @Default(false)
  @Column
  force: boolean;

  @Column
  startedAt: Date;

  @Column
  completedAt: Date;

  @UpdatedAt
  exportedAt: Date;

  @Column
  errorMessage: string;

  @Column(DataType.TEXT)
  get oldProfileProperties(): ExportProfileProperties {
    return ExportOps.deserializeExportProfileProperties(
      //@ts-ignore
      this.getDataValue("oldProfileProperties")
    );
  }
  set oldProfileProperties(value: ExportProfileProperties) {
    //@ts-ignore
    this.setDataValue("oldProfileProperties", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get newProfileProperties(): ExportProfileProperties {
    return ExportOps.deserializeExportProfileProperties(
      //@ts-ignore
      this.getDataValue("newProfileProperties")
    );
  }
  set newProfileProperties(value: ExportProfileProperties) {
    //@ts-ignore
    this.setDataValue("newProfileProperties", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get oldGroups(): string[] {
    try {
      //@ts-ignore
      return JSON.parse(this.getDataValue("oldGroups"));
    } catch (e) {
      return [];
    }
  }
  set oldGroups(value: string[]) {
    //@ts-ignore
    this.setDataValue("oldGroups", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get newGroups(): string[] {
    try {
      //@ts-ignore
      return JSON.parse(this.getDataValue("newGroups"));
    } catch (e) {
      return [];
    }
  }
  set newGroups(value: string[]) {
    //@ts-ignore
    this.setDataValue("newGroups", JSON.stringify(value));
  }

  @Default(false)
  @AllowNull(false)
  @Column
  toDelete: boolean;

  @Default(false)
  @AllowNull(false)
  @Column
  hasChanges: boolean;

  @Default(false)
  @AllowNull(false)
  @Column
  mostRecent: boolean;

  @BelongsTo(() => Destination)
  destination: Destination;

  @BelongsTo(() => Profile)
  profile: Profile;

  async markMostRecent() {
    const [count] = await Export.update(
      { mostRecent: false },
      {
        where: {
          profileGuid: this.profileGuid,
          destinationGuid: this.destinationGuid,
          guid: { [Op.not]: this.guid },
        },
      }
    );

    this.mostRecent = true;
    await this.save();

    return count;
  }

  async apiData() {
    const destination = await this.$get("destination", { scope: null });

    return {
      guid: this.guid,
      destination: destination ? await destination.apiData(false, false) : null,
      profileGuid: this.profileGuid,
      force: this.force,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      startedAt: this.startedAt ? this.startedAt.getTime() : null,
      completedAt: this.completedAt ? this.completedAt.getTime() : null,
      exportedAt: this.exportedAt ? this.exportedAt.getTime() : null,
      oldProfileProperties: this.oldProfileProperties,
      newProfileProperties: this.newProfileProperties,
      oldGroups: this.oldGroups,
      newGroups: this.newGroups,
      toDelete: this.toDelete,
      hasChanges: this.hasChanges,
      mostRecent: this.mostRecent,
      errorMessage: this.errorMessage,
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

  static async sweep(limit: number) {
    const days = parseInt(
      (await plugin.readSetting("core", "sweeper-delete-old-exports-days"))
        .value
    );

    const _exports = await Export.findAll({
      where: {
        mostRecent: false,
        createdAt: {
          [Op.lt]: Moment().subtract(days, "days").toDate(),
        },
      },
      order: [["createdAt", "desc"]],
      limit,
    });

    for (const i in _exports) {
      await _exports[i].destroy();
    }

    return { count: _exports.length, days };
  }
}
