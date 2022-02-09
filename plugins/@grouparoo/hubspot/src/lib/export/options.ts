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

  public async getContactDestinationOptions(): Promise<DestinationOptionsMethodResponse> {
    const { appOptions } = this.cacheData;
    this.client = await connect(appOptions);
    const out: DestinationOptionsMethodResponse = {};
    Object.assign(out, await this.getContactOptions());
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

  private async getSchema(customObjectIdentifier: string) {
    const { appId } = this.cacheData;
    const cacheKey = `hubspot_get_schema_${customObjectIdentifier.toLowerCase()}`;
    const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
    return objectCache(
      { objectId: appId, cacheKey, cacheDurationMs },
      async () => {
        return await this.client.objects.getSchema(customObjectIdentifier);
      }
    );
  }

  private async getContactOptions() {
    const searchableAndUniqueProperties = [
      "website",
      "phone",
      "domain",
      "name",
      "hs_object_id",
    ];
    const out: DestinationOptionsMethodResponse = {
      companyKey: { type: "list", options: [], descriptions: [] },
    };
    const companySchema = await this.getSchema("COMPANY");
    const companyProperties = companySchema?.properties;
    const objectsToSort = [];
    companyProperties.map((object) => {
      if (searchableAndUniqueProperties.includes(object.name)) {
        objectsToSort.push({
          option: object.name,
          description: object.description,
        });
      }
    });
    objectsToSort
      .sort((a, b) => a.option.localeCompare(b.description))
      .map((object) => {
        out.companyKey.options.push(object.option);
        out.companyKey.descriptions.push(object.description);
      });
    return out;
  }

  private async getRecordOptions(destinationOptions: SimpleDestinationOptions) {
    const out: DestinationOptionsMethodResponse = {
      schemaId: { type: "list", options: [], descriptions: [] },
      primaryKey: { type: "pending", options: [] },
    };
    const objects = this.customObjects;
    const objectsToSort = [];
    objects.map((object) => {
      objectsToSort.push({
        option: object.objectTypeId,
        description: object.name,
      });
    });
    objectsToSort
      .sort((a, b) => a.description.localeCompare(b.description))
      .map((object) => {
        out.schemaId.options.push(object.option);
        out.schemaId.descriptions.push(object.description);
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
    const customObject = new CustomObjectHandler(
      await this.getCustomObjectById(schemaId)
    );
    const names = [];
    if (customObject.getProperties()) {
      for (const property of customObject.getProperties()) {
        if (!customObject.shouldShowProperty(property)) {
          continue;
        }
        names.push(property.name);
      }
    }
    return [...new Set(names.sort())];
  }

  private async getCustomObjectById(schemaId) {
    if (CustomObjectHandler.standardObjects.includes(schemaId)) {
      return await this.getSchema(schemaId);
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
