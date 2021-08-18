import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { ApiKey } from "../models/ApiKey";
import { APIData } from "../modules/apiData";

export class ApiKeysList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "apiKeys:list";
    this.description = "list all the apiKeys";
    this.outputExample = {};
    this.permission = { topic: "apiKey", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    };
  }

  async runWithinTransaction({ params }) {
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
  constructor() {
    super();
    this.name = "apiKey:create";
    this.description = "create an apiKey";
    this.outputExample = {};
    this.permission = { topic: "apiKey", mode: "write" };
    this.inputs = {
      name: { required: true },
      permissionAllRead: { required: false },
      permissionAllWrite: { required: false },
      permissions: { required: false, formatter: APIData.ensureObject },
    };
  }

  async runWithinTransaction({ params }) {
    const apiKey = new ApiKey(params);
    await apiKey.save();
    if (params.permissions) await apiKey.setPermissions(params.permissions);

    return { apiKey: await apiKey.apiData() };
  }
}

export class ApiKeyEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "apiKey:edit";
    this.description = "edit an apiKey";
    this.outputExample = {};
    this.permission = { topic: "apiKey", mode: "write" };
    this.inputs = {
      id: { required: true },
      name: { required: false },
      permissionAllRead: { required: false },
      permissionAllWrite: { required: false },
      disabledPermissionAllRead: { required: false },
      disabledPermissionAllWrite: { required: false },
      permissions: { required: false, formatter: APIData.ensureObject },
    };
  }

  async runWithinTransaction({ params }) {
    const apiKey = await ApiKey.findById(params.id);
    const updateParams = Object.assign({}, params);
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
  constructor() {
    super();
    this.name = "apiKey:view";
    this.description = "view an apiKey";
    this.outputExample = {};
    this.permission = { topic: "apiKey", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const apiKey = await ApiKey.findById(params.id);
    return { apiKey: await apiKey.apiData() };
  }
}

export class ApiKeyDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "apiKey:destroy";
    this.description = "destroy an apiKey";
    this.outputExample = {};
    this.permission = { topic: "apiKey", mode: "write" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const apiKey = await ApiKey.findById(params.id);
    await apiKey.destroy();
    return { success: true };
  }
}
