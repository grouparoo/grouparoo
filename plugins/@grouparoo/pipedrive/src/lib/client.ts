import axios, { AxiosInstance } from "axios";

export class EnhancedPersonsController {
  request: AxiosInstance;
  client: any;

  constructor(client: any) {
    this.client = client;
    this.request = axios.create({
      baseURL: client.Configuration.getBaseUri(),
      params: {
        api_token: client.Configuration.apiToken,
      },
    });
  }

  async findPersonIdByEmail(email: string): Promise<number | null> {
    if (!email) return null;

    const {
      data,
    } = await this.client.SearchResultsController.getPerformASearchUsingASpecificFieldValue(
      {
        term: email,
        itemType: "person",
        fieldType: "personField",
        exactMatch: true,
        fieldKey: "email",
        returnItemIds: true,
      }
    );

    if (data.length == 0) return null;
    return data[0].id;
  }

  async updateAPerson(id: number, payload: any) {
    // Pipedrive's PersonController has an "updateAPerson", but it does not support clearing fields.
    // We define our own to be able to issue a JSON request that properly clears fields when necessary.
    const { data } = await this.request.put(`/persons/${id}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  }
}
