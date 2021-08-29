import Sequelize, { Op } from "sequelize";
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
import { APIData } from "../modules/apiData";

export interface HighWaterMark {
  [key: string]: string | number | Date;
}

const RUN_CREATORS = [
  "schedule",
  "property",
  "group",
  "task",
  "teamMember",
] as const;

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
export class Run extends Model {
  idPrefix() {
    return "run";
  }

  @Column({ primaryKey: true })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Schedule)
  @Column
  creatorId: string;

  @Column(DataType.ENUM(...RUN_CREATORS))
  creatorType: typeof RUN_CREATORS[number];

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

  @AllowNull(true)
  @Column
  destinationId: string;

  @BelongsTo(() => Schedule)
  schedule: Schedule;

  @HasMany(() => Import, "creatorId")
  imports: Import[];

  async determinePercentComplete(logPercentMessage = true, write = true) {
    const percentComplete = await RunOps.determinePercentComplete(this);
    if (write) await this.update({ percentComplete });
    if (logPercentMessage) {
      log(`run ${this.id} is ${this.percentComplete}% complete`);
    }

    return percentComplete;
  }

  async afterBatch(newSate?: string) {
    await this.reload();

    if (
      newSate &&
      this.state !== newSate &&
      !["complete", "stopped"].includes(this.state)
    ) {
      await this.determinePercentComplete();
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
      attributes: ["errorMessage", [Sequelize.fn("COUNT", "id"), "errorCount"]],
      where: {
        creatorId: this.id,
        creatorType: "run",
        errorMessage: { [Op.not]: null },
      },
      group: ["errorMessage"],
    });

    const errorMessage = importErrorCounts
      .map((emc) => `${emc.errorMessage} (x${emc.get("errorCount")})`)
      .sort()
      .join("\r\n");

    if (importErrorCounts.length > 0) this.error = errorMessage;
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
      creatorId: this.creatorId,
      importsCreated: { [Op.gt]: 0 },
      id: { [Op.not]: this.id },
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
    const profile = await Profile.findOne({
      order: [["id", "asc"]],
    });

    if (profile) {
      try {
        await profile.import(false, null);
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
    const creatorName = await this.getCreatorName();

    return {
      id: this.id,
      creatorId: this.creatorId,
      creatorName,
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
      destinationId: this.destinationId,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
      completedAt: APIData.formatDate(this.completedAt),
    };
  }

  async getCreatorName() {
    let name = "unknown";

    try {
      if (this.creatorType === "group") {
        const group = await Group.findById(this.creatorId);
        name = group.name;
      } else if (this.creatorType === "property") {
        const property = await Property.findById(this.creatorId);
        name = property.key;
      } else if (this.creatorType === "schedule") {
        const schedule = await Schedule.findById(this.creatorId);
        const source = await schedule.$get("source", { scope: null });
        name = source.name;
      } else if (this.creatorType === "teamMember") {
        const teamMember = await TeamMember.findById(this.creatorId);
        name = `${teamMember.firstName} ${teamMember.lastName}`;
      } else if (this.creatorType === "task") {
        name = this.creatorId;
      }
    } catch (error) {
      // likely the creator has been deleted
    }

    return name;
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  static generateId(instance) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeCreate
  static async ensureCreatorReady(instance: Run) {
    let ready = true;
    // properties are ok to enqueue if they are in draft at the time.  Options update before state
    if (instance.creatorType === "group") {
      let creator = await Group.findById(instance.creatorId);
      if (creator.state === "draft") {
        ready = false;
      }
    }
    if (instance.creatorType === "schedule") {
      let creator = await Schedule.findById(instance.creatorId);
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

    const count = await Run.destroy({
      where: {
        state: { [Op.in]: ["stopped", "complete"] },
        createdAt: {
          [Op.lt]: Moment().subtract(days, "days").toDate(),
        },
      },
      force: true,
      limit,
    });

    return { count, days };
  }
}
