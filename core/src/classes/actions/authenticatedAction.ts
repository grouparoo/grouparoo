import { CLSAction } from "./clsAction";

export abstract class AuthenticatedAction extends CLSAction {
  permission: {
    topic: string;
    mode: "read" | "write";
  };

  constructor() {
    super();

    this.middleware = ["authenticated-action"];
  }
}
