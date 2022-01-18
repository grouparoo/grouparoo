import { TrackClient } from "customerio-node";
import axios from "axios";

class CustomerioClient {
  client: TrackClient;
  appApiKey: string;

  constructor(siteId, trackingApiKey, appApiKey) {
    this.client = new TrackClient(siteId, trackingApiKey);
    this.appApiKey = appApiKey;
  }

  async destroy(customerId: string) {
    return this.client.destroy(customerId);
  }

  async identify(customerId: string, payload: object) {
    return this.client.identify(customerId, payload);
  }

  async trackAnonymous(anonymousId: string | number, data: object) {
    return this.client.trackAnonymous(anonymousId, data);
  }

  async getCustomer(customerId: string) {
    try {
      const { data } = await axios.get<Record<string, any>>(
        `https://beta-api.customer.io/v1/api/customers/${customerId}/attributes`,
        {
          headers: {
            Authorization: `Bearer ${this.appApiKey}`,
          },
        }
      );
      return data["customer"];
    } catch (error) {
      if (error?.response?.status === 404) {
        return null;
      }
      throw error;
    }
  }

  async getCampaigns() {
    const { data } = await axios.get<Record<string, any>>(
      `https://beta-api.customer.io/v1/api/campaigns`,
      {
        headers: {
          Authorization: `Bearer ${this.appApiKey}`,
        },
      }
    );
    return data;
  }
}

export { CustomerioClient };
