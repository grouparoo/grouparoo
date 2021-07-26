import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class SourceHandler extends EventDispatcher<Models.SourceType> {}
