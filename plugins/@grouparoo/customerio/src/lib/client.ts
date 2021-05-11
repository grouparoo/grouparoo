import CIO from "customerio-node";
import axios from "axios";

class CustomerioClient {
  client: any;
  appApiKey: string;

  constructor(siteId, apiKey, appApiKey) {
    this.client = new CIO(siteId, apiKey);
    this.appApiKey = appApiKey;
  }

  async destroy(customerId: string) {
    return this.client.destroy(customerId);
  }

  async identify(customerId: string, payload: object) {
    return this.client.identify(customerId, payload);
  }

  async trackAnonymous(data: object) {
    return this.client.trackAnonymous(data);
  }

  async getCustomer(customerId: string) {
    try {
      const { data } = await axios.get(
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
    const { data } = await axios.get(
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
