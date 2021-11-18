import axios, { AxiosInstance } from "axios";

type Entity = 'persons' | 'organizations';
type EntityField = 'personFields' | 'organizationFields';

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

  async getEntityById(entity: Entity, id: number): Promise<Record<string, any>> {
    const { data } = await this.request.get<Record<string, any>>(
      `/${entity}/${id}`);
    return data.data;
  }

  async getPerson(id: number): Promise<Record<string, any>> {
    return await this.getEntityById('persons', id);
  }

  async getOrganization(id: number): Promise<Record<string, any>> {
    return await this.getEntityById('organizations', id);
  }

  async createEntity(
    entity: Entity,
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    const { data } = await this.request.post(`/${entity}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  }

  async createPerson(
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    return await this.createEntity('persons', payload);
  }

  async createOrganization(
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    return await this.createEntity('organizations', payload);
  }

  async updateEntity(
    entity: Entity,
    id: number,
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    const { data } = await this.request.put(`/${entity}/${id}`, payload, {
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
    return await this.updateEntity('persons', id, payload);
  }

  async updateOrganization(
    id: number,
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    return await this.updateEntity('organizations', id, payload);
  }

  async deleteEntity(
    entity: Entity,
    id: number
  ): Promise<Record<string, any>> {
    const { data } = await this.request.delete(`/${entity}/${id}`);
    return data;
  }

  async deletePerson(id: number): Promise<Record<string, any>> {
    return await this.deleteEntity('persons', id);
  }

  async deleteOrganization(id: number): Promise<Record<string, any>> {
    return await this.deleteEntity('organizations', id);
  }

  async getAllFields(entityField: EntityField): Promise<Record<string, any>[]> {
    const { data } = await this.request.get<Record<string, any>>(
      `/${entityField}`
    );
    return data.data;
  }

  async getAllPersonFields(): Promise<Record<string, any>[]> {
    return await this.getAllFields('personFields');
  }

  async getAllOrganizationFields(): Promise<Record<string, any>[]> {
    return await this.getAllFields('organizationFields');
  }

  async createField(
    entityField: EntityField,
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    const { data } = await this.request.post(`/${entityField}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  }

  async createPersonField(
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    return await this.createField('personFields', payload);
  }

  async createOrganizationField(
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    return await this.createField('personFields', payload);
  }

  async bulkDeleteFields(
    entityField: EntityField,
    ids: number[]
  ): Promise<Record<string, any>> {
    const { data } = await this.request.delete(`/${entityField}`, {
      params: { ids: ids.join(",") },
    });

    return data;
  }

  async bulkDeletePersonFields(ids: number[]): Promise<Record<string, any>> {
    return this.bulkDeleteFields('personFields', ids);
  }

  async bulkDeleteOrganizationFields(ids: number[]): Promise<Record<string, any>> {
    return this.bulkDeleteFields('organizationFields', ids);
  }

  async getAllPersonFilters(): Promise<Record<string, any>[]> {
    const { data } = await this.request.get<Record<string, any>>("/filters", {
      params: { type: "people" },
    });
    return data.data;
  }

  async getAllOrganizationFilters(): Promise<Record<string, any>[]> {
    const { data } = await this.request.get<Record<string, any>>("/filters", {
      params: { type: "org" },
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
