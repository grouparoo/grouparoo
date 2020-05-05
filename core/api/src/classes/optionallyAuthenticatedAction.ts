import { Action } from "actionhero";

export abstract class OptionallyAuthenticatedAction extends Action {
  permission: {
    topic: string;
    mode: "read" | "write";
  };

  constructor() {
    super();

    this.middleware = ["optionally-authenticated-action"];
  }
}
