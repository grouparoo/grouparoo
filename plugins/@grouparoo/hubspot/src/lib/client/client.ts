import Client, { IHubSpotClientProps } from "hubspot-api";
import { oAuthAccessTokenGetter, SimpleAppOptions } from "@grouparoo/core";
import HubspotObjects from "./objects";
import axios, { AxiosRequestConfig } from "axios";

class HubspotClient {
  private hapikey: string;
  private accessTokenGetter: oAuthAccessTokenGetter;

  readonly objects = new HubspotObjects(this);

  private static formatAPIError(error: unknown) {
    if (axios.isAxiosError(error) && error.response.data?.status === "error") {
      const newError = new Error(
        `[ Hubspot API ] ${error.message}: ${JSON.stringify(
          error.response.data
        )}`
      );
      newError["status"] = error.response.status;

      return newError;
    }

    return error;
  }

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

  async withClient<T>(callback: (client: Client) => Promise<T>): Promise<T> {
    const options = await this.getClientOptions();
    try {
      return await callback(new Client(options));
    } catch (e) {
      throw HubspotClient.formatAPIError(e);
    }
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
    await this.request(
      {
        method: "POST",
        url: `/contacts/v1/lists/${listId}/add`,
        data: {
          emails: [email],
        },
      },
      {
        shouldSkipError: (error) =>
          axios.isAxiosError(error) &&
          error.response.data?.errorType === "LIST_EXISTS",
      }
    );
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
    return await this.withClient(async (client) => {
      try {
        return await client.contacts.getByEmail(email);
      } catch (error) {
        if (
          axios.isAxiosError(error) &&
          error.response.data?.category === "OBJECT_NOT_FOUND"
        ) {
          // ok
        } else {
          throw error;
        }
      }
      return null;
    });
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

  async request(
    config: AxiosRequestConfig,
    options?: {
      shouldSkipError: (error: any) => boolean;
    }
  ): Promise<any> {
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

    try {
      const { data = {} } = await axios(config);
      return data;
    } catch (error) {
      if (options?.shouldSkipError?.(error)) return {};
      throw HubspotClient.formatAPIError(error);
    }
  }
}

export { HubspotClient };
