import {
  DestinationOptionsMethodResponse,
  objectCache,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { HubspotClient } from "../client/client";
import { connect } from "../connect";

export interface HubspotCacheData {
  appId: string;
  appOptions: SimpleAppOptions;
}

class OptionsHandler {
  cacheData: HubspotCacheData;
  client: HubspotClient;
  standardObjects: string[];
  customObjects: any[];

  constructor({ appId, appOptions }) {
    this.cacheData = { appId, appOptions };
    this.standardObjects = [
      "CONTACT",
      "PRODUCT",
      "COMPANY",
      "DEAL",
      "TICKET",
      "MARKETING_EVENT",
      "QUOTE",
    ];
  }

  public async getDestinationOptions({
    destinationOptions,
  }): Promise<DestinationOptionsMethodResponse> {
    const { appOptions } = this.cacheData;
    this.client = await connect(appOptions);
    this.customObjects = await this.getCustomObjects();
    const out: DestinationOptionsMethodResponse = {};
    Object.assign(out, await this.getRecordOptions(destinationOptions));
    Object.assign(out, await this.getGroupsOptions(destinationOptions));
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
    return this.populateDestinationOption(
      "recordObject",
      "recordMatchField",
      destinationOptions
    );
  }

  private async getGroupsOptions(destinationOptions: SimpleDestinationOptions) {
    return this.populateDestinationOption(
      "groupObject",
      "groupNameField",
      destinationOptions
    );
  }

  private async populateDestinationOption(
    objectField: string,
    propertyField: string,
    destinationOptions: SimpleDestinationOptions
  ) {
    const out: DestinationOptionsMethodResponse = {
      [objectField]: { type: "typeahead", options: [] },
      [propertyField]: { type: "pending", options: [] },
    };
    const objects = await this.getCustomObjectNames();
    out[objectField].options = objects;
    const name = destinationOptions[objectField]?.toString();
    if (name && objects.includes(name)) {
      const fields = await this.getObjectMatchNames(name);
      out[propertyField].type = "typeahead";
      out[propertyField].options = fields;
      if (!fields.includes(destinationOptions[propertyField])) {
        destinationOptions[propertyField] = null;
      }
    } else {
      destinationOptions[objectField] = null;
      destinationOptions[propertyField] = null;
    }
    return out;
  }

  private async getCustomObjectNames() {
    const names = [];
    for (const object of this.customObjects) {
      if (object.archived) {
        continue;
      }
      names.push(object.name);
    }
    return [...new Set(this.standardObjects.concat(names))];
  }

  private async getObjectMatchNames(name) {
    const customObject = await this.getCustomObjectByName(name);
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

  private async getCustomObjectByName(name) {
    if (this.standardObjects.includes(name)) {
      return await this.getCustomObject(name);
    }
    for (const object of this.customObjects) {
      if (object.name === name) {
        return object;
      }
    }
    return null;
  }
}

export { OptionsHandler };
