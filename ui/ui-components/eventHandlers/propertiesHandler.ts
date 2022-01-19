import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class PropertiesHandler extends EventDispatcher<Models.PropertyType[]> {}
