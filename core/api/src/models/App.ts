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
import { api } from "actionhero";
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { Source } from "./Source";
import { Option } from "./Option";
import { OptionHelper } from "./../modules/optionHelper";
import { StateMachine } from "./../modules/stateMachine";
import { Destination } from "./Destination";
import { AppOps } from "../modules/ops/app";

export interface AppOption {
  key: string;
  required: boolean;
  description?: string;
  placeholder?: string;
}

export interface SimpleAppOptions extends OptionHelper.SimpleOptions {}

const STATES = ["draft", "ready"] as const;
const STATE_TRANSITIONS = [
  { from: "draft", to: "ready", checks: ["validateOptions"] },
];

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Table({ tableName: "apps", paranoid: false })
export class App extends LoggedModel<App> {
  guidPrefix() {
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

  @AllowNull(false)
  @Default("draft")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @HasMany(() => Source)
  sources: Array<Source>;

  async appOptions() {
    const { pluginApp } = await this.getPlugin();

    if (!pluginApp?.methods?.appOptions) {
      return {};
    }

    return pluginApp.methods.appOptions();
  }

  async getOptions(sourceFromEnvironment = true) {
    return OptionHelper.getOptions(this, sourceFromEnvironment);
  }

  async setOptions(options: SimpleAppOptions) {
    return OptionHelper.setOptions(this, options);
  }

  async validateOptions(options?: SimpleAppOptions) {
    if (!options) {
      options = await this.getOptions();
    }

    return OptionHelper.validateOptions(this, options);
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async setConnection(connection) {
    api.plugins.persistentConnections[this.guid] = connection;
  }

  async getConnection() {
    const connection = api.plugins.persistentConnections[this.guid];
    if (!connection) return this.connect();
    return connection;
  }

  async connect(options?: SimpleAppOptions) {
    return AppOps.connect(this, options);
  }

  async disconnect() {
    return AppOps.disconnect(this);
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
    return `app:${this.guid}:ratelimit:parallel`;
  }

  async apiData() {
    const options = await this.getOptions(false);
    const icon = await this._getIcon();
    const provides = this.provides();

    return {
      guid: this.guid,
      name: this.name,
      icon,
      type: this.type,
      state: this.state,
      options,
      provides,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
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

  async _getIcon() {
    const { plugin } = await this.getPlugin();
    return plugin?.icon;
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeCreate
  static async checkAddibleCreate(instance: App) {
    const { pluginApp } = await instance.getPlugin();
    if (pluginApp && pluginApp.addible === false) {
      throw new Error(
        `cannot create a new ${instance.type} app, it is not addible`
      );
    }
  }

  @BeforeSave
  static async ensureUniqueName(instance: App) {
    const count = await App.count({
      where: {
        guid: { [Op.ne]: instance.guid },
        name: instance.name,
        state: { [Op.ne]: "draft" },
      },
    });
    if (count > 0) throw new Error(`name "${instance.name}" is already in use`);
  }

  @BeforeSave
  static async validateType(instance: App) {
    const { pluginApp } = await instance.getPlugin();
    if (!pluginApp) {
      throw new Error(`cannot find a pluginApp for type ${instance.type}`);
    }
  }

  @BeforeSave
  static async updateState(instance: App) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeDestroy
  static async checkDependents(instance: App) {
    const sources = await Source.scope(null).findAll({
      where: { appGuid: instance.guid },
    });
    if (sources.length > 0) {
      throw new Error(
        `cannot delete this app, source ${sources[0].guid} relies on it`
      );
    }

    const destinations = await Destination.scope(null).findAll({
      where: { appGuid: instance.guid },
    });
    if (destinations.length > 0) {
      throw new Error(
        `cannot delete this app, destination ${destinations[0].guid} relies on it`
      );
    }
  }

  @BeforeDestroy
  static async checkAddibleDestroy(instance: App) {
    const { pluginApp } = await instance.getPlugin();
    if (pluginApp && pluginApp.addible === false) {
      throw new Error(`this app cannot be deleted`);
    }
  }

  @AfterDestroy
  static async destroyOptions(instance: App) {
    return Option.destroy({
      where: {
        ownerGuid: instance.guid,
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
