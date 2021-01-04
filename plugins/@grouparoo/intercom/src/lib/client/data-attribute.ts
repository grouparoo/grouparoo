export default class DataAttribute {
  client: any;

  constructor(client) {
    this.client = client;
  }
  list(params, f) {
    return this.client.get("/data_attributes", params, f);
  }
}
