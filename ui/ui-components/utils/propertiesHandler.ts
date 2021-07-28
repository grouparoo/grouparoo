import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class PropertiesHandler extends EventDispatcher<Models.PropertyType[]> {}
