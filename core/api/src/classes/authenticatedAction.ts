import { Action } from "actionhero";

export abstract class AuthenticatedAction extends Action {
  permissionTopic: string;
  permissionMode: string;

  constructor() {
    super();

    this.middleware = ["authenticated-action"];
  }
}
