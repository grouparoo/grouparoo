import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class RecordHandler extends EventDispatcher<Models.GrouparooRecordType> {}
