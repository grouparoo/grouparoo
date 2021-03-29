import { CLSAction } from "./clsAction";

export abstract class AuthenticatedAction extends CLSAction {
  constructor() {
    super();

    this.middleware = ["authenticated-action"];
  }
}
