import * as mailjet from "node-mailjet";
import Axios from "axios";

class MailjetClient {
  client: any;
  apiKey: any;
  apiSecret: any;

  constructor(apiKey: string, apiSecret: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.client = mailjet.connect(apiKey, apiSecret);
  }

  async createList(listName: string): Promise<any> {
    const request = await this.client
      .post("contactslist", { version: "v3" })
      .request({
        Name: listName,
      });
    if (request?.body?.Data?.length > 0) {
      return request?.body?.Data[0];
    }
    return null;
  }

  async getListByName(listName: string): Promise<any> {
    const request = await this.client
      .get("contactslist", { version: "v3" })
      .request({ Name: listName });
    if (request?.body?.Data?.length > 0) {
      return request?.body?.Data[0];
    }
    return null;
  }

  async getLists(): Promise<any[]> {
    const request = await this.client
      .get("contactslist", { version: "v3" })
      .request();
    return request?.body?.Data;
  }

  async deleteList(listId) {
    await this.client
      .delete("contactslist", { version: "v3" })
      .id(listId)
      .request();
  }

  async addContactToList(listId, email) {
    await this.client
      .post("contactslist", { version: "v3" })
      .id(listId)
      .action("managecontact")
      .request({
        Action: "addnoforce",
        Email: email,
      });
  }

  async removeContactFromList(listId, email) {
    await this.client
      .post("contactslist", { version: "v3" })
      .id(listId)
      .action("managecontact")
      .request({
        Action: "remove",
        Email: email,
      });
  }

  async getContactListsByEmail(email: string): Promise<any> {
    const contact = await this.getContactByEmail(email);
    let request = null;
    if (contact) {
      request = await this.client
        .get("contact", { version: "v3" })
        .id(contact.ID)
        .action("getcontactslists")
        .request();
    }
    if (request?.body?.Data.length > 0) {
      return request?.body?.Data;
    }
    return [];
  }

  async getContactByEmail(email: string): Promise<any> {
    try {
      const request = await this.client
        .get("contact", { version: "v3" })
        .id(email)
        .request();
      return request?.body?.Data[0];
    } catch (e) {
      if (e?.response?.statusCode === 404) {
        return null;
      } else {
        throw e;
      }
    }
  }

  async deleteContactByEmail(email: string): Promise<any> {
    const contact = await this.getContactByEmail(email);
    if (contact) {
      await this.deleteContact(contact.ID);
    }
  }

  async deleteContact(contactId: string): Promise<any> {
    const url = `https://api.mailjet.com/v4/contacts/${contactId}`;
    await Axios({
      method: "DELETE",
      url,
      auth: {
        username: this.apiKey,
        password: this.apiSecret,
      },
    });
  }

  async createContact(payload: any): Promise<any> {
    const request = await this.client
      .post("contact", { version: "v3" })
      .request({
        IsExcludedFromCampaigns: "false",
        Email: payload.Email,
      });
    if (request?.body?.Data && Object.keys(payload).length > 1) {
      await this.updateContact(payload);
    }
    return request?.body?.Data;
  }

  async updateContact(payload: any): Promise<any> {
    try {
      const data = [];
      Object.keys(payload).forEach((k) => {
        if (k !== "Email") {
          data.push({ Name: k, Value: payload[k] });
        }
      });
      const request = await this.client
        .put("contactdata", { version: "v3" })
        .id(payload.Email)
        .request({
          Data: data,
        });
      return request?.body?.Data;
    } catch (e) {
      if (e?.response?.status !== 304) {
        throw e;
      }
    }
  }

  async getContactProperties(contactId: string): Promise<any> {
    const request = await this.client
      .get("contactdata", { version: "v3" })
      .id(contactId)
      .request();
    if (request?.body?.Data && request?.body?.Data.length > 0) {
      return request?.body?.Data[0].Data;
    }
    return [];
  }

  async getAllContactsProperties(): Promise<any> {
    const request = await this.client
      .get("contactmetadata", { version: "v3" })
      .request();
    return request?.body?.Data;
  }
}

export { MailjetClient };
