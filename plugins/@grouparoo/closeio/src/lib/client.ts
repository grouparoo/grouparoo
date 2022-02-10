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

  async findContactByEmail(email: string) {
    const id = await this.findContactIdByEmail(email);
    if (!id) {
      return null;
    }
    return await this.closeio.contact.read(id);
  }

  async findLeadIdByName(name: string) {
    const lead = await this.findLeadByName(name);
    return lead?.id;
  }

  async findContactIdByEmail(email: string) {
    const response = await this.closeio._post("/data/search/", {
      query: {
        queries: [
          {
            object_type: "contact",
            type: "object_type",
          },
          {
            related_object_type: "contact_email",
            related_query: {
              queries: [
                {
                  condition: {
                    mode: "full_words",
                    type: "text",
                    value: email,
                  },
                  field: {
                    field_name: "email",
                    object_type: "contact_email",
                    type: "regular_field",
                  },
                  type: "field_condition",
                },
              ],
              type: "and",
            },
            this_object_type: "contact",
            type: "has_related",
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

    return response.data[0].id;
  }
}
