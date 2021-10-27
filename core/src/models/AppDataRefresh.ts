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
import { StateMachine } from "./../modules/stateMachine";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";
import { AppDataRefreshOps } from "../modules/ops/appDataRefresh";
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
@Table({ tableName: "appDataRefreshes", paranoid: false })
export class AppDataRefresh extends LoggedModel<AppDataRefresh> {
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
      lastChangedAt: APIData.formatDate(this.lastChangedAt),
      lastConfirmedAt: APIData.formatDate(this.lastConfirmedAt),
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find AppDataRefresh ${id}`);
    return instance;
  }

  @BeforeSave
  static async noUpdateIfLocked(instance: AppDataRefresh) {
    await LockableHelper.beforeSave(instance, ["state"]);
  }

  @BeforeSave
  static async updateState(instance: AppDataRefresh) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeSave
  static async runCheckIfNewQuery(instance: AppDataRefresh) {
    if (
      instance.changed("refreshQuery") &&
      !instance.changed("lastConfirmedAt") &&
      instance.state === "ready"
    ) {
      const isUpdated = await AppDataRefreshOps.checkDataRefreshValue(instance);
      if (isUpdated === true) {
      }
      await AppDataRefreshOps.triggerSchedules(instance);
    }
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance: AppDataRefresh) {
    await LockableHelper.beforeDestroy(instance);
  }
}
