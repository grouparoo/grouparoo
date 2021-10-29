import { HubspotClient } from "./client";
import { CustomObjectHandler } from "../export/customObject";

export default class Contact {
  client: HubspotClient;

  constructor(client: HubspotClient) {
    this.client = client;
  }

  async getSchemas() {
    const response = await this.client._request({
      method: "GET",
      url: `/crm/v3/schemas`,
    });
    return response.results;
  }

  async getSchema(objectTypeId) {
    return await this.client._request({
      method: "GET",
      url: `/crm/v3/schemas/${objectTypeId}`,
    });
  }

  async searchObjects(
    schemaId: string,
    primaryKey: string,
    foreignKeys: string[],
    properties: string[] = []
  ): Promise<Array<Record<string, string | number | Date>>> {
    if (!properties.includes(primaryKey)) {
      properties.push(primaryKey);
    }
    const filterGroups = foreignKeys.map((key) => {
      return {
        filters: [
          {
            propertyName: primaryKey,
            operator: "EQ",
            value: key,
          },
        ],
      };
    });
    const data = {
      filterGroups,
      properties,
    };
    const response = await this.client._request({
      data,
      method: "POST",
      url: `/crm/v3/objects/${schemaId}/search`,
    });
    return response?.results || [];
  }

  async create(schemaId: string, inputs: any[]) {
    return this.client._request({
      data: { inputs },
      method: "POST",
      url: `/crm/v3/objects/${schemaId}/batch/create`,
    });
  }

  async update(schemaId: string, inputs: any[]) {
    return this.client._request({
      data: { inputs },
      method: "POST",
      url: `/crm/v3/objects/${schemaId}/batch/update`,
    });
  }

  async delete(schemaId: string, destinationIds: string[]) {
    const inputs = destinationIds.map((key) => {
      return {
        id: key,
      };
    });
    const data = {
      inputs,
    };
    return this.client._request({
      data,
      method: "POST",
      url: `/crm/v3/objects/${schemaId}/batch/archive`,
    });
  }
}
