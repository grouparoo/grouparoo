import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class SourceHandler extends EventDispatcher<Models.SourceType> {}
