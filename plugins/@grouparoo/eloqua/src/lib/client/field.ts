import EloquaClient from "./client";

export default class Field {
  client: EloquaClient;
  objectName: string;
  bulkObjectName: string;

  constructor(
    client: EloquaClient,
    objectName: string,
    bulkObjectName: string
  ) {
    this.client = client;
    this.objectName = objectName;
    this.bulkObjectName = bulkObjectName;
  }

  getAll(options?: any) {
    return this.client._request({
      method: "GET",
      url: `/api/bulk/2.0/${this.bulkObjectName}/fields`,
      params: options,
    });
  }

  getAllWithDepth(options?: any) {
    return this.client._request({
      method: "GET",
      url: `/api/REST/1.0/assets/${this.objectName}/fields`,
      params: options,
    });
  }

  create(data: any) {
    return this.client._request({
      data,
      method: "POST",
      url: `/api/REST/1.0/assets/${this.objectName}/field`,
    });
  }

  update(id: number, data: any) {
    return this.client._request({
      data,
      method: "PUT",
      url: `/api/REST/1.0/assets/${this.objectName}/field/${id}`,
    });
  }

  delete(id: number) {
    return this.client._request({
      method: "DELETE",
      url: `/api/REST/1.0/assets/${this.objectName}/field/${id}`,
    });
  }
}
