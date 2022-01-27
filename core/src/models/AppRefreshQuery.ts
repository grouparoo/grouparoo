import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BeforeCreate,
  BeforeSave,
  DataType,
  BeforeDestroy,
  DefaultScope,
  BelongsTo,
  Default,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { StateMachine } from "../modules/stateMachine";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";
import { AppRefreshQueryOps } from "../modules/ops/appRefreshQuery";
import { App } from "./App";
import { CLS } from "../modules/cls";

const STATES = ["draft", "ready"] as const;

const STATE_TRANSITIONS: StateMachine.StateTransition[] = [
  { from: "draft", to: "ready", checks: [] },
];

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Table({ tableName: "appRefreshQueries", paranoid: false })
export class AppRefreshQuery extends LoggedModel<AppRefreshQuery> {
  idPrefix() {
    return "adr";
  }

  @AllowNull(false)
  @ForeignKey(() => App)
  @Column
  appId: string;

  @Column
  refreshQuery: string;

  @Column
  value: string;

  @Column
  locked: string;

  @AllowNull(false)
  @Default("draft")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @Column
  lastChangedAt: Date;

  @Column
  lastConfirmedAt: Date;

  @Column
  recurringFrequency: number;

  @BelongsTo(() => App)
  app: App;

  async apiData() {
    return {
      id: this.id,
      appId: this.appId,
      refreshQuery: this.refreshQuery,
      value: this.value,
      locked: this.locked,
      state: this.state,
      lastChangedAt: APIData.formatDate(this.lastChangedAt),
      lastConfirmedAt: APIData.formatDate(this.lastConfirmedAt),
      recurringFrequency: this.recurringFrequency,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  async test(refreshQuery?: string) {
    return await AppRefreshQueryOps.test(this, refreshQuery);
  }

  async query() {
    return await AppRefreshQueryOps.runAppQuery(this);
  }

  async shouldRun() {
    return AppRefreshQueryOps.shouldRun(this);
  }

  async triggerSchedules(stopRuns?: Boolean) {
    return await AppRefreshQueryOps.triggerSchedules(this, stopRuns);
  }

  // --- Class Methods --- //

  @BeforeCreate
  static async ensureOnePerApp(instance: AppRefreshQuery) {
    const existingCount = await AppRefreshQuery.scope(null).count({
      where: {
        appId: instance.appId,
      },
    });

    if (existingCount > 0) {
      throw new Error(`app ${instance.appId} already has an app refresh query`);
    }
  }
  @BeforeSave
  static async noUpdateIfLocked(instance: AppRefreshQuery) {
    await LockableHelper.beforeSave(instance, [
      "state",
      "value",
      "lastChangedAt",
      "lastConfirmedAt",
    ]);
  }

  @BeforeSave
  static async updateState(instance: AppRefreshQuery) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeSave
  static async appQuery(instance: AppRefreshQuery) {
    //run the query to make sure it's valid
    if (instance.state === "ready") {
      await AppRefreshQueryOps.runAppQuery(instance);
    }
    //if the query has been changed, reset it and enqueue run.
    if (instance.changed("refreshQuery")) {
      instance.lastConfirmedAt = null;
      instance.lastChangedAt = null;
      instance.value = null;
      await CLS.enqueueTask("appRefreshQuery:run", {
        appRefreshQueryId: instance.id,
      });
    }
  }

  @BeforeSave
  static async checkRecurringFrequency(instance: AppRefreshQuery) {
    // we cannot use the @Min validator as null is also allowed
    if (instance.recurringFrequency) {
      if (instance.recurringFrequency < 1000 * 60) {
        throw new Error(
          "recurring frequency is required to be one minute or greater"
        );
      }
    }
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance: AppRefreshQuery) {
    await LockableHelper.beforeDestroy(instance);
  }
}
