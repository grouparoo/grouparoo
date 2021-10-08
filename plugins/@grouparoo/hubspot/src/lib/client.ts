import Client from "hubspot-api";
import { SimpleAppOptions } from "@grouparoo/core";
import Axios from "axios";

export interface HubspotDataResponse {
  lists?: Array<any>;
}

class HubspotClient {
  client: Client;
  hapikey: string;

  constructor(appOptions: SimpleAppOptions) {
    this.client = new Client(appOptions);
    this.hapikey = appOptions.hapikey?.toString();
  }

  async getLists(): Promise<any> {
    // TODO: This is not paginated, it will need to be
    // https://legacydocs.hubspot.com/docs/methods/lists/get_static_lists
    const url = `https://api.hubapi.com/contacts/v1/lists/static?hapikey=${this.hapikey}&count=999`;
    const { data }: HubspotDataResponse = await Axios({
      method: "GET",
      url,
      headers: { "Content-Type": "application/json" },
    });
    return data.lists;
  }

  async deleteList(listId) {
    await Axios({
      method: "DELETE",
      url: `https://api.hubapi.com/contacts/v1/lists/${listId}?hapikey=${this.hapikey}`,
      headers: { "Content-Type": "application/json" },
    });
  }

  async addContactToList(listId, email) {
    try {
      const url = `https://api.hubapi.com/contacts/v1/lists/${listId}/add?hapikey=${this.hapikey}`;
      await Axios({
        method: "POST",
        url,
        headers: { "Content-Type": "application/json" },
        data: {
          emails: [email],
        },
      });
    } catch (error) {
      if (error?.response?.data?.errorType === "LIST_EXISTS") {
        // ok
      } else {
        throw error;
      }
    }
  }

  async removeContactFromList(listId, email) {
    const url = `https://api.hubapi.com/contacts/v1/lists/${listId}/remove?hapikey=${this.hapikey}`;
    await Axios({
      method: "POST",
      url,
      headers: { "Content-Type": "application/json" },
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
}

export { HubspotClient };
