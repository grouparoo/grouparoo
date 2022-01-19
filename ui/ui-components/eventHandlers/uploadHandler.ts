import { EventDispatcher } from "../utils/eventDispatcher";

export class UploadHandler extends EventDispatcher<{
  uploadPercentage: number;
}> {}
