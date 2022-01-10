import { GrouparooModel, ModelTypes } from "../models/GrouparooModel";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { APIData } from "../modules/apiData";
import { ConfigWriter } from "../modules/configWriter";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";

export class ModelsList extends AuthenticatedAction {
  name = "models:list";
  description = "list the models";
  outputExample = {};
  permission: ActionPermission = { topic: "model", mode: "read" };
  inputs = {
    limit: { required: true, default: 100, formatter: APIData.ensureNumber },
    offset: { required: true, default: 0, formatter: APIData.ensureNumber },
    order: {
      required: false,
      formatter: APIData.ensureArray,
      default: [["createdAt", "desc"]],
    },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ModelsList> }) {
    const total = await GrouparooModel.scope(null).count();
    const models = await GrouparooModel.scope(null).findAll({
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });
    return { total, models: await Promise.all(models.map((m) => m.apiData())) };
  }
}

export class ModelOptions extends AuthenticatedAction {
  name = "model:options";
  description = "get the options for a new model";
  outputExample = {};
  permission: ActionPermission = { topic: "model", mode: "read" };

  async runWithinTransaction() {
    return { types: ModelTypes };
  }
}

export class ModelCreate extends AuthenticatedAction {
  name = "model:create";
  description = "create a model";
  outputExample = {};
  permission: ActionPermission = { topic: "model", mode: "write" };
  inputs = {
    id: { required: false },
    name: { required: true },
    type: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ModelCreate> }) {
    const model = await GrouparooModel.create(params);
    await ConfigWriter.run();
    return { model: await model.apiData() };
  }
}

export class ModelView extends AuthenticatedAction {
  name = "model:view";
  description = "view a model";
  outputExample = {};
  permission: ActionPermission = { topic: "model", mode: "read" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ModelView> }) {
    const model = await GrouparooModel.findById(params.id);
    return { model: await model.apiData() };
  }
}

export class ModelEdit extends AuthenticatedAction {
  name = "model:edit";
  description = "edit a model";
  outputExample = {};
  permission: ActionPermission = { topic: "model", mode: "write" };
  inputs = {
    id: { required: true },
    name: { required: false },
    type: { required: false },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ModelEdit> }) {
    const model = await GrouparooModel.findById(params.id);
    await model.update(params);
    await ConfigWriter.run();
    return { model: await model.apiData() };
  }
}

export class ModelDestroy extends AuthenticatedAction {
  name = "model:destroy";
  description = "destroy a model";
  outputExample = {};
  permission: ActionPermission = { topic: "model", mode: "write" };
  inputs = {
    id: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<ModelDestroy> }) {
    const model = await GrouparooModel.findById(params.id);
    await model.destroy();
    await ConfigWriter.run();
    return { success: true };
  }
}
