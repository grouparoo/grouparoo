import { log } from "actionhero";
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
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { Source } from "./Source";
import { Option } from "./Option";
import { OptionHelper } from "./../modules/optionHelper";
import { StateMachine } from "./../modules/stateMachine";
import { Destination } from "./Destination";

export interface AppOption {
  key: string;
  required: boolean;
  description?: string;
  placeholder?: string;
}

export interface SimpleAppOptions extends OptionHelper.SimpleOptions {}

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
  @Column(DataType.ENUM("draft", "ready"))
  state: string;

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @HasMany(() => Source)
  sources: Array<Source>;

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
    if (count > 0) {
      throw new Error(`name "${instance.name}" is already in use`);
    }
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
      throw new Error(`cannot delete a ${instance.type} app`);
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

  async test(options?: SimpleAppOptions) {
    let result = false;
    let error;

    const { pluginApp } = await this.getPlugin();
    if (!pluginApp) {
      throw new Error(`cannot find a pluginApp type of ${this.type}`);
    }

    if (!options) {
      options = await this.getOptions();
    }

    try {
      result = await pluginApp.methods.test({ app: this, appOptions: options });
    } catch (err) {
      error = err;
      result = false;
      log(`[ app ] testing app threw error: ${error}`);
    }

    return { result, error };
  }

  async appOptions() {
    const { pluginApp } = await this.getPlugin();

    if (!pluginApp?.methods?.appOptions) {
      return {};
    }

    return pluginApp.methods.appOptions();
  }

  async getOptions() {
    return OptionHelper.getOptions(this);
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

  async apiData() {
    const options = await this.getOptions();
    const icon = await this._getIcon();

    return {
      guid: this.guid,
      name: this.name,
      icon,
      type: this.type,
      state: this.state,
      options,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  async _getIcon() {
    const { plugin } = await this.getPlugin();
    return plugin?.icon;
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
