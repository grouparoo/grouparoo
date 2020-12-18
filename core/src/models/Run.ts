import { Op } from "sequelize";
import { api } from "actionhero";
import { Profile } from "./Profile";
import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  DataType,
  BeforeSave,
  BeforeCreate,
  Default,
  BelongsTo,
  HasMany,
  AfterCreate,
  ForeignKey,
  BeforeUpdate,
} from "sequelize-typescript";
import { chatRoom, log } from "actionhero";
import * as uuid from "uuid";
import { Schedule } from "./Schedule";
import { Import } from "./Import";
import { Group } from "./Group";
import { StateMachine } from "./../modules/stateMachine";
import { Property } from "./Property";
import { TeamMember } from "./TeamMember";
import { RunOps } from "../modules/ops/runs";
import { plugin } from "../modules/plugin";
import Moment from "moment";

export interface HighWaterMark {
  [key: string]: string | number | Date;
}

const STATES = ["draft", "running", "complete", "stopped"] as const;
// we have no checks, as those are managed by the lifecycle methods below (and tasks)
const STATE_TRANSITIONS = [
  { from: "draft", to: "running", checks: [] },
  { from: "draft", to: "complete", checks: [] },
  { from: "draft", to: "stopped", checks: [] },
  { from: "running", to: "complete", checks: [] },
  { from: "running", to: "stopped", checks: [] },
];

@Table({ tableName: "runs", paranoid: false })
export class Run extends Model<Run> {
  guidPrefix() {
    return "run";
  }

