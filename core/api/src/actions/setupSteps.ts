import { AuthenticatedAction } from "../classes/authenticatedAction";
import { SetupStep } from "../models/SetupStep";

export class SetupStepsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "setupSteps:list";
    this.description = "List the SetupSteps and their status";
    this.permission = { topic: "setupStep", mode: "read" };
    this.outputExample = {};
  }

  async run({ response }) {
    const setupSteps = await SetupStep.findAll({
      order: [["position", "asc"]],
    });
    response.setupSteps = await Promise.all(
      setupSteps.map((step) => step.apiData())
    );
  }
}

export class SetupStepEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "setupStep:edit";
    this.description = "List the SetupSteps and their status";
    this.permission = { topic: "setupStep", mode: "write" };
    this.outputExample = {};
    this.inputs = {
      guid: { required: true },
      skipped: { required: false },
    };
  }

  async run({ response, params }) {
    const setupStep = await SetupStep.findByGuid(params.guid);

    if (params.skipped !== null) {
      await setupStep.update({ skipped: params.skipped });
    }

    response.setupStep = await setupStep.apiData();
  }
}
