import HubspotAPI, { IHubSpotClientProps } from "hubspot-api";
import { plugin, SimpleAppOptions } from "@grouparoo/core";
import HubspotObjects from "./objects";
import axios, { AxiosRequestConfig } from "axios";

class HubspotClient {
  private hapikey: string;
  private refreshToken: string;

  readonly objects = new HubspotObjects(this);

  private static formatAPIError(error: unknown) {
    if (axios.isAxiosError(error) && error.response.data?.status === "error") {
      const newError = new Error(
        `[ HubSpot API ] ${error.message}: ${JSON.stringify(
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
      this.refreshToken = appOptions.refreshToken as string;
    } else {
      this.hapikey = appOptions.hapikey?.toString();
    }
  }

  async getAPIOptions(): Promise<IHubSpotClientProps> {
    if (this.refreshToken) {
      const accessToken = await plugin.getOAuthAppAccessToken(
        "hubspot",
        this.refreshToken
      );
      return { accessToken };
    }

    return { hapikey: this.hapikey };
  }

  async withAPI<T>(callback: (api: HubspotAPI) => Promise<T>): Promise<T> {
    const options = await this.getAPIOptions();
    try {
      return await callback(new HubspotAPI(options));
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

  async createList(name: string) {
    return await this.request({
      method: "post",
      url: "/contacts/v1/lists",
      data: {
        name,
      },
    });
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
    return this.withAPI((api) => api.account.getAccountDetails());
  }

  async getContactByEmail(email: string): Promise<any> {
    return await this.withAPI(async (api) => {
      try {
        return await api.contacts.getByEmail(email);
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
    return this.withAPI((api) => api.contacts.deleteContact(contactId));
  }

  async createOrUpdateContact(payload: any): Promise<any> {
    return this.withAPI((api) => api.contacts.createOrUpdateContact(payload));
  }

  async getAllContactsProperties(): Promise<any> {
    return this.withAPI((api) =>
      api.contactsProperties.getAllContactsProperties()
    );
  }

  async request(
    config: AxiosRequestConfig,
    options?: {
      shouldSkipError: (error: any) => boolean;
    }
  ): Promise<any> {
    config.baseURL = "https://api.hubapi.com";

    if (this.refreshToken) {
      const accessToken = await plugin.getOAuthAppAccessToken(
        "hubspot",
        this.refreshToken
      );
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
