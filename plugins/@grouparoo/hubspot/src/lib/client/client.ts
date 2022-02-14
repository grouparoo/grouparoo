import Client, { IHubSpotClientProps } from "hubspot-api";
import { SimpleAppOptions } from "@grouparoo/core";
import HubspotObjects from "./objects";
import axios, { AxiosRequestConfig } from "axios";

class AccessTokenFetcher {
  private accessToken: string;
  private expirationDate: number = Date.now();

  constructor(
    private oAuthProviderName: string,
    private refreshToken: string
  ) {}

  private async isAccessTokenExpired() {
    return !this.accessToken || this.expirationDate <= Date.now();
  }

  private async refreshAccessToken() {
    try {
      for (
        let retries = 3;
        retries > 0 && this.isAccessTokenExpired();
        retries--
      ) {
        const {
          data: { token, expirationSeconds },
        } = await axios.post(
          `http://localhost:8080/api/v1/oauth/${this.oAuthProviderName}/client/refresh`,
          {
            refreshToken: this.refreshToken,
          }
        );

        const expirationMs = Math.max(0, (expirationSeconds - 60) * 1000);

        this.accessToken = token;
        this.expirationDate = Date.now() + expirationMs;
      }
      // TODO: Throw error if access token is still expired
    } catch (e) {
      // TODO: Something's up and we need to figure out why
      throw e;
    }
  }

  public async fetchAccessToken(): Promise<string> {
    if (this.isAccessTokenExpired()) {
      await this.refreshAccessToken();
    }

    return this.accessToken;
  }
}

class HubspotClient {
  private _client: Client;
  private hapikey: string;
  private accessTokenFetcher: AccessTokenFetcher;

  readonly objects = new HubspotObjects(this);

  constructor(appOptions: SimpleAppOptions) {
    if (appOptions.refreshToken) {
      this.accessTokenFetcher = new AccessTokenFetcher(
        "hubspot",
        appOptions.refreshToken as string
      );
    } else {
      this.hapikey = appOptions.hapikey?.toString();
    }
  }

  async getClientOptions(): Promise<IHubSpotClientProps> {
    if (this.accessTokenFetcher) {
      const accessToken = await this.accessTokenFetcher.fetchAccessToken();
      return { accessToken };
    }

    return { hapikey: this.hapikey };
  }

  async getClient(): Promise<Client> {
    if (!this._client) {
      const options = await this.getClientOptions();
      this._client = new Client(options);
    }

    return this._client;
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

  async addContactToList(listId, email) {
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

  async removeContactFromList(listId, email) {
    await this.request({
      method: "POST",
      url: `/contacts/v1/lists/${listId}/remove`,
      data: {
        emails: [email],
      },
    });
  }

  async getAccountDetails(): Promise<any> {
    return this.getClient().then((client) => {
      return client.account.getAccountDetails();
    });
  }

  async getContactByEmail(email: string): Promise<any> {
    try {
      return this.getClient().then((client) =>
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
    return await this.getClient().then((client) =>
      client.contacts.deleteContact(contactId)
    );
  }

  async createOrUpdateContact(payload: any): Promise<any> {
    return await this.getClient().then((client) =>
      client.contacts.createOrUpdateContact(payload)
    );
  }

  async getAllContactsProperties(): Promise<any> {
    return await this.getClient().then((client) =>
      client.contactsProperties.getAllContactsProperties()
    );
  }

  async request(config: AxiosRequestConfig): Promise<any> {
    config.baseURL = "https://api.hubapi.com";

    if (this.accessTokenFetcher) {
      const accessToken = await this.accessTokenFetcher.fetchAccessToken();
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
