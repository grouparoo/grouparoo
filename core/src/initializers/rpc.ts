import { Initializer, api } from "actionhero";
import { App } from "../models/App";

export class GrouparooRPC extends Initializer {
  constructor() {
    super();
    this.name = "grouparooRPC";
  }

  async initialize() {
    /**
     * Here is where we list methods which will be invoked by `api.doCluster`
     */
    api.rpc = {
      app: {},
    };

    /**
     * Signal that all Apps in the cluster should disconnect form persistent connections.
     */
    api.rpc.app.disconnect = async () => {
      await App.disconnect();
    };
  }
}
