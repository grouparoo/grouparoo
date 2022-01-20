import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class RecordHandler extends EventDispatcher<Models.GrouparooRecordType> {}
