import { BrazeClient } from "./client";

export default class User {
  client: BrazeClient;

  constructor(client: BrazeClient) {
    this.client = client;
  }

  updateExternalIds(externalIdRenames: Array<any>) {
    return this.client._request({
      data: JSON.stringify({ external_id_renames: externalIdRenames }),
      method: "POST",
      url: `/users/external_ids/rename`,
    });
  }

  update(payload: Array<any>) {
    return this.client._request({
      data: JSON.stringify({ attributes: payload }),
      method: "POST",
      url: `/users/track?=`,
    });
  }

  delete(externalIds: Array<string>) {
    return this.client._request({
      data: JSON.stringify({ external_ids: externalIds }),
      method: "POST",
      url: `/users/delete`,
    });
  }
}
