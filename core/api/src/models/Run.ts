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
import { Export } from "./Export";
import { ExportRun } from "./ExportRun";
import { Group } from "./Group";
import { StateMachine } from "./../modules/stateMachine";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { TeamMember } from "./TeamMember";
import { RunOps } from "../modules/ops/runs";

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

  @AllowNull(false)
  @Default(0)
  @Column
  exportsCreated: number;

  @AllowNull(false)
  @Default(0)
  @Column
  profilesExported: number;

  @Column
  error: string;

  @Column(DataType.STRING)
  get highWaterMark(): HighWaterMark {
    // @ts-ignore
    return JSON.parse(this.getDataValue("highWaterMark"));
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

  @HasMany(() => ExportRun, "runGuid")
  exportRuns: ExportRun[];

  async determineState() {
    await this.reload();

    if (this.state === "complete" || this.state === "stopped") {
      return;
    }

    const totalImportsCount = await this.$count("imports");

    const completeImportsCount = await this.$count("imports", {
      where: {
        [Op.or]: {
          exportedAt: { [Op.not]: null },
          errorMessage: { [Op.not]: null },
        },
      },
    });

    const totalExportsCount = await Export.count({
      include: [
        {
          model: ExportRun,
          where: { runGuid: this.guid },
          attributes: [],
          required: true,
        },
      ],
    });

    const completeExportsCount = await Export.count({
      where: {
        [Op.or]: {
          completedAt: { [Op.not]: null },
          errorMessage: { [Op.not]: null },
        },
      },
      include: [
        {
          model: ExportRun,
          where: { runGuid: this.guid },
          attributes: [],
          required: true,
        },
      ],
    });

    if (
      completeImportsCount === totalImportsCount &&
      completeExportsCount === totalExportsCount
    ) {
      this.state = "complete";
      this.completedAt = new Date();
      await this.buildErrorMessage();
    } else {
      this.state = "running";
    }
  }

  async determinePercentComplete() {
    const percentComplete = await RunOps.determinePercentComplete(this);
    await this.update({ percentComplete });
    log(`run ${this.guid} is ${this.percentComplete}% complete`);
  }

  async afterBatch() {
    await this.determinePercentComplete();
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
    const previousRun = await Run.findOne({
      where: {
        creatorGuid: this.creatorGuid,
        error: { [Op.eq]: null },
        importsCreated: { [Op.gt]: 0 },
        guid: { [Op.not]: this.guid },
        state: "complete",
      },
      order: [["createdAt", "desc"]],
      limit: 1,
    });

    return previousRun;
  }

  /**
   * This method tries to import a random profile to check if the ProfilePropertyRules are valid
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
      exportsCreated: this.exportsCreated,
      profilesExported: this.profilesExported,
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
      } else if (this.creatorType === "profilePropertyRule") {
        const profilePropertyRule = await ProfilePropertyRule.findByGuid(
          this.creatorGuid
        );
        name = profilePropertyRule.key;
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
    // profile property rules are ok to enqueue if they are in draft at the time.  Options update before state
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
}
