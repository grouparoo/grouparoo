import { EventDispatcher } from "../utils/eventDispatcher";

export class SuccessHandler extends EventDispatcher<{ message: string }> {
  message: { message: string };

  constructor() {
    super();

    this.message = null;

    this.subscribe("_internal", (m) => {
      this.message = m;
    });
  }
}
