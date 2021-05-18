import {
  Table,
  Column,
  Default,
  Length,
  AllowNull,
  BeforeSave,
  DataType,
  BeforeDestroy,
  BeforeCreate,
  AfterDestroy,
  HasMany,
  DefaultScope,
} from "sequelize-typescript";
import { api, redis } from "actionhero";
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { Source } from "./Source";
import { Option } from "./Option";
import { OptionHelper } from "./../modules/optionHelper";
import { StateMachine } from "./../modules/stateMachine";
import { Destination } from "./Destination";
import { AppOps } from "../modules/ops/app";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";

export interface AppOption {
  key: string;
  displayName?: string;
  required: boolean;
  description?: string;
  placeholder?: string;
  defaultValue?: string | number | boolean;
}

export interface SimpleAppOptions extends OptionHelper.SimpleOptions {}

const STATES = ["draft", "ready", "deleted"] as const;
const STATE_TRANSITIONS = [
  {
    from: "draft",
    to: "ready",
    checks: [(instance: App) => instance.validateOptions()],
  },
  { from: "draft", to: "deleted", checks: [] },
  { from: "ready", to: "deleted", checks: [] },
];

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Table({ tableName: "apps", paranoid: false })
export class App extends LoggedModel<App> {
  idPrefix() {
    return "app";
  }

  @AllowNull(true)
  @Length({ min: 0, max: 191 })
  @Default("")
  @Column
  name: string;

  @AllowNull(false)
  @Column
  type: string;

  @AllowNull(true)
  @Column
  locked: string;

  @AllowNull(false)
  @Default("draft")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @HasMany(() => Option, "ownerId")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @HasMany(() => Source)
  sources: Array<Source>;

  async appOptions() {
    const { pluginApp } = await this.getPlugin();
    if (!pluginApp?.methods?.appOptions) return {};
    return pluginApp.methods.appOptions();
  }

  async getOptions(sourceFromEnvironment = true, obfuscatePasswords = false) {
    return OptionHelper.getOptions(
      this,
      sourceFromEnvironment,
      obfuscatePasswords
    );
  }

  async setOptions(options: SimpleAppOptions) {
    return OptionHelper.setOptions(this, options);
  }

  async afterSetOptions(hasChanges: boolean) {
    if (hasChanges) {
      await redis.doCluster("api.rpc.app.disconnect", [this.id]);
    }
  }

  async validateOptions(options?: SimpleAppOptions) {
    if (!options) options = await this.getOptions(true);
    return OptionHelper.validateOptions(this, options, null);
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async setConnection(connection) {
    api.plugins.persistentConnections[this.id] = connection;
  }

  async getConnection() {
    const connection = api.plugins.persistentConnections[this.id];
    if (!connection) return this.connect(null);
    return connection;
  }

  async connect(options?: SimpleAppOptions) {
    return AppOps.connect(this, options, null);
  }

  async disconnect() {
    return AppOps.disconnect(this, undefined);
  }

  async test(options?: SimpleAppOptions) {
    return AppOps.test(this, options);
  }

  async getParallelism(): Promise<number> {
    const { pluginApp } = await this.getPlugin();
    const method = pluginApp.methods.parallelism;

    if (!method) return Infinity;

    const appOptions = await this.getOptions();
    return method({ app: this, appOptions });
  }

  async checkAndUpdateParallelism(direction: "incr" | "decr") {
    const key = this.parallelismKey();
    const redis = api.redis.clients.client;
    const limit = await this.getParallelism();
    const count = await redis[direction](key);
    if (count < 0) {
      // invalid. how did this happen? reset it
      await redis.set(key, 0);
    }
    if (count <= limit || direction === "decr") {
      return true;
    } else {
      // move it back down because incremented
      await redis.decr(key);
      return false;
    }
  }

  parallelismKey() {
    return `app:${this.id}:ratelimit:parallel`;
  }

  async apiData() {
    const options = await this.getOptions(false, true);
    const icon = await this._getIcon();
    const provides = this.provides();

    return {
      id: this.id,
      name: this.name,
      icon,
      type: this.type,
      state: this.state,
      locked: this.locked,
      options,
      provides,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  /**
   * Determine if this App can provide Source or Destination Connections
   */
  provides() {
    const source = api.plugins.plugins.find((p) =>
      p?.connections?.find(
        (c) => c.app === this.type && c.direction === "import"
      )
    )
      ? true
      : false;

    const destination = api.plugins.plugins.find((p) =>
      p?.connections?.find(
        (c) => c.app === this.type && c.direction === "export"
      )
    )
      ? true
      : false;

    return { source, destination };
  }

  async getConfigObject() {
    const { id, type, name } = this;
    const options = await this.getOptions();
    return {
      class: "App",
      id,
      name,
      type,
      options,
    };
  }

  async _getIcon() {
    const { plugin } = await this.getPlugin();
    return plugin?.icon;
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  // Disconnect all Apps from their persistent connections
  static async disconnect(id?: string) {
    const apps = id
      ? await App.scope(null).findAll({ where: { id } })
      : await App.scope(null).findAll();

    for (const app of apps) await app.disconnect();
  }

  @BeforeCreate
  static async checkMaxInstances(instance: App) {
    const count = await App.scope(null).count({
      where: { type: instance.type },
    });
    const { pluginApp } = await instance.getPlugin();
    if (
      pluginApp &&
      pluginApp.maxInstances &&
      pluginApp.maxInstances < count + 1
    ) {
      throw new Error(
        `cannot create a new ${instance.type} app, only ${pluginApp.maxInstances} allowed`
      );
    }
  }

  @BeforeSave
  static async ensureUniqueName(instance: App) {
    const count = await App.count({
      where: {
        id: { [Op.ne]: instance.id },
        name: instance.name,
        state: { [Op.ne]: "draft" },
      },
    });
    if (count > 0) throw new Error(`name "${instance.name}" is already in use`);
  }

  @BeforeSave
  static async validateType(instance: App) {
    await instance.getPlugin(); // will throw if not found
  }

  @BeforeSave
  static async updateState(instance: App) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance, ["state"]);
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @BeforeDestroy
  static async ensureNotInUse(instance: App) {
    const sources = await Source.scope(null).findAll({
      where: { appId: instance.id },
    });
    if (sources.length > 0) {
      throw new Error(
        `cannot delete this app, source ${sources[0].id} relies on it`
      );
    }

    const destinations = await Destination.scope(null).findAll({
      where: { appId: instance.id },
    });
    if (destinations.length > 0) {
      throw new Error(
        `cannot delete this app, destination ${destinations[0].id} relies on it`
      );
    }
  }

  @BeforeDestroy
  static async checkMinInstances(instance: App) {
    const count = await App.scope(null).count({
      where: { type: instance.type },
    });
    const { pluginApp } = await instance.getPlugin();
    if (
      pluginApp &&
      pluginApp.minInstances &&
      pluginApp.minInstances > count - 1
    ) {
      throw new Error(
        `cannot delete this ${instance.type} app, at least ${pluginApp.minInstances} required`
      );
    }
  }

  @AfterDestroy
  static async destroyOptions(instance: App) {
    return Option.destroy({
      where: {
        ownerId: instance.id,
      },
    });
  }

  @AfterDestroy
  static async removeParallelismKey(instance: App) {
    const key = instance.parallelismKey();
    const redis = api.redis.clients.client;
    return redis.del(key);
  }
}
