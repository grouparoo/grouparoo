import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class ScheduleHandler extends EventDispatcher<Models.ScheduleType> {}
