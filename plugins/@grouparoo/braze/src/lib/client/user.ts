import { BrazeClient } from "./client";

export default class User {
  client: BrazeClient;

  constructor(client: BrazeClient) {
    this.client = client;
  }

  async getOne(externalId: string) {
    const response = await this.client._request({
      data: JSON.stringify({ external_ids: [externalId] }),
      method: "POST",
      url: `/users/export/ids`,
    });
    const { users = [] } = response;
    const filtered = users.filter(
      (record) => record["external_id"] === externalId
    );
    return filtered.length > 0 ? filtered[0] : null;
  }

  async get(externalIds: string[]) {
    const response = await this.client._request({
      data: JSON.stringify({ external_ids: externalIds }),
      method: "POST",
      url: `/users/export/ids`,
    });
    const { users = [] } = response;
    return users;
  }

  updateOrCreate(payload: any[]) {
    return this.client._request({
      data: JSON.stringify({ attributes: payload }),
      method: "POST",
      url: `/users/track?=`,
      headers: { "X-Braze-Bulk": "true" },
    });
  }

  delete(externalIds: string[]) {
    return this.client._request({
      data: JSON.stringify({ external_ids: externalIds }),
      method: "POST",
      url: `/users/delete`,
    });
  }
}
