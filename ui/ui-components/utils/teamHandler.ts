import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class TeamHandler extends EventDispatcher<Models.TeamType> {}
