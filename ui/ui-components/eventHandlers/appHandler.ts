import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class AppHandler extends EventDispatcher<Models.AppType> {}
