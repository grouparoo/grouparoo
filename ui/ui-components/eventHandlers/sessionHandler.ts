import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class SessionHandler extends EventDispatcher<Models.TeamMemberType> {}
