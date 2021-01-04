export default class Tag {
  client: any;

  constructor(client) {
    this.client = client;
  }
  create(data, f) {
    return this.client.post(`/tags`, data, f);
  }
  list(f) {
    return this.client.get("/tags", {}, f);
  }
}
