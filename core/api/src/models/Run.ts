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

export interface RunFilter {
  [key: string]: any;
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

  @Column
  highWaterMark: string;

  @Column(DataType.STRING)
  get filter(): RunFilter {
    // @ts-ignore
    return JSON.parse(this.getDataValue("filter"));
  }
  set filter(value: RunFilter) {
    // @ts-ignore
    this.setDataValue("filter", JSON.stringify(value));
  }

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

  async getNextFilter() {
    let nextFilter: RunFilter = {};

    const schedule = await this.$get("schedule");
    if (!schedule) {
      // the run might not have been started by a schedule
      return nextFilter;
    }

    const source = await Source.findByGuid(schedule.sourceGuid);
    const app = await App.findByGuid(source.appGuid);
    const connection = await app.getConnection();
    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection || !pluginConnection?.methods.nextFilter) {
      return nextFilter;
    }

    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    const scheduleOptions = await schedule.getOptions();

    return pluginConnection.methods.nextFilter({
      connection,
      app,
      appOptions,
      source,
      sourceOptions,
      sourceMapping,
      schedule,
      scheduleOptions,
      run: this,
    });
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
      creatorType: this.creatorType,
      state: this.state,
      importsCreated: this.importsCreated,
      profilesCreated: this.profilesCreated,
      profilesImported: this.profilesImported,
      exportsCreated: this.exportsCreated,
      profilesExported: this.profilesExported,
      error: this.error,
      highWaterMark: this.highWaterMark,
      filter: this.filter,
      completedAt: this.completedAt ? this.completedAt.getTime() : null,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
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
