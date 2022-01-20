import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class TeamHandler extends EventDispatcher<Models.TeamType> {}
