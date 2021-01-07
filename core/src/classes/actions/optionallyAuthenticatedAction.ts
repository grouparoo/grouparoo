import { CLSAction } from "./clsAction";

export abstract class OptionallyAuthenticatedAction extends CLSAction {
  permission: {
    topic: string;
    mode: "read" | "write";
  };

  constructor() {
    super();

    this.middleware = ["optionally-authenticated-action"];
  }
}
