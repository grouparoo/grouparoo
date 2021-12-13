import { EventDispatcher } from "./eventDispatcher";

export class ErrorHandler extends EventDispatcher<{ message: string | Error }> {
  message: string | Error;

  constructor() {
    super();

    this.message = null;

    this.subscribe("_internal", (e) => {
      this.message = e.message;
    });
  }
}
