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
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { App } from "./App";
import { StateMachine } from "./../modules/stateMachine";
import { LockableHelper } from "../modules/lockableHelper";
import { ConfigWriter } from "../modules/configWriter";
import { APIData } from "../modules/apiData";

const STATES = ["draft", "ready", "deleted"] as const;

const STATE_TRANSITIONS = [
  {
    from: "draft",
    to: "ready",
    checks: [],
  },
  { from: "draft", to: "deleted", checks: [] },
  { from: "ready", to: "deleted", checks: [] },
  {
    from: "deleted",
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
  @Column
  name: string;

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
      name: this.name,
      appId: this.appId,
      refreshQuery: this.refreshQuery,
      value: this.value,
      lastChangedAt: APIData.formatDate(this.lastChangedAt),
      lastConfirmedAt: APIData.formatDate(this.lastConfirmedAt),
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  getConfigId() {
    return this.idIsDefault() ? ConfigWriter.generateId(this.name) : this.id;
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
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

  @AfterSave
  static async runCheckIfNewQuery(instance: AppDataRefresh) {
    //if instance.query was changed, run the check from appDataRefreshOps
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance: AppDataRefresh) {
    await LockableHelper.beforeDestroy(instance);
  }

  //import and name the appDataRefreshOps methods here as well?
}
