import { BrazeClient } from "./client";

export default class Campaign {
  client: BrazeClient;

  constructor(client: BrazeClient) {
    this.client = client;
  }

  get() {
    return this.client._request({
      method: "GET",
      url: `/campaigns/list`,
    });
  }
}
