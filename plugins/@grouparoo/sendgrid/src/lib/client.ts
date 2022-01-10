import { Client } from "@sendgrid/client";
import { ClientRequest } from "@sendgrid/client/src/request";

class SendgridClient {
  client: Client;

  constructor(apiKey: string) {
    this.client = new Client();
    this.client.setApiKey(apiKey);
  }

  async getLists() {
    const request = {
      method: "GET",
      url: "/v3/marketing/lists",
    };
    const [response, body] = await this.client.request(<ClientRequest>request);
    return body.result;
  }

  async createList(name) {
    const data = {
      name,
    };
    const request = {
      method: "POST",
      url: "/v3/marketing/lists",
      body: data,
    };
    const [response, body] = await this.client.request(<ClientRequest>request);
    return body.id;
  }

  async deleteList(listId: string) {
    const request = {
      method: "DELETE",
      url: `/v3/marketing/lists/${listId}`,
    };
    const [response, body] = await this.client.request(<ClientRequest>request);
    return body.result;
  }

  async unsubscribe(listId: string, userId: string) {
    const data = {
      contact_ids: userId,
    };
    const request = {
      method: "DELETE",
      qs: data,
      url: `/v3/marketing/lists/${listId}/contacts`,
    };
    const [response, body] = await this.client.request(<ClientRequest>request);
    return body.result;
  }

  async addOrUpdateUser(userData: any, listIds: string[]) {
    const data = {
      contacts: [userData],
      list_ids: listIds,
    };
    const request = {
      method: "PUT",
      url: "/v3/marketing/contacts",
      body: data,
    };

    const [response, body] = await this.client.request(<ClientRequest>request);
    return body;
  }

  async getUser(email: String, byField: string = "email") {
    const data = {
      query: `${byField} = '${email}'`,
    };
    const request = {
      method: "POST",
      url: "/v3/marketing/contacts/search",
      body: data,
    };
    const [response, body] = await this.client.request(<ClientRequest>request);
    return body.result.length === 0 ? null : body.result[0];
  }

  async deleteUsers(usersIds: string[]) {
    const data = {
      ids: usersIds.join(","),
    };
    const request = {
      method: "DELETE",
      url: "/v3/marketing/contacts",
      qs: data,
    };
    const [response, body] = await this.client.request(<ClientRequest>request);
    return body.result;
  }

  async getUserFields() {
    const request = {
      method: "GET",
      url: "/v3/marketing/field_definitions",
    };
    const [response, body] = await this.client.request(<ClientRequest>request);
    let allFields = body["reserved_fields"];
    if (body["custom_fields"]) {
      allFields = allFields.concat(body["custom_fields"]);
    }
    return allFields;
  }
}

export { SendgridClient };
