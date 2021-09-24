import { SimpleAppOptions } from "@grouparoo/core";
import axios, { AxiosRequestConfig } from "axios";

class HubspotClient {
  hapikey: string;
  headers: any;

  constructor(appOptions: SimpleAppOptions) {
    this.hapikey = appOptions.hapikey?.toString();
    this.headers = {
      "X-Zendesk-Marketplace-Name": "Grouparoo",
      "X-Zendesk-Marketplace-Organization-Id": 5084,
      "X-Zendesk-Marketplace-App-Id": 577390,
    };
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

  async getContactByEmail(email: string): Promise<any> {
    try {
      return await this._request({
        method: "GET",
        url: `/contacts/v1/contact/email/${email}/profile`,
      });
    } catch (error) {
      if (error?.response?.data?.category !== "OBJECT_NOT_FOUND") {
        throw error;
      }
    }
    return null;
  }

  async deleteContact(contactId: string): Promise<any> {
    return await this._request({
      method: "DELETE",
      url: `/contacts/v1/contact/vid/${contactId}`,
    });
  }

  async createOrUpdateContact(payload: any): Promise<any> {
    const properties = Object.keys(payload).map((key) => ({
      property: key,
      value: payload[key],
    }));
    return await this._request({
      method: "POST",
      url: `/contacts/v1/contact/createOrUpdate/email/${payload.email}/`,
      data: {
        properties,
      },
    });
  }

  async getAllContactsProperties(): Promise<any> {
    return await this._request({
      method: "GET",
      url: `/properties/v1/contacts/properties`,
    });
  }

  async _request(config: AxiosRequestConfig): Promise<any> {
    config["baseURL"] = "https://api.hubapi.com";
    config["headers"] = Object.assign({}, this.headers, {
      "Content-Type": "application/json",
    });
    config["params"] = Object.assign({}, config.params, {
      hapikey: this.hapikey,
    });
    const { data = {} } = await axios(config);
    return data;
  }
}

export { HubspotClient };
