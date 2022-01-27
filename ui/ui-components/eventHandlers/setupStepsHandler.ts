import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class SetupStepsHandler extends EventDispatcher<
  Models.SetupStepType[]
> {}
