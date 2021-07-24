import { EventDispatcher } from "./eventDispatcher";

export class ErrorHandler extends EventDispatcher<{ error: string | Error }> {
  error: { error: string | Error };

  constructor() {
    super();

    this.error = null;

    this.subscribe("_internal", (e) => {
      this.error = e;
    });
  }
}
