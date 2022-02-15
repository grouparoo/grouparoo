import { HubspotClient } from "./client";
import { utils } from "actionhero";

export default class HubspotObjects {
  client: HubspotClient;

  constructor(client: HubspotClient) {
    this.client = client;
  }

  async getSchemas() {
    const response = await this.client.request({
      method: "GET",
      url: `/crm/v3/schemas`,
    });
    return response.results;
  }

  async getSchema(objectTypeId) {
    return await this.client.request({
      method: "GET",
      url: `/crm/v3/schemas/${objectTypeId}`,
    });
  }

  async searchObjects(
    schemaId: string,
    primaryKey: string,
    foreignKeys: string[],
    properties: string[] = []
  ): Promise<Record<string, string | number | Date>[]> {
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
      limit: 100,
    };

    // search has a low rate limit. only 4 allowed per second.
    // so try a few times and wait random amounts
    // we also limit parallelism to 4 for this reason
    let attempt = 0;
    let lastError = new Error("Hubspot search issue");
    while (attempt < 8) {
      attempt++;
      try {
        const response = await this.client.request({
          data,
          method: "POST",
          url: `/crm/v3/objects/${schemaId}/search`,
        });
        return response?.results || [];
      } catch (error) {
        if (error?.status === 429) {
          const waitMs = Math.floor(Math.random() * 500) + 1000; // wait about a second or more
          lastError = error;
          await utils.sleep(waitMs);
        } else {
          throw error;
        }
      }
    }
    throw lastError;
  }

  async create(schemaId: string, inputs: any[]) {
    return this.client.request({
      data: { inputs },
      method: "POST",
      url: `/crm/v3/objects/${schemaId}/batch/create`,
    });
  }

  async update(schemaId: string, inputs: any[]) {
    return this.client.request({
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
    return this.client.request({
      data,
      method: "POST",
      url: `/crm/v3/objects/${schemaId}/batch/archive`,
    });
  }

  async associate(fromObjectId: string, toObjectId: string) {
    return this.client.request({
      data: {
        fromObjectId,
        toObjectId,
        category: "HUBSPOT_DEFINED",
        definitionId: 1,
      },
      method: "PUT",
      url: `/crm-associations/v1/associations`,
    });
  }

  async disassociate(fromObjectId: string, toObjectId: string) {
    return this.client.request({
      data: {
        fromObjectId,
        toObjectId,
        category: "HUBSPOT_DEFINED",
        definitionId: 1,
      },
      method: "PUT",
      url: `/crm-associations/v1/associations/delete`,
    });
  }

  async getAssociation(contactId: string) {
    const response = await this.client.request({
      method: "GET",
      url: `/crm-associations/v1/associations/${contactId}/HUBSPOT_DEFINED/1`,
    });
    return response?.results || [];
  }
}
