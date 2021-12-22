import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { SetupStep } from "../models/SetupStep";
import { AsyncReturnType } from "type-fest";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { ParamsFrom } from "actionhero";

export class SetupStepsList extends AuthenticatedAction {
  name = "setupSteps:list";
  description = "List the SetupSteps and their status";
  permission: ActionPermission = { topic: "setupStep", mode: "read" };
  outputExample = {};
  inputs = { modelId: { required: false } };

  isWriteTransaction() {
    // setupStep.performCheck() can do an update
    return true;
  }

  async runWithinTransaction({ params }: { params: { modelId?: string } }) {
    const responseSetupSteps: AsyncReturnType<SetupStep["apiData"]>[] = [];

    const setupSteps = await SetupStep.findAll({
      order: [["position", "asc"]],
    });

    for (const i in setupSteps) {
      await setupSteps[i].performCheck();
      responseSetupSteps.push(await setupSteps[i].apiData(params.modelId));
    }
    return { setupSteps: responseSetupSteps };
  }
}

export class SetupStepEdit extends AuthenticatedAction {
  name = "setupStep:edit";
  description = "List the SetupSteps and their status";
  permission: ActionPermission = { topic: "setupStep", mode: "write" };
  outputExample = {};
  inputs = {
    id: { required: true },
    skipped: { required: false, formatter: APIData.ensureBoolean },
  };

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<SetupStepEdit>;
  }) {
    const setupStep = await SetupStep.findById(params.id);

    if (params.skipped !== null) {
      await setupStep.update({ skipped: params.skipped });
    }

    await setupStep.performCheck();
    return { setupStep: await setupStep.apiData() };
  }
}
