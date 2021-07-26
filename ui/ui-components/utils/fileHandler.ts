import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class FileHandler extends EventDispatcher<Models.FileType> {}
