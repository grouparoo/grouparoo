import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class AppHandler extends EventDispatcher<Models.AppType> {}
