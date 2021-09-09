import { Initializer, api, utils, log } from "actionhero";
import { App } from "../models/App";
import { Property } from "../models/Property";

export class GrouparooRPC extends Initializer {
  constructor() {
    super();
    this.name = "grouparooRPC";
    this.loadPriority = 10;
    this.stopPriority = 901;
  }

  async initialize() {
    /**
     * Here is where we list methods which will be invoked by `api.doCluster`
     */
    api.rpc = {
      app: {},
      property: {},
    };

    /**
     * All handlers need start with a sleep() to decouple from mock redis' callback/transaction chain (there's no delay), or have no side-effects
     */

    /**
     * Signal that all Apps in the cluster should disconnect form persistent connections.
     */
    api.rpc.app.disconnect = async (appId: string) => {
      await utils.sleep(100);
      try {
        await App.disconnect(appId);
      } catch (error) {
        log("Error disconnecting apps: " + error.message ?? error);
      }
    };

    /**
     * Clear the per-instance Property cache
     */
    api.rpc.property.invalidateCache = async () => {
      Property.invalidateLocalCache();
    };
  }
}
