import * as mailjet from "node-mailjet";
import { SimpleAppOptions } from "@grouparoo/core";

class MailjetClient {
  client: any;

  constructor(apiKey: string, apiSecret: string) {
    this.client = mailjet.connect(apiKey, apiSecret);
  }

  async getLists(): Promise<any> {}

  async deleteList(listId) {}

  async addContactToList(listId, email) {}

  async removeContactFromList(listId, email) {}

  async getAccountDetails(): Promise<any> {}

  async getContactByEmail(email: string): Promise<any> {}

  async deleteContact(contactId: string): Promise<any> {}

  async createOrUpdateContact(payload: any): Promise<any> {}

  async getAllContactsProperties(): Promise<any> {
    const request = await this.client
      .get("contactmetadata", { version: "v3" })
      .request();
    return request?.body?.Data;
  }
}

export { MailjetClient };