  @Column({ primaryKey: true })
  guid: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Schedule)
  @Column
  creatorGuid: string;

  @Column
  creatorType: string;

  @AllowNull(false)
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @Column
  completedAt: Date;

  @AllowNull(false)
  @Default(0)
  @Column
  importsCreated: number;

  @AllowNull(false)
  @Default(0)
  @Column
  profilesCreated: number;

  @AllowNull(false)
  @Default(0)
  @Column
  profilesImported: number;

  @Column
  error: string;

  @Column(DataType.STRING)
  get highWaterMark(): HighWaterMark {
    // @ts-ignore
    return JSON.parse(this.getDataValue("highWaterMark") || "{}");
  }
  set highWaterMark(value: HighWaterMark) {
    // @ts-ignore
    this.setDataValue("highWaterMark", JSON.stringify(value));
  }

  // this is likely to always be a number, but in the case of a scrollId or other token, we'll store this as a string
  @Column
  sourceOffset: string;

  @Default(0)
  @Column
  groupMemberLimit: number;

  @Default(0)
  @Column
  groupMemberOffset: number;

  @Default(0)
  @Column
  groupHighWaterMark: number;

  @Column
  groupMethod: string;

  @Default(0)
  @Column
  percentComplete: number;

  @Default(false)
  @AllowNull(false)
  @Column
  force: boolean;

  @BelongsTo(() => Schedule)
  schedule: Schedule;

  @HasMany(() => Import, "creatorGuid")
  imports: Import[];

  async determinePercentComplete(logPercentMessage = true) {
    const percentComplete = await RunOps.determinePercentComplete(this);
    await this.update({ percentComplete });
    if (logPercentMessage) {
      log(`run ${this.guid} is ${this.percentComplete}% complete`);
    }

    return percentComplete;
  }

  async afterBatch(newSate?: string) {
    await this.determinePercentComplete();
    await this.reload();

    if (
      newSate &&
      this.state !== newSate &&
      !["complete", "stopped"].includes(this.state)
    ) {
      await this.update({ state: newSate });
    }

    if (this.state === "complete" && !this.completedAt) {
      await this.update({ completedAt: new Date(), percentComplete: 100 });
      await this.buildErrorMessage();
    }

    if (this.percentComplete >= 100) {
      await this.update({ percentComplete: 100 });
    }
  }

  async updateTotals() {
    return RunOps.updateTotals(this);
  }

  async buildErrorMessage() {
    const importErrorCounts = await Import.findAll({
      attributes: [
        "errorMessage",
        [api.sequelize.fn("COUNT", "guid"), "errorCount"],
      ],
      where: {
        creatorGuid: this.guid,
        errorMessage: { [Op.not]: null },
      },
      group: ["errorMessage"],
    });

    const errorMessage = importErrorCounts
      .map((emc) => `${emc.errorMessage} (x${emc.get("errorCount")})`)
      .join("\r\n");

    if (importErrorCounts.length > 0) {
      this.error = this.error
        ? this.error + "\r\n" + errorMessage
        : errorMessage;
    }

    return this.save();
  }

  async stop() {
    await this.update({ state: "stopped", completedAt: new Date() });
    await this.buildErrorMessage();
  }

  /**
   * Used to find the previous run for this connection.  Useful in Connection#run to get the timestamp of the last time the connection was run.
   * Will ensure that the run returned did not error and read at least one profile
   */
  async previousRun() {
    const setting = await plugin.readSetting(
      "core",
      "runs-previous-can-include-errors"
    );

    const where = {
      creatorGuid: this.creatorGuid,
      importsCreated: { [Op.gt]: 0 },
      guid: { [Op.not]: this.guid },
      state: "complete",
    };

    if (setting.value === "false") {
      where["error"] = { [Op.eq]: null };
    }

    const previousRun = await Run.findOne({
      where,
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    return previousRun;
  }

  /**
   * This method tries to import a random profile to check if the Properties are valid
   */
  async test() {
    const profile = await Profile.findOne({ order: [["guid", "asc"]] });

    if (profile) {
      try {
        await profile.import(false);
      } catch (error) {
        this.error = error.toString();
        this.state = "stopped";
        await this.save();
        throw error;
      }
    }
  }

  async quantizedTimeline(steps = 25) {
    return RunOps.quantizedTimeline(this, steps);
  }

  async apiData() {
    return {
      guid: this.guid,
      creatorGuid: this.creatorGuid,
      creatorName: await this.getCreatorName(),
      creatorType: this.creatorType,
      state: this.state,
      percentComplete: this.percentComplete,
      importsCreated: this.importsCreated,
      profilesCreated: this.profilesCreated,
      profilesImported: this.profilesImported,
      error: this.error,
      highWaterMark: this.highWaterMark,
      sourceOffset: this.sourceOffset,
      groupMemberLimit: this.groupMemberLimit,
      groupMemberOffset: this.groupMemberOffset,
      groupHighWaterMark: this.groupHighWaterMark,
      groupMethod: this.groupMethod,
      force: this.force,
      completedAt: this.completedAt ? this.completedAt.getTime() : null,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  async getCreatorName() {
    let name = "unknown";

    try {
      if (this.creatorType === "group") {
        const group = await Group.findByGuid(this.creatorGuid);
        name = group.name;
      } else if (this.creatorType === "property") {
        const property = await Property.findByGuid(this.creatorGuid);
        name = property.key;
      } else if (this.creatorType === "schedule") {
        const schedule = await Schedule.findByGuid(this.creatorGuid);
        const source = await schedule.$get("source");
        name = source.name;
      } else if (this.creatorType === "teamMember") {
        const teamMember = await TeamMember.findByGuid(this.creatorGuid);
        name = `${teamMember.firstName} ${teamMember.lastName}`;
      }
    } catch (error) {
      // likely the creator has been deleted
    }

    return name;
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

  @BeforeCreate
  static async ensureCreatorReady(instance: Run) {
    let ready = true;
    // properties are ok to enqueue if they are in draft at the time.  Options update before state
    if (instance.creatorType === "group") {
      let creator = await Group.findByGuid(instance.creatorGuid);
      if (creator.state === "draft") {
        ready = false;
      }
    }
    if (instance.creatorType === "schedule") {
      let creator = await Schedule.findByGuid(instance.creatorGuid);
      if (creator.state === "draft") {
        ready = false;
      }
    }

    if (!ready) throw new Error(`creator ${instance.creatorType} is not ready`);
  }

  @BeforeSave
  static async updateState(instance: Run) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @AfterCreate
  static async testRun(instance: Run) {
    return instance.test();
  }

  @BeforeUpdate
  static async broadcast(instance: Run) {
    // we only need to broadcast at the end of each batch or on a state change, not as we increment values
    if (
      instance.changed("state") ||
      instance.changed("groupMemberLimit") ||
      instance.changed("groupMemberOffset") ||
      instance.changed("highWaterMark") ||
      instance.changed("sourceOffset") ||
      instance.changed("percentComplete")
    ) {
      await chatRoom.broadcast({}, `model:run`, {
        model: await instance.apiData(),
        verb: "update",
      });
    }
  }

  static async sweep(limit: number) {
    const days = parseInt(
      (await plugin.readSetting("core", "sweeper-delete-old-runs-days")).value
    );

    const runs = await Run.findAll({
      where: {
        state: { [Op.in]: ["stopped", "complete"] },
        createdAt: {
          [Op.lt]: Moment().subtract(days, "days").toDate(),
        },
      },
      order: [["createdAt", "desc"]],
      limit,
    });

    for (const i in runs) {
      await runs[i].destroy();
    }

    return { count: runs.length, days };
  }
}
