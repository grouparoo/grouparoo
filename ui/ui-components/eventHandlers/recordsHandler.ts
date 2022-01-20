import { Models } from "../utils/apiData";
import { EventDispatcher } from "../utils/eventDispatcher";

export class RecordsHandler extends EventDispatcher<
  Models.GrouparooRecordType[]
> {}
