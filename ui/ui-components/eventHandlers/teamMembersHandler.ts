import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class TeamMemberHandler extends EventDispatcher<
  Models.TeamMemberType[]
> {}
