import EloquaClient from "./client";

export default class ContactList {
  client: EloquaClient;

  constructor(client: EloquaClient) {
    this.client = client;
  }

  getAll(options?: any) {
    return this.client._request({
      method: "GET",
      url: "/api/REST/1.0/assets/contact/lists",
      params: options,
    });
  }

  get(id: number, options?: any) {
    return this.client._request({
      method: "GET",
      url: `/api/REST/1.0/assets/contact/list/${id}`,
      params: options,
    });
  }

  async getByName(name: string, options?: any) {
    if (!options) {
      options = {};
    }
    options.search = `name='${name}'`;
    options.depth = "partial";
    const response = await this.client._request({
      method: "GET",
      url: `/api/REST/1.0/assets/contact/lists`,
      params: options,
    });
    if (response?.elements?.length > 0) {
      return response.elements[0];
    }
    return null;
  }

  create(data: any) {
    return this.client._request({
      data,
      method: "POST",
      url: "/api/REST/1.0/assets/contact/list",
    });
  }

  update(id: number, data: any) {
    return this.client._request({
      data,
      method: "PUT",
      url: `/api/REST/1.0/assets/contact/list/${id}`,
    });
  }

  delete(id: number) {
    return this.client._request({
      method: "DELETE",
      url: `/api/REST/1.0/assets/contact/list/${id}`,
    });
  }
}
