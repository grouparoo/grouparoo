import Client, { IHubSpotClientProps } from "hubspot-api";
import { oAuthAccessTokenGetter, SimpleAppOptions } from "@grouparoo/core";
import HubspotObjects from "./objects";
import axios, { AxiosRequestConfig } from "axios";

class HubspotClient {
  private hapikey: string;
  private accessTokenGetter: oAuthAccessTokenGetter;

  readonly objects = new HubspotObjects(this);

  constructor(appOptions: SimpleAppOptions) {
    if (appOptions.refreshToken) {
      this.accessTokenGetter = new oAuthAccessTokenGetter(
        "hubspot",
        appOptions.refreshToken as string
      );
    } else {
      this.hapikey = appOptions.hapikey?.toString();
    }
  }

  async getClientOptions(): Promise<IHubSpotClientProps> {
    if (this.accessTokenGetter) {
      const accessToken = await this.accessTokenGetter.getAccessToken();
      return { accessToken };
    }

    return { hapikey: this.hapikey };
  }

  withClient<T>(callback: (client: Client) => Promise<T>): Promise<T> {
    return this.getClientOptions().then((options) =>
      callback(new Client(options))
    );
  }

  async getLists(): Promise<any> {
    // TODO: This is not paginated, it will need to be
    // https://legacydocs.hubspot.com/docs/methods/lists/get_static_lists
    const data = await this.request({
      method: "GET",
      url: `/contacts/v1/lists/static`,
      params: { count: 999 },
    });
    return data.lists;
  }

  async deleteList(listId) {
    await this.request({
      method: "DELETE",
      url: `/contacts/v1/lists/${listId}`,
    });
  }

  async addContactToList(listId: string, email: string) {
    try {
      await this.request({
        method: "POST",
        url: `/contacts/v1/lists/${listId}/add`,
        data: {
          emails: [email],
        },
      });
    } catch (error) {
      if (error?.response?.data?.errorType !== "LIST_EXISTS") {
        throw error;
      }
    }
  }

  async removeContactFromList(listId: string, email: string) {
    await this.request({
      method: "POST",
      url: `/contacts/v1/lists/${listId}/remove`,
      data: {
        emails: [email],
      },
    });
  }

  async getAccountDetails(): Promise<any> {
    return this.withClient((client) => client.account.getAccountDetails());
  }

  async getContactByEmail(email: string): Promise<any> {
    try {
      return await this.withClient((client) =>
        client.contacts.getByEmail(email)
      );
    } catch (error) {
      if (error?.response?.data?.category === "OBJECT_NOT_FOUND") {
        // ok
      } else {
        throw error;
      }
    }
    return null;
  }

  async deleteContact(contactId: string): Promise<any> {
    return this.withClient((client) =>
      client.contacts.deleteContact(contactId)
    );
  }

  async createOrUpdateContact(payload: any): Promise<any> {
    return this.withClient((client) =>
      client.contacts.createOrUpdateContact(payload)
    );
  }

  async getAllContactsProperties(): Promise<any> {
    return this.withClient((client) =>
      client.contactsProperties.getAllContactsProperties()
    );
  }

  async request(config: AxiosRequestConfig): Promise<any> {
    config.baseURL = "https://api.hubapi.com";

    if (this.accessTokenGetter) {
      const accessToken = await this.accessTokenGetter.getAccessToken();
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    } else {
      config.params = { ...config.params, hapikey: this.hapikey };
    }

    const { data = {} } = await axios(config);

    // TODO: Improve error handling here to better read Hubspot error message

    return data;
  }
}

export { HubspotClient };
