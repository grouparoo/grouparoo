import { CLSAction } from "./clsAction";

export abstract class OptionallyAuthenticatedAction extends CLSAction {
  constructor() {
    super();

    this.middleware = ["optionally-authenticated-action"];
  }
}
