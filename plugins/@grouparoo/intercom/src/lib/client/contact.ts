export default class Contact {
  client: any;

  constructor(client) {
    this.client = client;
  }
  search(query, f) {
    return this.client.post(`/contacts/search`, { query }, f);
  }
  list(f) {
    return this.client.get(`/contacts`, { per_page: 150 }, f);
  }
  create(data, f) {
    return this.client.post(`/contacts`, data, f);
  }
  show(contactId, f) {
    return this.client.get(`/contacts/${contactId}`, {}, f);
  }
  update(contactId, data, f) {
    return this.client.put(`/contacts/${contactId}`, data, f);
  }
  delete(contactId, f) {
    return this.client.delete(`/contacts/${contactId}`, {}, f);
  }
  archive(contactId, f) {
    return this.client.post(`/contacts/${contactId}/archive`, {}, f);
  }
  unarchive(contactId, f) {
    return this.client.post(`/contacts/${contactId}/unarchive`, {}, f);
  }
  tags(contactId, f) {
    return this.client.get(`/contacts/${contactId}/tags`, {}, f);
  }
  tag(contactId, tagId, f) {
    return this.client.post(`/contacts/${contactId}/tags`, { id: tagId }, f);
  }
  untag(contactId, tagId, f) {
    return this.client.delete(`/contacts/${contactId}/tags/${tagId}`, {}, f);
  }
}
