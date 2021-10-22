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

  searchObjects(
    objectTypeId: string,
    recordMatchField: string,
    foreignKeys: string[]
  ) {
    const filterGroups = foreignKeys.map((key) => {
      return {
        filters: [
          {
            propertyName: recordMatchField,
            operator: "EQ",
            value: key,
          },
        ],
      };
    });
    const data = {
      filterGroups,
      properties: [recordMatchField],
    };
    return this.client._request({
      data,
      method: "POST",
      url: `/crm/v3/objects/${objectTypeId}/search`,
    });
  }

  create(data: any) {
    return this.client._request({
      data,
      method: "POST",
      url: `/api/REST/1.0/data/contact`,
    });
  }

  update(id: number, data: any) {
    return this.client._request({
      data,
      method: "PUT",
      url: `/api/REST/1.0/data/contact/${id}`,
    });
  }

  delete(id: number) {
    return this.client._request({
      method: "DELETE",
      url: `/api/REST/1.0/data/contact/${id}`,
    });
  }
}
