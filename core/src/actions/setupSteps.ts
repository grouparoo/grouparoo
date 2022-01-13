import { ParamsFrom } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { SetupStep } from "../models/SetupStep";
import { AsyncReturnType } from "type-fest";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";
import { GrouparooModel } from "../models/GrouparooModel";

export class SetupStepsList extends AuthenticatedAction {
  name = "setupSteps:list";
  description = "List the SetupSteps and their status";
  permission: ActionPermission = { topic: "setupStep", mode: "read" };
  outputExample = {};

  isWriteTransaction() {
    // setupStep.performCheck() can do an update
    return true;
  }

  async runWithinTransaction() {
    const responseSetupSteps: AsyncReturnType<SetupStep["apiData"]>[] = [];

    const setupSteps = await SetupStep.findAll({
      order: [["position", "asc"]],
    });

    const firstModel = await GrouparooModel.findOne({
      order: [["createdAt", "asc"]],
    });

    for (const i in setupSteps) {
      await setupSteps[i].performCheck();
      responseSetupSteps.push(await setupSteps[i].apiData(firstModel?.id));
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
