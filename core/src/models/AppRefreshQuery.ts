import {
  Table,
  Column,
  AllowNull,
  ForeignKey,
  BeforeSave,
  DataType,
  BeforeDestroy,
  DefaultScope,
  BelongsTo,
  AfterSave,
  Default,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { StateMachine } from "../modules/stateMachine";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";
import { AppRefreshQueryOps } from "../modules/ops/appRefreshQuery";
import { App } from "./App";

const STATES = ["draft", "ready"] as const;

const STATE_TRANSITIONS = [
  {
    from: "draft",
    to: "ready",
    checks: [],
  },
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

  @AllowNull(false)
  @Column
  refreshQuery: string;

  @Column
  value: string;

  @AllowNull(true)
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

  @BelongsTo(() => App)
  app: App;

  async apiData() {
    return {
      id: this.id,
      appId: this.appId,
      refreshQuery: this.refreshQuery,
      value: this.value,
      locked: this.locked,
      lastChangedAt: APIData.formatDate(this.lastChangedAt),
      lastConfirmedAt: APIData.formatDate(this.lastConfirmedAt),
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find AppRefreshQuery ${id}`);
    return instance;
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
    if (instance.state === "ready") {
      await AppRefreshQueryOps.runAppQuery(instance);
    }
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance: AppRefreshQuery) {
    await LockableHelper.beforeDestroy(instance);
  }
}
