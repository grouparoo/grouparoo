import { GrouparooModel, ModelTypes } from "../models/GrouparooModel";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { APIData } from "../modules/apiData";
import { ConfigWriter } from "../modules/configWriter";

export class ModelsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "models:list";
    this.description = "list the models";
    this.outputExample = {};
    this.permission = { topic: "model", mode: "read" };
    this.inputs = {
      limit: { required: true, default: 100, formatter: APIData.ensureNumber },
      offset: { required: true, default: 0, formatter: APIData.ensureNumber },
      order: {
        required: false,
        formatter: APIData.ensureObject,
        default: [["createdAt", "desc"]],
      },
    };
  }

  async runWithinTransaction({ params }) {
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
  constructor() {
    super();
    this.name = "model:options";
    this.description = "get the options for a new model";
    this.outputExample = {};
    this.permission = { topic: "model", mode: "read" };
    this.inputs = {};
  }

  async runWithinTransaction({ params }) {
    return { types: ModelTypes };
  }
}

export class ModelCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "model:create";
    this.description = "create a model";
    this.outputExample = {};
    this.permission = { topic: "model", mode: "write" };
    this.inputs = {
      id: { required: false },
      name: { required: true },
      type: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const model = await GrouparooModel.create(params);
    await ConfigWriter.run();
    return { model: await model.apiData() };
  }
}

export class ModelView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "model:view";
    this.description = "view a model";
    this.outputExample = {};
    this.permission = { topic: "model", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const model = await GrouparooModel.findById(params.id);
    return { model: await model.apiData() };
  }
}

export class ModelEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "model:edit";
    this.description = "edit a model";
    this.outputExample = {};
    this.permission = { topic: "model", mode: "write" };
    this.inputs = {
      id: { required: true },
      name: { required: false },
      type: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const model = await GrouparooModel.findById(params.id);
    await model.update(params);
    return { model: await model.apiData() };
  }
}

export class ModelDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "model:destroy";
    this.description = "destroy a model";
    this.outputExample = {};
    this.permission = { topic: "model", mode: "write" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const model = await GrouparooModel.findById(params.id);
    await model.destroy();
    return { success: true };
  }
}
