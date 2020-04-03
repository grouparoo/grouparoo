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
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Schedule } from "./Schedule";
import { Import } from "./Import";
import { StateMachine } from "./../modules/stateMachine";

export interface RunFilter {
  [key: string]: any;
}

// we have no checks, as those are managed by the lifecycle methods below (and tasks)
const STATE_TRANSITIONS = [{ from: "running", to: "complete", checks: [] }];

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
  @Column(DataType.ENUM("running", "complete"))
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

  @BeforeSave
  static async updateState(instance: Run) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @AfterCreate
  static async testRun(instance: Run) {
    return instance.test();
  }

  async determineState() {
    if (this.state === "complete") {
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

    if (completeImportsCount === totalImportsCount) {
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

      this.state = "complete";
      this.completedAt = new Date();

      if (importErrorCounts.length > 0) {
        this.error = this.error
          ? this.error + "\r\n" + errorMessage
          : errorMessage;
      }

      return this.save();
    }
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

    const source = await schedule.$get("source");
    const app = await source.$get("app");
    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection || !pluginConnection?.methods.nextFilter) {
      return nextFilter;
    }

    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    const scheduleOptions = await schedule.getOptions();

    return pluginConnection.methods.nextFilter(
      app,
      appOptions,
      source,
      sourceOptions,
      sourceMapping,
      schedule,
      scheduleOptions,
      this
    );
  }

  /**
   * This method tries to import a random profile to check if the ProfilePropertyRules are valid
   */
  async test() {
    const profile = await Profile.findOne({ order: api.sequelize.random() });

    if (profile) {
      try {
        await profile.import();
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
  async quantizedTimeline(steps = 20) {
    const data = [];
    const start = this.createdAt.getTime();
    const end = this.completedAt
      ? this.completedAt.getTime()
      : new Date().getTime();
    const stepSize = Math.floor((end - start) / steps);
    const boundaries = [start - stepSize * 2];
    let i = 1;
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

      data.push(timeData);
      i++;
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
      profilesExported: this.profilesExported,
      error: this.error,
      highWaterMark: this.highWaterMark,
      filter: this.filter,
      createdAt: this.createdAt,
      completedAt: this.completedAt,
      updatedAt: this.updatedAt,
    };
  }
}
