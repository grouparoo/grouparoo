import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class ProfileHandler extends EventDispatcher<Models.ProfileType> {}
