import { Models } from "./apiData";
import { EventDispatcher } from "./eventDispatcher";

export class RecordsHandler extends EventDispatcher<
  Models.GrouparooRecordType[]
> {}
