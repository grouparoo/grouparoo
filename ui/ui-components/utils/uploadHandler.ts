import { EventDispatcher } from "./eventDispatcher";

export class UploadHandler extends EventDispatcher<{
  uploadPercentage: number;
}> {}
