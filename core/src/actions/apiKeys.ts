import { ParamsFrom } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { ApiKey } from "../models/ApiKey";
import { ActionPermission } from "../models/Permission";
import { APIData } from "../modules/apiData";

export class ApiKeysList extends AuthenticatedAction {
  name = "apiKeys:list";
  description = "list all the apiKeys";
  outputExample = {};
  permission: ActionPermission = { topic: "apiKey", mode: "read" };
  inputs = {
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<ApiKeysList> }) {
    const total = await ApiKey.count();

    const apiKeys = await ApiKey.findAll({
      limit: params.limit,
      offset: params.offset,
    });

    return {
      total,
      apiKeys: await Promise.all(apiKeys.map((apiKey) => apiKey.apiData())),
    };
  }
}

export class ApiKeyCreate extends AuthenticatedAction {
  name = "apiKey:create";
  description = "create an apiKey";
  outputExample = {};
  permission: ActionPermission = { topic: "apiKey", mode: "write" };
  inputs = {
    name: { required: true },
    permissionAllRead: { required: false },
    permissionAllWrite: { required: false },
    permissions: { required: false, formatter: APIData.ensureArray },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<ApiKeyCreate> }) {
    const apiKey = new ApiKey(params);
    await apiKey.save();
    if (params.permissions) await apiKey.setPermissions(params.permissions);

    return { apiKey: await apiKey.apiData() };
  }
}

export class ApiKeyEdit extends AuthenticatedAction {
  name = "apiKey:edit";
  description = "edit an apiKey";
  outputExample = {};
  permission: ActionPermission = { topic: "apiKey", mode: "write" };
  inputs = {
    id: { required: true as true },
    name: { required: false },
    permissionAllRead: { required: false },
    permissionAllWrite: { required: false },
    disabledPermissionAllRead: { required: false },
    disabledPermissionAllWrite: { required: false },
    permissions: { required: false, formatter: APIData.ensureArray },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ApiKeyEdit> }) {
    const apiKey = await ApiKey.findById(params.id);
    const updateParams = { ...params };
    if (params.disabledPermissionAllRead) {
      updateParams.permissionAllRead = null;
    }
    if (params.disabledPermissionAllWrite) {
      updateParams.permissionAllWrite = null;
    }

    await apiKey.update(updateParams);
    if (params.permissions) await apiKey.setPermissions(params.permissions);

    return { apiKey: await apiKey.apiData() };
  }
}

export class ApiKeyView extends AuthenticatedAction {
  name = "apiKey:view";
  description = "view an apiKey";
  outputExample = {};
  permission: ActionPermission = { topic: "apiKey", mode: "read" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<ApiKeyView> }) {
    const apiKey = await ApiKey.findById(params.id);
    return { apiKey: await apiKey.apiData() };
  }
}

export class ApiKeyDestroy extends AuthenticatedAction {
  name = "apiKey:destroy";
  description = "destroy an apiKey";
  outputExample = {};
  permission: ActionPermission = { topic: "apiKey", mode: "write" };
  inputs = {
    id: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ApiKeyDestroy>;
  }) {
    const apiKey = await ApiKey.findById(params.id);
    await apiKey.destroy();
    return { success: true };
  }
}
