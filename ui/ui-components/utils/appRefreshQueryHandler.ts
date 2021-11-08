import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class AppRefreshQueryHandler extends EventDispatcher<Models.AppType> {}
