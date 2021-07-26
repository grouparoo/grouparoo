import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class GroupHandler extends EventDispatcher<Models.GroupType> {}
