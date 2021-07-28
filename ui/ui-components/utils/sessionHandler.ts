import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class SessionHandler extends EventDispatcher<Models.TeamMemberType> {}
