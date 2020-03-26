import { Action } from "actionhero";
import { plugin } from "../modules/plugin";
import { Setting } from "../models/Setting";

export class SettingsList extends Action {
  constructor() {
    super();
    this.name = "settings:list";
    this.description = "list all the settings";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-read"];
    this.inputs = {
      order: {
        required: true,
        default: [
          ["pluginName", "desc"],
          ["key", "desc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async run({ params, response }) {
    const setting = await Setting.findAll({ order: params.order });
    response.settings = await Promise.all(
      setting.map(async (s) => await s.apiData())
    );
  }
}

export class SettingEdit extends Action {
  constructor() {
    super();
    this.name = "setting:edit";
    this.description = "edit a setting";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member", "role-admin"];
    this.inputs = {
      guid: { required: true },
      value: { required: true },
    };
  }

  async run({ response, params }) {
    let setting = await Setting.findOne({ where: { guid: params.guid } });

    if (!setting) {
      throw new Error("setting not found");
    }

    setting = await plugin.updateSetting(
      setting.pluginName,
      setting.key,
      params.value
    );

    response.setting = await setting.apiData();
  }
}
