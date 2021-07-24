import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class ScheduleHandler extends EventDispatcher<Models.ScheduleType> {}
