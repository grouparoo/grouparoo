import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class TeamMemberHandler extends EventDispatcher<
  Models.TeamMemberType[]
> {}
