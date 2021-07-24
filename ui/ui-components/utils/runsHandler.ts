import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class RunsHandler extends EventDispatcher<Models.RunType[]> {}
