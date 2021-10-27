import Client from "hubspot-api";
import { SimpleAppOptions } from "@grouparoo/core";
import Objects from "./objects";
import Axios, { AxiosRequestConfig } from "axios";

class HubspotClient {
  client: Client;
  hapikey: string;
  objects: Objects;

  constructor(appOptions: SimpleAppOptions) {
    this.client = new Client(appOptions);
    this.hapikey = appOptions.hapikey?.toString();
    this.objects = new Objects(this);
  }
  async getLists(): Promise<any> {
    // TODO: This is not paginated, it will need to be
    // https://legacydocs.hubspot.com/docs/methods/lists/get_static_lists
    const data = await this._request({
      method: "GET",
      url: `/contacts/v1/lists/static`,
      params: { count: 999 },
    });
    return data.lists;
  }

  async deleteList(listId) {
    await this._request({
      method: "DELETE",
      url: `/contacts/v1/lists/${listId}`,
    });
  }

  async addContactToList(listId, email) {
    try {
      await this._request({
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
    await this._request({
      method: "POST",
      url: `/contacts/v1/lists/${listId}/remove`,
      data: {
        emails: [email],
      },
    });
  }

  async getAccountDetails(): Promise<any> {
    return await this.client.account.getAccountDetails();
  }

  async getContactByEmail(email: string): Promise<any> {
    try {
      return await this.client.contacts.getByEmail(email);
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
    return await this.client.contacts.deleteContact(contactId);
  }

  async createOrUpdateContact(payload: any): Promise<any> {
    return await this.client.contacts.createOrUpdateContact(payload);
  }

  async getAllContactsProperties(): Promise<any> {
    return await this.client.contactsProperties.getAllContactsProperties();
  }

  async _request(config: AxiosRequestConfig): Promise<any> {
    try {
      config["baseURL"] = "https://api.hubapi.com";
      config["params"] = Object.assign({}, config.params, {
        hapikey: this.hapikey,
      });
      const { data = {} } = await Axios(config);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export { HubspotClient };
