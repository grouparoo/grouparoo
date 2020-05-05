import { Action } from "actionhero";

export abstract class AuthenticatedAction extends Action {
  permission: {
    topic: string;
    mode: "read" | "write";
  };

  constructor() {
    super();

    this.middleware = ["authenticated-action"];
  }
}
