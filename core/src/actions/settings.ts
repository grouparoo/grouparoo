import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { plugin } from "../modules/plugin";
import { Setting } from "../models/Setting";

export class SettingsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "settings:list";
    this.description = "list all the settings";
    this.outputExample = {};
    this.permission = { topic: "system", mode: "read" };
    this.inputs = {
      order: {
        required: false,
        default: [
          ["pluginName", "desc"],
          ["title", "desc"],
          ["key", "desc"],
        ],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const setting = await Setting.findAll({ order: params.order });
    return {
      settings: await Promise.all(setting.map(async (s) => await s.apiData())),
    };
  }
}

export class SettingEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "setting:edit";
    this.description = "edit a setting";
    this.outputExample = {};
    this.permission = { topic: "system", mode: "write" };
    this.inputs = {
      id: { required: true },
      value: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    let setting = await Setting.findById(params.id);
    setting = await plugin.updateSetting(
      setting.pluginName,
      setting.key,
      params.value
    );

    return { setting: await setting.apiData() };
  }
}
