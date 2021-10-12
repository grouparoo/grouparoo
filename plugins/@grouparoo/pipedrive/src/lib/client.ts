import axios, { AxiosInstance } from "axios";

export class PipedriveClient {
  request: AxiosInstance;

  constructor(apiToken: string) {
    this.request = axios.create({
      baseURL: "https://api.pipedrive.com/v1",
      params: {
        api_token: apiToken,
      },
    });
  }

  async getCurrentUser(): Promise<Record<string, any>> {
    const { data } = await this.request.get<Record<string, any>>("/users/me");
    return data.data;
  }

  async findPersonIdByEmail(email: string): Promise<number> {
    if (!email) return null;

    const { data } = await this.request.get<Record<string, any>>(
      "/persons/search",
      {
        params: {
          term: email,
          fields: "email",
          exact_match: true,
        },
      }
    );

    if (data.data.items.length == 0) return null;
    return data.data.items[0].item.id;
  }

  async getPerson(id: number): Promise<Record<string, any>> {
    const { data } = await this.request.get<Record<string, any>>(
      `/persons/${id}`
    );
    return data.data;
  }

  async createPerson(
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    const { data } = await this.request.post(`/persons`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  }

  async updatePerson(
    id: number,
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    const { data } = await this.request.put(`/persons/${id}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  }

  async deletePerson(id: number): Promise<Record<string, any>> {
    const { data } = await this.request.delete(`/persons/${id}`);
    return data;
  }

  async getAllPersonFields(): Promise<Record<string, any>[]> {
    const { data } = await this.request.get<Record<string, any>>(
      "/personFields"
    );
    return data.data;
  }

  async createPersonField(
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    const { data } = await this.request.post(`/personFields`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  }

  async bulkDeletePersonFields(ids: number[]): Promise<Record<string, any>> {
    const { data } = await this.request.delete(`/personFields`, {
      params: { ids: ids.join(",") },
    });

    return data;
  }

  async getAllPersonFilters(): Promise<Record<string, any>[]> {
    const { data } = await this.request.get<Record<string, any>>("/filters", {
      params: { type: "people" },
    });
    return data.data;
  }

  async createFilter(payload: Record<string, any>) {
    const { data } = await this.request.post(`/filters`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  }

  async bulkDeleteFilters(ids: number[]): Promise<Record<string, any>> {
    const { data } = await this.request.delete(`/filters`, {
      params: { ids: ids.join(",") },
    });

    return data;
  }
}
