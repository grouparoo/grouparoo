import {
  DestinationOptionsMethodResponse,
  objectCache,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { HubspotClient } from "../client/client";
import { connect } from "../connect";
import { CustomObjectHandler } from "./customObject";

export interface HubspotCacheData {
  appId: string;
  appOptions: SimpleAppOptions;
}

class OptionsHandler {
  cacheData: HubspotCacheData;
  client: HubspotClient;
  customObjects: any[];

  constructor({ appId, appOptions }) {
    this.cacheData = { appId, appOptions };
  }

  public async getDestinationOptions({
    destinationOptions,
  }): Promise<DestinationOptionsMethodResponse> {
    const { appOptions } = this.cacheData;
    this.client = await connect(appOptions);
    this.customObjects = await this.getCustomObjects();
    const out: DestinationOptionsMethodResponse = {};
    Object.assign(out, await this.getRecordOptions(destinationOptions));
    return out;
  }

  private async getCustomObjects() {
    const { appId } = this.cacheData;
    const cacheKey = "HubspotGetSchemas";
    const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
    return objectCache(
      { objectId: appId, cacheKey, cacheDurationMs },
      async () => {
        return await this.client.objects.getSchemas();
      }
    );
  }

  private async getCustomObject(customObjectIdentifier: string) {
    const { appId } = this.cacheData;
    const cacheKey = "HubspotGetSchema";
    const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
    return objectCache(
      { objectId: appId, cacheKey, cacheDurationMs },
      async () => {
        return await this.client.objects.getSchema(customObjectIdentifier);
      }
    );
  }

  private async getRecordOptions(destinationOptions: SimpleDestinationOptions) {
    const out: DestinationOptionsMethodResponse = {
      schemaId: { type: "list", options: [], descriptions: [] },
      primaryKey: { type: "pending", options: [] },
    };
    const objects = this.customObjects;
    objects.map((object) => {
      out.schemaId.options.push(object.objectTypeId);
      out.schemaId.descriptions.push(object.name);
    });
    CustomObjectHandler.standardObjects.map((object) => {
      out.schemaId.options.push(object);
    });
    const schemaId = destinationOptions.schemaId?.toString();
    if (
      schemaId &&
      (CustomObjectHandler.standardObjects.includes(schemaId) ||
        objects.filter((object) => object.objectTypeId === schemaId).length > 0)
    ) {
      const fields = await this.getObjectMatchNames(schemaId);
      out.primaryKey.type = "typeahead";
      out.primaryKey.options = fields;
      if (!fields.includes(destinationOptions.primaryKey)) {
        destinationOptions.primaryKey = null;
      }
    } else {
      destinationOptions.schemaId = null;
      destinationOptions.primaryKey = null;
    }
    return out;
  }

  private async getObjectMatchNames(schemaId) {
    const customObject = await this.getCustomObjectById(schemaId);
    const names = [];
    if (customObject?.properties) {
      for (const object of customObject.properties) {
        if (object.name.startsWith("hs_")) {
          continue;
        }
        names.push(object.name);
      }
    }
    return [...new Set(names)];
  }

  private async getCustomObjectById(schemaId) {
    if (CustomObjectHandler.standardObjects.includes(schemaId)) {
      return await this.getCustomObject(schemaId);
    }
    for (const object of this.customObjects) {
      if (object.objectTypeId === schemaId) {
        return object;
      }
    }
    return null;
  }
}

export { OptionsHandler };
