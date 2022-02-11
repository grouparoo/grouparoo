import { Initializer, api, utils, log } from "actionhero";
import { App } from "../models/App";
import { AppsCache } from "../modules/caches/appsCache";
import { SourcesCache } from "../modules/caches/sourcesCache";
import { PropertiesCache } from "../modules/caches/propertiesCache";

declare module "actionhero" {
  export interface Api {
    rpc: {
      app: Record<string, (arg: any) => void | Promise<void>>;
      source: Record<string, (arg: any) => void | Promise<void>>;
      property: Record<string, (arg: any) => void | Promise<void>>;
    };
  }
}

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
      source: {},
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
     * Clear the caches
     */
    api.rpc.app.invalidateCache = () => AppsCache.invalidate();
    api.rpc.source.invalidateCache = () => SourcesCache.invalidate();
    api.rpc.property.invalidateCache = () => PropertiesCache.invalidate();
  }
}
