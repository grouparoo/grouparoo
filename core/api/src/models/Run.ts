import { Op } from "sequelize";
import { api } from "actionhero";
import { Profile } from "./Profile";
import { Source } from "./Source";
import { App } from "./App";

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
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Schedule } from "./Schedule";
import { Import } from "./Import";
import { Group } from "./Group";
import { StateMachine } from "./../modules/stateMachine";
import { Export } from "./Export";
import { Destination } from "./Destination";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { TeamMember } from "./TeamMember";

export interface HighWaterMark {
  [key: string]: string | number | Date;
}

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

  @BeforeCreate
  static generateGuid(instance) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }

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
  @Column(DataType.ENUM("draft", "running", "complete", "stopped"))
  state: string;

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

  @Column
  groupMethod: string;

  @BelongsTo(() => Schedule)
  schedule: Schedule;

  @HasMany(() => Import, "creatorGuid")
  imports: Import[];

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

    if (!ready) {
      throw new Error(`creator ${instance.creatorType} is not ready`);
    }
  }

  @BeforeSave
  static async updateState(instance: Run) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @AfterCreate
  static async testRun(instance: Run) {
    return instance.test();
  }

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

    if (
      completeImportsCount === totalImportsCount &&
      this.exportsCreated === this.profilesExported
    ) {
      this.state = "complete";
      this.completedAt = new Date();
      await this.buildErrorMessage();
    }
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
    const profile = await Profile.findOne({ order: api.sequelize.random() });

    if (profile) {
      try {
        await profile.import(false);
      } catch (error) {
        this.error = error.toString();
        this.state = "complete";
        await this.save();
        throw error;
      }
    }
  }

  /**
   * Return counts of the states of each import in N chunks over the lifetime of the run
   * Great for drawing charts!
   */
  async quantizedTimeline(steps = 25) {
    const data = [];
    const destinations = await Destination.findAll();
    const start = this.createdAt.getTime();
    const end = this.completedAt
      ? this.completedAt.getTime()
      : new Date().getTime();
    const stepSize = Math.floor((end - start) / steps);
    const boundaries = [start - stepSize * 2];
    let i = 1;
    let foundDestinationNames = [];
    while (i <= steps + 4) {
      const lastBoundary = boundaries[i - 1];
      const nextBoundary = lastBoundary + stepSize;
      boundaries.push(nextBoundary);

      const timeData = {
        lastBoundary,
        nextBoundary,
        steps: {
          associate: await this.$count("imports", {
            where: {
              profileAssociatedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
          update: await this.$count("imports", {
            where: {
              profileUpdatedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
          groups: await this.$count("imports", {
            where: {
              groupsUpdatedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
          export: await this.$count("imports", {
            where: {
              exportedAt: {
                [Op.gte]: lastBoundary,
                [Op.lt]: nextBoundary,
              },
            },
          }),
        },
      };

      const _exportGroups = await Export.findAll({
        attributes: [
          [api.sequelize.fn("COUNT", "*"), "count"],
          "destinationGuid",
        ],
        group: ["destinationGuid"],
        where: {
          startedAt: {
            [Op.gte]: lastBoundary,
            [Op.lt]: nextBoundary,
          },
          runGuids: { [Op.like]: `%${this.guid}%` }, // TODO: this is slow, de-normalize
        },
      });

      _exportGroups.forEach((_exportGroup) => {
        const destination = destinations.filter(
          (destination) => destination.guid === _exportGroup.destinationGuid
        )[0];
        if (destination) {
          if (!foundDestinationNames.includes(destination.name))
            foundDestinationNames.push(destination.name);
          // @ts-ignore
          timeData.steps[destination.name] = _exportGroup.getDataValue("count");
        }
      });

      data.push(timeData);
      i++;
    }

    // add back points for destinations that were not found at this interval
    for (const i in data) {
      foundDestinationNames.forEach((destinationName) => {
        if (!data[i].steps[destinationName]) data[i].steps[destinationName] = 0;
      });
    }

    return data;
  }

  async apiData() {
    return {
      guid: this.guid,
      creatorGuid: this.creatorGuid,
      creatorName: await this.getCreatorName(),
      creatorType: this.creatorType,
      state: this.state,
      percentComplete: await this.percentComplete(),
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
      groupMethod: this.groupMethod,
      completedAt: this.completedAt ? this.completedAt.getTime() : null,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  async percentComplete() {
    if (this.state === "complete") return 100;
    if (this.state === "stopped") return 100;
    if (this.creatorType === "group") {
      let basePercent = 0;
      const group = await Group.findByGuid(this.creatorGuid);
      const groupMembersCount =
        group.type === "calculated"
          ? await group.countPotentialMembers()
          : await group.$count("groupMembers");
      switch (this.groupMethod) {
        case "runAddGroupMembers":
          basePercent = 0;
          break;
        case "runRemoveGroupMembers":
          basePercent = 45;
          break;
        case "removePreviousRunGroupMembers":
          basePercent = 90;
          break;
      }
      return (
        basePercent +
        Math.round(
          (100 * this.groupMemberOffset) /
            (groupMembersCount > 0 ? groupMembersCount : 1) /
            3
        )
      );
    }
    if (this.creatorType === "schedule") {
      // there's no way to know because we are reading external data
      return 0;
    } else {
      // for profilePropertyRules and for other types of internal run, we can assume we have to check every profile in the system
      const totalProfiles = await Profile.count();
      return Math.round((100 * this.profilesImported) / totalProfiles);
    }
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
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }
}
