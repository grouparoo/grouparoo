import { Initializer, api, utils } from "actionhero";
import { App } from "../models/App";

export class GrouparooRPC extends Initializer {
  constructor() {
    super();
    this.name = "grouparooRPC";
  }

  async sleep(delay = 100) {
    await utils.sleep(delay);
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
     * All handlers need start with a sleep() to decouple from mock redis' callback/transaction chain (there's no delay)
     */
    api.rpc.app.disconnect = async () => {
      await this.sleep();
      await App.disconnect();
    };
  }
}
