import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { plugin } from "../modules/plugin";
import { Setting } from "../models/Setting";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";

export class SettingsList extends AuthenticatedAction {
  name = "settings:list";
  description = "list all the settings";
  outputExample = {};
  permission: ActionPermission = { topic: "system", mode: "read" };
  inputs = {
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [
        ["pluginName", "desc"],
        ["title", "desc"],
        ["key", "desc"],
      ],
    },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<SettingsList> }) {
    const setting = await Setting.findAll({ order: params.order });
    return {
      settings: await Promise.all(setting.map((s) => s.apiData())),
    };
  }
}

// only this setting can be shown without being authenticated
export class SettingCoreClusterName extends OptionallyAuthenticatedAction {
  name = "setting:view:core:cluster-name";
  description = "get the value for the cluster name setting";
  outputExample = {};
  permission: ActionPermission = { topic: "system", mode: "read" };

  async runWithinTransaction() {
    const clusterNameSetting = await Setting.findOne({
      where: { pluginName: "core", key: "cluster-name" },
    });

    return { setting: await clusterNameSetting.apiData() };
  }
}

export class SettingEdit extends AuthenticatedAction {
  name = "setting:edit";
  description = "edit a setting";
  outputExample = {};
  permission: ActionPermission = { topic: "system", mode: "write" };
  inputs = {
    id: { required: true },
    value: { required: true },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<SettingEdit> }) {
    let setting = await Setting.findById(params.id);
    setting = await plugin.updateSetting(
      setting.pluginName,
      setting.key,
      params.value
    );

    return { setting: await setting.apiData() };
  }
}
