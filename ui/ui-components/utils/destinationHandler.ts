import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class DestinationHandler extends EventDispatcher<Models.DestinationType> {}
