import { Op } from "sequelize";
import { SetupStep } from "../models/SetupStep";
import { getSetupStepDescriptions } from "../modules/ops/setupSteps";
import { CLSInitializer } from "../classes/initializers/clsInitializer";

export class OnboardingSteps extends CLSInitializer {
  constructor() {
    super();
    this.name = "setupSteps";
  }

  async initializeWithinTransaction() {}

  async startWithinTransaction() {
    // insert or update the setup steps we want
    const setupSteps = getSetupStepDescriptions();
    for (const ssd of setupSteps) {
      const onboardingStep = await SetupStep.findOne({
        where: { key: ssd.key },
      });

      if (onboardingStep) {
        if (onboardingStep.position !== ssd.position) {
          await onboardingStep.update({ position: ssd.position });
        }
      } else {
        await SetupStep.create({
          position: ssd.position,
          key: ssd.key,
        });
      }
    }

    // remove any old onboarding steps we no longer want
    await SetupStep.destroy({
      where: {
        key: {
          [Op.notIn]: setupSteps.map((ssd) => ssd.key),
        },
      },
    });
  }

  async stopWithinTransaction() {}
}
