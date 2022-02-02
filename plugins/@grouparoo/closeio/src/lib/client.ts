import Closeio from "close.io";

export class CloseioClient {
  closeio: Closeio;

  constructor(apiKey: string) {
    this.closeio = new Closeio(apiKey);
  }

  async getCurrentUser() {
    return await this.closeio._get("/me");
  }

  async findLeadByName(name: string) {
    const response = await this.closeio.lead.search({ name });

    if (response.data.length === 0) {
      return null;
    }

    if (response.data[0].name !== name) {
      return null;
    }

    return response.data[0];
  }

  async findContactByName(name: string) {
    const id = await this.findContactIdByName(name);
    if (!id) {
      return null;
    }
    return await this.closeio.contact.read(id);
  }

  async findLeadIdByName(name: string) {
    const lead = await this.findLeadByName(name);
    return lead?.id;
  }

  async findContactIdByName(name: string) {
    const response = await this.closeio._post("/data/search/", {
      query: {
        queries: [
          {
            object_type: "contact",
            type: "object_type",
          },
          {
            condition: {
              mode: "full_words",
              type: "text",
              value: name,
            },
            field: {
              field_name: "name",
              object_type: "contact",
              type: "regular_field",
            },
            type: "field_condition",
          },
        ],
        type: "and",
      },
      _fields: {
        contact: ["id", "name"],
      },
    });

    if (response.data.length === 0) {
      return null;
    }

    if (response.data[0].name !== name) {
      return null;
    }

    return response.data[0].id;
  }
}
