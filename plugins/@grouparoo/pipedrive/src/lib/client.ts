import axios, { AxiosInstance } from "axios";
import { objectCache } from "@grouparoo/core";
import { PipedriveCacheData } from "./common/destinationMappingOptions";

type Entity = "persons" | "organizations";
type EntityField = "personFields" | "organizationFields";
type FilterType = "people" | "org";

const EntityFieldMapping: Record<Entity, EntityField> = {
  persons: "personFields",
  organizations: "organizationFields",
};

const FilterTypeMapping: Record<Entity, FilterType> = {
  persons: "people",
  organizations: "org",
};

export class EntityCalls {
  fields: FieldCalls;
  filters: FilterCalls;

  constructor(private client: PipedriveClient, private entity: Entity) {
    this.fields = new FieldCalls(client, EntityFieldMapping[entity]);
    this.filters = new FilterCalls(client, FilterTypeMapping[entity]);
  }

  async getById(id: number): Promise<Record<string, any>> {
    const { data } = await this.client.request.get<Record<string, any>>(
      `/${this.entity}/${id}`
    );
    return data.data;
  }

  async create(payload: Record<string, any>): Promise<Record<string, any>> {
    const { data } = await this.client.request.post(
      `/${this.entity}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  }

  async update(
    id: number,
    payload: Record<string, any>
  ): Promise<Record<string, any>> {
    const { data } = await this.client.request.put(
      `/${this.entity}/${id}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  }

  async delete(id: number): Promise<Record<string, any>> {
    const { data } = await this.client.request.delete(`/${this.entity}/${id}`);
    return data;
  }
}

export class FieldCalls {
  constructor(
    private client: PipedriveClient,
    private entityField: EntityField
  ) {}

  async getAll(): Promise<Record<string, any>[]> {
    const { data } = await this.client.request.get<Record<string, any>>(
      `/${this.entityField}`
    );
    return data.data;
  }

  async create(payload: Record<string, any>): Promise<Record<string, any>> {
    const { data } = await this.client.request.post(
      `/${this.entityField}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  }

  async bulkDelete(ids: number[]): Promise<Record<string, any>> {
    const { data } = await this.client.request.delete(`/${this.entityField}`, {
      params: { ids: ids.join(",") },
    });

    return data;
  }
}

export class FilterCalls {
  constructor(
    private client: PipedriveClient,
    private filterType: FilterType
  ) {}

  async getAll(): Promise<Record<string, any>[]> {
    const { data } = await this.client.request.get<Record<string, any>>(
      "/filters",
      {
        params: { type: this.filterType },
      }
    );
    return data.data;
  }

  async create(payload: Record<string, any>) {
    const { data } = await this.client.request.post(
      `/filters`,
      {
        ...payload,
        type: this.filterType,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  }

  async bulkDelete(ids: number[]): Promise<Record<string, any>> {
    const { data } = await this.client.request.delete(`/filters`, {
      params: { ids: ids.join(",") },
    });

    return data;
  }
}

export class PipedriveClient {
  request: AxiosInstance;

  persons: EntityCalls;
  organizations: EntityCalls;

  constructor(apiToken: string, cacheData: PipedriveCacheData) {
    this.request = axios.create({
      baseURL: "https://api.pipedrive.com/v1",
      params: {
        api_token: apiToken,
      },
    });

    this.request.interceptors.response.use(
      async (response) => {
        await objectCache(
          {
            objectId: cacheData.appId,
            cacheKey: ["pipedrive:parallelism", cacheData.appOptions],
            cacheDurationMs:
              parseInt(response.headers["x-ratelimit-reset"] || "2") * 1000,
            read: false, // Write-only
          },
          async () => parseInt(response.headers["x-ratelimit-remaining"])
        );
        return response;
      },
      (error) => {
        if (error.code === "ECONNRESET") {
          // console.log("ECONNRESET, retry after 2 seconds...");
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(this.request.request(error.config));
            }, 2000);
          });
        }
        return Promise.reject(error);
      }
    );

    this.persons = new EntityCalls(this, "persons");
    this.organizations = new EntityCalls(this, "organizations");
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

  async findOrganizationIdByName(name: string): Promise<number> {
    name = name?.trim();

    if (!name) return null;

    const { data } = await this.request.get<Record<string, any>>(
      "/organizations/search",
      {
        params: {
          term: name,
          fields: "name",
        },
      }
    );

    if (data.data.items.length == 0) return null;
    return data.data.items[0].item.id;
  }
}
