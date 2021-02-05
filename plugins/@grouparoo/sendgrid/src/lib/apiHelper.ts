import { Client } from "@sendgrid/client";
import { ClientRequest } from "@sendgrid/client/src/request";

class ApiHelper {
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

  async deleteList(listId: string) {
    const request = {
      method: "DELETE",
      url: `/v3/marketing/lists/${listId}`,
    };
    const [response, body] = await this.client.request(<ClientRequest>request);
    return body.result;
  }

  async addOrUpdateUser(user: any) {
    console.log(user);
    const data = {
      contacts: [user],
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

  async deleteUsers(usersIds: Array<string>) {
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
    return body["reserved_fields"];
  }
}

export { ApiHelper };
