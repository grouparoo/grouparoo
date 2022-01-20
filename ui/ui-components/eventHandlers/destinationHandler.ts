import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class DestinationHandler extends EventDispatcher<Models.DestinationType> {}
