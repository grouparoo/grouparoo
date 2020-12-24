export default class DataAttribute {
  client: any;

  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post("/data_attributes", data, f);
  }
  update(params, f) {
    return this.client.post("/data_attributes", params, f);
  }
  list(params, f) {
    return this.client.get("/data_attributes", params, f);
  }
}
