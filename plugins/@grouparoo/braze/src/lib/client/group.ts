import { BrazeClient } from "./client";

export default class Group {
  client: BrazeClient;

  constructor(client: BrazeClient) {
    this.client = client;
  }

  add(groupName: string, external_ids: Array<string>) {
    const data = JSON.stringify({
      subscription_group_id: groupName,
      subscription_state: "subscribed",
      external_id: external_ids,
    });
    return this.client._request({
      data,
      method: "POST",
      url: `/subscription/status/set`,
    });
  }

  remove(groupName: string, external_ids: Array<string>) {
    const data = JSON.stringify({
      subscription_group_id: groupName,
      subscription_state: "unsubscribed",
      external_id: external_ids,
    });
    return this.client._request({
      data,
      method: "POST",
      url: `/subscription/status/set`,
    });
  }
}
