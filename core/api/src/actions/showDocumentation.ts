import { Action, api } from "actionhero";

export class ShowDocumentation extends Action {
  constructor() {
    super();
    this.name = "showDocumentation";
    this.description = "return API documentation";
    this.outputExample = {};
  }

  async run({ response }) {
    const { documentation } = api;
    response.documentation = documentation.documentation;
  }
}
