import Field from "./field";
import EloquaClient from "./client";

export default class Contact {
  client: EloquaClient;
  fields: Field;

  constructor(client: EloquaClient) {
    this.client = client;
    this.fields = new Field(this.client, "contact", "contacts");
  }

  async getByEmail(email: string, options?: any) {
    if (!options) {
      options = {};
    }
    options.search = email;
    options.depth = "partial";
    const response = await this.client._request({
      method: "GET",
      url: `/api/REST/1.0/data/contacts`,
      params: options,
    });
    if (response?.elements?.length > 0) {
      return response.elements[0];
    }
    return null;
  }

  getAll(options?: any) {
    return this.client._request({
      method: "GET",
      url: "/api/REST/1.0/data/contacts",
      params: options,
    });
  }

  getSegment(segmentId: number, options?: any) {
    return this.client._request({
      method: "GET",
      url: `/api/REST/2.0/data/contacts/segment/${segmentId}`,
      // somehow, this call seems to be undocumented (https://community.oracle.com/thread/3900099)
      params: options,
    });
  }

  create(data: any) {
    return this.client._request({
      data,
      method: "POST",
      url: `/api/REST/1.0/data/contact`,
    });
  }

  update(id: number, data: any) {
    return this.client._request({
      data,
      method: "PUT",
      url: `/api/REST/1.0/data/contact/${id}`,
    });
  }

  delete(id: number) {
    return this.client._request({
      method: "DELETE",
      url: `/api/REST/1.0/data/contact/${id}`,
    });
  }
}
